'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Heart, Sparkles, ShieldCheck, CheckCircle2, ArrowRight,
  ChevronRight, Calendar, Baby, Clock, ShoppingBag, MessageCircle,
  FlaskConical, Stethoscope, Activity, BookOpen, AlertCircle,
  Users, Building2, TrendingUp, Layers, Award, Zap,
  Check, Smile, Eye, ArrowUpRight, Flame, Compass, RefreshCw,
  Search, Sliders, Dna, Brain, Shield, Crosshair, Sparkle
} from 'lucide-react'

export default function SpecialtiesClient() {
  // ── ACTIVE SPECIALTY TAB (0 to 6) ──
  const [activeSpecialty, setActiveSpecialty] = useState<number>(0)
  const [searchFilter, setSearchFilter] = useState<string>('')

  const specialties = [
    {
      id: 'reproductive-health',
      num: 1,
      title: 'Reproductive Health',
      cardTitle: 'Reproductive Health',
      shortDesc: 'Fertility technologies, reproductive diagnostics, assisted reproduction innovation.',
      badge: 'VERTICAL 1 · FERTILITY & ART',
      icon: '🐚',
      cardBg: 'bg-[#fbf1ee]',
      cardBorder: 'border-[#f4d4cb]',
      cardText: 'text-[#8c3b27]',
      accentColor: '#c85a3a',
      activeRing: 'ring-[#c85a3a]',
      highlightTag: 'Fertility Tech & Diagnostics',
      tagColor: 'bg-rose-100 text-rose-900 border-rose-200',
      detailedOverview: 'Empowering individuals and couples with evidence-based reproductive healthcare: ovarian reserve quantification, dual-partner fertility assessments, precision ovulation tracking, and unbiased assisted reproduction (IVF/IUI) care navigation.',
      keyClinicalAreas: [
        {
          name: 'Fertility Readiness & Ovulation Tracking',
          desc: 'Pinpointing the 6-day fertile window with clinical hormone algorithms (LH peak, basal temperature, cervical mucus matrix).'
        },
        {
          name: 'AMH & Ovarian Reserve Quantification',
          desc: 'Evaluating biological egg reserve via high-sensitivity Anti-Müllerian Hormone (AMH) and Antral Follicle Count (AFC).'
        },
        {
          name: 'Male Factor Andrology & Semen Analysis',
          desc: 'WHO 6th Edition sperm assessment (count, motility, morphology, DNA fragmentation index) with 90-day cellular replenishment protocols.'
        },
        {
          name: 'ICMR-Compliant IVF / IUI Navigation',
          desc: 'Unbiased discovery of accredited embryology labs, transparent package costs, air purity grading, and medication guidance.'
        },
        {
          name: 'Preconception Genetic Carrier Screening',
          desc: 'Thalassemia, Spinal Muscular Atrophy (SMA), Cystic Fibrosis, and Rh-factor compatibility screening before conception.'
        },
        {
          name: 'Elective Oocyte Cryopreservation (Egg Freezing)',
          desc: 'Age-stratified vitrification models, egg count targets, clinic success metrics, and corporate fertility benefit integration.'
        }
      ],
      diagnosticTests: [
        'Serum AMH (Anti-Müllerian Hormone)',
        'Complete Semen Analysis (WHO 6th Ed)',
        'Day 2/3 Hormone Panel (FSH, LH, Estradiol)',
        'Pelvic Ultrasound & Antral Follicle Count',
        'Thyroid TSH & Prolactin Level',
        'Extended Genetic Carrier Screen (200+ Genes)'
      ],
      meditrustAiSolutions: [
        'AI Preconception Navigator & Fertile Window Predictor',
        '60-Minute At-Home Blood Sample Pickup with NABL Labs',
        '1-Click Teleconsultations with Reproductive Endocrinologists',
        'Jan Aushadhi Generic Savings on IVF Support Medications'
      ],
      relatedTools: [
        { name: 'Ovulation & Fertile Window Calculator', link: '/tools/ovulation-calculator' },
        { name: 'Fertility Readiness Quiz', link: '/womens-health/tools' },
        { name: 'IVF Cost & Success Estimator', link: '/womens-health/tools' }
      ],
      marketStat: '1 in 6 individuals globally experience infertility; 85% achieve pregnancy with timely structured navigation.'
    },
    {
      id: 'menopause-midlife',
      num: 2,
      title: 'Menopause & Midlife Health',
      cardTitle: 'Menopause & Midlife Health',
      shortDesc: 'Hormonal health platforms, metabolic solutions, longevity-focused technologies.',
      badge: 'VERTICAL 2 · HORMONAL & METABOLIC',
      icon: '🌀',
      cardBg: 'bg-[#fef4ed]',
      cardBorder: 'border-[#fed7be]',
      cardText: 'text-[#93471c]',
      accentColor: '#d97706',
      activeRing: 'ring-[#d97706]',
      highlightTag: 'Hormone & Metabolic OS',
      tagColor: 'bg-amber-100 text-amber-900 border-amber-200',
      detailedOverview: 'Navigating perimenopause, menopause, and midlife transitions with clinical rigor: personalized vasomotor symptom relief, DEXA bone density preservation, cardiovascular risk mitigation, and safe bioidentical Hormone Replacement Therapy (HRT) protocols.',
      keyClinicalAreas: [
        {
          name: 'Vasomotor Symptom Management',
          desc: 'Non-hormonal and hormonal therapies to manage hot flashes, night sweats, daytime flushes, and temperature dysregulation.'
        },
        {
          name: 'Hormone Replacement Therapy (HRT) Safety',
          desc: 'Individualized benefit-risk stratification for transdermal estradiol, micronized progesterone, and bioidentical hormones.'
        },
        {
          name: 'Bone Mineral Density & Osteoporosis Defense',
          desc: 'DEXA scan scheduling, bioavailable Calcium Citrate Maleate, Vitamin D3/K2, and resistance training guidance to prevent osteopenia.'
        },
        {
          name: 'Cardio-Metabolic Lipid Protection',
          desc: 'Monitoring ApoB, hs-CRP, and lipid subfractions as natural cardioprotective estrogen levels decline during transition.'
        },
        {
          name: 'Neuro-Cognitive Vitality & Sleep Architecture',
          desc: 'Mitigating midlife brain fog, circadian insomnia, and mood fluctuations through neuroendocrine sleep optimization.'
        },
        {
          name: 'Genitourinary Syndrome of Menopause (GSM)',
          desc: 'Evidence-based local vaginal therapies, pelvic floor physical therapy, and urinary tract resilience protocols.'
        }
      ],
      diagnosticTests: [
        'Perimenopause Hormone Profile (FSH, Estradiol)',
        'DEXA Dual-Energy X-ray Bone Densitometry',
        'Comprehensive Lipid Panel (ApoB, hs-CRP, LDL-C)',
        'Fasting Blood Sugar & HbA1c Glycemic Matrix',
        'Serum Vitamin D3 (25-OH) & Total Calcium',
        'Liver & Kidney Function Profile (LFT & KFT)'
      ],
      meditrustAiSolutions: [
        'Vasomotor Daily Symptom Tracker & AI Hot Flash Journal',
        'Certified Menopause Gynecologist Teleconsultations',
        'Doorstep Bone & Hormone Profile Sample Collection',
        'Personalized Nutrition & Calcium Bioavailability Plans'
      ],
      relatedTools: [
        { name: 'Menopause Masterclass in Academy', link: '/womens-health/academy' },
        { name: 'PCOS & Hormone Symptom Checker', link: '/symptom-checker' },
        { name: 'Generic Medicine Cost Comparator', link: '/medication-comparison' }
      ],
      marketStat: '150 Million+ Indian women are currently navigating perimenopause or menopause, with over 80% unaddressed.'
    },
    {
      id: 'maternal-health',
      num: 3,
      title: 'Maternal Health',
      cardTitle: 'Maternal Health',
      shortDesc: 'Pregnancy monitoring, remote diagnostics, postnatal care innovation.',
      badge: 'VERTICAL 3 · MATERNITY & POSTPARTUM',
      icon: '➕',
      cardBg: 'bg-[#edf3f8]',
      cardBorder: 'border-[#c9dbe9]',
      cardText: 'text-[#235377]',
      accentColor: '#2563eb',
      activeRing: 'ring-[#2563eb]',
      highlightTag: '40-Week OS & Postpartum',
      tagColor: 'bg-blue-100 text-blue-900 border-blue-200',
      detailedOverview: 'A full-stack obstetric and fourth-trimester care infrastructure: week-by-week fetal growth tracking, mandatory NABL trimester ultrasounds, delivery room planning, and 100% toxin-free postpartum wound and lactation recovery essentials.',
      keyClinicalAreas: [
        {
          name: '40-Week Obstetric Pregnancy OS',
          desc: 'Trimester milestones, physiological maternal adaptations, fetal fruit size milestones, and red-flag symptom triage.'
        },
        {
          name: 'Mandatory Ultrasound Scan Schedule',
          desc: 'NT Scan with Dual Marker (11–13w), TIFFA Level-2 structural anomaly (18–22w), and Fetal Growth Color Doppler (32–36w).'
        },
        {
          name: 'Doorstep NABL Antenatal Labs',
          desc: '60-minute doorstep blood collections for Beta-hCG, CBC, Thyroid, Oral Glucose Tolerance (OGTT), and NIPT genetic screening.'
        },
        {
          name: 'Hospital Delivery Packages & Birth Planning',
          desc: 'Unbiased comparison of maternity wings, NICU Level capabilities, painless epidural guidance, and normal vs C-section packages.'
        },
        {
          name: 'Fourth Trimester (0–6 Months) Postpartum Healing',
          desc: 'Episiotomy & C-section scar wound healing, lochia management, pelvic floor rehabilitation, and postpartum recovery kits.'
        },
        {
          name: 'Certified Lactation & Newborn Guidance',
          desc: '24/7 video consults with certified lactation consultants for latch technique, mastitis prevention, and infant feeding.'
        }
      ],
      diagnosticTests: [
        '1st Trimester NT Scan & Dual Marker Biochemical Test',
        '18–22 Week TIFFA Level-2 Anomaly Ultrasound',
        'Oral Glucose Tolerance Test (OGTT 75g) at 24–28w',
        '3rd Trimester Fetal Growth Color Doppler',
        'Non-Invasive Prenatal Testing (NIPT Cell-Free DNA)',
        'Complete Hemogram & Serum Ferritin Iron Stores'
      ],
      meditrustAiSolutions: [
        'MediMom™ 40-Week Maternity Clinical Dashboard',
        'Sakhi™ Fourth Trimester Care Box (100% Toxin-Free)',
        '24/7 Dr. Arya AI Obstetric Clinical Hotline',
        'Hospital Delivery Bag Checklist with 1-Click Export'
      ],
      relatedTools: [
        { name: 'Explore MediMom™ Platform', link: '/medimom' },
        { name: 'Pregnancy Due Date Calculator (EDD)', link: '/tools/due-date-calculator' },
        { name: 'Hospital Delivery Cost Estimator', link: '/womens-health/tools' }
      ],
      marketStat: '25 Million babies are born in India each year; comprehensive prenatal tracking reduces adverse outcomes by up to 40%.'
    },
    {
      id: 'digital-therapeutics-ai',
      num: 4,
      title: 'Digital Therapeutics & AI',
      cardTitle: 'Digital Therapeutics & AI',
      shortDesc: 'Data-driven clinical platforms, AI-enabled care models, precision health systems.',
      badge: 'VERTICAL 4 · AI & CLINICAL PLATFORMS',
      icon: '💻',
      cardBg: 'bg-[#edf7f5]',
      cardBorder: 'border-[#c9e8e2]',
      cardText: 'text-[#1e6153]',
      accentColor: '#0d9488',
      activeRing: 'ring-[#0d9488]',
      highlightTag: 'Dr. Arya AI & MediVault',
      tagColor: 'bg-teal-100 text-teal-900 border-teal-200',
      detailedOverview: 'Powering India’s digital health infrastructure with clinical-grade artificial intelligence: 24/7 multilingual symptom triage with Dr. Arya, HIPAA/ABDM-compliant longitudinal health records via MediVault™, and AI-driven generic medicine matching.',
      keyClinicalAreas: [
        {
          name: '24/7 Dr. Arya Multilingual AI Physician',
          desc: 'Instant clinical triage across 15+ specialties in Marathi, Hindi, and English with non-diagnostic empathetic guidance.'
        },
        {
          name: 'MediVault™ Longitudinal Health Record Layer',
          desc: '256-bit encrypted health record persistence for ultrasounds, blood reports, prescriptions, and cycle histories.'
        },
        {
          name: 'AI Prescription Scanner & Generic Comparator',
          desc: 'Instant optical scan of doctor prescriptions matching branded drugs to 80% cheaper PMBJP Jan Aushadhi bioequivalents.'
        },
        {
          name: 'Predictive Risk Stratification Models',
          desc: 'Early detection of preeclampsia, gestational diabetes, and PCOS metabolic risks using longitudinal biomarker tracking.'
        },
        {
          name: '22+ Free Clinical Algorithms & Calculators',
          desc: 'Evidence-based tools including Beta-hCG kinetic doubling speedometers, ultrasound CRL biometry, and fertility readiness.'
        },
        {
          name: 'Zero-Knowledge Enterprise Privacy Fortress',
          desc: 'Cryptographically isolated health record architecture ensuring employers never receive individual employee health PII.'
        }
      ],
      diagnosticTests: [
        'AI Lab Report Plain-Language Explainer Engine',
        'Biomarker Kinetic Doubling Rate Analysis',
        'PMBJP Jan Aushadhi Bioequivalence Verification',
        'ABDM Health ID (ABHA) Linked Diagnostic Sync',
        'Symptom Checker Specialty Matching Matrix',
        'Continuous Vital & Cycle Disruption Analytics'
      ],
      meditrustAiSolutions: [
        'Dr. Arya 24/7 WhatsApp AI Doctor (+91 7028025717)',
        'Prescription OCR Scanner with Jan Aushadhi Matching',
        'MediVault™ HIPAA/ABDM Encrypted Medical Locker',
        'Corpo Mom Employer Anonymized Analytics Engine'
      ],
      relatedTools: [
        { name: 'Free AI Symptom Checker', link: '/symptom-checker' },
        { name: '80% Generic Medicine Comparison', link: '/medication-comparison' },
        { name: 'MediVault™ Health Record', link: '/medivault' }
      ],
      marketStat: 'Global Digital Health & FemTech is projected to reach $297B by 2035; AI care coordination drives 4:1 enterprise ROI.'
    },
    {
      id: 'womens-oncology',
      num: 5,
      title: 'Women’s Oncology',
      cardTitle: "Women's Oncology",
      shortDesc: 'Gender specific diagnostics, early detection, technologies, therapeutic innovation.',
      badge: 'VERTICAL 5 · ONCOLOGY & EARLY SCREENING',
      icon: '🎗️',
      cardBg: 'bg-[#f7f2f9]',
      cardBorder: 'border-[#e7d7ee]',
      cardText: 'text-[#5f2e71]',
      accentColor: '#9333ea',
      activeRing: 'ring-[#9333ea]',
      highlightTag: 'Early Detection & Screening',
      tagColor: 'bg-purple-100 text-purple-900 border-purple-200',
      detailedOverview: 'Dedicated to early cancer detection, preventive screening, and onco-fertility preservation: breast health protocols, high-risk HPV DNA cervical cancer screening, ovarian cancer biomarkers, and hereditary genetic risk assessment.',
      keyClinicalAreas: [
        {
          name: 'Breast Cancer Early Detection Protocols',
          desc: 'Age-based screening mammography, breast ultrasound for dense breast tissue, and clinical breast examination reminders.'
        },
        {
          name: 'Cervical Cancer Elimination & Screening',
          desc: 'Liquid-Based Cytology (LBC) Pap smears, high-risk HPV DNA co-testing (strains 16, 18, 45), and HPV vaccination guidance.'
        },
        {
          name: 'Hereditary Cancer Genetic Risk Panels',
          desc: 'BRCA1, BRCA2, PALB2, and Lynch Syndrome next-generation sequencing panels for families with hereditary cancer history.'
        },
        {
          name: 'Ovarian & Uterine Cancer Biomarkers',
          desc: 'Serum CA-125, HE4, and ROMA (Risk of Ovarian Malignancy Algorithm) diagnostics with accredited onco-gynecology clinics.'
        },
        {
          name: 'Onco-Fertility Preservation Guidance',
          desc: 'Emergency oocyte and embryo vitrification before chemotherapy or pelvic radiation to safeguard future parenthood.'
        },
        {
          name: 'Post-Treatment Survivorship & Rehabilitation',
          desc: 'Lymphedema management, bone health monitoring after anti-estrogen therapies, and specialized emotional counseling.'
        }
      ],
      diagnosticTests: [
        'High-Risk HPV DNA Test (PCR / Hybrid Capture)',
        'Liquid-Based Cytology (LBC) Pap Smear',
        'BRCA1 & BRCA2 Hereditary Gene Panel',
        'Serum CA-125 & HE4 Ovarian Cancer Markers',
        'Digital Screening Mammography & Sono-Mammography',
        'Endometrial Biopsy / Pelvic Doppler Ultrasound'
      ],
      meditrustAiSolutions: [
        'Annual Preventive Screening Calendar & WhatsApp Reminders',
        'Onco-Gynecology Specialist Telehealth Consultations',
        'At-Home HPV DNA Self-Sampling Kit Guidance',
        'Onco-Fertility Urgent Care Referral Desk'
      ],
      relatedTools: [
        { name: 'Women’s Health Diagnostic Blood Panels', link: '/womens-health/blood-tests' },
        { name: 'Academy Oncology Prevention Guide', link: '/womens-health/academy' },
        { name: 'Dr. Arya Early Symptom Consultation', link: '/symptom-checker' }
      ],
      marketStat: 'Cervical cancer is 99% preventable with HPV screening & vaccination; early breast cancer detection yields 98%+ 5-year survival.'
    },
    {
      id: 'mental-health-neuroendocrine',
      num: 6,
      title: 'Mental Health & Neuroendocrine',
      cardTitle: 'Mental Health & Neuroendocrine',
      shortDesc: 'Perinatal mood, PMDD, neuroendocrine axis, sleep & cognitive health, stress & emotional resilience.',
      badge: 'VERTICAL 6 · BRAIN & HORMONAL AXIS',
      icon: '🧠',
      cardBg: 'bg-[#f0f9f3]',
      cardBorder: 'border-[#cfead7]',
      cardText: 'text-[#215d34]',
      accentColor: '#16a34a',
      activeRing: 'ring-[#16a34a]',
      highlightTag: 'Perinatal Mood & PMDD',
      tagColor: 'bg-emerald-100 text-emerald-900 border-emerald-200',
      detailedOverview: 'De-stigmatizing and treating the intricate link between hormones, brain neurochemistry, and mental health: Premenstrual Dysphoric Disorder (PMDD), postpartum depression (PPD), hypothalamic-pituitary-adrenal (HPA) stress dynamics, and sleep restoration.',
      keyClinicalAreas: [
        {
          name: 'Premenstrual Dysphoric Disorder (PMDD)',
          desc: 'Treating severe luteal-phase neurochemical vulnerability to allopregnanolone with targeted SSRI micro-dosing and nutritional therapy.'
        },
        {
          name: 'Perinatal Mood & Anxiety Disorders (PMAD)',
          desc: 'Proactive prenatal and postpartum screening using the Edinburgh Postnatal Depression Scale (EPDS) with zero stigma.'
        },
        {
          name: 'Hypothalamic-Pituitary-Adrenal (HPA) Axis & Cortisol',
          desc: 'Evaluating adrenal fatigue, chronic sympathetic overdrive, and cortisol dysregulation impacting ovulation and thyroid function.'
        },
        {
          name: 'Circadian Sleep Architecture & Melatonin Cycles',
          desc: 'Restoring slow-wave deep sleep and REM cycles disrupted by hormonal fluctuations across the menstrual cycle and menopause.'
        },
        {
          name: 'Perinatal Grief & Pregnancy Loss Support',
          desc: 'Specialized psychological care, somatic trauma support, and emotional counseling following miscarriage, failed IVF, or stillbirth.'
        },
        {
          name: 'Workplace Neuroendocrine Burnout Coaching',
          desc: 'Empowering working women to balance executive cognitive load, caregiving responsibilities, and hormonal transitions.'
        }
      ],
      diagnosticTests: [
        'Edinburgh Postnatal Depression Scale (EPDS) Screening',
        'Salivary 4-Point Cortisol Awakening Response (CAR)',
        'Serum DHEA-S & Free Testosterone Panel',
        'Thyroid Antibodies (Anti-TPO & Anti-TG)',
        'Serum Vitamin B12, Folate & Ferritin Depletion Check',
        'Daily Circadian Sleep & Mood Matrix Journal'
      ],
      meditrustAiSolutions: [
        'Confidential 1-on-1 Consultations with Perinatal Psychologists',
        'Daily Luteal Phase Hormone & Mood Check-In Engine',
        '24/7 Anonymous Dr. Arya Mental Health Support',
        'Corpo Mom Maternal Mental Health Workplace Module'
      ],
      relatedTools: [
        { name: 'Corpo Mom Employee Mental Health', link: '/corpo-mom' },
        { name: '1,000+ Clinical Questions Directory', link: '/fertility-qa' },
        { name: 'Dr. Arya Safe & Confidential Chat', link: '/symptom-checker' }
      ],
      marketStat: '1 in 5 new mothers experience postpartum mood disorders; early screening and clinical support restore well-being in 90%+ cases.'
    },
    {
      id: 'longevity-healthy-aging',
      num: 7,
      title: 'Longevity & Healthy Aging',
      cardTitle: 'Longevity & Healthy Aging',
      shortDesc: 'Prevention, healthspan optimization, aging biology.',
      badge: 'VERTICAL 7 · HEALTHSPAN & LONGEVITY',
      icon: '🧬',
      cardBg: 'bg-[#fdf9e8]',
      cardBorder: 'border-[#f9edb6]',
      cardText: 'text-[#796013]',
      accentColor: '#ca8a04',
      activeRing: 'ring-[#ca8a04]',
      highlightTag: 'Healthspan & Cellular Aging',
      tagColor: 'bg-yellow-100 text-yellow-900 border-yellow-200',
      detailedOverview: 'Maximizing female healthspan and cellular resilience: preventing chronic non-communicable diseases, optimizing mitochondrial bioenergetics, preserving lean muscle mass against sarcopenia, and extending vibrant, active years across life.',
      keyClinicalAreas: [
        {
          name: 'Cellular Aging Biology & Mitochondrial Health',
          desc: 'Targeting hallmarks of aging: cellular senescence, telomere attrition, oxidative stress, and mitochondrial dysfunction.'
        },
        {
          name: 'Female Cardiovascular Longevity Defense',
          desc: 'Advanced vascular markers (ApoB, Lp(a), hs-CRP, coronary calcium) tailored to women’s unique microvascular physiology.'
        },
        {
          name: 'Sarcopenia & Muscle Mass Preservation',
          desc: 'Targeted resistance training blueprints, optimal dietary leucine/protein distribution, and bioavailable Creatine supplementation.'
        },
        {
          name: 'Metabolic Flexibility & Insulin Sensitization',
          desc: 'Continuous glucose monitoring (CGM) analytics, fasting insulin levels, and reversing metabolic syndrome in post-menopause.'
        },
        {
          name: 'Micronutrient & Longevity Biomarkers',
          desc: 'Optimizing NAD+ precursors (NMN/NR), CoQ10, Omega-3 Index, Vitamin D3/K2, and high-absorption Magnesium Glycinate.'
        },
        {
          name: 'Annual Female Longevity Blueprint',
          desc: 'Comprehensive whole-body health audit comparing biological epigenetic age against chronological age with tailored protocols.'
        }
      ],
      diagnosticTests: [
        'Comprehensive Longevity Biomarker Panel (ApoB, hs-CRP, HbA1c)',
        'Omega-3 Index & Cellular Fatty Acid Profile',
        'Serum Homocysteine & High-Sensitivity Ferritin',
        'Bioimpedance Body Composition (Skeletal Muscle Mass & Visceral Fat)',
        'Fasting Insulin & HOMA-IR Insulin Resistance Score',
        'Biological Age Epigenetic Methylation Screening'
      ],
      meditrustAiSolutions: [
        'Annual Longevity Health Audit & Biological Age Calculator',
        'Jan Aushadhi Generic Savings on Chronic Preventive Medicines',
        'Nutritional Optimization & Micronutrient Guidance with Dr. Arya',
        'MediVault™ Lifelong Healthspan Record Tracking'
      ],
      relatedTools: [
        { name: 'Generic Medicine Price Savings Finder', link: '/medication-comparison' },
        { name: 'Women’s Health Comprehensive Panels', link: '/womens-health/blood-tests' },
        { name: 'Explore Women’s Health Academy', link: '/womens-health/academy' }
      ],
      marketStat: 'Women live on average 5 years longer than men, but spend 25% more of their lives in poor health—preventive longevity closes this gap.'
    }
  ]

  const current = specialties[activeSpecialty]

  const filteredSpecialties = specialties.filter(s =>
    s.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
    s.shortDesc.toLowerCase().includes(searchFilter.toLowerCase()) ||
    s.detailedOverview.toLowerCase().includes(searchFilter.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/womens-health" className="hover:text-rose-600 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-rose-600 font-bold">7 Clinical Specialties &amp; Verticals</span>
        </nav>
      </div>

      {/* ── HERO BANNER ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-purple-950 to-rose-950 text-white p-6 sm:p-12 border border-slate-800 shadow-2xl space-y-6 overflow-hidden">
          
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-3xs font-black uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-rose-400" />
              <span>THE 7 PILLARS OF MEDITRUST CLINICAL CARE</span>
            </div>
            <span className="text-3xs font-semibold text-slate-300 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              Evidence-Based ACOG, WHO &amp; ICMR Aligned
            </span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              The Full Spectrum of <br />
              <span className="text-gradient-chic">Women&apos;s Healthcare &amp; FemTech.</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              From reproductive diagnostics and digital therapeutics to maternal care, oncology screening, neuroendocrine health, and longevity science—Meditrust provides a unified, clinical-grade operating system across all 7 essential verticals.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#specialties-grid"
              className="px-6 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-xs transition-transform hover:scale-102 flex items-center gap-2 shadow-md"
            >
              <span>Explore 7 Clinical Verticals</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20have%20a%20clinical%20question%20regarding%20women%27s%20health%20specialties"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25d366]" />
              <span>Consult Dr. Arya AI (24/7)</span>
            </a>

            <Link
              href="/womens-health/tools"
              className="px-6 py-3.5 rounded-full bg-white text-slate-950 hover:bg-slate-100 font-black text-xs transition-colors flex items-center gap-2"
            >
              <span>Explore 22+ Free Tools</span>
            </Link>
          </div>

        </div>
      </section>

      {/* ── 7 VERTICALS GRID (EXACT CARDS MATCHING USER INSPIRATION) ── */}
      <section id="specialties-grid" className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">
            COMPLETE CLINICAL ARCHITECTURE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            7 Specialized Healthcare Verticals
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Click any vertical card below to inspect clinical scope, mandatory diagnostics, Dr. Arya AI navigation, and dedicated tools.
          </p>
        </div>

        {/* 7 Cards Visual Grid (Matching User Image Layout) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {specialties.map((spec, idx) => {
            const isSelected = activeSpecialty === idx
            return (
              <div
                key={spec.id}
                id={spec.id}
                onClick={() => setActiveSpecialty(idx)}
                className={`cursor-pointer rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between space-y-5 shadow-xs hover:shadow-xl ${spec.cardBg} ${spec.cardBorder} ${
                  isSelected ? `ring-4 ${spec.activeRing} scale-102 shadow-lg` : 'hover:-translate-y-1'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Header: Icon and Number */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl">{spec.icon}</span>
                    <span className={`text-3xs font-black uppercase px-2.5 py-1 rounded-full bg-white/80 border ${spec.cardBorder} ${spec.cardText}`}>
                      {spec.highlightTag}
                    </span>
                  </div>

                  {/* Title & Short Description */}
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight leading-snug">
                      {spec.cardTitle}
                    </h3>
                    <p className={`text-xs sm:text-sm leading-relaxed font-normal ${spec.cardText}`}>
                      {spec.shortDesc}
                    </p>
                  </div>
                </div>

                {/* Bottom Action Indicator */}
                <div className="pt-4 border-t border-slate-900/10 flex items-center justify-between text-xs font-bold">
                  <span className={`${spec.cardText} flex items-center gap-1`}>
                    <span>{isSelected ? 'Currently Viewing' : 'Click to Expand Details'}</span>
                  </span>
                  <div className={`w-7 h-7 rounded-full bg-white shadow-2xs flex items-center justify-center transition-transform ${isSelected ? 'translate-x-1' : ''}`}>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-900" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── EXPANDED DEEP-DIVE EXPLORER FOR SELECTED VERTICAL ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-8 animate-fadeIn">
          
          {/* Header of Active Specialty */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-100 pb-6">
            <div className="space-y-2 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`text-3xs font-black uppercase px-3 py-1 rounded-full border ${current.tagColor}`}>
                  {current.badge}
                </span>
                <span className="text-3xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                  Specialty {current.num} of 7 in Full Spectrum
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-3xl">{current.icon}</span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
                  {current.title}
                </h2>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
                {current.detailedOverview}
              </p>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
              <a
                href={`https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20need%20clinical%20consultation%20regarding%20${encodeURIComponent(current.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow-sm transition-transform hover:scale-102"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Consult Dr. Arya AI (24/7)</span>
              </a>

              <Link
                href="/womens-health/blood-tests"
                className="px-6 py-3.5 rounded-full bg-slate-950 hover:bg-slate-800 text-white font-black text-xs flex items-center justify-center gap-2 shadow-sm transition-transform hover:scale-102"
              >
                <FlaskConical className="w-4 h-4 text-rose-400" />
                <span>Book Diagnostic Panel</span>
              </Link>
            </div>
          </div>

          {/* 6 Key Clinical Focus Areas */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-3xs font-black text-slate-400 uppercase tracking-wider">
                CORE CLINICAL FOCUS &amp; MEDICAL TECHNOLOGIES
              </span>
              <span className="text-3xs font-bold text-rose-600">
                ✓ Evidence-Based Guidelines
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              {current.keyClinicalAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 hover:bg-white rounded-2xl p-5 border border-slate-200/90 shadow-2xs hover:shadow-md transition-all space-y-2 flex flex-col justify-between"
                >
                  <div className="space-y-1.5">
                    <div className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-xs font-bold text-slate-900 shadow-2xs">
                      {idx + 1}
                    </div>
                    <strong className="font-black text-xs text-slate-950 block">
                      {area.name}
                    </strong>
                    <p className="text-3xs text-slate-600 leading-relaxed font-normal">
                      {area.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Two-Column Diagnostic Tests & Meditrust AI Integration */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
            
            {/* Box 1: Mandatory Diagnostic Tests */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-rose-50/50 via-white to-purple-50/40 border border-rose-100 space-y-3">
              <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase tracking-wider">
                <FlaskConical className="w-4 h-4 text-rose-600" />
                <span>Key Diagnostic Scans &amp; Blood Panels</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {current.diagnosticTests.map((test, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 flex-shrink-0 mt-0.5" />
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link
                  href="/womens-health/blood-tests"
                  className="text-xs font-black text-rose-600 hover:text-rose-700 flex items-center gap-1"
                >
                  <span>View NABL Diagnostic Pricing in Pune</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Box 2: Meditrust AI Solutions */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-50/50 via-white to-emerald-50/40 border border-teal-100 space-y-3">
              <div className="flex items-center gap-2 text-teal-800 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-teal-600" />
                <span>How Meditrust AI Delivers Care in This Vertical</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-700">
                {current.meditrustAiSolutions.map((sol, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span>{sol}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <a
                  href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20need%20guidance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-black text-teal-700 hover:text-teal-800 flex items-center gap-1"
                >
                  <span>Chat with Dr. Arya AI Navigator</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Statistical Benchmark & Related Calculators */}
          <div className="p-5 rounded-2xl bg-[#faf8f6] border border-slate-200/90 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1 max-w-xl">
              <span className="text-3xs font-black text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Activity className="w-3.5 h-3.5 text-rose-600" />
                <span>CLINICAL BENCHMARK &amp; EPIDEMIOLOGY DATA</span>
              </span>
              <p className="text-xs text-slate-800 font-semibold">
                {current.marketStat}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {current.relatedTools.map((tool, idx) => (
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
      </section>

      {/* ── UNIFIED ECOSYSTEM ARCHITECTURE BANNER ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-3xs font-black uppercase tracking-widest text-rose-400 bg-rose-500/20 px-3.5 py-1.5 rounded-full">
              MEDITRUST UNIFIED REPRODUCTIVE &amp; WOMEN&apos;S HEALTH OS
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              One Connected Platform for Every Stage of Life
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We own the care journey and data persistence; accredited doctors, NABL labs, IVF centers, and hospitals deliver the treatment.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-2xl">🩺</span>
              <strong className="text-xs font-black text-white block">24/7 Dr. Arya AI</strong>
              <span className="text-3xs text-slate-400">Multilingual clinical triage in 3 languages</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-2xl">🩸</span>
              <strong className="text-xs font-black text-white block">60-Min Doorstep Labs</strong>
              <span className="text-3xs text-slate-400">Metropolis, Thyrocare &amp; Dr Lal PathLabs</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-2xl">💊</span>
              <strong className="text-xs font-black text-white block">80% Generic Savings</strong>
              <span className="text-3xs text-slate-400">PMBJP Jan Aushadhi bioequivalent matching</span>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-2xl">🌿</span>
              <strong className="text-xs font-black text-white block">Sakhi™ Recovery Kits</strong>
              <span className="text-3xs text-slate-400">100% Toxin-Free period &amp; maternity essentials</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
