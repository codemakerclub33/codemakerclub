import { readFileSync, readdirSync, existsSync } from 'fs'
import path from 'path'
import { createHash } from 'crypto'
import { CPP_LESSON_COUNT, CPP_MODUL_COUNT } from '@/lib/cpp'
import { speechJsonResponse, type ScratchM1SpeechResult } from '@/lib/scratchM1Tts'
import { getCachedUrl, saveAudio, synthesize } from '@/lib/tinkercadTts'

const PROFILE = 'cpp-naratie-v1'

function naratiePath(modul: number, lesson: number): string | null {
  const dir = path.join(process.cwd(), 'content', 'lectii', 'cpp', `modul${modul}`)
  if (!existsSync(dir)) return null
  const prefix = `L${lesson}-`
  const file = readdirSync(dir).find(f => f.startsWith(prefix) && f.endsWith('.naratie.txt'))
  return file ? path.join(dir, file) : null
}

export type CppSpeechResult = ScratchM1SpeechResult

/** Resolve or generate TTS for C++ modul 1–5, lecția 1–10. */
export async function getCppSpeech(modul: number, lesson: number): Promise<CppSpeechResult> {
  if (!Number.isInteger(modul) || modul < 1 || modul > CPP_MODUL_COUNT) {
    return { ok: false, status: 400, error: 'Parametru m invalid. Folosește ?m=1 … ?m=5.' }
  }
  if (!Number.isInteger(lesson) || lesson < 1 || lesson > CPP_LESSON_COUNT) {
    return { ok: false, status: 400, error: `Parametru l invalid. Folosește ?l=1 … ?l=${CPP_LESSON_COUNT}.` }
  }
  const file = naratiePath(modul, lesson)
  if (!file) return { ok: false, status: 404, error: `Narația M${modul} L${lesson} lipsește.` }

  const text = readFileSync(file, 'utf8').trim()
  const hash = createHash('sha256').update(`${PROFILE}\nm${modul}\nl${lesson}\n${text}`).digest('hex').slice(0, 16)
  const dir = `tts/cpp/m${modul}/l${lesson}`

  const cached = await getCachedUrl(dir, hash)
  if (cached) return { ok: true, url: cached, cached: true, lesson }
  try {
    const { bytes, mediaType } = await synthesize(text)
    const url = await saveAudio(dir, hash, bytes, mediaType)
    return { ok: true, url, cached: false, lesson }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error(`[tts cpp M${modul} L${lesson}]`, message, err)
    return { ok: false, status: 502, error: 'Nu am putut genera vocea.', detail: message.slice(0, 300) }
  }
}

export { speechJsonResponse }
