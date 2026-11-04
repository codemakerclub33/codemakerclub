import { refuzAccesTts } from '@/lib/accesLectie'
import { getScratchM1Speech, speechJsonResponse } from '@/lib/scratchM1Tts'

export const maxDuration = 120

/** Compat alias — same as /api/tts/scratch-m1?l=1 (legacy Blob cache preserved). */
export async function GET(request: Request) {
  const refuz = await refuzAccesTts(request)
  if (refuz) return refuz

  const result = await getScratchM1Speech(1)
  return speechJsonResponse(result)
}
