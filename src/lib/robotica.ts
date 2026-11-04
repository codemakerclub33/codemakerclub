/** Identificatori pentru Robotică LEGO WeDo 2.0 (Modulul 1 × 10 lecții). */
export const ROBOTICA_CURS_ID = 'c6'
export const ROBOTICA_LESSON_COUNT = 10

/** Modul Robotică (1) → id modul din mockData. */
export const ROBOTICA_MODUL_IDS: Record<number, string> = {
  1: 'm12',
}

export function roboticaModulNumar(modulId: string): number | null {
  for (const [n, id] of Object.entries(ROBOTICA_MODUL_IDS)) {
    if (id === modulId) return Number(n)
  }
  return null
}

export function isRoboticaLesson(ordine: number): boolean {
  return Number.isInteger(ordine) && ordine >= 1 && ordine <= ROBOTICA_LESSON_COUNT
}

export function roboticaTtsApiUrl(modul: number, ordine: number): string {
  return `/api/tts/robotica?m=${modul}&l=${ordine}`
}
