import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Sparkles, ShieldCheck, CheckCircle2, ChevronRight,
  ArrowRight, Phone, MessageCircle, Heart, Stethoscope,
  Building2, ShoppingBag, FileText, Activity, Clock, Tag, Check
} from 'lucide-react'
import {
  WOMENS_HEALTH_MASTER_SEGMENTS,
  HealthSegment
} from '@/data/womensHealthMasterSegments'

export function generateStaticParams() {
  return WOMENS_HEALTH_MASTER_SEGMENTS.map((segment) => ({
    slug: segment.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const segment = WOMENS_HEALTH_MASTER_SEGMENTS.find((s) => s.slug === params.slug)
  if (!segment) {
    return { title: 'Segment Not Found' }
  }

  return {
    title: `${segment.title} — Evidence-Based Clinical Care & Protocols (2026)`,
    description: `${segment.overview.slice(0, 160)}... Medically verified by Dr. Arya MD. Explore diagnostic tests, Jan Aushadhi generics & Meditrust Sakhi™ solutions.`,
    keywords: [
      segment.title,
      `${segment.title} India 2026`,
      `${segment.title} treatment`,
      `${segment.title} symptoms`,
      'Dr Arya AI Doctor',
      'Meditrust Sakhi Period Care',
      'Jan Aushadhi Generic Savings',
    ],
  }
}

export default function SegmentDetailPage({ params }: { params: { slug: string } }) {
  const segment = WOMENS_HEALTH_MASTER_SEGMENTS.find((s) => s.slug === params.slug)

  if (!segment) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-20 sm:pt-24 pb-20">
      
      {/* ── BREADCRUMBS ── */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/womens-health" className="hover:text-rose-700 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-400">{segment.category}</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">{segment.title}</span>
        </nav>
      </div>

      {/* ── HERO BANNER ── */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        <div className="rounded-3xl bg-gradient-to-r from-slate-950 via-rose-950/80 to-slate-950 text-white p-6 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden space-y-6">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-3xs font-black uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-rose-400" />
              <span>{segment.category} · CLINICAL PROTOCOL</span>
            </span>
            <span className="text-3xs text-slate-400 font-medium">
              Verified by Dr. Arya (Chief Clinical AI &amp; Gynaecology Council)
            </span>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-3xl bg-white/10 border border-white/15 flex items-center justify-center text-3xl sm:text-4xl shadow-inner flex-shrink-0">
              {segment.icon}
            </div>
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {segment.title}
              </h1>
              <p className="text-xs sm:text-sm text-rose-200 font-medium leading-relaxed">
                {segment.tagline}
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-base text-slate-300 font-normal leading-relaxed max-w-3xl">
            {segment.overview}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={`https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20have%20questions%20regarding%20${encodeURIComponent(segment.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-[#008069] hover:bg-[#006e5a] text-white font-bold text-xs flex items-center gap-2 shadow-xs transition-transform hover:scale-102"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consult Dr. Arya on WhatsApp (24/7)</span>
            </a>

            <Link
              href="/womens-marketplace"
              className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-2 shadow-xs"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop Meditrust Sakhi™ Products</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ── MAIN CONTENT GRID ── */}
      <section className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 8 Cols: Clinical Protocols & Insights */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Key Clinical Focus Areas */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-rose-600" />
                <h2 className="text-lg sm:text-xl font-black text-slate-950">
                  Key Focus Areas &amp; Diagnostic Indications
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {segment.keyFocusAreas.map((area, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-semibold text-slate-800 leading-snug">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Standard Clinical Protocols */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center gap-2">
                <Stethoscope className="w-5 h-5 text-teal-600" />
                <h2 className="text-lg sm:text-xl font-black text-slate-950">
                  Evidence-Based Clinical Protocols
                </h2>
              </div>

              <div className="space-y-2.5">
                {segment.clinicalProtocols.map((protocol, i) => (
                  <div key={i} className="flex items-start gap-3 p-3.5 rounded-2xl bg-teal-50/50 border border-teal-100">
                    <span className="w-6 h-6 rounded-full bg-teal-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-xs text-slate-700 leading-relaxed font-normal">
                      {protocol}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Dr. Arya AI Medical Pearl Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-rose-50 via-rose-100/60 to-rose-50 border border-rose-200 space-y-2.5 shadow-xs">
              <div className="flex items-center gap-2 text-rose-950 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-rose-600" />
                <span>Dr. Arya Clinical Pearl &amp; Guidance</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                &ldquo;{segment.drAryaGuidance}&rdquo;
              </p>
              <div className="flex items-center gap-2 text-3xs text-rose-800 font-semibold pt-1">
                <span>Dr. Arya, MD (AI Medical Officer)</span>
                <span>•</span>
                <span>Council of 9 Women&apos;s Health Specialists</span>
              </div>
            </div>

            {/* Recommended Diagnostic Blood Tests */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🩸</span>
                  <h2 className="text-lg sm:text-xl font-black text-slate-950">
                    Recommended Blood &amp; Diagnostic Panels
                  </h2>
                </div>
                <span className="text-3xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  60-Min Doorstep Pickup
                </span>
              </div>

              <div className="space-y-3">
                {segment.recommendedTests.map((test, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="space-y-0.5">
                      <strong className="text-xs font-bold text-slate-900 block">{test.name}</strong>
                      <span className="text-3xs text-slate-500 font-normal">
                        Sample: {test.sampleType} · Report within {test.turnaround}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-base font-black text-slate-950">
                        {test.price === 0 ? 'FREE' : `₹${test.price}`}
                      </span>
                      <a
                        href={`https://wa.me/917028025717?text=Hi%20Meditrust,%20I%20want%20to%20book%20the%20${encodeURIComponent(test.name)}%20test%20for%20home%20collection.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-3xs"
                      >
                        Book Test
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            {segment.faqs.length > 0 && (
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
                <h3 className="text-base sm:text-lg font-black text-slate-950">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-3">
                  {segment.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1.5">
                      <strong className="text-xs font-bold text-slate-900 block">{faq.question}</strong>
                      <p className="text-xs text-slate-600 leading-relaxed font-normal">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Right 4 Cols: Recommended Products & Govt Schemes */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Recommended Products Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShoppingBag className="w-4 h-4 text-rose-600" />
                  <h3 className="font-black text-sm text-slate-950">Recommended Sakhi™ Care</h3>
                </div>
                <Link href="/womens-marketplace" className="text-3xs text-rose-600 font-bold hover:underline">
                  View All →
                </Link>
              </div>

              <div className="space-y-3">
                {segment.recommendedProducts.map((prod, i) => (
                  <div key={i} className="p-3 rounded-2xl border border-slate-200 bg-white space-y-2 hover:border-rose-300 transition-colors">
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-xs font-bold text-slate-900 leading-snug">{prod.name}</span>
                      <span className="text-3xs font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full flex-shrink-0">
                        {prod.tag}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-slate-100">
                      <span className="text-xs font-black text-slate-950">₹{prod.price}</span>
                      <Link
                        href="/womens-marketplace"
                        className="px-3 py-1 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-3xs"
                      >
                        Buy Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Government & CSR Coverage Card */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
              <div className="flex items-center gap-2">
                <Building2 className="w-4 h-4 text-purple-600" />
                <h3 className="font-black text-sm text-slate-950">Govt Schemes &amp; Subsidies</h3>
              </div>
              <p className="text-3xs text-slate-500 font-normal">
                Covered under state and central health initiatives in India.
              </p>
              <div className="space-y-2 pt-1">
                {segment.govtSchemes.map((scheme, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-purple-50 border border-purple-100 text-3xs font-semibold text-purple-950 flex items-center gap-2">
                    <Check className="w-3 h-3 text-purple-600 flex-shrink-0" />
                    <span>{scheme}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/womens-schemes-funds"
                className="w-full py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-3xs flex items-center justify-center gap-1 transition-colors"
              >
                <span>View All 35+ Schemes Hub</span>
                <ChevronRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Quick 24/7 AI Assistance Card */}
            <div className="p-6 rounded-3xl bg-slate-900 text-white space-y-3 shadow-md">
              <div className="flex items-center gap-1.5 text-3xs font-bold uppercase text-teal-400">
                <Sparkles className="w-3.5 h-3.5" />
                <span>24/7 MULTILINGUAL SAKHI</span>
              </div>
              <h4 className="text-base font-black leading-snug">
                Ask Dr. Arya in मराठी, हिंदी or English
              </h4>
              <p className="text-xs text-slate-300 font-normal">
                Upload your blood reports, ask private health questions, or locate nearby NABL labs in Pune and PCMC.
              </p>
              <a
                href={`https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20please%20guide%20me%20regarding%20${encodeURIComponent(segment.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-xs transition-transform hover:scale-102"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  )
}
