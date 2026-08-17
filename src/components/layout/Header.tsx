'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Menu, X, Heart, Activity, FlaskConical,
  LayoutDashboard, Phone, Upload, Stethoscope, ShieldCheck, ArrowRight
} from 'lucide-react'
import AuthModal, { type UserProfile } from '@/components/common/AuthModal'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [rxScannerOpen, setRxScannerOpen] = useState(false)
  const [user, setUser] = useState<UserProfile | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    const savedUser = localStorage.getItem('meditrust_user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (e) {}
    }

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs'
            : 'bg-white border-b border-slate-100'
        }`}
        role="banner"
      >
        {/* ── Strict Single-Line Header (Zero Word-Under-Word Wrapping) ── */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-18 gap-2 sm:gap-4">
            
            {/* 1. Brand Logo in Single Clean Line */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group" aria-label="Meditrust AI home">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center p-1.5 shadow-2xs transition-transform duration-200 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="Meditrust AI logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg sm:text-xl font-black tracking-tight text-slate-950 font-display whitespace-nowrap">
                  Meditrust <span className="text-teal-700">AI</span>
                </span>
                <span className="hidden xl:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-3xs font-black uppercase tracking-wider bg-teal-50 text-teal-800 border border-teal-200 whitespace-nowrap">
                  <ShieldCheck className="w-3 h-3 text-teal-600" />
                  W.H.O. Standard
                </span>
              </div>
            </Link>

            {/* 2. Desktop Navigation Links (Single Line, Whitespace-Nowrap) */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-bold text-slate-700 whitespace-nowrap">
              <Link
                href="/symptom-checker"
                className="px-3 py-2 rounded-xl hover:text-teal-700 hover:bg-teal-50/70 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <Stethoscope className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>AI Doctor</span>
              </Link>

              <Link
                href="/#specialties"
                className="px-3 py-2 rounded-xl hover:text-teal-700 hover:bg-teal-50/70 transition-colors whitespace-nowrap"
              >
                15+ Specialties
              </Link>

              <Link
                href="/dashboard"
                className="px-3 py-2 rounded-xl hover:text-teal-700 hover:bg-teal-50/70 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <LayoutDashboard className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Explain Reports</span>
              </Link>

              <Link
                href="/medication-comparison"
                className="px-3 py-2 rounded-xl hover:text-teal-700 hover:bg-teal-50/70 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <Heart className="w-4 h-4 text-rose-500 flex-shrink-0" />
                <span>Generic Savings (80%)</span>
              </Link>

              <Link
                href="/lab-test-comparison"
                className="px-3 py-2 rounded-xl hover:text-teal-700 hover:bg-teal-50/70 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <FlaskConical className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span>13+ Labs</span>
              </Link>

              <Link
                href="/pricing"
                className="px-3 py-2 rounded-xl hover:text-teal-700 hover:bg-teal-50/70 transition-colors whitespace-nowrap"
              >
                Pricing
              </Link>
            </nav>

            {/* 3. Right CTAs in Single Line */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 whitespace-nowrap">
              {/* Direct Call Button */}
              <a
                href="tel:+917028025717"
                className="flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-200 transition-colors text-xs font-bold whitespace-nowrap shadow-2xs"
                title="Call 24/7 Helpline"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600 animate-pulse flex-shrink-0" />
                <span className="hidden sm:inline whitespace-nowrap">+91 7028025717</span>
                <span className="sm:hidden font-black">Call</span>
              </a>

              {/* Primary Consultation CTA */}
              <Link
                href="/symptom-checker"
                className="flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping hidden sm:block flex-shrink-0" />
                <span className="whitespace-nowrap">Consult Dr. Arya</span>
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors flex-shrink-0"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-5 space-y-3 shadow-xl animate-fade-down">
            <div className="space-y-1">
              <Link
                href="/symptom-checker"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between p-3 rounded-2xl hover:bg-teal-50 text-slate-900 font-bold text-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-800 flex items-center justify-center">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-slate-900">Dr. Arya AI Doctor</div>
                    <div className="text-2xs text-slate-500 font-normal">Marathi, Hindi & English 24×7</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                href="/dashboard"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between p-3 rounded-2xl hover:bg-blue-50 text-slate-900 font-bold text-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                    <LayoutDashboard className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-slate-900">Explain Blood Reports</div>
                    <div className="text-2xs text-slate-500 font-normal">CBC, Thyroid, Vitamin D decoded</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                href="/medication-comparison"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between p-3 rounded-2xl hover:bg-rose-50 text-slate-900 font-bold text-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-rose-100 text-rose-800 flex items-center justify-center">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-slate-900">Generic Savings (80%)</div>
                    <div className="text-2xs text-slate-500 font-normal">PMBJP Jan Aushadhi vs Brand</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>

              <Link
                href="/lab-test-comparison"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between p-3 rounded-2xl hover:bg-purple-50 text-slate-900 font-bold text-sm"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center">
                    <FlaskConical className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-slate-900">13+ Diagnostic Labs</div>
                    <div className="text-2xs text-slate-500 font-normal">Metropolis, Thyrocare & Sahyadri</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            <div className="border-t border-slate-100 pt-3 flex flex-col gap-2.5">
              <a
                href="tel:+917028025717"
                className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-amber-100 text-amber-950 font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Call Helpline: +91 7028025717</span>
              </a>

              <button
                onClick={() => {
                  setMobileOpen(false)
                  setRxScannerOpen(true)
                }}
                className="w-full flex items-center justify-center gap-2 p-3 rounded-2xl bg-slate-900 text-white font-bold text-sm"
              >
                <Upload className="w-4 h-4" />
                <span>Upload Prescription</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Modals */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={(u) => {
          setUser(u)
          setAuthModalOpen(false)
        }}
      />
      <PrescriptionScannerModal isOpen={rxScannerOpen} onClose={() => setRxScannerOpen(false)} />
    </>
  )
}
