import { readFileSync, existsSync } from 'fs'
import path from 'path'
import { createHash } from 'crypto'
import { put, head } from '@vercel/blob'
import { SCRATCH_M2_LESSON_COUNT } from '@/lib/scratchM2'
import {
  speechJsonResponse,
  synthesizeLong,
  type ScratchM1SpeechResult,
} from '@/lib/scratchM1Tts'

const NARATIE_FILES: Record<number, string> = {
  1: 'L1-Meciul-de-fotbal.naratie.txt',
  2: 'L2-Acvariul.naratie.txt',
  3: 'L3-Robotul-prieten.naratie.txt',
  4: 'L4-Magazinul-de-dulciuri.naratie.txt',
  5: 'L5-Zaruri-si-calcule.naratie.txt',
  6: 'L6-Poarta-secreta.naratie.txt',
  7: 'L7-Atelierul-de-desen.naratie.txt',
  8: 'L8-Blocurile-mele.naratie.txt',
  9: 'L9-Vanatoarea-de-bile.naratie.txt',
  10: 'L10-Galeria-Logic-Explorer.naratie.txt',
}

const PROFILE = 'scratch-m2-naratie-v1'

function naratiePath(lesson: number): string | null {
  const file = NARATIE_FILES[lesson]
  if (!file) return null
  return path.join(process.cwd(), 'content', 'lectii', 'scratch', 'modul2', file)
}

function hashText(lesson: number, text: string) {
  return createHash('sha256')
    .update(`${PROFILE}\nl${lesson}\n${text}`)
    .digest('hex')
    .slice(0, 16)
}

function blobDir(lesson: number) {
  return `tts/scratch-m2/l${lesson}`
}

async function getCachedUrl(dir: string, hash: string): Promise<string | null> {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null
  for (const ext of ['mp3', 'wav'] as const) {
    const pathname = `${dir}/${hash}.${ext}`
    try {
      const meta = await head(pathname)
      if (meta?.url) return meta.url
    } catch {
      /* miss */
    }
  }
  return null
}

async function saveAudio(
  dir: string,
  hash: string,
  bytes: Uint8Array,
  mediaType: string,
): Promise<string> {
  const ext = mediaType.includes('wav') ? 'wav' : 'mp3'
  const contentType = ext === 'wav' ? 'audio/wav' : 'audio/mpeg'
  const pathname = `${dir}/${hash}.${ext}`

  if (process.env.BLOB_READ_WRITE_TOKEN) {
    const blob = await put(pathname, Buffer.from(bytes), {
      access: 'public',
      contentType,
      addRandomSuffix: false,
      allowOverwrite: true,
    })
    return blob.url
  }

  const b64 = Buffer.from(bytes).toString('base64')
  return `data:${contentType};base64,${b64}`
}

export type ScratchM2SpeechResult = ScratchM1SpeechResult

/** Resolve or generate TTS for Scratch Modul 2 lesson 1–10. */
export async function getScratchM2Speech(lesson: number): Promise<ScratchM2SpeechResult> {
  if (!Number.isInteger(lesson) || lesson < 1 || lesson > SCRATCH_M2_LESSON_COUNT) {
    return {
      ok: false,
      status: 400,
      error: `Parametru l invalid. Folosește ?l=1 … ?l=${SCRATCH_M2_LESSON_COUNT}.`,
    }
  }

  const file = naratiePath(lesson)
  if (!file || !existsSync(file)) {
    return { ok: false, status: 404, error: `Narația L${lesson} lipsește.` }
  }

  const text = readFileSync(file, 'utf8').trim()
  const hash = hashText(lesson, text)
  const dir = blobDir(lesson)

  const cached = await getCachedUrl(dir, hash)
  if (cached) return { ok: true, url: cached, cached: true, lesson }

  try {
    const { bytes, mediaType } = await synthesizeLong(text)
    const url = await saveAudio(dir, hash, bytes, mediaType)
    return { ok: true, url, cached: false, lesson }
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    console.error(`[tts scratch-m2 L${lesson}]`, message, err)
    return {
      ok: false,
      status: 502,
      error: 'Nu am putut genera vocea.',
      detail: message.slice(0, 300),
    }
  }
}

export { speechJsonResponse }
