import { getWebSpeech, speechJsonResponse } from '@/lib/webTts'

export const maxDuration = 180

/** HTML + CSS + JavaScript · ?m=1…6 & ?l=1…12 */
export async function GET(request: Request) {
  const sp = new URL(request.url).searchParams
  const modul = Number.parseInt(sp.get('m') ?? sp.get('modul') ?? '', 10)
  const lesson = Number.parseInt(sp.get('l') ?? sp.get('ordine') ?? '', 10)
  return speechJsonResponse(await getWebSpeech(modul, lesson))
}
