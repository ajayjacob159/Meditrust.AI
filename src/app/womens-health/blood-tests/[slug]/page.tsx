import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ChevronRight, Calendar, Clock, User, ShieldCheck, Stethoscope,
  Phone, ArrowRight, Share2, BookOpen, Droplets, CheckCircle2,
  Building2, MapPin
} from 'lucide-react'
import { WOMENS_BLOOD_TEST_ARTICLES, BloodTestArticle } from '@/data/womensBloodTestsArticles'

export async function generateStaticParams() {
  return WOMENS_BLOOD_TEST_ARTICLES.map((art) => ({
    slug: art.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = WOMENS_BLOOD_TEST_ARTICLES.find((a) => a.slug === params.slug)
  if (!article) return { title: 'Article Not Found' }

  return {
    title: `${article.metaTitle} | MEDITRUST AI`,
    description: article.metaDescription,
    keywords: article.featuredKeywords,
    openGraph: {
      title: article.title,
      description: article.summary,
      url: `https://www.meditrustai.in/womens-health/blood-tests/${article.slug}`,
      siteName: 'Meditrust AI Women’s Health',
      type: 'article',
      publishedTime: article.datePublished,
      authors: [article.medicalReviewer.name],
    },
  }
}

export default function WomensBloodTestArticlePage({ params }: { params: { slug: string } }) {
  const article = WOMENS_BLOOD_TEST_ARTICLES.find((a) => a.slug === params.slug)

  if (!article) {
    notFound()
  }

  // Schema.org Structured Data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: article.title,
    description: article.metaDescription,
    url: `https://www.meditrustai.in/womens-health/blood-tests/${article.slug}`,
    reviewedBy: {
      '@type': 'Physician',
      name: article.medicalReviewer.name,
      jobTitle: article.medicalReviewer.title,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Meditrust AI Life Sciences',
      url: 'https://www.meditrustai.in',
      logo: 'https://www.meditrustai.in/logo.png',
    },
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden pt-20 sm:pt-24 pb-20">
      
      {/* Schema.org Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium overflow-x-auto">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <Link href="/womens-health" className="hover:text-rose-700 transition-colors whitespace-nowrap">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <Link href="/womens-health/blood-tests" className="hover:text-rose-700 transition-colors whitespace-nowrap">Blood Tests</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
          <span className="text-slate-900 font-semibold truncate">{article.title}</span>
        </nav>
      </div>

      {/* ── MAIN ARTICLE CONTAINER ── */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Article Content (8 cols) */}
        <article className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
          
          {/* Category & Read Time */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <span className="px-3.5 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-bold border border-rose-200">
              {article.category}
            </span>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{article.readTime}</span>
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                <span>{article.datePublished}</span>
              </span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
            {article.title}
          </h1>

          {/* Medical Reviewer Card */}
          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center text-lg">
                🌸
              </div>
              <div>
                <span className="font-bold text-slate-900 block flex items-center gap-1">
                  <span>{article.medicalReviewer.name}</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 inline" />
                </span>
                <span className="text-slate-500 text-3xs">
                  {article.medicalReviewer.title} · {article.medicalReviewer.registration}
                </span>
              </div>
            </div>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold hidden sm:inline">
              Medically Reviewed
            </span>
          </div>

          {/* Summary Box */}
          <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 text-xs sm:text-sm text-slate-700 leading-relaxed space-y-1">
            <strong className="text-rose-950 font-bold block">Quick Summary:</strong>
            <p>{article.summary}</p>
          </div>

          {/* Body Content (Markdown-like rendering) */}
          <div className="space-y-6 text-slate-800 leading-relaxed text-sm sm:text-base font-normal">
            {article.content.split('\n\n').map((paragraph, i) => {
              const trimmed = paragraph.trim()
              if (!trimmed) return null

              if (trimmed.startsWith('### ')) {
                return (
                  <h2 key={i} className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight pt-4">
                    {trimmed.replace('### ', '')}
                  </h2>
                )
              }

              if (trimmed.startsWith('#### ')) {
                return (
                  <h3 key={i} className="text-lg font-bold text-slate-900 pt-2">
                    {trimmed.replace('#### ', '')}
                  </h3>
                )
              }

              if (trimmed.startsWith('|')) {
                // Table Rendering
                const rows = trimmed.split('\n').filter((r) => r.trim() && !r.includes(':---'))
                if (rows.length < 2) return null
                const headers = rows[0].split('|').map((c) => c.trim()).filter(Boolean)
                const bodyRows = rows.slice(1).map((r) => r.split('|').map((c) => c.trim()).filter(Boolean))

                return (
                  <div key={i} className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs my-4">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead className="bg-slate-100 text-slate-900 font-bold">
                        <tr>
                          {headers.map((h, hIdx) => (
                            <th key={hIdx} className="p-3 border-b border-slate-200">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        {bodyRows.map((row, rIdx) => (
                          <tr key={rIdx} className="hover:bg-slate-50">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-3 font-medium">{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )
              }

              if (trimmed.startsWith('- ') || trimmed.startsWith('1. ') || trimmed.startsWith('2. ')) {
                return (
                  <div key={i} className="text-xs sm:text-sm text-slate-700 space-y-1.5 pl-2">
                    {trimmed.split('\n').map((line, lIdx) => (
                      <p key={lIdx} className="leading-relaxed">{line}</p>
                    ))}
                  </div>
                )
              }

              return (
                <p key={i} className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                  {trimmed}
                </p>
              )
            })}
          </div>

          {/* Keywords Tag Footer */}
          <div className="pt-6 border-t border-slate-100 space-y-2">
            <span className="text-3xs font-bold text-slate-400 uppercase tracking-wider block">
              Indexed Clinical Keywords:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {article.featuredKeywords.map((kw, idx) => (
                <span
                  key={idx}
                  className="text-3xs bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg font-medium"
                >
                  #{kw}
                </span>
              ))}
            </div>
          </div>

        </article>

        {/* Right Column: Sticky Doctor & Lab Sidebar (4 cols) */}
        <aside className="lg:col-span-4 space-y-6 sticky top-28">
          
          {/* Dr. Arya Instant Chat Card */}
          <div className="bg-[#008069] text-white rounded-3xl p-6 shadow-xl space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-2xl shadow-inner">
                🌸
              </div>
              <div>
                <h3 className="font-bold text-base flex items-center gap-1.5">
                  <span>Dr. Arya AI</span>
                  <span className="w-4 h-4 rounded-full bg-white text-[#008069] flex items-center justify-center text-[10px] font-black">
                    ✓
                  </span>
                </h3>
                <span className="text-xs text-emerald-100">
                  Lead Women&apos;s Health Companion
                </span>
              </div>
            </div>

            <p className="text-xs text-emerald-100/90 leading-relaxed">
              Have questions about your blood test numbers or symptoms? Discuss privately with Dr. Arya in English, Marathi, or Hindi.
            </p>

            <Link
              href="/symptom-checker"
              className="w-full py-3 rounded-2xl bg-white text-[#008069] font-black text-xs hover:bg-emerald-50 transition-colors shadow-md flex items-center justify-center gap-2"
            >
              <span>Ask Dr. Arya in WhatsApp Chat</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Book 60-min Home Collection in Pune */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4 text-xs">
            <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
              <Clock className="w-4 h-4 text-rose-600" />
              <span>60-Min Home Blood Collection</span>
            </div>
            
            <p className="text-slate-600 leading-relaxed">
              Book sample pickup across Pune &amp; PCMC (Baner, Wakad, Kothrud, Hinjewadi, Hadapsar, Nigdi). Fast digital reports with Thyrocare &amp; Metropolis partner network.
            </p>

            <div className="space-y-2">
              <a
                href="tel:+917028025717"
                className="w-full py-3 rounded-xl bg-slate-900 hover:bg-rose-700 text-white font-bold transition-colors flex items-center justify-center gap-2 text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Lab Desk (+91 7028025717)</span>
              </a>
              <Link
                href="/womens-health/blood-tests"
                className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-colors block text-center"
              >
                <span>View All 35+ Women&apos;s Tests</span>
              </Link>
            </div>
          </div>

        </aside>

      </main>

    </div>
  )
}
