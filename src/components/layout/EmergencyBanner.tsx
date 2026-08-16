'use client'

import { useState } from 'react'
import { X, Phone } from 'lucide-react'

export default function EmergencyBanner() {
  const [dismissed, setDismissed] = useState(false)

  if (dismissed) return null

  return (
    <div
      role="alert"
      aria-live="polite"
      className="bg-red-600 text-white text-center text-xs sm:text-sm font-semibold py-2 px-4 flex items-center justify-center gap-3 relative"
    >
      <Phone className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
      <span>
        <strong>Medical Emergency?</strong> Call{' '}
        <a href="tel:911" className="underline underline-offset-2 hover:no-underline font-black">
          911
        </a>{' '}
        immediately. Meditrust AI does not provide emergency medical services.
      </span>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-red-700 transition-colors"
        aria-label="Dismiss emergency banner"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  )
}
