'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'
import { incarcaPermisiuni } from '@/lib/permisiuniServer'
import { normalizeazaPermisiuni, PERMISIUNI_TOATE, type PermisiuniProfesor } from '@/lib/permisiuni'
import { isSupabaseAdminConfigured, isSupabaseConfigured } from '@/lib/supabase/env'

async function requireStaff(): Promise<
  { ok: true; userId: string; rol: string } | { ok: false; error: string }
> {
  if (!isSupabaseConfigured() || !isSupabaseAdminConfigured()) {
    return { ok: false, error: 'Supabase nu e configurat complet.' }
  }
  const supabase = await createClient()
  const { data: auth } = await supabase.auth.getUser()
  if (!auth.user) {
    return { ok: false, error: 'Trebuie să fii autentificat.' }
  }

  const admin = createAdminClient()
  const { data: profile } = await admin
    .from('profile')
    .select('rol')
    .eq('id', auth.user.id)
    .maybeSingle()

  if (!profile || (profile.rol !== 'admin' && profile.rol !== 'profesor')) {
    return { ok: false, error: 'Acces interzis.' }
  }
  return { ok: true, userId: auth.user.id, rol: profile.rol }
}

async function requireAdmin(): Promise<
  { ok: true; userId: string } | { ok: false; error: string }
> {
  const staff = await requireStaff()
  if (!staff.ok) return staff
  if (staff.rol !== 'admin') {
    return { ok: false, error: 'Doar adminul poate gestiona profesorii.' }
  }
  return { ok: true, userId: staff.userId }
}

export type StaffMember = {
  id: string
  email: string
  nume: string
  rol: 'admin' | 'profesor'
  /** Doar pentru profesori; vizibile doar adminului. */
  permisiuni?: PermisiuniProfesor
}

export async function listStaffAction(): Promise<
  { ok: true; data: StaffMember[] } | { ok: false; error: string; data: [] }
> {
  const gate = await requireStaff()
  if (!gate.ok) return { ok: false, error: gate.error, data: [] }

  const admin = createAdminClient()
  let { data: profiles, error } = (await admin
    .from('profile')
    .select('id, rol, nume_afisat, permisiuni')
    .in('rol', ['admin', 'profesor'])
    .order('created_at', { ascending: true })) as unknown as {
    data: Array<{ id: string; rol: string; nume_afisat: string | null; permisiuni?: unknown }> | null
    error: { message: string } | null
  }
  if (error) {
    // Migrarea „permisiuni” nu e rulată încă: citim fără coloană.
    const vechi = await admin
      .from('profile')
      .select('id, rol, nume_afisat')
      .in('rol', ['admin', 'profesor'])
      .order('created_at', { ascending: true })
    profiles = vechi.data
    error = vechi.error
  }

  if (error) return { ok: false, error: error.message, data: [] }

  const { data: listed } = await admin.auth.admin.listUsers({ perPage: 1000 })
  const byId = new Map((listed?.users ?? []).map(u => [u.id, u]))

  const data: StaffMember[] = (profiles ?? [])
    .filter(p => p.rol === 'admin' || p.rol === 'profesor')
    .map(p => {
      const u = byId.get(p.id)
      const isAdmin = p.rol === 'admin'
      return {
        id: p.id,
        // Nu expunem emailul de login al adminului către profesori
        email: isAdmin ? '' : (u?.email ?? '—'),
        nume: p.nume_afisat || (isAdmin ? 'Admin' : u?.email) || '—',
        rol: p.rol as 'admin' | 'profesor',
        ...(gate.rol === 'admin' && !isAdmin ? { permisiuni: normalizeazaPermisiuni(p.permisiuni) } : {}),
      }
    })

  return { ok: true, data }
}

export async function adaugaProfesorAction(input: {
  nume: string
  email: string
  parola: string
}): Promise<{ ok: true; email: string } | { ok: false; error: string }> {
  const gate = await requireAdmin()
  if (!gate.ok) return gate

  const nume = input.nume.trim()
  const email = input.email.trim().toLowerCase()
  const parola = input.parola

  if (!nume) return { ok: false, error: 'Numele e obligatoriu.' }
  if (!email.includes('@')) return { ok: false, error: 'Email invalid.' }
  if (parola.length < 8) return { ok: false, error: 'Parola trebuie să aibă minim 8 caractere.' }

  const admin = createAdminClient()

  const { data: listed } = await admin.auth.admin.listUsers({ perPage: 1000 })
  if (listed?.users?.some(u => u.email?.toLowerCase() === email)) {
    return { ok: false, error: 'Există deja un cont cu acest email.' }
  }

  const { data, error } = await admin.auth.admin.createUser({
    email,
    password: parola,
    email_confirm: true,
    app_metadata: { rol: 'profesor' },
    user_metadata: { nume },
  })

  if (error || !data.user) {
    return { ok: false, error: error?.message ?? 'Nu am putut crea contul.' }
  }

  const { error: pErr } = await admin.from('profile').insert({
    id: data.user.id,
    rol: 'profesor',
    cursant_id: null,
    nume_afisat: nume,
  })

  if (pErr) {
    await admin.auth.admin.deleteUser(data.user.id)
    return { ok: false, error: pErr.message }
  }

  return { ok: true, email }
}

/** Permisiunile utilizatorului curent (pentru ascunderea butoanelor în interfață). */
export async function permisiuniMeleAction(): Promise<
  { ok: true; rol: 'admin' | 'profesor'; permisiuni: PermisiuniProfesor } | { ok: false; error: string }
> {
  const gate = await requireStaff()
  if (!gate.ok) return gate
  if (gate.rol === 'admin') return { ok: true, rol: 'admin', permisiuni: PERMISIUNI_TOATE }
  const permisiuni = await incarcaPermisiuni(createAdminClient(), gate.userId)
  return { ok: true, rol: 'profesor', permisiuni }
}

export async function seteazaPermisiuniAction(
  profesorId: string,
  permisiuni: PermisiuniProfesor,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const gate = await requireAdmin()
  if (!gate.ok) return gate
  if (!/^[0-9a-f-]{36}$/i.test(profesorId)) return { ok: false, error: 'Profesor invalid.' }
  const admin = createAdminClient()
  const { data: p } = await admin.from('profile').select('rol').eq('id', profesorId).maybeSingle()
  if (p?.rol !== 'profesor') return { ok: false, error: 'Profesorul nu a fost găsit.' }
  const { error } = await admin
    .from('profile')
    .update({ permisiuni: normalizeazaPermisiuni(permisiuni) })
    .eq('id', profesorId)
  if (error) {
    return {
      ok: false,
      error: /permisiuni/.test(error.message)
        ? 'Rulează migrarea SQL „permisiuni_profesor” în Supabase.'
        : error.message,
    }
  }
  return { ok: true }
}
