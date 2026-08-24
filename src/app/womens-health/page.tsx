'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Stethoscope, ShieldCheck, Sparkles, Heart, Activity, CheckCircle2,
  ArrowRight, MessageCircle, ChevronRight, Lock, BookOpen, AlertCircle,
  Clock, MapPin, Award, Calendar, FileText, UserCheck, HelpCircle, Layers,
  Calculator, Baby, HeartPulse, Search, Info, Check, RefreshCw
} from 'lucide-react'
import { WOMENS_HEALTH_ARTICLES } from '@/data/womensHealthArticles'
import WomensHealthPictorialInfographics from '@/components/womens-health/WomensHealthPictorialInfographics'
import GenZWomenVibeCard from '@/components/common/GenZWomenVibeCard'

export default function WomensHealthPage() {
  const [activeToolTab, setActiveToolTab] = useState<'ovulation' | 'pregnancy' | 'pcos'>('ovulation')
  
  // 1. Ovulation Calculator State
  const [lmpDate, setLmpDate] = useState('')
  const [cycleLength, setCycleLength] = useState(28)
  const [ovulationResult, setOvulationResult] = useState<{
    ovulationDate: string
    fertileStart: string
    fertileEnd: string
    nextPeriod: string
  } | null>(null)

  // 2. Pregnancy Due Date Calculator State
  const [pregLmp, setPregLmp] = useState('')
  const [pregnancyResult, setPregnancyResult] = useState<{
    edd: string
    gestationalWeeks: number
    trimester: string
    nextMilestone: string
  } | null>(null)

  // 3. PCOS Screener State
  const [pcosAnswers, setPcosAnswers] = useState<{
    cycle: string
    hairAcne: string
    weight: string
    cysts: string
    family: string
  }>({
    cycle: '',
    hairAcne: '',
    weight: '',
    cysts: '',
    family: '',
  })
  const [pcosScoreResult, setPcosScoreResult] = useState<string | null>(null)

  // Ovulation Calculation Handler
  const handleCalculateOvulation = (e: React.FormEvent) => {
    e.preventDefault()
    if (!lmpDate) return

    const lmp = new Date(lmpDate)
    const cycle = Number(cycleLength) || 28
    
    // Ovulation occurs approximately 14 days before the next period
    const ovulationDayOffset = cycle - 14
    const ovulationDate = new Date(lmp)
    ovulationDate.setDate(lmp.getDate() + ovulationDayOffset)

    // Fertile window: 5 days before ovulation to 1 day after
    const fertileStart = new Date(ovulationDate)
    fertileStart.setDate(ovulationDate.getDate() - 5)

    const fertileEnd = new Date(ovulationDate)
    fertileEnd.setDate(ovulationDate.getDate() + 1)

    const nextPeriod = new Date(lmp)
    nextPeriod.setDate(lmp.getDate() + cycle)

    const formatDate = (d: Date) =>
      d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

    setOvulationResult({
      ovulationDate: formatDate(ovulationDate),
      fertileStart: formatDate(fertileStart),
      fertileEnd: formatDate(fertileEnd),
      nextPeriod: formatDate(nextPeriod),
    })
  }

  // Pregnancy Due Date Calculation Handler (Naegele's Rule)
  const handleCalculatePregnancy = (e: React.FormEvent) => {
    e.preventDefault()
    if (!pregLmp) return

    const lmp = new Date(pregLmp)
    // EDD = LMP + 280 days (40 weeks)
    const edd = new Date(lmp)
    edd.setDate(lmp.getDate() + 280)

    // Current Gestational Age
    const today = new Date()
    const diffTime = Math.max(0, today.getTime() - lmp.getTime())
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    const weeks = Math.floor(diffDays / 7)

    let trimester = 'First Trimester (Weeks 1–12)'
    let nextMilestone = 'Dating Scan (Wk 6-8) & NT Scan (Wk 11-13)'
    if (weeks > 12 && weeks <= 27) {
      trimester = 'Second Trimester (Weeks 13–27)'
      nextMilestone = 'TIFFA Anomaly Scan (Wk 18-20) & OGTT Glucose Screen (Wk 24-28)'
    } else if (weeks > 27) {
      trimester = 'Third Trimester (Weeks 28–40)'
      nextMilestone = 'Growth Doppler Ultrasound & Hospital Birth Plan (Wk 32-36)'
    }

    const formatDate = (d: Date) =>
      d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

    setPregnancyResult({
      edd: formatDate(edd),
      gestationalWeeks: weeks,
      trimester,
      nextMilestone,
    })
  }

  // PCOS Screener Evaluation Handler
  const handleEvaluatePcos = (e: React.FormEvent) => {
    e.preventDefault()
    let score = 0
    if (pcosAnswers.cycle === 'irregular' || pcosAnswers.cycle === 'absent') score += 2
    if (pcosAnswers.hairAcne === 'yes') score += 2
    if (pcosAnswers.weight === 'yes') score += 1
    if (pcosAnswers.cysts === 'yes') score += 2
    if (pcosAnswers.family === 'yes') score += 1

    if (score >= 4) {
      setPcosScoreResult('High likelihood of PCOS/PCOD clinical presentation. A comprehensive pelvic ultrasound and hormonal blood panel (LH/FSH, Total Testosterone, Fasting Insulin, AMH) with a qualified gynecologist is strongly recommended.')
    } else if (score >= 2) {
      setPcosScoreResult('Moderate presentation of hormonal imbalance. Monitoring cycle regularity and discussing symptoms with a gynecologist or Dr. Arya will provide clarity.')
    } else {
      setPcosScoreResult('Low presentation of PCOS indicators. Maintain balanced nutrition, regular sleep, and annual preventive gynecological checkups.')
    }
  }

  const featuredArticles = WOMENS_HEALTH_ARTICLES.slice(0, 6)

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden pt-20 sm:pt-24 pb-20">
      
      {/* ── 1. HERO SECTION ── */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-rose-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-900 text-xs font-black shadow-2xs">
              <span className="text-sm">🌸</span>
              <span className="uppercase tracking-wider">MEDITRUST AI · EXCLUSIVE WOMEN&apos;S HEALTH ECOSYSTEM</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
              All About <span className="text-rose-600">Women&apos;s Health</span> Across Every Stage of Life
            </h1>

            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              <strong>Primary Mission:</strong> Using responsible artificial intelligence to make women&apos;s healthcare more <strong>accessible</strong>, <strong>understandable</strong>, and <strong>affordable</strong>.
            </p>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              From adolescence to reproductive health, PCOS, fertility, pregnancy, motherhood, and menopause, <strong>Dr. Arya Women&apos;s Health</strong> helps women understand their health needs, navigate the appropriate care pathway, and connect with qualified healthcare professionals.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href="/symptom-checker?specialty=gynaecology"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm sm:text-base shadow-md transition-all hover:-translate-y-0.5"
              >
                <Stethoscope className="w-5 h-5" />
                <span>Talk to Dr. Arya</span>
              </Link>

              <a
                href="#interactive-tools"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-rose-50 hover:bg-rose-100/80 text-rose-900 font-bold text-sm sm:text-base border border-rose-200 shadow-2xs transition-all hover:-translate-y-0.5"
              >
                <Calculator className="w-4 h-4 text-rose-600" />
                <span>Ovulation &amp; Pregnancy Tools</span>
              </a>

              <Link
                href="/womens-health/health-library"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
              >
                <BookOpen className="w-4 h-4 text-slate-600" />
                <span>Knowledge Centre (20 Guides)</span>
              </Link>
            </div>

            {/* Trust Pill Attributes */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Clinician-Reviewed Protocols</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                <Lock className="w-4 h-4 text-blue-600" />
                <span>256-Bit Encrypted &amp; ABDM Private</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-rose-600" />
                <span>Zero Diagnostic Claims Without Doctor</span>
              </div>
            </div>

          </div>

          {/* Right Column: 7 Life Stages Connected Box */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-3xl border border-rose-200/90 shadow-xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-xl">
                    🌸
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">Dr. Arya Women&apos;s Health</h3>
                    <p className="text-3xs text-slate-500">Connected Care Ecosystem</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-3xs font-bold border border-emerald-200">
                  ● 24/7 Live Triage
                </span>
              </div>

              {/* 7 Interactive Stage Chips */}
              <div className="space-y-2.5">
                {[
                  { stage: 'Stage 1', name: 'Teen Health', desc: 'Puberty, cycle awareness & nutrition', icon: '🌱' },
                  { stage: 'Stage 2', name: 'Menstrual Health', desc: 'Irregular cycles, period pain & PMS', icon: '🩸' },
                  { stage: 'Stage 3', name: 'PCOS & Hormonal', desc: 'Screening, insulin resistance & skin', icon: '🩺' },
                  { stage: 'Stage 4', name: 'Fertility & Pre-Conception', desc: 'Ovulation window & AMH assessments', icon: '🥚' },
                  { stage: 'Stage 5', name: 'Pregnancy Care', desc: 'Trimesters, scans & OB-GYN checkups', icon: '🤰' },
                  { stage: 'Stage 6', name: 'Postnatal & Motherhood', desc: 'Maternal healing & pediatric transition', icon: '🤱' },
                  { stage: 'Stage 7', name: 'Mid-Life & Menopause', desc: 'Bone density, heart & perimenopause', icon: '🌸' },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={`#stage-${idx + 1}`}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-rose-50/70 border border-slate-200/70 hover:border-rose-300 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-3xs text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                    <span className="text-3xs font-bold text-rose-600 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                      {item.stage}
                    </span>
                  </a>
                ))}
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-50/80 border border-rose-200 text-center">
                <p className="text-2xs text-rose-900 font-semibold">
                  &ldquo;One Woman. Many Life Stages. One Connected Healthcare Journey.&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 1.2 WIDESCREEN FLAGSHIP BANNER SHOWCASE ── */}
      <section className="py-4 bg-slate-50">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-xl border border-rose-200 bg-white">
            <img
              src="/meditrust_womens_healthcare_pan_india_banner.webp"
              alt="India's First AI-Backed Women's Healthcare with Pan-India Highest Gynaecology Network"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── 1.5 CHIC WOMEN & GEN-Z CARE VIBE HUB (1-TAP SHARE & SYMPTOM CHECKS) ── */}
      <section className="py-6 bg-slate-50">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
          <GenZWomenVibeCard />
        </div>
      </section>

      {/* ── 2. PICTORIAL CLINICAL INFOGRAPHICS & DIAGNOSTIC MODELS ── */}
      <section className="py-10 bg-slate-50">
        <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
          <WomensHealthPictorialInfographics />
        </div>
      </section>

      {/* ── 3. INTERACTIVE SCREENING & CLINICAL CALCULATORS TOOLKIT ── */}
      <section id="interactive-tools" className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 to-white border-y border-slate-200/80">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100/80 px-3.5 py-1 rounded-full border border-rose-200">
              Interactive Clinical Toolkit
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Women&apos;s Health Screening &amp; Calculators
            </h2>
            <p className="text-sm text-slate-600">
              Private, instant clinical tools designed to help you track your cycle, estimate pregnancy milestones, or evaluate PCOS indicators.
            </p>
          </div>

          {/* Tool Navigation Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 border-b border-slate-200 pb-4">
            <button
              onClick={() => setActiveToolTab('ovulation')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeToolTab === 'ovulation'
                  ? 'bg-rose-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-rose-50 hover:text-rose-700 border border-slate-200'
              }`}
            >
              <Calendar className="w-4 h-4" />
              <span>Ovulation &amp; Fertile Window</span>
            </button>

            <button
              onClick={() => setActiveToolTab('pregnancy')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeToolTab === 'pregnancy'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-purple-50 hover:text-purple-700 border border-slate-200'
              }`}
            >
              <Baby className="w-4 h-4" />
              <span>Due Date &amp; Trimester Tracker</span>
            </button>

            <button
              onClick={() => setActiveToolTab('pcos')}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                activeToolTab === 'pcos'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-blue-50 hover:text-blue-700 border border-slate-200'
              }`}
            >
              <HeartPulse className="w-4 h-4" />
              <span>PCOS / PCOD Risk Screener</span>
            </button>
          </div>

          {/* Tab 1: Ovulation Calculator */}
          {activeToolTab === 'ovulation' && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-rose-200 shadow-md max-w-2xl mx-auto space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                  <span>📅 Ovulation &amp; Fertile Window Calculator</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Calculates your 6-day fertile window and peak ovulation timing based on standard clinical luteal phase modeling.
                </p>
              </div>

              <form onSubmit={handleCalculateOvulation} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    First Day of Your Last Menstrual Period (LMP):
                  </label>
                  <input
                    type="date"
                    required
                    value={lmpDate}
                    onChange={(e) => setLmpDate(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-rose-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Average Cycle Length (Days): <span className="text-rose-600 font-bold">{cycleLength} days</span>
                  </label>
                  <input
                    type="range"
                    min="21"
                    max="45"
                    value={cycleLength}
                    onChange={(e) => setCycleLength(Number(e.target.value))}
                    className="w-full accent-rose-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-3xs text-slate-400 mt-1">
                    <span>21 Days (Short)</span>
                    <span>28 Days (Average)</span>
                    <span>45 Days (Long)</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Calculate Fertile Window</span>
                </button>
              </form>

              {ovulationResult && (
                <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-3 animate-fadeIn">
                  <h4 className="font-bold text-xs text-rose-950 uppercase tracking-wider">
                    ✨ Your Fertile Window &amp; Ovulation Forecast:
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-rose-200">
                      <span className="text-3xs text-slate-500 block">Peak Ovulation Date</span>
                      <strong className="text-rose-700 text-sm font-black">{ovulationResult.ovulationDate}</strong>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-rose-200">
                      <span className="text-3xs text-slate-500 block">6-Day Fertile Window</span>
                      <strong className="text-slate-900 text-xs font-bold">{ovulationResult.fertileStart} – {ovulationResult.fertileEnd}</strong>
                    </div>
                    <div className="col-span-2 p-3 bg-white rounded-xl border border-rose-200">
                      <span className="text-3xs text-slate-500 block">Next Expected Period</span>
                      <strong className="text-slate-800 text-xs">{ovulationResult.nextPeriod}</strong>
                    </div>
                  </div>
                  <p className="text-3xs text-slate-500 italic">
                    Note: Cycle variations can occur with stress or travel. For confirmed ovulation tracking, speak with Dr. Arya or your gynecologist.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tab 2: Pregnancy Due Date Tracker */}
          {activeToolTab === 'pregnancy' && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-purple-200 shadow-md max-w-2xl mx-auto space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                  <span>🤰 Pregnancy Due Date &amp; Trimester Tracker</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Estimates your Expected Date of Delivery (EDD) and current gestational milestones according to Naegele&apos;s clinical standard.
                </p>
              </div>

              <form onSubmit={handleCalculatePregnancy} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    First Day of Your Last Menstrual Period (LMP):
                  </label>
                  <input
                    type="date"
                    required
                    value={pregLmp}
                    onChange={(e) => setPregLmp(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-purple-500 font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Baby className="w-4 h-4" />
                  <span>Estimate Due Date &amp; Milestones</span>
                </button>
              </form>

              {pregnancyResult && (
                <div className="p-5 rounded-2xl bg-purple-50/70 border border-purple-200 space-y-3 animate-fadeIn">
                  <h4 className="font-bold text-xs text-purple-950 uppercase tracking-wider">
                    ✨ Your Pregnancy Milestones:
                  </h4>
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 bg-white rounded-xl border border-purple-200">
                      <span className="text-3xs text-slate-500 block">Estimated Due Date (EDD)</span>
                      <strong className="text-purple-700 text-sm font-black">{pregnancyResult.edd}</strong>
                    </div>
                    <div className="p-3 bg-white rounded-xl border border-purple-200">
                      <span className="text-3xs text-slate-500 block">Current Gestation</span>
                      <strong className="text-slate-900 text-sm font-black">~{pregnancyResult.gestationalWeeks} Weeks</strong>
                    </div>
                    <div className="col-span-2 p-3 bg-white rounded-xl border border-purple-200">
                      <span className="text-3xs text-slate-500 block">Current Trimester</span>
                      <strong className="text-slate-800 text-xs">{pregnancyResult.trimester}</strong>
                    </div>
                    <div className="col-span-2 p-3 bg-purple-100/60 rounded-xl border border-purple-300 text-3xs text-purple-900">
                      <strong>Recommended Next Clinical Scan:</strong> {pregnancyResult.nextMilestone}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Tab 3: PCOS Risk Screener */}
          {activeToolTab === 'pcos' && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-blue-200 shadow-md max-w-2xl mx-auto space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-950 flex items-center gap-2">
                  <span>🩺 PCOS / PCOD Clinical Risk Screener</span>
                </h3>
                <p className="text-xs text-slate-500">
                  Evaluates the presence of common ovulatory, androgenic, and metabolic indicators (Rotterdam criteria guidance).
                </p>
              </div>

              <form onSubmit={handleEvaluatePcos} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    1. How regular are your menstrual cycles?
                  </label>
                  <select
                    value={pcosAnswers.cycle}
                    onChange={(e) => setPcosAnswers({ ...pcosAnswers, cycle: e.target.value })}
                    required
                    className="w-full p-2.5 rounded-xl border border-slate-200 font-medium"
                  >
                    <option value="">Select cycle regularity</option>
                    <option value="regular">Regular (24–35 days every month)</option>
                    <option value="irregular">Irregular (Delayed &gt;35 days or highly variable)</option>
                    <option value="absent">Absent (Skipped 3+ months)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    2. Do you experience persistent cystic acne or excess facial/body hair (hirsutism)?
                  </label>
                  <select
                    value={pcosAnswers.hairAcne}
                    onChange={(e) => setPcosAnswers({ ...pcosAnswers, hairAcne: e.target.value })}
                    required
                    className="w-full p-2.5 rounded-xl border border-slate-200 font-medium"
                  >
                    <option value="">Select option</option>
                    <option value="yes">Yes, noticeable hair growth or stubborn acne</option>
                    <option value="no">No, minimal or normal</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    3. Do you find weight management difficult despite dietary discipline?
                  </label>
                  <select
                    value={pcosAnswers.weight}
                    onChange={(e) => setPcosAnswers({ ...pcosAnswers, weight: e.target.value })}
                    required
                    className="w-full p-2.5 rounded-xl border border-slate-200 font-medium"
                  >
                    <option value="">Select option</option>
                    <option value="yes">Yes, especially central abdominal weight</option>
                    <option value="no">No, weight is stable / lean BMI</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    4. Have you ever been told you have polycystic ovaries on ultrasound?
                  </label>
                  <select
                    value={pcosAnswers.cysts}
                    onChange={(e) => setPcosAnswers({ ...pcosAnswers, cysts: e.target.value })}
                    required
                    className="w-full p-2.5 rounded-xl border border-slate-200 font-medium"
                  >
                    <option value="">Select option</option>
                    <option value="yes">Yes, polycystic appearance noted</option>
                    <option value="no">No, normal ultrasound</option>
                    <option value="never">Never had a pelvic ultrasound</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-sm transition-colors flex items-center justify-center gap-2"
                >
                  <HeartPulse className="w-4 h-4" />
                  <span>Evaluate PCOS Indicators</span>
                </button>
              </form>

              {pcosScoreResult && (
                <div className="p-5 rounded-2xl bg-blue-50/80 border border-blue-200 space-y-3 animate-fadeIn">
                  <h4 className="font-bold text-xs text-blue-950 uppercase tracking-wider">
                    ✨ Assessment Summary:
                  </h4>
                  <p className="text-xs text-slate-700 leading-relaxed font-medium">
                    {pcosScoreResult}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-2">
                    <Link
                      href="/womens-health/pcos/pcos-symptoms"
                      className="px-4 py-2 rounded-full bg-blue-600 text-white text-3xs font-bold"
                    >
                      Read Complete PCOS Clinical Guide →
                    </Link>
                    <Link
                      href="/symptom-checker?specialty=gynaecology"
                      className="px-4 py-2 rounded-full bg-white border border-blue-300 text-blue-800 text-3xs font-bold"
                    >
                      Consult Dr. Arya for Triage
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}

        </div>
      </section>

      {/* ── 3. ALL ABOUT WOMEN'S HEALTH: 10 CORE CLINICAL DIMENSIONS ── */}
      <section className="py-16 sm:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="max-w-3xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
            Comprehensive Clinical Encyclopaedia
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            All About Women&apos;s Health: 10 Core Care Dimensions
          </h2>
          <p className="text-base text-slate-600 font-normal leading-relaxed">
            Everything you need to understand your body, recognize warning signs, and make informed choices across every chapter of life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Dim 1: Menstrual Health */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-2xl">🩸</span>
              <h3 className="font-bold text-base text-slate-900">1. Menstrual &amp; Hormonal Balance</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Healthy cycles span 24–38 days with 3–8 days of flow. We guide you through oligomenorrhea, PMS mood regulation, heavy bleeding (menorrhagia), and non-pregnancy missed period causes.
              </p>
            </div>
            <Link href="/womens-health/periods/irregular-periods" className="text-xs font-bold text-rose-700 flex items-center gap-1 pt-2 border-t border-slate-100">
              <span>Read Menstrual Guide</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Dim 2: PCOS / PCOD */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-2xl">🩺</span>
              <h3 className="font-bold text-base text-slate-900">2. PCOS / PCOD &amp; Metabolism</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Understand insulin resistance, androgen excess, hirsutism, cystic acne, and Rotterdam diagnostic criteria. Discover low-GI nutrition, inositol therapy, and ovulation restoration.
              </p>
            </div>
            <Link href="/womens-health/pcos/pcos-symptoms" className="text-xs font-bold text-rose-700 flex items-center gap-1 pt-2 border-t border-slate-100">
              <span>Read PCOS Guide</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Dim 3: Endometriosis & Pelvic Pain */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-2xl">🎗️</span>
              <h3 className="font-bold text-base text-slate-900">3. Endometriosis, Cysts &amp; Fibroids</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Debilitating period pain is not normal. Learn the &ldquo;4 Ds&rdquo; of endometriosis, functional vs chocolate ovarian cysts, uterine fibroids, and surgical laparoscopy pathways.
              </p>
            </div>
            <Link href="/womens-health/conditions/endometriosis-symptoms" className="text-xs font-bold text-rose-700 flex items-center gap-1 pt-2 border-t border-slate-100">
              <span>Read Pelvic Pain Guide</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Dim 4: Fertility & Conception */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-2xl">🥚</span>
              <h3 className="font-bold text-base text-slate-900">4. Pre-Conception &amp; Fertility</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Ovulation window tracking, Anti-Müllerian Hormone (AMH) egg reserve tests, semen analysis basics, tubal patency (HSG), and when to transition to a fertility specialist.
              </p>
            </div>
            <Link href="/womens-health/fertility/ovulation-guide" className="text-xs font-bold text-rose-700 flex items-center gap-1 pt-2 border-t border-slate-100">
              <span>Read Fertility Guide</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Dim 5: Pregnancy & Antenatal */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-2xl">🤰</span>
              <h3 className="font-bold text-base text-slate-900">5. Complete Pregnancy Hub</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Trimester 1, 2, and 3 fetal growth milestones, dating scans, NT screen, Level-2 TIFFA anomaly scans, gestational diabetes OGTT testing, and delivery planning.
              </p>
            </div>
            <Link href="/womens-health/pregnancy/early-pregnancy-symptoms" className="text-xs font-bold text-rose-700 flex items-center gap-1 pt-2 border-t border-slate-100">
              <span>Read Pregnancy Guide</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Dim 6: Postnatal Fourth Trimester */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-2xl">🤱</span>
              <h3 className="font-bold text-base text-slate-900">6. Postnatal &amp; Motherhood Care</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Physical recovery following vaginal or C-section delivery, lochia bleeding progression, lactation support, postpartum depression (PPD) screening, and pediatric vaccines.
              </p>
            </div>
            <Link href="/womens-health/postnatal/postnatal-recovery" className="text-xs font-bold text-rose-700 flex items-center gap-1 pt-2 border-t border-slate-100">
              <span>Read Postnatal Guide</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Dim 7: Menopause & Bone Health */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-2xl">🌸</span>
              <h3 className="font-bold text-base text-slate-900">7. Perimenopause &amp; Menopause</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Navigating vasomotor hot flashes, sleep disruption, mood changes, and bone mineral density preservation (DEXA scans) with qualified gynecologists.
              </p>
            </div>
            <Link href="/womens-health/menopause/perimenopause-vs-menopause" className="text-xs font-bold text-rose-700 flex items-center gap-1 pt-2 border-t border-slate-100">
              <span>Read Menopause Guide</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Dim 8: Health After 40 */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-2xl">❤️</span>
              <h3 className="font-bold text-base text-slate-900">8. Cardiometabolic Vitality</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Estrogen depletion post-40 increases arterial stiffness and alters lipid profiles. Discover heart-healthy lifestyle strategies, calcium &amp; D3 balance, and preventive lipid screening.
              </p>
            </div>
            <Link href="/womens-health/menopause/health-after-40" className="text-xs font-bold text-rose-700 flex items-center gap-1 pt-2 border-t border-slate-100">
              <span>Read After-40 Guide</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Dim 9: Preventive Screening */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between">
            <div className="space-y-2.5">
              <span className="text-2xl">🛡️</span>
              <h3 className="font-bold text-base text-slate-900">9. Cancer &amp; Preventive Screening</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Essential timelines for Cervical Pap Smears + HPV DNA (every 3–5 yrs), clinical breast examinations, screening mammograms (age 40+), and thyroid TSH checks.
              </p>
            </div>
            <Link href="/womens-health/health-library" className="text-xs font-bold text-rose-700 flex items-center gap-1 pt-2 border-t border-slate-100">
              <span>View Screening Schedule</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

        </div>

      </section>

      {/* ── 4. MEET DR. ARYA WOMEN'S HEALTH PRODUCT SECTION ── */}
      <section className="py-16 sm:py-24 bg-slate-50/80 border-y border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              <span>Specialized AI Health Companion</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Meet Dr. Arya Women&apos;s Health
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              A dedicated AI health companion built around women&apos;s changing physiological needs. Dr. Arya progressively organizes relevant health context with your explicit consent—eliminating the frustration of repeating your history at every appointment.
            </p>
            <p className="text-sm font-bold text-slate-900 pt-1">
              ✨ Less repetition. More context. More personalized healthcare navigation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Age & Life Stage', status: 'Available', statusClass: 'bg-emerald-100 text-emerald-800', desc: 'Calibrates clinical risk profiles for adolescence, reproductive years, or perimenopause.' },
              { title: 'Menstrual History & Cycle', status: 'Available', statusClass: 'bg-emerald-100 text-emerald-800', desc: 'Tracks cycle regularity, bleeding duration, flow heaviness, and pain patterns.' },
              { title: 'Current Symptoms & Triage', status: 'Available', statusClass: 'bg-emerald-100 text-emerald-800', desc: 'Evaluates acute pelvic pain, vaginal discharge, breast tenderness & red flags.' },
              { title: 'Lab Reports & Scans OCR', status: 'Available', statusClass: 'bg-emerald-100 text-emerald-800', desc: 'Translates CBC, Thyroid, AMH, Pap smears & ultrasound findings into plain language.' },
              { title: 'Pregnancy Week Tracker', status: 'In Development', statusClass: 'bg-blue-100 text-blue-800', desc: 'Trimester-specific milestones, scan checklists & fetal movement logs.' },
              { title: 'Known Health Conditions', status: 'In Development', statusClass: 'bg-blue-100 text-blue-800', desc: 'PCOS, endometriosis, thyroid disorders, insulin resistance, or hypertension.' },
              { title: 'Medication & Supplement Logs', status: 'In Development', statusClass: 'bg-blue-100 text-blue-800', desc: 'Folic acid, Iron, Inositol & birth control adherence with WhatsApp nudges.' },
              { title: 'Family Medical History', status: 'Planned', statusClass: 'bg-amber-100 text-amber-800', desc: 'Hereditary screening for breast health, diabetes, and early menopause risks.' },
            ].map((ctx, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${ctx.statusClass}`}>
                      {ctx.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">{ctx.title}</h4>
                  <p className="text-3xs text-slate-500 leading-relaxed mt-1">{ctx.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-white border border-blue-200/80 flex items-start gap-3 text-xs text-slate-600">
            <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <strong className="text-slate-900 block font-bold">Strict User Privacy &amp; ABDM Safeguards:</strong>
              <p className="text-2xs text-slate-500 leading-relaxed">
                Personal health context is only utilized with your explicit informed consent. All consultations are protected by 256-bit AES encryption, strictly complying with ABDM (Ayushman Bharat Digital Mission) and HIPAA security standards.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── 5. CLINICAL GOVERNANCE & TRUST STATEMENT ── */}
      <section className="py-16 sm:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold">
            <Award className="w-3.5 h-3.5 text-slate-700" />
            <span>Clinical Oversight &amp; Reviewers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Clinical Governance for Women&apos;s Health
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Specialized women&apos;s health pathways, clinical red-flag triggers, and educational articles are developed and continuously reviewed alongside qualified healthcare professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-xl font-bold text-rose-700">
              👩‍⚕️
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Dr. Neha Patil, MS (OB-GYN)</h4>
              <p className="text-3xs text-rose-700 font-bold uppercase tracking-wider">
                Obstetrician &amp; Gynecologist
              </p>
              <p className="text-2xs text-slate-500 mt-1">
                Specialization: Reproductive Endocrinology, Adolescent Health &amp; Laparoscopy
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-3xs text-slate-400">
              Reviewed Areas: PCOS pathways, Menstrual disorders, Endometriosis protocols.
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-xl font-bold text-blue-700">
              👩‍⚕️
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Dr. Anita Rao, MD (OB-GYN)</h4>
              <p className="text-3xs text-blue-700 font-bold uppercase tracking-wider">
                Senior Consultant Obstetrician
              </p>
              <p className="text-2xs text-slate-500 mt-1">
                Specialization: High-Risk Pregnancy, Maternal Nutrition &amp; Menopause
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-3xs text-slate-400">
              Reviewed Areas: Trimester scans, Antenatal checklists, Postpartum care.
            </div>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-xl font-bold text-purple-700">
              👩‍⚕️
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Dr. Priya Shah, MD (Reproductive Med.)</h4>
              <p className="text-3xs text-purple-700 font-bold uppercase tracking-wider">
                Fertility &amp; IVF Specialist
              </p>
              <p className="text-2xs text-slate-500 mt-1">
                Specialization: Ovarian Reserve, Follicular Tracking &amp; Assisted Conception
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-3xs text-slate-400">
              Reviewed Areas: Ovulation guidance, AMH diagnostics, Fertility timelines.
            </div>
          </div>

        </div>

        {/* Responsible AI & Emergency Trust Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-md">
          <div className="flex items-center gap-2.5 text-sm font-bold text-teal-300">
            <ShieldCheck className="w-5 h-5 text-teal-400" />
            <span>Responsible AI. Clinician-Led Care.</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Dr. Arya Women&apos;s Health is designed to assist with clinical health information and personalized care navigation. It does <strong>not</strong> replace clinical consultation, physical examination, laboratory diagnosis, or treatment by qualified healthcare professionals.
          </p>
          <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-2xs text-amber-300 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Emergency Notice:</strong> If you are experiencing acute severe abdominal/pelvic pain, heavy sudden vaginal hemorrhage, fainting, or acute pregnancy-related distress, please proceed immediately to the nearest hospital emergency room (such as Ruby Hall Clinic or Sahyadri Hospital) or call <strong>108 / 112</strong>.
            </span>
          </div>
        </div>

      </section>

      {/* ── 6. KNOWLEDGE CENTRE & FEATURED PILLAR ARTICLES ── */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                Evidence-Based Health Library
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Women&apos;s Health Knowledge Centre
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Clinically reviewed, easy-to-understand guides across menstrual health, PCOS, fertility, pregnancy, and menopause.
              </p>
            </div>

            <Link
              href="/womens-health/health-library"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white hover:bg-rose-50 text-rose-700 font-bold text-xs border border-rose-300 shadow-2xs transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>View All 20+ Pillar Articles</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((art) => (
              <Link
                key={art.id}
                href={`/womens-health/${art.category}/${art.slug}`}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-rose-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                      {art.categoryName}
                    </span>
                    <span className="text-3xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {art.readingTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-rose-700 transition-colors line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-2xs">
                  <span className="text-slate-400 font-medium">
                    Reviewed: <strong className="text-slate-700">{art.medicalReviewer.split(',')[0]}</strong>
                  </span>
                  <span className="text-rose-700 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── 7. VERIFIED GYNECOLOGIST & MATERNITY HOSPITAL NETWORK (PUNE & PCMC) ── */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-rose-900 via-slate-950 to-blue-950 rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-3xs font-bold uppercase tracking-wider border border-rose-500/30">
                Verified Local Care Network
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Connect with Qualified Gynecologists &amp; Maternity Hospitals
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Consult with verified OB-GYNs and fertility specialists across Pune, Nigdi, and PCMC. Priority admission desks at Sahyadri, Ruby Hall Clinic, and Jupiter Hospital.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
              <Link
                href="/doctors/gynecologist/pune"
                className="px-6 py-3 rounded-full bg-white text-slate-950 hover:bg-rose-50 font-bold text-xs sm:text-sm shadow-sm transition-all hover:-translate-y-0.5"
              >
                <span>Gynecologists in Pune</span>
              </Link>
              <Link
                href="/doctors/gynecologist/pcmc"
                className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm shadow-sm transition-all hover:-translate-y-0.5"
              >
                <span>Gynecologists in PCMC</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
