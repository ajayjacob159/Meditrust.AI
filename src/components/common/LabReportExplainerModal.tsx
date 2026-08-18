'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Brain, FileText, CheckCircle2, AlertTriangle, Play, Pause,
  Volume2, VolumeX, X, Star, Shield, ShieldCheck, Activity, Heart, ArrowRight,
  TrendingUp, Sparkles, RefreshCw, Eye, Video, RotateCcw,
  Sparkle, Award, Building2, Phone, Check, Pill
} from 'lucide-react'

export interface SampleReport {
  id: string
  title: string
  date: string
  healthScore: number
  summary: string
  narrativeSpeech: {
    en: string
    mr: string
    hi: string
  }
  parameters: {
    name: string
    value: string
    normalRange: string
    status: 'normal' | 'borderline' | 'critical'
    plainExplanation: string
    lifestyleTip: string
  }[]
  genericMedicines: {
    brandName: string
    brandPrice: number
    genericName: string
    genericPrice: number
    savings: number
  }[]
}

const DEFAULT_REPORT: SampleReport = {
  id: 'pune-comprehensive-report',
  title: 'Comprehensive Metabolic & Lipid Panel (Pune Diagnostic Lab)',
  date: '16 Aug 2026',
  healthScore: 78,
  summary: 'Your overall health score is 78/100 (Good, with actionable improvements). Your liver and kidney markers are healthy. However, your HbA1c (6.9%) and LDL Cholesterol (142 mg/dL) require dietary optimization, and Vitamin D is significantly deficient (14.2 ng/mL).',
  narrativeSpeech: {
    en: 'Hello! I am Dr. Arya. I have reviewed your blood test report. Your overall health score is 78 out of 100. Your liver and kidney functions are completely healthy. However, your average blood sugar HbA1c is 6.9%, which is slightly borderline. Your LDL cholesterol is 142, and your Vitamin D is low at 14.2. I recommend 30 minutes of daily walking, reducing processed carbs, and taking a weekly Vitamin D supplement for 8 weeks.',
    mr: 'नमस्कार! मी डॉ. आर्या. मी तुमचा रक्त तपासणी रिपोर्ट तपासला आहे. तुमचा आरोग्य स्कोअर १०० पैकी ७८ आहे. तुमचे लिव्हर आणि किडनी उत्तम काम करत आहेत. परंतु रक्तातील साखरेचे प्रमाण ६.९% आणि व्हिटॅमिन डी कमी आहे. दररोज ३० मिनिटे चालणे आणि योग्य सप्लिमेंट्सने हे पूर्णपणे बरे होऊ शकते.',
    hi: 'नमस्ते! मैं डॉ. आर्या हूँ। मैंने आपकी ब्लड रिपोर्ट का विश्लेषण किया है। आपका हेल्थ स्कोर 100 में से 78 है। आपकी लिवर और किडनी पूरी तरह स्वस्थ हैं। हालांकि HbA1c 6.9% और विटामिन डी 14.2 थोड़ा कम है। 30 मिनट रोजाना टहलने और 8 हफ्तों के विटामिन डी सप्लीमेंट से यह सामान्य हो जाएगा।',
  },
  parameters: [
    {
      name: 'HbA1c (Glycated Hemoglobin)',
      value: '6.9%',
      normalRange: '4.0% – 5.6% (Non-diabetic), < 7.0% (Controlled)',
      status: 'borderline',
      plainExplanation: 'In simple words, this measures your average blood sugar over the last 90 days. A value of 6.9% means sugar was mildly sticky on red blood cells. Easily manageable with 30 mins daily walking & low carb diet.',
      lifestyleTip: 'Switch to brown rice/millets and walk 15 mins after dinner.',
    },
    {
      name: 'LDL Bad Cholesterol',
      value: '142 mg/dL',
      normalRange: '< 100 mg/dL',
      status: 'borderline',
      plainExplanation: 'LDL is the cholesterol that tends to deposit on artery walls. 142 is moderately elevated. Reducing fried food, switching to cold-pressed oils, and eating more flaxseeds/oats helps bring this down.',
      lifestyleTip: 'Include 1 tablespoon of roasted flaxseeds daily.',
    },
    {
      name: 'SGPT / ALT (Liver Function)',
      value: '26 U/L',
      normalRange: '7 – 56 U/L',
      status: 'normal',
      plainExplanation: 'Your liver enzymes are in the optimal safety range. Indicates healthy liver metabolism and no active inflammation.',
      lifestyleTip: 'Stay well-hydrated with 2.5 to 3 liters of water daily.',
    },
    {
      name: 'Serum Creatinine (Kidney Function)',
      value: '0.85 mg/dL',
      normalRange: '0.6 – 1.2 mg/dL',
      status: 'normal',
      plainExplanation: 'Your kidneys are filtering waste efficiently and functioning at 100% health.',
      lifestyleTip: 'Optimal hydration keeps filtration smooth.',
    },
    {
      name: 'Vitamin D3 (25-OH)',
      value: '14.2 ng/mL',
      normalRange: '30.0 – 100.0 ng/mL',
      status: 'critical',
      plainExplanation: 'You are significantly Vitamin D deficient (very common in urban India). This causes fatigue, bone aches, and muscle weakness.',
      lifestyleTip: 'Take Cholecalciferol 60,000 IU weekly for 8 weeks (Jan Aushadhi generic available for ₹18).',
    },
  ],
  genericMedicines: [
    {
      brandName: 'Glycomet-GP 2',
      brandPrice: 128,
      genericName: 'Glimepiride + Metformin 2mg/500mg PR (Jan Aushadhi)',
      genericPrice: 32,
      savings: 75,
    },
    {
      brandName: 'Shelcal 500 (Calcium + Vit D3)',
      brandPrice: 138,
      genericName: 'Calcium 500mg + Vitamin D3 (PMBJP)',
      genericPrice: 28,
      savings: 80,
    },
    {
      brandName: 'Rosuvas 10 (Rosuvastatin)',
      brandPrice: 245,
      genericName: 'Rosuvastatin Calcium 10mg (Genericart)',
      genericPrice: 48,
      savings: 80,
    },
  ],
}

export default function LabReportExplainerModal({
  isOpen,
  onClose,
  report = DEFAULT_REPORT,
}: {
  isOpen: boolean
  onClose: () => void
  report?: SampleReport
}) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false)
  const [activeLang, setActiveLang] = useState<'en' | 'mr' | 'hi'>('en')
  const [activeTab, setActiveTab] = useState<'video' | 'parameters' | 'savings' | 'hospital'>('video')
  const [videoProgress, setVideoProgress] = useState(0)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const progressTimerRef = useRef<NodeJS.Timeout | null>(null)

  // Voice narration engine
  const speakNarrative = (lang: 'en' | 'mr' | 'hi') => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return
    window.speechSynthesis.cancel()

    const textToSpeak = report.narrativeSpeech[lang] || report.narrativeSpeech.en
    const utterance = new SpeechSynthesisUtterance(textToSpeak)
    utterance.lang = lang === 'mr' ? 'mr-IN' : lang === 'hi' ? 'hi-IN' : 'en-IN'
    utterance.rate = 0.94 // Measured, empathetic pace
    utterance.pitch = 1.22 // 28-year-old female doctor natural pitch

    const voices = window.speechSynthesis.getVoices()
    const femaleIndianVoice = voices.find(
      (v) =>
        (v.lang.includes('IN') || v.name.includes('India') || v.name.includes('Hindi') || v.name.includes('Marathi')) &&
        (v.name.toLowerCase().includes('female') ||
          v.name.toLowerCase().includes('lekha') ||
          v.name.toLowerCase().includes('veena') ||
          v.name.toLowerCase().includes('aditi') ||
          v.name.toLowerCase().includes('neerja') ||
          v.name.toLowerCase().includes('sangeeta') ||
          v.name.toLowerCase().includes('google'))
    ) || voices.find((v) => v.lang.includes('IN') || v.name.includes('India'))

    if (femaleIndianVoice) utterance.voice = femaleIndianVoice

    utterance.onstart = () => {
      setIsSpeaking(true)
      setIsPlayingVideo(true)
    }
    utterance.onend = () => {
      setIsSpeaking(false)
      setIsPlayingVideo(false)
      setVideoProgress(100)
    }
    utterance.onerror = () => {
      setIsSpeaking(false)
      setIsPlayingVideo(false)
    }

    window.speechSynthesis.speak(utterance)
  }

  const toggleVideo = () => {
    if (isPlayingVideo) {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel()
      }
      setIsPlayingVideo(false)
      setIsSpeaking(false)
    } else {
      speakNarrative(activeLang)
    }
  }

  const handleLanguageChange = (lang: 'en' | 'mr' | 'hi') => {
    setActiveLang(lang)
    setVideoProgress(0)
    if (isPlayingVideo || isSpeaking) {
      speakNarrative(lang)
    }
  }

  // Progress bar animation while playing
  useEffect(() => {
    if (isPlayingVideo) {
      setVideoProgress(0)
      progressTimerRef.current = setInterval(() => {
        setVideoProgress(prev => {
          if (prev >= 98) {
            clearInterval(progressTimerRef.current!)
            return 98
          }
          return prev + 2.5
        })
      }, 500)
    } else {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current)
    }

    return () => {
      if (progressTimerRef.current) clearInterval(progressTimerRef.current)
    }
  }, [isPlayingVideo])

  // Stop speech when modal closes
  useEffect(() => {
    if (!isOpen && typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel()
      setIsPlayingVideo(false)
      setIsSpeaking(false)
    }
  }, [isOpen])

  if (!isOpen) return null

  const getScoreBadge = (score: number) => {
    if (score >= 80) return 'text-emerald-700 bg-emerald-50 border-emerald-200'
    if (score >= 60) return 'text-amber-700 bg-amber-50 border-amber-200'
    return 'text-rose-700 bg-rose-50 border-rose-200'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-5xl shadow-2xl overflow-hidden border border-slate-200 my-auto">
        
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-teal-900 via-slate-900 to-slate-950 text-white">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-teal-600/30 border border-teal-400/40 text-teal-300 flex items-center justify-center shadow-inner">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Dr. Arya Clinical AI Report Explainer
                </h3>
                <span className="bg-teal-500/20 text-teal-300 border border-teal-400/30 px-2 py-0.5 rounded-full text-3xs font-black uppercase tracking-wider">
                  Live Video Briefing
                </span>
              </div>
              <p className="text-2xs sm:text-xs text-slate-300">
                {report.title} · {report.date}
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              if (typeof window !== 'undefined' && window.speechSynthesis) window.speechSynthesis.cancel()
              onClose()
            }}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-2 px-4 sm:px-6 pt-4 border-b border-slate-100 bg-slate-50/70 overflow-x-auto text-xs font-bold">
          <button
            onClick={() => setActiveTab('video')}
            className={`pb-3 px-3 flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'video'
                ? 'border-teal-700 text-teal-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Video className="w-4 h-4 text-teal-600" />
            <span>📹 Dr. Arya Video Briefing</span>
          </button>

          <button
            onClick={() => setActiveTab('parameters')}
            className={`pb-3 px-3 flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'parameters'
                ? 'border-teal-700 text-teal-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Activity className="w-4 h-4 text-blue-600" />
            <span>📊 Biomarker Breakdown ({report.parameters.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('savings')}
            className={`pb-3 px-3 flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'savings'
                ? 'border-teal-700 text-teal-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Pill className="w-4 h-4 text-rose-500" />
            <span>💊 Jan Aushadhi Savings (Save 80%)</span>
          </button>

          <button
            onClick={() => setActiveTab('hospital')}
            className={`pb-3 px-3 flex items-center gap-2 border-b-2 transition-colors whitespace-nowrap ${
              activeTab === 'hospital'
                ? 'border-teal-700 text-teal-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Building2 className="w-4 h-4 text-purple-600" />
            <span>🏥 Hospital VIP Concierge</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-6 max-h-[72vh] overflow-y-auto space-y-6">
          
          {/* TAB 1: VIDEO BRIEFING MODE */}
          {activeTab === 'video' && (
            <div className="grid lg:grid-cols-12 gap-6 items-start">
              
              {/* Left Column: Interactive HD Video Player */}
              <div className="lg:col-span-7 space-y-4">
                <div className="relative rounded-3xl overflow-hidden bg-slate-950 aspect-[16/10] sm:aspect-video border border-slate-800 shadow-2xl group flex flex-col justify-between">
                  
                  {/* Doctor Video Feed & Avatar */}
                  <div className="absolute inset-0">
                    <img
                      src="/dr_arya.jpg"
                      alt="Dr. Arya Clinical AI"
                      className={`w-full h-full object-cover object-top transition-transform duration-700 ${
                        isSpeaking ? 'scale-105 filter brightness-105' : 'scale-100'
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-slate-950/40" />
                  </div>

                  {/* Video Top Overlay Bar */}
                  <div className="relative z-10 p-3 sm:p-4 flex items-center justify-between">
                    <div className="flex items-center gap-2 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full text-2xs text-white border border-white/10 shadow">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="font-bold tracking-wider uppercase">Live Clinical Briefing</span>
                      <span className="text-slate-400">· 1080p HD</span>
                    </div>

                    {/* Language Switcher for Video Voice */}
                    <div className="flex items-center gap-1 bg-slate-900/80 backdrop-blur-md p-1 rounded-full border border-white/10">
                      {(['en', 'mr', 'hi'] as const).map((lang) => (
                        <button
                          key={lang}
                          onClick={() => handleLanguageChange(lang)}
                          className={`px-2.5 py-0.5 rounded-full text-2xs font-bold transition-colors ${
                            activeLang === lang
                              ? 'bg-teal-600 text-white shadow'
                              : 'text-slate-300 hover:text-white'
                          }`}
                        >
                          {lang === 'en' ? 'English' : lang === 'mr' ? 'मराठी' : 'हिन्दी'}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Video Center Play Button (if paused) */}
                  {!isPlayingVideo && (
                    <div className="relative z-10 flex items-center justify-center my-auto">
                      <button
                        onClick={toggleVideo}
                        className="w-16 h-16 rounded-full bg-teal-600/90 hover:bg-teal-500 text-white flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110 border-2 border-white/30 backdrop-blur-sm"
                        aria-label="Play Dr. Arya Video Explanation"
                      >
                        <Play className="w-8 h-8 ml-1" />
                      </button>
                    </div>
                  )}

                  {/* Video Bottom Controls & Audio Visualizer */}
                  <div className="relative z-10 p-3 sm:p-4 space-y-2 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent">
                    {/* Scrub Progress Bar */}
                    <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-teal-400 h-full rounded-full transition-all duration-300"
                        style={{ width: `${isPlayingVideo ? videoProgress : 0}%` }}
                      />
                    </div>

                    <div className="flex items-center justify-between text-white text-xs pt-1">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={toggleVideo}
                          className="w-8 h-8 rounded-full bg-teal-600 hover:bg-teal-500 text-white flex items-center justify-center transition-colors"
                        >
                          {isPlayingVideo ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                        </button>
                        
                        <div>
                          <div className="font-bold text-xs sm:text-sm">
                            {activeLang === 'mr'
                              ? 'डॉ. आर्या यांचे मराठी विश्लेषण चालू आहे'
                              : activeLang === 'hi'
                              ? 'डॉ. आर्या की हिंदी रिपोर्ट व्याख्या'
                              : 'Dr. Arya Explaining Blood Biomarkers'}
                          </div>
                          <div className="text-3xs text-teal-300 flex items-center gap-1.5">
                            <Volume2 className="w-3 h-3 text-teal-400" />
                            <span>{isPlayingVideo ? 'Speaking in real-time voice' : 'Click Play to hear spoken video analysis'}</span>
                          </div>
                        </div>
                      </div>

                      {/* Live Audio Visualizer Waves */}
                      {isSpeaking && (
                        <div className="flex items-end gap-1 h-5 pb-1">
                          {[14, 22, 10, 26, 18, 28, 12, 24, 16, 26, 12, 20, 15].map((h, i) => (
                            <span
                              key={i}
                              className="w-1 bg-teal-400 rounded-full animate-pulse"
                              style={{ height: `${h}px`, animationDelay: `${i * 0.08}s` }}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                </div>

                {/* Video Caption & Spoken Subtitle Box */}
                <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-100 text-slate-800 text-xs leading-relaxed space-y-1.5">
                  <div className="flex items-center justify-between font-bold text-teal-900 text-2xs uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-teal-700" />
                      Live Spoken Transcript
                    </span>
                    <span>Language: {activeLang.toUpperCase()}</span>
                  </div>
                  <p className="italic text-slate-700 font-medium">
                    "{report.narrativeSpeech[activeLang]}"
                  </p>
                </div>
              </div>

              {/* Right Column: AI Health Score & Organ Health */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-5 rounded-3xl bg-slate-900 text-white space-y-4 border border-slate-800 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-3xs font-black text-slate-400 uppercase tracking-widest">
                        Organ Vitality Score
                      </span>
                      <h4 className="text-3xl font-black text-white mt-0.5">
                        {report.healthScore} <span className="text-base font-normal text-slate-400">/ 100</span>
                      </h4>
                    </div>
                    <div className={`px-3 py-1.5 rounded-xl border text-xs font-bold ${getScoreBadge(report.healthScore)}`}>
                      {report.healthScore >= 80 ? 'Optimal' : 'Action Needed'}
                    </div>
                  </div>

                  {/* Organ Breakdown Bars */}
                  <div className="space-y-3 pt-2">
                    {[
                      { name: 'Liver Function (SGPT/SGOT)', score: 96, status: 'Healthy', color: 'bg-emerald-400' },
                      { name: 'Kidney Filtration (Creatinine)', score: 94, status: 'Healthy', color: 'bg-emerald-400' },
                      { name: 'Glycemic Balance (HbA1c)', score: 70, status: 'Borderline', color: 'bg-amber-400' },
                      { name: 'Lipids & Heart (LDL/HDL)', score: 68, status: 'Mild Attention', color: 'bg-amber-400' },
                      { name: 'Bone & Vitality (Vitamin D3)', score: 45, status: 'Deficient', color: 'bg-rose-400' },
                    ].map((item) => (
                      <div key={item.name} className="space-y-1">
                        <div className="flex justify-between text-2xs font-semibold text-slate-300">
                          <span>{item.name}</span>
                          <span className="text-slate-400">{item.score}% ({item.status})</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                          <div
                            className={`${item.color} h-full rounded-full transition-all duration-500`}
                            style={{ width: `${item.score}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2 border-t border-slate-800 text-xs text-slate-300 leading-relaxed">
                    💡 <strong>Summary:</strong> {report.summary}
                  </div>
                </div>

                {/* Immediate Next Action Cards */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setActiveTab('parameters')}
                    className="p-3.5 rounded-2xl bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 text-left transition-colors"
                  >
                    <div className="text-2xs text-teal-600 font-bold uppercase tracking-wider">Step 1</div>
                    <div className="text-xs font-bold mt-0.5">View Biomarkers →</div>
                  </button>

                  <button
                    onClick={() => setActiveTab('savings')}
                    className="p-3.5 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-900 border border-rose-200 text-left transition-colors"
                  >
                    <div className="text-2xs text-rose-600 font-bold uppercase tracking-wider">Step 2</div>
                    <div className="text-xs font-bold mt-0.5">Generic Savings (80%) →</div>
                  </button>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: PARAMETER BREAKDOWN */}
          {activeTab === 'parameters' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-teal-700" />
                  Biomarkers Explained in Plain Everyday Words
                </h4>
                <span className="text-xs text-slate-500">W.H.O. Reference Guidelines</span>
              </div>

              <div className="space-y-3">
                {report.parameters.map((param) => (
                  <div
                    key={param.name}
                    className={`p-4 rounded-2xl border transition-all ${
                      param.status === 'normal'
                        ? 'bg-white border-slate-200'
                        : param.status === 'borderline'
                        ? 'bg-amber-50/50 border-amber-200'
                        : 'bg-rose-50/50 border-rose-200'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">{param.name}</span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-3xs font-black uppercase tracking-wider ${
                              param.status === 'normal'
                                ? 'bg-emerald-100 text-emerald-800'
                                : param.status === 'borderline'
                                ? 'bg-amber-100 text-amber-800'
                                : 'bg-rose-100 text-rose-800'
                            }`}
                          >
                            {param.status.toUpperCase()}
                          </span>
                        </div>
                        <div className="text-2xs text-slate-500 mt-0.5">
                          Normal Reference Range: {param.normalRange}
                        </div>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <div className="text-base font-black text-slate-900">{param.value}</div>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-200/60 grid sm:grid-cols-12 gap-3 text-xs">
                      <div className="sm:col-span-8 text-slate-700 leading-relaxed">
                        <strong>What it means:</strong> {param.plainExplanation}
                      </div>
                      <div className="sm:col-span-4 bg-white/80 p-2.5 rounded-xl border border-slate-200 text-2xs text-teal-900 font-medium">
                        🌿 <strong>Action:</strong> {param.lifestyleTip}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: JAN AUSHADHI GENERIC SAVINGS */}
          {activeTab === 'savings' && (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-900 to-teal-900 text-white flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold">Jan Aushadhi (PMBJP) Generic Savings Match</h4>
                  <p className="text-xs text-teal-200">
                    Same active molecular ingredients certified by CDSCO at government-subsidized rates.
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-emerald-400">Save 80%</div>
                  <div className="text-3xs uppercase tracking-wider text-slate-300">Prescription Cost</div>
                </div>
              </div>

              <div className="space-y-3">
                {report.genericMedicines.map((med) => (
                  <div key={med.brandName} className="p-4 rounded-2xl border border-slate-200 bg-white space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <span className="text-2xs font-bold text-slate-400 uppercase">Prescribed Brand</span>
                        <div className="font-bold text-slate-900 text-sm">{med.brandName}</div>
                        <div className="text-xs text-slate-500">Retail MRP: ₹{med.brandPrice}</div>
                      </div>

                      <div className="text-center sm:text-right bg-emerald-50 border border-emerald-200 px-4 py-2 rounded-2xl">
                        <span className="text-2xs font-black text-emerald-800 uppercase">Generic Substitute</span>
                        <div className="font-extrabold text-emerald-950 text-sm">{med.genericName}</div>
                        <div className="text-xs font-black text-emerald-700">
                          Price: ₹{med.genericPrice} <span className="text-emerald-900">({med.savings}% Cheaper)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: HOSPITAL CONCIERGE */}
          {activeTab === 'hospital' && (
            <div className="space-y-4">
              <div className="p-5 rounded-3xl bg-slate-900 text-white space-y-3">
                <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
                  <Shield className="w-4 h-4" />
                  <span>The 40% Hospital VIP Admission Desk</span>
                </div>
                <h4 className="text-lg font-bold">Direct Cashless Desk at Pune’s Top Super-Speciality Hubs</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  If your blood report or symptoms require advanced diagnostics, endoscopy, or surgical care, Meditrust provides zero-wait TPA admission desks and 15% surgical discounts at our accredited partner hospitals.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { name: 'Ruby Hall Clinic', loc: 'Sassoon Rd / Wanowrie', perk: 'VIP Desk & Cath Lab Priority' },
                  { name: 'Sahyadri Super Speciality', loc: 'Deccan / Kothrud', perk: 'Zero-Wait TPA Admission' },
                  { name: 'Jupiter Hospital', loc: 'Baner Expressway', perk: 'Advanced Multi-Specialty' },
                ].map((hosp) => (
                  <div key={hosp.name} className="p-4 rounded-2xl border border-slate-200 bg-slate-50 space-y-2">
                    <div className="font-bold text-slate-900 text-sm">{hosp.name}</div>
                    <div className="text-2xs text-slate-500">{hosp.loc}</div>
                    <div className="text-3xs font-bold text-teal-800 bg-teal-100 px-2.5 py-1 rounded-lg inline-block">
                      {hosp.perk}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-amber-700 animate-pulse" />
                  <div>
                    <div className="font-bold text-slate-900 text-xs">Need Hospital Admission Assistance?</div>
                    <div className="text-2xs text-slate-600">Our medical coordinator is on stand-by 24/7</div>
                  </div>
                </div>
                <a
                  href="tel:+917028025717"
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs"
                >
                  Call +91 7028025717
                </a>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <ShieldCheck className="w-4 h-4 text-teal-600 flex-shrink-0" />
            <span>Encrypted under HIPAA & W.H.O. Medical Triage Standards</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                if (typeof window !== 'undefined' && window.speechSynthesis) window.speechSynthesis.cancel()
                onClose()
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-700 font-bold text-xs"
            >
              Close
            </button>

            <Link
              href="/symptom-checker"
              onClick={() => {
                if (typeof window !== 'undefined' && window.speechSynthesis) window.speechSynthesis.cancel()
                onClose()
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow text-center"
            >
              Consult Dr. Arya on This Report →
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
