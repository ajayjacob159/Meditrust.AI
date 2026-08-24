'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Sparkles, Clock, Star, Heart, Info, Play, Shield, TrendingDown,
  Users, Check, X, Zap, Building2, ArrowRight, ChevronDown, Gift,
  CheckCircle2, MessageCircle, Lock, Award, FileText, Phone
} from 'lucide-react'

interface Plan {
  id: string
  name: string
  tagline: string
  priceYearly: number
  priceMonthly: number
  perMonthLabel: string
  bestFor: string
  savings: string
  savingsDetail: string
  cta: string
  popular?: boolean
  features: string[]
  accent: string
}

const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Sakhi Free',
    tagline: '₹0 Forever',
    priceYearly: 0,
    priceMonthly: 0,
    perMonthLabel: 'Free forever',
    bestFor: 'Try Sakhi privately',
    savings: 'Start Free',
    savingsDetail: 'Private health locker included',
    cta: 'Start Free — No Card Needed',
    features: [
      'Dr. Arya 24/7 — 5 chats / month in Marathi / Hindi / English',
      'MediVault™ — Secure 256-bit health locker',
      'Health Score — Basic risk check (0–100)',
      'Find Nearby — Labs & Jan Aushadhi generic stores'
    ],
    accent: 'border-slate-200'
  },
  {
    id: 'lite',
    name: 'Sakhi Lite',
    tagline: 'For Teens & Students',
    priceYearly: 499,
    priceMonthly: 42,
    perMonthLabel: '₹42/mo',
    bestFor: 'Age 13–22 • Students • First Period to College',
    savings: 'Save ₹2,400/yr',
    savingsDetail: 'On 1 lab test + smart reminders',
    cta: 'Get Lite — ₹499/yr',
    features: [
      'Unlimited Dr. Arya chats — Private, Marathi first',
      'Smart Cycle Tracker + rhythm prediction',
      'Anemia Risk Score (57% Indian women anemic)',
      '1 Lab Test @ 20% OFF — 13 Pune labs compare',
      'WhatsApp reminders — Medicine, period, hydration',
      'MediVault™ graphing — 1 biomarker trend'
    ],
    accent: 'border-slate-200'
  },
  {
    id: 'plus',
    name: 'Sakhi Plus',
    tagline: 'MOST POPULAR',
    priceYearly: 999,
    priceMonthly: 83,
    perMonthLabel: '₹83/mo',
    bestFor: '80% Women 20–40 • Working • PCOS • Married',
    savings: 'Save ₹27,000/yr',
    savingsDetail: 'Jan Aushadhi generics + PCOS kit ₹1,200',
    cta: 'Get Plus — Most Popular',
    popular: true,
    features: [
      'Everything in Lite +',
      '12 Female Doctor Chats / yr — Gynac, Dermat, Nutrition',
      'Free PCOS Screening Kit — Save ₹1,200',
      'MediVault™ Trends — Unlimited biomarker graphing',
      '60-min Doorstep Lab Pickup + Reports on WhatsApp',
      'Jan Aushadhi Price Compare — 80% cheaper generics',
      'Second Opinion for C-section / Hysterectomy',
      'Generic Savings Tracker — See ₹27k savings live',
      'Corporate Anemia & PCOS Dashboard'
    ],
    accent: 'border-[#ff7eb6]'
  },
  {
    id: 'premium',
    name: 'Sakhi Premium',
    tagline: "For Life's Big Moments",
    priceYearly: 1999,
    priceMonthly: 167,
    perMonthLabel: '₹167/mo',
    bestFor: 'Fertility • Pregnancy • Postnatal • Menopause',
    savings: 'Save ₹54,000+/yr',
    savingsDetail: 'Fertility + Pregnancy + VIP Hospital Desk',
    cta: 'Get Premium — Full Care',
    features: [
      'Everything in Plus +',
      'Fertility AMH Tracker + Ovulation AI',
      'Pregnancy Week-by-Week — Marathi voice updates',
      'Lactation Support — 24/7 video guidance',
      'Meno Club — 140M women community 2026',
      '4 Specialist Video Consults / yr',
      'Hospital VIP Desk — Ruby Hall, Sahyadri, Jehangir',
      'Partner Access — Husband can view with consent',
      'Corporate Wellness Dashboard for HR'
    ],
    accent: 'border-purple-300'
  }
]

const STAGES = [
  { label: 'Teen', age: '13–18', icon: '🌱' },
  { label: 'Menstrual', age: '18–24', icon: '🩸' },
  { label: 'PCOS', age: '17.4% college', icon: '🌸' },
  { label: 'Fertility', age: '24–34', icon: '🥚' },
  { label: 'Pregnancy', age: '27.2% C-Sec', icon: '🤰' },
  { label: 'Postnatal', age: '0–2 yrs', icon: '🤱' },
  { label: 'Menopause', age: '140M by 2026', icon: '🦋' }
]

export default function SakhiMembershipPlans() {
  const [billingCycle, setBillingCycle] = useState<'yearly' | 'monthly'>('yearly')
  const [monthlySpend, setMonthlySpend] = useState<number>(1500)
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [timer, setTimer] = useState({ h: 14, m: 42, s: 18 })

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        let { h, m, s } = prev
        s--
        if (s < 0) {
          s = 59
          m--
        }
        if (m < 0) {
          m = 59
          h--
        }
        if (h < 0) {
          h = 23
        }
        return { h, m, s }
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const annualMedicineSavings = Math.round(monthlySpend * 12 * 0.8)
  const paybackMonths = monthlySpend > 0 ? (999 / (monthlySpend * 0.8)).toFixed(1) : '1.2'

  return (
    <div className="min-h-screen bg-[#fdf8ff] text-zinc-900 antialiased selection:bg-[#ff7eb6]/20 pt-16 sm:pt-20 pb-20">
      
      {/* ── TOP URGENCY BANNER ── */}
      <div className="w-full bg-zinc-950 text-white text-xs tracking-wide py-2.5 px-4 flex justify-center items-center gap-2 border-b border-zinc-800">
        <span className="inline-flex items-center gap-1.5 font-medium">
          <Sparkles className="w-3.5 h-3.5 text-pink-300 animate-spin" />
          <span>Founding Member Offer: <strong>Free Anemia Kit (₹799)</strong> + <strong>PCOS Consult (₹599)</strong> — First 1,000 only</span>
        </span>
        <span className="hidden md:inline-flex ml-4 gap-1.5 items-center bg-white/10 rounded-full px-3 py-0.5 font-mono text-3xs text-pink-200">
          <Clock className="w-3 h-3 text-pink-300" />
          <span>{String(timer.h).padStart(2, '0')}:{String(timer.m).padStart(2, '0')}:{String(timer.s).padStart(2, '0')} left</span>
        </span>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 space-y-12">

        {/* ── HERO & HEADING ── */}
        <div className="flex flex-col items-center text-center space-y-5">
          
          <div className="inline-flex items-center gap-2 bg-white border border-rose-200 rounded-full px-4 py-1.5 text-xs font-bold shadow-2xs">
            <span className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 grid place-items-center text-white text-xs">
              ♀
            </span>
            <span className="text-slate-800">
              Built for 709M+ Indian Women · Private in Marathi, Hindi &amp; English
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12] max-w-4xl">
            One Woman. Many Life Stages. <br />
            <span className="bg-gradient-to-r from-[#ff5ca1] via-[#d12a6d] to-[#7c3aed] bg-clip-text text-transparent">
              One Membership.
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-600 max-w-2xl leading-relaxed font-normal">
            <strong>Sakhi by Meditrust AI</strong> is a private health companion for every Indian woman. Ask Dr. Arya at 2am in Marathi, compare 13 labs in Pune, and save ₹27,000/yr on chronic prescriptions. <strong>₹83/month — less than 1 pizza.</strong>
          </p>

          {/* 7 Life Stage Pills */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 max-w-4xl pt-2">
            {STAGES.map((s) => (
              <div
                key={s.label}
                className="bg-white border border-slate-200/90 rounded-2xl p-3 text-center shadow-2xs hover:border-rose-300 transition-colors"
              >
                <div className="text-xl">{s.icon}</div>
                <div className="mt-1 text-xs font-bold text-slate-900">{s.label}</div>
                <div className="text-[10px] text-slate-500 font-medium">{s.age}</div>
              </div>
            ))}
          </div>

          {/* Quick Quantitative Proof Strip */}
          <div className="flex flex-wrap justify-center gap-2 text-3xs sm:text-xs pt-1">
            {[
              '30.7% overweight',
              '17.8% high blood sugar',
              '57% anemia in women',
              '17.4% PCOS in college',
              '37% professional women anemic',
              '84% face clinical barriers'
            ].map((stat) => (
              <span
                key={stat}
                className="bg-white border border-slate-200/80 rounded-full px-3 py-1 text-slate-600 font-semibold shadow-2xs"
              >
                {stat}
              </span>
            ))}
          </div>

        </div>

        {/* ── BILLING TOGGLE ── */}
        <div className="flex flex-col items-center space-y-2 pt-2">
          <div className="inline-flex bg-slate-950 p-1.5 rounded-full shadow-md">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                billingCycle === 'yearly'
                  ? 'bg-white text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Yearly Billing</span>
              <span className="bg-[#ff7eb6] text-white text-[10px] px-2 py-0.5 rounded-full font-black">
                SAVE 30%
              </span>
            </button>
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-1.5 pt-1">
            <Info className="w-3.5 h-3.5 text-slate-400" />
            <span>Yearly = 2 months free. No auto-renew traps. Cancel anytime on WhatsApp.</span>
          </div>
        </div>

        {/* ── 4 CORE PRICING CARDS GRID ── */}
        <div id="pricing-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PLANS.map((p) => {
            const isPop = p.popular
            return (
              <div
                key={p.id}
                className={`relative rounded-3xl border bg-white shadow-sm flex flex-col justify-between p-6 transition-all ${
                  isPop
                    ? 'lg:-mt-3 lg:mb-3 ring-2 ring-[#ff7eb6] border-[#ff7eb6] shadow-xl'
                    : p.accent
                }`}
              >
                {isPop && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-slate-950 text-white text-[10px] font-black tracking-widest px-3.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span>MOST POPULAR · 80% CHOOSE THIS</span>
                  </div>
                )}

                <div className="space-y-4">
                  
                  {/* Top Tier Header */}
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-lg font-black text-slate-950">{p.name}</h3>
                      <span
                        className={`mt-1 inline-block text-[10px] font-black tracking-wider px-2.5 py-0.5 rounded-full ${
                          isPop ? 'bg-[#ff7eb6]/20 text-[#b91c5c]' : 'bg-slate-100 text-slate-600'
                        }`}
                      >
                        {p.tagline}
                      </span>
                    </div>
                    {p.id !== 'free' && (
                      <Heart
                        className={`w-5 h-5 ${
                          isPop ? 'text-[#ff7eb6] fill-[#ff7eb6]/30' : 'text-slate-300'
                        }`}
                      />
                    )}
                  </div>

                  {/* Pricing Display */}
                  <div>
                    {billingCycle === 'yearly' ? (
                      <div className="space-y-0.5">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-black text-slate-950 font-mono">
                            ₹{p.priceYearly}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">/year</span>
                        </div>
                        <div className="text-xs text-slate-500">{p.perMonthLabel} · billed yearly</div>
                      </div>
                    ) : (
                      <div className="space-y-0.5">
                        <div className="flex items-baseline gap-1">
                          <span className="text-3xl font-black text-slate-950 font-mono">
                            ₹{p.priceMonthly}
                          </span>
                          <span className="text-xs text-slate-500 font-semibold">/month</span>
                        </div>
                        <div className="text-xs text-slate-500">Billed ₹{p.priceYearly}/year</div>
                      </div>
                    )}
                  </div>

                  {/* Savings Callout Box */}
                  <div className="bg-[#fdf2f7] border border-pink-100 rounded-2xl p-3 space-y-0.5">
                    <div className="text-xs font-black tracking-wide text-[#b91c5c]">{p.savings}</div>
                    <div className="text-[11px] text-slate-700 leading-snug">{p.savingsDetail}</div>
                  </div>

                  {/* Best For Tag */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">
                      BEST FOR
                    </span>
                    <div className="text-xs text-slate-800 bg-slate-50 border border-slate-100 rounded-xl p-2.5 leading-snug font-medium">
                      {p.bestFor}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 pt-2">
                    {p.features.map((feat) => {
                      const isEverything = feat.startsWith('Everything')
                      return (
                        <div key={feat} className="flex items-start gap-2 text-xs text-slate-700 leading-relaxed">
                          <span
                            className={`mt-0.5 w-4 h-4 rounded-full grid place-items-center flex-shrink-0 ${
                              isEverything
                                ? 'bg-slate-950 text-white'
                                : 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                            }`}
                          >
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span className={isEverything ? 'font-bold text-slate-950' : 'font-normal'}>
                            {feat}
                          </span>
                        </div>
                      )
                    })}
                  </div>

                </div>

                {/* Bottom CTA Button */}
                <div className="pt-6 space-y-2">
                  <a
                    href={`https://wa.me/917028025717?text=${encodeURIComponent(
                      `Hi Dr. Arya, I would like to subscribe to the ${p.name} (${billingCycle} plan). Please guide me with onboarding!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 rounded-full font-black text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm ${
                      isPop
                        ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-md'
                        : p.id === 'free'
                        ? 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300'
                        : 'bg-slate-950 hover:bg-slate-900 text-white'
                    }`}
                  >
                    <span>{p.cta}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>

                  {p.id === 'plus' && (
                    <div className="text-center text-[10px] text-slate-500 font-medium">
                      ₹83/mo · Save ₹5,000 or full refund guarantee
                    </div>
                  )}
                </div>

              </div>
            )
          })}
        </div>

        {/* ── 2 ADDON SPECIALIZED TIERS: FAMILY & CORPORATE ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
          
          {/* Sakhi Family */}
          <div className="rounded-3xl bg-gradient-to-br from-[#ffe8f1] to-[#f3e8ff] border border-pink-200 p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-rose-700" />
                <span className="font-black text-base text-slate-950">Sakhi Family</span>
                <span className="text-3xs bg-white border border-pink-300 text-rose-950 font-bold px-2 py-0.5 rounded-full">
                  4 WOMEN COVERED
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black text-slate-950 font-mono">₹2,999</span>
                <span className="text-xs font-semibold text-slate-600">/yr (₹62/woman/mo)</span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>Mother + Daughter + Sister</strong> — One single family subscription with 4 separate 100% confidential MediVault™ lockers. Complete privacy within the joint family.
              </p>
              <div className="text-xs font-bold text-[#9d174d]">
                Save ₹4,982 vs. purchasing 4 separate Plus subscriptions.
              </div>
            </div>

            <a
              href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20get%20Sakhi%20Family%20for%204%20women"
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit px-6 py-3 bg-slate-950 hover:bg-slate-900 text-white rounded-full text-xs font-bold flex items-center gap-2 shadow-sm transition-all"
            >
              <span>Get Sakhi Family</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Sakhi Corporate */}
          <div className="rounded-3xl bg-slate-950 text-white border border-slate-800 p-6 sm:p-7 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5 text-emerald-400" />
                <span className="font-black text-base text-white">Sakhi Corporate</span>
                <span className="text-3xs bg-white/15 text-emerald-300 font-bold px-2 py-0.5 rounded-full">
                  FOR HR LEADERS
                </span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">₹500</span>
                <span className="text-xs font-semibold text-slate-300">/employee/yr</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                37% of corporate women are anemic, and 20.7% suffer from PCOS. Includes confidential AI triage, anonymized HR risk dashboard, on-site health camps, and cut absenteeism.
              </p>
              <div className="text-xs font-bold text-pink-300">
                10–16x ROI: Saves ₹50–80 Lakhs in mid-career talent dropouts.
              </div>
            </div>

            <Link
              href="/corporate-wellness"
              className="w-fit px-6 py-3 bg-white hover:bg-slate-100 text-slate-950 rounded-full text-xs font-black flex items-center gap-2 shadow-sm transition-all"
            >
              <span>Explore Corporate Wellness</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* ── LIVE INTERACTIVE GENERIC MEDICINE SAVINGS ROI CALCULATOR ── */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Slider & Live Math */}
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-slate-950 text-white text-[11px] font-black tracking-widest px-3.5 py-1 rounded-full">
                <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
                <span>ROI CALCULATOR — SEE YOUR SAVINGS LIVE</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight">
                  Your monthly medicine bill is ₹{monthlySpend.toLocaleString('en-IN')}/mo? <br />
                  <span className="text-rose-600">
                    Sakhi makes it ₹{Math.round(monthlySpend * 0.2).toLocaleString('en-IN')}/mo.
                  </span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  PMBJP Jan Aushadhi generic equivalents are the exact same bioactive molecules, 80% cheaper. Meditrust matches your branded prescription against CDSCO certified salts.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-700">Your Monthly Family Medicine Spend:</span>
                  <span className="text-rose-600 bg-rose-50 px-3 py-1 rounded-xl border border-rose-200 font-mono text-sm font-black">
                    ₹{monthlySpend.toLocaleString('en-IN')} / month
                  </span>
                </div>
                <input
                  type="range"
                  min="200"
                  max="8000"
                  step="100"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#ff7eb6]"
                />
                <div className="flex justify-between text-3xs text-slate-400 font-bold">
                  <span>₹200 / mo</span>
                  <span>₹4,000 / mo</span>
                  <span>₹8,000 / mo</span>
                </div>
              </div>

              {/* 3 Metrics Cards */}
              <div className="grid grid-cols-3 gap-3 pt-2">
                <div className="bg-[#fdf2f7] rounded-2xl p-3.5 border border-pink-100 text-center space-y-0.5">
                  <div className="text-3xs text-slate-500 font-bold">You Pay Now</div>
                  <div className="text-base sm:text-lg font-black text-slate-950 font-mono">
                    ₹{(monthlySpend * 12).toLocaleString('en-IN')}
                  </div>
                  <div className="text-3xs text-slate-400">per year on MRP</div>
                </div>

                <div className="bg-emerald-50 rounded-2xl p-3.5 border border-emerald-100 text-center space-y-0.5">
                  <div className="text-3xs text-slate-500 font-bold">With Sakhi Plus</div>
                  <div className="text-base sm:text-lg font-black text-emerald-800 font-mono">
                    ₹{(Math.round(monthlySpend * 12 * 0.2) + 999).toLocaleString('en-IN')}
                  </div>
                  <div className="text-3xs text-emerald-700 font-semibold">incl. membership</div>
                </div>

                <div className="bg-slate-950 text-white rounded-2xl p-3.5 text-center space-y-0.5">
                  <div className="text-3xs text-slate-300 font-bold">You SAVE</div>
                  <div className="text-base sm:text-lg font-black text-emerald-300 font-mono">
                    ₹{(annualMedicineSavings - 999).toLocaleString('en-IN')}
                  </div>
                  <div className="text-3xs text-emerald-400 font-bold">
                    Pays in {paybackMonths} months
                  </div>
                </div>
              </div>

            </div>

            {/* Right Real Case Study: Pooja, Teacher, Pune */}
            <div className="lg:col-span-5 bg-[#faf5ff] p-6 sm:p-8 border-t lg:border-t-0 lg:border-l border-slate-100 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-bold text-purple-900 flex items-center gap-1.5">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <span>Real Case Study · Pooja, Teacher, Pune</span>
                </div>

                <div className="bg-white rounded-2xl p-4 border border-purple-100 shadow-2xs space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-black text-xs text-slate-950">Pooja · 32 · PCOS + Thyroid</div>
                      <div className="text-3xs text-slate-500">Teacher, Kothrud, Pune · 2 kids</div>
                    </div>
                    <span className="text-3xs bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full font-black">
                      Saved ₹16,800/yr
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 italic leading-relaxed">
                    &ldquo;Me mahina ₹2,100 chi medicine ghet hote. Sakhi ne Jan Aushadhi same salt dakhvla. Ata ₹420 bharte. Plus doctor chat pan Marathi madhe.&rdquo;
                  </p>

                  <div className="flex flex-wrap gap-1.5 text-3xs font-semibold text-slate-600">
                    <span className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1">
                      Levothyroxine ₹128 → ₹18
                    </span>
                    <span className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1">
                      Metformin ₹180 → ₹22
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-4 border border-purple-100 space-y-2">
                <div className="text-xs font-bold text-slate-900">What you get alongside your savings:</div>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>12 female doctor consultations (₹7,200 market value)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Free PCOS screening kit (₹1,200 value)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                    <span>Doorstep lab pickup across 13 NABL labs in Pune</span>
                  </li>
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* ── FOUNDING MEMBER BONUS & TRUST BADGES ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Hero Bonus Card */}
          <div className="lg:col-span-7 rounded-3xl bg-slate-950 text-white p-6 sm:p-8 relative overflow-hidden space-y-6">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-gradient-to-br from-[#ff7eb6]/30 to-purple-600/30 blur-3xl rounded-full pointer-events-none" />

            <div className="relative space-y-5">
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3.5 py-1 text-3xs font-black tracking-widest text-pink-200">
                <Gift className="w-3.5 h-3.5 text-pink-300" />
                <span>FOUNDING MEMBER BONUS — FIRST 1,000 ONLY</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl sm:text-3xl font-black leading-tight">
                  Pay ₹999, Get ₹5,398 Total Value. <br />
                  <span className="text-pink-300">If you don&apos;t save, 100% Full Refund.</span>
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { title: 'Free Anemia Kit', val: '₹799 value', desc: 'Hb, Ferritin & B12 home test' },
                  { title: 'Free PCOS Consult', val: '₹599 value', desc: 'Female Gynac video consult' },
                  { title: 'Save ₹5k Guarantee', val: '30-Day Refund', desc: 'WhatsApp "Refund", no questions' }
                ].map((b) => (
                  <div key={b.title} className="bg-white/10 border border-white/10 rounded-2xl p-3.5 space-y-1">
                    <div className="text-xs font-bold text-white">{b.title}</div>
                    <div className="text-3xs text-pink-300 font-black">{b.val}</div>
                    <div className="text-3xs text-slate-300">{b.desc}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20claim%20the%20Founding%20Member%20Bonus%20(Rs%20999/yr)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white hover:bg-slate-100 text-slate-950 rounded-full text-xs font-black flex items-center gap-2 shadow-md transition-all"
                >
                  <span>Claim Founding Bonus →</span>
                </a>
                <span className="text-3xs text-slate-400">
                  742 / 1,000 claimed · Timer: {String(timer.h).padStart(2, '0')}h {String(timer.m).padStart(2, '0')}m left
                </span>
              </div>
            </div>
          </div>

          {/* Right Trust & Privacy Card */}
          <div className="lg:col-span-5 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 space-y-4">
            <div className="text-xs font-black text-slate-950 flex items-center gap-2">
              <Shield className="w-4 h-4 text-emerald-600" />
              <span>Clinical Accuracy &amp; Privacy Protocols</span>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              {[
                { k: 'ABDM', v: 'Govt Compliant' },
                { k: 'HIPAA', v: '256-Bit Vault' },
                { k: 'ICMR', v: 'Guidelines' },
                { k: 'WHO', v: 'Protocols' },
                { k: '91.4%', v: 'AI Accuracy' },
                { k: '12k+', v: 'Consultations' }
              ].map((item) => (
                <div key={item.k} className="bg-slate-50 border border-slate-200/80 rounded-xl p-2.5 space-y-0.5">
                  <div className="font-black text-xs text-slate-900 font-mono">{item.k}</div>
                  <div className="text-[10px] text-slate-500 font-medium">{item.v}</div>
                </div>
              ))}
            </div>

            <div className="text-3xs text-slate-600 leading-relaxed bg-[#faf5ff] border border-purple-100 rounded-2xl p-3.5 space-y-1">
              <p className="font-semibold text-purple-950">100% Confidential Indian Health Data:</p>
              <p>
                Your records stay in India under ABDM. End-to-end encrypted. No family member or employer can access your consult history without your consent toggle. Auto-delete available in 1 tap.
              </p>
            </div>
          </div>

        </div>

        {/* ── DETAILED COMPARISON TABLE ── */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden space-y-4">
          <div className="p-6 sm:p-8 border-b border-slate-100 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                Why Sakhi? Not 1mg, Apollo, or Google?
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                84% of Indian women face clinical barriers, and 60% normalize pain. Random internet search is not healthcare.
              </p>
            </div>
            <span className="text-3xs bg-slate-950 text-white rounded-full px-3.5 py-1.5 font-bold">
              Marathi + Female Doctors + Generics + 13 Labs Compare
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs min-w-[720px]">
              <thead>
                <tr className="bg-slate-50 text-[11px] tracking-wider text-slate-500 border-y border-slate-200">
                  <th className="text-left font-black py-3 px-6">FEATURE</th>
                  <th className="text-left font-black py-3 px-4">
                    <span className="bg-slate-950 text-white px-2.5 py-1 rounded-full">
                      SAKHI PLUS (₹999/yr)
                    </span>
                  </th>
                  <th className="text-left font-black py-3 px-4">TATA 1MG / APOLLO</th>
                  <th className="text-left font-black py-3 px-4">RANDOM GOOGLE SEARCH</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  ['Doctor Access', '12 female doctor chats + unlimited AI in Marathi', '1 chat ₹500, male often', 'Scary online forums, English only'],
                  ['PCOS / Anemia', 'Free screening kit + Ferritin anemia score', 'No kit included', 'Confusing search advice'],
                  ['Medicines', 'Jan Aushadhi 80% OFF + ₹27k savings tracker', 'Branded MRP only', "Don't know generic salt"],
                  ['Lab Tests', '13 Pune labs price compare + 60-min pickup', '1 lab only, standard rates', 'No price comparison'],
                  ['Language', 'Marathi / Hindi / English + Voice notes', 'English only', 'English only'],
                  ['Privacy', "ABDM/HIPAA, family can't see", 'Shared family profile', 'Search history exposed on device'],
                  ['Second Opinion', 'C-section (27.2%) & hysterectomy checks', 'Not available', 'No clinical verification']
                ].map(([feat, sakhi, other1, other2]) => (
                  <tr key={feat} className="hover:bg-rose-50/40 transition-colors">
                    <td className="py-3.5 px-6 font-bold text-slate-900">{feat}</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex gap-1.5 items-center bg-emerald-50 text-emerald-800 border border-emerald-200 rounded-full px-2.5 py-1 font-bold text-3xs">
                        <Check className="w-3 h-3 text-emerald-600" />
                        {sakhi}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">
                      <span className="flex items-center gap-1">
                        <X className="w-3 h-3 text-slate-400" />
                        {other1}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-500">
                      <span className="flex items-center gap-1">
                        <X className="w-3 h-3 text-slate-400" />
                        {other2}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── REAL TESTIMONIALS ── */}
        <div className="space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-black text-slate-950">Real Women. Real Savings.</h3>
            <p className="text-xs text-slate-600">Verified feedback from Sakhi subscribers across Pune &amp; Maharashtra</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                name: 'Aniket (for Mother)',
                city: 'Pune',
                save: 'Saved ₹16,800/yr',
                text: 'Aai chi diabetes medicines ₹2,400 hoti. Jan Aushadhi ₹480 zali. Sakhi ne sangitla same salt aahe. Aai happy.',
                color: 'from-amber-300 to-pink-300'
              },
              {
                name: 'Pooja (Teacher)',
                city: 'Kothrud, Pune',
                save: 'Saved ₹12,400 + PCOS Controlled',
                text: 'PCOS kit free milala, diet plan Marathi madhe. 3 mahinyat periods regular. Doctor Marathi bolte, laj vatli nahi.',
                color: 'from-purple-300 to-pink-300'
              },
              {
                name: 'Shruti (IT Professional)',
                city: 'Hinjewadi Phase 1',
                save: 'Anemia Hb 9.2 → 12.8 in 4 mos',
                text: '37% professional women anemic — me pan hote. Anemia score + WhatsApp reminders mule iron regularly ghetli. Health score 62 to 84.',
                color: 'from-emerald-300 to-teal-300'
              }
            ].map((t) => (
              <div key={t.name} className="bg-white border border-slate-200 rounded-3xl p-5 shadow-2xs space-y-3">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex-shrink-0`} />
                  <div>
                    <div className="font-black text-xs text-slate-950">{t.name}</div>
                    <div className="text-3xs text-slate-500">{t.city}</div>
                  </div>
                </div>
                <div className="inline-block bg-slate-950 text-white text-3xs font-bold px-2.5 py-1 rounded-full">
                  {t.save}
                </div>
                <p className="text-xs text-slate-700 leading-relaxed italic">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── MARATHI & ENGLISH FAQ ACCORDIONS ── */}
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="text-center space-y-1">
            <h3 className="text-2xl font-black text-slate-950">
              Questions? Sakhi Answers in Marathi &amp; English
            </h3>
            <p className="text-xs text-slate-600">Everything you need to know about pricing, privacy &amp; guarantees</p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: 'Why ₹999? Is it too cheap to be good? (₹83/mo — less than pizza)',
                a: "We don't spend on expensive celebrity marketing. We save you ₹27,000 on Jan Aushadhi generics and charge a minimal annual platform fee. Over 12,000 consultations completed with 91.4% diagnostic accuracy based on ICMR & WHO protocols. No commission from labs — we transparently list all 13 cheapest certified labs."
              },
              {
                q: 'How private is it? Will my family know what I ask?',
                a: 'No. Everything is stored in your personal 256-bit ABDM encrypted locker. Consultations can be conducted in Marathi, with an optional auto-delete chat toggle. Family members cannot access your consultation history without your explicit permission. You can also use a private nickname like "Sakhi".'
              },
              {
                q: "What if I don't save ₹5,000? Is there a guarantee?",
                a: 'Yes. Founding Members: If you do not save at least ₹5,000 in your first 30 days on medicines and lab diagnostics, simply message "Refund" on WhatsApp (+91 7028025717) and receive a 100% full refund of ₹999 with no questions asked. Plus, you get to keep the ₹799 Anemia kit.'
              },
              {
                q: 'I am 45 and in perimenopause. Is this membership for me?',
                a: 'Yes — over 140 million Indian women will be in the menopausal phase by 2026, and 84% face clinical barriers alone. Sakhi Premium includes access to the Meno Club, sleep & hot flush tracking, bone density (DEXA) guidance, and empathetic female gynecologists who listen without judgment.'
              },
              {
                q: 'Can I speak in Marathi? Male doctor nako.',
                a: 'Ho, 100% Marathi support. Dr. Arya speaks in fluent Marathi, Hindi, and English. You can simply type "Mahila doctor pahije" to be connected strictly with female gynecologists and nutritionists. Voice notes in Marathi work seamlessly.'
              }
            ].map((faq, idx) => (
              <div key={faq.q} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${
                      openFaq === idx ? 'rotate-180 text-rose-600' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── FINAL ADRENALINE CONVERSION BANNER ── */}
        <div className="rounded-[32px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#ff7eb6]/30 to-purple-600/30 blur-3xl rounded-full pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3.5 py-1 text-3xs font-black tracking-widest text-pink-200">
                <span>709M WOMEN · 84% FACE BARRIERS · 60% NORMALIZE PAIN</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black leading-tight">
                Don&apos;t wait for pain to become normal. <br />
                <span className="text-[#ff9ac3]">₹83/month is self-respect.</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl font-normal">
                Join 12,000+ women who saved ₹27k/year, consulted female doctors in Marathi at 2am, and tracked PCOS, anemia &amp; pregnancy privately. ABDM secure, HIPAA private, money-back guaranteed.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20get%20Sakhi%20Plus%20(Rs%20999/yr)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-black text-xs sm:text-sm flex items-center gap-2 shadow-md transition-all"
                >
                  <span>Get Sakhi Plus — ₹999/yr</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/symptom-checker"
                  className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs sm:text-sm flex items-center gap-2 transition-colors"
                >
                  <Play className="w-3.5 h-3.5 text-pink-300" />
                  <span>See How Dr. Arya Talks</span>
                </Link>
              </div>

              <div className="text-3xs text-slate-400 pt-1">
                No auto-renew trick. Cancel on WhatsApp. 30-day save ₹5,000 or refund. Founding bonus ends in {String(timer.h).padStart(2, '0')}h {String(timer.m).padStart(2, '0')}m.
              </div>
            </div>

            {/* 60-Second Onboarding Box */}
            <div className="lg:col-span-5 bg-white/10 border border-white/15 rounded-3xl p-5 sm:p-6 space-y-4">
              <div className="text-xs font-black tracking-wider text-pink-200">
                WHAT YOU GET IN 60 SECONDS
              </div>

              <div className="space-y-3 text-xs text-slate-200">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white text-slate-950 grid place-items-center text-3xs font-black flex-shrink-0">
                    1
                  </span>
                  <span>Private login — zero OTP sent to family members</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white text-slate-950 grid place-items-center text-3xs font-black flex-shrink-0">
                    2
                  </span>
                  <span>Ask Dr. Arya in Marathi: <em>&quot;Mala PCOS aahe ka?&quot;</em></span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white text-slate-950 grid place-items-center text-3xs font-black flex-shrink-0">
                    3
                  </span>
                  <span>Upload Rx → see Jan Aushadhi ₹27k savings match</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-white text-slate-950 grid place-items-center text-3xs font-black flex-shrink-0">
                    4
                  </span>
                  <span>Book lab — 60-min home pickup, Marathi report on WhatsApp</span>
                </div>
              </div>

              <div className="mt-4 bg-white rounded-2xl p-3.5 text-slate-950 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-black tracking-widest text-slate-500">SAVINGS LIVE</div>
                  <div className="text-sm font-black text-emerald-700">
                    ₹{(annualMedicineSavings - 999).toLocaleString('en-IN')} saved this year
                  </div>
                </div>
                <TrendingDown className="w-5 h-5 text-emerald-600" />
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  )
}
