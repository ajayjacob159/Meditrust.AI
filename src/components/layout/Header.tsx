'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Menu, X, ChevronDown, ChevronRight, Stethoscope,
  MessageCircle, Building2, UserPlus, Heart,
  BookOpen, ArrowRight, ShieldCheck, ShoppingBag, User,
  Sparkles, Activity, Tag, Check, Calculator, GraduationCap,
  Baby
} from 'lucide-react'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'

export default function Header() {
  const { cartCount, openCart } = useCart()
  const { user, isAuthenticated, openAuthModal } = useAuth()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [rxScannerOpen, setRxScannerOpen] = useState(false)
  const [medisMomOpen, setMedisMomOpen] = useState(false)
  const [calcMenuOpen, setCalcMenuOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const calcDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setMedisMomOpen(false)
      }
      if (calcDropdownRef.current && !calcDropdownRef.current.contains(event.target as Node)) {
        setCalcMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

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
              
              {/* Medi's MOM with Dropdown */}
              <div
                ref={dropdownRef}
                className="relative"
                onMouseEnter={() => setMedisMomOpen(true)}
                onMouseLeave={() => setMedisMomOpen(false)}
              >
                <button
                  type="button"
                  onClick={() => setMedisMomOpen(!medisMomOpen)}
                  className={`px-3 py-1.5 rounded-full transition-colors flex items-center gap-1 font-bold ${
                    medisMomOpen
                      ? 'bg-rose-50 text-rose-700'
                      : 'hover:text-slate-900 hover:bg-slate-50'
                  }`}
                  aria-expanded={medisMomOpen}
                >
                  <span>🤰</span>
                  <span>Medi&apos;s MOM</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${medisMomOpen ? 'rotate-180 text-rose-600' : 'text-slate-400'}`} />
                </button>

                {/* Dropdown Menu */}
                {medisMomOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 p-2 bg-white rounded-2xl shadow-xl border border-slate-200/90 space-y-1 animate-fadeIn z-50">
                    <Link
                      href="/medimom"
                      onClick={() => setMedisMomOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-rose-50 transition-colors flex items-start gap-2.5 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                        🤱
                      </div>
                      <div>
                        <strong className="text-xs font-bold text-slate-900 group-hover:text-rose-600 transition-colors block">
                          MediMom™
                        </strong>
                        <span className="text-3xs text-slate-500 block font-normal">
                          Trimester care, labor prep &amp; postpartum healing
                        </span>
                      </div>
                    </Link>

                    <Link
                      href="/corpo-mom"
                      onClick={() => setMedisMomOpen(false)}
                      className="p-2.5 rounded-xl hover:bg-purple-50 transition-colors flex items-start gap-2.5 group"
                    >
                      <div className="w-7 h-7 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                        🏢
                      </div>
                      <div>
                        <strong className="text-xs font-bold text-slate-900 group-hover:text-purple-600 transition-colors block">
                          Corpo Mom™
                        </strong>
                        <span className="text-3xs text-slate-500 block font-normal">
                          Corporate maternity, lactation policy &amp; return-to-work
                        </span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>

              {/* 🧮 Calculator & Free Tools Mega Dropdown (22+ Tools) */}
              <div
                ref={calcDropdownRef}
                className="relative"
                onMouseEnter={() => setCalcMenuOpen(true)}
                onMouseLeave={() => setCalcMenuOpen(false)}
              >
                <Link
                  href="/tools"
                  onClick={() => setCalcMenuOpen(false)}
                  className={`px-3 py-1.5 rounded-full transition-colors flex items-center gap-1 font-bold ${
                    calcMenuOpen
                      ? 'bg-rose-50 text-rose-700'
                      : 'text-rose-700 bg-rose-50/70 hover:bg-rose-100/90 hover:text-rose-900'
                  }`}
                  aria-expanded={calcMenuOpen}
                >
                  <span>🧮</span>
                  <span>Calculator</span>
                  <span className="text-[8px] font-black bg-rose-600 text-white px-1.5 py-0.2 rounded-full ml-0.5">22+</span>
                  <ChevronDown className={`w-3 h-3 transition-transform ${calcMenuOpen ? 'rotate-180 text-rose-600' : 'text-rose-400'}`} />
                </Link>

                {/* Calculator Mega Dropdown Menu */}
                {calcMenuOpen && (
                  <div className="absolute top-full left-1/2 -translate-x-[45%] mt-1.5 w-[760px] p-4 bg-white rounded-3xl shadow-2xl border border-slate-200/90 space-y-3 animate-fadeIn z-50">
                    
                    {/* Top Header Bar */}
                    <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 px-1">
                      <div className="flex items-center gap-2">
                        <span className="w-7 h-7 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center text-sm font-bold">
                          🧮
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-black text-slate-900 font-display">Medical Calculators &amp; Free Tools Hub</span>
                            <span className="text-[9px] font-black bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full">22 FREE CLINICAL TOOLS</span>
                          </div>
                          <span className="text-3xs text-slate-500 font-normal">Real-time clinical predictors, fertility algorithms &amp; hospital budget planners</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Link
                          href="/tools"
                          onClick={() => setCalcMenuOpen(false)}
                          className="text-3xs font-bold text-rose-600 hover:text-rose-700 bg-rose-50 hover:bg-rose-100 px-2 py-1 rounded-lg transition-colors flex items-center gap-1"
                        >
                          <span>All Calculators (10)</span>
                          <ArrowRight className="w-2.5 h-2.5" />
                        </Link>
                        <Link
                          href="/womens-health/tools"
                          onClick={() => setCalcMenuOpen(false)}
                          className="text-3xs font-bold text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2 py-1 rounded-lg transition-colors flex items-center gap-1"
                        >
                          <span>All Planners (12)</span>
                          <ArrowRight className="w-2.5 h-2.5" />
                        </Link>
                      </div>
                    </div>

                    {/* 2-Column Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      
                      {/* Column 1: Clinical Flo Calculators (10 Tools) */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between px-1 pb-1 border-b border-rose-50">
                          <span className="text-3xs font-black uppercase tracking-wider text-rose-700 flex items-center gap-1">
                            <span>🌸</span> Clinical Calculators (Flo Suite)
                          </span>
                          <span className="text-[9px] font-bold text-slate-400">10 Tools</span>
                        </div>

                        <div className="space-y-0.5 max-h-[300px] overflow-y-auto pr-1">
                          <Link
                            href="/tools/ovulation-calculator"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-rose-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">🌸</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <strong className="text-xs font-bold text-slate-900 group-hover:text-rose-600 transition-colors truncate">
                                  Ovulation &amp; Fertile Window
                                </strong>
                                <span className="text-[8px] font-bold text-rose-600 bg-rose-50 px-1 rounded">HOT</span>
                              </div>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                6-day fertile matrix &amp; peak conception days
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/tools/due-date-calculator"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-amber-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">🤰</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <strong className="text-xs font-bold text-slate-900 group-hover:text-amber-700 transition-colors truncate">
                                  Pregnancy Due Date (EDD)
                                </strong>
                                <span className="text-[8px] font-bold text-amber-700 bg-amber-50 px-1 rounded">ACOG</span>
                              </div>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                LMP, conception &amp; antenatal milestones
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/tools/hcg-calculator"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-emerald-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">🧪</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <strong className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate">
                                  Beta hCG Doubling Time
                                </strong>
                                <span className="text-[8px] font-bold text-emerald-700 bg-emerald-50 px-1 rounded">KINETIC</span>
                              </div>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                Kinetic speedometer &amp; viability curve
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/tools/ivf-due-date-calculator"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-purple-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">🧬</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <strong className="text-xs font-bold text-slate-900 group-hover:text-purple-700 transition-colors truncate">
                                  IVF &amp; FET Due Date
                                </strong>
                                <span className="text-[8px] font-bold text-purple-700 bg-purple-50 px-1 rounded">2WW</span>
                              </div>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                Day-3 &amp; Day-5 blastocyst transfer
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/tools/period-calculator"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-rose-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">🩸</span>
                            <div className="flex-1 min-w-0">
                              <strong className="text-xs font-bold text-slate-900 group-hover:text-rose-600 transition-colors truncate block">
                                Period &amp; PMS Predictor
                              </strong>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                6-cycle forecast &amp; symptom alerts
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/tools/due-date-by-ultrasound"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-blue-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">🩻</span>
                            <div className="flex-1 min-w-0">
                              <strong className="text-xs font-bold text-slate-900 group-hover:text-blue-700 transition-colors truncate block">
                                Ultrasound Dating (ACOG #700)
                              </strong>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                CRL biometry sonographic dating
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/tools/pregnancy-weeks-to-months-calculator"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-teal-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">👶</span>
                            <div className="flex-1 min-w-0">
                              <strong className="text-xs font-bold text-slate-900 group-hover:text-teal-700 transition-colors truncate block">
                                Gestational Weeks to Months
                              </strong>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                40-week fruit comparison &amp; trimesters
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/tools/implantation-calculator"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-indigo-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">🔬</span>
                            <div className="flex-1 min-w-0">
                              <strong className="text-xs font-bold text-slate-900 group-hover:text-indigo-700 transition-colors truncate block">
                                Implantation Timeline (0–12 DPO)
                              </strong>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                Blastocyst uterine attachment window
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/tools/pregnancy-test-calculator"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-pink-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">🧪</span>
                            <div className="flex-1 min-w-0">
                              <strong className="text-xs font-bold text-slate-900 group-hover:text-pink-700 transition-colors truncate block">
                                Pregnancy Test Viability
                              </strong>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                8–14 DPO sensitivity &amp; testing date
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/tools/menstrual-cycle-calculator"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-fuchsia-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">🔄</span>
                            <div className="flex-1 min-w-0">
                              <strong className="text-xs font-bold text-slate-900 group-hover:text-fuchsia-700 transition-colors truncate block">
                                Menstrual Hormone Matrix
                              </strong>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                Estrogen, Progesterone &amp; LH curves
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>

                      {/* Column 2: Free Health Planners & Assessments (12 Tools) */}
                      <div className="space-y-1 border-l border-slate-100 pl-3">
                        <div className="flex items-center justify-between px-1 pb-1 border-b border-emerald-50">
                          <span className="text-3xs font-black uppercase tracking-wider text-emerald-700 flex items-center gap-1">
                            <span>🧰</span> Free Health Planners
                          </span>
                          <span className="text-[9px] font-bold text-slate-400">12 Tools</span>
                        </div>

                        <div className="space-y-0.5 max-h-[300px] overflow-y-auto pr-1">
                          <Link
                            href="/womens-health/tools?tool=fertility-readiness"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-emerald-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">🎯</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <strong className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate">
                                  Fertility Readiness Score
                                </strong>
                                <span className="text-[8px] font-bold text-emerald-700 bg-emerald-50 px-1 rounded">POPULAR</span>
                              </div>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                Biological readiness &amp; AMH risk score
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/womens-health/tools?tool=ivf-cost-calculator"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-emerald-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">💰</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <strong className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate">
                                  IVF Cost &amp; Savings Calculator
                                </strong>
                                <span className="text-[8px] font-bold text-teal-700 bg-teal-50 px-1 rounded">SAVINGS</span>
                              </div>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                City packages &amp; Jan Aushadhi generic savings
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/womens-health/tools?tool=hospital-delivery-cost"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-emerald-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">🏥</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between">
                                <strong className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate">
                                  Hospital Delivery Cost Planner
                                </strong>
                                <span className="text-[8px] font-bold text-amber-700 bg-amber-50 px-1 rounded">BUDGET</span>
                              </div>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                Normal vs C-Section hospital pricing
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/womens-health/tools?tool=egg-freezing-guide"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-emerald-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">❄️</span>
                            <div className="flex-1 min-w-0">
                              <strong className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate block">
                                Egg Freezing Decision Guide
                              </strong>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                Oocyte vitrification count by age
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/womens-health/tools?tool=fertility-test-checklist"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-emerald-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">📋</span>
                            <div className="flex-1 min-w-0">
                              <strong className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate block">
                                Couple Fertility Test Checklist
                              </strong>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                360° male &amp; female diagnostic roadmap
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/womens-health/tools?tool=hospital-bag-checklist"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-emerald-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">🧳</span>
                            <div className="flex-1 min-w-0">
                              <strong className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate block">
                                Maternity Hospital Bag Checklist
                              </strong>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                40-item packing list &amp; WhatsApp export
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/womens-health/tools?tool=pregnancy-nutrition-planner"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-emerald-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">🥗</span>
                            <div className="flex-1 min-w-0">
                              <strong className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate block">
                                Trimester Nutrition Planner
                              </strong>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                Indian diet, Iron, Folate &amp; DHA targets
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/womens-health/tools?tool=pregnancy-planning"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-emerald-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">📅</span>
                            <div className="flex-1 min-w-0">
                              <strong className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate block">
                                Pregnancy Planning Timeline
                              </strong>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                Conception target dates &amp; pre-conception
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/womens-health/tools?tool=maternity-hospital-comparison"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-emerald-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">⚖️</span>
                            <div className="flex-1 min-w-0">
                              <strong className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate block">
                                Maternity Hospital Comparison
                              </strong>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                NICU level, packages &amp; emergency readiness
                              </span>
                            </div>
                          </Link>

                          <Link
                            href="/womens-health/tools?tool=fertility-clinic-comparison"
                            onClick={() => setCalcMenuOpen(false)}
                            className="p-1.5 rounded-xl hover:bg-emerald-50/80 transition-colors flex items-start gap-2 group"
                          >
                            <span className="text-sm flex-shrink-0 mt-0.5">🔬</span>
                            <div className="flex-1 min-w-0">
                              <strong className="text-xs font-bold text-slate-900 group-hover:text-emerald-700 transition-colors truncate block">
                                IVF Clinic Comparison Scorecard
                              </strong>
                              <span className="text-[10px] text-slate-500 block truncate font-normal">
                                Lab air purity, success rates &amp; pricing
                              </span>
                            </div>
                          </Link>
                        </div>
                      </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between bg-slate-50/80 -mx-4 -mb-4 p-2.5 rounded-b-3xl">
                      <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>100% Free · Evidence-based ACOG, WHO &amp; ICMR formulas · Client-Side Private</span>
                      </span>
                      <div className="flex items-center gap-2">
                        <Link
                          href="/tools"
                          onClick={() => setCalcMenuOpen(false)}
                          className="text-xs font-black text-rose-600 hover:text-rose-700 flex items-center gap-1"
                        >
                          <span>Explore All 22+ Tools</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>

                  </div>
                )}
              </div>

              {/* Education Academy */}
              <Link
                href="/womens-health/academy"
                className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition-colors flex items-center gap-1 font-bold"
              >
                <span>🎓</span>
                <span>Academy</span>
              </Link>

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

              {/* Corporate */}
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

              {/* Prescription Upload Quick Button */}
              <button
                type="button"
                onClick={() => setRxScannerOpen(true)}
                className="hidden xl:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-xs transition-transform hover:scale-102"
              >
                <Stethoscope className="w-3.5 h-3.5 text-teal-400" />
                <span>Upload Rx</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* ── 4. MOBILE NAVIGATION DRAWER ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs"
            onClick={() => setMobileOpen(false)}
          />

          <div className="fixed top-0 right-0 bottom-0 w-[300px] sm:w-[340px] bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between z-50">
            <div className="space-y-4">
              
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-teal-50 border border-teal-200 flex items-center justify-center p-1">
                    <img src="/logo.png" alt="Meditrust" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-extrabold text-base text-slate-900 font-display">
                    Medi<span className="text-teal-600">trust</span> AI
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links List */}
              <div className="space-y-1.5 text-sm font-semibold">
                
                {/* Medi's MOM - MediMom */}
                <Link
                  href="/medimom"
                  onClick={() => setMobileOpen(false)}
                  className="p-3 rounded-2xl bg-rose-50/70 border border-rose-100 flex items-center justify-between text-rose-950 font-bold"
                >
                  <div className="flex items-center gap-2.5">
                    <span>🤱</span>
                    <div>
                      <span>MediMom™</span>
                      <span className="block text-3xs text-rose-700 font-normal">Pregnancy &amp; Maternal Care</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-rose-400" />
                </Link>

                {/* Medi's MOM - Corpo Mom */}
                <Link
                  href="/corpo-mom"
                  onClick={() => setMobileOpen(false)}
                  className="p-3 rounded-2xl bg-purple-50/70 border border-purple-100 flex items-center justify-between text-purple-950 font-bold"
                >
                  <div className="flex items-center gap-2.5">
                    <span>🏢</span>
                    <div>
                      <span>Corpo Mom™</span>
                      <span className="block text-3xs text-purple-700 font-normal">Corporate Maternity Benefits</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-purple-400" />
                </Link>

                {/* 🧮 22+ Medical Calculators & Free Tools Hub */}
                <div className="p-3 rounded-2xl bg-gradient-to-br from-rose-50/90 via-white to-emerald-50/80 border border-rose-200/80 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-7 h-7 rounded-xl bg-rose-600 text-white flex items-center justify-center text-xs font-black shadow-xs">
                        🧮
                      </span>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="font-bold text-slate-900 text-xs">Calculators &amp; Free Tools</span>
                          <span className="text-[8px] font-black bg-rose-600 text-white px-1.5 py-0.2 rounded">22 TOOLS</span>
                        </div>
                        <span className="text-3xs text-slate-500 font-normal">Real-time clinical predictors &amp; health planners</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-1.5 pt-1">
                    <Link
                      href="/tools"
                      onClick={() => setMobileOpen(false)}
                      className="p-2 rounded-xl bg-white border border-rose-200/80 hover:bg-rose-50 text-rose-950 flex items-center justify-between text-xs font-bold transition-colors"
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <span>🌸</span>
                        <span className="truncate">10 Calculators</span>
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
                    </Link>

                    <Link
                      href="/womens-health/tools"
                      onClick={() => setMobileOpen(false)}
                      className="p-2 rounded-xl bg-white border border-emerald-200/80 hover:bg-emerald-50 text-emerald-950 flex items-center justify-between text-xs font-bold transition-colors"
                    >
                      <span className="flex items-center gap-1.5 truncate">
                        <span>🧰</span>
                        <span className="truncate">12 Free Planners</span>
                      </span>
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    </Link>
                  </div>

                  {/* Popular Quick Tools Pills */}
                  <div className="flex flex-wrap gap-1 pt-0.5">
                    <Link
                      href="/tools/ovulation-calculator"
                      onClick={() => setMobileOpen(false)}
                      className="text-[10px] font-medium bg-rose-100/70 hover:bg-rose-200/70 text-rose-800 px-2 py-0.5 rounded-md"
                    >
                      🌸 Ovulation
                    </Link>
                    <Link
                      href="/tools/due-date-calculator"
                      onClick={() => setMobileOpen(false)}
                      className="text-[10px] font-medium bg-amber-100/70 hover:bg-amber-200/70 text-amber-900 px-2 py-0.5 rounded-md"
                    >
                      🤰 Due Date
                    </Link>
                    <Link
                      href="/tools/hcg-calculator"
                      onClick={() => setMobileOpen(false)}
                      className="text-[10px] font-medium bg-emerald-100/70 hover:bg-emerald-200/70 text-emerald-900 px-2 py-0.5 rounded-md"
                    >
                      🧪 Beta hCG
                    </Link>
                    <Link
                      href="/womens-health/tools?tool=ivf-cost-calculator"
                      onClick={() => setMobileOpen(false)}
                      className="text-[10px] font-medium bg-purple-100/70 hover:bg-purple-200/70 text-purple-900 px-2 py-0.5 rounded-md"
                    >
                      💰 IVF Cost
                    </Link>
                    <Link
                      href="/womens-health/tools?tool=fertility-readiness"
                      onClick={() => setMobileOpen(false)}
                      className="text-[10px] font-medium bg-teal-100/70 hover:bg-teal-200/70 text-teal-900 px-2 py-0.5 rounded-md"
                    >
                      🎯 Fertility Score
                    </Link>
                    <Link
                      href="/womens-health/tools?tool=hospital-delivery-cost"
                      onClick={() => setMobileOpen(false)}
                      className="text-[10px] font-medium bg-blue-100/70 hover:bg-blue-200/70 text-blue-900 px-2 py-0.5 rounded-md"
                    >
                      🏥 Delivery Cost
                    </Link>
                  </div>
                </div>

                {/* Women's Health Academy */}
                <Link
                  href="/womens-health/academy"
                  onClick={() => setMobileOpen(false)}
                  className="p-3 rounded-2xl hover:bg-slate-50 flex items-center justify-between text-slate-800"
                >
                  <div className="flex items-center gap-2.5">
                    <span>🎓</span>
                    <span>Women&apos;s Health Academy</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
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

              </div>
            </div>

            {/* Drawer Footer Emergency */}
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-2">
              <a
                href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20need%20healthcare%20guidance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#25d366] text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Dr. Arya WhatsApp (24/7)</span>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* ── 5. PRESCRIPTION SCANNER MODAL ── */}
      {rxScannerOpen && (
        <PrescriptionScannerModal isOpen={rxScannerOpen} onClose={() => setRxScannerOpen(false)} />
      )}
    </>
  )
}
