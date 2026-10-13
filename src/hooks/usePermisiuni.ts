'use client'

import { useEffect, useState } from 'react'
import { permisiuniMeleAction } from '@/app/actions/profesori'
import { getSession } from '@/lib/auth'
import { PERMISIUNI_TOATE, type PermisiuniProfesor } from '@/lib/permisiuni'
import { isSupabaseConfiguredClient } from '@/lib/supabase/publicFlag'

type Stare = { rol: 'admin' | 'profesor'; permisiuni: PermisiuniProfesor } | null

let cache: Promise<Stare> | null = null

function incarca(): Promise<Stare> {
  if (!cache) {
    cache = permisiuniMeleAction().then(r => (r.ok ? { rol: r.rol, permisiuni: r.permisiuni } : null))
  }
  return cache
}

/**
 * Permisiunile personalului curent. `null` cât timp se încarcă (butoanele rămân ascunse).
 * Fără Supabase (mod demo) → toate drepturile.
 */
export function usePermisiuni(): PermisiuniProfesor | null {
  const [p, setP] = useState<PermisiuniProfesor | null>(null)
  useEffect(() => {
    let anulat = false
    const s = getSession()
    if (s?.rol === 'admin' || !isSupabaseConfiguredClient()) {
      void Promise.resolve().then(() => {
        if (!anulat) setP(PERMISIUNI_TOATE)
      })
      return () => {
        anulat = true
      }
    }
    void incarca().then(r => {
      if (!anulat) setP(r?.permisiuni ?? null)
    })
    return () => {
      anulat = true
    }
  }, [])
  return p
}
