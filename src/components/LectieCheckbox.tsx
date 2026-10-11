'use client'

import { useCallback, useSyncExternalStore } from 'react'
import { usePathname } from 'next/navigation'

type Props = {
  /** Numărul de ordine al căsuței în lecție — identificator stabil. */
  index?: number
  accentColor?: string
}

const EVENT = 'lectie-check-change'

function subscribe(callback: () => void) {
  window.addEventListener(EVENT, callback)
  window.addEventListener('storage', callback)
  return () => {
    window.removeEventListener(EVENT, callback)
    window.removeEventListener('storage', callback)
  }
}

function readChecked(key: string): boolean {
  try {
    return window.localStorage.getItem(key) === '1'
  } catch {
    return false
  }
}

/**
 * Căsuță de bifat din lecții (`- [ ]`). Starea se păstrează în browser, pe lecție.
 */
export default function LectieCheckbox({ index, accentColor }: Props) {
  const pathname = usePathname()
  const storageKey = `lectie-check:${pathname}:${index ?? 'x'}`

  const checked = useSyncExternalStore(
    subscribe,
    () => readChecked(storageKey),
    () => false,
  )

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      try {
        if (e.target.checked) window.localStorage.setItem(storageKey, '1')
        else window.localStorage.removeItem(storageKey)
      } catch {
        /* localStorage indisponibil */
      }
      window.dispatchEvent(new Event(EVENT))
    },
    [storageKey],
  )

  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="cursor-pointer align-middle"
      style={accentColor ? { accentColor } : undefined}
    />
  )
}
