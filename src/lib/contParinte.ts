import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '@/lib/supabase/types'
import { genereazaParola } from '@/lib/authHelpers'

type Admin = SupabaseClient<Database>

export type SincronizareParinte =
  | { ok: true; userId: string; actiune: 'existent' | 'redenumit' | 'creat' | 'neschimbat'; parola?: string }
  | { ok: false; error: string }

/**
 * Face ca „emailul părintelui” din fișa cursantului să corespundă unui cont real de părinte.
 * - există deja un cont cu emailul nou → îl leagă de copil (și dezleagă conturile vechi ale copilului);
 * - altfel, dacă părintele vechi are doar acest copil → îi schimbă emailul (își păstrează parola);
 * - altfel, dacă `creeaza` e true → creează un cont nou cu parolă generată (returnată în `parola`).
 */
export async function sincronizeazaContParinte(
  admin: Admin,
  cursantId: string,
  emailNou: string,
  opts: { creeaza: boolean; numeCursant: string },
): Promise<SincronizareParinte> {
  const email = emailNou.trim().toLowerCase()
  const { data: listed } = await admin.auth.admin.listUsers({ perPage: 1000 })
  const useri = listed?.users ?? []
  const existent = useri.find(u => u.email?.toLowerCase() === email)

  const { data: legaturi } = await admin
    .from('parinte_cursanti')
    .select('parinte_id')
    .eq('cursant_id', cursantId)
  const legati = (legaturi ?? []).map(l => l.parinte_id)

  async function dezleagaAlteleDecat(userId: string) {
    const altii = legati.filter(id => id !== userId)
    if (altii.length > 0) {
      await admin.from('parinte_cursanti').delete().eq('cursant_id', cursantId).in('parinte_id', altii)
    }
  }

  if (existent) {
    const { data: rol } = await admin.from('profile').select('rol').eq('id', existent.id).maybeSingle()
    if (rol && rol.rol !== 'parinte') {
      return { ok: false, error: 'Emailul acesta aparține unui cont de personal. Folosește emailul părintelui.' }
    }
    if (legati.includes(existent.id) && legati.length === 1) {
      return { ok: true, userId: existent.id, actiune: 'neschimbat' }
    }
    await admin.from('parinte_cursanti').upsert({ parinte_id: existent.id, cursant_id: cursantId })
    await dezleagaAlteleDecat(existent.id)
    return { ok: true, userId: existent.id, actiune: 'existent' }
  }

  // Emailul nou nu are cont. Dacă părintele vechi are doar acest copil, doar îi schimbăm emailul.
  for (const veche of legati) {
    const { count } = await admin
      .from('parinte_cursanti')
      .select('cursant_id', { count: 'exact', head: true })
      .eq('parinte_id', veche)
    const { data: rol } = await admin.from('profile').select('rol').eq('id', veche).maybeSingle()
    if ((count ?? 0) === 1 && rol?.rol === 'parinte') {
      const { error } = await admin.auth.admin.updateUserById(veche, { email, email_confirm: true })
      if (error) return { ok: false, error: error.message }
      await dezleagaAlteleDecat(veche)
      return { ok: true, userId: veche, actiune: 'redenumit' }
    }
  }

  if (!opts.creeaza) {
    return { ok: true, userId: '', actiune: 'neschimbat' }
  }

  const parola = genereazaParola(8)
  const { data: nou, error } = await admin.auth.admin.createUser({
    email,
    password: parola,
    email_confirm: true,
    app_metadata: { rol: 'parinte' },
    user_metadata: { nume: `Părinte ${opts.numeCursant}` },
  })
  if (error || !nou.user) return { ok: false, error: error?.message ?? 'Nu am putut crea contul părintelui.' }
  await admin.from('profile').upsert({
    id: nou.user.id,
    rol: 'parinte',
    cursant_id: null,
    nume_afisat: `Părinte ${opts.numeCursant}`,
  })
  await admin.from('parinte_cursanti').upsert({ parinte_id: nou.user.id, cursant_id: cursantId })
  await dezleagaAlteleDecat(nou.user.id)
  return { ok: true, userId: nou.user.id, actiune: 'creat', parola }
}
