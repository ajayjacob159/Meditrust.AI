import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Heart, Sparkles, ShieldCheck, CheckCircle2, ArrowRight,
  ChevronRight, Calendar, Baby, Clock, ShoppingBag, MessageCircle,
  FlaskConical, Stethoscope, Activity, BookOpen, AlertCircle
} from 'lucide-react'

export const metadata: Metadata = {
  title: "MediMom™ — Complete Clinical Pregnancy & Maternal Care (2026)",
  description: "Evidence-based pregnancy, delivery, and postpartum care. Trimester milestone tracking, mandatory NABL scans, 100% toxin-free postpartum recovery kits, and 24/7 Dr. Arya AI guidance.",
  keywords: [
    "MediMom Pregnancy Care",
    "Pregnancy Trimester Guide India",
    "Postpartum Recovery Kit Sakhi",
    "Dr Arya Maternity Doctor",
    "Painless Delivery Guide Pune"
  ]
}

export default function MediMomPage() {
  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Medi&apos;s MOM™</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-rose-600 font-bold">MediMom Maternal Hub</span>
        </nav>
      </div>

      {/* ── HERO BANNER ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-rose-950 to-purple-950 text-white p-6 sm:p-12 border border-slate-800 shadow-2xl space-y-6 overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-3xs font-black uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 text-rose-400" />
            <span>MEDITRUST MEDIMOM™ MATERNAL CARE</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Clinical Maternal Care for Every Step <br />
              <span className="text-gradient-chic">From First Trimester to Fourth Trimester.</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Empowering Indian mothers with evidence-based pregnancy roadmaps, mandatory trimester scans, 60-minute doorstep blood collections, hospital bag checklists, and 100% toxin-free <strong>Meditrust Sakhi™</strong> postpartum healing essentials.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="/womens-health/tools"
              className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-xs transition-transform hover:scale-102 flex items-center gap-2 shadow-md"
            >
              <span>Explore 12 Free Pregnancy Tools</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20am%20pregnant%20and%20need%20maternal%20guidance"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#25d366]" />
              <span>Consult Dr. Arya AI (24/7)</span>
            </a>
          </div>

        </div>
      </section>

      {/* ── THE 4 TRIMESTERS OF CARE ── */}
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
                The golden trimester. Rapid fetal growth, baby kicking movements (quickening), TIFFA Level-2 anomaly scan, and gestational diabetes screening (GTT).
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

      {/* ── SAKHI POSTPARTUM CARE INTEGRATION ── */}
      <section className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl bg-white p-6 sm:p-10 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-wider">POSTPARTUM ESSENTIALS</span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-950">
                Meditrust Sakhi™ Fourth Trimester Care Box
              </h3>
              <p className="text-xs text-slate-600">
                100% toxin-free, dermatologist-tested healing essentials for new mothers.
              </p>
            </div>

            <Link
              href="/marketplace/product/sakhi-postpartum-recovery-kit"
              className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-2 flex-shrink-0 shadow-2xs"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Recovery Box (₹1,499)</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
