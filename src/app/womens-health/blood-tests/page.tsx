'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Search, Filter, Clock, Droplets, ShieldCheck, Stethoscope, ChevronRight,
  ArrowRight, CheckCircle2, AlertCircle, Building2, MapPin, Sparkles,
  BookOpen, Calendar, HelpCircle, Phone, Info, Award, FileText, Activity
} from 'lucide-react'
import {
  WOMENS_BLOOD_TESTS,
  WOMENS_BLOOD_TEST_CATEGORIES,
  BloodTestItem
} from '@/data/womensBloodTestsData'
import { WOMENS_BLOOD_TEST_ARTICLES } from '@/data/womensBloodTestsArticles'
import WomensHealthPictorialInfographics from '@/components/womens-health/WomensHealthPictorialInfographics'

export default function WomensBloodTestsHubPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [timingFilter, setTimingFilter] = useState<'all' | 'fasting' | 'day2_3' | 'anytime'>('all')
  const [selectedTestModal, setSelectedTestModal] = useState<BloodTestItem | null>(null)

  // Filtered blood tests
  const filteredTests = useMemo(() => {
    return WOMENS_BLOOD_TESTS.filter((test) => {
      // Category match
      const matchesCategory = selectedCategory === 'all' || test.category === selectedCategory

      // Timing match
      let matchesTiming = true
      if (timingFilter === 'fasting') matchesTiming = test.fastingRequired
      if (timingFilter === 'day2_3') matchesTiming = test.idealTiming.toLowerCase().includes('day 2') || test.idealTiming.toLowerCase().includes('day 3')
      if (timingFilter === 'anytime') matchesTiming = !test.fastingRequired && !test.idealTiming.toLowerCase().includes('day 2')

      // Search match
      const q = searchQuery.toLowerCase().trim()
      const matchesSearch =
        !q ||
        test.name.toLowerCase().includes(q) ||
        test.shortCode.toLowerCase().includes(q) ||
        test.whyRequired.toLowerCase().includes(q) ||
        test.symptomsPromptingTest.some((s) => s.toLowerCase().includes(q))

      return matchesCategory && matchesTiming && matchesSearch
    })
  }, [searchQuery, selectedCategory, timingFilter])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden pt-20 sm:pt-24 pb-20">
      
      {/* ── 1. BREADCRUMB & HEADER HERO ── */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/womens-health" className="hover:text-rose-700 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold truncate">Women&apos;s Blood Tests Directory</span>
        </nav>

        {/* Hero Header */}
        <div className="bg-gradient-to-br from-rose-950 via-slate-900 to-slate-950 text-white rounded-3xl p-8 sm:p-12 border border-rose-900/40 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl space-y-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-bold border border-rose-500/30">
              <Droplets className="w-4 h-4 text-rose-400" />
              <span>EVIDENCE-BASED WOMEN&apos;S DIAGNOSTIC HUB</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Essential Blood Tests for Women: Complete Clinical Directory &amp; Guides
            </h1>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Explore 35+ medically required blood investigations across every life stage—PCOS hormone profiles, ovarian reserve (AMH), trimester pregnancy tests, ferritin iron stores, thyroid metabolism, and post-40 bone health.
            </p>

            {/* Quick stats pills */}
            <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-semibold">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-rose-200 border border-white/15">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>ICMR &amp; FOGSI Guidelines</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-rose-200 border border-white/15">
                <Clock className="w-4 h-4 text-teal-300" />
                <span>60-Min Home Blood Pickup in Pune &amp; PCMC</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white/10 text-rose-200 border border-white/15">
                <Stethoscope className="w-4 h-4 text-rose-400" />
                <span>Reviewed by Dr. Arya AI</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 2. LIVE SEARCH & FILTER CONTROLS ── */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          
          {/* Top Search Bar */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by test name, hormone (e.g. LH, AMH, Ferritin, TSH) or symptom (e.g. Hair fall, Late period)…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-rose-500 focus:bg-white transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Timing / Fasting Filter Buttons */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 text-xs font-bold flex-shrink-0">
              <button
                onClick={() => setTimingFilter('all')}
                className={`px-3.5 py-3 rounded-2xl transition-all ${
                  timingFilter === 'all'
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                All Timing
              </button>
              <button
                onClick={() => setTimingFilter('day2_3')}
                className={`px-3.5 py-3 rounded-2xl transition-all whitespace-nowrap ${
                  timingFilter === 'day2_3'
                    ? 'bg-rose-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                🌸 Day 2–3 Period Tests
              </button>
              <button
                onClick={() => setTimingFilter('fasting')}
                className={`px-3.5 py-3 rounded-2xl transition-all whitespace-nowrap ${
                  timingFilter === 'fasting'
                    ? 'bg-teal-700 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                ☕ 10-12h Fasting Required
              </button>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {WOMENS_BLOOD_TEST_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all whitespace-nowrap flex items-center gap-2 ${
                    isActive
                      ? 'bg-rose-100 text-rose-950 border border-rose-300 shadow-2xs'
                      : 'bg-slate-100/80 text-slate-600 hover:bg-slate-200/80 border border-transparent'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              )
            })}
          </div>

        </div>

        {/* ── 3. BLOOD TESTS GRID DIRECTORY ── */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight flex items-center gap-2">
              <span>Verified Diagnostic Directory</span>
              <span className="text-xs bg-rose-100 text-rose-800 font-bold px-2.5 py-0.5 rounded-full border border-rose-200">
                {filteredTests.length} Tests Found
              </span>
            </h2>
            <span className="text-xs text-slate-500 font-mono hidden sm:inline">
              Prices compared across Pune &amp; PCMC Labs
            </span>
          </div>

          {filteredTests.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-slate-200 space-y-3">
              <AlertCircle className="w-8 h-8 text-amber-500 mx-auto" />
              <h3 className="font-bold text-slate-900">No matching blood tests found</h3>
              <p className="text-xs text-slate-500">Try changing your search term or clearing the timing filter.</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                  setTimingFilter('all')
                }}
                className="px-4 py-2 rounded-xl bg-slate-900 text-white text-xs font-bold"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredTests.map((test) => (
                <div
                  key={test.id}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all hover:border-rose-300 flex flex-col justify-between group relative"
                >
                  <div className="space-y-3">
                    
                    {/* Header Pill */}
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-3xs font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-rose-50 text-rose-800 border border-rose-200">
                        {test.categoryLabel}
                      </span>
                      {test.fastingRequired ? (
                        <span className="text-3xs font-semibold px-2 py-0.5 rounded-md bg-amber-50 text-amber-800 border border-amber-200 flex items-center gap-1">
                          <Clock className="w-2.5 h-2.5" />
                          <span>Fasting {test.fastingHours || 10}h</span>
                        </span>
                      ) : (
                        <span className="text-3xs font-semibold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                          Non-Fasting
                        </span>
                      )}
                    </div>

                    {/* Test Title */}
                    <div>
                      <h3 className="text-base font-bold text-slate-950 group-hover:text-rose-700 transition-colors leading-snug">
                        {test.name}
                      </h3>
                      <span className="text-xs font-semibold text-slate-400 block mt-0.5">
                        Code: {test.shortCode}
                      </span>
                    </div>

                    {/* Clinical Rationale */}
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {test.whyRequired}
                    </p>

                    {/* Ideal Timing Pill */}
                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 text-3xs space-y-1">
                      <div className="flex items-center gap-1 text-slate-700 font-bold">
                        <Calendar className="w-3 h-3 text-rose-600" />
                        <span>Ideal Timing:</span>
                      </div>
                      <p className="text-slate-600 font-medium">
                        {test.idealTiming}
                      </p>
                    </div>

                    {/* Symptoms Chips */}
                    <div className="flex flex-wrap gap-1">
                      {test.symptomsPromptingTest.slice(0, 3).map((sym, i) => (
                        <span
                          key={i}
                          className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md font-medium"
                        >
                          {sym}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Pricing & Modal Trigger */}
                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-slate-400 font-medium block">Avg. Market Cost</span>
                      <span className="text-sm font-black text-slate-900">{test.marketPriceRange}</span>
                    </div>

                    <button
                      onClick={() => setSelectedTestModal(test)}
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-rose-700 text-white font-bold text-xs shadow-2xs transition-colors flex items-center gap-1"
                    >
                      <span>View Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
        </div>

        {/* ── 4. PICTORIAL CLINICAL INFOGRAPHICS ── */}
        <div className="pt-4">
          <WomensHealthPictorialInfographics />
        </div>

        {/* ── 5. SEO-BACKED HIGH-TRENDING ARTICLES SECTION ── */}
        <section className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 mt-12">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-700 uppercase tracking-wider mb-1">
                <BookOpen className="w-4 h-4" />
                <span>EXPERT CLINICAL GUIDES</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Trending Articles on Women&apos;s Blood Tests &amp; Diagnostics
              </h2>
            </div>
            <Link
              href="/womens-health/health-library"
              className="text-xs font-bold text-rose-700 hover:text-rose-900 flex items-center gap-1 group"
            >
              <span>View All 20 Health Guides</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WOMENS_BLOOD_TEST_ARTICLES.map((art) => (
              <article
                key={art.slug}
                className="bg-slate-50 rounded-3xl p-6 border border-slate-200/80 hover:border-rose-300 hover:bg-white transition-all shadow-2xs flex flex-col justify-between space-y-4 group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-3xs font-bold text-slate-500">
                    <span className="bg-rose-100 text-rose-800 px-2 py-0.5 rounded-full">
                      {art.category}
                    </span>
                    <span>{art.readTime}</span>
                  </div>

                  <h3 className="font-bold text-base text-slate-950 group-hover:text-rose-700 transition-colors leading-snug">
                    <Link href={`/womens-health/blood-tests/${art.slug}`}>
                      {art.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
                  <span className="text-[11px] text-slate-500 font-medium">
                    By {art.medicalReviewer.name.split(',')[0]}
                  </span>
                  <Link
                    href={`/womens-health/blood-tests/${art.slug}`}
                    className="font-bold text-rose-700 hover:text-rose-900 flex items-center gap-1 group-hover:underline"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ── 5. DR. ARYA & LAB PICKUP CTA ── */}
        <aside className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="space-y-3 text-center md:text-left max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-black text-rose-300 flex items-center justify-center md:justify-start gap-2">
              <Stethoscope className="w-6 h-6 text-rose-400" />
              <span>Need Help Interpreting Your Blood Test Reports?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Upload your prescription or lab PDF in Dr. Arya&apos;s WhatsApp-style chat. Dr. Arya explains your hormone levels, ferritin numbers, and thyroid ranges in plain Marathi, Hindi, or English in seconds.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <Link
              href="/symptom-checker"
              className="px-6 py-3.5 rounded-full bg-[#008069] hover:bg-[#006e5a] text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
            >
              <span>Chat with Dr. Arya AI</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+917028025717"
              className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-colors border border-white/20 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Book Home Pickup (+91 7028025717)</span>
            </a>
          </div>
        </aside>

      </div>

      {/* ── 6. DETAILED TEST MODAL (POPUP) ── */}
      {selectedTestModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-2xl w-full border border-slate-200 shadow-2xl space-y-6 animate-scaleUp max-h-[90vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-start justify-between border-b border-slate-100 pb-4">
              <div>
                <span className="text-3xs font-black uppercase tracking-wider px-2.5 py-1 rounded-lg bg-rose-100 text-rose-900 border border-rose-200">
                  {selectedTestModal.categoryLabel}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-slate-950 mt-1.5">
                  {selectedTestModal.name}
                </h3>
              </div>
              <button
                onClick={() => setSelectedTestModal(null)}
                className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            {/* Core Clinical Details */}
            <div className="space-y-4 text-xs sm:text-sm">
              <div className="space-y-1">
                <strong className="text-slate-900 font-bold block">Why It Is Required:</strong>
                <p className="text-slate-700 leading-relaxed">{selectedTestModal.whyRequired}</p>
              </div>

              <div className="space-y-1">
                <strong className="text-slate-900 font-bold block">Clinical Significance:</strong>
                <p className="text-slate-600 leading-relaxed">{selectedTestModal.clinicalSignificance}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200">
                  <strong className="text-rose-950 font-bold block text-xs mb-0.5">Ideal Timing &amp; Fasting:</strong>
                  <p className="text-slate-700 text-xs">{selectedTestModal.idealTiming}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-200">
                  <strong className="text-teal-950 font-bold block text-xs mb-0.5">Normal Reference Range:</strong>
                  <p className="text-slate-700 text-xs font-mono">{selectedTestModal.normalRange}</p>
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <strong className="text-slate-900 font-bold block">Abnormal Result Interpretation:</strong>
                <p className="text-slate-600 text-xs leading-relaxed">{selectedTestModal.abnormalMeaning}</p>
              </div>

              {/* Pune Lab Price Comparison Table */}
              <div className="space-y-2 pt-2">
                <strong className="text-slate-900 font-bold block text-xs">Pune &amp; PCMC Lab Price Comparison:</strong>
                <div className="overflow-x-auto rounded-xl border border-slate-200 text-xs">
                  <table className="w-full text-left border-collapse">
                    <thead className="bg-slate-100 text-slate-900 font-bold">
                      <tr>
                        <th className="p-2.5 border-b border-slate-200">Thyrocare</th>
                        <th className="p-2.5 border-b border-slate-200">Metropolis</th>
                        <th className="p-2.5 border-b border-slate-200">Orange Health</th>
                        <th className="p-2.5 border-b border-slate-200">Dr. Lal PathLabs</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700 font-semibold">
                      <tr>
                        <td className="p-2.5 text-emerald-700">₹{selectedTestModal.puneLabs.thyrocarePrice}</td>
                        <td className="p-2.5">₹{selectedTestModal.puneLabs.metropolisPrice}</td>
                        <td className="p-2.5">₹{selectedTestModal.puneLabs.orangeHealthPrice}</td>
                        <td className="p-2.5">₹{selectedTestModal.puneLabs.drLalPrice}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Footer Action Buttons */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-100">
              <Link
                href="/symptom-checker"
                className="px-5 py-2.5 rounded-xl bg-[#008069] text-white font-bold text-xs hover:bg-[#006e5a] transition-colors"
              >
                Discuss with Dr. Arya AI
              </Link>
              <a
                href="tel:+917028025717"
                className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs transition-colors"
              >
                Book Home Collection (+91 7028025717)
              </a>
            </div>

          </div>
        </div>
      )}

    </div>
  )
}
