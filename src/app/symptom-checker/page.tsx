'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  Send, AlertTriangle, Shield, ChevronRight,
  RefreshCw, MessageCircle, Activity, Pill, X, CheckCircle2, Phone,
  Upload, Sparkles, Heart, Stethoscope,
  Volume2, VolumeX, Mic, MicOff, Check, CheckCheck, Paperclip, Lock,
  Calendar, Baby, HeartPulse, FileText, UserCheck
} from 'lucide-react'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'
import { evaluateClinicalQuery, UserHealthGraph, ClinicalResponse } from '@/data/clinicalReasoningEngine'

interface Message {
  id: string
  role: 'ai' | 'user'
  text: string
  timestamp: string
  department?: string
  chips?: string[]
  isEmergency?: boolean
  audioAvailable?: boolean
  stageDetected?: string
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    role: 'ai',
    text: `Hello! I am **Dr. Arya**, lead women's health companion and clinical consultant for Meditrust. 🌸

I am here to guide you with complete privacy through every stage of your health journey—from your very first period to PCOS management, fertility, pregnancy milestones, and mid-life care.

To help me personalize our conversation and understand your health needs:
• What symptoms or questions are on your mind today?
• If comfortable, share your **approximate age** and the date of your **last menstrual period (LMP)**.

Everything we discuss is strictly private between us.`,
    timestamp: 'Just now',
    department: 'Dr. Arya Women’s Health Companion',
    stageDetected: 'Ready for Triage',
    chips: [
      '🌸 PCOS / PCOD Assessment',
      '🩸 Is My Period Normal? (Teen)',
      '🥚 Planning a Baby & Ovulation',
      '🤰 Early Pregnancy Scans & EDD',
      '🤱 Postnatal Bleeding & Recovery',
      '🌸 Hot Flushes & Menopause',
      '🎗️ Severe Period Pain / Endometriosis',
      '💊 Jan Aushadhi Generic Savings',
    ],
  },
]

export default function SymptomCheckerPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [speechEnabled, setSpeechEnabled] = useState(false)
  const [isListening, setIsListening] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'hi' | 'mr'>('en')
  const [rxScannerOpen, setRxScannerOpen] = useState(false)
  const [lmpModalOpen, setLmpModalOpen] = useState(false)
  const [inputLmp, setInputLmp] = useState('')
  const [inputAge, setInputAge] = useState<number | undefined>(undefined)

  // Longitudinal Memory Graph State (DPDP & HIPAA Compliant)
  const [userGraph, setUserGraph] = useState<UserHealthGraph>({
    current_stage: 'General',
    cycle_history: [],
    symptom_journal: [],
    reports: [],
    medications: [],
    family_members: [],
    language: 'en',
  })

  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  // Real-time Text-to-Speech Engine
  const speakText = (text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis || !speechEnabled) return
    window.speechSynthesis.cancel()

    const cleanText = text.replace(/[*_#•]/g, '').replace(/\[.*?\]\(.*?\)/g, '')
    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.lang = selectedLanguage === 'mr' ? 'mr-IN' : selectedLanguage === 'hi' ? 'hi-IN' : 'en-IN'
    utterance.rate = 0.95
    utterance.pitch = 1.2

    const voices = window.speechSynthesis.getVoices()
    const femaleIndianVoice = voices.find(
      (v) =>
        (v.lang.includes('IN') || v.name.includes('India')) &&
        (v.name.toLowerCase().includes('female') ||
          v.name.toLowerCase().includes('lekha') ||
          v.name.toLowerCase().includes('veena') ||
          v.name.toLowerCase().includes('aditi') ||
          v.name.toLowerCase().includes('google'))
    )

    if (femaleIndianVoice) utterance.voice = femaleIndianVoice
    window.speechSynthesis.speak(utterance)
  }

  // Voice Input (STT)
  const toggleListening = () => {
    if (typeof window === 'undefined') return
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
    if (!SpeechRecognition) {
      alert('Speech recognition is supported in Chrome, Safari, and Edge.')
      return
    }

    if (isListening) {
      setIsListening(false)
      return
    }

    const recognition = new SpeechRecognition()
    recognition.lang = selectedLanguage === 'mr' ? 'mr-IN' : selectedLanguage === 'hi' ? 'hi-IN' : 'en-IN'
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onstart = () => setIsListening(true)
    recognition.onend = () => setIsListening(false)
    recognition.onerror = () => setIsListening(false)
    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript
      setInput(transcript)
      handleSendMessage(transcript)
    }

    recognition.start()
  }

  const handleSaveLmpAndAge = (e: React.FormEvent) => {
    e.preventDefault()
    setUserGraph((prev) => ({
      ...prev,
      LMP: inputLmp || prev.LMP,
      age: inputAge || prev.age,
    }))
    setLmpModalOpen(false)

    if (inputLmp) {
      handleSendMessage(`I logged my LMP as ${inputLmp}${inputAge ? ` and my age is ${inputAge}` : ''}.`)
    }
  }

  const handleSendMessage = (textToSend?: string) => {
    const messageContent = (textToSend || input).trim()
    if (!messageContent) return

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: messageContent,
      timestamp: now,
    }

    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response = evaluateClinicalQuery(messageContent, userGraph, selectedLanguage)
      
      // Update memory graph with stage detected
      if (response.stageDetected) {
        setUserGraph((prev) => ({
          ...prev,
          current_stage: response.stageDetected as any,
          symptom_journal: [...prev.symptom_journal, messageContent],
        }))
      }

      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        department: response.department,
        chips: response.chips,
        isEmergency: response.isEmergency,
        audioAvailable: true,
        stageDetected: response.stageDetected,
      }

      setMessages((prev) => [...prev, aiMsg])
      setIsTyping(false)
      if (speechEnabled) speakText(response.text)
    }, 400)
  }

  return (
    <div className="min-h-screen bg-slate-100/70 pt-20 sm:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-3 sm:px-6 space-y-4">
        
        {/* ── TOP HEADER STATUS BAR ── */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-11 h-11 rounded-full bg-rose-50 border-2 border-rose-200 flex items-center justify-center text-xl shadow-2xs">
                🌸
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 border-2 border-white rounded-full" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-sm sm:text-base text-slate-900">Dr. Arya Women&apos;s Health</h1>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-rose-100 text-rose-800 border border-rose-200">
                  Senior AI Physician
                </span>
              </div>
              <p className="text-3xs text-slate-500 flex items-center gap-1">
                <Lock className="w-3 h-3 text-emerald-600" />
                <span>256-Bit Private &amp; ABDM Compliant · 24/7 Real-Time</span>
              </p>
            </div>
          </div>

          {/* Action Quick Tools */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setLmpModalOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-rose-50 hover:bg-rose-100 text-rose-800 text-xs font-bold border border-rose-200 flex items-center gap-1.5 transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-rose-600" />
              <span>{userGraph.LMP ? `LMP: ${userGraph.LMP}` : 'Set LMP / Age'}</span>
            </button>

            <button
              onClick={() => setSpeechEnabled(!speechEnabled)}
              className={`p-2 rounded-xl border transition-colors ${
                speechEnabled
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                  : 'bg-slate-50 text-slate-400 border-slate-200 hover:text-slate-600'
              }`}
              title={speechEnabled ? 'Voice output enabled' : 'Voice output disabled'}
            >
              {speechEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* ── CHAT CONTAINER ── */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-md flex flex-col h-[650px] overflow-hidden">
          
          {/* Messages Scroll Area */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'ai' && (
                  <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center text-sm flex-shrink-0 shadow-2xs mt-1">
                    🌸
                  </div>
                )}

                <div className={`max-w-[85%] sm:max-w-[75%] space-y-2`}>
                  
                  {/* Department & Stage Badge */}
                  {msg.role === 'ai' && msg.department && (
                    <div className="flex items-center gap-2 text-3xs font-bold text-rose-800 mb-1">
                      <span className="px-2 py-0.5 rounded-md bg-rose-50 border border-rose-200">
                        {msg.department}
                      </span>
                    </div>
                  )}

                  {/* Message Bubble */}
                  <div
                    className={`p-4 sm:p-5 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line ${
                      msg.role === 'user'
                        ? 'bg-slate-900 text-white rounded-br-none shadow-xs'
                        : msg.isEmergency
                        ? 'bg-rose-50 border-2 border-rose-500 text-slate-950 rounded-bl-none'
                        : 'bg-slate-50 border border-slate-200/90 text-slate-900 rounded-bl-none shadow-2xs'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {/* Interactive Action Chips */}
                  {msg.chips && msg.chips.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {msg.chips.map((chip, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(chip.replace(/^[^\w\s]+/, '').trim())}
                          className="px-3 py-1.5 rounded-full text-3xs sm:text-2xs font-semibold bg-white hover:bg-rose-50 text-rose-900 border border-rose-200 shadow-2xs hover:border-rose-300 transition-all text-left"
                        >
                          {chip}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className={`text-3xs text-slate-400 font-mono ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.timestamp}
                  </div>

                </div>

                {msg.role === 'user' && (
                  <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold flex-shrink-0 shadow-2xs mt-1">
                    You
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 text-xs text-slate-400 p-2">
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-rose-500 animate-bounce [animation-delay:0.4s]" />
                <span className="text-3xs font-medium text-rose-700 ml-1">Dr. Arya is reasoning clinical protocols…</span>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* ── BOTTOM INPUT BAR ── */}
          <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200/90 space-y-2">
            
            {/* Quick Tool Launchers */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none text-3xs font-bold text-slate-600">
              <button
                onClick={() => setLmpModalOpen(true)}
                className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-rose-300 hover:text-rose-700 flex items-center gap-1 whitespace-nowrap shadow-2xs"
              >
                <Calendar className="w-3 h-3 text-rose-600" />
                <span>Log LMP / Cycle</span>
              </button>

              <Link
                href="/womens-health"
                className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-rose-300 hover:text-rose-700 flex items-center gap-1 whitespace-nowrap shadow-2xs"
              >
                <Heart className="w-3 h-3 text-rose-600" />
                <span>Women&apos;s Health Hub</span>
              </Link>

              <button
                onClick={() => setRxScannerOpen(true)}
                className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-700 flex items-center gap-1 whitespace-nowrap shadow-2xs"
              >
                <Upload className="w-3 h-3 text-blue-600" />
                <span>Upload Report / Scan PDF</span>
              </button>

              <Link
                href="/doctors/gynecologist/pune"
                className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 hover:border-emerald-300 hover:text-emerald-700 flex items-center gap-1 whitespace-nowrap shadow-2xs"
              >
                <Stethoscope className="w-3 h-3 text-emerald-600" />
                <span>Pune OB-GYN Network</span>
              </Link>
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="flex items-center gap-2"
            >
              <div className="flex-1 relative">
                <input
                  type="text"
                  placeholder="Describe your symptoms (e.g. late period, severe cramps, PCOS acne, pregnancy scan query)..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500 text-xs sm:text-sm placeholder:text-slate-400 shadow-2xs"
                />
              </div>

              <button
                type="button"
                onClick={toggleListening}
                className={`p-3 rounded-2xl border transition-colors ${
                  isListening
                    ? 'bg-rose-600 text-white animate-pulse border-rose-600'
                    : 'bg-white text-slate-600 border-slate-300 hover:bg-slate-100'
                }`}
                title="Voice input"
              >
                {isListening ? <Mic className="w-4 h-4" /> : <MicOff className="w-4 h-4" />}
              </button>

              <button
                type="submit"
                disabled={!input.trim()}
                className="p-3 rounded-2xl bg-rose-600 hover:bg-rose-700 disabled:bg-slate-300 text-white font-bold transition-colors shadow-xs flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="text-[10px] text-slate-400 text-center flex items-center justify-center gap-1.5">
              <Shield className="w-3 h-3 text-emerald-600" />
              <span>For informational and care navigation use. In emergencies, proceed to the nearest ER or call 108.</span>
            </div>

          </div>

        </div>

      </div>

      {/* ── SET LMP & AGE MODAL ── */}
      {lmpModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full border border-slate-200 shadow-2xl space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-rose-600" />
                <h3 className="font-bold text-sm text-slate-950">Set Your LMP &amp; Age</h3>
              </div>
              <button
                onClick={() => setLmpModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600">
              Sharing your Last Menstrual Period (LMP) helps Dr. Arya accurately calculate your ovulation windows, cycle regularity, and pregnancy milestones.
            </p>

            <form onSubmit={handleSaveLmpAndAge} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  First Day of Last Menstrual Period (LMP):
                </label>
                <input
                  type="date"
                  value={inputLmp}
                  onChange={(e) => setInputLmp(e.target.value)}
                  className="w-full p-2.5 rounded-xl border border-slate-200 font-medium"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-700 mb-1">
                  Approximate Age (Optional):
                </label>
                <input
                  type="number"
                  placeholder="e.g. 24"
                  min="12"
                  max="95"
                  value={inputAge || ''}
                  onChange={(e) => setInputAge(Number(e.target.value))}
                  className="w-full p-2.5 rounded-xl border border-slate-200 font-medium"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setLmpModalOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-xs"
                >
                  Save &amp; Continue
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Prescription Scanner Modal */}
      {rxScannerOpen && (
        <PrescriptionScannerModal
          isOpen={rxScannerOpen}
          onClose={() => setRxScannerOpen(false)}
        />
      )}

    </div>
  )
}
