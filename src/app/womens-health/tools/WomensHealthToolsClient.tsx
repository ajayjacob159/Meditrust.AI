'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Sparkles, Search, CheckCircle2, ArrowRight, Share2,
  Calculator, Calendar, Heart, ShieldCheck, Clock,
  ChevronRight, Copy, Check, MessageCircle, AlertCircle,
  FileText, Download, TrendingDown, RefreshCw, ShoppingBag,
  Sliders, Star
} from 'lucide-react'
import { HealthToolDef } from '@/data/womensHealthToolsData'

interface Props {
  tools: HealthToolDef[]
}

export default function WomensHealthToolsClient({ tools }: Props) {
  const [activeToolId, setActiveToolId] = useState<string>('fertility-readiness')
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string>('All')

  // ──────────────────────────────────────────────────────────
  // TOOL 1 STATE: Fertility Readiness Assessment
  // ──────────────────────────────────────────────────────────
  const [t1Age, setT1Age] = useState<number>(29)
  const [t1CycleRegular, setT1CycleRegular] = useState<'yes' | 'somewhat' | 'no'>('yes')
  const [t1MonthsTrying, setT1MonthsTrying] = useState<number>(4)
  const [t1PcosHistory, setT1PcosHistory] = useState<boolean>(false)
  const [t1PartnerTested, setT1PartnerTested] = useState<boolean>(false)

  const t1Score = useMemo(() => {
    let score = 95
    if (t1Age > 35) score -= 15
    if (t1Age > 38) score -= 20
    if (t1CycleRegular === 'somewhat') score -= 10
    if (t1CycleRegular === 'no') score -= 25
    if (t1MonthsTrying > 12) score -= 20
    else if (t1MonthsTrying > 6 && t1Age >= 35) score -= 20
    if (t1PcosHistory) score -= 10
    if (!t1PartnerTested && t1MonthsTrying >= 6) score -= 10
    return Math.max(25, Math.min(98, score))
  }, [t1Age, t1CycleRegular, t1MonthsTrying, t1PcosHistory, t1PartnerTested])

  // ──────────────────────────────────────────────────────────
  // TOOL 2 STATE: Pregnancy Planning Calculator
  // ──────────────────────────────────────────────────────────
  const [t2TargetMonth, setT2TargetMonth] = useState<string>('2026-11')
  const t2Calculations = useMemo(() => {
    const targetDate = new Date(`${t2TargetMonth}-15`)
    if (isNaN(targetDate.getTime())) return null

    const conceptionDate = new Date(targetDate)
    conceptionDate.setMonth(conceptionDate.getMonth() - 9)

    const folicAcidStartDate = new Date(conceptionDate)
    folicAcidStartDate.setMonth(folicAcidStartDate.getMonth() - 3)

    const t1ScanDate = new Date(conceptionDate)
    t1ScanDate.setMonth(t1ScanDate.getMonth() + 3)

    return {
      conceptionMonth: conceptionDate.toLocaleString('default', { month: 'long', year: 'numeric' }),
      folicAcidStart: folicAcidStartDate.toLocaleString('default', { month: 'long', year: 'numeric' }),
      t1Scan: t1ScanDate.toLocaleString('default', { month: 'long', year: 'numeric' }),
      deliveryTarget: targetDate.toLocaleString('default', { month: 'long', year: 'numeric' })
    }
  }, [t2TargetMonth])

  // ──────────────────────────────────────────────────────────
  // TOOL 3 STATE: Ovulation Calculator
  // ──────────────────────────────────────────────────────────
  const [t3LmpDate, setT3LmpDate] = useState<string>('2026-09-01')
  const [t3CycleLength, setT3CycleLength] = useState<number>(28)

  const t3Results = useMemo(() => {
    const lmp = new Date(t3LmpDate)
    if (isNaN(lmp.getTime())) return null

    // Ovulation occurs approximately (cycle length - 14) days after LMP
    const ovulationDayOffset = t3CycleLength - 14
    const ovulationDate = new Date(lmp)
    ovulationDate.setDate(ovulationDate.getDate() + ovulationDayOffset)

    const fertileStart = new Date(ovulationDate)
    fertileStart.setDate(fertileStart.getDate() - 5)

    const fertileEnd = new Date(ovulationDate)
    fertileEnd.setDate(fertileEnd.getDate() + 1)

    const nextPeriod = new Date(lmp)
    nextPeriod.setDate(nextPeriod.getDate() + t3CycleLength)

    const testDate = new Date(nextPeriod)
    testDate.setDate(testDate.getDate() + 1)

    return {
      ovulation: ovulationDate.toDateString(),
      fertileRange: `${fertileStart.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} to ${fertileEnd.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}`,
      peakDays: `${new Date(ovulationDate.getTime() - 86400000).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} & ${ovulationDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })}`,
      nextPeriod: nextPeriod.toDateString(),
      testDate: testDate.toDateString()
    }
  }, [t3LmpDate, t3CycleLength])

  // ──────────────────────────────────────────────────────────
  // TOOL 4 STATE: IVF Cost Calculator
  // ──────────────────────────────────────────────────────────
  const [t4City, setT4City] = useState<'pune' | 'mumbai' | 'delhi' | 'bangalore' | 'other'>('pune')
  const [t4Type, setT4Type] = useState<'self' | 'donor'>('self')
  const [t4IncludeIcsi, setT4IncludeIcsi] = useState<boolean>(true)
  const [t4IncludeBlastocyst, setT4IncludeBlastocyst] = useState<boolean>(true)
  const [t4IncludePgta, setT4IncludePgta] = useState<boolean>(false)
  const [t4FreezingYears, setT4FreezingYears] = useState<number>(1)

  const t4Calculations = useMemo(() => {
    let baseOp = t4City === 'mumbai' || t4City === 'delhi' ? 95000 : 85000
    if (t4Type === 'donor') baseOp += 60000

    let injections = 65000
    let icsiFee = t4IncludeIcsi ? 25000 : 0
    let blastocystFee = t4IncludeBlastocyst ? 20000 : 0
    let pgtaFee = t4IncludePgta ? 45000 : 0
    let freezingFee = 25000 + (t4FreezingYears - 1) * 15000

    let total = baseOp + injections + icsiFee + blastocystFee + pgtaFee + freezingFee
    let genericSavings = 18000
    let discountedTotal = total - genericSavings
    let monthlyEmi = Math.round(discountedTotal / 12)

    return {
      baseOp,
      injections,
      icsiFee,
      blastocystFee,
      pgtaFee,
      freezingFee,
      total,
      genericSavings,
      discountedTotal,
      monthlyEmi
    }
  }, [t4City, t4Type, t4IncludeIcsi, t4IncludeBlastocyst, t4IncludePgta, t4FreezingYears])

  // ──────────────────────────────────────────────────────────
  // TOOL 5 STATE: Fertility Test Checklist
  // ──────────────────────────────────────────────────────────
  const [t5Checked, setT5Checked] = useState<{ [key: string]: boolean }>({
    amh: true,
    semen: true,
    tsh: false,
    fsh: false,
    prolactin: false,
    hsg: false,
    ultrasound: false,
    rubella: false
  })

  const t5CompletedCount = Object.values(t5Checked).filter(Boolean).length

  // ──────────────────────────────────────────────────────────
  // TOOL 6 STATE: Egg Freezing Decision Guide
  // ──────────────────────────────────────────────────────────
  const [t6Age, setT6Age] = useState<number>(31)
  const t6Results = useMemo(() => {
    let targetEggs = 12
    let estimatedCycles = 1
    let liveBirthProb = '85–90%'

    if (t6Age <= 30) {
      targetEggs = 12
      estimatedCycles = 1
      liveBirthProb = '88–92%'
    } else if (t6Age <= 34) {
      targetEggs = 15
      estimatedCycles = 1
      liveBirthProb = '82–88%'
    } else if (t6Age <= 37) {
      targetEggs = 18
      estimatedCycles = 2
      liveBirthProb = '70–78%'
    } else if (t6Age <= 40) {
      targetEggs = 22
      estimatedCycles = 2
      liveBirthProb = '55–65%'
    } else {
      targetEggs = 25
      estimatedCycles = 3
      liveBirthProb = '35–45%'
    }

    const estCost = estimatedCycles * 140000 + 20000 // Injections & procedure + storage
    return { targetEggs, estimatedCycles, liveBirthProb, estCost }
  }, [t6Age])

  // ──────────────────────────────────────────────────────────
  // TOOL 7 STATE: Hospital Delivery Cost Calculator
  // ──────────────────────────────────────────────────────────
  const [t7DeliveryType, setT7DeliveryType] = useState<'normal' | 'csection'>('normal')
  const [t7RoomType, setT7RoomType] = useState<'twin' | 'deluxe' | 'suite'>('deluxe')
  const [t7HospitalTier, setT7HospitalTier] = useState<'metro_boutique' | 'multispecialty' | 'trusted_local'>('metro_boutique')

  const t7Results = useMemo(() => {
    let base = t7DeliveryType === 'normal' ? 55000 : 85000
    if (t7RoomType === 'twin') base *= 0.8
    else if (t7RoomType === 'suite') base *= 1.4

    if (t7HospitalTier === 'metro_boutique') base *= 1.3
    else if (t7HospitalTier === 'trusted_local') base *= 0.75

    const estimatedTotal = Math.round(base)
    const insuranceCoverage = Math.round(estimatedTotal * 0.75)
    const outOfPocket = estimatedTotal - insuranceCoverage

    return { estimatedTotal, insuranceCoverage, outOfPocket }
  }, [t7DeliveryType, t7RoomType, t7HospitalTier])

  // ──────────────────────────────────────────────────────────
  // TOOL 8 STATE: Pregnancy Week Calculator
  // ──────────────────────────────────────────────────────────
  const [t8LmpDate, setT8LmpDate] = useState<string>('2026-05-15')
  const t8Results = useMemo(() => {
    const lmp = new Date(t8LmpDate)
    const now = new Date('2026-09-05')
    if (isNaN(lmp.getTime())) return null

    const diffDays = Math.max(0, Math.floor((now.getTime() - lmp.getTime()) / (1000 * 60 * 60 * 24)))
    const weeks = Math.floor(diffDays / 7)
    const days = diffDays % 7

    const edd = new Date(lmp)
    edd.setDate(edd.getDate() + 280)

    let trimester = '1st Trimester (Weeks 1–12)'
    let fruit = 'Seed / Poppy'
    let nextScan = 'NT Scan & Double Marker Blood Test (Weeks 11–13)'

    if (weeks >= 13 && weeks <= 27) {
      trimester = '2nd Trimester (Weeks 13–27)'
      fruit = 'Mango / Bell Pepper 🫑 (Baby is ~18cm)'
      nextScan = 'TIFFA Anomaly Scan & Fetal Echo (Weeks 18–22)'
    } else if (weeks >= 28) {
      trimester = '3rd Trimester (Weeks 28–40)'
      fruit = 'Coconut / Papaya 🥥 (Baby is ~35cm)'
      nextScan = 'Growth Scan & Color Doppler (Weeks 32–36)'
    }

    return {
      weeks,
      days,
      trimester,
      fruit,
      nextScan,
      edd: edd.toDateString()
    }
  }, [t8LmpDate])

  // ──────────────────────────────────────────────────────────
  // TOOL 11 STATE: Pregnancy Nutrition Planner
  // ──────────────────────────────────────────────────────────
  const [t11Trimester, setT11Trimester] = useState<'1' | '2' | '3'>('2')
  const [t11DietType, setT11DietType] = useState<'veg' | 'nonveg'>('veg')

  // ──────────────────────────────────────────────────────────
  // TOOL 12 STATE: Hospital Bag Checklist
  // ──────────────────────────────────────────────────────────
  const [t12BagChecked, setT12BagChecked] = useState<{ [key: string]: boolean }>({
    maternityPads: true,
    nursingBras: true,
    hospitalDocuments: true,
    babySwaddles: false,
    babyOnesies: false,
    partnerCharger: false,
    carSeat: false,
    slippersToiletries: true
  })

  const t12CompletedCount = Object.values(t12BagChecked).filter(Boolean).length
  const t12TotalCount = Object.keys(t12BagChecked).length

  // Filter tools
  const filteredTools = useMemo(() => {
    return tools.filter((t) => {
      const matchSearch =
        !searchQuery ||
        t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchCat = categoryFilter === 'All' || t.category === categoryFilter
      return matchSearch && matchCat
    })
  }, [tools, searchQuery, categoryFilter])

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/womens-health" className="hover:text-rose-600 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">12 Free Clinical Health Tools</span>
        </nav>
      </div>

      {/* ── HERO BANNER ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-purple-950 to-rose-950 text-white p-6 sm:p-12 border border-slate-800 shadow-2xl space-y-6 overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-3xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>100% FREE CLINICAL ACQUISITION SUITE</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              12 Free Interactive Tools for <br />
              <span className="text-gradient-chic">Fertility, Pregnancy &amp; Hospital Care.</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Evidence-based calculators, hospital cost benchmarks, and checklists vetted by Dr. Arya MD. Make informed clinical decisions with zero hidden fees and 1-click WhatsApp exports.
            </p>
          </div>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-rose-400 font-bold block text-base">12 Tools</span>
              <span className="text-slate-400 text-3xs">100% Free &amp; Unlocked</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-emerald-400 font-bold block text-base">ICMR &amp; ESHRE</span>
              <span className="text-slate-400 text-3xs">Clinical Guidelines</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-teal-400 font-bold block text-base">80% Savings</span>
              <span className="text-slate-400 text-3xs">Jan Aushadhi Generics</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
              <span className="text-purple-400 font-bold block text-base">1-Click Share</span>
              <span className="text-slate-400 text-3xs">WhatsApp &amp; PDF Export</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── TOOL SELECTION TABS & SEARCH ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
        
        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-semibold">
          {['All', 'Fertility & Preconception', 'Pregnancy & Trimesters', 'Hospital & Cost Planning', 'Nutrition & Checklists'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                categoryFilter === cat
                  ? 'bg-slate-900 text-white font-bold shadow-2xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {cat === 'All' ? '🌟 All 12 Free Tools' : cat}
            </button>
          ))}
        </div>

        {/* 12 Tool Quick Switcher Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {filteredTools.map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveToolId(t.id)}
              className={`p-3.5 rounded-2xl border text-left transition-all flex flex-col justify-between space-y-2 ${
                activeToolId === t.id
                  ? 'bg-rose-50 border-rose-500 shadow-md ring-2 ring-rose-500/20'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl">{t.icon}</span>
                <span className="text-[9px] font-black text-rose-600 bg-rose-100/60 px-1.5 py-0.5 rounded">
                  #{t.toolNumber}
                </span>
              </div>
              <div>
                <strong className="text-xs font-black text-slate-950 block leading-snug line-clamp-1">
                  {t.shortTitle}
                </strong>
                <span className="text-[10px] text-slate-500 line-clamp-1">{t.category}</span>
              </div>
            </button>
          ))}
        </div>

      </section>

      {/* ── ACTIVE INTERACTIVE TOOL WORKSPACE ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        {/* ────────────────────────────────────────────────────────── */}
        {/* TOOL 1: FERTILITY READINESS ASSESSMENT                     */}
        {/* ────────────────────────────────────────────────────────── */}
        {activeToolId === 'fertility-readiness' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-rose-600 font-bold text-xs uppercase tracking-wider">
                  <span>🎯 TOOL #1</span>
                  <span>CLINICAL TRIAGE</span>
                </div>
                <h2 className="text-2xl font-black text-slate-950">Fertility Readiness Assessment</h2>
                <p className="text-xs text-slate-500">Calculate your conception readiness score and next clinical milestones</p>
              </div>

              <div className="flex items-center gap-2">
                <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-right">
                  <span className="text-3xs text-rose-800 font-bold block uppercase">Readiness Score</span>
                  <span className="text-2xl font-black text-rose-600">{t1Score}%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
              
              {/* Question 1: Female Age */}
              <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <label className="font-bold text-slate-900 block">1. Your Current Age: {t1Age} years</label>
                <input
                  type="range"
                  min="20"
                  max="45"
                  value={t1Age}
                  onChange={(e) => setT1Age(Number(e.target.value))}
                  className="w-full accent-rose-600"
                />
                <div className="flex justify-between text-3xs text-slate-400">
                  <span>20y (Peak Oocytes)</span>
                  <span>35y (Tipping Point)</span>
                  <span>45y</span>
                </div>
              </div>

              {/* Question 2: Cycle Regularity */}
              <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <label className="font-bold text-slate-900 block">2. Menstrual Cycle Regularity:</label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'yes', label: 'Regular (26–32d)' },
                    { id: 'somewhat', label: 'Varies by ±5d' },
                    { id: 'no', label: 'Irregular (>35d / PCOS)' }
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => setT1CycleRegular(opt.id as any)}
                      className={`p-2 rounded-xl border text-center font-bold text-3xs transition-all ${
                        t1CycleRegular === opt.id ? 'bg-rose-600 text-white border-rose-600' : 'bg-white border-slate-200 text-slate-700'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3: Months Trying */}
              <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <label className="font-bold text-slate-900 block">3. Duration of Trying: {t1MonthsTrying} Months</label>
                <input
                  type="range"
                  min="1"
                  max="24"
                  value={t1MonthsTrying}
                  onChange={(e) => setT1MonthsTrying(Number(e.target.value))}
                  className="w-full accent-rose-600"
                />
                <span className="text-3xs text-slate-500 block">
                  {t1MonthsTrying >= 12 ? '⚠️ Clinical threshold reached (12+ months) — specialist evaluation advised' : 'Normal natural trying window'}
                </span>
              </div>

              {/* Question 4: Health Factors */}
              <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <label className="font-bold text-slate-900 block">4. Known Medical Factors:</label>
                <div className="space-y-1.5">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={t1PcosHistory}
                      onChange={(e) => setT1PcosHistory(e.target.checked)}
                      className="rounded text-rose-600"
                    />
                    <span>Known PCOS / Thyroid / Endometriosis</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={t1PartnerTested}
                      onChange={(e) => setT1PartnerTested(e.target.checked)}
                      className="rounded text-rose-600"
                    />
                    <span>Partner Semen Analysis already done</span>
                  </label>
                </div>
              </div>

            </div>

            {/* Results & Action Plan */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-rose-400" />
                  <h3 className="font-black text-base">Your Personalized Clinical Plan</h3>
                </div>
                <span className="text-3xs font-black uppercase px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300">
                  {t1Score >= 75 ? 'HIGH CONCEPTION READINESS' : 'ACTION RECOMMENDED'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <strong className="text-rose-300 block">Step 1: Ovarian Reserve</strong>
                  <p className="text-slate-300 text-3xs">
                    {t1Age >= 35 ? 'Book doorstep AMH test immediately to verify egg count.' : 'AMH is recommended if trying exceeds 6–12 months.'}
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <strong className="text-teal-300 block">Step 2: Male Workup</strong>
                  <p className="text-slate-300 text-3xs">
                    {t1PartnerTested ? 'Semen parameters verified ✓' : 'Order ₹499 Semen Analysis to rule out 50% male factor delays.'}
                  </p>
                </div>
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <strong className="text-purple-300 block">Step 3: Preconception Diet</strong>
                  <p className="text-slate-300 text-3xs">
                    Start 5mg Folic Acid + CoQ10 200mg daily.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <span className="text-3xs text-slate-400">
                  AI Guidance based on ESHRE &amp; FOGSI reproductive guidelines.
                </span>
                <Link
                  href="/womens-health/blood-tests"
                  className="px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs"
                >
                  Book Baseline Fertility Blood Panel (₹1,299) →
                </Link>
              </div>
            </div>

          </div>
        )}

        {/* ────────────────────────────────────────────────────────── */}
        {/* TOOL 2: PREGNANCY PLANNING CALCULATOR                      */}
        {/* ────────────────────────────────────────────────────────── */}
        {activeToolId === 'pregnancy-planning' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-1.5 text-rose-600 font-bold text-xs uppercase tracking-wider">
                <span>📅 TOOL #2</span>
                <span>TARGET MILESTONES</span>
              </div>
              <h2 className="text-2xl font-black text-slate-950">Pregnancy Planning Calculator</h2>
              <p className="text-xs text-slate-500">Pick your target delivery month to work backwards for nutrition and checks</p>
            </div>

            <div className="max-w-md space-y-2">
              <label className="font-bold text-xs text-slate-900 block">Select Desired Delivery Month &amp; Year:</label>
              <input
                type="month"
                value={t2TargetMonth}
                onChange={(e) => setT2TargetMonth(e.target.value)}
                className="w-full p-3 rounded-2xl border border-slate-200 font-bold text-xs bg-slate-50"
              />
            </div>

            {t2Calculations && (
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs pt-4">
                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-1">
                  <span className="text-3xs font-bold text-rose-800 uppercase">1. Start Folic Acid 5mg</span>
                  <div className="text-lg font-black text-rose-950">{t2Calculations.folicAcidStart}</div>
                  <span className="text-3xs text-slate-500">3 Months before trying</span>
                </div>

                <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 space-y-1">
                  <span className="text-3xs font-bold text-purple-800 uppercase">2. Target Conception</span>
                  <div className="text-lg font-black text-purple-950">{t2Calculations.conceptionMonth}</div>
                  <span className="text-3xs text-slate-500">Peak fertile cycles</span>
                </div>

                <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 space-y-1">
                  <span className="text-3xs font-bold text-teal-800 uppercase">3. NT Dating Scan</span>
                  <div className="text-lg font-black text-teal-950">{t2Calculations.t1Scan}</div>
                  <span className="text-3xs text-slate-500">12th Week Milestone</span>
                </div>

                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <span className="text-3xs font-bold text-emerald-800 uppercase">4. Delivery Season</span>
                  <div className="text-lg font-black text-emerald-950">{t2Calculations.deliveryTarget}</div>
                  <span className="text-3xs text-slate-500">Estimated Due Date</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ────────────────────────────────────────────────────────── */}
        {/* TOOL 3: OVULATION CALCULATOR                               */}
        {/* ────────────────────────────────────────────────────────── */}
        {activeToolId === 'ovulation-calculator' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-1.5 text-rose-600 font-bold text-xs uppercase tracking-wider">
                <span>🌸 TOOL #3</span>
                <span>FERTILE WINDOW</span>
              </div>
              <h2 className="text-2xl font-black text-slate-950">Clinical Ovulation Calculator</h2>
              <p className="text-xs text-slate-500">Calculate your exact peak fertile days, ovulation surge, and pregnancy test date</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-bold text-slate-900 block">First Day of Last Period (LMP):</label>
                <input
                  type="date"
                  value={t3LmpDate}
                  onChange={(e) => setT3LmpDate(e.target.value)}
                  className="w-full p-3 rounded-2xl border border-slate-200 bg-slate-50 font-bold text-xs"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-slate-900 block">Average Cycle Length: {t3CycleLength} Days</label>
                <input
                  type="range"
                  min="21"
                  max="40"
                  value={t3CycleLength}
                  onChange={(e) => setT3CycleLength(Number(e.target.value))}
                  className="w-full accent-rose-600 mt-2"
                />
                <div className="flex justify-between text-3xs text-slate-400">
                  <span>21 Days</span>
                  <span>28 Days (Standard)</span>
                  <span>40 Days</span>
                </div>
              </div>
            </div>

            {t3Results && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs pt-2">
                <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-1">
                  <span className="text-3xs font-bold text-rose-800 uppercase">Estimated Ovulation Day</span>
                  <div className="text-xl font-black text-rose-950">{t3Results.ovulation}</div>
                  <span className="text-3xs text-slate-500">Egg released into fallopian tube</span>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                  <span className="text-3xs font-bold text-emerald-800 uppercase">6-Day Fertile Window</span>
                  <div className="text-xl font-black text-emerald-950">{t3Results.fertileRange}</div>
                  <span className="text-3xs text-emerald-700 font-bold">Peak Days: {t3Results.peakDays}</span>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-1">
                  <span className="text-3xs font-bold text-rose-400 uppercase">Earliest Pregnancy Test Date</span>
                  <div className="text-xl font-black text-white">{t3Results.testDate}</div>
                  <span className="text-3xs text-slate-400">Day after missed period</span>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ────────────────────────────────────────────────────────── */}
        {/* TOOL 4: IVF COST CALCULATOR                                */}
        {/* ────────────────────────────────────────────────────────── */}
        {activeToolId === 'ivf-cost-calculator' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-rose-600 font-bold text-xs uppercase tracking-wider">
                  <span>💰 TOOL #4</span>
                  <span>FINANCIAL ESTIMATOR</span>
                </div>
                <h2 className="text-2xl font-black text-slate-950">IVF Cost &amp; Package Calculator (2026)</h2>
                <p className="text-xs text-slate-500">Itemized transparent pricing across Indian metro hospitals</p>
              </div>

              <div className="text-right">
                <span className="text-3xs text-slate-400 line-through">₹{t4Calculations.total.toLocaleString('en-IN')}</span>
                <div className="text-2xl font-black text-emerald-700">₹{t4Calculations.discountedTotal.toLocaleString('en-IN')}</div>
                <span className="text-3xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                  Save ₹{t4Calculations.genericSavings} with Jan Aushadhi
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-800">City / Metro:</label>
                <select
                  value={t4City}
                  onChange={(e) => setT4City(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-bold"
                >
                  <option value="pune">Pune &amp; PCMC</option>
                  <option value="mumbai">Mumbai &amp; Thane</option>
                  <option value="delhi">Delhi-NCR</option>
                  <option value="bangalore">Bengaluru</option>
                  <option value="other">Other Indian City</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-800">Cycle Type:</label>
                <select
                  value={t4Type}
                  onChange={(e) => setT4Type(e.target.value as any)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-bold"
                >
                  <option value="self">Self Egg IVF Cycle</option>
                  <option value="donor">Donor Egg IVF Cycle (+₹60,000)</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-800">Embryo Freezing Storage:</label>
                <select
                  value={t4FreezingYears}
                  onChange={(e) => setT4FreezingYears(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 font-bold"
                >
                  <option value={1}>1 Year Included (₹25,000)</option>
                  <option value={2}>2 Years (₹40,000)</option>
                  <option value={3}>3 Years (₹55,000)</option>
                  <option value={5}>5 Years (₹85,000)</option>
                </select>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
              <strong className="font-bold text-slate-900 block">Optional Advanced Lab Add-ons:</strong>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={t4IncludeIcsi}
                    onChange={(e) => setT4IncludeIcsi(e.target.checked)}
                    className="rounded text-rose-600"
                  />
                  <span>ICSI Fertilization (₹25,000)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={t4IncludeBlastocyst}
                    onChange={(e) => setT4IncludeBlastocyst(e.target.checked)}
                    className="rounded text-rose-600"
                  />
                  <span>Day 5 Blastocyst Culture (₹20,000)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={t4IncludePgta}
                    onChange={(e) => setT4IncludePgta(e.target.checked)}
                    className="rounded text-rose-600"
                  />
                  <span>PGT-A Genetic Screening (₹45,000)</span>
                </label>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
              <div>
                <strong className="text-rose-400 block font-bold">0% Interest Healthcare EMI Available</strong>
                <span className="text-slate-300 text-3xs">Pay in easy monthly installments of ~₹{t4Calculations.monthlyEmi}/month</span>
              </div>
              <a
                href="https://wa.me/917028025717?text=Hi%20Meditrust,%20I%20want%20to%20apply%20for%200%25%20IVF%20EMI%20assistance"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs"
              >
                Apply for 0% IVF EMI →
              </a>
            </div>
          </div>
        )}

        {/* ────────────────────────────────────────────────────────── */}
        {/* TOOL 6: EGG FREEZING DECISION GUIDE                        */}
        {/* ────────────────────────────────────────────────────────── */}
        {activeToolId === 'egg-freezing-guide' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-1.5 text-rose-600 font-bold text-xs uppercase tracking-wider">
                <span>❄️ TOOL #6</span>
                <span>OOCYTE VITRIFICATION</span>
              </div>
              <h2 className="text-2xl font-black text-slate-950">Egg Freezing Decision Guide &amp; Calculator</h2>
              <p className="text-xs text-slate-500">Calculate how many eggs you should freeze for peak future pregnancy confidence</p>
            </div>

            <div className="max-w-md space-y-2 text-xs">
              <label className="font-bold text-slate-900 block">Your Current Age: {t6Age} Years</label>
              <input
                type="range"
                min="24"
                max="42"
                value={t6Age}
                onChange={(e) => setT6Age(Number(e.target.value))}
                className="w-full accent-rose-600"
              />
              <div className="flex justify-between text-3xs text-slate-400">
                <span>24y</span>
                <span>31y (Optimal)</span>
                <span>42y</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs pt-2">
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 space-y-1">
                <span className="text-3xs font-bold text-rose-800 uppercase">Target Mature Eggs (MII)</span>
                <div className="text-2xl font-black text-rose-950">{t6Results.targetEggs} Eggs</div>
                <span className="text-3xs text-slate-500">For ~{t6Results.liveBirthProb} live birth chance</span>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 space-y-1">
                <span className="text-3xs font-bold text-purple-800 uppercase">Estimated Cycles Needed</span>
                <div className="text-2xl font-black text-purple-950">{t6Results.estimatedCycles} Cycle{t6Results.estimatedCycles > 1 ? 's' : ''}</div>
                <span className="text-3xs text-slate-500">Based on age ovarian response</span>
              </div>

              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 space-y-1">
                <span className="text-3xs font-bold text-teal-800 uppercase">Live Birth Probability</span>
                <div className="text-2xl font-black text-teal-950">{t6Results.liveBirthProb}</div>
                <span className="text-3xs text-slate-500">Upon future thawing &amp; ICSI</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-1">
                <span className="text-3xs font-bold text-rose-400 uppercase">Total Estimated Budget</span>
                <div className="text-2xl font-black text-white">₹{(t6Results.estCost / 100000).toFixed(1)} Lakhs</div>
                <span className="text-3xs text-slate-400">Includes 1st yr cryostorage</span>
              </div>
            </div>
          </div>
        )}

        {/* ────────────────────────────────────────────────────────── */}
        {/* TOOL 8: PREGNANCY WEEK CALCULATOR                          */}
        {/* ────────────────────────────────────────────────────────── */}
        {activeToolId === 'pregnancy-week-calculator' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
            <div className="border-b border-slate-100 pb-4">
              <div className="inline-flex items-center gap-1.5 text-rose-600 font-bold text-xs uppercase tracking-wider">
                <span>👶 TOOL #8</span>
                <span>WEEK-BY-WEEK</span>
              </div>
              <h2 className="text-2xl font-black text-slate-950">Pregnancy Week Calculator &amp; Milestone Tracker</h2>
              <p className="text-xs text-slate-500">Track fetal growth, fruit size comparisons, and mandatory trimester scans</p>
            </div>

            <div className="max-w-md space-y-2 text-xs">
              <label className="font-bold text-slate-900 block">First Day of Last Period (LMP):</label>
              <input
                type="date"
                value={t8LmpDate}
                onChange={(e) => setT8LmpDate(e.target.value)}
                className="w-full p-3 rounded-2xl border border-slate-200 bg-slate-50 font-bold text-xs"
              />
            </div>

            {t8Results && (
              <div className="space-y-4 pt-2">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 space-y-1">
                    <span className="text-3xs font-bold text-rose-800 uppercase">Current Gestational Age</span>
                    <div className="text-2xl font-black text-rose-950">Week {t8Results.weeks}, Day {t8Results.days}</div>
                    <span className="text-3xs text-slate-600 font-bold">{t8Results.trimester}</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-purple-50 border border-purple-200 space-y-1">
                    <span className="text-3xs font-bold text-purple-800 uppercase">Baby Size Comparison</span>
                    <div className="text-lg font-black text-purple-950">{t8Results.fruit}</div>
                    <span className="text-3xs text-slate-500">Rapid organ &amp; bone development</span>
                  </div>

                  <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
                    <span className="text-3xs font-bold text-emerald-800 uppercase">Estimated Due Date (EDD)</span>
                    <div className="text-xl font-black text-emerald-950">{t8Results.edd}</div>
                    <span className="text-3xs text-slate-500">40 Weeks Milestone</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 text-xs">
                  <strong className="text-slate-900 font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Upcoming Key Clinical Scan:</span>
                  </strong>
                  <p className="text-slate-700">{t8Results.nextScan}</p>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ────────────────────────────────────────────────────────── */}
        {/* TOOL 12: HOSPITAL BAG CHECKLIST                            */}
        {/* ────────────────────────────────────────────────────────── */}
        {activeToolId === 'hospital-bag-checklist' && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <div className="inline-flex items-center gap-1.5 text-rose-600 font-bold text-xs uppercase tracking-wider">
                  <span>🧳 TOOL #12</span>
                  <span>MOM &amp; BABY PACKING</span>
                </div>
                <h2 className="text-2xl font-black text-slate-950">Interactive Hospital Bag Checklist</h2>
                <p className="text-xs text-slate-500">Smart packing progress tracker for delivery day</p>
              </div>

              <div className="text-right">
                <span className="text-3xs text-slate-500 font-bold uppercase block">Packing Progress</span>
                <span className="text-2xl font-black text-rose-600">
                  {t12CompletedCount} / {t12TotalCount} Packed ({Math.round((t12CompletedCount / t12TotalCount) * 100)}%)
                </span>
              </div>
            </div>

            <div className="space-y-3 text-xs">
              {[
                { id: 'hospitalDocuments', label: '📁 Medical Records Folder, Doctor Prescription, Aadhaar, Insurance TPA Card & Marriage Certificate', category: 'Documentation' },
                { id: 'maternityPads', label: '🩸 2 Packs Meditrust Sakhi™ Heavy Flow Postpartum Pads & 360° Leak-Proof Panties', category: 'For Mom' },
                { id: 'nursingBras', label: '🤱 3 Front-Open Nursing Bras & Soft Cotton Nightgowns', category: 'For Mom' },
                { id: 'slippersToiletries', label: '🫧 Non-Slip Slippers, Lip Balm, Toothbrush & Mild Foaming Intimate Wash', category: 'For Mom' },
                { id: 'babySwaddles', label: '👶 4 Pre-Washed 100% Muslin Cotton Swaddle Blankets', category: 'For Baby' },
                { id: 'babyOnesies', label: '🍼 3 Front-Button Newborn Onesies, Mittens & Socks', category: 'For Baby' },
                { id: 'partnerCharger', label: '⚡ Long Phone Charger Cord, Power Bank & Healthy Energy Snacks for Partner', category: 'For Partner' },
                { id: 'carSeat', label: '🚗 Infant Car Seat / Baby Carrier installed in vehicle for discharge', category: 'Going Home' },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => setT12BagChecked({ ...t12BagChecked, [item.id]: !t12BagChecked[item.id] })}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    t12BagChecked[item.id] ? 'bg-emerald-50/70 border-emerald-300 font-semibold text-emerald-950' : 'bg-slate-50 border-slate-200 text-slate-700'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-lg border flex items-center justify-center ${
                      t12BagChecked[item.id] ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 bg-white'
                    }`}>
                      {t12BagChecked[item.id] && <Check className="w-3.5 h-3.5" />}
                    </div>
                    <span>{item.label}</span>
                  </div>
                  <span className="text-3xs text-slate-400 font-bold uppercase">{item.category}</span>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-3xs text-slate-500">
                Tip: Keep your bag packed and near the door by Week 35!
              </span>
              <button
                onClick={() => {
                  navigator.clipboard.writeText('🧳 Maternity Hospital Bag Checklist: Medical file, Sakhi maternity pads, nursing bras, muslin swaddles, newborn onesies, infant car seat.')
                  alert('Checklist copied! You can share on WhatsApp.')
                }}
                className="px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
              >
                Copy Checklist to WhatsApp
              </button>
            </div>
          </div>
        )}

      </section>

      {/* ── DR. ARYA 24/7 WHATSAPP CONSULTATION BANNER ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-rose-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CUSTOM CLINICAL CALCULATIONS</span>
            </div>
            <h3 className="text-2xl font-black text-white">
              Need Help Interpreting Your Tool Results?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Dr. Arya AI is available 24/7 on WhatsApp (+91 7028025717) for private, confidential fertility and pregnancy guidance.
            </p>
          </div>

          <a
            href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20used%20the%20fertility%20calculator%20and%20need%20guidance"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-[#25d366] hover:bg-[#1ebd5a] text-slate-950 font-black text-xs shadow-md transition-transform hover:scale-102 flex items-center justify-center gap-2 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Live with Dr. Arya (24/7 Free)</span>
          </a>
        </div>
      </section>

    </div>
  )
}
