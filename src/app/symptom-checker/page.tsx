'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  Send, Shield, RefreshCw, MessageCircle, Activity, Pill, X, Check,
  CheckCheck, Phone, Video, MoreVertical, Paperclip, Smile, Mic, MicOff,
  Calendar, Baby, HeartPulse, FileText, UserCheck, Stethoscope, Lock,
  ChevronLeft, Info, ExternalLink, Image as ImageIcon, FileUp, Sparkles,
  Volume2, VolumeX, AlertCircle, Heart, ArrowRight, ShieldCheck
} from 'lucide-react'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'
import { evaluateClinicalQuery, UserHealthGraph } from '@/data/clinicalReasoningEngine'

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

const QUICK_SUGGESTIONS = [
  '🌸 Late Period / Delayed Cycle',
  '🤰 Am I Pregnant? (Early Signs)',
  '🩺 PCOS Acne & Weight Plan',
  '🩸 Is My Period Normal? (Teen)',
  '🤱 Postpartum Recovery & Bleeding',
  '🌸 Hot Flashes & Perimenopause',
  '🎗️ Period Cramps vs Endometriosis',
  '💊 Compare Generic Medicine (80% OFF)',
]

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
    timestamp: '10:42 am',
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
  const [attachMenuOpen, setAttachMenuOpen] = useState(false)
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
    utterance.rate = 0.96
    utterance.pitch = 1.18

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

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toLowerCase()
    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: messageContent,
      timestamp: now,
    }

    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setAttachMenuOpen(false)
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
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }).toLowerCase(),
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
    <div className="min-h-[100dvh] bg-[#d1d7db] flex flex-col justify-between items-center sm:py-4">
      
      {/* ── WHATSAPP WEB SHELL CONTAINER ── */}
      <div className="w-full max-w-4xl bg-[#efeae2] sm:rounded-3xl shadow-2xl border-0 sm:border border-slate-300 overflow-hidden flex flex-col h-[100dvh] sm:h-[90vh] relative">
        
        {/* ── 1. AUTHENTIC WHATSAPP TOP APP BAR ── */}
        <header className="bg-[#008069] text-white px-3 sm:px-4 py-2.5 flex items-center justify-between shadow-md z-20 flex-shrink-0 pt-[max(0.6rem,env(safe-area-inset-top))] sm:pt-2.5">
          
          {/* Left: Back & Doctor Avatar + Status */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/womens-health"
              className="p-1 -ml-1 hover:bg-[#006e5a] rounded-full transition-colors active:scale-95"
              title="Back to Women's Health Portal"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </Link>

            <div className="relative cursor-pointer active:scale-95 transition-transform" onClick={() => setLmpModalOpen(true)}>
              <div className="w-10 h-10 rounded-full bg-white/20 border border-white/40 flex items-center justify-center text-xl overflow-hidden shadow-inner">
                🌸
              </div>
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25d366] border-2 border-[#008069] rounded-full" />
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-sm sm:text-base leading-tight tracking-tight text-white">
                  Dr. Arya
                </span>
                <span className="w-4 h-4 rounded-full bg-white text-[#008069] flex items-center justify-center text-[10px] font-black" title="Verified Meditrust AI Physician">
                  ✓
                </span>
                <span className="hidden sm:inline-block text-[10px] bg-white/20 px-2 py-0.2 rounded-full font-medium text-emerald-100">
                  OB-GYN AI
                </span>
              </div>
              
              <div className="text-[11px] text-emerald-100/90 font-normal flex items-center gap-1 leading-none">
                {isTyping ? (
                  <span className="text-emerald-200 font-medium animate-pulse">typing…</span>
                ) : (
                  <span>online · Meditrust Clinical Network</span>
                )}
              </div>
            </div>
          </div>

          {/* Right: WhatsApp Actions (Call, WhatsApp App, Audio, Lang) */}
          <div className="flex items-center gap-1 sm:gap-2">
            
            {/* Language Selector Dropdown */}
            <select
              value={selectedLanguage}
              onChange={(e) => setSelectedLanguage(e.target.value as any)}
              className="bg-[#006e5a] text-white text-xs font-semibold px-2 py-1.5 rounded-lg border-0 focus:outline-none cursor-pointer"
            >
              <option value="en">EN</option>
              <option value="hi">हिन्दी</option>
              <option value="mr">मराठी</option>
            </select>

            {/* Voice Audio Speaker Toggle */}
            <button
              onClick={() => setSpeechEnabled(!speechEnabled)}
              className={`p-2 rounded-full transition-colors ${
                speechEnabled ? 'bg-white/30 text-white' : 'text-white/80 hover:bg-[#006e5a]'
              }`}
              title={speechEnabled ? 'Voice read-aloud active' : 'Voice read-aloud muted'}
            >
              {speechEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Direct Phone Call */}
            <a
              href="tel:+917028025717"
              className="p-2 text-white/90 hover:bg-[#006e5a] rounded-full transition-colors active:scale-95"
              title="Call Meditrust Doctor Desk (+91 7028025717)"
            >
              <Phone className="w-4 h-4" />
            </a>

            {/* Open in Official WhatsApp App */}
            <a
              href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#25d366] hover:bg-[#20bd5a] text-[#075e54] font-bold text-xs shadow-xs transition-colors active:scale-95"
              title="Switch to WhatsApp Mobile App"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>

        </header>

        {/* ── 2. WHATSAPP CHAT WALLPAPER & MESSAGE THREAD ── */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-5 space-y-3 relative bg-[#efeae2] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:16px_16px] touch-pan-y overscroll-contain">
          
          {/* Security Banner / End-to-End Encryption Pill */}
          <div className="flex justify-center my-1.5">
            <div className="bg-[#ffeecd] border border-[#ffdf9e] text-[#54656f] text-[11px] sm:text-xs rounded-xl px-3.5 py-1.5 text-center max-w-md shadow-2xs leading-relaxed flex items-center justify-center gap-1.5">
              <Lock className="w-3.5 h-3.5 text-[#856404] flex-shrink-0" />
              <span>
                <strong>End-to-End Encrypted.</strong> Messages &amp; health logs are private with 256-bit AES &amp; ABDM compliance.
              </span>
            </div>
          </div>

          {/* Date Separator Pill */}
          <div className="flex justify-center my-1">
            <span className="bg-white/80 text-[#54656f] text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-md shadow-2xs border border-slate-200/60">
              TODAY
            </span>
          </div>

          {/* Active Health Graph Pill if LMP is logged */}
          {userGraph.LMP && (
            <div className="flex justify-center my-1">
              <div className="bg-[#e7fce3] border border-[#c3f7bd] text-[#1b5e20] text-[11px] rounded-full px-3.5 py-1 font-semibold flex items-center gap-1.5 shadow-2xs">
                <span>🌸 LMP Logged: <strong>{userGraph.LMP}</strong></span>
                {userGraph.age && <span>· Age: <strong>{userGraph.age}</strong></span>}
                <button
                  onClick={() => setLmpModalOpen(true)}
                  className="text-[10px] underline ml-1 text-emerald-800 font-bold hover:text-emerald-950"
                >
                  Edit
                </button>
              </div>
            </div>
          )}

          {/* Messages Loop */}
          {messages.map((msg) => {
            const isUser = msg.role === 'user'
            return (
              <div
                key={msg.id}
                className={`flex w-full ${isUser ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                <div
                  className={`relative max-w-[92%] sm:max-w-[78%] rounded-2xl px-3.5 py-2.5 sm:px-4 sm:py-3 shadow-[0_1px_0.5px_rgba(11,20,26,0.13)] ${
                    isUser
                      ? 'bg-[#d9fdd3] text-[#111b21] rounded-tr-xs'
                      : msg.isEmergency
                      ? 'bg-[#fff0f0] border-2 border-red-500 text-slate-950 rounded-tl-xs'
                      : 'bg-white text-[#111b21] rounded-tl-xs'
                  }`}
                >
                  {/* Sender Header for Doctor Messages */}
                  {!isUser && (
                    <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-1 mb-1.5">
                      <div className="flex items-center gap-1 text-[11px] font-bold text-[#008069]">
                        <span>~ Dr. Arya</span>
                        <span className="text-[10px] text-slate-400 font-normal truncate max-w-[140px]">
                          ({msg.department || "Women's Health AI"})
                        </span>
                      </div>
                      {msg.stageDetected && (
                        <span className="text-[9px] bg-rose-50 text-rose-700 font-bold px-2 py-0.5 rounded-full border border-rose-200 flex-shrink-0">
                          {msg.stageDetected}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Message Body Content */}
                  <div className="text-xs sm:text-[13px] leading-relaxed whitespace-pre-line text-slate-800">
                    {msg.text}
                  </div>

                  {/* WhatsApp-Style Interactive Action Buttons / Chips */}
                  {msg.chips && msg.chips.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-2.5 mt-1 border-t border-slate-100/90">
                      {msg.chips.map((chip, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSendMessage(chip.replace(/^[^\w\s]+/, '').trim())}
                          className="px-3 py-1.5 rounded-xl text-3xs sm:text-2xs font-semibold bg-[#f0f2f5] hover:bg-[#e4e6eb] text-[#008069] border border-slate-200/80 shadow-2xs hover:border-[#008069] transition-all text-left flex items-center gap-1 active:scale-95"
                        >
                          <span>{chip}</span>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Message Metadata (Timestamp + Blue Double Ticks for User) */}
                  <div className="flex items-center justify-end gap-1 mt-1 text-[10px] text-[#667781] font-mono select-none">
                    <span>{msg.timestamp}</span>
                    {isUser && (
                      <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb] ml-0.5 inline-block" />
                    )}
                  </div>

                </div>
              </div>
            )
          })}

          {/* WhatsApp Realistic Typing Indicator Bubble */}
          {isTyping && (
            <div className="flex justify-start animate-fadeIn">
              <div className="bg-white rounded-2xl rounded-tl-xs px-4 py-2.5 shadow-xs flex items-center gap-2">
                <span className="text-[11px] text-[#008069] font-medium">Dr. Arya is typing</span>
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#008069] animate-bounce [animation-delay:0s]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#008069] animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#008069] animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* ── 3. HORIZONTAL 1-TAP QUICK QUESTIONS (SWIPEABLE) ── */}
        <div className="bg-[#f0f2f5] px-2.5 py-1.5 border-t border-slate-200 flex items-center gap-1.5 overflow-x-auto scrollbar-none text-3xs font-semibold text-slate-700 flex-shrink-0">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider flex-shrink-0 pl-1">
            Tap to Ask:
          </span>
          {QUICK_SUGGESTIONS.map((sug, i) => (
            <button
              key={i}
              onClick={() => handleSendMessage(sug.replace(/^[^\w\s]+/, '').trim())}
              className="px-2.5 py-1 rounded-full bg-white border border-slate-300 hover:border-[#008069] hover:text-[#008069] whitespace-nowrap shadow-2xs transition-colors active:scale-95"
            >
              {sug}
            </button>
          ))}
        </div>

        {/* ── 4. AUTHENTIC WHATSAPP BOTTOM INPUT BAR ── */}
        <footer className="bg-[#f0f2f5] px-2 sm:px-3 py-2 flex items-center gap-1.5 sm:gap-2 flex-shrink-0 relative pb-[max(0.5rem,env(safe-area-inset-bottom))] sm:pb-2">
          
          {/* Paperclip / Attachment Launcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setAttachMenuOpen(!attachMenuOpen)}
              className={`p-2 sm:p-2.5 rounded-full transition-colors active:scale-95 ${
                attachMenuOpen ? 'bg-slate-300 text-slate-800' : 'text-[#54656f] hover:bg-slate-200'
              }`}
              title="Attach document / tool"
            >
              <Paperclip className="w-5 h-5" />
            </button>

            {/* WhatsApp Attachment Popover Menu */}
            {attachMenuOpen && (
              <div className="absolute bottom-12 left-0 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 w-52 space-y-1 z-30 animate-fadeIn text-xs font-semibold text-slate-700">
                <button
                  onClick={() => {
                    setAttachMenuOpen(false)
                    setRxScannerOpen(true)
                  }}
                  className="w-full p-2 hover:bg-slate-50 rounded-xl flex items-center gap-2.5 text-left"
                >
                  <FileUp className="w-4 h-4 text-blue-600" />
                  <span>Upload Lab Report / PDF</span>
                </button>
                <button
                  onClick={() => {
                    setAttachMenuOpen(false)
                    setLmpModalOpen(true)
                  }}
                  className="w-full p-2 hover:bg-slate-50 rounded-xl flex items-center gap-2.5 text-left"
                >
                  <Calendar className="w-4 h-4 text-rose-600" />
                  <span>Log LMP / Cycle Info</span>
                </button>
                <Link
                  href="/womens-health#interactive-tools"
                  onClick={() => setAttachMenuOpen(false)}
                  className="w-full p-2 hover:bg-slate-50 rounded-xl flex items-center gap-2.5 text-left text-purple-700"
                >
                  <Baby className="w-4 h-4 text-purple-600" />
                  <span>Ovulation &amp; EDD Tools</span>
                </Link>
                <a
                  href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-2 hover:bg-slate-50 rounded-xl flex items-center gap-2.5 text-left text-emerald-700 border-t border-slate-100 pt-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Open in WhatsApp App</span>
                </a>
              </div>
            )}
          </div>

          {/* Text Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSendMessage()
            }}
            className="flex-1 flex items-center gap-1.5 sm:gap-2"
          >
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Message Dr. Arya…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="w-full pl-4 pr-10 py-2.5 sm:py-3 rounded-full bg-white border border-transparent focus:border-[#008069] focus:outline-none text-xs sm:text-sm text-[#111b21] placeholder:text-[#8696a0] shadow-2xs"
              />
            </div>

            {/* Voice Recording / Microphone Button */}
            <button
              type="button"
              onClick={toggleListening}
              className={`p-2.5 sm:p-3 rounded-full transition-all active:scale-95 ${
                isListening
                  ? 'bg-rose-600 text-white animate-pulse shadow-md'
                  : 'text-[#54656f] hover:bg-slate-200 bg-white sm:bg-transparent'
              }`}
              title="Voice recording"
            >
              {isListening ? <Mic className="w-5 h-5" /> : <MicOff className="w-5 h-5" />}
            </button>

            {/* WhatsApp Green Send Button */}
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2.5 sm:p-3 rounded-full bg-[#00a884] hover:bg-[#008f6f] disabled:bg-slate-300 text-white font-bold transition-all shadow-md flex-shrink-0 flex items-center justify-center active:scale-95"
              title="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </footer>

      </div>

      {/* ── SET LMP & AGE MODAL (POPUP) ── */}
      {lmpModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full border border-slate-200 shadow-2xl space-y-4 animate-scaleUp">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#008069]" />
                <h3 className="font-bold text-sm text-slate-950">Set Your LMP &amp; Age for Dr. Arya</h3>
              </div>
              <button
                onClick={() => setLmpModalOpen(false)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Logging your Last Menstrual Period (LMP) allows Dr. Arya to accurately compute your ovulation windows, cycle regularities, and pregnancy trimester milestones in chat.
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
                  placeholder="e.g. 25"
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
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-[#008069] hover:bg-[#006e5a] text-white shadow-xs"
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
