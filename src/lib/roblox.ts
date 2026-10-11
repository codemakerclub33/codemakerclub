/** Identificatori pentru Roblox Studio (4 module × 10 lecții). */
export const ROBLOX_CURS_ID = 'c12'
export const ROBLOX_LESSON_COUNT = 10

/** Modul Roblox (1–4) → id modul din mockData. */
export const ROBLOX_MODUL_IDS: Record<number, string> = {
  1: 'm24',
  2: 'm25',
  3: 'm26',
  4: 'm27',
}

export function robloxModulNumar(modulId: string): number | null {
  for (const [n, id] of Object.entries(ROBLOX_MODUL_IDS)) {
    if (id === modulId) return Number(n)
  }
  return null
}

export function isRobloxLesson(ordine: number): boolean {
  return Number.isInteger(ordine) && ordine >= 1 && ordine <= ROBLOX_LESSON_COUNT
}

export function robloxTtsApiUrl(modul: number, ordine: number): string {
  return `/api/tts/roblox?m=${modul}&l=${ordine}`
}
