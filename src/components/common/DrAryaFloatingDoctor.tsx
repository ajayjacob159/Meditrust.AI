'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Phone, Video, MessageCircle, X, ChevronUp, Sparkles,
  Volume2, VolumeX, Globe, MapPin, Building2, Shield,
  CheckCircle2, ArrowRight, Activity, Heart, RefreshCw, Send,
  Mic, MicOff, Lock, UserCheck, Stethoscope, Sparkle, Clock, Play, Pause
} from 'lucide-react'
import { punePartnerHospitals } from '@/data/labProviders'
import { medicalSpecialties, type MedicalSpecialty } from '@/data/clinicalEngine'
import { evaluateClinicalQuery } from '@/data/clinicalReasoningEngine'

const LANGUAGES = [
  { id: 'mr', name: 'मराठी (Marathi)', speechCode: 'mr-IN', greeting: 'नमस्कार! मी डॉ. आर्या (वय २८, एमडी क्लिनिकल एआय). मी तुम्हाला तुमच्या मातृभाषेत संपूर्ण वैद्यकीय मार्गदर्शन करू शकते.' },
  { id: 'hi', name: 'हिन्दी (Hindi)', speechCode: 'hi-IN', greeting: 'नमस्ते! मैं डॉ. आर्या (उम्र 28, एमडी क्लिनिकल एआई) हूँ। आपकी स्वास्थ्य संबंधी क्या सहायता कर सकती हूँ?' },
  { id: 'en', name: 'English (India)', speechCode: 'en-IN', greeting: 'Hello! I am Dr. Arya (Age 28, MD Global Clinical AI). How can I assist with your health or blood tests today?' },
  { id: 'kn', name: 'ಕನ್ನಡ (Kannada)', speechCode: 'kn-IN', greeting: 'ನಮಸ್ಕಾರ! ನಾನು ಡಾ. ಆರ್ಯ (ವಯಸ್ಸು 28). ನಿಮ್ಮ ಆರೋಗ್ಯಕ್ಕೆ ನಾನು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?' },
  { id: 'te', name: 'తెలుగు (Telugu)', speechCode: 'te-IN', greeting: 'నమస్కారం! నేను డాక్టర్ ఆర్య (వయస్సు 28). మీ ఆరోగ్యానికి నేను ఎలా సహాయపడగలను?' },
  { id: 'ta', name: 'தமிழ் (Tamil)', speechCode: 'ta-IN', greeting: 'வணக்கம்! நான் டாக்டர் ஆர்யா (வயது 28). உங்கள் உடல்நலத்திற்கு நான் எவ்வாறு உதவ முடியும்?' },
  { id: 'gu', name: 'ગુજરાતી (Gujarati)', speechCode: 'gu-IN', greeting: 'નમસ્તે! હું ડૉ. આર્યા (ઉંમર 28) છું. તમારા સ્વાસ્થ્ય માટે હું કેવી રીતે મદદ કરી શકું?' },
  { id: 'bn', name: 'বাংলা (Bengali)', speechCode: 'bn-IN', greeting: 'নমস্কার! আমি ডঃ আর্যা (বয়স ২৮)। আপনার স্বাস্থ্যের বিষয়ে আমি কীভাবে সাহায্য করতে পারি?' },
  { id: 'ml', name: 'മലയാളം (Malayalam)', speechCode: 'ml-IN', greeting: 'നമസ്കാരം! ഞാൻ ഡോ. ആര്യ (പ്രായം 28). നിങ്ങളുടെ ആരോഗ്യത്തിന് ഞാൻ എങ്ങനെ സഹായിക്കണം?' },
]

export default function DrAryaFloatingDoctor({
  onOpenPrescriptionScanner,
}: {
  onOpenPrescriptionScanner?: () => void
}) {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<'chat' | 'call' | 'video' | 'specialties' | 'hospital'>('chat')
  const [selectedLang, setSelectedLang] = useState(LANGUAGES[0]) // Marathi default for Pune/PCMC
  const [activeSpecialty, setActiveSpecialty] = useState<MedicalSpecialty>(medicalSpecialties[0])
  
  // Voice & Call states
  const [isCalling, setIsCalling] = useState(false)
  const [callDuration, setCallDuration] = useState(0)
  const [isVoiceActive, setIsVoiceActive] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [speechEnabled, setSpeechEnabled] = useState(true)
  const [isTyping, setIsTyping] = useState(false)
  const [videoSpeakingText, setVideoSpeakingText] = useState('नमस्कार! I am Dr. Arya. I explain your blood reports, suggest generic medicines to save 80%, and coordinate priority hospital care in Pune.')
  
  // Mobile Verification Gate for Calls/Video
  const [userPhone, setUserPhone] = useState('')
  const [isPhoneVerified, setIsPhoneVerified] = useState(false)
  const [phoneInputTemp, setPhoneInputTemp] = useState('7028025717')
  const [verifyingPhone, setVerifyingPhone] = useState(false)
  const [pendingCallAction, setPendingCallAction] = useState<'call' | 'video' | null>(null)

  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string; department?: string; time?: string }[]>([
    {
      role: 'ai',
      text: 'नमस्कार! I am **Dr. Arya** (Age 28, MD Global Clinical AI). I provide real-time clinical consultations in **मराठी, हिन्दी & English**.\n\n📞 **24/7 Doctor Assistance Desk:** **+91 7028025717**.\n\nOver **60% of primary symptoms** (Fever, Acidity, Periods/PCOS, Joint Pains, Sugar/BP) are safely managed at home with generic savings (save 80%). For hospital visits, I arrange VIP Fast-Track Admission at **Ruby Hall Clinic & Sahyadri Pune**.',
      department: 'Clinical AI Triage',
      time: 'Just now',
    },
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [bubbleText, setBubbleText] = useState('मराठी & Hindi 24/7 AI Doctor · Call +91 7028025717')
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Real-time 28-Year-Old Female Doctor Text-to-Speech Engine
  const speakText = (text: string, customLang?: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis || !speechEnabled) return
    window.speechSynthesis.cancel()
    
    // Clean markdown for speech
    const cleanText = text.replace(/[*_#•]/g, '').replace(/\[.*?\]\(.*?\)/g, '')
    setVideoSpeakingText(cleanText)
    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.lang = customLang || selectedLang.speechCode || 'mr-IN'
    utterance.rate = 0.94 // Measured, compassionate cadence
    utterance.pitch = 1.22 // 28-year-old female doctor natural pitch
    
    const voices = window.speechSynthesis.getVoices()
    // Prioritize female Indian voices
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
      alert('Speech recognition is supported in Chrome, Safari, Edge and Android.')
      return
    }

    if (isListening) {
      setIsListening(false)
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = selectedLang.speechCode || 'mr-IN'
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
      '🌺 15+ Specialties in मराठी & हिन्दी',
      '🩸 120,000+ Consultations Triaged',
      '🏥 Ruby Hall & Sahyadri VIP Admission',
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
      timer = setInterval(() => {
        setCallDuration((prev) => prev + 1)
      }, 1000)
    } else {
      setCallDuration(0)
    }
    return () => clearInterval(timer)
  }, [isCalling])

  // Scroll chat on updates
  useEffect(() => {
    if (mode === 'chat') {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isTyping, mode])

  // Phone Verification Handler
  const handleVerifyPhone = (e: React.FormEvent) => {
    e.preventDefault()
    if (!phoneInputTemp || phoneInputTemp.length < 10) {
      alert('Please enter a valid 10-digit mobile number')
      return
    }
    setVerifyingPhone(true)
    setTimeout(() => {
      setUserPhone(phoneInputTemp)
      setIsPhoneVerified(true)
      setVerifyingPhone(false)
      localStorage.setItem('meditrust_user', JSON.stringify({ phone: phoneInputTemp }))
      
      if (pendingCallAction) {
        setMode(pendingCallAction)
        if (pendingCallAction === 'call') {
          setIsCalling(true)
          speakText(selectedLang.greeting)
        }
        setPendingCallAction(null)
      }
    }, 800)
  }

  const triggerCallOrVideo = (targetMode: 'call' | 'video') => {
    if (!isPhoneVerified) {
      setPendingCallAction(targetMode)
      return
    }
    setMode(targetMode)
    if (targetMode === 'call') {
      setIsCalling(true)
      speakText(selectedLang.greeting)
    } else if (targetMode === 'video') {
      speakText(selectedLang.greeting)
    }
  }

  // REAL-TIME CLINICAL TRIAGE ENGINE
  const sendUserMessage = (userText: string) => {
    if (!userText.trim()) return

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    setMessages((prev) => [...prev, { role: 'user', text: userText, time: now }])
    setInputMessage('')
    setIsTyping(true)

    setTimeout(() => {
      const response = evaluateClinicalQuery(userText, selectedLang.speechCode)

      setIsTyping(false)
      setMessages((prev) => [
        ...prev,
        {
          role: 'ai',
          text: response.text,
          department: response.department,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ])
      speakText(response.text)
    }, 450)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    sendUserMessage(inputMessage)
  }

  return (
    <>
      {/* ── 1. FLOATING DOCTOR TRIGGER BUTTON ── */}
      <div className="fixed bottom-20 md:bottom-6 right-4 sm:right-6 z-40 flex items-center gap-3">
        {/* Animated Speech Bubble */}
        {!isOpen && (
          <div
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2 bg-slate-950/95 text-white border border-teal-500/40 text-2xs font-bold px-3.5 py-2 rounded-full shadow-2xl backdrop-blur-md cursor-pointer hover:border-teal-400 transition-all active:scale-95"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-teal-300">{bubbleText}</span>
          </div>
        )}

        {/* Doctor Avatar Trigger with Live Telemetry Ring */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative group p-1 rounded-full focus:outline-none focus:ring-4 focus:ring-teal-500/30 transition-transform active:scale-90"
          aria-label="Open Dr. Arya 24/7 AI Doctor"
        >
          {/* Animated Glow Halo */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-500 via-emerald-400 to-cyan-500 blur-sm opacity-80 group-hover:opacity-100 animate-pulse" />
          
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-white bg-slate-900 shadow-2xl flex items-center justify-center">
            <img
              src="/dr_arya.jpg"
              alt="Dr. Arya AI Doctor"
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform"
            />
            {/* Live Indicator */}
            <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
            </span>
          </div>

          {/* Unread / Active Badge */}
          <span className="absolute -top-1 -right-1 bg-amber-400 text-slate-950 text-[10px] font-black px-1.5 py-0.2 rounded-full shadow border border-white">
            AI MD
          </span>
        </button>
      </div>

      {/* ── 2. EXPANDED DOCTOR CONSOLE MODAL ── */}
      {isOpen && (
        <div className="fixed bottom-20 md:bottom-24 right-2 sm:right-6 z-50 w-[96vw] sm:w-[440px] max-h-[85vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-fade-in">
          
          {/* Doctor Header Banner */}
          <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-950 text-white p-3.5 sm:p-4 flex items-center justify-between shadow-md flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-400 shadow flex-shrink-0 bg-slate-900">
                <img
                  src="/dr_arya.jpg"
                  alt="Dr. Arya"
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-bold text-sm sm:text-base text-white tracking-tight">
                    Dr. Arya (Age 28, AI Physician)
                  </h3>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xs text-teal-200 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Online · Multilingual Native Audio</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setSpeechEnabled(!speechEnabled)}
                className={`p-2 rounded-xl transition-colors ${
                  speechEnabled ? 'bg-teal-700 text-white' : 'bg-slate-800 text-slate-400'
                }`}
                title={speechEnabled ? 'Audio Speech Enabled' : 'Audio Speech Muted'}
              >
                {speechEnabled ? <Volume2 className="w-4 h-4 text-emerald-300" /> : <VolumeX className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Action Navigation Bar */}
          <div className="grid grid-cols-4 bg-slate-100/80 p-1 border-b border-slate-200 text-2xs font-bold">
            <button
              onClick={() => setMode('chat')}
              className={`py-1.5 rounded-xl flex items-center justify-center gap-1 transition-all ${
                mode === 'chat' ? 'bg-white text-teal-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5 text-teal-600" />
              <span>AI Chat</span>
            </button>

            <button
              onClick={() => triggerCallOrVideo('call')}
              className={`py-1.5 rounded-xl flex items-center justify-center gap-1 transition-all ${
                mode === 'call' ? 'bg-white text-teal-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Voice Call</span>
            </button>

            <button
              onClick={() => triggerCallOrVideo('video')}
              className={`py-1.5 rounded-xl flex items-center justify-center gap-1 transition-all ${
                mode === 'video' ? 'bg-white text-teal-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Video className="w-3.5 h-3.5 text-blue-600" />
              <span>Animated Video</span>
            </button>

            <button
              onClick={() => setMode('hospital')}
              className={`py-1.5 rounded-xl flex items-center justify-center gap-1 transition-all ${
                mode === 'hospital' ? 'bg-white text-teal-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-purple-600" />
              <span>Hospitals</span>
            </button>
          </div>

          {/* Local Native Language Strip */}
          <div className="px-3 py-1.5 bg-slate-50 border-b border-slate-200/60 flex items-center gap-1.5 overflow-x-auto text-3xs font-bold">
            <span className="text-slate-400 flex-shrink-0">Speak in:</span>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.id}
                onClick={() => {
                  setSelectedLang(lang)
                  speakText(lang.greeting, lang.speechCode)
                }}
                className={`px-2 py-0.5 rounded-full transition-colors flex-shrink-0 ${
                  selectedLang.id === lang.id
                    ? 'bg-teal-700 text-white'
                    : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
                }`}
              >
                {lang.name.split(' ')[0]}
              </button>
            ))}
          </div>

          {/* ── MODE 1: REAL-TIME CHAT ── */}
          {mode === 'chat' && (
            <>
              {/* Message Feed */}
              <div className="flex-1 p-4 overflow-y-auto space-y-3 max-h-[380px] bg-slate-50/50 text-xs">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    {m.role === 'ai' && (
                      <div className="flex items-center gap-1 text-3xs text-teal-700 font-bold mb-1">
                        <Sparkles className="w-3 h-3 text-teal-600" />
                        <span>Dr. Arya · {m.department || 'Clinical AI'}</span>
                      </div>
                    )}

                    <div
                      className={`p-3 rounded-2xl max-w-[88%] leading-relaxed ${
                        m.role === 'user'
                          ? 'bg-teal-700 text-white rounded-br-xs shadow-sm font-medium'
                          : 'bg-white text-slate-900 border border-slate-200 rounded-bl-xs shadow-sm whitespace-pre-line'
                      }`}
                    >
                      {m.text}
                    </div>

                    {m.time && (
                      <span className="text-4xs text-slate-400 mt-0.5 px-1">{m.time}</span>
                    )}
                  </div>
                ))}

                {/* Live Typing Indicator */}
                {isTyping && (
                  <div className="flex items-center gap-2 p-3 bg-white border border-slate-200 rounded-2xl rounded-bl-xs max-w-[120px] shadow-sm animate-pulse">
                    <div className="w-2 h-2 rounded-full bg-teal-500 animate-bounce" />
                    <div className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:0.2s]" />
                    <div className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:0.4s]" />
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              {/* Sample Prompt Chips */}
              <div className="px-3 py-1.5 bg-white border-t border-slate-100 flex items-center gap-1.5 overflow-x-auto text-3xs">
                {[
                  'एसिडिटी आणि छातीत जळजळ (Acidity)',
                  'Knee Pain & Vitamin D (गुडघेदुखी)',
                  'Diabetes / Sugar Diet (मधुमेह)',
                  'PCOS / Irregular Periods',
                  'Fever & Cold Treatment',
                ].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => sendUserMessage(chip)}
                    className="bg-slate-100 hover:bg-teal-50 hover:text-teal-900 hover:border-teal-300 border border-slate-200 px-2.5 py-1 rounded-full text-slate-700 whitespace-nowrap transition-colors"
                  >
                    {chip}
                  </button>
                ))}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
                <button
                  type="button"
                  onClick={toggleListening}
                  className={`p-2.5 rounded-xl transition-colors ${
                    isListening ? 'bg-red-500 text-white animate-pulse' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                  title={isListening ? 'Listening... click to stop' : 'Click to Speak (Microphone)'}
                >
                  {isListening ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
                </button>

                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder={`Type in ${selectedLang.name.split(' ')[0]} (e.g. मला ताप आला आहे)...`}
                  className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-900 focus:outline-none focus:border-teal-600 focus:bg-white transition-colors"
                />

                <button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className="p-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 disabled:opacity-40 text-white transition-colors shadow"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}

          {/* ── MODE 2: 28-YEAR-OLD FEMALE DOCTOR VOICE CONSULTATION ── */}
          {mode === 'call' && (
            <div className="p-6 bg-slate-950 text-white flex flex-col items-center justify-center space-y-6 min-h-[360px]">
              <div className="relative">
                {/* Doctor Avatar with Speaking Pulse */}
                <div className={`w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-400 shadow-2xl transition-transform duration-500 ${
                  isVoiceActive ? 'scale-105 ring-4 ring-emerald-500/40' : 'scale-100'
                }`}>
                  <img
                    src="/dr_arya.jpg"
                    alt="Dr. Arya"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-slate-950 flex items-center justify-center animate-ping" />
              </div>

              <div className="text-center space-y-1">
                <h4 className="text-lg font-bold text-white">Dr. Arya (Age 28, Clinical AI MD)</h4>
                <p className="text-xs text-emerald-400 font-bold">
                  {isCalling ? `Connected · Speaking ${selectedLang.name} · ${Math.floor(callDuration / 60)}:${String(callDuration % 60).padStart(2, '0')}` : 'Connecting with Dr. Arya...'}
                </p>
                <p className="text-2xs text-slate-400">
                  Direct Line: +91 7028025717 · 28-Year-Old Female Clinical Tone
                </p>
              </div>

              {/* Dynamic Voice Waves */}
              <div className="flex items-center gap-1.5 h-8">
                {[14, 28, 18, 32, 20, 28, 14, 24, 18, 30, 16, 22].map((h, i) => (
                  <span
                    key={i}
                    className={`w-1.5 bg-emerald-400 rounded-full transition-all ${
                      isVoiceActive ? 'animate-pulse' : 'h-1.5 opacity-40'
                    }`}
                    style={{ height: isVoiceActive ? `${h}px` : '4px', animationDelay: `${i * 0.08}s` }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => speakText(selectedLang.greeting)}
                  className="px-4 py-2 rounded-full bg-teal-800 hover:bg-teal-700 text-white text-xs font-bold flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Replay Voice</span>
                </button>
                <button
                  onClick={() => {
                    setIsCalling(false)
                    if (typeof window !== 'undefined' && window.speechSynthesis) window.speechSynthesis.cancel()
                    setMode('chat')
                  }}
                  className="px-5 py-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-lg"
                >
                  End Call
                </button>
              </div>
            </div>
          )}

          {/* ── MODE 3: ANIMATED DOCTOR VIDEO EXPLAINING SCREEN ── */}
          {mode === 'video' && (
            <div className="p-4 bg-slate-950 text-white space-y-4">
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-teal-500/40 bg-slate-900 shadow-2xl flex flex-col justify-between p-3 group">
                
                {/* Doctor Visual Feed */}
                <div className="absolute inset-0">
                  <img
                    src="/dr_arya.jpg"
                    alt="Dr. Arya Video Feed"
                    className={`w-full h-full object-cover object-top transition-transform duration-700 ${
                      isVoiceActive ? 'scale-105 filter brightness-110' : 'scale-100'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                </div>

                {/* Top Overlay Badge */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="bg-slate-900/80 backdrop-blur-md px-2.5 py-1 rounded-full text-3xs text-white border border-white/10 flex items-center gap-1.5 shadow">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                    <span className="font-bold uppercase tracking-wider">Animated Dr. Arya Explaining</span>
                  </div>
                  <span className="text-3xs bg-teal-900/80 text-teal-300 px-2 py-0.5 rounded-full border border-teal-500/30 font-mono">
                    28 Yrs · MD AI
                  </span>
                </div>

                {/* Bottom Subtitle / Captions Teleprompter */}
                <div className="relative z-10 space-y-2">
                  {/* Real-time Voice Equalizer */}
                  <div className="flex items-center gap-1 h-4">
                    {[8, 16, 10, 18, 12, 16, 8, 14].map((h, i) => (
                      <span
                        key={i}
                        className={`w-1 bg-teal-400 rounded-full transition-all ${
                          isVoiceActive ? 'animate-pulse' : 'h-1 opacity-30'
                        }`}
                        style={{ height: isVoiceActive ? `${h}px` : '3px' }}
                      />
                    ))}
                  </div>

                  {/* Live Caption Box */}
                  <div className="p-2.5 rounded-2xl bg-black/75 backdrop-blur-md border border-white/10 text-3xs text-slate-200 leading-relaxed font-medium">
                    <strong className="text-teal-400 block font-bold mb-0.5">
                      🗣️ Dr. Arya (Speaking in {selectedLang.name.split(' ')[0]}):
                    </strong>
                    <p className="line-clamp-3">{videoSpeakingText}</p>
                  </div>
                </div>

              </div>

              {/* Video Controls & Language Switch */}
              <div className="flex items-center justify-between gap-2">
                <button
                  onClick={() => speakText(videoSpeakingText)}
                  className="flex-1 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-600 text-white font-bold text-xs shadow flex items-center justify-center gap-1.5 transition-all"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>{isVoiceActive ? 'Speaking Now...' : 'Play Doctor Audio'}</span>
                </button>

                <button
                  onClick={() => setMode('chat')}
                  className="py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-bold text-xs transition-colors"
                >
                  Chat Mode
                </button>
              </div>
            </div>
          )}

          {/* ── MODE 4: HOSPITAL DESK ── */}
          {mode === 'hospital' && (
            <div className="p-4 space-y-4 overflow-y-auto max-h-[380px] bg-slate-50 text-xs">
              <div className="p-3.5 bg-slate-900 text-white rounded-2xl space-y-1">
                <div className="font-bold text-sm text-teal-300">The 40% Hospital In-Person Network</div>
                <p className="text-2xs text-slate-300 leading-relaxed">
                  For surgical care, emergencies, or specialized diagnostics in Pune, access Meditrust Zero-Wait TPA Admission Desks.
                </p>
              </div>

              <div className="space-y-2.5">
                {[
                  { name: 'Ruby Hall Clinic', loc: 'Sassoon Rd / Wanowrie', perk: 'VIP TPA Desk & Cath Lab Priority' },
                  { name: 'Sahyadri Super Speciality', loc: 'Deccan / Kothrud', perk: 'Zero-Wait Admission & 15% Off' },
                  { name: 'Jupiter Hospital', loc: 'Baner Expressway', perk: 'Advanced Multi-Speciality Hub' },
                ].map((h) => (
                  <div key={h.name} className="p-3 bg-white rounded-2xl border border-slate-200 space-y-1">
                    <div className="font-bold text-slate-900">{h.name}</div>
                    <div className="text-2xs text-slate-500">{h.loc}</div>
                    <div className="text-3xs font-bold text-teal-800 bg-teal-100 px-2 py-0.5 rounded inline-block">
                      {h.perk}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="tel:+917028025717"
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Hospital Desk: +91 7028025717</span>
              </a>
            </div>
          )}

        </div>
      )}
    </>
  )
}
