'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Menu, X, ChevronDown, Heart, Activity, FlaskConical,
  LayoutDashboard, Phone, MapPin, Upload, User, Shield, Sparkles, Building2,
  Stethoscope, Zap, ArrowRight, BookOpen, Award
} from 'lucide-react'
import AuthModal, { type UserProfile } from '@/components/common/AuthModal'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'

const navItems = [
  {
    label: 'AI Doctor & Tools',
    children: [
      { label: 'Dr. Arya (24/7 AI Doctor)', href: '/symptom-checker', icon: Activity, desc: 'W.H.O. Standard Triage across 15+ Specialties' },
      { label: 'Instant Symptom Checker', href: '/symptom-checker', icon: Stethoscope, desc: 'Type symptoms → instant clinical explanation' },
      { label: 'Report Explainer (CBC, Thyroid, Liver)', href: '/dashboard', icon: LayoutDashboard, desc: 'Breaks down blood reports into plain English' },
      { label: 'Medication Comparison', href: '/medication-comparison', icon: Heart, desc: 'Tata 1mg, PharmEasy & Apollo vs Jan Aushadhi (Save 80%)' },
      { label: 'Blood Test Comparison', href: '/lab-test-comparison', icon: FlaskConical, desc: '13+ Pune Labs (60-Min Home Sample Pickup)' },
    ],
  },
  { label: '15+ Specialties', href: '/symptom-checker#specialties' },
  { label: 'Report Analysis', href: '/dashboard' },
  { label: 'Pricing (Unlimited)', href: '/pricing' },
  { label: 'About Us', href: '/about' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [rxScannerOpen, setRxScannerOpen] = useState(false)
  const [user, setUser] = useState<UserProfile | null>(null)
  const [selectedCity, setSelectedCity] = useState('Pune (Kothrud/Baner)')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    // Check saved user
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
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-md'
            : 'bg-white border-b border-slate-100'
        }`}
        role="banner"
      >
        {/* ── Top Micro-Bar: WHO-Standard AI Doctor & Immediate Line ── */}
        <div className="bg-slate-950 text-white text-2xs py-1.5 px-4 border-b border-slate-800">
          <div className="container-main flex items-center justify-between">
            {/* Left: Global W.H.O. Standards & Pune Hub */}
            <div className="flex items-center gap-3">
              <span className="text-teal-300 font-bold hidden sm:inline-flex items-center gap-1">
                <Shield className="w-3 h-3 text-teal-400" />
                W.H.O. Guideline-Based AI Consultations · 15+ Specialties
              </span>
              <span className="text-slate-700 hidden sm:inline">|</span>
              <div className="flex items-center gap-1 text-slate-300 font-semibold">
                <MapPin className="w-3 h-3 text-teal-400 flex-shrink-0" />
                <span>Location:</span>
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="bg-transparent text-white font-bold underline cursor-pointer outline-none text-2xs"
                >
                  <option value="Pune (Kothrud/Baner)" className="text-slate-900">Pune (Kothrud, Baner, Hinjewadi, Viman Nagar)</option>
                  <option value="Mumbai Metro" className="text-slate-900">Mumbai & Thane</option>
                  <option value="Bengaluru Urban" className="text-slate-900">Bengaluru Urban</option>
                  <option value="Pan-India" className="text-slate-900">Pan-India (24×7)</option>
                </select>
              </div>
            </div>

            {/* Right: Dr. Arya Status & Direct Helpline +91 7028025717 */}
            <div className="flex items-center gap-3">
              <span className="text-teal-200 hidden md:flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-ping" />
                Dr. Arya AI Doctor · 24×7 Online
              </span>
              <span className="text-slate-700 hidden md:inline">|</span>
              <a
                href="tel:+917028025717"
                className="text-amber-300 hover:text-amber-200 font-black flex items-center gap-1.5 bg-amber-950/70 hover:bg-amber-900 px-2.5 py-0.5 rounded-full border border-amber-400/40 transition-colors"
              >
                <Phone className="w-3 h-3 text-amber-400 animate-pulse" />
                <span>Call Doctor: <strong>+91 7028025717</strong></span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Main Nav ── */}
        <nav className="container-main" aria-label="Main navigation">
          <div className="flex items-center justify-between h-16 md:h-18">
            
            {/* 1. Brand Logo (Clean, No subtitle clutter) */}
            <Link href="/" className="flex items-center gap-2.5 flex-shrink-0 group" aria-label="Meditrust AI home">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10">
                <img
                  src="/logo.png"
                  alt="Meditrust AI logo"
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-slate-950">
                  <span className="text-blue-600">Medi</span>
                  <span style={{ color: '#0F766E' }}>trust</span>
                  <span className="text-blue-600"> AI</span>
                </span>
                <span className="hidden sm:inline-flex text-3xs px-2 py-0.5 rounded-full bg-teal-50 text-teal-800 font-bold border border-teal-200">
                  15+ Specialties
                </span>
              </div>
            </Link>

            {/* 2. Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button
                      className="nav-link flex items-center gap-1 px-3.5 py-2 rounded-xl hover:bg-slate-50 font-bold text-slate-700 text-xs"
                      aria-expanded={activeDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-2 w-80">
                        <div className="bg-white rounded-2xl border border-slate-100 shadow-xl p-2 animate-fade-in">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors duration-150 group"
                            >
                              <div
                                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                                style={{ background: 'rgba(15,118,110,0.08)' }}
                              >
                                <child.icon className="w-4 h-4" style={{ color: '#0F766E' }} />
                              </div>
                              <div>
                                <div className="text-sm font-semibold text-slate-900 group-hover:text-teal-700 transition-colors">
                                  {child.label}
                                </div>
                                <div className="text-2xs text-slate-500 mt-0.5">{child.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="nav-link px-3.5 py-2 rounded-xl hover:bg-slate-50 font-bold text-slate-700 text-xs"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>

            {/* 3. Action Buttons */}
            <div className="hidden lg:flex items-center gap-2.5">
              <button
                onClick={() => setRxScannerOpen(true)}
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-bold bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 transition-all active:scale-95 shadow-sm"
              >
                <Upload className="w-3.5 h-3.5 text-teal-700" />
                <span>Scan Report / Rx</span>
              </button>

              <a
                href="tel:+917028025717"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-2xl text-xs font-black bg-amber-400 hover:bg-amber-500 text-slate-950 shadow-md transition-all active:scale-95"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>+91 7028025717</span>
              </a>

              <Link href="/symptom-checker" className="btn-primary py-2 px-4 text-xs font-bold shadow-teal flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Consult Dr. Arya</span>
              </Link>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 lg:hidden">
              <a
                href="tel:+917028025717"
                className="px-3 py-1.5 rounded-xl bg-amber-400 text-slate-950 text-xs font-black flex items-center gap-1 shadow-sm"
              >
                <Phone className="w-3.5 h-3.5" /> Call
              </a>

              <button
                onClick={() => setRxScannerOpen(true)}
                className="px-2.5 py-1.5 rounded-xl bg-teal-50 text-teal-900 border border-teal-200 text-2xs font-bold flex items-center gap-1"
              >
                <Upload className="w-3 h-3 text-teal-700" /> Scan
              </button>

              <button
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                onClick={() => setMobileOpen(!mobileOpen)}
                aria-expanded={mobileOpen}
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-slate-900" />}
              </button>
            </div>

          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="lg:hidden fixed inset-0 top-[64px] z-40 bg-white overflow-y-auto pb-24 border-t border-slate-100">
            <div className="px-4 py-5 space-y-4">
              
              {/* Doctor Card in Mobile */}
              <div className="p-4 rounded-3xl bg-gradient-to-r from-teal-900 to-slate-950 text-white flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-2xl border-2 border-teal-300 overflow-hidden flex-shrink-0">
                    <img src="/dr_arya.jpg" alt="Dr. Arya" className="w-full h-full object-cover object-top" />
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border border-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Dr. Arya (24/7 AI Doctor)</h4>
                    <p className="text-2xs text-teal-200">15+ W.H.O. Medical Specialties</p>
                  </div>
                </div>
                <Link
                  href="/symptom-checker"
                  onClick={() => setMobileOpen(false)}
                  className="btn-primary bg-amber-400 hover:bg-amber-500 text-slate-950 text-2xs font-black py-2 px-3 shadow"
                >
                  Consult Now
                </Link>
              </div>

              {/* Direct Hotline */}
              <a
                href="tel:+917028025717"
                className="p-3.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-between shadow"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Immediate Call: +91 7028025717
                </span>
                <span className="bg-slate-950 text-white text-3xs px-2 py-0.5 rounded-full font-bold">
                  Instant Response
                </span>
              </a>

              {/* Navigation Items */}
              <div className="space-y-1.5 pt-2">
                <Link
                  href="/symptom-checker"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-teal-50 text-slate-900 font-bold text-sm"
                >
                  <span className="flex items-center gap-2.5">
                    <Stethoscope className="w-4 h-4 text-teal-700" />
                    Instant AI Symptom Checker
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="/symptom-checker#specialties"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-teal-50 text-slate-900 font-bold text-sm"
                >
                  <span className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-purple-600" />
                    15+ AI Specialty Doctors
                  </span>
                  <span className="badge-purple badge text-3xs font-bold">W.H.O.</span>
                </Link>

                <Link
                  href="/dashboard"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-teal-50 text-slate-900 font-bold text-sm"
                >
                  <span className="flex items-center gap-2.5">
                    <LayoutDashboard className="w-4 h-4 text-teal-700" />
                    Report Explainer (CBC / Thyroid)
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </Link>

                <Link
                  href="/medication-comparison"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-teal-50 text-slate-900 font-bold text-sm"
                >
                  <span className="flex items-center gap-2.5">
                    <Heart className="w-4 h-4 text-pink-600" />
                    Medicine Price Match (Save 80%)
                  </span>
                  <span className="badge-green badge text-3xs font-bold">Jan Aushadhi</span>
                </Link>

                <Link
                  href="/lab-test-comparison"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-teal-50 text-slate-900 font-bold text-sm"
                >
                  <span className="flex items-center gap-2.5">
                    <FlaskConical className="w-4 h-4 text-blue-600" />
                    13+ Blood Test Labs (Pune)
                  </span>
                  <span className="badge-blue badge text-3xs font-bold">60m Pickup</span>
                </Link>

                <Link
                  href="/pricing"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-teal-50 text-slate-900 font-bold text-sm"
                >
                  <span className="flex items-center gap-2.5">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    Unlimited Access Subscription
                  </span>
                  <span className="text-2xs text-teal-700 font-bold">&lt; ₹60/day</span>
                </Link>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <button
                  onClick={() => {
                    setMobileOpen(false)
                    setRxScannerOpen(true)
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold shadow-teal"
                >
                  <Upload className="w-4 h-4" /> Scan & Upload Report / Prescription
                </button>
              </div>

            </div>
          </div>
        )}
      </header>

      {/* Real-time Auth Modal */}
      <AuthModal
        isOpen={authModalOpen}
        onClose={() => setAuthModalOpen(false)}
        onLoginSuccess={(u) => setUser(u)}
      />

      {/* Real-time Prescription Scanner Modal */}
      <PrescriptionScannerModal
        isOpen={rxScannerOpen}
        onClose={() => setRxScannerOpen(false)}
      />
    </>
  )
}
