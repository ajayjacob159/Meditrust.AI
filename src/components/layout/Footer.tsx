import Link from 'next/link'
import {
  Shield, Heart, Activity, FlaskConical, Lock, Phone, Mail,
  MapPin, ExternalLink, Award, CheckCircle2, Building2, Sparkles,
  Zap, Stethoscope, FileText, LayoutDashboard, MessageCircle
} from 'lucide-react'

export default function Footer() {
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
            Nigdi, PCMC & Pune 60-Min Phlebotomy
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
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-black text-sm">
                60m
              </div>
              <div>
                <strong className="text-white block font-bold">Doorstep Blood Pickup</strong>
                <span className="text-slate-400 text-3xs">13+ NABL/CAP Pune labs</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-black text-sm">
                24/7
              </div>
              <div>
                <strong className="text-white block font-bold">Dr. Arya AI Doctor</strong>
                <span className="text-slate-400 text-3xs">मराठी, हिन्दी & English triage</span>
              </div>
            </div>

            <div className="flex items-center gap-3 p-2 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black text-sm">
                ₹5L
              </div>
              <div>
                <strong className="text-white block font-bold">Govt Schemes Desk</strong>
                <span className="text-slate-400 text-3xs">ABHA & PM-JAY hospital cover</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 3. Main Footer Columns ── */}
      <div className="container-main py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Corporate Registration Details */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center p-1.5">
                <img src="/logo.png" alt="Meditrust Life Sciences" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-2xl font-black tracking-tight font-display">
                  <span className="text-white">Medi</span>
                  <span className="text-teal-400">trust</span>
                  <span className="text-emerald-400"> AI</span>
                </span>
                <span className="block text-3xs text-teal-300 font-bold uppercase tracking-wider">
                  A Unit of Meditrust Life Sciences Pvt. Ltd.
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              <strong>Meditrust Life Sciences Pvt. Ltd.</strong> is India’s premier health-tech &amp; clinical AI enterprise. Our vision is to use artificial intelligence to make healthcare more accessible and affordable for every family in India.
            </p>

            {/* Vision Banner Badge */}
            <div className="p-3 rounded-xl bg-teal-950/60 border border-teal-500/30 text-xs text-teal-200 flex items-start gap-2">
              <Sparkles className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
              <p className="text-2xs leading-relaxed font-medium">
                <strong>Our Vision:</strong> To use Artificial Intelligence to make healthcare radically accessible, instantly understandable, and genuinely affordable for every family across India.
              </p>
            </div>

            {/* Official Registered Corporate Address Box */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 font-bold text-white">
                <Building2 className="w-4 h-4 text-teal-400" />
                <span>Corporate Registration & Office:</span>
              </div>
              <p className="text-2xs text-slate-300 font-medium leading-relaxed">
                <strong className="text-white">Registered Office:</strong> Walhekar Heights, Morya Colony, Walhekarwadi, Bhondvewasti, Nigdi, Pimpri-Chinchwad, Pune, Maharashtra 411033, India.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-2xs text-teal-300 font-mono pt-1 border-t border-slate-800">
                <span><strong>CIN:</strong> U86905PN2026PTC258730</span>
                <span><strong>Hotline:</strong> +91 7028025717</span>
                <span><strong>Email:</strong> care@meditrustlife.com</span>
              </div>
            </div>

            {/* Compliance Badges */}
            <div className="flex flex-wrap gap-1.5 pt-1">
              {[
                'CDSCO Telemedicine Compliant',
                'ICMR Clinical Protocols',
                'ABDM Ayushman Bharat',
                'HIPAA Security Rule',
                'NABL & CAP Partner Labs',
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

          {/* Col 3: Real-Time AI Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-teal-400" /> Real-Time AI Tools
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/bot" className="text-emerald-300 hover:text-emerald-200 font-bold transition-colors flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                    <span>Sakhi Bot (WA &amp; Telegram)</span>
                  </span>
                  <span className="text-3xs bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded font-black">24/7 LIVE</span>
                </Link>
              </li>
              <li>
                <Link href="/symptom-checker" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <Stethoscope className="w-3.5 h-3.5 text-teal-500" />
                  <span>Dr. Arya AI Doctor (24/7)</span>
                </Link>
              </li>
              <li>
                <Link href="/womens-health" className="text-rose-400 hover:text-rose-300 font-bold transition-colors flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-500" />
                  <span>Women&apos;s Health Care Journey 🌸</span>
                </Link>
              </li>
              <li>
                <Link href="/medivault" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <LayoutDashboard className="w-3.5 h-3.5 text-blue-500" />
                  <span>MediVault™ Health Locker</span>
                </Link>
              </li>
              <li>
                <Link href="/health-score" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Health Score &amp; Streaks</span>
                </Link>
              </li>
              <li>
                <Link href="/reminders" className="text-amber-300 hover:text-amber-200 font-semibold transition-colors flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Smart WhatsApp Reminders</span>
                  </span>
                  <span className="text-3xs bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded font-bold">Daily</span>
                </Link>
              </li>
              <li>
                <Link href="/medication-comparison" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <Heart className="w-3.5 h-3.5 text-rose-500" />
                  <span>Generic Medicine Match (80%)</span>
                </Link>
              </li>
              <li>
                <Link href="/find-healthcare" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <FlaskConical className="w-3.5 h-3.5 text-purple-500" />
                  <span>Find Healthcare Nearby</span>
                </Link>
              </li>
              <li>
                <Link href="/models-overview" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-teal-400" />
                  <span>Models &amp; Benchmarks</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: 15+ Clinical Specialties */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              15+ Specialties
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/symptom-checker?specialty=cardiology" className="hover:text-teal-400 transition-colors">
                  ❤️ Cardiology (Lipids & BP)
                </Link>
              </li>
              <li>
                <Link href="/womens-health" className="text-rose-400 hover:text-rose-300 font-bold transition-colors">
                  🌺 Women&apos;s Health Portal
                </Link>
              </li>
              <li>
                <Link href="/womens-health/blood-tests" className="text-rose-300 hover:text-rose-200 font-bold transition-colors">
                  🩸 Women&apos;s Blood Tests Directory
                </Link>
              </li>
              <li>
                <Link href="/symptom-checker?specialty=orthopedics" className="hover:text-teal-400 transition-colors">
                  🦴 Orthopaedics (Knee & Spine)
                </Link>
              </li>
              <li>
                <Link href="/symptom-checker?specialty=gastroenterology" className="hover:text-teal-400 transition-colors">
                  🍎 Gastroenterology (Acidity & Gut)
                </Link>
              </li>
              <li>
                <Link href="/symptom-checker?specialty=endocrinology" className="hover:text-teal-400 transition-colors">
                  🩺 Diabetology & Thyroid
                </Link>
              </li>
              <li>
                <Link href="/#specialties" className="text-teal-400 font-bold hover:underline">
                  View All 15+ Specialties →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Company & Government Schemes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Company & Schemes
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/womens-schemes-funds" className="text-pink-300 hover:text-pink-200 font-bold transition-colors flex items-center justify-between">
                  <span>🌸 Women&apos;s Govt &amp; CSR Schemes Hub</span>
                  <span className="text-3xs bg-pink-500/20 text-pink-300 px-1.5 py-0.5 rounded font-black">35+ Schemes</span>
                </Link>
              </li>
              <li>
                <Link href="/government-schemes" className="text-amber-400 hover:text-amber-300 transition-colors font-bold flex items-center gap-1">
                  <span>🏛️ General Govt Schemes (PM-JAY)</span>
                  <span className="text-3xs bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded">ABDM</span>
                </Link>
              </li>
              <li>
                <Link href="/for-doctors" className="text-blue-400 hover:text-blue-300 font-bold transition-colors flex items-center gap-1">
                  <span>🩺 For Doctors (Onboard Clinic)</span>
                  <span className="text-3xs bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">Join</span>
                </Link>
              </li>
              <li>
                <Link href="/corporate-wellness" className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors flex items-center gap-1">
                  <span>🏢 Corporate Employer Wellness</span>
                  <span className="text-3xs bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">HR</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-teal-400 transition-colors font-semibold">
                  ℹ️ About Meditrust Life Sciences
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-400 hover:text-teal-400 transition-colors">
                  💰 Pricing & Plans (20% OFF)
                </Link>
              </li>
              <li>
                <Link href="/reports/womens-health-india-2026" className="text-rose-300 hover:text-rose-200 font-bold transition-colors flex items-center gap-1">
                  <span>📊 Women&apos;s Health in India (2026–30 Report)</span>
                  <span className="text-3xs bg-rose-500/20 text-rose-300 px-1.5 py-0.5 rounded font-black">NEW</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-400 hover:text-teal-400 transition-colors">
                  📚 Evidence-Based Health Library
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-teal-400 transition-colors">
                  📞 Contact (+91 7028025717)
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="text-slate-400 hover:text-teal-400 transition-colors">
                  ⚖️ Medical Disclaimer
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-teal-400 transition-colors">
                  🔐 Privacy Policy (HIPAA / ABDM)
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── 4. GIANT TRENDING "MEDITRUST AI" DISPLAY WATERMARK ── */}
      <div className="border-t border-slate-900 bg-slate-950/80 pt-8 pb-4 overflow-hidden relative">
        <div className="absolute inset-0 bg-radial from-teal-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container-main text-center relative z-10">
          <div className="text-[14vw] sm:text-[13vw] lg:text-[11.5vw] font-black tracking-tighter leading-none select-none uppercase font-display bg-gradient-to-b from-slate-700/60 via-slate-800/40 to-transparent bg-clip-text text-transparent opacity-80 hover:opacity-100 transition-opacity">
            MEDITRUST AI
          </div>
          <div className="text-3xs sm:text-2xs uppercase tracking-widest text-teal-400/80 font-bold -mt-2 sm:-mt-4">
            India's Leading 24/7 AI Healthcare Companion & Medicine Savings Engine
          </div>
        </div>
      </div>

      {/* ── 5. Bottom Legal Disclaimer & Copyright ── */}
      <div className="border-t border-slate-900 bg-black py-6">
        <div className="container-main space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 text-xs leading-relaxed">
            <strong className="text-slate-200">⚕️ Clinical & Emergency Notice:</strong> Meditrust Life Sciences Pvt. Ltd. provides evidence-based health triage and price comparison tools. In acute medical emergencies (severe chest pain, breathing difficulty, acute trauma), immediately call <strong>108 (National Ambulance)</strong> or <strong>112 (National Emergency)</strong> or proceed to the nearest emergency room at Ruby Hall Clinic or Sahyadri Hospital. All drug comparisons reflect CDSCO registered formulations and PMBJP published schedules.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © 2026 <strong>Meditrust Life Sciences Pvt. Ltd.</strong> (CIN: <strong>U86905PN2026PTC258730</strong>). All rights reserved. Registered at Walhekar Heights, Nigdi, Pimpri-Chinchwad, Pune, Maharashtra 411033, India.
            </div>
            <div className="flex items-center gap-4 text-2xs">
              <Link href="/government-schemes" className="hover:text-amber-400">Govt Schemes</Link>
              <Link href="/privacy" className="hover:text-teal-400">Privacy</Link>
              <Link href="/terms" className="hover:text-teal-400">Terms</Link>
              <Link href="/hipaa" className="hover:text-teal-400">HIPAA Notice</Link>
              <Link href="/disclaimer" className="hover:text-teal-400">Disclaimer</Link>
              <Link href="/sitemap.xml" className="hover:text-teal-400">Sitemap XML</Link>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
