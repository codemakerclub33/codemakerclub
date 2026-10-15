import { NextResponse, type NextRequest } from 'next/server'
import { createAdminClient } from '@/lib/supabase/admin'
import { isSupabaseAdminConfigured } from '@/lib/supabase/env'
import { trimiteEmail } from '@/lib/emailResend'
import { module as moduleCurriculum } from '@/lib/mockData'
import { adaugaZile, pretAutodidact, zileRamase, ZILE_TOLERANTA } from '@/lib/autodidact'
import {
  mesajAutodidactExpira,
  subiectAutodidactExpira,
} from '@/lib/notificari'

/** Cu câte zile înainte de expirare trimitem emailul. */
const ZILE_INAINTE = 3

function dataRo(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('ro-RO')
}

/**
 * Rulat zilnic de Vercel Cron (vezi vercel.json).
 * Trimite părintelui un email cu cel mult 3 zile înainte ca un acces Autodidact plătit să expire,
 * cu prețul următorului modul (200 / 150 / 100 lei, după lanțul de module consecutive).
 */
export async function GET(request: NextRequest) {
  const secret = process.env.CRON_SECRET?.trim()
  if (!secret) {
    return NextResponse.json({ error: 'CRON_SECRET lipsește.' }, { status: 500 })
  }
  if (request.headers.get('authorization') !== `Bearer ${secret}`) {
    return NextResponse.json({ error: 'Neautorizat.' }, { status: 401 })
  }
  if (!isSupabaseAdminConfigured()) {
    return NextResponse.json({ error: 'Supabase Admin neconfigurat.' }, { status: 500 })
  }

  const admin = createAdminClient()
  const azi = new Date().toISOString().slice(0, 10)

  const { data: accesuri, error } = await admin
    .from('acces_autodidact')
    .select('id, cursant_id, modul_id, data_start, data_sfarsit, gratuit')
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  const toate = (accesuri ?? []).map(a => ({
    id: a.id as string,
    cursant_id: a.cursant_id as string,
    modul_id: a.modul_id as string,
    data_start: a.data_start as string,
    data_sfarsit: a.data_sfarsit as string,
    gratuit: Boolean(a.gratuit),
  }))

  const rezultat = { verificate: 0, trimise: 0, sarite: 0, erori: [] as string[] }

  for (const a of toate) {
    // Doar accesuri plătite, active, care expiră în următoarele zile
    if (a.gratuit) continue
    if (!(a.data_start <= azi && azi <= a.data_sfarsit)) continue
    const zile = zileRamase(a, azi)
    if (zile < 1 || zile > ZILE_INAINTE) continue
    rezultat.verificate++

    const alteleCursantului = toate.filter(x => x.cursant_id === a.cursant_id)
    // Dacă are deja un acces care se termină după acesta, a reînnoit deja
    if (alteleCursantului.some(x => x.id !== a.id && x.data_sfarsit > a.data_sfarsit)) {
      rezultat.sarite++
      continue
    }

    const { data: cursant } = await admin
      .from('cursanti')
      .select('prenume, email_parinte, activ')
      .eq('id', a.cursant_id)
      .maybeSingle()
    if (!cursant || !cursant.activ || !cursant.email_parinte) {
      rezultat.sarite++
      continue
    }

    // „Rezervăm” emailul înainte de trimitere: indexul unic împiedică dubla trimitere
    const { error: insErr } = await admin.from('notificari_email').insert({
      cursant_id: a.cursant_id,
      tip: 'autodidact_expira',
      email_catre: cursant.email_parinte,
      sedinte_ramase: 0,
      acces_id: a.id,
    })
    if (insErr) {
      // 23505 = deja trimis; alt cod (ex. migrare nerulată) = nu trimitem nimic
      if (insErr.code === '23505') rezultat.sarite++
      else rezultat.erori.push(`${a.id}: ${insErr.message}`)
      continue
    }

    // Prețul următorului modul, dacă reînnoiește chiar la expirare (lanț fără întrerupere)
    const platite = alteleCursantului.filter(x => !x.gratuit)
    const { pret } = pretAutodidact(platite, a.data_sfarsit)
    const nume = moduleCurriculum.find(m => m.id === a.modul_id)?.nume ?? 'Autodidact'

    const rez = await trimiteEmail({
      to: cursant.email_parinte,
      subject: subiectAutodidactExpira(cursant.prenume),
      text: mesajAutodidactExpira({
        prenume: cursant.prenume,
        modul: nume,
        dataSfarsit: dataRo(a.data_sfarsit),
        zileRamase: zile,
        pret,
        limitaReducere: dataRo(adaugaZile(a.data_sfarsit, ZILE_TOLERANTA)),
      }),
    })

    if (rez.ok) {
      rezultat.trimise++
    } else {
      // Eșec: eliberăm rezervarea ca să se reîncerce mâine
      await admin.from('notificari_email').delete().eq('acces_id', a.id).eq('tip', 'autodidact_expira')
      rezultat.erori.push(`${a.id}: ${rez.error}`)
    }
  }

  return NextResponse.json({ ok: rezultat.erori.length === 0, ...rezultat })
}
