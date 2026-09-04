'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Heart, Sparkles, Calendar, Baby, ArrowRight, ShieldCheck,
  CheckCircle2, Clock, MessageCircle, AlertCircle, ShoppingBag,
  HelpCircle, User, Flame, Activity
} from 'lucide-react'

export default function FloStyleInteractiveLifecycle() {
  const [activeMode, setActiveMode] = useState<'period' | 'fertility' | 'pregnancy' | 'perimenopause'>('period')
  
  // Interactive Period Mode State
  const [cycleDay, setCycleDay] = useState<number>(14)
  
  // Interactive Pregnancy Mode State
  const [gestationalWeek, setGestationalWeek] = useState<number>(18)

  const modeContent = {
    period: {
      badge: 'MODE 1: PERIOD & CYCLE HEALTH',
      title: 'Track your menstrual rhythm & decode daily hormone shifts',
      tagline: 'Understand when estrogen and progesterone peak to optimize energy, skin, and mood.',
      icon: '🩸',
      cyclePhases: [
        { name: 'Menstrual (Days 1–5)', desc: 'Low estrogen & progesterone. Rest, warm heat patches, and iron-rich foods.', color: 'border-rose-400 bg-rose-50 text-rose-950' },
        { name: 'Follicular (Days 6–13)', desc: 'Estrogen rises, boosting mental focus, collagen, and physical energy.', color: 'border-purple-400 bg-purple-50 text-purple-950' },
        { name: 'Ovulatory (Days 14–16)', desc: 'Peak LH & estrogen surge. Ovulation occurs; highest 6-day fertile window.', color: 'border-emerald-400 bg-emerald-50 text-emerald-950' },
        { name: 'Luteal (Days 17–28)', desc: 'Progesterone dominates. Calming phase; manage PMS cramps and cravings.', color: 'border-amber-400 bg-amber-50 text-amber-950' }
      ],
      interactivePrompt: 'What is your current cycle day?',
      ctaText: 'Calculate Exact Ovulation Window',
      ctaLink: '/womens-health/tools'
    },
    fertility: {
      badge: 'MODE 2: GETTING PREGNANT & FERTILITY',
      title: 'Plan conception with clinical accuracy & biological confidence',
      tagline: 'Pinpoint your 6-day fertile window, evaluate egg reserve (AMH), and optimize 90-day sperm health.',
      icon: '🌱',
      cyclePhases: [
        { name: 'Egg Reserve (AMH)', desc: 'Normal AMH is 1.5–3.5 ng/mL. Reflects remaining follicle pool.', color: 'border-teal-400 bg-teal-50 text-teal-950' },
        { name: 'Peak Fertile Days', desc: 'Intercourse 2 days before and on ovulation day yields 85%+ conception probability.', color: 'border-emerald-400 bg-emerald-50 text-emerald-950' },
        { name: 'Male Sperm Quality', desc: 'Sperm regenerates every 90 days. CoQ10 & Zinc optimize motility & DNA integrity.', color: 'border-blue-400 bg-blue-50 text-blue-950' },
        { name: 'Preconception Folate', desc: 'Start 5mg Folic Acid daily 3 months prior to prevent neural tube defects.', color: 'border-purple-400 bg-purple-50 text-purple-950' }
      ],
      interactivePrompt: 'Calculate your fertility readiness score',
      ctaText: 'Open Fertility Readiness Quiz',
      ctaLink: '/womens-health/tools'
    },
    pregnancy: {
      badge: 'MODE 3: TRACK PREGNANCY WEEK-BY-WEEK',
      title: 'Follow your baby’s growth & mandatory medical milestones',
      tagline: 'From first heartbeat to delivery room preparation, stay ahead of every ultrasound scan.',
      icon: '🤰',
      cyclePhases: [
        { name: '1st Trimester (1–12w)', desc: 'NT scan & Dual Marker test at 11–13 weeks. Folic acid 5mg daily.', color: 'border-rose-400 bg-rose-50 text-rose-950' },
        { name: '2nd Trimester (13–27w)', desc: 'TIFFA Level-2 anomaly scan at 18–22 weeks + GTT diabetes check.', color: 'border-purple-400 bg-purple-50 text-purple-950' },
        { name: '3rd Trimester (28–40w)', desc: 'Growth color Doppler scan + maternity hospital bag packing by week 35.', color: 'border-teal-400 bg-teal-50 text-teal-950' },
        { name: '4th Trimester (Postpartum)', desc: 'Sakhi 360° postpartum healing box + lactation consultant coaching.', color: 'border-pink-400 bg-pink-50 text-pink-950' }
      ],
      interactivePrompt: 'Track baby fruit size & due date',
      ctaText: 'Explore MediMom™ Hub',
      ctaLink: '/medimom'
    },
    perimenopause: {
      badge: 'MODE 4: PERIMENOPAUSE & LONGEVITY',
      title: 'Navigate midlife hormonal transitions with vitality & grace',
      tagline: 'Manage vasomotor hot flashes, sleep cycles, and maintain bone & cardiovascular resilience.',
      icon: '🦋',
      cyclePhases: [
        { name: 'Hormonal Shifts', desc: 'Fluctuating estradiol levels causing cycle irregularity & night sweats.', color: 'border-amber-400 bg-amber-50 text-amber-950' },
        { name: 'Bone Density DEXA', desc: 'Prevent osteopenia with bioavailable Calcium Citrate & Vitamin D3.', color: 'border-teal-400 bg-teal-50 text-teal-950' },
        { name: 'Cardio Defense', desc: 'Lipid panels (ApoB & hs-CRP) replace lost natural estrogen vascular defense.', color: 'border-rose-400 bg-rose-50 text-rose-950' },
        { name: 'Doctor Consultation', desc: 'Discuss individualized Hormone Replacement Therapy (HRT) safety.', color: 'border-purple-400 bg-purple-50 text-purple-950' }
      ],
      interactivePrompt: 'Learn perimenopause symptom relief',
      ctaText: 'View Menopause Masterclass',
      ctaLink: '/womens-health/academy'
    }
  }

  return (
    <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* ── SECTION HEADER ── */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-3xs font-black uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-rose-600" />
          <span>FLO-INSPIRED LIFECYCLE MODES</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
          Your Body. Your Rhythm. <br />
          <span className="text-gradient-chic">Supported at Every Life Stage.</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
          Switch modes to personalize your health feed, diagnostic scans, and clinical recommendations.
        </p>
      </div>

      {/* ── 4 MODE SELECTOR TABS ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto">
        {[
          { id: 'period', label: 'Track Period', icon: '🩸', sub: 'Cycle & Hormones' },
          { id: 'fertility', label: 'Getting Pregnant', icon: '🌱', sub: 'Ovulation & AMH' },
          { id: 'pregnancy', label: 'Track Pregnancy', icon: '🤰', sub: 'Week-by-Week' },
          { id: 'perimenopause', label: 'Perimenopause', icon: '🦋', sub: 'Midlife Balance' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveMode(tab.id as any)}
            className={`p-4 rounded-3xl border text-left transition-all flex flex-col justify-between space-y-2 ${
              activeMode === tab.id
                ? 'bg-rose-600 text-white border-rose-600 shadow-lg scale-102 ring-2 ring-rose-300'
                : 'bg-white border-slate-200 hover:border-slate-300 text-slate-800'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl">{tab.icon}</span>
              {activeMode === tab.id && <span className="w-2 h-2 rounded-full bg-white animate-pulse" />}
            </div>
            <div>
              <strong className="text-xs sm:text-sm font-black block leading-snug">{tab.label}</strong>
              <span className={`text-3xs block ${activeMode === tab.id ? 'text-rose-100' : 'text-slate-500'}`}>
                {tab.sub}
              </span>
            </div>
          </button>
        ))}
      </div>

      {/* ── ACTIVE MODE DETAILS CARD ── */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-8 animate-fadeIn">
        
        {/* Header of Active Mode */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="space-y-1.5 max-w-2xl">
            <span className="text-3xs font-black uppercase text-rose-700 bg-rose-50 px-2.5 py-1 rounded-full border border-rose-100">
              {modeContent[activeMode].badge}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">
              {modeContent[activeMode].title}
            </h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              {modeContent[activeMode].tagline}
            </p>
          </div>

          <Link
            href={modeContent[activeMode].ctaLink}
            className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center gap-1.5 flex-shrink-0 shadow-xs"
          >
            <span>{modeContent[activeMode].ctaText}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 4 Clinical Pillars of this Mode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
          {modeContent[activeMode].cyclePhases.map((phase, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border ${phase.color} space-y-1.5 flex flex-col justify-between`}
            >
              <strong className="font-black text-xs block">{phase.name}</strong>
              <p className="text-3xs leading-relaxed opacity-90">{phase.desc}</p>
            </div>
          ))}
        </div>

        {/* ── ANONYMOUS SECRET CHATS & DR. ARYA CLINICAL Q&A TEASER ── */}
        <div className="p-5 rounded-2xl bg-[#faf8f6] border border-slate-200 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-base">💬</span>
              <strong className="text-xs font-black text-slate-950">
                Safe &amp; Stigma-Free Question of the Day:
              </strong>
            </div>
            <span className="text-3xs font-bold text-slate-400 bg-white px-2 py-0.5 rounded border">
              Verified by Dr. Arya MD
            </span>
          </div>

          <div className="text-xs text-slate-700 space-y-1 bg-white p-3.5 rounded-xl border border-slate-100">
            <p className="font-semibold text-slate-900">
              Q: &ldquo;Is it normal to experience mild spotting and crampy twinges 14 days before my period?&rdquo;
            </p>
            <p className="text-slate-600 text-3xs font-normal">
              <strong>Dr. Arya AI:</strong> Yes! This is known as <em>Mittelschmerz</em> (ovulation pain). When the dominant follicle ruptures to release the egg, slight localized irritation or minor spotting is common and confirms you are in your peak fertile window.
            </p>
          </div>

          <div className="flex items-center justify-between text-3xs text-slate-500 pt-1">
            <span>Explore 1,000+ clinical questions in our open directory</span>
            <Link
              href="/fertility-qa"
              className="text-rose-600 font-bold hover:underline"
            >
              View 1,000+ Answers →
            </Link>
          </div>
        </div>

      </div>

    </section>
  )
}
