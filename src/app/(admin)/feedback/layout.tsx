'use client'

import RequireAuth from '@/components/RequireAuth'

/** Feedback-ul vine de la părinți și elevi — doar admin. */
export default function FeedbackLayout({ children }: { children: React.ReactNode }) {
  return (
    <RequireAuth roles={['admin']} fallback="/admin">
      {children}
    </RequireAuth>
  )
}
