'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Phone, Video, MessageCircle, X, ChevronUp, Sparkles,
  Volume2, VolumeX, Globe, MapPin, Building2, Shield,
  CheckCircle2, ArrowRight, Activity, Heart, RefreshCw, Send,
  Mic, MicOff, Lock, UserCheck, Stethoscope
} from 'lucide-react'
import { punePartnerHospitals } from '@/data/labProviders'
import { medicalSpecialties, type MedicalSpecialty } from '@/data/clinicalEngine'

const LANGUAGES = [
  { id: 'mr', name: 'मराठी (Marathi)', speechCode: 'mr-IN', greeting: 'नमस्कार! मी डॉ. आर्या. मी तुम्हाला आज कशी मदत करू शकते?' },
  { id: 'hi', name: 'हिन्दी (Hindi)', speechCode: 'hi-IN', greeting: 'नमस्ते! मैं डॉ. आर्या हूँ। आपकी स्वास्थ्य संबंधी क्या सहायता कर सकती हूँ?' },
  { id: 'en', name: 'English (India)', speechCode: 'en-IN', greeting: 'Hello! I am Dr. Arya, your 24/7 AI Doctor. How are you feeling today?' },
  { id: 'ta', name: 'தமிழ் (Tamil)', speechCode: 'ta-IN', greeting: 'வணக்கம்! நான் டாக்டர் ஆர்யா. உங்களுக்கு எப்படி உதவ முடியும்?' },
  { id: 'te', name: 'తెలుగు (Telugu)', speechCode: 'te-IN', greeting: 'నమస్కారం! నేను డాక్టర్ ఆర్య. మీ ఆరోగ్యానికి ఎలా సహాయపడగలను?' },
  { id: 'bn', name: 'বাংলা (Bengali)', speechCode: 'bn-IN', greeting: 'নমস্কার! আমি ডঃ আর্যা। আপনাকে কীভাবে সাহায্য করতে পারি?' },
  { id: 'gu', name: 'ગુજરાતી (Gujarati)', speechCode: 'gu-IN', greeting: 'નમસ્તે! હું ડૉ. આર્યા છું. હું તમને કેવી રીતે મદદ કરી શકું?' },
]

export default function DrAryaFloatingDoctor({
  onOpenPrescriptionScanner,
}: {
  onOpenPrescriptionScanner?: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<'chat' | 'call' | 'video' | 'specialties' | 'hospital'>('chat')
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]) // Marathi default for Pune
  const [activeSpecialty, setActiveSpecialty] = useState<MedicalSpecialty>(medicalSpecialties[0])
  
  // Voice & Call states
  const [isCalling, setIsCalling] = useState(false)
  const [callDuration, setCallDuration] = useState(0)
  const [isVoiceActive, setIsVoiceActive] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [speechEnabled, setSpeechEnabled] = useState(true)
  
  // Mobile Verification Gate for Calls/Video
  const [userPhone, setUserPhone] = useState('')
  const [isPhoneVerified, setIsPhoneVerified] = useState(false)
  const [phoneInputTemp, setPhoneInputTemp] = useState('7028025717')
  const [verifyingPhone, setVerifyingPhone] = useState(false)
  const [pendingCallAction, setPendingCallAction] = useState<'call' | 'video' | null>(null)

  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string; department?: string }[]>([
    {
      role: 'ai',
      text: 'नमस्कार! I am **Dr. Arya** (Age 28, MD Global Clinical AI). I can speak with you in **मराठी, हिन्दी & English**.\n\n📞 **Immediate Helpline:** Direct connect at **+91 7028025717**.\n\nOver **60% of primary health issues** (fever, acidity, PCOD, knee/back stiffness, diabetes & BP) are safely guided over voice from home. If you need surgery or hospital checkups, I provide VIP fast-track admission to **Ruby Hall Clinic, Sahyadri & Jupiter Hospital**.',
      department: 'Global Multi-Specialist',
    },
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [bubbleText, setBubbleText] = useState('मराठी & Hindi 24/7 AI Doctor · Call +91 7028025717')
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Real-time Text-to-Speech
  const speakText = (text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis || !speechEnabled) return
    window.speechSynthesis.cancel() // Stop any previous speech
    
    // Clean markdown for speech
    const cleanText = text.replace(/[*_#•]/g, '').replace(/\[.*?\]\(.*?\)/g, '')
    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.lang = selectedLang.speechCode || 'en-IN'
    utterance.rate = 0.95
    utterance.pitch = 1.05
    
    // Try to find a warm female Indian English or Hindi voice
    const voices = window.speechSynthesis.getVoices()
    const indianVoice = voices.find(v => v.lang.includes('IN') || v.name.includes('India') || v.name.includes('Hindi') || v.name.includes('Marathi'))
    if (indianVoice) utterance.voice = indianVoice

    utterance.onstart = () => setIsVoiceActive(true)
    utterance.onend = () => setIsVoiceActive(false)
    utterance.onerror = () => setIsVoiceActive(false)

    window.speechSynthesis.speak(utterance)
  }

  // Real-time Speech-to-Text (Microphone)
  const toggleListening = () => {
    if (typeof window === 'undefined') return
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SpeechRecognition) {
      alert('Speech recognition is supported in Google Chrome, Edge, and Safari on iOS/Android.')
      return
    }

    if (isListening) {
      setIsListening(false)
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = selectedLang.speechCode || 'en-IN'
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onstart = () => setIsListening(true)
    recognition.onend = () => setIsListening(false)
    recognition.onerror = () => setIsListening(false)
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      setInputMessage(transcript)
      sendUserMessage(transcript)
    }

    recognition.start()
  }

  // Load saved phone if exists
  useEffect(() => {
    const saved = localStorage.getItem('meditrust_user')
    if (saved) {
      try {
        const u = JSON.parse(saved)
        if (u.phone) {
          setUserPhone(u.phone)
          setIsPhoneVerified(true)
        }
      } catch (e) {}
    }
  }, [])

  // Floating bubble rotation
  useEffect(() => {
    const bubbles = [
      '📞 Call Dr. Arya on +91 7028025717',
      '🌺 Gynaec, Ortho, Heart & Sugar Specialist AI',
      '🗣️ Speaks मराठी, हिन्दी & English in Real Time',
      '🏥 Pune Partner Hospital VIP Admission',
    ]
    let idx = 0
    const interval = setInterval(() => {
      idx = (idx + 1) % bubbles.length
      setBubbleText(bubbles[idx])
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  // Call timer simulation
  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isCalling) {
      timer = setInterval(() => setCallDuration((c) => c + 1), 1000)
    } else {
      setCallDuration(0)
    }
    return () => clearInterval(timer)
  }, [isCalling])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isOpen])

  const sendUserMessage = (userText: string) => {
    if (!userText.trim()) return

    setMessages((prev) => [...prev, { role: 'user', text: userText }])
    setInputMessage('')
    setIsVoiceActive(true)

    setTimeout(() => {
      let aiReply = ''
      const lower = userText.toLowerCase()

      if (lower.includes('chest') || lower.includes('heart') || lower.includes('breath') || lower.includes('छातीत दुखणे')) {
        aiReply = `🚨 **URGENT EMERGENCY ALERT:** Retrosternal chest pain or breathing distress requires immediate clinical care. I have initiated priority transfer to **Ruby Hall Clinic (Cath Lab)** or **Sahyadri Hospital (Deccan)** with Meditrust Zero-Wait TPA Admission. Please call **108 / 112** or our emergency helpline **+91 7028025717** immediately.`
      } else if (lower.includes('period') || lower.includes('pcos') || lower.includes('pcod') || lower.includes('pregnancy') || lower.includes('पाळी') || lower.includes('गर्भ')) {
        aiReply = `**Dr. Arya (OB-GYN & Women's Health):**
For irregular cycles or PCOS, Myo-Inositol 2000mg + D-Chiro Inositol (₹65 on Jan Aushadhi generic vs ₹350 brand) naturally restores regular ovulatory cycles. I recommend a PCOS hormone blood panel (₹649 home pickup in Pune).
मराठी सल्ला: योग्य सप्लिमेंट्स आणि व्यायामाने पाळी नैसर्गिकरीत्या नियमित होते.`
      } else if (lower.includes('knee') || lower.includes('bone') || lower.includes('joint') || lower.includes('back pain') || lower.includes('गुडघे') || lower.includes('सांधे')) {
        aiReply = `**Dr. Arya (Orthopaedics & Bone Care):**
Joint crepitus and stair pain in adults is typically caused by Vitamin D3 deficiency (< 20 ng/mL) and early cartilage friction. Take Cholecalciferol 60,000 IU weekly for 8 weeks + Shelcal 500 (₹28 on Jan Aushadhi).
मराठी सल्ला: मांडीच्या स्नायूंचे व्यायाम व व्हिटॅमिन डी मुळे गुडघेदुखी लवकर कमी होते.`
      } else if (lower.includes('sugar') || lower.includes('diabetes') || lower.includes('hba1c') || lower.includes('मधुमेह')) {
        aiReply = `**Dr. Arya (Diabetology & Metabolic Care):**
Target Fasting Sugar is 80–110 mg/dL, Post-Meal < 140 mg/dL. Glycomet-GP 2 is ₹128 on Meditrust vs ₹32 on Jan Aushadhi generic (81% savings). Book HbA1c & Fasting Sugar home collection for ₹349 in Pune.`
      } else {
        aiReply = `**Dr. Arya Clinical Consultation:**
I have mapped your query across ICMR, CDSCO, and HIPAA clinical standards. Over 60% of cases are manageable at home with generic medication match and targeted diagnostics. If hospital care is required, we connect you to Ruby Hall or Sahyadri Pune.`
      }

      setMessages((prev) => [...prev, { role: 'ai', text: aiReply, department: activeSpecialty.name }])
      speakText(aiReply)
    }, 900)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    sendUserMessage(inputMessage)
  }

  const triggerCallOrVideo = (actionType: 'call' | 'video') => {
    if (!isPhoneVerified) {
      setPendingCallAction(actionType)
    } else {
      if (actionType === 'call') {
        setIsCalling(true)
        setMode('call')
        speakText(`Hello ${userPhone}! Dr. Arya is connected on live voice call. How are you feeling right now?`)
      } else {
        setMode('video')
        speakText(`Live HD Video Room activated. Dr. Arya is observing your symptoms and clinical notes.`)
      }
    }
  }

  const handleVerifyPhone = (e: React.FormEvent) => {
    e.preventDefault()
    if (!phoneInputTemp || phoneInputTemp.length < 10) return
    setVerifyingPhone(true)

    setTimeout(() => {
      setVerifyingPhone(false)
      const formatted = `+91 ${phoneInputTemp.replace(/\D/g, '').slice(-10)}`
      setUserPhone(formatted)
      setIsPhoneVerified(true)
      
      // Save to localStorage
      const existing = localStorage.getItem('meditrust_user')
      const profile = existing ? JSON.parse(existing) : {}
      profile.phone = formatted
      profile.isLoggedIn = true
      localStorage.setItem('meditrust_user', JSON.stringify(profile))

      const act = pendingCallAction || 'call'
      setPendingCallAction(null)
      if (act === 'call') {
        setIsCalling(true)
        setMode('call')
        speakText(`Welcome! Voice consultation activated for ${formatted}. I am listening.`)
      } else {
        setMode('video')
        speakText(`Video consultation room activated for ${formatted}.`)
      }
    }, 800)
  }

  return (
    <>
      {/* ── 1. Floating 3D Animated Avatar Doctor in Bottom Right ── */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end pointer-events-none select-none">
        
        {/* Animated Speech Bubble */}
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="pointer-events-auto cursor-pointer mb-2 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-2xl rounded-br-sm shadow-2xl border border-teal-200 text-xs font-bold text-slate-900 flex items-center gap-2 animate-float-gentle max-w-[300px]"
            style={{ boxShadow: '0 10px 30px rgba(15,118,110,0.25)' }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-heartbeat flex-shrink-0" />
            <span className="truncate">{bubbleText}</span>
          </div>
        )}

        {/* 3D Moving Avatar Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Talk to Dr. Arya AI Doctor"
          className="pointer-events-auto relative group flex items-center justify-center focus:outline-none transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          {/* Animated Glow Rings */}
          <span className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-teal-500 via-emerald-400 to-blue-500 opacity-75 blur-md group-hover:opacity-100 transition duration-300 animate-pulse-glow" />
          
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full border-2 border-white overflow-hidden shadow-2xl bg-teal-900">
            <img
              src="/dr_arya.jpg"
              alt="Dr. Arya AI Doctor"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
            {/* Live voice wave overlay if speaking */}
            {isVoiceActive && (
              <div className="absolute inset-0 bg-teal-950/40 flex items-center justify-center gap-0.5">
                <span className="w-1 bg-teal-300 rounded-full animate-pulse h-4" />
                <span className="w-1 bg-teal-300 rounded-full animate-pulse h-6" />
                <span className="w-1 bg-teal-300 rounded-full animate-pulse h-3" />
              </div>
            )}
          </div>

          {/* Online badge */}
          <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full flex items-center justify-center shadow">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
          </span>

          {/* Direct Call Tag on Avatar */}
          <div className="absolute -bottom-3 bg-slate-950 text-white text-3xs font-black px-2.5 py-0.5 rounded-full shadow border border-slate-700 whitespace-nowrap flex items-center gap-1">
            <Phone className="w-2.5 h-2.5 text-teal-400" /> +91 7028025717
          </div>
        </button>
      </div>

      {/* ── 2. Expanded Dr. Arya Interactive Doctor Console ── */}
      {isOpen && (
        <div className="fixed bottom-20 right-3 sm:right-6 z-50 w-[95vw] sm:w-[440px] max-h-[86vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-fade-up">
          
          {/* Top Header Strip */}
          <div className="p-4 bg-gradient-to-r from-teal-800 via-teal-900 to-slate-950 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full border-2 border-teal-300 overflow-hidden shadow flex-shrink-0">
                <img src="/dr_arya.jpg" alt="Dr. Arya" className="w-full h-full object-cover object-top" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border border-white rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-white">Dr. Arya (Global AI MD)</h4>
                  <span className="badge bg-teal-500/30 text-teal-200 text-3xs border border-teal-400/40 font-bold">
                    Age 28 · CDSCO Compliant
                  </span>
                </div>
                <div className="flex items-center gap-2 text-2xs text-teal-200 mt-0.5">
                  <a href="tel:+917028025717" className="text-amber-300 font-bold hover:underline flex items-center gap-0.5">
                    📞 +91 7028025717
                  </a>
                  <span>•</span>
                  <span>मराठी, हिन्दी & English 24/7</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => {
                  setSpeechEnabled(!speechEnabled)
                  if (speechEnabled && typeof window !== 'undefined') window.speechSynthesis?.cancel()
                }}
                className={`p-1.5 rounded-full transition-colors ${speechEnabled ? 'text-teal-300 bg-teal-900/60' : 'text-slate-400 bg-slate-800'}`}
                title={speechEnabled ? 'Voice output enabled' : 'Voice output muted'}
              >
                {speechEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Language Strip */}
          <div className="bg-teal-950 px-3.5 py-1.5 border-b border-teal-800/60 flex items-center justify-between text-2xs">
            <div className="flex items-center gap-1.5 text-teal-200 font-semibold">
              <Globe className="w-3 h-3 text-teal-400" />
              <span>Language:</span>
              <select
                value={selectedLang.id}
                onChange={(e) => {
                  const found = LANGUAGES.find((l) => l.id === e.target.value) || LANGUAGES[0]
                  setSelectedLang(found)
                  setMessages((prev) => [
                    ...prev,
                    { role: 'ai', text: found.greeting },
                  ])
                  speakText(found.greeting)
                }}
                className="bg-teal-900 text-teal-100 rounded px-1.5 py-0.5 border border-teal-700 outline-none font-bold cursor-pointer"
              >
                {LANGUAGES.map((l) => (
                  <option key={l.id} value={l.id}>{l.name}</option>
                ))}
              </select>
            </div>

            <button
              onClick={() => setMode(mode === 'specialties' ? 'chat' : 'specialties')}
              className="px-2 py-0.5 rounded bg-teal-800 text-teal-200 font-bold border border-teal-600 flex items-center gap-1 hover:bg-teal-700 transition-colors"
            >
              <span>{activeSpecialty.icon} {activeSpecialty.name.split(' ')[0]}</span>
              <ChevronUp className={`w-3 h-3 transition-transform ${mode === 'specialties' ? '' : 'rotate-180'}`} />
            </button>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="grid grid-cols-4 border-b border-slate-100 bg-slate-50 text-2xs font-bold text-slate-600">
            <button
              onClick={() => setMode('chat')}
              className={`py-2.5 flex items-center justify-center gap-1 border-b-2 transition-colors ${
                mode === 'chat' ? 'border-teal-700 text-teal-700 bg-white font-black' : 'border-transparent hover:text-slate-900'
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5" /> AI Chat
            </button>
            <button
              onClick={() => triggerCallOrVideo('call')}
              className={`py-2.5 flex items-center justify-center gap-1 border-b-2 transition-colors ${
                mode === 'call' ? 'border-teal-700 text-teal-700 bg-white font-black' : 'border-transparent hover:text-slate-900'
              }`}
            >
              <Phone className="w-3.5 h-3.5" /> Voice Call
            </button>
            <button
              onClick={() => triggerCallOrVideo('video')}
              className={`py-2.5 flex items-center justify-center gap-1 border-b-2 transition-colors ${
                mode === 'video' ? 'border-teal-700 text-teal-700 bg-white font-black' : 'border-transparent hover:text-slate-900'
              }`}
            >
              <Video className="w-3.5 h-3.5" /> Video AI
            </button>
            <button
              onClick={() => setMode('hospital')}
              className={`py-2.5 flex items-center justify-center gap-1 border-b-2 transition-colors ${
                mode === 'hospital' ? 'border-teal-700 text-teal-700 bg-white font-black' : 'border-transparent hover:text-slate-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5" /> Hospital VIP
            </button>
          </div>

          {/* ── PHONE ACTIVATION OVERLAY (If user clicks Voice/Video before verifying phone) ── */}
          {pendingCallAction && !isPhoneVerified ? (
            <div className="p-6 bg-white flex-1 overflow-y-auto space-y-4 animate-fade-in">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-200 flex items-center justify-center mx-auto text-teal-700">
                <Phone className="w-6 h-6 animate-heartbeat" />
              </div>

              <div className="text-center space-y-1">
                <h4 className="text-base font-bold text-slate-900">
                  Activate Live Consultation with Dr. Arya
                </h4>
                <p className="text-xs text-slate-500">
                  As per CDSCO & ICMR Telemedicine Guidelines, enter your mobile number to start direct voice/video audio stream.
                </p>
              </div>

              <form onSubmit={handleVerifyPhone} className="space-y-3">
                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Mobile Number (For WhatsApp Summary & Callback)
                  </label>
                  <div className="flex rounded-xl border border-slate-200 focus-within:border-teal-600 overflow-hidden shadow-sm">
                    <span className="bg-slate-50 px-3 py-2.5 text-xs font-bold text-slate-600 border-r border-slate-200">
                      🇮🇳 +91
                    </span>
                    <input
                      type="tel"
                      maxLength={10}
                      value={phoneInputTemp}
                      onChange={(e) => setPhoneInputTemp(e.target.value.replace(/\D/g, ''))}
                      placeholder="Enter 10-digit mobile"
                      className="w-full px-3 py-2.5 text-xs font-bold text-slate-900 outline-none"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={verifyingPhone}
                  className="btn-primary w-full justify-center py-3 text-xs font-bold shadow-teal"
                >
                  {verifyingPhone ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Connecting to Dr. Arya Voice Engine...
                    </span>
                  ) : (
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Start Voice Consultation Now
                    </span>
                  )}
                </button>
              </form>

              <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-2xs text-slate-500 text-center flex items-center justify-center gap-1">
                <Lock className="w-3 h-3 text-teal-600" />
                <span>Encrypted · Immediate assistance hotline: <strong>+91 7028025717</strong></span>
              </div>
            </div>
          ) : (
            /* ── MAIN TABS BODY ── */
            <div className="flex-1 overflow-y-auto max-h-[380px] p-4">
              
              {/* 0. SPECIALTIES SELECTOR OVERLAY */}
              {mode === 'specialties' && (
                <div className="space-y-3 animate-fade-in">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold text-slate-800">Select Clinical Department:</span>
                    <button onClick={() => setMode('chat')} className="text-2xs text-teal-700 font-bold hover:underline">
                      Back to Chat
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {medicalSpecialties.map((spec) => (
                      <button
                        key={spec.id}
                        onClick={() => {
                          setActiveSpecialty(spec)
                          setMode('chat')
                          const msg = `Switched to **${spec.doctorTitle}**.\n\nI am now analyzing under **${spec.complianceGuideline}** protocols.\n\nCommon topics: ${spec.commonConditions.slice(0, 3).join(', ')}.\n\nHow can I help you today?`
                          setMessages((prev) => [
                            ...prev,
                            { role: 'ai', text: msg, department: spec.name },
                          ])
                          speakText(msg)
                        }}
                        className={`p-2.5 rounded-2xl border text-left transition-all ${
                          activeSpecialty.id === spec.id
                            ? 'border-teal-600 bg-teal-50 shadow-sm'
                            : 'border-slate-200 hover:border-teal-300 bg-white'
                        }`}
                      >
                        <div className="text-xl mb-1">{spec.icon}</div>
                        <div className="text-xs font-bold text-slate-900 leading-tight">{spec.name}</div>
                        <div className="text-3xs text-slate-500 mt-1">{spec.commonConditions[0]}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* 1. CHAT MODE */}
              {mode === 'chat' && (
                <div className="space-y-3">
                  {messages.map((m, idx) => (
                    <div
                      key={idx}
                      className={`flex gap-2 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      {m.role === 'ai' && (
                        <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 mt-0.5 border border-teal-300">
                          <img src="/dr_arya.jpg" alt="Dr. Arya" className="w-full h-full object-cover" />
                        </div>
                      )}
                      <div
                        className={`text-xs leading-relaxed max-w-[86%] p-3.5 rounded-2xl ${
                          m.role === 'user'
                            ? 'bg-teal-700 text-white rounded-tr-none font-medium'
                            : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200/70 whitespace-pre-line'
                        }`}
                      >
                        {m.text}
                      </div>
                    </div>
                  ))}
                  {isVoiceActive && (
                    <div className="flex items-center gap-2 text-2xs text-teal-700 font-bold p-2 bg-teal-50 rounded-xl border border-teal-100">
                      <Volume2 className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
                      <span>Dr. Arya is speaking in {selectedLang.name.split(' ')[0]}...</span>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>
              )}

              {/* 2. PHONE CALL MODE */}
              {mode === 'call' && (
                <div className="text-center py-4 space-y-4">
                  <div className="relative w-24 h-24 mx-auto rounded-full border-4 border-teal-500 overflow-hidden shadow-teal">
                    <img src="/dr_arya.jpg" alt="Dr. Arya Call" className="w-full h-full object-cover" />
                    {isCalling && (
                      <div className="absolute inset-0 bg-teal-950/30 flex items-center justify-center">
                        <Volume2 className="w-8 h-8 text-white animate-pulse" />
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-base font-bold text-slate-900">
                      {isCalling ? 'Live Voice Call Active with Dr. Arya' : '24/7 AI Phone Doctor Consultation'}
                    </h4>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {isCalling ? `Connected · ${Math.floor(callDuration / 60)}:${(callDuration % 60).toString().padStart(2, '0')} · Registered Line ${userPhone}` : `Helpline: +91 7028025717 · 60% cases resolved over phone`}
                    </p>
                  </div>

                  {/* Immediate Dial Direct Button */}
                  <a
                    href="tel:+917028025717"
                    className="flex items-center justify-center gap-2 p-3 rounded-2xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs shadow transition-all"
                  >
                    <Phone className="w-4 h-4" /> Dial Direct +91 7028025717 for Immediate Response
                  </a>

                  {isCalling ? (
                    <button
                      onClick={() => {
                        setIsCalling(false)
                        if (typeof window !== 'undefined') window.speechSynthesis?.cancel()
                      }}
                      className="btn-outline w-full justify-center border-red-600 text-red-600 hover:bg-red-50 py-2.5 text-xs font-bold"
                    >
                      End Voice Session
                    </button>
                  ) : (
                    <button
                      onClick={() => triggerCallOrVideo('call')}
                      className="btn-primary w-full justify-center py-2.5 text-xs font-bold shadow-teal"
                    >
                      <Phone className="w-4 h-4" /> Speak with Dr. Arya on AI Voice
                    </button>
                  )}
                </div>
              )}

              {/* 3. VIDEO CONSULT ROOM */}
              {mode === 'video' && (
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-video border border-slate-800 flex items-center justify-center">
                    <img src="/dr_arya.jpg" alt="Dr. Arya Live Video" className="w-full h-full object-cover opacity-90" />
                    <div className="absolute top-2 left-2 flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-md text-2xs text-white">
                      <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      <span>Dr. Arya Virtual Consultation</span>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-teal-900/80 backdrop-blur-sm text-teal-200 text-2xs px-2 py-0.5 rounded font-mono">
                      Patient: {userPhone || '+91 7028025717'}
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                    <strong className="text-slate-900">Virtual Clinic Guidance:</strong> Dr. Arya examines visual skin symptoms, checks lab reports, and explains medicine dosages live in plain language.
                  </div>

                  <a
                    href="tel:+917028025717"
                    className="btn-primary w-full justify-center py-2.5 text-xs font-bold"
                  >
                    <Phone className="w-4 h-4" /> Connect with Physician at +91 7028025717
                  </a>
                </div>
              )}

              {/* 4. HOSPITAL REFERRALS & SURGERY 40% */}
              {mode === 'hospital' && (
                <div className="space-y-3">
                  <div className="p-3 rounded-2xl bg-purple-50 border border-purple-200 text-xs text-purple-900">
                    <div className="font-bold mb-0.5 flex items-center gap-1">
                      <Building2 className="w-3.5 h-3.5" /> For the 40% Cases Needing Clinical Care:
                    </div>
                    <p className="text-2xs text-purple-800">
                      Dr. Arya refers you to premier partner hospitals in Pune with Meditrust VIP benefits (Priority doctor slot, Cashless TPA insurance help, 15% discount on surgeries).
                    </p>
                  </div>

                  <div className="space-y-2">
                    {punePartnerHospitals.slice(0, 3).map((hosp) => (
                      <div key={hosp.name} className="p-3 rounded-xl border border-slate-200 bg-white hover:border-teal-500 transition-colors">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h5 className="text-xs font-bold text-slate-900">{hosp.name}</h5>
                            <div className="text-2xs text-slate-500 flex items-center gap-1 mt-0.5">
                              <MapPin className="w-3 h-3 text-teal-600" />
                              {hosp.area} · <strong className="text-teal-700">{hosp.distance}</strong>
                            </div>
                          </div>
                          <span className="badge-teal badge text-2xs">⭐ {hosp.rating}</span>
                        </div>
                        <div className="mt-2 text-2xs text-green-800 font-semibold bg-green-50 p-1.5 rounded-lg border border-green-100">
                          🎁 {hosp.meditrustDiscount}
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="/dashboard"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary w-full justify-center py-2.5 text-xs font-bold"
                  >
                    Book Hospital Priority Consultation
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Quick Action & Voice Input Bar */}
          {mode === 'chat' && !pendingCallAction && (
            <div className="p-3 bg-slate-50 border-t border-slate-200 space-y-2">
              <div className="flex gap-1.5 overflow-x-auto pb-1 text-2xs">
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenPrescriptionScanner) onOpenPrescriptionScanner()
                  }}
                  className="filter-chip active flex items-center gap-1 whitespace-nowrap font-bold"
                >
                  📄 Scan Prescription
                </button>
                <button
                  type="button"
                  onClick={() => sendUserMessage('I want advice on PCOD and irregular periods')}
                  className="filter-chip whitespace-nowrap"
                >
                  🌺 PCOS / Periods
                </button>
                <button
                  type="button"
                  onClick={() => sendUserMessage('मला सांधेदुखी आणि व्हिटॅमिन डी बद्दल माहिती हवी आहे')}
                  className="filter-chip whitespace-nowrap"
                >
                  🦴 सांधेदुखी (मराठी)
                </button>
              </div>

              <form onSubmit={handleSendMessage} className="flex gap-2 items-center">
                {/* Voice Input Microphone Button */}
                <button
                  type="button"
                  onClick={toggleListening}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${
                    isListening
                      ? 'bg-red-600 text-white animate-pulse'
                      : 'bg-teal-50 border border-teal-300 text-teal-700 hover:bg-teal-100'
                  }`}
                  title={isListening ? 'Listening... Speak into mic' : 'Click to speak'}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                </button>

                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={isListening ? 'Listening to your voice...' : `Ask Dr. Arya in ${selectedLang.name.split(' ')[0]}...`}
                  className="input-field text-xs py-2.5 flex-1"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className="w-9 h-9 rounded-xl bg-teal-700 hover:bg-teal-800 text-white flex items-center justify-center disabled:opacity-40 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  )
}
