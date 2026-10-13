'use client'

import type { ClipboardEvent, ReactNode } from 'react'

type Props = {
  /** Numele contului afișat în mențiune (opțional). */
  cont?: string | null
  className?: string
  style?: React.CSSProperties
  children: ReactNode
}

/** Sub acest număr de caractere (un cuvânt, un nume de tag) nu adăugăm mențiunea. */
const MIN_CARACTERE = 40

/**
 * Nu blochează copierea. Când cineva copiază text explicativ din lecție, adaugă la final
 * o mențiune de sursă. Codul (blocurile <pre>) se copiază curat, ca să poată fi lipit în VS Code.
 */
export default function LectieCopyGuard({ cont, className, style, children }: Props) {
  function onCopy(e: ClipboardEvent<HTMLDivElement>) {
    const sel = window.getSelection()
    if (!sel || sel.rangeCount === 0 || sel.isCollapsed) return

    const range = sel.getRangeAt(0)
    const ancestor =
      range.commonAncestorContainer instanceof Element
        ? range.commonAncestorContainer
        : range.commonAncestorContainer.parentElement
    if (ancestor?.closest('pre, code')) return

    const text = sel.toString()
    if (text.trim().length < MIN_CARACTERE) return

    const mentiune = `Sursa: Code Maker Club${cont ? ` (cont: ${cont})` : ''}. Conținut protejat de drepturi de autor; redistribuirea fără acord este interzisă.`

    const tmp = document.createElement('div')
    tmp.appendChild(range.cloneContents())
    const p = document.createElement('p')
    const em = document.createElement('em')
    em.textContent = mentiune
    p.appendChild(em)
    tmp.appendChild(p)

    e.clipboardData.setData('text/plain', `${text}\n\n${mentiune}`)
    e.clipboardData.setData('text/html', tmp.innerHTML)
    e.preventDefault()
  }

  return (
    <div className={className} style={style} onCopy={onCopy}>
      {children}
    </div>
  )
}
