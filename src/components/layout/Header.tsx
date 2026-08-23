'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Menu, X, Heart, Activity, FlaskConical,
  LayoutDashboard, Phone, Upload, Stethoscope, ChevronRight,
  Sparkles, MessageCircle, ShieldCheck, UserPlus
} from 'lucide-react'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [rxScannerOpen, setRxScannerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6`}
        role="banner"
      >
        <div className="max-w-[1400px] mx-auto w-full">
          <div
            className={`flex items-center justify-between transition-all duration-300 px-4 sm:px-6 py-2.5 rounded-full ${
              scrolled
                ? 'bg-white/95 backdrop-blur-xl border border-slate-200/90 shadow-md'
                : 'bg-white/80 backdrop-blur-md border border-slate-200/60 shadow-xs'
            }`}
          >
            
            {/* 1. Left Logo Pill */}
            <Link
              href="/"
              className="flex items-center gap-2.5 flex-shrink-0 group"
              aria-label="Meditrust AI Home"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
                <img
                  src="/logo.png"
                  alt="Meditrust AI"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm sm:text-base text-slate-900 tracking-tight flex items-center gap-1.5">
                  <span>Meditrust AI</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
                </span>
                <span className="text-[10px] text-slate-400 font-medium hidden sm:block -mt-1">
                  Healthcare Companion
                </span>
              </div>
            </Link>

            {/* 2. Center Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 text-xs xl:text-sm font-semibold text-slate-600">
              <Link
                href="/symptom-checker"
                className="px-3.5 py-1.5 rounded-full hover:text-blue-600 hover:bg-blue-50/60 transition-colors flex items-center gap-1.5"
              >
                <Stethoscope className="w-4 h-4 text-blue-600" />
                <span>Dr. Arya AI</span>
              </Link>

              <Link
                href="/womens-health"
                className="px-3.5 py-1.5 rounded-full bg-rose-50 hover:bg-rose-100/80 text-rose-900 border border-rose-200/90 transition-all flex items-center gap-1.5 font-bold group shadow-2xs"
              >
                <span className="text-sm">🌸</span>
                <span>Women&apos;s Health</span>
                <span className="px-1.5 py-0.5 rounded-full text-[9px] font-black bg-rose-200 text-rose-800 border border-rose-300 group-hover:bg-rose-300 transition-colors uppercase tracking-wider">
                  Exclusive
                </span>
              </Link>

              <Link
                href="/womens-health/blood-tests"
                className="px-3.5 py-1.5 rounded-full hover:text-rose-700 hover:bg-rose-50/70 transition-colors flex items-center gap-1.5 text-slate-700 font-semibold group"
              >
                <span className="text-sm">🩸</span>
                <span>Blood Tests for Women</span>
                <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-rose-100 text-rose-700 border border-rose-200 group-hover:bg-rose-200 transition-colors">
                  Labs
                </span>
              </Link>

              <Link
                href="/reminders"
                className="px-3.5 py-1.5 rounded-full hover:text-blue-600 hover:bg-blue-50/60 transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-slate-500" />
                <span>Reminders</span>
              </Link>

              <Link
                href="/for-doctors"
                className="px-3.5 py-1.5 rounded-full hover:text-blue-700 hover:bg-blue-50/70 transition-colors flex items-center gap-1.5 text-slate-700 font-semibold group"
              >
                <UserPlus className="w-3.5 h-3.5 text-blue-600" />
                <span>For Doctors</span>
                <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-blue-100 text-blue-700 border border-blue-200 group-hover:bg-blue-200 transition-colors">
                  Join
                </span>
              </Link>
            </nav>

            {/* 3. Right Action Buttons */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <a
                href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-emerald-300 bg-white hover:bg-emerald-50 text-emerald-800 text-xs font-semibold shadow-2xs transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp AI</span>
              </a>

              <Link
                href="/symptom-checker"
                className="vaidya-btn-primary text-xs sm:text-sm py-2 px-4 sm:px-5"
              >
                <Stethoscope className="w-4 h-4" />
                <span>Ask Dr. Arya</span>
              </Link>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* ── MOBILE SLIDE-OUT MENU OVERLAY ── */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex justify-end">
            <div className="w-[300px] h-full bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-fade-left">
              
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <img src="/logo.png" alt="Meditrust" className="w-7 h-7 object-contain" />
                    <span className="font-bold text-slate-900 text-sm">Meditrust AI</span>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
                  <Link
                    href="/symptom-checker"
                    onClick={() => setMobileOpen(false)}
                    className="p-3 rounded-2xl hover:bg-blue-50 hover:text-blue-600 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <Stethoscope className="w-4 h-4 text-blue-600" />
                      <span>Dr. Arya AI Doctor</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/womens-health"
                    onClick={() => setMobileOpen(false)}
                    className="p-3.5 rounded-2xl bg-rose-50 hover:bg-rose-100/90 text-rose-950 border border-rose-200 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">🌸</span>
                      <span className="font-bold text-sm">Women&apos;s Health Portal</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-rose-200 text-rose-800 uppercase">
                      Exclusive
                    </span>
                  </Link>

                  <Link
                    href="/womens-health/blood-tests"
                    onClick={() => setMobileOpen(false)}
                    className="p-3 rounded-2xl hover:bg-rose-50 hover:text-rose-800 flex items-center justify-between text-slate-800 font-semibold"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-base">🩸</span>
                      <span>Blood Tests for Women</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-700">
                      35+ Tests
                    </span>
                  </Link>

                  <Link
                    href="/reminders"
                    onClick={() => setMobileOpen(false)}
                    className="p-3 rounded-2xl hover:bg-blue-50 hover:text-blue-600 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <Sparkles className="w-4 h-4 text-slate-500" />
                      <span>Smart Reminders</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>

                  <Link
                    href="/for-doctors"
                    onClick={() => setMobileOpen(false)}
                    className="p-3.5 rounded-2xl bg-blue-50/70 hover:bg-blue-100/90 text-blue-950 border border-blue-200/80 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <UserPlus className="w-4 h-4 text-blue-600" />
                      <span className="font-bold text-sm">Onboard as a Doctor / Clinic</span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-200 text-blue-800">
                      Register
                    </span>
                  </Link>
                </div>
              </div>

              <div className="space-y-3 pt-6 border-t border-slate-100">
                <a
                  href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-2xl bg-emerald-600 text-white font-semibold text-xs shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href="tel:+917028025717"
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-2xl bg-amber-50 text-amber-950 font-semibold text-xs border border-amber-200"
                >
                  <Phone className="w-4 h-4 text-amber-700" />
                  <span>Call Helpline: +91 7028025717</span>
                </a>
              </div>

            </div>
          </div>
        )}
      </header>

      <PrescriptionScannerModal isOpen={rxScannerOpen} onClose={() => setRxScannerOpen(false)} />
    </>
  )
}
