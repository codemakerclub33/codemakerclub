import type { createAdminClient } from '@/lib/supabase/admin'
import { normalizeazaPermisiuni, PERMISIUNI_IMPLICITE, type PermisiuniProfesor } from '@/lib/permisiuni'

/** Citește permisiunile unui profesor; dacă migrarea nu e rulată, valorile implicite. */
export async function incarcaPermisiuni(
  admin: ReturnType<typeof createAdminClient>,
  userId: string,
): Promise<PermisiuniProfesor> {
  const { data, error } = await admin.from('profile').select('permisiuni').eq('id', userId).maybeSingle()
  if (error || !data) return { ...PERMISIUNI_IMPLICITE }
  return normalizeazaPermisiuni((data as { permisiuni?: unknown }).permisiuni)
}
