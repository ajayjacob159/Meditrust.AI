'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Building2, Sparkles, ShieldCheck, CheckCircle2, ArrowRight,
  ChevronRight, Heart, Users, Briefcase, MessageCircle, FileText,
  Lock, Clock, TrendingUp, BarChart3, Sliders, Calendar,
  AlertTriangle, Check, Layers, Baby, Activity, PhoneCall,
  Award, Search, Zap, PieChart, HelpCircle, EyeOff,
  Compass, ChevronDown, ChevronUp, BookOpen, Cpu, DollarSign,
  Star, ShieldAlert, FileCheck, Landmark, CheckCircle, Percent,
  Globe, Stethoscope, RefreshCw, Smile, ArrowUpRight
} from 'lucide-react'

export default function CorpoMomClient() {
  // ── 1. PRIYA'S JOURNEY SIMULATOR STATE ──
  const [journeyStep, setJourneyStep] = useState(0)

  // ── 2. LIFECYCLE STAGE OS ACTIVE TAB ──
  const [activeStage, setActiveStage] = useState<'plan' | 'fertility' | 'pregnancy' | 'maternity' | 'postpartum' | 'support'>('fertility')

  // ── 3. ENTERPRISE ROI CALCULATOR STATE ──
  const [headcount, setHeadcount] = useState<number>(5000)
  const [femaleRatio, setFemaleRatio] = useState<number>(35) // 35%
  const [planTier, setPlanTier] = useState<'essential' | 'plus' | 'premium'>('plus')
  const [includeAdverseSavings, setIncludeAdverseSavings] = useState<boolean>(true)

  // ── 4. PITCH DECK CAROUSEL SLIDE ──
  const [activeSlide, setActiveSlide] = useState<number>(1)

  // ── 5. MARKET LAYER ACTIVE TAB ──
  const [activeMarketLayer, setActiveMarketLayer] = useState<'macro' | 'employer' | 'india'>('macro')

  // Dynamic ROI Calculations
  const roiCalculations = useMemo(() => {
    const pepmRates = { essential: 25, plus: 75, premium: 150 }
    const rate = pepmRates[planTier]
    const monthlyTotal = headcount * rate
    const annualTotal = monthlyTotal * 12

    const femaleEmployees = Math.round((headcount * femaleRatio) / 100)
    // Avg 12% in family-planning/maternity age cohort per year
    const activeCohort = Math.round(femaleEmployees * 0.12)
    // 18 administrative hours saved per employee in cohort
    const totalHoursSaved = activeCohort * 18
    // Avg hourly corporate cost ₹650
    const adminCostSaved = totalHoursSaved * 650
    // Retention improvement: preventing 4 maternal resignations per 1,000 female employees
    const femaleRetained = Math.max(1, Math.round((femaleEmployees / 1000) * 4))
    // Avg replacement recruitment + training cost ₹8,00,000 per talent
    const retentionValueSaved = femaleRetained * 800000

    // Adverse Clinical Outcomes Cost Avoidance (28% fewer preterm, 34% fewer C-sec, 18% fewer preeclampsia)
    const annualPregnancies = Math.round(activeCohort * 0.45)
    const avoidedPretermDeliveries = Math.max(1, Math.round(annualPregnancies * 0.08 * 0.28))
    const avoidedCsections = Math.max(1, Math.round(annualPregnancies * 0.35 * 0.34))
    const adverseOutcomesSaved = includeAdverseSavings ? (avoidedPretermDeliveries * 450000 + avoidedCsections * 85000) : 0

    const totalValueCreated = adminCostSaved + retentionValueSaved + adverseOutcomesSaved
    const netRoi = Math.round((totalValueCreated / annualTotal) * 10) / 10

    return {
      monthlyTotal,
      annualTotal,
      femaleEmployees,
      activeCohort,
      totalHoursSaved,
      adminCostSaved,
      femaleRetained,
      retentionValueSaved,
      annualPregnancies,
      avoidedPretermDeliveries,
      avoidedCsections,
      adverseOutcomesSaved,
      totalValueCreated,
      netRoi,
      rate
    }
  }, [headcount, femaleRatio, planTier, includeAdverseSavings])

  // Priya's Journey Steps
  const priyaSteps = [
    {
      step: 1,
      tag: "CONCEPTION DECISION",
      emotion: "🤔 Confused & Overwhelmed",
      userThought: "“I want to conceive, but I have a demanding corporate job. What should I do first?”",
      statusWithout: "Searches Google for 4 hours during work; gets conflicting blog posts and panic-inducing forums.",
      statusWith: "Opens Meditrust AI Preconception Navigator in 30 seconds for a tailored 90-day biological readiness checklist."
    },
    {
      step: 2,
      tag: "DOCTOR DISCOVERY",
      emotion: "🩺 Uncertain of Clinical Specialty",
      userThought: "“Do I see an OB/GYN, a Reproductive Endocrinologist, or get AMH blood tests first?”",
      statusWithout: "Takes a half-day leave to visit a random hospital OPD only to be told she needed fasting labs first.",
      statusWith: "AI Care Navigator triages requirements and books an at-home fertility blood panel + accredited specialist OPD."
    },
    {
      step: 3,
      tag: "FERTILITY & IVF UNCERTAINTY",
      emotion: "😰 Anxious about Costs & Viability",
      userThought: "“What if something is wrong? Can I afford IVF? Will my company know?”",
      statusWithout: "Endures silent emotional dread, terrified HR will see insurance claims or doctor notes.",
      statusWith: "100% Zero-Knowledge encrypted vault. Benefits Navigator instantly clarifies IVF coverage & generic Jan Aushadhi savings."
    },
    {
      step: 4,
      tag: "WORKDAY APPOINTMENT LOAD",
      emotion: "⏰ Time Crunch & Burnout",
      userThought: "“How many scans and follow-ups? How do I manage all this around quarterly deliverables?”",
      statusWithout: "Scrambles with calendar conflicts, missing crucial follicular scans or arriving late to client meetings.",
      statusWith: "Care Coordinator auto-syncs clinic appointments, sends scan reminders, and organizes digital health vault reports."
    },
    {
      step: 5,
      tag: "PREGNANCY & MATERNITY CARE",
      emotion: "🤰 Project-Managing Fragmented Care",
      userThought: "“I’m pregnant! Which hospital? What scans each trimester? What about maternity leave?”",
      statusWithout: "Juggles 5 different apps, diagnostic labs, hospitals, and unclear HR leave paperwork alone.",
      statusWith: "Pregnancy OS delivers week-by-week fetal milestones, TIFFA scan bookings, and automated maternity documentation."
    },
    {
      step: 6,
      tag: "RETURN TO WORK & CAREER CONTINUITY",
      emotion: "💔 Postpartum Anxiety & Career Dread",
      userThought: "“My 26 weeks are ending. Will my career suffer? How do I manage breastfeeding and work?”",
      statusWithout: "Felt isolated, faced lack of lactation facilities, and considered resigning due to return-to-work shock.",
      statusWith: "Phased 4-week ramp-up, workplace mother-room lactation support, and certified mental health coaching."
    }
  ]

  // Pitch Deck Slides Data
  const pitchSlides = [
    {
      num: 1,
      title: "MEDITRUST FAMILY HEALTH OS™",
      subtitle: "The Reproductive-Health Infrastructure for the Modern Workplace",
      highlight: "Helping employees navigate family planning, fertility, pregnancy, maternity and postpartum care—confidentially, continuously and digitally.",
      points: [
        "One unified operating system for employers and employees",
        "Covers preconception, fertility, prenatal, leave, and return-to-work",
        "Reduces friction, improves retention, and unlocks measurable 4:1 ROI"
      ]
    },
    {
      num: 2,
      title: "THE DUAL PROBLEM",
      subtitle: "Companies provide benefits. Employees struggle to navigate them.",
      highlight: "The healthcare system is fragmented. The workplace is fragmented. The employee is stuck in the middle.",
      points: [
        "Employee: 'I don't know how to navigate the most critical journey of my life while performing at work.'",
        "Employer / HR: 'I lack a unified system to support employees without creating productivity and retention issues.'",
        "Insurance and EAP exist in disconnected silos with low utilization (<12%)."
      ]
    },
    {
      num: 3,
      title: "WORKFORCE DATA: NOT THEORETICAL",
      subtitle: "Aon 2024 Pan-India Voice of Women in the Workforce Study",
      highlight: "Health + Work + Family + Career sit at a critical corporate inflection point.",
      points: [
        "1 in 3 women report experiencing insensitive behaviour or lack of support at work.",
        "Work stress and caregiving load are the #1 workplace detractors for female talent.",
        "Market validation: Google, Accenture, IKEA, Diageo, Myntra, L'Oréal have introduced corporate fertility benefits."
      ]
    },
    {
      num: 4,
      title: "THE 8 EMPLOYEE PAIN POINTS",
      subtitle: "From preconception anxiety to postpartum career continuity",
      highlight: "A 360-degree journey requiring orchestration rather than isolated point solutions.",
      points: [
        "1. No starting point ➔ AI Reproductive Health Navigator",
        "2. Privacy fears ➔ 100% Zero-Knowledge Encrypted Vault",
        "3. Time burden ➔ Automated Care Coordination & Calendar Sync (18 hrs saved)",
        "4. Cost uncertainty ➔ Corporate Benefit & Insurance Navigator"
      ]
    },
    {
      num: 5,
      title: "THE 5 BUSINESS DANGERS",
      subtitle: "What employers risk by failing to provide an operating layer",
      highlight: "Focus on measurable operational risk and financial continuity.",
      points: [
        "Danger #1: Loss of Female Talent & High Replacement Costs (₹8L–₹15L per talent)",
        "Danger #2: Benefit Underutilization (Millions spent on unused EAP/insurance)",
        "Danger #3: Productivity Loss (Dozens of work hours wasted on healthcare phone calls)",
        "Danger #4: Post-Maternity Career Penalty & Drop-off",
        "Danger #5: Privacy Breach (10x legal & trust destruction risk)"
      ]
    },
    {
      num: 6,
      title: "MEDITRUST SOLUTION ARCHITECTURE",
      subtitle: "One Confidential Reproductive-Health Navigation Layer",
      highlight: "PLAN ➔ FERTILITY ➔ PREGNANCY ➔ MATERNITY ➔ POSTPARTUM ➔ RETURN-TO-WORK",
      points: [
        "AI Doctor Triage & Clinical Pathways (Non-diagnostic orchestration)",
        "Accredited Provider & NABL Diagnostic Network with zero sponsored bias",
        "Enterprise Benefits & Policy Document Integration",
        "Certified Lactation, Mental Health & Return-to-Work Coaching"
      ]
    },
    {
      num: 7,
      title: "EMPLOYEE PRODUCT EXPERIENCE",
      subtitle: "Meditrust Mobile App & Web OS",
      highlight: "Answers the one burning question: 'What do I do next?' in under 60 seconds.",
      points: [
        "Instant Stage Picker: Plan, Trying to Conceive, Pregnant, Maternity, Postpartum",
        "Teleconsultation & Doctor Discovery with transparent clinical criteria",
        "Smart Reminders for Follicular Scans, NT Scans & Blood Panels",
        "MediVault™: HIPAA/ABDM Encrypted Medical Storage"
      ]
    },
    {
      num: 8,
      title: "EMPLOYER CONSOLE & PRIVACY FORTRESS",
      subtitle: "HR Receives Insights Without Compromising Trust",
      highlight: "Zero Individual Health Data. 100% Aggregated Workforce Analytics.",
      points: [
        "Live Enrolled vs Active Benefit Activation Rates (64%+ average)",
        "Anonymized Healthcare Category Breakdown & Trends",
        "Measurable Administrative Hours Saved KPI",
        "Never discloses: Individual IVF, pregnancy, or medical diagnoses"
      ]
    },
    {
      num: 9,
      title: "THE COMPLETE LIFECYCLE JOURNEY",
      subtitle: "Continuous Orchestration from Preconception to Day 365 Postpartum",
      highlight: "One seamless continuity layer bridging medical and corporate life.",
      points: [
        "PLAN ➔ ASSESS ➔ CONSULT ➔ TEST ➔ TREAT",
        "PREGNANCY ➔ SCANS ➔ DELIVERY PREPARATION",
        "MATERNITY LEAVE ➔ POSTPARTUM HEALING ➔ RETURN TO WORK"
      ]
    },
    {
      num: 10,
      title: "ENTERPRISE BUSINESS MODEL",
      subtitle: "Multi-Pronged B2B & Insurer Monetization",
      highlight: "High-margin PEPM subscription supplemented by transaction and integration streams.",
      points: [
        "Model A: PEPM Enterprise Subscription (₹25 to ₹150+ PEPM)",
        "Model B: Enterprise Implementation & SSO Configuration (₹2L–₹20L)",
        "Model C: Regulated Transaction Revenue (Diagnostics, Marketplace, Consults)",
        "Model D: Group Insurer / TPA Distribution (Covering millions of lives)"
      ]
    },
    {
      num: 11,
      title: "WHY CHROs & HR BUY",
      subtitle: "Transforming Cost Centers into Measurable Retention Assets",
      highlight: "The employer isn't buying healthcare—they are buying workforce continuity.",
      points: [
        "4:1 ROI via cost avoidance of adverse maternal outcomes",
        "90% return-to-work rate and 88% talent retention post-childbirth",
        "Saves 18+ hours of working time per expectant or fertility-navigating employee",
        "Certified 'Family-Friendly Workplace' Employer Branding"
      ]
    },
    {
      num: 12,
      title: "WHY EMPLOYEES USE IT",
      subtitle: "High-Intent Triggers Solving Immediate Friction in <60 Seconds",
      highlight: "Not another generic benefits portal. A real-time life navigator with 99% CSAT.",
      points: [
        "What to do ➔ Step-by-step evidence-based clinical roadmaps",
        "Who to see ➔ Unbiased specialist and fertility clinic matching",
        "Where to go ➔ Accredited hospitals with delivery price clarity",
        "What's covered ➔ Instant corporate policy and insurance entitlement check"
      ]
    },
    {
      num: 13,
      title: "DEFENSIBLE MOAT & FLYWHEEL",
      subtitle: "Data + Distribution + Network Flywheel",
      highlight: "Stronger network effects with every covered employee and accredited provider.",
      points: [
        "Employees ➔ Healthcare Journeys ➔ Provider Network",
        "More Transactions ➔ Deeper Employer Value ➔ Higher Retention",
        "More Employers ➔ Lower CAC ➔ Unassailable Distribution Layer"
      ]
    },
    {
      num: 14,
      title: "VISION: FAMILY HEALTH OS™ FOR EVERY COMPANY",
      subtitle: "The Operating Standard for Workplace Reproductive Healthcare",
      highlight: "Beyond insurance. Beyond leave. A complete digital care infrastructure.",
      points: [
        "From isolated IVF coverage to comprehensive family health orchestration",
        "Standard infrastructure across IT/ITES, BFSI, GCCs, and Startups",
        "Bridging female health equity with corporate productivity."
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/medimom" className="hover:text-rose-600 transition-colors">Medi&apos;s MOM™</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-purple-600 font-bold">Corpo Mom™ Enterprise (Family Health OS)</span>
        </nav>
      </div>

      {/* ── HERO BANNER ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white p-6 sm:p-12 border border-purple-900/50 shadow-2xl space-y-8 overflow-hidden">
          
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-3xs font-black uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-purple-400" />
              <span>MEDITRUST FAMILY HEALTH OS™ · ENTERPRISE INFRASTRUCTURE</span>
            </div>
            <span className="text-3xs font-semibold text-purple-300/80 bg-white/5 px-3 py-1 rounded-full border border-white/10">
              4:1 Proven ROI · Aon 2024 Pan-India Workforce Benchmarked
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              A Reproductive-Health Navigation &amp; <br />
              <span className="text-gradient-chic">Workforce-Retention Benefit for India.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-3xl">
              Help your employees safely navigate <strong>family planning, fertility, pregnancy, maternity and postpartum care</strong>—without sacrificing health, productivity, privacy or career continuity.
            </p>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md max-w-3xl">
              <p className="text-xs sm:text-sm text-purple-200 font-medium leading-normal">
                💡 <strong>The Core Truth:</strong> The employer is not primarily buying healthcare. You are buying <em>reduced administrative friction, superior employee experience, talent retention, workforce continuity,</em> and a measurable <strong>4:1 ROI family-health benefit</strong>.
              </p>
            </div>
          </div>

          {/* Quick Metrics Bar: 4 Proven Clinical & Financial Outliers */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-emerald-400 font-black text-xl sm:text-2xl block">4:1 ROI</span>
              <span className="text-slate-300 text-3xs block leading-tight">Cost avoidance of adverse maternal &amp; preterm outcomes</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-purple-400 font-black text-xl sm:text-2xl block">90% Return</span>
              <span className="text-slate-300 text-3xs block leading-tight">Return-to-work as planned &amp; 88% female talent retention</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-teal-400 font-black text-xl sm:text-2xl block">28% Fewer</span>
              <span className="text-slate-300 text-3xs block leading-tight">NICU stays &amp; preterm births (~$95k / ₹80L saved per delivery)</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-rose-400 font-black text-xl sm:text-2xl block">100% Private</span>
              <span className="text-slate-300 text-3xs block leading-tight">Zero-Knowledge Architecture: HR never sees individual medical PII</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <a
              href="https://wa.me/917028025717?text=Hi%20Meditrust,%20I%20am%20an%20HR/CHRO%20interested%20in%20Corpo%20Mom%20Family%20Health%20OS%20demo%20and%20pilot"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-purple-500 to-rose-500 hover:from-purple-600 hover:to-rose-600 text-white font-black text-xs transition-transform hover:scale-102 flex items-center gap-2 shadow-lg"
            >
              <Building2 className="w-4 h-4" />
              <span>Book 500–1000 Employee Pilot Demo</span>
            </a>

            <a
              href="#roi-calculator"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors flex items-center gap-2"
            >
              <Sliders className="w-4 h-4 text-purple-300" />
              <span>Calculate Enterprise PEPM ROI</span>
            </a>

            <a
              href="#market-opportunity"
              className="px-5 py-3.5 rounded-full bg-transparent hover:bg-white/5 text-purple-300 text-xs font-semibold flex items-center gap-1.5"
            >
              <TrendingUp className="w-4 h-4" />
              <span>Sizing the Problem ($297B FemTech)</span>
            </a>

            <a
              href="#pitch-deck"
              className="px-5 py-3.5 rounded-full bg-transparent hover:bg-white/5 text-purple-300 text-xs font-semibold flex items-center gap-1.5"
            >
              <BookOpen className="w-4 h-4" />
              <span>View 14-Slide Deck</span>
            </a>
          </div>

        </div>
      </section>

      {/* ── NEW SECTION: THE 4 LINKED WORKFORCE PROBLEMS & CLINICAL OUTCOMES ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-3xs font-black uppercase">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
            <span>MODERN WORKFORCE REALITY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            The 4 Linked Problems in Modern Workforces
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            How fragmented benefits create exorbitant claims costs, employee anxiety, and mid-career female talent drop-off.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Linked Problem 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🧩</span>
                <span className="text-3xs font-black uppercase bg-rose-50 text-rose-700 px-3 py-1 rounded-full border border-rose-100">
                  PROBLEM #1 · BENEFIT FRAGMENTATION
                </span>
              </div>
              <h3 className="text-lg font-black text-slate-950">
                Fragmented, One-Size-Fits-All Maternity Benefits
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Most employer health plans cover &ldquo;maternity&rdquo; narrowly (delivery + basic prenatal), but miss <strong>fertility, high-risk pregnancy support, lactation, mental health, return-to-work planning</strong>, and ongoing chronic conditions like PCOS, endometriosis, or metabolic health.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 text-xs text-slate-800 space-y-1">
              <strong className="text-rose-900 font-bold block flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-rose-600" /> Meditrust Solution:
              </strong>
              <span className="text-3xs text-slate-700 block">
                Delivers a personalized, end-to-end journey from cycle tracking &amp; &ldquo;trimester zero&rdquo; through pregnancy, birth, parenting, and beyond.
              </span>
            </div>
          </div>

          {/* Linked Problem 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">🧭</span>
                <span className="text-3xs font-black uppercase bg-purple-50 text-purple-700 px-3 py-1 rounded-full border border-purple-100">
                  PROBLEM #2 · LOW ENGAGEMENT
                </span>
              </div>
              <h3 className="text-lg font-black text-slate-950">
                Poor Engagement &amp; Navigation of Existing Benefits
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Employees often don’t know what they’re covered for, how to use it, or when to seek care. Traditional EAPs suffer from &lt;10% utilization because they lack continuous clinical triggers and trust.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100 text-xs text-slate-800 space-y-1">
              <strong className="text-purple-900 font-bold block flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-purple-600" /> Meditrust Solution:
              </strong>
              <span className="text-3xs text-slate-700 block">
                Provides benefits navigation, care coordination, and daily digital support, boosting utilization to <strong>64%+</strong> and preventing costly delays in care.
              </span>
            </div>
          </div>

          {/* Linked Problem 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">📉</span>
                <span className="text-3xs font-black uppercase bg-amber-50 text-amber-700 px-3 py-1 rounded-full border border-amber-100">
                  PROBLEM #3 · EXORBITANT CLAIMS
                </span>
              </div>
              <h3 className="text-lg font-black text-slate-950">
                High Cost of Adverse Outcomes for Employers
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Complications like preterm births, NICU stays, unnecessary C-sections, and preeclampsia drive massive insurance claim spikes and indirect absenteeism costs for companies.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100 text-xs text-slate-800 space-y-1">
              <strong className="text-amber-900 font-bold block flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-600" /> Meditrust Solution:
              </strong>
              <span className="text-3xs text-slate-700 block">
                Early monitoring, risk stratification, and coaching deliver <strong>28% fewer NICU stays</strong> and <strong>34% fewer C-sections</strong>, producing a proven <strong>4:1 ROI</strong>.
              </span>
            </div>
          </div>

          {/* Linked Problem 4 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xl">💼</span>
                <span className="text-3xs font-black uppercase bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-100">
                  PROBLEM #4 · TALENT RESIGNATIONS
                </span>
              </div>
              <h3 className="text-lg font-black text-slate-950">
                Retention &amp; Productivity Gaps Around Parenthood
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                Many women drop out or scale back after childbirth due to inadequate support, lack of lactation amenities, and career penalty dread—triggering ₹8L–₹15L+ in talent replacement costs.
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 text-xs text-slate-800 space-y-1">
              <strong className="text-emerald-900 font-bold block flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Meditrust Solution:
              </strong>
              <span className="text-3xs text-slate-700 block">
                Achieves <strong>90% return to work as planned</strong> and <strong>88% employee retention after childbirth</strong> through structured 4-week return ramps and mother-room audits.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── NEW SECTION: THE 4:1 ROI & ADVERSE OUTCOME COST AVOIDANCE GRID (PICTORIAL) ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-purple-950 text-white p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-3xs font-black text-emerald-400 bg-emerald-950 border border-emerald-800 px-3 py-1 rounded-full uppercase tracking-wider">
                CLINICAL OUTCOMES &amp; COST AVOIDANCE
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                Quantified 4:1 ROI via Prevented Adverse Events
              </h2>
              <p className="text-xs sm:text-sm text-slate-300">
                Corpo Mom turns maternity coverage into a continuous, data-driven women’s health benefit that drastically reduces total cost of care.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center flex-shrink-0">
              <span className="text-3xs text-slate-400 uppercase font-bold block">Enterprise Value Multiple</span>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400">4:1 ROI</div>
              <span className="text-[10px] text-emerald-300 font-semibold">Net Cost Avoidance</span>
            </div>
          </div>

          {/* 4 Pictorial Cost-Avoidance Metric Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Metric 1 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🏥</span>
                  <span className="text-xs font-black text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                    -28% Drop
                  </span>
                </div>
                <strong className="text-white text-sm font-bold block">Fewer NICU / Preterm Births</strong>
                <p className="text-3xs text-slate-300 leading-relaxed">
                  Early obstetric monitoring &amp; progesterone support prevent spontaneous preterm labor.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 text-3xs text-emerald-300 font-semibold">
                💰 <strong>~$95k (₹80 Lakhs)</strong> avoided per preterm delivery
              </div>
            </div>

            {/* Metric 2 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">✂️</span>
                  <span className="text-xs font-black text-teal-400 bg-teal-950/80 px-2 py-0.5 rounded border border-teal-800">
                    -34% Drop
                  </span>
                </div>
                <strong className="text-white text-sm font-bold block">Fewer Unnecessary C-Sections</strong>
                <p className="text-3xs text-slate-300 leading-relaxed">
                  Birth plan preparation, doula education, and antenatal pelvic therapy promote safe vaginal delivery.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 text-3xs text-teal-300 font-semibold">
                💰 <strong>~$11k (₹9.2 Lakhs)</strong> avoided per case
              </div>
            </div>

            {/* Metric 3 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">🩸</span>
                  <span className="text-xs font-black text-purple-400 bg-purple-950/80 px-2 py-0.5 rounded border border-purple-800">
                    -18% Drop
                  </span>
                </div>
                <strong className="text-white text-sm font-bold block">Drop in Preeclampsia</strong>
                <p className="text-3xs text-slate-300 leading-relaxed">
                  Uterine artery Doppler scans and prophylactic low-dose aspirin protocol for high-risk mothers.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 text-3xs text-purple-300 font-semibold">
                💰 <strong>~$23k (₹19 Lakhs)</strong> avoided per family
              </div>
            </div>

            {/* Metric 4 */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 flex flex-col justify-between hover:bg-white/10 transition-colors">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">👩‍💼</span>
                  <span className="text-xs font-black text-rose-400 bg-rose-950/80 px-2 py-0.5 rounded border border-rose-800">
                    90% RTW
                  </span>
                </div>
                <strong className="text-white text-sm font-bold block">Return-to-Work as Planned</strong>
                <p className="text-3xs text-slate-300 leading-relaxed">
                  88% female employee retention post-birth, eliminating recruitment replacement cycles.
                </p>
              </div>
              <div className="pt-3 border-t border-white/10 text-3xs text-rose-300 font-semibold">
                ⭐ <strong>99% CSAT</strong> with 30–90+ touchpoints/mo
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── NEW SECTION: HOW BIG IS THE UNDERLYING PROBLEM? (3 MACRO LAYERS) ── */}
      <section id="market-opportunity" className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">
                MARKET SIZING &amp; MACRO DYNAMICS
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
                How Big is the Underlying Problem?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Analyzing the problem across 3 interconnected layers: Global FemTech, Employer-Side Pain, and the India Landscape.
              </p>
            </div>

            {/* Layer Tabs */}
            <div className="flex bg-slate-100 p-1 rounded-2xl text-xs font-bold">
              <button
                onClick={() => setActiveMarketLayer('macro')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeMarketLayer === 'macro' ? 'bg-purple-900 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                1. Macro FemTech
              </button>
              <button
                onClick={() => setActiveMarketLayer('employer')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeMarketLayer === 'employer' ? 'bg-purple-900 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                2. Employer Pain
              </button>
              <button
                onClick={() => setActiveMarketLayer('india')}
                className={`px-4 py-2 rounded-xl transition-all ${
                  activeMarketLayer === 'india' ? 'bg-purple-900 text-white shadow-2xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                3. India Angle
              </button>
            </div>
          </div>

          {/* Layer 1 Content: Macro FemTech */}
          {activeMarketLayer === 'macro' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center animate-fadeIn text-xs">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-3xs font-black uppercase text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-200">
                  LAYER 1 · MACRO FEMTECH &amp; WOMEN&apos;S HEALTH OPPORTUNITY
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                  Global FemTech Market: $73.5B (2025) ➔ $297B by 2035 (~15% CAGR)
                </h3>
                <p className="text-slate-600 leading-relaxed font-normal">
                  The global FemTech sector is experiencing an unprecedented inflection point. Grand View Research projects the market reaching <strong>$145.5B by 2033 (15.5% CAGR)</strong>, while SNS Insider projects expansion to <strong>$297B by 2035</strong>.
                </p>
                <div className="p-4 rounded-2xl bg-purple-50 border border-purple-100 space-y-2">
                  <strong className="text-purple-900 font-bold block">📱 Pregnancy &amp; Postpartum Digital Apps Subsegment:</strong>
                  <p className="text-slate-700 text-3xs leading-relaxed">
                    The global pregnancy tracking and postpartum care apps segment alone is projected to grow from <strong>$0.36B–$0.71B in 2025/26 to $1.3B–$6.1B by 2031–33</strong>. Employer-sponsored digital maternity and fertility benefits are the #1 catalyst driving this expansion.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-3xl space-y-4">
                <span className="text-3xs font-mono text-purple-300 uppercase">Growth Trajectory Benchmark</span>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-3xs mb-1">
                      <span className="text-slate-300">Global FemTech Market (2025)</span>
                      <span className="font-bold text-white">$73.5 Billion</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-purple-400 rounded-full" style={{ width: '25%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-3xs mb-1">
                      <span className="text-purple-300 font-bold">Global FemTech Market (2035 Projected)</span>
                      <span className="font-bold text-emerald-400">$297.0 Billion (15% CAGR)</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-400 to-emerald-400 rounded-full" style={{ width: '100%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-3xs mb-1">
                      <span className="text-slate-300">Pregnancy &amp; Postpartum Apps (2033)</span>
                      <span className="font-bold text-teal-300">$6.1 Billion</span>
                    </div>
                    <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden">
                      <div className="h-full bg-teal-400 rounded-full" style={{ width: '60%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Layer 2 Content: Employer-Side Pain */}
          {activeMarketLayer === 'employer' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center animate-fadeIn text-xs">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-3xs font-black uppercase text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-200">
                  LAYER 2 · EMPLOYER-SIDE PAIN &amp; RETENTION RISK
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                  Fertility &amp; Maternity Costs Are Workforce Financial Risks
                </h3>
                <p className="text-slate-600 leading-relaxed font-normal">
                  While exact global numbers vary by country, the pattern is consistent: maternity complications are extremely expensive. Preterm birth, NICU stays, C-sections, and hypertensive disorders add tens of thousands of dollars in claims and indirect costs per case.
                </p>
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <strong className="text-slate-900 font-bold block">⭐ Fertility Benefits Becoming Corporate Standard:</strong>
                  <p className="text-slate-600 text-3xs leading-relaxed">
                    Adoption of dedicated fertility benefits among large employers has climbed to <strong>40%+ in recent years</strong>, with dedicated category leaders (e.g. Progyny) generating hundreds of millions in annual revenue, indicating a multi-billion-dollar global enterprise spend.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-rose-950 text-white p-6 rounded-3xl space-y-4 border border-rose-900">
                <span className="text-3xs font-bold text-rose-300 uppercase">Retention &amp; Labor Participation</span>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Research in India shows that extending mandated maternity leave can unintentionally reduce employment of women of childbearing age without supporting infrastructure.
                </p>
                <div className="p-3 bg-white/10 rounded-2xl border border-white/10 text-3xs text-rose-100">
                  ✓ Well-designed proactive benefits that support health, lactation, and return-to-work counteract this by keeping women employed, healthy, and on track for leadership.
                </div>
              </div>
            </div>
          )}

          {/* Layer 3 Content: India-Specific Angle */}
          {activeMarketLayer === 'india' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center animate-fadeIn text-xs">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-3xs font-black uppercase text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                  LAYER 3 · INDIA-SPECIFIC HIGH-GROWTH MARKET
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                  India Women’s Health Market: $18.6B (2025) ➔ $47.8B by 2035 (9.9% CAGR)
                </h3>
                <p className="text-slate-600 leading-relaxed font-normal">
                  India’s women&apos;s health sector spans reproductive health, maternal care, fertility clinics, diagnostics, and digital health platforms.
                </p>
                <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 space-y-2">
                  <strong className="text-teal-950 font-bold block">🧬 India IVF Market: ₹13,000 Crore ($1.6B) &amp; 15–18% Annual Growth:</strong>
                  <p className="text-teal-900 text-3xs leading-relaxed">
                    Surging interest in corporate fertility benefits and HR systems that manage IVF reimbursements and egg-freezing across IT, BFSI, GCCs, and Pharma creates an under-penetrated multi-billion-dollar enterprise opportunity.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 bg-teal-950 text-white p-6 rounded-3xl space-y-4 border border-teal-900">
                <span className="text-3xs font-mono text-teal-300 uppercase">Target White-Collar Sectors</span>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span>💻 IT &amp; ITES Companies</span>
                    <strong className="text-teal-300 font-black">4.5M+ Employees</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span>🏦 BFSI &amp; Global Banks</span>
                    <strong className="text-teal-300 font-black">1.8M+ Employees</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between">
                    <span>🏢 Global Capability Centers (GCCs)</span>
                    <strong className="text-teal-300 font-black">1.9M+ Employees</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ── SECTION 1: THE TWO CUSTOMERS WITH DIFFERENT PROBLEMS ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">SECTION 1 · THE CORE ARCHITECTURE</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            Two Distinct Customers. Two Distinct Problems.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Meditrust bridges the critical gap between employee life-stage anxiety and enterprise workforce continuity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Employee Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-rose-200/80 shadow-md space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center text-2xl font-bold">
              👩‍💼
            </div>
            <div className="space-y-1">
              <span className="text-3xs font-black uppercase tracking-wider text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md">CUSTOMER #1: THE EMPLOYEE</span>
              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                “I don&apos;t know how to navigate one of the most important healthcare journeys of my life while continuing to perform at work.”
              </h3>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>Overwhelmed by medical jargon, fertility testing options, and IVF anxiety.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>Terrified that HR or managers will find out about reproductive planning or pregnancy.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>Struggling to manage dozens of scan appointments alongside client deliverables.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-500 font-bold">•</span>
                <span>Fearing maternal career penalties and traumatic return-to-work transitions.</span>
              </li>
            </ul>
          </div>

          {/* Employer Box */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-purple-200/80 shadow-md space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-2xl font-bold">
              🏢
            </div>
            <div className="space-y-1">
              <span className="text-3xs font-black uppercase tracking-wider text-purple-600 bg-purple-50 px-2 py-0.5 rounded-md">CUSTOMER #2: THE CHRO / HR LEADER</span>
              <h3 className="text-xl font-bold text-slate-900 leading-snug">
                “I don&apos;t have a unified system to support employees through fertility, pregnancy and parenthood without creating productivity and retention problems.”
              </h3>
            </div>
            <ul className="space-y-2 text-xs text-slate-600">
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">•</span>
                <span>Spends millions on corporate insurance &amp; EAP that suffer from &lt;10% employee utilization.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">•</span>
                <span>Faces sudden female mid-career dropouts (costing ₹8L–₹15L+ in talent replacement).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">•</span>
                <span>Carries catastrophic privacy risks if sensitive employee health data is improperly handled.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-500 font-bold">•</span>
                <span>Lacks measurable utilization analytics to prove ROI to the CFO and Board.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── SECTION 2 & 3: PRIYA'S INTERACTIVE REALITY SIMULATOR ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="bg-gradient-to-br from-purple-900 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-10 text-white border border-purple-800 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-purple-800/80 pb-4">
            <div>
              <span className="text-3xs font-black text-purple-300 uppercase tracking-widest">INTERACTIVE REALITY SIMULATION</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                What the Employee is Actually Experiencing: Priya&apos;s Story
              </h2>
              <p className="text-xs text-purple-200">
                Priya, 31, Corporate Product Lead in Bengaluru. Wanting to start a family while maintaining career momentum.
              </p>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 p-1.5 rounded-2xl">
              {priyaSteps.map((s, idx) => (
                <button
                  key={s.step}
                  onClick={() => setJourneyStep(idx)}
                  className={`w-7 h-7 rounded-xl text-xs font-bold transition-all ${
                    journeyStep === idx
                      ? 'bg-rose-500 text-white shadow-md scale-110'
                      : 'text-slate-300 hover:bg-white/10'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Details */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-5 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-3xs font-black uppercase">
                <span>MILESTONE #{priyaSteps[journeyStep].step}</span>
                <span>·</span>
                <span>{priyaSteps[journeyStep].tag}</span>
              </div>
              <h3 className="text-xl font-black text-white">
                {priyaSteps[journeyStep].emotion}
              </h3>
              <blockquote className="p-4 rounded-2xl bg-white/5 border-l-4 border-rose-400 text-xs text-slate-200 italic leading-relaxed">
                {priyaSteps[journeyStep].userThought}
              </blockquote>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setJourneyStep((prev) => (prev > 0 ? prev - 1 : priyaSteps.length - 1))}
                  className="px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold text-white"
                >
                  ← Previous Step
                </button>
                <button
                  onClick={() => setJourneyStep((prev) => (prev < priyaSteps.length - 1 ? prev + 1 : 0))}
                  className="px-4 py-1.5 rounded-xl bg-rose-500 hover:bg-rose-600 text-xs font-bold text-white shadow-sm"
                >
                  Next Step →
                </button>
              </div>
            </div>

            {/* Contrast Cards: Without Meditrust vs With Meditrust */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-rose-950/40 border border-rose-800/60 space-y-2">
                <span className="text-3xs font-black uppercase text-rose-400 flex items-center gap-1">
                  <AlertTriangle className="w-3.5 h-3.5" /> WITHOUT MEDITRUST (FRAGMENTED)
                </span>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {priyaSteps[journeyStep].statusWithout}
                </p>
                <span className="text-[10px] text-rose-300 font-semibold block pt-1">Result: High Stress &amp; Work Distraction</span>
              </div>

              <div className="p-5 rounded-2xl bg-emerald-950/40 border border-emerald-700/60 space-y-2">
                <span className="text-3xs font-black uppercase text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> WITH MEDITRUST FAMILY HEALTH OS™
                </span>
                <p className="text-xs text-slate-200 leading-relaxed font-medium">
                  {priyaSteps[journeyStep].statusWith}
                </p>
                <span className="text-[10px] text-emerald-300 font-bold block pt-1">Result: 100% Private, Fast &amp; Guided</span>
              </div>
            </div>
          </div>

          {/* Indian Employers Validating Fertility Benefits */}
          <div className="pt-4 border-t border-purple-800/80">
            <span className="text-3xs font-bold uppercase tracking-wider text-purple-300 block mb-2">
              🏆 Indian Market Evidence · Companies Already Adding Fertility &amp; Maternity Support:
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-200">
              <span className="bg-white/10 px-3 py-1 rounded-lg border border-white/10">Google India</span>
              <span className="bg-white/10 px-3 py-1 rounded-lg border border-white/10">Accenture India</span>
              <span className="bg-white/10 px-3 py-1 rounded-lg border border-white/10">Diageo</span>
              <span className="bg-white/10 px-3 py-1 rounded-lg border border-white/10">Myntra</span>
              <span className="bg-white/10 px-3 py-1 rounded-lg border border-white/10">IKEA India</span>
              <span className="bg-white/10 px-3 py-1 rounded-lg border border-white/10">L&apos;Oréal</span>
              <span className="bg-white/10 px-3 py-1 rounded-lg border border-white/10">HSBC India</span>
              <span className="bg-white/10 px-3 py-1 rounded-lg border border-white/10">Titan</span>
              <span className="bg-white/10 px-3 py-1 rounded-lg border border-white/10">Meesho</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5 TO 12: THE 8 BIGGEST EMPLOYEE PAIN POINTS ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">SECTION 5 · DEEP CLINICAL &amp; OPERATIONAL ANALYSIS</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            The 8 Employee Pain Points Solved
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            How Meditrust transforms the 8 most harrowing friction points into an effortless, private corporate benefit.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          {/* Pain Point 1 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🧭</span>
              <span className="text-3xs font-black bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full uppercase">PAIN #1 · STARTING POINT</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">“I don&apos;t know where to start or who to see”</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Employees don&apos;t know whether they need a gynecologist, reproductive andrologist, AMH diagnostic testing, or emotional counselling.
            </p>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <strong className="text-xs font-bold text-teal-700 block">✨ Meditrust AI Navigator:</strong>
              <span className="text-3xs text-slate-600 block">
                Employee says: <em>“I&apos;m thinking about having a baby.”</em> Meditrust provides non-diagnostic clinical navigation pathways and directs them toward accredited professional care.
              </span>
            </div>
          </div>

          {/* Pain Point 2 */}
          <div className="bg-white rounded-3xl p-6 border-2 border-emerald-200 bg-emerald-50/20 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🔒</span>
              <span className="text-3xs font-black bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full uppercase">PAIN #2 · PRIVACY FORTRESS</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">“Will HR or my manager discover my fertility journey?”</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Employees are terrified that employers will discover IVF, miscarriage, or pregnancy. <strong>Employer MUST NOT see individual health data.</strong>
            </p>
            <div className="p-3 bg-white rounded-2xl border border-emerald-200 space-y-1">
              <strong className="text-xs font-bold text-emerald-800 block">🛡️ Zero-Knowledge Architecture:</strong>
              <span className="text-3xs text-slate-600 block">
                HR sees <em>“64% benefit activation, 82% satisfaction”</em>. HR NEVER sees <em>“Priya is undergoing IVF”</em>. Preserves 100% employee trust.
              </span>
            </div>
          </div>

          {/* Pain Point 3 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">⏰</span>
              <span className="text-3xs font-black bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full uppercase">PAIN #3 · TIME &amp; ADMIN BURDEN</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">Managing dozens of clinic visits around work deliverables</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fertility and prenatal care involve consultations, ultrasound scans, blood tests, procedures, and leave paperwork.
            </p>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <strong className="text-xs font-bold text-amber-800 block">📅 Automated Care Coordination:</strong>
              <span className="text-3xs text-slate-600 block">
                Appointment ➔ Reminder ➔ Calendar ➔ Location ➔ Leave Planning ➔ Report Storage. Reduces administrative burden by 18+ hours.
              </span>
            </div>
          </div>

          {/* Pain Point 4 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">💰</span>
              <span className="text-3xs font-black bg-purple-100 text-purple-800 px-2 py-0.5 rounded-full uppercase">PAIN #4 · COST UNCERTAINTY</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">Unclear insurance coverage, IVF exclusions &amp; hidden fees</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Employees don&apos;t know what corporate insurance covers, out-of-pocket exposures, or hospital room rent caps.
            </p>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <strong className="text-xs font-bold text-purple-800 block">📑 Corporate Benefit Navigator:</strong>
              <span className="text-3xs text-slate-600 block">
                Employee selects employer plan and sees exact eligibility, Jan Aushadhi generic savings, and 0% EMI options.
              </span>
            </div>
          </div>

          {/* Pain Point 5 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🔬</span>
              <span className="text-3xs font-black bg-teal-100 text-teal-800 px-2 py-0.5 rounded-full uppercase">PAIN #5 · PROVIDER TRUST</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">Commercial advertisements masquerading as top doctors</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Google searches return paid ads, conflicting IVF success claims, and opaque hospital packages.
            </p>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <strong className="text-xs font-bold text-teal-800 block">⚖️ Unbiased Clinical Provider Network:</strong>
              <span className="text-3xs text-slate-600 block">
                Doctor ➔ Lab ➔ Fertility Center ➔ Hospital ranked on ICMR/ART compliance, NICU Level, and embryology standards. Zero sponsored bias.
              </span>
            </div>
          </div>

          {/* Pain Point 6 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🧠</span>
              <span className="text-3xs font-black bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full uppercase">PAIN #6 · MENTAL &amp; EMOTIONAL LOAD</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">Severe anxiety, treatment delays &amp; pregnancy fear</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fertility delays and postpartum hormones create substantial psychological distress that impairs workplace focus.
            </p>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <strong className="text-xs font-bold text-blue-800 block">💬 Confidential Mental Health Layer:</strong>
              <span className="text-3xs text-slate-600 block">
                1-on-1 certified perinatal psychologists, grief support after pregnancy loss, and stress management tools.
              </span>
            </div>
          </div>

          {/* Pain Point 7 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🤱</span>
              <span className="text-3xs font-black bg-pink-100 text-pink-800 px-2 py-0.5 rounded-full uppercase">PAIN #7 · FRAGMENTED MATERNITY</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">The employee is forced to be her own project manager</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Juggling OB/GYN ➔ Ultrasound ➔ Blood tests ➔ Hospital admission ➔ Pharmacy ➔ Postpartum care with zero coordination.
            </p>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <strong className="text-xs font-bold text-pink-800 block">📱 Pregnancy OS Orchestrator:</strong>
              <span className="text-3xs text-slate-600 block">
                Unified timeline from 1st trimester NT Scan to 3rd trimester hospital bag checklist and delivery room prep.
              </span>
            </div>
          </div>

          {/* Pain Point 8 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🏢</span>
              <span className="text-3xs font-black bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full uppercase">PAIN #8 · RETURN TO WORK</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">Postpartum career penalty &amp; lactation isolation</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              India provides 26 weeks of statutory maternity leave, but a 2025 study found immense anxiety regarding career setbacks and lack of crèche/lactation support.
            </p>
            <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100 space-y-1">
              <strong className="text-xs font-bold text-indigo-800 block">🎯 Phased Return-to-Work Program:</strong>
              <span className="text-3xs text-slate-600 block">
                4-week ramp-up coaching, certified lactation consultant support, manager sensitivity resources, and crèche navigation.
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ── SECTION 13 TO 17: THE 5 DANGERS EMPLOYERS ARE SOLVING ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">SECTION 13 · THE BUSINESS DANGERS</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            5 Enterprise Business Risks Solved
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Framing the true ROI for CHROs: reducing operational friction and talent loss.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-rose-600 font-black text-sm block">DANGER #1</span>
            <h4 className="font-bold text-xs text-slate-900">Loss of Female Talent</h4>
            <p className="text-[11px] text-slate-600 leading-tight">
              High attrition during fertility/maternity costs ₹8L–₹15L+ in replacement recruitment.
            </p>
            <span className="text-[10px] font-bold text-teal-700 block pt-1">✓ Solution: Retention coaching</span>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-purple-600 font-black text-sm block">DANGER #2</span>
            <h4 className="font-bold text-xs text-slate-900">Benefit Underutilization</h4>
            <p className="text-[11px] text-slate-600 leading-tight">
              Company spends on insurance &amp; EAP, but employees don&apos;t know how to use them (&lt;12% usage).
            </p>
            <span className="text-[10px] font-bold text-purple-700 block pt-1">✓ Solution: Benefits Activation Layer</span>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-amber-600 font-black text-sm block">DANGER #3</span>
            <h4 className="font-bold text-xs text-slate-900">Productivity Loss</h4>
            <p className="text-[11px] text-slate-600 leading-tight">
              Dozens of working hours wasted googling doctors, calling labs, and chasing hospital packages.
            </p>
            <span className="text-[10px] font-bold text-amber-700 block pt-1">✓ KPI: 18h Admin Time Saved</span>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-blue-600 font-black text-sm block">DANGER #4</span>
            <h4 className="font-bold text-xs text-slate-900">Career Penalty Perception</h4>
            <p className="text-[11px] text-slate-600 leading-tight">
              Fear that maternity slows career growth leads to disengagement and postpartum drop-off.
            </p>
            <span className="text-[10px] font-bold text-blue-700 block pt-1">✓ Solution: Return-to-work ramp</span>
          </div>

          <div className="bg-white rounded-3xl p-5 border-2 border-rose-300 bg-rose-50/30 shadow-2xs space-y-2">
            <span className="text-rose-700 font-black text-sm block">DANGER #5 (10× RISK)</span>
            <h4 className="font-bold text-xs text-slate-900">Privacy Breach</h4>
            <p className="text-[11px] text-slate-600 leading-tight">
              If HR ever discovers employee IVF/pregnancy data, company trust is instantly destroyed.
            </p>
            <span className="text-[10px] font-bold text-rose-700 block pt-1">✓ Solution: Zero-Knowledge Shield</span>
          </div>

        </div>
      </section>

      {/* ── SECTION 18 TO 24: MEDITRUST FAMILY HEALTH OS™ 6 LIFECYCLE STAGES ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-md space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">SECTION 18 · PRODUCT EXPERIENCE</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
              Meditrust Family Health OS™
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              When an employee opens the platform, they choose their exact life-stage for an instant personalized roadmap:
            </p>
          </div>

          {/* 6 Stage Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
            {[
              { id: 'plan', icon: '🌱', label: '1. PLAN', desc: 'Thinking of baby' },
              { id: 'fertility', icon: '🧬', label: '2. FERTILITY', desc: 'Trying to conceive' },
              { id: 'pregnancy', icon: '🤰', label: '3. PREGNANCY', desc: 'I am pregnant' },
              { id: 'maternity', icon: '📋', label: '4. MATERNITY', desc: 'Leave preparation' },
              { id: 'postpartum', icon: '🤱', label: '5. POSTPARTUM', desc: 'After birth care' },
              { id: 'support', icon: '💼', label: '6. RETURN WORK', desc: 'Career continuity' }
            ].map((st) => (
              <button
                key={st.id}
                onClick={() => setActiveStage(st.id as any)}
                className={`p-3 rounded-2xl text-left border transition-all ${
                  activeStage === st.id
                    ? 'bg-purple-900 text-white border-purple-900 shadow-md scale-102'
                    : 'bg-slate-50 border-slate-200 hover:bg-slate-100 text-slate-800'
                }`}
              >
                <span className="text-lg block">{st.icon}</span>
                <strong className="text-xs font-black block mt-1">{st.label}</strong>
                <span className={`text-[10px] block truncate ${activeStage === st.id ? 'text-purple-200' : 'text-slate-500'}`}>
                  {st.desc}
                </span>
              </button>
            ))}
          </div>

          {/* Stage Details Content */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-50 via-white to-rose-50 border border-purple-100 space-y-4">
            {activeStage === 'plan' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                  <span>🌱</span>
                  <span>STAGE 1: PLAN — “I&apos;m thinking about having a baby”</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Preconception genetic education, AMH ovarian reserve risk evaluation, lifestyle optimization, egg freezing guidance, company benefit eligibility check, and confidential teleconsultations.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-purple-950">
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ 90-Day Preconception Roadmap</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ AMH Risk Assessment</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ At-Home Couple Blood Panel</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ Oocyte Vitrification Guide</span>
                </div>
              </div>
            )}

            {activeStage === 'fertility' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                  <span>🧬</span>
                  <span>STAGE 2: FERTILITY — “I&apos;m trying to conceive”</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  AI Ovulation &amp; Fertile Window Tracker, Semen analysis WHO criteria testing, reproductive endocrinologist discovery, IVF clinic comparison, and corporate insurance co-pay navigation.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-purple-950">
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ Clinical Ovulation Predictor</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ Transparent IVF Packages</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ Jan Aushadhi Generic Savings</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ Fertility Stress Psychologist</span>
                </div>
              </div>
            )}

            {activeStage === 'pregnancy' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                  <span>🤰</span>
                  <span>STAGE 3: PREGNANCY — “I&apos;m pregnant”</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Week-by-week fetal milestone OS, obstetric scan schedule (NT Scan, TIFFA Anomaly, Doppler), high-risk symptom triage, maternal nutrition, and maternity hospital discovery.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-purple-950">
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ 40-Week Milestone Tracker</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ 24/7 Dr. Arya AI Obstetric Triage</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ Delivery Package Comparison</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ Trimester Nutrition Plans</span>
                </div>
              </div>
            )}

            {activeStage === 'maternity' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                  <span>📋</span>
                  <span>STAGE 4: MATERNITY — “Before maternity leave”</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Maternity Benefit Act (26 weeks) compliance documentation, manager handover communication templates, hospital bag packing checklist, and insurance pre-authorization.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-purple-950">
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ 26-Week Statutory Documentation</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ 40-Item Hospital Bag Checklist</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ Cashless Insurance Pre-Auth</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ Manager Alignment Toolkit</span>
                </div>
              </div>
            )}

            {activeStage === 'postpartum' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                  <span>🤱</span>
                  <span>STAGE 5: POSTPARTUM — “After birth care &amp; recovery”</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Certified lactation consultant video consults, postpartum depression (PPD) screening, pelvic floor physical therapy, newborn immunization reminders, and infant care guidance.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-purple-950">
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ Certified Lactation Consultations</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ EPDS Postpartum Mental Health</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ Sakhi™ Postpartum Healing Kits</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ Newborn Vaccine Tracker</span>
                </div>
              </div>
            )}

            {activeStage === 'support' && (
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-purple-700 font-bold text-sm">
                  <span>💼</span>
                  <span>STAGE 6: RETURN-TO-WORK — “Career continuity &amp; transition”</span>
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Structured 4-week return-to-work ramp, mother room lactation audits, crèche navigation, flexible-work agreement templates, and executive motherhood coaching.
                </p>
                <div className="flex flex-wrap gap-2 text-xs font-semibold text-purple-950">
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ 4-Week Phased Return Ramp</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ Crèche &amp; Childcare Navigation</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ Mother Room Setup Standards</span>
                  <span className="bg-white px-3 py-1 rounded-lg border border-purple-200">✓ Working Mother Mentorship</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── SECTION 25: LIVE SIMULATED HR EMPLOYER CONSOLE ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-3xs font-black uppercase">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>LIVE HR CONSOLE SIMULATION · ZERO-KNOWLEDGE PRIVACY</span>
              </div>
              <h2 className="text-xl sm:text-3xl font-black text-white mt-1">
                Meditrust Employer Analytics Console
              </h2>
              <p className="text-xs text-slate-400">
                What HR sees: Anonymized utilization, engagement, and measurable ROI — with 0% access to individual medical records.
              </p>
            </div>
            <span className="text-3xs font-mono bg-emerald-950 text-emerald-400 border border-emerald-800 px-3 py-1.5 rounded-xl">
              ● Live Enterprise Connection Active
            </span>
          </div>

          {/* Anonymized Metrics Dashboard */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-3xs font-bold text-slate-400 uppercase">Enrolled Employees</span>
              <span className="text-xl sm:text-2xl font-black text-white block">10,000</span>
              <span className="text-[10px] text-emerald-400">100% Corporate Coverage</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-3xs font-bold text-slate-400 uppercase">Benefit Activation</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 block">64.2%</span>
              <span className="text-[10px] text-slate-300">6,420 Active Employees</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-3xs font-bold text-slate-400 uppercase">Employee CSAT</span>
              <span className="text-xl sm:text-2xl font-black text-purple-400 block">82.4%</span>
              <span className="text-[10px] text-purple-300">4.8 / 5.0 Star Rating</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-3xs font-bold text-slate-400 uppercase">Admin Hours Saved</span>
              <span className="text-xl sm:text-2xl font-black text-amber-400 block">4,820 hrs</span>
              <span className="text-[10px] text-amber-300">₹31.3L Productivity Saved</span>
            </div>
          </div>

          {/* Anonymized Category Breakdown Bar */}
          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-white">Aggregated Care Category Distribution (100% Anonymized)</span>
              <span className="text-slate-400 text-3xs">No individual PII or names</span>
            </div>

            <div className="h-4 w-full rounded-full bg-slate-800 overflow-hidden flex">
              <div style={{ width: '36%' }} className="bg-rose-500" title="Maternity & Prenatal (36%)" />
              <div style={{ width: '28%' }} className="bg-purple-500" title="Fertility & Conception (28%)" />
              <div style={{ width: '22%' }} className="bg-emerald-500" title="Postpartum & Return-to-Work (22%)" />
              <div style={{ width: '14%' }} className="bg-teal-500" title="Preconception Planning (14%)" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-3xs font-semibold">
              <span className="flex items-center gap-1.5 text-rose-300">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" /> 36% Maternity &amp; Prenatal
              </span>
              <span className="flex items-center gap-1.5 text-purple-300">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500 inline-block" /> 28% Fertility &amp; Conception
              </span>
              <span className="flex items-center gap-1.5 text-emerald-300">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> 22% Postpartum &amp; Return
              </span>
              <span className="flex items-center gap-1.5 text-teal-300">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-500 inline-block" /> 14% Preconception Planning
              </span>
            </div>
          </div>

          {/* Explicit Privacy Banner */}
          <div className="p-4 rounded-2xl bg-rose-950/40 border border-rose-800/80 flex items-start gap-3">
            <EyeOff className="w-5 h-5 text-rose-400 flex-shrink-0 mt-0.5" />
            <div className="space-y-1 text-xs text-rose-200">
              <strong className="text-white font-bold block">Strict Privacy Guarantee — What HR NEVER Sees:</strong>
              <p className="text-[11px] leading-relaxed text-rose-300">
                ❌ Individual employee diagnoses &nbsp;|&nbsp; ❌ IVF / Fertility status &nbsp;|&nbsp; ❌ Pregnancy confirmations &nbsp;|&nbsp; ❌ Individual mental health counselling notes &nbsp;|&nbsp; ❌ Individual diagnostic lab reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 26 TO 30: ENTERPRISE ROI & PEPM PRICING CALCULATOR ── */}
      <section id="roi-calculator" className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">SECTION 26 · BUSINESS MODEL &amp; PRICING</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            Interactive Enterprise PEPM &amp; Clinical ROI Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Simulate your organization&apos;s investment, adverse outcome cost avoidance, administrative time savings, and female talent retention payback.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Controls: Left 6 Cols */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            
            {/* 1. Headcount Slider */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-900">Total Employee Headcount:</label>
                <span className="text-sm font-black text-purple-700 bg-purple-50 px-3 py-1 rounded-xl border border-purple-200">
                  {headcount.toLocaleString()} Employees
                </span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={headcount}
                onChange={(e) => setHeadcount(Number(e.target.value))}
                className="w-full accent-purple-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>500 (Growth)</span>
                <span>10,000 (Mid-Enterprise)</span>
                <span>50,000 (Global Enterprise)</span>
              </div>
            </div>

            {/* 2. Female Workforce % */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-slate-900">Female Workforce Percentage (%):</label>
                <span className="text-sm font-black text-rose-700 bg-rose-50 px-3 py-1 rounded-xl border border-rose-200">
                  {femaleRatio}% ({roiCalculations.femaleEmployees.toLocaleString()} Women)
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="70"
                step="5"
                value={femaleRatio}
                onChange={(e) => setFemaleRatio(Number(e.target.value))}
                className="w-full accent-rose-600 cursor-pointer"
              />
            </div>

            {/* 3. PEPM Plan Tier Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-900 block">Select PEPM Package Tier:</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'essential', label: 'Essential', price: '₹25', desc: 'Education & Navigation' },
                  { id: 'plus', label: 'Plus (Popular)', price: '₹75', desc: 'AI + Telehealth + OS' },
                  { id: 'premium', label: 'Premium', price: '₹150', desc: 'Full Care Coordination' }
                ].map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setPlanTier(p.id as any)}
                    className={`p-3 rounded-2xl border text-left transition-all ${
                      planTier === p.id
                        ? 'bg-purple-900 text-white border-purple-900 shadow-md ring-2 ring-purple-600/30'
                        : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs font-black block">{p.label}</span>
                    <strong className={`text-base font-black block ${planTier === p.id ? 'text-purple-300' : 'text-purple-700'}`}>
                      {p.price} <span className="text-[10px] font-normal">PEPM</span>
                    </strong>
                    <span className={`text-[9px] block ${planTier === p.id ? 'text-purple-200' : 'text-slate-500'}`}>
                      {p.desc}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Adverse Outcome Cost Avoidance Toggle */}
            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="text-xs font-bold text-emerald-950 block">Include Clinical Adverse Cost Avoidance</span>
                <span className="text-3xs text-emerald-700 block">28% NICU/Preterm &amp; 34% C-section cost reductions</span>
              </div>
              <button
                onClick={() => setIncludeAdverseSavings(!includeAdverseSavings)}
                className={`w-12 h-6 rounded-full transition-colors relative p-0.5 ${includeAdverseSavings ? 'bg-emerald-600' : 'bg-slate-300'}`}
              >
                <div className={`w-5 h-5 rounded-full bg-white transition-transform ${includeAdverseSavings ? 'translate-x-6' : 'translate-x-0'}`} />
              </button>
            </div>

            {/* Implementation and Partnership Add-ons */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 space-y-1">
              <strong className="text-slate-900 block font-bold">Enterprise Implementation &amp; Distribution:</strong>
              <span className="text-3xs block">
                • <strong>Model D:</strong> ₹2L–₹20L enterprise HRIS (Workday/Darwinbox) SSO and insurer integration fee.
              </span>
              <span className="text-3xs block">
                • <strong>Model E (Insurer Distribution):</strong> Group TPA/insurer co-funded distribution covering entire corporate portfolios.
              </span>
            </div>

          </div>

          {/* Results: Right 6 Cols */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 border border-purple-800 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-purple-800/80 pb-3">
                <span className="text-xs font-bold text-purple-300 uppercase tracking-wider">ANNUAL FINANCIAL SUMMARY</span>
                <span className="text-xs font-black bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">
                  {roiCalculations.netRoi}x Net ROI Projected
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-3xs text-slate-400">Monthly PEPM Investment</span>
                  <span className="text-lg sm:text-xl font-black text-white block">
                    ₹{(roiCalculations.monthlyTotal / 100000).toFixed(2)} Lakhs
                  </span>
                </div>
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <span className="text-3xs text-slate-400">Annual Enterprise Fee</span>
                  <span className="text-lg sm:text-xl font-black text-purple-300 block">
                    ₹{(roiCalculations.annualTotal / 100000).toFixed(2)} Lakhs
                  </span>
                </div>
              </div>

              {/* Total Value Created */}
              <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-1">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-300">Total Enterprise Value Created:</span>
                  <strong className="text-xl font-black text-emerald-400">
                    ₹{(roiCalculations.totalValueCreated / 100000).toFixed(2)} Lakhs / yr
                  </strong>
                </div>
              </div>

              {/* Breakdown */}
              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-700/60 flex justify-between items-center">
                  <span className="text-emerald-300">Admin Time Recouped ({roiCalculations.totalHoursSaved.toLocaleString()} hrs):</span>
                  <strong className="text-white font-bold">₹{(roiCalculations.adminCostSaved / 100000).toFixed(2)} Lakhs</strong>
                </div>
                <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-700/60 flex justify-between items-center">
                  <span className="text-rose-300">Female Retention Value ({roiCalculations.femaleRetained} Women):</span>
                  <strong className="text-white font-bold">₹{(roiCalculations.retentionValueSaved / 100000).toFixed(2)} Lakhs</strong>
                </div>
                {includeAdverseSavings && (
                  <div className="p-3 rounded-xl bg-purple-950/40 border border-purple-700/60 flex justify-between items-center">
                    <span className="text-purple-300">Adverse Clinical Cost Avoidance:</span>
                    <strong className="text-white font-bold">₹{(roiCalculations.adverseOutcomesSaved / 100000).toFixed(2)} Lakhs</strong>
                  </div>
                )}
              </div>
            </div>

            <a
              href="https://wa.me/917028025717?text=Hi%20Meditrust,%20we%20ran%20the%20Corpo%20Mom%20ROI%20calculator%20for%20our%20workforce%20and%20want%20to%20discuss%20a%20pilot"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-slate-950 font-black text-xs text-center shadow-lg transition-transform hover:scale-102 flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Custom Enterprise RFP &amp; Pilot Proposal</span>
            </a>
          </div>

        </div>
      </section>

      {/* ── SECTION 31 TO 36: ICP & BUYER PERSONA MATRIX ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">SECTION 31 · ICP &amp; BUYER PERSONAS</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            Target ICP &amp; Enterprise Buying Committee
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Companies with 1,000–50,000 employees, high female workforce percentage, and competitive attrition pressures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-xl">👑</span>
            <span className="text-3xs font-black uppercase text-purple-700 bg-purple-100 px-2 py-0.5 rounded">ECONOMIC BUYER</span>
            <h4 className="font-bold text-sm text-slate-900">CHRO / Chief People Officer</h4>
            <p className="text-xs text-slate-600 leading-tight">
              Cares about female attrition, Great Place to Work rankings, and workforce continuity during maternal transitions.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-xl">💳</span>
            <span className="text-3xs font-black uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">BUDGET OWNER</span>
            <h4 className="font-bold text-sm text-slate-900">Total Rewards &amp; Benefits Head</h4>
            <p className="text-xs text-slate-600 leading-tight">
              Cares about insurance claim efficiency, benefits utilization rates, and demonstrable PEPM cost payback.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-xl">🌟</span>
            <span className="text-3xs font-black uppercase text-rose-700 bg-rose-100 px-2 py-0.5 rounded">INFLUENCER</span>
            <h4 className="font-bold text-sm text-slate-900">Diversity, Equity &amp; Inclusion (DEI) Head</h4>
            <p className="text-xs text-slate-600 leading-tight">
              Cares about maternal career setbacks, pay gap mitigation, and tangible support for working mothers.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-xl">🤝</span>
            <span className="text-3xs font-black uppercase text-blue-700 bg-blue-100 px-2 py-0.5 rounded">DISTRIBUTION PARTNER</span>
            <h4 className="font-bold text-sm text-slate-900">Insurance Broker / TPA</h4>
            <p className="text-xs text-slate-600 leading-tight">
              Offers Meditrust as a value-added healthcare orchestration layer across 1,000+ corporate clients.
            </p>
          </div>

        </div>

        {/* Prime Industry Sectors */}
        <div className="p-4 rounded-3xl bg-slate-900 text-white flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="font-bold text-purple-300">🎯 Prime Industry ICPs in India:</span>
          <div className="flex flex-wrap gap-2 text-3xs font-bold">
            <span className="bg-white/10 px-3 py-1 rounded-full">IT / ITES</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">BFSI &amp; Fintech</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Consulting (Big 4 &amp; MBB)</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Global Capability Centers (GCCs)</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Pharma &amp; Healthcare</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">FMCG &amp; E-commerce</span>
            <span className="bg-white/10 px-3 py-1 rounded-full">Growth Tech Startups (&gt;500 FTEs)</span>
          </div>
        </div>
      </section>

      {/* ── SECTION 37: THE 14-SLIDE INTERACTIVE PITCH DECK ── */}
      <section id="pitch-deck" className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">SECTION 37 · CORPORATE PRESENTATION</span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                14-Slide Enterprise Pitch Deck
              </h2>
              <p className="text-xs text-slate-500">
                Navigate through the complete board-ready pitch deck for CHROs and Total Rewards Leaders.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-xl border border-purple-200">
                Slide {activeSlide} of {pitchSlides.length}
              </span>
            </div>
          </div>

          {/* Slide Display Card */}
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900 text-white min-h-[300px] flex flex-col justify-between space-y-6 shadow-md relative overflow-hidden">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-3xs font-black uppercase tracking-widest text-purple-400 bg-purple-500/20 px-3 py-1 rounded-full border border-purple-500/30">
                  SLIDE #{pitchSlides[activeSlide - 1].num} · {pitchSlides[activeSlide - 1].title}
                </span>
                <span className="text-3xs text-slate-400">Meditrust B2B Confidential</span>
              </div>

              <h3 className="text-xl sm:text-3xl font-black text-white leading-tight">
                {pitchSlides[activeSlide - 1].subtitle}
              </h3>

              <p className="text-xs sm:text-sm text-purple-200 font-medium italic">
                “{pitchSlides[activeSlide - 1].highlight}”
              </p>

              <ul className="space-y-2 pt-2 text-xs text-slate-300">
                {pitchSlides[activeSlide - 1].points.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Slide Navigation Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-purple-800/80">
              <button
                onClick={() => setActiveSlide((prev) => (prev > 1 ? prev - 1 : pitchSlides.length))}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white transition-colors"
              >
                ← Previous Slide
              </button>

              <div className="flex gap-1 overflow-x-auto max-w-[50%] py-1">
                {pitchSlides.map((s) => (
                  <button
                    key={s.num}
                    onClick={() => setActiveSlide(s.num)}
                    className={`w-6 h-6 rounded-lg text-3xs font-bold transition-all ${
                      activeSlide === s.num
                        ? 'bg-rose-500 text-white scale-110 shadow-xs'
                        : 'bg-white/10 text-slate-400 hover:bg-white/20'
                    }`}
                  >
                    {s.num}
                  </button>
                ))}
              </div>

              <button
                onClick={() => setActiveSlide((prev) => (prev < pitchSlides.length ? prev + 1 : 1))}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-rose-500 hover:from-purple-600 hover:to-rose-600 text-xs font-bold text-white shadow-sm"
              >
                Next Slide →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 38: THE RUTHLESS ANALYSIS & 10× RISK DEFENSE ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-2xl space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">SECTION 38 · RUTHLESS CRITIQUE &amp; DEFENSE</span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              The Ruthless Assumption Check &amp; 10× Moat
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Why most corporate health apps fail — and how Meditrust’s orchestration architecture wins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-6 rounded-2xl bg-white/5 border border-rose-800/60 space-y-3">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>3 REASONS THIS COULD FAIL</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">1.</span>
                  <span><strong>Privacy failure:</strong> One leak of IVF/pregnancy data destroys employee trust forever.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">2.</span>
                  <span><strong>Low engagement:</strong> Without an immediate 60-second trigger, benefits portals get ignored.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-rose-400 font-bold">3.</span>
                  <span><strong>Weak ROI proof:</strong> CHROs will not renew on soft &quot;happiness&quot; metrics without hard retention numbers.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-emerald-800/60 space-y-3">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase">
                <ShieldCheck className="w-4 h-4" />
                <span>MEDITRUST&apos;S 10× DEFENSE</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Zero-Knowledge Architecture:</strong> Cryptographically isolated employee vaults. HR never receives PII.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>High-Intent Triggers:</strong> Answers <em>“What do I do next?”</em> with instant clinical action.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span><strong>Measurable KPI Engine:</strong> Quantifies administrative hours saved, adverse events avoided &amp; talent retained.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-purple-800/60 space-y-3">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-xs uppercase">
                <Zap className="w-4 h-4" />
                <span>500–1000 PILOT BLUEPRINT</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Run a phased 90-day pilot measuring:
              </p>
              <div className="p-3 bg-white/5 rounded-xl text-3xs font-mono text-purple-200 space-y-1">
                <div>1. Awareness ➔ 92% Reach</div>
                <div>2. Activation ➔ 64% Registered</div>
                <div>3. 1st Action in &lt;60s</div>
                <div>4. Provider / Telehealth Util</div>
                <div>5. Verified Hours Saved Report</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ENTERPRISE CTA / PILOT BOOKING FOOTER ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl bg-gradient-to-r from-purple-900 via-rose-900 to-slate-900 text-white p-8 sm:p-12 border border-purple-800 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-3xs font-black uppercase tracking-widest text-purple-300 bg-white/10 px-3.5 py-1.5 rounded-full">
              ENTERPRISE FAMILY HEALTH OS™ PILOT
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Ready to Retain Your Top Female Talent?
            </h2>
            <p className="text-xs sm:text-sm text-slate-200">
              Transform your corporate benefits into a high-retention family health infrastructure. Schedule an executive briefing with our enterprise clinical team.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/917028025717?text=Hi%20Meditrust,%20we%20would%20like%20to%20schedule%20an%20Executive%20Briefing%20for%20Corpo%20Mom%20Family%20Health%20OS"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-white text-slate-950 font-black text-xs hover:bg-slate-100 transition-transform hover:scale-105 flex items-center gap-2 shadow-xl"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>Schedule 30-Min Executive Briefing (WhatsApp)</span>
            </a>

            <Link
              href="/corporate-wellness"
              className="px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors"
            >
              View Full Corporate Wellness Hub →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
