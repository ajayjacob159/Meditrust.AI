import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Building2, Sparkles, ShieldCheck, CheckCircle2, ArrowRight,
  ChevronRight, Heart, Users, Briefcase, MessageCircle, FileText
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Corpo Mom™ — Corporate Maternity & Working Mother Wellness (2026)",
  description: "Enterprise maternity benefits, 26-week compliance, lactation room policies, phased return-to-work programs, and 24/7 OB/GYN triage for forward-thinking employers.",
  keywords: [
    "Corpo Mom India",
    "Corporate Maternity Benefits",
    "Maternity Benefit Act Compliance",
    "Working Mom Healthcare Benefits",
    "Lactation Room Corporate India"
  ]
}

export default function CorpoMomPage() {
  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Medi&apos;s MOM™</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-purple-600 font-bold">Corpo Mom Enterprise</span>
        </nav>
      </div>

      {/* ── HERO BANNER ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-purple-950 to-slate-950 text-white p-6 sm:p-12 border border-slate-800 shadow-2xl space-y-6 overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/20 border border-purple-500/30 text-purple-300 text-3xs font-black uppercase tracking-wider">
            <Building2 className="w-3.5 h-3.5 text-purple-400" />
            <span>ENTERPRISE WOMEN&apos;S HEALTH &amp; MATERNITY</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Retain Top Female Talent with <br />
              <span className="text-gradient-chic">Clinical Corporate Maternity Benefits.</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Transform your organization into a certified Great Place to Work for Women. Comprehensive 26-week maternity compliance, phased return-to-work coaching, dedicated lactation counseling, and 24/7 AI obstetric triage for working mothers.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="https://wa.me/917028025717?text=Hi%20Meditrust,%20I%20am%20an%20HR%20Lead%20interested%20in%20Corpo%20Mom%20enterprise%20benefits"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-black text-xs transition-transform hover:scale-102 flex items-center gap-2 shadow-md"
            >
              <Building2 className="w-4 h-4" />
              <span>Book Enterprise Demo &amp; Pilot</span>
            </a>

            <Link
              href="/corporate-wellness"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors"
            >
              View Full Corporate Plans →
            </Link>
          </div>

        </div>
      </section>

      {/* ── 4 PILLARS OF CORPO MOM ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <div className="space-y-1">
          <span className="text-xs font-bold text-purple-600 uppercase tracking-wider">ENTERPRISE BENEFIT FRAMEWORK</span>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950">4 Pillars of Corpo Mom™</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center text-xl">
              🤰
            </div>
            <h3 className="font-bold text-sm text-slate-950">1. Antenatal High-Risk Triage</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              24/7 confidential access to Dr. Arya AI Doctor for pregnancy symptoms, scan interpretations, and emergency red-flag escalations.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center text-xl">
              🏢
            </div>
            <h3 className="font-bold text-sm text-slate-950">2. Phased Return-to-Work</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Structured 4-week ramp-up schedules preventing female attrition and maternal postpartum burnout during corporate transitions.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center text-xl">
              🫧
            </div>
            <h3 className="font-bold text-sm text-slate-950">3. Lactation Room Policy</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Workplace mother room setup audits, sterile cold-chain breastmilk storage protocols, and certified lactation consultant webinars.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center text-xl">
              💳
            </div>
            <h3 className="font-bold text-sm text-slate-950">4. ₹2,500 Health Wallet</h3>
            <p className="text-xs text-slate-600 font-normal leading-relaxed">
              Employer-sponsored digital health wallet redeemable for Meditrust Sakhi™ postpartum kits, NABL blood tests, and doctor OPDs.
            </p>
          </div>

        </div>
      </section>

    </div>
  )
}
