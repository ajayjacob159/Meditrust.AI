'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Heart, Sparkles, ShieldCheck, CheckCircle2, ArrowRight,
  ChevronRight, Calendar, Baby, Clock, ShoppingBag, MessageCircle,
  FlaskConical, Stethoscope, Activity, BookOpen, AlertCircle,
  Users, Building2, TrendingUp, Layers, DollarSign, Globe,
  FileText, Lock, Award, Zap, Check, Sliders, BarChart3,
  Percent, Star, HelpCircle, ArrowUpRight, Cpu, Compass,
  RefreshCw, Smile, Eye
} from 'lucide-react'

export default function MediMomClient() {
  // ── 1. ACTIVE MONETIZATION STAGE (1 to 12) ──
  const [activeStageIdx, setActiveStageIdx] = useState<number>(0)

  // ── 2. ACTIVE REVENUE MODEL (1 to 12) ──
  const [activeRevenueModel, setActiveRevenueModel] = useState<number>(1)

  // ── 3. HOUSEHOLD LTV CALCULATOR STATE ──
  const [hasFertilityAssistance, setHasFertilityAssistance] = useState<boolean>(true)
  const [hasSecondPregnancy, setHasSecondPregnancy] = useState<boolean>(true)
  const [subscriptionMonths, setSubscriptionMonths] = useState<number>(12)
  const [commerceSpendPerYear, setCommerceSpendPerYear] = useState<number>(12000)

  // Dynamic Household LTV Calculation
  const householdLtv = useMemo(() => {
    let ltv = 0
    let diagnosticsRevenue = 3500
    let doctorBookings = 1500
    let fertilityCenterRevenue = hasFertilityAssistance ? 22000 : 0
    let membershipRevenue = subscriptionMonths * 799
    let hospitalBooking = 4500
    let commerceMargin = (commerceSpendPerYear * 0.25)
    let postpartumCare = 3000

    let singleChildTotal = diagnosticsRevenue + doctorBookings + fertilityCenterRevenue + membershipRevenue + hospitalBooking + commerceMargin + postpartumCare
    
    ltv = singleChildTotal
    if (hasSecondPregnancy) {
      // Second pregnancy adds recurring prenatal, hospital, commerce & subscription
      let secondChildTotal = diagnosticsRevenue + doctorBookings + (hasFertilityAssistance ? 12000 : 0) + (10 * 799) + hospitalBooking + commerceMargin + postpartumCare
      ltv += secondChildTotal
    }

    return {
      ltv: Math.round(ltv),
      singleChildTotal: Math.round(singleChildTotal),
      fertilityCenterRevenue,
      membershipRevenue,
      hospitalBooking,
      commerceMargin
    }
  }, [hasFertilityAssistance, hasSecondPregnancy, subscriptionMonths, commerceSpendPerYear])

  // 12 Customer Journey Stages
  const journeyStages = [
    {
      num: 1,
      title: "1. Family Planning",
      tag: "PRECONCEPTION",
      icon: "🌱",
      userNeed: "“We are thinking about having a baby. What should we know first?”",
      platformRole: "AI Preconception Navigator, ovulation education, biological clock risk assessment, and folic acid guidance.",
      monetization: "Free Tool Acquisition ➔ Preconception blood panel booking & genetic carrier screening."
    },
    {
      num: 2,
      title: "2. Fertility Assessment",
      tag: "TRIAGE & CHECKUP",
      icon: "🎯",
      userNeed: "“We’ve been trying for 6 months without success. Is something wrong?”",
      platformRole: "Dual-partner triage (Female AMH + Male Semen parameters), non-diagnostic care pathway matching.",
      monetization: "Fertility+ Membership subscription & couple lab test bundle booking."
    },
    {
      num: 3,
      title: "3. At-Home Diagnostics",
      tag: "LAB WORKUP",
      icon: "🧪",
      userNeed: "“Need AMH, Thyroid TSH, Prolactin, Semen Analysis and Pelvic Ultrasound.”",
      platformRole: "Doorstep NABL blood collection with 60-minute phlebotomist arrival, automated report sync to MediVault™.",
      monetization: "15–25% diagnostic platform commission per booking."
    },
    {
      num: 4,
      title: "4. Doctor Consultation",
      tag: "CLINICAL SPECIALIST",
      icon: "🩺",
      userNeed: "“Should I see a General Gynae or a Reproductive Endocrinologist?”",
      platformRole: "Unbiased specialist discovery, verified clinical credentials, 1-click video or OPD clinic consultation.",
      monetization: "Provider referral / appointment booking fee & digital prescription fulfillment."
    },
    {
      num: 5,
      title: "5. Fertility Clinic Discovery",
      tag: "IVF / IUI MATCHING",
      icon: "🧬",
      userNeed: "“Which IVF clinic has real success rates, transparent packages, and ethical embryology?”",
      platformRole: "Compare top IVF chains on lab air purity, ICMR compliance, ICSI packages, and Jan Aushadhi generic savings.",
      monetization: "High-value qualified patient acquisition fee (₹15,000–₹35,000 per treatment cycle) & clinic SaaS."
    },
    {
      num: 6,
      title: "6. Treatment & Preservation",
      tag: "ART / EGG FREEZING",
      icon: "❄️",
      userNeed: "“Undergoing IUI, IVF stimulation injections, or egg freezing vitrification.”",
      platformRole: "Injection calendar tracking, medication dosage reminders, 0% EMI financing, and emotional stress support.",
      monetization: "Financing commission, injectable pharmacy savings, and Meditrust Care Coordination."
    },
    {
      num: 7,
      title: "7. Positive Pregnancy (Conception)",
      tag: "MILESTONE CONVERSION",
      icon: "🎉",
      userNeed: "“Beta-hCG is positive! What do we do now?”",
      platformRole: "Conversion from TTC funnel into MediMom™ Pregnancy OS. Real-time Beta-hCG doubling velocity calculator.",
      monetization: "MOM+ Pregnancy subscription upgrade & 1st trimester essential welcome kit."
    },
    {
      num: 8,
      title: "8. Prenatal & Trimester Care",
      tag: "40-WEEK ROADMAP",
      icon: "🤰",
      userNeed: "“When are the NT Scan, Double Marker, TIFFA scan, and GTT diabetes test?”",
      platformRole: "Week-by-week fetal growth fruit visualizer, scan booking reminders, 24/7 Dr. Arya AI obstetric triage.",
      monetization: "Trimester scan packages, diagnostic tests, and maternity nutritional supplements."
    },
    {
      num: 9,
      title: "9. Maternity Hospital & Delivery",
      tag: "BIRTHING PREPARATION",
      icon: "🏥",
      userNeed: "“Which hospital for normal vs gentle C-section? What does my insurance cover?”",
      platformRole: "Side-by-side maternity hospital comparison (Cloudnine, Motherhood, Surya, Apollo), insurance cashless pre-auth.",
      monetization: "Hospital delivery package booking commission & corporate cashless TPA facilitation."
    },
    {
      num: 10,
      title: "10. Postpartum & 4th Trimester",
      tag: "RECOVERY & HEALING",
      icon: "🤱",
      userNeed: "“C-section wound care, lochia bleeding, night feedings, and emotional overwhelm.”",
      platformRole: "Certified lactation video consultations, Edinburgh Postnatal Depression (EPDS) screenings, pelvic PT.",
      monetization: "Lactation consult fees & postpartum mental health therapy packages."
    },
    {
      num: 11,
      title: "11. Maternity Commerce & Essentials",
      tag: "SAKHI™ MARKETPLACE",
      icon: "🛍️",
      userNeed: "“Rash-free maternity pads, nursing bras, electric breast pumps, and toxin-free baby care.”",
      platformRole: "Curated Sakhi™ marketplace with same-day delivery, hospital bag kits, and organic maternal essentials.",
      monetization: "15–35% e-commerce margin on curated brands & high-margin Meditrust Essentials private label."
    },
    {
      num: 12,
      title: "12. Retention & 2nd Pregnancy",
      tag: "LONG-TERM LTV",
      icon: "🔄",
      userNeed: "“Pediatric milestones, return-to-work coaching, and planning for our second baby.”",
      platformRole: "Ongoing women’s health tracking, PCOS management, corporate benefits, and seamless transition into 2nd baby.",
      monetization: "Multi-year household LTV: 2nd child journey repeats stages 1 through 11 with near-zero CAC."
    }
  ]

  // 12 Revenue Models Data
  const revenueModels = [
    {
      id: 1,
      name: "1. Doctor & Specialist Bookings",
      icon: "🩺",
      tag: "TELEHEALTH & OPD",
      desc: "User discovers, compares, and books gynecologists, andrologists, and reproductive specialists.",
      revenueType: "Booking convenience fee / provider referral / clinic SaaS subscription.",
      compliance: "Structured strictly compliant with Indian Telemedicine Practice Guidelines & MCI/NMC ethical codes."
    },
    {
      id: 2,
      name: "2. Doorstep Diagnostics & Scans",
      icon: "🧪",
      tag: "NABL LABS",
      desc: "AMH, Semen Analysis, Double Marker, NT scans, TIFFA scans, and Thyroid panels booked with 1 click.",
      revenueType: "15–25% platform margin per diagnostic test + digital report sync to MediVault™.",
      compliance: "Partnered with accredited NABL & ICMR certified diagnostic chains across Tier 1 & 2 cities."
    },
    {
      id: 3,
      name: "3. Fertility & IVF Center Referrals",
      icon: "🧬",
      tag: "HIGH-TICKET ART",
      desc: "Matching couples with transparent, accredited IVF centers based on embryology quality & cost transparency.",
      revenueType: "Qualified patient pathway acquisition fee (₹15,000–₹35,000) or Clinic B2B SaaS.",
      compliance: "Objective clinical benchmark scorecard with zero manipulation of medical rankings."
    },
    {
      id: 4,
      name: "4. Meditrust Fertility+ Membership",
      icon: "🌸",
      tag: "B2C RECURRING",
      desc: "Premium AI fertility navigation, cycle tracking, medical report organization, and care reminders.",
      revenueType: "₹499 to ₹1,999 / month recurring subscription.",
      compliance: "Educational & navigation companion; clear disclaimer that software does not dispense prescription medicine."
    },
    {
      id: 5,
      name: "5. Meditrust MOM+ Maternity Membership",
      icon: "🤰",
      tag: "PREGNANCY OS",
      desc: "Comprehensive 40-week pregnancy companion with weekly milestone scans, obstetric triage, and delivery tools.",
      revenueType: "₹799 / month or ₹4,999 full pregnancy subscription bundle.",
      compliance: "Curated by Dr. Arya MD following ACOG and Federation of Obstetric & Gynaecological Societies of India (FOGSI)."
    },
    {
      id: 6,
      name: "6. Hospital Delivery Marketplace",
      icon: "🏥",
      tag: "MATERNITY PACKAGES",
      desc: "Comparing maternity hospitals on NICU Level, normal vs C-section pricing, room rent caps, and insurance cashless tie-ups.",
      revenueType: "Hospital partnership booking fee / corporate pre-auth facilitation fee.",
      compliance: "Transparent pricing without hidden surgical charges."
    },
    {
      id: 7,
      name: "7. Sakhi™ Maternity & Period Marketplace",
      icon: "🛍️",
      tag: "E-COMMERCE",
      desc: "Curated store for ovulation kits, pregnancy tests, rash-free postpartum pads, breast pumps, and heat patches.",
      revenueType: "15–30% marketplace commission on third-party D2C brands.",
      compliance: "All products 100% hypoallergenic, toxin-free, and clinically vetted."
    },
    {
      id: 8,
      name: "8. Recurring Product Subscriptions",
      icon: "📦",
      tag: "AUTOSHIP COMMERCE",
      desc: "Automatic monthly delivery of Folic Acid, Iron, Calcium, DHA supplements, and nursing care essentials.",
      revenueType: "Predictable monthly consumable recurring revenue + 85% reorder retention.",
      compliance: "FSSAI certified nutraceuticals and licensed pharmacy distribution."
    },
    {
      id: 9,
      name: "9. Employer Corporate Benefits (Corpo Mom™)",
      icon: "🏢",
      tag: "B2B PEPM",
      desc: "Selling the Meditrust Family Health OS to progressive employers for female talent retention.",
      revenueType: "₹25 to ₹150+ Per Employee Per Month (PEPM) enterprise contracts.",
      compliance: "Zero-Knowledge Architecture: HR receives aggregated utilization; zero PII or medical disclosures."
    },
    {
      id: 10,
      name: "10. Meditrust Provider OS (Doctor/Clinic SaaS)",
      icon: "💻",
      tag: "B2B SAAS",
      desc: "Clinical workflow software for gynecologists & fertility clinics: intake, appointments, MediVault integration, and follow-ups.",
      revenueType: "₹2,000 to ₹25,000 / month per clinic / provider.",
      compliance: "ABDM (Ayushman Bharat Digital Mission) M1, M2, M3 compliance and HIPAA-grade cloud."
    },
    {
      id: 11,
      name: "11. Brand & Commerce Media",
      icon: "📢",
      tag: "SPONSORED DISCOVERY",
      desc: "Targeted educational and product placement for leading maternal, infant, and wellness brands.",
      revenueType: "Sponsored product discovery & contextual educational campaigns.",
      compliance: "Strict separation of advertising from unbiased clinical triage (Advertising ≠ Medical Recommendation)."
    },
    {
      id: 12,
      name: "12. Meditrust Essentials (Private Label)",
      icon: "✨",
      tag: "HIGH-MARGIN D2C",
      desc: "Proprietary line of fertility tracking kits, postpartum recovery boxes, and clean pregnancy wellness products.",
      revenueType: "50–70% gross margin on proprietary physical goods.",
      compliance: "Launched strategically after demand and cohort data is proven in the marketplace."
    }
  ]

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Medi&apos;s MOM™</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-rose-600 font-bold">Maternal Health &amp; Reproductive OS</span>
        </nav>
      </div>

      {/* ── HERO BANNER: THE STRONGER CATEGORY ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-rose-950 to-purple-950 text-white p-6 sm:p-12 border border-rose-900/50 shadow-2xl space-y-8 overflow-hidden">
          
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/40 text-rose-300 text-3xs font-black uppercase tracking-wider">
              <Heart className="w-3.5 h-3.5 text-rose-400" />
              <span>MEDITRUST MEDIMOM™ · REPRODUCTIVE HEALTHCARE NAVIGATION &amp; COMMERCE</span>
            </div>
            <span className="text-3xs font-semibold text-rose-200 bg-white/10 px-3 py-1 rounded-full border border-white/10">
              India&apos;s Full-Stack Family Healthcare Platform
            </span>
          </div>

          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              You Own the Journey. <br />
              <span className="text-gradient-chic">Providers Deliver the Care.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-3xl">
              MEDITRUST is the <strong>AI-powered reproductive healthcare navigation and commerce platform</strong> that helps individuals and couples navigate the entire continuum—from <em>family planning and fertility workup through pregnancy, hospital delivery, and postpartum care</em>.
            </p>

            <div className="p-4 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-md max-w-3xl">
              <p className="text-xs sm:text-sm text-rose-200 font-medium leading-normal">
                ✨ <strong>The Strategic Thesis:</strong> Infertility is not an isolated event. It is a continuous healthcare relationship spanning 12 distinct monetization stages—connecting families to the right doctors, NABL diagnostics, accredited IVF centers, maternity hospitals, and postpartum essentials.
              </p>
            </div>
          </div>

          {/* Key Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 text-xs">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-rose-400 font-black text-xl sm:text-2xl block">25 Million</span>
              <span className="text-slate-300 text-3xs block leading-tight">Annual births in India entering the maternity-care funnel (UNICEF)</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-purple-400 font-black text-xl sm:text-2xl block">$4.91 Billion</span>
              <span className="text-slate-300 text-3xs block leading-tight">India fertility market projected by 2034 (12.2% CAGR)</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-emerald-400 font-black text-xl sm:text-2xl block">1 in 6 (17.5%)</span>
              <span className="text-slate-300 text-3xs block leading-tight">Adults globally experience infertility during their lifetime (WHO)</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <span className="text-teal-400 font-black text-xl sm:text-2xl block">12 Stages</span>
              <span className="text-slate-300 text-3xs block leading-tight">Full lifecycle monetization from preconception to day 365 postpartum</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-4">
            <Link
              href="/womens-health/tools"
              className="px-6 py-3.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-black text-xs transition-transform hover:scale-102 flex items-center gap-2 shadow-lg"
            >
              <span>Explore 12 Clinical Health Tools</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="#journey-matrix"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-rose-300" />
              <span>Explore 12-Stage Journey Matrix</span>
            </a>

            <a
              href="#revenue-models"
              className="px-5 py-3.5 rounded-full bg-transparent hover:bg-white/5 text-rose-300 text-xs font-semibold flex items-center gap-1.5"
            >
              <DollarSign className="w-4 h-4" />
              <span>View 12 Revenue Models</span>
            </a>
          </div>

        </div>
      </section>

      {/* ── SECTION 1: THE REAL PROBLEM — FRAGMENTED REPRODUCTIVE CARE (7 PROBLEMS) ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">SECTION 1 · THE REAL PROBLEM</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            The Problem Isn&apos;t Infertility Alone. It Is Fragmented Healthcare.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Today, individuals and couples are forced to navigate 9 disconnected silos with zero continuity.
          </p>
        </div>

        {/* Fragmented Workflow Visualizer */}
        <div className="p-4 sm:p-6 rounded-3xl bg-slate-900 text-white border border-slate-800 space-y-3">
          <span className="text-3xs font-mono uppercase tracking-widest text-rose-400 block text-center">
            TODAY&apos;S BROKEN PATIENT PATHWAY WITHOUT MEDITRUST
          </span>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-xs font-semibold text-slate-300">
            <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">🔍 Google Search</span>
            <span className="text-rose-400">➔</span>
            <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">📱 Instagram Ads</span>
            <span className="text-rose-400">➔</span>
            <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">🩺 Random Doctor</span>
            <span className="text-rose-400">➔</span>
            <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">🧪 Diagnostic Lab</span>
            <span className="text-rose-400">➔</span>
            <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">🧬 IVF Center</span>
            <span className="text-rose-400">➔</span>
            <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">💊 Pharmacy</span>
            <span className="text-rose-400">➔</span>
            <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">🏥 Hospital</span>
            <span className="text-rose-400">➔</span>
            <span className="bg-white/10 px-3 py-1.5 rounded-xl border border-white/10">🤱 Postpartum</span>
          </div>
          <p className="text-center text-[11px] text-slate-400 pt-1">
            ❌ No single point of truth. No price transparency. No record continuity. The patient is overwhelmed.
          </p>
        </div>

        {/* 7 Core Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-2xl">❓</span>
            <span className="text-3xs font-black uppercase text-rose-600 bg-rose-50 px-2 py-0.5 rounded">PROBLEM #1</span>
            <h4 className="font-bold text-sm text-slate-900">“Where do I start?”</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Couples don&apos;t know when to seek medical help, which specialist to see, which tests are relevant, or whether to start with a gynae or andrologist.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-2xl">🧩</span>
            <span className="text-3xs font-black uppercase text-purple-600 bg-purple-50 px-2 py-0.5 rounded">PROBLEM #2</span>
            <h4 className="font-bold text-sm text-slate-900">Fragmented Providers</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Patients separately find gynecologists, andrologists, labs, IVF clinics, hospitals, pharmacies, and maternity products with no unified navigation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-2xl">⚖️</span>
            <span className="text-3xs font-black uppercase text-teal-600 bg-teal-50 px-2 py-0.5 rounded">PROBLEM #3</span>
            <h4 className="font-bold text-sm text-slate-900">Information Asymmetry</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Patients struggle to compare real clinical success rates, provider accreditations, treatment timelines, and true costs involving thousands or lakhs of rupees.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-2xl">💸</span>
            <span className="text-3xs font-black uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded">PROBLEM #4</span>
            <h4 className="font-bold text-sm text-slate-900">Cost Uncertainty</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fertility care escalates rapidly across consultation ➔ diagnostics ➔ medication ➔ procedure ➔ follow-up. Meditrust creates transparent care-pathway estimation.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-2xl">👶</span>
            <span className="text-3xs font-black uppercase text-blue-600 bg-blue-50 px-2 py-0.5 rounded">PROBLEM #5</span>
            <h4 className="font-bold text-sm text-slate-900">Journey Doesn&apos;t End at Conception</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Existing fertility apps obsess only over &quot;GET PREGNANT&quot;. But the mother then needs 40 weeks of prenatal care, hospital delivery, and 12 months postpartum.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-2xl">👫</span>
            <span className="text-3xs font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">PROBLEM #6</span>
            <h4 className="font-bold text-sm text-slate-900">Male Fertility Disconnected</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Fertility is a 50/50 couple journey, yet historically treated as female-only. Meditrust provides 360° support: Female + Male + Couple.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border-2 border-rose-400 bg-rose-50/30 shadow-2xs space-y-2 md:col-span-2 lg:col-span-3">
            <span className="text-2xl">🗄️</span>
            <span className="text-3xs font-black uppercase text-rose-700 bg-rose-100 px-2 py-0.5 rounded">PROBLEM #7 (LONGITUDINAL MOAT)</span>
            <h4 className="font-bold text-sm text-slate-900">Healthcare Data Fragmentation ➔ MediVault™ Solution</h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              Blood reports in one lab, ultrasound at an imaging clinic, prescriptions on WhatsApp, IVF embryology charts in a clinic, and birth records in a hospital. <strong>MediVault™ becomes the lifelong longitudinal health record layer for mother and child.</strong>
            </p>
          </div>

        </div>
      </section>

      {/* ── SECTION 2 TO 6: THE REAL MARKET STACK & TAM ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">SECTION 2 · THE MARKET OPPORTUNITY</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            The 5-Layer Reproductive Health Market Stack
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Rather than a single clinic TAM, Meditrust addresses 5 compounding market layers spanning care, diagnostics, and commerce.
          </p>
        </div>

        {/* 5-Layer Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-3xs font-black uppercase text-purple-700 bg-purple-100 px-2 py-0.5 rounded">LAYER #1</span>
            <h4 className="font-black text-sm text-slate-900">Fertility Services</h4>
            <span className="text-lg font-black text-purple-700 block">~$1.7B ➔ $4.9B</span>
            <p className="text-[11px] text-slate-600 leading-tight">
              India market growing at 12.2% CAGR with massive access gap.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-3xs font-black uppercase text-rose-700 bg-rose-100 px-2 py-0.5 rounded">LAYER #2</span>
            <h4 className="font-black text-sm text-slate-900">IVF Services</h4>
            <span className="text-lg font-black text-rose-700 block">350K vs 1.5M</span>
            <p className="text-[11px] text-slate-600 leading-tight">
              350,000 IVF cycles performed annually against 1.5M potential demand.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-3xs font-black uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">LAYER #3</span>
            <h4 className="font-black text-sm text-slate-900">Maternity Care</h4>
            <span className="text-lg font-black text-emerald-700 block">25M Annual Births</span>
            <p className="text-[11px] text-slate-600 leading-tight">
              Recurring annual cohort entering prenatal, delivery, and postpartum care.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-3xs font-black uppercase text-teal-700 bg-teal-100 px-2 py-0.5 rounded">LAYER #4</span>
            <h4 className="font-black text-sm text-slate-900">Family Commerce</h4>
            <span className="text-lg font-black text-teal-700 block">Sakhi™ Marketplace</span>
            <p className="text-[11px] text-slate-600 leading-tight">
              Maternity pads, fertility kits, supplements, pumps, and newborn essentials.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-2xs space-y-2">
            <span className="text-3xs font-black uppercase text-blue-700 bg-blue-100 px-2 py-0.5 rounded">LAYER #5</span>
            <h4 className="font-black text-sm text-slate-900">Care Navigation</h4>
            <span className="text-lg font-black text-blue-700 block">B2B + SaaS</span>
            <p className="text-[11px] text-slate-600 leading-tight">
              Doctor bookings, hospital discovery, corporate benefits &amp; provider software.
            </p>
          </div>

        </div>

        {/* Global WHO Infertility Context */}
        <div className="p-5 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-3">
            <Globe className="w-8 h-8 text-teal-400 flex-shrink-0" />
            <div>
              <strong className="text-white font-bold block text-sm">Global Scale: 1 in 6 Adults (17.5%) Face Infertility (WHO)</strong>
              <span className="text-slate-300 text-3xs font-normal">
                This is not an India-only problem. Meditrust’s digital orchestration expands from India ➔ GCC ➔ Southeast Asia ➔ Africa ➔ Global.
              </span>
            </div>
          </div>
          <span className="text-3xs font-mono uppercase bg-teal-500/20 text-teal-300 border border-teal-500/30 px-3 py-1.5 rounded-xl whitespace-nowrap">
            Global TAM: $45B+
          </span>
        </div>
      </section>

      {/* ── SECTION 7 & 8: WHO IS THE CUSTOMER? (B2C & B2B SEGMENTS) ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">SECTION 7 · CUSTOMER SEGMENTATION</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            6 High-Intent B2C Segments &amp; 4 B2B Distribution Channels
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Spanning the complete lifetime of family creation and corporate healthcare infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* B2C Segments */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">👩‍❤️‍👨</span>
                <h3 className="font-black text-base text-slate-950">6 B2C Consumer Segments</h3>
              </div>
              <span className="text-3xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded">DIRECT-TO-CONSUMER</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 text-3xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <div>
                  <strong>Family Planners (25–40):</strong> Preconception checkups, folic acid, AMH assessment.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 text-3xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <div>
                  <strong>TTC Couples (Trying to Conceive):</strong> High-intent ovulation tracking &amp; dual diagnostics.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 text-3xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <div>
                  <strong>Fertility Patients:</strong> Couples evaluating IUI, IVF, ICSI, and oocyte freezing.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 text-3xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                <div>
                  <strong>Pregnant Women:</strong> Positive test to 40-week delivery and hospital package booking.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 text-3xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">5</span>
                <div>
                  <strong>New Mothers (0–12 Months Postpartum):</strong> Lactation, lochia healing, PPD screening.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-rose-100 text-rose-700 text-3xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">6</span>
                <div>
                  <strong>Second-Time Parents:</strong> Strategic retention for 2nd pregnancy with 0 CAC.
                </div>
              </li>
            </ul>
          </div>

          {/* B2B Channels */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🏢</span>
                <h3 className="font-black text-base text-slate-950">4 B2B Distribution Channels</h3>
              </div>
              <span className="text-3xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded">ENTERPRISE &amp; PARTNERS</span>
            </div>

            <ul className="space-y-3 text-xs text-slate-700">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-3xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">1</span>
                <div>
                  <strong>Healthcare Providers:</strong> Gynecologists, fertility centers, and hospitals buying Meditrust Provider OS SaaS.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-3xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">2</span>
                <div>
                  <strong>Employers (Corpo Mom™):</strong> Corporate fertility &amp; maternity retention benefits (PEPM model).
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-3xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">3</span>
                <div>
                  <strong>Insurance Companies &amp; TPAs:</strong> Embedding Meditrust as the care navigation layer over group health policies.
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-3xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">4</span>
                <div>
                  <strong>Pharma &amp; Consumer Brands:</strong> High-intent contextual distribution for maternal and fertility essentials.
                </div>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ── SECTION 9: THE 12-STAGE CUSTOMER JOURNEY MATRIX ── */}
      <section id="journey-matrix" className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">SECTION 9 · THE ECONOMIC ENGINE</span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
              One Customer ➔ 12 Monetization Stages
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Click any stage to see how Meditrust orchestrates care, eliminates friction, and captures platform value:
            </p>
          </div>

          {/* 12 Stages Pill Scroller */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2">
            {journeyStages.map((st, idx) => (
              <button
                key={st.num}
                onClick={() => setActiveStageIdx(idx)}
                className={`p-2.5 rounded-2xl text-left border transition-all ${
                  activeStageIdx === idx
                    ? 'bg-rose-600 text-white border-rose-600 shadow-md scale-102 font-bold'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <div className="flex items-center justify-between text-xs">
                  <span>{st.icon}</span>
                  <span className={`text-[9px] uppercase ${activeStageIdx === idx ? 'text-rose-200' : 'text-slate-400'}`}>
                    #{st.num}
                  </span>
                </div>
                <strong className="text-xs block mt-1 truncate">{st.title.replace(/^\d+\.\s*/, '')}</strong>
                <span className={`text-[9px] block truncate ${activeStageIdx === idx ? 'text-rose-100' : 'text-slate-500'}`}>
                  {st.tag}
                </span>
              </button>
            ))}
          </div>

          {/* Active Stage Detailed View */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-rose-50 via-white to-purple-50 border border-rose-200 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-rose-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{journeyStages[activeStageIdx].icon}</span>
                <div>
                  <h3 className="text-lg font-black text-slate-950">
                    {journeyStages[activeStageIdx].title}
                  </h3>
                  <span className="text-3xs font-bold uppercase tracking-wider text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                    {journeyStages[activeStageIdx].tag}
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-500">
                Stage {activeStageIdx + 1} of 12
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-white border border-rose-100 space-y-1">
                <strong className="text-slate-900 font-bold block text-3xs uppercase tracking-wider text-rose-600">
                  1. The Patient Thought / Need
                </strong>
                <p className="text-slate-700 italic leading-relaxed">
                  {journeyStages[activeStageIdx].userNeed}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-teal-100 space-y-1">
                <strong className="text-slate-900 font-bold block text-3xs uppercase tracking-wider text-teal-600">
                  2. Meditrust AI Orchestration Layer
                </strong>
                <p className="text-slate-700 leading-relaxed">
                  {journeyStages[activeStageIdx].platformRole}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-purple-100 space-y-1">
                <strong className="text-slate-900 font-bold block text-3xs uppercase tracking-wider text-purple-600">
                  3. Platform Economics &amp; Monetization
                </strong>
                <p className="text-purple-950 font-medium leading-relaxed">
                  {journeyStages[activeStageIdx].monetization}
                </p>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <button
                onClick={() => setActiveStageIdx((prev) => (prev > 0 ? prev - 1 : journeyStages.length - 1))}
                className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-slate-700 text-xs font-bold hover:bg-slate-50"
              >
                ← Previous Stage
              </button>
              <button
                onClick={() => setActiveStageIdx((prev) => (prev < journeyStages.length - 1 ? prev + 1 : 0))}
                className="px-5 py-2 rounded-xl bg-rose-600 text-white text-xs font-bold hover:bg-rose-700 shadow-xs"
              >
                Next Stage →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 10 TO 21: THE 12 DIVERSIFIED REVENUE MODELS ── */}
      <section id="revenue-models" className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">SECTION 10 · MULTI-PRONGED MONETIZATION</span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-950">
            12 Synergistic Revenue Streams
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Meditrust monetizes across subscriptions, transaction commissions, marketplace margins, and enterprise software:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {revenueModels.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{rev.icon}</span>
                  <span className="text-3xs font-black uppercase text-slate-600 bg-slate-100 px-2 py-0.5 rounded">
                    {rev.tag}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-slate-900">{rev.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {rev.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 space-y-1 text-3xs">
                <div className="text-emerald-800 font-bold">
                  💰 Revenue: {rev.revenueType}
                </div>
                <div className="text-slate-500 font-normal italic">
                  ⚖️ Compliance: {rev.compliance}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 22: REVENUE FLYWHEEL & HOUSEHOLD LTV SIMULATOR ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-2xl space-y-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-wider">SECTION 22 · FLYWHEEL &amp; LTV ENGINE</span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              The Lifetime Reproductive-Health Flywheel
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              The objective isn’t merely maximizing one-off IVF leads. It is <strong>maximizing lifetime reproductive-health value per household</strong>.
            </p>
          </div>

          {/* Visual Flywheel Flow */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
            <span className="text-3xs font-mono uppercase tracking-widest text-teal-400 block text-center">
              MEDITRUST ACCELERATING REVENUE FLYWHEEL
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 text-center text-3xs font-bold">
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">1. Free AI Tools</div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">2. Acquisition</div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">3. AI Navigation</div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">4. Diagnostics</div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">5. Doctor / IVF</div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">6. Pregnancy OS</div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10">7. Sakhi™ Store</div>
              <div className="p-2 rounded-xl bg-rose-600 text-white font-black shadow-md">8. 2nd Baby (0 CAC)</div>
            </div>
          </div>

          {/* Household LTV Interactive Simulator */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
            
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <Sliders className="w-5 h-5 text-rose-400" />
                <span>Simulate Household Lifetime Value (LTV)</span>
              </h3>

              <div className="space-y-3 text-xs">
                <label className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasFertilityAssistance}
                    onChange={(e) => setHasFertilityAssistance(e.target.checked)}
                    className="accent-rose-500 w-4 h-4"
                  />
                  <span>Includes Fertility / IVF Pathway Assistance (+₹22,000 platform value)</span>
                </label>

                <label className="flex items-center gap-3 p-3 rounded-2xl bg-white/5 border border-white/10 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasSecondPregnancy}
                    onChange={(e) => setHasSecondPregnancy(e.target.checked)}
                    className="accent-purple-500 w-4 h-4"
                  />
                  <span>Customer Retained for 2nd Pregnancy (+100% repeat retention with 0 CAC)</span>
                </label>

                <div className="space-y-1">
                  <div className="flex justify-between text-3xs text-slate-300">
                    <span>MOM+ / Fertility+ Subscription Duration:</span>
                    <strong className="text-purple-300">{subscriptionMonths} Months</strong>
                  </div>
                  <input
                    type="range"
                    min="3"
                    max="24"
                    value={subscriptionMonths}
                    onChange={(e) => setSubscriptionMonths(Number(e.target.value))}
                    className="w-full accent-purple-500 cursor-pointer"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-3xs text-slate-300">
                    <span>Annual Maternity &amp; Sakhi™ Store Spend:</span>
                    <strong className="text-emerald-300">₹{commerceSpendPerYear.toLocaleString()} / year</strong>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="30000"
                    step="1000"
                    value={commerceSpendPerYear}
                    onChange={(e) => setCommerceSpendPerYear(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* LTV Output Display Card */}
            <div className="lg:col-span-6 p-6 rounded-3xl bg-gradient-to-br from-rose-950/80 via-purple-950/80 to-slate-900 border border-rose-800/80 shadow-xl space-y-4 text-center">
              <span className="text-3xs font-mono uppercase tracking-widest text-rose-300">
                TOTAL LIFETIME VALUE PER HOUSEHOLD
              </span>
              <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                ₹{householdLtv.ltv.toLocaleString()}
              </div>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Across diagnostics, doctor consults, IVF center triage, recurring subscriptions, hospital bookings, and Sakhi™ e-commerce.
              </p>

              <div className="grid grid-cols-2 gap-2 text-3xs font-semibold text-slate-300 pt-2 border-t border-rose-900/60">
                <span className="bg-white/5 p-2 rounded-xl">Single Child: ₹{householdLtv.singleChildTotal.toLocaleString()}</span>
                <span className="bg-white/5 p-2 rounded-xl text-emerald-400">2nd Baby Retention: +100% LTV</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── THE 4 TRIMESTERS OBSTETRIC CARE OVERVIEW ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">COMPREHENSIVE OBSTETRIC TIMELINE</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950">The 4 Trimesters of MediMom™ Care</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Trimester 1 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🌱</span>
                <span className="text-3xs font-black uppercase bg-rose-50 text-rose-700 px-2.5 py-1 rounded-full border border-rose-100">
                  Weeks 1–12
                </span>
              </div>
              <h3 className="font-black text-base text-slate-950">1st Trimester: Foundation &amp; Viability</h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Embryonic organ formation, Folic Acid 5mg, morning sickness relief, and mandatory NT scan with Dual Marker blood testing.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-3xs text-slate-500 font-semibold space-y-1">
              <div>✓ Beta-hCG &amp; Thyroid TSH check</div>
              <div>✓ NT Scan at 11–13 Weeks</div>
              <div>✓ Jan Aushadhi generic Folic Acid</div>
            </div>
          </div>

          {/* Trimester 2 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">✨</span>
                <span className="text-3xs font-black uppercase bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full border border-purple-100">
                  Weeks 13–27
                </span>
              </div>
              <h3 className="font-black text-base text-slate-950">2nd Trimester: Growth &amp; Anomaly Scan</h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                The golden trimester. Rapid fetal growth, baby quickening kicks, TIFFA Level-2 anomaly scan, and gestational diabetes screening (GTT).
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-3xs text-slate-500 font-semibold space-y-1">
              <div>✓ TIFFA Scan at 18–22 Weeks</div>
              <div>✓ Oral Glucose Tolerance Test (OGTT)</div>
              <div>✓ Iron &amp; Calcium supplementation</div>
            </div>
          </div>

          {/* Trimester 3 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🤰</span>
                <span className="text-3xs font-black uppercase bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full border border-teal-100">
                  Weeks 28–40
                </span>
              </div>
              <h3 className="font-black text-base text-slate-950">3rd Trimester: Labor &amp; Birth Prep</h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Fetal growth color Doppler, birth plan creation (vaginal vs gentle C-section), hospital bag packing, and antenatal perineal massage.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-3xs text-slate-500 font-semibold space-y-1">
              <div>✓ Fetal Doppler &amp; NST Monitoring</div>
              <div>✓ Maternity Hospital Bag Packing</div>
              <div>✓ Painless Epidural Consultation</div>
            </div>
          </div>

          {/* Trimester 4 */}
          <div className="bg-white rounded-3xl p-6 border-2 border-rose-400 shadow-md space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl">🤱</span>
                <span className="text-3xs font-black uppercase bg-rose-600 text-white px-2.5 py-1 rounded-full">
                  0–6 Months Postpartum
                </span>
              </div>
              <h3 className="font-black text-base text-slate-950">4th Trimester: Postpartum &amp; Lactation</h3>
              <p className="text-xs text-slate-600 font-normal leading-relaxed">
                Episiotomy and C-section scar recovery, lochia discharge management, lactation latch coaching, and postpartum depression screening.
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-3xs text-slate-500 font-semibold space-y-1">
              <div>✓ Sakhi Postpartum 360° Panties</div>
              <div>✓ Lactation Consultant Hotline</div>
              <div>✓ Edinburgh Postnatal Depression Scale</div>
            </div>
          </div>

        </div>
      </section>

      {/* ── SAKHI POSTPARTUM CARE BOX & CTA ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl bg-gradient-to-r from-rose-900 via-purple-900 to-slate-900 text-white p-8 sm:p-12 border border-rose-800 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-3xs font-black uppercase tracking-widest text-rose-300 bg-white/10 px-3.5 py-1.5 rounded-full">
              MEDITRUST REPRODUCTIVE OS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Begin Your Guided Family Journey Today
            </h2>
            <p className="text-xs sm:text-sm text-slate-200">
              Connect to accredited fertility specialists, at-home diagnostic blood panels, 40-week pregnancy OS, and 100% toxin-free postpartum recovery kits.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/tools"
              className="px-8 py-4 rounded-full bg-white text-slate-950 font-black text-xs hover:bg-slate-100 transition-transform hover:scale-105 flex items-center gap-2 shadow-xl"
            >
              <span>Explore 10 Clinical Calculators</span>
              <ArrowRight className="w-4 h-4 text-rose-600" />
            </Link>

            <a
              href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20regarding%20my%20fertility/pregnancy%20journey"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-[#25d366] hover:bg-[#20ba59] text-slate-950 font-black text-xs transition-transform hover:scale-105 flex items-center gap-2 shadow-xl"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Consult Dr. Arya AI on WhatsApp (24/7)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}
