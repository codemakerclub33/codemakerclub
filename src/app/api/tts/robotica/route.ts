import { refuzAccesTts } from '@/lib/accesLectie'
import { getRoboticaSpeech, speechJsonResponse } from '@/lib/roboticaTts'

export const maxDuration = 180

/** Robotică WeDo · ?m=1 & ?l=1…10 */
export async function GET(request: Request) {
  const refuz = await refuzAccesTts(request)
  if (refuz) return refuz

  const sp = new URL(request.url).searchParams
  const modul = Number.parseInt(sp.get('m') ?? sp.get('modul') ?? '', 10)
  const lesson = Number.parseInt(sp.get('l') ?? sp.get('ordine') ?? '', 10)
  return speechJsonResponse(await getRoboticaSpeech(modul, lesson))
}
