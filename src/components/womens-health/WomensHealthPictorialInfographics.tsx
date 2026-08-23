'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Heart, Sparkles, Droplets, Activity, ShieldCheck, ArrowRight,
  Stethoscope, Calendar, Clock, AlertTriangle, CheckCircle2, ChevronRight,
  TrendingUp, Users, Baby, Zap, Award
} from 'lucide-react'

export default function WomensHealthPictorialInfographics() {
  const [activeTab, setActiveTab] = useState<'lifecycle' | 'ferritin_tank' | 'pcos_metabolic' | 'pregnancy_timeline' | 'bone_dexa'>('lifecycle')

  const LIFECYCLE_STAGES = [
    {
      stage: 'Adolescence (10–19y)',
      ageRange: '10–19 yrs',
      icon: '🩸',
      title: 'First Period & Menstrual Onset',
      sufferers: '56M–93M suffer dysmenorrhea (70%)',
      keyTests: 'CBC, Serum Ferritin, Baseline LH/FSH',
      color: 'from-rose-500/20 to-pink-500/10',
      border: 'border-rose-300',
      badgeBg: 'bg-rose-100 text-rose-800',
      visualNote: '⚠️ 36M–60M suffer cramps in silence due to 60% normalization gap.',
    },
    {
      stage: 'Young Women (20–29y)',
      ageRange: '20–29 yrs',
      icon: '🌸',
      title: 'Hormonal Balance & PCOS',
      sufferers: '43.1M PCOS · 43M Endometriosis',
      keyTests: 'Total/Free Testosterone, DHEA-S, HOMA-IR, AMH',
      color: 'from-purple-500/20 to-indigo-500/10',
      border: 'border-purple-300',
      badgeBg: 'bg-purple-100 text-purple-800',
      visualNote: '🩺 91.9% dyslipidemia & 1 in 3 fatty liver risk in PCOS.',
    },
    {
      stage: 'Fertility & Motherhood (25–35y)',
      ageRange: '25–35 yrs',
      icon: '🤰',
      title: 'Conception & Antenatal Journey',
      sufferers: '25M births annually · 50.3% Anemic · 19.2% GDM',
      keyTests: 'Dual Marker (11–13w), 75g OGTT (24–28w), TSH',
      color: 'from-emerald-500/20 to-teal-500/10',
      border: 'border-emerald-300',
      badgeBg: 'bg-emerald-100 text-emerald-800',
      visualNote: '👶 54.1% private C-sections; 2nd opinion support vital.',
    },
    {
      stage: 'Mid-Life (40–50y)',
      ageRange: '40–50 yrs',
      icon: '🦋',
      title: 'Perimenopause & Hormonal Shift',
      sufferers: '140M in menopause transition (Mean age 46.2y)',
      keyTests: 'FSH, Estradiol, hs-CRP, Lipid Panel, HbA1c',
      color: 'from-amber-500/20 to-orange-500/10',
      border: 'border-amber-300',
      badgeBg: 'bg-amber-100 text-amber-800',
      visualNote: '🔥 75.3% experience vasomotor hot flashes & sleep disruption.',
    },
    {
      stage: 'Post-Menopause (50+y)',
      ageRange: '50–65+ yrs',
      icon: '🦴',
      title: 'Bone Density & Cardiovascular Vitality',
      sufferers: '51M Osteoporosis (42.5%) · 54M Osteopenia',
      keyTests: 'DEXA Scan, Serum Calcium, Vitamin D3, HPV DNA',
      color: 'from-blue-500/20 to-cyan-500/10',
      border: 'border-blue-300',
      badgeBg: 'bg-blue-100 text-blue-800',
      visualNote: '🎗️ 98.1% unscreened for cervical cancer; 5-yr HPV test recommended.',
    },
  ]

  return (
    <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-900 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-rose-600" />
            <span>VISUAL CLINICAL INFOGRAPHICS &amp; DIAGNOSTIC MODELS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
            Pictorial Guides: Women&apos;s Health Across the Lifetime Continuum
          </h2>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl overflow-x-auto text-xs font-bold">
          <button
            onClick={() => setActiveTab('lifecycle')}
            className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'lifecycle' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🌸 40-Year Continuum
          </button>
          <button
            onClick={() => setActiveTab('ferritin_tank')}
            className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'ferritin_tank' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🩸 Ferritin Iron Tank
          </button>
          <button
            onClick={() => setActiveTab('pcos_metabolic')}
            className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'pcos_metabolic' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🩺 PCOS &amp; Insulin
          </button>
          <button
            onClick={() => setActiveTab('pregnancy_timeline')}
            className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'pregnancy_timeline' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🤰 Trimester Roadmap
          </button>
          <button
            onClick={() => setActiveTab('bone_dexa')}
            className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap ${
              activeTab === 'bone_dexa' ? 'bg-white text-slate-950 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            🦴 Bone Density
          </button>
        </div>
      </div>

      {/* ── TAB 1: 40-YEAR LIFECYCLE CONTINUUM ── */}
      {activeTab === 'lifecycle' && (
        <div className="space-y-6 animate-fadeIn">
          <p className="text-xs sm:text-sm text-slate-600">
            Health is an unbroken 40+ year relationship. Here is how biological moments, diagnostic tests, and clinical suffering progress from first period to post-menopause in India:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {LIFECYCLE_STAGES.map((item, idx) => (
              <div
                key={idx}
                className={`p-5 rounded-3xl border ${item.border} bg-gradient-to-b ${item.color} flex flex-col justify-between space-y-4 hover:shadow-md transition-all relative group`}
              >
                {/* Stage number badge */}
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-full bg-white text-slate-900 font-black text-xs flex items-center justify-center shadow-xs">
                    0{idx + 1}
                  </span>
                  <span className={`text-3xs font-black uppercase px-2 py-0.5 rounded-full ${item.badgeBg}`}>
                    {item.ageRange}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="text-3xl">{item.icon}</div>
                  <h3 className="font-black text-sm text-slate-950 leading-tight">
                    {item.title}
                  </h3>
                  <div className="text-3xs font-bold text-rose-800">
                    {item.sufferers}
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-white/90 border border-white text-3xs space-y-1">
                  <strong className="text-slate-900 font-bold block">Key Blood Tests:</strong>
                  <p className="text-slate-600 font-medium">{item.keyTests}</p>
                </div>

                <div className="text-[10px] text-slate-700 font-semibold bg-white/60 p-2.5 rounded-xl border border-white/80 leading-relaxed">
                  {item.visualNote}
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-950 font-medium flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="text-base">📊</span>
              <span><strong>National Data:</strong> Over 500 million health moments occur annually across India&apos;s 735 million women.</span>
            </span>
            <Link
              href="/reports/womens-health-india-2026"
              className="font-bold underline text-rose-800 hover:text-rose-950 whitespace-nowrap"
            >
              Read Full 2026–30 Report →
            </Link>
          </div>
        </div>
      )}

      {/* ── TAB 2: SERUM FERRITIN IRON TANK INFOGRAPHIC ── */}
      {activeTab === 'ferritin_tank' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Visual Tank Graphic */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-5 border border-slate-800 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-400">
                  Cellular Iron Fuel Gauge
                </span>
                <span className="text-3xs bg-rose-500/20 text-rose-300 px-2 py-0.5 rounded-full font-mono">
                  Serum Ferritin (ng/mL)
                </span>
              </div>

              {/* Tank Bars */}
              <div className="space-y-3 font-mono text-xs">
                
                {/* Optimal */}
                <div className="space-y-1">
                  <div className="flex justify-between text-emerald-400 font-bold">
                    <span>50 – 150 ng/mL</span>
                    <span>OPTIMAL RESERVE (Hair Growth &amp; Energy)</span>
                  </div>
                  <div className="w-full h-4 rounded-full bg-slate-800 overflow-hidden p-0.5">
                    <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 w-full animate-pulse" />
                  </div>
                </div>

                {/* Sub-optimal */}
                <div className="space-y-1">
                  <div className="flex justify-between text-amber-400 font-bold">
                    <span>30 – 50 ng/mL</span>
                    <span>SUB-OPTIMAL (Diffuse Hair Thinning)</span>
                  </div>
                  <div className="w-full h-4 rounded-full bg-slate-800 overflow-hidden p-0.5">
                    <div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 w-[60%]" />
                  </div>
                </div>

                {/* Latent Deficiency */}
                <div className="space-y-1">
                  <div className="flex justify-between text-rose-400 font-bold">
                    <span>15 – 30 ng/mL</span>
                    <span>LATENT DEFICIENCY (Brain Fog &amp; Fatigue)</span>
                  </div>
                  <div className="w-full h-4 rounded-full bg-slate-800 overflow-hidden p-0.5">
                    <div className="h-full rounded-full bg-gradient-to-r from-rose-500 to-pink-500 w-[30%]" />
                  </div>
                </div>

                {/* Severe Depletion */}
                <div className="space-y-1">
                  <div className="flex justify-between text-red-500 font-bold">
                    <span>&lt; 15 ng/mL</span>
                    <span>SEVERE CELLULAR EXHAUSTION</span>
                  </div>
                  <div className="w-full h-4 rounded-full bg-slate-800 overflow-hidden p-0.5">
                    <div className="h-full rounded-full bg-red-600 w-[12%]" />
                  </div>
                </div>

              </div>

              <div className="p-3 rounded-2xl bg-white/10 text-3xs text-slate-300 font-sans leading-relaxed">
                💡 <strong>The Anemia Paradox:</strong> Hemoglobin in blood can stay normal at 12 g/dL while Ferritin drops to 10 ng/mL.
              </div>
            </div>

            {/* Explanation Column */}
            <div className="lg:col-span-7 space-y-4 text-xs sm:text-sm text-slate-700">
              <h3 className="text-lg sm:text-xl font-bold text-slate-950">
                Why 57% of Indian Women Feel Tired Despite &quot;Normal&quot; Hemoglobin
              </h3>
              <p className="leading-relaxed">
                Routine health checkups only measure <strong>Hemoglobin (cash in your wallet)</strong>, but completely ignore <strong>Serum Ferritin (savings in the bank)</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-slate-600">
                <li><strong>Hair Loss (Telogen Effluvium):</strong> Hair roots require ferritin levels &gt; 50 ng/mL to maintain active anagen growth. When stores drop below 30, hair sheds excessively.</li>
                <li><strong>Mitochondrial Fatigue:</strong> Iron is required by cytochrome enzymes in muscle mitochondria to generate ATP energy.</li>
                <li><strong>Jan Aushadhi Solution:</strong> PMBJP Ferrous Ascorbate + Folic Acid costs just ₹25/strip vs ₹180 for branded equivalents.</li>
              </ul>

              <div className="pt-2 flex items-center gap-3">
                <Link
                  href="/womens-health/blood-tests/serum-ferritin-vs-hemoglobin-anemia-women"
                  className="px-5 py-2.5 rounded-xl bg-rose-600 text-white font-bold text-xs hover:bg-rose-700 transition-colors flex items-center gap-1.5"
                >
                  <span>Read Full Ferritin Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/womens-health/blood-tests"
                  className="px-5 py-2.5 rounded-xl bg-slate-100 text-slate-800 font-bold text-xs hover:bg-slate-200 transition-colors"
                >
                  Book Ferritin Test (₹380)
                </Link>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* ── TAB 3: PCOS & METABOLIC ROTTERDAM DIAGRAM ── */}
      {activeTab === 'pcos_metabolic' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Pillar 1: Ovulation */}
            <div className="p-6 rounded-3xl bg-rose-50 border border-rose-200 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-rose-200 text-rose-900 flex items-center justify-center text-xl">
                📅
              </div>
              <h3 className="font-bold text-base text-slate-950">1. Oligo-Anovulation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Irregular, delayed (&gt;35 days), or missed menstrual cycles caused by failure of dominant egg follicle maturation.
              </p>
              <div className="text-3xs font-mono bg-white p-2 rounded-xl text-rose-800 border border-rose-100">
                Blood Marker: Day 2–3 LH:FSH Ratio &gt; 2:1
              </div>
            </div>

            {/* Pillar 2: Androgens */}
            <div className="p-6 rounded-3xl bg-purple-50 border border-purple-200 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-purple-200 text-purple-900 flex items-center justify-center text-xl">
                🧬
              </div>
              <h3 className="font-bold text-base text-slate-950">2. Hyperandrogenism</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Elevated male hormones driving jawline cystic acne, hirsutism (facial hair), and scalp hair thinning.
              </p>
              <div className="text-3xs font-mono bg-white p-2 rounded-xl text-purple-800 border border-purple-100">
                Blood Marker: Free Testosterone &amp; DHEA-S
              </div>
            </div>

            {/* Pillar 3: Polycystic Morphology */}
            <div className="p-6 rounded-3xl bg-indigo-50 border border-indigo-200 space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-indigo-200 text-indigo-900 flex items-center justify-center text-xl">
                🔬
              </div>
              <h3 className="font-bold text-base text-slate-950">3. Polycystic Ovaries</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pelvic ultrasound revealing 12+ antral follicles (2–9 mm) arranged in a characteristic &quot;string of pearls&quot; pattern.
              </p>
              <div className="text-3xs font-mono bg-white p-2 rounded-xl text-indigo-800 border border-indigo-100">
                Blood Marker: AMH &gt; 4.5 – 9.0 ng/mL
              </div>
            </div>

          </div>

          <div className="p-5 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <strong className="text-teal-300 font-bold block text-sm">Rotterdam Rule: Any 2 out of 3 criteria confirms PCOS diagnosis.</strong>
              <p className="text-xs text-slate-300">Over 70% of Indian PCOS cases are driven by underlying insulin resistance (HOMA-IR &gt; 1.9).</p>
            </div>
            <Link
              href="/womens-health#interactive-tools"
              className="px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs whitespace-nowrap shadow-xs transition-colors"
            >
              Take Free Rotterdam Screener →
            </Link>
          </div>
        </div>
      )}

      {/* ── TAB 4: PREGNANCY TRIMESTER ROADMAP ── */}
      {activeTab === 'pregnancy_timeline' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            
            {/* Trimester 1 */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-xs font-black text-rose-700">TRIMESTER 1 (W1–13)</span>
                <span className="text-3xs bg-rose-100 text-rose-800 px-2 py-0.5 rounded font-bold">Genetic Triage</span>
              </div>
              <ul className="text-xs text-slate-700 space-y-2">
                <li>• <strong>Double Marker Test (W11–13.6):</strong> Free $\beta$-hCG + PAPP-A for Down syndrome.</li>
                <li>• <strong>NT Ultrasound Scan:</strong> Nuchal translucency measurement.</li>
                <li>• <strong>TSH &amp; Blood Group Rh:</strong> Strict TSH &lt; 2.5 mIU/L target.</li>
              </ul>
            </div>

            {/* Trimester 2 */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-xs font-black text-teal-700">TRIMESTER 2 (W14–27)</span>
                <span className="text-3xs bg-teal-100 text-teal-800 px-2 py-0.5 rounded font-bold">Anomaly &amp; Sugar</span>
              </div>
              <ul className="text-xs text-slate-700 space-y-2">
                <li>• <strong>TIFFA Anomaly Scan (W18–20):</strong> Fetal anatomy organ check.</li>
                <li>• <strong>75g OGTT Test (W24–28):</strong> Gestational diabetes screening (1 in 5 Indian mothers).</li>
                <li>• <strong>Quadruple Marker (W15–20):</strong> If 1st-trimester test was missed.</li>
              </ul>
            </div>

            {/* Trimester 3 */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-xs font-black text-purple-700">TRIMESTER 3 (W28–40)</span>
                <span className="text-3xs bg-purple-100 text-purple-800 px-2 py-0.5 rounded font-bold">Delivery Prep</span>
              </div>
              <ul className="text-xs text-slate-700 space-y-2">
                <li>• <strong>Repeat CBC (W28 &amp; W36):</strong> Maintain Hb &ge; 11 g/dL for labor.</li>
                <li>• <strong>Growth Doppler Ultrasound:</strong> Amniotic fluid &amp; umbilical flow.</li>
                <li>• <strong>Anti-D Injection (W28):</strong> For Rh-negative mothers.</li>
              </ul>
            </div>

          </div>

          <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-teal-950 flex items-center justify-between">
            <span>Calculate your estimated due date, current gestational week, and scan roadmap:</span>
            <Link
              href="/womens-health#interactive-tools"
              className="font-bold underline text-teal-800 hover:text-teal-950"
            >
              Open Pregnancy Due Date Calculator →
            </Link>
          </div>
        </div>
      )}

      {/* ── TAB 5: BONE DENSITY & OSTEOPOROSIS DEXA GAUGE ── */}
      {activeTab === 'bone_dexa' && (
        <div className="space-y-6 animate-fadeIn">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            
            <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4 border border-slate-800">
              <h3 className="font-bold text-base text-rose-300">
                DEXA Bone Mineral Density (T-Score Meter)
              </h3>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300">
                  <div className="flex justify-between font-bold">
                    <span>T-Score &gt; -1.0</span>
                    <span>NORMAL BONE DENSITY</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-amber-950/80 border border-amber-500/40 text-amber-300">
                  <div className="flex justify-between font-bold">
                    <span>T-Score -1.0 to -2.5</span>
                    <span>OSTEOPENIA (54M Indian Women)</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-red-950/80 border border-red-500/40 text-red-300">
                  <div className="flex justify-between font-bold">
                    <span>T-Score &lt; -2.5</span>
                    <span>OSTEOPOROSIS (51M Indian Women)</span>
                  </div>
                </div>
              </div>

              <p className="text-3xs text-slate-300 leading-relaxed font-sans">
                ⚠️ <strong>Silent Crisis:</strong> 30% of Indian women above 50 experience asymptomatic vertebral micro-fractures before a major hip fracture occurs.
              </p>
            </div>

            <div className="lg:col-span-6 space-y-4 text-xs sm:text-sm text-slate-700">
              <h3 className="text-lg font-bold text-slate-950">
                Why Postmenopausal Estrogen Loss Depletes Bone Calcium
              </h3>
              <p className="leading-relaxed">
                Estrogen naturally suppresses osteoclast activity (the cells that break down bone). In the first 5–7 years following menopause, women can lose up to <strong>20% of their total bone mineral density</strong>.
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600 text-xs">
                <li><strong>Serum Calcium + Phosphorus:</strong> Evaluates circulating bone minerals.</li>
                <li><strong>Alkaline Phosphatase (ALP):</strong> Elevated in high-turnover bone resorption.</li>
                <li><strong>Vitamin D3 (25-OH):</strong> Required for intestinal calcium absorption (target &gt; 30 ng/mL).</li>
              </ul>
              <Link
                href="/womens-health/blood-tests"
                className="inline-block px-5 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-rose-700 transition-colors"
              >
                Book Bone Health Profile (₹260) →
              </Link>
            </div>

          </div>
        </div>
      )}

    </section>
  )
}
