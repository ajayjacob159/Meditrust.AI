import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  ChevronRight, Clock, ShieldCheck, UserCheck, AlertCircle,
  BookOpen, ArrowRight, Stethoscope, MessageCircle, HelpCircle,
  Share2, CheckCircle2, Award
} from 'lucide-react'
import { WOMENS_HEALTH_ARTICLES, WomensHealthArticle } from '@/data/womensHealthArticles'

interface PageProps {
  params: {
    category: string
    slug: string
  }
}

// Generate Static Params for all 20 Pillar Articles
export async function generateStaticParams() {
  return WOMENS_HEALTH_ARTICLES.map((article) => ({
    category: article.category,
    slug: article.slug,
  }))
}

// Generate Dynamic SEO Metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = WOMENS_HEALTH_ARTICLES.find(
    (a) => a.slug === params.slug && a.category === params.category
  )

  if (!article) {
    return {
      title: 'Article Not Found | MEDITRUST AI',
    }
  }

  const canonicalUrl = `https://www.meditrustai.in/womens-health/${article.category}/${article.slug}`

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    keywords: [article.primaryKeyword, ...article.secondaryKeywords],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.seoTitle,
      description: article.metaDescription,
      url: canonicalUrl,
      type: 'article',
      siteName: 'Meditrust AI India',
      authors: [article.author],
      publishedTime: '2026-08-01T00:00:00Z',
      modifiedTime: '2026-08-24T00:00:00Z',
      images: [
        {
          url: 'https://www.meditrustai.in/dr_arya.jpg',
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.seoTitle,
      description: article.metaDescription,
      images: ['https://www.meditrustai.in/dr_arya.jpg'],
    },
  }
}

export default function ArticlePage({ params }: PageProps) {
  const article = WOMENS_HEALTH_ARTICLES.find(
    (a) => a.slug === params.slug && a.category === params.category
  )

  if (!article) {
    notFound()
  }

  const relatedArticles = WOMENS_HEALTH_ARTICLES.filter((a) =>
    article.relatedSlugs.includes(a.slug)
  )

  // JSON-LD Structured Data
  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: article.title,
    description: article.metaDescription,
    url: `https://www.meditrustai.in/womens-health/${article.category}/${article.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.meditrustai.in/womens-health/${article.category}/${article.slug}`,
    },
    author: {
      '@type': 'Organization',
      name: article.author,
      url: 'https://www.meditrustai.in',
    },
    reviewedBy: {
      '@type': 'Person',
      name: article.medicalReviewer,
      jobTitle: article.reviewerRole,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Meditrust Life Sciences Pvt. Ltd.',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.meditrustai.in/logo.png',
      },
    },
    datePublished: '2026-08-01',
    dateModified: '2026-08-24',
  }

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: article.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  const jsonLdBreadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.meditrustai.in',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: "Women's Health",
        item: 'https://www.meditrustai.in/womens-health',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: article.categoryName,
        item: `https://www.meditrustai.in/womens-health/health-library`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: article.title,
        item: `https://www.meditrustai.in/womens-health/${article.category}/${article.slug}`,
      },
    ],
  }

  return (
    <>
      {/* Inject Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />

      <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden pt-20 sm:pt-24 pb-20">
        
        {/* ── BREADCRUMBS ── */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-slate-500 font-medium">
            <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/womens-health" className="hover:text-rose-700 transition-colors">Women&apos;s Health</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/womens-health/health-library" className="hover:text-rose-700 transition-colors">{article.categoryName}</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-900 font-semibold truncate max-w-[200px] sm:max-w-xs">{article.primaryKeyword}</span>
          </nav>
        </div>

        {/* ── ARTICLE HEADER ── */}
        <header className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
          <div className="space-y-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200 uppercase tracking-wider">
              {article.categoryName}
            </span>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
              {article.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              {article.summary}
            </p>
          </div>

          {/* Medical Review Attribution Box */}
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <UserCheck className="w-4 h-4 text-emerald-600" />
                <span>Medically Reviewed by: {article.medicalReviewer}</span>
              </div>
              <p className="text-3xs text-slate-500 font-medium">
                {article.reviewerRole} · {article.reviewerSpecialty}
              </p>
            </div>

            <div className="flex items-center gap-4 text-3xs text-slate-400 font-mono border-t sm:border-t-0 pt-2 sm:pt-0 w-full sm:w-auto justify-between sm:justify-start">
              <span>Updated: <strong className="text-slate-600">{article.lastUpdated}</strong></span>
              <span>·</span>
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {article.readingTime}</span>
            </div>
          </div>
        </header>

        {/* ── ARTICLE BODY & SIDEBAR ── */}
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Content Body */}
          <main className="lg:col-span-8 space-y-10">
            
            {/* Table of Contents */}
            <div className="p-6 rounded-2xl bg-rose-50/40 border border-rose-200/80 space-y-3">
              <h3 className="font-bold text-xs uppercase tracking-wider text-rose-900 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-rose-600" />
                <span>In This Guide (Table of Contents)</span>
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                {article.tableOfContents.map((toc, idx) => (
                  <li key={idx}>
                    <a href={`#${toc.id}`} className="hover:text-rose-700 hover:underline flex items-center gap-1.5">
                      <span className="text-rose-400 font-bold">{idx + 1}.</span>
                      <span>{toc.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Content Sections */}
            <div className="space-y-10 text-slate-800 leading-relaxed text-sm sm:text-base">
              {article.contentSections.map((section) => (
                <section key={section.id} id={section.id} className="space-y-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-950 tracking-tight border-b border-slate-100 pb-2">
                    {section.heading}
                  </h2>
                  <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                    {section.body}
                  </div>

                  {/* Optional Data Table */}
                  {section.table && (
                    <div className="overflow-x-auto my-4 rounded-xl border border-slate-200 shadow-2xs">
                      <table className="w-full text-left text-xs border-collapse">
                        <thead className="bg-slate-100/90 text-slate-900 font-bold">
                          <tr>
                            {section.table.headers.map((h, i) => (
                              <th key={i} className="p-3 border-b border-slate-200">{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-700">
                          {section.table.rows.map((row, i) => (
                            <tr key={i} className="hover:bg-slate-50">
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-3 align-top font-normal">{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Optional Callout Box */}
                  {section.callout && (
                    <div
                      className={`p-4 rounded-2xl text-xs space-y-1 ${
                        section.callout.type === 'warning'
                          ? 'bg-amber-50 border border-amber-200 text-amber-900'
                          : section.callout.type === 'clinical'
                          ? 'bg-blue-50 border border-blue-200 text-blue-900'
                          : 'bg-slate-50 border border-slate-200 text-slate-800'
                      }`}
                    >
                      <div className="flex items-center gap-1.5 font-bold">
                        <AlertCircle className="w-4 h-4" />
                        <span>{section.callout.title}</span>
                      </div>
                      <p className="leading-relaxed text-2xs">{section.callout.text}</p>
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* ── FAQ SECTION ── */}
            <section id="faqs" className="pt-8 border-t border-slate-200 space-y-6">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-rose-600" />
                <span>Frequently Asked Questions</span>
              </h2>

              <div className="space-y-3">
                {article.faqs.map((faq, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <h3 className="font-bold text-sm text-slate-900">{faq.question}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── CLINICAL REFERENCES ── */}
            <section className="pt-8 border-t border-slate-200 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Authoritative Clinical References
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-2xs text-slate-500 leading-relaxed font-mono">
                {article.references.map((ref, idx) => (
                  <li key={idx}>{ref}</li>
                ))}
              </ul>
            </section>

            {/* ── TRUST DISCLAIMER ── */}
            <div className="p-4 rounded-2xl bg-slate-100 border border-slate-200 text-3xs text-slate-500 leading-relaxed">
              <strong>Medical Disclaimer:</strong> This article is published for educational and health navigation purposes and is reviewed by qualified medical professionals. It does not constitute formal medical diagnosis, treatment, or individualized clinical advice. Always consult a licensed gynecologist or healthcare professional regarding your specific health condition.
            </div>

          </main>

          {/* ── STICKY SIDEBAR (DR. ARYA AI & APPOINTMENT NAVIGATION) ── */}
          <aside className="lg:col-span-4 space-y-6">
            
            {/* Dr. Arya Interactive Card */}
            <div className="bg-gradient-to-br from-rose-50 via-white to-rose-50/50 rounded-3xl p-6 border-2 border-rose-200 shadow-sm space-y-4 sticky top-28">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-rose-600 text-white flex items-center justify-center font-bold text-lg shadow-xs">
                  🌸
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900">Dr. Arya Women&apos;s Health</h4>
                  <p className="text-3xs text-rose-700 font-semibold">24/7 AI Health Companion</p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Experiencing symptoms related to <strong>{article.primaryKeyword}</strong>? Chat with Dr. Arya for private, plain-language guidance in Marathi, Hindi, or English.
              </p>

              <div className="space-y-2 pt-2">
                <Link
                  href="/symptom-checker?specialty=gynaecology"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-sm transition-colors"
                >
                  <Stethoscope className="w-4 h-4" />
                  <span>Ask Dr. Arya Now</span>
                </Link>

                <a
                  href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20have%20a%20question%20about%20women%27s%20health"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full bg-white hover:bg-rose-50 text-rose-800 font-bold text-xs border border-rose-300 shadow-2xs transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Local Doctor Link */}
              <div className="pt-4 border-t border-rose-200/60 text-center">
                <Link
                  href="/doctors/gynecologist/pune"
                  className="text-2xs font-bold text-slate-700 hover:text-rose-700 flex items-center justify-center gap-1"
                >
                  <span>Find Gynecologists in Pune &amp; PCMC</span>
                  <ChevronRight className="w-3 h-3" />
                </Link>
              </div>
            </div>

            {/* Related Articles Box */}
            {relatedArticles.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-4">
                <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">
                  Related Clinical Guides
                </h4>
                <div className="space-y-3">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/womens-health/${rel.category}/${rel.slug}`}
                      className="block p-3 rounded-xl bg-slate-50 hover:bg-rose-50/60 border border-slate-200 transition-colors group"
                    >
                      <span className="text-3xs font-bold text-rose-600 block mb-0.5">{rel.categoryName}</span>
                      <strong className="text-xs text-slate-900 group-hover:text-rose-700 font-bold block line-clamp-2">
                        {rel.title}
                      </strong>
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </aside>

        </div>

      </div>
    </>
  )
}
