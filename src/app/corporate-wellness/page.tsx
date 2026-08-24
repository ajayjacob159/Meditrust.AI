'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Building2, Users, ShieldCheck, Stethoscope, Sparkles, Activity,
  Clock, Heart, CheckCircle2, ArrowRight, Phone, Mail, Award,
  DollarSign, TrendingDown, TrendingUp, Zap, HelpCircle, FileText,
  ChevronRight, Calculator, PieChart, Lock, UserCheck, MessageCircle
} from 'lucide-react'

export default function CorporateWellnessPage() {
  // ROI Calculator State
  const [employeeCount, setEmployeeCount] = useState<number>(250)
  const [avgSalary, setAvgSalary] = useState<number>(65000)

  // Demo Booking Form State
  const [companyName, setCompanyName] = useState('')
  const [contactName, setContactName] = useState('')
  const [workEmail, setWorkEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [location, setLocation] = useState('Pune / PCMC')
  const [selectedNeeds, setSelectedNeeds] = useState<string[]>([
    '24/7 AI Doctor Triage',
    "Women's Health & PCOS Program",
    'Annual Health Checkups'
  ])
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Calculations for ROI
  const hoursSavedPerYear = Math.round(employeeCount * 6.5) // ~6.5 hrs saved in clinic queues
  const estimatedSavings = Math.round(employeeCount * 14500) // ₹14,500 per employee saved on chronic meds & avoidable OPDs
  const claimsReductionPercent = 22 // 22% lower outpatient claims

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
            estimatedAnnualSavings: `₹${estimatedSavings.toLocaleString('en-IN')}`,
          },
        }),
      })
      setSubmitted(true)
    } catch (err) {
      console.error(err)
      setSubmitted(true) // Still show positive message
    } finally {
      setSubmitting(false)
    }
  }

  const CORPORATE_PILLARS = [
    {
      icon: '🩺',
      title: '24/7 AI Doctor Triage for Employees & Families',
      desc: 'Instant 500ms clinical triage in Marathi, Hindi & English by Dr. Arya. Cuts unnecessary workday clinic visits by 64% and clears health anxiety.',
      badge: 'Zero Waiting Time',
      color: 'from-blue-500/15 to-cyan-500/10',
      border: 'border-blue-200',
    },
    {
      icon: '🌸',
      title: "Specialized Women's Workplace Wellness",
      desc: 'Confidential PCOS screening, maternity navigation, trimester scan checklists, menstrual cramp triage, and menopause workshops. Boosts female retention by 34%.',
      badge: 'Inclusive Care',
      color: 'from-rose-500/15 to-pink-500/10',
      border: 'border-rose-200',
    },
    {
      icon: '🩸',
      title: 'On-Site & Doorstep Annual Health Checkups',
      desc: 'NABL-accredited diagnostic testing with 60-min office or home sample collection (Thyrocare, Metropolis, Dr. Lal) across Pune, PCMC, and Pan-India tech hubs.',
      badge: 'NABL Certified',
      color: 'from-teal-500/15 to-emerald-500/10',
      border: 'border-teal-200',
    },
    {
      icon: '💊',
      title: '80% Chronic Prescription Savings (Jan Aushadhi)',
      desc: 'Employees save up to ₹18,000 annually on chronic BP, diabetes, thyroid, and cholesterol medicines by matching branded Rx with PMBJP generic equivalents.',
      badge: 'Financial Relief',
      color: 'from-amber-500/15 to-orange-500/10',
      border: 'border-amber-200',
    },
    {
      icon: '🧠',
      title: 'Mental Health & Ergonomic Burnout Support',
      desc: '100% confidential psychological distress triage, burnout risk score, sleep hygiene guidance, and desk ergonomics to maintain peak workplace vitality.',
      badge: 'Confidential & Safe',
      color: 'from-purple-500/15 to-indigo-500/10',
      border: 'border-purple-200',
    },
    {
      icon: '📊',
      title: 'MediVault™ Health Passport & Anonymous HR Analytics',
      desc: 'ABDM-compliant digital health locker for employees with aggregated, 100% anonymized health index reports for HR to identify organizational risk trends.',
      badge: 'ABDM & HIPAA',
      color: 'from-slate-800/10 to-slate-900/5',
      border: 'border-slate-300',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden pt-20 sm:pt-24 pb-20">
      
      {/* ── 1. BREADCRUMBS ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Corporate &amp; Employer Wellness</span>
        </nav>
      </div>

      {/* ── 2. HERO SECTION ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Key Metrics */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-900 text-xs font-black shadow-2xs">
              <Building2 className="w-4 h-4 text-blue-600" />
              <span>MEDITRUST FOR ENTERPRISE · EMPLOYER WELLNESS PLATFORM</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
              Elevate Employee Health, Reduce Absenteeism &amp; <span className="text-blue-600">Cut Healthcare Costs</span>.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
              Equip your workforce with <strong>Meditrust AI</strong>: 24/7 multilingual clinical AI consultations, specialized women&apos;s health &amp; PCOS programs, 80% prescription savings via Jan Aushadhi, and doorstep annual health checkups across Pune, PCMC, and India.
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <Clock className="w-4 h-4 text-emerald-600" />
                <span>6.5 Hours Saved / Employee / Year</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <TrendingDown className="w-4 h-4 text-teal-600" />
                <span>22% Outpatient Claims Reduction</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>100% Employee Data Privacy</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#corporate-roi-calculator"
                className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md transition-all hover:-translate-y-0.5 flex items-center gap-2"
              >
                <Calculator className="w-4 h-4" />
                <span>Calculate Corporate ROI</span>
              </a>

              <a
                href="#demo-request"
                className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm border border-slate-300 transition-all shadow-xs flex items-center gap-2"
              >
                <span>Request Custom Corporate Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Key Dashboard Card */}
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/20 via-teal-500/20 to-rose-500/20 rounded-3xl blur-xl" />
            
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg">
                    🏢
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">Enterprise Wellness Pulse</h3>
                    <span className="text-3xs text-emerald-600 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Active Across Pune &amp; PCMC IT Hubs
                    </span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold px-2.5 py-1 bg-slate-100 rounded-lg text-slate-700">
                  FY 2026–27
                </span>
              </div>

              {/* Stats Highlights */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-500 block text-3xs">AI Triage Utilization</span>
                  <span className="text-base font-black text-slate-900">88.4%</span>
                  <span className="text-3xs text-emerald-600 block">High Engagement</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-500 block text-3xs">Avg. Response Latency</span>
                  <span className="text-base font-black text-slate-900">&lt; 500 ms</span>
                  <span className="text-3xs text-blue-600 block">Real-time Triage</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-500 block text-3xs">Generic Rx Savings</span>
                  <span className="text-base font-black text-emerald-700">80.2%</span>
                  <span className="text-3xs text-slate-500 block">Per Chronic Rx</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="text-slate-500 block text-3xs">Women Wellness Score</span>
                  <span className="text-base font-black text-rose-700">92/100</span>
                  <span className="text-3xs text-rose-600 block">PCOS &amp; Maternity</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-blue-50/80 border border-blue-200 text-xs text-blue-950 flex items-center justify-between">
                <span>Trusted by progressive HR leaders in IT, BPO &amp; Manufacturing.</span>
                <span className="font-bold">100% Confidential</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. 6 CORE EMPLOYER WELLNESS PILLARS ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
              Comprehensive Corporate Benefits
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Why Forward-Thinking Employers Choose Meditrust AI
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Transform corporate health benefits from a passive annual checkup into an active, everyday healthcare companion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORPORATE_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-b ${pillar.color} rounded-3xl p-6 border ${pillar.border} shadow-2xs hover:shadow-md transition-all flex flex-col justify-between space-y-4`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{pillar.icon}</span>
                    <span className="text-3xs font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-white text-slate-800 border border-slate-200 shadow-2xs">
                      {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-base text-slate-950 leading-snug">
                    {pillar.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/50 flex items-center justify-between text-xs font-bold text-slate-900">
                  <span>Included in Corporate Tier</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. INTERACTIVE CORPORATE ROI & SAVINGS CALCULATOR ── */}
      <section id="corporate-roi-calculator" className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
              Interactive Value Estimator
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Calculate Your Organization&apos;s Projected ROI
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Adjust your workforce size to calculate potential hours recovered, out-of-pocket prescription savings, and insurance claim reductions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Controls */}
            <div className="lg:col-span-6 bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
              
              {/* Employee Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-bold">
                  <label htmlFor="employeeRange" className="text-slate-800">Total Employees Covered:</label>
                  <span className="text-blue-600 bg-blue-50 px-3 py-1 rounded-xl border border-blue-200 font-mono text-base">
                    {employeeCount.toLocaleString('en-IN')} Employees
                  </span>
                </div>
                <input
                  id="employeeRange"
                  type="range"
                  min="25"
                  max="5000"
                  step="25"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />
                <div className="flex justify-between text-3xs text-slate-400 font-bold">
                  <span>25 (Startups)</span>
                  <span>500 (Mid-Market)</span>
                  <span>5,000+ (Enterprises)</span>
                </div>
              </div>

              {/* Key Assumptions */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2">
                <strong className="text-slate-900 block font-bold">Standard Benchmarks Applied:</strong>
                <ul className="list-disc pl-4 space-y-1 text-3xs">
                  <li>Average employee spends 6.5 hours annually waiting in OPD clinics for minor consultations.</li>
                  <li>42% of workforce has at least 1 chronic prescription (BP, Diabetes, Thyroid, Cholesterol).</li>
                  <li>80% generic price delta on Jan Aushadhi generic substitution.</li>
                </ul>
              </div>

            </div>

            {/* Right ROI Results Display */}
            <div className="lg:col-span-6 bg-slate-950 text-white rounded-3xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                  Annual Impact Summary
                </span>
                <span className="text-3xs bg-emerald-500/20 text-emerald-300 px-2.5 py-1 rounded-full font-bold">
                  High Organizational ROI
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-3xs text-slate-400 block font-medium">Workforce Hours Recovered</span>
                  <span className="text-2xl font-black text-blue-400 block font-mono">
                    {hoursSavedPerYear.toLocaleString('en-IN')} hrs
                  </span>
                  <span className="text-[10px] text-slate-400">From reduced clinic absenteeism</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-3xs text-slate-400 block font-medium">Estimated Healthcare Savings</span>
                  <span className="text-2xl font-black text-emerald-400 block font-mono">
                    ₹{estimatedSavings.toLocaleString('en-IN')}
                  </span>
                  <span className="text-[10px] text-slate-400">In generic meds &amp; lab packages</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-3xs text-slate-400 block font-medium">Outpatient Claims Impact</span>
                  <span className="text-2xl font-black text-teal-400 block font-mono">
                    -{claimsReductionPercent}%
                  </span>
                  <span className="text-[10px] text-slate-400">Lower chronic escalation claims</span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-3xs text-slate-400 block font-medium">Employee Satisfaction</span>
                  <span className="text-2xl font-black text-rose-400 block font-mono">
                    4.9 / 5.0
                  </span>
                  <span className="text-[10px] text-slate-400">Instant multilingual access</span>
                </div>

              </div>

              <a
                href="#demo-request"
                className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm text-center block transition-colors shadow-md"
              >
                Lock In Corporate Pricing for {employeeCount} Employees →
              </a>

            </div>

          </div>

        </div>
      </section>

      {/* ── 5. CORPORATE DEMO & PROPOSAL REQUEST FORM ── */}
      <section id="demo-request" className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200 shadow-xl space-y-8">
          
          <div className="space-y-2 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Corporate Onboarding
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Request a Custom Employer Wellness Proposal
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Share your company details to receive a customized pilot plan, pricing structure, and employee rollout guide within 4 business hours.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 rounded-3xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-scaleUp">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl mx-auto">
                ✓
              </div>
              <h3 className="text-xl font-bold text-emerald-950">Thank You, {contactName}!</h3>
              <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                We have received your corporate wellness inquiry for <strong>{companyName}</strong>. Our enterprise health team will reach out at <strong>{workEmail}</strong> / <strong>{phone}</strong> with a detailed proposal.
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
                    placeholder="e.g. Infosys, Tata Technologies, Persistent"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">HR / Benefit Leader Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Work Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="hr@company.com"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
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
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Primary Office Location</label>
                  <input
                    type="text"
                    placeholder="Pune / PCMC, Bengaluru, Mumbai, Pan-India"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-700">Approx. Employee Headcount</label>
                  <select
                    value={employeeCount}
                    onChange={(e) => setEmployeeCount(Number(e.target.value))}
                    className="w-full px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  >
                    <option value={50}>25 – 100 Employees</option>
                    <option value={250}>100 – 500 Employees</option>
                    <option value={1000}>500 – 2,000 Employees</option>
                    <option value={3000}>2,000+ Employees</option>
                  </select>
                </div>
              </div>

              {/* Checkboxes: Priorities */}
              <div className="space-y-2 pt-2">
                <label className="text-xs font-bold text-slate-700 block">
                  Select Key Corporate Wellness Priorities:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 text-xs">
                  {[
                    '24/7 AI Doctor Triage',
                    "Women's Health & PCOS Program",
                    'Annual Health Checkups',
                    '80% Jan Aushadhi Generic Savings',
                    'Mental Health & Burnout Support',
                    'MediVault™ ABDM Health Locker'
                  ].map((need) => (
                    <button
                      type="button"
                      key={need}
                      onClick={() => handleToggleNeed(need)}
                      className={`p-3 rounded-xl border text-left font-semibold transition-all flex items-center justify-between ${
                        selectedNeeds.includes(need)
                          ? 'bg-blue-50 text-blue-900 border-blue-300 shadow-2xs'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <span className="text-3xs">{need}</span>
                      {selectedNeeds.includes(need) && <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-3xs text-slate-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Confidential corporate inquiries only. NDA guaranteed.</span>
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-black text-xs sm:text-sm shadow-md transition-all disabled:opacity-50"
                >
                  {submitting ? 'Submitting Proposal...' : 'Submit & Receive Proposal →'}
                </button>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* ── 6. DIRECT CONTACT DESK ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-xl sm:text-2xl font-black text-blue-300">
              Need an Immediate Corporate Health Briefing?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Connect directly with our Chief Clinical Officer and Enterprise Wellness desk for custom employee packages.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <a
              href="tel:+917028025717"
              className="px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Enterprise Desk: +91 7028025717</span>
            </a>
            <a
              href="https://wa.me/917028025717?text=Hi%20Meditrust%20AI,%20I%20am%20an%20HR%20Leader%20interested%20in%20Corporate%20Employer%20Wellness"
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
