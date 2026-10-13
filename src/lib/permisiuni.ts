/** Permisiunile unui profesor (setate de admin). Adminul are mereu toate drepturile. */
export type PermisiuniProfesor = {
  /** Poate adăuga cursanți noi. */
  adauga_elevi: boolean
  /** Poate înregistra plăți și abonamente de ședințe. */
  plati: boolean
  /** Poate vinde (înregistra) un abonament Autodidact plătit. */
  autodidact_platit: boolean
  /** Vede pagina Autodidact și secțiunea Autodidact a cursanților lui. */
  vede_autodidact: boolean
}

export const PERMISIUNI_IMPLICITE: PermisiuniProfesor = {
  adauga_elevi: true,
  plati: true,
  autodidact_platit: false,
  vede_autodidact: false,
}

export const PERMISIUNI_TOATE: PermisiuniProfesor = {
  adauga_elevi: true,
  plati: true,
  autodidact_platit: true,
  vede_autodidact: true,
}

export const ETICHETE_PERMISIUNI: Array<{ cheie: keyof PermisiuniProfesor; eticheta: string }> = [
  { cheie: 'adauga_elevi', eticheta: 'Poate adăuga elevi' },
  { cheie: 'plati', eticheta: 'Poate înregistra plăți și abonamente (ședințe)' },
  { cheie: 'autodidact_platit', eticheta: 'Poate înregistra Autodidact plătit' },
  { cheie: 'vede_autodidact', eticheta: 'Vede pagina Autodidact (doar elevii lui)' },
]

/** Completează cu valorile implicite ce lipsește din JSON-ul salvat. */
export function normalizeazaPermisiuni(raw: unknown): PermisiuniProfesor {
  const r = raw && typeof raw === 'object' ? (raw as Record<string, unknown>) : {}
  const out = { ...PERMISIUNI_IMPLICITE }
  for (const k of Object.keys(out) as Array<keyof PermisiuniProfesor>) {
    if (typeof r[k] === 'boolean') out[k] = r[k] as boolean
  }
  return out
}
