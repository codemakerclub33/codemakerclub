'use client'

import Link from 'next/link'

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Ceva nu a mers bine</h1>
        <p className="text-slate-600 mb-6">
          A apărut o eroare neașteptată. Încearcă din nou. Dacă se repetă, scrie-ne la{' '}
          <a href="mailto:codemakerclub@gmail.com" className="text-blue-600 underline">
            codemakerclub@gmail.com
          </a>
          .
        </p>
        <div className="flex gap-3 justify-center">
          <button
            type="button"
            onClick={() => reset()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl transition-colors"
          >
            Încearcă din nou
          </button>
          <Link href="/" className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium">
            Prima pagină
          </Link>
        </div>
      </div>
    </main>
  )
}
