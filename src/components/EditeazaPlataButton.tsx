'use client'

import { useState } from 'react'
import { Pencil, X } from 'lucide-react'
import { modificaPlataAction } from '@/app/actions/abonamente'

interface Props {
  plata: {
    id: string
    suma: number
    data_plata: string
    metoda: 'cash' | 'transfer' | 'card'
    nota: string | null
  }
  /** Ședințele incluse în abonamentul plății (null pentru plăți Autodidact). */
  sedinteIncluse: number | null
  onSaved?: () => void
}

export default function EditeazaPlataButton({ plata, sedinteIncluse, onSaved }: Props) {
  const [open, setOpen] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [form, setForm] = useState({
    suma: String(plata.suma),
    data_plata: plata.data_plata,
    metoda: plata.metoda,
    nota: plata.nota ?? '',
    sedinte: sedinteIncluse !== null ? String(sedinteIncluse) : '',
  })

  const deschide = () => {
    setForm({
      suma: String(plata.suma),
      data_plata: plata.data_plata,
      metoda: plata.metoda,
      nota: plata.nota ?? '',
      sedinte: sedinteIncluse !== null ? String(sedinteIncluse) : '',
    })
    setError(null)
    setOpen(true)
  }

  const salveaza = async () => {
    const suma = Number(form.suma)
    if (!form.suma || isNaN(suma) || suma <= 0) {
      setError('Introduceți o sumă validă')
      return
    }
    const sedinte = Number(form.sedinte)
    if (sedinteIncluse !== null && (!sedinte || sedinte <= 0)) {
      setError('Introduceți un număr de ședințe valid')
      return
    }
    setSaving(true)
    setError(null)
    const r = await modificaPlataAction({
      id: plata.id,
      suma,
      data_plata: form.data_plata,
      metoda: form.metoda,
      nota: form.nota,
      sedinte_incluse: sedinteIncluse !== null ? sedinte : undefined,
    })
    setSaving(false)
    if (!r.ok) {
      setError(r.error)
      return
    }
    setOpen(false)
    onSaved?.()
  }

  return (
    <>
      <button
        type="button"
        onClick={deschide}
        title="Modifică plata"
        className="text-slate-400 hover:text-blue-600 transition-colors p-1.5"
      >
        <Pencil size={16} />
      </button>

      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-bold text-slate-900 text-lg">Modifică plata</h3>
              <button onClick={() => setOpen(false)} className="text-slate-400 hover:text-slate-600">
                <X size={20} />
              </button>
            </div>

            {error && (
              <p className="text-sm text-amber-700 bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 mb-4">
                {error}
              </p>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Sumă (lei)</label>
                <input
                  type="number"
                  value={form.suma}
                  onChange={e => setForm({ ...form, suma: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg font-bold"
                />
              </div>

              {sedinteIncluse !== null && (
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    Număr ședințe plătite
                  </label>
                  <input
                    type="number"
                    value={form.sedinte}
                    onChange={e => setForm({ ...form, sedinte: e.target.value })}
                    className="w-full border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Metodă de plată</label>
                <div className="flex gap-2">
                  {(['cash', 'transfer', 'card'] as const).map(m => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setForm({ ...form, metoda: m })}
                      className={`flex-1 py-2 rounded-xl border-2 font-medium text-xs capitalize transition-all ${form.metoda === m ? 'border-emerald-500 bg-emerald-50 text-emerald-700' : 'border-slate-200 text-slate-500'}`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Data plății</label>
                <input
                  type="date"
                  value={form.data_plata}
                  onChange={e => setForm({ ...form, data_plata: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Notă</label>
                <input
                  value={form.nota}
                  onChange={e => setForm({ ...form, nota: e.target.value })}
                  className="w-full border border-slate-200 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={() => void salveaza()}
                disabled={saving}
                className="flex-1 bg-emerald-600 text-white py-3 rounded-xl font-medium hover:bg-emerald-700 transition-colors disabled:opacity-60"
              >
                {saving ? 'Salvez…' : 'Salvează'}
              </button>
              <button
                onClick={() => setOpen(false)}
                className="px-5 py-3 rounded-xl border border-slate-200 text-slate-600 font-medium hover:bg-slate-50 transition-colors"
              >
                Anulează
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
