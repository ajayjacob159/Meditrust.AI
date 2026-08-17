'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Activity, Pill, FlaskConical, Shield, Star, ChevronRight,
  Brain, Clock, CheckCircle2, ArrowRight, Zap, Users, TrendingUp,
  Heart, ChevronDown, MessageCircle, Stethoscope, Lock, Sparkles,
  BarChart3, Calendar, BookOpen, Phone, AlertTriangle, Award, Globe,
  Upload, Video, Building2, MapPin, Check, FileText, HelpCircle,
  ShieldCheck, Volume2, VolumeX, Mic, Play, ArrowUpRight, Sparkle,
  Layers, CheckCheck, RefreshCw, Eye
} from 'lucide-react'
import DrAryaFloatingDoctor from '@/components/common/DrAryaFloatingDoctor'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'
import LabReportExplainerModal from '@/components/common/LabReportExplainerModal'
import HealthcareBackgroundMotion from '@/components/common/HealthcareBackgroundMotion'
import { aiSpecialtyDoctors, type AISpecialist } from '@/data/specialties'
import { labProviders, popularPanels, punePartnerHospitals } from '@/data/labProviders'
import { medications } from '@/data/medications'

const LANGUAGES = [
  { id: 'mr', name: 'मराठी', speechCode: 'mr-IN', flag: '🚩', greeting: 'नमस्कार! मी डॉ. आर्या. ६०% आरोग्य समस्या आपण घरबसल्या सोडवू शकतो.', samplePrompt: 'माझे गुडघे दुखतात आणि चक्कर येते' },
  { id: 'hi', name: 'हिन्दी', speechCode: 'hi-IN', flag: '🇮🇳', greeting: 'नमस्ते! मैं डॉ. आर्या हूँ। W.H.O. मानकों के अनुसार घर बैठे सही डॉक्टरी सलाह पाएं।', samplePrompt: 'मुझे एसिडिटी और सीने में जलन है' },
  { id: 'en', name: 'English', speechCode: 'en-IN', flag: '🌐', greeting: 'Hello! I am Dr. Arya, your 24/7 AI Doctor. How can I help you today?', samplePrompt: 'Explain my high HbA1c (7.4%) report' },
  { id: 'ta', name: 'தமிழ்', speechCode: 'ta-IN', flag: '🌺', greeting: 'வணக்கம்! நான் டாக்டர் ஆர்யா. 24/7 உடனடி மருத்துவ ஆலோசனை.', samplePrompt: 'ரத்த பரிசோதனை விவரம்' },
  { id: 'te', name: 'తెలుగు', speechCode: 'te-IN', flag: '🪔', greeting: 'నమస్కారం! నేను డాక్టర్ ఆర్య. మీ ఆరోగ్య సలహాదారు.', samplePrompt: 'థైరాయిడ్ లక్షణాలు' },
]

export default function HomePage() {
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0])
  const [isPlayingAudio, setIsPlayingAudio] = useState(false)
  const [activeSpecialty, setActiveSpecialty] = useState<AISpecialist>(aiSpecialtyDoctors[0])
  const [rxModalOpen, setRxModalOpen] = useState(false)
  const [reportModalOpen, setReportModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'home' | 'hospital'>('home')

  // Real-time Text-to-Speech Voice Engine
  const playDoctorVoice = (text: string, langCode: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = langCode || 'mr-IN'
    utterance.rate = 0.95
    utterance.pitch = 1.05

    const voices = window.speechSynthesis.getVoices()
    const matchVoice = voices.find(v => v.lang.includes('IN') || v.name.includes('India') || v.name.includes('Hindi') || v.name.includes('Marathi'))
    if (matchVoice) utterance.voice = matchVoice

    utterance.onstart = () => setIsPlayingAudio(true)
    utterance.onend = () => setIsPlayingAudio(false)
    utterance.onerror = () => setIsPlayingAudio(false)

    window.speechSynthesis.speak(utterance)
  }

  const handleLanguageSwitch = (lang: typeof LANGUAGES[0]) => {
    setSelectedLang(lang)
    playDoctorVoice(lang.greeting, lang.speechCode)
  }

  return (
    <div className="relative overflow-hidden bg-slate-50 min-h-screen">
      {/* Background Animated SVG Waves */}
      <HealthcareBackgroundMotion />

      {/* ── 1. HERO SECTION: PICTORIAL & HIGH-ADRENALINE ── */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-hidden">
        <div className="container-main">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Punchy Headline & Visual Triggers */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs font-bold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>W.H.O. Standard AI Medical Triage · 15+ Specialties</span>
              </div>

              {/* High Impact Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1] font-display">
                India’s 24/7 <span className="text-teal-700">AI Doctor</span> & Medicine Savings Engine.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
                Consult <strong>Dr. Arya</strong> in Marathi, Hindi & English. Get instant plain-language blood report breakdowns, save up to <strong>80% on medicines</strong> with Jan Aushadhi generic equivalents, and compare <strong>13+ diagnostic labs</strong> in Pune.
              </p>

              {/* 3 Visual Trigger Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/symptom-checker"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-teal-700/25 transition-all hover:scale-102 active:scale-98"
                >
                  <Stethoscope className="w-5 h-5" />
                  <span>Consult Dr. Arya Now</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <button
                  onClick={() => setReportModalOpen(true)}
                  className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-900 font-bold text-sm sm:text-base border border-slate-200 shadow-sm transition-all hover:border-slate-300"
                >
                  <Upload className="w-4 h-4 text-blue-600" />
                  <span>Explain Blood Report</span>
                </button>

                <a
                  href="tel:+917028025717"
                  className="flex items-center gap-2 px-4 py-3.5 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-950 font-black text-sm border border-amber-200 transition-colors"
                >
                  <Phone className="w-4 h-4 text-amber-600 animate-pulse" />
                  <span>+91 7028025717</span>
                </a>
              </div>

              {/* Language Voice Selector Bar */}
              <div className="pt-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-500 mb-2">
                  <Globe className="w-4 h-4 text-teal-600" />
                  <span>Listen to Dr. Arya Speak in Your Language:</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => handleLanguageSwitch(lang)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                        selectedLang.id === lang.id
                          ? 'bg-teal-700 text-white shadow-md scale-105'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-teal-300'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                      {selectedLang.id === lang.id && isPlayingAudio && (
                        <Volume2 className="w-3.5 h-3.5 text-teal-200 animate-pulse" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Visual Metric Proof Strip */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
                <div className="p-3 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                  <div className="text-xl sm:text-2xl font-black text-teal-800">60%</div>
                  <div className="text-3xs sm:text-2xs text-slate-500 font-bold uppercase">Solved at Home</div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                  <div className="text-xl sm:text-2xl font-black text-rose-700">80%</div>
                  <div className="text-3xs sm:text-2xs text-slate-500 font-bold uppercase">Medicine Savings</div>
                </div>
                <div className="p-3 rounded-2xl bg-white border border-slate-100 shadow-2xs">
                  <div className="text-xl sm:text-2xl font-black text-purple-700">13+</div>
                  <div className="text-3xs sm:text-2xs text-slate-500 font-bold uppercase">Diagnostic Labs</div>
                </div>
              </div>

            </div>

            {/* Right Column: Visual Dr. Arya Live Telemedicine Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-teal-950 to-slate-950 p-5 text-white shadow-2xl border border-teal-500/30 overflow-hidden group">
                
                {/* Visual Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />

                {/* Card Top Status Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-bold tracking-wide uppercase text-teal-300">Live AI Doctor Room</span>
                  </div>
                  <span className="bg-slate-800 px-2.5 py-1 rounded-full text-3xs font-bold text-slate-300 border border-slate-700">
                    W.H.O. Certified
                  </span>
                </div>

                {/* Doctor Portrait Visual Container */}
                <div className="relative my-4 aspect-[4/3] rounded-2xl overflow-hidden border-2 border-teal-500/40 shadow-inner bg-slate-900">
                  <img
                    src="/dr_arya.jpg"
                    alt="Dr. Arya AI Doctor"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Audio Playing Visualizer Overlay */}
                  {isPlayingAudio && (
                    <div className="absolute bottom-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md p-2.5 rounded-xl border border-teal-400/40 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Volume2 className="w-4 h-4 text-teal-400 animate-bounce" />
                        <span className="text-xs font-bold text-teal-200">Dr. Arya Speaking ({selectedLang.name})...</span>
                      </div>
                      <div className="flex items-end gap-0.5 h-4">
                        {[10, 18, 12, 22, 14, 24, 16, 20].map((h, i) => (
                          <span
                            key={i}
                            className="w-1 bg-teal-400 rounded-full animate-pulse"
                            style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Spoken Greeting Quote */}
                <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-200 leading-relaxed italic">
                  "{selectedLang.greeting}"
                </div>

                {/* 1-Tap Quick Action Row */}
                <div className="grid grid-cols-2 gap-2.5 pt-3">
                  <Link
                    href="/symptom-checker"
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Chat in Real Time</span>
                  </Link>

                  <button
                    onClick={() => playDoctorVoice(selectedLang.greeting, selectedLang.speechCode)}
                    className="flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-teal-300 font-bold text-xs border border-slate-700 transition-colors"
                  >
                    <Volume2 className="w-4 h-4 text-teal-400" />
                    <span>Listen Voice</span>
                  </button>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. PICTORIAL 4-PILLAR FEATURE MATRIX ── */}
      <section className="py-12 bg-white border-y border-slate-200/80">
        <div className="container-main space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight font-display">
              Healthcare Made Visual, Simple & 80% Cheaper
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Four hospital-grade technologies built to eliminate medical confusion and heavy hospital bills.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: AI Symptom Checker */}
            <div className="group rounded-3xl bg-teal-50/60 border border-teal-200/80 p-5 space-y-4 hover:shadow-xl hover:border-teal-400 transition-all flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center shadow-md">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-950">24/7 AI Doctor Triage</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Instant evidence-based clinical insights in Marathi, Hindi & English. Type symptoms → receive clear next steps.
                </p>
              </div>

              <Link
                href="/symptom-checker"
                className="flex items-center justify-between p-2.5 rounded-xl bg-white text-teal-900 font-bold text-xs border border-teal-200 group-hover:bg-teal-700 group-hover:text-white transition-all"
              >
                <span>Check Symptoms</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Card 2: Report Explainer (HUD Image) */}
            <div className="group rounded-3xl bg-blue-50/60 border border-blue-200/80 overflow-hidden hover:shadow-xl hover:border-blue-400 transition-all flex flex-col justify-between">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src="/report_scanner_hud.jpg"
                  alt="Report Scanner HUD"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-blue-900/90 text-white text-3xs font-bold px-2 py-0.5 rounded-full">
                  100,000+ Decoded
                </div>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-slate-950">Report Explainer HUD</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Upload CBC, Thyroid, HbA1c or Vitamin D reports. Dr. Arya translates medical numbers into plain words.
                </p>
                <button
                  onClick={() => setReportModalOpen(true)}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-white text-blue-900 font-bold text-xs border border-blue-200 group-hover:bg-blue-700 group-hover:text-white transition-all"
                >
                  <span>Upload & Decode Report</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Card 3: Generic Medicine Savings (3D Image) */}
            <div className="group rounded-3xl bg-emerald-50/60 border border-emerald-200/80 overflow-hidden hover:shadow-xl hover:border-emerald-400 transition-all flex flex-col justify-between">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src="/medicine_generic_savings.jpg"
                  alt="Generic Medicine Savings"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-emerald-700 text-white text-3xs font-black px-2 py-0.5 rounded-full shadow">
                  Save Up to 80%
                </div>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-slate-950">Generic Medicine Match</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Compare Tata 1mg, PharmEasy & Apollo vs Jan Aushadhi (PMBJP) generic equivalents certified by CDSCO.
                </p>
                <Link
                  href="/medication-comparison"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white text-emerald-950 font-bold text-xs border border-emerald-200 group-hover:bg-emerald-700 group-hover:text-white transition-all"
                >
                  <span>Compare Medicine Prices</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Card 4: 60-Min Home Blood Collection (Phlebotomy Image) */}
            <div className="group rounded-3xl bg-purple-50/60 border border-purple-200/80 overflow-hidden hover:shadow-xl hover:border-purple-400 transition-all flex flex-col justify-between">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src="/home_phlebotomy_pickup.jpg"
                  alt="60-Min Home Blood Pickup"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 right-2 bg-purple-900/90 text-white text-3xs font-bold px-2 py-0.5 rounded-full">
                  60-Min Pune Fleet
                </div>
              </div>

              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-slate-950">13+ Diagnostic Labs Matrix</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                  Compare rates across Metropolis, Dr Lal, Thyrocare & Sahyadri with 60-min home sample collection.
                </p>
                <Link
                  href="/lab-test-comparison"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-white text-purple-950 font-bold text-xs border border-purple-200 group-hover:bg-purple-700 group-hover:text-white transition-all"
                >
                  <span>Compare 13+ Labs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. VISUAL BEFORE / AFTER BLOOD REPORT EXPLAINER ── */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="container-main space-y-8 relative z-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
                Visual Report Simplification Engine
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-1 font-display">
                "I Don’t Understand My Blood Report" — Solved.
              </h2>
            </div>

            <button
              onClick={() => setReportModalOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm shadow transition-colors self-start sm:self-auto"
            >
              <Video className="w-4 h-4" />
              <span>Watch Video Briefing Demo →</span>
            </button>
          </div>

          {/* Visual Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* Left: Confusing Lab Jargon */}
            <div className="p-6 rounded-3xl bg-slate-950 border border-slate-800 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  What Diagnostic Labs Give You (Raw Numbers)
                </span>
                <span className="text-3xs text-slate-500 font-mono">PDF REPORT #8241</span>
              </div>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">HbA1c (Glycated Hb)</span>
                  <span className="text-rose-400 font-bold">7.4 % (HIGH) [4.0-5.6]</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">Serum TSH (Thyroid)</span>
                  <span className="text-amber-400 font-bold">6.8 mIU/L (ELEVATED) [0.4-4.5]</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">25-OH Vitamin D3</span>
                  <span className="text-rose-400 font-bold">12.4 ng/mL (DEFICIENT) [30-100]</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex justify-between">
                  <span className="text-slate-400">Hemoglobin (CBC)</span>
                  <span className="text-amber-400 font-bold">10.2 g/dL (LOW) [12.0-15.5]</span>
                </div>
              </div>

              <p className="text-2xs text-slate-400 italic">
                ❌ Causes anxiety and confusion without actionable medical explanations.
              </p>
            </div>

            {/* Right: What Dr. Arya Gives You (Plain Words & Video) */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-teal-950 via-slate-900 to-slate-950 border border-teal-500/40 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between pb-3 border-b border-teal-500/30">
                <span className="text-xs font-bold text-teal-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-teal-400" />
                  What Meditrust AI Gives You (Plain Words)
                </span>
                <span className="bg-teal-500/20 text-teal-300 text-3xs font-black px-2 py-0.5 rounded-full border border-teal-400/30">
                  Organ Score: 78/100
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-200">
                <div className="p-3 rounded-xl bg-teal-900/30 border border-teal-500/20 space-y-1">
                  <div className="font-bold text-teal-300">🩸 Sugar Balance:</div>
                  <p className="text-2xs text-slate-300">
                    Average 90-day blood sugar is mildly elevated. 30 mins walking + Jan Aushadhi Metformin generic (save 75%) stabilizes it.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-teal-900/30 border border-teal-500/20 space-y-1">
                  <div className="font-bold text-teal-300">🦴 Bone & Fatigue (Vitamin D):</div>
                  <p className="text-2xs text-slate-300">
                    Deficient Vitamin D explains morning knee stiffness. Take weekly 60,000 IU generic supplement for 8 weeks.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setReportModalOpen(true)}
                className="w-full py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow flex items-center justify-center gap-2 transition-colors"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>Hear Dr. Arya Video Explanation</span>
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* ── 4. 15+ W.H.O. SPECIALTIES VISUAL SELECTOR ── */}
      <section id="specialties" className="py-12 sm:py-16 bg-slate-50">
        <div className="container-main space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Clinical Expertise
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-950 mt-1 font-display">
                15+ W.H.O.-Standard AI Specialty Doctors
              </h2>
            </div>
            <Link
              href="/symptom-checker"
              className="text-xs sm:text-sm font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1"
            >
              <span>Explore All Specialties</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5">
            {aiSpecialtyDoctors.slice(0, 10).map((specialist) => (
              <Link
                key={specialist.id}
                href="/symptom-checker"
                className="p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-teal-400 hover:shadow-md transition-all group flex flex-col justify-between space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{specialist.icon}</span>
                  <span className="text-3xs font-black uppercase text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full">
                    AI MD
                  </span>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-teal-700 transition-colors">
                    {specialist.title}
                  </h4>
                  <p className="text-3xs text-slate-500 mt-0.5 line-clamp-2">
                    {specialist.tagline}
                  </p>
                </div>

                <div className="text-3xs text-teal-700 font-bold flex items-center gap-1 pt-1 border-t border-slate-100">
                  <span>Consult Specialist</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── 5. ADRENALINE EMERGENCY TRIAGE & DIRECT CALL STRIP ── */}
      <section className="py-10 bg-gradient-to-r from-slate-950 via-slate-900 to-amber-950 text-white border-t border-amber-500/20">
        <div className="container-main flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Phone className="w-4 h-4 animate-pulse" />
              <span>Immediate Medical Assistance Hotline (24×7 Active)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Need to Talk to a Physician Right Now? Call <span className="text-amber-400">+91 7028025717</span>
            </h3>
            <p className="text-xs text-slate-300">
              Zero waiting time. Instant connection with Meditrust Clinical Coordinators & Dr. Arya AI Desk.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <a
              href="tel:+917028025717"
              className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm sm:text-base shadow-xl transition-all hover:scale-105"
            >
              📞 Call +91 7028025717
            </a>

            <Link
              href="/symptom-checker"
              className="px-5 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700 transition-colors"
            >
              Chat Online
            </Link>
          </div>
        </div>
      </section>

      {/* Floating Interactive 3D Doctor Console */}
      <DrAryaFloatingDoctor onOpenPrescriptionScanner={() => setRxModalOpen(true)} />

      {/* Modals */}
      <PrescriptionScannerModal isOpen={rxModalOpen} onClose={() => setRxModalOpen(false)} />
      <LabReportExplainerModal isOpen={reportModalOpen} onClose={() => setReportModalOpen(false)} />
    </div>
  )
}
