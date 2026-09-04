import type { Metadata } from 'next'
import Link from 'next/link'
import {
  GraduationCap, Sparkles, ShieldCheck, CheckCircle2, ArrowRight,
  ChevronRight, BookOpen, Clock, Award, Star, Play, Download,
  Heart, Users, Check
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Women's Health Academy™ — Certified Master Courses (2026) | Meditrust AI",
  description: "Comprehensive medical education courses on menstrual health, PCOS reversal, fertility blueprint, pregnancy trimesters, postpartum healing, and menopause navigation.",
  keywords: [
    "Womens Health Courses India",
    "PCOS Masterclass",
    "Fertility Education Online",
    "Pregnancy Course for Indian Mothers",
    "Menopause Health Academy"
  ]
}

export default function WomensHealthAcademyPage() {
  const courses = [
    {
      id: 'course-1',
      title: 'The Menstrual Cycle & Hormone Masterclass',
      category: 'Menstrual & Hormonal Health',
      duration: '4 Modules · 2.5 Hours',
      level: 'All Life Stages',
      icon: '🩸',
      badge: 'FOUNDATIONAL',
      rating: 4.9,
      students: '14,200+ Enrolled',
      description: 'Master the 4 phases of your cycle (Follicular, Ovulatory, Luteal, Menstrual). Learn how to sync diet, exercise, and productivity with estrogen and progesterone rhythms.',
      modules: [
        'Module 1: The Neuroendocrine Axis (Hypothalamus, Pituitary & Ovaries)',
        'Module 2: Basal Body Temperature & Cervical Mucus Biomarkers',
        'Module 3: Managing PMS, Dysmenorrhea & Pad Rash Prevention',
        'Module 4: Cycle Syncing Nutrition & Mitochondrial Energy'
      ]
    },
    {
      id: 'course-2',
      title: 'PCOS Metabolic Reversal & Ovulation Blueprint',
      category: 'PCOS & Metabolic Care',
      duration: '6 Modules · 4 Hours',
      level: 'Ages 18–38',
      icon: '🌸',
      badge: 'TOP RATED',
      rating: 4.95,
      students: '22,800+ Enrolled',
      description: 'Comprehensive evidence-based roadmap to reversing insulin resistance, lowering elevated androgens, clearing hormonal jawline acne, and restoring natural spontaneous ovulation.',
      modules: [
        'Module 1: Diagnosing Rotterdam Criteria (Ultrasound vs Blood Work)',
        'Module 2: Insulin Resistance & The 40:1 Inositol Clinical Protocol',
        'Module 3: Anti-Androgenic Nutrition & Lowering DHT Naturally',
        'Module 4: Managing Hirsutism, Hair Thinning & Cystic Acne',
        'Module 5: Ovulation Induction with Letrozole vs Clomiphene',
        'Module 6: Long-Term Cardiovascular & Metabolic Protection'
      ]
    },
    {
      id: 'course-3',
      title: 'Complete Preconception & Fertility Masterclass',
      category: 'Fertility & Conception',
      duration: '5 Modules · 3.5 Hours',
      level: 'TTC Couples',
      icon: '🌱',
      badge: 'ESSENTIAL FOR TTC',
      rating: 4.9,
      students: '18,500+ Enrolled',
      description: 'The 90-day reproductive optimization blueprint for both partners. Understand AMH levels, egg quality, 90-day sperm regeneration, and when to choose IUI vs IVF.',
      modules: [
        'Module 1: Preconception Checklist (Folic Acid, TSH & Rubella)',
        'Module 2: Decoding AMH & Ovarian Reserve Reality',
        'Module 3: Male Factor: 90-Day Sperm Motility & DFI Protocol',
        'Module 4: Timing the 6-Day Fertile Window with Clinical Precision',
        'Module 5: Navigating IUI, IVF Packages & Jan Aushadhi Savings'
      ]
    },
    {
      id: 'course-4',
      title: 'Trimester-by-Trimester Pregnancy & Labor Academy',
      category: 'Maternity & Childbirth',
      duration: '7 Modules · 5 Hours',
      level: 'Expecting Mothers',
      icon: '🤰',
      badge: 'CLINICAL MATERNITY',
      rating: 4.98,
      students: '31,000+ Enrolled',
      description: 'Navigate your entire pregnancy with obstetric clarity. Mandatory NABL trimester scans, nutrition meal planning, painless epidural birthing, and hospital bag packing.',
      modules: [
        'Module 1: First Trimester Viability, Beta-hCG & NT Scan',
        'Module 2: Second Trimester TIFFA Scan & Gestational Diabetes OGTT',
        'Module 3: Trimester Nutrition: Iron, Calcium & Fetal DHA Targets',
        'Module 4: Birth Planning: Normal Vaginal Delivery vs Gentle C-Section',
        'Module 5: Painless Epidural Anesthesia: Facts vs Myths',
        'Module 6: Packing Your Maternity Hospital Bag (Week 35 Checklist)',
        'Module 7: Labor Stages, Contraction Timing & Delivery Room Readiness'
      ]
    },
    {
      id: 'course-5',
      title: 'Fourth Trimester: Postpartum & Pelvic Floor Recovery',
      category: 'Postpartum & Lactation',
      duration: '5 Modules · 3 Hours',
      level: 'New Mothers',
      icon: '🤱',
      badge: 'RECOVERY CARE',
      rating: 4.88,
      students: '12,400+ Enrolled',
      description: 'Safe healing for the first 6 months after birth. C-section and episiotomy wound care, managing lochia, rebuilding pelvic floor tone, and lactation latch techniques.',
      modules: [
        'Module 1: Immediate Postpartum Healing & Lochia Flow Management',
        'Module 2: C-Section Incision & Episiotomy Scar Recovery',
        'Module 3: Lactation 101: Painless Latch, Colostrum & Milk Supply',
        'Module 4: Diastasis Recti & Core Pelvic Floor Rehabilitation',
        'Module 5: Postnatal Mental Health & Baby Blues Screening'
      ]
    },
    {
      id: 'course-6',
      title: 'Perimenopause, Menopause & Longevity Navigation',
      category: 'Midlife & Longevity',
      duration: '4 Modules · 2.5 Hours',
      level: 'Ages 40+',
      icon: '🦋',
      badge: 'MIDLIFE VITALITY',
      rating: 4.92,
      students: '9,800+ Enrolled',
      description: 'Navigate the hormonal shift of perimenopause with confidence. Managing hot flashes, sleep disruptions, bone density DEXA scans, and cardiovascular health.',
      modules: [
        'Module 1: The Perimenopause Transition: Hormonal Fluctuations',
        'Module 2: Managing Vasomotor Hot Flashes & Night Sweats',
        'Module 3: Bone Density (DEXA) & Osteoporosis Prevention',
        'Module 4: Hormone Replacement Therapy (HRT) Evidence & Safety'
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/womens-health" className="hover:text-rose-600 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Women&apos;s Health Academy™</span>
        </nav>
      </div>

      {/* ── HERO BANNER ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-purple-950 to-rose-950 text-white p-6 sm:p-12 border border-slate-800 shadow-2xl space-y-6 overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-3xs font-black uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-rose-400" />
            <span>MEDITRUST WOMEN&apos;S HEALTH ACADEMY™</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Certified Medical Education for <br />
              <span className="text-gradient-chic">Every Stage of a Woman&apos;s Life.</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Demystifying hormones, PCOS, fertility, pregnancy, and menopause through doctor-curated masterclasses. 100% free, interactive video modules, clinical workbooks, and certified Dr. Arya MD completion badges.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2 text-xs">
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>6 Masterclass Courses</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-rose-400" />
              <span>31+ Video Modules</span>
            </div>
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-purple-400" />
              <span>Downloadable PDF Workbooks</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── COURSES GRID ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="flex items-center justify-between border-b border-slate-200 pb-3">
          <div>
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
              6 CERTIFIED MASTERCLASSES
            </span>
            <h2 className="text-2xl font-black text-slate-950">Curated Women&apos;s Health Curriculum</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-rose-300 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{course.icon}</span>
                  <span className="text-3xs font-black uppercase bg-rose-50 text-rose-700 px-2.5 py-1 rounded-full border border-rose-100">
                    {course.badge}
                  </span>
                </div>

                <div>
                  <span className="text-3xs font-bold text-slate-400 uppercase block">{course.category} · {course.level}</span>
                  <h3 className="font-black text-base text-slate-950 leading-snug group-hover:text-rose-600 transition-colors mt-0.5">
                    {course.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 font-normal leading-relaxed line-clamp-3">
                  {course.description}
                </p>

                <div className="space-y-1.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs">
                  <strong className="text-slate-900 font-bold text-3xs uppercase tracking-wider block">Course Modules:</strong>
                  {course.modules.slice(0, 3).map((m, idx) => (
                    <div key={idx} className="text-3xs text-slate-600 truncate flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                      <span>{m}</span>
                    </div>
                  ))}
                  {course.modules.length > 3 && (
                    <span className="text-3xs text-rose-600 font-bold block pt-0.5">
                      + {course.modules.length - 3} more modules
                    </span>
                  )}
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-amber-500 font-bold text-3xs">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  <span>{course.rating} ({course.students})</span>
                </div>

                <a
                  href={`https://wa.me/917028025717?text=Hi%20Meditrust,%20I%20want%20to%20enroll%20in%20the%20free%20course:%20${encodeURIComponent(course.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-3xs flex items-center gap-1"
                >
                  <span>Start Free Course</span>
                  <ArrowRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
