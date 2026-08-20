'use client'

import { useState, useEffect } from 'react'
import { Download, X, Smartphone, Sparkles, CheckCircle2 } from 'lucide-react'

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)

  useEffect(() => {
    // Register Service Worker for PWA Offline Caching & Google Play TWA
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .catch((err) => console.log('Service Worker error:', err))
    }

    // Check if already in standalone PWA mode
    if (window.matchMedia('(display-mode: standalone)').matches || (window.navigator as any).standalone) {
      setIsInstalled(true)
      return
    }

    const handler = (e: any) => {
      e.preventDefault()
      setDeferredPrompt(e)
      // Check if user dismissed recently
      const dismissed = sessionStorage.getItem('pwa_prompt_dismissed')
      if (!dismissed) {
        setIsVisible(true)
      }
    }

    window.addEventListener('beforeinstallprompt', handler)

    window.addEventListener('appinstalled', () => {
      setIsInstalled(true)
      setIsVisible(false)
      setDeferredPrompt(null)
    })

    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    if (outcome === 'accepted') {
      setIsVisible(false)
    }
    setDeferredPrompt(null)
  }

  const handleDismiss = () => {
    setIsVisible(false)
    sessionStorage.setItem('pwa_prompt_dismissed', 'true')
  }

  if (!isVisible || isInstalled) return null

  return (
    <div className="md:hidden fixed top-16 left-3 right-3 z-40 animate-fade-in">
      <div className="bg-slate-900/95 backdrop-blur-md border border-teal-500/40 rounded-2xl p-3 text-white shadow-2xl flex items-center justify-between gap-3">
        
        <div className="flex items-center gap-2.5">
          <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/40 flex items-center justify-center flex-shrink-0">
            <img src="/logo.png" alt="Meditrust AI App" className="w-6 h-6 object-contain" />
          </div>
          <div>
            <div className="flex items-center gap-1">
              <strong className="text-xs font-black text-white">Install Meditrust AI</strong>
              <span className="text-[9px] bg-teal-500/30 text-teal-300 font-bold px-1.5 py-0.2 rounded-md">Android App</span>
            </div>
            <p className="text-[10px] text-slate-300">
              Fast 24/7 AI Doctor & instant 80% medicine savings
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 flex-shrink-0">
          <button
            onClick={handleInstallClick}
            className="px-3 py-1.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-black text-2xs shadow flex items-center gap-1 transition-all active:scale-95"
          >
            <Download className="w-3 h-3" />
            <span>Install</span>
          </button>
          <button
            onClick={handleDismiss}
            className="p-1.5 rounded-xl text-slate-400 hover:text-white"
            aria-label="Dismiss"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  )
}
