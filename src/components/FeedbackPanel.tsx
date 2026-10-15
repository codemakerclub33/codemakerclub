'use client'

import { useCallback, useEffect, useState } from 'react'
import { ChevronRight, Trash2 } from 'lucide-react'
import {
  listFeedbackAction,
  setCititFeedbackAction,
  stergeFeedbackAction,
  type FeedbackItem,
} from '@/app/actions/feedback'

function formatOra(iso: string): string {
  return new Date(iso).toLocaleString('ro-RO', {
    timeZone: 'Europe/Bucharest',
    dateStyle: 'short',
    timeStyle: 'short',
  })
}

export default function FeedbackPanel() {
  const [items, setItems] = useState<FeedbackItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [deschisId, setDeschisId] = useState<string | null>(null)

  const incarca = useCallback(async () => {
    const r = await listFeedbackAction()
    if (r.ok) {
      setItems(r.data)
      setError(null)
    } else {
      setError(r.error)
    }
    setLoading(false)
  }, [])

  useEffect(() => {
    void incarca()
  }, [incarca])

  async function deschide(f: FeedbackItem) {
    const nou = deschisId === f.id ? null : f.id
    setDeschisId(nou)
    if (nou && !f.citit) {
      const r = await setCititFeedbackAction(f.id, true)
      if (r.ok) setItems(prev => prev.map(x => (x.id === f.id ? { ...x, citit: true } : x)))
    }
  }

  async function sterge(f: FeedbackItem) {
    if (!window.confirm('Ștergi definitiv acest mesaj?')) return
    const r = await stergeFeedbackAction(f.id)
    if (r.ok) setItems(prev => prev.filter(x => x.id !== f.id))
    else setError(r.error)
  }

  const necitite = items.filter(f => !f.citit).length

  return (
    <div className="max-w-4xl">
      <h1 className="text-2xl font-bold text-slate-900">Feedback</h1>
      <p className="text-slate-500 mt-1 mb-6">
        Mesaje trimise de părinți și elevi. {necitite > 0 ? `${necitite} necitite.` : 'Nimic necitit.'}
      </p>

      {error ? <p className="mb-4 text-sm text-red-600">{error}</p> : null}
      {loading ? <p className="text-slate-500">Se încarcă…</p> : null}
      {!loading && items.length === 0 && !error ? <p className="text-slate-500">Niciun mesaj încă.</p> : null}

      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm divide-y divide-slate-100 overflow-hidden">
        {items.map(f => {
          const deschis = deschisId === f.id
          return (
            <article
              key={f.id}
              className={f.citit ? '' : 'bg-orange-100 border-l-4 border-orange-500'}
            >
              <button
                type="button"
                onClick={() => void deschide(f)}
                aria-expanded={deschis}
                className="w-full text-left px-4 py-2.5 flex items-center gap-3 hover:bg-slate-50"
              >
                <ChevronRight
                  size={14}
                  className={`shrink-0 text-slate-400 transition-transform ${deschis ? 'rotate-90' : ''}`}
                />
                <span className={`text-sm w-36 shrink-0 truncate ${f.citit ? 'text-slate-700' : 'font-semibold text-slate-900'}`}>
                  {f.autor_nume || (f.rol === 'elev' ? 'Elev' : 'Părinte')}
                </span>
                <span className="px-2 py-0.5 rounded-full text-xs font-semibold shrink-0 bg-slate-100 text-slate-600">
                  {f.rol === 'elev' ? 'Elev' : 'Părinte'}
                </span>
                <span className="text-sm text-slate-500 truncate flex-1 min-w-0">{f.mesaj}</span>
                <span className="text-xs text-slate-400 shrink-0 hidden sm:block">{formatOra(f.created_at)}</span>
              </button>

              {deschis ? (
                <div className="px-4 pb-4 pl-11">
                  <p className="text-slate-800 whitespace-pre-line text-sm leading-relaxed">{f.mesaj}</p>
                  <p className="mt-2 text-xs text-slate-400">{formatOra(f.created_at)}</p>
                  <button
                    type="button"
                    onClick={() => void sterge(f)}
                    className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-red-600 hover:bg-red-50"
                  >
                    <Trash2 size={13} /> Șterge
                  </button>
                </div>
              ) : null}
            </article>
          )
        })}
      </div>
    </div>
  )
}
