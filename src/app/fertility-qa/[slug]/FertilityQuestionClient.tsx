'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Sparkles, CheckCircle2, ArrowRight, Share2,
  Video, Instagram, MessageCircle, Copy, ShieldCheck,
  ChevronRight, Clock, FlaskConical, AlertCircle, BookOpen,
  HelpCircle, Tag, TrendingDown
} from 'lucide-react'
import { FertilityQuestionItem } from '@/data/fertilityQuestionsData'

interface Props {
  question: FertilityQuestionItem
  relatedQuestions: FertilityQuestionItem[]
}

export default function FertilityQuestionClient({ question, relatedQuestions }: Props) {
  const [activeFormat, setActiveFormat] = useState<'article' | 'video' | 'instagram' | 'whatsapp'>('article')
  const [copied, setCopied] = useState(false)
  const [aiQuestionInput, setAiQuestionInput] = useState('')
  const [aiAnswer, setAiAnswer] = useState<string | null>(null)

  const handleCopyWhatsApp = () => {
    navigator.clipboard.writeText(question.whatsAppShareText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleAskAi = (e: React.FormEvent) => {
    e.preventDefault()
    if (!aiQuestionInput) return
    setAiAnswer(
      `Dr. Arya AI Clinical Analysis: Regarding "${aiQuestionInput}", clinical guidelines emphasize verifying your baseline AMH, cycle day-3 hormone profile, and partner semen analysis. Personalized ovarian protocols and Jan Aushadhi generic options can save up to 80% on medications. Please connect with our 24/7 team on WhatsApp for dedicated medical review.`
    )
  }

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── 1. BREADCRUMB ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/fertility-qa" className="hover:text-rose-600 transition-colors">Fertility Q&amp;A Engine</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold truncate max-w-[240px]">{question.question}</span>
        </nav>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        
        {/* ── 2. QUESTION HEADER & CLINICAL VERIFICATION BAR ── */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="flex items-center gap-2">
              <span className="text-3xs font-black uppercase text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                {question.category}
              </span>
              <span className="text-3xs text-slate-400 font-semibold">Updated August 2026</span>
            </div>

            <div className="flex items-center gap-2 text-3xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Medically Reviewed by Dr. Arya MD</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
            {question.question}
          </h1>

          <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-100 text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
            <strong className="font-bold text-rose-900 block mb-1">⚡ Quick Medical Summary:</strong>
            {question.shortAnswer}
          </div>

          {/* Multi-Format Switcher Tabs */}
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-bold border-t border-slate-100">
            <button
              onClick={() => setActiveFormat('article')}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                activeFormat === 'article' ? 'bg-slate-900 text-white shadow-2xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Full Clinical Answer</span>
            </button>

            <button
              onClick={() => setActiveFormat('video')}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                activeFormat === 'video' ? 'bg-rose-600 text-white shadow-2xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Video className="w-3.5 h-3.5" />
              <span>YouTube Video Script</span>
            </button>

            <button
              onClick={() => setActiveFormat('instagram')}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                activeFormat === 'instagram' ? 'bg-purple-600 text-white shadow-2xs' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <Instagram className="w-3.5 h-3.5" />
              <span>Instagram Reel / Carousel</span>
            </button>

            <button
              onClick={() => setActiveFormat('whatsapp')}
              className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
                activeFormat === 'whatsapp' ? 'bg-[#25d366] text-slate-950 shadow-2xs font-black' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Quick Share</span>
            </button>
          </div>
        </div>

        {/* ── 3. DYNAMIC CONTENT AREA BASED ON SELECTED FORMAT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left 8 Cols: Main Formatted Answer */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* ARTICLE FORMAT */}
            {activeFormat === 'article' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
                
                <div className="space-y-4">
                  <h2 className="text-xl font-black text-slate-950">Detailed Clinical Analysis</h2>
                  {question.detailedAnswer.map((para, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal whitespace-pre-line">
                      {para}
                    </p>
                  ))}
                </div>

                {/* Key Takeaways Box */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <strong className="text-xs font-black text-slate-900 uppercase tracking-wider block">
                    Key Medical Takeaways:
                  </strong>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {question.keyTakeaways.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Dr. Arya Clinical Pearl */}
                <div className="p-5 rounded-2xl bg-rose-50 border border-rose-200 text-xs space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-rose-900 uppercase tracking-wider text-3xs">
                    <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                    <span>Dr. Arya Clinical Pearl</span>
                  </div>
                  <p className="text-slate-800 italic font-medium leading-relaxed">
                    &ldquo;{question.drAryaPearl}&rdquo;
                  </p>
                </div>

                {/* FAQs Section */}
                {question.faqs.length > 0 && (
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <h3 className="font-black text-sm text-slate-950">Frequently Asked Clinical Questions</h3>
                    {question.faqs.map((f, idx) => (
                      <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
                        <strong className="font-bold text-slate-900 block">Q: {f.q}</strong>
                        <p className="text-slate-600 font-normal">{f.a}</p>
                      </div>
                    ))}
                  </div>
                )}

              </div>
            )}

            {/* VIDEO / YOUTUBE FORMAT */}
            {activeFormat === 'video' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2 text-rose-600 font-bold text-xs uppercase">
                    <Video className="w-4 h-4" />
                    <span>YouTube &amp; Shorts Script ({question.videoScript.duration})</span>
                  </div>
                  <span className="text-3xs font-mono bg-slate-100 px-2.5 py-1 rounded-md text-slate-600 font-bold">
                    Target Duration: {question.videoScript.duration}
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-slate-950 text-white space-y-2 text-xs">
                  <span className="text-3xs font-mono text-rose-400 font-bold uppercase block">Opening Hook (0–5 seconds):</span>
                  <p className="text-sm font-semibold italic text-slate-200">
                    &ldquo;{question.videoScript.hook}&rdquo;
                  </p>
                </div>

                <div className="space-y-3 text-xs">
                  <strong className="font-black text-slate-950 block">Core Bullet Points (Body Voiceover):</strong>
                  {question.videoScript.bodyPoints.map((point, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-rose-600 text-white text-3xs font-bold flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-slate-800 font-medium">{point}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs space-y-1">
                  <strong className="text-rose-900 font-bold block">Call to Action (Outro):</strong>
                  <p className="text-slate-700">{question.videoScript.callToAction}</p>
                </div>
              </div>
            )}

            {/* INSTAGRAM REEL / CAROUSEL FORMAT */}
            {activeFormat === 'instagram' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
                <div className="flex items-center gap-2 text-purple-600 font-bold text-xs uppercase border-b border-slate-100 pb-3">
                  <Instagram className="w-4 h-4" />
                  <span>Instagram 5-Slide Carousel &amp; Reel Hook</span>
                </div>

                <div className="p-5 rounded-2xl bg-gradient-to-r from-purple-950 to-pink-950 text-white space-y-2">
                  <span className="text-3xs font-bold text-pink-300 uppercase">Slide 1 / Reel Cover Headline:</span>
                  <h3 className="text-lg font-black text-white">{question.instagramFormat.hookHeadline}</h3>
                </div>

                <div className="space-y-2 text-xs">
                  <strong className="font-black text-slate-950 block">Carousel Slide Breakdown:</strong>
                  {question.instagramFormat.carouselSlides.map((slide, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 font-medium text-slate-800">
                      {slide}
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <strong className="font-bold text-slate-900 block">Caption &amp; Hashtags:</strong>
                  <p className="text-slate-600 text-3xs font-mono whitespace-pre-line">{question.instagramFormat.caption}</p>
                  <div className="flex flex-wrap gap-1 pt-1">
                    {question.instagramFormat.hashtags.map((tag, idx) => (
                      <span key={idx} className="text-3xs text-purple-700 font-bold bg-purple-50 px-2 py-0.5 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* WHATSAPP SHARABLE FORMAT */}
            {activeFormat === 'whatsapp' && (
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2 text-[#128c7e] font-bold text-xs uppercase">
                    <MessageCircle className="w-4 h-4 text-[#25d366]" />
                    <span>WhatsApp 1-Click Medical Snippet</span>
                  </div>
                  <button
                    onClick={handleCopyWhatsApp}
                    className="px-4 py-1.5 rounded-full bg-[#25d366] hover:bg-[#1ebd5a] text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-2xs"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copied ? 'Copied!' : 'Copy to Clipboard'}</span>
                  </button>
                </div>

                <div className="p-5 rounded-2xl bg-[#e7f8f0] border border-[#25d366]/40 text-slate-900 font-mono text-xs whitespace-pre-line leading-relaxed">
                  {question.whatsAppShareText}
                </div>

                <div className="text-center pt-2">
                  <a
                    href={`https://wa.me/?text=${encodeURIComponent(question.whatsAppShareText)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25d366] hover:bg-[#1ebd5a] text-slate-950 font-black text-xs shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Share Directly to WhatsApp Contacts</span>
                  </a>
                </div>
              </div>
            )}

            {/* ── INTERACTIVE DR. ARYA AI CONSULTATION CONSOLE ── */}
            <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-800 text-white space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>ASK DR. ARYA AI A FOLLOW-UP QUESTION</span>
              </div>

              <form onSubmit={handleAskAi} className="flex gap-2">
                <input
                  type="text"
                  placeholder="e.g., 'What if my AMH is 0.8 at age 34?' or 'Does DHEA help?'"
                  value={aiQuestionInput}
                  onChange={(e) => setAiQuestionInput(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs focus:outline-none focus:border-rose-400"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-2xl bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs transition-colors flex-shrink-0"
                >
                  Ask AI
                </button>
              </form>

              {aiAnswer && (
                <div className="p-4 rounded-2xl bg-white/10 border border-white/15 text-xs text-slate-200 leading-relaxed animate-fadeIn">
                  {aiAnswer}
                </div>
              )}
            </div>

          </div>

          {/* Right 4 Cols: Recommended Tests & Generic Medicines */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Generic Medicine Price Drop Match */}
            {question.genericMedicineMatch && (
              <div className="bg-white rounded-3xl p-6 border border-emerald-300 shadow-sm space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-3xs font-black uppercase">
                  <TrendingDown className="w-3 h-3 text-emerald-600" />
                  <span>JAN AUSHADHI 80% SAVINGS</span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-black text-sm text-slate-950">{question.genericMedicineMatch.genericName}</h4>
                  <span className="text-3xs text-slate-500 block">Branded Equivalent: {question.genericMedicineMatch.brandName}</span>
                </div>

                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-between text-xs">
                  <div>
                    <span className="text-3xs text-slate-400 line-through">MRP ₹{question.genericMedicineMatch.marketPrice}</span>
                    <div className="text-lg font-black text-emerald-800">₹{question.genericMedicineMatch.janAushadhiPrice}</div>
                  </div>
                  <span className="text-3xs font-black text-white bg-emerald-600 px-2.5 py-1 rounded-full">
                    SAVE {question.genericMedicineMatch.savingPercent}%
                  </span>
                </div>

                <Link
                  href="/medication-comparison"
                  className="block text-center py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors"
                >
                  Order Jan Aushadhi Generic →
                </Link>
              </div>
            )}

            {/* Recommended Diagnostic Blood Tests */}
            {question.recommendedTests.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900 border-b border-slate-100 pb-2">
                  <FlaskConical className="w-4 h-4 text-rose-600" />
                  <span>Recommended Diagnostic Panels</span>
                </div>

                <div className="space-y-3">
                  {question.recommendedTests.map((t, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 space-y-1 text-xs">
                      <strong className="font-bold text-slate-900 block leading-snug">{t.name}</strong>
                      <div className="flex items-center justify-between pt-1">
                        <span className="font-black text-rose-600">₹{t.price}</span>
                        <span className="text-3xs text-slate-400">{t.nablLab}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/womens-health/blood-tests"
                  className="block text-center py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-colors"
                >
                  Book 60-Min Home Blood Collection →
                </Link>
              </div>
            )}

            {/* Related Questions */}
            {relatedQuestions.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
                <h4 className="font-black text-xs uppercase tracking-wider text-slate-900">
                  Related Fertility Questions
                </h4>
                <div className="space-y-2 text-xs">
                  {relatedQuestions.map((rq) => (
                    <Link
                      key={rq.id}
                      href={`/fertility-qa/${rq.slug}`}
                      className="p-3 rounded-2xl hover:bg-rose-50 transition-colors block border border-slate-100 space-y-1 group"
                    >
                      <h5 className="font-bold text-slate-800 group-hover:text-rose-600 transition-colors line-clamp-2 leading-snug">
                        {rq.question}
                      </h5>
                      <span className="text-3xs text-slate-400 font-semibold">{rq.category}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  )
}
