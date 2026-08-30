'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Search, Sparkles, ShoppingBag, ArrowRight, CheckCircle2,
  ShieldCheck, Star, Heart, RefreshCw, MessageCircle, ChevronRight,
  Filter, Layers, Check, Clock, Zap, AlertCircle, Building2, HelpCircle
} from 'lucide-react'
import {
  MARKETPLACE_CATEGORIES,
  ALL_MARKETPLACE_PRODUCTS,
  MarketplaceProductItem,
  MarketplaceCategoryDef
} from '@/data/marketplaceCatalog'
import { useCart } from '@/context/CartContext'

export default function MarketplaceHomePage() {
  const { addItem, openCart } = useCart()

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedLifeStage, setSelectedLifeStage] = useState<string>('All')
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('all')
  
  // AI Search & Triage State
  const [aiSearchActive, setAiSearchActive] = useState(false)
  const [aiTriageResult, setAiTriageResult] = useState<{
    categoryName: string
    categorySlug: string
    reason: string
    recommendedProducts: MarketplaceProductItem[]
    disclaimer: string
    needDoctor: boolean
  } | null>(null)

  // AI Questionnaire State
  const [quizOpen, setQuizOpen] = useState(false)
  const [quizStage, setQuizStage] = useState('PCOS')
  const [quizConcern, setQuizConcern] = useState('Acne & Irregular Cycles')
  const [quizFlow, setQuizFlow] = useState('Medium')
  const [quizResult, setQuizResult] = useState<MarketplaceProductItem[] | null>(null)

  // Filtered Products
  const filteredProducts = useMemo(() => {
    return ALL_MARKETPLACE_PRODUCTS.filter((prod) => {
      const matchesSearch =
        !searchQuery ||
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.subcategory.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.category.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesStage =
        selectedLifeStage === 'All' ||
        prod.lifeStage === selectedLifeStage ||
        prod.lifeStage === 'All Stages'

      const matchesCat =
        activeCategoryFilter === 'all' || prod.category === activeCategoryFilter

      return matchesSearch && matchesStage && matchesCat
    })
  }, [searchQuery, selectedLifeStage, activeCategoryFilter])

  // Handle Natural Language AI Search
  const handleAiSearch = (query: string) => {
    const q = (query || searchQuery).toLowerCase()
    if (!q) return

    setAiSearchActive(true)

    if (q.includes('cramp') || q.includes('pain') || q.includes('dysmenorrhea')) {
      setAiTriageResult({
        categoryName: 'Cramps & PMS Heat Therapy',
        categorySlug: 'cramps-pms',
        reason: 'Continuous 40°C thermal warmth relaxes myometrial smooth muscle spasms without gastric NSAID irritation.',
        recommendedProducts: ALL_MARKETPLACE_PRODUCTS.filter(p => p.category === 'cramps-pms' || p.id === 'sakhi-rashfree-pads-custom-12'),
        disclaimer: 'AI recommendation — not a medical diagnosis. If pain is sudden, debilitating, or accompanied by fever, consult a gynaecologist.',
        needDoctor: q.includes('severe') || q.includes('faint')
      })
    } else if (q.includes('heavy') || q.includes('flow') || q.includes('pad') || q.includes('bleed')) {
      setAiTriageResult({
        categoryName: 'Heavy Flow & Overnight Period Care',
        categorySlug: 'period-care',
        reason: 'Combination of 360° leak-proof panties and custom rash-free pads provides all-night staining protection.',
        recommendedProducts: ALL_MARKETPLACE_PRODUCTS.filter(p => p.category === 'period-care'),
        disclaimer: 'AI recommendation — not a medical diagnosis. Bleeding through 1 pad every 1 hour indicates menorrhagia requiring clinical evaluation.',
        needDoctor: false
      })
    } else if (q.includes('pcos') || q.includes('acne') || q.includes('irregular') || q.includes('hormon')) {
      setAiTriageResult({
        categoryName: 'PCOS Metabolic & Hormonal Defense',
        categorySlug: 'pcos',
        reason: 'The 40:1 Inositol physiological ratio reverses insulin resistance while hydrocolloid patches extract cystic acne exudate.',
        recommendedProducts: ALL_MARKETPLACE_PRODUCTS.filter(p => p.category === 'pcos' || p.category === 'skin-health'),
        disclaimer: 'AI recommendation — supports metabolic and lifestyle management.',
        needDoctor: false
      })
    } else if (q.includes('postpartum') || q.includes('maternity') || q.includes('delivery') || q.includes('baby')) {
      setAiTriageResult({
        categoryName: 'Postpartum & Fourth Trimester Healing',
        categorySlug: 'postpartum',
        reason: 'Breathable 360° panties protect episiotomy incisions from sweat maceration during 4–6 weeks of lochia discharge.',
        recommendedProducts: ALL_MARKETPLACE_PRODUCTS.filter(p => p.category === 'postpartum'),
        disclaimer: 'AI recommendation — consult your obstetrician for surgical incision checks.',
        needDoctor: false
      })
    } else if (q.includes('teen') || q.includes('first period') || q.includes('daughter') || q.includes('puberty')) {
      setAiTriageResult({
        categoryName: 'Teen First Period & Menarche Reassurance',
        categorySlug: 'teen-first-period',
        reason: 'Illustrated guides, rash-free pads, and discreet pouches remove adolescent stigma and anxiety.',
        recommendedProducts: ALL_MARKETPLACE_PRODUCTS.filter(p => p.category === 'teen-first-period'),
        disclaimer: 'AI recommendation — for educational & hygiene care.',
        needDoctor: false
      })
    } else {
      setAiTriageResult({
        categoryName: 'Women\'s Health & Hygiene Essentials',
        categorySlug: 'period-care',
        reason: 'Curated dermatologist-tested products matching your search term.',
        recommendedProducts: ALL_MARKETPLACE_PRODUCTS.slice(0, 4),
        disclaimer: 'AI recommendation — not a medical diagnosis.',
        needDoctor: false
      })
    }
  }

  const handleRunQuiz = () => {
    let prods = ALL_MARKETPLACE_PRODUCTS.filter(p => p.lifeStage === quizStage || p.lifeStage === 'All Stages')
    if (prods.length === 0) prods = ALL_MARKETPLACE_PRODUCTS.slice(0, 3)
    setQuizResult(prods)
  }

  const handleAddToCart = (product: MarketplaceProductItem, e: React.MouseEvent) => {
    e.stopPropagation()
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.mrp,
      pack: product.quantity,
      image: product.image,
      icon: '🌸',
      isSubscription: false,
    })
    openCart()
  }

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── 1. TOP BREADCRUMB & TRUST CHIP ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Women&apos;s Health Marketplace™</span>
        </nav>

        <div className="hidden sm:flex items-center gap-2 text-3xs font-bold text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
          <ShieldCheck className="w-3.5 h-3.5 text-rose-600" />
          <span>100% Toxin-Free · Meditrust Sakhi™ Quality Guarantee</span>
        </div>
      </div>

      {/* ── 2. HERO SECTION ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 text-white p-6 sm:p-12 border border-slate-800 shadow-2xl overflow-hidden space-y-6">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-3xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>MEDITRUST WOMEN&apos;S HEALTH MARKETPLACE™</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Women&apos;s Health, <span className="text-gradient-chic">Simplified.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              Discover trusted products for every stage of your health journey, personalized by <strong>MEDITRUST AI</strong>. From first period to menopause, shop rash-free pads, thermal cramp patches, pH-balanced washes, and clinical PCOS nutrition.
            </p>
          </div>

          {/* ── AI NATURAL LANGUAGE SEARCH BAR ── */}
          <div className="relative z-10 pt-2 max-w-3xl">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-2 sm:p-2.5 border border-white/20 shadow-xl flex flex-col sm:flex-row items-center gap-2">
              <div className="flex items-center gap-2.5 flex-1 w-full px-3 text-slate-800">
                <Search className="w-5 h-5 text-rose-600 flex-shrink-0" />
                <input
                  type="text"
                  placeholder="What are you looking for? (e.g., 'Heavy period pads', 'Cramp relief', 'PCOS care')"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => { if (e.key === 'Enter') handleAiSearch(searchQuery) }}
                  className="w-full bg-transparent text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
                />
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => handleAiSearch(searchQuery)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask Dr. Arya AI</span>
                </button>
              </div>
            </div>

            {/* Quick Suggested Queries */}
            <div className="flex flex-wrap items-center gap-1.5 pt-3 text-3xs">
              <span className="text-slate-400 font-medium">Popular:</span>
              {[
                'Period pads',
                'Cramp relief',
                'PCOS care',
                'Pregnancy products',
                'Intimate hygiene',
                'Postpartum care',
                'First period',
                'Skin care'
              ].map((pill) => (
                <button
                  key={pill}
                  onClick={() => {
                    setSearchQuery(pill)
                    handleAiSearch(pill)
                  }}
                  className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 transition-colors"
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── 3. AI TRIAGE & CLINICAL RECOMMENDATION MODAL / RESULT ── */}
      {aiSearchActive && aiTriageResult && (
        <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-4 animate-fadeIn">
          <div className="p-6 rounded-3xl bg-white border-2 border-rose-300 shadow-xl space-y-4">
            
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-3xs font-black uppercase">
                  <Sparkles className="w-3 h-3 text-rose-600" />
                  <span>DR. ARYA AI CLINICAL RECOMMENDATION</span>
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-950">
                  Recommended Category: {aiTriageResult.categoryName}
                </h3>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  {aiTriageResult.reason}
                </p>
              </div>

              <button
                onClick={() => setAiSearchActive(false)}
                className="text-xs text-slate-400 hover:text-slate-700 font-bold p-1"
              >
                ✕ Close
              </button>
            </div>

            {/* Recommended Products Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {aiTriageResult.recommendedProducts.map((prod) => (
                <div key={prod.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <img src={prod.image} alt={prod.name} className="w-full aspect-[4/3] object-cover rounded-xl" />
                    <span className="text-3xs font-bold text-rose-600 uppercase block">{prod.badge}</span>
                    <h4 className="font-bold text-xs text-slate-900 leading-snug line-clamp-2">{prod.name}</h4>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                    <span className="text-sm font-black text-slate-950">₹{prod.price}</span>
                    <button
                      onClick={(e) => handleAddToCart(prod, e)}
                      className="px-3 py-1.5 rounded-full bg-rose-600 text-white font-bold text-3xs hover:bg-rose-700"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Clinical Safety & Medical Escalation Banner */}
            <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-amber-900 font-medium">
                <AlertCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>{aiTriageResult.disclaimer}</span>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                <a
                  href={`https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20need%20clinical%20advice%20regarding%20my%20symptoms.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full bg-slate-900 text-white font-bold text-3xs hover:bg-slate-800"
                >
                  Consult Dr. Arya (24/7)
                </a>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* ── 4. CATEGORY DISCOVERY (17 VISUAL CARDS) ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="inline-flex items-center gap-1.5 text-rose-600 font-bold text-xs uppercase tracking-wider">
              <span>🌸</span>
              <span>EXPLORE BY HEALTH NEED</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Curated Healthcare Categories
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="text-slate-500">Filter Life Stage:</span>
            <select
              value={selectedLifeStage}
              onChange={(e) => setSelectedLifeStage(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-slate-800 font-bold text-xs"
            >
              <option value="All">All Life Stages</option>
              <option value="Teen">🌱 Teen &amp; Menarche</option>
              <option value="Menstrual">🩸 Menstrual &amp; Cramps</option>
              <option value="PCOS">🌸 PCOS &amp; Hormones</option>
              <option value="Pregnancy">🤰 Pregnancy &amp; Maternity</option>
              <option value="Postpartum">🤱 Postpartum &amp; New Mom</option>
              <option value="Menopause">🦋 Menopause &amp; Midlife</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {MARKETPLACE_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/marketplace/${cat.slug}`}
              className="group bg-white rounded-3xl p-4 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-rose-300 transition-all flex flex-col justify-between text-left space-y-3"
            >
              <div className="space-y-2">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-100">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <span className="absolute top-2 left-2 w-7 h-7 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center text-sm shadow-xs">
                    {cat.icon}
                  </span>
                </div>

                <div>
                  <h3 className="font-black text-xs sm:text-sm text-slate-950 group-hover:text-rose-600 transition-colors leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal mt-0.5">
                    {cat.shortDescription}
                  </p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-3xs font-bold text-rose-600">
                <span>Explore Care</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 5. AI PRODUCT RECOMMENDATION WIZARD ("FIND MY PRODUCTS") ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-3xl bg-gradient-to-r from-rose-900 via-purple-950 to-slate-950 text-white p-6 sm:p-10 border border-rose-800 shadow-xl space-y-6">
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-rose-200 text-3xs font-black uppercase">
                <Sparkles className="w-3.5 h-3.5 text-rose-300" />
                <span>CLINICAL AI MATCHING ENGINE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Not Sure What You Need? Let Dr. Arya Match You.
              </h2>
              <p className="text-xs sm:text-sm text-rose-100 leading-relaxed font-normal">
                Answer 3 quick health questions to receive evidence-based product regimens, generic savings, and customized cycle subscriptions.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setQuizOpen(!quizOpen)}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-rose-50 text-rose-950 font-black text-xs shadow-md transition-transform hover:scale-102 flex items-center justify-center gap-2 flex-shrink-0"
            >
              <span>{quizOpen ? 'Hide Assessment' : 'Start 60-Sec Product Finder'}</span>
              <ArrowRight className="w-4 h-4 text-rose-600" />
            </button>
          </div>

          {/* Interactive Quiz Questionnaire Drawer */}
          {quizOpen && (
            <div className="pt-4 border-t border-white/10 space-y-6 animate-fadeIn">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                
                {/* Question 1: Life Stage */}
                <div className="space-y-1.5">
                  <label className="font-bold text-rose-200 block">1. Your Current Life Stage:</label>
                  <select
                    value={quizStage}
                    onChange={(e) => setQuizStage(e.target.value)}
                    className="w-full p-3 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold focus:outline-none"
                  >
                    <option value="Menstrual" className="text-slate-900">🩸 Menstrual &amp; Periods (15-28y)</option>
                    <option value="PCOS" className="text-slate-900">🌸 PCOS &amp; Hormonal Acne (18-35y)</option>
                    <option value="Teen" className="text-slate-900">🌱 Teen &amp; First Period (10-18y)</option>
                    <option value="Postpartum" className="text-slate-900">🤱 Postpartum &amp; New Mom</option>
                    <option value="Menopause" className="text-slate-900">🦋 Menopause &amp; Midlife (40+y)</option>
                  </select>
                </div>

                {/* Question 2: Primary Concern */}
                <div className="space-y-1.5">
                  <label className="font-bold text-rose-200 block">2. Primary Concern:</label>
                  <select
                    value={quizConcern}
                    onChange={(e) => setQuizConcern(e.target.value)}
                    className="w-full p-3 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold focus:outline-none"
                  >
                    <option value="Severe Cramps" className="text-slate-900">🔥 Painful Period Cramps &amp; PMS</option>
                    <option value="Acne & Irregular Cycles" className="text-slate-900">🎯 Jawline Acne &amp; Irregular Periods</option>
                    <option value="Heavy Bleeding" className="text-slate-900">🩲 Heavy Flow &amp; Overnight Stains</option>
                    <option value="Intimate Dryness / Rash" className="text-slate-900">🫧 Pad Rashes &amp; Intimate Itching</option>
                  </select>
                </div>

                {/* Question 3: Flow */}
                <div className="space-y-1.5">
                  <label className="font-bold text-rose-200 block">3. Typical Flow Intensity:</label>
                  <select
                    value={quizFlow}
                    onChange={(e) => setQuizFlow(e.target.value)}
                    className="w-full p-3 rounded-2xl bg-white/10 border border-white/20 text-white font-semibold focus:outline-none"
                  >
                    <option value="Heavy" className="text-slate-900">High (Need XL+ / Frequent Changes)</option>
                    <option value="Medium" className="text-slate-900">Moderate (Normal 28-day cycle)</option>
                    <option value="Light" className="text-slate-900">Light / Spotting</option>
                  </select>
                </div>

              </div>

              <div className="flex items-center justify-between">
                <span className="text-3xs text-rose-200">
                  AI product discovery is clinical guidance, not a medical diagnosis.
                </span>
                <button
                  type="button"
                  onClick={handleRunQuiz}
                  className="px-6 py-2.5 rounded-full bg-rose-500 hover:bg-rose-600 text-white font-bold text-xs shadow-sm"
                >
                  Generate My Custom Regimen
                </button>
              </div>

              {/* Quiz Results */}
              {quizResult && (
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 space-y-3">
                  <strong className="text-xs font-black text-white uppercase tracking-wider block">
                    Your Personalized 3-Piece Regimen for {quizStage} Stage:
                  </strong>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {quizResult.map((p) => (
                      <div key={p.id} className="p-3 rounded-xl bg-white text-slate-900 space-y-1.5 flex flex-col justify-between">
                        <div>
                          <span className="text-3xs font-bold text-rose-600">{p.badge}</span>
                          <h5 className="font-bold text-xs leading-snug line-clamp-2">{p.name}</h5>
                        </div>
                        <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                          <span className="text-xs font-black">₹{p.price}</span>
                          <button
                            onClick={(e) => handleAddToCart(p, e)}
                            className="px-2.5 py-1 rounded-full bg-rose-600 text-white text-3xs font-bold hover:bg-rose-700"
                          >
                            Add to Bag
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          )}

        </div>
      </section>

      {/* ── 6. ALL PRODUCTS GRID WITH ADVANCED FILTERS ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        
        {/* Section Header & Subcategory Tabs */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
              {filteredProducts.length} PRODUCTS AVAILABLE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Featured Meditrust Sakhi™ Products
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 text-xs font-semibold">
            {[
              { id: 'all', label: 'All Products' },
              { id: 'period-care', label: '🩸 Period Care' },
              { id: 'cramps-pms', label: '🔥 Cramp Relief' },
              { id: 'intimate-hygiene', label: '🫧 Intimate Hygiene' },
              { id: 'pcos', label: '🌸 PCOS Nutrition' },
              { id: 'skin-health', label: '✨ Skincare' },
              { id: 'bundles', label: '📦 Bundles (Save 25%)' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategoryFilter(tab.id)}
                className={`px-3 py-1.5 rounded-full transition-all text-xs ${
                  activeCategoryFilter === tab.id
                    ? 'bg-slate-900 text-white font-bold shadow-2xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── PRODUCT CARDS GRID ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-2xs hover:shadow-xl hover:border-rose-300 transition-all flex flex-col justify-between group"
            >
              
              {/* Product Photo Banner */}
              <Link href={`/marketplace/product/${product.slug}`} className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100 block">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                />
                
                {/* Badges Over Image */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className={`text-3xs font-black uppercase px-2.5 py-1 rounded-full shadow-sm ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                  <div className="flex items-center gap-1 text-amber-900 text-3xs font-bold bg-white/95 backdrop-blur-md px-2 py-0.5 rounded-lg border border-amber-200 shadow-sm">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-500" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                <div className="absolute bottom-2.5 right-3 bg-slate-950/75 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {product.subcategory}
                </div>
              </Link>

              {/* Card Body */}
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                
                <div className="space-y-2">
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-rose-600 uppercase tracking-wider">
                      {product.brand} · {product.lifeStage} Stage
                    </span>
                    <Link href={`/marketplace/product/${product.slug}`}>
                      <h3 className="font-black text-sm text-slate-950 leading-snug group-hover:text-rose-600 transition-colors line-clamp-2">
                        {product.name}
                      </h3>
                    </Link>
                    <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed font-normal">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Price & Savings */}
                  <div className="flex items-baseline gap-2 pt-1 border-t border-slate-100">
                    <span className="text-xl font-black text-slate-950">₹{product.price}</span>
                    <span className="text-xs text-slate-400 line-through">₹{product.mrp}</span>
                    <span className="text-3xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      {product.discountPercent}% OFF
                    </span>
                  </div>

                  {/* Subscribe & Save Price Option */}
                  <div className="p-2 rounded-xl bg-rose-50/70 border border-rose-100 text-3xs text-rose-950 font-bold flex items-center justify-between">
                    <span>Subscribe &amp; Save 20%:</span>
                    <span className="text-rose-700 font-black">₹{product.subscriptionPrice}/mo</span>
                  </div>

                  {/* Dr. Arya Clinical Note */}
                  <p className="text-3xs text-slate-600 bg-slate-50 p-2 rounded-xl border border-slate-100 italic line-clamp-2">
                    &ldquo;{product.drAryaPearl}&rdquo;
                  </p>
                </div>

                {/* Card Actions */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => handleAddToCart(product, e)}
                    className="flex-1 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Add to Bag</span>
                  </button>

                  <Link
                    href={`/marketplace/product/${product.slug}`}
                    className="p-2.5 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 transition-colors"
                    title="View Details"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>

            </div>
          ))}
        </div>

      </section>

      {/* ── 7. SUBSCRIBE & SAVE 20% RECURRING SCHEDULE ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl bg-white border border-rose-200 p-6 sm:p-10 shadow-sm space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-rose-600 font-bold text-xs uppercase tracking-wider">
                <RefreshCw className="w-3.5 h-3.5" />
                <span>NEVER RUN OUT OF PERIOD ESSENTIALS</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                Subscribe &amp; Save 20% with Auto-Replenish
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 font-normal">
                Pick your custom delivery schedule. Pause, skip, or cancel anytime with zero commitments.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 text-xs font-bold">
              {['Every 21 Days', 'Every 28 Days (Recommended)', 'Every 30 Days', 'Every 60 Days'].map((sch, i) => (
                <span key={i} className="px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-900">
                  {sch}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs pt-2">
            {[
              { icon: '💰', title: 'Flat 20% Off Forever', desc: 'Guaranteed lowest price on all repeat deliveries' },
              { icon: '🚚', title: 'Always Free Delivery', desc: 'Zero delivery charges on recurring subscriptions' },
              { icon: '⏸️', title: 'Pause or Skip 1-Click', desc: 'Travelling? Skip a cycle directly via WhatsApp' },
              { icon: '🎁', title: 'Surprise Wellness Gifts', desc: 'Free tea samples & heat patch in every 3rd order' },
            ].map((b, i) => (
              <div key={i} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                <span className="text-xl block">{b.icon}</span>
                <strong className="font-bold text-slate-900 block">{b.title}</strong>
                <p className="text-3xs text-slate-500 font-normal">{b.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── 8. WOMEN'S HEALTH LIFECYCLE JOURNEY MAP ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
            LONGITUDINAL HEALTHCARE ACROSS LIFE
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
            The Meditrust Sakhi™ Health Journey
          </h2>
          <p className="text-xs text-slate-500">
            Dr. Arya AI stays with you from your first period to post-menopause.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 text-xs">
          {[
            { stage: '1. First Period', age: '10–18y', icon: '🌱', link: '/marketplace/teen-first-period' },
            { stage: '2. Period Care', age: '15–28y', icon: '🩸', link: '/marketplace/period-care' },
            { stage: '3. PCOS & Hormones', age: '18–35y', icon: '🌸', link: '/marketplace/pcos' },
            { stage: '4. Fertility & IVF', age: '22–38y', icon: '🥚', link: '/marketplace/fertility' },
            { stage: '5. Pregnancy', age: 'Trimesters', icon: '🤰', link: '/marketplace/pregnancy' },
            { stage: '6. Postpartum', age: '0–2 Years', icon: '🤱', link: '/marketplace/postpartum' },
            { stage: '7. Menopause', age: '40+y', icon: '🦋', link: '/marketplace/menopause' },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.link}
              className="p-4 rounded-3xl bg-white border border-slate-200 hover:border-rose-300 hover:shadow-md transition-all text-center space-y-2 group"
            >
              <div className="w-10 h-10 rounded-2xl bg-rose-50 mx-auto flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <strong className="font-bold text-xs text-slate-900 group-hover:text-rose-600 transition-colors block">
                  {item.stage}
                </strong>
                <span className="text-3xs text-slate-400 font-medium">{item.age}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── 9. TRUST & CLINICAL DISCLAIMER ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-3 shadow-sm text-xs">
          <div className="flex items-center gap-2 text-rose-400 font-bold uppercase tracking-wider text-3xs">
            <ShieldCheck className="w-4 h-4" />
            <span>CLINICAL &amp; REGULATORY TRANSPARENCY</span>
          </div>
          <p className="text-slate-300 leading-relaxed font-normal">
            The Meditrust Women&apos;s Health Marketplace™ is a wellness and supportive care platform. Products offered are not intended to diagnose, treat, cure, or prevent medical diseases. For symptoms including severe pelvic pain, unexplained heavy bleeding (menorrhagia), fainting, or pregnancy complications, please consult a qualified gynaecologist or contact national emergency services (Dial 108 / 181).
          </p>
        </div>
      </section>

    </div>
  )
}
