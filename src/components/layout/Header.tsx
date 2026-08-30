'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Menu, X, ChevronDown, ChevronRight, Stethoscope,
  MessageCircle, Building2, UserPlus, Heart,
  BookOpen, ArrowRight, ShieldCheck
} from 'lucide-react'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'
import { WOMENS_HEALTH_STRATEGIC_TOPICS } from '@/data/womensHealthStrategicArticles'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [rxScannerOpen, setRxScannerOpen] = useState(false)
  const [womensDropdownOpen, setWomensDropdownOpen] = useState(false)
  const [mobileWomensOpen, setMobileWomensOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-3.5 px-3 sm:px-6"
        role="banner"
      >
        <div className="max-w-[1360px] mx-auto w-full">
          <div
            className={`flex items-center justify-between transition-all duration-300 px-4 sm:px-5 py-2 rounded-full ${
              scrolled
                ? 'bg-white/95 backdrop-blur-xl border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)]'
                : 'bg-white/85 backdrop-blur-md border border-slate-200/60 shadow-[0_2px_10px_rgba(0,0,0,0.02)]'
            }`}
          >
            
            {/* ── 1. LOGO ── */}
            <Link
              href="/"
              className="flex items-center gap-2.5 flex-shrink-0 group"
              aria-label="Meditrust AI Home"
            >
              <div className="w-8 h-8 rounded-full bg-slate-100/80 border border-slate-200/80 flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
                <img
                  src="/logo.png"
                  alt="Meditrust AI"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm tracking-tight text-slate-900">
                  Meditrust<span className="text-teal-700 font-semibold">.AI</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 hidden sm:inline-block" />
              </div>
            </Link>

            {/* ── 2. CLEAN DESKTOP NAV ── */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 text-[13px] font-medium text-slate-600">
              
              {/* Women's Health Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setWomensDropdownOpen(true)}
                onMouseLeave={() => setWomensDropdownOpen(false)}
              >
                <Link
                  href="/womens-health"
                  className={`px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5 ${
                    womensDropdownOpen
                      ? 'bg-slate-100 text-slate-900'
                      : 'hover:text-slate-900 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span>Women&apos;s Health</span>
                  <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${womensDropdownOpen ? 'rotate-180 text-slate-700' : ''}`} />
                </Link>

                {/* Clean Mega Dropdown Menu */}
                {womensDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[680px] z-50 animate-fadeIn">
                    <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-xl space-y-4">
                      
                      {/* Top 5 Quick Links */}
                      <div className="grid grid-cols-5 gap-1.5 p-1.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                        <Link
                          href="/womens-health"
                          className="p-2 rounded-xl hover:bg-white transition-colors flex items-center gap-1.5 font-medium text-slate-900"
                        >
                          <span>🌸</span>
                          <div>
                            <span className="block font-semibold leading-none text-3xs">Master Hub</span>
                            <span className="text-[9px] text-slate-500 font-normal">7 Life Stages</span>
                          </div>
                        </Link>

                        <Link
                          href="/womens-marketplace"
                          className="p-2 rounded-xl hover:bg-white transition-colors flex items-center gap-1.5 font-medium text-slate-900"
                        >
                          <span>🛍️</span>
                          <div>
                            <span className="block font-semibold leading-none text-3xs">Marketplace</span>
                            <span className="text-[9px] text-rose-600 font-bold">Sakhi Care</span>
                          </div>
                        </Link>

                        <Link
                          href="/womens-health/blood-tests"
                          className="p-2 rounded-xl hover:bg-white transition-colors flex items-center gap-1.5 font-medium text-slate-900"
                        >
                          <span>🩸</span>
                          <div>
                            <span className="block font-semibold leading-none text-3xs">Blood Tests</span>
                            <span className="text-[9px] text-slate-500 font-normal">35+ Panels</span>
                          </div>
                        </Link>

                        <Link
                          href="/womens-schemes-funds"
                          className="p-2 rounded-xl hover:bg-white transition-colors flex items-center gap-1.5 font-medium text-slate-900"
                        >
                          <span>🏛️</span>
                          <div>
                            <span className="block font-semibold leading-none text-3xs">Govt &amp; CSR</span>
                            <span className="text-[9px] text-slate-500 font-normal">35+ Schemes</span>
                          </div>
                        </Link>

                        <Link
                          href="/reports/womens-health-india-2026"
                          className="p-2 rounded-xl hover:bg-white transition-colors flex items-center gap-1.5 font-medium text-slate-900"
                        >
                          <span>📊</span>
                          <div>
                            <span className="block font-semibold leading-none text-3xs">Report</span>
                            <span className="text-[9px] text-slate-500 font-normal">2026–30</span>
                          </div>
                        </Link>
                      </div>

                      {/* Clinical Topics Grid */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between px-1 border-b border-slate-100 pb-1.5">
                          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                            Specialized Topics
                          </span>
                          <Link
                            href="/womens-health/health-library"
                            className="text-3xs text-slate-500 hover:text-teal-700 flex items-center gap-1 font-semibold"
                          >
                            <span>View All Guides</span>
                            <ArrowRight className="w-2.5 h-2.5" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-3 gap-1.5">
                          {WOMENS_HEALTH_STRATEGIC_TOPICS.map((topic) => (
                            <Link
                              key={topic.id}
                              href={`/blog/${topic.slug}`}
                              className="p-2 rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2 text-xs text-slate-700 hover:text-slate-950 font-medium"
                            >
                              <span>{topic.icon}</span>
                              <span className="truncate">{topic.shortLabel}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* Blood Tests */}
              <Link
                href="/womens-health/blood-tests"
                className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>Blood Tests</span>
              </Link>

              {/* Sakhi Bot */}
              <Link
                href="/bot"
                className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>Sakhi Bot</span>
              </Link>

              {/* Membership */}
              <Link
                href="/pricing"
                className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>Membership</span>
              </Link>

              {/* Corporate */}
              <Link
                href="/corporate-wellness"
                className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>Corporate</span>
              </Link>

              {/* For Doctors */}
              <Link
                href="/for-doctors"
                className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>For Doctors</span>
              </Link>

            </nav>

            {/* ── 3. RIGHT ACTIONS ── */}
            <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0">
              
              {/* WhatsApp Quick Trigger */}
              <a
                href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200/80 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                <span>WhatsApp</span>
              </a>

              {/* Primary Consultation Button */}
              <Link
                href="/symptom-checker"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-[13px] font-semibold transition-colors shadow-2xs"
              >
                <Stethoscope className="w-3.5 h-3.5 text-teal-400" />
                <span>Ask Dr. Arya</span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-1.5 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER OVERLAY ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="Meditrust" className="w-6 h-6 object-contain" />
                  <span className="font-bold text-slate-900 text-sm">Meditrust AI</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links List */}
              <div className="flex flex-col gap-1 text-sm font-medium text-slate-700">
                
                {/* Sakhi Bot */}
                <Link
                  href="/bot"
                  onClick={() => setMobileOpen(false)}
                  className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200/60 flex items-center justify-between text-slate-900 font-semibold"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">🤖</span>
                    <div>
                      <span className="block font-bold text-xs">Sakhi Bot (WA &amp; Telegram)</span>
                      <span className="text-3xs text-slate-500 font-normal">24/7 AI Health Companion</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>

                {/* Dr. Arya */}
                <Link
                  href="/symptom-checker"
                  onClick={() => setMobileOpen(false)}
                  className="p-3 rounded-2xl hover:bg-slate-50 flex items-center justify-between text-slate-800"
                >
                  <div className="flex items-center gap-2.5">
                    <Stethoscope className="w-4 h-4 text-teal-600" />
                    <span>Dr. Arya AI Consultation</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>

                {/* Women's Health Accordion */}
                <div className="rounded-2xl border border-slate-200/60 overflow-hidden">
                  <div className="p-3 flex items-center justify-between">
                    <Link
                      href="/womens-health"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2 text-slate-900 font-semibold text-xs"
                    >
                      <span>🌸</span>
                      <span>Women&apos;s Health Hub</span>
                    </Link>
                    <button
                      onClick={() => setMobileWomensOpen(!mobileWomensOpen)}
                      className="p-1 text-slate-500"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileWomensOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {mobileWomensOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-1 border-t border-slate-100 text-xs bg-slate-50">
                      <Link
                        href="/womens-health/blood-tests"
                        onClick={() => setMobileOpen(false)}
                        className="p-2 rounded-xl bg-white text-slate-800 font-medium flex items-center gap-2"
                      >
                        <span>🩸</span>
                        <span>Blood Tests (35+ Panels)</span>
                      </Link>

                      <Link
                        href="/womens-schemes-funds"
                        onClick={() => setMobileOpen(false)}
                        className="p-2 rounded-xl bg-white text-slate-800 font-medium flex items-center gap-2"
                      >
                        <span>🏛️</span>
                        <span>Govt &amp; CSR Schemes</span>
                      </Link>

                      <Link
                        href="/reports/womens-health-india-2026"
                        onClick={() => setMobileOpen(false)}
                        className="p-2 rounded-xl bg-white text-slate-800 font-medium flex items-center gap-2"
                      >
                        <span>📊</span>
                        <span>National Report (2026–30)</span>
                      </Link>
                    </div>
                  )}
                </div>

                {/* Blood Tests */}
                <Link
                  href="/womens-health/blood-tests"
                  onClick={() => setMobileOpen(false)}
                  className="p-3 rounded-2xl hover:bg-slate-50 flex items-center justify-between text-slate-800"
                >
                  <div className="flex items-center gap-2.5">
                    <span>🩸</span>
                    <span>Blood Tests for Women</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>

                {/* Membership */}
                <Link
                  href="/pricing"
                  onClick={() => setMobileOpen(false)}
                  className="p-3 rounded-2xl hover:bg-slate-50 flex items-center justify-between text-slate-800"
                >
                  <div className="flex items-center gap-2.5">
                    <span>💎</span>
                    <span>Sakhi Membership Plans</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>

                {/* Corporate */}
                <Link
                  href="/corporate-wellness"
                  onClick={() => setMobileOpen(false)}
                  className="p-3 rounded-2xl hover:bg-slate-50 flex items-center justify-between text-slate-800"
                >
                  <div className="flex items-center gap-2.5">
                    <span>🏢</span>
                    <span>Corporate Wellness</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>

                {/* For Doctors */}
                <Link
                  href="/for-doctors"
                  onClick={() => setMobileOpen(false)}
                  className="p-3 rounded-2xl hover:bg-slate-50 flex items-center justify-between text-slate-800"
                >
                  <div className="flex items-center gap-2.5">
                    <UserPlus className="w-4 h-4 text-blue-600" />
                    <span>For Doctors / Clinics</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>

              </div>

            </div>

            {/* Drawer Bottom Actions */}
            <div className="space-y-2 pt-4 border-t border-slate-100">
              <a
                href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#008069] text-white font-semibold text-xs shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href="https://t.me/MeditrustAiAryaBot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#229ED9] text-white font-semibold text-xs shadow-xs"
              >
                <span>Chat on Telegram (@MeditrustAiAryaBot)</span>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Prescription Scanner Modal */}
      {rxScannerOpen && (
        <PrescriptionScannerModal
          isOpen={rxScannerOpen}
          onClose={() => setRxScannerOpen(false)}
        />
      )}
    </>
  )
}
