'use client'

import { useState } from 'react'
import { createPortal } from 'react-dom'
import { MessageSquareHeart, X } from 'lucide-react'
import { trimiteFeedbackAction } from '@/app/actions/feedback'

const MAX = 2000

/** Buton mic „Trimite feedback” + casetă cu mesaj. Pentru părinți și elevi. */
export default function FeedbackButton({ text = 'Trimite feedback' }: { text?: string }) {
  const [deschis, setDeschis] = useState(false)
  const [mesaj, setMesaj] = useState('')
  const [trimite, setTrimite] = useState(false)
  const [eroare, setEroare] = useState<string | null>(null)
  const [trimis, setTrimis] = useState(false)

  function inchide() {
    setDeschis(false)
    setEroare(null)
    if (trimis) {
      setTrimis(false)
      setMesaj('')
    }
  }

  async function onTrimite() {
    setEroare(null)
    setTrimite(true)
    const r = await trimiteFeedbackAction(mesaj)
    setTrimite(false)
    if (r.ok) setTrimis(true)
    else setEroare(r.error)
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setDeschis(true)}
        className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800"
      >
        <MessageSquareHeart size={16} /> <span className="hidden sm:inline">{text}</span>
      </button>

      {deschis &&
        createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/40 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Trimite feedback"
          onClick={e => {
            if (e.target === e.currentTarget) inchide()
          }}
        >
          <div className="w-full max-w-md rounded-2xl bg-white p-5 shadow-xl">
            <div className="flex items-center justify-between mb-3">
              <h2 className="font-semibold text-slate-900">Trimite feedback</h2>
              <button type="button" onClick={inchide} aria-label="Închide" className="text-slate-400 hover:text-slate-700">
                <X size={18} />
              </button>
            </div>

            {trimis ? (
              <>
                <p className="text-sm text-emerald-700 bg-emerald-50 rounded-lg px-3 py-2">
                  Mulțumim! Mesajul a fost trimis.
                </p>
                <button
                  type="button"
                  onClick={inchide}
                  className="mt-4 text-sm font-medium bg-slate-800 text-white px-4 py-2 rounded-xl hover:bg-slate-700"
                >
                  Închide
                </button>
              </>
            ) : (
              <>
                <p className="text-sm text-slate-500 mb-3">
                  Ce îți place, ce nu înțelegi sau ce am putea face mai bine?
                </p>
                <textarea
                  value={mesaj}
                  onChange={e => setMesaj(e.target.value.slice(0, MAX))}
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-300"
                  placeholder="Scrie aici mesajul tău…"
                />
                <div className="flex items-center justify-between mt-1 text-xs text-slate-400">
                  <span>{mesaj.length}/{MAX}</span>
                </div>
                {eroare && (
                  <p className="mt-2 text-sm text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2">
                    {eroare}
                  </p>
                )}
                <div className="mt-4 flex gap-2">
                  <button
                    type="button"
                    onClick={() => void onTrimite()}
                    disabled={trimite || mesaj.trim().length < 3}
                    className="text-sm font-medium bg-sky-600 text-white px-4 py-2 rounded-xl hover:bg-sky-500 disabled:opacity-50"
                  >
                    {trimite ? 'Se trimite…' : 'Trimite'}
                  </button>
                  <button
                    type="button"
                    onClick={inchide}
                    className="text-sm font-medium border border-slate-200 text-slate-600 px-4 py-2 rounded-xl hover:bg-slate-50"
                  >
                    Renunț
                  </button>
                </div>
              </>
            )}
          </div>
        </div>,
        document.body,
      )}
    </>
  )
}
