'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Shield, Heart, Activity, FlaskConical, Lock, Phone, Mail,
  MapPin, ExternalLink, Award, CheckCircle2, Building2, Sparkles,
  Zap, Stethoscope, FileText, LayoutDashboard, MessageCircle,
  ArrowRight, Check, Send, ShoppingBag, User
} from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return
    setSubmitting(true)

    try {
      await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          type: 'newsletter_subscription',
          details: { source: 'footer_subscription_bar' },
        }),
      })
      setSubscribed(true)
    } catch (err) {
      setSubscribed(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 relative overflow-hidden select-none" role="contentinfo">
      
      {/* ── 1. Real-Time Animated HealthTech Telemetry & ECG Banner ── */}
      <div className="relative h-14 bg-gradient-to-r from-slate-950 via-teal-950/60 to-slate-950 border-b border-teal-900/40 overflow-hidden flex items-center justify-between px-4 sm:px-8">
        
        {/* ECG Motion Pulse Line */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none" fill="none">
            <path
              d="M0,30 L200,30 L210,18 L220,42 L230,5 L245,55 L260,25 L275,35 L290,30 L600,30 L610,18 L620,42 L630,5 L645,55 L660,25 L675,35 L690,30 L1000,30 L1010,18 L1020,42 L1030,5 L1045,55 L1060,25 L1075,35 L1090,30 L1200,30"
              stroke="#14B8A6"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ecg-line"
            />
          </svg>
        </div>

        {/* Live Network Status */}
        <div className="relative z-10 flex items-center gap-2.5 text-xs font-bold text-teal-300">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-teal-500" />
          </span>
          <span className="tracking-wider uppercase font-mono text-2xs sm:text-xs">
            MEDITRUST AI CLINICAL NETWORK · 24×7 ACTIVE
          </span>
        </div>

        {/* Real-time Stats Ticker */}
        <div className="relative z-10 hidden md:flex items-center gap-6 text-2xs text-slate-300 font-medium">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <strong>₹4.28+ Cr</strong> Patient Savings
          </span>
          <span className="text-slate-700">|</span>
          <span className="flex items-center gap-1.5 text-teal-300">
            <MapPin className="w-3.5 h-3.5 text-teal-400" />
            Nigdi, PCMC &amp; Pune 60-Min Phlebotomy
          </span>
          <span className="text-slate-700">|</span>
          <span className="text-amber-300 font-bold flex items-center gap-1">
            <Phone className="w-3 h-3 animate-pulse" />
            +91 7028025717
          </span>
        </div>
      </div>

      {/* ── 2. Top Trust Metrics Bar ── */}
      <div className="border-b border-slate-800/80 bg-slate-900/30 py-6">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-3 p-2 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-black text-sm">
                80%
              </div>
              <div>
                <strong className="text-white block font-bold">Jan Aushadhi Generics</strong>
                <span className="text-slate-400 text-3xs">PMBJP bioequivalent match</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 font-black text-sm">
                100%
              </div>
              <div>
                <strong className="text-white block font-bold">Sakhi™ Rash-Free Pads</strong>
                <span className="text-slate-400 text-3xs">Toxin-free, chlorine-free</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-black text-sm">
                60m
              </div>
              <div>
                <strong className="text-white block font-bold">Home Blood Collection</strong>
                <span className="text-slate-400 text-3xs">NABL labs cold-chain Pune</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-black text-sm">
                24/7
              </div>
              <div>
                <strong className="text-white block font-bold">Dr. Arya AI Council</strong>
                <span className="text-slate-400 text-3xs">मराठी, हिंदी &amp; English</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. NEWSLETTER & CLINICAL HEALTH UPDATES BAR ── */}
      <div className="border-b border-slate-800/80 bg-gradient-to-r from-slate-900/80 via-slate-900 to-slate-900/80 py-8">
        <div className="container-main">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            <div className="space-y-1.5 text-center lg:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-3xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3 text-rose-400" />
                <span>EVIDENCE-BASED HEALTHCARE DISPATCH</span>
              </div>
              <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                Subscribe for Dr. Arya&apos;s Weekly Women&apos;s Health Pearls
              </h3>
              <p className="text-xs text-slate-400 max-w-xl font-normal">
                Receive evidence-based PCOS nutrition hacks, Jan Aushadhi generic price drop alerts, period care tips, and PM-JAY policy updates straight to your inbox.
              </p>
            </div>

            {/* Subscribe Form */}
            <div className="w-full lg:w-auto">
              {subscribed ? (
                <div className="flex items-center gap-2 p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Welcome to the Meditrust Sakhi family! Check your inbox soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 w-full sm:w-[420px]">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 rounded-full bg-slate-950 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-rose-500 focus:ring-1 focus:ring-rose-500"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-md flex-shrink-0"
                  >
                    <span>{submitting ? 'Joining...' : 'Subscribe'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* ── 4. MAIN FOOTER NAV & LEGAL LINKS ── */}
      <div className="container-main py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
          {/* Col 1 & 2: Brand Story & Certifications */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center p-1">
                <img src="/logo.png" alt="Meditrust" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-lg text-white">
                Medi<span className="text-teal-400">trust</span> AI
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              India&apos;s first clinical-grade AI Doctor council and white-labeled women&apos;s healthcare platform. Saving families up to 80% on medications via PMBJP Jan Aushadhi generics, providing 60-minute NABL blood sample collection, and delivering 100% toxin-free Meditrust Sakhi™ period care.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'CDSCO Telemedicine Compliant',
                'ABDM Health Locker Verified',
                'HIPAA 256-Bit Encrypted',
                'NABL & CAP Accredited Labs',
                'ISO 15189 Certified',
              ].map((badge) => (
                <span
                  key={badge}
                  className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-teal-400 text-3xs font-bold flex items-center gap-1"
                >
                  <CheckCircle2 className="w-3 h-3 text-teal-400" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Col 3: Real-Time AI & Clinical Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" /> Women&apos;s Health &amp; Tools
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/womens-health/tools" className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <span>🧰</span>
                    <span>12 Free Clinical Tools</span>
                  </span>
                  <span className="text-3xs bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-black">FREE</span>
                </Link>
              </li>
              <li>
                <Link href="/womens-health/academy" className="text-purple-400 hover:text-purple-300 font-bold transition-colors flex items-center gap-1.5">
                  <span>🎓</span>
                  <span>Women&apos;s Health Academy</span>
                </Link>
              </li>
              <li>
                <Link href="/medimom" className="text-rose-400 hover:text-rose-300 font-bold transition-colors flex items-center gap-1.5">
                  <span>🤱</span>
                  <span>MediMom™ Maternal Care</span>
                </Link>
              </li>
              <li>
                <Link href="/fertility-qa" className="text-teal-400 hover:text-teal-300 font-bold transition-colors flex items-center gap-1.5">
                  <span>🧬</span>
                  <span>1,000+ Fertility Q&amp;A Engine</span>
                </Link>
              </li>
              <li>
                <Link href="/womens-health" className="text-slate-300 hover:text-rose-400 font-semibold transition-colors flex items-center gap-1.5">
                  <span>🌸</span>
                  <span>Women&apos;s Health Master Hub</span>
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-rose-400 hover:text-rose-300 font-bold transition-colors flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-rose-500" />
                  <span>Sakhi™ Period Store</span>
                </Link>
              </li>
              <li>
                <Link href="/womens-health/blood-tests" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <span className="text-xs">🩸</span>
                  <span>35+ Women&apos;s Blood Tests</span>
                </Link>
              </li>
              <li>
                <Link href="/symptom-checker" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <Stethoscope className="w-3.5 h-3.5 text-teal-500" />
                  <span>Dr. Arya AI Doctor (24/7)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Portals & Account */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Member &amp; HR Portals
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/login" className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" />
                  <span>Member Sign In (Mobile OTP)</span>
                </Link>
              </li>
              <li>
                <Link href="/signup" className="text-rose-400 hover:text-rose-300 font-bold transition-colors flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Create Account / Register</span>
                </Link>
              </li>
              <li>
                <Link href="/account" className="text-slate-400 hover:text-teal-400 transition-colors">
                  👤 My Orders &amp; Health Wallet
                </Link>
              </li>
              <li>
                <Link href="/corporate-wellness" className="text-purple-400 hover:text-purple-300 font-bold transition-colors flex items-center gap-1">
                  <span>🏢 Corporate Employee SSO</span>
                </Link>
              </li>
              <li>
                <Link href="/for-doctors" className="text-blue-400 hover:text-blue-300 font-bold transition-colors flex items-center gap-1">
                  <span>🩺 For Doctors &amp; Clinics</span>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-teal-400 transition-colors">
                  💎 Sakhi Membership Plans
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company, Schemes & Legal */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Schemes &amp; Legal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/womens-schemes-funds" className="text-rose-400 hover:text-rose-300 transition-colors font-bold flex items-center gap-1">
                  <span>🏛️ Women&apos;s Govt &amp; CSR Schemes</span>
                  <span className="text-3xs bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded">35+</span>
                </Link>
              </li>
              <li>
                <Link href="/reports/womens-health-india-2026" className="text-rose-300 hover:text-rose-200 font-bold transition-colors flex items-center gap-1">
                  <span>📊 2026–30 National Report</span>
                  <span className="text-3xs bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded">NEW</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-teal-400 transition-colors font-semibold">
                  ℹ️ About Meditrust
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-teal-400 transition-colors">
                  🔒 Privacy Policy &amp; ABDM
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-teal-400 transition-colors">
                  📜 Terms of Telemedicine
                </Link>
              </li>
              <li>
                <Link href="/hipaa" className="text-slate-400 hover:text-teal-400 transition-colors">
                  🛡️ HIPAA Compliance
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-12 pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Meditrust Life Sciences Private Limited. All rights reserved. Dr. Arya™ and Meditrust Sakhi™ are registered trademarks.
          </div>
          <div className="flex items-center gap-4 text-3xs">
            <span>Made with ❤️ for Indian Healthcare</span>
            <span>•</span>
            <span>Emergency: Dial 108 / 181</span>
          </div>
        </div>

      </div>

    </footer>
  )
}
