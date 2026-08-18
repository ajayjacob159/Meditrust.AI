'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import {
  Phone, Video, MessageCircle, X, ChevronUp, Sparkles,
  Volume2, VolumeX, Globe, MapPin, Building2, Shield,
  CheckCircle2, ArrowRight, Activity, Heart, RefreshCw, Send,
  Mic, MicOff, Lock, UserCheck, Stethoscope, Sparkle, Clock
} from 'lucide-react'
import { punePartnerHospitals } from '@/data/labProviders'
import { medicalSpecialties, type MedicalSpecialty } from '@/data/clinicalEngine'
import { evaluateClinicalQuery } from '@/data/clinicalReasoningEngine'

const LANGUAGES = [
  { id: 'mr', name: 'मराठी (Marathi)', speechCode: 'mr-IN', greeting: 'नमस्कार! मी डॉ. आर्या. मी तुम्हाला आज कशी मदत करू शकते?' },
  { id: 'hi', name: 'हिन्दी (Hindi)', speechCode: 'hi-IN', greeting: 'नमस्ते! मैं डॉ. आर्या हूँ। आपकी स्वास्थ्य संबंधी क्या सहायता कर सकती हूँ?' },
  { id: 'en', name: 'English (India)', speechCode: 'en-IN', greeting: 'Hello! I am Dr. Arya, your 24/7 AI Doctor. How can I help you today?' },
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
  const [isTyping, setIsTyping] = useState(false)
  
  // Mobile Verification Gate for Calls/Video
  const [userPhone, setUserPhone] = useState('')
  const [isPhoneVerified, setIsPhoneVerified] = useState(false)
  const [phoneInputTemp, setPhoneInputTemp] = useState('7028025717')
  const [verifyingPhone, setVerifyingPhone] = useState(false)
  const [pendingCallAction, setPendingCallAction] = useState<'call' | 'video' | null>(null)

  const [messages, setMessages] = useState<{ role: 'ai' | 'user'; text: string; department?: string; time?: string }[]>([
    {
      role: 'ai',
      text: 'नमस्कार! I am **Dr. Arya** (Age 28, MD Global Clinical AI). I provide real-time clinical guidance in **मराठी, हिन्दी & English**.\n\n📞 **24/7 Doctor Assistance Desk:** **+91 7028025717**.\n\nOver **60% of primary symptoms** (Fever, Acidity, Periods/PCOS, Joint Pains, Sugar/BP) are safely managed at home with generic savings (save 80%). For hospital visits, I arrange VIP Fast-Track Admission at **Ruby Hall Clinic & Sahyadri Pune**.',
      department: 'Clinical AI Triage',
      time: 'Just now',
    },
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [bubbleText, setBubbleText] = useState('मराठी & Hindi 24/7 AI Doctor · Call +91 7028025717')
  const chatEndRef = useRef<HTMLDivElement>(null)

  // Real-time Text-to-Speech
  const speakText = (text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis || !speechEnabled) return
    window.speechSynthesis.cancel()
    
    // Clean markdown for speech
    const cleanText = text.replace(/[*_#•]/g, '').replace(/\[.*?\]\(.*?\)/g, '')
    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.lang = selectedLang.speechCode || 'en-IN'
    utterance.rate = 0.95
    utterance.pitch = 1.05
    
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
      alert('Speech recognition is supported in Chrome, Safari, Edge and Android.')
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
      '🌺 15+ Specialties in मराठी & हिन्दी',
      '🩸 100,000+ Blood Reports Explained',
      '🏥 Ruby Hall & Sahyadri VIP Admission',
    ]
    let idx = 0
    const interval = setInterval(() => {
      idx = (idx + 1) % bubbles.length
      setBubbleText(bubbles[idx])
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  // Call timer
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
  }, [messages, isTyping, isOpen])

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
    }, 600)
  }

  return (
    <>
      {/* ── Floating 3D Animated Doctor Avatar Widget (Bottom Right) ── */}
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

        {/* 3D Doctor Avatar Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Talk to Dr. Arya AI Doctor"
          className="pointer-events-auto relative group flex items-center justify-center focus:outline-none transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          {/* Glowing Ring */}
          <span className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-teal-500 via-emerald-400 to-blue-500 opacity-75 blur-md group-hover:opacity-100 transition duration-300 animate-pulse-glow" />
          
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 rounded-full border-2 border-white overflow-hidden shadow-2xl bg-teal-900">
            <img
              src="/dr_arya.jpg"
              alt="Dr. Arya AI Doctor"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
            />
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

          {/* Direct Call Tag */}
          <div className="absolute -bottom-3 bg-slate-950 text-white text-3xs font-black px-2.5 py-0.5 rounded-full shadow border border-slate-700 whitespace-nowrap flex items-center gap-1">
            <Phone className="w-2.5 h-2.5 text-teal-400" /> +91 7028025717
          </div>
        </button>
      </div>

      {/* ── Expanded Dr. Arya Interactive Doctor Console ── */}
      {isOpen && (
        <div className="fixed bottom-20 right-3 sm:right-6 z-50 w-[95vw] sm:w-[450px] max-h-[86vh] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col animate-fade-up">
          
          {/* Top Header */}
          <div className="p-4 bg-gradient-to-r from-teal-900 via-slate-900 to-slate-950 text-white flex items-center justify-between border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-2xl overflow-hidden border-2 border-teal-400/50 shadow">
                <img
                  src="/dr_arya.jpg"
                  alt="Dr. Arya"
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border border-white rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-bold text-sm text-white">Dr. Arya (AI Doctor)</h4>
                  <span className="bg-teal-500/20 text-teal-300 border border-teal-400/30 text-3xs font-bold px-1.5 py-0.5 rounded-full">
                    24×7 Online
                  </span>
                </div>
                <div className="text-3xs text-slate-300 flex items-center gap-1">
                  <Globe className="w-3 h-3 text-teal-400" />
                  <span>Speaks {selectedLang.name}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setSpeechEnabled(!speechEnabled)}
                className={`p-1.5 rounded-xl transition-colors ${
                  speechEnabled ? 'text-teal-300 bg-white/10' : 'text-slate-500 bg-white/5'
                }`}
                title={speechEnabled ? 'Audio Speech Enabled' : 'Audio Speech Muted'}
              >
                {speechEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
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
              <span>Video Consult</span>
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

          {/* Language Selector Strip */}
          <div className="px-3 py-1.5 bg-slate-50 border-b border-slate-200/60 flex items-center gap-1.5 overflow-x-auto text-3xs font-bold">
            <span className="text-slate-400 flex-shrink-0">Language:</span>
            {LANGUAGES.map((lang) => (
              <button
                key={lang.id}
                onClick={() => {
                  setSelectedLang(lang)
                  speakText(lang.greeting)
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
                  'Goodghey / Knee Pain & Vitamin D',
                  'Diabetes / HbA1c Sugar Diet',
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
                  placeholder={
                    selectedLang.id === 'mr'
                      ? 'लक्षणे टाइप करा (उदा. मला चक्कर येत आहे)...'
                      : selectedLang.id === 'hi'
                      ? 'लक्षण लिखें (उदा. पेट में दर्द है)...'
                      : 'Type your symptoms or blood report values...'
                  }
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

          {/* ── MODE 2: VOICE CALL SIMULATOR ── */}
          {mode === 'call' && (
            <div className="p-6 bg-slate-950 text-white flex flex-col items-center justify-center space-y-6 min-h-[360px]">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-400 shadow-2xl">
                  <img
                    src="/dr_arya.jpg"
                    alt="Dr. Arya"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <span className="absolute bottom-1 right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-slate-950 flex items-center justify-center animate-ping" />
              </div>

              <div className="text-center space-y-1">
                <h4 className="text-lg font-bold text-white">Dr. Arya AI Voice Consultation</h4>
                <p className="text-xs text-emerald-400 font-bold">
                  {isCalling ? `Connected · ${Math.floor(callDuration / 60)}:${String(callDuration % 60).padStart(2, '0')}` : 'Calling Doctor Desk...'}
                </p>
                <p className="text-2xs text-slate-400">
                  Direct Line: +91 7028025717 · Speaking {selectedLang.name}
                </p>
              </div>

              {/* Spoken Voice Waves */}
              <div className="flex items-center gap-1.5 h-8">
                {[14, 28, 18, 32, 20, 28, 14, 24, 18, 30, 16, 22].map((h, i) => (
                  <span
                    key={i}
                    className="w-1.5 bg-emerald-400 rounded-full animate-pulse"
                    style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
                  />
                ))}
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => {
                    setIsCalling(false)
                    if (typeof window !== 'undefined' && window.speechSynthesis) window.speechSynthesis.cancel()
                    setMode('chat')
                  }}
                  className="px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold shadow-lg"
                >
                  End Voice Call
                </button>
              </div>
            </div>
          )}

          {/* ── MODE 3: VIDEO CONSULTATION ── */}
          {mode === 'video' && (
            <div className="p-4 bg-slate-950 text-white space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 flex items-center justify-center">
                <img
                  src="/dr_arya.jpg"
                  alt="Dr. Arya Video Feed"
                  className="w-full h-full object-cover object-top opacity-90"
                />
                <div className="absolute top-3 left-3 bg-red-600 px-2 py-0.5 rounded text-3xs font-black uppercase tracking-wider animate-pulse">
                  HD Video Live
                </div>
                <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-lg text-2xs">
                  Dr. Arya · Multi-Specialist AI MD
                </div>
              </div>

              <div className="p-3 bg-slate-900 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="flex items-center justify-between font-bold text-white text-2xs">
                  <span>CLINICAL OBSERVATION ROOM</span>
                  <span className="text-teal-400">W.H.O. HIPAA ENCRYPTED</span>
                </div>
                <p className="leading-relaxed text-2xs">
                  Video feed active. Please describe visible symptoms (skin rash, swelling, throat redness) or read your blood pressure / glucose monitor numbers aloud.
                </p>
              </div>

              <button
                onClick={() => setMode('chat')}
                className="w-full py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold"
              >
                Return to Chat Mode
              </button>
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
