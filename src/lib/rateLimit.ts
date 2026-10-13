import { headers } from 'next/headers'

/**
 * Limitare simplă în memorie (per instanță de server).
 * Încetinește atacurile banale (ghicit PIN, spam), dar nu înlocuiește un CAPTCHA:
 * pe Vercel instanțele sunt multiple și se pot reseta.
 */
const incercari = new Map<string, number[]>()

function curata(key: string, fereastraMs: number, acum: number): number[] {
  const valide = (incercari.get(key) ?? []).filter(t => acum - t < fereastraMs)
  if (valide.length > 0) incercari.set(key, valide)
  else incercari.delete(key)
  return valide
}

export function esteBlocat(key: string, max: number, fereastraMs: number): boolean {
  return curata(key, fereastraMs, Date.now()).length >= max
}

export function inregistreaza(key: string, fereastraMs: number): void {
  const acum = Date.now()
  const valide = curata(key, fereastraMs, acum)
  valide.push(acum)
  incercari.set(key, valide)
  // Evită creșterea nelimitată a memoriei
  if (incercari.size > 5000) {
    for (const k of incercari.keys()) {
      if (curata(k, fereastraMs, acum).length === 0) incercari.delete(k)
    }
  }
}

export function reseteaza(key: string): void {
  incercari.delete(key)
}

export async function ipClient(): Promise<string> {
  const h = await headers()
  const fwd = h.get('x-forwarded-for')
  return (fwd?.split(',')[0] ?? h.get('x-real-ip') ?? 'necunoscut').trim()
}
