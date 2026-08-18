import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
  Calendar, Clock, ArrowLeft, ArrowRight, Share2, Sparkles,
  ShieldCheck, CheckCircle2, AlertTriangle, Building2, Phone, BookOpen, Stethoscope
} from 'lucide-react'
import { blogArticles, type BlogArticle } from '@/data/blogArticles'

export function generateStaticParams() {
  return blogArticles.map((a) => ({
    slug: a.slug,
  }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = blogArticles.find((a) => a.slug === params.slug)
  if (!article) return {}

  return {
    title: `${article.title} — Meditrust AI Health Guides`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
      url: `https://www.meditrustai.in/blog/${article.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  }
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const article = blogArticles.find((a) => a.slug === params.slug)
  if (!article) notFound()

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-14">
      
      {/* Schema.org Article Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.excerpt,
            image: `https://www.meditrustai.in${article.image}`,
            datePublished: '2026-08-16T08:00:00+05:30',
            dateModified: '2026-08-18T10:00:00+05:30',
            author: {
              '@type': 'Person',
              name: article.author.name,
              jobTitle: article.author.role,
            },
            publisher: {
              '@type': 'Organization',
              name: 'Meditrust Life Sciences Pvt. Ltd.',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.meditrustai.in/logo.png',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': `https://www.meditrustai.in/blog/${article.slug}`,
            },
          }),
        }}
      />

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Health Library</span>
        </Link>

        {/* Article Header */}
        <div className="space-y-4">
          <span className="text-xs font-black uppercase tracking-wider text-teal-800 bg-teal-100 px-3 py-1 rounded-full">
            {article.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight font-display">
            {article.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            {article.subtitle}
          </p>

          {/* Author & Meta Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <img
                src={article.author.avatar}
                alt={article.author.name}
                className="w-11 h-11 rounded-2xl object-cover border border-teal-200 shadow-xs"
              />
              <div>
                <div className="font-bold text-slate-900">{article.author.name}</div>
                <div className="text-2xs text-slate-500">{article.author.role}</div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-2xs">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {article.date}
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-950">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Intro Box */}
        <div className="p-5 rounded-2xl bg-teal-50/70 border border-teal-100 text-slate-800 text-sm leading-relaxed font-medium">
          💡 {article.content.intro}
        </div>

        {/* Article Body Sections */}
        <div className="space-y-8 text-slate-800 leading-relaxed text-sm sm:text-base">
          {article.content.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-950 font-display">
                {section.heading}
              </h2>

              {section.body.map((paragraph, pIdx) => (
                <p key={pIdx} className="text-slate-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              {/* Table if exists */}
              {section.table && (
                <div className="my-4 overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
                  <table className="w-full text-xs sm:text-sm text-left">
                    <thead className="bg-slate-900 text-white text-2xs uppercase tracking-wider font-bold">
                      <tr>
                        {section.table.headers.map((h, i) => (
                          <th key={i} className="p-3.5">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 bg-white">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`p-3.5 ${cIdx === 0 ? 'font-bold text-slate-900' : 'text-slate-700'}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Highlight Box if exists */}
              {section.highlightBox && (
                <div
                  className={`p-4 rounded-2xl border text-xs sm:text-sm leading-relaxed ${
                    section.highlightBox.type === 'savings'
                      ? 'bg-emerald-50 border-emerald-200 text-emerald-950'
                      : section.highlightBox.type === 'warning'
                      ? 'bg-amber-50 border-amber-200 text-amber-950'
                      : 'bg-teal-50 border-teal-200 text-teal-950'
                  }`}
                >
                  <div className="font-bold mb-1">{section.highlightBox.title}</div>
                  <div>{section.highlightBox.text}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* FAQs */}
        {article.content.faq && article.content.faq.length > 0 && (
          <div className="space-y-4 pt-6 border-t border-slate-200">
            <h3 className="text-xl font-bold text-slate-950 font-display">
              Frequently Asked Questions (AEO Verified)
            </h3>
            <div className="space-y-3">
              {article.content.faq.map((item, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 space-y-1.5">
                  <h4 className="font-bold text-sm text-slate-900">{item.question}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Primary CTA Box */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-teal-900 via-slate-900 to-slate-950 text-white space-y-4 text-center shadow-xl">
          <h3 className="text-xl sm:text-2xl font-black">{article.content.cta.title}</h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
            Experience W.H.O.-standard clinical analysis, generic medicine price comparisons, and 60-min at-home blood collection in Pune.
          </p>
          <Link
            href={article.content.cta.link}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-sm shadow transition-colors"
          >
            <span>{article.content.cta.buttonText}</span>
          </Link>
        </div>

      </article>
    </div>
  )
}
