'use client'

import { useEffect, useRef, useState, FormEvent } from 'react'
import Link from 'next/link'
import { trimiteCerereContactAction } from '@/app/actions/contact'

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY?.trim() ?? ''

type TurnstileApi = {
  render: (
    el: HTMLElement,
    opts: {
      sitekey: string
      callback: (token: string) => void
      'expired-callback': () => void
      'error-callback': () => void
      language?: string
    },
  ) => string
  reset: (id?: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

export default function ContactForm() {
  const widgetRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)
  const [turnstileToken, setTurnstileToken] = useState('')

  const [nume, setNume] = useState('')
  const [email, setEmail] = useState('')
  const [telefon, setTelefon] = useState('')
  const [mesaj, setMesaj] = useState('')
  const [trimis, setTrimis] = useState(false)
  const [trimitere, setTrimitere] = useState(false)
  const [eroare, setEroare] = useState<string | null>(null)
  const [website, setWebsite] = useState('')
  const [acord, setAcord] = useState(false)

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return
    let anulat = false
    const randeaza = () => {
      if (anulat || !widgetRef.current || !window.turnstile || widgetId.current) return
      widgetId.current = window.turnstile.render(widgetRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        language: 'ro',
        callback: token => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
        'error-callback': () => setTurnstileToken(''),
      })
    }
    if (window.turnstile) {
      randeaza()
    } else {
      const existent = document.getElementById('cf-turnstile-script')
      const script = existent ?? document.createElement('script')
      if (!existent) {
        script.id = 'cf-turnstile-script'
        ;(script as HTMLScriptElement).src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'
        ;(script as HTMLScriptElement).async = true
        document.head.appendChild(script)
      }
      script.addEventListener('load', randeaza)
    }
    return () => {
      anulat = true
    }
  }, [])

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!acord || trimitere || (TURNSTILE_SITE_KEY && !turnstileToken)) return
    setTrimitere(true)
    setEroare(null)
    try {
      const r = await trimiteCerereContactAction({ nume, email, telefon, mesaj, acord, website, turnstileToken })
      if (r.ok) {
        setTrimis(true)
        setNume('')
        setEmail('')
        setTelefon('')
        setMesaj('')
        setAcord(false)
      } else {
        setEroare(r.error)
      }
      // Tokenul e de unică folosință: cerem unul nou
      if (TURNSTILE_SITE_KEY) {
        setTurnstileToken('')
        if (widgetId.current) window.turnstile?.reset(widgetId.current)
      }
    } catch {
      setEroare('Nu am putut trimite mesajul. Scrie-ne direct la contact@codemakerclub.ro.')
    } finally {
      setTrimitere(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={website}
        onChange={e => setWebsite(e.target.value)}
        className="hidden"
      />
      <div>
        <label htmlFor="nume" className="block text-sm font-medium text-[var(--ckp-ink)] mb-1.5">
          Nume
        </label>
        <input
          id="nume"
          name="nume"
          required
          value={nume}
          onChange={e => setNume(e.target.value)}
          className="w-full rounded-xl border border-[var(--ckp-ink)]/15 bg-white px-4 py-3 text-[var(--ckp-ink)] outline-none focus:border-[var(--ckp-blue)]"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--ckp-ink)] mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="w-full rounded-xl border border-[var(--ckp-ink)]/15 bg-white px-4 py-3 text-[var(--ckp-ink)] outline-none focus:border-[var(--ckp-blue)]"
        />
      </div>
      <div>
        <label htmlFor="telefon" className="block text-sm font-medium text-[var(--ckp-ink)] mb-1.5">
          Telefon
        </label>
        <input
          id="telefon"
          name="telefon"
          type="tel"
          required
          value={telefon}
          onChange={e => setTelefon(e.target.value)}
          className="w-full rounded-xl border border-[var(--ckp-ink)]/15 bg-white px-4 py-3 text-[var(--ckp-ink)] outline-none focus:border-[var(--ckp-blue)]"
        />
      </div>
      <div>
        <label htmlFor="mesaj" className="block text-sm font-medium text-[var(--ckp-ink)] mb-1.5">
          Mesaj
        </label>
        <textarea
          id="mesaj"
          name="mesaj"
          required
          rows={7}
          placeholder="Nume copil, vârstă, curs de interes…"
          value={mesaj}
          onChange={e => setMesaj(e.target.value)}
          className="w-full rounded-xl border border-[var(--ckp-ink)]/15 bg-white px-4 py-3 text-[var(--ckp-ink)] outline-none focus:border-[var(--ckp-blue)] resize-y min-h-[160px]"
        />
      </div>
      <label className="flex items-start gap-2.5 text-sm text-[var(--ckp-ink)] cursor-pointer">
        <input
          type="checkbox"
          required
          checked={acord}
          onChange={e => setAcord(e.target.checked)}
          className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--ckp-red)]"
        />
        <span>
          Am citit și sunt de acord cu{' '}
          <Link href="/termeni" target="_blank" className="text-[var(--ckp-blue)] hover:underline">
            Termenii și condițiile
          </Link>{' '}
          și{' '}
          <Link href="/confidentialitate" target="_blank" className="text-[var(--ckp-blue)] hover:underline">
            Politica de confidențialitate
          </Link>
          .
        </span>
      </label>
      {TURNSTILE_SITE_KEY ? <div ref={widgetRef} className="min-h-[65px]" /> : null}
      <button
        type="submit"
        disabled={!acord || trimitere || Boolean(TURNSTILE_SITE_KEY && !turnstileToken)}
        className="inline-flex items-center justify-center bg-[var(--ckp-red)] hover:bg-[var(--ckp-red-deep)] text-white font-semibold px-6 py-3 rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {trimitere ? 'Se trimite…' : 'Trimite mesaj'}
      </button>
      {eroare ? (
        <p role="alert" className="text-sm text-[var(--ckp-red)]">
          {eroare}
        </p>
      ) : null}
      {trimis ? (
        <p role="status" className="text-sm text-[var(--ckp-ink)] bg-[var(--ckp-blue)]/10 rounded-xl px-4 py-3">
          Mulțumim! Am primit mesajul tău și te contactăm în curând.
        </p>
      ) : null}
    </form>
  )
}
