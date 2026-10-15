'use server'

import { createAdminClient } from '@/lib/supabase/admin'
import { createClient } from '@/lib/supabase/server'
import { isSupabaseAdminConfigured, isSupabaseConfigured } from '@/lib/supabase/env'
import { module as moduleCurriculum } from '@/lib/mockData'
import { incarcaPermisiuni } from '@/lib/permisiuniServer'
import { PERMISIUNI_TOATE, type PermisiuniProfesor } from '@/lib/permisiuni'
import { adaugaZile, dataSfarsitAcces, esteActiv, pretAutodidact, ZILE_ACCES } from '@/lib/autodidact'

/**
 * Admin: acces la toți cursanții.
 * Profesor: doar la cursanții asignați lui (profesor_cursanti).
 * `cursantIds === null` înseamnă fără restricție (admin).
 */
async function verificaAcces() {
  if (!isSupabaseAdminConfigured()) return { ok: false as const, error: 'Supabase Admin neconfigurat.' }
  const supabase = await createClient()
  const { data: auth } = await supabase.auth.getUser()
  if (!auth.user) return { ok: false as const, error: 'Neautentificat.' }
  const admin = createAdminClient()
  const { data: profile } = await admin.from('profile').select('rol').eq('id', auth.user.id).maybeSingle()
  if (profile?.rol === 'admin') {
    return { ok: true as const, admin, userId: auth.user.id, rol: 'admin' as const, cursantIds: null as string[] | null, permisiuni: PERMISIUNI_TOATE as PermisiuniProfesor }
  }
  if (profile?.rol === 'profesor') {
    const { data: links } = await admin
      .from('profesor_cursanti')
      .select('cursant_id')
      .eq('profesor_id', auth.user.id)
    const cursantIds = (links ?? []).map(l => l.cursant_id as string)
    const permisiuni = await incarcaPermisiuni(admin, auth.user.id)
    return { ok: true as const, admin, userId: auth.user.id, rol: 'profesor' as const, cursantIds, permisiuni }
  }
  return { ok: false as const, error: 'Acces interzis.' }
}

const DATA_ISO = /^\d{4}-\d{2}-\d{2}$/

/** Profesorul poate lucra doar cu cursanții asignați lui. */
function poateCursant(acces: { cursantIds: string[] | null }, cursantId: string): boolean {
  return acces.cursantIds === null || acces.cursantIds.includes(cursantId)
}

export type AbonamenteDate = {
  cursanti: Array<{
    id: string
    nume: string
    prenume: string
    email_parinte: string
    activ: boolean
  }>
  abonamente: Array<{
    id: string
    cursant_id: string
    tip: 'lunar' | 'pachet'
    sedinte_incluse: number
    pret: number
    data_start: string
    activ: boolean
  }>
  sedinte: Array<{
    id: string
    cursant_id: string
    abonament_id: string | null
    prezent: boolean
    consuma_sedinta: boolean
  }>
  plati: Array<{
    id: string
    cursant_id: string
    abonament_id: string | null
    suma: number
    data_plata: string
    metoda: 'cash' | 'transfer' | 'card'
    nota: string | null
  }>
}

export async function listAbonamenteAction(): Promise<
  { ok: true; data: AbonamenteDate } | { ok: false; error: string }
> {
  if (!isSupabaseConfigured()) return { ok: false, error: 'Supabase nu e configurat.' }
  const acces = await verificaAcces()
  if (!acces.ok) return acces
  const { admin, cursantIds } = acces

  // Profesor fără cursanți asignați: nimic de afișat
  if (cursantIds !== null && cursantIds.length === 0) {
    return { ok: true, data: { cursanti: [], abonamente: [], sedinte: [], plati: [] } }
  }

  const filtru = <T extends { in: (col: string, vals: string[]) => T }>(q: T, col: string): T =>
    cursantIds === null ? q : q.in(col, cursantIds)

  const [{ data: cursanti }, { data: abonamente }, { data: sedinte }, { data: plati }] =
    await Promise.all([
      filtru(
        admin.from('cursanti').select('id, nume, prenume, email_parinte, activ'),
        'id',
      ).order('created_at', { ascending: false }),
      filtru(
        admin.from('abonamente').select('id, cursant_id, tip, sedinte_incluse, pret, data_start, activ'),
        'cursant_id',
      ),
      filtru(
        admin.from('sedinte').select('id, cursant_id, abonament_id, prezent, consuma_sedinta'),
        'cursant_id',
      ),
      filtru(
        admin.from('plati').select('id, cursant_id, abonament_id, suma, data_plata, metoda, nota'),
        'cursant_id',
      ).order('data_plata', { ascending: false }),
    ])

  return {
    ok: true,
    data: {
      cursanti: cursanti ?? [],
      abonamente: abonamente ?? [],
      sedinte: sedinte ?? [],
      plati: plati ?? [],
    },
  }
}

export type DetaliiCursantAbonament = {
  cursant: { id: string; nume: string; prenume: string; email_parinte: string } | null
  abonamente: AbonamenteDate['abonamente']
  sedinte: Array<{
    id: string
    cursant_id: string
    abonament_id: string | null
    data: string
    prezent: boolean
    consuma_sedinta: boolean
    nota: string | null
  }>
  plati: AbonamenteDate['plati']
  esteAdmin: boolean
}

export async function getDetaliiCursantAbonamentAction(
  cursantId: string,
): Promise<{ ok: true; data: DetaliiCursantAbonament } | { ok: false; error: string }> {
  if (!isSupabaseConfigured()) return { ok: false, error: 'Supabase nu e configurat.' }
  if (!/^[0-9a-f-]{36}$/i.test(cursantId)) return { ok: false, error: 'ID cursant invalid.' }
  const acces = await verificaAcces()
  if (!acces.ok) return acces
  if (!poateCursant(acces, cursantId)) return { ok: false, error: 'Nu ai acces la acest cursant.' }
  const { admin } = acces

  const [{ data: cursant }, { data: abonamente }, { data: sedinte }, { data: plati }] =
    await Promise.all([
      admin.from('cursanti').select('id, nume, prenume, email_parinte').eq('id', cursantId).maybeSingle(),
      admin
        .from('abonamente')
        .select('id, cursant_id, tip, sedinte_incluse, pret, data_start, activ')
        .eq('cursant_id', cursantId),
      admin
        .from('sedinte')
        .select('id, cursant_id, abonament_id, data, prezent, consuma_sedinta, nota')
        .eq('cursant_id', cursantId)
        .order('data', { ascending: false }),
      admin
        .from('plati')
        .select('id, cursant_id, abonament_id, suma, data_plata, metoda, nota')
        .eq('cursant_id', cursantId)
        .order('data_plata', { ascending: false }),
    ])

  return {
    ok: true,
    data: {
      cursant: cursant ?? null,
      abonamente: abonamente ?? [],
      sedinte: sedinte ?? [],
      plati: plati ?? [],
      esteAdmin: acces.rol === 'admin',
    },
  }
}

export type ModificaPlataInput = {
  id: string
  suma: number
  data_plata: string
  metoda: 'cash' | 'transfer' | 'card'
  nota?: string | null
  /** Doar pentru plățile de ședințe (au abonament legat). */
  sedinte_incluse?: number
}

/** Admin: corectează o plată introdusă greșit (și abonamentul/accesul legat de ea). */
export async function modificaPlataAction(
  input: ModificaPlataInput,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const acces = await verificaAcces()
  if (!acces.ok) return acces
  if (acces.rol !== 'admin') return { ok: false, error: 'Doar adminul poate modifica plăți.' }
  const { admin } = acces

  if (!/^[0-9a-f-]{36}$/i.test(input.id)) return { ok: false, error: 'Plată invalidă.' }
  if (!(input.suma > 0)) return { ok: false, error: 'Sumă invalidă.' }
  if (!DATA_ISO.test(input.data_plata)) return { ok: false, error: 'Dată invalidă.' }
  if (!['cash', 'transfer', 'card'].includes(input.metoda)) return { ok: false, error: 'Metodă invalidă.' }
  if (input.sedinte_incluse !== undefined && !(input.sedinte_incluse > 0)) {
    return { ok: false, error: 'Număr ședințe invalid.' }
  }

  const { data: plata } = await admin
    .from('plati')
    .select('id, abonament_id')
    .eq('id', input.id)
    .maybeSingle()
  if (!plata) return { ok: false, error: 'Plata nu a fost găsită.' }

  const { error } = await admin
    .from('plati')
    .update({
      suma: input.suma,
      data_plata: input.data_plata,
      metoda: input.metoda,
      nota: input.nota?.trim() || null,
    })
    .eq('id', input.id)
  if (error) return { ok: false, error: error.message }

  if (plata.abonament_id) {
    const upd: { pret: number; data_start: string; sedinte_incluse?: number } = {
      pret: input.suma,
      data_start: input.data_plata,
    }
    if (input.sedinte_incluse !== undefined) upd.sedinte_incluse = input.sedinte_incluse
    const { error: aboErr } = await admin.from('abonamente').update(upd).eq('id', plata.abonament_id)
    if (aboErr) return { ok: false, error: aboErr.message }
  } else {
    // Autodidact: păstrăm prețul accesului în pas cu suma (datele de acces rămân neschimbate)
    await admin.from('acces_autodidact').update({ pret: input.suma }).eq('plata_id', input.id)
  }

  return { ok: true }
}

export type InregistreazaPlataInput = {
  cursant_id: string
  suma: number
  data_plata: string
  metoda: 'cash' | 'transfer' | 'card'
  nota?: string | null
  tip_abonament: 'lunar' | 'pachet'
  sedinte_incluse: number
}

/**
 * Înregistrează o plată și un pachet nou de ședințe.
 * Ședințele se ADAUGĂ la soldul cursantului (nu înlocuiesc restul vechi):
 *   sold nou = sold vechi + ședințe plătite  (ex. 2+4=6, sau −2+4=2).
 * Abonamentul vechi e dezactivat doar ca „pachet curent”; consumurile rămân în istoric.
 */
export async function inregistreazaPlataAction(
  input: InregistreazaPlataInput,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const acces = await verificaAcces()
  if (!acces.ok) return acces
  const { admin } = acces
  if (!acces.permisiuni.plati) return { ok: false, error: 'Nu ai permisiunea să înregistrezi plăți.' }

  if (!/^[0-9a-f-]{36}$/i.test(input.cursant_id)) return { ok: false, error: 'Cursant invalid.' }
  if (!poateCursant(acces, input.cursant_id)) {
    return { ok: false, error: 'Nu ai acces la acest cursant.' }
  }
  if (!(input.suma > 0)) return { ok: false, error: 'Sumă invalidă.' }
  if (!(input.sedinte_incluse > 0)) return { ok: false, error: 'Număr ședințe invalid.' }

  await admin.from('abonamente').update({ activ: false }).eq('cursant_id', input.cursant_id).eq('activ', true)

  const { data: nouAbonament, error: aboErr } = await admin
    .from('abonamente')
    .insert({
      cursant_id: input.cursant_id,
      tip: input.tip_abonament,
      sedinte_incluse: input.sedinte_incluse,
      pret: input.suma,
      data_start: input.data_plata,
      activ: true,
    })
    .select('id')
    .single()

  if (aboErr || !nouAbonament) return { ok: false, error: aboErr?.message ?? 'Nu am putut crea abonamentul.' }

  const { error: plataErr } = await admin.from('plati').insert({
    cursant_id: input.cursant_id,
    abonament_id: nouAbonament.id,
    suma: input.suma,
    data_plata: input.data_plata,
    metoda: input.metoda,
    nota: input.nota?.trim() || null,
    creat_de: acces.userId,
  })

  if (plataErr) return { ok: false, error: plataErr.message }
  return { ok: true }
}

// ─── Abonament Autodidact (1 modul, 30 de zile, fără ședințe) ─────────────────

export type AutodidactAcces = {
  id: string
  modul_id: string
  curs_id: string
  pret: number
  data_start: string
  data_sfarsit: string
  /** Acces gratuit (invitație): fără plată, nu intră în lanțul de reduceri. */
  gratuit: boolean
  motiv: string | null
}

async function accesuriAutodidact(
  admin: ReturnType<typeof createAdminClient>,
  cursantId: string,
): Promise<AutodidactAcces[]> {
  const { data, error } = await admin
    .from('acces_autodidact')
    .select('id, modul_id, curs_id, pret, data_start, data_sfarsit, gratuit, motiv')
    .eq('cursant_id', cursantId)
    .order('data_sfarsit', { ascending: false })
  if (!error) {
    return (data ?? []).map(r => ({ ...r, pret: Number(r.pret), gratuit: Boolean(r.gratuit) }))
  }
  // Migrarea „acces gratuit” nu e rulată încă: citim doar coloanele vechi.
  const vechi = await admin
    .from('acces_autodidact')
    .select('id, modul_id, curs_id, pret, data_start, data_sfarsit')
    .eq('cursant_id', cursantId)
    .order('data_sfarsit', { ascending: false })
  if (vechi.error) return [] // tabel inexistent (migrare nerulată) → fără accesuri
  return (vechi.data ?? []).map(r => ({ ...r, pret: Number(r.pret), gratuit: false, motiv: null }))
}

/** Accesurile gratuite nu intră în lanțul de reduceri (prima cumpărare rămâne la prețul întreg). */
function accesuriPlatite(accesuri: AutodidactAcces[]): AutodidactAcces[] {
  return accesuri.filter(a => !a.gratuit)
}

export type AutodidactCursant = {
  accesuri: AutodidactAcces[]
  /** Prețul propus pentru următorul modul, azi. */
  pretUrmator: { pret: number; motiv: string }
}

export async function listAutodidactCursantAction(
  cursantId: string,
): Promise<{ ok: true; data: AutodidactCursant } | { ok: false; error: string }> {
  if (!isSupabaseConfigured()) return { ok: false, error: 'Supabase nu e configurat.' }
  if (!/^[0-9a-f-]{36}$/i.test(cursantId)) return { ok: false, error: 'ID cursant invalid.' }
  const acces = await verificaAcces()
  if (!acces.ok) return acces
  if (!poateCursant(acces, cursantId)) return { ok: false, error: 'Nu ai acces la acest cursant.' }
  if (!acces.permisiuni.vede_autodidact) return { ok: false, error: 'Nu ai permisiunea Autodidact.' }

  const accesuri = await accesuriAutodidact(acces.admin, cursantId)
  const azi = new Date().toISOString().slice(0, 10)
  const { pret, motiv } = pretAutodidact(accesuriPlatite(accesuri), azi)
  return { ok: true, data: { accesuri, pretUrmator: { pret, motiv } } }
}

/** Prețul propus pentru o dată de plată (formularul îl recalculează când se schimbă data). */
export async function pretAutodidactAction(
  cursantId: string,
  dataPlata: string,
): Promise<{ ok: true; pret: number; motiv: string } | { ok: false; error: string }> {
  if (!isSupabaseConfigured()) return { ok: false, error: 'Supabase nu e configurat.' }
  if (!/^[0-9a-f-]{36}$/i.test(cursantId)) return { ok: false, error: 'ID cursant invalid.' }
  if (!DATA_ISO.test(dataPlata)) return { ok: false, error: 'Dată invalidă.' }
  const acces = await verificaAcces()
  if (!acces.ok) return acces
  if (!poateCursant(acces, cursantId)) return { ok: false, error: 'Nu ai acces la acest cursant.' }
  if (!acces.permisiuni.autodidact_platit) return { ok: false, error: 'Nu ai permisiunea Autodidact plătit.' }

  const accesuri = await accesuriAutodidact(acces.admin, cursantId)
  const { pret, motiv } = pretAutodidact(accesuriPlatite(accesuri), dataPlata)
  return { ok: true, pret, motiv }
}

export type InregistreazaAutodidactInput = {
  cursant_id: string
  modul_id: string
  /** Suma încasată; implicit prețul calculat (200 / 150 / 100). */
  suma?: number
  data_plata: string
  metoda: 'cash' | 'transfer' | 'card'
  nota?: string | null
}

/**
 * Înregistrează plata și deschide TOATE lecțiile modulului pentru 30 de zile.
 * Nu modifică soldul de ședințe.
 */
export async function inregistreazaAutodidactAction(
  input: InregistreazaAutodidactInput,
): Promise<{ ok: true; pret: number; data_sfarsit: string } | { ok: false; error: string }> {
  const acces = await verificaAcces()
  if (!acces.ok) return acces
  const { admin } = acces
  if (!acces.permisiuni.autodidact_platit) return { ok: false, error: 'Nu ai permisiunea Autodidact plătit.' }

  if (!/^[0-9a-f-]{36}$/i.test(input.cursant_id)) return { ok: false, error: 'Cursant invalid.' }
  if (!poateCursant(acces, input.cursant_id)) return { ok: false, error: 'Nu ai acces la acest cursant.' }
  if (!DATA_ISO.test(input.data_plata)) return { ok: false, error: 'Dată invalidă.' }
  if (!['cash', 'transfer', 'card'].includes(input.metoda)) return { ok: false, error: 'Metodă invalidă.' }

  const modul = moduleCurriculum.find(m => m.id === input.modul_id)
  if (!modul) return { ok: false, error: 'Modul necunoscut.' }

  const accesuri = await accesuriAutodidact(admin, input.cursant_id)
  const dataStart = input.data_plata

  if (accesuri.some(a => a.modul_id === modul.id && esteActiv(a, dataStart))) {
    return { ok: false, error: 'Cursantul are deja acces activ la acest modul.' }
  }

  const calculat = pretAutodidact(accesuriPlatite(accesuri), dataStart).pret
  const suma = input.suma ?? calculat
  if (!(suma > 0)) return { ok: false, error: 'Sumă invalidă.' }

  const dataSfarsit = dataSfarsitAcces(dataStart)
  const nota = [`Autodidact · ${modul.nume}`, input.nota?.trim()].filter(Boolean).join(' · ')

  const { data: plata, error: plataErr } = await admin
    .from('plati')
    .insert({
      cursant_id: input.cursant_id,
      abonament_id: null,
      suma,
      data_plata: dataStart,
      metoda: input.metoda,
      nota,
      creat_de: acces.userId,
    })
    .select('id')
    .single()
  if (plataErr || !plata) return { ok: false, error: plataErr?.message ?? 'Nu am putut salva plata.' }

  const { error: accesErr } = await admin.from('acces_autodidact').insert({
    cursant_id: input.cursant_id,
    modul_id: modul.id,
    curs_id: modul.curs_id,
    pret: suma,
    data_start: dataStart,
    data_sfarsit: dataSfarsit,
    plata_id: plata.id,
    creat_de: acces.userId,
  })
  if (accesErr) {
    await admin.from('plati').delete().eq('id', plata.id) // nu lăsăm plată fără acces
    return {
      ok: false,
      error: /acces_autodidact/.test(accesErr.message)
        ? 'Tabelul acces_autodidact lipsește — rulează migrarea SQL în Supabase.'
        : accesErr.message,
    }
  }

  return { ok: true, pret: suma, data_sfarsit: dataSfarsit }
}

export type AcordaAccesGratuitInput = {
  cursant_id: string
  modul_id: string
  /** Ex.: „Liceul Unirea (CNU)”. */
  motiv?: string | null
}

/**
 * Deschide TOATE lecțiile modulului pentru 30 de zile, fără plată (invitații).
 * Nu scrie în `plati`, nu modifică soldul de ședințe și nu intră în lanțul de reduceri.
 */
export async function acordaAccesGratuitAction(
  input: AcordaAccesGratuitInput,
): Promise<{ ok: true; data_sfarsit: string } | { ok: false; error: string }> {
  const acces = await verificaAcces()
  if (!acces.ok) return acces
  const { admin } = acces
  if (acces.rol !== 'admin') return { ok: false, error: 'Doar adminul poate acorda acces gratuit.' }

  if (!/^[0-9a-f-]{36}$/i.test(input.cursant_id)) return { ok: false, error: 'Cursant invalid.' }
  if (!poateCursant(acces, input.cursant_id)) return { ok: false, error: 'Nu ai acces la acest cursant.' }

  const modul = moduleCurriculum.find(m => m.id === input.modul_id)
  if (!modul) return { ok: false, error: 'Modul necunoscut.' }

  const azi = new Date().toISOString().slice(0, 10)
  const accesuri = await accesuriAutodidact(admin, input.cursant_id)
  if (accesuri.some(a => a.modul_id === modul.id && esteActiv(a, azi))) {
    return { ok: false, error: 'Cursantul are deja acces activ la acest modul.' }
  }

  const dataSfarsit = dataSfarsitAcces(azi)
  const { error } = await admin.from('acces_autodidact').insert({
    cursant_id: input.cursant_id,
    modul_id: modul.id,
    curs_id: modul.curs_id,
    pret: 0,
    data_start: azi,
    data_sfarsit: dataSfarsit,
    plata_id: null,
    gratuit: true,
    motiv: input.motiv?.trim().slice(0, 200) || null,
    creat_de: acces.userId,
  })
  if (error) {
    return {
      ok: false,
      error: /gratuit|motiv|pret_check/.test(error.message)
        ? 'Rulează migrarea SQL „acces_gratuit” în Supabase.'
        : error.message,
    }
  }
  return { ok: true, data_sfarsit: dataSfarsit }
}

/**
 * Prelungește un acces gratuit cu încă 30 de zile (multipli de 30).
 * Dacă mai e activ, se adaugă 30 de zile după data de sfârșit; dacă a expirat, 30 de zile de azi.
 */
export async function prelungesteAccesGratuitAction(
  accesId: string,
): Promise<{ ok: true; data_sfarsit: string } | { ok: false; error: string }> {
  const acces = await verificaAcces()
  if (!acces.ok) return acces
  if (acces.rol !== 'admin') return { ok: false, error: 'Doar adminul poate prelungi accesul gratuit.' }
  if (!/^[0-9a-f-]{36}$/i.test(accesId)) return { ok: false, error: 'Acces invalid.' }

  const { data: rand, error: citireErr } = await acces.admin
    .from('acces_autodidact')
    .select('id, cursant_id, data_sfarsit, gratuit')
    .eq('id', accesId)
    .maybeSingle()
  if (citireErr || !rand) return { ok: false, error: 'Accesul nu a fost găsit.' }
  if (!poateCursant(acces, rand.cursant_id as string)) return { ok: false, error: 'Nu ai acces la acest cursant.' }
  if (!rand.gratuit) return { ok: false, error: 'Se pot prelungi doar accesurile gratuite.' }

  const azi = new Date().toISOString().slice(0, 10)
  const ieri = adaugaZile(azi, -1)
  const baza = (rand.data_sfarsit as string) > ieri ? (rand.data_sfarsit as string) : ieri
  const dataSfarsit = adaugaZile(baza, ZILE_ACCES)

  const { error } = await acces.admin
    .from('acces_autodidact')
    .update({ data_sfarsit: dataSfarsit })
    .eq('id', accesId)
  if (error) return { ok: false, error: error.message }
  return { ok: true, data_sfarsit: dataSfarsit }
}

/**
 * Admin: anulează un acces Autodidact. Lecțiile se închid imediat.
 * Dacă accesul era plătit, se șterge și plata legată (dispare din încasări).
 */
export async function anuleazaAccesAutodidactAction(
  accesId: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const acces = await verificaAcces()
  if (!acces.ok) return acces
  if (acces.rol !== 'admin') return { ok: false, error: 'Doar adminul poate anula accesul.' }
  if (!/^[0-9a-f-]{36}$/i.test(accesId)) return { ok: false, error: 'Acces invalid.' }

  const { data: rand } = await acces.admin
    .from('acces_autodidact')
    .select('id, plata_id')
    .eq('id', accesId)
    .maybeSingle()
  if (!rand) return { ok: false, error: 'Accesul nu a fost găsit.' }

  const { error } = await acces.admin.from('acces_autodidact').delete().eq('id', accesId)
  if (error) return { ok: false, error: error.message }

  if (rand.plata_id) {
    const { error: plataErr } = await acces.admin.from('plati').delete().eq('id', rand.plata_id as string)
    if (plataErr) return { ok: false, error: plataErr.message }
  }
  return { ok: true }
}

export type AutodidactRand = AutodidactAcces & {
  cursant_id: string
  nume: string
  prenume: string
  email_parinte: string
}

/**
 * Evidența tuturor accesurilor Autodidact.
 * Admin: toate; profesor: doar ale cursanților asignați lui.
 */
export async function listAutodidactToateAction(): Promise<
  { ok: true; data: AutodidactRand[] } | { ok: false; error: string }
> {
  if (!isSupabaseConfigured()) return { ok: false, error: 'Supabase nu e configurat.' }
  const acces = await verificaAcces()
  if (!acces.ok) return acces
  const { admin, cursantIds } = acces
  if (!acces.permisiuni.vede_autodidact) return { ok: false, error: 'Nu ai permisiunea Autodidact.' }
  if (cursantIds !== null && cursantIds.length === 0) return { ok: true, data: [] }

  const coloane = 'id, cursant_id, modul_id, curs_id, pret, data_start, data_sfarsit'
  const filtru = <T extends { in: (col: string, vals: string[]) => T }>(q: T): T =>
    cursantIds === null ? q : q.in('cursant_id', cursantIds)

  let randuri: Array<Record<string, unknown>> = []
  const nou = await filtru(admin.from('acces_autodidact').select(`${coloane}, gratuit, motiv`)).order(
    'data_sfarsit',
    { ascending: true },
  )
  if (!nou.error) {
    randuri = (nou.data ?? []) as Array<Record<string, unknown>>
  } else {
    const vechi = await filtru(admin.from('acces_autodidact').select(coloane)).order('data_sfarsit', {
      ascending: true,
    })
    if (vechi.error) return { ok: true, data: [] } // tabel inexistent
    randuri = (vechi.data ?? []) as Array<Record<string, unknown>>
  }
  if (randuri.length === 0) return { ok: true, data: [] }

  const ids = [...new Set(randuri.map(r => r.cursant_id as string))]
  const { data: cursanti } = await admin
    .from('cursanti')
    .select('id, nume, prenume, email_parinte')
    .in('id', ids)
  const dupaId = new Map((cursanti ?? []).map(c => [c.id as string, c]))

  return {
    ok: true,
    data: randuri.map(r => {
      const c = dupaId.get(r.cursant_id as string)
      return {
        id: r.id as string,
        cursant_id: r.cursant_id as string,
        modul_id: r.modul_id as string,
        curs_id: r.curs_id as string,
        pret: Number(r.pret),
        data_start: r.data_start as string,
        data_sfarsit: r.data_sfarsit as string,
        gratuit: Boolean(r.gratuit),
        motiv: (r.motiv as string | null) ?? null,
        nume: c?.nume ?? '',
        prenume: c?.prenume ?? '(șters)',
        email_parinte: c?.email_parinte ?? '',
      }
    }),
  }
}
