import { NextResponse } from 'next/server'
import { getLectieMarkdown } from '@/lib/lectiiContent'
import { createAdminClient } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'
import { isSupabaseAdminConfigured, isSupabaseConfigured } from '@/lib/supabase/env'
import { lectii, module as moduleCurriculum } from '@/lib/mockData'
import { esteActiv } from '@/lib/autodidact'

const NO_STORE = { 'Cache-Control': 'private, no-store' }

function raspuns(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: NO_STORE })
}

/**
 * Conținutul lecțiilor este plătit: doar personalul (admin/profesor), sau elevul care are
 * lecția deblocată de profesor ori un acces Autodidact valid la modulul respectiv.
 */
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ modulId: string; ordine: string }> },
) {
  const { modulId, ordine } = await ctx.params
  const n = parseInt(ordine, 10)
  if (!modulId || !Number.isInteger(n) || n < 1) {
    return raspuns({ error: 'Parametri invalizi' }, 400)
  }

  if (!isSupabaseConfigured() || !isSupabaseAdminConfigured()) {
    return raspuns({ error: 'Serviciu indisponibil.' }, 503)
  }

  const supabase = await createClient()
  const { data: auth } = await supabase.auth.getUser()
  if (!auth.user) return raspuns({ error: 'Neautentificat.' }, 401)

  const admin = createAdminClient()
  const { data: profil } = await admin
    .from('profile')
    .select('rol, cursant_id')
    .eq('id', auth.user.id)
    .maybeSingle()
  if (!profil) return raspuns({ error: 'Acces interzis.' }, 403)

  let permis = profil.rol === 'admin' || profil.rol === 'profesor'

  if (!permis && profil.rol === 'elev' && profil.cursant_id) {
    const modul = moduleCurriculum.find(m => m.id === modulId)
    const lectie = lectii.find(l => l.modul_id === modulId && l.ordine === n)
    if (modul && lectie) {
      const { data: bifat } = await admin
        .from('progres')
        .select('id')
        .eq('cursant_id', profil.cursant_id)
        .eq('lectie_id', lectie.id)
        .eq('bifat', true)
        .maybeSingle()
      permis = Boolean(bifat)

      if (!permis) {
        const azi = new Date().toISOString().slice(0, 10)
        const { data: accesuri } = await admin
          .from('acces_autodidact')
          .select('data_start, data_sfarsit')
          .eq('cursant_id', profil.cursant_id)
          .eq('modul_id', modulId)
        permis = (accesuri ?? []).some(a =>
          esteActiv({ data_start: a.data_start as string, data_sfarsit: a.data_sfarsit as string }, azi),
        )
      }
    }
  }

  if (!permis) return raspuns({ error: 'Lecția nu este deblocată.' }, 403)

  const markdown = getLectieMarkdown(modulId, n)
  return raspuns({ markdown: markdown ?? null })
}
