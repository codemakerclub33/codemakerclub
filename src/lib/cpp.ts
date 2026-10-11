/** Identificatori pentru cursul C++ (5 module × 10 lecții). */
export const CPP_LESSON_COUNT = 10
export const CPP_MODUL_COUNT = 5

/** Modul C++ (1–5) → id modul din mockData. */
export const CPP_MODUL_IDS: Record<number, string> = {
  1: 'm1',
  2: 'm2',
  3: 'm14',
  4: 'm15',
  5: 'm34',
}

export function cppModulNumar(modulId: string): number | null {
  for (const [n, id] of Object.entries(CPP_MODUL_IDS)) {
    if (id === modulId) return Number(n)
  }
  return null
}

export function isCppLesson(ordine: number): boolean {
  return Number.isInteger(ordine) && ordine >= 1 && ordine <= CPP_LESSON_COUNT
}

export function cppTtsApiUrl(modul: number, ordine: number): string {
  return `/api/tts/cpp?m=${modul}&l=${ordine}`
}
