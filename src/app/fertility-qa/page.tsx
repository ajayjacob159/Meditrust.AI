'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Search, Sparkles, HelpCircle, ArrowRight, Share2,
  Video, Instagram, MessageCircle, Star, ShieldCheck,
  ChevronRight, Filter, BookOpen, Clock, Heart, CheckCircle2
} from 'lucide-react'
import {
  ALL_1000_FERTILITY_QUESTIONS,
  FERTILITY_CATEGORIES,
  FertilityQuestionItem
} from '@/data/fertilityQuestionsData'

export default function FertilityQAMasterPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [activeTab, setActiveTab] = useState<'all' | 'video' | 'instagram' | 'whatsapp'>('all')

  // Filtered Questions
  const filteredQuestions = useMemo(() => {
    return ALL_1000_FERTILITY_QUESTIONS.filter((item) => {
      const matchesSearch =
        !searchQuery ||
        item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.shortAnswer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCat =
        selectedCategory === 'All' || item.categorySlug === selectedCategory || item.category === selectedCategory

      return matchesSearch && matchesCat
    })
  }, [searchQuery, selectedCategory])

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    alert('WhatsApp answer copied to clipboard! You can paste and share it anywhere.')
  }

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/womens-health" className="hover:text-rose-600 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">1,000+ Fertility &amp; IVF Questions Engine™</span>
        </nav>
      </div>

      {/* ── HERO BANNER ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-purple-950 to-rose-950 text-white p-6 sm:p-12 border border-slate-800 shadow-2xl space-y-6 overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-3xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>1,000+ CLINICAL FERTILITY &amp; IVF QUESTIONS</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Every Fertility Question Answered. <br />
              <span className="text-gradient-chic">SEO + Video + Reels + WhatsApp + AI.</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Explore India&apos;s most comprehensive repository of 1,000+ clinical fertility questions. Formatted for patients, YouTube scripts, Instagram carousels, and 1-click WhatsApp clinical pearls vetted by <strong>Dr. Arya AI</strong> and leading reproductive endocrinologists.
            </p>
          </div>

          {/* ── SEARCH BAR ── */}
          <div className="max-w-3xl pt-2">
            <div className="bg-white rounded-2xl p-2.5 shadow-xl flex items-center gap-3 border border-slate-200">
              <Search className="w-5 h-5 text-rose-600 flex-shrink-0 ml-2" />
              <input
                type="text"
                placeholder="Search 1,000+ fertility questions (e.g. 'What is AMH', 'IVF cost India', 'Can I get pregnant with PCOS', 'Egg freezing age')..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none font-medium"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-xs text-slate-400 hover:text-slate-700 px-2 font-bold"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Sample Search Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-3 text-3xs">
              <span className="text-slate-400 font-semibold">Popular Queries:</span>
              {[
                'How long to try naturally',
                'What is AMH',
                'PCOS fertility',
                'IVF process step by step',
                'IVF cost India',
                'Egg freezing cost',
                'IUI vs IVF',
                'Male semen test DFI'
              ].map((pill) => (
                <button
                  key={pill}
                  onClick={() => setSearchQuery(pill)}
                  className="px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-slate-200 border border-white/10 transition-colors"
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── CATEGORY PILLS BAR ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-4 space-y-4">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none text-xs font-semibold">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
              selectedCategory === 'All'
                ? 'bg-slate-900 text-white font-bold shadow-2xs'
                : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
            }`}
          >
            🌟 All 1,000+ Questions
          </button>

          {FERTILITY_CATEGORIES.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.slug
                  ? 'bg-rose-600 text-white font-bold shadow-2xs'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* ── MAIN QUESTIONS REPOSITORY GRID ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <span className="text-3xs font-bold text-rose-600 uppercase tracking-wider">
              {filteredQuestions.length} CLINICAL QUESTIONS INDEXED
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-950">
              Evidence-Based Fertility Answers
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold">
            <span className="text-slate-500 hidden sm:inline">Format:</span>
            <div className="flex bg-white p-1 rounded-xl border border-slate-200 text-3xs">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-2.5 py-1 rounded-lg ${activeTab === 'all' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600'}`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('video')}
                className={`px-2.5 py-1 rounded-lg ${activeTab === 'video' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600'}`}
              >
                🎬 Video
              </button>
              <button
                onClick={() => setActiveTab('instagram')}
                className={`px-2.5 py-1 rounded-lg ${activeTab === 'instagram' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600'}`}
              >
                📱 Reels
              </button>
              <button
                onClick={() => setActiveTab('whatsapp')}
                className={`px-2.5 py-1 rounded-lg ${activeTab === 'whatsapp' ? 'bg-slate-900 text-white font-bold' : 'text-slate-600'}`}
              >
                💬 WhatsApp
              </button>
            </div>
          </div>
        </div>

        {/* Questions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuestions.slice(0, 48).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-rose-300 transition-all flex flex-col justify-between space-y-4 group"
            >
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xs font-black uppercase text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-100">
                    {item.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-3xs text-slate-400">
                    <Clock className="w-3 h-3" />
                    <span>3 min read</span>
                  </div>
                </div>

                <Link href={`/fertility-qa/${item.slug}`}>
                  <h3 className="font-black text-sm sm:text-base text-slate-950 leading-snug group-hover:text-rose-600 transition-colors line-clamp-2">
                    {item.question}
                  </h3>
                </Link>

                <p className="text-xs text-slate-600 leading-relaxed font-normal line-clamp-3">
                  {item.shortAnswer}
                </p>

                {/* Video / Reel / WhatsApp Tab Previews */}
                {activeTab === 'video' && (
                  <div className="p-3 rounded-2xl bg-slate-900 text-white text-3xs space-y-1 animate-fadeIn">
                    <div className="flex items-center gap-1 text-rose-400 font-bold uppercase">
                      <Video className="w-3 h-3" />
                      <span>YouTube Script Hook:</span>
                    </div>
                    <p className="text-slate-300 italic">&ldquo;{item.videoScript.hook}&rdquo;</p>
                  </div>
                )}

                {activeTab === 'instagram' && (
                  <div className="p-3 rounded-2xl bg-gradient-to-r from-purple-900 to-pink-900 text-white text-3xs space-y-1 animate-fadeIn">
                    <div className="flex items-center gap-1 text-pink-300 font-bold uppercase">
                      <Instagram className="w-3 h-3" />
                      <span>Reel Headline:</span>
                    </div>
                    <p className="text-white font-bold">{item.instagramFormat.hookHeadline}</p>
                  </div>
                )}

                {activeTab === 'whatsapp' && (
                  <div className="p-3 rounded-2xl bg-[#e7f8f0] border border-[#25d366]/30 text-emerald-950 text-3xs space-y-1 animate-fadeIn">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-[#128c7e] flex items-center gap-1">
                        <MessageCircle className="w-3 h-3 text-[#25d366]" />
                        <span>WhatsApp Quick Share</span>
                      </span>
                      <button
                        onClick={() => copyToClipboard(item.whatsAppShareText)}
                        className="text-3xs font-bold text-emerald-700 bg-white px-2 py-0.5 rounded-md border border-emerald-300"
                      >
                        Copy
                      </button>
                    </div>
                    <p className="line-clamp-2 text-slate-600 font-mono text-[10px]">{item.whatsAppShareText}</p>
                  </div>
                )}
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/fertility-qa/${item.slug}`}
                  className="text-xs font-black text-rose-600 group-hover:text-rose-700 flex items-center gap-1"
                >
                  <span>Read Full Clinical Answer</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                  onClick={() => copyToClipboard(item.whatsAppShareText)}
                  className="p-2 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
                  title="Share via WhatsApp"
                >
                  <Share2 className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Load More Banner */}
        {filteredQuestions.length > 48 && (
          <div className="p-8 text-center bg-white rounded-3xl border border-slate-200 space-y-3">
            <span className="text-xs font-bold text-slate-500">
              Showing 48 of {filteredQuestions.length} Questions. Use search bar to lookup any specific keyword!
            </span>
          </div>
        )}

      </section>

      {/* ── DR. ARYA 24/7 AI CONSULTATION TRIGGER ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-rose-400 font-bold text-xs uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CONFIDENTIAL FERTILITY AI COUNSEL</span>
            </div>
            <h3 className="text-2xl font-black text-white">
              Have a Specific Fertility Question Not Listed Here?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Dr. Arya AI is trained on over 50,000 peer-reviewed reproductive endocrinology papers, ESHRE guidelines, and Indian ICMR ART protocols.
            </p>
          </div>

          <a
            href={`https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20have%20a%20private%20fertility%20question%20regarding%20my%20treatment`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-full bg-[#25d366] hover:bg-[#1ebd5a] text-slate-950 font-black text-xs shadow-md transition-transform hover:scale-102 flex items-center justify-center gap-2 flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Ask Dr. Arya on WhatsApp (24/7 Free)</span>
          </a>
        </div>
      </section>

    </div>
  )
}
