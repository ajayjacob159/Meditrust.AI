'use client'

import { useState, useMemo, useEffect } from 'react'
import Link from 'next/link'
import {
  Calculator, Sparkles, Calendar, Heart, Baby, CheckCircle2, ArrowRight,
  ChevronRight, MessageCircle, ShieldCheck, Check, Search, Lock, Share2,
  Info, Stethoscope, Clock, Zap, Activity, AlertTriangle, FileText, Download,
  CheckCircle, AlertCircle, HelpCircle, BookOpen, UserCheck, RefreshCw,
  TrendingUp, BarChart2, Flame, Droplets, Sun, Moon, BellRing, Bookmark,
  CheckSquare, ArrowUpRight
} from 'lucide-react'
import { FLO_10_CALCULATORS, FloCalculatorDef } from '@/data/floCalculatorsData'

interface Props {
  initialSlug?: string
}

export default function FloCalculatorsHubClient({ initialSlug }: Props) {
  const [activeSlug, setActiveSlug] = useState<string>(initialSlug || 'ovulation-calculator')
  const [searchQuery, setSearchQuery] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string>('All')
  const [savedSuccess, setSavedSuccess] = useState(false)
  const [copiedSummary, setCopiedSummary] = useState(false)

  // ── FORM STATES ──
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

  // Load from LocalStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('meditrust_calculator_profile')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (parsed.ovLmp) setOvLmp(parsed.ovLmp)
        if (parsed.ovCycle) setOvCycle(parsed.ovCycle)
        if (parsed.mcLmp) setMcLmp(parsed.mcLmp)
        if (parsed.mcCycle) setMcCycle(parsed.mcCycle)
        if (parsed.ddDate) setDdDate(parsed.ddDate)
        if (parsed.ddCycle) setDdCycle(parsed.ddCycle)
        if (parsed.ivfDate) setIvfDate(parsed.ivfDate)
      }
    } catch (e) {}
  }, [])

  // Save to LocalStorage
  const handleSaveProfile = () => {
    try {
      const data = {
        ovLmp, ovCycle, mcLmp, mcCycle, ddDate, ddCycle, ivfDate, lastUpdated: new Date().toISOString()
      }
      localStorage.setItem('meditrust_calculator_profile', JSON.stringify(data))
      setSavedSuccess(true)
      setTimeout(() => setSavedSuccess(false), 3000)
    } catch (e) {}
  }

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

  // ── 1. OVULATION REAL-TIME ENGINE ──
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

    const today = new Date()
    const currentCycleDay = Math.max(1, Math.min(ovCycle, Math.floor((today.getTime() - lmp.getTime()) / 86400000) % ovCycle + 1))
    const ovulationDayNumber = ovCycle - ovLuteal

    // Daily matrix for 7 key days around ovulation
    const timelineDays = []
    const fmtShort = (d: Date) => d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })
    const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

    for (let offset = -5; offset <= 1; offset++) {
      const dayDate = new Date(ovuDate.getTime() + offset * 86400000)
      let chance = 'High Fertility'
      let badgeColor = 'bg-rose-100 text-rose-800'
      let percent = '75%'
      if (offset === 0) {
        chance = 'Peak: Ovulation Day'
        badgeColor = 'bg-rose-600 text-white font-black'
        percent = '98%'
      } else if (offset === -1 || offset === -2) {
        chance = 'Peak Fertile Window'
        badgeColor = 'bg-rose-500 text-white font-bold'
        percent = '92%'
      } else if (offset === 1) {
        chance = 'Egg Viability (12-24h)'
        badgeColor = 'bg-purple-100 text-purple-800'
        percent = '45%'
      } else {
        chance = 'Sperm Longevity Window'
        badgeColor = 'bg-teal-100 text-teal-800'
        percent = '60%'
      }

      timelineDays.push({
        label: offset === 0 ? 'Ovulation Day (O)' : offset < 0 ? `O - ${Math.abs(offset)}d` : `O + ${offset}d`,
        date: fmtShort(dayDate),
        chance,
        badgeColor,
        percent
      })
    }

    // Today's status
    let todayStatus = 'Low Fertility'
    let todayColor = 'text-slate-600 bg-slate-100'
    if (currentCycleDay === ovulationDayNumber) {
      todayStatus = '🚨 Peak Fertility: Ovulation Occurring Today!'
      todayColor = 'text-rose-700 bg-rose-100 font-black'
    } else if (currentCycleDay >= ovulationDayNumber - 2 && currentCycleDay < ovulationDayNumber) {
      todayStatus = '⚡ Prime Conception Window (Peak LH Surge)'
      todayColor = 'text-rose-700 bg-rose-50 font-bold'
    } else if (currentCycleDay >= ovulationDayNumber - 5 && currentCycleDay < ovulationDayNumber - 2) {
      todayStatus = '💧 Fertile Window Open (Egg-White Mucus)'
      todayColor = 'text-teal-700 bg-teal-50 font-bold'
    } else if (currentCycleDay > ovulationDayNumber + 1) {
      todayStatus = '🍂 Luteal Phase (Progesterone Rise)'
      todayColor = 'text-amber-700 bg-amber-50'
    }

    return {
      ovulationDate: fmt(ovuDate),
      fertileWindow: `${fmt(fertileStart)} – ${fmt(fertileEnd)}`,
      peakIntercourse: `${fmt(peakStart)} – ${fmt(ovuDate)}`,
      nextPeriod: fmt(nextPeriod),
      testViableDate: fmt(testDate),
      currentCycleDay,
      ovulationDayNumber,
      timelineDays,
      todayStatus,
      todayColor,
      daysToOvulation: Math.max(0, ovulationDayNumber - currentCycleDay)
    }
  }, [ovLmp, ovCycle, ovLuteal])

  // ── 2. BETA HCG REAL-TIME ENGINE ──
  const hcgResult = useMemo(() => {
    if (hcg1 <= 0 || hcg2 <= 0 || hcgHours <= 0) return null
    const doublingTimeHours = (hcgHours * Math.LN2) / Math.log(hcg2 / hcg1)
    const increasePercent48 = (Math.pow(hcg2 / hcg1, 48 / hcgHours) - 1) * 100
    const increaseTotal = ((hcg2 - hcg1) / hcg1) * 100

    let assessment = 'Normal healthy kinetic rise (>66% increase in 48h)'
    let color = 'text-emerald-700 bg-emerald-50 border-emerald-200'
    let meterWidth = '65%'
    let statusCategory: 'rapid' | 'normal' | 'slow' | 'declining' = 'normal'

    if (hcg2 < hcg1) {
      assessment = 'Declining hCG levels — immediate physician consultation required to assess viability.'
      color = 'text-rose-800 bg-rose-50 border-rose-200'
      meterWidth = '15%'
      statusCategory = 'declining'
    } else if (doublingTimeHours < 36) {
      assessment = 'Rapid doubling (<36h) — frequent in multiple gestations (twins/triplets) or earlier conception.'
      color = 'text-blue-800 bg-blue-50 border-blue-200'
      meterWidth = '95%'
      statusCategory = 'rapid'
    } else if (doublingTimeHours > 72) {
      assessment = 'Slower than average doubling (>72h) — ultrasound evaluation recommended to rule out ectopic risk.'
      color = 'text-amber-800 bg-amber-50 border-amber-200'
      meterWidth = '35%'
      statusCategory = 'slow'
    }

    // Projected future hCG in 48h and 96h
    const projectedHcg48 = Math.round(hcg2 * Math.pow(2, 48 / doublingTimeHours))
    const projectedHcg96 = Math.round(hcg2 * Math.pow(2, 96 / doublingTimeHours))

    // Ultrasound milestones check
    const sacVisible = hcg2 >= 1500
    const yolkVisible = hcg2 >= 3500
    const cardiacVisible = hcg2 >= 6000

    return {
      doublingHours: doublingTimeHours.toFixed(1),
      increase48: increasePercent48.toFixed(1),
      increaseTotal: increaseTotal.toFixed(1),
      assessment,
      color,
      meterWidth,
      statusCategory,
      projectedHcg48: isNaN(projectedHcg48) || projectedHcg48 < 0 ? 0 : projectedHcg48,
      projectedHcg96: isNaN(projectedHcg96) || projectedHcg96 < 0 ? 0 : projectedHcg96,
      sacVisible,
      yolkVisible,
      cardiacVisible
    }
  }, [hcg1, hcg2, hcgHours])

  // ── 3. PREGNANCY TEST DPO REAL-TIME ENGINE ──
  const ptResult = useMemo(() => {
    const lmp = new Date(ptLmp)
    if (isNaN(lmp.getTime())) return null
    const ovuDate = new Date(lmp.getTime() + (ptCycle - 14) * 86400000)
    const dpo10Early = new Date(ovuDate.getTime() + 10 * 86400000)
    const dpo14Missed = new Date(lmp.getTime() + ptCycle * 86400000)
    const dpo16Blood = new Date(ovuDate.getTime() + 12 * 86400000)

    const today = new Date()
    const currentDpo = Math.floor((today.getTime() - ovuDate.getTime()) / 86400000)

    const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })

    const dpoScale = [
      { dpo: 8, accuracy: '12%', status: 'Too Early — High false negative rate', color: 'bg-slate-100 text-slate-700' },
      { dpo: 10, accuracy: '54%', status: 'Early Detection Strip (10 mIU)', color: 'bg-teal-100 text-teal-800' },
      { dpo: 12, accuracy: '86%', status: 'Standard Home Strip (25 mIU)', color: 'bg-rose-100 text-rose-800' },
      { dpo: 14, accuracy: '99%+', status: 'Day of Missed Period (Gold Standard)', color: 'bg-emerald-100 text-emerald-800 font-bold' }
    ]

    return {
      earlyTestDate: fmt(dpo10Early),
      missedPeriodDate: fmt(dpo14Missed),
      bloodTestDate: fmt(dpo16Blood),
      currentDpo: Math.max(0, currentDpo),
      dpoScale,
      canTestToday: currentDpo >= 10
    }
  }, [ptLmp, ptCycle])

  // ── 4. MENSTRUAL CYCLE & HORMONE SYNC ENGINE ──
  const mcResult = useMemo(() => {
    const lmp = new Date(mcLmp)
    if (isNaN(lmp.getTime())) return null
    const today = new Date()
    const diffDays = Math.floor((today.getTime() - lmp.getTime()) / 86400000) % mcCycle + 1

    let phase = '1. Menstrual Phase'
    let energy = 'Restorative & Intuitive'
    let workout = 'Gentle yin yoga, walking, mobility'
    let food = 'Iron-rich broths, spinach, warming soups'
    let icon = '🩸'
    let color = 'text-rose-700 bg-rose-50'
    let estrogenLevel = 20
    let progesteroneLevel = 10
    let lhLevel = 15
    let calorieShift = 'Baseline Maintenance'
    let skinState = 'Sensitive & Low Sebum'

    if (diffDays > mcPeriod && diffDays <= mcCycle - 16) {
      phase = '2. Follicular Phase'
      energy = 'High Stamina, Creative & Sharp'
      workout = 'HIIT, tempo runs, heavy resistance lifts'
      food = 'Fermented probiotics, avocados, pumpkin seeds'
      icon = '🌱'
      color = 'text-emerald-700 bg-emerald-50'
      estrogenLevel = 80
      progesteroneLevel = 15
      lhLevel = 25
      calorieShift = 'High Carb Tolerance'
      skinState = 'Hydrated, Radiant & Glowing'
    } else if (diffDays > mcCycle - 16 && diffDays <= mcCycle - 12) {
      phase = '3. Ovulatory Phase'
      energy = 'Magnetic, Peak Confidence & Verbal Fluency'
      workout = 'Max effort spin, PR lifting, social sports'
      food = 'Antioxidant berries, cruciferous vegetables, zinc'
      icon = '🌸'
      color = 'text-purple-700 bg-purple-50'
      estrogenLevel = 95
      progesteroneLevel = 35
      lhLevel = 98
      calorieShift = 'Peak Metabolism'
      skinState = 'Peak Collagen Elasticity'
    } else if (diffDays > mcCycle - 12) {
      phase = '4. Luteal Phase'
      energy = 'Detail-Oriented, Deep Focus & Grounded'
      workout = 'Mat Pilates, steady-state zone 2, slow flow'
      food = 'Sweet potatoes, dark chocolate (magnesium), quinoa'
      icon = '🍂'
      color = 'text-amber-700 bg-amber-50'
      estrogenLevel = 50
      progesteroneLevel = 90
      lhLevel = 10
      calorieShift = '+150 to +300 kcal/day (Progesterone thermogenesis)'
      skinState = 'Increased Sebum — Cleanse T-zone'
    }

    return {
      cycleDay: diffDays,
      phase,
      energy,
      workout,
      food,
      icon,
      color,
      daysToNext: mcCycle - diffDays,
      estrogenLevel,
      progesteroneLevel,
      lhLevel,
      calorieShift,
      skinState
    }
  }, [mcLmp, mcCycle, mcPeriod])

  // ── 5. PERIOD 6-MONTH PREDICTOR ENGINE ──
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
        ovulationDate: fmt(ovuDate),
        monthLabel: pStart.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
      })
    }
    return dates
  }, [pfLmp, pfCycle])

  // ── 6. IMPLANTATION ENGINE ──
  const impResult = useMemo(() => {
    const ovu = new Date(impOvu)
    if (isNaN(ovu.getTime())) return null
    const fmt = (d: Date) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    const dpo6 = new Date(ovu.getTime() + 6 * 86400000)
    const dpo9 = new Date(ovu.getTime() + 9 * 86400000)
    const dpo12 = new Date(ovu.getTime() + 12 * 86400000)
    const testDate = new Date(ovu.getTime() + 14 * 86400000)

    const today = new Date()
    const currentDpo = Math.floor((today.getTime() - ovu.getTime()) / 86400000)

    const stages = [
      { dpo: '0–1 DPO', title: 'Fertilization in Ampulla', desc: 'Sperm fuses with oocyte, forming a single-cell zygote.' },
      { dpo: '2–4 DPO', title: 'Fallopian Transit & Morula', desc: 'Rapid cell cleavage into 16–32 cells as it travels toward the uterus.' },
      { dpo: '5–6 DPO', title: 'Blastocyst Hatching', desc: '100+ cell blastocyst hatches from the zona pellucida into the uterine cavity.' },
      { dpo: '7–9 DPO', title: 'Endometrial Apposition & Invasion', desc: 'PEAK IMPLANTATION: Trophoblast burrows into maternal endometrium (light spotting possible).' },
      { dpo: '10–12 DPO', title: 'Maternal Blood Connection & hCG Surge', desc: 'Placental lacunae connect with maternal spiral arteries. Rapid hCG secretion into blood.' }
    ]

    return {
      window: `${fmt(dpo6)} – ${fmt(dpo12)}`,
      peakDay: fmt(dpo9),
      homeTestViable: fmt(testDate),
      currentDpo: Math.max(0, currentDpo),
      stages
    }
  }, [impOvu])

  // ── 7. WEEKS TO MONTHS & FRUIT VISUALIZER ──
  const wmResult = useMemo(() => {
    let month = 1
    let trimester = 1
    let stage = 'Embryonic organogenesis'
    let fruit = 'Poppy Seed (1 mm)'
    let fruitIcon = '🌱'

    if (wmWeek >= 1 && wmWeek <= 4) {
      month = 1; trimester = 1; stage = 'Blastocyst implantation & neural plate formation'; fruit = 'Poppy Seed (1 mm)'; fruitIcon = '🌱'
    } else if (wmWeek <= 8) {
      month = 2; trimester = 1; stage = 'First heartbeat & limb bud development'; fruit = 'Raspberry (1.6 cm)'; fruitIcon = '🫐'
    } else if (wmWeek <= 13) {
      month = 3; trimester = 1; stage = 'Reflexes, vocal cords & fingernails'; fruit = 'Lime (5.4 cm)'; fruitIcon = '🍋'
    } else if (wmWeek <= 17) {
      month = 4; trimester = 2; stage = 'Facial expressions, eyebrows & hearing'; fruit = 'Avocado (11.6 cm)'; fruitIcon = '🥑'
    } else if (wmWeek <= 21) {
      month = 5; trimester = 2; stage = 'Quickening flutter kicks & vernix coating'; fruit = 'Banana (25.6 cm)'; fruitIcon = '🍌'
    } else if (wmWeek <= 26) {
      month = 6; trimester = 2; stage = 'Viability milestone & eye opening'; fruit = 'Corn (30 cm)'; fruitIcon = '🌽'
    } else if (wmWeek <= 30) {
      month = 7; trimester = 3; stage = 'Brain tissue folds & fetal hiccups'; fruit = 'Eggplant (37.6 cm)'; fruitIcon = '🍆'
    } else if (wmWeek <= 35) {
      month = 8; trimester = 3; stage = 'Surfactant lung maturation & rapid weight gain'; fruit = 'Squash (42.4 cm)'; fruitIcon = '🍈'
    } else {
      month = 9; trimester = 3; stage = 'Full term delivery readiness & skull engagement'; fruit = 'Watermelon (51.2 cm, 3.4 kg)'; fruitIcon = '🍉'
    }

    const progressPercent = Math.min(100, Math.round((wmWeek / 40) * 100))

    return {
      month: `Month ${month} of 9`,
      trimester: `${trimester === 1 ? '1st' : trimester === 2 ? '2nd' : '3rd'} Trimester`,
      stage,
      fruit,
      fruitIcon,
      progressPercent,
      daysLeft: (40 - wmWeek) * 7
    }
  }, [wmWeek])

  // ── 8. PREGNANCY DUE DATE (EDD) ENGINE ──
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
    const progressPercent = Math.max(0, Math.min(100, Math.round((gaDays / 280) * 100)))

    let trimester = '1st Trimester (Weeks 1–13)'
    if (gaWeeks >= 14 && gaWeeks <= 26) trimester = '2nd Trimester (Weeks 14–26)'
    else if (gaWeeks >= 27) trimester = '3rd Trimester (Weeks 27–40+)'

    // Antenatal Checkpoint Schedule
    const milestones = [
      { name: '1st Viability Scan', date: fmt(new Date(lmpBase.getTime() + 7 * 7 * 86400000)), week: 'Week 7' },
      { name: 'NT Scan & Dual Marker', date: fmt(new Date(lmpBase.getTime() + 12 * 7 * 86400000)), week: 'Week 12' },
      { name: 'TIFFA Anomaly Scan', date: fmt(new Date(lmpBase.getTime() + 20 * 7 * 86400000)), week: 'Week 20' },
      { name: 'OGTT Glucose Screen', date: fmt(new Date(lmpBase.getTime() + 26 * 7 * 86400000)), week: 'Week 26' },
      { name: 'Full Term Estimated Delivery', date: fmt(edd), week: 'Week 40' }
    ]

    return {
      edd: fmt(edd),
      gestationalAge: `${gaWeeks}w ${gaRemDays}d`,
      daysUntilDue: Math.max(0, daysUntil),
      trimester,
      progressPercent,
      milestones
    }
  }, [ddMethod, ddDate, ddCycle])

  // ── 9. IVF DUE DATE ENGINE ──
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

    // Two-week wait counter
    const daysPostTransfer = Math.floor((today.getTime() - proc.getTime()) / 86400000)

    return {
      edd: fmt(edd),
      gestationalAge: `${gaWeeks} weeks ${gaRemDays} days`,
      betaHcgTestDate: fmt(betaTestDate),
      firstViabilityScan: fmt(firstScan),
      daysPostTransfer: Math.max(0, daysPostTransfer),
      lmpEquivalent: fmt(lmpEquiv)
    }
  }, [ivfType, ivfDate])

  // ── 10. ULTRASOUND DUE DATE & ACOG RECONCILIATION ENGINE ──
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
      scanSummary: `${usWeeks}w ${usDays}d on ${fmt(scan)}`,
      crlGuideline: usWeeks < 9 ? 'ACOG Rule: If LMP differs by >5 days, change EDD to Ultrasound.' : 'ACOG Rule: If LMP differs by >7 days, change EDD to Ultrasound.'
    }
  }, [usDate, usWeeks, usDays])

  // ── COPY SUMMARY HANDLER ──
  const handleCopySummary = () => {
    const text = `🌸 Meditrust AI Real-Time Clinical Tool Report:
Tool: ${activeCalc.title}
Active Selection: ${activeSlug}
Computed Date: ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
Live URL: https://www.meditrustai.in/tools/${activeCalc.slug}`
    navigator.clipboard.writeText(text)
    setCopiedSummary(true)
    setTimeout(() => setCopiedSummary(false), 3000)
  }

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans select-none">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/womens-health" className="hover:text-rose-600 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">10 Clinical Real-Time Calculators</span>
        </nav>
      </div>

      {/* ── HERO BANNER ── */}
      <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-6">
        <div className="bg-gradient-to-br from-rose-50 via-teal-50/40 to-purple-50 rounded-3xl p-6 sm:p-10 border border-rose-100 shadow-sm relative overflow-hidden">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-rose-200 text-rose-700 text-xs font-bold shadow-2xs">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span>Real-Time Clinical Tracking Suite (Flo-Inspired)</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Evidence-Based <span className="text-rose-600">Calculators &amp; Real-Time Trackers</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Fully functional live computations for ovulation cycles, Beta-hCG doubling velocity, gestational EDD, IVF blastocyst transfers, and cycle phase syncing. Updated dynamically in real-time.
            </p>

            {/* Profile Save & Action Bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleSaveProfile}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-transform hover:scale-102"
              >
                <Bookmark className="w-3.5 h-3.5 text-rose-400" />
                <span>{savedSuccess ? 'Profile Saved Locally ✓' : 'Save My Cycle Profile (Real-Time)'}</span>
              </button>

              <button
                onClick={handleCopySummary}
                className="px-3.5 py-2 rounded-xl bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold flex items-center gap-1.5 shadow-2xs"
              >
                <Share2 className="w-3.5 h-3.5 text-teal-600" />
                <span>{copiedSummary ? 'Copied to Clipboard!' : 'Share Report'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── CALCULATOR SUITE MAIN GRID ── */}
      <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left 4 Cols: Navigation List & Search */}
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

              {/* ── 1. OVULATION CALCULATOR REAL-TIME TRACKER ── */}
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
                    <div className="space-y-4 animate-fadeIn">
                      
                      {/* Live Today Status Widget */}
                      <div className={`p-4 rounded-2xl border flex items-center justify-between text-xs ${ovulationResult.todayColor}`}>
                        <div className="flex items-center gap-2">
                          <Activity className="w-4 h-4 text-rose-600 animate-pulse" />
                          <span>Today: <strong>Cycle Day {ovulationResult.currentCycleDay}</strong> — {ovulationResult.todayStatus}</span>
                        </div>
                        <span className="text-3xs uppercase tracking-wider font-bold">Live Status</span>
                      </div>

                      {/* Main Results Grid */}
                      <div className="p-6 rounded-3xl bg-gradient-to-r from-rose-50 via-teal-50 to-purple-50 border border-teal-200 space-y-4">
                        <h4 className="text-xs font-black uppercase text-teal-900 tracking-wider">Clinical Ovulation Forecast:</h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                          <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                            <span className="text-3xs text-slate-400 block font-semibold">Estimated Ovulation Day:</span>
                            <strong className="text-lg text-rose-600 block">{ovulationResult.ovulationDate}</strong>
                            <span className="text-3xs text-slate-500 font-normal">Cycle Day {ovulationResult.ovulationDayNumber} (Peak LH)</span>
                          </div>

                          <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                            <span className="text-3xs text-slate-400 block font-semibold">6-Day Fertile Window:</span>
                            <strong className="text-sm text-teal-900 block">{ovulationResult.fertileWindow}</strong>
                            <span className="text-3xs text-slate-500 font-normal">Sperm viable in alkaline mucus</span>
                          </div>

                          <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                            <span className="text-3xs text-slate-400 block font-semibold">Peak Conception Days:</span>
                            <strong className="text-sm text-purple-900 block">{ovulationResult.peakIntercourse}</strong>
                            <span className="text-3xs text-slate-500 font-normal">85%+ biological probability</span>
                          </div>
                        </div>

                        {/* Interactive 7-Day Fertile Matrix */}
                        <div className="space-y-2 pt-2 border-t border-teal-200/60">
                          <span className="text-3xs font-black uppercase text-slate-700 tracking-wider block">
                            Daily Fertile Matrix &amp; Conception Probability:
                          </span>
                          <div className="grid grid-cols-2 sm:grid-cols-7 gap-1.5">
                            {ovulationResult.timelineDays.map((td, idx) => (
                              <div key={idx} className="p-2.5 rounded-xl bg-white/90 border border-teal-100 text-center space-y-1">
                                <span className="text-3xs font-bold text-slate-400 block">{td.label}</span>
                                <strong className="text-3xs text-slate-900 block leading-tight">{td.date}</strong>
                                <span className={`text-[9px] font-black px-1.5 py-0.5 rounded-md block truncate ${td.badgeColor}`}>
                                  {td.percent}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-3xs text-slate-600 pt-2 border-t border-teal-200/60">
                          <span>Next Expected Period: <strong>{ovulationResult.nextPeriod}</strong></span>
                          <span>Reliable Pregnancy Test: <strong>{ovulationResult.testViableDate}</strong></span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ── 2. BETA HCG REAL-TIME ENGINE ── */}
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
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-5 animate-fadeIn">
                      <h4 className="text-xs font-black uppercase text-slate-900 tracking-wider">Quantitative hCG Kinetic Analysis:</h4>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-semibold">Doubling Velocity:</span>
                          <strong className="text-2xl text-teal-900 block">{hcgResult.doublingHours} Hours</strong>
                          <span className="text-3xs text-slate-500">Benchmark: 48 to 72 hours</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-semibold">Estimated 48h Rise:</span>
                          <strong className="text-2xl text-rose-600 block">+{hcgResult.increase48}%</strong>
                          <span className="text-3xs text-slate-500">Min. healthy: +66%</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-semibold">Total Percentage Gain:</span>
                          <strong className="text-2xl text-purple-900 block">+{hcgResult.increaseTotal}%</strong>
                          <span className="text-3xs text-slate-500">Over {hcgHours} hours</span>
                        </div>
                      </div>

                      {/* Visual Kinetic Velocity Gauge Bar */}
                      <div className="space-y-1.5 p-4 rounded-2xl bg-white border border-slate-200">
                        <div className="flex items-center justify-between text-3xs font-bold">
                          <span>Doubling Speedometer</span>
                          <span className="text-teal-700">{hcgResult.doublingHours}h Doubling Time</span>
                        </div>
                        <div className="w-full h-3 rounded-full bg-slate-100 overflow-hidden relative">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              hcgResult.statusCategory === 'declining' ? 'bg-rose-500' :
                              hcgResult.statusCategory === 'slow' ? 'bg-amber-500' :
                              hcgResult.statusCategory === 'rapid' ? 'bg-blue-500' : 'bg-emerald-500'
                            }`}
                            style={{ width: hcgResult.meterWidth }}
                          />
                        </div>
                        <div className="flex items-center justify-between text-[9px] text-slate-400 font-medium">
                          <span>&lt;36h Rapid (Twins)</span>
                          <span>48–72h Normal Standard</span>
                          <span>&gt;72h Slower Rise</span>
                        </div>
                      </div>

                      {/* Ultrasound Milestone Discriminatory Check */}
                      <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                        <span className="text-3xs font-black uppercase text-slate-700 block">
                          Current Serum Level ({hcg2} mIU/mL) Expected Ultrasound Milestones:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                          <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${hcgResult.sacVisible ? 'bg-emerald-50 border-emerald-200 text-emerald-950 font-bold' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                            <CheckCircle2 className={`w-4 h-4 ${hcgResult.sacVisible ? 'text-emerald-600' : 'text-slate-300'}`} />
                            <span className="text-3xs">Gestational Sac (1,500+)</span>
                          </div>
                          <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${hcgResult.yolkVisible ? 'bg-emerald-50 border-emerald-200 text-emerald-950 font-bold' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                            <CheckCircle2 className={`w-4 h-4 ${hcgResult.yolkVisible ? 'text-emerald-600' : 'text-slate-300'}`} />
                            <span className="text-3xs">Yolk Sac (3,500+)</span>
                          </div>
                          <div className={`p-2.5 rounded-xl border flex items-center gap-2 ${hcgResult.cardiacVisible ? 'bg-emerald-50 border-emerald-200 text-emerald-950 font-bold' : 'bg-slate-50 border-slate-200 text-slate-400'}`}>
                            <CheckCircle2 className={`w-4 h-4 ${hcgResult.cardiacVisible ? 'text-emerald-600' : 'text-slate-300'}`} />
                            <span className="text-3xs">Fetal Heartbeat (6,000+)</span>
                          </div>
                        </div>
                      </div>

                      <div className={`p-3.5 rounded-2xl border text-xs font-bold ${hcgResult.color}`}>
                        Clinical Assessment: {hcgResult.assessment}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ── 3. PREGNANCY TEST DPO ENGINE ── */}
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
                    <div className="space-y-4 animate-fadeIn">
                      
                      {/* Live DPO Status */}
                      <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-between text-xs text-purple-950">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4 text-purple-600" />
                          <span>Today: <strong>{ptResult.currentDpo} Days Post-Ovulation (DPO)</strong></span>
                        </div>
                        <span className="text-3xs font-bold bg-purple-200 text-purple-900 px-2 py-0.5 rounded-full">
                          {ptResult.canTestToday ? 'Test Viable Now' : 'Early Window (Wait 2–4 Days)'}
                        </span>
                      </div>

                      {/* Earliest Test Dates Matrix */}
                      <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 border border-teal-200 space-y-4">
                        <h4 className="text-xs font-black uppercase text-teal-900 tracking-wider">Earliest Testing Dates Matrix:</h4>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                          <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                            <span className="text-3xs text-slate-400 block font-bold uppercase">Early Strip (10 mIU)</span>
                            <strong className="text-lg text-teal-900 block">{ptResult.earlyTestDate}</strong>
                            <span className="text-3xs text-slate-500">10–12 Days Post-Ovulation</span>
                          </div>

                          <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                            <span className="text-3xs text-slate-400 block font-bold uppercase">Standard Test (25 mIU)</span>
                            <strong className="text-lg text-rose-600 block">{ptResult.missedPeriodDate}</strong>
                            <span className="text-3xs text-slate-500">&gt;99% Accuracy on Missed Period</span>
                          </div>

                          <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                            <span className="text-3xs text-slate-400 block font-bold uppercase">Blood Serum Test (1 mIU)</span>
                            <strong className="text-lg text-purple-900 block">{ptResult.bloodTestDate}</strong>
                            <span className="text-3xs text-slate-500">Quantitative Lab Confirmation</span>
                          </div>
                        </div>

                        {/* DPO Accuracy Scale */}
                        <div className="space-y-2 pt-2 border-t border-teal-200/60">
                          <span className="text-3xs font-black uppercase text-slate-700 block">
                            DPO Test Reliability Scale:
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 text-xs">
                            {ptResult.dpoScale.map((s, idx) => (
                              <div key={idx} className={`p-3 rounded-2xl border border-slate-200 ${s.color}`}>
                                <div className="flex items-center justify-between">
                                  <strong>{s.dpo} DPO</strong>
                                  <span className="text-xs font-black">{s.accuracy}</span>
                                </div>
                                <span className="text-3xs block leading-tight mt-1 opacity-80">{s.status}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ── 4. MENSTRUAL CYCLE & HORMONE SYNC ENGINE ── */}
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
                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-5 animate-fadeIn">
                      <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
                        <div>
                          <span className="text-3xs text-slate-400 font-bold uppercase block">Current Hormone Phase</span>
                          <h4 className="text-lg font-black text-slate-900">{mcResult.icon} {mcResult.phase} (Day {mcResult.cycleDay})</h4>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${mcResult.color}`}>
                          {mcResult.daysToNext} Days to Next Cycle
                        </span>
                      </div>

                      {/* Real-Time Endocrine Hormone Curve Gauges */}
                      <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-3">
                        <span className="text-3xs font-black uppercase text-slate-700 block">
                          Real-Time Hormone Levels (Day {mcResult.cycleDay}):
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                          <div className="space-y-1">
                            <div className="flex justify-between text-3xs font-bold">
                              <span>Estradiol (Estrogen)</span>
                              <span>{mcResult.estrogenLevel}%</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                              <div className="h-full bg-pink-500 rounded-full" style={{ width: `${mcResult.estrogenLevel}%` }} />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between text-3xs font-bold">
                              <span>Progesterone</span>
                              <span>{mcResult.progesteroneLevel}%</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                              <div className="h-full bg-amber-500 rounded-full" style={{ width: `${mcResult.progesteroneLevel}%` }} />
                            </div>
                          </div>

                          <div className="space-y-1">
                            <div className="flex justify-between text-3xs font-bold">
                              <span>Luteinizing Hormone (LH)</span>
                              <span>{mcResult.lhLevel}%</span>
                            </div>
                            <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                              <div className="h-full bg-purple-500 rounded-full" style={{ width: `${mcResult.lhLevel}%` }} />
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Lifestyle & Nutrition Sync Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Optimal Workout</span>
                          <strong className="text-slate-900 block text-sm">{mcResult.workout}</strong>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Phase Nutrition</span>
                          <strong className="text-slate-900 block text-sm">{mcResult.food}</strong>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Calorie Shift &amp; Skin</span>
                          <strong className="text-slate-900 block text-sm">{mcResult.calorieShift}</strong>
                          <span className="text-3xs text-slate-500 block mt-0.5">{mcResult.skinState}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ── 5. PERIOD 6-MONTH PREDICTOR ENGINE ── */}
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
                            <span className="text-3xs font-bold text-rose-600 uppercase">Cycle #{c.cycleIndex} · {c.monthLabel}</span>
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

              {/* ── 6. IMPLANTATION ENGINE ── */}
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
                    <div className="p-6 rounded-3xl bg-gradient-to-r from-teal-50 to-purple-50 border border-teal-200 space-y-5 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-black uppercase text-teal-900 tracking-wider">Blastocyst Implantation Timeline:</h4>
                        <span className="text-3xs font-bold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                          Today: {impResult.currentDpo} DPO
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Implantation Window</span>
                          <strong className="text-sm text-teal-900 block">{impResult.window}</strong>
                          <span className="text-3xs text-slate-500">6 to 12 Days Post-Ovulation</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Peak Attachment Day</span>
                          <strong className="text-sm text-purple-900 block">{impResult.peakDay}</strong>
                          <span className="text-3xs text-slate-500">Spotting most likely here</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Home Test Viability</span>
                          <strong className="text-sm text-emerald-900 block">{impResult.homeTestViable}</strong>
                          <span className="text-3xs text-slate-500">hCG surpasses 25 mIU</span>
                        </div>
                      </div>

                      {/* Blastocyst Step-by-Step Pathway */}
                      <div className="space-y-2 pt-2 border-t border-teal-200/60">
                        <span className="text-3xs font-black uppercase text-slate-700 block">
                          5-Stage Cellular Implantation Pathway:
                        </span>
                        <div className="space-y-2">
                          {impResult.stages.map((st, idx) => (
                            <div key={idx} className="p-3 rounded-2xl bg-white border border-teal-100 flex items-start gap-3 text-xs">
                              <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-3xs font-black flex items-center justify-center flex-shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <div>
                                <div className="flex items-center gap-2">
                                  <strong className="text-slate-900 font-bold">{st.title}</strong>
                                  <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2 py-0.2 rounded-full">{st.dpo}</span>
                                </div>
                                <p className="text-3xs text-slate-500 mt-0.5">{st.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ── 7. WEEKS TO MONTHS & FRUIT VISUALIZER ── */}
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

                  <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200 space-y-5 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{wmResult.fruitIcon}</span>
                        <div>
                          <h4 className="text-base font-black text-emerald-950">Week {wmWeek}: Baby is the Size of a {wmResult.fruit}</h4>
                          <span className="text-3xs text-emerald-700 font-bold">{wmResult.month} · {wmResult.trimester}</span>
                        </div>
                      </div>
                      <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-600 text-white shadow-2xs">
                        {wmResult.progressPercent}% Complete
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-3 rounded-full bg-emerald-100 overflow-hidden">
                      <div className="h-full bg-emerald-600 rounded-full transition-all duration-300" style={{ width: `${wmResult.progressPercent}%` }} />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-2xs">
                        <span className="text-3xs text-slate-400 block font-bold uppercase">Pregnancy Month</span>
                        <strong className="text-xl text-emerald-900 block">{wmResult.month}</strong>
                      </div>

                      <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-2xs">
                        <span className="text-3xs text-slate-400 block font-bold uppercase">Development Milestone</span>
                        <strong className="text-xs text-slate-900 block">{wmResult.stage}</strong>
                      </div>

                      <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-2xs">
                        <span className="text-3xs text-slate-400 block font-bold uppercase">Countdown</span>
                        <strong className="text-xl text-rose-600 block">{wmResult.daysLeft} Days</strong>
                        <span className="text-3xs text-slate-500">Until 40-week delivery</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* ── 8. PREGNANCY DUE DATE (EDD) ENGINE ── */}
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
                    <div className="p-6 rounded-3xl bg-gradient-to-r from-rose-50 via-teal-50 to-purple-50 border border-teal-200 space-y-5 animate-fadeIn">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-black uppercase text-teal-900 tracking-wider">Estimated Due Date &amp; Gestational Progress:</h4>
                        <span className="text-xs font-bold bg-rose-600 text-white px-3 py-1 rounded-full">
                          {ddResult.progressPercent}% Gestation
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Estimated Due Date (EDD)</span>
                          <strong className="text-2xl text-rose-600 block">{ddResult.edd}</strong>
                          <span className="text-3xs text-slate-500">40 Weeks full term</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Gestational Age Today</span>
                          <strong className="text-xl text-teal-900 block">{ddResult.gestationalAge}</strong>
                          <span className="text-3xs text-slate-500">{ddResult.trimester}</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Days Remaining</span>
                          <strong className="text-2xl text-purple-900 block">{ddResult.daysUntilDue} Days</strong>
                          <span className="text-3xs text-slate-500">To baby delivery</span>
                        </div>
                      </div>

                      {/* Antenatal Checkpoint Schedule */}
                      <div className="space-y-2 pt-2 border-t border-teal-200/60">
                        <span className="text-3xs font-black uppercase text-slate-700 block">
                          Antenatal Clinical Milestones Schedule:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-xs">
                          {ddResult.milestones.map((ms, idx) => (
                            <div key={idx} className="p-3 rounded-2xl bg-white border border-teal-100 text-center space-y-0.5">
                              <span className="text-3xs font-bold text-teal-700 uppercase block">{ms.week}</span>
                              <strong className="text-3xs text-slate-900 block leading-tight">{ms.name}</strong>
                              <span className="text-[10px] text-slate-500 block">{ms.date}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ── 9. IVF DUE DATE ENGINE ── */}
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
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs font-black uppercase text-purple-900 tracking-wider">Precision IVF Gestational Report:</h4>
                        <span className="text-xs font-bold bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                          {ivfResult.daysPostTransfer} Days Post-Transfer (2WW)
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                        <div className="p-4 rounded-2xl bg-white border border-purple-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">IVF Due Date (EDD)</span>
                          <strong className="text-2xl text-rose-600 block">{ivfResult.edd}</strong>
                          <span className="text-3xs text-slate-500">Precise to the day</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-purple-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Gestational Age</span>
                          <strong className="text-lg text-purple-900 block">{ivfResult.gestationalAge}</strong>
                          <span className="text-3xs text-slate-500">LMP Equiv: {ivfResult.lmpEquivalent}</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-purple-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Viability Milestones</span>
                          <strong className="text-xs text-teal-900 block">Beta: {ivfResult.betaHcgTestDate}</strong>
                          <span className="text-3xs text-slate-500">Scan: {ivfResult.firstViabilityScan}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* ── 10. ULTRASOUND DUE DATE ENGINE ── */}
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
                        <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
                          <span className="text-3xs text-slate-400 block font-bold uppercase">Official Ultrasound EDD</span>
                          <strong className="text-2xl text-teal-900 block">{usResult.officialEdd}</strong>
                          <span className="text-3xs text-slate-500">{usResult.crlGuideline}</span>
                        </div>

                        <div className="p-4 rounded-2xl bg-white border border-teal-200 shadow-2xs">
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
                    onClick={handleCopySummary}
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
