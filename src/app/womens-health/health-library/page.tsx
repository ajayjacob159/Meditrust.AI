'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  BookOpen, Search, Clock, ArrowRight, ShieldCheck,
  ChevronRight, Filter, Stethoscope, Sparkles, UserCheck
} from 'lucide-react'
import { WOMENS_HEALTH_ARTICLES } from '@/data/womensHealthArticles'

const CATEGORIES = [
  { id: 'all', name: 'All Articles' },
  { id: 'pcos', name: 'PCOS / PCOD' },
  { id: 'periods', name: 'Periods & Menstrual' },
  { id: 'pregnancy', name: 'Pregnancy' },
  { id: 'fertility', name: 'Fertility & Conception' },
  { id: 'postnatal', name: 'Postnatal & Baby' },
  { id: 'menopause', name: 'Menopause & Mid-Life' },
  { id: 'conditions', name: 'Gynecological Conditions' },
]

export default function WomensHealthLibraryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = WOMENS_HEALTH_ARTICLES.filter((article) => {
    const matchesCat = selectedCategory === 'all' || article.category === selectedCategory
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.primaryKeyword.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesSearch
  })

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 overflow-x-hidden pt-20 sm:pt-24 pb-20">
      
      {/* ── BREADCRUMBS ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/womens-health" className="hover:text-rose-700 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Knowledge Centre</span>
        </nav>
      </div>

      {/* ── HEADER & SEARCH HERO ── */}
      <header className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold border border-rose-200">
            <BookOpen className="w-3.5 h-3.5 text-rose-600" />
            <span>Medically Reviewed Clinical Library</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
            Women&apos;s Health Knowledge Centre
          </h1>

          <p className="text-base text-slate-600 leading-relaxed font-normal">
            Clinically reviewed, easy-to-understand guidance across menstrual health, PCOS, fertility, pregnancy, postnatal care, and menopause. Written for patients first, grounded in peer-reviewed clinical evidence.
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="max-w-2xl relative">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search symptoms, conditions (e.g. PCOS symptoms, missed period, AMH test, ovulation)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-white border border-slate-200 shadow-xs focus:outline-none focus:ring-2 focus:ring-rose-500 text-sm placeholder:text-slate-400"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:bg-rose-50 hover:text-rose-700 border border-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </header>

      {/* ── ARTICLES GRID ── */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-6 text-xs text-slate-500 font-semibold">
          <span>Showing {filteredArticles.length} Medically Reviewed Articles</span>
          <span>Updated August 2026</span>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
            <p className="text-sm font-semibold text-slate-700">No articles matched your search term.</p>
            <p className="text-xs text-slate-500">Try searching for &quot;PCOS&quot;, &quot;periods&quot;, &quot;pregnancy&quot;, or &quot;ovulation&quot;.</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all') }}
              className="px-4 py-2 rounded-full bg-rose-600 text-white text-xs font-bold mt-2"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <article
                key={art.id}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-2xs hover:shadow-md hover:border-rose-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                      {art.categoryName}
                    </span>
                    <span className="text-3xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {art.readingTime}
                    </span>
                  </div>

                  <Link href={`/womens-health/${art.category}/${art.slug}`}>
                    <h2 className="font-bold text-base text-slate-900 group-hover:text-rose-700 transition-colors leading-snug">
                      {art.title}
                    </h2>
                  </Link>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-3xs text-slate-600 space-y-0.5">
                    <div className="flex items-center gap-1 font-semibold text-slate-800">
                      <UserCheck className="w-3 h-3 text-emerald-600" />
                      <span>Medically Reviewed: {art.medicalReviewer}</span>
                    </div>
                    <div className="text-slate-400">{art.reviewerSpecialty} · {art.lastUpdated}</div>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-3xs text-slate-400 font-medium">Evidence-Based</span>
                  <Link
                    href={`/womens-health/${art.category}/${art.slug}`}
                    className="text-rose-700 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}

      </main>

      {/* ── TRUST & DR. ARYA CTA BANNER ── */}
      <aside className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-lg">
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-teal-300">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>Have Personal Health Questions?</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              Dr. Arya Women&apos;s Health can help you understand your symptoms in Marathi, Hindi, or English, and connect you with qualified OB-GYNs across Pune &amp; PCMC.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/symptom-checker?specialty=gynaecology"
              className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors flex items-center gap-1.5"
            >
              <Stethoscope className="w-4 h-4" />
              <span>Consult Dr. Arya</span>
            </Link>
          </div>
        </div>
      </aside>

    </div>
  )
}
