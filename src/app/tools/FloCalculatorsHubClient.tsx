'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Calculator, Sparkles, Calendar, Heart, Baby, CheckCircle2, ArrowRight,
  ChevronRight, MessageCircle, ShieldCheck, Check, Search, Lock, Share2,
  Info, Stethoscope, Clock, Zap, Activity, AlertTriangle, FileText, Download,
  CheckCircle, AlertCircle, HelpCircle, BookOpen, UserCheck
} from 'lucide-react'
import { FLO_10_CALCULATORS, FloCalculatorDef } from '@/data/floCalculatorsData'

interface Props {
  initialSlug?: string
}

export default function FloCalculatorsHubClient({ initialSlug }: Props) {
  const [activeSlug, setActiveSlug] = useState<string>(initialSlug || 'ovulation-calculator')
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string>('All')

  // Calculator Form State
  // 1. Ovulation
  const [ovLmp, setOvLmp] = useState<string>(new Date(Date.now() - 14 * 86400000).toISOString().split('T')[0])
  const [ovCycle, setOvCycle] = useState<number>(28)
  const [ovLuteal, setOvLuteal] = useState<number>(14)

  // 2. hCG
  const [hcg1, setHcg1] = useState<number>(150)
  const [hcg2, setHcg2] = useState<number>(380)
  const [hcgHours, setHcgHours] = useState<number>(48)

  // 3. Pregnancy Test
  const [ptLmp, setPtLmp] = useState<string>(new Date(Date.now() - 26 * 86400000).toISOString().split('T')[0])
  const [ptCycle, setPtCycle] = useState<number>(28)

  // 4. Menstrual Cycle
  const [mcLmp, setMcLmp] = useState<string>(new Date(Date.now() - 10 * 86400000).toISOString().split('T')[0])
  const [mcCycle, setMcCycle] = useState<number>(28)
  const [mcPeriod, setMcPeriod] = useState<number>(5)

  // 5. Period Forecast
  const [pfLmp, setPfLmp] = useState<string>(new Date(Date.now() - 12 * 86400000).toISOString().split('T')[0])
  const [pfCycle, setPfCycle] = useState<number>(28)

  // 6. Implantation
  const [impOvu, setImpOvu] = useState<string>(new Date(Date.now() - 8 * 86400000).toISOString().split('T')[0])

  // 7. Weeks to Months
  const [wmWeek, setWmWeek] = useState<number>(20)

  // 8. Due Date
  const [ddMethod, setDdMethod] = useState<'lmp' | 'conception'>('lmp')
  const [ddDate, setDdDate] = useState<string>(new Date(Date.now() - 70 * 86400000).toISOString().split('T')[0])
  const [ddCycle, setDdCycle] = useState<number>(28)

  // 9. IVF Due Date
  const [ivfType, setIvfType] = useState<'day5' | 'day3' | 'retrieval'>('day5')
  const [ivfDate, setIvfDate] = useState<string>(new Date(Date.now() - 45 * 86400000).toISOString().split('T')[0])

  // 10. Ultrasound Due Date
  const [usDate, setUsDate] = useState<string>(new Date(Date.now() - 30 * 86400000).toISOString().split('T')[0])
  const [usWeeks, setUsWeeks] = useState<number>(8)
  const [usDays, setUsDays] = useState<number>(4)

  const activeCalc = useMemo(() => {
    return FLO_10_CALCULATORS.find((c) => c.slug === activeSlug) || FLO_10_CALCULATORS[0]
  }, [activeSlug])

  const filteredCalculators = useMemo(() => {
    return FLO_10_CALCULATORS.filter((c) => {
      const matchSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) || c.description.toLowerCase().includes(searchQuery.toLowerCase())
      const matchCategory = categoryFilter === 'All' || c.category === categoryFilter
      return matchSearch && matchCategory
    })
  }, [searchQuery, categoryFilter])

  // ── COMPUTATIONS ──

  // 1. Ovulation Result
  const ovulationResult = useMemo(() => {
    const lmp = new Date(ovLmp)
    if (isNaN(lmp.getTime())) return null
    const ovuOffset = (ovCycle - ovLuteal) * 86400000
    const ovuDate = new Date(lmp.getTime() + ovuOffset)
    const fertileStart = new Date(ovuDate.getTime() - 5 * 86400000)
    const fertileEnd = new Date(ovuDate.getTime() + 1 * 86400000)
    const peakStart = new Date(ovuDate.getTime() - 2 * 86400000)
    const nextPeriod = new Date(lmp.getTime() + ovCycle * 86400000)
    const testDate = new Date(ovuDate.getTime() + 14 * 86400000)

    const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

    return {
      ovulationDate: fmt(ovuDate),
      fertileWindow: `${fmt(fertileStart)} – ${fmt(fertileEnd)}`,
      peakIntercourse: `${fmt(peakStart)} – ${fmt(ovuDate)}`,
      nextPeriod: fmt(nextPeriod),
      testViableDate: fmt(testDate)
    }
  }, [ovLmp, ovCycle, ovLuteal])

  // 2. Beta hCG Result
  const hcgResult = useMemo(() => {
    if (hcg1 <= 0 || hcg2 <= 0 || hcgHours <= 0) return null
    const doublingTimeHours = (hcgHours * Math.LN2) / Math.log(hcg2 / hcg1)
    const increasePercent48 = (Math.pow(hcg2 / hcg1, 48 / hcgHours) - 1) * 100
    const increaseTotal = ((hcg2 - hcg1) / hcg1) * 100

    let assessment = 'Normal healthy kinetic rise (>66% increase in 48h)'
    let color = 'text-emerald-700 bg-emerald-50 border-emerald-200'
    if (doublingTimeHours > 72) {
      assessment = 'Slower than average doubling (>72 hours) — recommend clinical ultrasound'
      color = 'text-amber-800 bg-amber-50 border-amber-200'
    } else if (hcg2 < hcg1) {
      assessment = 'Declining hCG levels — immediate physician consultation required'
      color = 'text-rose-800 bg-rose-50 border-rose-200'
    }

    return {
      doublingHours: doublingTimeHours.toFixed(1),
      increase48: increasePercent48.toFixed(1),
      increaseTotal: increaseTotal.toFixed(1),
      assessment,
      color,
      isNormal: doublingTimeHours >= 48 && doublingTimeHours <= 72 && hcg2 > hcg1
    }
  }, [hcg1, hcg2, hcgHours])

  // 3. Pregnancy Test Date Result
  const ptResult = useMemo(() => {
    const lmp = new Date(ptLmp)
    if (isNaN(lmp.getTime())) return null
    const ovuDate = new Date(lmp.getTime() + (ptCycle - 14) * 86400000)
    const dpo10Early = new Date(ovuDate.getTime() + 10 * 86400000)
    const dpo14Missed = new Date(lmp.getTime() + ptCycle * 86400000)
    const dpo16Blood = new Date(ovuDate.getTime() + 12 * 86400000)

    const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

    return {
      earlyTestDate: fmt(dpo10Early),
      missedPeriodDate: fmt(dpo14Missed),
      bloodTestDate: fmt(dpo16Blood)
    }
  }, [ptLmp, ptCycle])

  // 4. Menstrual Cycle Phase Result
  const mcResult = useMemo(() => {
    const lmp = new Date(mcLmp)
    if (isNaN(lmp.getTime())) return null
    const today = new Date()
    const diffDays = Math.floor((today.getTime() - lmp.getTime()) / 86400000) % mcCycle + 1

    let phase = '1. Menstrual Phase'
    let energy = 'Restorative & Reflective'
    let workout = 'Gentle yin yoga & walking'
    let food = 'Iron-rich broths & beetroot'
    let icon = '🩸'
    let color = 'text-rose-700 bg-rose-50'

    if (diffDays > mcPeriod && diffDays <= mcCycle - 16) {
      phase = '2. Follicular Phase'
      energy = 'High Stamina & Creative'
      workout = 'HIIT, tempo runs, heavy lifting'
      food = 'Fermented probiotics & avocado'
      icon = '🌱'
      color = 'text-emerald-700 bg-emerald-50'
    } else if (diffDays > mcCycle - 16 && diffDays <= mcCycle - 12) {
      phase = '3. Ovulatory Phase'
      energy = 'Magnetic & Peak Confidence'
      workout = 'Max effort spin & PR strength'
      food = 'Antioxidant berries & broccoli'
      icon = '🌸'
      color = 'text-purple-700 bg-purple-50'
    } else if (diffDays > mcCycle - 12) {
      phase = '4. Luteal Phase'
      energy = 'Detail-Oriented & Deep Focus'
      workout = 'Pilates & slow flow yoga'
      food = 'Sweet potatoes & magnesium chocolate'
      icon = '🍂'
      color = 'text-amber-700 bg-amber-50'
    }

    return {
      cycleDay: diffDays,
      phase,
      energy,
      workout,
      food,
      icon,
      color,
      daysToNext: mcCycle - diffDays
    }
  }, [mcLmp, mcCycle, mcPeriod])

  // 5. Period Next 6 Forecast
  const pfResult = useMemo(() => {
    const lmp = new Date(pfLmp)
    if (isNaN(lmp.getTime())) return []
    const dates = []
    const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

    for (let i = 1; i <= 6; i++) {
      const pStart = new Date(lmp.getTime() + i * pfCycle * 86400000)
      const pEnd = new Date(pStart.getTime() + 5 * 86400000)
      const pmsStart = new Date(pStart.getTime() - 5 * 86400000)
      const ovuDate = new Date(pStart.getTime() - 14 * 86400000)
      dates.push({
        cycleIndex: i,
        periodRange: `${fmt(pStart)} – ${fmt(pEnd)}`,
        pmsAlert: fmt(pmsStart),
        ovulationDate: fmt(ovuDate)
      })
    }
    return dates
  }, [pfLmp, pfCycle])

  // 6. Implantation Timeline
  const impResult = useMemo(() => {
    const ovu = new Date(impOvu)
    if (isNaN(ovu.getTime())) return null
    const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    const dpo6 = new Date(ovu.getTime() + 6 * 86400000)
    const dpo9 = new Date(ovu.getTime() + 9 * 86400000)
    const dpo12 = new Date(ovu.getTime() + 12 * 86400000)
    const testDate = new Date(ovu.getTime() + 14 * 86400000)

    return {
      window: `${fmt(dpo6)} – ${fmt(dpo12)}`,
      peakDay: fmt(dpo9),
      homeTestViable: fmt(testDate)
    }
  }, [impOvu])

  // 7. Weeks to Months Result
  const wmResult = useMemo(() => {
    let month = 1
    let trimester = 1
    let stage = 'Embryonic organogenesis'

    if (wmWeek >= 1 && wmWeek <= 4) { month = 1; trimester = 1; stage = 'Blastocyst implantation' }
    else if (wmWeek <= 8) { month = 2; trimester = 1; stage = 'Heartbeat and neural tube' }
    else if (wmWeek <= 13) { month = 3; trimester = 1; stage = 'Reflexes and vocal cords' }
    else if (wmWeek <= 17) { month = 4; trimester = 2; stage = 'Facial expressions and hearing' }
    else if (wmWeek <= 21) { month = 5; trimester = 2; stage = 'Quickening flutter kicks' }
    else if (wmWeek <= 26) { month = 6; trimester = 2; stage = 'Viability & eye opening' }
    else if (wmWeek <= 30) { month = 7; trimester = 3; stage = 'Brain tissue folds & hiccups' }
    else if (wmWeek <= 35) { month = 8; trimester = 3; stage = 'Surfactant lung maturation' }
    else { month = 9; trimester = 3; stage = 'Full term delivery readiness' }

    return {
      month: `Month ${month} of 9`,
      trimester: `${trimester === 1 ? '1st' : trimester === 2 ? '2nd' : '3rd'} Trimester`,
      stage,
      daysLeft: (40 - wmWeek) * 7
    }
  }, [wmWeek])

  // 8. Due Date Result
  const ddResult = useMemo(() => {
    const ref = new Date(ddDate)
    if (isNaN(ref.getTime())) return null
    const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

    let edd: Date
    if (ddMethod === 'lmp') {
      const offset = (ddCycle - 28) * 86400000
      edd = new Date(ref.getTime() + 280 * 86400000 + offset)
    } else {
      edd = new Date(ref.getTime() + 266 * 86400000)
    }

    const today = new Date()
    const lmpBase = ddMethod === 'lmp' ? ref : new Date(ref.getTime() - 14 * 86400000)
    const gaDays = Math.floor((today.getTime() - lmpBase.getTime()) / 86400000)
    const gaWeeks = Math.floor(gaDays / 7)
    const gaRemDays = gaDays % 7

    const daysUntil = Math.floor((edd.getTime() - today.getTime()) / 86400000)

    let trimester = '1st Trimester'
    if (gaWeeks >= 14 && gaWeeks <= 26) trimester = '2nd Trimester'
    else if (gaWeeks >= 27) trimester = '3rd Trimester'

    return {
      edd: fmt(edd),
      gestationalAge: `${gaWeeks}w ${gaRemDays}d`,
      daysUntilDue: Math.max(0, daysUntil),
      trimester
    }
  }, [ddMethod, ddDate, ddCycle])

  // 9. IVF Due Date Result
  const ivfResult = useMemo(() => {
    const proc = new Date(ivfDate)
    if (isNaN(proc.getTime())) return null
    const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

    let edd: Date
    let lmpEquiv: Date

    if (ivfType === 'day5') {
      edd = new Date(proc.getTime() + 261 * 86400000)
      lmpEquiv = new Date(proc.getTime() - 19 * 86400000)
    } else if (ivfType === 'day3') {
      edd = new Date(proc.getTime() + 263 * 86400000)
      lmpEquiv = new Date(proc.getTime() - 17 * 86400000)
    } else {
      edd = new Date(proc.getTime() + 266 * 86400000)
      lmpEquiv = new Date(proc.getTime() - 14 * 86400000)
    }

    const today = new Date()
    const gaDays = Math.floor((today.getTime() - lmpEquiv.getTime()) / 86400000)
    const gaWeeks = Math.floor(gaDays / 7)
    const gaRemDays = gaDays % 7
    const betaTestDate = new Date(proc.getTime() + (ivfType === 'day5' ? 9 : 12) * 86400000)
    const firstScan = new Date(proc.getTime() + 28 * 86400000)

    return {
      edd: fmt(edd),
      gestationalAge: `${gaWeeks} weeks ${gaRemDays} days`,
      betaHcgTestDate: fmt(betaTestDate),
      firstViabilityScan: fmt(firstScan)
    }
  }, [ivfType, ivfDate])

  // 10. Ultrasound Due Date Result
  const usResult = useMemo(() => {
    const scan = new Date(usDate)
    if (isNaN(scan.getTime())) return null
    const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

    const totalDaysOnScan = usWeeks * 7 + usDays
    const remainingDays = 280 - totalDaysOnScan
    const edd = new Date(scan.getTime() + remainingDays * 86400000)

    const today = new Date()
    const daysSinceScan = Math.floor((today.getTime() - scan.getTime()) / 86400000)
    const gaTodayDays = totalDaysOnScan + daysSinceScan
    const gaTodayWeeks = Math.floor(gaTodayDays / 7)
    const gaTodayRem = gaTodayDays % 7

    return {
      officialEdd: fmt(edd),
      gaToday: `${gaTodayWeeks} weeks ${gaTodayRem} days`,
      scanSummary: `${usWeeks}w ${usDays}d on ${fmt(scan)}`
    }
  }, [usDate, usWeeks, usDays])

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/womens-health" className="hover:text-rose-600 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Clinical Calculator Suite (Flo-Inspired)</span>
        </nav>
      </div>

      {/* ── HERO BANNER ── */}
      <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8">
        <div className="bg-gradient-to-br from-rose-50 via-teal-50/40 to-purple-50 rounded-3xl p-8 sm:p-12 border border-rose-100 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-200 text-rose-700 text-xs font-bold shadow-2xs">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span>10 Clinical Evidence-Based Health Calculators</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Evidence-Based <span className="text-rose-600">Calculators &amp; Guides</span> for Women
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Accurate, physician-verified algorithms for ovulation, pregnancy due dates, Beta-hCG doubling times, IVF milestones, and menstrual cycle syncing. Built in accordance with ACOG, WHO, and FIGO standards.
            </p>

            {/* Privacy & Confidentiality Pledge */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600 pt-2">
              <span className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200">
                <Lock className="w-3.5 h-3.5 text-emerald-600" />
                100% Client-Side Private (Zero Data Saved on Servers)
              </span>
              <span className="flex items-center gap-1.5 text-teal-700 bg-teal-50 px-3 py-1.5 rounded-xl border border-teal-200">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                ACOG &amp; WHO Clinical Guidelines
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALCULATOR SUITE MAIN GRID ── */}
      <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left 4 Cols: Calculators Navigation List & Search */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Search and Category Filter */}
            <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search 10 calculators..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-medium focus:outline-none focus:border-rose-500"
                />
              </div>

              {/* Category Pills */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {['All', 'Fertility & Ovulation', 'Pregnancy & Due Date', 'Cycle & Period', 'IVF & Clinical'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3 py-1 rounded-full text-3xs font-bold transition-colors ${
                      categoryFilter === cat
                        ? 'bg-rose-600 text-white shadow-2xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Calculators Selector Vertical Menu */}
            <div className="bg-white rounded-3xl p-3 border border-slate-200 shadow-sm space-y-1">
              <div className="px-3 py-2 text-3xs font-black text-slate-400 uppercase tracking-wider">
                Clinical Health Calculators ({filteredCalculators.length})
              </div>

              <div className="space-y-1 max-h-[500px] overflow-y-auto pr-1">
                {filteredCalculators.map((calc) => {
                  const isSelected = activeSlug === calc.slug
                  return (
                    <button
                      key={calc.id}
                      onClick={() => setActiveSlug(calc.slug)}
                      className={`w-full text-left p-3 rounded-2xl transition-all flex items-center gap-3 ${
                        isSelected
                          ? 'bg-rose-50 border border-rose-200 text-rose-950 font-bold shadow-2xs'
                          : 'hover:bg-slate-50 border border-transparent text-slate-700 font-medium'
                      }`}
                    >
                      <span className="text-xl flex-shrink-0">{calc.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <strong className="text-xs truncate block">{calc.shortTitle}</strong>
                        </div>
                        <span className="text-3xs text-slate-400 truncate block font-normal">{calc.category}</span>
                      </div>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Dr. Arya Verification Badge */}
            <div className="p-4 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-teal-400 font-bold text-3xs uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>Verified by Dr. Arya AI Medical Council</span>
              </div>
              <p className="text-3xs text-slate-400 leading-relaxed font-normal">
                All algorithmic formulas conform to ACOG Clinical Practice Bulletin #700 and ASRM Fertility Guidelines.
              </p>
            </div>
          </div>

          {/* Right 8 Cols: Active Calculator Engine */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Tool Header Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">{activeCalc.icon}</span>
                    <span className="text-3xs font-black uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                      {activeCalc.badge}
                    </span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-950">{activeCalc.title}</h2>
                  <p className="text-xs text-slate-500">{activeCalc.tagline}</p>
                </div>
              </div>

              {/* ── KEY STATISTICS BENCHMARKS ── */}
              {activeCalc.keyStatistics && activeCalc.keyStatistics.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeCalc.keyStatistics.map((stat, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-0.5">
                      <span className="text-3xs text-slate-400 font-bold uppercase block">{stat.label}</span>
                      <strong className="text-base font-black text-slate-900 block">{stat.value}</strong>
                      <span className="text-3xs text-slate-500 font-normal leading-tight block">{stat.desc}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* ── DYNAMIC CALCULATOR INPUT FORMS ── */}

              {/* 1. OVULATION CALCULATOR */}
              {activeSlug === 'ovulation-calculator' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">First Day of LMP</label>
                      <input
                        type="date"
                        value={ovLmp}
                        onChange={(e) => setOvLmp(e.target.value)}
                        className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">Cycle Length ({ovCycle} Days)</label>
                      <input
                        type="range"
                        min="21"
                        max="40"
                        value={ovCycle}
                        onChange={(e) => setOvCycle(Number(e.target.value))}
                        className="w-full accent-teal-600 mt-3"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">Luteal Phase</label>
                      <select
                        value={ovLuteal}
                        onChange={(e) => setOvLuteal(Number(e.target.value))}
                        className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold"
                      >
                        <option value={12}>12 Days (Short)</option>
                        <option value={14}>14 Days (Standard)</option>
                        <option value={16}>16 Days (Long)</option>
                      </select>
                    </div>
                  </div>

                  {ovulationResult && (
                    <div className="p-6 rounded-3xl bg-gradient-to-r from-rose-50 via-teal-50 to-purple-50 border border-teal-200 space-y-4 animate-fadeIn">
                      <h4 className="text-xs font-black uppercase text-teal-900 tracking-wider">Clinical Ovulation Forecast:</h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-semibold">Ovulation Day:</span>
                          <strong className="text-base text-rose-600 block">{ovulationResult.ovulationDate}</strong>
                          <span className="text-3xs text-slate-500 font-normal">Peak LH Hormone Surge</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-semibold">6-Day Fertile Window:</span>
                          <strong className="text-sm text-teal-900 block">{ovulationResult.fertileWindow}</strong>
                          <span className="text-3xs text-slate-500 font-normal">High conception viability</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-semibold">Peak Intercourse Timing:</span>
                          <strong className="text-sm text-purple-900 block">{ovulationResult.peakIntercourse}</strong>
                          <span className="text-3xs text-slate-500 font-normal">85%+ pregnancy probability</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between text-3xs text-slate-600 pt-2 border-t border-teal-200/60">
                        <span>Next Period: <strong>{ovulationResult.nextPeriod}</strong></span>
                        <span>Viable Pregnancy Test Date: <strong>{ovulationResult.testViableDate}</strong></span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 2. BETA HCG CALCULATOR */}
              {activeSlug === 'hcg-calculator' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">First hCG Level (mIU/mL)</label>
                      <input
                        type="number"
                        value={hcg1}
                        onChange={(e) => setHcg1(Number(e.target.value))}
                        className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">Second hCG Level (mIU/mL)</label>
                      <input
                        type="number"
                        value={hcg2}
                        onChange={(e) => setHcg2(Number(e.target.value))}
                        className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">Interval Between Blood Tests</label>
                      <select
                        value={hcgHours}
                        onChange={(e) => setHcgHours(Number(e.target.value))}
                        className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold"
                      >
                        <option value={24}>24 Hours (1 Day)</option>
                        <option value={48}>48 Hours (2 Days)</option>
                        <option value={72}>72 Hours (3 Days)</option>
                      </select>
                    </div>
                  </div>

                  {hcgResult && (
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 animate-fadeIn">
                      <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">Quantitative hCG Kinetic Analysis:</h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block">Doubling Velocity:</span>
                          <strong className="text-xl text-teal-900 block">{hcgResult.doublingHours} Hours</strong>
                          <span className="text-3xs text-slate-500">Benchmark: 48 to 72 hours</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block">Estimated 48h Rise:</span>
                          <strong className="text-xl text-rose-600 block">+{hcgResult.increase48}%</strong>
                          <span className="text-3xs text-slate-500">Min. healthy: +66%</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block">Total Percentage Gain:</span>
                          <strong className="text-xl text-purple-900 block">+{hcgResult.increaseTotal}%</strong>
                          <span className="text-3xs text-slate-500">Over {hcgHours} hours</span>
                        </div>
                      </div>

                      <div className={`p-3.5 rounded-2xl border text-xs font-bold ${hcgResult.color}`}>
                        Assessment: {hcgResult.assessment}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 3. PREGNANCY TEST CALCULATOR */}
              {activeSlug === 'pregnancy-test-calculator' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">First Day of Last Period</label>
                      <input
                        type="date"
                        value={ptLmp}
                        onChange={(e) => setPtLmp(e.target.value)}
                        className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">Average Cycle Length ({ptCycle} Days)</label>
                      <input
                        type="range"
                        min="21"
                        max="40"
                        value={ptCycle}
                        onChange={(e) => setPtCycle(Number(e.target.value))}
                        className="w-full accent-teal-600 mt-3"
                      />
                    </div>
                  </div>

                  {ptResult && (
                    <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-teal-200 space-y-4 animate-fadeIn">
                      <h4 className="text-xs font-black uppercase text-teal-900 tracking-wider">Earliest Testing Dates Matrix:</h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-4 rounded-2xl bg-white border border-teal-200">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Early Strip (10 mIU)</span>
                          <strong className="text-base text-teal-900 block">{ptResult.earlyTestDate}</strong>
                          <span className="text-3xs text-slate-500">10–12 Days Post-Ovulation</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-teal-200">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Standard Test (25 mIU)</span>
                          <strong className="text-base text-rose-600 block">{ptResult.missedPeriodDate}</strong>
                          <span className="text-3xs text-slate-500">&gt;99% Accuracy on Missed Period</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-teal-200">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Blood Serum Test (1 mIU)</span>
                          <strong className="text-base text-purple-900 block">{ptResult.bloodTestDate}</strong>
                          <span className="text-3xs text-slate-500">Quantitative Lab Confirmation</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 4. MENSTRUAL CYCLE CALCULATOR */}
              {activeSlug === 'menstrual-cycle-calculator' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">First Day of Last Period</label>
                      <input
                        type="date"
                        value={mcLmp}
                        onChange={(e) => setMcLmp(e.target.value)}
                        className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">Cycle Length ({mcCycle}d)</label>
                      <input
                        type="range"
                        min="21"
                        max="40"
                        value={mcCycle}
                        onChange={(e) => setMcCycle(Number(e.target.value))}
                        className="w-full accent-teal-600 mt-3"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">Bleeding Days ({mcPeriod}d)</label>
                      <input
                        type="range"
                        min="2"
                        max="8"
                        value={mcPeriod}
                        onChange={(e) => setMcPeriod(Number(e.target.value))}
                        className="w-full accent-rose-600 mt-3"
                      />
                    </div>
                  </div>

                  {mcResult && (
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">Current Cycle Day {mcResult.cycleDay}:</h4>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${mcResult.color}`}>
                          {mcResult.icon} {mcResult.phase}
                        </span>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Energy State</span>
                          <strong className="text-slate-900 block text-sm">{mcResult.energy}</strong>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Recommended Workout</span>
                          <strong className="text-slate-900 block text-sm">{mcResult.workout}</strong>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Phase Nutrition</span>
                          <strong className="text-slate-900 block text-sm">{mcResult.food}</strong>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 5. PERIOD FORECAST CALCULATOR */}
              {activeSlug === 'period-calculator' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">First Day of Last Period</label>
                      <input
                        type="date"
                        value={pfLmp}
                        onChange={(e) => setPfLmp(e.target.value)}
                        className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">Cycle Length ({pfCycle} Days)</label>
                      <input
                        type="range"
                        min="21"
                        max="40"
                        value={pfCycle}
                        onChange={(e) => setPfCycle(Number(e.target.value))}
                        className="w-full accent-rose-600 mt-3"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">6-Month Menstrual Forecast:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {pfResult.map((c) => (
                        <div key={c.cycleIndex} className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 text-xs space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="text-3xs font-bold text-rose-600 uppercase">Cycle #{c.cycleIndex}</span>
                            <span className="text-xs">🩸</span>
                          </div>
                          <div className="text-sm font-black text-rose-950">
                            {c.periodRange}
                          </div>
                          <div className="text-3xs text-slate-500 space-y-0.5">
                            <div>PMS Alert: <strong>{c.pmsAlert}</strong></div>
                            <div>Ovulation: <strong>{c.ovulationDate}</strong></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* 6. IMPLANTATION CALCULATOR */}
              {activeSlug === 'implantation-calculator' && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-3xs font-bold text-slate-700 uppercase">Estimated Ovulation Date</label>
                    <input
                      type="date"
                      value={impOvu}
                      onChange={(e) => setImpOvu(e.target.value)}
                      className="w-full max-w-sm p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold"
                    />
                  </div>

                  {impResult && (
                    <div className="p-6 rounded-3xl bg-gradient-to-r from-teal-50 to-purple-50 border border-teal-200 space-y-4 animate-fadeIn">
                      <h4 className="text-xs font-black uppercase text-teal-900 tracking-wider">Blastocyst Implantation Timeline:</h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-4 rounded-2xl bg-white border border-teal-200">
                          <span className="text-3xs text-slate-400 block">Implantation Window:</span>
                          <strong className="text-sm text-teal-900 block">{impResult.window}</strong>
                          <span className="text-3xs text-slate-500">6 to 12 Days Post-Ovulation</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-teal-200">
                          <span className="text-3xs text-slate-400 block">Peak Implantation Day:</span>
                          <strong className="text-sm text-purple-900 block">{impResult.peakDay}</strong>
                          <span className="text-3xs text-slate-500">Spotting most likely here</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-teal-200">
                          <span className="text-3xs text-slate-400 block">Home Pregnancy Test Date:</span>
                          <strong className="text-sm text-emerald-900 block">{impResult.homeTestViable}</strong>
                          <span className="text-3xs text-slate-500">hCG surpasses 25 mIU</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 7. WEEKS TO MONTHS CALCULATOR */}
              {activeSlug === 'pregnancy-weeks-to-months-calculator' && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <label className="text-3xs font-bold text-slate-700 uppercase">Current Gestational Week ({wmWeek} Weeks)</label>
                    <input
                      type="range"
                      min="1"
                      max="40"
                      value={wmWeek}
                      onChange={(e) => setWmWeek(Number(e.target.value))}
                      className="w-full accent-emerald-600 mt-2"
                    />
                  </div>

                  <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 space-y-4 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-black text-emerald-950">Week {wmWeek} Gestational Conversion:</h4>
                      <span className="text-3xs font-bold px-3 py-1 rounded-full bg-emerald-600 text-white">
                        {wmResult.trimester}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-4 rounded-2xl bg-white border border-emerald-200">
                        <span className="text-3xs text-slate-400 block font-bold uppercase">Pregnancy Month</span>
                        <strong className="text-xl text-emerald-900 block">{wmResult.month}</strong>
                      </div>

                      <div className="p-4 rounded-2xl bg-white border border-emerald-200">
                        <span className="text-3xs text-slate-400 block font-bold uppercase">Fetal Stage</span>
                        <strong className="text-sm text-slate-900 block">{wmResult.stage}</strong>
                      </div>

                      <div className="p-4 rounded-2xl bg-white border border-emerald-200">
                        <span className="text-3xs text-slate-400 block font-bold uppercase">Countdown</span>
                        <strong className="text-xl text-rose-600 block">{wmResult.daysLeft} Days</strong>
                        <span className="text-3xs text-slate-500">Until 40-week delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* 8. PREGNANCY DUE DATE CALCULATOR */}
              {activeSlug === 'due-date-calculator' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">Calculation Method</label>
                      <select
                        value={ddMethod}
                        onChange={(e) => setDdMethod(e.target.value as any)}
                        className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold"
                      >
                        <option value="lmp">First Day of LMP</option>
                        <option value="conception">Exact Conception Date</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">Reference Date</label>
                      <input
                        type="date"
                        value={ddDate}
                        onChange={(e) => setDdDate(e.target.value)}
                        className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold"
                      />
                    </div>

                    {ddMethod === 'lmp' && (
                      <div className="space-y-1">
                        <label className="text-3xs font-bold text-slate-700 uppercase">Cycle Length ({ddCycle}d)</label>
                        <input
                          type="range"
                          min="21"
                          max="40"
                          value={ddCycle}
                          onChange={(e) => setDdCycle(Number(e.target.value))}
                          className="w-full accent-teal-600 mt-3"
                        />
                      </div>
                    )}
                  </div>

                  {ddResult && (
                    <div className="p-6 rounded-3xl bg-gradient-to-r from-rose-50 via-teal-50 to-purple-50 border border-teal-200 space-y-4 animate-fadeIn">
                      <h4 className="text-xs font-black uppercase text-teal-900 tracking-wider">Estimated Due Date &amp; Gestational Age:</h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Estimated Due Date (EDD)</span>
                          <strong className="text-xl text-rose-600 block">{ddResult.edd}</strong>
                          <span className="text-3xs text-slate-500">40 Weeks full term</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Gestational Age Today</span>
                          <strong className="text-lg text-teal-900 block">{ddResult.gestationalAge}</strong>
                          <span className="text-3xs text-slate-500">{ddResult.trimester}</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Days Remaining</span>
                          <strong className="text-xl text-purple-900 block">{ddResult.daysUntilDue} Days</strong>
                          <span className="text-3xs text-slate-500">To baby arrival</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 9. IVF DUE DATE CALCULATOR */}
              {activeSlug === 'ivf-due-date-calculator' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">IVF Procedure Type</label>
                      <select
                        value={ivfType}
                        onChange={(e) => setIvfType(e.target.value as any)}
                        className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold"
                      >
                        <option value="day5">Day-5 Blastocyst Transfer (FET / Fresh)</option>
                        <option value="day3">Day-3 Embryo Transfer</option>
                        <option value="retrieval">Egg Retrieval Date / ICSI</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">Procedure Date</label>
                      <input
                        type="date"
                        value={ivfDate}
                        onChange={(e) => setIvfDate(e.target.value)}
                        className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold"
                      />
                    </div>
                  </div>

                  {ivfResult && (
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4 animate-fadeIn">
                      <h4 className="text-xs font-black uppercase text-purple-900 tracking-wider">Precision IVF Gestational Report:</h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-4 rounded-2xl bg-white border border-purple-200">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">IVF Due Date (EDD)</span>
                          <strong className="text-xl text-rose-600 block">{ivfResult.edd}</strong>
                          <span className="text-3xs text-slate-500">Precise to the day</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-purple-200">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Gestational Age</span>
                          <strong className="text-lg text-purple-900 block">{ivfResult.gestationalAge}</strong>
                          <span className="text-3xs text-slate-500">Equivalent clinical LMP</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-purple-200">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Viability Milestones</span>
                          <strong className="text-xs text-teal-900 block">Beta: {ivfResult.betaHcgTestDate}</strong>
                          <span className="text-3xs text-slate-500">Scan: {ivfResult.firstViabilityScan}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* 10. ULTRASOUND DUE DATE CALCULATOR */}
              {activeSlug === 'due-date-by-ultrasound' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">Ultrasound Scan Date</label>
                      <input
                        type="date"
                        value={usDate}
                        onChange={(e) => setUsDate(e.target.value)}
                        className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">Gestational Weeks on Report</label>
                      <input
                        type="number"
                        min="5"
                        max="38"
                        value={usWeeks}
                        onChange={(e) => setUsWeeks(Number(e.target.value))}
                        className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-3xs font-bold text-slate-700 uppercase">Extra Days on Report</label>
                      <input
                        type="number"
                        min="0"
                        max="6"
                        value={usDays}
                        onChange={(e) => setUsDays(Number(e.target.value))}
                        className="w-full p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold"
                      />
                    </div>
                  </div>

                  {usResult && (
                    <div className="p-6 rounded-3xl bg-teal-50/80 border border-teal-200 space-y-4 animate-fadeIn">
                      <h4 className="text-xs font-black uppercase text-teal-900 tracking-wider">Sonographic Biometric Dating Result:</h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="p-4 rounded-2xl bg-white border border-teal-200">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Official Ultrasound EDD</span>
                          <strong className="text-2xl text-teal-900 block">{usResult.officialEdd}</strong>
                          <span className="text-3xs text-slate-500">Gold standard sonographic delivery target</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-teal-200">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Gestational Age Today</span>
                          <strong className="text-xl text-slate-900 block">{usResult.gaToday}</strong>
                          <span className="text-3xs text-slate-500">Based on {usResult.scanSummary}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ── SYMPTOMS & BIOLOGICAL INDICATORS TO WATCH ── */}
              {activeCalc.symptomsToWatch && activeCalc.symptomsToWatch.length > 0 && (
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-rose-600" />
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-900">
                      Key Biological Symptoms &amp; Clinical Indicators:
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeCalc.symptomsToWatch.map((sym, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/80 flex items-start gap-3">
                        <span className="text-2xl flex-shrink-0 mt-0.5">{sym.icon}</span>
                        <div className="space-y-0.5">
                          <strong className="text-xs font-bold text-slate-900 block">{sym.name}</strong>
                          <p className="text-3xs text-slate-600 font-normal leading-relaxed">{sym.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── COMPREHENSIVE CLINICAL GUIDE & DEEP DIVE ARTICLE ── */}
              {activeCalc.clinicalGuide && (
                <div className="pt-4 border-t border-slate-100 space-y-4">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-purple-600" />
                    <h3 className="text-base font-black text-slate-950">
                      {activeCalc.clinicalGuide.heading}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {activeCalc.clinicalGuide.sections.map((sec, idx) => (
                      <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-2">
                        <h4 className="text-xs font-bold text-slate-900 flex items-center gap-2">
                          <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-3xs font-black flex items-center justify-center">
                            {idx + 1}
                          </span>
                          <span>{sec.subheading}</span>
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed font-normal pl-7">
                          {sec.content}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* ── RED FLAGS & WHEN TO SEE A DOCTOR ── */}
              {activeCalc.whenToSeeDoctor && activeCalc.whenToSeeDoctor.length > 0 && (
                <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-rose-900 font-bold text-xs uppercase">
                      <AlertTriangle className="w-4 h-4 text-rose-600" />
                      <span>When to Consult an Obstetrician / Gynecologist (Clinical Triage):</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-rose-950 font-medium">
                    {activeCalc.whenToSeeDoctor.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <AlertCircle className="w-3.5 h-3.5 text-rose-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-rose-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <span className="text-3xs text-rose-800 font-normal">
                      Need immediate triage? Chat with Dr. Arya AI Medical Council 24/7.
                    </span>
                    <a
                      href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20used%20the%20clinical%20calculator%20and%20need%20healthcare%20guidance"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#25d366] text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-2xs hover:opacity-90"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp Dr. Arya (24/7)</span>
                    </a>
                  </div>
                </div>
              )}

              {/* ── CLINICAL METHOD & FORMULA EXPLANATION ── */}
              <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 text-xs">
                <div className="flex items-center gap-2 text-slate-900 font-bold">
                  <Info className="w-4 h-4 text-teal-600" />
                  <span>Clinical Calculation Method: {activeCalc.clinicalMethod}</span>
                </div>
                <p className="text-slate-600 leading-relaxed font-normal">
                  {activeCalc.formulaExplanation}
                </p>

                <div className="pt-2 border-t border-slate-200/60 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-3xs text-slate-500">
                  <span><strong>Medical Consensus References:</strong> {activeCalc.medicalReferences.join(' · ')}</span>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(`🌸 Meditrust Calculator: ${activeCalc.title} — https://www.meditrustai.in/tools/${activeCalc.slug}`)
                      alert('Calculator link copied to clipboard!')
                    }}
                    className="text-teal-700 font-bold hover:underline flex items-center gap-1 flex-shrink-0"
                  >
                    <Share2 className="w-3 h-3" />
                    <span>Share Tool</span>
                  </button>
                </div>
              </div>

              {/* ── FREQUENTLY ASKED QUESTIONS ── */}
              {activeCalc.faq && activeCalc.faq.length > 0 && (
                <div className="space-y-3 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-teal-600" />
                    <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">
                      Frequently Asked Questions ({activeCalc.shortTitle}):
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {activeCalc.faq.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200/80 text-xs space-y-1">
                        <strong className="text-slate-900 block font-bold">Q: {item.question}</strong>
                        <p className="text-slate-600 font-normal leading-relaxed">A: {item.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
