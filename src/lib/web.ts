/** Identificatori pentru cursul HTML + CSS + JavaScript (6 module, câte 10 lecții). */
export const WEB_LESSON_COUNT = 10
export const WEB_MODUL_COUNT = 6

/** Modul web (1–6) → id modul din mockData. */
export const WEB_MODUL_IDS: Record<number, string> = {
  1: 'm9',
  2: 'm42',
  3: 'm10',
  4: 'm11',
  5: 'm43',
  6: 'm44',
}

export function webModulNumar(modulId: string): number | null {
  for (const [n, id] of Object.entries(WEB_MODUL_IDS)) {
    if (id === modulId) return Number(n)
  }
  return null
}

export function isWebLesson(ordine: number): boolean {
  return Number.isInteger(ordine) && ordine >= 1 && ordine <= WEB_LESSON_COUNT
}

export function webTtsApiUrl(modul: number, ordine: number): string {
  return `/api/tts/web?m=${modul}&l=${ordine}`
}
