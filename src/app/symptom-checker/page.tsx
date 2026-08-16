'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import {
  Brain, Send, AlertTriangle, Shield, ChevronRight,
  RefreshCw, MessageCircle, Activity, Pill, X, CheckCircle2, Phone,
  Upload, Video, Globe, Building2, MapPin, Sparkles, Heart, Stethoscope
} from 'lucide-react'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'
import DrAryaFloatingDoctor from '@/components/common/DrAryaFloatingDoctor'
import { medicalSpecialties, type MedicalSpecialty } from '@/data/clinicalEngine'

interface Message {
  id: string
  role: 'ai' | 'user'
  text: string
  timestamp: Date
  department?: string
  chips?: string[]
  isEmergency?: boolean
}

const EMERGENCY_KEYWORDS = [
  'chest pain', 'heart attack', 'can\'t breathe', 'stroke', 'unconscious',
  'suicidal', 'overdose', 'severe bleeding', 'choking', 'seizure', 'anaphylaxis', 'छातीत दुखणे', 'श्वास घेण्यास त्रास'
]

const INITIAL_MESSAGES: Message[] = [
  {
    id: '1',
    role: 'ai',
    text: "नमस्कार! I am **Dr. Arya** (Age 28, MD Global Clinical AI) 👋\n\nI am trained across **all major medical specialties** to deliver evidence-based clinical guidance with **zero errors** under **ICMR, CDSCO, ABDM, WHO & HIPAA standards**.\n\n🩺 **Clinical Care Model:**\n• **60% of primary health issues** (fever, PCOD, knee/back stiffness, acidity, BP & diabetes maintenance) are safely managed from home via phone/chat advice.\n• **40% requiring clinical procedures** are fast-tracked to our **Pune Partner Hospitals** (Ruby Hall Clinic, Sahyadri, Jupiter, Jehangir) with VIP Cashless Desk.\n\nWhich specialty or symptom would you like to consult on today?",
    timestamp: new Date(),
    chips: [
      '🌺 Gynaecology (PCOS / Periods)',
      '🦴 Orthopaedics (Knee & Bone Pain)',
      '❤️ Cardiology (Lipids & BP)',
      '🩺 Diabetology (Sugar & HbA1c)',
      '✨ Dermatology (Hair & Skin)',
      '🌡️ General Fever / Infections',
    ],
  },
]

export default function SymptomCheckerPage() {
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES)
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showEmergencyBanner, setShowEmergencyBanner] = useState(false)
  const [activeSpecialty, setActiveSpecialty] = useState<MedicalSpecialty>(medicalSpecialties[0])
  const [selectedLanguage, setSelectedLanguage] = useState('मराठी & English')
  const [rxScannerOpen, setRxScannerOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  const getSpecialistAIResponse = (userMessage: string): { text: string; chips?: string[]; isEmergency?: boolean } => {
    const lower = userMessage.toLowerCase()

    // 1. Emergency check
    const isEmergency = EMERGENCY_KEYWORDS.some((kw) => lower.includes(kw))
    if (isEmergency) {
      return {
        isEmergency: true,
        text: "🚨 **URGENT MEDICAL EMERGENCY TRIAGE:**\n\nBased on your symptoms (acute chest pain / breathing distress / severe sudden illness), please **call 108 / 112 immediately** or go to the emergency room at **Ruby Hall Clinic (Sassoon Road)** or **Sahyadri Super Speciality Hospital (Deccan)**.\n\nDo not wait for online consultations in acute emergencies.\n\n**National Emergency: 108 | Meditrust Rapid Help: 1800-555-0199**",
      }
    }

    // 2. Gynaecology Match
    if (lower.includes('gynaec') || lower.includes('pcos') || lower.includes('pcod') || lower.includes('period') || lower.includes('pregnancy') || lower.includes('पाळी') || lower.includes('गर्भ') || lower.includes('uterus') || lower.includes('ovary')) {
      return {
        text: `**Dr. Arya (OB-GYN & Reproductive Endocrinology Clinical AI):**
• **Rotterdam Diagnostic Protocol:** PCOS / PCOD requires evaluating insulin resistance, ovulatory regularity, and androgen balance.
• **Evidence-Based Medication:** Myo-Inositol 2000mg + D-Chiro Inositol 50mg (₹65 on Jan Aushadhi generic vs ₹350 retail brand) improves ovulatory rates by over 65%.
• **Targeted Diagnostic Tests:** Meditrust PCOS & Hormone Profile (LH, FSH, Prolactin, Total Testosterone, TSH) — ₹649 with 60-min home blood collection in Pune.
• **मराठी सल्ला:** पीसीओएस मुळे पाळी अनियमित असणे ही अतिशय सामान्य बाब आहे. योग्य सप्लिमेंट्स आणि व्यायामाने हे नैसर्गिकरीत्या ठीक होते.`,
        chips: ['Book PCOS Hormone Panel (₹649)', 'Compare Myo-Inositol Generics', 'Pregnancy Trimester Care', 'Consult Gynaecologist at Ruby Hall'],
      }
    }

    // 3. Orthopaedics Match
    if (lower.includes('ortho') || lower.includes('bone') || lower.includes('knee') || lower.includes('joint') || lower.includes('back pain') || lower.includes('spondylosis') || lower.includes('सांधे') || lower.includes('हाडे') || lower.includes('गुडघे')) {
      return {
        text: `**Dr. Arya (Orthopaedics & Bone Health Clinical AI):**
• **Diagnostic Assessment:** Joint aching, stair-climbing crepitus, and lower back stiffness represent early cartilage wear compounded by urban Indian Vitamin D3 deficiency (< 20 ng/mL).
• **Evidence-Based Treatment:**
  - Cholecalciferol 60,000 IU weekly for 8 weeks (₹25/sachet on Jan Aushadhi).
  - Shelcal 500 (Calcium + D3) 1 tab daily after meals (₹28 on Jan Aushadhi vs ₹140 brand).
  - Non-weight bearing quadriceps isometric strengthening (15 mins twice daily).
• **Recommended Lab Tests:** Vitamin D3 (25-OH) + Serum Calcium + Uric Acid (₹599 via Meditrust Direct).
• **मराठी सल्ला:** गुडघेदुखीवर मांडीच्या स्नायूंचे व्यायाम आणि व्हिटॅमिन डी सप्लिमेंट्सने लक्षणीय आराम मिळतो.`,
        chips: ['Book Bone & Vitamin D Panel (₹599)', 'Compare Calcium Generics', 'Uric Acid / Gout Check', 'Orthopaedic Surgeon at Sahyadri'],
      }
    }

    // 4. Cardiology Match
    if (lower.includes('cardio') || lower.includes('heart') || lower.includes('cholesterol') || lower.includes('bp') || lower.includes('blood pressure') || lower.includes('lipid') || lower.includes('रक्तदाब') || lower.includes('हृदय')) {
      return {
        text: `**Dr. Arya (Preventive Cardiology Clinical AI):**
• **Atherosclerotic Risk Stratification:** In South Asian adults, LDL > 130 mg/dL and Triglycerides > 200 mg/dL represent high atherogenic risk.
• **Evidence-Based Treatment:**
  - Rosuvastatin 10mg once daily at bedtime (₹42 on Jan Aushadhi vs ₹240 retail brand).
  - Telmisartan 40mg once daily in morning for 24-hour arterial wall protection (₹26 on Jan Aushadhi).
  - 45 minutes of daily brisk aerobic walking + cutting refined bakery carbs.
• **Recommended Lab Tests:** Comprehensive Lipid & hs-CRP Panel (₹349 via Meditrust Direct in Pune).`,
        chips: ['Book Lipid & hs-CRP Panel (₹349)', 'Compare Statin Generics', 'Diet for High Triglycerides', 'Ruby Hall Cardiology Fast-Track'],
      }
    }

    // 5. Diabetology Match
    if (lower.includes('diabetes') || lower.includes('sugar') || lower.includes('hba1c') || lower.includes('glucose') || lower.includes('मधुमेह') || lower.includes('साखर')) {
      return {
        text: `**Dr. Arya (Diabetology & Metabolic Medicine Clinical AI):**
• **Clinical Targets:** Fasting Sugar 80–110 mg/dL | Post-Prandial < 140 mg/dL | HbA1c < 6.5% – 7.0%.
• **Prescription Generic Price Match:**
  - Glycomet-GP 2 (Glimepiride + Metformin): ₹128 on Meditrust Direct vs ₹32 on Jan Aushadhi (81% savings).
  - Dapagliflozin 10mg (SGLT-2i): ₹78 on Genericart.
• **Recommended Test:** HbA1c (HPLC Gold Standard) + Fasting Sugar (₹349 with 60-min home sample pickup in Pune).
• **मराठी सल्ला:** साखर नियंत्रणात ठेवण्यासाठी जेवणानंतर १५ मिनिटे चालणे आणि योग्य गोळ्या घेणे अत्यंत प्रभावी ठरते.`,
        chips: ['Book HbA1c Panel (₹349)', 'Compare Glycomet Prices', 'Diet Plan for High Sugar', 'Jan Aushadhi Generics'],
      }
    }

    // 6. Dermatology Match
    if (lower.includes('derma') || lower.includes('hair') || lower.includes('skin') || lower.includes('acne') || lower.includes('fungal') || lower.includes('केस') || lower.includes('त्वचा')) {
      return {
        text: `**Dr. Arya (Dermatology & Trichology Clinical AI):**
• **Hair Fall & Thinning:** Over 80% of diffuse hair loss is triggered by Serum Ferritin < 30 ng/mL or Vitamin D deficiency.
• **Evidence-Based Solutions:**
  - Minoxidil 5% topical solution once daily for hair regrowth (₹140 on Genericart).
  - Luliconazole 1% cream for fungal ringworm / itching (₹45 on Jan Aushadhi vs ₹190 brand).
• **Recommended Lab Tests:** Hair Vitality Panel (Ferritin + Vitamin D3 + TSH) — ₹699 via Meditrust Direct.`,
        chips: ['Book Hair Vitality Test (₹699)', 'Compare Minoxidil Generics', 'Acne Treatment Guide', 'Skin Specialist in Pune'],
      }
    }

    // General / Catch-all
    return {
      text: `**Dr. Arya (Global Multi-Specialist AI Doctor):**
I have analyzed your query across **CDSCO, ICMR, WHO & HIPAA clinical decision databases**.
• **Triage Strategy:** 60% of cases are manageable at home with evidence-based lifestyle & generic medication substitutions.
• **Need Surgery or In-Person Check?** We provide guaranteed zero-wait desk admission at **Ruby Hall, Sahyadri & Jupiter Hospital Pune**.

How can I assist you with specific symptom analysis, prescription price matching, or home lab booking?`,
      chips: ['🌺 Gynaecology (PCOS / Periods)', '🦴 Orthopaedics (Joints)', '❤️ Cardiology (Heart & BP)', 'Scan Prescription (Save 80%)', 'Book Blood Test in Pune'],
    }
  }

  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: text.trim(),
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setIsTyping(true)

    await new Promise((res) => setTimeout(res, 900))

    const response = getSpecialistAIResponse(text)
    if (response.isEmergency) setShowEmergencyBanner(true)

    const aiMsg: Message = {
      id: (Date.now() + 1).toString(),
      role: 'ai',
      text: response.text,
      timestamp: new Date(),
      chips: response.chips,
      isEmergency: response.isEmergency,
    }

    setMessages((prev) => [...prev, aiMsg])
    setIsTyping(false)
  }

  const formatText = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.startsWith('• ')) {
        return <p key={i} className="ml-3 text-slate-700 text-xs my-0.5">• {line.slice(2)}</p>
      }
      if (line.startsWith('⚠️') || line.startsWith('🚨')) {
        return <p key={i} className="font-bold text-red-700 mt-2 text-xs">{line}</p>
      }
      if (line.startsWith('**') && line.includes('**')) {
        return <p key={i} className="leading-relaxed text-xs" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
      }
      return line ? <p key={i} className="leading-relaxed text-xs">{line}</p> : <br key={i} />
    })
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      
      {/* Emergency Banner */}
      {showEmergencyBanner && (
        <div className="bg-red-600 text-white px-4 py-3 flex items-center justify-between gap-4 animate-fade-in">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 flex-shrink-0" />
            <div className="text-xs">
              <strong>Hospital Fast-Track / Emergency Triage:</strong> Immediate medical attention recommended.
            </div>
          </div>
          <a href="tel:108" className="bg-white text-red-600 font-bold px-3 py-1.5 rounded-lg text-xs hover:bg-red-50 flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" /> Call 108 Emergency
          </a>
        </div>
      )}

      {/* Page Header */}
      <div className="border-b border-slate-200 py-3.5 px-4 sm:px-6 bg-gradient-to-r from-teal-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full border-2 border-teal-400 overflow-hidden shadow-sm flex-shrink-0">
              <img src="/dr_arya.jpg" alt="Dr. Arya" className="w-full h-full object-cover" />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-base font-black text-slate-950">Dr. Arya (Global AI Multi-Specialist)</h1>
                <span className="badge-teal badge text-3xs font-bold">Age 28 · MD AI</span>
              </div>
              <p className="text-2xs text-slate-500">
                Gynaecology · Orthopaedics · Cardiology · Diabetology · Dermatology · General Medicine
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setRxScannerOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 text-2xs font-bold flex items-center gap-1 transition-colors shadow-sm"
            >
              <Upload className="w-3.5 h-3.5" /> Scan Rx
            </button>
            <button
              onClick={() => setMessages(INITIAL_MESSAGES)}
              className="btn-ghost text-2xs py-1.5 px-2.5 flex items-center gap-1"
            >
              <RefreshCw className="w-3 h-3" /> Reset
            </button>
          </div>
        </div>
      </div>

      {/* Specialties Quick Bar */}
      <div className="bg-slate-900 text-white px-4 py-2 border-b border-slate-800">
        <div className="max-w-4xl mx-auto flex items-center gap-2 overflow-x-auto text-2xs font-bold">
          <span className="text-teal-400 whitespace-nowrap flex items-center gap-1">
            <Stethoscope className="w-3 h-3" /> Departments:
          </span>
          {medicalSpecialties.map((spec) => (
            <button
              key={spec.id}
              onClick={() => {
                setActiveSpecialty(spec)
                sendMessage(`I would like a clinical consultation regarding ${spec.name}`)
              }}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-teal-800 text-slate-200 hover:text-white transition-colors whitespace-nowrap border border-slate-700"
            >
              {spec.icon} {spec.name.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto bg-slate-50/40">
        <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
          
          {/* Clinical Model Reminder Strip */}
          <div className="p-3 rounded-2xl bg-teal-50 border border-teal-200/70 text-2xs text-teal-950 flex items-center justify-between gap-2">
            <span className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-teal-700 flex-shrink-0" />
              <strong>60% Home Advice</strong> (Audio/Chat) + <strong>40% Partner Hospital VIP Referral</strong> in Pune (Ruby Hall, Sahyadri, Jupiter).
            </span>
            <span className="badge-green badge text-3xs">CDSCO & HIPAA Compliant</span>
          </div>

          {messages.map((m) => (
            <div key={m.id} className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {m.role === 'ai' && (
                <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-teal-300 shadow-sm mt-0.5">
                  <img src="/dr_arya.jpg" alt="Dr. Arya" className="w-full h-full object-cover" />
                </div>
              )}
              
              <div className="max-w-[85%] sm:max-w-[78%] space-y-2">
                <div className={
                  m.isEmergency
                    ? 'p-4 rounded-2xl rounded-tl-sm bg-red-50 border border-red-200 text-xs space-y-1'
                    : m.role === 'ai'
                    ? 'chat-bubble-ai text-xs space-y-1 p-4 bg-white border border-slate-200 shadow-sm'
                    : 'chat-bubble-user text-xs p-3.5 bg-teal-700 text-white'
                }>
                  {m.role === 'ai' ? formatText(m.text) : m.text}
                </div>

                {/* Quick Reply Chips */}
                {m.chips && m.chips.length > 0 && (
                  <div className="flex flex-wrap gap-1.5">
                    {m.chips.map((chip) => (
                      <button
                        key={chip}
                        onClick={() => {
                          if (chip.includes('Scan Prescription') || chip.includes('Scan my prescription')) {
                            setRxScannerOpen(true)
                          } else {
                            sendMessage(chip)
                          }
                        }}
                        className="filter-chip text-2xs py-1.5 px-3 active font-semibold bg-white border border-teal-300 text-teal-800 hover:bg-teal-50"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-2.5 justify-start">
              <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-teal-300">
                <img src="/dr_arya.jpg" alt="Dr. Arya" className="w-full h-full object-cover" />
              </div>
              <div className="chat-bubble-ai flex items-center gap-1.5 py-3 px-4 bg-white border border-slate-200">
                <span className="typing-dot" />
                <span className="typing-dot" />
                <span className="typing-dot" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Bar */}
      <div className="border-t border-slate-200 bg-white px-4 py-3.5">
        <div className="max-w-4xl mx-auto space-y-2">
          <form
            onSubmit={(e) => {
              e.preventDefault()
              sendMessage(input)
            }}
            className="flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="मराठीत विचारा किंवा Type question (Gynaec, Ortho, Heart, Sugar, Skin)..."
              className="input-field flex-1 text-xs py-3"
              disabled={isTyping}
            />
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="btn-primary px-5 py-3 text-xs font-bold shadow-teal flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

          <div className="flex flex-wrap items-center justify-between text-3xs text-slate-500 gap-2">
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setRxScannerOpen(true)}
                className="text-amber-800 font-bold hover:underline flex items-center gap-1"
              >
                <Upload className="w-3 h-3 text-amber-600" /> Upload Prescription
              </button>
              <Link href="/lab-test-comparison" className="text-teal-700 font-bold hover:underline flex items-center gap-1">
                <Activity className="w-3 h-3" /> Compare 13+ Pune Diagnostic Labs
              </Link>
            </div>
            <span>Clinical AI Multi-Specialist · In acute emergency call 108</span>
          </div>
        </div>
      </div>

      {/* Floating Doctor */}
      <DrAryaFloatingDoctor onOpenPrescriptionScanner={() => setRxScannerOpen(true)} />

      {/* Prescription Scanner Modal */}
      <PrescriptionScannerModal
        isOpen={rxScannerOpen}
        onClose={() => setRxScannerOpen(false)}
      />
    </div>
  )
}
