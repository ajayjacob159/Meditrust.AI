'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Heart, Sparkles, MessageCircle, Share2, ArrowRight, Check,
  Zap, Flame, Smile, ShieldCheck, Copy, Phone, HelpCircle
} from 'lucide-react'

export default function GenZWomenVibeCard() {
  const [copied, setCopied] = useState(false)
  const [selectedVibe, setSelectedVibe] = useState<'energy' | 'skin' | 'cramps' | 'sugar'>('energy')

  const shareText = encodeURIComponent(
    "Hey! 💕 I found this super helpful and 100% private Women's Health AI Doctor on Meditrust. You can ask Dr. Arya anything about period cramps, PCOS, hair fall, iron levels, or skin glow in Marathi, Hindi, or English without any awkwardness! Check it out: https://www.meditrustai.in/womens-health"
  )

  const handleCopyLink = () => {
    navigator.clipboard.writeText('https://www.meditrustai.in/womens-health')
    setCopied(true)
    setTimeout(() => setCopied(false), 3000)
  }

  const VIBE_CHECKS = {
    energy: {
      emoji: '⚡',
      title: 'Low Energy & Hair Shedding?',
      desc: 'Hemoglobin can be 12.0 while Ferritin (iron storage) is drained below 15! Boost cellular energy with PMBJP Ferrous Ascorbate (₹25).',
      action: 'Check Ferritin Iron Meter',
      link: '/womens-health/blood-tests/serum-ferritin-vs-hemoglobin-anemia-women',
      color: 'bg-amber-50 text-amber-900 border-amber-200',
    },
    skin: {
      emoji: '✨',
      title: 'Jawline Acne Before Periods?',
      desc: 'Luteal-phase progesterone surge + high insulin can trigger androgen spikes on sebaceous glands. Simple dietary tweaks help within 2 cycles.',
      action: 'PCOS & Hormone Screen',
      link: '/womens-health/blood-tests/pcos-hormone-blood-test-list-india',
      color: 'bg-rose-50 text-rose-900 border-rose-200',
    },
    cramps: {
      emoji: '🌸',
      title: 'Missing Work / College for Cramps?',
      desc: 'Debilitating period pain is NOT normal — 60% of girls normalize it unnecessarily. Evaluate prostaglandin levels and endometriosis triage.',
      action: 'Check Normalization Guide',
      link: '/blog/normalization-gap-ai-symptom-education-womens-health',
      color: 'bg-purple-50 text-purple-900 border-purple-200',
    },
    sugar: {
      emoji: '🍫',
      title: 'Pre-Period Sugar Cravings?',
      desc: 'Estrogen drops trigger temporary serotonin dips. Your brain craves quick glucose! Magnesium-rich dark chocolate & nuts balance it instantly.',
      action: 'Chat with Dr. Arya AI',
      link: '/symptom-checker',
      color: 'bg-teal-50 text-teal-900 border-teal-200',
    },
  }

  return (
    <div className="relative group">
      {/* Outer Rainbow Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-rose-400 via-fuchsia-400 to-indigo-400 rounded-[32px] blur-lg opacity-40 group-hover:opacity-75 transition duration-500 pointer-events-none" />

      <div className="relative bg-white/95 backdrop-blur-xl rounded-[30px] p-6 sm:p-8 border border-rose-200/80 shadow-xl space-y-6">
        
        {/* Top Header Pill */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-rose-100 to-fuchsia-100 text-rose-900 text-xs font-black border border-rose-200/80 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-rose-600 animate-spin" />
            <span>WOMEN &amp; GIRLS CARE VIBE HUB · 100% PRIVATE</span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold">
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 animate-pulse" />
            <span>Built with care for 709M+ Indian Women</span>
          </div>
        </div>

        {/* Catchy Main Title */}
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug">
            Your Private &amp; Non-Judgmental Health Sanctuary 💕
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
            No taboos, no embarrassment, and no rushed OPDs. Ask Dr. Arya anything about cycle changes, sudden breakouts, heavy flows, or birth control in plain Marathi, Hindi, or English.
          </p>
        </div>

        {/* 4 Interactive Quick Vibe Tabs */}
        <div className="space-y-3">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Tap a symptom to see what&apos;s really happening inside your body:
          </span>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {(['energy', 'skin', 'cramps', 'sugar'] as const).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedVibe(key)}
                className={`p-3 rounded-2xl text-xs font-bold transition-all text-left flex items-center gap-2 border ${
                  selectedVibe === key
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm scale-102'
                    : 'bg-slate-50 text-slate-700 hover:bg-rose-50/70 border-slate-200/80'
                }`}
              >
                <span className="text-lg">{VIBE_CHECKS[key].emoji}</span>
                <span className="capitalize">{key === 'sugar' ? 'Cravings' : key}</span>
              </button>
            ))}
          </div>

          {/* Active Vibe Info Box */}
          <div className={`p-4 rounded-2xl border transition-all ${VIBE_CHECKS[selectedVibe].color} space-y-2`}>
            <div className="flex items-center justify-between">
              <span className="font-black text-sm flex items-center gap-1.5">
                <span>{VIBE_CHECKS[selectedVibe].emoji}</span>
                <span>{VIBE_CHECKS[selectedVibe].title}</span>
              </span>
              <Link
                href={VIBE_CHECKS[selectedVibe].link}
                className="text-xs font-bold underline hover:opacity-80 flex items-center gap-1"
              >
                <span>{VIBE_CHECKS[selectedVibe].action}</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
            <p className="text-xs leading-relaxed font-normal opacity-90">
              {VIBE_CHECKS[selectedVibe].desc}
            </p>
          </div>
        </div>

        {/* ── SHARE WITH GIRL GANG & WHATSAPP ROW ── */}
        <div className="pt-4 border-t border-rose-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-0.5 text-center sm:text-left">
            <span className="font-bold text-xs text-slate-900 flex items-center justify-center sm:justify-start gap-1">
              <span>👭 Share with your Sister, Mother or Girl Gang</span>
            </span>
            <p className="text-[11px] text-slate-500">
              Break the silence together — empower your friends with private health knowledge.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 flex-shrink-0">
            <a
              href={`https://wa.me/?text=${shareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1fb355] text-white font-bold text-xs shadow-md transition-transform hover:scale-105 flex items-center gap-1.5"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Share on WhatsApp 💕</span>
            </a>

            <button
              onClick={handleCopyLink}
              className="px-4 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors border border-slate-200 flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-slate-500" />}
              <span>{copied ? 'Link Copied! ✨' : 'Copy Link'}</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
