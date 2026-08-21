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
  { id: 'hi', name: 'हिन्दी', speechCode: 'hi-IN', flag: '🇮🇳', greeting: 'नमस्ते! मैं डॉ. आर्या हूँ। 24/7 घर बैठे सही और सटीक डॉक्टरी सलाह पाएं।', samplePrompt: 'मुझे एसिडिटी और सीने में जलन है' },
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
    <div className="relative overflow-x-hidden w-full max-w-full bg-slate-50 min-h-screen">
      {/* Background Animated SVG Waves */}
      <HealthcareBackgroundMotion />

      {/* ── 1. HERO SECTION: PICTORIAL & HIGH-ADRENALINE ── */}
      <section className="relative pt-6 pb-12 sm:pt-10 sm:pb-16 overflow-x-hidden w-full max-w-full">
        <div className="container-main w-full">
          
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
            
            {/* Left Column: Punchy Headline & Visual Triggers */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Trust Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs font-bold shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                <span>24/7 AI Medical Triage · 15+ Specialties</span>
              </div>

              {/* High Impact Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1] font-display">
                India’s 24/7 <span className="text-teal-700">AI Doctor</span> & Medicine Savings Engine.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
                Consult <strong>Dr. Arya</strong> in Marathi, Hindi & English. Get instant plain-language blood report breakdowns, save up to <strong>80% on medicines</strong> with Jan Aushadhi generic equivalents, and compare <strong>13+ diagnostic labs</strong> in Pune.
              </p>

              {/* 4 Visual Trigger Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/symptom-checker"
                  className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-teal-700 hover:bg-teal-800 text-white font-extrabold text-sm sm:text-base shadow-lg hover:shadow-teal-700/25 transition-all hover:scale-102 active:scale-98"
                >
                  <Stethoscope className="w-5 h-5" />
                  <span>Consult Dr. Arya Now</span>
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>

                <a
                  href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm sm:text-base shadow-lg transition-all hover:scale-102 active:scale-98"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>

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

              {/* Live Voice Selector Strips */}
              <div className="p-4 rounded-2xl bg-white/90 border border-slate-200/90 shadow-sm space-y-2.5 backdrop-blur-xs">
                <div className="flex items-center justify-between">
                  <div className="text-2xs font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Volume2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>Select Language to Hear Dr. Arya Speak</span>
                  </div>
                  {isPlayingAudio && (
                    <span className="text-3xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full animate-pulse flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600" /> Speaking Now...
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap gap-2">
                  {LANGUAGES.map((lang) => (
                    <button
                      key={lang.id}
                      onClick={() => handleLanguageSwitch(lang)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                        selectedLang.id === lang.id
                          ? 'bg-teal-700 text-white shadow-xs scale-105'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>

                <p className="text-xs text-teal-900 bg-teal-50/70 p-2.5 rounded-xl border border-teal-100 italic">
                  "{selectedLang.greeting}"
                </p>
              </div>

            </div>

            {/* Right Column: Visual 3D Doctor Studio Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl bg-gradient-to-b from-slate-900 via-slate-950 to-teal-950 p-2 shadow-2xl border border-teal-500/30 overflow-hidden group">
                
                {/* Visual Glow Layer */}
                <div className="absolute inset-0 bg-radial from-teal-500/20 via-transparent to-transparent opacity-60 pointer-events-none" />

                {/* Dr. Arya Portrait Frame */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-950">
                  <img
                    src="/dr_arya.jpg"
                    alt="Dr. Arya AI Doctor"
                    className="w-full h-full object-cover object-top filter brightness-105 group-hover:scale-103 transition-transform duration-500"
                  />

                  {/* Active Telemetry Overlay HUD */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-emerald-400 text-3xs font-black uppercase tracking-wider border border-emerald-500/30">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      Live AI Triage Active
                    </span>

                    <span className="px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-slate-300 text-3xs font-bold border border-slate-700">
                      24×7 Available
                    </span>
                  </div>

                  {/* Real-time Voice Wave Visualizer Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-2xl bg-slate-950/85 backdrop-blur-md border border-teal-500/30 text-white space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                        <span className="text-xs font-black tracking-wide">Dr. Arya, AI Physician</span>
                      </div>
                      <span className="text-3xs text-teal-300 font-bold bg-teal-950/80 px-2 py-0.5 rounded-full border border-teal-500/30">
                        15+ Specialties
                      </span>
                    </div>

                    <div className="flex items-center gap-1.5 h-6 px-1">
                      {[40, 75, 100, 60, 90, 45, 80, 100, 65, 85, 50, 95, 70, 40].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-teal-500 to-emerald-400 rounded-full transition-all duration-300"
                          style={{
                            height: isPlayingAudio ? `${h}%` : '20%',
                            animation: isPlayingAudio ? `soundwave 0.8s infinite ease-in-out ${i * 0.05}s` : 'none'
                          }}
                        />
                      ))}
                    </div>

                    <Link
                      href="/symptom-checker"
                      className="w-full py-2 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white font-black text-xs text-center flex items-center justify-center gap-1.5 shadow transition-all"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Start Instant Consultation</span>
                    </Link>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2. THE 4 HIGH-VISUAL PILLARS OF MEDITRUST AI ── */}
      <section className="py-12 sm:py-16 bg-white border-y border-slate-200/80">
        <div className="container-main space-y-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Complete Healthcare Navigation
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight font-display">
              Four High-Impact Solutions in One Platform
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              From instant multilingual symptom triage to 80% generic medicine discounts and 60-min doorstep lab tests.
            </p>
          </div>

          {/* 4 Pictorial Image Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Card 1: 24/7 AI Doctor Consultation */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-lg flex flex-col justify-between group hover:border-teal-500 transition-all">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src="/dr_arya.jpg"
                  alt="24/7 AI Doctor"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-teal-800/90 text-white text-3xs font-black px-2.5 py-1 rounded-full backdrop-blur-xs">
                  24×7 Available
                </div>
              </div>
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors">
                    24/7 Multilingual AI Doctor
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Consult Dr. Arya in Marathi, Hindi & English. Evaluates symptoms across 15+ specialties instantly.
                  </p>
                </div>
                <Link
                  href="/symptom-checker"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-400 group-hover:text-teal-300 pt-2 border-t border-slate-800"
                >
                  <span>Start Free Triage</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 2: Report Scanner & Organ Vitality */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-lg flex flex-col justify-between group hover:border-blue-500 transition-all">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src="/report_scanner_hud.jpg"
                  alt="Report Scanner HUD"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-blue-800/90 text-white text-3xs font-black px-2.5 py-1 rounded-full backdrop-blur-xs">
                  100-Pt Vitality Score
                </div>
              </div>
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    Plain-English Report Explainer
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Upload any blood test PDF or photo. Dr. Arya breaks down CBC, Thyroid, HbA1c & Vitamin D into plain language.
                  </p>
                </div>
                <button
                  onClick={() => setReportModalOpen(true)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-400 group-hover:text-blue-300 pt-2 border-t border-slate-800 text-left"
                >
                  <span>Upload & Scan PDF</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Card 3: Generic Medicine Savings */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-lg flex flex-col justify-between group hover:border-emerald-500 transition-all">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src="/medicine_generic_savings.jpg"
                  alt="Generic Medicine Savings"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-emerald-700/90 text-white text-3xs font-black px-2.5 py-1 rounded-full backdrop-blur-xs">
                  Save up to 80%
                </div>
              </div>
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Generic Medicine Price Match
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Compare Tata 1mg, PharmEasy & Apollo prices against government-certified Jan Aushadhi generic substitutes.
                  </p>
                </div>
                <Link
                  href="/medication-comparison"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 group-hover:text-emerald-300 pt-2 border-t border-slate-800"
                >
                  <span>Compare Medicine Prices</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Card 4: 60-Minute At-Home Phlebotomy */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden shadow-lg flex flex-col justify-between group hover:border-purple-500 transition-all">
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src="/home_phlebotomy_pickup.jpg"
                  alt="Home Blood Collection"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-purple-800/90 text-white text-3xs font-black px-2.5 py-1 rounded-full backdrop-blur-xs">
                  ⚡ 60-Min Pickup
                </div>
              </div>
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                    13+ Pune Diagnostic Labs
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Book doorstep blood collection across Metropolis, Thyrocare, Dr Lal & Sahyadri with 60-min phlebotomist dispatch.
                  </p>
                </div>
                <Link
                  href="/lab-test-comparison"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-400 group-hover:text-purple-300 pt-2 border-t border-slate-800"
                >
                  <span>Compare 13+ Labs</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 2.3 VAIDYA-STYLE PROBLEM CAROUSEL: SOLVING HEALTH SURPRISES & ANXIETY ── */}
      <section className="py-10 bg-slate-900 text-white overflow-hidden border-y border-slate-800">
        <div className="container-main space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="text-2xs font-bold text-teal-400 uppercase tracking-wider">
                Continuous Personal Health Intelligence
              </span>
              <h2 className="text-xl sm:text-3xl font-bold tracking-tight text-white mt-0.5">
                Understand Changes, Be Consistent When Life Gets <span className="text-teal-400">Busy</span>
              </h2>
            </div>
            <Link
              href="/health-score"
              className="text-xs font-bold text-teal-300 hover:text-white flex items-center gap-1 self-start sm:self-auto"
            >
              <span>Explore Health Score &amp; Streaks</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 hover:border-teal-500/50 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-base">
                🧘
              </div>
              <h3 className="font-bold text-sm text-white">Clarity, Not Health Anxiety</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Clear plain-language explanations from Dr. Arya so you never panic over complex blood test values or online medical jargon.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 hover:border-teal-500/50 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-teal-500/20 text-teal-400 flex items-center justify-center font-bold text-base">
                🛡️
              </div>
              <h3 className="font-bold text-sm text-white">Fewer Health Surprises</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Track HbA1c, Cholesterol, Vitamin D and blood pressure trends over time in MediVault™ to catch silent metabolic shifts early.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 hover:border-teal-500/50 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-base">
                👨‍👩‍👧‍👦
              </div>
              <h3 className="font-bold text-sm text-white">Care for Parents &amp; Family</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Centralize health records for parents and kids. Set smart WhatsApp medicine reminders so they never skip doses.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2 hover:border-teal-500/50 transition-colors">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-base">
                💊
              </div>
              <h3 className="font-bold text-sm text-white">Managing Chronic Conditions</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Save 80% every month on lifelong prescriptions with Jan Aushadhi generic substitution and 60-min doorstep lab pickups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2.4 VAIDYA-EQUIVALENT HEALTHCARE INTELLIGENCE ECOSYSTEM (6 CORE APPS) ── */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200">
        <div className="container-main space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-2xs font-bold uppercase tracking-widest text-teal-800 bg-teal-100 px-3 py-1 rounded-full border border-teal-200">
              Integrated Health Intelligence Suite
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight font-display">
              Everything Your Family Needs for Lifelong Vitality
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-medium">
              A comprehensive personal health ecosystem combining AI clinical triage, secure record vaults, habit tracking, and local medical directories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* App 1: MediVault */}
            <Link
              href="/medivault"
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-md transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                🗄️
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-base text-slate-900 group-hover:text-teal-700 transition-colors">
                  MediVault™ Health Locker
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Store prescriptions, lab reports, X-rays, and vaccine records in an ABDM-compliant 256-bit encrypted vault with automatic biomarker graphing.
                </p>
              </div>
              <span className="text-xs font-bold text-blue-700 flex items-center gap-1 pt-2 border-t border-slate-100">
                Open MediVault Locker →
              </span>
            </Link>

            {/* App 2: Health Score */}
            <Link
              href="/health-score"
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-md transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-base text-slate-900 group-hover:text-teal-700 transition-colors">
                  Dynamic Health Score &amp; Streaks
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Calculate your holistic 0-100 vitality score across metabolic, cardio, lifestyle, and adherence pillars with daily hydration and step trackers.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 pt-2 border-t border-slate-100">
                View Your Health Score →
              </span>
            </Link>

            {/* App 3: Reminders */}
            <Link
              href="/reminders"
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-md transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                ⏰
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-base text-slate-900 group-hover:text-teal-700 transition-colors">
                  Smart Reminders &amp; WhatsApp Bot
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Never miss morning/night medicine doses, doctor appointments, or repeat fasting blood tests with instant WhatsApp alert nudges.
                </p>
              </div>
              <span className="text-xs font-bold text-amber-700 flex items-center gap-1 pt-2 border-t border-slate-100">
                Set Care Reminders →
              </span>
            </Link>

            {/* App 4: Find Healthcare Nearby */}
            <Link
              href="/find-healthcare"
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-md transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                📍
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-base text-slate-900 group-hover:text-teal-700 transition-colors">
                  Find Healthcare Nearby
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Locate 24/7 hospitals (Ruby Hall, Sahyadri), NABL diagnostic labs, Jan Aushadhi Kendras, and 24-hr pharmacies across Pune and PCMC.
                </p>
              </div>
              <span className="text-xs font-bold text-purple-700 flex items-center gap-1 pt-2 border-t border-slate-100">
                Search Local Centers →
              </span>
            </Link>

            {/* App 5: Models & Benchmarks */}
            <Link
              href="/models-overview"
              className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm hover:border-teal-500 hover:shadow-md transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                🧠
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-base text-slate-900 group-hover:text-teal-700 transition-colors">
                  Clinical Models &amp; HealthBench
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Explore Dr. Arya&apos;s multi-LLM reasoning architecture, 91.4% HealthBench clinical accuracy, and physician-in-the-loop safety audit logs.
                </p>
              </div>
              <span className="text-xs font-bold text-teal-700 flex items-center gap-1 pt-2 border-t border-slate-100">
                View Clinical Architecture →
              </span>
            </Link>

            {/* App 6: WhatsApp Bot */}
            <a
              href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-emerald-800 to-teal-950 p-6 rounded-3xl text-white shadow-sm hover:shadow-md transition-all space-y-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform">
                💬
              </div>
              <div className="space-y-1.5">
                <h3 className="font-bold text-base text-white group-hover:text-emerald-300 transition-colors">
                  Chat with Dr. Arya on WhatsApp
                </h3>
                <p className="text-xs text-emerald-100/80 leading-relaxed">
                  Start instant clinical chats on WhatsApp (+91 7028025717) in Marathi, Hindi &amp; English with 1-tap voice audio notes.
                </p>
              </div>
              <span className="text-xs font-bold text-emerald-300 flex items-center gap-1 pt-2 border-t border-emerald-700/50">
                Launch WhatsApp Bot (+91 7028025717) →
              </span>
            </a>

          </div>
        </div>
      </section>

      {/* ── 2.5 WHY CHOOSE MEDITRUST AI: THE UNMATCHED MARKET LEADER ── */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden border-b border-teal-900/30">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-main space-y-12 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-black uppercase tracking-widest shadow-2xs">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Thinking Ahead of the Market · The #1 Healthcare Platform</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight font-display leading-tight">
              Why India Chooses <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-emerald-300 to-cyan-400">MEDITRUST AI</span>
            </h2>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-medium">
              We engineered India's first hybrid healthcare architecture: resolving 60% of primary health concerns from home, saving families 80% on lifelong prescriptions, and providing VIP fast-track access to premier hospitals.
            </p>
          </div>

          {/* 4 Pillars of Unmatched Superiority */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-teal-500 transition-all space-y-4 shadow-xl group">
              <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                ⚡
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-teal-300 transition-colors">
                Instant 24/7 AI Doctor
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Consult <strong>Dr. Arya</strong> in Marathi, Hindi & English. Real-time clinical guidance across 15+ specialties in 500ms — zero waiting queues, zero clinic consultation fees.
              </p>
              <div className="text-3xs text-teal-400 font-bold uppercase tracking-wider">
                ✓ 60% Home Resolution
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-emerald-500 transition-all space-y-4 shadow-xl group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                💰
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                80% Generic Medicine Savings
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Live price comparator matching branded prescriptions against CDSCO-certified <strong>Jan Aushadhi (PMBJP)</strong> generic substitutes, saving families over ₹27,000 every year.
              </p>
              <div className="text-3xs text-emerald-400 font-bold uppercase tracking-wider">
                ✓ ₹4.28+ Cr Patient Savings
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-blue-500 transition-all space-y-4 shadow-xl group">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🩸
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                60-Min Doorstep Blood Pickup
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Certified phlebotomists dispatch to your doorstep across <strong>Pune & PCMC (Nigdi, Kothrud, Baner, Wakad, Hinjewadi)</strong> with cold-chain vacutainers and same-day digital reports.
              </p>
              <div className="text-3xs text-blue-400 font-bold uppercase tracking-wider">
                ✓ 13+ NABL Diagnostic Labs
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-amber-500 transition-all space-y-4 shadow-xl group">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                🏥
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                VIP Hospital Fast-Track
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Priority admission desks at <strong>Ruby Hall Clinic & Sahyadri Hospital</strong> with dedicated cashless insurance and government scheme (PM-JAY & MJPJAY) assistance.
              </p>
              <div className="text-3xs text-amber-400 font-bold uppercase tracking-wider">
                ✓ 24/7 Hotline: +91 7028025717
              </div>
            </div>

          </div>

          {/* Real-time Proof Numbers Grid */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-teal-950/80 via-slate-900 to-teal-950/80 border border-teal-500/30 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-black text-white font-display">120,000+</div>
              <div className="text-2xs sm:text-xs text-teal-300 font-bold mt-1">Patients Served in Maharashtra</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-emerald-400 font-display">₹4.28+ Cr</div>
              <div className="text-2xs sm:text-xs text-emerald-300 font-bold mt-1">Medicine Bills Saved</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-display">60 Mins</div>
              <div className="text-2xs sm:text-xs text-cyan-300 font-bold mt-1">Avg. Doorstep Sample Pickup</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-black text-amber-400 font-display">15+</div>
              <div className="text-2xs sm:text-xs text-amber-300 font-bold mt-1">Medical Specialties Triaged</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. VISUAL BEFORE/AFTER REPORT BRIEFING SHOWCASE ── */}
      <section className="py-12 sm:py-16 bg-slate-900 text-white overflow-hidden">
        <div className="container-main space-y-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-400">
                Interactive Video Explainer
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-white mt-1 font-display">
                How Dr. Arya Transforms Confusing Lab Reports
              </h2>
            </div>
            <button
              onClick={() => setReportModalOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-md transition-all self-start md:self-auto"
            >
              <Play className="w-3.5 h-3.5 fill-white" />
              <span>Watch Live Report Demo</span>
            </button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 items-stretch">
            
            {/* Left: Confusing Diagnostic PDF Card */}
            <div className="p-6 rounded-3xl bg-slate-950 border border-rose-900/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-rose-400 bg-rose-950/80 px-2.5 py-1 rounded-full border border-rose-800/50">
                  ❌ Before: Confusing Lab Numbers
                </span>
                <span className="text-2xs text-slate-500">Unexplained Biomarkers</span>
              </div>

              <div className="space-y-3 font-mono text-xs bg-slate-900 p-4 rounded-2xl border border-slate-800">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Glycated Hb (HbA1c):</span>
                  <span className="font-bold text-rose-400">7.4 % (High)</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">TSH (Thyroid):</span>
                  <span className="font-bold text-amber-400">6.8 mIU/L (High)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Vitamin D3 (25-OH):</span>
                  <span className="font-bold text-rose-400">12.1 ng/mL (Deficient)</span>
                </div>
              </div>

              <p className="text-2xs text-slate-400 leading-relaxed">
                Patients often experience anxiety when confronted with complex reference ranges and red flags without practical context.
              </p>
            </div>

            {/* Right: Dr. Arya Plain Language & Video Briefing */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-teal-950 via-slate-950 to-slate-900 border border-teal-500/40 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black uppercase text-teal-300 bg-teal-950 px-2.5 py-1 rounded-full border border-teal-500/50">
                  ✅ After: Dr. Arya Video Breakdown
                </span>
                <span className="text-2xs text-teal-400 font-bold">100-Point Organ Score: 78/100</span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-teal-950/60 border border-teal-800/40 space-y-1">
                  <div className="font-bold text-teal-300">🩺 Pancreas & Blood Sugar (HbA1c):</div>
                  <p className="text-2xs text-slate-300">
                    Pre-diabetic zone. Reversible with 45-min daily brisk walking and switching to Jan Aushadhi generic Metformin (₹18/strip).
                  </p>
                </div>
                <div className="p-3 rounded-xl bg-teal-950/60 border border-teal-800/40 space-y-1">
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

      {/* ── 4. 15+ SPECIALTIES VISUAL SELECTOR ── */}
      <section id="specialties" className="py-12 sm:py-16 bg-slate-50">
        <div className="container-main space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-teal-700">
                Clinical Expertise
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-slate-950 mt-1 font-display">
                15+ Dedicated AI Specialty Doctors
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

      {/* ── 5. EMERGENCY TRIAGE & DIRECT CALL STRIP ── */}
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
