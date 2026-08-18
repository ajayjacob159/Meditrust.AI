'use client'

import { useState } from 'react'
import { X, Phone, ShieldAlert } from 'lucide-react'

export default function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div
      role="alert"
      aria-live="polite"
      className="bg-red-700 text-white text-center text-xs sm:text-sm font-semibold py-2 px-4 flex items-center justify-center gap-3 relative shadow-xs"
    >
      <ShieldAlert className="w-4 h-4 flex-shrink-0 animate-pulse" aria-hidden="true" />
      <span>
        <strong>National Medical Emergency?</strong> Dial{' '}
        <a href="tel:108" className="underline underline-offset-2 hover:no-underline font-black bg-red-800 px-2 py-0.5 rounded">
          108 (Ambulance)
        </a>{' '}
        or{' '}
        <a href="tel:112" className="underline underline-offset-2 hover:no-underline font-black bg-red-800 px-2 py-0.5 rounded">
          112 (National Helpline)
        </a>{' '}
        · Meditrust Priority Desk:{' '}
        <a href="tel:+917028025717" className="underline underline-offset-2 font-black">
          +91 7028025717
        </a>
      </span>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-red-800 transition-colors"
        aria-label="Dismiss emergency banner"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}
