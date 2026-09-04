'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Flame, Zap, Activity, Heart, ShieldAlert, Sparkles,
  Phone, MessageCircle, ArrowRight, CheckCircle2, ChevronRight,
  TrendingDown, MapPin, Stethoscope, ShoppingBag, Clock, Radio,
  Compass, Eye, Play, Volume2, ShieldCheck, AlertCircle
} from 'lucide-react'
import { ALL_MARKETPLACE_PRODUCTS } from '@/data/marketplaceCatalog'
import { useCart } from '@/context/CartContext'

export default function AdrenalineInteractiveHub() {
  const { addItem, openCart } = useCart()

  // 1. Interactive Generic Savings Calculator State
  const [monthlySpend, setMonthlySpend] = useState<number>(3500)
  const genericSavings = Math.round(monthlySpend * 0.82)
  const genericPay = monthlySpend - genericSavings
  const annualSavings = genericSavings * 12

  // 2. Interactive Organ / Hormone Body Node Map State
  const [activeBodyNode, setActiveBodyNode] = useState<'uterus' | 'thyroid' | 'heart' | 'skin' | 'pelvis'>('uterus')

  // 3. Live Triage Simulation Query State
  const [simQuery, setSimQuery] = useState<'cramps' | 'report' | 'pcos' | 'emergency'>('cramps')
  const [typingText, setTypingText] = useState('')

  // 4. Live Telemetry ECG Pulse Rate State
  const [bpm, setBpm] = useState(72)
  useEffect(() => {
    const interval = setInterval(() => {
      setBpm(prev => 70 + Math.floor(Math.random() * 8))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  const bodyNodeData = {
    uterus: {
      title: 'Uterine Dysmenorrhea & Cycle Flow',
      icon: '🩸',
      alert: 'Luteal Prostaglandin Spike Detected',
      protocol: '40°C Continuous Heat Therapy + 100% Rash-Free Cotton Pads',
      product: ALL_MARKETPLACE_PRODUCTS.find(p => p.id === 'sakhi-cramp-comfort-heat-patches-3') || ALL_MARKETPLACE_PRODUCTS[0],
      link: '/marketplace/cramps-pms'
    },
    thyroid: {
      title: 'Thyroid & Metabolic Hormones (TSH / T4)',
      icon: '🦋',
      alert: 'Fatigue & Cold Intolerance Subclinical Triage',
      protocol: 'Anti-TPO Autoantibody + Selenium & Folate Micronutrient Defense',
      product: ALL_MARKETPLACE_PRODUCTS.find(p => p.id === 'sakhi-daily-multivitamin-60') || ALL_MARKETPLACE_PRODUCTS[0],
      link: '/womens-health/segments/hormonal-health'
    },
    heart: {
      title: 'Cardiovascular & Arterial Telemetry',
      icon: '🫀',
      alert: 'ApoB Lipid & hs-CRP Endothelial Screening',
      protocol: 'Post-Menopausal Estrogen Cardioprotection Protocol',
      product: ALL_MARKETPLACE_PRODUCTS.find(p => p.id === 'sakhi-daily-multivitamin-60') || ALL_MARKETPLACE_PRODUCTS[0],
      link: '/womens-health/segments/womens-primary-care'
    },
    skin: {
      title: 'Hormonal Jawline Acne & Androgens',
      icon: '✨',
      alert: 'Excess DHT Sebaceous Gland Stimulation',
      protocol: 'Hydrocolloid Sebum Absorption + 2% Encapsulated Salicylic Wash',
      product: ALL_MARKETPLACE_PRODUCTS.find(p => p.id === 'sakhi-pimple-patches-36') || ALL_MARKETPLACE_PRODUCTS[0],
      link: '/marketplace/skin-health'
    },
    pelvis: {
      title: 'Pelvic Floor Tone & Vaginal pH (3.5–4.5)',
      icon: '🫧',
      alert: 'Döderlein Lactobacillus Flora Barrier',
      protocol: 'Soap-Free Lactic Acid Foaming Wash + 1mm Breathable Liners',
      product: ALL_MARKETPLACE_PRODUCTS.find(p => p.id === 'sakhi-foaming-intimate-wash-150') || ALL_MARKETPLACE_PRODUCTS[0],
      link: '/marketplace/intimate-hygiene'
    }
  }

  const triageResponses = {
    cramps: {
      user: 'Dr. Arya, I have severe Day-1 period cramps and lower back pain.',
      bot: 'Namaste! Continuous 40°C thermal warmth relaxes myometrial smooth muscle spasms just like 400mg Ibuprofen without causing gastric acid irritation. Apply a Meditrust Sakhi™ Cramp Patch to the outside of your underwear and rest.',
      badge: 'THERMAL THERAPY'
    },
    report: {
      user: 'My Serum Ferritin is 12 ng/mL. Is that normal?',
      bot: 'Your Ferritin indicates depleted iron reserves (normal is >30 ng/mL), even if your Hemoglobin looks borderline normal. Let’s start gentle chelated iron and vitamin C to prevent fatigue and hair shedding.',
      badge: 'LAB INTERPRETATION'
    },
    pcos: {
      user: 'I have irregular 45-day cycles and cystic chin acne.',
      bot: 'This classic pattern points to insulin-driven PCOS. The clinically proven 40:1 ratio of Myo-Inositol + D-Chiro Inositol restores spontaneous ovulation within 90 days while calming androgenic breakouts.',
      badge: 'METABOLIC REVERSAL'
    },
    emergency: {
      user: 'Sudden severe unilateral pelvic pain with dizziness and fever.',
      bot: '⚠️ RED FLAG ALERT: Sudden sharp unilateral pelvic pain with fever requires immediate physical gynaecological emergency evaluation to rule out ectopic pregnancy or ovarian torsion. Dialing 108 / 181 recommended.',
      badge: 'EMERGENCY 108'
    }
  }

  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto space-y-12">
      
      {/* ── 1. REAL-TIME ADRENALINE METRICS HUD TICKER ── */}
      <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-rose-950 to-slate-950 text-white p-6 border-2 border-rose-500/40 shadow-2xl space-y-4 overflow-hidden relative">
        
        {/* Glowing Radar Background */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-rose-500/15 rounded-full blur-3xl pointer-events-none animate-pulse" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-rose-500/30 pb-4 relative z-10">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-rose-500" />
            </span>
            <div>
              <span className="text-3xs font-mono font-bold tracking-widest text-rose-400 uppercase">
                MEDITRUST AI CLINICAL RADAR · LIVE STREAM
              </span>
              <h2 className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center gap-2">
                <span>Interactive Telemetry &amp; Adrenaline Action Hub</span>
                <Flame className="w-5 h-5 text-rose-500 animate-bounce" />
              </h2>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-bold font-mono">
            <span className="px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 text-rose-400 animate-pulse" />
              <span>HRV: {bpm} BPM</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>ABDM 256-BIT ENCRYPTED</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-teal-500/20 border border-teal-500/40 text-teal-300 flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              <span>60-MIN PUNE PHLEBOTOMY</span>
            </span>
          </div>
        </div>

        {/* 4 Instant Action Trigger Tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 pt-1 relative z-10 text-xs">
          
          {/* Action 1: 12 Free Clinical Tools */}
          <Link
            href="/womens-health/tools"
            className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-400/50 hover:bg-emerald-500/30 transition-all space-y-1.5 group"
          >
            <div className="w-8 h-8 rounded-xl bg-emerald-500 text-slate-950 flex items-center justify-center font-black group-hover:scale-110 transition-transform">
              🧰
            </div>
            <strong className="text-emerald-200 block font-black text-xs group-hover:text-white transition-colors">
              12 Free Clinical Tools
            </strong>
            <span className="text-3xs text-emerald-300/90 block font-normal">
              Fertility, Ovulation &amp; IVF Calculators
            </span>
          </Link>

          {/* Action 2: MediMom Maternal Care */}
          <Link
            href="/medimom"
            className="p-4 rounded-2xl bg-rose-500/20 border border-rose-400/50 hover:bg-rose-500/30 transition-all space-y-1.5 group"
          >
            <div className="w-8 h-8 rounded-xl bg-rose-500 text-white flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
              🤱
            </div>
            <strong className="text-rose-200 block font-black text-xs group-hover:text-white transition-colors">
              MediMom™ Care
            </strong>
            <span className="text-3xs text-rose-300/90 block font-normal">
              Trimesters, Scans &amp; Postpartum
            </span>
          </Link>

          {/* Action 3: Corpo Mom Enterprise */}
          <Link
            href="/corpo-mom"
            className="p-4 rounded-2xl bg-purple-500/20 border border-purple-400/50 hover:bg-purple-500/30 transition-all space-y-1.5 group"
          >
            <div className="w-8 h-8 rounded-xl bg-purple-500 text-white flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
              🏢
            </div>
            <strong className="text-purple-200 block font-black text-xs group-hover:text-white transition-colors">
              Corpo Mom™ Benefits
            </strong>
            <span className="text-3xs text-purple-300/90 block font-normal">
              Corporate Maternity &amp; Lactation
            </span>
          </Link>

          {/* Action 4: Women's Health Academy */}
          <Link
            href="/womens-health/academy"
            className="p-4 rounded-2xl bg-teal-500/20 border border-teal-400/50 hover:bg-teal-500/30 transition-all space-y-1.5 group"
          >
            <div className="w-8 h-8 rounded-xl bg-teal-500 text-slate-950 flex items-center justify-center text-sm group-hover:scale-110 transition-transform">
              🎓
            </div>
            <strong className="text-teal-200 block font-black text-xs group-hover:text-white transition-colors">
              Health Academy
            </strong>
            <span className="text-3xs text-teal-300/90 block font-normal">
              6 Certified Doctor Masterclasses
            </span>
          </Link>

        </div>

      </div>

      {/* ── 2. INTERACTIVE CLINICAL HORMONE & ORGAN MAP ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left 5 Cols: Clickable Organ Nodes */}
        <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
          
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 text-rose-600 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>INTERACTIVE BIO-MAPPING</span>
            </div>
            <h3 className="text-2xl font-black text-slate-950">
              Female Biological System Map
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              Click any anatomical zone to inspect real-time clinical indicators, evidence-based protocols, and Meditrust Sakhi™ product solutions.
            </p>
          </div>

          {/* Clickable Node Buttons */}
          <div className="space-y-2">
            {[
              { id: 'uterus', name: 'Uterus & Menstrual Cycle', icon: '🩸', tag: 'Cramps & Flow' },
              { id: 'skin', name: 'Skin Barrier & Androgens', icon: '✨', tag: 'Hormonal PCOS Acne' },
              { id: 'thyroid', name: 'Thyroid & Metabolism', icon: '🦋', tag: 'TSH & Fatigue' },
              { id: 'pelvis', name: 'Pelvic Microbiome (pH 3.5–4.5)', icon: '🫧', tag: 'UTI & Yeast Defense' },
              { id: 'heart', name: 'Heart & Estrogen Aging', icon: '🫀', tag: 'ApoB & Arteries' },
            ].map((node) => (
              <button
                key={node.id}
                onClick={() => setActiveBodyNode(node.id as any)}
                className={`w-full p-3.5 rounded-2xl border text-left transition-all flex items-center justify-between ${
                  activeBodyNode === node.id
                    ? 'bg-rose-50 border-rose-500 shadow-xs'
                    : 'bg-slate-50 border-slate-200/80 hover:bg-slate-100/80 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{node.icon}</span>
                  <div>
                    <strong className="text-xs font-black text-slate-950 block">{node.name}</strong>
                    <span className="text-3xs text-slate-500 font-normal">{node.tag}</span>
                  </div>
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeBodyNode === node.id ? 'translate-x-1 text-rose-600' : 'text-slate-400'}`} />
              </button>
            ))}
          </div>

        </div>

        {/* Right 7 Cols: Dynamic Node Inspector Card */}
        <div className="lg:col-span-7 bg-gradient-to-br from-white via-rose-50/30 to-white p-6 sm:p-8 rounded-3xl border border-rose-200 shadow-md flex flex-col justify-between space-y-6">
          
          <div className="space-y-4">
            
            <div className="flex items-center justify-between border-b border-rose-100 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="text-3xl">{bodyNodeData[activeBodyNode].icon}</span>
                <div>
                  <h4 className="font-black text-lg text-slate-950">
                    {bodyNodeData[activeBodyNode].title}
                  </h4>
                  <span className="text-3xs font-black text-rose-700 uppercase tracking-wider">
                    {bodyNodeData[activeBodyNode].alert}
                  </span>
                </div>
              </div>

              <span className="text-3xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                Clinical Evidence Verified
              </span>
            </div>

            {/* Diagnostic Protocol */}
            <div className="p-4 rounded-2xl bg-white border border-rose-100 space-y-1.5 shadow-2xs">
              <strong className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Recommended Clinical Protocol:</span>
              </strong>
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {bodyNodeData[activeBodyNode].protocol}
              </p>
            </div>

            {/* Linked Sakhi Product Preview Card */}
            <div className="p-4 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center gap-3">
                <img
                  src={bodyNodeData[activeBodyNode].product.image}
                  alt={bodyNodeData[activeBodyNode].product.name}
                  className="w-16 h-16 rounded-2xl object-cover bg-slate-100 flex-shrink-0"
                />
                <div>
                  <span className="text-3xs font-bold text-rose-600 uppercase block">
                    {bodyNodeData[activeBodyNode].product.badge}
                  </span>
                  <h5 className="font-bold text-xs text-slate-900 leading-snug line-clamp-1">
                    {bodyNodeData[activeBodyNode].product.name}
                  </h5>
                  <div className="flex items-baseline gap-2 pt-0.5">
                    <span className="font-black text-sm text-slate-950">₹{bodyNodeData[activeBodyNode].product.price}</span>
                    <span className="text-3xs text-slate-400 line-through">₹{bodyNodeData[activeBodyNode].product.mrp}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  addItem({
                    id: bodyNodeData[activeBodyNode].product.id,
                    name: bodyNodeData[activeBodyNode].product.name,
                    price: bodyNodeData[activeBodyNode].product.price,
                    originalPrice: bodyNodeData[activeBodyNode].product.mrp,
                    pack: bodyNodeData[activeBodyNode].product.quantity,
                    image: bodyNodeData[activeBodyNode].product.image,
                    icon: '🌸',
                    isSubscription: false,
                  })
                  openCart()
                }}
                className="px-4 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-2xs flex-shrink-0"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Bag</span>
              </button>
            </div>

          </div>

          <div className="flex items-center justify-between pt-4 border-t border-rose-100 text-xs">
            <span className="text-3xs text-slate-500">
              Verified by Dr. Arya Chief AI Medical Officer
            </span>
            <Link
              href={bodyNodeData[activeBodyNode].link}
              className="text-xs font-bold text-rose-600 hover:underline flex items-center gap-1"
            >
              <span>Explore Full Category Care</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

      </div>

      {/* ── 3. INTERACTIVE 80% GENERIC SAVINGS CALCULATOR SLIDER ── */}
      <div className="rounded-3xl bg-white p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-emerald-700 font-bold text-xs uppercase tracking-wider">
              <TrendingDown className="w-4 h-4 text-emerald-600" />
              <span>PMBJP JAN AUSHADHI GENERIC ENGINE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">
              Calculate Your Family&apos;s Prescription Savings
            </h3>
          </div>

          <div className="text-right">
            <span className="text-3xs text-slate-500 font-bold uppercase block">Annual Family Savings</span>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600">
              Save ₹{annualSavings.toLocaleString('en-IN')}/year
            </div>
          </div>
        </div>

        {/* Interactive Spend Slider */}
        <div className="space-y-4 max-w-3xl mx-auto py-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-700">
            <span>Your Current Monthly Medicine Spend:</span>
            <span className="text-lg font-black text-slate-950 font-mono bg-slate-100 px-3 py-1 rounded-xl">
              ₹{monthlySpend.toLocaleString('en-IN')} / month
            </span>
          </div>

          <input
            type="range"
            min="500"
            max="15000"
            step="250"
            value={monthlySpend}
            onChange={(e) => setMonthlySpend(Number(e.target.value))}
            className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
          />

          <div className="flex justify-between text-3xs text-slate-400 font-medium">
            <span>₹500</span>
            <span>₹5,000</span>
            <span>₹10,000</span>
            <span>₹15,000</span>
          </div>
        </div>

        {/* Comparison Tile Results */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-100 space-y-1">
            <span className="text-3xs text-rose-700 font-bold uppercase">Current Branded Price</span>
            <div className="text-xl font-black text-rose-950">₹{monthlySpend}</div>
            <span className="text-3xs text-slate-500">Retail chemist market MRP</span>
          </div>

          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-1">
            <span className="text-3xs text-emerald-700 font-bold uppercase">Jan Aushadhi Generic Cost</span>
            <div className="text-xl font-black text-emerald-800">₹{genericPay}</div>
            <span className="text-3xs text-emerald-700 font-bold">100% Bioequivalent Quality</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 text-white space-y-1 flex flex-col justify-between">
            <div>
              <span className="text-3xs text-emerald-400 font-bold uppercase">Monthly Pocket Savings</span>
              <div className="text-xl font-black text-white">Save ₹{genericSavings} (82%)</div>
            </div>
            <Link
              href="/medication-comparison"
              className="text-3xs font-bold text-teal-300 hover:text-white flex items-center gap-1 pt-1"
            >
              <span>Upload Prescription to Match →</span>
            </Link>
          </div>
        </div>

      </div>

      {/* ── 4. LIVE MULTILINGUAL TRIAGE SIMULATOR WITH DR. ARYA ── */}
      <div className="rounded-3xl bg-slate-950 text-white p-6 sm:p-10 border border-slate-800 shadow-2xl space-y-6">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-rose-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>LIVE AI CLINICAL COUNCIL SIMULATION</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Try a Real-Time Triage Query with Dr. Arya
            </h3>
          </div>

          <div className="flex flex-wrap gap-2 text-3xs font-bold">
            <button
              onClick={() => setSimQuery('cramps')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                simQuery === 'cramps' ? 'bg-rose-600 text-white' : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              🩸 Day-1 Cramps
            </button>
            <button
              onClick={() => setSimQuery('report')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                simQuery === 'report' ? 'bg-rose-600 text-white' : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              🔬 Ferritin Report
            </button>
            <button
              onClick={() => setSimQuery('pcos')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                simQuery === 'pcos' ? 'bg-rose-600 text-white' : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              🌸 PCOS &amp; Acne
            </button>
            <button
              onClick={() => setSimQuery('emergency')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                simQuery === 'emergency' ? 'bg-red-600 text-white' : 'bg-white/10 text-slate-300 hover:bg-white/20'
              }`}
            >
              🚨 Red Flag Triage
            </button>
          </div>
        </div>

        {/* Chat Simulation Bubble */}
        <div className="space-y-4 max-w-3xl mx-auto text-xs">
          
          {/* User Bubble */}
          <div className="flex items-start justify-end gap-2.5">
            <div className="p-3.5 rounded-2xl bg-rose-600 text-white font-medium max-w-lg shadow-sm">
              {triageResponses[simQuery].user}
            </div>
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold">
              👤
            </div>
          </div>

          {/* Bot Bubble */}
          <div className="flex items-start gap-2.5">
            <div className="w-8 h-8 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center text-xs font-bold text-teal-300 flex-shrink-0">
              🩺
            </div>
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 font-normal leading-relaxed space-y-2 max-w-xl shadow-md">
              <div className="flex items-center justify-between">
                <span className="text-3xs font-bold text-teal-400">Dr. Arya AI Doctor (24/7)</span>
                <span className="text-3xs font-black uppercase text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full">
                  {triageResponses[simQuery].badge}
                </span>
              </div>
              <p>{triageResponses[simQuery].bot}</p>
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate-800 text-xs">
          <span className="text-3xs text-slate-400">
            Available 24/7 in मराठी, हिंदी and English on WhatsApp and Telegram.
          </span>
          <a
            href={`https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full bg-[#008069] hover:bg-[#006e5a] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat Live on WhatsApp (+91 7028025717)</span>
          </a>
        </div>

      </div>

    </section>
  )
}
