'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'
import { isSupabaseAdminConfigured, isSupabaseConfigured } from '@/lib/supabase/env'

const MAX_PE_ZI = 5

export type FeedbackItem = {
  id: string
  rol: 'parinte' | 'elev'
  autor_nume: string
  mesaj: string
  citit: boolean
  created_at: string
}

/** Părinții și elevii trimit feedback (maxim 5 pe zi, ca să nu se abuzeze). */
export async function trimiteFeedbackAction(
  mesaj: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!isSupabaseConfigured() || !isSupabaseAdminConfigured()) {
    return { ok: false, error: 'Serviciul nu este disponibil acum.' }
  }
  const text = (mesaj ?? '').trim()
  if (text.length < 3) return { ok: false, error: 'Scrie cel puțin câteva cuvinte.' }
  if (text.length > 2000) return { ok: false, error: 'Mesajul este prea lung (maxim 2000 de caractere).' }

  const supabase = await createClient()
  const { data: auth } = await supabase.auth.getUser()
  if (!auth.user) return { ok: false, error: 'Trebuie să fii autentificat.' }

  const admin = createAdminClient()
  const { data: profil } = await admin
    .from('profile')
    .select('rol, cursant_id, nume_afisat')
    .eq('id', auth.user.id)
    .maybeSingle()
  if (!profil || (profil.rol !== 'parinte' && profil.rol !== 'elev')) {
    return { ok: false, error: 'Doar părinții și elevii pot trimite feedback.' }
  }

  const acum24h = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()
  const { count } = await admin
    .from('feedback')
    .select('id', { count: 'exact', head: true })
    .eq('user_id', auth.user.id)
    .gte('created_at', acum24h)
  if ((count ?? 0) >= MAX_PE_ZI) {
    return { ok: false, error: 'Ai trimis deja mai multe mesaje azi. Încearcă mâine.' }
  }

  const { error } = await admin.from('feedback').insert({
    user_id: auth.user.id,
    rol: profil.rol,
    autor_nume: profil.nume_afisat ?? '',
    cursant_id: profil.rol === 'elev' ? profil.cursant_id : null,
    mesaj: text,
  })
  if (error) {
    const lipsa = /feedback/i.test(error.message)
    return { ok: false, error: lipsa ? 'Serviciul de feedback nu este încă activat.' : 'Nu am putut trimite mesajul.' }
  }
  return { ok: true }
}

async function requireAdmin(): Promise<{ ok: true } | { ok: false; error: string }> {
  if (!isSupabaseConfigured() || !isSupabaseAdminConfigured()) {
    return { ok: false, error: 'Supabase nu e configurat complet.' }
  }
  const supabase = await createClient()
  const { data: auth } = await supabase.auth.getUser()
  if (!auth.user) return { ok: false, error: 'Trebuie să fii autentificat.' }
  const { data: profil } = await createAdminClient()
    .from('profile')
    .select('rol')
    .eq('id', auth.user.id)
    .maybeSingle()
  if (profil?.rol !== 'admin') return { ok: false, error: 'Doar adminul vede feedback-ul.' }
  return { ok: true }
}

export async function listFeedbackAction(): Promise<
  { ok: true; data: FeedbackItem[] } | { ok: false; error: string }
> {
  const gate = await requireAdmin()
  if (!gate.ok) return gate
  const { data, error } = await createAdminClient()
    .from('feedback')
    .select('id, rol, autor_nume, mesaj, citit, created_at')
    .order('created_at', { ascending: false })
    .limit(500)
  if (error) {
    return {
      ok: false,
      error: /feedback/i.test(error.message)
        ? 'Tabelul „feedback” lipsește. Rulează migrarea 20261015220000_feedback.sql.'
        : error.message,
    }
  }
  return { ok: true, data: (data ?? []) as FeedbackItem[] }
}

export async function setCititFeedbackAction(
  id: string,
  citit: boolean,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const gate = await requireAdmin()
  if (!gate.ok) return gate
  if (!/^[0-9a-f-]{36}$/i.test(id)) return { ok: false, error: 'ID invalid.' }
  const { error } = await createAdminClient().from('feedback').update({ citit }).eq('id', id)
  return error ? { ok: false, error: error.message } : { ok: true }
}

export async function stergeFeedbackAction(
  id: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const gate = await requireAdmin()
  if (!gate.ok) return gate
  if (!/^[0-9a-f-]{36}$/i.test(id)) return { ok: false, error: 'ID invalid.' }
  const { error } = await createAdminClient().from('feedback').delete().eq('id', id)
  return error ? { ok: false, error: error.message } : { ok: true }
}
