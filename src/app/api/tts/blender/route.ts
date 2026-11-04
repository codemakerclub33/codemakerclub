import { refuzAccesTts } from '@/lib/accesLectie'
import { getBlenderSpeech, speechJsonResponse } from '@/lib/blenderTts'

export const maxDuration = 180

/** Blender · ?m=1…4 & ?l=1…10 */
export async function GET(request: Request) {
  const refuz = await refuzAccesTts(request)
  if (refuz) return refuz

  const sp = new URL(request.url).searchParams
  const modul = Number.parseInt(sp.get('m') ?? sp.get('modul') ?? '', 10)
  const lesson = Number.parseInt(sp.get('l') ?? sp.get('ordine') ?? '', 10)
  return speechJsonResponse(await getBlenderSpeech(modul, lesson))
}
