'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Heart, Sparkles, ShieldCheck, CheckCircle2, ArrowRight,
  Calendar, Baby, Clock, ShoppingBag, MessageCircle,
  FlaskConical, Stethoscope, Activity, BookOpen, AlertCircle,
  Users, Building2, TrendingUp, Layers, Award, Zap,
  Check, Smile, Eye, ArrowUpRight, Flame, Compass, RefreshCw
} from 'lucide-react'

export default function WomensHealthFullSpectrum() {
  const [activeStage, setActiveStage] = useState<number>(0)

  const stages = [
    {
      id: 'preventive',
      num: 1,
      title: 'Preventive and general health',
      shortTitle: 'Preventive & General',
      subtitle: 'Lifelong hormonal balance, cycle health & preventive wellness',
      badge: 'STAGE 1: FOUNDATIONAL HEALTH',
      color: 'from-rose-500/20 to-rose-600/10 border-rose-300 text-rose-950',
      activeBorder: 'border-rose-500 ring-rose-300',
      tagColor: 'bg-rose-100 text-rose-800 border-rose-200',
      accentColor: '#e11d48',
      illustration: (
        <svg viewBox="0 0 160 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="72" fill="#FCE7F3" />
          {/* Hair back */}
          <path d="M52 50C52 35 62 26 80 26C98 26 108 35 108 50C108 65 105 76 105 76L55 76C55 76 52 65 52 50Z" fill="#7C2D12" />
          {/* Body / Top */}
          <path d="M46 118C46 98 58 90 80 90C102 90 114 98 114 118L122 148H38L46 118Z" fill="#F43F5E" />
          {/* Neck */}
          <rect x="74" y="74" width="12" height="18" rx="6" fill="#FBCFE8" />
          {/* Face */}
          <circle cx="80" cy="58" r="22" fill="#FDF2F8" />
          {/* Eyes & Smile */}
          <circle cx="73" cy="56" r="2.5" fill="#475569" />
          <circle cx="87" cy="56" r="2.5" fill="#475569" />
          <path d="M74 65C76 68 84 68 86 65" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          {/* Hair front / Bangs */}
          <path d="M58 45C64 34 76 34 82 40C88 34 98 34 102 46C102 46 95 44 88 47C81 50 74 46 58 45Z" fill="#9A3412" />
          {/* Tablet/Book */}
          <rect x="62" y="105" width="36" height="26" rx="4" transform="rotate(-6 62 105)" fill="#1E293B" />
          <rect x="66" y="109" width="28" height="18" rx="2" transform="rotate(-6 66 109)" fill="#38BDF8" opacity="0.9" />
          {/* Heart indicator */}
          <circle cx="120" cy="40" r="14" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
          <path d="M120 45S114 41 114 38A3 3 0 0 1 120 36A3 3 0 0 1 126 38C126 41 120 45 120 45Z" fill="#E11D48" />
        </svg>
      ),
      description: 'Supporting daily physical vitality, menstrual rhythm tracking, PCOS/PCOD metabolic management, breast health awareness, and routine cervical screening.',
      keyPillars: [
        { label: 'Cycle & Symptom Tracking', desc: 'Decoding 4 hormonal cycle phases (Menstrual, Follicular, Ovulatory, Luteal).' },
        { label: 'PCOS / Thyroid Metabolic Care', desc: 'Insulin sensitization, 40:1 Myo-Inositol, and fasting lipid/HbA1c tests.' },
        { label: 'Rash-Free Period Essentials', desc: '100% chlorine-free Sakhi™ sanitary pads and 8-hr herbal cramp heat patches.' },
        { label: 'Routine Preventative Screenings', desc: 'Annual Pap smear, pelvic ultrasound, complete blood count, and Ferritin checks.' }
      ],
      recommendedTools: [
        { name: 'Period & Ovulation Calculator', link: '/womens-health/tools' },
        { name: 'PCOS Risk & Hormone Checker', link: '/symptom-checker' },
        { name: 'Jan Aushadhi Generic Savings', link: '/medication-comparison' }
      ],
      stats: '70%+ Indian women face menstrual cramps or PMS without clinical guidance'
    },
    {
      id: 'preconception',
      num: 2,
      title: 'Preconception & prenatal health',
      shortTitle: 'Preconception & Prenatal',
      subtitle: 'Fertility optimization, biological clock insights & dual-partner readiness',
      badge: 'STAGE 2: FERTILITY READINESS',
      color: 'from-purple-500/20 to-purple-600/10 border-purple-300 text-purple-950',
      activeBorder: 'border-purple-500 ring-purple-300',
      tagColor: 'bg-purple-100 text-purple-800 border-purple-200',
      accentColor: '#9333ea',
      illustration: (
        <svg viewBox="0 0 160 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="72" fill="#F3E8FF" />
          {/* Mother body */}
          <path d="M42 120C42 100 56 92 76 92C96 92 108 100 108 120L114 148H36L42 120Z" fill="#EC4899" />
          {/* Mother head */}
          <circle cx="70" cy="62" r="20" fill="#FCE7F3" />
          <path d="M48 55C48 40 58 32 72 32C86 32 94 40 94 55C94 68 90 74 90 74L50 74C50 74 48 68 48 55Z" fill="#3B1F2B" />
          <circle cx="66" cy="60" r="2.5" fill="#475569" />
          <path d="M64 68C66 70 72 70 74 68" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          {/* Baby being held up */}
          <circle cx="106" cy="50" r="14" fill="#FED7AA" />
          <path d="M96 46C96 40 101 36 106 36C111 36 116 40 116 46Z" fill="#78350F" />
          <circle cx="102" cy="49" r="1.5" fill="#475569" />
          <circle cx="108" cy="49" r="1.5" fill="#475569" />
          <path d="M103 54C104 56 107 56 108 54" stroke="#475569" strokeWidth="1.5" strokeLinecap="round" />
          {/* Baby swaddle */}
          <path d="M96 64C96 58 116 58 116 64L120 84C120 90 92 90 92 84L96 64Z" fill="#93C5FD" />
          {/* Arms holding baby */}
          <path d="M66 94L94 72M78 94L102 74" stroke="#FCE7F3" strokeWidth="6" strokeLinecap="round" />
          {/* Sparkle badge */}
          <circle cx="126" cy="34" r="12" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
          <path d="M126 28L127.5 32.5L132 34L127.5 35.5L126 40L124.5 35.5L120 34L124.5 32.5L126 28Z" fill="#9333EA" />
        </svg>
      ),
      description: 'Navigating the path to conception with accurate fertile window calculations, AMH ovarian reserve testing, male semen analysis, genetic carrier screens, and prenatal vitamins.',
      keyPillars: [
        { label: 'Fertility Readiness Assessment', desc: 'Evaluating female ovarian reserve (AMH) + male sperm motility & DNA integrity.' },
        { label: 'Folic Acid & Micronutrient Prep', desc: 'Daily 5mg active folate 90 days before conception to prevent neural defects.' },
        { label: 'Genetic & Infectious Carrier Screens', desc: 'Thalassemia, Rubella IgG, Thyroid TSH, Blood Group Rh factor compatibility.' },
        { label: 'Unbiased Specialist Matching', desc: 'Direct appointments with Reproductive Endocrinologists and Fertility Clinics.' }
      ],
      recommendedTools: [
        { name: 'Fertility Readiness Quiz', link: '/womens-health/tools' },
        { name: 'AMH & Ovarian Reserve Explainer', link: '/fertility-qa/what-is-amh-anti-mullerian-hormone-levels' },
        { name: 'IVF Cost & Success Estimator', link: '/womens-health/tools' }
      ],
      stats: '1 in 6 couples face fertility challenges; 85% achieve success with early navigation'
    },
    {
      id: 'pregnancy',
      num: 3,
      title: 'Pregnancy',
      shortTitle: 'Pregnancy (40 Weeks)',
      subtitle: 'Complete 40-week clinical roadmap, ultrasound scans & obstetric monitoring',
      badge: 'STAGE 3: 40-WEEK MATERNITY OS',
      color: 'from-pink-500/20 to-pink-600/10 border-pink-300 text-pink-950',
      activeBorder: 'border-pink-500 ring-pink-300',
      tagColor: 'bg-pink-100 text-pink-800 border-pink-200',
      accentColor: '#db2777',
      illustration: (
        <svg viewBox="0 0 160 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="72" fill="#FCE7F3" />
          {/* Pregnant mother silhouette with full curly hair */}
          <path d="M68 30C50 30 40 44 40 64C40 84 48 94 48 94C48 94 56 68 76 68C96 68 104 84 104 64C104 44 90 30 68 30Z" fill="#1E1B4B" />
          <circle cx="70" cy="58" r="18" fill="#FBCFE8" />
          {/* Eye looking down lovingly */}
          <path d="M68 59C70 61 74 61 76 59" stroke="#334155" strokeWidth="2" strokeLinecap="round" />
          <path d="M66 66C68 67 72 67 74 66" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
          {/* Dress with pregnant belly bump */}
          <path d="M52 86C52 86 64 80 78 80C92 80 102 88 106 104C112 118 108 134 94 142C86 146 64 146 54 140L46 112L52 86Z" fill="#1E3A8A" />
          {/* Big pregnant belly curve */}
          <path d="M78 86C96 86 110 100 110 116C110 132 94 142 78 142" stroke="#3B82F6" strokeWidth="4" strokeLinecap="round" fill="#2563EB" opacity="0.3" />
          {/* Loving hand on belly */}
          <path d="M54 94C66 104 84 114 96 114" stroke="#FBCFE8" strokeWidth="5" strokeLinecap="round" />
          {/* Scan indicator */}
          <circle cx="124" cy="48" r="14" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
          <text x="124" y="53" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#DB2777">🤰</text>
        </svg>
      ),
      description: 'Guiding expectant mothers through trimester milestones, mandatory NABL ultrasounds (NT, TIFFA Level-2, Growth Doppler), gestational diabetes screening, and birth planning.',
      keyPillars: [
        { label: 'Trimester 1 (Weeks 1–12)', desc: 'Embryo viability, Beta-hCG, and NT scan with Dual Marker blood testing.' },
        { label: 'Trimester 2 (Weeks 13–27)', desc: 'TIFFA Level-2 structural anomaly scan, fetal movements & OGTT glucose check.' },
        { label: 'Trimester 3 (Weeks 28–40)', desc: 'Fetal growth Doppler, NST non-stress testing, and birth plan creation.' },
        { label: 'Hospital Delivery Packages', desc: 'Transparent hospital pricing for normal vaginal delivery vs gentle C-section.' }
      ],
      recommendedTools: [
        { name: 'MediMom™ Maternal Hub', link: '/medimom' },
        { name: 'Pregnancy Due Date & Fruit Size Calculator', link: '/womens-health/tools' },
        { name: 'Hospital Delivery Cost Calculator', link: '/womens-health/tools' }
      ],
      stats: '25 Million births happen in India annually; structured prenatal tracking reduces complications by 40%'
    },
    {
      id: 'postpartum',
      num: 4,
      title: 'Postpartum health',
      shortTitle: 'Postpartum Recovery',
      subtitle: 'The fourth trimester: physical healing, newborn feeding & mental wellbeing',
      badge: 'STAGE 4: FOURTH TRIMESTER',
      color: 'from-amber-500/20 to-amber-600/10 border-amber-300 text-amber-950',
      activeBorder: 'border-amber-500 ring-amber-300',
      tagColor: 'bg-amber-100 text-amber-800 border-amber-200',
      accentColor: '#d97706',
      illustration: (
        <svg viewBox="0 0 160 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="72" fill="#FEF3C7" />
          {/* Mother caring figure */}
          <path d="M46 116C46 96 58 88 80 88C102 88 114 96 114 116L120 148H40L46 116Z" fill="#F59E0B" />
          <circle cx="80" cy="58" r="20" fill="#FDE68A" />
          {/* Hair tied in bun */}
          <circle cx="80" cy="34" r="10" fill="#78350F" />
          <path d="M56 50C56 36 66 28 80 28C94 28 104 36 104 50C104 62 100 68 100 68L60 68C60 68 56 62 56 50Z" fill="#78350F" />
          <circle cx="74" cy="56" r="2" fill="#475569" />
          <circle cx="86" cy="56" r="2" fill="#475569" />
          <path d="M76 64C78 66 82 66 84 64" stroke="#475569" strokeWidth="2" strokeLinecap="round" />
          {/* Apron / robe */}
          <path d="M62 92L98 92L94 148L66 148Z" fill="#FDE68A" opacity="0.6" />
          {/* Care heart icon */}
          <circle cx="122" cy="44" r="14" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
          <text x="122" y="49" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#D97706">🤱</text>
        </svg>
      ),
      description: 'Specialized 0–6 months recovery for new mothers: perineal & C-section scar wound healing, lochia discharge care, certified lactation latch support, and postpartum mood screening.',
      keyPillars: [
        { label: 'Wound & Lochia Management', desc: 'Episiotomy soothing, C-section incision protection, and 360° leak-proof panties.' },
        { label: 'Lactation & Latch Coaching', desc: '24/7 certified lactation consultants for engorgement, mastitis, and milk supply.' },
        { label: 'Postnatal Depression (EPDS)', desc: 'Proactive Edinburgh Postnatal Depression Scale screening and emotional wellness.' },
        { label: 'Sakhi™ Recovery Care Box', desc: 'Dermatologist-formulated, 100% toxin-free postpartum recovery kits.' }
      ],
      recommendedTools: [
        { name: 'Sakhi™ Postpartum Recovery Kit', link: '/marketplace/product/sakhi-postpartum-recovery-kit' },
        { name: 'Corpo Mom Maternity Return-to-Work', link: '/corpo-mom' },
        { name: 'Dr. Arya 24/7 Postpartum Helpline', link: 'https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20need%20postpartum%20guidance' }
      ],
      stats: 'Over 68% of new mothers experience postpartum depletion; clinical recovery care speeds healing by 3x'
    },
    {
      id: 'interconception',
      num: 5,
      title: 'Interconception health',
      shortTitle: 'Interconception & Balance',
      subtitle: 'Health between pregnancies, career continuity, pelvic floor & family spacing',
      badge: 'STAGE 5: INTERVAL WELLNESS',
      color: 'from-teal-500/20 to-teal-600/10 border-teal-300 text-teal-950',
      activeBorder: 'border-teal-500 ring-teal-300',
      tagColor: 'bg-teal-100 text-teal-800 border-teal-200',
      accentColor: '#0d9488',
      illustration: (
        <svg viewBox="0 0 160 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="72" fill="#CCFBF1" />
          {/* Mother working at desk with toddler */}
          <path d="M48 114C48 96 60 88 80 88C96 88 108 96 108 114L114 148H42L48 114Z" fill="#0F766E" />
          <circle cx="76" cy="56" r="18" fill="#99F6E4" />
          {/* Hair tied stylishly */}
          <path d="M56 48C56 34 66 26 80 26C94 26 102 34 102 48C102 60 98 66 98 66L58 66C58 66 56 60 56 48Z" fill="#134E4A" />
          <circle cx="72" cy="54" r="2" fill="#1E293B" />
          <circle cx="82" cy="54" r="2" fill="#1E293B" />
          <path d="M73 62C75 64 79 64 81 62" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
          {/* Toddler beside mother */}
          <circle cx="112" cy="98" r="12" fill="#FDE047" />
          <circle cx="109" cy="96" r="1.5" fill="#1E293B" />
          <circle cx="115" cy="96" r="1.5" fill="#1E293B" />
          <path d="M110 102C112 103 114 103 115 102" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round" />
          {/* Desk & Laptop */}
          <rect x="36" y="132" width="88" height="12" rx="3" fill="#334155" />
          <polygon points="56,132 64,116 88,116 80,132" fill="#94A3B8" />
          {/* Shield indicator */}
          <circle cx="124" cy="40" r="14" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
          <text x="124" y="45" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#0D9488">⚡</text>
        </svg>
      ),
      description: 'Optimizing women’s health between pregnancies: pelvic floor muscle rehabilitation, thyroid & iron repletion, child spacing guidance, and workforce retention via Corpo Mom.',
      keyPillars: [
        { label: 'Pelvic Floor & Core Recovery', desc: 'Targeted physical therapy for diastasis recti and bladder support.' },
        { label: 'Nutrient & Iron Store Repletion', desc: 'Rebuilding maternal Ferritin, Calcium, Vitamin D3, and B12 reserves.' },
        { label: 'Inter-Pregnancy Family Spacing', desc: 'Clinical recommendations for safe 18–24 month interval spacing.' },
        { label: 'Workplace Continuity (Corpo Mom)', desc: 'Corporate family-health benefits ensuring smooth career progression.' }
      ],
      recommendedTools: [
        { name: 'Corpo Mom Enterprise OS', link: '/corpo-mom' },
        { name: 'Women’s Health Blood Panel', link: '/womens-health/blood-tests' },
        { name: 'MediVault™ Lifelong Health Locker', link: '/medivault' }
      ],
      stats: 'Maintaining optimal interconception health reduces risk of preterm birth in 2nd pregnancies by 45%'
    },
    {
      id: 'menopause',
      num: 6,
      title: 'Perimenopause & menopause',
      shortTitle: 'Perimenopause & Menopause',
      subtitle: 'Hormonal transition, bone & cardio defense, sleep & midlife vitality',
      badge: 'STAGE 6: MIDLIFE LONGEVITY',
      color: 'from-blue-500/20 to-blue-600/10 border-blue-300 text-blue-950',
      activeBorder: 'border-blue-500 ring-blue-300',
      tagColor: 'bg-blue-100 text-blue-800 border-blue-200',
      accentColor: '#2563eb',
      illustration: (
        <svg viewBox="0 0 160 160" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="80" cy="80" r="72" fill="#DBEAFE" />
          {/* Confident mature woman */}
          <path d="M48 116C48 98 60 90 80 90C100 90 112 98 112 116L118 148H42L48 116Z" fill="#1E3A8A" />
          <circle cx="80" cy="58" r="20" fill="#BFDBFE" />
          {/* Elegant stylish short hair / wrap */}
          <path d="M54 50C54 34 64 24 80 24C96 24 106 34 106 50C106 62 102 68 102 68L58 68C58 68 54 62 54 50Z" fill="#1E293B" />
          {/* Turban / Headwrap stylish band */}
          <ellipse cx="80" cy="40" rx="24" ry="8" fill="#3B82F6" />
          <circle cx="74" cy="56" r="2" fill="#1E293B" />
          <circle cx="86" cy="56" r="2" fill="#1E293B" />
          <path d="M76 64C78 66 82 66 84 64" stroke="#1E293B" strokeWidth="2" strokeLinecap="round" />
          {/* Holding smartphone */}
          <rect x="92" y="98" width="16" height="28" rx="3" transform="rotate(-15 92 98)" fill="#0F172A" />
          <rect x="94" y="101" width="12" height="22" rx="2" transform="rotate(-15 94 101)" fill="#60A5FA" opacity="0.9" />
          {/* Butterfly longevity icon */}
          <circle cx="122" cy="44" r="14" fill="#FFFFFF" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.1))" />
          <text x="122" y="49" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#2563EB">🦋</text>
        </svg>
      ),
      description: 'Empowering women through perimenopause and post-menopause with evidence-based management of vasomotor hot flashes, DEXA bone density preservation, lipid/cardiovascular defense, and HRT consultations.',
      keyPillars: [
        { label: 'Vasomotor & Hot Flash Relief', desc: 'Non-hormonal and hormone therapies to restore restful sleep and regulate temperature.' },
        { label: 'Bone Density (DEXA) & Osteopenia', desc: 'Preventing osteoporosis with high-absorption Calcium Citrate & Vitamin D3.' },
        { label: 'Cardio-Metabolic Lipid Panels', desc: 'Monitoring ApoB, hs-CRP, and carotid health as natural estrogen protection declines.' },
        { label: 'Hormone Replacement Therapy (HRT)', desc: 'Connecting with specialized gynecologists for tailored, safe bioidentical HRT.' }
      ],
      recommendedTools: [
        { name: 'Menopause & Longevity Masterclass', link: '/womens-health/academy' },
        { name: 'Doorstep Bone & Hormone Profile', link: '/womens-health/blood-tests' },
        { name: 'Dr. Arya Midlife Wellness Consult', link: '/symptom-checker' }
      ],
      stats: '150 Million+ Indian women are currently in perimenopause or menopause, with 80% unaddressed'
    }
  ]

  const current = stages[activeStage]

  return (
    <section className="relative max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12 overflow-hidden">
      
      {/* ── 1. SECTION HEADLINE (MATCHING USER'S EXACT INSPIRATION) ── */}
      <div className="text-center max-w-4xl mx-auto space-y-4">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-3xs font-black uppercase tracking-widest shadow-xs">
          <Sparkles className="w-3.5 h-3.5 text-rose-400" />
          <span>LIFELONG REPRODUCTIVE &amp; WOMEN&apos;S HEALTH OS</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-5xl font-extrabold text-slate-950 tracking-tight leading-[1.15]">
          The only women&apos;s health solution focused on{' '}
          <span className="font-serif italic font-normal text-rose-600 underline decoration-rose-300 underline-offset-4">
            all
          </span>{' '}
          areas of women&apos;s health
        </h2>

        <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
          Our platform supports the full spectrum of women’s and family health, serving as the essential companion that improves health outcomes and supports equitable family journeys.
        </p>
      </div>

      {/* ── 2. CONTINUOUS TIMELINE / 6 CIRCULAR STAGES ── */}
      <div className="relative pt-4 pb-2">
        
        {/* Horizontal Connecting Timeline Line (Desktop / Tablet) */}
        <div className="hidden lg:block absolute top-[74px] left-[7%] right-[7%] h-[3px] bg-slate-800 -z-0" />

        {/* 6 Stage Circular Nodes */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 relative z-10">
          {stages.map((stg, idx) => {
            const isSelected = activeStage === idx
            return (
              <button
                key={stg.id}
                onClick={() => setActiveStage(idx)}
                className={`group flex flex-col items-center text-center space-y-3 transition-all duration-300 focus:outline-none ${
                  isSelected ? 'scale-105' : 'hover:-translate-y-1 opacity-85 hover:opacity-100'
                }`}
              >
                {/* Circular Illustrated Avatar Container */}
                <div
                  className={`relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1.5 transition-all shadow-md bg-white ${
                    isSelected
                      ? 'ring-4 ring-rose-500 shadow-xl border-2 border-white'
                      : 'border-2 border-slate-200 hover:border-slate-400 hover:shadow-lg'
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden flex items-center justify-center bg-slate-50">
                    {stg.illustration}
                  </div>

                  {/* Stage Number Badge */}
                  <span
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full text-3xs font-black flex items-center justify-center border-2 border-white shadow-xs transition-colors ${
                      isSelected ? 'bg-slate-950 text-white' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    {stg.num}
                  </span>
                </div>

                {/* Stage Title */}
                <div className="space-y-0.5 px-1 max-w-[170px]">
                  <h3
                    className={`text-xs sm:text-sm font-black transition-colors leading-tight ${
                      isSelected ? 'text-rose-600' : 'text-slate-900 group-hover:text-slate-950'
                    }`}
                  >
                    {stg.title}
                  </h3>
                  <span className="text-3xs text-slate-500 hidden sm:block font-medium">
                    {stg.shortTitle}
                  </span>
                </div>

                {/* Active Indicator Arrow */}
                {isSelected && (
                  <div className="w-2 h-2 rounded-full bg-rose-600 animate-ping hidden lg:block" />
                )}
              </button>
            )
          })}
        </div>
      </div>

      {/* ── 3. EXPANDED INTERACTIVE STAGE EXPLORER CARD ── */}
      <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8 animate-fadeIn">
        
        {/* Stage Header & Overview */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-100 pb-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-3xs font-black uppercase px-3 py-1 rounded-full border ${current.tagColor}`}>
                {current.badge}
              </span>
              <span className="text-3xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                Step {current.num} of 6 in Lifelong Care
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-slate-950">
              {current.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
              {current.description}
            </p>
          </div>

          {/* Direct CTA Action Button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
            <Link
              href="/womens-health/tools"
              className="px-6 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-black text-xs flex items-center justify-center gap-2 shadow-sm transition-transform hover:scale-102"
            >
              <span>Explore Clinical Tools</span>
              <ArrowRight className="w-4 h-4 text-rose-400" />
            </Link>

            <a
              href={`https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20am%20exploring%20${encodeURIComponent(current.title)}%20and%20need%20clinical%20guidance`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-sm transition-transform hover:scale-102"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask Dr. Arya AI (24/7)</span>
            </a>
          </div>
        </div>

        {/* 4 Key Clinical Pillars for this Stage */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-3xs font-black text-slate-400 uppercase tracking-wider">
              WHAT MEDITRUST AI DELIVERS IN THIS PHASE
            </span>
            <span className="text-3xs font-bold text-rose-600">
              ✓ Clinical Precision · Zero Stigma
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {current.keyPillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-50 hover:bg-white rounded-2xl p-4 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-900 shadow-2xs">
                    {idx + 1}
                  </div>
                  <strong className="font-black text-xs text-slate-950 block">
                    {pillar.label}
                  </strong>
                  <p className="text-3xs text-slate-600 leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Free Calculators & Products for this Stage */}
        <div className="p-5 rounded-2xl bg-[#faf8f6] border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-3xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
              <Activity className="w-3.5 h-3.5 text-rose-600" />
              <span>CLINICAL INSIGHT &amp; DATA BENCHMARK</span>
            </span>
            <p className="text-xs text-slate-800 font-semibold">
              {current.stats}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {current.recommendedTools.map((tool, idx) => (
              <Link
                key={idx}
                href={tool.link}
                className="px-3.5 py-1.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-bold text-3xs border border-slate-200 flex items-center gap-1 transition-colors shadow-2xs"
              >
                <span>{tool.name}</span>
                <ArrowUpRight className="w-3 h-3 text-slate-400" />
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* ── 4. SPECTRUM VALUE PROP TICKER ── */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-1">
          <span className="text-xl">🩺</span>
          <strong className="text-xs font-black text-slate-950 block">24/7 AI Doctor</strong>
          <span className="text-3xs text-slate-500">Dr. Arya in Marathi, Hindi &amp; English</span>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-1">
          <span className="text-xl">🩸</span>
          <strong className="text-xs font-black text-slate-950 block">60-Min Doorstep Labs</strong>
          <span className="text-3xs text-slate-500">Thyrocare, Metropolis &amp; Dr Lal PathLabs</span>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-1">
          <span className="text-xl">💊</span>
          <strong className="text-xs font-black text-slate-950 block">80% Generic Savings</strong>
          <span className="text-3xs text-slate-500">PMBJP Jan Aushadhi bioequivalent drugs</span>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-2xs space-y-1">
          <span className="text-xl">🌿</span>
          <strong className="text-xs font-black text-slate-950 block">100% Toxin-Free Care</strong>
          <span className="text-3xs text-slate-500">Sakhi™ Rash-Free period &amp; maternity kits</span>
        </div>
      </div>

    </section>
  )
}
