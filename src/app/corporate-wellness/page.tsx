'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Building2, Users, ShieldCheck, Stethoscope, Sparkles, Activity,
  Clock, Heart, CheckCircle2, ArrowRight, Phone, Mail, Award,
  DollarSign, TrendingDown, TrendingUp, Zap, HelpCircle, FileText,
  ChevronRight, Calculator, PieChart, Lock, UserCheck, MessageCircle,
  AlertTriangle, Scale, Shield, Landmark, Download, Baby, Compass,
  Check, ChevronDown, CheckCircle
} from 'lucide-react'

export default function CorporateWellnessPage() {
  // ROI Calculator State
  const [employeeCount, setEmployeeCount] = useState<number>(250)

  // Demo Booking Form State
  const [companyName, setCompanyName] = useState('')
  const [contactName, setContactName] = useState('')
  const [workEmail, setWorkEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('Hyderabad / Bengaluru / Pune / Mumbai / Delhi')
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    '24/7 AI Doctor Triage (Dr. Arya)',
    "Women's Health & PCOS Program",
    'Maternity & Return-to-Work Care',
    '80% Jan Aushadhi Generic Savings',
    'Menopause & Midlife Health'
  ])
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [deckDownloaded, setDeckDownloaded] = useState(false)

  // ROI Calculations based on Specification
  // Prevent mid-career dropouts: ~1 dropout prevented per 25-50 women employees
  const dropoutsPrevented = Math.max(1, Math.round(employeeCount * 0.04))
  // Replacement cost saved: ~₹6,50,000 per talent (50-80L for 10)
  const replacementCostSaved = dropoutsPrevented * 650000
  // Program Cost: ₹500/employee/year
  const programCost = employeeCount * 500
  const estimatedRoiRatio = Math.round(replacementCostSaved / Math.max(1, programCost))
  const daysAbsenteeismSaved = Math.round(employeeCount * 9) // 8-12 days/year/woman

  const handleToggleNeed = (need: string) => {
    setSelectedNeeds(prev =>
      prev.includes(need) ? prev.filter(n => n !== need) : [...prev, need]
    )
  }

  const handleDownloadDeck = () => {
    setDeckDownloaded(true)
    const element = document.createElement('a')
    const file = new Blob([
      `MEDITRUST AI — CORPORATE WOMEN'S HEALTHCARE BENEFIT DECK 2026\n\n` +
      `India's First AI-Backed Women's Healthcare Benefit\n` +
      `With Pan-India Highest Gynaecology Network — From First Period to Menopause\n\n` +
      `1. The Workplace Problem:\n` +
      `- 93% of employers worried about rising healthcare costs\n` +
      `- 92% of working parents feel burned out\n` +
      `- 69% of employees consider switching jobs for reproductive benefits\n` +
      `- 51% of Indian women have ongoing issues (PCOS, anemia, thyroid) not reaching HR dashboard\n` +
      `- India: 709M females in 2025, 735M in 2030, 400M women 45+ today, 130M menopausal by 2030\n\n` +
      `2. Four Pillars of Care:\n` +
      `- Always-on Support (24/7 Dr. Arya AI + human experts in 12 languages)\n` +
      `- Integrated Payments (Corporate women's health wallet + one invoice)\n` +
      `- Continuous Care (Connected, coordinated care without repeating history)\n` +
      `- Pan-India Network (Gynaecologists, IVF specialists, diagnostics in 175+ cities)\n\n` +
      `3. Proven ROI:\n` +
      `- 2:1 Clinical ROI (₹80,000 saved per high-risk birth)\n` +
      `- 4:1 Business ROI (94% return-to-work rate post-maternity)\n\n` +
      `Contact Enterprise Desk: care@meditrustlife.com | +91 7028025717\n` +
      `Website: https://www.meditrustai.in/corporate-wellness`
    ], { type: 'text/plain' })
    element.href = URL.createObjectURL(file)
    element.download = 'Meditrust_AI_Corporate_Womens_Healthcare_Deck_2026.txt'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    try {
      await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: contactName,
          email: workEmail,
          phone: phone,
          city: location,
          type: 'corporate_wellness',
          details: {
            companyName,
            employeeCount,
            selectedNeeds,
            programCost: `₹${programCost.toLocaleString('en-IN')}`,
            replacementSavings: `₹${replacementCostSaved.toLocaleString('en-IN')}`,
            estimatedRoi: `${estimatedRoiRatio}x ROI`,
          },
        }),
      })
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden pt-20 sm:pt-24 pb-20">
      
      {/* ── BREADCRUMBS ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/womens-health" className="hover:text-rose-700 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Corporate Women&apos;s Benefits</span>
        </nav>
      </div>

      {/* ══════════════════════════════════════════════════════════════════════════
          SECTION 1: HERO SECTION
          ══════════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Tag, Headline, Sub-headline, Body & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 border border-rose-200 text-rose-950 text-xs font-black shadow-2xs">
              <span className="w-2 rounded-full bg-rose-600 animate-ping" />
              <span>TRUSTED BY FORWARD-THINKING EMPLOYERS</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
              India&apos;s First AI-Backed <span className="text-gradient-chic">Women&apos;s Healthcare Benefit</span>
            </h1>

            {/* Sub-headline */}
            <div className="text-base sm:text-xl font-bold text-rose-900 bg-rose-50 border-l-4 border-rose-500 px-4 py-2.5 rounded-r-2xl">
              With Pan-India Highest Gynaecology Network — From First Period to Menopause
            </div>

            {/* Body */}
            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed">
              <strong>MEDITRUST AI helps you save talent and money.</strong> We deliver more effective, equitable healthcare — bridging gaps in care to improve outcomes for all women in your workforce. From her first period to menopause, Dr. Arya stays with her journey.
            </p>

            {/* Quick Privacy & Network Trust Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs font-semibold text-slate-700">
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>100% Private — Zero Personal Data Disclosed to HR</span>
              </div>
              <div className="flex items-center gap-2 p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                <Clock className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>24/7 AI Companion on App &amp; WhatsApp in 12 Languages</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#demo-form"
                className="px-7 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-md transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Book a Demo for HR</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleDownloadDeck}
                className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-teal-400" />
                <span>{deckDownloaded ? 'Deck Downloaded (Check Files)' : 'Download Corporate Wellness Deck'}</span>
              </button>

              <a
                href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20am%20an%20HR%20Leader%20interested%20in%20Meditrust%20Corporate%20Women%27s%20Benefits"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full border border-emerald-300 bg-emerald-50 hover:bg-emerald-100 text-emerald-900 font-bold text-xs shadow-2xs transition-colors flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 text-[#25d366]" />
                <span>Talk on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Visual Dark Premium Banner */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-teal-500/20 rounded-3xl blur-xl" />
            
            <div className="relative bg-slate-950 text-white rounded-3xl overflow-hidden border border-slate-800 shadow-2xl space-y-4">
              
              {/* Premium Visual Banner Image */}
              <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src="/meditrust_womens_healthcare_pan_india_banner.webp"
                  alt="Using Artificial Intelligence to Make Healthcare More Accessible, Understandable and Affordable"
                  className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-3xs font-mono uppercase tracking-widest text-teal-400 font-bold block">
                    MEDITRUST AI ENTERPRISE
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                    Using Artificial Intelligence to Make Healthcare More Accessible, Understandable and Affordable
                  </h3>
                </div>
              </div>

              {/* Key Metric Highlights Grid */}
              <div className="p-5 pt-0 space-y-4">
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-3xs">Maternity Retention</span>
                    <span className="text-base font-black text-rose-400">94% Return Rate</span>
                    <span className="text-3xs text-slate-400">vs 52% national avg</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-3xs">Clinical &amp; Business ROI</span>
                    <span className="text-base font-black text-emerald-400">4:1 Business ROI</span>
                    <span className="text-3xs text-slate-400">₹80,000 saved/high-risk</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-3xs">Care Continuum</span>
                    <span className="text-base font-black text-amber-400">40+ Years Span</span>
                    <span className="text-3xs text-slate-400">Puberty to Menopause</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1">
                    <span className="text-slate-400 block text-3xs">Pan-India Reach</span>
                    <span className="text-base font-black text-teal-300">175+ Cities</span>
                    <span className="text-3xs text-slate-400">Tier 1, Tier 2 &amp; Tier 3</span>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/10 text-3xs text-slate-300 flex items-center justify-between">
                  <span className="flex items-center gap-1">
                    <Lock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>ABDM &amp; HIPAA Compliant</span>
                  </span>
                  <span className="font-bold text-white">POSH &amp; Maternity Act Aligned</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════════
          SECTION 2: WHEN BENEFITS FALL SHORT, WOMEN LEAVE - AND COSTS RISE
          ══════════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-rose-200 shadow-sm space-y-8">
          
          <div className="space-y-2 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-700 uppercase tracking-wider">
              <span>SECTION 02 · THE HIDDEN WORKPLACE COST</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              When Benefits Fall Short, Women Leave — And Costs Rise
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Many traditional employer benefit programs leave critical care gaps that drive up costs, hurt retention and productivity.
            </p>
          </div>

          {/* 4 Problem Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-3xl sm:text-4xl font-black text-rose-600 tracking-tight">
                  93%
                </span>
                <h3 className="font-black text-sm sm:text-base text-slate-950 leading-snug">
                  Employers Worried About Rising Costs
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  93% of employers are worried about rising healthcare costs and unvetted medical quality across fragmented insurance plans.
                </p>
              </div>
              <span className="text-3xs font-bold text-rose-800 bg-rose-100 px-2.5 py-1 rounded-lg w-fit">
                Cost &amp; Quality Gap
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-purple-50/70 border border-purple-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-3xl sm:text-4xl font-black text-purple-600 tracking-tight">
                  92%
                </span>
                <h3 className="font-black text-sm sm:text-base text-slate-950 leading-snug">
                  Working Parents Burned Out
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  92% of working parents feel burned out, making it harder to show up at work and at home without continuous pediatric &amp; maternal support.
                </p>
              </div>
              <span className="text-3xs font-bold text-purple-800 bg-purple-100 px-2.5 py-1 rounded-lg w-fit">
                Parental Fatigue
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-3xl sm:text-4xl font-black text-amber-600 tracking-tight">
                  69%
                </span>
                <h3 className="font-black text-sm sm:text-base text-slate-950 leading-snug">
                  Considering Job Switch for Care
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  69% of employees have taken or are considering taking a new job due to better reproductive health and family-building benefits.
                </p>
              </div>
              <span className="text-3xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-lg w-fit">
                Talent Attrition
              </span>
            </div>

            <div className="p-6 rounded-3xl bg-teal-50/70 border border-teal-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-3xl sm:text-4xl font-black text-teal-600 tracking-tight">
                  51%
                </span>
                <h3 className="font-black text-sm sm:text-base text-slate-950 leading-snug">
                  Hidden Chronic Health Issues
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  51% of women in India have ongoing health issues — PCOS, irregular periods, anemia, thyroid — that never reach your insurance dashboard.
                </p>
              </div>
              <span className="text-3xs font-bold text-teal-800 bg-teal-100 px-2.5 py-1 rounded-lg w-fit">
                Unseen Productivity Tax
              </span>
            </div>

          </div>

          {/* Demographic Data Banner: 40-Year Gap */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-950 to-slate-900 text-white border border-slate-800 flex flex-col md:flex-row items-center gap-6 justify-between">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold uppercase tracking-wider">
                <AlertTriangle className="w-4 h-4" />
                <span>The 40-Year Policy Disconnect in India</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-black text-white leading-tight">
                Your current health policy covers 3 days of delivery, not 40 years of her health.
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                In India, there are <strong>709M females in 2025</strong> and <strong>735M by 2030</strong>. <strong>400M women are 45+ today</strong> and <strong>130M will be in menopausal phase by 2030</strong>. Single-episode insurance models leave your most valuable senior female leaders unsupported.
              </p>
            </div>

            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center space-y-1">
                <span className="text-3xs uppercase tracking-widest text-slate-300 font-semibold block">
                  Indian Female Demographic
                </span>
                <span className="text-2xl font-black text-teal-300">735 Million</span>
                <span className="text-3xs text-slate-300 block">by 2030 (400M Age 45+)</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════════
          SECTION 3: MEDITRUST HELPS YOU SAVE TALENT AND MONEY
          ══════════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider">
              <span>SECTION 03 · CONTINUUM PLATFORM</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              MEDITRUST Helps You Save Talent and Money
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              We built for the continuum, not episodes.
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Pillar 1: Always-on Support */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-teal-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center text-xl font-bold">
                🩺
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-black text-slate-950">
                  Always-on Support
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  24/7 access to Dr. Arya AI companion + human experts through every life stage. On App, WhatsApp and Voice in 12 Indian languages. <strong>Privacy-first: Your Health. Your Data. Your Choice.</strong>
                </p>
              </div>
              <div className="pt-2 flex flex-wrap gap-2 text-3xs font-bold text-rose-800">
                <span className="px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-100">24/7 Dr. Arya AI</span>
                <span className="px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-100">WhatsApp &amp; Voice</span>
                <span className="px-2.5 py-1 rounded-lg bg-rose-50 border border-rose-100">12 Indian Languages</span>
              </div>
            </div>

            {/* Pillar 2: Integrated Payments */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-teal-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-xl font-bold">
                💳
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-black text-slate-950">
                  Integrated Payments
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Corporate women&apos;s health wallet + billing seamlessly managed in one platform. One invoice, full visibility, zero hassle for employees with direct provider settlements.
                </p>
              </div>
              <div className="pt-2 flex flex-wrap gap-2 text-3xs font-bold text-blue-800">
                <span className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-100">Corporate Health Wallet</span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-100">1 Consolidated Invoice</span>
                <span className="px-2.5 py-1 rounded-lg bg-blue-50 border border-blue-100">Zero Claim Hassle</span>
              </div>
            </div>

            {/* Pillar 3: Continuous Care */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-teal-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-bold">
                🔄
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-black text-slate-950">
                  Continuous Care
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Connected, coordinated care to support employees without pause. AI remembers context she chooses to share — no repeating medical history to every doctor or lab.
                </p>
              </div>
              <div className="pt-2 flex flex-wrap gap-2 text-3xs font-bold text-purple-800">
                <span className="px-2.5 py-1 rounded-lg bg-purple-50 border border-purple-100">Shared Context Memory</span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-50 border border-purple-100">No Repeated History</span>
                <span className="px-2.5 py-1 rounded-lg bg-purple-50 border border-purple-100">Coordinated Referrals</span>
              </div>
            </div>

            {/* Pillar 4: Pan-India Network */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 hover:border-teal-300 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl font-bold">
                🗺️
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-black text-slate-950">
                  Pan-India Network
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Access to our trusted network of gynaecologists, fertility specialists, diagnostics and pharmacies at the best rates — in Hyderabad, Bengaluru, Pune, Mumbai, Delhi and Tier 2/3.
                </p>
              </div>
              <div className="pt-2 flex flex-wrap gap-2 text-3xs font-bold text-emerald-800">
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-100">Top Gynae &amp; IVF Clinics</span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-100">80% Jan Aushadhi Savings</span>
                <span className="px-2.5 py-1 rounded-lg bg-emerald-50 border border-emerald-100">Hyderabad to Tier 2/3</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════════
          SECTION 4: MADE TO SUPPORT EVERY STAGE OF LIFE - ONE WOMAN. EVERY STAGE.
          ══════════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-gradient-to-br from-rose-50/60 via-slate-50 to-purple-50/60 rounded-3xl p-6 sm:p-10 border border-rose-200/80 space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-200 text-rose-900 text-xs font-bold uppercase tracking-wider">
              <span>SECTION 04 · LIFE STAGES</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Made to Support Every Stage of Life — One Woman. Every Stage.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Specialized clinical playbooks designed for the entire journey of your female workforce.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Stage 1: Fertility & Family Building */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center text-lg font-bold">
                    🥚
                  </div>
                  <div>
                    <span className="text-3xs font-mono uppercase text-rose-600 font-bold block">Stage 01</span>
                    <h3 className="text-base sm:text-lg font-black text-slate-950">Fertility &amp; Family Building</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Guiding members on the quickest, safest, and most affordable path to parenthood. PCOS, egg freezing, IVF second opinions, and partner inclusion.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-100 text-xs font-bold text-rose-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-rose-600 flex-shrink-0" />
                <span>30% of fertility members achieve pregnancy without assisted reproduction.</span>
              </div>
            </div>

            {/* Stage 2: Maternity & Newborn Care */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-lg font-bold">
                    🤰
                  </div>
                  <div>
                    <span className="text-3xs font-mono uppercase text-blue-600 font-bold block">Stage 02</span>
                    <h3 className="text-base sm:text-lg font-black text-slate-950">Maternity &amp; Newborn Care</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Providing proactive, continuous care — including high-risk support — to help families throughout pregnancy, postpartum, and return-to-work coaching.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-100 text-xs font-bold text-blue-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <span>Up to 27% lower NICU admissions with early risk detection.</span>
              </div>
            </div>

            {/* Stage 3: Parenting & Pediatrics */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-lg font-bold">
                    🧸
                  </div>
                  <div>
                    <span className="text-3xs font-mono uppercase text-purple-600 font-bold block">Stage 03</span>
                    <h3 className="text-base sm:text-lg font-black text-slate-950">Parenting &amp; Pediatrics</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Helping working parents navigate child development with 24/7 pediatric care, infant milestone tracking, and expert support, reducing stress and improving well-being.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-100 text-xs font-bold text-purple-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span>24/7 on-demand pediatrician triage resolving infant fever &amp; feeding queries.</span>
              </div>
            </div>

            {/* Stage 4: Menopause & Midlife Health */}
            <div className="p-7 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center text-lg font-bold">
                    🦋
                  </div>
                  <div>
                    <span className="text-3xs font-mono uppercase text-teal-600 font-bold block">Stage 04</span>
                    <h3 className="text-base sm:text-lg font-black text-slate-950">Menopause &amp; Midlife Health</h3>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  Empowering members to thrive in midlife, both personally and professionally, with holistic care, bone density checks, and safe HRT guidance.
                </p>
              </div>
              <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-100 text-xs font-bold text-teal-950 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                <span>India&apos;s most neglected workforce segment — 400M women 45+ with zero workplace support today.</span>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════════
          SECTION 5: SUPERIOR OUTCOMES. PROVEN ROI.
          ══════════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
              <span>SECTION 05 · ENTERPRISE IMPACT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Superior Outcomes. Proven ROI.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal">
              Hard data showing measurable clinical improvements and enterprise cost savings.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Outcome 1 */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold">
                🩺
              </div>
              <h3 className="font-black text-base text-slate-950">Improve Clinical Outcomes</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Our high-touch approach ensures employees receive personalized, preventative, and continuous care that makes a measurable difference.
              </p>
              <div className="pt-1 text-3xs font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg">
                Preventative &amp; Continuous
              </div>
            </div>

            {/* Outcome 2 */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold">
                💰
              </div>
              <h3 className="font-black text-base text-slate-950">Reduce Healthcare Costs</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Through proactive, evidence-based care, we help members avoid complications and costly interventions.
              </p>
              <div className="pt-1 text-3xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg space-y-0.5">
                <div>₹80,000 Saved / High-Risk Birth</div>
                <div className="text-emerald-900 font-black">2:1 Clinical ROI</div>
              </div>
            </div>

            {/* Outcome 3 */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                🤝
              </div>
              <h3 className="font-black text-base text-slate-950">Achieve Benefits Parity</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                In 175+ cities across India, members have access to providers who speak their language and understand cultural nuances.
              </p>
              <div className="pt-1 text-3xs font-bold text-blue-800 bg-blue-50 px-2.5 py-1 rounded-lg">
                2 in 3 Members Save Out-of-Pocket
              </div>
            </div>

            {/* Outcome 4 */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-800 flex items-center justify-center font-bold">
                🚀
              </div>
              <h3 className="font-black text-base text-slate-950">Attract &amp; Retain Talent</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                We help you attract top talent while boosting productivity and retention with seamless maternity transition.
              </p>
              <div className="pt-1 text-3xs font-bold text-purple-800 bg-purple-50 px-2.5 py-1 rounded-lg space-y-0.5">
                <div>94% Planned Return to Work</div>
                <div className="text-purple-900 font-black">4:1 Business ROI</div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════════
          SECTION 6: INTERACTIVE ROI CALCULATOR & HR LEAD CAPTURE
          ══════════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-12" id="calculator">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Slider & Live Savings Summary */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-rose-700 uppercase tracking-wider">
                <Calculator className="w-4 h-4" />
                <span>INTERACTIVE ROI CALCULATOR</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                Calculate Your Company&apos;s Return
              </h3>
              <p className="text-xs text-slate-500 font-normal">
                Drag the slider to your approximate female employee headcount.
              </p>
            </div>

            {/* Slider Control */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">Covered Women Employees:</span>
                <span className="text-lg font-black text-rose-600 px-3 py-1 bg-white rounded-xl border border-rose-200 shadow-2xs">
                  {employeeCount} Women
                </span>
              </div>
              <input
                type="range"
                min={25}
                max={2500}
                step={25}
                value={employeeCount}
                onChange={(e) => setEmployeeCount(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
              />
              <div className="flex justify-between text-3xs text-slate-400 font-mono">
                <span>25 Women</span>
                <span>500</span>
                <span>1,000</span>
                <span>2,500+</span>
              </div>
            </div>

            {/* Real-time Calculated ROI Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 rounded-2xl bg-rose-50/80 border border-rose-200 space-y-1">
                <span className="text-3xs font-semibold text-rose-900 block">Mid-Career Dropouts Prevented</span>
                <span className="text-2xl font-black text-rose-600">~{dropoutsPrevented} Women</span>
                <span className="text-3xs text-slate-500 block">4% maternity &amp; burnout retention</span>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-1">
                <span className="text-3xs font-semibold text-emerald-900 block">Hiring &amp; Replacement Saved</span>
                <span className="text-2xl font-black text-emerald-600">₹{(replacementCostSaved / 100000).toFixed(1)} Lakhs</span>
                <span className="text-3xs text-slate-500 block">at ₹6.5L avg replacement cost</span>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200 space-y-1">
                <span className="text-3xs font-semibold text-purple-900 block">Absenteeism Days Saved</span>
                <span className="text-2xl font-black text-purple-600">{daysAbsenteeismSaved} Days</span>
                <span className="text-3xs text-slate-500 block">Recovered productivity</span>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/80 border border-teal-200 space-y-1">
                <span className="text-3xs font-semibold text-teal-900 block">Estimated Enterprise ROI</span>
                <span className="text-2xl font-black text-teal-700">{estimatedRoiRatio}x ROI</span>
                <span className="text-3xs text-slate-500 block">Annual program @ ₹500/emp</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900 text-white text-xs space-y-1">
              <div className="flex items-center justify-between font-bold">
                <span>Annual Investment:</span>
                <span className="text-teal-300">₹{programCost.toLocaleString('en-IN')} / year</span>
              </div>
              <p className="text-3xs text-slate-400">
                ₹500/year/employee covers 24/7 AI Triage, Gynecologist Network, and Health Wallet.
              </p>
            </div>

          </div>

          {/* Right Column: HR Demo Booking Form */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6" id="demo-form">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 uppercase tracking-wider">
                <Mail className="w-4 h-4" />
                <span>BOOK A DEMO FOR HR</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                Get a Custom Pilot Plan
              </h3>
              <p className="text-xs text-slate-500 font-normal">
                14-day zero-risk corporate rollout for your women workforce.
              </p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="font-black text-lg text-emerald-950">Demo Request Received!</h4>
                <p className="text-xs text-slate-600 leading-relaxed max-w-md mx-auto">
                  Our Corporate Benefits Advisor will connect with you at <strong>{workEmail}</strong> within 4 business hours with your custom pilot proposal.
                </p>
                <div className="pt-2">
                  <a
                    href="https://wa.me/917028025717?text=Hi%20Meditrust%20Team,%20I%20just%20submitted%20a%20Corporate%20Benefits%20Demo%20Request."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#008069] text-white font-bold text-xs"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp Connect</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmitLead} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Company Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Infosys, TCS, Tech Mahindra"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-rose-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Your Name &amp; Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma, VP HR"
                      value={contactName}
                      onChange={(e) => setContactName(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-rose-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Official Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-rose-500"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Mobile / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-slate-200 focus:outline-rose-500"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Primary Office Location *</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-slate-200 bg-white focus:outline-rose-500"
                  >
                    <option>Hyderabad / Cyberabad</option>
                    <option>Bengaluru (Whitefield / Electronic City / ORR)</option>
                    <option>Pune / PCMC (Hinjewadi / Magarpatta / Kharadi)</option>
                    <option>Mumbai / Navi Mumbai / Thane</option>
                    <option>Delhi NCR (Gurugram / Noida)</option>
                    <option>Chennai / OMR</option>
                    <option>Tier 2 / Pan-India Distributed</option>
                  </select>
                </div>

                <div className="space-y-2 pt-1">
                  <label className="font-bold text-slate-700 block">Select Key Focus Areas:</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      '24/7 AI Doctor Triage (Dr. Arya)',
                      "Women's Health & PCOS Program",
                      'Maternity & Return-to-Work Care',
                      '80% Jan Aushadhi Generic Savings',
                      'Menopause & Midlife Health',
                      'Corporate Health Wallet & Billing'
                    ].map((need) => (
                      <button
                        key={need}
                        type="button"
                        onClick={() => handleToggleNeed(need)}
                        className={`p-2 rounded-xl text-left text-3xs font-semibold border transition-all flex items-center gap-1.5 ${
                          selectedNeeds.includes(need)
                            ? 'bg-rose-50 border-rose-300 text-rose-950 font-bold'
                            : 'bg-slate-50 border-slate-200 text-slate-600'
                        }`}
                      >
                        <Check className={`w-3 h-3 ${selectedNeeds.includes(need) ? 'text-rose-600' : 'text-slate-300'}`} />
                        <span>{need}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-md transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {submitting ? 'Preparing Pilot Proposal...' : 'Request Custom Corporate Demo & Pilot'}
                </button>

                <p className="text-3xs text-center text-slate-400">
                  🔒 100% Confidential. No spam. Direct consultation with Meditrust Enterprise Health Directors.
                </p>

              </form>
            )}

          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════════
          SECTION 7: HOW IT WORKS
          ══════════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-10 border border-slate-800 space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider">
              <span>SECTION 07 · OPERATIONAL BLUEPRINT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
              How It Works
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 font-normal">
              Seamless onboarding for HR leadership and a deeply supportive, private clinical journey for your employees.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Track 1: For CHRO / HR */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 border border-slate-800 space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold text-lg">
                  🏢
                </div>
                <div>
                  <span className="text-3xs font-mono uppercase text-teal-400 font-bold block">Enterprise Flow</span>
                  <h3 className="text-lg font-black text-white">For CHRO / HR Leadership</h3>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-500 text-slate-950 font-black text-3xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-sm">Discovery Call</h4>
                    <p className="text-slate-400 leading-relaxed font-normal">
                      We assess your female workforce demographics, city hubs (Hyderabad, Pune, Bengaluru), and current insurance gaps.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-500 text-slate-950 font-black text-3xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-sm">Custom Plan for Your Workforce</h4>
                    <p className="text-slate-400 leading-relaxed font-normal">
                      Tailored packages covering PCOS, Maternity return-to-work, and Menopause wellness @ ₹500/employee/year.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-500 text-slate-950 font-black text-3xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-sm">Launch in 14 Days</h4>
                    <p className="text-slate-400 leading-relaxed font-normal">
                      Turnkey employee communication kit, internal townhall launch with Dr. Arya, and instant WhatsApp onboarding.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-teal-500 text-slate-950 font-black text-3xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <h4 className="font-bold text-white text-sm">Dashboard with Anonymized Insights</h4>
                    <p className="text-slate-400 leading-relaxed font-normal">
                      Quarterly aggregated utilization reports (e.g. 34% engaged in preventative health) with <strong>zero individual employee health data revealed to HR</strong>.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Track 2: For Employee Anjali */}
            <div className="p-6 sm:p-7 rounded-3xl bg-slate-900 border border-slate-800 space-y-5">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold text-lg">
                  👩‍💼
                </div>
                <div>
                  <span className="text-3xs font-mono uppercase text-rose-400 font-bold block">User Experience</span>
                  <h3 className="text-lg font-black text-white">For Employee Anjali (Care Journey)</h3>
                </div>
              </div>

              <div className="space-y-3.5 text-xs">
                
                <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between text-3xs font-bold text-rose-300">
                    <span>Month 1–3 · Menstrual Health</span>
                    <span>AI Triage</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Experiencing severe period pain $\rightarrow$ Dr. Arya tracks 3 months $\rightarrow$ Flags potential PCOS risk.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between text-3xs font-bold text-blue-300">
                    <span>Care Navigation &amp; Wallet</span>
                    <span>Provider Booking</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Books verified gynecologist in Ameerpet same day via corporate health wallet $\rightarrow$ Ultrasound scans explained in plain language by AI.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between text-3xs font-bold text-purple-300">
                    <span>Holistic Support</span>
                    <span>Diet &amp; Mental Health</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Accesses low-GI Indian nutrition guide and confidential mental health counseling without stigma.
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-1">
                  <div className="flex items-center justify-between text-3xs font-bold text-emerald-300">
                    <span>Year 2 · Maternity &amp; Return-to-Work</span>
                    <span>Continuity of Care</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Next year pregnancy high-risk flagged early (averting pre-eclampsia) $\rightarrow$ Postpartum lactation support and 1-on-1 return-to-work coaching.
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ══════════════════════════════════════════════════════════════════════════
          SECTION 8: FINAL CTA & COMPLIANCE FOOTER
          ══════════════════════════════════════════════════════════════════════════ */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-rose-950 text-white p-8 sm:p-14 border border-rose-900/40 shadow-2xl text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-black uppercase tracking-wider">
            <span>GET STARTED TODAY</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto leading-tight">
            Ready to become the best workplace for women in India?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Join leading IT, BFSI and GCCs who are choosing MEDITRUST to transform care for their workforce.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#demo-form"
              className="px-8 py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-xl transition-all hover:-translate-y-0.5"
            >
              Talk to Benefits Advisor
            </a>

            <a
              href="#calculator"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-sm backdrop-blur-md transition-all hover:-translate-y-0.5"
            >
              Get Pricing for 100, 500, 1000+ Women Team
            </a>
          </div>

          {/* Compliance & Privacy Footer Note */}
          <div className="pt-8 border-t border-white/10 max-w-2xl mx-auto text-3xs text-slate-400 leading-relaxed">
            <p>
              <strong>Footer Note:</strong> MEDITRUST AI is an AI-powered understanding and care navigation platform. It does not replace a doctor&apos;s judgment. All care is delivered by qualified healthcare providers. <em>Your Health. Your Data. Your Choice.</em>
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}
