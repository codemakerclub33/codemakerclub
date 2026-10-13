'use client'

import { useCallback, useEffect, useState } from 'react'
import { Rocket } from 'lucide-react'
import {
  acordaAccesGratuitAction,
  listAutodidactCursantAction,
  prelungesteAccesGratuitAction,
  type AutodidactCursant,
} from '@/app/actions/abonamente'
import { cursuri, module as moduleCurriculum } from '@/lib/mockData'
import { getSession } from '@/lib/auth'
import { ZILE_ACCES, esteActiv, zileRamase } from '@/lib/autodidact'

function dataRo(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('ro-RO')
}

/** Staff: accesurile „Autodidact” ale cursantului + prețul propus pentru următorul modul. */
export default function AutodidactPanel({ cursantId }: { cursantId: string }) {
  const esteAdmin = getSession()?.rol === 'admin'
  const [data, setData] = useState<AutodidactCursant | null>(null)
  const [modulId, setModulId] = useState('')
  const [motiv, setMotiv] = useState('')
  const [busy, setBusy] = useState(false)
  const [mesaj, setMesaj] = useState<{ ok: boolean; text: string } | null>(null)

  const incarca = useCallback(async () => {
    const r = await listAutodidactCursantAction(cursantId)
    if (r.ok) setData(r.data)
  }, [cursantId])

  useEffect(() => {
    let cancelled = false
    void listAutodidactCursantAction(cursantId).then(r => {
      if (!cancelled && r.ok) setData(r.data)
    })
    return () => {
      cancelled = true
    }
  }, [cursantId])

  if (!data) return null

  const azi = new Date().toISOString().slice(0, 10)

  async function acorda() {
    if (!modulId) {
      setMesaj({ ok: false, text: 'Alege modulul.' })
      return
    }
    setBusy(true)
    setMesaj(null)
    const r = await acordaAccesGratuitAction({ cursant_id: cursantId, modul_id: modulId, motiv })
    setBusy(false)
    if (r.ok) {
      setMesaj({ ok: true, text: `Acces gratuit acordat până la ${dataRo(r.data_sfarsit)}.` })
      setModulId('')
      await incarca()
    } else {
      setMesaj({ ok: false, text: r.error })
    }
  }

  async function prelungeste(id: string) {
    setBusy(true)
    setMesaj(null)
    const r = await prelungesteAccesGratuitAction(id)
    setBusy(false)
    if (r.ok) {
      setMesaj({ ok: true, text: `Prelungit până la ${dataRo(r.data_sfarsit)}.` })
      await incarca()
    } else {
      setMesaj({ ok: false, text: r.error })
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 mb-6">
      <div className="flex items-center gap-2 mb-3">
        <Rocket size={18} className="text-fuchsia-600" />
        <h2 className="font-semibold text-slate-900">Autodidact</h2>
      </div>

      {data.accesuri.length === 0 ? (
        <p className="text-sm text-slate-400 mb-3">Niciun acces Autodidact încă.</p>
      ) : (
        <ul className="space-y-2">
          {data.accesuri.map(a => {
            const modul = moduleCurriculum.find(m => m.id === a.modul_id)
            const activ = esteActiv(a, azi)
            return (
              <li
                key={a.id}
                className="flex flex-wrap items-center justify-between gap-2 text-sm rounded-xl border border-slate-100 px-3 py-2"
              >
                <span className="font-medium text-slate-800">
                  {modul?.nume ?? a.modul_id}
                  {a.gratuit && (
                    <span className="ml-2 text-xs font-semibold rounded-full px-2 py-0.5 bg-sky-50 text-sky-700">
                      Gratuit{a.motiv ? ` · ${a.motiv}` : ''}
                    </span>
                  )}
                </span>
                <span className="text-slate-500">
                  {dataRo(a.data_start)} – {dataRo(a.data_sfarsit)} · {a.gratuit ? 'gratuit' : `${a.pret} lei`}
                </span>
                <span className="flex items-center gap-2">
                  <span
                    className={`text-xs font-semibold rounded-full px-2.5 py-0.5 ${
                      activ ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'
                    }`}
                  >
                    {activ ? `activ · ${zileRamase(a, azi)} zile` : 'expirat'}
                  </span>
                  {a.gratuit && esteAdmin && (
                    <button
                      type="button"
                      disabled={busy}
                      onClick={() => void prelungeste(a.id)}
                      className="text-xs font-semibold text-sky-700 hover:underline disabled:opacity-50"
                    >
                      Prelungește +{ZILE_ACCES} zile
                    </button>
                  )}
                </span>
              </li>
            )
          })}
        </ul>
      )}

      <p className="text-xs text-slate-400 mt-3">
        Următorul modul cumpărat azi: <strong className="text-slate-600">{data.pretUrmator.pret} lei</strong> —{' '}
        {data.pretUrmator.motiv}. Accesurile gratuite nu intră în lanțul de reduceri.
      </p>

      {esteAdmin && (
      <div className="mt-4 pt-4 border-t border-slate-100">
        <p className="text-sm font-medium text-slate-700 mb-2">Acces gratuit ({ZILE_ACCES} de zile)</p>
        <div className="flex flex-col sm:flex-row gap-2">
          <select
            value={modulId}
            onChange={e => setModulId(e.target.value)}
            className="flex-1 border border-slate-200 rounded-xl px-3 py-2 text-sm"
          >
            <option value="">— alege modulul —</option>
            {cursuri.map(c => {
              const mods = moduleCurriculum.filter(m => m.curs_id === c.id).sort((x, y) => x.ordine - y.ordine)
              if (mods.length === 0) return null
              return (
                <optgroup key={c.id} label={c.nume}>
                  {mods.map(m => (
                    <option key={m.id} value={m.id}>
                      {m.nume}
                    </option>
                  ))}
                </optgroup>
              )
            })}
          </select>
          <input
            type="text"
            value={motiv}
            onChange={e => setMotiv(e.target.value)}
            maxLength={200}
            placeholder="Motiv (ex. Liceul Unirea)"
            className="flex-1 border border-slate-200 rounded-xl px-3 py-2 text-sm"
          />
          <button
            type="button"
            disabled={busy}
            onClick={() => void acorda()}
            className="bg-sky-600 hover:bg-sky-700 disabled:opacity-50 text-white text-sm font-semibold rounded-xl px-4 py-2"
          >
            Acordă
          </button>
        </div>
        {mesaj && (
          <p className={`text-xs mt-2 ${mesaj.ok ? 'text-emerald-700' : 'text-amber-700'}`}>{mesaj.text}</p>
        )}
      </div>
      )}
    </div>
  )
}
