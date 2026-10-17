/**
 * Verificare Cloudflare Turnstile (anti-spam), DOAR pe server.
 * Dacă TURNSTILE_SECRET_KEY nu e setată, verificarea e sărită (formularul rămâne funcțional).
 */
export function turnstileActiv(): boolean {
  return Boolean(process.env.TURNSTILE_SECRET_KEY?.trim())
}

export async function verificaTurnstile(token: string | undefined, ip?: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY?.trim()
  if (!secret) return true
  if (!token) return false
  try {
    const body = new URLSearchParams({ secret, response: token })
    if (ip && ip !== 'necunoscut') body.set('remoteip', ip)
    const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body,
      signal: AbortSignal.timeout(8_000),
    })
    const json = (await res.json()) as { success?: boolean }
    return json.success === true
  } catch {
    return false
  }
}
