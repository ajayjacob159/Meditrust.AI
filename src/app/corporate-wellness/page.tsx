'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Building2, Users, ShieldCheck, Stethoscope, Sparkles, Activity,
  Clock, Heart, CheckCircle2, ArrowRight, Phone, Mail, Award,
  DollarSign, TrendingDown, TrendingUp, Zap, HelpCircle, FileText,
  ChevronRight, Calculator, PieChart, Lock, UserCheck, MessageCircle,
  AlertTriangle, Scale, Shield, Landmark
} from 'lucide-react'

export default function CorporateWellnessPage() {
  // ROI Calculator State
  const [employeeCount, setEmployeeCount] = useState<number>(250)

  // Demo Booking Form State
  const [companyName, setCompanyName] = useState('')
  const [contactName, setContactName] = useState('')
  const [workEmail, setWorkEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('Pune / PCMC (Hinjewadi / Magarpatta)')
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    '24/7 AI Doctor Triage',
    "Women's Health & PCOS Program",
    'Maternity & Return-to-Work Care',
    '80% Jan Aushadhi Generic Savings'
  ])
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // ROI Calculations based on User's Framework
  // Prevent mid-career dropouts: ~1 dropout prevented per 50 women employees
  const dropoutsPrevented = Math.max(1, Math.round(employeeCount * 0.04))
  // Replacement cost saved: ~₹6,00,000 per talent (50-80L for 10)
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
      
      {/* ── 1. BREADCRUMBS ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/womens-health" className="hover:text-rose-700 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Corporate Employer Wellness</span>
        </nav>
      </div>

      {/* ── 2. HERO SECTION ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Headline, Sub-headline & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 border border-rose-200 text-rose-950 text-xs font-black shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping" />
              <span>MEDITRUST FOR ENTERPRISE · WOMEN&apos;S CORPORATE WELLNESS</span>
            </div>

            {/* Exact Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
              Keep Your Women Talent <span className="text-gradient-chic">Healthy, Present &amp; Promoted.</span>
            </h1>

            {/* Exact Sub-headline */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
              <strong>48% of women drop out within 4 months of returning from maternity.</strong> 79.7% say periods or menopause affect productivity, but won&apos;t tell HR. <strong>Meditrust AI</strong> gives them private, 24/7 care in Marathi, Hindi &amp; English — without exposing personal data to HR.
            </p>

            {/* Key Quick Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Private — Zero Personal Data Disclosed to HR</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>24/7 WhatsApp AI in Marathi, Hindi &amp; English</span>
              </div>
            </div>

            {/* Exact CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#demo-request"
                className="px-7 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-md transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <span>Book Corporate Demo</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20am%20an%20HR%20Leader%20interested%20in%20Meditrust%20Women%27s%20Corporate%20Wellness"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#008069] hover:bg-[#006e5a] text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Talk to Dr. Arya on WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: Hero Impact Metric Box */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-rose-500/20 via-purple-500/20 to-teal-500/20 rounded-3xl blur-xl" />
            
            <div className="relative bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-rose-500/20 text-rose-300 flex items-center justify-center font-bold text-lg">
                    🌸
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-white">Talent Retention Engine</h3>
                    <span className="text-3xs text-rose-400 font-semibold">Active in Hinjewadi, Magarpatta &amp; PCMC IT Parks</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 bg-white/10 rounded-lg text-emerald-300">
                  10–16x ROI
                </span>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-slate-400 block text-3xs">Maternity Dropouts</span>
                  <span className="text-lg font-black text-rose-400">48% Industry Rate</span>
                  <span className="text-3xs text-slate-400">Halted with 1-on-1 AI Triage</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-slate-400 block text-3xs">Silent Productivity Tax</span>
                  <span className="text-lg font-black text-amber-400">79.7% Women</span>
                  <span className="text-3xs text-slate-400">Periods/Menopause affected</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-slate-400 block text-3xs">Annual Absenteeism</span>
                  <span className="text-lg font-black text-emerald-400">-8 to 12 Days</span>
                  <span className="text-3xs text-slate-400">Recovered per woman/year</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-slate-400 block text-3xs">Corporate Pricing</span>
                  <span className="text-lg font-black text-teal-300">₹500 / year</span>
                  <span className="text-3xs text-slate-400">Per employee covered</span>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/10 text-3xs text-slate-300 flex items-center justify-between">
                <span>🛡️ ABDM &amp; HIPAA Compliant</span>
                <span className="font-bold text-white">POSH &amp; Maternity Act Aligned</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. SECTION 2: THE PROBLEM HR DOESN'T SEE (INVISIBLE PRODUCTIVITY TAX) ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-rose-200 shadow-sm space-y-8">
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-700 uppercase tracking-wider">
              <span>🌸 SECTION 02 · WORKPLACE BURDEN</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              The Invisible Productivity Tax HR Doesn&apos;t See
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Women rarely report chronic reproductive and hormonal distress to corporate HR due to taboos, embarrassment, or fear of career penalty. Here is the hidden data:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            {/* Tax 1 */}
            <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-rose-200 text-rose-900 flex items-center justify-center text-2xl">
                  🩸
                </div>
                <h3 className="font-black text-base text-slate-950 leading-snug">
                  37% Professional Women Are Anemic
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Chronic exhaustion, brain fog, and midday energy crashes hitting women at the exact peak of their corporate careers.
                </p>
              </div>
              <span className="text-3xs font-bold text-rose-800 bg-rose-100 px-2.5 py-1 rounded-lg w-fit">
                Ferritin Depletion
              </span>
            </div>

            {/* Tax 2 */}
            <div className="p-6 rounded-3xl bg-purple-50/70 border border-purple-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-purple-200 text-purple-900 flex items-center justify-center text-2xl">
                  🩺
                </div>
                <h3 className="font-black text-base text-slate-950 leading-snug">
                  1 in 5 (20.7%) Has Diagnosed PCOS
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Coupled with a 22.3% higher workplace stress burden, anxiety flareups, metabolic fatigue, and hormonal acne.
                </p>
              </div>
              <span className="text-3xs font-bold text-purple-800 bg-purple-100 px-2.5 py-1 rounded-lg w-fit">
                Metabolic Twin Crisis
              </span>
            </div>

            {/* Tax 3 */}
            <div className="p-6 rounded-3xl bg-amber-50/70 border border-amber-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-amber-200 text-amber-900 flex items-center justify-center text-2xl">
                  🌸
                </div>
                <h3 className="font-black text-base text-slate-950 leading-snug">
                  70–80% Menstrual Discomfort
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  7% to 8.8% take 2 to 3 days off every 3 months, often disguising severe dysmenorrhea under vague sick leaves.
                </p>
              </div>
              <span className="text-3xs font-bold text-amber-800 bg-amber-100 px-2.5 py-1 rounded-lg w-fit">
                Dysmenorrhea
              </span>
            </div>

            {/* Tax 4 */}
            <div className="p-6 rounded-3xl bg-teal-50/70 border border-teal-200 space-y-3 flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-12 h-12 rounded-2xl bg-teal-200 text-teal-900 flex items-center justify-center text-2xl">
                  🦋
                </div>
                <h3 className="font-black text-base text-slate-950 leading-snug">
                  Perimenopause Starts at 44.7y
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  Exactly when women should ascend into CXO &amp; VP leadership — yet 79% feel uncomfortable discussing hot flashes or sleep disruptions.
                </p>
              </div>
              <span className="text-3xs font-bold text-teal-800 bg-teal-100 px-2.5 py-1 rounded-lg w-fit">
                Mid-Life Transition
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. SECTION 3: WHY BLANKET PERIOD LEAVE FAILS (TRUST BUILDER) ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl space-y-6 relative overflow-hidden">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-xl">
              ⚖️
            </div>
            <div>
              <span className="text-3xs font-black uppercase tracking-wider text-amber-400">
                SECTION 03 · POLICY &amp; CLINICAL GOVERNANCE
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white">
                Why Blanket Period Leave Fails — And What Actually Works
              </h3>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3">
            <p>
              <strong>The Supreme Court of India in March 2026 declined mandatory period leave</strong> — noting that rigid, mandated labels may inadvertently make employers hesitant to hire women in competitive roles.
            </p>
            <p className="text-teal-300 font-bold">
              The real solution is not a labeled, stigmatized leave. It is private wellness care, certified by AI triage, without exposing personal medical reasons to HR.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-2 text-xs">
            <div className="flex items-center gap-2 text-slate-400">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Employee receives confidential medical triage &amp; non-surgical pain protocols.</span>
            </div>
            <a
              href="#demo-request"
              className="text-rose-400 hover:text-rose-300 font-bold flex items-center gap-1 underline"
            >
              <span>See How Meditrust Private Certification Works →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── 5. SECTION 4: MEDITRUST 4-PILLAR CORPORATE PROGRAM ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-3 py-1 rounded-full border border-rose-200">
            SECTION 04 · ENTERPRISE ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            The Meditrust 4-Pillar Corporate Program
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Our 6 core clinical intelligence tools mapped directly into actionable corporate wellness benefits:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Pillar 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-blue-200 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🤖</span>
                <span className="text-3xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-100 text-blue-900 font-mono">
                  Pillar 01
                </span>
              </div>
              <h3 className="font-black text-lg text-slate-950">
                Dr. Arya — 100% Private AI Doctor
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                24/7 WhatsApp triage in Marathi, Hindi &amp; English. <strong>No HR sees personal chats.</strong> Only anonymous organizational aggregates (e.g. <em>&quot;32% flagged irregular cycles&quot;</em>). Solves the massive 62% national barrier: lack of female providers.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-blue-700 font-bold">
              <span>Zero Waiting Time Triage</span>
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-emerald-200 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">📊</span>
                <span className="text-3xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 font-mono">
                  Pillar 02
                </span>
              </div>
              <h3 className="font-black text-lg text-slate-950">
                MediVault™ + Dynamic Health Score (0–100)
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Auto-graphs Ferritin, HbA1c, TSH, and AMH over time. Detects <em>&quot;Hb 12.0 but Ferritin &lt;15 — cellular energy drained&quot;</em> <strong>3 months before employee burnout occurs</strong>. Replaces emergency sick leave with proactive nutritional action.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-emerald-700 font-bold">
              <span>Predictive Burnout Prevention</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">💊</span>
                <span className="text-3xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 font-mono">
                  Pillar 03
                </span>
              </div>
              <h3 className="font-black text-lg text-slate-950">
                Save Up To 80% + 60-Min Doorstep Lab Pickups
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Matches branded Rx vs. PMBJP Jan Aushadhi generics. 60-minute doorstep blood pickups across 13 NABL labs in Pune (Metropolis, Lal, Thyrocare) and VIP hospital desks at Ruby Hall &amp; Sahyadri. <strong>Less work time lost for lab reports.</strong>
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-amber-700 font-bold">
              <span>Out-of-Pocket Cost Relief</span>
              <CheckCircle2 className="w-4 h-4 text-amber-600" />
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-rose-200 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-all">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🌸</span>
                <span className="text-3xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-rose-100 text-rose-900 font-mono">
                  Pillar 04
                </span>
              </div>
              <h3 className="font-black text-lg text-slate-950">
                7 Life Stages = Full Employee Lifecycle
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Teen Health → Menstrual → PCOS → Fertility → Pregnancy (week-by-week scans + second opinion before C-section, curbing the 54.1% private hospital rate) → Postnatal (lactation + PPD screening) → Mid-Life &amp; Menopause (Meno Club).
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-rose-700 font-bold">
              <span>40-Year Continuous Care</span>
              <CheckCircle2 className="w-4 h-4 text-rose-600" />
            </div>
          </div>

        </div>

      </section>

      {/* ── 6. SECTION 5: PRIVACY & COMPLIANCE ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white border border-slate-800 flex flex-wrap items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <span className="text-3xs font-bold uppercase tracking-wider text-emerald-400">
              SECTION 05 · ENTERPRISE COMPLIANCE &amp; SECURITY
            </span>
            <h3 className="text-base sm:text-lg font-black">
              ABDM &amp; HIPAA Compliant | ICMR &amp; WHO Protocols | 91.4% Accuracy
            </h3>
            <p className="text-xs text-slate-400">
              HR sees only anonymized organizational dashboards, never personal symptoms. Strictly aligned with POSH and the Maternity Benefit Act (26 weeks paid leave).
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-3xs font-bold text-slate-200">
            <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/10">🔒 256-Bit AES</span>
            <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/10">📜 POSH Aligned</span>
            <span className="px-3 py-1.5 rounded-xl bg-white/10 border border-white/10">👶 Maternity Act 26W</span>
          </div>
        </div>
      </section>

      {/* ── 7. SECTION 6: ROI FOR EMPLOYERS & PRICING ── */}
      <section id="roi-calculator" className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
        
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
            SECTION 06 · QUANTIFIABLE BUSINESS CASE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Clear, Quantifiable ROI for Leadership
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Starting at just <strong>₹500 / employee / year</strong> for Pune, PCMC, and Hinjewadi IT Parks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Controls Slider */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-bold">
                <label htmlFor="corpEmployeeRange" className="text-slate-800">Women &amp; Total Workforce Covered:</label>
                <span className="text-rose-600 bg-rose-50 px-3 py-1 rounded-xl border border-rose-200 font-mono text-base font-black">
                  {employeeCount.toLocaleString('en-IN')} Employees
                </span>
              </div>
              <input
                id="corpEmployeeRange"
                type="range"
                min="25"
                max="3000"
                step="25"
                value={employeeCount}
                onChange={(e) => setEmployeeCount(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-rose-600"
              />
              <div className="flex justify-between text-3xs text-slate-400 font-bold">
                <span>25 (Startups)</span>
                <span>250 (Mid-Market)</span>
                <span>3,000+ (Enterprises)</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-2">
              <strong className="text-slate-950 block font-bold">The Math Behind Your Returns:</strong>
              <ul className="space-y-1.5 text-xs text-slate-600">
                <li>• <strong>Mid-Career Dropout Savings:</strong> Preventing 10 dropouts saves ₹50–80L in recruitment &amp; onboarding costs vs. ₹5L program cost (<strong>10–16x ROI</strong>).</li>
                <li>• <strong>Absenteeism Cut:</strong> Reduces 8 to 12 days of sick leave per woman per year.</li>
                <li>• <strong>Health Checkup Rate:</strong> Increases annual preventive test completion by 40%.</li>
              </ul>
            </div>
          </div>

          {/* Right Metrics Summary */}
          <div className="lg:col-span-6 bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                Projected Organizational Savings
              </span>
              <span className="text-3xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-bold">
                {estimatedRoiRatio}x Projected ROI
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-3xs text-slate-400 block font-medium">Talent Dropouts Prevented</span>
                <span className="text-2xl font-black text-rose-400 block font-mono">
                  ~{dropoutsPrevented} Women
                </span>
                <span className="text-3xs text-slate-400">Post-maternity retention</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-3xs text-slate-400 block font-medium">Talent Replacement Saved</span>
                <span className="text-2xl font-black text-emerald-400 block font-mono">
                  ₹{(replacementCostSaved / 100000).toFixed(1)} Lakhs
                </span>
                <span className="text-3xs text-slate-400">vs. ₹{(programCost / 1000).toFixed(0)}k program cost</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-3xs text-slate-400 block font-medium">Workforce Days Recovered</span>
                <span className="text-2xl font-black text-blue-400 block font-mono">
                  {daysAbsenteeismSaved.toLocaleString('en-IN')} Days
                </span>
                <span className="text-3xs text-slate-400">From early symptom action</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-3xs text-slate-400 block font-medium">Annual Pricing</span>
                <span className="text-2xl font-black text-teal-300 block font-mono">
                  ₹500 / emp
                </span>
                <span className="text-3xs text-slate-400">Pune / PCMC IT Hubs</span>
              </div>
            </div>

            <a
              href="#demo-request"
              className="w-full py-3.5 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm text-center block transition-colors shadow-md"
            >
              Book Corporate Demo for {employeeCount} Employees →
            </a>
          </div>

        </div>

      </section>

      {/* ── 8. CORPORATE DEMO & PROPOSAL REQUEST FORM ── */}
      <section id="demo-request" className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-rose-200 shadow-xl space-y-8">
          
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Direct HR Pilot Request
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Request Your Custom Corporate Proposal
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Receive a customized pilot plan, anonymous dashboard demo, and pricing proposal for your workforce within 4 business hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-scaleUp">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl mx-auto">
                ✓
              </div>
              <h3 className="text-xl font-bold text-emerald-950">Thank You, {contactName}!</h3>
              <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                We have received your corporate wellness inquiry for <strong>{companyName}</strong>. Our enterprise health director will reach out to <strong>{workEmail}</strong> / <strong>{phone}</strong> with a detailed proposal.
              </p>
              <div className="pt-2">
                <a
                  href="tel:+917028025717"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-700 text-white text-xs font-bold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Immediate Assistance: +91 7028025717</span>
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitLead} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Company Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Infosys, Persistent, Tata Technologies, Wipro"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-rose-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">HR / Talent Leader Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-rose-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Official Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="hr@company.com"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-rose-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Phone / WhatsApp Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-rose-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Primary Office Location</label>
                  <input
                    type="text"
                    placeholder="Pune / PCMC (Hinjewadi / Magarpatta / Kharadi), Bengaluru, Mumbai"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-rose-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Approx. Women / Total Headcount</label>
                  <select
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-rose-500 focus:bg-white transition-all"
                  >
                    <option value={50}>25 – 100 Employees (₹500/yr)</option>
                    <option value={250}>100 – 500 Employees (₹500/yr)</option>
                    <option value={1000}>500 – 2,000 Employees (Enterprise Tier)</option>
                    <option value={3000}>2,000+ Employees (Custom Tier)</option>
                  </select>
                </div>
              </div>

              {/* Checkboxes: Priorities */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-slate-700 block">
                  Select Corporate Wellness Priorities:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                  {[
                    '24/7 AI Doctor Triage',
                    "Women's Health & PCOS Program",
                    'Maternity & Return-to-Work Care',
                    '80% Jan Aushadhi Generic Savings',
                    'Annual 60-Min Office Checkups',
                    'MediVault™ ABDM Health Locker'
                  ].map((need) => (
                    <button
                      type="button"
                      key={need}
                      onClick={() => handleToggleNeed(need)}
                      className={`p-3 rounded-xl border text-left font-semibold transition-all flex items-center justify-between ${
                        selectedNeeds.includes(need)
                          ? 'bg-rose-50 text-rose-950 border-rose-300 shadow-2xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <span className="text-3xs">{need}</span>
                      {selectedNeeds.includes(need) && <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-3xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Confidential HR inquiry only. NDA guaranteed.</span>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-xs sm:text-sm shadow-md transition-all disabled:opacity-50"
                >
                  {submitting ? 'Submitting Request...' : 'Book Corporate Demo →'}
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* ── 9. DIRECT ENTERPRISE CALL DESK ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-xl sm:text-2xl font-black text-rose-300">
              Need an Immediate Corporate Health Briefing?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connect directly with our Chief Medical Officer and Enterprise Wellness desk for Pune, PCMC, and Pan-India tech parks.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <a
              href="tel:+917028025717"
              className="px-6 py-3.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Enterprise Desk: +91 7028025717</span>
            </a>
            <a
              href="https://wa.me/917028025717?text=Hi%20Meditrust%20AI,%20I%20am%20an%20HR%20Leader%20inquiring%20about%20Corporate%20Wellness"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-full bg-[#008069] hover:bg-[#006e5a] text-white font-bold text-xs sm:text-sm transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Enterprise</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
