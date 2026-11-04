import { createAdminClient } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'
import { isSupabaseAdminConfigured, isSupabaseConfigured } from '@/lib/supabase/env'
import { lectii, module as moduleCurriculum } from '@/lib/mockData'
import { esteActiv } from '@/lib/autodidact'
import { calculeazaSoldCursant, lectiiBlocateDeSold } from '@/lib/soldSedinte'
import { lectiePentruTts } from '@/lib/ttsRegistry'

export type AccesLectie =
  | { ok: true }
  | { ok: false; status: number; error: string; motiv?: 'sold' }

/**
 * Conținutul lecțiilor (text și audio) este plătit: doar personalul (admin/profesor), sau
 * elevul care are lecția deblocată de profesor (cu sold de ședințe peste pragul de blocare)
 * ori un acces Autodidact valid la modulul respectiv.
 */
export async function verificaAccesLectie(modulId: string, ordine: number): Promise<AccesLectie> {
  if (!isSupabaseConfigured() || !isSupabaseAdminConfigured()) {
    return { ok: false, status: 503, error: 'Serviciu indisponibil.' }
  }

  const supabase = await createClient()
  const { data: auth } = await supabase.auth.getUser()
  if (!auth.user) return { ok: false, status: 401, error: 'Neautentificat.' }

  const admin = createAdminClient()
  const { data: profil } = await admin
    .from('profile')
    .select('rol, cursant_id')
    .eq('id', auth.user.id)
    .maybeSingle()
  if (!profil) return { ok: false, status: 403, error: 'Acces interzis.' }

  if (profil.rol === 'admin' || profil.rol === 'profesor') return { ok: true }
  if (profil.rol !== 'elev' || !profil.cursant_id) {
    return { ok: false, status: 403, error: 'Lecția nu este deblocată.' }
  }

  const modul = moduleCurriculum.find(m => m.id === modulId)
  const lectie = lectii.find(l => l.modul_id === modulId && l.ordine === ordine)
  if (!modul || !lectie) return { ok: false, status: 403, error: 'Lecția nu este deblocată.' }

  let blocatDeSold = false

  const { data: bifat } = await admin
    .from('progres')
    .select('id')
    .eq('cursant_id', profil.cursant_id)
    .eq('lectie_id', lectie.id)
    .eq('bifat', true)
    .maybeSingle()

  if (bifat) {
    const [{ data: abonamente }, { data: sedinte }] = await Promise.all([
      admin
        .from('abonamente')
        .select('id, cursant_id, sedinte_incluse, activ')
        .eq('cursant_id', profil.cursant_id),
      admin
        .from('sedinte')
        .select('cursant_id, consuma_sedinta')
        .eq('cursant_id', profil.cursant_id)
        .eq('consuma_sedinta', true),
    ])
    const { sold } = calculeazaSoldCursant(profil.cursant_id, abonamente ?? [], sedinte ?? [])
    if (!lectiiBlocateDeSold(sold)) return { ok: true }
    blocatDeSold = true
  }

  const azi = new Date().toISOString().slice(0, 10)
  const { data: accesuri } = await admin
    .from('acces_autodidact')
    .select('data_start, data_sfarsit')
    .eq('cursant_id', profil.cursant_id)
    .eq('modul_id', modulId)
  const autodidactActiv = (accesuri ?? []).some(a =>
    esteActiv({ data_start: a.data_start as string, data_sfarsit: a.data_sfarsit as string }, azi),
  )
  if (autodidactActiv) return { ok: true }

  if (blocatDeSold) {
    return {
      ok: false,
      status: 403,
      error: 'Lecțiile sunt în pauză până la reînnoirea abonamentului.',
      motiv: 'sold',
    }
  }
  return { ok: false, status: 403, error: 'Lecția nu este deblocată.' }
}

/** Pentru rutele /api/tts/...: răspunsul de refuz, sau null dacă audio-ul poate fi servit. */
export async function refuzAccesTts(request: Request): Promise<Response | null> {
  const headers = { 'Cache-Control': 'private, no-store' }
  const lectie = lectiePentruTts(new URL(request.url))
  if (!lectie) return Response.json({ error: 'Lecție inexistentă.' }, { status: 404, headers })
  const acces = await verificaAccesLectie(lectie.modulId, lectie.ordine)
  if (acces.ok) return null
  return Response.json({ error: acces.error, motiv: acces.motiv }, { status: acces.status, headers })
}
