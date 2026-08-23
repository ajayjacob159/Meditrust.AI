import { Metadata } from 'next'
import Link from 'next/link'
import {
  Stethoscope, ShieldCheck, Sparkles, Heart, Activity, CheckCircle2,
  ArrowRight, MessageCircle, ChevronRight, Lock, BookOpen, AlertCircle,
  Clock, MapPin, Award, Calendar, FileText, UserCheck, HelpCircle, Layers
} from 'lucide-react'
import { WOMENS_HEALTH_ARTICLES } from '@/data/womensHealthArticles'

export const metadata: Metadata = {
  title: "AI-Powered Women's Health Care & Navigation | MEDITRUST AI",
  description: "Explore AI-powered women's health guidance with MEDITRUST AI and Dr. Arya across menstrual health, PCOS, fertility, pregnancy, postnatal care and menopause. Understand your health journey and connect with appropriate healthcare professionals.",
  keywords: [
    "Womens health AI", "Dr Arya Womens Health", "PCOS symptoms", "PCOD treatment India",
    "Pregnancy care navigation", "Irregular periods", "Fertility specialist Pune",
    "Gynecologist online consultation", "Perimenopause menopause", "Postnatal recovery"
  ],
  openGraph: {
    title: "AI-Powered Women's Health Care & Navigation | MEDITRUST AI",
    description: "Personalized, AI-powered health understanding and clinician-led care navigation for every stage of a woman's life.",
    url: "https://www.meditrustai.in/womens-health",
    siteName: "Meditrust AI India",
    images: [{ url: "https://www.meditrustai.in/dr_arya.jpg", width: 1200, height: 630 }],
  },
}

export default function WomensHealthPage() {
  const featuredArticles = WOMENS_HEALTH_ARTICLES.slice(0, 6)

  return (
    <div className="min-h-screen bg-white text-slate-900 overflow-x-hidden pt-20 sm:pt-24">
      
      {/* ── 1. HERO SECTION ── */}
      <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto overflow-hidden">
        {/* Subtle Ambient Radial Accents */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Vision & Primary Brand Statements */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-rose-900 text-xs font-black shadow-2xs">
              <span className="text-sm">🌸</span>
              <span className="uppercase tracking-wider">MEDITRUST AI · SPECIALIZED AI CARE JOURNEY</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
              AI-Powered Women&apos;s Health for <span className="text-rose-600">Every Stage of Life</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              <strong>Primary Mission:</strong> Using responsible artificial intelligence to make women&apos;s healthcare more <strong>accessible</strong>, <strong>understandable</strong>, and <strong>affordable</strong>.
            </p>

            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              From adolescence to reproductive health, fertility, pregnancy, motherhood and menopause, <strong>Dr. Arya Women&apos;s Health</strong> helps women understand their health needs, navigate the appropriate care pathway and connect with qualified healthcare professionals.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                href="/symptom-checker?specialty=gynaecology"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm sm:text-base shadow-md transition-all hover:-translate-y-0.5"
              >
                <Stethoscope className="w-5 h-5" />
                <span>Talk to Dr. Arya</span>
              </Link>

              <a
                href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20have%20a%20women%27s%20health%20question"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-rose-50 text-rose-800 font-bold text-sm sm:text-base border border-rose-300 shadow-2xs transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp AI Consultation</span>
              </a>

              <Link
                href="#life-stages"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition-colors"
              >
                <span>Explore Care Pathways</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Trust Pill Attributes */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Clinician-Reviewed Protocols</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                <Lock className="w-4 h-4 text-blue-600" />
                <span>256-Bit Encrypted &amp; ABDM Private</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-rose-600" />
                <span>Zero Diagnostic Claims Without Doctor</span>
              </div>
            </div>

          </div>

          {/* Right Column: Life Stage Wheel / Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white rounded-3xl border border-rose-200/90 shadow-xl p-6 sm:p-8 space-y-6 relative overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-xl">
                    🌸
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">Dr. Arya Women&apos;s Health</h3>
                    <p className="text-3xs text-slate-500">Connected Care Ecosystem</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-3xs font-bold border border-emerald-200">
                  ● 24/7 Live Triage
                </span>
              </div>

              {/* 7 Interactive Stage Chips */}
              <div className="space-y-2.5">
                {[
                  { stage: 'Stage 1', name: 'Teen Health', desc: 'Puberty, cycle awareness & nutrition', icon: '🌱' },
                  { stage: 'Stage 2', name: 'Menstrual Health', desc: 'Irregular cycles, period pain & PMS', icon: '🩸' },
                  { stage: 'Stage 3', name: 'PCOS & Hormonal', desc: 'Screening, insulin resistance & skin', icon: '🩺' },
                  { stage: 'Stage 4', name: 'Fertility & Pre-Conception', desc: 'Ovulation window & AMH assessments', icon: '🥚' },
                  { stage: 'Stage 5', name: 'Pregnancy Care', desc: 'Trimesters, scans & OB-GYN checkups', icon: '🤰' },
                  { stage: 'Stage 6', name: 'Postnatal & Motherhood', desc: 'Maternal healing & pediatric transition', icon: '🤱' },
                  { stage: 'Stage 7', name: 'Mid-Life & Menopause', desc: 'Bone density, heart & perimenopause', icon: '🌸' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-slate-50 hover:bg-rose-50/70 border border-slate-200/70 hover:border-rose-300 transition-all flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{item.icon}</span>
                      <div>
                        <div className="text-xs font-bold text-slate-900 group-hover:text-rose-700 transition-colors">
                          {item.name}
                        </div>
                        <div className="text-3xs text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                    <span className="text-3xs font-bold text-rose-600 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                      {item.stage}
                    </span>
                  </div>
                ))}
              </div>

              <div className="p-3.5 rounded-2xl bg-rose-50/80 border border-rose-200 text-center">
                <p className="text-2xs text-rose-900 font-semibold">
                  &ldquo;One Woman. Many Life Stages. One Connected Healthcare Journey.&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ── 2. MORE THAN "BOOK A GYNECOLOGIST" (THE CORE DIFFERENCE) ── */}
      <section className="py-16 sm:py-24 bg-slate-50/80 border-y border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Transforming Healthcare Discovery
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              More Than &ldquo;Book a Gynecologist&rdquo;
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Traditional healthcare search starts with an appointment button. MEDITRUST AI is built around a complete clinical care pathway: from understanding your symptoms to diagnostic clarity, specialist consultation, and continuous follow-up.
            </p>
          </div>

          {/* Comparative Journey Diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            
            {/* The Broken Traditional Way */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Traditional Discovery</span>
                <span className="text-2xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">Fragmented</span>
              </div>

              <div className="space-y-3 font-mono text-xs text-slate-600">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <span className="text-rose-500 font-bold">1</span>
                  <span>Patient experiences vague pelvic pain or cycle delay</span>
                </div>
                <div className="text-center text-slate-300">↓</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <span className="text-rose-500 font-bold">2</span>
                  <span>Anxious Google search with frightening worst-case results</span>
                </div>
                <div className="text-center text-slate-300">↓</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <span className="text-rose-500 font-bold">3</span>
                  <span>Generic appointment booking with no context or history</span>
                </div>
                <div className="text-center text-slate-300">↓</div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-3">
                  <span className="text-rose-500 font-bold">4</span>
                  <span>Repeating full medical history from scratch each time</span>
                </div>
              </div>

              <p className="text-xs text-slate-500 italic">
                Result: Health anxiety, fragmented records, delayed diagnosis, and repetitive visits.
              </p>
            </div>

            {/* The MEDITRUST AI Care Journey */}
            <div className="bg-gradient-to-br from-rose-50/70 via-white to-blue-50/50 rounded-3xl p-6 sm:p-8 border-2 border-rose-300 shadow-md space-y-6">
              <div className="flex items-center justify-between border-b border-rose-100 pb-3">
                <span className="text-xs font-bold text-rose-800 uppercase tracking-wider">The MEDITRUST Connected Way</span>
                <span className="text-2xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                  ✓ Continuous Care
                </span>
              </div>

              <div className="space-y-2.5 text-xs text-slate-800">
                {[
                  { step: '1', title: 'Tell Dr. Arya What You’re Experiencing', desc: 'Plain-language symptom triage in Marathi, Hindi, or English' },
                  { step: '2', title: 'AI-Assisted Understanding & Structured Questions', desc: 'Contextual queries regarding cycle timing, pain patterns & history' },
                  { step: '3', title: 'Identify Appropriate Care Pathway', desc: 'General Gynecologist, OB-GYN, Fertility Specialist, or Endocrinologist' },
                  { step: '4', title: 'Diagnostics Where Clinically Recommended', desc: 'Ultrasound or NABL blood tests (AMH, Thyroid, CBC) at home in 60m' },
                  { step: '5', title: 'Specialist Consultation & Prescription', desc: 'Expert medical diagnosis and evidence-based treatment by verified doctor' },
                  { step: '6', title: 'Tracking, Reminders & Follow-Up', desc: 'MediVault records storage, dosage WhatsApp alerts & recovery graphs' },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-xl bg-white/90 border border-rose-200/80 shadow-2xs flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-rose-600 text-white flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                      {item.step}
                    </span>
                    <div>
                      <strong className="text-slate-900 block font-bold text-xs">{item.title}</strong>
                      <span className="text-3xs text-slate-500">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-white border border-rose-200 text-3xs text-rose-950 font-medium">
                <strong>Our Objective:</strong> Not simply to help women find a doctor, but to make the complete healthcare journey easier to understand, navigate, and afford.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 3. MEET DR. ARYA WOMEN'S HEALTH (PRODUCT & CONTEXT ENGINE) ── */}
      <section className="py-16 sm:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Product Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Meet Dr. Arya Women&apos;s Health
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            A specialized AI health companion designed around women&apos;s changing healthcare needs. Dr. Arya progressively organizes relevant health context with your explicit consent—eliminating the frustration of repeating your history at every appointment.
          </p>
          <p className="text-sm font-bold text-slate-900 pt-1">
            ✨ Less repetition. More context. More personalized healthcare navigation.
          </p>
        </div>

        {/* Structured Context Matrix */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200/90 space-y-8 shadow-xs">
          
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Progressive Clinical Context Engine (User Consent Governed)</span>
            </div>
            <div className="flex items-center gap-3 text-3xs font-semibold">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Live</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-blue-500" /> In Dev</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" /> Planned</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { title: 'Age & Life Stage', status: 'Available', statusClass: 'bg-emerald-100 text-emerald-800', desc: 'Calibrates clinical risk profiles for adolescence, reproductive years, or perimenopause.' },
              { title: 'Menstrual History & Cycle', status: 'Available', statusClass: 'bg-emerald-100 text-emerald-800', desc: 'Tracks cycle regularity, bleeding duration, flow heaviness, and pain patterns.' },
              { title: 'Current Symptoms & Triage', status: 'Available', statusClass: 'bg-emerald-100 text-emerald-800', desc: 'Evaluates acute pelvic pain, vaginal discharge, breast tenderness & red flags.' },
              { title: 'Lab Reports & Scans OCR', status: 'Available', statusClass: 'bg-emerald-100 text-emerald-800', desc: 'Translates CBC, Thyroid, AMH, Pap smears & ultrasound findings into plain language.' },
              { title: 'Pregnancy Week Tracker', status: 'In Development', statusClass: 'bg-blue-100 text-blue-800', desc: 'Trimester-specific milestones, scan checklists & fetal movement logs.' },
              { title: 'Known Health Conditions', status: 'In Development', statusClass: 'bg-blue-100 text-blue-800', desc: 'PCOS, endometriosis, thyroid disorders, insulin resistance, or hypertension.' },
              { title: 'Medication & Supplement Logs', status: 'In Development', statusClass: 'bg-blue-100 text-blue-800', desc: 'Folic acid, Iron, Inositol & birth control adherence with WhatsApp nudges.' },
              { title: 'Family Medical History', status: 'Planned', statusClass: 'bg-amber-100 text-amber-800', desc: 'Hereditary screening for breast health, diabetes, and early menopause risks.' },
            ].map((ctx, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold ${ctx.statusClass}`}>
                      {ctx.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-xs text-slate-900">{ctx.title}</h4>
                  <p className="text-3xs text-slate-500 leading-relaxed mt-1">{ctx.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Privacy Note */}
          <div className="p-4 rounded-2xl bg-white border border-blue-200/80 flex items-start gap-3 text-xs text-slate-600">
            <Lock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="space-y-0.5">
              <strong className="text-slate-900 block font-bold">Strict User Privacy &amp; ABDM Safeguards:</strong>
              <p className="text-2xs text-slate-500 leading-relaxed">
                Personal health context is only utilized with your explicit informed consent. All consultations are protected by 256-bit AES encryption, strictly complying with ABDM (Ayushman Bharat Digital Mission) and HIPAA security standards.
              </p>
            </div>
          </div>

        </div>

      </section>

      {/* ── 4. WOMEN'S HEALTH THROUGH EVERY LIFE STAGE (7 COMPLETE STAGES) ── */}
      <section id="life-stages" className="py-16 sm:py-24 bg-slate-50/60 border-y border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="max-w-3xl mx-auto text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
              Interactive Care Journeys
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight">
              Women&apos;s Health Through Every Life Stage
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Explore how MEDITRUST AI and Dr. Arya guide you through tailored health education, screening pathways, and specialist connections.
            </p>
          </div>

          {/* The 7 Stages Detailed Cards */}
          <div className="space-y-8">
            
            {/* Stage 1: Teen Health */}
            <div id="teen-health" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-2xl font-bold">
                    🌱
                  </div>
                  <div>
                    <span className="text-3xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Stage 01
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950">Teen Health &amp; Adolescence</h3>
                  </div>
                </div>
                <Link
                  href="/womens-health/periods/irregular-periods"
                  className="text-xs font-bold text-rose-700 hover:text-rose-800 flex items-center gap-1"
                >
                  <span>Explore Teen Health Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
                <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <strong className="text-slate-900 block font-bold text-sm">Puberty &amp; Menstrual Education</strong>
                  <p className="text-2xs text-slate-500 leading-relaxed">
                    Understanding first periods (menarche), cycle normality, menstrual hygiene practices, and overcoming social stigmas.
                  </p>
                </div>
                <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <strong className="text-slate-900 block font-bold text-sm">Nutrition &amp; Anemia Prevention</strong>
                  <p className="text-2xs text-slate-500 leading-relaxed">
                    Early screening for iron deficiency anemia, dietary iron absorption, ragi/leafy greens nutrition, and adolescent bone density.
                  </p>
                </div>
                <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <strong className="text-slate-900 block font-bold text-sm">When to Seek Professional Care</strong>
                  <p className="text-2xs text-slate-500 leading-relaxed">
                    Clear guidance on severe cramps, periods lasting &gt;8 days, or no period by age 15 (primary amenorrhea).
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 2: Menstrual Health */}
            <div id="menstrual-health" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-700 flex items-center justify-center text-2xl font-bold">
                    🩸
                  </div>
                  <div>
                    <span className="text-3xs font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Stage 02
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950">Menstrual &amp; Hormonal Health</h3>
                  </div>
                </div>
                <Link
                  href="/womens-health/periods/period-pain"
                  className="text-xs font-bold text-rose-700 hover:text-rose-800 flex items-center gap-1"
                >
                  <span>Explore Menstrual Health Articles</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
                <Link href="/womens-health/periods/irregular-periods" className="p-4 rounded-2xl bg-slate-50 hover:bg-rose-50/60 border border-slate-200 transition-colors space-y-1 group">
                  <strong className="text-slate-900 group-hover:text-rose-700 block font-bold">Irregular Periods</strong>
                  <p className="text-3xs text-slate-500">Causes of delayed or skipped cycles and hormonal balance.</p>
                </Link>
                <Link href="/womens-health/periods/missed-period" className="p-4 rounded-2xl bg-slate-50 hover:bg-rose-50/60 border border-slate-200 transition-colors space-y-1 group">
                  <strong className="text-slate-900 group-hover:text-rose-700 block font-bold">Missed Periods</strong>
                  <p className="text-3xs text-slate-500">Non-pregnancy causes, stress &amp; thyroid evaluation.</p>
                </Link>
                <Link href="/womens-health/periods/period-pain" className="p-4 rounded-2xl bg-slate-50 hover:bg-rose-50/60 border border-slate-200 transition-colors space-y-1 group">
                  <strong className="text-slate-900 group-hover:text-rose-700 block font-bold">Period Pain (Dysmenorrhea)</strong>
                  <p className="text-3xs text-slate-500">Normal cramping vs secondary pain from endometriosis.</p>
                </Link>
                <Link href="/womens-health/periods/heavy-periods" className="p-4 rounded-2xl bg-slate-50 hover:bg-rose-50/60 border border-slate-200 transition-colors space-y-1 group">
                  <strong className="text-slate-900 group-hover:text-rose-700 block font-bold">Heavy Periods (Menorrhagia)</strong>
                  <p className="text-3xs text-slate-500">Blood clots, fibroid screening &amp; anemia management.</p>
                </Link>
              </div>
            </div>

            {/* Stage 3: PCOS & Hormonal Health (Flagship Deep Flow) */}
            <div id="pcos-health" className="bg-gradient-to-br from-rose-50/80 via-white to-rose-50/30 rounded-3xl p-6 sm:p-10 border-2 border-rose-300 shadow-sm space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-rose-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-rose-600 text-white flex items-center justify-center text-2xl font-bold shadow-sm">
                    🩺
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-3xs font-black text-rose-900 bg-rose-200 px-2 py-0.5 rounded-full uppercase tracking-wider">
                        Stage 03 · High-Priority Specialization
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950">PCOS &amp; Hormonal Health</h3>
                  </div>
                </div>
                <Link
                  href="/womens-health/pcos/pcos-symptoms"
                  className="px-4 py-2 rounded-full bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold flex items-center gap-1.5 transition-colors shadow-2xs"
                >
                  <span>Explore PCOS Care Hub</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Connected PCOS Pathway */}
              <div className="space-y-3">
                <span className="text-xs font-bold text-slate-700 uppercase tracking-wider block">
                  The End-to-End PCOS Clinical Care Pathway:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 text-center text-xs">
                  {[
                    { step: '1. Symptoms', desc: 'Irregular cycles, acne, weight' },
                    { step: '2. AI Screening', desc: 'Structured symptom questions' },
                    { step: '3. Specialist', desc: 'Gynecologist consultation' },
                    { step: '4. Lab Tests', desc: 'Hormones & fasting insulin' },
                    { step: '5. Nutrition', desc: 'Low GI & insulin support' },
                    { step: '6. Treatment', desc: 'Doctor-guided therapy' },
                    { step: '7. Tracking', desc: 'MediVault biomarker trends' },
                    { step: '8. Follow-Up', desc: 'Ovulation & metabolic checks' },
                  ].map((p, i) => (
                    <div key={i} className="p-3 rounded-2xl bg-white border border-rose-200/90 shadow-2xs space-y-1">
                      <div className="font-black text-rose-700 text-xs">{p.step}</div>
                      <div className="text-[10px] text-slate-500 leading-tight">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 Pillar PCOS Articles */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <Link href="/womens-health/pcos/pcos-symptoms" className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 transition-colors shadow-2xs space-y-1 group">
                  <strong className="text-slate-900 group-hover:text-rose-700 block font-bold">PCOS Symptoms &amp; Signs</strong>
                  <p className="text-3xs text-slate-500">Rotterdam criteria, diagnostic checklist &amp; hormone blood panels.</p>
                </Link>
                <Link href="/womens-health/pcos/pcos-vs-pcod" className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 transition-colors shadow-2xs space-y-1 group">
                  <strong className="text-slate-900 group-hover:text-rose-700 block font-bold">PCOS vs PCOD Explained</strong>
                  <p className="text-3xs text-slate-500">Clear differences in severity, metabolic risks &amp; terminology in India.</p>
                </Link>
                <Link href="/womens-health/pcos/pcos-and-pregnancy" className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 transition-colors shadow-2xs space-y-1 group">
                  <strong className="text-slate-900 group-hover:text-rose-700 block font-bold">PCOS and Pregnancy</strong>
                  <p className="text-3xs text-slate-500">Ovulation induction, pregnancy success rates &amp; doctor guidance.</p>
                </Link>
                <Link href="/womens-health/pcos/pcos-weight-management" className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-rose-400 transition-colors shadow-2xs space-y-1 group">
                  <strong className="text-slate-900 group-hover:text-rose-700 block font-bold">Weight &amp; Insulin Science</strong>
                  <p className="text-3xs text-slate-500">Understanding hyperinsulinemia, muscle movement &amp; nutrition.</p>
                </Link>
              </div>
            </div>

            {/* Stage 4: Pre-Conception & Fertility */}
            <div id="fertility-journey" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-2xl font-bold">
                    🥚
                  </div>
                  <div>
                    <span className="text-3xs font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Stage 04
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950">Pre-Conception &amp; Fertility</h3>
                  </div>
                </div>
                <Link
                  href="/womens-health/fertility/ovulation-guide"
                  className="text-xs font-bold text-blue-700 hover:text-blue-800 flex items-center gap-1"
                >
                  <span>Explore Fertility Pathway</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
                <Link href="/womens-health/fertility/ovulation-guide" className="space-y-2 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/70 transition-colors block group">
                  <strong className="text-slate-900 group-hover:text-blue-700 block font-bold text-sm">Ovulation &amp; Fertile Window</strong>
                  <p className="text-2xs text-slate-500 leading-relaxed">
                    Calculating the 6-day fertile window, tracking cervical mucus, and understanding BBT temperature shifts.
                  </p>
                </Link>
                <Link href="/womens-health/fertility/fertility-tests" className="space-y-2 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/70 transition-colors block group">
                  <strong className="text-slate-900 group-hover:text-blue-700 block font-bold text-sm">AMH &amp; Ovarian Reserve Tests</strong>
                  <p className="text-2xs text-slate-500 leading-relaxed">
                    Understanding Anti-Müllerian Hormone (AMH), Antral Follicle Count (AFC), and tubal patency assessments.
                  </p>
                </Link>
                <Link href="/womens-health/fertility/when-to-see-fertility-specialist" className="space-y-2 p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/60 border border-slate-200/70 transition-colors block group">
                  <strong className="text-slate-900 group-hover:text-blue-700 block font-bold text-sm">When to See a Specialist</strong>
                  <p className="text-2xs text-slate-500 leading-relaxed">
                    Age-based clinical timelines (under 35 vs over 35), semen analysis considerations &amp; reproductive endocrinology.
                  </p>
                </Link>
              </div>
            </div>

            {/* Stage 5: Pregnancy */}
            <div id="pregnancy-care" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center text-2xl font-bold">
                    🤰
                  </div>
                  <div>
                    <span className="text-3xs font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Stage 05 · Antenatal Journey
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950">Pregnancy &amp; Maternal Care</h3>
                  </div>
                </div>
                <Link
                  href="/womens-health/pregnancy/early-pregnancy-symptoms"
                  className="text-xs font-bold text-purple-700 hover:text-purple-800 flex items-center gap-1"
                >
                  <span>Explore Pregnancy Guides</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {/* Antenatal Care Journey Bar */}
              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200/80 space-y-2">
                <span className="text-2xs font-bold text-purple-900 uppercase tracking-wider">
                  The Complete Antenatal Care Milestone Flow:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-center text-3xs font-semibold">
                  <div className="p-2 bg-white rounded-xl border border-purple-200">Confirmation (Wk 4-6)</div>
                  <div className="p-2 bg-white rounded-xl border border-purple-200">Dating Scan (Wk 6-8)</div>
                  <div className="p-2 bg-white rounded-xl border border-purple-200">NT Scan (Wk 11-13)</div>
                  <div className="p-2 bg-white rounded-xl border border-purple-200">Anomaly Scan (Wk 18-20)</div>
                  <div className="p-2 bg-white rounded-xl border border-purple-200">OGTT Sugar (Wk 24-28)</div>
                  <div className="p-2 bg-white rounded-xl border border-purple-200">Delivery Plan (Wk 36+)</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <Link href="/womens-health/pregnancy/early-pregnancy-symptoms" className="p-4 rounded-2xl bg-slate-50 hover:bg-purple-50/60 border border-slate-200 transition-colors space-y-1 group">
                  <strong className="text-slate-900 group-hover:text-purple-700 block font-bold">Early Pregnancy Symptoms</strong>
                  <p className="text-3xs text-slate-500">Implantation signs, morning sickness &amp; first-trimester changes.</p>
                </Link>
                <Link href="/womens-health/pregnancy/week-by-week" className="p-4 rounded-2xl bg-slate-50 hover:bg-purple-50/60 border border-slate-200 transition-colors space-y-1 group">
                  <strong className="text-slate-900 group-hover:text-purple-700 block font-bold">Week-by-Week Guide</strong>
                  <p className="text-3xs text-slate-500">Fetal development milestones across all three trimesters.</p>
                </Link>
                <Link href="/womens-health/pregnancy/tests-and-scans" className="p-4 rounded-2xl bg-slate-50 hover:bg-purple-50/60 border border-slate-200 transition-colors space-y-1 group">
                  <strong className="text-slate-900 group-hover:text-purple-700 block font-bold">Scans &amp; Test Schedule</strong>
                  <p className="text-3xs text-slate-500">Essential ultrasounds, NT, TIFFA &amp; blood investigation schedule.</p>
                </Link>
                <Link href="/womens-health/pregnancy/pregnancy-diet" className="p-4 rounded-2xl bg-slate-50 hover:bg-purple-50/60 border border-slate-200 transition-colors space-y-1 group">
                  <strong className="text-slate-900 group-hover:text-purple-700 block font-bold">Pregnancy Nutrition</strong>
                  <p className="text-3xs text-slate-500">Folic acid, iron, calcium &amp; foods to avoid for Indian mothers.</p>
                </Link>
              </div>
            </div>

            {/* Stage 6: Postnatal & Motherhood */}
            <div id="postnatal-care" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center text-2xl font-bold">
                    🤱
                  </div>
                  <div>
                    <span className="text-3xs font-bold text-teal-700 bg-teal-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Stage 06
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950">Postnatal &amp; Motherhood Care</h3>
                  </div>
                </div>
                <Link
                  href="/womens-health/postnatal/postnatal-recovery"
                  className="text-xs font-bold text-teal-700 hover:text-teal-800 flex items-center gap-1"
                >
                  <span>Explore Postpartum Recovery</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
                <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <strong className="text-slate-900 block font-bold text-sm">Fourth Trimester Healing</strong>
                  <p className="text-2xs text-slate-500 leading-relaxed">
                    Vaginal birth and C-section recovery, lochia stages, pelvic floor strengthening, and lactation guidance.
                  </p>
                </div>
                <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <strong className="text-slate-900 block font-bold text-sm">Emotional Wellbeing &amp; PPD</strong>
                  <p className="text-2xs text-slate-500 leading-relaxed">
                    Compassionate screening for the baby blues vs postpartum depression, sleep restoration, and supportive counseling.
                  </p>
                </div>
                <div className="space-y-2 p-4 rounded-2xl bg-teal-50/70 border border-teal-200/80">
                  <strong className="text-teal-950 block font-bold text-sm">Mother ➔ Baby ➔ Pediatrician Ecosystem</strong>
                  <p className="text-2xs text-teal-800 leading-relaxed">
                    Seamlessly transitions from maternal postpartum care to newborn immunization schedules and pediatrician visits.
                  </p>
                </div>
              </div>
            </div>

            {/* Stage 7: Mid-Life & Menopause */}
            <div id="menopause-health" className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center text-2xl font-bold">
                    🌸
                  </div>
                  <div>
                    <span className="text-3xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Stage 07
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-950">Mid-Life &amp; Menopause Health</h3>
                  </div>
                </div>
                <Link
                  href="/womens-health/menopause/perimenopause-vs-menopause"
                  className="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1"
                >
                  <span>Explore Menopause Guides</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-600">
                <Link href="/womens-health/menopause/perimenopause-vs-menopause" className="space-y-2 p-4 rounded-2xl bg-slate-50 hover:bg-amber-50/60 border border-slate-200/70 transition-colors block group">
                  <strong className="text-slate-900 group-hover:text-amber-700 block font-bold text-sm">Perimenopause Transition</strong>
                  <p className="text-2xs text-slate-500 leading-relaxed">
                    Understanding hot flashes, sleep disruptions, cycle fluctuations, and average menopause age in India.
                  </p>
                </Link>
                <Link href="/womens-health/menopause/health-after-40" className="space-y-2 p-4 rounded-2xl bg-slate-50 hover:bg-amber-50/60 border border-slate-200/70 transition-colors block group">
                  <strong className="text-slate-900 group-hover:text-amber-700 block font-bold text-sm">Bone &amp; Heart Health After 40</strong>
                  <p className="text-2xs text-slate-500 leading-relaxed">
                    DEXA bone density screening, calcium/D3 protocols, cardiovascular protection, and weight-bearing exercise.
                  </p>
                </Link>
                <div className="space-y-2 p-4 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <strong className="text-slate-900 block font-bold text-sm">Preventive Screenings</strong>
                  <p className="text-2xs text-slate-500 leading-relaxed">
                    Regular cervical Pap smears, screening mammograms, lipid profiles, and gynecologist consultations.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ── 5. CLINICAL GOVERNANCE & TRUST STATEMENT ── */}
      <section className="py-16 sm:py-24 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold">
            <Award className="w-3.5 h-3.5 text-slate-700" />
            <span>Clinical Oversight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
            Clinical Governance for Women&apos;s Health
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Specialized women&apos;s health pathways, clinical red-flag triggers, and educational articles are developed and continuously reviewed alongside qualified healthcare professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Reviewer 1 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-xl font-bold text-rose-700">
              👩‍⚕️
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Dr. Neha Patil, MS (OB-GYN)</h4>
              <p className="text-3xs text-rose-700 font-bold uppercase tracking-wider">
                Obstetrician &amp; Gynecologist
              </p>
              <p className="text-2xs text-slate-500 mt-1">
                Specialization: Reproductive Endocrinology, Adolescent Health &amp; Laparoscopy
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-3xs text-slate-400">
              Reviewed Areas: PCOS pathways, Menstrual disorders, Endometriosis protocols.
            </div>
          </div>

          {/* Reviewer 2 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-xl font-bold text-blue-700">
              👩‍⚕️
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Dr. Anita Rao, MD (OB-GYN)</h4>
              <p className="text-3xs text-blue-700 font-bold uppercase tracking-wider">
                Senior Consultant Obstetrician
              </p>
              <p className="text-2xs text-slate-500 mt-1">
                Specialization: High-Risk Pregnancy, Maternal Nutrition &amp; Menopause
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-3xs text-slate-400">
              Reviewed Areas: Trimester scans, Antenatal checklists, Postpartum care.
            </div>
          </div>

          {/* Reviewer 3 */}
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-xl font-bold text-purple-700">
              👩‍⚕️
            </div>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Dr. Priya Shah, MD (Reproductive Med.)</h4>
              <p className="text-3xs text-purple-700 font-bold uppercase tracking-wider">
                Fertility &amp; IVF Specialist
              </p>
              <p className="text-2xs text-slate-500 mt-1">
                Specialization: Ovarian Reserve, Follicular Tracking &amp; Assisted Conception
              </p>
            </div>
            <div className="pt-3 border-t border-slate-100 text-3xs text-slate-400">
              Reviewed Areas: Ovulation guidance, AMH diagnostics, Fertility timelines.
            </div>
          </div>

        </div>

        {/* Responsible AI & Emergency Trust Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-md">
          <div className="flex items-center gap-2.5 text-sm font-bold text-teal-300">
            <ShieldCheck className="w-5 h-5 text-teal-400" />
            <span>Responsible AI. Clinician-Led Care.</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Dr. Arya Women&apos;s Health is designed to assist with clinical health information and personalized care navigation. It does <strong>not</strong> replace clinical consultation, physical examination, laboratory diagnosis, or treatment by qualified healthcare professionals.
          </p>
          <div className="p-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-2xs text-amber-300 flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <span>
              <strong>Emergency Notice:</strong> If you are experiencing acute severe abdominal/pelvic pain, heavy sudden vaginal hemorrhage, fainting, or acute pregnancy-related distress, please proceed immediately to the nearest hospital emergency room (such as Ruby Hall Clinic or Sahyadri Hospital) or call <strong>108 / 112</strong>.
            </span>
          </div>
        </div>

      </section>

      {/* ── 6. WOMEN'S HEALTH KNOWLEDGE CENTRE (SEO PILLARS & ARTICLES) ── */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
                Evidence-Based Health Library
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight">
                Women&apos;s Health Knowledge Centre
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
                Clinically reviewed, easy-to-understand guides across menstrual health, PCOS, fertility, pregnancy, and menopause.
              </p>
            </div>

            <Link
              href="/womens-health/health-library"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-white hover:bg-rose-50 text-rose-700 font-bold text-xs border border-rose-300 shadow-2xs transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>View All 20+ Pillar Articles</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Featured 6 Pillar Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((art) => (
              <Link
                key={art.id}
                href={`/womens-health/${art.category}/${art.slug}`}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-rose-300 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                      {art.categoryName}
                    </span>
                    <span className="text-3xs text-slate-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {art.readingTime}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-slate-900 group-hover:text-rose-700 transition-colors line-clamp-2">
                    {art.title}
                  </h3>

                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-2xs">
                  <span className="text-slate-400 font-medium">
                    Reviewed: <strong className="text-slate-700">{art.medicalReviewer.split(',')[0]}</strong>
                  </span>
                  <span className="text-rose-700 font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Read Guide</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ── 7. FIND LOCAL WOMEN'S HEALTH SPECIALISTS (PUNE & PCMC) ── */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-rose-900 via-slate-950 to-blue-950 rounded-3xl p-8 sm:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
            <div className="space-y-3 text-center lg:text-left max-w-2xl">
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-3xs font-bold uppercase tracking-wider border border-rose-500/30">
                Verified Local Care Network
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Connect with Qualified Gynecologists &amp; Maternity Hospitals
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Consult with verified OB-GYNs and fertility specialists across Pune, Nigdi, and PCMC. Priority admission desks at Sahyadri, Ruby Hall Clinic, and Jupiter Hospital.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
              <Link
                href="/doctors/gynecologist/pune"
                className="px-6 py-3 rounded-full bg-white text-slate-950 hover:bg-rose-50 font-bold text-xs sm:text-sm shadow-sm transition-all hover:-translate-y-0.5"
              >
                <span>Gynecologists in Pune</span>
              </Link>
              <Link
                href="/doctors/gynecologist/pcmc"
                className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm shadow-sm transition-all hover:-translate-y-0.5"
              >
                <span>Gynecologists in PCMC</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
