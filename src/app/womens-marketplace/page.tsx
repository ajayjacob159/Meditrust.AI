'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ShoppingBag, Heart, Sparkles, ShieldCheck, CheckCircle2,
  ChevronRight, Star, Tag, MessageCircle, ArrowRight, X,
  Filter, Clock, AlertCircle, Info, RefreshCw, Droplets,
  Flame, Check, Zap, Gift, Truck, HelpCircle
} from 'lucide-react'
import {
  WOMENS_MARKETPLACE_PRODUCTS,
  MarketplaceProduct
} from '@/data/womensMarketplaceProducts'

export default function WomensMarketplacePage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [activeStage, setActiveStage] = useState<string>('all')
  const [selectedProduct, setSelectedProduct] = useState<MarketplaceProduct | null>(null)
  const [selectedPack, setSelectedPack] = useState<string>('')
  const [isSubscribing, setIsSubscribing] = useState<boolean>(false)
  const [cartSuccessMessage, setCartSuccessMessage] = useState<string>('')

  // Filter products by category and life stage
  const filteredProducts = WOMENS_MARKETPLACE_PRODUCTS.filter((product) => {
    const matchesCat = activeCategory === 'all' || product.category === activeCategory
    const matchesStage = activeStage === 'all' || product.stage === activeStage || product.stage === 'All Stages'
    return matchesCat && matchesStage
  })

  const handleOpenProduct = (product: MarketplaceProduct) => {
    setSelectedProduct(product)
    setSelectedPack(product.packOptions[0] || 'Standard Pack')
    setIsSubscribing(false)
    setCartSuccessMessage('')
  }

  const handleWhatsAppOrder = (product: MarketplaceProduct, pack: string, subscribe: boolean) => {
    const text = encodeURIComponent(
      `Hello Meditrust AI Sakhi Wellness Desk! 🙏\n\n` +
      `I would like to order:\n` +
      `📦 *${product.name}*\n` +
      `🏷️ Pack: *${pack}*\n` +
      `💰 Price: *₹${subscribe ? Math.round(product.price * 0.8) : product.price}* ${subscribe ? '(20% Monthly Subscription)' : ''}\n\n` +
      `Please confirm delivery to my address and share payment link.`
    )
    window.open(`https://wa.me/917028025717?text=${text}`, '_blank')
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden pt-20 sm:pt-24 pb-20">
      
      {/* ── BREADCRUMBS ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/womens-health" className="hover:text-rose-700 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Wellness Marketplace &amp; Period Care</span>
        </nav>
      </div>

      {/* ── HERO BANNER ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="rounded-3xl bg-gradient-to-r from-rose-950 via-slate-900 to-teal-950 text-white p-6 sm:p-12 border border-rose-900/40 shadow-2xl relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-black tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>MEDITRUST SAKHI™ · WOMEN&apos;S HEALTH MARKETPLACE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
              Period Care, Intimate Hygiene &amp; <span className="text-gradient-chic">Hormonal Wellness</span>
            </h1>

            <p className="text-xs sm:text-base text-slate-300 font-normal leading-relaxed">
              Safe, toxin-free period essentials, self-heating cramp patches, pH-balanced intimate washes, and PCOS hormonal skincare. Dermatologist-approved, backed by <strong>Dr. Arya AI clinical guidance</strong> and matched with <strong>80% Jan Aushadhi generic savings</strong>.
            </p>

            {/* Value Props Badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold text-slate-200">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>15+ Lakh Women Trusted</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                <Sparkles className="w-4 h-4 text-rose-400" />
                <span>100% Rash-Free &amp; Toxin-Free</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                <Truck className="w-4 h-4 text-blue-400" />
                <span>Express Pan-India Delivery (24-48h)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                <Tag className="w-4 h-4 text-teal-400" />
                <span>Save 20% on Auto-Subscriptions</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── MAIN MARKETPLACE BODY ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        
        {/* Category & Life Stage Multi-Filter Bar */}
        <div className="space-y-4 bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs">
          
          {/* Category Tabs */}
          <div className="space-y-2">
            <span className="text-3xs font-bold uppercase tracking-wider text-slate-400 block">
              Product Categories
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              {[
                { id: 'all', label: 'All Products (12)', icon: '🛍️' },
                { id: 'period-care', label: 'Period Care (Pads, Panties, Patches, Cup)', icon: '🌸' },
                { id: 'intimate-hygiene', label: 'Intimate Hygiene (Wash, Liners, Wipes)', icon: '🫧' },
                { id: 'hormonal-skincare', label: 'Hormonal Skincare (Pimple Patches, Cleanser)', icon: '✨' },
                { id: 'pcos-supplements', label: 'PCOS & Nutrition (Inositol 40:1, Teas)', icon: '💊' },
                { id: 'care-bundles', label: 'Care Bundles & Starter Kits', icon: '🎁' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-full transition-all flex items-center gap-1.5 ${
                    activeCategory === cat.id
                      ? 'bg-rose-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Life Stage Filters */}
          <div className="space-y-2 pt-2 border-t border-slate-100">
            <span className="text-3xs font-bold uppercase tracking-wider text-slate-400 block">
              Filter by Life Stage
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-semibold">
              {[
                { id: 'all', label: 'All Life Stages' },
                { id: 'Teen', label: '🌱 Teen & Menarche (10-18y)' },
                { id: 'Menstrual', label: '🩸 Menstrual & Cramps (15-28y)' },
                { id: 'PCOS', label: '🌸 PCOS & Acne Defense (18-35y)' },
                { id: 'Postpartum', label: '🤱 Maternity & New Mother' },
                { id: 'Menopause', label: '🦋 Menopause & Midlife (40+y)' }
              ].map((stg) => (
                <button
                  key={stg.id}
                  onClick={() => setActiveStage(stg.id)}
                  className={`px-3 py-1.5 rounded-xl border text-3xs transition-all ${
                    activeStage === stg.id
                      ? 'bg-slate-900 border-slate-900 text-white font-bold'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-600'
                  }`}
                >
                  {stg.label}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* ── PRODUCTS GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              
              {/* Card Top Section */}
              <div className="p-6 space-y-4">
                
                {/* Header: Badge & Category Icon */}
                <div className="flex items-center justify-between gap-2">
                  <span className={`text-3xs font-black uppercase px-2.5 py-1 rounded-full ${product.badgeColor}`}>
                    {product.badge}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-100">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{product.rating}</span>
                    <span className="text-slate-400 text-3xs">({product.reviewCount})</span>
                  </div>
                </div>

                {/* Product Name & Tagline */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{product.icon}</span>
                    <h3 className="font-black text-base text-slate-950 leading-snug group-hover:text-rose-600 transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">
                    {product.tagline}
                  </p>
                </div>

                {/* Price & Savings */}
                <div className="flex items-baseline gap-2 pt-1 border-t border-slate-100">
                  <span className="text-2xl font-black text-slate-950">₹{product.price}</span>
                  <span className="text-xs text-slate-400 line-through">₹{product.originalPrice}</span>
                  <span className="text-3xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    {product.discountPercent}% OFF
                  </span>
                </div>

                {/* Key Bullet Features */}
                <ul className="space-y-1 text-xs text-slate-600 pt-1">
                  {product.keyFeatures.slice(0, 3).map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-1.5 text-3xs font-medium leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Dr. Arya Clinical Rationale Tooltip */}
                <div className="p-3 rounded-2xl bg-rose-50/70 border border-rose-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-3xs font-bold text-rose-900">
                    <Sparkles className="w-3 h-3 text-rose-600" />
                    <span>Why Dr. Arya Recommends This:</span>
                  </div>
                  <p className="text-3xs text-slate-600 line-clamp-2 leading-relaxed font-normal">
                    {product.drAryaRecommendation}
                  </p>
                </div>

                {/* PMBJP Jan Aushadhi Alternative Badge (if available) */}
                {product.janAushadhiAlternative && (
                  <div className="p-2.5 rounded-2xl bg-teal-50 border border-teal-200 text-3xs text-teal-950 flex items-center justify-between">
                    <div>
                      <span className="font-bold block">💊 Jan Aushadhi Equivalent:</span>
                      <span className="text-slate-600">{product.janAushadhiAlternative.name} (₹{product.janAushadhiAlternative.price})</span>
                    </div>
                    <span className="font-black text-teal-700 bg-teal-200 px-2 py-0.5 rounded-lg">
                      Save {product.janAushadhiAlternative.savingPercent}%
                    </span>
                  </div>
                )}

              </div>

              {/* Card Bottom CTA Actions */}
              <div className="p-6 pt-0 space-y-2 border-t border-slate-100 mt-2">
                <div className="flex items-center gap-2 pt-3">
                  <button
                    onClick={() => handleOpenProduct(product)}
                    className="flex-1 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold text-xs transition-colors"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => handleWhatsAppOrder(product, product.packOptions[0], false)}
                    className="py-2.5 px-4 rounded-full bg-[#008069] hover:bg-[#006e5a] text-white font-bold text-xs flex items-center gap-1.5 shadow-2xs transition-transform hover:scale-102"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Buy</span>
                  </button>
                </div>

                <div className="flex items-center justify-between text-3xs text-slate-500 px-1 font-medium">
                  <span>🔄 Auto-Replenish Available</span>
                  <span className="text-rose-600 font-bold">20% Off Monthly</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </section>

      {/* ── DR. ARYA CLINICAL PRODUCT RECOMMENDER BANNER ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-700 uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>AI CLINICAL PRODUCT MATCHING</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Unsure which products are right for your cycle or PCOS symptoms?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Ask <strong>Dr. Arya AI</strong> on WhatsApp or Telegram. She analyzes your cycle flow, skin triggers, and biomarkers to build a personalized monthly period &amp; skincare kit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full md:w-auto">
            <Link
              href="/symptom-checker"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs text-center shadow-xs transition-colors"
            >
              Ask Dr. Arya Online
            </Link>
            <a
              href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20please%20recommend%20a%20personalized%20period%20care%20and%20PCOS%20kit%20for%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-[#008069] hover:bg-[#006e5a] text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── PRODUCT DETAILS & ORDER MODAL ── */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto animate-fadeIn">
            
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Top Info */}
            <div className="space-y-2 pr-8">
              <div className="flex items-center gap-2">
                <span className={`text-3xs font-black uppercase px-2.5 py-1 rounded-full ${selectedProduct.badgeColor}`}>
                  {selectedProduct.badge}
                </span>
                <span className="text-3xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  {selectedProduct.categoryLabel} · {selectedProduct.stage} Stage
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-3xl">{selectedProduct.icon}</span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-950 leading-tight">
                    {selectedProduct.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-normal">
                    {selectedProduct.tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Price & Subscription Selector */}
            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-3">
              <div className="flex items-baseline justify-between">
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black text-rose-600">
                      ₹{isSubscribing ? Math.round(selectedProduct.price * 0.8) : selectedProduct.price}
                    </span>
                    <span className="text-sm text-slate-400 line-through">₹{selectedProduct.originalPrice}</span>
                  </div>
                  <span className="text-3xs text-slate-500">
                    Inclusive of all taxes · Free delivery on orders above ₹499
                  </span>
                </div>

                <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-white px-2.5 py-1 rounded-xl border border-amber-200 shadow-2xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{selectedProduct.rating} / 5.0</span>
                </div>
              </div>

              {/* Subscribe & Save 20% Toggle */}
              <div
                onClick={() => setIsSubscribing(!isSubscribing)}
                className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                  isSubscribing ? 'bg-white border-rose-500 shadow-xs' : 'bg-white/60 border-slate-200'
                }`}
              >
                <div className="flex items-center gap-2 text-xs">
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    isSubscribing ? 'border-rose-600 bg-rose-600 text-white' : 'border-slate-300'
                  }`}>
                    {isSubscribing && <Check className="w-2.5 h-2.5" />}
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Subscribe &amp; Save 20% Extra</span>
                    <span className="text-3xs text-slate-500">Auto-delivered every 30 days · Cancel anytime in 1 tap</span>
                  </div>
                </div>
                <span className="text-3xs font-black text-rose-600 bg-rose-100 px-2 py-0.5 rounded-full">
                  SAVE 20%
                </span>
              </div>
            </div>

            {/* Pack Selection */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-700 block">Choose Pack Size:</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {selectedProduct.packOptions.map((pack) => (
                  <button
                    key={pack}
                    onClick={() => setSelectedPack(pack)}
                    className={`p-2.5 rounded-xl border text-left text-xs font-semibold transition-all ${
                      selectedPack === pack
                        ? 'border-rose-600 bg-rose-50/80 text-rose-950 font-bold'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-white'
                    }`}
                  >
                    {pack}
                  </button>
                ))}
              </div>
            </div>

            {/* Clinical Details Breakdown */}
            <div className="space-y-4 text-xs border-t border-slate-100 pt-4">
              
              {/* Dr. Arya Rationale */}
              <div className="space-y-1">
                <h4 className="font-black text-slate-900 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-rose-600" />
                  <span>Clinical Rationale (Dr. Arya AI Guidance)</span>
                </h4>
                <p className="text-slate-600 leading-relaxed font-normal bg-slate-50 p-3 rounded-2xl border border-slate-200">
                  {selectedProduct.drAryaRecommendation}
                </p>
              </div>

              {/* Key Ingredients */}
              <div className="space-y-1.5">
                <h4 className="font-black text-slate-900">Key Ingredients &amp; Bio-Nutrients:</h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProduct.ingredients.map((ing, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-3xs font-medium">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* How to Use */}
              <div className="space-y-1">
                <h4 className="font-black text-slate-900">How to Use:</h4>
                <p className="text-slate-600 leading-relaxed font-normal">
                  {selectedProduct.howToUse}
                </p>
              </div>

            </div>

            {/* Modal Bottom Order Bar */}
            <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={() => handleWhatsAppOrder(selectedProduct, selectedPack, isSubscribing)}
                className="w-full sm:flex-1 py-3.5 rounded-full bg-[#008069] hover:bg-[#006e5a] text-white font-black text-sm flex items-center justify-center gap-2 shadow-md transition-transform hover:scale-102"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order via WhatsApp (₹{isSubscribing ? Math.round(selectedProduct.price * 0.8) : selectedProduct.price})</span>
              </button>

              <button
                onClick={() => {
                  setCartSuccessMessage(`Added ${selectedProduct.name} (${selectedPack}) to your Meditrust Care Bag!`)
                  setTimeout(() => setCartSuccessMessage(''), 4000)
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
              >
                Add to Cart
              </button>
            </div>

            {cartSuccessMessage && (
              <div className="p-3 rounded-xl bg-emerald-100 text-emerald-900 text-xs font-bold text-center border border-emerald-300">
                {cartSuccessMessage}
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  )
}
