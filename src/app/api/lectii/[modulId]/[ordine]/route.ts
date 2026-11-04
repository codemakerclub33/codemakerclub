import { NextResponse } from 'next/server'
import { getLectieMarkdown } from '@/lib/lectiiContent'
import { verificaAccesLectie } from '@/lib/accesLectie'

const NO_STORE = { 'Cache-Control': 'private, no-store' }

function raspuns(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: NO_STORE })
}

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ modulId: string; ordine: string }> },
) {
  const { modulId, ordine } = await ctx.params
  const n = parseInt(ordine, 10)
  if (!modulId || !Number.isInteger(n) || n < 1) {
    return raspuns({ error: 'Parametri invalizi' }, 400)
  }

  const acces = await verificaAccesLectie(modulId, n)
  if (!acces.ok) return raspuns({ error: acces.error, motiv: acces.motiv }, acces.status)

  const markdown = getLectieMarkdown(modulId, n)
  return raspuns({ markdown: markdown ?? null })
}
