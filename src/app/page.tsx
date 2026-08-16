'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Activity, Pill, FlaskConical, Shield, Star, ChevronRight,
  Brain, Clock, CheckCircle2, ArrowRight, Zap, Users, TrendingUp,
  Heart, ChevronDown, MessageCircle, Stethoscope, Lock, Sparkles,
  BarChart3, Calendar, BookOpen, Phone, AlertTriangle, Award, Globe,
  Upload, Video, Building2, MapPin, Check, FileText, HelpCircle,
  ShieldCheck, Volume2, VolumeX, Mic, Play, ArrowUpRight, Sparkle
} from 'lucide-react'
import DrAryaFloatingDoctor from '@/components/common/DrAryaFloatingDoctor'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'
import LabReportExplainerModal from '@/components/common/LabReportExplainerModal'
import HealthcareBackgroundMotion from '@/components/common/HealthcareBackgroundMotion'
import { aiSpecialtyDoctors, type AISpecialist } from '@/data/specialties'
import { labProviders, popularPanels, punePartnerHospitals } from '@/data/labProviders'
import { medications } from '@/data/medications'

const LANGUAGES = [
  { id: 'mr', name: 'मराठी (Marathi)', speechCode: 'mr-IN', flag: '🚩', heroGreeting: 'नमस्कार! मी डॉ. आर्या. ६०% आरोग्य समस्या आपण घरबसल्या सोडवू शकतो.', samplePrompt: 'माझे गुडघे दुखतात आणि मला थकवा जाणवतो' },
  { id: 'hi', name: 'हिन्दी (Hindi)', speechCode: 'hi-IN', flag: '🇮🇳', heroGreeting: 'नमस्ते! मैं डॉ. आर्या हूँ। घर बैठे W.H.O. मानकों के अनुसार सटीक इलाज पाएं।', samplePrompt: 'मुझे एसिडिटी और सीने में जलन हो रही है' },
  { id: 'en', name: 'English', speechCode: 'en-IN', flag: '🌐', heroGreeting: 'Hello! I am Dr. Arya. Instant medical guidance & report breakdown 24/7.', samplePrompt: 'Explain my high HbA1c (7.4%) and fasting sugar' },
  { id: 'ta', name: 'தமிழ் (Tamil)', speechCode: 'ta-IN', flag: '🌺', heroGreeting: 'வணக்கம்! நான் டாக்டர் ஆர்யா. 24/7 உடனடி மருத்துவ ஆலோசனை.', samplePrompt: 'இரத்த பரிசோதனை விவரங்களை விளக்குங்கள்' },
  { id: 'te', name: 'తెలుగు (Telugu)', speechCode: 'te-IN', flag: '🪔', heroGreeting: 'నమస్కారం! నేను డాక్టర్ ఆర్య. మీ ఆరోగ్య సలహాదారు.', samplePrompt: 'నాకు థైరాయిడ్ లక్షణాలు ఉన్నాయి' },
  { id: 'bn', name: 'বাংলা (Bengali)', speechCode: 'bn-IN', flag: '🌾', heroGreeting: 'নমস্কার! আমি ডঃ আর্যা। ২৪/৭ আপনার স্বাস্থ্য সঙ্গী।', samplePrompt: 'আমার রক্তচাপ এবং সুগার রিপোর্ট দেখুন' },
  { id: 'gu', name: 'ગુજરાતી (Gujarati)', speechCode: 'gu-IN', flag: '☀️', heroGreeting: 'નમસ્તે! હું ડૉ. આર્યા છું. ૨૪/૭ તબીબી માર્ગદર્શન.', samplePrompt: 'કોલેસ્ટ્રોલ ઓછું કરવાના ઉપાય' },
]

// 4 Core Value Pillars
const corePillars = [
  {
    id: 'symptom-checker',
    icon: Stethoscope,
    title: 'Instant Symptom Checker',
    desc: 'Get quick medical insights anytime. Just type your symptoms → receive clear explanations & next steps.',
    badge: 'Instant Analysis',
    color: '#0F766E',
    bg: 'bg-teal-50',
    border: 'border-teal-200',
    cta: 'Check Symptoms Now',
    href: '/symptom-checker',
  },
  {
    id: 'report-explainer',
    icon: FileText,
    title: 'AI Doctor That Explains Your Reports',
    desc: 'Upload any health report: CBC, Thyroid, Vitamin D, Liver, Kidney, Full Body Checkups — everything. Your AI doctor breaks it down in simple language you can understand.',
    badge: '100,000+ Reports Analyzed',
    color: '#2563EB',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    cta: 'Decode Your Report',
    href: '/dashboard',
  },
  {
    id: 'who-guidance',
    icon: ShieldCheck,
    title: 'WHO-Standard Medical Guidance',
    desc: 'Our system follows global healthcare guidelines across 15+ specialties to ensure safe, trusted clinical advice.',
    badge: 'W.H.O. Compliant',
    color: '#7C3AED',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    cta: 'View 15+ Specialties',
    href: '#specialties',
  },
  {
    id: 'unlimited-access',
    icon: Clock,
    title: 'Unlimited Access, 24×7',
    desc: 'No waiting queues. No appointment delays. Your health support is always available whenever you need it.',
    badge: 'Zero Waiting Time',
    color: '#D97706',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    cta: 'Start All-Access',
    href: '/pricing',
  },
]

// Sample Health Reports for Simplification Demo
const sampleReportDemos = [
  {
    id: 'hba1c',
    name: 'HbA1c Diabetes Report',
    rawLabValue: 'HbA1c: 7.4% (Estimated Average Glucose: 165 mg/dL)',
    rawVerdict: 'High (Reference Range: 4.0% - 5.6%)',
    plainMeaning: 'Your average blood sugar over the past 90 days is in the moderate diabetic range.',
    whyItMatters: 'Persistently elevated blood sugar can cause vessel stiffness, fatigue, and nerve tingling.',
    doctorQuestions: 'Should I adjust my Metformin dosage, and when should I re-test my kidney microalbumin?',
    lifestyleActions: 'Pair Glycomet-GP (₹32 on Jan Aushadhi vs ₹128 brand) with 30 mins brisk walking after dinner.',
  },
  {
    id: 'cbc',
    name: 'CBC (Complete Blood Count)',
    rawLabValue: 'Hemoglobin: 10.2 g/dL | MCV: 72 fL (Microcytic Hypochromic)',
    rawVerdict: 'Low (Reference Range: 12.0 - 15.5 g/dL)',
    plainMeaning: 'You have mild iron-deficiency anemia, meaning your red blood cells carry less oxygen.',
    whyItMatters: 'This directly explains why you feel tired, dizzy, or short of breath on climbing stairs.',
    doctorQuestions: 'Is oral Ferrous Ascorbate + Folic Acid supplement recommended for 3 months?',
    lifestyleActions: 'Include spinach, pomegranate, soaked raisins, and Vitamin C to double iron absorption.',
  },
  {
    id: 'thyroid',
    name: 'Thyroid Profile (TSH)',
    rawLabValue: 'Serum TSH: 6.8 µIU/mL | Free T4: 1.1 ng/dL',
    rawVerdict: 'High TSH (Reference Range: 0.45 - 4.5 µIU/mL)',
    plainMeaning: 'Subclinical Hypothyroidism — your brain is sending stronger signals to stimulate a sluggish thyroid.',
    whyItMatters: 'Can cause unexplained weight gain, dry skin, hair thinning, and morning lethargy.',
    doctorQuestions: 'Should we start Thyronorm 25/50 mcg, or repeat Anti-TPO antibody test?',
    lifestyleActions: 'Thyronorm 50 is available for ₹38 on Jan Aushadhi generic (75% savings). Take fasting in morning.',
  },
  {
    id: 'vitamind',
    name: 'Vitamin D3 (25-OH)',
    rawLabValue: '25-Hydroxy Vitamin D: 12.4 ng/mL',
    rawVerdict: 'Deficient (Optimal Range: 30.0 - 100.0 ng/mL)',
    plainMeaning: 'Severe Vitamin D deficiency — your bones and immune system are not getting adequate calcium signaling.',
    whyItMatters: 'Leads to knee crepitus, lower back ache, frequent colds, and morning joint stiffness.',
    doctorQuestions: 'Is a weekly 60,000 IU Cholecalciferol capsule course required for 8 weeks?',
    lifestyleActions: 'Take Cholecalciferol 60k IU weekly with milk/fats + Shelcal 500 (₹28 Jan Aushadhi).',
  },
]

export default function HomePage() {
  const [rxScannerOpen, setRxScannerOpen] = useState(false)
  const [reportModalOpen, setReportModalOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState<number | null>(null)
  
  // Interactive Language State
  const [currentLang, setCurrentLang] = useState(LANGUAGES[0])
  const [isSpeaking, setIsSpeaking] = useState(false)

  // Interactive 15 Specialties State
  const [selectedSpecialist, setSelectedSpecialist] = useState<AISpecialist>(aiSpecialtyDoctors[0])
  
  // Interactive Report Simplification State
  const [selectedReportDemo, setSelectedReportDemo] = useState(sampleReportDemos[0])

  // Interactive Live Medicine State
  const [selectedMedIndex, setSelectedMedIndex] = useState(0)
  const activeMed = medications[selectedMedIndex]

  // Interactive Live Diagnostic Panel State
  const [selectedPanelId, setSelectedPanelId] = useState('full-body')

  // Real-time Text-to-Speech Preview
  const playDoctorVoice = (text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    window.speechSynthesis.cancel()
    const cleanText = text.replace(/[*_#•]/g, '')
    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.lang = currentLang.speechCode || 'en-IN'
    utterance.rate = 0.95
    utterance.pitch = 1.05

    utterance.onstart = () => setIsSpeaking(true)
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = () => setIsSpeaking(false)

    window.speechSynthesis.speak(utterance)
  }

  const faqs = [
    {
      q: 'What is Meditrust AI and how does Dr. Arya work 24/7 in local Indian languages?',
      a: 'Meditrust AI is India’s leading clinical AI healthcare platform adhering strictly to W.H.O. and ICMR guidelines. Dr. Arya (Age 28, MD Clinical AI) speaks Marathi (मराठी), Hindi (हिन्दी), English, Tamil, Telugu, Bengali, and Gujarati. She performs instant clinical triage across 15+ specialties, explains blood reports in plain words, matches generic medications to save 80%, and arranges 60-minute at-home blood collection in Pune.',
    },
    {
      q: 'How does the 60% Home Care / 40% Hospital Fast-Track model work?',
      a: 'Over 60% of routine cases (viral fevers, mild GERD, PCOS lifestyle management, thyroid/sugar titration, joint stiffness) are safely handled from home with zero clinic queues. For the 40% of cases requiring clinical procedures or surgery, Meditrust fast-tracks you directly to premier partner hospitals in Pune (Ruby Hall Clinic, Sahyadri Super Speciality, Jupiter Hospital Baner) with VIP cashless TPA admission and up to 15% surgical rebates.',
    },
    {
      q: 'How does real-time medicine price comparison save up to 80% with Jan Aushadhi?',
      a: 'When you type any brand medicine (e.g. Augmentin 625, Glycomet-GP 2, Pan-D, Telma 40) or upload a prescription, our real-time engine queries live prices from Tata 1mg, PharmEasy, and Apollo Pharmacy, while immediately matching certified government Jan Aushadhi (PMBJP) generic substitutes with identical chemical bioequivalence, saving up to 83% on your monthly healthcare bills.',
    },
    {
      q: 'Which diagnostic lab competitors are compared in Pune and Maharashtra?',
      a: 'Meditrust compares live rates, turnaround times, and NABL certifications across 13+ diagnostic leaders: Metropolis Healthcare, Dr Lal PathLabs, Thyrocare, Manipal Health Diagnostics, Midlife/Medlife, Healthians, Krsnaa Diagnostics, Diagnopin AI Labs, Likhitha Diagnostics, Lupin Diagnostics, Redcliffe Labs, Simplify Health, Sahyadri Diagnostics, and Meditrust Direct Labs. Home sample collection is dispatched in 60 minutes across Pune (Kothrud, Baner, Hinjewadi, Viman Nagar, Wakad, PCMC, etc.).',
    },
    {
      q: 'What is the All-Access Membership and 24-Hour Refund Guarantee?',
      a: 'Our All-Access pass costs less than ₹60/day (₹499/month or ₹1,499/year for the entire family). It provides unlimited 24×7 AI doctor consultations across all 15+ specialties, unlimited blood report explanations, prescription price matching, and partner hospital VIP benefits. We offer a 100% full refund within 24 hours with zero questions asked.',
    },
  ]

  return (
    <div className="bg-white min-h-screen relative overflow-hidden font-sans">
      
      {/* Real-time Healthcare Motion Background (ECG Wave + Molecular Particles) */}
      <HealthcareBackgroundMotion />

      {/* ── 1. HERO SECTION: ULTRA-ATTRACTIVE, IMPRESSIVE & CONVERTING ── */}
      <section className="relative pt-6 pb-14 md:pt-10 md:pb-20">
        <div className="container-main relative z-10">
          
          {/* Top Real-time Telemetry Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-2.5 px-4 rounded-2xl bg-slate-900 text-white text-2xs shadow-lg border border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-heartbeat flex-shrink-0" />
              <span className="font-bold text-teal-300">DR. ARYA AI DOCTOR · 24/7 ONLINE</span>
              <span className="text-slate-500 hidden sm:inline">|</span>
              <span className="text-slate-300 hidden sm:inline">W.H.O. Standards in 15+ Specialties</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-amber-300 font-bold hidden md:flex items-center gap-1">
                ⚡ 60-Min Doorstep Blood Pickup in Pune
              </span>
              <a
                href="tel:+917028025717"
                className="bg-amber-400 hover:bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full font-black flex items-center gap-1 transition-transform active:scale-95"
              >
                <Phone className="w-3 h-3" /> Call: +91 7028025717
              </a>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Hero (7 Cols): Headline, Value Pillars & Language Engine */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Local Language Selector Banner */}
              <div className="flex items-center gap-2 p-1.5 px-3 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-teal-950 overflow-x-auto">
                <Globe className="w-4 h-4 text-teal-700 flex-shrink-0" />
                <span className="font-bold whitespace-nowrap text-2xs uppercase tracking-wider text-teal-800">Language:</span>
                <div className="flex gap-1">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => {
                        setCurrentLang(lang)
                        playDoctorVoice(lang.heroGreeting)
                      }}
                      className={`px-2 py-0.5 rounded-lg text-2xs font-bold transition-all whitespace-nowrap ${
                        currentLang.id === lang.id
                          ? 'bg-teal-700 text-white shadow-sm'
                          : 'bg-white text-slate-700 hover:bg-teal-100/60'
                      }`}
                    >
                      {lang.flag} {lang.name.split(' ')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12] text-balance">
                Your 24/7 AI Family Doctor for{' '}
                <span className="text-gradient-brand">Instant Symptoms, Reports & 80% Medicine Savings</span>
              </h1>

              {/* Subheadline with Local Language Greeting */}
              <div className="p-3.5 rounded-2xl bg-gradient-to-r from-teal-50/80 via-white to-blue-50/80 border border-teal-100 flex items-start gap-3 shadow-sm">
                <div className="w-8 h-8 rounded-xl bg-teal-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-teal-950 flex items-center gap-2">
                    <span>Dr. Arya says in {currentLang.name}:</span>
                    <button
                      onClick={() => playDoctorVoice(currentLang.heroGreeting)}
                      className="text-3xs text-teal-700 font-bold underline hover:text-teal-900 flex items-center gap-0.5"
                    >
                      <Volume2 className="w-3 h-3 animate-pulse" /> Listen Audio
                    </button>
                  </div>
                  <p className="text-xs text-slate-700 mt-0.5 font-medium leading-relaxed">
                    "{currentLang.heroGreeting}"
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-1">
                <Link
                  href="/symptom-checker"
                  className="btn-primary text-sm px-6 py-3.5 shadow-teal flex items-center gap-2 bg-gradient-to-r from-teal-700 to-teal-800 font-black tracking-wide"
                >
                  <Stethoscope className="w-4 h-4" />
                  Consult Dr. Arya Free (24/7)
                </Link>

                <button
                  onClick={() => setRxScannerOpen(true)}
                  className="btn-outline text-sm px-6 py-3.5 flex items-center gap-2 border-teal-600 text-teal-900 bg-teal-50/60 hover:bg-teal-100 font-bold shadow-sm"
                >
                  <Upload className="w-4 h-4 text-teal-700" />
                  Upload Report / Rx (Save 80%)
                </button>

                <a
                  href="tel:+917028025717"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 text-sm font-black shadow-md transition-all active:scale-95"
                >
                  <Phone className="w-4 h-4" />
                  +91 7028025717
                </a>
              </div>

              {/* 60% / 40% Real-Time Clinical Model Architecture */}
              <div className="p-4 rounded-3xl bg-slate-900 text-white grid sm:grid-cols-2 gap-3 text-xs shadow-xl border border-slate-800">
                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-teal-500 text-slate-950 flex items-center justify-center flex-shrink-0 font-black text-xs shadow">
                    60%
                  </div>
                  <div>
                    <strong className="text-white block font-bold">Solved at Home Over Phone / Voice</strong>
                    <span className="text-slate-400 text-2xs">Fever, acidity, PCOD, BP & diabetes managed with generic medicine match.</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-purple-500 text-white flex items-center justify-center flex-shrink-0 font-black text-xs shadow">
                    40%
                  </div>
                  <div>
                    <strong className="text-white block font-bold">Pune Hospital VIP Admission</strong>
                    <span className="text-slate-400 text-2xs">Ruby Hall, Sahyadri & Jupiter with zero-wait TPA desk & 15% surgery discount.</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Hero (5 Cols): Interactive Dr. Arya Virtual Doctor Card */}
            <div className="lg:col-span-5 relative">
              <div className="card overflow-hidden border-2 border-teal-200 shadow-2xl bg-white relative animate-float-gentle">
                
                {/* Doctor Avatar Header */}
                <div className="p-4 sm:p-5 bg-gradient-to-r from-teal-800 via-teal-900 to-slate-950 text-white flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-16 h-16 rounded-2xl border-2 border-teal-300 overflow-hidden shadow-xl flex-shrink-0 bg-teal-950">
                      <img
                        src="/dr_arya.jpg"
                        alt="Dr. Arya AI Doctor"
                        className="w-full h-full object-cover object-top"
                      />
                      <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h3 className="text-base font-bold text-white">Dr. Arya (AI Doctor)</h3>
                        <span className="badge bg-teal-500/30 text-teal-200 text-3xs border border-teal-400/40 font-bold">
                          Age 28 · MD AI
                        </span>
                      </div>
                      <p className="text-xs text-teal-200 mt-0.5">
                        Speaks {currentLang.name.split(' ')[0]} & 6 Indian Languages
                      </p>
                      <div className="flex items-center gap-2 text-2xs text-amber-300 font-bold mt-1">
                        <span>★ 4.9 Rating (Maharashtra)</span>
                        <span>•</span>
                        <span>&lt; 1.2s Response</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => playDoctorVoice(currentLang.heroGreeting)}
                    className="p-2 rounded-xl bg-teal-700/80 hover:bg-teal-600 text-teal-100 text-xs font-bold flex items-center gap-1 shadow"
                    title="Play doctor voice"
                  >
                    <Volume2 className="w-4 h-4 text-teal-300 animate-pulse" />
                    <span>Voice</span>
                  </button>
                </div>

                {/* Simulated Live Triage Chat */}
                <div className="p-4 space-y-3 bg-slate-50/50">
                  <div className="chat-bubble-ai text-xs p-3.5 bg-white border border-slate-200 shadow-sm leading-relaxed">
                    <strong className="text-teal-800 block mb-0.5">Dr. Arya (24/7 AI MD):</strong>
                    "नमस्कार! You can type symptoms, speak via microphone, or upload any blood report (CBC, Thyroid, HbA1c, etc.) for instant clinical analysis."
                  </div>

                  {/* Interactive Quick Symptom Prompts */}
                  <div className="flex flex-wrap gap-1.5 text-2xs">
                    <button
                      onClick={() => playDoctorVoice("For knee joint pain and cracking stairs, check Vitamin D3. Take weekly 60,000 IU capsule and Shelcal 500 on Jan Aushadhi saving 80 percent.")}
                      className="filter-chip active text-2xs py-1 px-2.5 bg-teal-50 text-teal-900 border border-teal-300 font-bold flex items-center gap-1"
                    >
                      🦴 Knee & Joint Crepitus
                    </button>
                    <button
                      onClick={() => playDoctorVoice("For irregular menstrual cycle and PCOS, Myo-Inositol restores regular ovulation naturally.")}
                      className="filter-chip text-2xs py-1 px-2.5 flex items-center gap-1"
                    >
                      🌺 PCOS & Irregular Periods
                    </button>
                    <button
                      onClick={() => playDoctorVoice("Fasting sugar target is 80 to 110. Glycomet-GP 2 is 32 rupees on Jan Aushadhi generic saving 81 percent.")}
                      className="filter-chip text-2xs py-1 px-2.5 flex items-center gap-1"
                    >
                      🩺 HbA1c & Diabetes
                    </button>
                  </div>

                  {/* Real-Time Price Highlight Preview */}
                  <div className="p-3 rounded-2xl bg-teal-50/90 border border-teal-200 text-teal-950 text-2xs leading-relaxed">
                    <strong className="text-teal-900 block mb-1 flex items-center gap-1">
                      <Zap className="w-3.5 h-3.5 text-amber-500" /> Real-Time Multi-Agent Pricing Active:
                    </strong>
                    <div className="grid grid-cols-2 gap-1.5">
                      <div className="bg-white p-1.5 rounded-lg border border-teal-200 font-bold text-teal-900">
                        🛡️ Meditrust: ₹154 (4 hrs)
                      </div>
                      <div className="bg-white p-1.5 rounded-lg border border-green-200 font-bold text-green-800">
                        🌿 Jan Aushadhi: ₹32 (-81%)
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action CTA Bar */}
                <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
                  <Link
                    href="/symptom-checker"
                    className="btn-primary flex-1 justify-center text-xs py-3 shadow-teal font-bold"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    Consult Dr. Arya Free
                  </Link>
                  <button
                    onClick={() => setRxScannerOpen(true)}
                    className="btn-outline flex-1 justify-center text-xs py-3 font-bold"
                  >
                    <Upload className="w-3.5 h-3.5" />
                    Upload Report
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── 2. THE 4 CORE VALUE PILLARS ─────────────────────────── */}
      <section className="py-10 border-y border-slate-100 bg-slate-50/70 relative z-10">
        <div className="container-main">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {corePillars.map((p) => (
              <div
                key={p.id}
                className="card p-5 bg-white border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all hover:border-teal-400 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-11 h-11 rounded-2xl flex items-center justify-center ${p.bg} border ${p.border}`}
                    >
                      <p.icon className="w-5 h-5" style={{ color: p.color }} />
                    </div>
                    <span className="badge text-3xs font-bold bg-slate-100 text-slate-700">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-1.5 group-hover:text-teal-700 transition-colors">{p.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>
                </div>
                <Link
                  href={p.href}
                  className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-2xs font-bold transition-transform group-hover:translate-x-1"
                  style={{ color: p.color }}
                >
                  <span>{p.cta}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. 15+ AI SPECIALTY DOCTORS (INTERACTIVE SHOWCASE) ───── */}
      <section id="specialties" className="section bg-white relative z-10">
        <div className="container-main">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="section-tag mb-2">15+ Dedicated AI Specialty Doctors</div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              Talk to Your Dedicated AI Specialist
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Instead of generic chatbots, Meditrust packages specialized AI clinical experiences adhering strictly to W.H.O. guidelines.
            </p>
          </div>

          {/* 15 Specialties Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
            {aiSpecialtyDoctors.map((spec) => (
              <button
                key={spec.id}
                onClick={() => setSelectedSpecialist(spec)}
                className={`p-3.5 rounded-2xl border text-left transition-all ${
                  selectedSpecialist.id === spec.id
                    ? 'border-2 border-teal-700 bg-teal-50 shadow-md ring-2 ring-teal-600/20'
                    : 'border-slate-200 hover:border-teal-300 bg-white'
                }`}
              >
                <div className="text-2xl mb-1.5">{spec.icon}</div>
                <div className="text-xs font-black text-slate-900">{spec.title}</div>
                <div className="text-3xs text-slate-500 truncate mt-0.5">{spec.specialty}</div>
              </button>
            ))}
          </div>

          {/* Active Specialist Detail Panel */}
          <div className="card p-6 sm:p-8 border-2 border-teal-100 bg-gradient-to-r from-teal-50/30 via-white to-blue-50/30 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3.5">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl bg-white border border-teal-200 shadow-sm flex-shrink-0">
                  {selectedSpecialist.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-black text-slate-900">{selectedSpecialist.title}</h3>
                    <span className="badge-teal badge text-3xs font-bold">W.H.O. Aligned</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">{selectedSpecialist.tagline}</p>
                </div>
              </div>

              <Link
                href="/symptom-checker"
                className="btn-primary text-xs py-3 px-6 shadow-teal flex items-center gap-2 flex-shrink-0 font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Consult {selectedSpecialist.title} Now
              </Link>
            </div>

            {/* Interactive Clinical Insight & W.H.O Protocol */}
            <div className="grid md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2">
                <div className="text-2xs font-bold text-slate-500 uppercase tracking-wider">
                  Sample Patient Query:
                </div>
                <div className="font-semibold text-slate-800 italic">
                  "{selectedSpecialist.sampleQuestion}"
                </div>
                <div className="text-2xs font-bold text-teal-800 uppercase tracking-wider pt-2 border-t border-slate-100">
                  AI Specialist Clinical Insight:
                </div>
                <p className="text-slate-700 leading-relaxed text-xs">
                  {selectedSpecialist.sampleInsight}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2.5">
                <div className="text-2xs font-bold text-slate-500 uppercase tracking-wider">
                  W.H.O. Standard Framework:
                </div>
                <p className="text-slate-700 font-medium">
                  {selectedSpecialist.whoGuidelineRef}
                </p>

                <div className="text-2xs font-bold text-slate-500 uppercase tracking-wider pt-1">
                  Associated Diagnostic Blood Panels:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {selectedSpecialist.diagnosticPanels.map((dp) => (
                    <span key={dp} className="badge bg-teal-50 text-teal-900 border border-teal-200 text-3xs font-semibold">
                      🩸 {dp}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. HEALTH REPORT SIMPLIFICATION DEMO (CBC, THYROID, LIVER) ── */}
      <section className="section bg-slate-50 relative z-10">
        <div className="container-main">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="section-tag mb-2">Health Report Simplification (100,000+ Analysed)</div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              "I Don't Understand My Blood Report" — Solved.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              Upload any CBC, Thyroid, HbA1c, Vitamin D, Liver, or Kidney report. Your AI doctor breaks down medical jargon into plain words you understand.
            </p>
          </div>

          {/* Interactive Report Tab Switcher */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
            {sampleReportDemos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setSelectedReportDemo(demo)}
                className={`filter-chip text-xs font-bold whitespace-nowrap ${
                  selectedReportDemo.id === demo.id ? 'active' : ''
                }`}
              >
                📄 {demo.name}
              </button>
            ))}
          </div>

          {/* Report Breakdown Comparison Card (Before vs After) */}
          <div className="grid md:grid-cols-12 gap-5">
            
            {/* Raw Lab Report Output (5 Cols) */}
            <div className="md:col-span-5 card p-6 bg-slate-900 text-white space-y-4 border border-slate-800">
              <div className="flex items-center justify-between">
                <span className="text-2xs font-mono uppercase tracking-wider text-slate-400">Raw Diagnostic Report</span>
                <span className="badge bg-red-500/20 text-red-300 border border-red-400/30 text-3xs font-bold">
                  {selectedReportDemo.rawVerdict}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 font-mono text-xs text-amber-300 border border-slate-800">
                {selectedReportDemo.rawLabValue}
              </div>

              <div className="text-xs text-slate-400 space-y-2">
                <p>
                  <strong>Why it frustrates patients:</strong> Most diagnostic printouts contain complex biochemical indices with zero context on severity, what questions to ask, or what diet changes to make.
                </p>
              </div>

              <button
                onClick={() => setRxScannerOpen(true)}
                className="btn-primary w-full justify-center text-xs py-3 bg-teal-600 hover:bg-teal-700 shadow font-bold"
              >
                <Upload className="w-3.5 h-3.5" /> Upload Your Own Report
              </button>
            </div>

            {/* AI Decoded Breakdown in Plain English (7 Cols) */}
            <div className="md:col-span-7 card p-6 bg-white border-2 border-teal-200 shadow-lg space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-teal-700" />
                  <span className="text-xs font-bold text-slate-900">Dr. Arya Plain Language Translation</span>
                </div>
                <span className="badge-green badge text-3xs font-bold">Zero Jargon</span>
              </div>

              <div className="space-y-3 text-xs">
                <div>
                  <strong className="text-teal-900 block font-bold mb-0.5">1. What This Means:</strong>
                  <p className="text-slate-700 leading-relaxed">{selectedReportDemo.plainMeaning}</p>
                </div>

                <div>
                  <strong className="text-slate-900 block font-bold mb-0.5">2. Why It Matters for Your Health:</strong>
                  <p className="text-slate-700 leading-relaxed">{selectedReportDemo.whyItMatters}</p>
                </div>

                <div>
                  <strong className="text-purple-900 block font-bold mb-0.5">3. Questions to Discuss with Your Doctor:</strong>
                  <p className="text-slate-700 leading-relaxed bg-purple-50 p-2.5 rounded-xl border border-purple-100">
                    "{selectedReportDemo.doctorQuestions}"
                  </p>
                </div>

                <div>
                  <strong className="text-green-900 block font-bold mb-0.5">4. Practical Next Steps & Generic Medication:</strong>
                  <p className="text-slate-700 leading-relaxed bg-green-50 p-2.5 rounded-xl border border-green-100">
                    {selectedReportDemo.lifestyleActions}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 5. REAL-TIME MEDICINE PRICE COMPARATOR (INDIAN PHARMACIES) ── */}
      <section className="section bg-white relative z-10">
        <div className="container-main">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <div className="section-tag mb-2">Real-Time Indian Medicine Price Comparator</div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                Compare Tata 1mg, PharmEasy & Apollo vs Jan Aushadhi
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                Real-time price crawler queries top online pharmacies and reveals certified government Jan Aushadhi generic substitutes saving up to 83%.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setRxScannerOpen(true)}
                className="btn-primary text-xs font-bold shadow-teal"
              >
                <Upload className="w-3.5 h-3.5" /> Scan Doctor's Prescription
              </button>
              <Link href="/medication-comparison" className="btn-outline text-xs font-bold">
                View All Medicines →
              </Link>
            </div>
          </div>

          {/* Interactive Medicine Switcher Pills */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
            {medications.map((med, idx) => (
              <button
                key={med.id}
                onClick={() => setSelectedMedIndex(idx)}
                className={`filter-chip text-xs font-bold whitespace-nowrap ${
                  selectedMedIndex === idx ? 'active' : ''
                }`}
              >
                💊 {med.brandNames[0]} ({med.drugClass.split(' ')[0]})
              </button>
            ))}
          </div>

          {/* Active Medicine Live Price Comparison Card */}
          <div className="card p-6 border-2 border-teal-100 bg-gradient-to-b from-teal-50/20 to-white shadow-xl space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl font-black text-slate-900">{activeMed.brandNames[0]}</h3>
                  <span className="badge-teal badge text-xs font-bold">{activeMed.drugClass}</span>
                </div>
                <p className="text-xs text-slate-600 font-mono mt-1">
                  <strong>Generic Salt:</strong> {activeMed.genericName}
                </p>
                <p className="text-xs text-teal-800 mt-1">
                  <strong>Dosage & Indication:</strong> {activeMed.commonDoses}
                </p>
              </div>

              <div className="text-right flex-shrink-0">
                <div className="text-xs text-slate-400">Offline Retail MRP:</div>
                <div className="text-xl font-black text-slate-800">{activeMed.costRange.brand.split('/')[0]}</div>
              </div>
            </div>

            {/* Jan Aushadhi Generic Recommendation (Massive Savings) */}
            <div className="p-4 rounded-2xl bg-green-50 border border-green-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-green-950">
                    Jan Aushadhi (PMBJP) Generic Substitute: {activeMed.genericSubstitute.name}
                  </div>
                  <div className="text-2xs text-green-700 mt-0.5">
                    Same active chemical molecule & clinical efficacy certified by CDSCO & Jan Aushadhi Bureau
                  </div>
                </div>
              </div>

              <div className="text-right flex-shrink-0">
                <div className="text-lg font-black text-green-900">₹{activeMed.genericSubstitute.price}</div>
                <span className="badge-green badge text-2xs font-bold">
                  Save {activeMed.genericSubstitute.savingsPercentage}% vs Retail
                </span>
              </div>
            </div>

            {/* Real-time Pharmacy Grid */}
            <div>
              <div className="text-2xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                Live Price Crawler Across Top Indian Online Pharmacies:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {activeMed.pharmacyPrices.map((p) => (
                  <div
                    key={p.pharmacy}
                    className={`p-3.5 rounded-2xl border flex flex-col justify-between ${
                      p.pharmacy === 'Meditrust Direct'
                        ? 'bg-teal-50 border-teal-300 shadow-sm font-bold text-teal-950'
                        : 'bg-slate-50 border-slate-200 text-slate-800'
                    }`}
                  >
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <span>{p.logo}</span>
                        <span className="text-xs font-bold">{p.pharmacy}</span>
                      </div>
                      <div className="text-2xs text-slate-500">{p.deliveryTime}</div>
                    </div>
                    <div className="mt-3 pt-2 border-t border-slate-200/60 flex items-center justify-between">
                      <span className="text-base font-black">₹{p.price}</span>
                      <span className="badge-teal badge text-3xs">{p.discount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 6. 13+ BLOOD TEST LAB COMPARISON (PUNE & MAHARASHTRA) ── */}
      <section className="section bg-slate-50 relative z-10">
        <div className="container-main">
          
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="section-tag mb-2">13+ Diagnostic Blood Test Labs in Pune</div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              Compare Metropolis, Dr Lal, Thyrocare, Manipal & 10+ Labs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2">
              CLIA & NABL accredited laboratories · 60-Minute doorstep blood sample collection in Pune with Dr. Arya Video Report Explainer.
            </p>
          </div>

          {/* Popular Panels Row */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
            {popularPanels.slice(0, 5).map((panel) => (
              <div
                key={panel.id}
                onClick={() => setSelectedPanelId(panel.id)}
                className={`card p-4 text-center cursor-pointer transition-all ${
                  selectedPanelId === panel.id
                    ? 'border-2 border-teal-600 bg-teal-50/40 shadow-md'
                    : 'border-slate-200 bg-white hover:border-teal-400'
                }`}
              >
                <div className="text-2xl mb-1.5">{panel.icon}</div>
                <h4 className="text-xs font-bold text-slate-900 mb-1">{panel.name.split('(')[0]}</h4>
                <div className="text-sm font-black text-teal-800">{panel.bestPrice}</div>
                <div className="text-2xs text-slate-500 mt-0.5">Meditrust Best Price</div>
              </div>
            ))}
          </div>

          {/* 13 Lab Providers Ticker Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {labProviders.slice(0, 8).map((lab) => (
              <div key={lab.id} className="card p-4 border border-slate-200 bg-white flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{lab.logo}</span>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{lab.name}</h4>
                        <div className="text-2xs text-slate-500">⭐ {lab.rating} ({lab.turnaroundTime})</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-teal-800">From ₹{lab.priceRange.min}</span>
                  </div>

                  <div className="text-2xs text-slate-600 my-2">
                    <strong>Pune Hubs:</strong> {lab.puneHubs.slice(0, 3).join(', ')}
                  </div>
                </div>

                <Link
                  href="/lab-test-comparison"
                  className="text-2xs text-teal-700 font-bold hover:underline flex items-center justify-between pt-2 border-t border-slate-100"
                >
                  <span>Compare live rates</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/lab-test-comparison" className="btn-primary text-sm px-8 py-3.5 shadow-teal font-bold">
              Compare All 13+ Labs in Pune (Metropolis, Dr Lal, Thyrocare, Manipal...) →
            </Link>
          </div>

        </div>
      </section>

      {/* ── 7. PUNE PARTNER HOSPITALS (40% IN-PERSON CARE) ──────── */}
      <section className="section bg-white relative z-10">
        <div className="container-main">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="section-tag mb-2">Pune Hospital Network (40% In-Person Care)</div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                Direct Hospital Admissions & VIP Benefits for Meditrust Patients
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl">
                When Dr. Arya determines that physical evaluation or surgery is required, you are referred with guaranteed zero-wait desk access and exclusive discounts.
              </p>
            </div>
            <Link href="/about" className="btn-outline text-xs font-bold">
              Learn About Partner Hospital Benefits →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {punePartnerHospitals.slice(0, 3).map((hosp) => (
              <div key={hosp.name} className="card p-5 border border-slate-200 space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{hosp.name}</h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-teal-600" />
                      {hosp.area} · <strong className="text-teal-700">{hosp.distance}</strong>
                    </p>
                  </div>
                  <span className="badge-teal badge text-2xs">⭐ {hosp.rating}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {hosp.specialties.map((spec) => (
                    <span key={spec} className="badge bg-slate-100 text-slate-700 text-2xs">
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="p-2.5 rounded-xl bg-green-50 border border-green-200 text-xs font-semibold text-green-900">
                  🎁 {hosp.meditrustDiscount}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 8. ALL-ACCESS UNLIMITED SUBSCRIPTION ENGINE (< ₹60/DAY) ── */}
      <section className="section bg-slate-900 text-white relative z-10 overflow-hidden">
        <div className="container-main max-w-4xl text-center space-y-8">
          
          <div className="space-y-3">
            <span className="badge bg-teal-500/20 text-teal-300 text-xs px-3 py-1 border border-teal-400/30">
              Low-Friction All-Access Health Membership
            </span>
            <h2 className="text-3xl sm:text-4xl font-black">
              Unlimited AI Doctor Access for Less Than ₹60/Day
            </h2>
            <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
              No appointments. No waiting queues. Unlimited consultations across 15+ specialties and unlimited medical report explanations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
            
            {/* Monthly Plan */}
            <div className="p-6 rounded-3xl bg-slate-800/80 border border-slate-700 flex flex-col justify-between space-y-4">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Monthly Pass</div>
                <div className="text-3xl font-black text-white mt-1">₹499 <span className="text-xs text-slate-400 font-normal">/ month</span></div>
                <div className="text-2xs text-teal-400 font-bold mt-1">Approx ₹16/day</div>

                <ul className="mt-4 space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">✓ Unlimited 24×7 AI Doctor Consultations</li>
                  <li className="flex items-center gap-2">✓ All 15+ Medical Specialties Included</li>
                  <li className="flex items-center gap-2">✓ Unlimited Blood Report Explanations</li>
                </ul>
              </div>

              <Link href="/pricing" className="btn-outline border-slate-600 text-white hover:bg-slate-700 justify-center text-xs py-3 font-bold">
                Start Monthly Pass
              </Link>
            </div>

            {/* Annual All-Access Plan (Popular) */}
            <div className="p-6 rounded-3xl bg-gradient-to-b from-teal-900 to-slate-800 border-2 border-teal-400 flex flex-col justify-between space-y-4 shadow-2xl relative">
              <span className="absolute -top-3 right-6 badge-green badge text-3xs font-black">
                MOST POPULAR · SAVE 75%
              </span>
              <div>
                <div className="text-xs font-bold text-teal-300 uppercase tracking-wider">Annual Family Pass</div>
                <div className="text-3xl font-black text-white mt-1">₹1,499 <span className="text-xs text-slate-400 font-normal">/ year</span></div>
                <div className="text-2xs text-amber-300 font-bold mt-1">Less than ₹4.10/day (Entire Family)</div>

                <ul className="mt-4 space-y-2 text-xs text-teal-100">
                  <li className="flex items-center gap-2">✓ Everything in Monthly for up to 4 Family Members</li>
                  <li className="flex items-center gap-2">✓ Pune Partner Hospital VIP Admission Pass</li>
                  <li className="flex items-center gap-2">✓ Free 1st At-Home Blood Test Collection</li>
                </ul>
              </div>

              <Link href="/pricing" className="btn-primary justify-center text-xs py-3 shadow-teal font-black">
                Get Annual All-Access
              </Link>
            </div>

          </div>

          <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700 max-w-xl mx-auto text-2xs text-slate-300 flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            <span><strong>24-Hour Full Refund Guarantee:</strong> Not satisfied? Cancel within 24 hours for a 100% full refund with zero questions asked.</span>
          </div>

        </div>
      </section>

      {/* ── 9. FAQ ACCORDION ───────────────────────────────────── */}
      <section className="section bg-slate-50 relative z-10">
        <div className="container-main max-w-3xl">
          <div className="text-center mb-10">
            <div className="section-tag mb-2">Frequently Asked Questions</div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              Everything You Need to Know About Meditrust AI
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-2xl bg-white overflow-hidden transition-colors">
                <button
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${activeFaq === idx ? 'rotate-180 text-teal-700' : ''}`} />
                </button>
                {activeFaq === idx && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Floating 3D/Animated Dr. Arya Doctor Widget in bottom right */}
      <DrAryaFloatingDoctor onOpenPrescriptionScanner={() => setRxScannerOpen(true)} />

      {/* Prescription Scanner Modal */}
      <PrescriptionScannerModal
        isOpen={rxScannerOpen}
        onClose={() => setRxScannerOpen(false)}
      />

      {/* Lab Report Explainer Modal */}
      <LabReportExplainerModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
      />
    </div>
  )
}
