import type { createAdminClient } from '@/lib/supabase/admin'

type Admin = ReturnType<typeof createAdminClient>

const PE_PAGINA = 1000
const PAGINI_MAX = 50

/**
 * Toți utilizatorii din Auth, pagină cu pagină.
 * `listUsers({ perPage: 1000 })` singur oprește la primii 1000 de conturi.
 */
export async function listeazaTotiUtilizatorii(admin: Admin) {
  const toti = []
  for (let page = 1; page <= PAGINI_MAX; page++) {
    const { data, error } = await admin.auth.admin.listUsers({ page, perPage: PE_PAGINA })
    if (error || !data) break
    toti.push(...data.users)
    if (data.users.length < PE_PAGINA) break
  }
  return toti
}

export async function gasesteUtilizatorDupaEmail(admin: Admin, email: string) {
  const e = email.trim().toLowerCase()
  const toti = await listeazaTotiUtilizatorii(admin)
  return toti.find(u => u.email?.toLowerCase() === e) ?? null
}
