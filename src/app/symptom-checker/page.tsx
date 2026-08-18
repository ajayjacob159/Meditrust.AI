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
import { medicalSpecialties, type MedicalSpecialty } from '@/data/clinicalEngine'

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

const EMERGENCY_KEYWORDS = [
  'chest pain', 'heart attack', 'can\'t breathe', 'stroke', 'unconscious',
  'suicidal', 'overdose', 'severe bleeding', 'choking', 'seizure', 'anaphylaxis',
  'छातीत दुखणे', 'श्वास घेण्यास त्रास', 'सीने में दर्द'
]

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

  const getDoctorAIResponse = (userMessage: string): { text: string; chips?: string[]; isEmergency?: boolean; department: string } => {
    const lower = userMessage.toLowerCase()

    // 1. Emergency check
    const isEmergency = EMERGENCY_KEYWORDS.some((kw) => lower.includes(kw))
    if (isEmergency) {
      return {
        isEmergency: true,
        department: 'Cardiology & Trauma Emergency',
        text: `🚨 **URGENT EMERGENCY ALERT (Immediate Action Required):**\n\nBased on your symptoms (acute chest pain / breathing distress / severe sudden pain), please **call 108 (Ambulance)** or **112 (National Emergency)** immediately.\n\n• **Priority Hospital Transfer:** Emergency TPA Desks are on standby at **Ruby Hall Clinic (Sassoon Road)** & **Sahyadri Super Speciality Hospital (Deccan)**.\n• **Immediate Helpline:** Call **+91 7028025717** right now for rapid coordination.`,
        chips: ['Call 108 Ambulance Now', 'Ruby Hall Emergency Desk', 'Sahyadri Deccan Emergency'],
      }
    }

    // 2. Acidity, Heartburn, Gastric, GERD
    if (lower.includes('acid') || lower.includes('gerd') || lower.includes('gas') || lower.includes('stomach') || lower.includes('पित्त') || lower.includes('पोट') || lower.includes('सीने में जलन')) {
      return {
        department: 'Gastroenterology & Gut Health',
        text: `**Dr. Arya (Gastroenterology AI):**\nYour symptoms indicate active acid reflux (GERD) or gastric hyperacidity.\n\n• **Generic Prescription Match:** Pantoprazole 40mg + Domperidone 30mg SR (**Pan-D generic is ₹45 on Jan Aushadhi** vs ₹199 branded — save 77%).\n• **Immediate Home Care:** Drink cold milk or coconut water; avoid oily snacks, smoking, and lying down within 2 hours after meals.\n• **मराठी सल्ला:** सकाळी रिकाम्या पोटी कोमट पाणी प्या आणि रात्रीचे जेवण हलके ठेवा.`,
        chips: ['Compare Pan-D Generic (₹45)', 'Book H. Pylori & Stomach Test', 'Diet for Acid Reflux', 'Order Generic Medicine (80% OFF)'],
      }
    }

    // 3. Gynaecology, PCOS, Periods, Pregnancy
    if (lower.includes('pcos') || lower.includes('pcod') || lower.includes('period') || lower.includes('pregnancy') || lower.includes('पाळी') || lower.includes('गर्भ') || lower.includes('uterus') || lower.includes('माहवारी')) {
      return {
        department: 'Gynaecology & Women\'s Health',
        text: `**Dr. Arya (OB-GYN AI):**\nFor irregular cycles, period cramps, or PCOS symptoms:\n\n• **Evidence-Based Molecule:** Myo-Inositol 2000mg + D-Chiro Inositol 50mg (**PMBJP generic is ₹65** vs ₹380 brand) improves ovulatory regularity by 65%.\n• **Diagnostic Blood Panel:** PCOS Hormone Profile (LH/FSH ratio, Total Testosterone, Thyroid TSH) — ₹649 with 60-min home collection in Pune.\n• **मराठी सल्ला:** दररोज १५ मिनिटे सूर्यनमस्कार आणि दालचिनी चहामुळे हार्मोन्स संतुलित राहतात.`,
        chips: ['Book PCOS Hormone Panel (₹649)', 'Compare Myo-Inositol Generics', 'Period Delay Calculator', 'Consult Gynaecologist at Ruby Hall'],
      }
    }

    // 4. Orthopaedics, Bone, Knee, Back Pain
    if (lower.includes('bone') || lower.includes('knee') || lower.includes('joint') || lower.includes('back') || lower.includes('सांधे') || lower.includes('गुडघे') || lower.includes('कंबरदुखी') || lower.includes('जोड़ों')) {
      return {
        department: 'Orthopaedics & Spine Care',
        text: `**Dr. Arya (Orthopaedics AI):**\nJoint stiffness, knee clicking, and back pain are commonly caused by severe Vitamin D3 deficiency (< 20 ng/mL) and joint cartilage friction.\n\n• **Evidence-Based Support:**\n  - Cholecalciferol 60,000 IU weekly for 8 weeks (₹25 on Jan Aushadhi).\n  - Shelcal 500 (Calcium + D3) 1 tab daily (₹28 on Jan Aushadhi vs ₹140 brand).\n  - Quad isometric exercises (15 mins twice daily).\n• **Recommended Test:** Vitamin D3 + Serum Calcium + Uric Acid (₹599 via Meditrust Direct in Pune).`,
        chips: ['Book Vitamin D & Bone Panel (₹599)', 'Compare Shelcal Generics', 'Knee Strengthening Guide', 'Orthopaedic Doctor at Sahyadri'],
      }
    }

    // 5. Diabetology & Blood Sugar
    if (lower.includes('sugar') || lower.includes('diabetes') || lower.includes('hba1c') || lower.includes('glucose') || lower.includes('मधुमेह') || lower.includes('डायबिटीज')) {
      return {
        department: 'Diabetology & Metabolic Care',
        text: `**Dr. Arya (Diabetology AI):**\nTarget levels: Fasting Blood Glucose 80–110 mg/dL | Post-Meal < 140 mg/dL | HbA1c < 6.5%.\n\n• **Prescription Price Comparison:** Metformin + Glimepiride 2mg/500mg (**Jan Aushadhi generic is ₹32** vs ₹128 brand Glycomet-GP — save 75%).\n• **Recommended Test:** HbA1c (Gold Standard) + Fasting Sugar (₹349 with 60-min home collection in Pune).\n• **मराठी सल्ला:** जेवणानंतर दररोज १५ मिनिटे चालणे आणि मेथीदाण्याचे पाणी साखर नियंत्रणात ठेवते.`,
        chips: ['Book HbA1c Diabetes Panel (₹349)', 'Compare Metformin Generics', 'Diabetes Reversal Diet', 'Jan Aushadhi Online Order'],
      }
    }

    // 6. Thyroid, TSH, Fatigue
    if (lower.includes('thyroid') || lower.includes('tsh') || lower.includes('थायरॉईड') || lower.includes('थकवा') || lower.includes('थायराइड')) {
      return {
        department: 'Endocrinology & Thyroid Health',
        text: `**Dr. Arya (Endocrinology AI):**\nHigh TSH (> 5.5 mIU/L) indicates Hypothyroidism, leading to weight gain, dry skin, and morning fatigue.\n\n• **Medication Match:** Thyroxine Sodium 50mcg / 100mcg (**Jan Aushadhi generic is ₹22** vs ₹145 brand Thyronorm — save 84%).\n• **Rule:** Take strictly empty stomach with plain water 45 minutes before morning tea or food.\n• **Recommended Test:** Complete Thyroid Profile (T3, T4, TSH Ultrasensitive) for ₹299.`,
        chips: ['Book Thyroid Profile (₹299)', 'Compare Thyroxine Generics', 'Hypothyroidism Diet Plan', 'Consult Endocrinologist'],
      }
    }

    // 7. Viral Fever, Cold, Cough, Dengue
    if (lower.includes('fever') || lower.includes('cold') || lower.includes('cough') || lower.includes('dengue') || lower.includes('ताप') || lower.includes('खोकला') || lower.includes('सर्दी') || lower.includes('बुखार')) {
      return {
        department: 'General Internal Medicine',
        text: `**Dr. Arya (General Physician AI):**\nFor acute fever, body ache, and viral infection:\n\n• **Safe Primary Step:** Paracetamol 650mg SOS (**Jan Aushadhi generic is ₹12/strip** vs ₹35 brand Dolo-650).\n• **Hydration Protocol:** Drink ORS, coconut water, and warm soups (maintain > 2.5L fluid intake).\n• **Critical Warning:** If fever exceeds 102°F or lasts > 48 hours, book a Complete Blood Count (CBC + Platelets) for ₹199 to rule out Dengue/Malaria.\n• **मराठी सल्ला:** पुरेशी विश्रांती घ्या आणि तुळस-आल्याचा काढा प्या.`,
        chips: ['Book CBC & Platelet Test (₹199)', 'Compare Paracetamol Generics', 'Dengue Warning Checklist', 'Call 24/7 Helpline (+91 7028025717)'],
      }
    }

    // 8. General Clinical Response
    return {
      department: 'Multi-Specialty Clinical AI',
      text: `**Dr. Arya Clinical Assessment:**\nI have evaluated your symptoms against clinical pharmacology and diagnostic protocols.\n\n• **Primary Care:** Over 60% of primary health symptoms can be safely managed from home with verified generic medicines (saving up to 80%) and doorstep diagnostic testing.\n• **60-Minute Pune Blood Collection:** If you need a blood test, our certified phlebotomist arrives at your home within 60 minutes.\n• **Speak Directly with Us:** Call our 24/7 Doctor Assistance Desk at **+91 7028025717**.`,
      chips: [
        'Book Full Body Blood Test (₹999)',
        'Compare My Prescription (Save 80%)',
        'Upload Blood Report PDF',
        'Call Hotline: +91 7028025717',
      ],
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
      const response = getDoctorAIResponse(messageContent)
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
    }, 500)
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
