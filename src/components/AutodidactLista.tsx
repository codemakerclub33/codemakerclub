'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { Rocket, Search, X } from 'lucide-react'
import {
  anuleazaAccesAutodidactAction,
  listAutodidactToateAction,
  prelungesteAccesGratuitAction,
  type AutodidactRand,
} from '@/app/actions/abonamente'
import { cursuri, module as moduleCurriculum } from '@/lib/mockData'
import { diferentaZile, esteActiv } from '@/lib/autodidact'
import { isSupabaseConfiguredClient } from '@/lib/supabase/publicFlag'

type Stare = 'activ' | 'curand' | 'expirat'

function dataRo(iso: string): string {
  return new Date(`${iso}T12:00:00`).toLocaleDateString('ro-RO')
}

function stare(r: AutodidactRand, azi: string): { tip: Stare; zile: number } {
  if (!esteActiv(r, azi)) return { tip: 'expirat', zile: 0 }
  const zile = diferentaZile(azi, r.data_sfarsit) + 1
  return { tip: zile <= 7 ? 'curand' : 'activ', zile }
}

const STARE_STIL: Record<Stare, string> = {
  activ: 'bg-emerald-100 text-emerald-700',
  curand: 'bg-amber-100 text-amber-700',
  expirat: 'bg-slate-100 text-slate-500',
}

export default function AutodidactLista() {
  const useSupabase = isSupabaseConfiguredClient()
  const [randuri, setRanduri] = useState<AutodidactRand[]>([])
  const [loading, setLoading] = useState(useSupabase)
  const [eroare, setEroare] = useState<string | null>(null)
  const [q, setQ] = useState('')
  const [filtruStare, setFiltruStare] = useState<'toate' | Stare>('toate')
  const [filtruTip, setFiltruTip] = useState<'toate' | 'gratuit' | 'platit'>('toate')
  const [filtruCurs, setFiltruCurs] = useState('')
  const [busyId, setBusyId] = useState<string | null>(null)

  async function incarca() {
    const r = await listAutodidactToateAction()
    if (r.ok) {
      setRanduri(r.data)
      setEroare(null)
    } else {
      setEroare(r.error)
    }
    setLoading(false)
  }

  useEffect(() => {
    if (!useSupabase) return
    let cancelled = false
    void listAutodidactToateAction().then(r => {
      if (cancelled) return
      if (r.ok) setRanduri(r.data)
      else setEroare(r.error)
      setLoading(false)
    })
    return () => {
      cancelled = true
    }
  }, [useSupabase])

  const azi = new Date().toISOString().slice(0, 10)
  const numeModul = (id: string) => moduleCurriculum.find(m => m.id === id)?.nume ?? id
  const numeCurs = (id: string) => cursuri.find(c => c.id === id)?.nume ?? id

  const cuStare = useMemo(
    () => randuri.map(r => ({ r, s: stare(r, azi) })),
    [randuri, azi],
  )

  const sumar = {
    active: cuStare.filter(x => x.s.tip !== 'expirat').length,
    curand: cuStare.filter(x => x.s.tip === 'curand').length,
    gratuite: cuStare.filter(x => x.r.gratuit && x.s.tip !== 'expirat').length,
    platite: cuStare.filter(x => !x.r.gratuit && x.s.tip !== 'expirat').length,
  }

  const cursuriPrezente = [...new Set(randuri.map(r => r.curs_id))]
  const filtrate = cuStare.filter(({ r, s }) => {
    if (filtruStare !== 'toate' && s.tip !== filtruStare) return false
    if (filtruTip === 'gratuit' && !r.gratuit) return false
    if (filtruTip === 'platit' && r.gratuit) return false
    if (filtruCurs && r.curs_id !== filtruCurs) return false
    const t = q.trim().toLowerCase()
    if (t) {
      const hay = `${r.prenume} ${r.nume} ${r.email_parinte} ${r.motiv ?? ''} ${numeModul(r.modul_id)}`.toLowerCase()
      if (!hay.includes(t)) return false
    }
    return true
  })

  async function prelungeste(id: string) {
    setBusyId(id)
    const r = await prelungesteAccesGratuitAction(id)
    setBusyId(null)
    if (!r.ok) setEroare(r.error)
    else await incarca()
  }

  async function anuleaza(r: AutodidactRand) {
    const mesaj = r.gratuit
      ? `Anulezi accesul gratuit al lui ${r.prenume} ${r.nume} la „${numeModul(r.modul_id)}”?`
      : `Anulezi accesul lui ${r.prenume} ${r.nume} la „${numeModul(r.modul_id)}”? Se șterge și plata de ${r.pret} lei.`
    if (!window.confirm(mesaj)) return
    setBusyId(r.id)
    const res = await anuleazaAccesAutodidactAction(r.id)
    setBusyId(null)
    if (!res.ok) setEroare(res.error)
    else await incarca()
  }

  const select = 'rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm'

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
          <Rocket className="w-6 h-6 text-primary-600" /> Autodidact
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Evidența accesurilor la module (30 de zile, fără ședințe).
        </p>
      </div>

      {eroare && <p className="mb-4 text-sm text-red-600">{eroare}</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        {[
          ['Active', sumar.active],
          ['Expiră în 7 zile', sumar.curand],
          ['Gratuite active', sumar.gratuite],
          ['Plătite active', sumar.platite],
        ].map(([label, n]) => (
          <div key={label} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="text-2xl font-bold text-slate-900">{n}</p>
            <p className="text-xs text-slate-500">{label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-4">
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Caută elev, email, motiv, modul…"
            className="pl-9 pr-8 py-2 rounded-lg border border-slate-200 text-sm w-72"
          />
          {q && (
            <button
              onClick={() => setQ('')}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400"
              aria-label="Șterge căutarea"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        <select className={select} value={filtruStare} onChange={e => setFiltruStare(e.target.value as 'toate' | Stare)}>
          <option value="toate">Toate stările</option>
          <option value="activ">Active</option>
          <option value="curand">Expiră curând</option>
          <option value="expirat">Expirate</option>
        </select>
        <select className={select} value={filtruTip} onChange={e => setFiltruTip(e.target.value as 'toate' | 'gratuit' | 'platit')}>
          <option value="toate">Gratuit + plătit</option>
          <option value="gratuit">Gratuite</option>
          <option value="platit">Plătite</option>
        </select>
        <select className={select} value={filtruCurs} onChange={e => setFiltruCurs(e.target.value)}>
          <option value="">Toate cursurile</option>
          {cursuriPrezente.map(id => (
            <option key={id} value={id}>
              {numeCurs(id)}
            </option>
          ))}
        </select>
      </div>

      <div className="rounded-xl border border-slate-200 bg-white overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs text-slate-500">
            <tr>
              <th className="px-4 py-3">Elev</th>
              <th className="px-4 py-3">Modul</th>
              <th className="px-4 py-3">Tip</th>
              <th className="px-4 py-3">Perioadă</th>
              <th className="px-4 py-3">Stare</th>
              <th className="px-4 py-3" />
            </tr>
          </thead>
          <tbody>
            {loading && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-slate-400">
                  Se încarcă…
                </td>
              </tr>
            )}
            {!loading && filtrate.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-6 text-center text-slate-400">
                  {randuri.length === 0 ? 'Niciun acces Autodidact încă.' : 'Niciun rezultat pentru filtre.'}
                </td>
              </tr>
            )}
            {filtrate.map(({ r, s }) => (
              <tr key={r.id} className="border-t border-slate-100">
                <td className="px-4 py-3">
                  <Link href={`/cursanti/${r.cursant_id}`} className="font-medium text-primary-700 hover:underline">
                    {r.prenume} {r.nume}
                  </Link>
                  <p className="text-xs text-slate-400">{r.email_parinte}</p>
                </td>
                <td className="px-4 py-3">
                  {numeModul(r.modul_id)}
                  <p className="text-xs text-slate-400">{numeCurs(r.curs_id)}</p>
                </td>
                <td className="px-4 py-3">
                  {r.gratuit ? (
                    <>
                      <span className="rounded-full bg-violet-100 text-violet-700 px-2 py-0.5 text-xs font-medium">Gratuit</span>
                      {r.motiv && <p className="text-xs text-slate-500 mt-1">{r.motiv}</p>}
                    </>
                  ) : (
                    <span className="text-slate-700">{r.pret} lei</span>
                  )}
                </td>
                <td className="px-4 py-3 whitespace-nowrap text-slate-600">
                  {dataRo(r.data_start)} – {dataRo(r.data_sfarsit)}
                </td>
                <td className="px-4 py-3">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-medium ${STARE_STIL[s.tip]}`}>
                    {s.tip === 'expirat' ? 'expirat' : s.tip === 'curand' ? `expiră în ${s.zile} zile` : `activ · ${s.zile} zile`}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <div className="flex justify-end gap-2">
                    {r.gratuit && r.poate_anula && (
                      <button
                        disabled={busyId === r.id}
                        onClick={() => prelungeste(r.id)}
                        className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-medium hover:bg-slate-50 disabled:opacity-50"
                      >
                        {busyId === r.id ? '…' : 'Prelungește +30 zile'}
                      </button>
                    )}
                    {r.poate_anula && (
                      <button
                        disabled={busyId === r.id}
                        onClick={() => anuleaza(r)}
                        className="rounded-lg border border-red-200 text-red-600 px-3 py-1.5 text-xs font-medium hover:bg-red-50 disabled:opacity-50"
                      >
                        Anulează
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
