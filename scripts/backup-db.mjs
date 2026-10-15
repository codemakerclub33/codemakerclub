// Backup local al bazei de date Supabase (până la activarea planului Pro).
// Rulare:  npm run backup
// Citește .env.local (NEXT_PUBLIC_SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY) și salvează
// fiecare tabel ca JSON în  backups/AAAA-LL-ZZ_HH-MM/  (folder ignorat de git).
// Cheia nu se afișează și nu se scrie nicăieri.

import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { createClient } from '@supabase/supabase-js'

try {
  process.loadEnvFile('.env.local')
} catch {
  console.error('Nu găsesc .env.local. Rulează comanda din folderul app.')
  process.exit(1)
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL
const key = process.env.SUPABASE_SERVICE_ROLE_KEY
if (!url || !key) {
  console.error('Lipsesc NEXT_PUBLIC_SUPABASE_URL sau SUPABASE_SERVICE_ROLE_KEY din .env.local')
  process.exit(1)
}

const TABELE = [
  'cursanti',
  'profile',
  'parinte_cursanti',
  'profesor_cursanti',
  'inscrieri',
  'abonamente',
  'sedinte',
  'progres',
  'plati',
  'acces_autodidact',
  'cereri_contact',
  'cursanti_pin',
  'feedback',
  'notificari_email',
]

const admin = createClient(url, key, { auth: { persistSession: false, autoRefreshToken: false } })

const acum = new Date()
const pad = n => String(n).padStart(2, '0')
const nume = `${acum.getFullYear()}-${pad(acum.getMonth() + 1)}-${pad(acum.getDate())}_${pad(acum.getHours())}-${pad(acum.getMinutes())}`
const dir = join('backups', nume)
mkdirSync(dir, { recursive: true })

const PAGINA = 1000
let esecuri = 0

for (const tabel of TABELE) {
  const randuri = []
  let ok = true
  for (let de = 0; ; de += PAGINA) {
    const { data, error } = await admin.from(tabel).select('*').range(de, de + PAGINA - 1)
    if (error) {
      console.error(`✗ ${tabel}: ${error.message}`)
      ok = false
      esecuri++
      break
    }
    randuri.push(...data)
    if (data.length < PAGINA) break
  }
  if (!ok) continue
  writeFileSync(join(dir, `${tabel}.json`), JSON.stringify(randuri, null, 2))
  console.log(`✓ ${tabel}: ${randuri.length} rânduri`)
}

// Conturile de autentificare (fără parole: Supabase nu le expune prin API)
const conturi = []
for (let pagina = 1; ; pagina++) {
  const { data, error } = await admin.auth.admin.listUsers({ page: pagina, perPage: 1000 })
  if (error) {
    console.error(`✗ auth.users: ${error.message}`)
    esecuri++
    break
  }
  conturi.push(
    ...data.users.map(u => ({
      id: u.id,
      email: u.email,
      created_at: u.created_at,
      last_sign_in_at: u.last_sign_in_at,
      user_metadata: u.user_metadata,
    })),
  )
  if (data.users.length < 1000) break
}
writeFileSync(join(dir, 'auth_users.json'), JSON.stringify(conturi, null, 2))
console.log(`✓ auth_users: ${conturi.length} conturi`)

console.log(
  esecuri === 0
    ? `\nBackup complet: ${dir}`
    : `\nBackup TERMINAT CU ${esecuri} ERORI: ${dir} (verifică mesajele de mai sus)`,
)
process.exit(esecuri === 0 ? 0 : 1)
