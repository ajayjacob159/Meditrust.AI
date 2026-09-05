'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Stethoscope, MessageCircle, ArrowRight, ShieldCheck,
  Sparkles, Heart, FlaskConical, LayoutDashboard, Clock,
  ChevronDown, Star, CheckCircle2, Search, ShoppingBag,
  TrendingDown, MapPin, Building2, GraduationCap, Calculator,
  Baby, Check, Sliders, Activity, ShieldAlert
} from 'lucide-react'
import LabReportExplainerModal from '@/components/common/LabReportExplainerModal'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'
import FloStyleInteractiveLifecycle from '@/components/home/FloStyleInteractiveLifecycle'
import WomensHealthFullSpectrum from '@/components/home/WomensHealthFullSpectrum'

export default function HomePage() {
  const [reportModalOpen, setReportModalOpen] = useState(false)
  const [rxScannerOpen, setRxScannerOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(0)
  const [activeTab, setActiveTab] = useState<'triage' | 'savings' | 'labs'>('triage')
  const [searchPrompt, setSearchPrompt] = useState('')

  // Generic Savings Slider State
  const [monthlySpend, setMonthlySpend] = useState<number>(4000)
  const genericSavings = Math.round(monthlySpend * 0.82)
  const genericPay = monthlySpend - genericSavings
  const annualSavings = genericSavings * 12

  // Triage Demo Query State
  const [triageTopic, setTriageTopic] = useState<'cramps' | 'pcos' | 'amh' | 'bp'>('cramps')

  const triageData = {
    cramps: {
      query: 'Severe Day-1 period cramps with lower back discomfort',
      response: 'Continuous 40°C thermal warmth relaxes myometrial smooth muscle spasms just like 400mg Ibuprofen without causing gastric acid irritation. Apply a Meditrust Sakhi™ Cramp Heat Patch and rest.',
      tag: 'THERMAL THERAPY'
    },
    pcos: {
      query: 'Irregular 45-day cycles, facial hair growth, and chin acne',
      response: 'This classic pattern points to insulin resistance in PCOS. The clinically proven 40:1 ratio of Myo-Inositol + D-Chiro Inositol restores spontaneous ovulation within 90 days.',
      tag: 'METABOLIC CARE'
    },
    amh: {
      query: 'My AMH report says 0.9 ng/mL at age 32. What does it mean?',
      response: 'An AMH of 0.9 indicates diminished ovarian reserve (quantity), but at age 32 your egg chromosomal quality remains young and healthy. Consult an IVF specialist early without delay.',
      tag: 'FERTILITY TRIAGE'
    },
    bp: {
      query: 'Fasting Blood Sugar is 142 mg/dL. Is this diabetic?',
      response: 'Fasting glucose above 126 mg/dL on two tests indicates Diabetes. Let’s order an HbA1c 3-month average test and connect you with a diabetologist.',
      tag: 'METABOLIC DIABETES'
    }
  }

  const faqs = [
    {
      q: 'What is Meditrust AI and how does Dr. Arya work?',
      a: 'Meditrust AI is India’s clinical-grade digital health platform. Dr. Arya is a 24/7 AI Doctor fluent in Marathi, Hindi, and English that provides instant symptom triage across 15+ specialties, explains complex lab reports in simple language, and finds 80% cheaper Jan Aushadhi generic medicines.'
    },
    {
      q: 'How do the 12 Free Tools help women and couples?',
      a: 'Our 12 Free Clinical Tools include calculators for Ovulation, Fertility Readiness, IVF Cost transparency, Pregnancy Week milestones, Hospital Delivery costs, and interactive Maternity Hospital Bag checklists.'
    },
    {
      q: 'How much can I save on medicines using Jan Aushadhi generics?',
      a: 'Patients save between 70% and 85% on chronic prescriptions for diabetes, blood pressure, thyroid, PCOS, and IVF support by matching branded medications against government PMBJP Jan Aushadhi equivalents.'
    },
    {
      q: 'How does 60-minute home blood sample collection work?',
      a: 'We connect with 13+ accredited NABL/CAP diagnostic labs across Pune & PCMC (Thyrocare, Metropolis, Dr Lal PathLabs) with certified phlebotomists arriving at your doorstep in 60 minutes.'
    }
  ]

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 font-sans selection:bg-rose-100 selection:text-rose-900 pt-20 sm:pt-24 pb-20">
      
      {/* ── 1. MINIMALIST HERO SECTION ── */}
      <section className="relative max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-16 text-center space-y-8">
        
        {/* Subtle pill badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Clinical AI Doctor · Women&apos;s Health · 80% Generic Savings</span>
        </div>

        {/* Main Clean Headline */}
        <div className="max-w-3xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
            Healthcare, <br className="hidden sm:inline" />
            <span className="text-gradient-chic">beautifully simplified.</span>
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Instant 24/7 multilingual AI triage with Dr. Arya, transparent PMBJP generic medicine savings, and modern reproductive health for women.
          </p>
        </div>

        {/* Clean Interactive Search / Triage Input */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl p-2 shadow-lg border border-slate-200/90 flex items-center gap-2">
            <Search className="w-5 h-5 text-rose-600 flex-shrink-0 ml-3" />
            <input
              type="text"
              placeholder="Ask Dr. Arya anything (e.g. 'Period cramps', 'What is AMH', 'Save on Telma 40')..."
              value={searchPrompt}
              onChange={(e) => setSearchPrompt(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && searchPrompt) {
                  window.location.href = `/symptom-checker?q=${encodeURIComponent(searchPrompt)}`
                }
              }}
              className="w-full bg-transparent text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-medium px-1"
            />
            <Link
              href={searchPrompt ? `/symptom-checker?q=${encodeURIComponent(searchPrompt)}` : '/symptom-checker'}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors flex-shrink-0 flex items-center gap-1.5"
            >
              <span>Ask AI</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Quick Query Pills */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 pt-3 text-3xs">
            <span className="text-slate-400 font-medium">Quick Lookup:</span>
            {[
              { text: '🌸 Period Cramps & PMS', href: '/marketplace' },
              { text: '🩸 What is AMH?', href: '/fertility-qa/what-is-amh-anti-mullerian-hormone-levels' },
              { text: '🧰 12 Free Tools', href: '/womens-health/tools' },
              { text: '💊 80% Generic Savings', href: '/medication-comparison' },
              { text: '🤱 MediMom Care', href: '/medimom' }
            ].map((pill, idx) => (
              <Link
                key={idx}
                href={pill.href}
                className="px-2.5 py-1 rounded-full bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 transition-colors font-medium"
              >
                {pill.text}
              </Link>
            ))}
          </div>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/symptom-checker"
            className="px-7 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-xs shadow-md transition-transform hover:scale-102 flex items-center gap-2"
          >
            <Stethoscope className="w-4 h-4" />
            <span>Consult Dr. Arya AI (24/7 Free)</span>
          </Link>

          <Link
            href="/womens-health/tools"
            className="px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs border border-slate-300 transition-colors flex items-center gap-2 shadow-2xs"
          >
            <span>🧰</span>
            <span>Explore 12 Free Clinical Tools</span>
          </Link>
        </div>

        {/* Subtle Trust Indicators */}
        <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-3xs text-slate-500 font-medium border-t border-slate-200/60 max-w-2xl mx-auto">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>ABDM 256-Bit Encrypted</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            <span>NABL &amp; CAP Accredited Labs</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>4.9/5 Rating (12,000+ Patients)</span>
          </span>
        </div>

      </section>

      {/* ── 2. THE 4 PILLARS OF MEDITRUST (MINIMALIST CARDS) ── */}
      <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-3xs font-bold uppercase tracking-wider text-rose-600">
            THE MEDITRUST ECOSYSTEM
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
            Everything You Need. In One Place.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          
          {/* Pillar 1: 12 Free Clinical Tools */}
          <Link
            href="/womens-health/tools"
            className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-emerald-300 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl">
                🧰
              </div>
              <div>
                <span className="text-3xs font-black uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  12 FREE TOOLS
                </span>
                <h3 className="font-black text-base text-slate-950 mt-1.5 group-hover:text-emerald-700 transition-colors">
                  Clinical Calculators
                </h3>
              </div>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Fertility Readiness, Ovulation, IVF Cost, Delivery Estimator &amp; Maternity Bag checklist.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-emerald-700 gap-1">
              <span>Open Tools</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Pillar 2: Medi's MOM */}
          <Link
            href="/medimom"
            className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-rose-300 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center text-xl">
                🤱
              </div>
              <div>
                <span className="text-3xs font-black uppercase text-rose-700 bg-rose-50 px-2 py-0.5 rounded">
                  MATERNAL CARE
                </span>
                <h3 className="font-black text-base text-slate-950 mt-1.5 group-hover:text-rose-600 transition-colors">
                  Medi&apos;s MOM™
                </h3>
              </div>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                4-Trimester pregnancy roadmap, mandatory NABL scans, and Sakhi postpartum healing kits.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-rose-600 gap-1">
              <span>Explore Maternal Care</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Pillar 3: Sakhi Marketplace */}
          <Link
            href="/marketplace"
            className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-pink-300 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-pink-50 text-pink-700 flex items-center justify-center text-xl">
                🛍️
              </div>
              <div>
                <span className="text-3xs font-black uppercase text-pink-700 bg-pink-50 px-2 py-0.5 rounded">
                  SAKHI STORE
                </span>
                <h3 className="font-black text-base text-slate-950 mt-1.5 group-hover:text-pink-600 transition-colors">
                  Period &amp; Wellness
                </h3>
              </div>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                100% Rash-Free sanitary pads, 8-hour cramp heat patches, and PCOS Inositol formulations.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-pink-600 gap-1">
              <span>Browse Products</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Pillar 4: 80% Generic Savings */}
          <Link
            href="/medication-comparison"
            className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-teal-300 transition-all flex flex-col justify-between space-y-4 group"
          >
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center text-xl">
                💊
              </div>
              <div>
                <span className="text-3xs font-black uppercase text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                  JAN AUSHADHI
                </span>
                <h3 className="font-black text-base text-slate-950 mt-1.5 group-hover:text-teal-700 transition-colors">
                  80% Generic Savings
                </h3>
              </div>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Match branded prescriptions against bioequivalent government PMBJP generic alternatives.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-teal-700 gap-1">
              <span>Compare Medicines</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

        </div>
      </section>

      {/* ── 2.5 THE FULL SPECTRUM OF WOMEN'S & FAMILY HEALTH (6 CONTINUOUS LIFECYCLE STAGES) ── */}
      <WomensHealthFullSpectrum />

      {/* ── 3. INTERACTIVE MINIMALIST DEMO WORKBENCH ── */}
      <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="text-3xs font-bold uppercase tracking-wider text-rose-600">
                LIVE INTERACTIVE CLINICAL ENGINES
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                Experience the Power of Meditrust
              </h3>
            </div>

            {/* Switcher Tabs */}
            <div className="flex bg-slate-100 p-1 rounded-2xl text-xs font-bold">
              <button
                onClick={() => setActiveTab('triage')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeTab === 'triage' ? 'bg-white text-slate-950 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🩺 Dr. Arya Triage
              </button>
              <button
                onClick={() => setActiveTab('savings')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeTab === 'savings' ? 'bg-white text-slate-950 shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                💰 80% Generic Savings
              </button>
            </div>
          </div>

          {/* TAB 1: DR. ARYA TRIAGE */}
          {activeTab === 'triage' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animate-fadeIn text-xs">
              
              <div className="lg:col-span-5 space-y-3">
                <span className="font-bold text-slate-900 block">Select a Clinical Scenario:</span>
                <div className="space-y-2">
                  {[
                    { id: 'cramps', label: '🩸 Severe Period Cramps', category: 'Dysmenorrhea' },
                    { id: 'pcos', label: '🌸 Irregular 45-Day Cycles', category: 'PCOS Metabolic' },
                    { id: 'amh', label: '🔬 Low AMH 0.9 ng/mL', category: 'Ovarian Reserve' },
                    { id: 'bp', label: '🩺 High Fasting Blood Sugar', category: 'Diabetes' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setTriageTopic(item.id as any)}
                      className={`w-full p-3 rounded-2xl border text-left transition-all flex items-center justify-between ${
                        triageTopic === item.id
                          ? 'bg-rose-50 border-rose-400 font-bold text-rose-950 shadow-2xs'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{item.label}</span>
                      <span className="text-3xs text-slate-400 uppercase">{item.category}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 bg-slate-900 text-white rounded-3xl p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="font-bold text-slate-200">Dr. Arya, AI Physician</span>
                  </div>
                  <span className="text-3xs font-black bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded uppercase">
                    {triageData[triageTopic].tag}
                  </span>
                </div>

                <div className="space-y-3 text-xs leading-relaxed">
                  <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300">
                    <strong className="text-white block font-bold text-3xs uppercase mb-1">User Inquiry:</strong>
                    &ldquo;{triageData[triageTopic].query}&rdquo;
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-slate-100 space-y-2">
                    <strong className="text-rose-400 block font-bold text-3xs uppercase">Clinical Recommendation:</strong>
                    <p>{triageData[triageTopic].response}</p>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <Link
                    href="/symptom-checker"
                    className="px-5 py-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-1.5"
                  >
                    <span>Start Free Consultation</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: GENERIC SAVINGS CALCULATOR */}
          {activeTab === 'savings' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fadeIn text-xs">
              <div className="space-y-4">
                <div>
                  <label className="font-bold text-slate-900 text-sm block">
                    Your Current Monthly Medicine Spend:
                  </label>
                  <div className="text-3xl font-black text-slate-950 mt-1">
                    ₹{monthlySpend.toLocaleString('en-IN')} / month
                  </div>
                </div>

                <input
                  type="range"
                  min="500"
                  max="15000"
                  step="250"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full accent-emerald-600"
                />
                <div className="flex justify-between text-3xs text-slate-400">
                  <span>₹500/mo</span>
                  <span>₹7,500/mo</span>
                  <span>₹15,000/mo</span>
                </div>

                <p className="text-slate-500 text-3xs leading-relaxed">
                  PMBJP Jan Aushadhi generic medicines contain the exact active pharmaceutical ingredient (API) with certified bioequivalence at government-regulated rates.
                </p>
              </div>

              <div className="bg-emerald-950 text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-emerald-800">
                <span className="text-3xs font-black uppercase text-emerald-300 bg-emerald-900 px-2.5 py-1 rounded-full">
                  82% AVERAGE PRICE DROP
                </span>

                <div className="space-y-1">
                  <span className="text-3xs text-slate-300">You Pay with Jan Aushadhi Generics:</span>
                  <div className="text-3xl font-black text-emerald-400">
                    ₹{genericPay.toLocaleString('en-IN')} / mo
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/10 border border-white/10 space-y-1">
                  <strong className="text-white block font-bold">Your Annual Family Savings:</strong>
                  <div className="text-2xl font-black text-amber-300">
                    ₹{annualSavings.toLocaleString('en-IN')} / year
                  </div>
                </div>

                <Link
                  href="/medication-comparison"
                  className="block text-center py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs transition-colors"
                >
                  Find My Generic Medicines →
                </Link>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ── 4. WOMEN'S ACADEMY & FERTILITY Q&A TEASER ── */}
      <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* 1,000+ Fertility Q&A Hub Card */}
          <div className="bg-gradient-to-br from-slate-900 to-rose-950 text-white rounded-3xl p-6 sm:p-8 space-y-4 flex flex-col justify-between border border-slate-800">
            <div className="space-y-2">
              <span className="text-3xs font-black text-rose-300 bg-rose-500/20 px-2.5 py-1 rounded-full uppercase">
                1,000+ QUESTIONS INDEXED
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Fertility &amp; IVF Questions Engine™
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                Every fertility question answered with SEO pages, YouTube scripts, Instagram reels, and 1-click WhatsApp answers.
              </p>
            </div>

            <Link
              href="/fertility-qa"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-300 hover:text-white transition-colors"
            >
              <span>Explore Fertility Questions Engine</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Women's Health Academy Card */}
          <div className="bg-gradient-to-br from-slate-900 to-purple-950 text-white rounded-3xl p-6 sm:p-8 space-y-4 flex flex-col justify-between border border-slate-800">
            <div className="space-y-2">
              <span className="text-3xs font-black text-purple-300 bg-purple-500/20 px-2.5 py-1 rounded-full uppercase">
                CERTIFIED COURSES
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Women&apos;s Health Academy™
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                6 masterclasses on hormones, PCOS metabolic reversal, preconception blueprint, pregnancy trimesters, and menopause.
              </p>
            </div>

            <Link
              href="/womens-health/academy"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-300 hover:text-white transition-colors"
            >
              <span>View Certified Courses</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

      {/* ── 4.5 OUR 2030 HEALTHCARE VISION & MANIFESTO ── */}
      <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 text-white p-8 sm:p-12 border border-slate-800 shadow-xl space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-rose-400 font-bold text-3xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>OUR VISION &amp; PURPOSE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Healthcare that Listens, Protects, and Empowers.
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
                We are building an India where medical intelligence is never limited by pincode or income, health anxiety is replaced with clinical clarity, and lifesaving medicines cost 80% less.
              </p>
            </div>

            <Link
              href="/vision"
              className="px-6 py-3 rounded-full bg-white text-slate-950 hover:bg-slate-100 font-black text-xs flex items-center gap-1.5 flex-shrink-0 transition-transform hover:scale-102 shadow-xs"
            >
              <span>Read Full 2030 Manifesto</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold text-sm">
                1
              </span>
              <strong className="text-white font-bold text-sm block">Universal Clinical Access</strong>
              <p className="text-slate-300 text-3xs leading-relaxed font-normal">
                24/7 instant multilingual AI triage with Dr. Arya in Marathi, Hindi, and English—ensuring no family is left without medical guidance.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center font-bold text-sm">
                2
              </span>
              <strong className="text-white font-bold text-sm block">80% Generic Savings</strong>
              <p className="text-slate-300 text-3xs leading-relaxed font-normal">
                Democratizing medicine prices through PMBJP Jan Aushadhi bioequivalent generic substitution, saving families thousands every month.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
              <span className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center font-bold text-sm">
                3
              </span>
              <strong className="text-white font-bold text-sm block">Women&apos;s Reproductive Dignity</strong>
              <p className="text-slate-300 text-3xs leading-relaxed font-normal">
                From menarche to pregnancy and menopause: 100% toxin-free period care (Sakhi™), maternal roadmaps (MediMom), and free health calculators.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. CLEAN MINIMALIST FAQS ── */}
      <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-3xs font-bold uppercase tracking-wider text-rose-600">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="text-2xl font-black text-slate-950">
            Clear Answers to Common Inquiries
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all"
            >
              <button
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-slate-950 flex items-center justify-between gap-4"
              >
                <span>{faq.q}</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180 text-rose-600' : ''}`} />
              </button>
              {activeFaq === idx && (
                <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed font-normal border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── 6. MINIMALIST WHATSAPP BANNER ── */}
      <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <span className="text-3xs font-bold text-rose-400 uppercase tracking-wider">
              24/7 AI DOCTOR ON WHATSAPP
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Have a Health Question Right Now?
            </h3>
            <p className="text-xs text-slate-300 font-normal">
              Chat confidentially with Dr. Arya in Marathi, Hindi, or English on WhatsApp (+91 7028025717).
            </p>
          </div>

          <a
            href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20have%20a%20health%20question"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 rounded-full bg-[#25d366] hover:bg-[#1ebd5a] text-slate-950 font-black text-xs shadow-md transition-transform hover:scale-102 flex items-center justify-center gap-2 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>

    </div>
  )
}
