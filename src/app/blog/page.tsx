import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BookOpen, Calendar, Clock, ChevronRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Health Library — Evidence-Based Articles',
  description: 'Browse evidence-based health articles on symptoms, medications, lab tests, and health optimisation. Written by clinicians for everyday people.',
}

const articles = [
  {
    slug: 'metformin-vs-berberine',
    title: 'Metformin vs Berberine for Blood Sugar — What the Research Really Says',
    excerpt: 'Both metformin and berberine show promise for blood sugar regulation, but they work differently and suit different patients. A comprehensive comparison based on clinical evidence.',
    category: 'Medication',
    readTime: '8 min',
    date: 'Aug 14, 2026',
    author: 'Dr. Emily Chen, MD',
    image: '💊',
    tags: ['Diabetes', 'Metformin', 'Supplements'],
    featured: true,
  },
  {
    slug: 'home-blood-test-accuracy',
    title: 'Are At-Home Blood Tests as Accurate as Clinical Labs? The Complete Guide',
    excerpt: 'At-home testing has transformed preventive health — but how reliable is it? We dive into CLIA-certification, sample collection quality, and when to trust your results.',
    category: 'Lab Tests',
    readTime: '10 min',
    date: 'Aug 12, 2026',
    author: 'Dr. James Park, PhD',
    image: '🧬',
    tags: ['Lab Testing', 'At-Home Tests', 'CLIA'],
    featured: true,
  },
  {
    slug: 'best-thyroid-tests-2026',
    title: 'Best At-Home Thyroid Tests 2026: Compared by Price, Panels & Accuracy',
    excerpt: 'Hypothyroidism affects 1 in 20 adults. We tested and compared the top home thyroid test kits — from basic TSH to full T3/T4/antibody panels.',
    category: 'Lab Tests',
    readTime: '12 min',
    date: 'Aug 10, 2026',
    author: 'Sarah Mitchell, PA-C',
    image: '🦋',
    tags: ['Thyroid', 'TSH', 'Home Testing'],
    featured: false,
  },
  {
    slug: 'statin-comparison',
    title: 'Comparing Statins: Atorvastatin vs Rosuvastatin vs Simvastatin',
    excerpt: 'Statins are among the most prescribed drugs worldwide. Learn how the main types differ in potency, side effects, cost, and who each is best suited for.',
    category: 'Medication',
    readTime: '9 min',
    date: 'Aug 8, 2026',
    author: 'Dr. Karen Lee, PharmD',
    image: '❤️',
    tags: ['Cholesterol', 'Statins', 'Heart Health'],
    featured: false,
  },
  {
    slug: 'ai-symptom-checker-privacy',
    title: 'AI Symptom Checkers That Respect Your Privacy in 2026',
    excerpt: 'Not all AI health tools protect your data the same way. Here\'s how to evaluate health AI apps for HIPAA awareness, data retention, and privacy practices.',
    category: 'AI Health',
    readTime: '6 min',
    date: 'Aug 6, 2026',
    author: 'Meditrust AI Editorial',
    image: '🔐',
    tags: ['Privacy', 'AI', 'HIPAA'],
    featured: false,
  },
  {
    slug: 'hba1c-interpretation',
    title: 'Understanding Your HbA1c Result: What the Numbers Really Mean',
    excerpt: 'HbA1c is one of the most important tests for diabetes monitoring. Our AI plain-language guide explains ranges, trends, and what to discuss with your doctor.',
    category: 'Lab Tests',
    readTime: '7 min',
    date: 'Aug 4, 2026',
    author: 'Dr. Alex Nguyen, MD',
    image: '📊',
    tags: ['Diabetes', 'HbA1c', 'Lab Results'],
    featured: false,
  },
]

const categories = ['All', 'Medication', 'Lab Tests', 'AI Health', 'Symptoms', 'Nutrition', 'Mental Health']

export default function BlogPage() {
  const featured = articles.filter((a) => a.featured)
  const rest = articles.filter((a) => !a.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="section bg-white">
        <div className="container-main text-center max-w-3xl">
          <div className="section-tag mb-3">Health Library</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Evidence-based health articles
          </h1>
          <p className="text-xl text-slate-600">
            Written by clinicians for everyday people. SEO-optimised, E-E-A-T compliant, YMYL responsible.
          </p>
        </div>
      </div>

      <div className="container-main pb-16">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-chip ${cat === 'All' ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured articles */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featured.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="card p-0 overflow-hidden group block">
              <div className="h-48 flex items-center justify-center text-6xl"
                style={{ background: 'linear-gradient(135deg, rgba(15,118,110,0.06) 0%, rgba(37,99,235,0.06) 100%)' }}>
                {article.image}
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="badge-blue badge text-2xs">{article.category}</span>
                  <span className="badge-teal badge text-2xs">Featured</span>
                  <span className="text-2xs text-slate-400 ml-auto flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {article.readTime}
                  </span>
                </div>
                <h2 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors leading-tight">
                  {article.title}
                </h2>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-500">{article.author} · {article.date}</div>
                  <ChevronRight className="w-4 h-4 text-teal-600 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* All articles */}
        <h2 className="text-xl font-bold text-slate-900 mb-6">Latest Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {rest.map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`} className="card p-6 group block">
              <div className="text-3xl mb-4">{article.image}</div>
              <div className="flex items-center gap-2 mb-3">
                <span className="badge-teal badge text-2xs">{article.category}</span>
                <span className="text-2xs text-slate-400 ml-auto flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {article.readTime}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors leading-tight">
                {article.title}
              </h3>
              <p className="text-sm text-slate-500 mb-4 leading-relaxed line-clamp-2">{article.excerpt}</p>
              <div className="text-xs text-slate-400">{article.author}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
