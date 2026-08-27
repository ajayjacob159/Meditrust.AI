'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  MessageCircle, Send, Sparkles, ShieldCheck, CheckCircle2,
  Clock, Heart, Copy, Check, ExternalLink, ArrowRight, Phone,
  FileText, Activity, Zap, Building2, ChevronRight, AlertTriangle,
  QrCode, Terminal, Layers, RefreshCw
} from 'lucide-react'

interface ChatMessage {
  id: string
  sender: 'user' | 'bot'
  text: string
  time: string
  actions?: Array<{ label: string; url?: string }>
  isEmergency?: boolean
}

export default function SakhiBotHubPage() {
  const [platformSkin, setPlatformSkin] = useState<'whatsapp' | 'telegram'>('whatsapp')
  const [copiedKey, setCopiedKey] = useState<string | null>(null)
  
  // Interactive Simulator State
  const [inputText, setInputText] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text:
        'Namaste! 🙏 I am *Dr. Arya*, your 24/7 AI Health Companion on Meditrust AI.\n\n' +
        'Ask me anything about irregular periods, PCOS, pregnancy scans, blood reports (Hb/Ferritin), or Jan Aushadhi 80% generic savings in Marathi, Hindi & English.',
      time: '12:00 PM',
      actions: [
        { label: '🩸 Menstrual Health', url: 'https://www.meditrustai.in/womens-health#menstrual-health' },
        { label: '🌸 PCOS Guide', url: 'https://www.meditrustai.in/womens-health/blood-tests/pcos-hormone-blood-test-list-india' },
        { label: '💊 Jan Aushadhi -80%', url: 'https://www.meditrustai.in/medication-comparison' },
      ],
    },
  ])

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 2000)
  }

  const handleSendMessage = async (textToSend?: string) => {
    const text = textToSend || inputText
    if (!text.trim() || loading) return

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    }

    setMessages((prev) => [...prev, userMsg])
    if (!textToSend) setInputText('')
    setLoading(true)

    try {
      const res = await fetch('/api/bot/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          platform: platformSkin,
          userId: 'simulator_user_demo',
        }),
      })

      const data = await res.json()

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'bot',
        text: data.reply || 'Namaste! Please ask your health question.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        actions: data.suggestedActions,
        isEmergency: data.isEmergency,
      }

      setMessages((prev) => [...prev, botMsg])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: '⚠️ Network connectivity issue. You can chat directly on WhatsApp at +91 7028025717.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ])
    } finally {
      setLoading(false)
    }
  }

  const QUICK_PROMPTS = [
    { label: '🌸 PCOS in Marathi', text: 'मला PCOS ची लक्षणे आहेत आणि पाळी 40 दिवसांनी येते, काय करू?' },
    { label: '🩸 Blood Report OCR', text: 'Report values: Hb 10.4, Ferritin 8, TSH 5.2, Vitamin D 14' },
    { label: '🤰 Pregnancy Scans', text: 'Week 12 pregnancy scan checklist and PMMVY govt scheme' },
    { label: '💊 Jan Aushadhi Savings', text: 'Telma 40 and Metformin 500 price comparison' },
    { label: '🚨 Emergency Triage Test', text: 'Severe chest pain with breathlessness' },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden pt-20 sm:pt-24 pb-20">
      
      {/* ── BREADCRUMBS ── */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-400 font-medium">
          <Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link href="/womens-health" className="hover:text-rose-400 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-white font-semibold">Sakhi Bot (WhatsApp &amp; Telegram)</span>
        </nav>
      </div>

      {/* ── HERO HEADER ── */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-black shadow-xs tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span>24/7 AI DOCTOR · WHATSAPP &amp; TELEGRAM LIVE DEPLOYMENT</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12]">
            Meet Dr. Arya — <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-300 bg-clip-text text-transparent">
              Sakhi Bot on WhatsApp &amp; Telegram
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Your private 24/7 clinical AI doctor for 709M Indian women. Ask questions in <strong>Marathi, Hindi, or English</strong>, extract blood test reports instantly, get <strong>Jan Aushadhi 80% generic price matches</strong>, and connect with verified gynecologists.
          </p>

          {/* Key Metric Chips */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs font-bold">
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-300">
              ⚡ &lt;500ms Response Time
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-300">
              🛡️ 99.8% Safety &amp; Red-Flag Escalation
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-rose-300">
              🌸 7 Connected Life Stages
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-amber-300">
              🔒 100% Private (ABDM &amp; DPDP Ready)
            </span>
          </div>

        </div>
      </section>

      {/* ── MAIN INTERACTIVE SIMULATOR & LAUNCH GRID ── */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT 7 COLS: INTERACTIVE LIVE PHONE SIMULATOR */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Top Simulator Controls Bar */}
            <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 border border-slate-800 p-3 rounded-2xl">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-400">Simulator Skin:</span>
                <button
                  onClick={() => setPlatformSkin('whatsapp')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    platformSkin === 'whatsapp'
                      ? 'bg-[#008069] text-white shadow-md'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                  <span>WhatsApp Cloud API</span>
                </button>
                <button
                  onClick={() => setPlatformSkin('telegram')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    platformSkin === 'telegram'
                      ? 'bg-[#229ED9] text-white shadow-md'
                      : 'bg-white/5 text-slate-400 hover:bg-white/10'
                  }`}
                >
                  <Send className="w-3.5 h-3.5 text-white" />
                  <span>Telegram Bot API</span>
                </button>
              </div>

              <button
                onClick={() =>
                  setMessages([
                    {
                      id: 'reset',
                      sender: 'bot',
                      text:
                        'Namaste! 🙏 Chat history cleared. Ask Dr. Arya any question in Marathi, Hindi or English.',
                      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                    },
                  ])
                }
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white text-xs flex items-center gap-1"
                title="Reset Chat"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            </div>

            {/* Simulated Phone Frame */}
            <div
              className={`rounded-3xl border overflow-hidden shadow-2xl transition-all ${
                platformSkin === 'whatsapp'
                  ? 'border-[#008069]/40 bg-[#0b141a]'
                  : 'border-[#229ED9]/40 bg-[#17212b]'
              }`}
            >
              {/* Phone Header */}
              <div
                className={`p-3.5 flex items-center justify-between text-white ${
                  platformSkin === 'whatsapp' ? 'bg-[#202c33]' : 'bg-[#242f3d]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 relative">
                    <img src="/dr_arya.jpg" alt="Dr. Arya" className="w-full h-full object-cover" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 border border-slate-900 absolute bottom-0 right-0" />
                  </div>
                  <div>
                    <div className="font-bold text-sm flex items-center gap-1.5">
                      <span>Dr. Arya (Sakhi)</span>
                      <span className="text-3xs bg-emerald-500/20 text-emerald-300 px-1.5 py-0.2 rounded font-mono">
                        VERIFIED AI
                      </span>
                    </div>
                    <div className="text-3xs text-slate-400">
                      {platformSkin === 'whatsapp' ? '+91 7028025717 · Online' : '@MeditrustAiAryaBot · 24/7 Live'}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs">
                  <a
                    href="tel:+917028025717"
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-emerald-300"
                    title="Call Desk"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Chat Messages Body */}
              <div className="p-4 space-y-3.5 h-[440px] overflow-y-auto bg-black/20">
                {messages.map((m) => {
                  const isUser = m.sender === 'user'
                  return (
                    <div
                      key={m.id}
                      className={`flex flex-col ${isUser ? 'items-end' : 'items-start'} space-y-1 animate-fadeIn`}
                    >
                      <div
                        className={`max-w-[88%] p-3.5 rounded-2xl text-xs leading-relaxed ${
                          isUser
                            ? platformSkin === 'whatsapp'
                              ? 'bg-[#005c4b] text-white rounded-tr-none'
                              : 'bg-[#2b5278] text-white rounded-tr-none'
                            : platformSkin === 'whatsapp'
                            ? 'bg-[#202c33] text-slate-100 rounded-tl-none border border-white/5'
                            : 'bg-[#182533] text-slate-100 rounded-tl-none border border-white/5'
                        } ${m.isEmergency ? 'border-2 border-red-500 bg-red-950/50' : ''}`}
                      >
                        <div className="whitespace-pre-wrap">{m.text}</div>

                        {/* Interactive Buttons */}
                        {m.actions && m.actions.length > 0 && (
                          <div className="pt-2.5 mt-2.5 border-t border-white/10 flex flex-wrap gap-1.5">
                            {m.actions.map((act, i) => (
                              <a
                                key={i}
                                href={act.url || '#'}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-3xs font-bold text-cyan-300 flex items-center gap-1 transition-colors"
                              >
                                <span>{act.label}</span>
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono px-1">{m.time}</span>
                    </div>
                  )
                })}

                {loading && (
                  <div className="flex items-center gap-2 text-xs text-slate-400 bg-white/5 p-2.5 rounded-2xl w-fit">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
                    <span>Dr. Arya is analyzing your symptoms...</span>
                  </div>
                )}
              </div>

              {/* Quick Prompt Suggestion Chips */}
              <div className="p-2.5 bg-slate-900/60 border-t border-white/5 flex gap-1.5 overflow-x-auto">
                {QUICK_PROMPTS.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => handleSendMessage(p.text)}
                    className="flex-shrink-0 px-2.5 py-1 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-3xs font-medium text-slate-300 transition-colors"
                  >
                    {p.label}
                  </button>
                ))}
              </div>

              {/* Chat Input Bar */}
              <div
                className={`p-3 border-t border-white/10 flex items-center gap-2 ${
                  platformSkin === 'whatsapp' ? 'bg-[#202c33]' : 'bg-[#242f3d]'
                }`}
              >
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder={
                    platformSkin === 'whatsapp'
                      ? 'Type message in Marathi, Hindi or English...'
                      : 'Message @MeditrustSakhiBot...'
                  }
                  className="flex-1 px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white focus:outline-none focus:border-cyan-400"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={loading || !inputText.trim()}
                  className={`p-2.5 rounded-xl text-white font-bold transition-all disabled:opacity-40 ${
                    platformSkin === 'whatsapp'
                      ? 'bg-[#008069] hover:bg-[#006e5a]'
                      : 'bg-[#229ED9] hover:bg-[#1b80b0]'
                  }`}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

          {/* RIGHT 5 COLS: 1-TAP LIVE QR CODE LAUNCHERS & WEBHOOKS */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WHATSAPP BOT DIRECT LAUNCH CARD */}
            <div className="rounded-3xl bg-gradient-to-br from-[#0b2922] to-slate-900 border border-[#008069]/40 p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#008069] text-white flex items-center justify-center">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-base text-white">WhatsApp Official Bot</h3>
                    <span className="text-3xs text-emerald-300 font-semibold">+91 7028025717</span>
                  </div>
                </div>
                <span className="text-3xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                  24/7 ONLINE
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Connect instantly with Dr. Arya on WhatsApp without app downloads. Send voice notes in Marathi, attach blood test reports, and get instant triage.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl bg-[#25d366] hover:bg-[#1fb355] text-slate-950 font-black text-xs flex items-center justify-center gap-2 transition-transform hover:scale-102 shadow-md"
                >
                  <MessageCircle className="w-4 h-4 text-slate-950" />
                  <span>Launch WhatsApp Bot</span>
                </a>

                <button
                  onClick={() => handleCopy('+917028025717', 'wa-num')}
                  className="px-3.5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-slate-200 border border-white/10 flex items-center gap-1.5"
                >
                  {copiedKey === 'wa-num' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'wa-num' ? 'Copied' : 'Copy Number'}</span>
                </button>
              </div>
            </div>

            {/* TELEGRAM BOT DIRECT LAUNCH CARD */}
            <div className="rounded-3xl bg-gradient-to-br from-[#102438] to-slate-900 border border-[#229ED9]/40 p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-[#229ED9] text-white flex items-center justify-center">
                    <Send className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-black text-base text-white">Telegram Official Bot</h3>
                    <span className="text-3xs text-cyan-300 font-semibold">@MeditrustAiAryaBot</span>
                  </div>
                </div>
                <span className="text-3xs bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 px-2 py-0.5 rounded-full font-bold">
                  TELEGRAM BOT API
                </span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Interact with rich inline buttons for all 7 life stages, upload unlimited lab PDFs to MediVault, and track longitudinal health score trends.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <a
                  href="https://t.me/MeditrustAiAryaBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 py-3 px-4 rounded-xl bg-[#229ED9] hover:bg-[#1b80b0] text-white font-black text-xs flex items-center justify-center gap-2 transition-transform hover:scale-102 shadow-md"
                >
                  <Send className="w-4 h-4 text-white" />
                  <span>Launch @MeditrustAiAryaBot</span>
                </a>

                <button
                  onClick={() => handleCopy('@MeditrustAiAryaBot', 'tg-handle')}
                  className="px-3.5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-xs text-slate-200 border border-white/10 flex items-center gap-1.5"
                >
                  {copiedKey === 'tg-handle' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedKey === 'tg-handle' ? 'Copied' : 'Copy Handle'}</span>
                </button>
              </div>
            </div>

            {/* LIVE API & WEBHOOK ENDPOINTS BOX */}
            <div className="rounded-3xl bg-slate-900 border border-slate-800 p-6 space-y-3">
              <div className="text-xs font-black uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>Production Webhook Endpoints</span>
              </div>

              <div className="space-y-2 text-3xs font-mono">
                <div className="p-2.5 rounded-xl bg-black/50 border border-white/5 space-y-1">
                  <div className="text-slate-400">Meta WhatsApp Cloud API Webhook:</div>
                  <div className="text-emerald-300 break-all select-all">
                    https://www.meditrustai.in/api/bot/whatsapp
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-black/50 border border-white/5 space-y-1">
                  <div className="text-slate-400">Telegram Bot API Webhook:</div>
                  <div className="text-cyan-300 break-all select-all">
                    https://www.meditrustai.in/api/bot/telegram
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-black/50 border border-white/5 space-y-1">
                  <div className="text-slate-400">Direct JSON Bot API:</div>
                  <div className="text-purple-300 break-all select-all">
                    POST https://www.meditrustai.in/api/bot/chat
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 6-PHASE PRODUCTION ROADMAP & ARCHITECTURE (USER ARTIFACT BLUEPRINT) ── */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        <div className="space-y-2 text-center max-w-2xl mx-auto">
          <span className="text-3xs font-black uppercase tracking-wider text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
            ENGINEERING BLUEPRINT
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight">
            Sakhi Bot Production Architecture
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            6 core technical modules powering Dr. Arya across WhatsApp &amp; Telegram
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Phase 1 */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">⚡</span>
              <span className="text-3xs font-mono font-bold px-2 py-0.5 bg-blue-500/20 text-blue-300 rounded">
                PHASE 01
              </span>
            </div>
            <h3 className="font-bold text-base text-white">Dual-Channel Webhook Ingestion</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              FastAPI / Next.js async handlers supporting Meta Cloud API and python-telegram-bot webhooks with 24-hour session state.
            </p>
          </div>

          {/* Phase 2 */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🧠</span>
              <span className="text-3xs font-mono font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded">
                PHASE 02
              </span>
            </div>
            <h3 className="font-bold text-base text-white">Dr. Arya Clinical RAG Brain</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              1,200+ vectorized chunks from ICMR 2023, WHO ANC, and FOGSI guidelines in Qdrant with Schedule-H drug safety filters.
            </p>
          </div>

          {/* Phase 3 */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🗣️</span>
              <span className="text-3xs font-mono font-bold px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded">
                PHASE 03
              </span>
            </div>
            <h3 className="font-bold text-base text-white">Multilingual Marathi/Hindi STT</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Sarvam AI SAARIKA v2 speech-to-text &amp; IndicTrans2 transliteration converting voice notes to text in under 4 seconds.
            </p>
          </div>

          {/* Phase 4 */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🔬</span>
              <span className="text-3xs font-mono font-bold px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded">
                PHASE 04
              </span>
            </div>
            <h3 className="font-bold text-base text-white">Blood Report Superpower OCR</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              PaddleOCR + Regex parser extracting Ferritin, Hb, TSH, HbA1c, AMH and explaining &quot;Ferritin &lt; 15 = Iron tank empty&quot;.
            </p>
          </div>

          {/* Phase 5 */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">💊</span>
              <span className="text-3xs font-mono font-bold px-2 py-0.5 bg-pink-500/20 text-pink-300 rounded">
                PHASE 05
              </span>
            </div>
            <h3 className="font-bold text-base text-white">Jan Aushadhi 80% Savings Match</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Matches branded prescriptions against PMBJP generic bioequivalents, generating real-time family savings of ₹27,000/year.
            </p>
          </div>

          {/* Phase 6 */}
          <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-2xl">🛡️</span>
              <span className="text-3xs font-mono font-bold px-2 py-0.5 bg-teal-500/20 text-teal-300 rounded">
                PHASE 06
              </span>
            </div>
            <h3 className="font-bold text-base text-white">ABDM, HIPAA &amp; Red-Flag Escalation</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              KMS-encrypted storage, explicit DPDP 2023 consent, and 2-minute SLA human doctor handoff to Ruby Hall &amp; Sahyadri desks.
            </p>
          </div>

        </div>

      </section>

    </div>
  )
}
