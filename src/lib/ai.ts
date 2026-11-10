/** Identificatori pentru cursul „AI pentru copii” (Modulele 1–2, câte 10 lecții). */
export const AI_LESSON_COUNT = 10
export const AI_MODUL_COUNT = 2

/** Modul AI (1) → id modul din mockData. */
export const AI_MODUL_IDS: Record<number, string> = {
  1: 'm45',
  2: 'm46',
}

export function aiModulNumar(modulId: string): number | null {
  for (const [n, id] of Object.entries(AI_MODUL_IDS)) {
    if (id === modulId) return Number(n)
  }
  return null
}

export function isAiLesson(ordine: number): boolean {
  return Number.isInteger(ordine) && ordine >= 1 && ordine <= AI_LESSON_COUNT
}

export function aiTtsApiUrl(modul: number, ordine: number): string {
  return `/api/tts/ai?m=${modul}&l=${ordine}`
}
