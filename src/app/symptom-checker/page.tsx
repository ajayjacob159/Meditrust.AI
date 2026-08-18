'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  Brain, Send, AlertTriangle, Shield, ChevronRight,
  RefreshCw, MessageCircle, Activity, Pill, X, CheckCircle2, Phone,
  Upload, Video, Globe, Building2, MapPin, Sparkles, Heart, Stethoscope,
  Volume2, VolumeX, Mic, MicOff, Check, CheckCheck, Paperclip, Sparkle
} from 'lucide-react'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'
import { evaluateClinicalQuery } from '@/data/clinicalReasoningEngine'

interface Message {
  id: string
  role: 'ai' | 'user'
  text: string
  timestamp: string
  department?: string
  chips?: string[]
  isEmergency?: boolean
  audioAvailable?: boolean
}

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    role: 'ai',
    text: "नमस्कार! I am **Dr. Arya** (Age 28, MD Global Clinical AI) 👋\n\nI provide real-time clinical consultations across all major medical specialties in **मराठी, हिन्दी & English**.\n\n🩺 **Our 60/40 Care Model:**\n• **60% of primary health issues** (fever, acidity, PCOD, knee/back stiffness, diabetes & BP) are safely resolved from home with generic savings (save 80%).\n• **40% requiring in-person hospital care** are fast-tracked to **Ruby Hall Clinic & Sahyadri Pune** with zero-wait admission.\n\nWhat symptoms or health concern are you experiencing today?",
    timestamp: 'Just now',
    department: 'Chief Clinical AI Triage',
    chips: [
      '🩸 Full Body Blood Test (60-Min Pickup)',
      '💊 Jan Aushadhi Generic Savings (80%)',
      '🌺 Gynaecology (PCOS / Periods)',
      '🦴 Knee & Joint Pain Relief',
      '❤️ High BP & Cholesterol',
      '🩺 High Blood Sugar / HbA1c',
      '🔥 Acidity & Gas Instant Relief',
      '🌡️ Viral Fever & Body Ache',
    ],
  },
]

export default function SymptomCheckerPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [speechEnabled, setSpeechEnabled] = useState(true)
  const [isListening, setIsListening] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState<'mr-IN' | 'hi-IN' | 'en-IN'>('mr-IN')
  const [rxScannerOpen, setRxScannerOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  // Real-time Text-to-Speech
  const speakText = (text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis || !speechEnabled) return
    window.speechSynthesis.cancel()

    const cleanText = text.replace(/[*_#•]/g, '').replace(/\[.*?\]\(.*?\)/g, '')
    const utterance = new SpeechSynthesisUtterance(cleanText)
    utterance.lang = selectedLanguage
    utterance.rate = 0.95
    utterance.pitch = 1.05

    const voices = window.speechSynthesis.getVoices()
    const indianVoice = voices.find(
      (v) => v.lang.includes('IN') || v.name.includes('India') || v.name.includes('Hindi') || v.name.includes('Marathi')
    )
    if (indianVoice) utterance.voice = indianVoice

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
    recognition.lang = selectedLanguage
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
      const response = evaluateClinicalQuery(messageContent, selectedLanguage)
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        text: response.text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        department: response.department,
        chips: response.chips,
        isEmergency: response.isEmergency,
        audioAvailable: true,
      }

      setMessages((prev) => [...prev, aiMsg])
      setIsTyping(false)
      speakText(response.text)
    }, 450)
  }

  return (
    <div className="min-h-screen bg-slate-100 py-6 sm:py-10">
      <div className="max-w-4xl mx-auto px-3 sm:px-6">
        
        {/* WhatsApp / Telegram Style Outer Frame */}
        <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 overflow-hidden flex flex-col h-[85vh] sm:h-[88vh]">
          
          {/* 1. Doctor Header (WhatsApp / Telegram Style) */}
          <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-950 text-white p-3.5 sm:p-4 flex items-center justify-between shadow-md z-10 flex-shrink-0">
            <div className="flex items-center gap-3">
              {/* Doctor Avatar with Live Pulse */}
              <div className="relative w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-2 border-emerald-400 shadow-xs flex-shrink-0 bg-slate-900">
                <img
                  src="/dr_arya.jpg"
                  alt="Dr. Arya AI Doctor"
                  className="w-full h-full object-cover object-top"
                />
                <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full animate-pulse" />
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <h1 className="text-sm sm:text-base font-black tracking-tight font-display">
                    Dr. Arya (AI Physician)
                  </h1>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                </div>
                <div className="text-3xs sm:text-2xs text-teal-200 flex items-center gap-1.5 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>Online · Typically replies in seconds</span>
                </div>
              </div>
            </div>

            {/* Top Quick Actions */}
            <div className="flex items-center gap-2">
              {/* Language Selector */}
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value as any)}
                className="bg-teal-950/80 text-white text-3xs font-bold px-2 py-1.5 rounded-xl border border-teal-600/50 outline-hidden"
              >
                <option value="mr-IN">🚩 मराठी</option>
                <option value="hi-IN">🇮🇳 हिन्दी</option>
                <option value="en-IN">🌐 English</option>
              </select>

              {/* Voice Speak Toggle */}
              <button
                type="button"
                onClick={() => setSpeechEnabled(!speechEnabled)}
                className={`p-2 rounded-xl border transition-colors ${
                  speechEnabled
                    ? 'bg-teal-700 text-white border-teal-500'
                    : 'bg-slate-800 text-slate-400 border-slate-700'
                }`}
                title={speechEnabled ? 'Voice Speak Enabled' : 'Voice Speak Muted'}
              >
                {speechEnabled ? <Volume2 className="w-4 h-4 text-emerald-300" /> : <VolumeX className="w-4 h-4" />}
              </button>

              {/* Direct Call Button */}
              <a
                href="tel:+917028025717"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs shadow transition-colors"
              >
                <Phone className="w-3.5 h-3.5 animate-pulse" />
                <span>+91 7028025717</span>
              </a>
            </div>
          </div>

          {/* 2. Chat Conversation Canvas (WhatsApp Background Texture) */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-slate-50/80">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col ${m.role === 'user' ? 'items-end' : 'items-start'} animate-fade-in`}
              >
                {/* Department Tag for Doctor */}
                {m.role === 'ai' && m.department && (
                  <span className="text-3xs font-black uppercase tracking-wider text-teal-800 bg-teal-100/80 px-2 py-0.5 rounded-full mb-1 ml-1">
                    {m.department}
                  </span>
                )}

                {/* Message Bubble */}
                <div
                  className={`max-w-[88%] sm:max-w-[78%] rounded-3xl p-4 sm:p-5 shadow-sm text-xs sm:text-sm leading-relaxed ${
                    m.role === 'user'
                      ? 'bg-teal-700 text-white rounded-tr-xs'
                      : m.isEmergency
                      ? 'bg-rose-50 border-2 border-rose-400 text-rose-950 rounded-tl-xs'
                      : 'bg-white border border-slate-200/90 text-slate-800 rounded-tl-xs'
                  }`}
                >
                  <div className="whitespace-pre-line space-y-2">
                    {m.text}
                  </div>

                  {/* Bubble Footer: Timestamp & Checkmarks */}
                  <div
                    className={`flex items-center justify-end gap-1.5 text-3xs mt-2 pt-1 border-t ${
                      m.role === 'user' ? 'border-teal-600/60 text-teal-200' : 'border-slate-100 text-slate-400'
                    }`}
                  >
                    <span>{m.timestamp}</span>
                    {m.role === 'user' && <CheckCheck className="w-3.5 h-3.5 text-emerald-300" />}
                    {m.role === 'ai' && (
                      <button
                        onClick={() => speakText(m.text)}
                        className="hover:text-teal-700 transition-colors flex items-center gap-0.5 ml-1"
                        title="Listen to Dr. Arya speak"
                      >
                        <Volume2 className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Interactive Suggestion Chips */}
                {m.chips && m.chips.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[90%]">
                    {m.chips.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(chip)}
                        className="px-3 py-1.5 rounded-full bg-white hover:bg-teal-50 text-teal-900 border border-teal-200 text-2xs font-bold transition-all shadow-2xs hover:border-teal-400 active:scale-95 text-left"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Live Typing Indicator */}
            {isTyping && (
              <div className="flex items-center gap-2 p-3.5 rounded-2xl bg-white border border-slate-200 w-fit shadow-xs animate-fade-in">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-slate-900 flex-shrink-0">
                  <img src="/dr_arya.jpg" alt="Typing" className="w-full h-full object-cover" />
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-slate-500 font-medium">Dr. Arya is analyzing</span>
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-bounce" />
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 bg-teal-600 rounded-full animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* 3. Input & Voice Console Bar */}
          <div className="p-3 sm:p-4 bg-white border-t border-slate-200 flex-shrink-0 space-y-2">
            
            <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex items-center gap-2">
              
              {/* Prescription Upload Button */}
              <button
                type="button"
                onClick={() => setRxScannerOpen(true)}
                className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors flex-shrink-0"
                title="Scan & Upload Prescription PDF"
              >
                <Paperclip className="w-4 h-4" />
              </button>

              {/* Text Input Field */}
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your symptoms or question in Marathi, Hindi or English..."
                className="flex-1 px-4 py-3 rounded-2xl bg-slate-50 border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 text-xs sm:text-sm font-medium outline-hidden"
              />

              {/* Microphone Voice Input */}
              <button
                type="button"
                onClick={toggleListening}
                className={`p-2.5 sm:p-3 rounded-2xl transition-all flex-shrink-0 ${
                  isListening
                    ? 'bg-rose-600 text-white animate-pulse'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
                title={isListening ? 'Listening... Speak now' : 'Speak into Microphone'}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4 text-teal-700" />}
              </button>

              {/* Send Button */}
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 sm:p-3 rounded-2xl bg-teal-700 hover:bg-teal-800 disabled:opacity-40 text-white transition-all shadow flex-shrink-0"
                title="Send Message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-between text-3xs text-slate-500 px-1">
              <span>🔒 100% HIPAA & ABDM Compliant · 24/7 Clinical Triage</span>
              <span>Emergency? Call <strong>108 / 112</strong></span>
            </div>

          </div>

        </div>

      </div>

      <PrescriptionScannerModal isOpen={rxScannerOpen} onClose={() => setRxScannerOpen(false)} />
    </div>
  )
}
