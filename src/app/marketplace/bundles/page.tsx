'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Package, Sparkles, CheckCircle2, ShoppingBag,
  ArrowRight, ChevronRight, Star, Plus, Check, ShieldCheck
} from 'lucide-react'
import { ALL_MARKETPLACE_PRODUCTS, MarketplaceProductItem } from '@/data/marketplaceCatalog'
import { useCart } from '@/context/CartContext'

export default function BundlesPage() {
  const { addItem, openCart } = useCart()

  // Build Your Own Kit State
  const padOptions = ALL_MARKETPLACE_PRODUCTS.filter(p => p.category === 'period-care')
  const reliefOptions = ALL_MARKETPLACE_PRODUCTS.filter(p => p.category === 'cramps-pms' || p.category === 'intimate-hygiene')
  const wellnessOptions = ALL_MARKETPLACE_PRODUCTS.filter(p => p.category === 'pcos' || p.category === 'skin-health' || p.category === 'nutrition')

  const [selectedPad, setSelectedPad] = useState<MarketplaceProductItem>(padOptions[0])
  const [selectedRelief, setSelectedRelief] = useState<MarketplaceProductItem>(reliefOptions[0])
  const [selectedWellness, setSelectedWellness] = useState<MarketplaceProductItem>(wellnessOptions[0])

  const rawTotal = selectedPad.price + selectedRelief.price + selectedWellness.price
  const bundleDiscount = Math.round(rawTotal * 0.25)
  const bundlePrice = rawTotal - bundleDiscount

  const handleAddCustomBundle = () => {
    addItem({
      id: `custom-bundle-${Date.now()}`,
      name: `Custom Sakhi™ 3-Piece Care Kit (${selectedPad.name.slice(0, 20)}... + ${selectedRelief.name.slice(0, 15)}... + ${selectedWellness.name.slice(0, 15)}...)`,
      price: bundlePrice,
      originalPrice: rawTotal,
      pack: '3 Custom Items (25% Bundle Savings)',
      image: selectedPad.image,
      icon: '📦',
      isSubscription: false,
    })
    openCart()
  }

  const bundles = ALL_MARKETPLACE_PRODUCTS.filter(p => p.category === 'bundles' || p.id === 'sakhi-teen-first-period-kit' || p.id === 'sakhi-postpartum-recovery-kit' || p.id === 'sakhi-skincare-trio-box')

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/marketplace" className="hover:text-rose-600 transition-colors">Marketplace</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Curated Care Bundles</span>
        </nav>
      </div>

      {/* ── HERO BANNER ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-purple-950 to-rose-950 text-white p-6 sm:p-10 border border-slate-800 shadow-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-3xs font-black uppercase">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>SAVE UP TO 25% ON COMPLETE REGIMENS</span>
          </div>

          <div className="max-w-2xl space-y-2">
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Curated Care Bundles &amp; Custom Kit Builder
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Dermatologist-formulated routines designed for specific life stages—from first period puberty kits and PCOS hormonal care boxes to maternity hospital hampers.
            </p>
          </div>
        </div>
      </section>

      {/* ── 1. INTERACTIVE "BUILD YOUR OWN CARE KIT" ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-rose-300 shadow-lg space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-rose-600 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INTERACTIVE KIT BUILDER</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-950">
                Build Your Own 3-Step Care Kit (Save Flat 25%)
              </h2>
            </div>

            <div className="text-right">
              <span className="text-xs text-slate-400 line-through">₹{rawTotal}</span>
              <div className="text-2xl font-black text-rose-600">₹{bundlePrice}</div>
              <span className="text-3xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                Save ₹{bundleDiscount} (25% OFF)
              </span>
            </div>
          </div>

          {/* 3 Step Selection Rows */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Step 1: Choose Period Protection */}
            <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-black text-slate-900 block">Step 1: Choose Period Care</span>
              <div className="space-y-2">
                {padOptions.slice(0, 3).map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setSelectedPad(p)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between text-xs ${
                      selectedPad.id === p.id ? 'bg-rose-50 border-rose-500 font-bold text-rose-950 shadow-2xs' : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="truncate max-w-[180px]">{p.name.split('(')[0]}</span>
                    <span className="font-mono font-bold">₹{p.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Cramp Relief or Wash */}
            <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-black text-slate-900 block">Step 2: Choose Relief &amp; Hygiene</span>
              <div className="space-y-2">
                {reliefOptions.slice(0, 3).map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setSelectedRelief(p)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between text-xs ${
                      selectedRelief.id === p.id ? 'bg-rose-50 border-rose-500 font-bold text-rose-950 shadow-2xs' : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="truncate max-w-[180px]">{p.name.split('(')[0]}</span>
                    <span className="font-mono font-bold">₹{p.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 3: Choose Nutrition / Skincare */}
            <div className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <span className="text-xs font-black text-slate-900 block">Step 3: Choose Skincare or Tea</span>
              <div className="space-y-2">
                {wellnessOptions.slice(0, 3).map((p) => (
                  <div
                    key={p.id}
                    onClick={() => setSelectedWellness(p)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between text-xs ${
                      selectedWellness.id === p.id ? 'bg-rose-50 border-rose-500 font-bold text-rose-950 shadow-2xs' : 'bg-white border-slate-200 text-slate-700'
                    }`}
                  >
                    <span className="truncate max-w-[180px]">{p.name.split('(')[0]}</span>
                    <span className="font-mono font-bold">₹{p.price}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Builder Action */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-slate-100">
            <span className="text-3xs text-slate-500">
              Includes free express delivery &amp; complimentary Meditrust waterproof travel pouch.
            </span>

            <button
              onClick={handleAddCustomBundle}
              className="px-8 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-xs shadow-md transition-all flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add Custom Bundle to Care Bag (₹{bundlePrice})</span>
            </button>
          </div>

        </div>
      </section>

      {/* ── 2. PRE-CURATED BUNDLES GRID ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">DOCTOR-FORMULATED SETS</span>
          <h2 className="text-2xl font-black text-slate-950">Pre-Curated Clinical Bundles</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((bundle) => (
            <div
              key={bundle.id}
              className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-2xs hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                <img
                  src={bundle.image}
                  alt={bundle.name}
                  className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500"
                />
                <span className={`absolute top-3 left-3 text-3xs font-black uppercase px-2.5 py-1 rounded-full ${bundle.badgeColor}`}>
                  {bundle.badge}
                </span>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 className="font-black text-base text-slate-950 leading-snug">{bundle.name}</h3>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed">{bundle.shortDescription}</p>
                  
                  <div className="flex items-baseline gap-2 pt-1 border-t border-slate-100">
                    <span className="text-2xl font-black text-slate-950">₹{bundle.price}</span>
                    <span className="text-xs text-slate-400 line-through">₹{bundle.mrp}</span>
                    <span className="text-3xs font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      {bundle.discountPercent}% OFF
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    addItem({
                      id: bundle.id,
                      name: bundle.name,
                      price: bundle.price,
                      originalPrice: bundle.mrp,
                      pack: bundle.quantity,
                      image: bundle.image,
                      icon: '📦',
                      isSubscription: false,
                    })
                    openCart()
                  }}
                  className="w-full py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-2xs flex items-center justify-center gap-1.5"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add Bundle to Care Bag</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
