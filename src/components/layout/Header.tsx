'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Menu, X, ChevronDown, ChevronRight, Stethoscope,
  MessageCircle, Building2, UserPlus, Heart,
  BookOpen, ArrowRight, ShieldCheck, ShoppingBag, User,
  Sparkles, Activity, Tag, Check
} from 'lucide-react'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'
import { WOMENS_HEALTH_MASTER_SEGMENTS } from '@/data/womensHealthMasterSegments'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'

export default function Header() {
  const { cartCount, openCart } = useCart()
  const { user, isAuthenticated, openAuthModal } = useAuth()
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

  // Segments Filtered by Group
  const periodSegments = WOMENS_HEALTH_MASTER_SEGMENTS.filter(
    (s) => s.category === 'Period & Hormones'
  )
  const maternitySegments = WOMENS_HEALTH_MASTER_SEGMENTS.filter(
    (s) => s.category === 'Fertility & Maternity'
  )
  const clinicalSegments = WOMENS_HEALTH_MASTER_SEGMENTS.filter(
    (s) => s.category === 'Clinical & Oncology'
  )
  const femtechAndEcosystemSegments = WOMENS_HEALTH_MASTER_SEGMENTS.filter(
    (s) => s.category === 'FemTech & Wellness' || s.category === 'Ecosystem & Enterprise'
  )

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-3.5 px-3 sm:px-6"
        role="banner"
      >
        <div className="max-w-[1350px] mx-auto">
          <div
            className={`flex items-center justify-between gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
              scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80 text-slate-800'
                : 'bg-white/85 backdrop-blur-md shadow-sm border border-slate-200/60 text-slate-800'
            }`}
          >
            
            {/* ── 1. BRAND LOGO ── */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center p-1.5 transition-transform group-hover:scale-105">
                <img src="/logo.png" alt="Meditrust AI" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline leading-none">
                  <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 font-display">
                    Medi<span className="text-teal-600">trust</span>
                  </span>
                  <span className="font-bold text-xs sm:text-sm text-emerald-600 ml-0.5">
                    AI
                  </span>
                </div>
                <span className="text-[9px] font-semibold text-slate-500 tracking-wider uppercase leading-none mt-0.5">
                  Women&apos;s Health &amp; Generics
                </span>
              </div>
            </Link>

            {/* ── 2. DESKTOP NAVIGATION MENU ── */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold text-slate-600">
              
              {/* Master Hub */}
              <Link
                href="/womens-health"
                className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>Master Hub</span>
              </Link>

              {/* Mega Dropdown: 38 Clinical & Enterprise Segments */}
              <div
                className="relative"
                onMouseEnter={() => setWomensDropdownOpen(true)}
                onMouseLeave={() => setWomensDropdownOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setWomensDropdownOpen(!womensDropdownOpen)}
                  className={`px-3 py-1.5 rounded-full transition-colors flex items-center gap-1.5 ${
                    womensDropdownOpen
                      ? 'text-rose-700 bg-rose-50 font-bold'
                      : 'hover:text-slate-900 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <span>All 38 Health Segments</span>
                  <ChevronDown className={`w-3 h-3 text-slate-400 transition-transform ${womensDropdownOpen ? 'rotate-180 text-rose-700' : ''}`} />
                </button>

                {/* 4-Column Mega Dropdown Menu */}
                {womensDropdownOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[940px] z-50 animate-fadeIn">
                    <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xl space-y-5">
                      
                      {/* Top 5 Quick Hub Bar */}
                      <div className="grid grid-cols-5 gap-2 p-1.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                        <Link
                          href="/womens-health"
                          className="p-2 rounded-xl hover:bg-white transition-colors flex items-center gap-1.5 font-medium text-slate-900"
                        >
                          <span>🌸</span>
                          <div>
                            <span className="block font-bold leading-none text-3xs">Master Hub</span>
                            <span className="text-[9px] text-slate-500 font-normal">7 Life Stages</span>
                          </div>
                        </Link>

                        <Link
                          href="/marketplace"
                          className="p-2 rounded-xl hover:bg-white transition-colors flex items-center gap-1.5 font-medium text-slate-900"
                        >
                          <span>🛍️</span>
                          <div>
                            <span className="block font-bold leading-none text-3xs text-rose-600">Marketplace</span>
                            <span className="text-[9px] text-rose-500 font-bold">Sakhi™ Store</span>
                          </div>
                        </Link>

                        <Link
                          href="/womens-health/blood-tests"
                          className="p-2 rounded-xl hover:bg-white transition-colors flex items-center gap-1.5 font-medium text-slate-900"
                        >
                          <span>🩸</span>
                          <div>
                            <span className="block font-bold leading-none text-3xs">Blood Tests</span>
                            <span className="text-[9px] text-slate-500 font-normal">35+ Panels</span>
                          </div>
                        </Link>

                        <Link
                          href="/womens-schemes-funds"
                          className="p-2 rounded-xl hover:bg-white transition-colors flex items-center gap-1.5 font-medium text-slate-900"
                        >
                          <span>🏛️</span>
                          <div>
                            <span className="block font-bold leading-none text-3xs">Govt &amp; CSR</span>
                            <span className="text-[9px] text-slate-500 font-normal">35+ Schemes</span>
                          </div>
                        </Link>

                        <Link
                          href="/reports/womens-health-india-2026"
                          className="p-2 rounded-xl hover:bg-white transition-colors flex items-center gap-1.5 font-medium text-slate-900"
                        >
                          <span>📊</span>
                          <div>
                            <span className="block font-bold leading-none text-3xs">Report 2026</span>
                            <span className="text-[9px] text-slate-500 font-normal">Epidemiology</span>
                          </div>
                        </Link>
                      </div>

                      {/* 4 Specialized Category Columns */}
                      <div className="grid grid-cols-4 gap-4 text-xs">
                        
                        {/* Col 1: Period & Hormones */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-1 text-[11px] font-black text-rose-700 uppercase tracking-wider border-b border-rose-100 pb-1">
                            <span>🩸</span>
                            <span>Period &amp; Hormones</span>
                          </div>
                          <ul className="space-y-1 text-slate-600">
                            {periodSegments.map((seg) => (
                              <li key={seg.slug}>
                                <Link
                                  href={`/womens-health/segments/${seg.slug}`}
                                  className="p-1.5 rounded-lg hover:bg-rose-50 hover:text-rose-900 transition-colors flex items-center gap-1.5 text-3xs font-semibold"
                                >
                                  <span>{seg.icon}</span>
                                  <span className="truncate">{seg.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Col 2: Fertility & Maternity */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-1 text-[11px] font-black text-purple-700 uppercase tracking-wider border-b border-purple-100 pb-1">
                            <span>🤰</span>
                            <span>Fertility &amp; Maternity</span>
                          </div>
                          <ul className="space-y-1 text-slate-600">
                            {maternitySegments.map((seg) => (
                              <li key={seg.slug}>
                                <Link
                                  href={`/womens-health/segments/${seg.slug}`}
                                  className="p-1.5 rounded-lg hover:bg-purple-50 hover:text-purple-900 transition-colors flex items-center gap-1.5 text-3xs font-semibold"
                                >
                                  <span>{seg.icon}</span>
                                  <span className="truncate">{seg.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Col 3: Clinical & Oncology */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-1 text-[11px] font-black text-teal-700 uppercase tracking-wider border-b border-teal-100 pb-1">
                            <span>🩺</span>
                            <span>Clinical &amp; Oncology</span>
                          </div>
                          <ul className="space-y-1 text-slate-600">
                            {clinicalSegments.map((seg) => (
                              <li key={seg.slug}>
                                <Link
                                  href={`/womens-health/segments/${seg.slug}`}
                                  className="p-1.5 rounded-lg hover:bg-teal-50 hover:text-teal-900 transition-colors flex items-center gap-1.5 text-3xs font-semibold"
                                >
                                  <span>{seg.icon}</span>
                                  <span className="truncate">{seg.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Col 4: FemTech, Wellness & Ecosystem */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-1 text-[11px] font-black text-amber-700 uppercase tracking-wider border-b border-amber-100 pb-1">
                            <span>✨</span>
                            <span>FemTech &amp; Enterprise</span>
                          </div>
                          <ul className="space-y-1 text-slate-600">
                            {femtechAndEcosystemSegments.map((seg) => (
                              <li key={seg.slug}>
                                <Link
                                  href={`/womens-health/segments/${seg.slug}`}
                                  className="p-1.5 rounded-lg hover:bg-amber-50 hover:text-amber-900 transition-colors flex items-center gap-1.5 text-3xs font-semibold"
                                >
                                  <span>{seg.icon}</span>
                                  <span className="truncate">{seg.title}</span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* Women's Marketplace */}
              <Link
                href="/marketplace"
                className="px-3 py-1.5 rounded-full text-rose-700 bg-rose-50/70 hover:bg-rose-100 hover:text-rose-900 transition-colors font-bold flex items-center gap-1 shadow-2xs"
              >
                <span>🛍️</span>
                <span>Marketplace</span>
              </Link>

              {/* Blood Tests */}
              <Link
                href="/womens-health/blood-tests"
                className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>Blood Tests</span>
              </Link>

              {/* Corporate Benefits */}
              <Link
                href="/corporate-wellness"
                className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>Corporate</span>
              </Link>

              {/* Membership */}
              <Link
                href="/pricing"
                className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>Membership</span>
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
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              
              {/* E-Commerce Cart Trigger with Live Count Badge */}
              <button
                type="button"
                onClick={openCart}
                className="relative p-2 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
                title="View Care Bag / Cart"
                aria-label="View Shopping Cart"
              >
                <ShoppingBag className="w-4.5 h-4.5 text-slate-800" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rose-600 text-white font-black text-[10px] rounded-full flex items-center justify-center shadow-xs">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* User Account / Sign In */}
              {isAuthenticated && user ? (
                <Link
                  href="/account"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-950 text-xs font-bold transition-colors"
                >
                  <span className="w-4 h-4 rounded-full bg-rose-600 text-white text-[10px] font-black flex items-center justify-center">
                    {user.name.charAt(0)}
                  </span>
                  <span className="truncate max-w-[90px]">{user.name.split(' ')[0]}</span>
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200/80 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sign In</span>
                </Link>
              )}

              {/* WhatsApp Quick Trigger */}
              <a
                href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200/80 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                <span>WhatsApp</span>
              </a>

              {/* Primary Consultation Button */}
              <Link
                href="/symptom-checker"
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-[13px] font-semibold transition-colors shadow-2xs"
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
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links List */}
              <div className="space-y-1.5 text-sm font-semibold">
                
                {/* Women's Health Master Hub */}
                <Link
                  href="/womens-health"
                  onClick={() => setMobileOpen(false)}
                  className="p-3 rounded-2xl bg-rose-50/60 border border-rose-100 flex items-center justify-between text-rose-950 font-bold"
                >
                  <div className="flex items-center gap-2.5">
                    <span>🌸</span>
                    <span>Women&apos;s Health Master Hub</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-rose-400" />
                </Link>

                {/* Sakhi Period Care Marketplace */}
                <Link
                  href="/marketplace"
                  onClick={() => setMobileOpen(false)}
                  className="p-3 rounded-2xl bg-rose-500 text-white flex items-center justify-between font-bold shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span>🛍️</span>
                    <div>
                      <span>Sakhi Period Care Store</span>
                      <span className="block text-3xs text-rose-100 font-medium">Rash-free pads, heat patches &amp; PCOS</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white" />
                </Link>

                {/* All 38 Health Segments Accordion */}
                <div className="rounded-2xl border border-slate-200 overflow-hidden">
                  <button
                    onClick={() => setMobileWomensOpen(!mobileWomensOpen)}
                    className="w-full p-3 bg-slate-50 flex items-center justify-between text-left text-slate-800 font-bold"
                  >
                    <div className="flex items-center gap-2.5">
                      <span>🩺</span>
                      <span>All 38 Health Segments</span>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform ${mobileWomensOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {mobileWomensOpen && (
                    <div className="p-3 space-y-1 max-h-72 overflow-y-auto bg-white text-xs">
                      {WOMENS_HEALTH_MASTER_SEGMENTS.map((s) => (
                        <Link
                          key={s.slug}
                          href={`/womens-health/segments/${s.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="p-2 rounded-xl hover:bg-slate-50 text-slate-700 flex items-center gap-2"
                        >
                          <span>{s.icon}</span>
                          <span className="truncate">{s.title}</span>
                        </Link>
                      ))}
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

                {/* Account / Sign In */}
                {isAuthenticated && user ? (
                  <Link
                    href="/account"
                    onClick={() => setMobileOpen(false)}
                    className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-slate-900 font-bold"
                  >
                    <div className="flex items-center gap-2.5">
                      <User className="w-4 h-4 text-rose-600" />
                      <div>
                        <span>My Account ({user.name})</span>
                        <span className="block text-3xs text-slate-500 font-normal">{user.lifeStage} Stage · Orders &amp; Wallet</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="p-3 rounded-2xl bg-slate-900 text-white font-bold text-xs flex items-center justify-between shadow-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <User className="w-4 h-4 text-rose-400" />
                      <span>Sign In / Create Account</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                )}

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
                <span>Chat on WhatsApp (+91 7028025717)</span>
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
