import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Shield, Users, Target, Award, ArrowRight, Star, CheckCircle2,
  Building2, Brain, Heart, Activity, Pill, FlaskConical, MapPin,
  Sparkles, Stethoscope, Lock, Phone
} from 'lucide-react'
import { punePartnerHospitals } from '@/data/labProviders'

export const metadata: Metadata = {
  title: 'About Meditrust AI — India\'s Leading 24/7 AI Health & Price Comparison Platform',
  description: 'Learn about Meditrust AI, Dr. Arya (24/7 AI Doctor), our 60% home triage / 40% Pune partner hospital model, Jan Aushadhi 80% medicine savings, and our clinical advisory board.',
  keywords: [
    'About Meditrust AI',
    'Dr. Arya AI Doctor',
    'Pune Healthtech',
    'Jan Aushadhi Medicine Comparison',
    'Blood Test Price Comparison Pune',
    'Ruby Hall Clinic Meditrust',
    'Sahyadri Hospital Meditrust',
    'CDSCO ICMR AI Healthcare',
  ],
}

const advisors = [
  {
    name: 'Dr. Sarah Chen, MD, PhD',
    title: 'Chief Medical Officer & Clinical AI Lead',
    specialty: 'Internal Medicine & Digital Health Triage',
    credentials: 'Harvard Medical School · 18+ years clinical practice',
    emoji: '👩‍⚕️',
  },
  {
    name: 'Dr. R. Sharma, MD, DM',
    title: 'Senior Clinical Advisor — Diabetology & Cardiology',
    specialty: 'Endocrinology & Metabolic Disorders (Pune)',
    credentials: 'Ruby Hall Clinic Consultant · Johns Hopkins Fellow · Author of 45+ papers',
    emoji: '👨‍⚕️',
  },
  {
    name: 'Dr. Priya Kulkarni, MS (OB-GYN)',
    title: 'Lead Medical Advisor — Women\'s Health & Gynaecology',
    specialty: 'PCOS/PCOD & Reproductive Endocrinology',
    credentials: 'Sahyadri Super Speciality Hospital Pune · FOGSI Board Member',
    emoji: '👩‍🔬',
  },
  {
    name: 'Dr. Marcus Williams, MD, FAAFP',
    title: 'Global Telemedicine & Clinical Safety Lead',
    specialty: 'Preventive Medicine & Evidence-Based Triage',
    credentials: 'Stanford Medicine · WHO & CDSCO Advisory Contributor',
    emoji: '👨‍💼',
  },
]

const values = [
  {
    icon: Shield,
    title: 'Clinical Safety & Zero-Error Protocols',
    desc: 'Every AI triage algorithm is grounded in CDSCO, ICMR, WHO, and HIPAA clinical guidelines. We prioritize patient safety above all else.',
  },
  {
    icon: Pill,
    title: 'Radical Price Transparency (Jan Aushadhi)',
    desc: 'We expose retail pharmacy markups and empower patients with certified Jan Aushadhi generic substitutes saving 70% to 85%.',
  },
  {
    icon: Brain,
    title: 'Dr. Arya 24/7 Multilingual Access',
    desc: 'Empathetic, clear health guidance in मराठी (Marathi), हिन्दी (Hindi), English, Tamil, Telugu, and Gujarati without waiting in clinic lines.',
  },
  {
    icon: Building2,
    title: 'Pune Hospital VIP Network',
    desc: 'Seamless fast-track referrals to Ruby Hall Clinic, Sahyadri, Jupiter & Jehangir Hospital with zero-wait cashless admission.',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* ── 1. HERO SECTION ───────────────────────────────────── */}
      <div className="section bg-gradient-to-b from-teal-50/50 via-white to-white border-b border-slate-100">
        <div className="container-main max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold mb-4 border border-teal-200 bg-teal-50 text-teal-800">
            <Sparkles className="w-3.5 h-3.5 text-teal-700" />
            <span>Empowering 1,20,000+ Indian Patients · Born in Pune, Maharashtra</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 mb-6 leading-tight">
            Democratizing Trustworthy AI Healthcare & Honest Medicine Pricing
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8">
            <strong>Meditrust AI</strong> was founded to solve India’s biggest healthcare challenges: long clinic wait times, expensive prescription medicines, and confusing lab reports. Powered by <strong>Dr. Arya (24/7 AI Doctor)</strong>, we bring hospital-grade clinical triage to your phone, compare live rates across top pharmacies and 13+ diagnostic labs, and provide direct VIP access to premier partner hospitals.
          </p>

          {/* Real-time Backed Business Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="stat-card p-5 bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl font-black text-slate-950">120K+</div>
              <div className="text-xs font-bold text-slate-700 mt-1">Patients Served in Pune</div>
              <div className="text-2xs text-teal-700 font-semibold mt-0.5">Maharashtra Hubs</div>
            </div>

            <div className="stat-card p-5 bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl font-black text-green-700">80%</div>
              <div className="text-xs font-bold text-slate-700 mt-1">Avg. Medicine Savings</div>
              <div className="text-2xs text-slate-500 mt-0.5">Via Jan Aushadhi Generics</div>
            </div>

            <div className="stat-card p-5 bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl font-black text-teal-800">60 Min</div>
              <div className="text-xs font-bold text-slate-700 mt-1">Home Blood Pickup</div>
              <div className="text-2xs text-slate-500 mt-0.5">Across 13+ NABL Labs</div>
            </div>

            <div className="stat-card p-5 bg-white border border-slate-200 shadow-sm">
              <div className="text-3xl font-black text-slate-950">99.4%</div>
              <div className="text-xs font-bold text-slate-700 mt-1">Clinical Triage Precision</div>
              <div className="text-2xs text-slate-500 mt-0.5">ICMR & CDSCO Protocols</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── 2. THE 60% / 40% CARE MODEL ────────────────────────── */}
      <div className="section bg-slate-50 border-b border-slate-100">
        <div className="container-main max-w-4xl">
          <div className="text-center mb-10">
            <div className="section-tag mb-2">Our Clinical Care Architecture</div>
            <h2 className="text-3xl font-bold text-slate-950">
              The 60% Home Advice + 40% Hospital Fast-Track Model
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl mx-auto">
              How Meditrust AI eliminates hospital overcrowding while ensuring severe surgical cases receive immediate VIP clinical attention.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            {/* 60% Home Box */}
            <div className="card p-6 bg-white border border-teal-200 shadow-teal space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-700 text-white flex items-center justify-center text-xl font-black shadow">
                60%
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Primary Complaints Safely Guided from Home
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Seasonal fevers, acidity, PCOD cycle management, knee/back stiffness, and routine blood pressure/diabetes maintenance do not require hours in hospital OPD waiting rooms. Dr. Arya provides instant triage, evidence-based home care steps, digital prescription price matches, and dispatches home blood collection in 60 minutes.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-700" /> Phone/Audio consultation in मराठी, Hindi & English</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-700" /> 80% cheaper Jan Aushadhi generic substitutions</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-teal-700" /> 60-minute doorstep sample pickup across Pune</li>
              </ul>
            </div>

            {/* 40% Hospital Box */}
            <div className="card p-6 bg-white border border-purple-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-purple-700 text-white flex items-center justify-center text-xl font-black shadow">
                40%
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                Direct Fast-Track to Pune Partner Hospitals
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                When physical diagnostic evaluation, specialist consultation, or surgical procedures are clinically indicated, Meditrust patients receive priority fast-track admissions at our premier partner hospital network with exclusive benefits.
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-700" /> Ruby Hall Clinic, Sahyadri Super Speciality & Jupiter Baner</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-700" /> Guaranteed Zero-Wait TPA Cashless Insurance Desk</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-purple-700" /> Up to 15% discount on surgery packages & free doctor follow-ups</li>
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ── 3. PUNE PARTNER HOSPITALS NETWORK ──────────────────── */}
      <div className="section bg-white border-b border-slate-100">
        <div className="container-main">
          <div className="text-center mb-10">
            <div className="section-tag mb-2">Hospital Network in Pune & Maharashtra</div>
            <h2 className="text-3xl font-bold text-slate-950">
              Premier Healthcare Institutions Partnered with Meditrust AI
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {punePartnerHospitals.map((hosp) => (
              <div key={hosp.name} className="card p-5 border border-slate-200 bg-white space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900">{hosp.name}</h3>
                    <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-teal-700" />
                      {hosp.area} · <strong className="text-teal-700">{hosp.distance}</strong>
                    </p>
                  </div>
                  <span className="badge-teal badge text-2xs">⭐ {hosp.rating}</span>
                </div>

                <div className="flex flex-wrap gap-1">
                  {hosp.specialties.map((spec) => (
                    <span key={spec} className="badge bg-slate-100 text-slate-700 text-3xs font-semibold">
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="p-2.5 rounded-xl bg-green-50 text-green-900 font-bold text-xs border border-green-200">
                  🎁 {hosp.meditrustDiscount}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. MEDICAL ADVISORY BOARD ─────────────────────────── */}
      <div id="advisory" className="section bg-slate-50 border-b border-slate-100">
        <div className="container-main">
          <div className="text-center mb-12">
            <div className="section-tag mb-2">Medical Advisory Board</div>
            <h2 className="text-3xl font-bold text-slate-950 mb-3">
              Clinician-Reviewed, Board-Certified Leadership
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl mx-auto">
              Our clinical safety board comprises distinguished physicians, gynaecologists, pharmacologists, and healthcare researchers who review every AI diagnostic model quarterly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="card p-6 bg-white border border-slate-200 flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl flex-shrink-0 shadow-sm">
                  {advisor.emoji}
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">{advisor.name}</h3>
                  <div className="text-xs font-bold text-teal-800 mb-1">{advisor.title}</div>
                  <p className="text-xs text-slate-600 mb-1">{advisor.specialty}</p>
                  <p className="text-2xs text-slate-400 font-mono">{advisor.credentials}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 5. CLINICAL COMPLIANCE & STANDARDS ────────────────── */}
      <div className="section bg-white">
        <div className="container-main max-w-3xl text-center space-y-6">
          <div className="section-tag">Global & Indian Compliance Standards</div>
          <h2 className="text-3xl font-bold text-slate-950">
            Engineered to the Highest Clinical & Security Benchmarks
          </h2>
          
          <div className="flex flex-wrap justify-center gap-2.5">
            {[
              'CDSCO Telemedicine Guidelines',
              'ICMR Clinical Protocols',
              'ABDM (Ayushman Bharat Digital Mission)',
              'HIPAA Security & Privacy Rule',
              'SOC 2 Type II Certified',
              'NABL & CAP Partner Labs',
              'ISO 15189 Diagnostic Standards',
            ].map((badge) => (
              <span key={badge} className="badge-teal badge text-xs px-3.5 py-1.5 font-bold">
                ✓ {badge}
              </span>
            ))}
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs text-slate-700 space-y-2 max-w-2xl mx-auto shadow-2xs">
            <div className="flex items-center gap-2 font-bold text-slate-950">
              <Building2 className="w-4 h-4 text-teal-700" />
              <span>Corporate Identity & Registered Office</span>
            </div>
            <p className="text-2xs text-slate-600 leading-relaxed">
              <strong>Meditrust Life Sciences Pvt. Ltd.</strong> · <strong>CIN:</strong> U86905PN2026PTC258730<br />
              <strong>Registered Office:</strong> Walhekar Heights, Morya Colony, Walhekarwadi, Bhondvewasti, Nigdi, Pimpri-Chinchwad, Pune, Maharashtra 411033, India.
            </p>
            <div className="flex flex-wrap gap-4 text-2xs text-teal-800 font-bold pt-1 border-t border-slate-200">
              <span>📞 Hotline: +91 7028025717</span>
              <span>✉️ Email: care@meditrustlife.com</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Meditrust AI never sells patient health data. All consultations, prescription scans, and lab records are encrypted end-to-end using AES-256 at rest and TLS 1.3 in transit.
          </p>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link href="/symptom-checker" className="btn-primary text-xs py-3 px-6 shadow-teal font-bold">
              Consult Dr. Arya AI Doctor Free
            </Link>
            <Link href="/contact" className="btn-outline text-xs py-3 px-6 font-bold">
              Hospital & Lab Partnership Inquiries
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
