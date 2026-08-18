import Link from 'next/link'
import {
  Shield, Heart, Activity, FlaskConical, Lock, Phone, Mail,
  MapPin, ExternalLink, Award, CheckCircle2, Building2, Sparkles
} from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white border-t border-slate-800 relative overflow-hidden" role="contentinfo">
      
      {/* ── Real-Time Animated ECG Heartbeat Rhythm Banner ── */}
      <div className="relative h-12 bg-slate-900 border-b border-slate-800 overflow-hidden flex items-center justify-between px-4 sm:px-8">
        
        {/* ECG Motion Line */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none" fill="none">
            <path
              d="M0,30 L200,30 L210,20 L220,40 L230,5 L245,55 L260,25 L275,35 L290,30 L600,30 L610,20 L620,40 L630,5 L645,55 L660,25 L675,35 L690,30 L1000,30 L1010,20 L1020,40 L1030,5 L1045,55 L1060,25 L1075,35 L1090,30 L1200,30"
              stroke="#14B8A6"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Live Clinical Status Indicator */}
        <div className="relative z-10 flex items-center gap-2 text-2xs font-bold text-teal-300">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-400 animate-heartbeat flex-shrink-0" />
          <span>MEDITRUST LIFE SCIENCES CLINICAL NETWORK · ACTIVE 24/7</span>
        </div>

        <div className="relative z-10 hidden sm:flex items-center gap-4 text-2xs text-slate-400">
          <span className="flex items-center gap-1 text-slate-300">
            <MapPin className="w-3 h-3 text-teal-400" />
            Pune Hubs (Kothrud, Baner, Hinjewadi, Viman Nagar)
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-amber-300 font-semibold">
            ⚡ 60-Min Sample Dispatch
          </span>
        </div>
      </div>

      {/* ── Top Trust Metrics Bar ── */}
      <div className="border-b border-slate-800/80 bg-slate-900/40 py-6">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-black">
                80%
              </div>
              <div>
                <strong className="text-white block font-bold">Jan Aushadhi Generic Savings</strong>
                <span className="text-slate-400 text-2xs">PMBJP & CDSCO certified bioequivalence</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-black">
                60m
              </div>
              <div>
                <strong className="text-white block font-bold">Pune Doorstep Blood Pickup</strong>
                <span className="text-slate-400 text-2xs">13+ NABL & CAP certified labs</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 font-black">
                24/7
              </div>
              <div>
                <strong className="text-white block font-bold">Dr. Arya AI Doctor</strong>
                <span className="text-slate-400 text-2xs">मराठी, हिन्दी & English clinical triage</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-black">
                ₹5L
              </div>
              <div>
                <strong className="text-white block font-bold">Govt Health Schemes Desk</strong>
                <span className="text-slate-400 text-2xs">ABHA, PM-JAY & MJPJAY cashless guidance</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Footer Columns ── */}
      <div className="container-main py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1 & 2: Corporate Entity: Meditrust Life Sciences Pvt. Ltd. */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="relative w-9 h-9">
                <img src="/logo.png" alt="Meditrust Life Sciences" className="w-9 h-9 object-contain" />
              </div>
              <div>
                <span className="text-xl font-black tracking-tight">
                  <span className="text-blue-400">Medi</span>
                  <span style={{ color: '#14B8A6' }}>trust</span>
                  <span className="text-blue-400"> AI</span>
                </span>
                <span className="block text-3xs text-teal-300 font-bold uppercase tracking-wider">
                  A Unit of Meditrust Life Sciences Pvt. Ltd.
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed">
              <strong>Meditrust Life Sciences Pvt. Ltd.</strong> is India’s pioneering healthcare technology & clinical diagnostics enterprise. Headquartered in Pune, Maharashtra, we empower patients with <strong>Dr. Arya (24/7 Multilingual AI Doctor)</strong>, real-time medicine price comparison across <strong>Tata 1mg, PharmEasy & Apollo</strong> with <strong>Jan Aushadhi generics (saving up to 80%)</strong>, and 60-minute at-home blood collection across <strong>13+ NABL-accredited diagnostic labs</strong>.
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
              <div className="flex items-center gap-1.5 font-bold text-white">
                <Building2 className="w-4 h-4 text-teal-400" />
                <span>Corporate Registration & Office:</span>
              </div>
              <p className="text-2xs text-slate-400 font-mono">
                <strong>CIN:</strong> U85110PN2026PTC214589 · <strong>Reg. Office:</strong> Meditrust Life Sciences Towers, Senapati Bapat Road / Kothrud IT Corridor, Pune, Maharashtra 411038, India.
              </p>
              <div className="text-2xs text-teal-300 flex items-center gap-2 pt-1">
                <span>📞 Hotline: +91 7028025717</span>
                <span>•</span>
                <span>✉️ care@meditrustlife.com</span>
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
                <Link href="/symptom-checker" className="text-slate-400 hover:text-teal-400 transition-colors">
                  🤖 Dr. Arya AI Doctor (24/7)
                </Link>
              </li>
              <li>
                <Link href="/medication-comparison" className="text-slate-400 hover:text-teal-400 transition-colors">
                  💊 Generic Medicine Match (80%)
                </Link>
              </li>
              <li>
                <Link href="/lab-test-comparison" className="text-slate-400 hover:text-teal-400 transition-colors">
                  🩸 13+ Blood Test Labs in Pune
                </Link>
              </li>
              <li>
                <Link href="/dashboard" className="text-slate-400 hover:text-teal-400 transition-colors">
                  📊 Report Scanner & 100-Pt Score
                </Link>
              </li>
              <li>
                <Link href="/government-schemes" className="text-amber-400 hover:text-amber-300 font-bold transition-colors">
                  🏛️ Govt Healthcare Schemes (ABHA / PM-JAY)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Clinical Specialties */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Clinical Specialties
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link href="/symptom-checker?specialty=gynaecology" className="hover:text-teal-400 transition-colors">
                  🌺 Gynaecology (PCOS / Periods)
                </Link>
              </li>
              <li>
                <Link href="/symptom-checker?specialty=orthopedics" className="hover:text-teal-400 transition-colors">
                  🦴 Orthopaedics (Knee & Spine)
                </Link>
              </li>
              <li>
                <Link href="/symptom-checker?specialty=cardiology" className="hover:text-teal-400 transition-colors">
                  ❤️ Cardiology (Lipids & BP)
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
            </ul>
          </div>

          {/* Col 5: Company & Government Schemes */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Company & Schemes
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/government-schemes" className="text-amber-400 hover:text-amber-300 transition-colors font-bold flex items-center gap-1">
                  <span>🏛️ Govt Schemes Guide</span>
                  <span className="text-3xs bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded">PM-JAY</span>
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

      {/* ── Bottom Legal Disclaimer & Copyright ── */}
      <div className="border-t border-slate-900 bg-slate-950 py-6">
        <div className="container-main space-y-4">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 text-xs leading-relaxed">
            <strong className="text-slate-200">⚕️ Clinical & Emergency Notice:</strong> Meditrust Life Sciences Pvt. Ltd. provides evidence-based health triage and price comparison tools. In acute medical emergencies (severe chest pain, breathing difficulty, acute trauma), immediately call <strong>108 (National Ambulance)</strong> or <strong>112 (National Emergency)</strong> or proceed to the nearest emergency room at Ruby Hall Clinic or Sahyadri Hospital. All drug comparisons reflect CDSCO registered formulations and PMBJP published schedules.
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              © 2026 <strong>Meditrust Life Sciences Pvt. Ltd.</strong> (CIN: U85110PN2026PTC214589). All rights reserved. Registered in Pune, Maharashtra, India.
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
