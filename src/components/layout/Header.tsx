'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Menu, X, Heart, Activity, FlaskConical,
  LayoutDashboard, Phone, Upload, Stethoscope, ChevronDown,
  ArrowRight, Sparkles, User, Shield
} from 'lucide-react'
import AuthModal, { type UserProfile } from '@/components/common/AuthModal'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'
import { aiSpecialtyDoctors } from '@/data/specialties'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [specialtiesDropdownOpen, setSpecialtiesDropdownOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [rxScannerOpen, setRxScannerOpen] = useState(false)
  const [user, setUser] = useState<UserProfile | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Close dropdown on outside click
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setSpecialtiesDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)

    const savedUser = localStorage.getItem('meditrust_user')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (e) {}
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs'
            : 'bg-white border-b border-slate-100'
        }`}
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between h-16 sm:h-18 gap-2">
            
            {/* 1. Clean Logo Only on Left (No Word Wrapping) */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0 group" aria-label="Home">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center p-1.5 shadow-2xs transition-transform duration-200 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="AI Health"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>

            {/* 2. Desktop Navigation with 15+ Specialties Dropdown */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs xl:text-sm font-bold text-slate-700 whitespace-nowrap">
              <Link
                href="/symptom-checker"
                className="px-3 py-2 rounded-xl hover:text-teal-700 hover:bg-teal-50/70 transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <Stethoscope className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>AI Doctor</span>
              </Link>

              {/* 15+ Specialties Interactive Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setSpecialtiesDropdownOpen(!specialtiesDropdownOpen)}
                  onMouseEnter={() => setSpecialtiesDropdownOpen(true)}
                  className={`px-3 py-2 rounded-xl transition-colors flex items-center gap-1.5 whitespace-nowrap ${
                    specialtiesDropdownOpen ? 'bg-teal-50 text-teal-800' : 'hover:text-teal-700 hover:bg-teal-50/70'
                  }`}
                  aria-expanded={specialtiesDropdownOpen}
                >
                  <Activity className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span>15+ Specialties</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${specialtiesDropdownOpen ? 'rotate-180 text-teal-700' : 'text-slate-400'}`} />
                </button>

                {/* Dropdown Menu (3-Column Grid of all 15 Specialties) */}
                {specialtiesDropdownOpen && (
                  <div
                    onMouseLeave={() => setSpecialtiesDropdownOpen(false)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[680px] bg-white rounded-3xl shadow-2xl border border-slate-200 p-4 grid grid-cols-3 gap-2 z-50 animate-fade-down"
                  >
                    <div className="col-span-3 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                      <span className="text-xs font-black uppercase tracking-wider text-teal-800 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                        15+ Dedicated AI Specialty Doctors
                      </span>
                      <Link
                        href="/symptom-checker"
                        onClick={() => setSpecialtiesDropdownOpen(false)}
                        className="text-3xs font-bold text-teal-700 hover:underline"
                      >
                        Open Triage Room →
                      </Link>
                    </div>

                    {aiSpecialtyDoctors.map((spec) => (
                      <Link
                        key={spec.id}
                        href={`/symptom-checker?specialty=${spec.id}`}
                        onClick={() => setSpecialtiesDropdownOpen(false)}
                        className="p-2.5 rounded-xl hover:bg-teal-50/80 transition-colors flex items-start gap-2.5 group/item"
                      >
                        <span className="text-xl flex-shrink-0">{spec.icon}</span>
                        <div className="overflow-hidden">
                          <div className="text-xs font-bold text-slate-900 group-hover/item:text-teal-700 transition-colors truncate">
                            {spec.title}
                          </div>
                          <div className="text-3xs text-slate-500 truncate">
                            {spec.specialty}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

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

            {/* 3. Right Action Buttons in Single Line */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 whitespace-nowrap">
              <a
                href="tel:+917028025717"
                className="flex items-center gap-1.5 px-3 py-2 sm:px-3.5 sm:py-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-950 border border-amber-200 transition-colors text-xs font-bold whitespace-nowrap shadow-2xs"
                title="Call 24/7 Helpline"
              >
                <Phone className="w-3.5 h-3.5 text-amber-600 animate-pulse flex-shrink-0" />
                <span className="hidden sm:inline whitespace-nowrap">+91 7028025717</span>
                <span className="sm:hidden font-black">Call</span>
              </a>

              <Link
                href="/symptom-checker"
                className="flex items-center gap-1.5 px-3.5 py-2 sm:px-4 sm:py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs sm:text-sm shadow-sm transition-all active:scale-95 whitespace-nowrap"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping hidden sm:block flex-shrink-0" />
                <span className="whitespace-nowrap">Consult Dr. Arya</span>
              </Link>

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

        {/* ── Mobile Navigation Drawer ── */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-5 space-y-4 shadow-xl max-h-[80vh] overflow-y-auto animate-fade-down">
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
                    <div className="text-slate-900">Dr. Arya (24/7 AI Doctor)</div>
                    <div className="text-2xs text-slate-500 font-normal">Marathi, Hindi & English Consultation</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-400" />
              </Link>

              {/* Mobile 15+ Specialties List */}
              <div className="p-3 bg-slate-50 rounded-2xl space-y-2">
                <div className="text-xs font-black uppercase tracking-wider text-teal-800">
                  15+ Medical Specialties
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {aiSpecialtyDoctors.map((spec) => (
                    <Link
                      key={spec.id}
                      href={`/symptom-checker?specialty=${spec.id}`}
                      onClick={() => setMobileOpen(false)}
                      className="p-2 rounded-xl bg-white border border-slate-200 hover:border-teal-400 text-xs font-bold text-slate-800 flex items-center gap-1.5 truncate"
                    >
                      <span>{spec.icon}</span>
                      <span className="truncate">{spec.specialty}</span>
                    </Link>
                  ))}
                </div>
              </div>

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
                    <div className="text-2xs text-slate-500 font-normal">CBC, Thyroid, Vitamin D in plain language</div>
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
                    <div className="text-slate-900">Generic Savings (Save 80%)</div>
                    <div className="text-2xs text-slate-500 font-normal">Jan Aushadhi generic substitutes</div>
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
