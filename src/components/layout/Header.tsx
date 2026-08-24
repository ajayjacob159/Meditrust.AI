'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Menu, X, Heart, Activity, FlaskConical,
  LayoutDashboard, Phone, Upload, Stethoscope, ChevronRight,
  Sparkles, MessageCircle, ShieldCheck, UserPlus, ChevronDown,
  BookOpen, Droplets, FileText, ArrowRight, Layers
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-4 px-3 sm:px-6`}
        role="banner"
      >
        <div className="max-w-[1440px] mx-auto w-full">
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
              
              {/* Dr. Arya Link */}
              <Link
                href="/symptom-checker"
                className="px-3.5 py-1.5 rounded-full hover:text-blue-600 hover:bg-blue-50/60 transition-colors flex items-center gap-1.5"
              >
                <Stethoscope className="w-4 h-4 text-blue-600" />
                <span>Dr. Arya AI</span>
              </Link>

              {/* ── WOMEN'S HEALTH WITH MEGA-DROPDOWN ── */}
              <div
                className="relative"
                onMouseEnter={() => setWomensDropdownOpen(true)}
                onMouseLeave={() => setWomensDropdownOpen(false)}
              >
                <Link
                  href="/womens-health"
                  className={`px-3.5 py-1.5 rounded-full transition-all flex items-center gap-1.5 font-bold group shadow-2xs ${
                    womensDropdownOpen
                      ? 'bg-rose-100 text-rose-950 border border-rose-300'
                      : 'bg-rose-50 hover:bg-rose-100/80 text-rose-900 border border-rose-200/90'
                  }`}
                >
                  <span className="text-sm">🌸</span>
                  <span>Women&apos;s Health</span>
                  <span className="px-1.5 py-0.5 rounded-full text-[9px] font-black bg-rose-200 text-rose-800 border border-rose-300 group-hover:bg-rose-300 transition-colors uppercase tracking-wider">
                    Exclusive
                  </span>
                  <ChevronDown className={`w-3.5 h-3.5 text-rose-700 transition-transform ${womensDropdownOpen ? 'rotate-180' : ''}`} />
                </Link>

                {/* Mega Dropdown Menu */}
                {womensDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[760px] z-50 animate-fadeIn">
                    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl space-y-5">
                      
                      {/* Top Quick Links Bar */}
                      <div className="grid grid-cols-3 gap-3 p-3 rounded-2xl bg-rose-50/60 border border-rose-100 text-xs">
                        <Link
                          href="/womens-health"
                          className="p-2.5 rounded-xl hover:bg-white transition-colors flex items-center gap-2 font-bold text-rose-950"
                        >
                          <span className="text-base">🌸</span>
                          <div>
                            <span className="block leading-none">Master Portal</span>
                            <span className="text-[10px] text-rose-700/80 font-normal">Overview &amp; Tools</span>
                          </div>
                        </Link>

                        <Link
                          href="/womens-health/blood-tests"
                          className="p-2.5 rounded-xl hover:bg-white transition-colors flex items-center gap-2 font-bold text-rose-950"
                        >
                          <span className="text-base">🩸</span>
                          <div>
                            <span className="block leading-none">Blood Tests</span>
                            <span className="text-[10px] text-rose-700/80 font-normal">35+ Lab Panels</span>
                          </div>
                        </Link>

                        <Link
                          href="/reports/womens-health-india-2026"
                          className="p-2.5 rounded-xl hover:bg-white transition-colors flex items-center gap-2 font-bold text-rose-950"
                        >
                          <span className="text-base">📊</span>
                          <div>
                            <span className="block leading-none">National Report</span>
                            <span className="text-[10px] text-rose-700/80 font-normal">2026–2030 Projections</span>
                          </div>
                        </Link>
                      </div>

                      {/* 9 Strategic Topics Section Header */}
                      <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                        <span className="text-[11px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5 text-rose-600" />
                          <span>9 Strategic Insights &amp; Health Topics (Trending)</span>
                        </span>
                        <Link
                          href="/womens-health/health-library"
                          className="text-[11px] font-bold text-rose-700 hover:text-rose-900 flex items-center gap-1"
                        >
                          <span>View All Guides</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {/* 9 Strategic Topics Grid (3x3) */}
                      <div className="grid grid-cols-3 gap-2.5">
                        {WOMENS_HEALTH_STRATEGIC_TOPICS.map((topic) => (
                          <Link
                            key={topic.id}
                            href={`/blog/${topic.slug}`}
                            className="p-3 rounded-2xl hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-all space-y-1 group/item flex flex-col justify-between"
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-base">{topic.icon}</span>
                              <span className="font-bold text-xs text-slate-900 group-hover/item:text-rose-700 leading-snug line-clamp-1">
                                {topic.shortLabel}
                              </span>
                            </div>
                            <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed pl-6">
                              {topic.description}
                            </p>
                          </Link>
                        ))}
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* Blood Tests Direct Link */}
              <Link
                href="/womens-health/blood-tests"
                className="px-3.5 py-1.5 rounded-full hover:text-rose-700 hover:bg-rose-50/70 transition-colors flex items-center gap-1.5 text-slate-700 font-semibold group"
              >
                <span className="text-sm">🩸</span>
                <span>Blood Tests</span>
                <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-rose-100 text-rose-700 border border-rose-200 group-hover:bg-rose-200 transition-colors">
                  Labs
                </span>
              </Link>

              {/* Reminders */}
              <Link
                href="/reminders"
                className="px-3.5 py-1.5 rounded-full hover:text-blue-600 hover:bg-blue-50/60 transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-slate-500" />
                <span>Reminders</span>
              </Link>

              {/* For Doctors */}
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

              {/* Corporate Wellness */}
              <Link
                href="/corporate-wellness"
                className="px-3.5 py-1.5 rounded-full hover:text-blue-700 hover:bg-blue-50/70 transition-colors flex items-center gap-1.5 text-slate-700 font-semibold group"
              >
                <span className="text-sm">🏢</span>
                <span>Corporate Wellness</span>
                <span className="px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 group-hover:bg-emerald-200 transition-colors">
                  HR Plans
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
                <MessageCircle className="w-4 h-4 text-[#25d366]" />
                <span>WhatsApp AI</span>
              </a>

              <Link
                href="/symptom-checker"
                className="inline-flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-600 hover:to-emerald-600 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all hover:-translate-y-0.5 active:scale-95"
              >
                <span>Ask Dr. Arya</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
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
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div className="space-y-5">
              
              {/* Drawer Top */}
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

              {/* Mobile Links */}
              <div className="flex flex-col gap-1 text-sm font-semibold text-slate-700">
                
                {/* Dr. Arya */}
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

                {/* Women's Health Accordion */}
                <div className="rounded-2xl bg-rose-50/70 border border-rose-200 overflow-hidden">
                  <div className="p-3.5 flex items-center justify-between">
                    <Link
                      href="/womens-health"
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center gap-2.5 text-rose-950 font-bold text-sm"
                    >
                      <span className="text-lg">🌸</span>
                      <span>Women&apos;s Health</span>
                    </Link>
                    <button
                      onClick={() => setMobileWomensOpen(!mobileWomensOpen)}
                      className="p-1 text-rose-700"
                    >
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileWomensOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>

                  {/* Accordion Sub-links */}
                  {mobileWomensOpen && (
                    <div className="px-3 pb-3 pt-1 space-y-1.5 border-t border-rose-200/60 text-xs">
                      <Link
                        href="/womens-health/blood-tests"
                        onClick={() => setMobileOpen(false)}
                        className="p-2 rounded-xl bg-white text-rose-900 font-bold flex items-center gap-2"
                      >
                        <span>🩸</span>
                        <span>Blood Tests Directory (35+ Tests)</span>
                      </Link>
                      <Link
                        href="/reports/womens-health-india-2026"
                        onClick={() => setMobileOpen(false)}
                        className="p-2 rounded-xl bg-white text-rose-900 font-bold flex items-center gap-2"
                      >
                        <span>📊</span>
                        <span>National Research Report 2026</span>
                      </Link>

                      <div className="pt-2 text-[10px] font-bold uppercase tracking-wider text-rose-800 px-1">
                        9 Strategic Topics:
                      </div>

                      {WOMENS_HEALTH_STRATEGIC_TOPICS.map((topic) => (
                        <Link
                          key={topic.id}
                          href={`/blog/${topic.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="p-2 rounded-lg hover:bg-rose-100/60 text-slate-800 flex items-center gap-2 text-3xs font-semibold"
                        >
                          <span>{topic.icon}</span>
                          <span className="truncate">{topic.shortLabel}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Blood Tests Direct Link */}
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

                {/* Reminders */}
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

                {/* For Doctors */}
                <Link
                  href="/for-doctors"
                  onClick={() => setMobileOpen(false)}
                  className="p-3.5 rounded-2xl bg-blue-50/70 hover:bg-blue-100/90 text-blue-950 border border-blue-200/80 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <UserPlus className="w-4 h-4 text-blue-600" />
                    <span className="font-bold text-sm">For Doctors / Clinics</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-blue-200 text-blue-800">
                    Join
                  </span>
                </Link>

                {/* Corporate Wellness */}
                <Link
                  href="/corporate-wellness"
                  onClick={() => setMobileOpen(false)}
                  className="p-3.5 rounded-2xl bg-emerald-50/70 hover:bg-emerald-100/90 text-emerald-950 border border-emerald-200/80 flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base">🏢</span>
                    <span className="font-bold text-sm">Corporate Employer Wellness</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-200 text-emerald-800">
                    HR Plans
                  </span>
                </Link>
              </div>

            </div>

            {/* Mobile Actions */}
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
                className="w-full flex items-center justify-center gap-2 p-3 rounded-2xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50"
              >
                <Phone className="w-4 h-4 text-teal-600" />
                <span>Call Doctor Desk (+91 7028025717)</span>
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
