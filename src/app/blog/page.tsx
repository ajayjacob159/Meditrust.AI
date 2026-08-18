import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Calendar, Clock, Sparkles, Tag, ShieldCheck } from 'lucide-react'
import { blogArticles } from '@/data/blogArticles'

export const metadata: Metadata = {
  title: 'Health Library & Evidence-Based Medical Guides (August 2026)',
  description:
    'Comprehensive evidence-based guides by Dr. Arya MD on Jan Aushadhi generic savings, Pune diagnostic lab price comparisons, and plain-language blood report breakdowns.',
}

export default function BlogPage() {
  const featured = blogArticles.filter((a) => a.featured)
  const rest = blogArticles.filter((a) => !a.featured)

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-14">
      <div className="container-main space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs font-bold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            <span>Medically Verified by Dr. Arya (Chief Clinical AI)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight font-display">
            Evidence-Based Health & Medicine Guides
          </h1>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Explore verified medical research, Jan Aushadhi generic price lists, and diagnostic lab comparison benchmarks for August 2026.
          </p>
        </div>

        {/* Featured Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {featured.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-sm hover:shadow-xl hover:border-teal-400 transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-teal-800 text-white text-3xs font-black px-2.5 py-1 rounded-full shadow">
                  {article.category}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-2xs text-slate-500 font-medium">
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

                  <h2 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-teal-700">
                  <span className="flex items-center gap-1.5">
                    <img src={article.author.avatar} alt="Author" className="w-5 h-5 rounded-full object-cover" />
                    <span>{article.author.name}</span>
                  </span>
                  <span className="flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Remaining Articles List */}
        {rest.length > 0 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Latest Medical Insights</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {rest.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-teal-400 hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <span className="text-3xs font-black uppercase text-teal-800 bg-teal-50 px-2 py-0.5 rounded-full">
                      {article.category}
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm hover:text-teal-700 transition-colors">
                      {article.title}
                    </h4>
                    <p className="text-2xs text-slate-500 line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="text-3xs text-slate-400 flex items-center justify-between pt-2 border-t border-slate-100">
                    <span>{article.date}</span>
                    <span className="font-bold text-teal-700 flex items-center gap-0.5">
                      Read →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
