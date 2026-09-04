import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Sparkles, Heart, ShieldCheck, Target, ArrowRight,
  ChevronRight, TrendingDown, Users, Globe, Award, CheckCircle2,
  Stethoscope, Building2, Eye, Compass
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Our Vision & Mission (2026–2030) — Meditrust AI",
  description: "Our mission: to make healthcare accessible, understandable, and affordable for 100 million Indian families through clinical AI, 80% generic savings, and women's reproductive dignity.",
  keywords: [
    "Meditrust Vision 2030",
    "Digital Health Mission India",
    "Affordable Healthcare Vision",
    "Womens Health Tech Vision India",
    "ABDM AI Healthcare Mission"
  ]
}

export default function VisionPage() {
  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Our Vision &amp; Mission</span>
        </nav>
      </div>

      {/* ── HERO MANIFESTO ── */}
      <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-rose-950 text-white p-8 sm:p-14 border border-slate-800 shadow-2xl space-y-6 overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-3xs font-black uppercase tracking-wider">
            <Compass className="w-3.5 h-3.5 text-rose-400" />
            <span>THE MEDITRUST 2030 HEALTHCARE MANIFESTO</span>
          </div>

          <div className="max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Healthcare that Listens, Protects, <br />
              <span className="text-gradient-chic">and Empowers Every Life.</span>
            </h1>

            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed">
              We envision an India where world-class medical intelligence is never limited by pincode, language, or income. Where health anxiety is replaced by clinical clarity, lifesaving medicines cost 80% less, and women’s health is nurtured with dignity and scientific truth.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-0.5">
              <span className="text-rose-400 text-lg sm:text-xl font-black block">₹500+ Cr</span>
              <span className="text-slate-300 text-3xs font-normal">Target Patient Savings by 2030</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-0.5">
              <span className="text-emerald-400 text-lg sm:text-xl font-black block">10 Million</span>
              <span className="text-slate-300 text-3xs font-normal">Women Empowered with Preventative Care</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-0.5">
              <span className="text-teal-400 text-lg sm:text-xl font-black block">500+ Towns</span>
              <span className="text-slate-300 text-3xs font-normal">Tier 2/3 Doorstep Diagnostic Reach</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── 3 PILLARS OF OUR PURPOSE ── */}
      <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-3xs font-bold uppercase tracking-wider text-rose-600">
            OUR GUIDING PRINCIPLES
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
            Three Commitments We Stand For
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Pillar 1 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-2xl font-black">
              1
            </div>
            <h3 className="font-black text-lg text-slate-950">Universal Clinical Accessibility</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Quality healthcare shouldn’t require a 3-hour commute to a metro hospital. With Dr. Arya AI, we deliver instant 24/7 triage in Marathi, Hindi, and English, giving every citizen immediate medical clarity before panic sets in.
            </p>
            <div className="pt-2 text-3xs text-slate-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-rose-600" />
              <span>Available 24/7 on WhatsApp &amp; Web</span>
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-black">
              2
            </div>
            <h3 className="font-black text-lg text-slate-950">Radical Economic Affordability</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              Medical expenses are the #1 cause of middle-class debt in India. We combat exorbitant markups by routing prescriptions to government-certified PMBJP Jan Aushadhi generic equivalents, cutting medicine costs by up to 80%.
            </p>
            <div className="pt-2 text-3xs text-slate-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Bioequivalent active pharmaceutical ingredients</span>
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl font-black">
              3
            </div>
            <h3 className="font-black text-lg text-slate-950">Women&apos;s Health Without Stigma</h3>
            <p className="text-xs text-slate-600 leading-relaxed font-normal">
              From menarche to pregnancy and menopause, women’s reproductive health has been overlooked for decades. We provide 100% toxin-free organic period care (Sakhi™), clinical maternal roadmaps (MediMom), and free health calculators.
            </p>
            <div className="pt-2 text-3xs text-slate-400 font-semibold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" />
              <span>Dermatologist tested &amp; certified safe</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2026–2030 STRATEGIC ROADMAP ── */}
      <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="rounded-3xl bg-white p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8">
          
          <div className="border-b border-slate-100 pb-4">
            <span className="text-3xs font-bold text-rose-600 uppercase tracking-wider">OUR 5-YEAR IMPACT ROADMAP</span>
            <h3 className="text-2xl font-black text-slate-950">Building the Future of Indian Healthcare</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <strong className="text-rose-600 font-black text-sm block">2026: The Foundation</strong>
              <p className="text-slate-600 leading-relaxed font-normal">
                Deploy 12 Free Clinical Tools, Meditrust Sakhi™ period care, 1,000+ fertility Q&amp;A engine, and 60-min Pune phlebotomy.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <strong className="text-purple-600 font-black text-sm block">2027: Pan-India Expansion</strong>
              <p className="text-slate-600 leading-relaxed font-normal">
                Expand doorstep NABL lab collections to 25+ Indian metro and tier-2 hubs. Launch 0% interest IVF medical financing.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <strong className="text-teal-600 font-black text-sm block">2028: Enterprise Corpo Mom</strong>
              <p className="text-slate-600 leading-relaxed font-normal">
                Partner with 500+ Indian corporations to integrate maternal health wallets, pump room certifications, and return-to-work care.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <strong className="text-emerald-600 font-black text-sm block">2030: Universal Reach</strong>
              <p className="text-slate-600 leading-relaxed font-normal">
                Reach 100 million citizens with paperless ABDM digital health records, Jan Aushadhi generic delivery, and AI preventive health.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ── CALL TO ACTION ── */}
      <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h3 className="text-2xl font-black text-white">
              Join Us in Transforming Indian Healthcare.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Experience the future of healthcare today. Consult Dr. Arya AI or explore our free clinical tools suite.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <Link
              href="/symptom-checker"
              className="px-6 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md transition-colors"
            >
              Consult Dr. Arya AI →
            </Link>
            <Link
              href="/womens-health/tools"
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors"
            >
              12 Free Tools →
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
