import { Metadata } from 'next'
import Link from 'next/link'
import {
  Stethoscope, UserPlus, ShieldCheck, CheckCircle2, FileText,
  Clock, Activity, Sparkles, Building2, Phone, Mail, ExternalLink,
  ChevronRight, ArrowRight, Lock, Award, HeartHandshake
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Doctor & Clinic Onboarding | Partner with MEDITRUST AI",
  description: "Join India's premier AI clinical network. Onboard your clinic or hospital with MEDITRUST AI to receive pre-triaged patient summaries, sequential biomarker records, and grow your practice.",
  keywords: [
    "Doctor onboarding Meditrust AI", "Clinic registration Pune", "Join AI doctor network",
    "Pre-triaged patient referrals", "ABDM compliant clinic software", "Gynecologist registration Pune"
  ],
  openGraph: {
    title: "Doctor & Clinic Onboarding | Partner with MEDITRUST AI",
    description: "Empower your clinical practice with AI pre-triage, longitudinal biomarker graphs, and verified patient referrals.",
    url: "https://www.meditrustai.in/for-doctors",
    siteName: "Meditrust AI India",
  },
}

export default function ForDoctorsPage() {
  const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeY0l0prwNzUwKkyn8tyC0TRZ7ucRgi8Mm6LQ68-0KeRhwV1w/viewform?usp=header"
  const EMBED_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeY0l0prwNzUwKkyn8tyC0TRZ7ucRgi8Mm6LQ68-0KeRhwV1w/viewform?embedded=true"

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 overflow-x-hidden pt-20 sm:pt-24 pb-20">
      
      {/* ── BREADCRUMBS ── */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Doctor Onboarding</span>
        </nav>
      </div>

      {/* ── HERO SECTION ── */}
      <header className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100/90 border border-blue-200 text-blue-900 text-xs font-black shadow-2xs">
              <UserPlus className="w-3.5 h-3.5 text-blue-600" />
              <span>MEDITRUST CLINICAL NETWORK · DOCTOR &amp; CLINIC ONBOARDING</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
              Modernize Your Practice with <span className="text-blue-600">AI-Powered Pre-Triage</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl">
              Partner with <strong>Meditrust AI</strong> to receive structured patient histories, chronological biomarker graphs, and verified patient connections across 15+ clinical specialties in Pune, PCMC, and Pan-India.
            </p>

            {/* Quick Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#registration-form"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm sm:text-base shadow-md transition-all hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5" />
                <span>Fill Doctor Registration Form</span>
              </a>

              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-800 font-bold text-sm sm:text-base border border-slate-300 shadow-2xs transition-all hover:-translate-y-0.5"
              >
                <ExternalLink className="w-4 h-4 text-blue-600" />
                <span>Open in Google Forms</span>
              </a>
            </div>

            {/* Compliance Badges */}
            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>NMC Telemedicine Guidelines Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                <Lock className="w-4 h-4 text-blue-600" />
                <span>256-Bit Encrypted &amp; ABDM Integrated</span>
              </div>
            </div>

          </div>

          {/* Right Column: Key Value Card */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-3xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 font-bold text-xl">
                    🩺
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">Dr. Arya Clinical Pre-Triage</h3>
                    <p className="text-3xs text-slate-500">How Meditrust Supports Doctors</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-3xs font-bold border border-emerald-200">
                  Save 10+ Mins/Patient
                </span>
              </div>

              <div className="space-y-3 text-xs text-slate-700">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">1. Structured Chief Complaints:</strong>
                    <span className="text-3xs text-slate-500">Onset, symptom duration, severity score &amp; associated red flags pre-collected.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">2. Longitudinal Lab Graphs:</strong>
                    <span className="text-3xs text-slate-500">Historical HbA1c, Lipids, TSH &amp; CBC progression automatically graphed in MediVault™.</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-bold">3. High Adherence WhatsApp Bot:</strong>
                    <span className="text-3xs text-slate-500">Automated dosage reminders ensure patients take prescribed regimens consistently.</span>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-center">
                <p className="text-xs text-blue-950 font-bold">
                  &ldquo;Doctors focus 100% on clinical diagnosis and patient care. Meditrust AI handles pre-triage and administrative continuity.&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>
      </header>

      {/* ── 6 CORE BENEFITS FOR DOCTORS & CLINICS ── */}
      <section className="py-16 bg-white border-y border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Why Doctors Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
              Designed to Empower Clinicians, Not Replace Them
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal">
              Meditrust AI works in synergy with qualified doctors—streamlining consultations, reducing administrative load, and enhancing patient treatment adherence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Benefit 1 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200 hover:border-blue-300 hover:bg-blue-50/30 transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                📋
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-blue-700 transition-colors">
                Pre-Triaged Patient Briefs
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Patients arrive with organized medical summaries in Marathi, Hindi, or English—including symptom duration, past medication history, and red-flag alerts.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/30 transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                📊
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-emerald-700 transition-colors">
                Sequential Biomarker Graphs
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Access digitized historical lab trends for HbA1c, Lipids, Thyroid, and Kidney function instantly through MediVault™—no more lost physical test papers.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200 hover:border-purple-300 hover:bg-purple-50/30 transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                👥
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-purple-700 transition-colors">
                Local Patient Discovery in Pune &amp; PCMC
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Connect directly with thousands of active families searching for trusted specialists across Nigdi, Kothrud, Hinjewadi, Deccan, and Pimpri-Chinchwad.
              </p>
            </div>

            {/* Benefit 4 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200 hover:border-amber-300 hover:bg-amber-50/30 transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                ⏰
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-amber-700 transition-colors">
                Automated WhatsApp Adherence Nudges
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Patients receive compassionate daily WhatsApp dosage reminders for your prescribed treatment, driving superior clinical outcomes and timely follow-ups.
              </p>
            </div>

            {/* Benefit 5 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200 hover:border-rose-300 hover:bg-rose-50/30 transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                🌸
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-rose-700 transition-colors">
                Flagship Women&apos;s Health Care Pathways
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                OB-GYNs and fertility specialists receive structured referrals across 7 life stages: Teen health, PCOS/PCOD, ovulation tracking, pregnancy scans, and menopause.
              </p>
            </div>

            {/* Benefit 6 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50/80 border border-slate-200 hover:border-teal-300 hover:bg-teal-50/30 transition-all space-y-3 group">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 text-teal-700 flex items-center justify-center text-xl font-bold group-hover:scale-110 transition-transform">
                🏛️
              </div>
              <h3 className="font-bold text-base text-slate-900 group-hover:text-teal-700 transition-colors">
                100% ABDM &amp; Privacy Compliant
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Fully compliant with National Health Authority (NHA) Ayushman Bharat standards, HIPAA security rule, and CDSCO Telemedicine Practice Guidelines.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── EMBEDDED GOOGLE REGISTRATION FORM ── */}
      <section id="registration-form" className="py-16 sm:py-24 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold border border-emerald-200">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Doctor &amp; Hospital Onboarding Form</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Register Your Practice with MEDITRUST AI
          </h2>

          <p className="text-sm text-slate-600">
            Please fill out your clinical details below. Our clinical partnerships team will review your registration and activate your verified profile within 24 hours.
          </p>

          <div className="pt-2">
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 hover:underline"
            >
              <span>If form does not load properly, click here to open in full screen</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Embedded Iframe Container */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-2 sm:p-6 relative">
          <div className="w-full flex items-center justify-center">
            <iframe
              src={EMBED_FORM_URL}
              width="100%"
              height="1050"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="w-full max-w-4xl rounded-2xl min-h-[900px] border-0"
              title="Doctor Registration Form"
            >
              Loading Doctor Registration Form…
            </iframe>
          </div>
        </div>

      </section>

      {/* ── DOCTOR SUPPORT & CONTACT HELP ── */}
      <aside className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
              <Building2 className="w-5 h-5 text-teal-400" />
              <span>Questions About Doctor Partnership?</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed">
              Our clinical onboarding team is available 24/7. Reach out directly for institutional hospital tie-ups, clinic desk integration, or NABL laboratory partnerships.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <a
              href="tel:+917028025717"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs shadow-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>+91 7028025717</span>
            </a>

            <a
              href="mailto:care@meditrustlife.com"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>care@meditrustlife.com</span>
            </a>
          </div>
        </div>
      </aside>

    </div>
  )
}
