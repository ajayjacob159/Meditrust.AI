'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Stethoscope, Upload, MessageCircle, Phone, ArrowRight, ShieldCheck,
  Activity, Sparkles, Heart, FlaskConical, LayoutDashboard, Clock,
  ChevronDown, ChevronUp, Star, Play, CheckCircle2, Search, Bell,
  FileText, Users, Building2, MapPin, Send, HelpCircle, Flame, TrendingDown
} from 'lucide-react'
import LabReportExplainerModal from '@/components/common/LabReportExplainerModal'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'
import GenZWomenVibeCard from '@/components/common/GenZWomenVibeCard'

const PROBLEM_CARDS = [
  {
    icon: '🧘',
    title: 'Clarity, not health anxiety',
    desc: 'Plain-language explanations from Dr. Arya so you never panic over complex blood test values or medical jargon.',
  },
  {
    icon: '🛡️',
    title: 'Fewer health surprises',
    desc: 'Track HbA1c, Cholesterol, Vitamin D and BP trends over time in MediVault™ to catch silent metabolic shifts early.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Care for parents & family',
    desc: 'Centralize health records for parents and kids. Set smart WhatsApp medicine reminders so they never skip doses.',
  },
  {
    icon: '💊',
    title: 'Managing chronic conditions',
    desc: 'Save 80% every month on lifelong prescriptions with Jan Aushadhi generic substitution and 60-min doorstep lab pickups.',
  },
  {
    icon: '🩺',
    title: 'Instant 24/7 medical triage',
    desc: 'Evaluate symptoms across 15+ specialties in Marathi, Hindi & English within 500ms before rushing to clinics.',
  },
  {
    icon: '⚡',
    title: 'Dynamic Health Score',
    desc: 'Monitor your 0–100 vitality score across metabolic, cardiovascular, lifestyle, and adherence pillars daily.',
  },
]

const CHAT_PROMPTS = [
  { text: 'Explain my CBC & Platelet count report', category: 'Lab Reports', icon: '🩸' },
  { text: 'Find Jan Aushadhi generic alternative for Telma 40', category: 'Medicines', icon: '💊' },
  { text: 'What do high fasting blood sugar levels mean?', category: 'Symptoms', icon: '🩺' },
  { text: 'Diet & exercise plan for borderline cholesterol', category: 'Wellness', icon: '🥗' },
  { text: 'Find 24/7 Emergency Hospital in PCMC / Pune', category: 'Care Finder', icon: '🏥' },
  { text: 'Set daily morning reminder for Thyroid medicine', category: 'Reminders', icon: '⏰' },
]

const FAQS = [
  {
    q: 'How does Dr. Arya AI Doctor help with symptoms and health reports?',
    a: 'Dr. Arya is a 24/7 clinical AI doctor aligned with ICMR & W.H.O. protocols that speaks fluently in Marathi, Hindi, and English. She provides instant triage across 15+ medical specialties, breaks down complex blood test reports (CBC, Thyroid, HbA1c, Vitamin D) into plain easy-to-understand language, and suggests relevant doctor consultations.',
  },
  {
    q: 'How does MediVault™ protect and graph my family’s health records?',
    a: 'MediVault™ is an ABDM-compliant, 256-bit AES encrypted personal health locker. When you upload lab test PDFs or prescription photos, Dr. Arya automatically extracts key biomarkers (like HbA1c, LDL, TSH) and graphs their historical progression over time so you can track improvements sequentially.',
  },
  {
    q: 'How much can I save on medicines using Jan Aushadhi generic equivalents?',
    a: 'Patients save between 70% and 83% on chronic prescriptions for diabetes, hypertension, cholesterol, and thyroid by matching branded medications against government-certified PMBJP Jan Aushadhi generic substitutes.',
  },
  {
    q: 'How does WhatsApp AI Doctor and reminder integration work?',
    a: 'You can chat directly with Dr. Arya on WhatsApp (+91 7028025717) in Marathi, Hindi, or English. You can also configure daily dosage reminders for BP, Sugar, and Thyroid medicines that send timely nudges straight to your WhatsApp.',
  },
  {
    q: 'Can I book doorstep blood test pickups across Pune & PCMC?',
    a: 'Yes! Meditrust connects with 13+ accredited NABL diagnostic labs across Pune (Metropolis, Thyrocare, Dr Lal, Sahyadri) with certified phlebotomists arriving at your doorstep within 60 minutes for home sample collection.',
  },
]

const TESTIMONIALS = [
  {
    quote: 'Dr. Arya explained my father’s complex lipid profile in simple Marathi. She caught his rising HbA1c early and saved us ₹1,400 every month on his diabetes medicines with Jan Aushadhi generic equivalents.',
    name: 'Aniket Deshmukh',
    role: 'IT Engineer, Hinjewadi Pune',
    rating: 5,
    tag: 'Saved ₹16,800/yr',
  },
  {
    quote: 'MediVault is brilliant! Having all my mother’s thyroid and arthritis records in one place with trend graphs made our doctor appointment at Ruby Hall Clinic completely seamless.',
    name: 'Pooja Kulkarni',
    role: 'Teacher, Kothrud Pune',
    rating: 5,
    tag: 'ABDM Health Locker',
  },
  {
    quote: 'The WhatsApp medicine reminder is a lifesaver for elderly parents who constantly forget their afternoon blood pressure tablets. Plus the 60-min blood pickup is super fast.',
    name: 'Rahul Sharma',
    role: 'Business Owner, Nigdi PCMC',
    rating: 5,
    tag: 'WhatsApp Reminders',
  },
]

export default function HomePage() {
  const [reportModalOpen, setReportModalOpen] = useState(false)
  const [rxScannerOpen, setRxScannerOpen] = useState(false)
  const [posterModalOpen, setPosterModalOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(0)
  const [chatInput, setChatInput] = useState('')

  const handlePromptClick = (text: string) => {
    setChatInput(text)
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden pt-20 sm:pt-24">
      
      {/* ── 1. HERO SECTION (SPLIT 2-COLUMN WITH FLOATING STATUS BADGES) ── */}
      <section className="relative py-8 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Subtitle & Action Pills */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Powered-by Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-300 text-blue-950 text-xs font-black shadow-xs tracking-wide">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
              <span>MEDITRUST AI · MAIN GOAL &amp; VISION</span>
            </div>

            {/* High-Impact Main Heading: Company Vision Statement */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
              Using Artificial Intelligence to Make Healthcare More <span className="text-blue-600">Accessible</span>, <span className="text-teal-600">Understandable</span> and <span className="text-emerald-600">Affordable</span>.
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
              Our core vision at <strong>MEDITRUST AI</strong> is to empower every family in India with 24/7 multilingual clinical AI doctor consultations, plain-language blood test breakdowns, and up to <strong>80% savings on lifelong prescriptions</strong> with Jan Aushadhi generic equivalents.
            </p>

            {/* CTA Button Group */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/symptom-checker"
                className="vaidya-btn-primary text-sm sm:text-base py-3 px-6 sm:px-8"
              >
                <Stethoscope className="w-5 h-5" />
                <span>Ask Dr. Arya</span>
              </Link>

              <a
                href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm sm:text-base shadow-md transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={() => setReportModalOpen(true)}
                className="vaidya-btn-secondary text-sm sm:text-base py-3 px-6"
              >
                <Upload className="w-4 h-4 text-blue-600" />
                <span>Explain Blood Report</span>
              </button>
            </div>

            {/* Trust & Store Badges */}
            <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>ABDM &amp; HIPAA Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>ICMR &amp; W.H.O. Clinical Protocols</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>4.9/5 Rating (12,000+ Consultations)</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with 3 Floating Status Badges */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/60 to-teal-50/60 rounded-3xl filter blur-2xl transform -rotate-3 scale-95" />

            {/* Doctor Portrait Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white aspect-[4/5] w-full max-w-[440px] group">
              <img
                src="/dr_arya.jpg"
                alt="Dr. Arya AI Doctor"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
              />

              {/* Bottom Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent p-5 text-white flex items-end justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-sm font-bold">Dr. Arya, AI Physician</span>
                  </div>
                  <p className="text-2xs text-slate-300">
                    Marathi · Hindi · English · 15+ Specialties
                  </p>
                </div>
                <Link
                  href="/symptom-checker"
                  className="px-3 py-1.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Consult</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Floating Badge 1: Top Left - Pill Reminder */}
            <div className="hidden sm:flex absolute -top-3 -left-6 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-200/90 items-center gap-3 animate-float-1 z-20">
              <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-base">
                ⏰
              </div>
              <div className="text-left">
                <div className="text-2xs font-bold text-slate-800">Metformin 500mg SR</div>
                <div className="text-3xs text-slate-500">08:30 AM (After Breakfast)</div>
              </div>
            </div>

            {/* Floating Badge 2: Top Right - Live Triage */}
            <div className="hidden sm:flex absolute top-12 -right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-200/90 items-center gap-2.5 animate-float-2 z-20">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              <div className="text-left">
                <div className="text-2xs font-bold text-slate-800">24/7 AI Triage Active</div>
                <div className="text-3xs text-emerald-600 font-semibold">500ms Instant Response</div>
              </div>
            </div>

            {/* Floating Badge 3: Bottom Right - Lab Biomarker Trend */}
            <div className="hidden sm:flex absolute -bottom-4 -right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-xl border border-slate-200/90 items-center gap-3 animate-float-3 z-20">
              <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-base">
                📊
              </div>
              <div className="text-left">
                <div className="text-2xs font-bold text-slate-800">HbA1c: 6.9%</div>
                <div className="text-3xs text-emerald-600 font-semibold">-0.5% vs 3 Months Ago ✓</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. PROBLEM CAROUSEL SECTION (THE SIGNATURE VAIDYA SECTION) ── */}
      <section className="py-14 sm:py-20 bg-slate-50/70 border-y border-slate-200/70 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Continuous Care Intelligence
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
              Understand changes, be consistent when life gets <span className="text-blue-600">busy</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Health isn&apos;t a one-time checkup. Dr. Arya and MediVault™ give you clarity over symptoms, chronic conditions, and medication adherence.
            </p>
          </div>

          {/* Right Column: Carousel Track */}
          <div className="lg:col-span-8 overflow-hidden relative">
            <div className="animate-carousel flex gap-4 py-2">
              {[...PROBLEM_CARDS, ...PROBLEM_CARDS].map((card, i) => (
                <div
                  key={i}
                  className="w-[280px] sm:w-[320px] bg-white rounded-2xl p-5 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between flex-shrink-0"
                >
                  <div className="space-y-2.5">
                    <div className="text-2xl">{card.icon}</div>
                    <h3 className="font-bold text-sm text-slate-900">{card.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 2.5 WOMEN'S HEALTH FLAGSHIP SPECIALIZATION SECTION ── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-rose-50/30 to-white border-b border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* ── MANIFESTO HEADER & VISION STATEMENT ── */}
          <div className="space-y-6 text-center max-w-4xl mx-auto">
            
            {/* Top Glowing Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-500/20 via-fuchsia-500/20 to-indigo-500/20 border border-rose-300 text-rose-950 text-xs font-black shadow-xs tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping" />
              <span>🇮🇳 INDIA&apos;S FIRST AI-BACKED WOMEN&apos;S HEALTHCARE PLATFORM</span>
            </div>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
              India&apos;s First AI-Backed Women&apos;s Healthcare Platform <br className="hidden sm:inline" />
              <span className="text-gradient-chic">With Pan-India&apos;s Largest Gynaecology Network</span>
            </h2>

            {/* National Demographic Builder Banner */}
            <div className="p-4 sm:p-5 rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-xl flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold">
              <span className="text-rose-400">MEDITRUST AI is building for:</span>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black text-white font-mono">709M</span>
                <span className="text-slate-400 text-3xs font-normal">women in 2025</span>
              </div>
              <span className="text-slate-600">→</span>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black text-amber-400 font-mono">735M</span>
                <span className="text-slate-400 text-3xs font-normal">by 2030</span>
              </div>
              <span className="text-slate-600">→</span>
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-black text-teal-400 font-mono">742.7M</span>
                <span className="text-slate-400 text-3xs font-normal">by 2036</span>
              </div>
            </div>

            {/* Life Stage Continuum Title */}
            <div className="pt-2">
              <span className="inline-block text-sm sm:text-base font-black uppercase tracking-widest text-slate-900 bg-rose-50 px-6 py-2.5 rounded-2xl border border-rose-200 shadow-2xs">
                ✨ One Woman. Every Life Stage. One Connected Health Journey.
              </span>
            </div>

          </div>

          {/* ── 4 ICONIC LIFE-STAGE CONTINUUM PILLARS (ADRENALINE TRIGGER CARDS) ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Stage 1: First Period */}
            <Link
              href="/womens-health#teen-health"
              className="p-6 rounded-3xl bg-gradient-to-b from-rose-50/80 to-white border border-rose-200/90 shadow-2xs hover:shadow-xl hover:border-rose-400 transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">🩸</span>
                <span className="text-3xs font-black uppercase px-2.5 py-1 rounded-full bg-rose-100 text-rose-800">
                  Stage 01
                </span>
              </div>
              <h3 className="text-base font-black text-slate-950 group-hover:text-rose-600 transition-colors leading-snug">
                From her first period to menstrual health.
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Cycle rhythm, non-judgmental cramp triage, and cellular Ferritin iron reserve protection.
              </p>
              <span className="text-xs font-bold text-rose-700 flex items-center gap-1 pt-2">
                <span>Explore Care</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Stage 2: PCOS to Fertility */}
            <Link
              href="/womens-health#pcos-health"
              className="p-6 rounded-3xl bg-gradient-to-b from-purple-50/80 to-white border border-purple-200/90 shadow-2xs hover:shadow-xl hover:border-purple-400 transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">🌸</span>
                <span className="text-3xs font-black uppercase px-2.5 py-1 rounded-full bg-purple-100 text-purple-800">
                  Stage 02
                </span>
              </div>
              <h3 className="text-base font-black text-slate-950 group-hover:text-purple-600 transition-colors leading-snug">
                From PCOS to fertility.
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Insulin resistance reversal, Rotterdam screener, AMH egg reserve, and ovulation timing.
              </p>
              <span className="text-xs font-bold text-purple-700 flex items-center gap-1 pt-2">
                <span>Explore Care</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Stage 3: Pregnancy to Motherhood */}
            <Link
              href="/womens-health#pregnancy-care"
              className="p-6 rounded-3xl bg-gradient-to-b from-emerald-50/80 to-white border border-emerald-200/90 shadow-2xs hover:shadow-xl hover:border-emerald-400 transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">🤰</span>
                <span className="text-3xs font-black uppercase px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  Stage 03
                </span>
              </div>
              <h3 className="text-base font-black text-slate-950 group-hover:text-emerald-600 transition-colors leading-snug">
                From pregnancy to motherhood.
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Trimester scan checklists, 75g OGTT sugar curve, delivery second opinions, and postpartum recovery.
              </p>
              <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 pt-2">
                <span>Explore Care</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* Stage 4: Preventive to Menopause */}
            <Link
              href="/womens-health#menopause-care"
              className="p-6 rounded-3xl bg-gradient-to-b from-amber-50/80 to-white border border-amber-200/90 shadow-2xs hover:shadow-xl hover:border-amber-400 transition-all space-y-3 group"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">🦋</span>
                <span className="text-3xs font-black uppercase px-2.5 py-1 rounded-full bg-amber-100 text-amber-800">
                  Stage 04
                </span>
              </div>
              <h3 className="text-base font-black text-slate-950 group-hover:text-amber-600 transition-colors leading-snug">
                From preventive health to menopause.
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                HPV DNA cancer screening, hot flashes relief, DEXA bone density, and 40+ cardiovascular vitality.
              </p>
              <span className="text-xs font-bold text-amber-700 flex items-center gap-1 pt-2">
                <span>Explore Care</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

          </div>

          {/* ── THE 40+ YEARS MANIFESTO & DR. ARYA SOLUTION (HERO CARD) ── */}
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-rose-500 via-purple-600 to-teal-500 rounded-[36px] blur-xl opacity-40 group-hover:opacity-75 transition duration-500 pointer-events-none" />

            <div className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white rounded-[32px] p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8 overflow-hidden">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Statement */}
                <div className="lg:col-span-8 space-y-6">
                  
                  <div className="space-y-3">
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
                      While <strong className="text-amber-400 font-black">400M women are 45+ today</strong>, <strong className="text-rose-400 font-black">130M are in menopausal phase by 2030</strong>, and <strong className="text-teal-400 font-black">195M will be 60+ by 2030</strong>, no platform remembers her journey.
                    </p>

                    <h3 className="text-3xl sm:text-5xl font-black text-rose-400 tracking-tight">
                      Dr. Arya does.
                    </h3>

                    <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                      An AI-powered understanding, human-led care companion that learns the context she chooses to share, explains what is happening, connects her to qualified healthcare providers across India, and stays with her through follow-up — <strong className="text-white font-bold underline decoration-rose-500 decoration-2">for 40+ years</strong>.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link
                      href="/symptom-checker"
                      className="px-7 py-3.5 rounded-full bg-[#008069] hover:bg-[#006e5a] text-white font-black text-xs sm:text-sm shadow-md transition-all hover:scale-105 flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Start Private Chat with Dr. Arya AI</span>
                    </Link>

                    <Link
                      href="/womens-health"
                      className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-colors border border-white/20 flex items-center gap-2"
                    >
                      <span>Explore 7 Life Stages</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                </div>

                {/* Right Doctor Portrait & Verified Network Card */}
                <div className="lg:col-span-4 bg-white/5 backdrop-blur-md rounded-3xl p-6 border border-white/10 space-y-4 text-center">
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-rose-400/80 p-1 bg-slate-900 shadow-inner">
                    <img
                      src="/dr_arya.jpg"
                      alt="Dr. Arya AI"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <div>
                    <h4 className="font-bold text-base text-white">Dr. Arya, AI Physician</h4>
                    <span className="text-xs text-rose-300 font-semibold">Lead Women&apos;s Health Companion</span>
                  </div>

                  <div className="pt-2 border-t border-white/10 space-y-1.5 text-3xs text-slate-300 text-left">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Pan-India&apos;s Largest Verified Gynaecology Network</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>100% Private, Non-Judgmental &amp; Multilingual</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>Longitudinal Context &amp; 40-Year Continuity</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* ── HIGHLIGHTED NATIONAL POSTER SHOWCASE CARD ── */}
          <div className="relative group">
            {/* Multi-color ambient aura */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-rose-500 via-pink-500 to-teal-500 rounded-3xl sm:rounded-[36px] blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-300 pointer-events-none" />
            
            <div className="relative bg-white rounded-3xl sm:rounded-[32px] p-4 sm:p-8 border border-rose-200 shadow-2xl overflow-hidden space-y-6">
              
              {/* Top Banner Tag */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500 animate-ping" />
                  <span className="text-xs font-black uppercase tracking-wider text-rose-900 bg-rose-100/90 px-3 py-1 rounded-full border border-rose-200">
                    ⭐ HIGHLIGHTED POSTER · NATIONAL HEALTH DEMOGRAPHICS (2025 → 2036)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPosterModalOpen(true)}
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
                  >
                    <span>🔍 Click to Zoom / View Fullscreen</span>
                  </button>
                </div>
              </div>

              {/* Poster Image Frame */}
              <div
                onClick={() => setPosterModalOpen(true)}
                className="relative rounded-2xl overflow-hidden cursor-zoom-in bg-slate-950 border border-slate-200/80 shadow-lg group/img"
              >
                <img
                  src="/india_female_population_statistics_poster.webp"
                  alt="India's Female Population Statistics 2025 to 2036 - Meditrust AI"
                  className="w-full h-auto object-cover group-hover/img:scale-[1.015] transition-transform duration-500"
                />
                
                {/* Floating Zoom Badge */}
                <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-bold px-3.5 py-1.5 rounded-full border border-white/20 shadow-md flex items-center gap-1.5 opacity-90 group-hover/img:opacity-100 transition-opacity">
                  <span>✨ Tap to Enlarge Poster</span>
                </div>
              </div>

              {/* Key Quantitative Takeaways Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200 text-center space-y-0.5">
                  <span className="text-lg sm:text-xl font-black text-rose-950 block">709M</span>
                  <span className="text-3xs font-semibold text-rose-800">Females in 2025</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-amber-50/70 border border-amber-200 text-center space-y-0.5">
                  <span className="text-lg sm:text-xl font-black text-amber-950 block">735M</span>
                  <span className="text-3xs font-semibold text-amber-800">By 2030 Proj.</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200 text-center space-y-0.5">
                  <span className="text-lg sm:text-xl font-black text-teal-950 block">742.7M</span>
                  <span className="text-3xs font-semibold text-teal-800">By 2036 (48.8%)</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200 text-center space-y-0.5">
                  <span className="text-lg sm:text-xl font-black text-purple-950 block">400M</span>
                  <span className="text-3xs font-semibold text-purple-800">Women 45+ Today</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-indigo-50/70 border border-indigo-200 text-center space-y-0.5">
                  <span className="text-lg sm:text-xl font-black text-indigo-950 block">130M</span>
                  <span className="text-3xs font-semibold text-indigo-800">Menopause by 2030</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200 text-center space-y-0.5">
                  <span className="text-lg sm:text-xl font-black text-blue-950 block">195M</span>
                  <span className="text-3xs font-semibold text-blue-800">60+ Elders by 2030</span>
                </div>
              </div>

              {/* Action Buttons Hub */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-2.5">
                  <Link
                    href="/womens-health"
                    className="px-5 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
                  >
                    <span>🌸 Women&apos;s Health Master Portal</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/womens-health/blood-tests"
                    className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
                  >
                    <span>🩸 35+ Women&apos;s Blood Tests Directory</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href="/reports/womens-health-india-2026"
                    className="px-4 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs sm:text-sm transition-colors border border-slate-200"
                  >
                    <span>📊 Read Full National Report</span>
                  </Link>
                </div>

                <a
                  href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20saw%20the%20Women%27s%20Health%20Statistics%20poster%20and%20want%20to%20consult%20with%20you"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-[#008069] hover:bg-[#006e5a] text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Discuss with Dr. Arya AI</span>
                </a>
              </div>

            </div>
          </div>

          {/* ── CHIC WOMEN & GEN-Z CARE VIBE HUB (1-TAP SHARE & SYMPTOM CHECKS) ── */}
          <GenZWomenVibeCard />

          {/* 7 Connected Life Stages Visual Flow */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 uppercase tracking-wider px-1">
              <span>Connected Care Pathways</span>
              <span className="hidden sm:inline">From Adolescence to Menopause</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3.5">
              
              {/* Stage 1: Teen Health */}
              <Link
                href="/womens-health#teen-health"
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-rose-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">🌱</span>
                    <span className="text-[10px] font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                      Stage 01
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-rose-600 transition-colors">
                    Teen Health
                  </h3>
                  <p className="text-3xs text-slate-500 leading-relaxed">
                    Menstrual education, cycle awareness, nutrition, and anemia prevention.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-rose-700">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              {/* Stage 2: Menstrual Health */}
              <Link
                href="/womens-health#menstrual-health"
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-rose-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">🩸</span>
                    <span className="text-[10px] font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                      Stage 02
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-rose-600 transition-colors">
                    Menstrual &amp; Hormonal
                  </h3>
                  <p className="text-3xs text-slate-500 leading-relaxed">
                    Irregular periods, pain relief, cycle tracking, and PMS guidance.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-rose-700">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              {/* Stage 3: PCOS / PCOD */}
              <Link
                href="/womens-health#pcos-health"
                className="bg-white rounded-2xl p-4 sm:p-5 border border-rose-200 shadow-2xs hover:shadow-md hover:border-rose-400 transition-all flex flex-col justify-between group ring-1 ring-rose-100"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">🩺</span>
                    <span className="text-[10px] font-black text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                      Stage 03
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-rose-600 transition-colors">
                    PCOS / PCOD
                  </h3>
                  <p className="text-3xs text-slate-500 leading-relaxed">
                    AI-assisted screening, insulin resistance, hormonal acne, and doctor care.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-rose-700">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              {/* Stage 4: Pre-Conception & Fertility */}
              <Link
                href="/womens-health#fertility-journey"
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-rose-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">🥚</span>
                    <span className="text-[10px] font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                      Stage 04
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-rose-600 transition-colors">
                    Fertility &amp; Planning
                  </h3>
                  <p className="text-3xs text-slate-500 leading-relaxed">
                    Ovulation tracking, AMH tests, preconception nutrition, and specialist care.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-rose-700">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              {/* Stage 5: Pregnancy */}
              <Link
                href="/womens-health#pregnancy-care"
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-rose-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">🤰</span>
                    <span className="text-[10px] font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                      Stage 05
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-rose-600 transition-colors">
                    Pregnancy Care
                  </h3>
                  <p className="text-3xs text-slate-500 leading-relaxed">
                    Week-by-week guidance, scan checklists, OB-GYN consultations, and hospital plans.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-rose-700">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              {/* Stage 6: Postnatal Care */}
              <Link
                href="/womens-health#postnatal-care"
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-rose-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">🤱</span>
                    <span className="text-[10px] font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                      Stage 06
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-rose-600 transition-colors">
                    Postnatal &amp; Baby
                  </h3>
                  <p className="text-3xs text-slate-500 leading-relaxed">
                    Maternal healing, lactation support, emotional care, and pediatric vaccines.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-rose-700">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

              {/* Stage 7: Mid-Life & Menopause */}
              <Link
                href="/womens-health#menopause-health"
                className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-rose-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">🌸</span>
                    <span className="text-[10px] font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                      Stage 07
                    </span>
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-rose-600 transition-colors">
                    Mid-Life &amp; Menopause
                  </h3>
                  <p className="text-3xs text-slate-500 leading-relaxed">
                    Perimenopause, bone density, heart health, and preventive wellness after 40.
                  </p>
                </div>
                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center gap-1 text-[11px] font-semibold text-rose-700">
                  <span>Explore</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>

            </div>
          </div>

          {/* Action CTAs & Clinical Governance Notice */}
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-rose-200/80 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-slate-900">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Responsible AI. Clinician-Led Care.</span>
              </div>
              <p className="text-xs text-slate-500 max-w-xl">
                Dr. Arya Women&apos;s Health assists with clinical health understanding and care navigation. It does not replace independent diagnosis or treatment by qualified gynecologists and healthcare professionals.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
              <Link
                href="/womens-health"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-all hover:-translate-y-0.5"
              >
                <span>Explore Women&apos;s Health</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/symptom-checker?specialty=gynaecology"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-rose-50 text-rose-700 font-bold text-xs sm:text-sm border border-rose-300 shadow-2xs transition-all hover:-translate-y-0.5"
              >
                <Stethoscope className="w-4 h-4 text-rose-600" />
                <span>Talk to Dr. Arya</span>
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. THREE MAJOR FEATURE SHOWCASE CARDS (VAIDYA ALTERNATING CARDS) ── */}
      <section className="py-16 sm:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Intelligent Health Platform
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Designed for Simplicity, Built for Clinical Accuracy
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Experience the next generation of healthcare technology crafted for everyday Indian families.
          </p>
        </div>

        {/* Feature 1: Dr. Arya AI Doctor */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-xs">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100/80 text-blue-800 text-2xs font-bold uppercase tracking-wider">
              24/7 AI Doctor
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              Consult Dr. Arya in Native Marathi, Hindi &amp; English
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              No waiting in clinic queues. Dr. Arya evaluates symptoms across 15+ medical specialties in real-time, explains possible causes, and advises whether home care or in-person doctor visits are necessary.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/symptom-checker"
                className="vaidya-btn-primary text-xs sm:text-sm py-2.5 px-5"
              >
                <span>Consult Dr. Arya Now</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="vaidya-btn-secondary text-xs sm:text-sm py-2.5 px-5"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm aspect-video sm:aspect-[4/3] flex items-center justify-center p-4">
            <img
              src="/dr_arya.jpg"
              alt="Dr. Arya Clinical Consultation"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Feature 2: MediVault Health Locker */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-xs">
          <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm aspect-video sm:aspect-[4/3] flex items-center justify-center p-4">
            <img
              src="/report_scanner_hud.jpg"
              alt="MediVault Biomarker Progression"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          <div className="order-1 lg:order-2 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-emerald-100/80 text-emerald-800 text-2xs font-bold uppercase tracking-wider">
              Health Records &amp; Trends
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              MediVault™: Automatic Biomarker Graphing &amp; Records Locker
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Upload blood tests, prescriptions, and scans. MediVault™ automatically extracts biomarkers (like HbA1c, Cholesterol, Vitamin D) and plots them on interactive trend lines across sequential reports.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/medivault"
                className="vaidya-btn-primary text-xs sm:text-sm py-2.5 px-5"
              >
                <span>Open MediVault™ Locker</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Feature 3: Generic Medicine Savings */}
        <div className="bg-slate-50 rounded-3xl border border-slate-200/80 p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center shadow-xs">
          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-100/80 text-amber-800 text-2xs font-bold uppercase tracking-wider">
              Generic Savings
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 leading-snug">
              Save Up to 80% with Jan Aushadhi Generic Substitution
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Compare prices across Tata 1mg, Apollo, and PharmEasy against CDSCO-certified Jan Aushadhi generic substitutes. Save over ₹27,000 every year on chronic BP, Diabetes, and Heart prescriptions.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="/medication-comparison"
                className="vaidya-btn-primary text-xs sm:text-sm py-2.5 px-5"
              >
                <span>Compare Medicine Prices</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm aspect-video sm:aspect-[4/3] flex items-center justify-center p-4">
            <img
              src="/medicine_generic_savings.jpg"
              alt="Generic Medicine Savings"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

      </section>

      {/* ── 3.5 OUR VISION STATEMENT: AI-POWERED ACCESSIBILITY & AFFORDABILITY ── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-blue-50/40 to-white border-y border-slate-200/80 relative overflow-hidden">
        {/* Subtle Ambient Radial Glows */}
        <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="text-center max-w-4xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 text-white text-xs sm:text-sm font-black uppercase tracking-widest shadow-md">
              <Sparkles className="w-4 h-4 text-amber-300" />
              <span>MEDITRUST AI — MAIN GOAL &amp; COMPANY VISION</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-tight">
              Using Artificial Intelligence to Make Healthcare More <span className="text-blue-600">Accessible</span>, <span className="text-teal-600">Understandable</span> and <span className="text-emerald-600">Affordable</span>.
            </h2>

            <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-medium max-w-3xl mx-auto">
              Our guiding mission at <strong>MEDITRUST AI</strong> is to harness the transformative power of Artificial Intelligence to eliminate geographic barriers, remove medical jargon anxiety, and make essential healthcare radically affordable for every family in India.
            </p>
          </div>

          {/* 3 Vision Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pillar 1: Accessible */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-400 transition-all space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                🌐
              </div>
              <div className="space-y-2">
                <span className="text-3xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
                  Pillar 1: Accessibility
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  Radical 24/7 Access in Your Mother Tongue
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  World-class clinical AI triage in Marathi, Hindi &amp; English with 500ms response time. Healthcare should never be blocked by geographic boundaries, long clinic queues, or clinic hours.
                </p>
              </div>
            </div>

            {/* Pillar 2: Understandable */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-teal-400 transition-all space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                💡
              </div>
              <div className="space-y-2">
                <span className="text-3xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
                  Pillar 2: Clinical Clarity
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                  Clarity Over Jargon, Comfort Over Panic
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Translating complex blood test parameters (CBC, HbA1c, Thyroid) into clear, comforting, and actionable health guidance. No more frightening internet searches or unnecessary panic.
                </p>
              </div>
            </div>

            {/* Pillar 3: Affordable */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-emerald-400 transition-all space-y-4 group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold group-hover:scale-110 transition-transform">
                💰
              </div>
              <div className="space-y-2">
                <span className="text-3xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Pillar 3: Affordability
                </span>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Save 80% with Jan Aushadhi Generics
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  Saving Indian families up to ₹27,000 every year by matching branded prescriptions against CDSCO-certified generic bioequivalent drugs and offering 60-min doorstep lab pickups.
                </p>
              </div>
            </div>

          </div>

          {/* Vision Callout Quote Box */}
          <div className="max-w-4xl mx-auto rounded-2xl bg-slate-900 text-white p-6 sm:p-8 text-center space-y-2 shadow-lg">
            <p className="text-sm sm:text-base font-semibold text-slate-200 italic">
              &ldquo;Our vision is to use artificial intelligence to make healthcare more accessible and affordable for every family in India.&rdquo;
            </p>
            <span className="text-3xs sm:text-2xs text-teal-400 font-bold uppercase tracking-wider">
              — Meditrust AI Executive Commitment
            </span>
          </div>

        </div>
      </section>

      {/* ── 4. THE 6-APP INTEGRATED HEALTH INTELLIGENCE GRID ── */}
      <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Complete Health Suite
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Six Core Tools in One Simple Platform
            </h2>
            <p className="text-sm text-slate-600">
              Everything you need to maintain lifelong vitality and care for your loved ones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* App 1: MediVault */}
            <Link
              href="/medivault"
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-400 transition-all space-y-4 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                  🗄️
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                  MediVault™ Health Locker
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  256-bit encrypted ABDM locker for lifelong prescriptions, blood test PDFs, and longitudinal biomarker tracking.
                </p>
              </div>
              <span className="text-xs font-semibold text-blue-600 flex items-center gap-1 pt-3 border-t border-slate-100">
                <span>Open MediVault</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* App 2: Health Score */}
            <Link
              href="/health-score"
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-emerald-400 transition-all space-y-4 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                  ⚡
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-600 transition-colors">
                  Dynamic Health Score (0–100)
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Calculates your metabolic, cardiovascular, lifestyle, and adherence vitality score with daily habit consistency streaks.
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1 pt-3 border-t border-slate-100">
                <span>View Health Score</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* App 3: Reminders */}
            <Link
              href="/reminders"
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-amber-400 transition-all space-y-4 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                  ⏰
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-amber-600 transition-colors">
                  Smart Reminders &amp; WhatsApp Bot
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Morning, afternoon, and night dosage scheduler with automated 1-click WhatsApp reminder alerts for chronic care.
                </p>
              </div>
              <span className="text-xs font-semibold text-amber-600 flex items-center gap-1 pt-3 border-t border-slate-100">
                <span>Set Reminders</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* App 4: Find Care */}
            <Link
              href="/find-healthcare"
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-purple-400 transition-all space-y-4 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                  📍
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-purple-600 transition-colors">
                  Find Healthcare Nearby
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Locate 24/7 hospitals (Ruby Hall, Sahyadri), NABL diagnostic labs, Jan Aushadhi Kendras, and 24-hr pharmacies across Pune/PCMC.
                </p>
              </div>
              <span className="text-xs font-semibold text-purple-600 flex items-center gap-1 pt-3 border-t border-slate-100">
                <span>Find Local Centers</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* App 5: Models Overview */}
            <Link
              href="/models-overview"
              className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-blue-400 transition-all space-y-4 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                  🧠
                </div>
                <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                  Clinical Models &amp; HealthBench
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Transparent architecture breakdown with 91.4% diagnostic accuracy and 99.8% contraindication safety score.
                </p>
              </div>
              <span className="text-xs font-semibold text-blue-600 flex items-center gap-1 pt-3 border-t border-slate-100">
                <span>View Benchmarks</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>

            {/* App 6: WhatsApp Bot */}
            <a
              href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-emerald-600 to-teal-800 text-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all space-y-4 group flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-white/20 text-white flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                  💬
                </div>
                <h3 className="font-bold text-base text-white group-hover:text-emerald-200 transition-colors">
                  WhatsApp AI Doctor (+91 7028025717)
                </h3>
                <p className="text-xs text-emerald-100 leading-relaxed">
                  Instant clinical consultation on WhatsApp in Marathi, Hindi &amp; English with 1-tap voice audio notes.
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-200 flex items-center gap-1 pt-3 border-t border-white/20">
                <span>Chat on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

          </div>

          {/* ── CORPORATE & EMPLOYER WELLNESS BANNER ── */}
          <div className="pt-8">
            <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-10 border border-blue-900/60 shadow-2xl text-white flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

              <div className="space-y-4 max-w-2xl relative z-10">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-500/30">
                  <span>🏢 MEDITRUST FOR ENTERPRISE &amp; EMPLOYER WELLNESS</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-snug">
                  Empower Your Workforce with 24/7 AI Doctor Triage, Women&apos;s Health &amp; 80% Generic Savings
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  Cut outpatient insurance claim spikes and reduce clinic absenteeism by 6.5 hours per employee. Complete with anonymous HR health analytics, PCOS &amp; maternity navigation, and 60-min office health checkups.
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-blue-200 pt-1">
                  <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                    <Clock className="w-3.5 h-3.5 text-emerald-400" />
                    <span>6.5 Hrs Saved / Employee</span>
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                    <TrendingDown className="w-3.5 h-3.5 text-teal-300" />
                    <span>-22% Outpatient Claims</span>
                  </span>
                  <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    <span>100% Data Confidentiality</span>
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 relative z-10 w-full lg:w-auto">
                <Link
                  href="/corporate-wellness"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-black text-xs sm:text-sm shadow-md transition-all text-center flex items-center justify-center gap-2"
                >
                  <span>Explore Corporate Plans &amp; ROI</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href="tel:+917028025717"
                  className="w-full sm:w-auto px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-colors border border-white/20 text-center flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Desk</span>
                </a>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ── 5. INTERACTIVE "ASK DR. ARYA" CHAT PLAYGROUND (VAIDYA CHAT SECTION) ── */}
      <section className="py-16 sm:py-24 max-w-[1100px] mx-auto px-4 sm:px-6 text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl sm:text-5xl font-bold text-slate-900 tracking-tight">
            Ask Dr. Arya <span className="text-blue-600">Anything</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
            Get instant clinical explanations in plain language. Select any question below or type your symptom.
          </p>
        </div>

        {/* Suggestion Chips Grid */}
        <div className="flex flex-wrap justify-center gap-2.5 max-w-3xl mx-auto">
          {CHAT_PROMPTS.map((prompt, i) => (
            <button
              key={i}
              onClick={() => handlePromptClick(prompt.text)}
              className="px-4 py-2.5 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-700 hover:text-blue-700 text-xs font-medium border border-slate-200/80 transition-all flex items-center gap-2 hover:-translate-y-0.5"
            >
              <span>{prompt.icon}</span>
              <span>{prompt.text}</span>
            </button>
          ))}
        </div>

        {/* Interactive Chat Input Bar */}
        <div className="max-w-2xl mx-auto relative pt-4">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              if (chatInput.trim()) {
                window.location.href = `/symptom-checker?initialQuery=${encodeURIComponent(chatInput)}`
              }
            }}
            className="relative flex items-center"
          >
            <input
              type="text"
              placeholder="Type your symptom or health question here..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              className="w-full pl-5 pr-14 py-4 rounded-2xl bg-white border-2 border-slate-200 text-sm outline-none focus:border-blue-600 shadow-sm transition-colors"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-blue-600 hover:bg-blue-700 text-white flex items-center justify-center transition-transform active:scale-95 shadow-sm"
              aria-label="Send query"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
          <div className="flex items-center justify-center gap-2 text-2xs text-slate-400 mt-2.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Private &amp; Confidential · Doctor-in-the-Loop Validated</span>
          </div>
        </div>
      </section>

      {/* ── 6. TESTIMONIALS SECTION ── */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Real Patient Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Trusted by 12,000+ Families Across Maharashtra
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-3xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(item.rating)].map((_, r) => (
                      <Star key={r} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-xs text-slate-900">{item.name}</div>
                    <div className="text-3xs text-slate-500">{item.role}</div>
                  </div>
                  <span className="text-3xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full border border-blue-200">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 7. FAQ ACCORDION SECTION (VAIDYA 2-COLUMN LAYOUT) ── */}
      <section className="py-16 sm:py-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
              Frequently Asked <span className="text-blue-600">Questions</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Find answers regarding AI clinical safety, Jan Aushadhi generic savings, MediVault data encryption, and WhatsApp bot alerts.
            </p>
            <div className="pt-4">
              <a
                href="tel:+917028025717"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-600" />
                <span>Call Care Helpline: +91 7028025717</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 divide-y divide-slate-200">
            {FAQS.map((faq, i) => {
              const isOpen = activeFaq === i
              return (
                <div key={i} className="py-4">
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : i)}
                    className="w-full text-left flex items-start justify-between gap-4 group"
                  >
                    <span className="font-semibold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors">
                      {faq.q}
                    </span>
                    <span className="text-blue-600 font-bold text-lg flex-shrink-0 mt-0.5">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed animate-fade-in">
                      {faq.a}
                    </p>
                  )}
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* ── 8. BOTTOM FLOATING ACTION BANNER (VAIDYA CAPSULE CTA) ── */}
      <section className="py-10 max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-2xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-2 max-w-xl">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Ready to take charge of your family&apos;s health?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Start consulting with Dr. Arya for free or connect directly on WhatsApp with zero waiting time.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <Link
              href="/symptom-checker"
              className="vaidya-btn-primary text-xs sm:text-sm py-3 px-6"
            >
              <Stethoscope className="w-4 h-4" />
              <span>Consult Dr. Arya Now</span>
            </Link>

            <a
              href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp AI</span>
            </a>
          </div>
        </div>
      </section>

      {/* Modals */}
      <LabReportExplainerModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
      />
      <PrescriptionScannerModal
        isOpen={rxScannerOpen}
        onClose={() => setRxScannerOpen(false)}
      />

      {/* Fullscreen Poster Lightbox Modal */}
      {posterModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setPosterModalOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-white rounded-3xl overflow-hidden shadow-2xl border border-white/20 p-2 sm:p-4 animate-scaleUp max-h-[95vh] flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-3 border-b border-slate-100">
              <span className="text-xs font-bold text-slate-800">
                India&apos;s Female Population Statistics (2025 → 2036) — Meditrust AI
              </span>
              <button
                onClick={() => setPosterModalOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold flex items-center justify-center text-sm"
              >
                ✕
              </button>
            </div>

            <div className="overflow-y-auto max-h-[75vh] p-2">
              <img
                src="/india_female_population_statistics_poster.webp"
                alt="India's Female Population Statistics"
                className="w-full h-auto rounded-2xl"
              />
            </div>

            <div className="p-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2">
                <Link
                  href="/womens-health"
                  onClick={() => setPosterModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-rose-600 text-white font-bold hover:bg-rose-700"
                >
                  Explore Women&apos;s Health
                </Link>
                <Link
                  href="/reports/womens-health-india-2026"
                  onClick={() => setPosterModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-100 text-slate-800 font-bold hover:bg-slate-200"
                >
                  View Research Report
                </Link>
              </div>

              <button
                onClick={() => setPosterModalOpen(false)}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold hover:bg-slate-800"
              >
                Close Fullscreen
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
