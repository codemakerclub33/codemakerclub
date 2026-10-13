import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-50 p-6">
      <div className="max-w-md text-center">
        <p className="text-sm font-semibold text-blue-600 mb-2">Eroare 404</p>
        <h1 className="text-3xl font-bold text-slate-900 mb-3">Pagina nu a fost găsită</h1>
        <p className="text-slate-600 mb-6">
          Linkul poate fi greșit sau pagina a fost mutată. Te poți întoarce la prima pagină.
        </p>
        <Link
          href="/"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-xl transition-colors"
        >
          Înapoi la site
        </Link>
      </div>
    </main>
  )
}
