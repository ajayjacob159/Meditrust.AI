'use client'

import Link from 'next/link'
import {
  ShieldCheck, Star, Sparkles, ChevronRight,
  ArrowRight, CheckCircle2, Building2
} from 'lucide-react'

export default function BrandsMarketplacePage() {
  const brands = [
    {
      id: 'meditrust-sakhi',
      name: 'Meditrust Sakhi™',
      tagline: '100% White-Labeled Clinical Period, Hormones & Intimate Care',
      category: 'Clinical Period & Intimate Healthcare',
      isFirstParty: true,
      rating: 4.9,
      productsCount: 18,
      description: 'Dermatologist-formulated, 100% chlorine-free, toxin-free sanitary pads, self-heating cramp patches, pH 3.5–4.5 foaming washes, and 40:1 Inositol PCOS wellness boxes.',
      badge: 'VERIFIED 1ST PARTY BRAND',
      image: '/logo.png',
    },
    {
      id: 'gynoveda',
      name: 'Gynoveda',
      tagline: 'Ayurvedic Formulations for Period & Menopause Care',
      category: 'Ayurvedic Gynaecology',
      isFirstParty: false,
      rating: 4.7,
      productsCount: 12,
      description: 'Traditional Ayurvedic Rasayanas combined with modern clinical testing for delayed periods, heavy bleeding, and menopausal wellness.',
      badge: 'VERIFIED PARTNER',
      image: '/logo.png',
    },
    {
      id: 'sirona',
      name: 'Sirona Hygiene',
      tagline: 'Innovative Menstrual Cups & Intimate Accessories',
      category: 'Period & Travel Hygiene',
      isFirstParty: false,
      rating: 4.6,
      productsCount: 15,
      description: 'Pioneers of stand-and-pee female urination devices, medical silicone menstrual cups, and biodegradable disposal bags.',
      badge: 'VERIFIED PARTNER',
      image: '/logo.png',
    },
    {
      id: 'pee-safe',
      name: 'Pee Safe',
      tagline: 'Toilet Seat Sanitizers & Public Restroom Hygiene',
      category: 'Sanitization & Daily Hygiene',
      isFirstParty: false,
      rating: 4.7,
      productsCount: 10,
      description: 'India\'s leading toilet seat sanitizer sprays preventing UTI and bacterial transfer in offices, flights, and public restrooms.',
      badge: 'VERIFIED PARTNER',
      image: '/logo.png',
    },
    {
      id: 'carmesi',
      name: 'Carmesi',
      tagline: 'Natural Bamboo & Corn Starch Period Pads',
      category: 'Organic Period Care',
      isFirstParty: false,
      rating: 4.7,
      productsCount: 8,
      description: 'Plant-based biodegradable sanitary napkins made with natural corn and bamboo fibers for sensitive skin.',
      badge: 'VERIFIED PARTNER',
      image: '/logo.png',
    },
    {
      id: 'plush',
      name: 'Plush',
      tagline: '100% Pure US Cotton Pads & Hair Removal',
      category: 'Body Care & Menstrual',
      isFirstParty: false,
      rating: 4.8,
      productsCount: 9,
      description: 'Crafted with 100% pure American cotton for a cloud-like soft period experience with zero friction chafing.',
      badge: 'VERIFIED PARTNER',
      image: '/logo.png',
    }
  ]

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/marketplace" className="hover:text-rose-600 transition-colors">Marketplace</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Verified Brand Partners</span>
        </nav>
      </div>

      {/* ── HERO BANNER ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-rose-950 text-white p-6 sm:p-10 border border-slate-800 shadow-xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-3xs font-black uppercase">
            <ShieldCheck className="w-3.5 h-3.5 text-rose-400" />
            <span>100% AUTHENTIC &amp; REGULATORY VERIFIED</span>
          </div>

          <div className="max-w-2xl space-y-2">
            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              Verified Women&apos;s Health Brands Directory
            </h1>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Every brand in the Meditrust marketplace is vetted for ingredient safety, IS 5405 compliance, and absence of harsh chlorine bleaches.
            </p>
          </div>
        </div>
      </section>

      {/* ── BRANDS LIST GRID ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className={`bg-white rounded-3xl p-6 border transition-all flex flex-col justify-between space-y-4 ${
                brand.isFirstParty ? 'border-2 border-rose-400 shadow-md' : 'border-slate-200 shadow-2xs hover:shadow-md'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-3xs font-black uppercase px-2.5 py-1 rounded-full ${
                    brand.isFirstParty ? 'bg-rose-500 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {brand.badge}
                  </span>
                  <div className="flex items-center gap-1 text-amber-500 text-xs font-bold bg-amber-50 px-2 py-0.5 rounded-lg border border-amber-100">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{brand.rating}</span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-black text-lg text-slate-950">{brand.name}</h3>
                  <span className="text-3xs font-bold text-rose-600 block">{brand.category}</span>
                  <p className="text-xs text-slate-500 font-normal leading-relaxed pt-1">
                    {brand.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-3xs text-slate-400 font-semibold">{brand.productsCount} Products Available</span>
                <Link
                  href="/marketplace"
                  className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-3xs font-bold flex items-center gap-1"
                >
                  <span>Browse Brand</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
