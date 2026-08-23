import { Metadata } from 'next'
import Link from 'next/link'
import {
  FileText, BookOpen, Download, Share2, ChevronRight, ArrowRight,
  TrendingUp, AlertTriangle, ShieldCheck, Heart, Stethoscope, Building2,
  PieChart, Activity, ExternalLink, Award, CheckCircle2, Lock, Users,
  BarChart3, Layers, Calendar, Baby, HeartPulse, Sparkles
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Women's Health in India: Suffering by Life Stage & 2030 Projections | MEDITRUST AI Research",
  description: "Comprehensive national epidemiological report quantifying health burden across every life stage: adolescence, PCOS, fertility, pregnancy, menopause, and osteoporosis in Indian women (2026-2030).",
  keywords: [
    "Women's Health India Report 2026", "Suffering by Life Stage India Women", "PCOS prevalence India ICMR 43M",
    "Endometriosis 43 million India", "C-section rate private hospitals NFHS-6", "Menopause 130 million India 2030",
    "Osteoporosis women 50+ India 51 million"
  ],
  openGraph: {
    title: "Women's Health in India: Suffering by Life Stage — Current Burden & 2030 Projections",
    description: "Epidemiological analysis quantifying >500 million annual health moments across 735 million Indian women from adolescence to postmenopause.",
    url: "https://www.meditrustai.in/reports/womens-health-india-2026",
    siteName: "Meditrust AI Research",
  },
}

export default function WomensHealthReport2026Page() {
  const sourcesPart1 = [
    { id: 1, text: "NDTV — India Cuts Maternal Deaths Sharply, Nears Target On Maternal Mortality" },
    { id: 2, text: "Times of India — India's new health challenge: Obesity and diabetes surge despite nutrition gains (NFHS-6)" },
    { id: 3, text: "Business Standard — India's chronic disease surge hits women hardest, defying global trend (Lancet)" },
    { id: 4, text: "The Week — UNICEF flags sharp rise of obesity across all age groups in India" },
    { id: 5, text: "NDTV — 19% Women, 22% Men Above 15 Years Have High Blood Pressure: NFHS-6 Shows Alarming Trend" },
    { id: 6, text: "Business Standard — Women's health claims jump 37% as maternity treatment costs rise: Report" },
    { id: 7, text: "Economic Times — Economic Survey flags ultra-processed foods, rising obesity as threat to productivity" },
    { id: 8, text: "Business Standard — Economic Survey 2026: Obesity fast becoming a public health challenge" },
    { id: 9, text: "ET HealthWorld — Economic Survey 2026 flags UPF surge, obesity as major public health threat" },
    { id: 10, text: "PIB — Press Release Page (ICMR-INDIAB Study)" },
    { id: 11, text: "Business Standard — Diabetes on the rise: World diabetes day 2025 pushes for early care" },
    { id: 12, text: "ORF — Gendered Prevalence of Non-Communicable Diseases in India's Older Adults" },
    { id: 13, text: "ThePrint — Almost 50% Indian men, 37% women with hypertension don't have BP in control" },
    { id: 14, text: "Times of India — Breast, cervical cancers rising steadily; deaths also climbing, govt data shows" },
    { id: 15, text: "Business Standard — Lancet study warns of sharp rise in breast cancer cases in India, worldwide" },
    { id: 16, text: "Livemint — Breast, cervical cancers top cancer cases in Indian women: ICMR report" },
    { id: 17, text: "PMC — Small area variation in severe, moderate, and mild anemia among women and children" },
    { id: 18, text: "Frontiers — Enhancing anemia diagnostics and accessibility in India (2025 Policy Brief)" },
    { id: 19, text: "Springer Nature — Polycystic Ovary Syndrome prevalence and associated sociodemographic risk factors (ICMR 2024)" },
    { id: 20, text: "The Hindu — Study finds 17.4% prevalence of PCOS in Delhi's college-going women" },
    { id: 21, text: "UNI India — PCOS affects 44 million women in India, Kashmir reports alarming 30% prevalence" },
    { id: 22, text: "Economic Times — India records progress against child marriage, gender violence" },
    { id: 23, text: "The Hindu — Contraceptive use in India and the weight women still carry: insights from NFHS-6" },
    { id: 24, text: "ThePrint — India's C-Section crisis is hiding in plain sight in the government's own data" },
    { id: 25, text: "Medical Dialogues — Over 27 percent C-section Deliveries in 2024–25, Shows Government Data" },
    { id: 26, text: "Economic Times — India makes significant progress in reducing maternal mortality decline, on course to meet SDG target" },
    { id: 27, text: "NDTV — India Cuts Maternal Deaths Sharply, Nears Target On Maternal Mortality (Lancet GBD 2023)" },
    { id: 28, text: "Springer — Prevalence, sociodemographic determinants and self-reported reasons for hysterectomy in India" },
    { id: 29, text: "Nature — Prevalence and determinants of hysterectomy in India" },
    { id: 30, text: "Springer — Trends, age patterns, and determinants of hysterectomy in India using the National Family Health Survey data" },
    { id: 31, text: "PIB — Press Release Page (Hysterectomy Regulations)" },
    { id: 32, text: "News18 — Earlier Puberty, Earlier Menopause: The Changing Hormonal Timeline Of Indian Women (IMS Survey)" },
    { id: 33, text: "ScienceDirect — Age at menopause in India: A systematic review and meta-analysis" },
    { id: 34, text: "Indian Express — India's Menopause Moment: Experts Break the Silence Around Women's Health After 45" },
    { id: 35, text: "DT Next — Beyond hot flashes: Menopause is India's silent midlife crisis" },
    { id: 36, text: "Frontiers — Reproductive health seeking behaviour and its determinants in Indian women—a systematic review and meta-analysis" },
    { id: 37, text: "OUCI — Heterogeneities in utilization of antenatal care in Uttar Pradesh, India" },
    { id: 38, text: "Springer — Women's healthcare access: assessing the household, logistic and facility-level barriers in India" },
    { id: 39, text: "PMC — Women's healthcare access: assessing the household, logistic and facility-level barriers in India" },
    { id: 40, text: "IIT Kharagpur — Introduction and Literature Survey (Diabetes Projections)" },
    { id: 41, text: "New Indian Express — Obesity emerging as major epidemic driving India's preventable disease burden: Report" },
    { id: 42, text: "Business Standard — 40% surge in health insurance coverage among women: What data reveals" },
    { id: 43, text: "Business Standard — Average health insurance claims size rises 11.35% YoY in FY24: ACKO Report" }
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden pt-20 sm:pt-24 pb-20">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/womens-health" className="hover:text-rose-700 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold truncate">National Assessment &amp; Lifecycle Burden Report</span>
        </nav>
      </div>

      {/* ── REPORT DOCUMENT CONTAINER ── */}
      <main className="max-w-[1150px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Title Card */}
        <header className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-bold border border-rose-200">
              <FileText className="w-4 h-4 text-rose-600" />
              <span>MEDITRUST AI CLINICAL &amp; EPIDEMIOLOGICAL RESEARCH</span>
            </div>
            <span className="text-xs text-slate-500 font-mono">Published: August 2026 · NFHS-6, ICMR &amp; Lancet Data</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Women&apos;s Health in India: Suffering by Life Stage — Current Burden and 2030 Projections
          </h1>

          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-4xl">
            A comprehensive epidemiological quantification of the health continuum for India&apos;s 709 million women—from first period to menopause, non-communicable diseases, and elderly care.
          </p>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span><strong>Authors &amp; Analysis:</strong> Meditrust Clinical Health Analytics &amp; Epidemiology Group</span>
            </div>
            <div className="text-slate-400 font-mono text-3xs">
              Based on NFHS-6 (6.79 Lakh Households), ICMR-INDIAB, Lancet GBD, &amp; Economic Survey 2026
            </div>
          </div>
        </header>

        {/* Document Body */}
        <article className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-12 text-slate-800 leading-relaxed text-sm sm:text-base font-normal">
          
          {/* ── EXECUTIVE SUMMARY ── */}
          <section className="space-y-4 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight flex items-center gap-2">
              <span>Executive Summary</span>
            </h2>
            
            <p>
              India&apos;s female population of approximately <strong>709 million in 2025</strong> is projected to reach <strong>735 million by 2030</strong> and <strong>742.7 million by 2036</strong>, constituting 48.8% of the total population <sup>[1]</sup>. This report quantifies suffering across the complete women&apos;s health journey—from first period to menopause and beyond—to demonstrate that women&apos;s healthcare is not a single episodic appointment, but an unbroken lifetime continuum.
            </p>

            <p>
              The analysis reveals a staggering cumulative burden: over <strong>199.5 million women aged 15-49 suffer from anemia</strong> <sup>[2]</sup>, <strong>43.1 million women aged 18-40 meet Rotterdam criteria for PCOS</strong> <sup>[3]</sup>, <strong>43 million endure endometriosis</strong> (representing 25% of the global burden of 190 million) <sup>[4, 5]</sup>, and <strong>51 million women over 50 suffer from osteoporosis</strong> <sup>[6]</sup>.
            </p>

            <p>
              By 2030, India will have <strong>130 million women actively navigating menopausal transition</strong> within a pool of 400 million women aged 45 and older <sup>[7]</sup>.
            </p>
          </section>

          {/* ── SECTION 1: DEMOGRAPHIC FOUNDATION — THE POPULATION AT RISK ── */}
          <section className="space-y-6 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Section 1: Demographic Foundation — The Population at Risk
            </h2>

            <p>
              India&apos;s total population is projected at 1,428.6 million in 2023 and 1,514.9 million by 2030 <sup>[8]</sup>. The female share is improving from 48.5% in 2011 to a projected 48.8% by 2036 <sup>[1]</sup>, with the sex ratio rising from 943 to 952 females per 1000 males <sup>[1]</sup>.
            </p>

            <div className="space-y-2 text-xs sm:text-sm">
              <strong className="text-slate-900 block font-bold">Critical structural demographic shifts:</strong>
              <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                <li>Population under 15 years is projected to decrease from 2011 to 2036 due to declining total fertility rates <sup>[1]</sup>.</li>
                <li>Population aged 60+ is anticipated to substantially increase, from 153.1 million in 2023 to 195.1 million in 2030 <sup>[8]</sup>.</li>
                <li>Women aged 45+ numbered 96 million in 2011 and are expected to reach 401 million by 2026, spending on average <strong>30 years in postmenopausal life</strong> <sup>[9]</sup>.</li>
                <li>By 2030, the elderly population (60+) will reach 193 million (13% of total), with females significantly outnumbering males <sup>[10]</sup>.</li>
              </ul>
            </div>

            {/* Demographic Cohort Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs mt-4">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-900 font-bold">
                  <tr>
                    <th className="p-3.5 border-b border-slate-200">Female Cohort</th>
                    <th className="p-3.5 border-b border-slate-200">2025 Estimate</th>
                    <th className="p-3.5 border-b border-slate-200">2030 Projection</th>
                    <th className="p-3.5 border-b border-slate-200">2036 Projection</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50 font-bold text-slate-900">
                    <td className="p-3.5">Total Female Population</td>
                    <td className="p-3.5">709M</td>
                    <td className="p-3.5">735M</td>
                    <td className="p-3.5">742.7M</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5">Girls &lt;10 years</td>
                    <td className="p-3.5">120M</td>
                    <td className="p-3.5">123M</td>
                    <td className="p-3.5">125M</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5">Girls 10-19 years (Adolescent)</td>
                    <td className="p-3.5">120M</td>
                    <td className="p-3.5">122M</td>
                    <td className="p-3.5">124M</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5">Women 18-40 (PCOS Risk Window)</td>
                    <td className="p-3.5 font-semibold text-rose-700">215M</td>
                    <td className="p-3.5 font-semibold text-rose-700">220M</td>
                    <td className="p-3.5 font-semibold text-rose-700">225M</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5">Women 15-49 (Reproductive Age)</td>
                    <td className="p-3.5">345M</td>
                    <td className="p-3.5">350M</td>
                    <td className="p-3.5">355M</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5">Women 45+ (Perimenopause / Menopause)</td>
                    <td className="p-3.5 font-semibold text-purple-700">180M</td>
                    <td className="p-3.5 font-semibold text-purple-700">250M</td>
                    <td className="p-3.5 font-semibold text-purple-700">400M</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5">Women 60+ (Elderly Care)</td>
                    <td className="p-3.5">80M</td>
                    <td className="p-3.5">100M</td>
                    <td className="p-3.5">120M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── SECTION 2: ADOLESCENCE (10-19 YEARS) — THE FIRST HEALTH MOMENT ── */}
          <section className="space-y-6 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Section 2: Adolescence (10–19 years) — The First Health Moment
            </h2>

            <p>
              India is home to approximately <strong>120 million adolescent girls aged 10-19</strong> <sup>[11]</sup>. A two-decade systematic review found the prevalence of any menstrual disorder ranges from 3% to 87% <sup>[12]</sup>:
            </p>

            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li><strong>Dysmenorrhea (Severe Cramps):</strong> Affects <strong>46% to 76%</strong> of adolescent girls <sup>[12]</sup>.</li>
              <li><strong>Premenstrual Symptoms (PMS):</strong> Affects <strong>40% to 71%</strong> <sup>[12]</sup>.</li>
              <li><strong>Critical Care-Seeking Gap:</strong> <strong>Only one-third seek medical treatment</strong> <sup>[12]</sup>, meaning approximately <strong>36–60 million adolescent girls suffer in silence</strong>.</li>
              <li><strong>Adolescent PCOS:</strong> Pooled prevalence among girls aged 14-19 is <strong>17.74 per 100</strong> (Rotterdam criteria) <sup>[13]</sup>, reaching 22.6% in specific cohorts <sup>[14]</sup>.</li>
              <li><strong>Anemia:</strong> 59.1% of adolescent girls 15-19 are clinically anemic <sup>[15]</sup>.</li>
            </ul>

            {/* Adolescent Suffering Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs mt-4">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-900 font-bold">
                  <tr>
                    <th className="p-3.5 border-b border-slate-200">Condition</th>
                    <th className="p-3.5 border-b border-slate-200">2025 Sufferers (Adolescent)</th>
                    <th className="p-3.5 border-b border-slate-200">2030 Projected Sufferers</th>
                    <th className="p-3.5 border-b border-slate-200">Growth Driver</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Dysmenorrhea (46–76%)</td>
                    <td className="p-3.5">55M – 91M girls (10-19)</td>
                    <td className="p-3.5 font-bold text-rose-600">56M – 93M</td>
                    <td className="p-3.5">Population stable, awareness increasing diagnosis</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">PMS (40–71%)</td>
                    <td className="p-3.5">48M – 85M</td>
                    <td className="p-3.5">49M – 87M</td>
                    <td className="p-3.5">Lifestyle, stress, dietary shifts</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Anemia 15-19 (59.1%)</td>
                    <td className="p-3.5">35.5M</td>
                    <td className="p-3.5 font-bold text-rose-600">36M</td>
                    <td className="p-3.5">Persistent low dietary iron intake</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">PCOS Rotterdam (17.7%)</td>
                    <td className="p-3.5">10.6M</td>
                    <td className="p-3.5 font-bold text-rose-600">10.8M</td>
                    <td className="p-3.5">Urbanization, obesity, UPF consumption</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── SECTION 3: YOUNG WOMANHOOD (20-29 YEARS) ── */}
          <section className="space-y-6 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Section 3: Young Womanhood (20–29 years) — Irregularity, Pain, &amp; Hormonal Disruption
            </h2>

            <p>
              This cohort of ~180 million women experiences the acute convergence of menstrual disorders, PCOS manifestation, and anemia.
            </p>

            <div className="space-y-2">
              <strong className="text-slate-900 block font-bold">PCOS — The National Picture (ICMR Landmark Study):</strong>
              <p>
                India&apos;s largest multi-centric study led by ICMR (18 institutions, n=9,824 women aged 18-40) established robust national data <sup>[3]</sup>:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-700">
                <li><strong>19.6% by Rotterdam 2003 criteria</strong> <sup>[3]</sup> $\rightarrow$ Translates to <strong>43.1 million women aged 18-40</strong>.</li>
                <li><strong>7.2% by NIH 1990 criteria</strong> <sup>[3]</sup> $\rightarrow$ Translates to 15.8 million women.</li>
                <li><strong>Severe Metabolic Risk Profiles:</strong> 43.2% risk of obesity, <strong>91.9% dyslipidemia</strong>, 1 in 3 risk of non-alcoholic fatty liver disease (NAFLD), and 1 in 4 metabolic syndrome <sup>[3]</sup>.</li>
              </ul>
            </div>

            <div className="space-y-2 pt-2">
              <strong className="text-slate-900 block font-bold">Endometriosis:</strong>
              <p>
                Endometriosis affects 190 million reproductive-age women globally (10%) <sup>[5]</sup>. India bears <strong>25% of the entire global burden with an estimated 43 million women</strong> <sup>[4]</sup>. The average diagnostic delay remains an alarming <strong>8 to 12 years</strong> <sup>[16]</sup> due to symptom dismissal.
              </p>
            </div>

            {/* Young Womanhood Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs mt-4">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-900 font-bold">
                  <tr>
                    <th className="p-3.5 border-b border-slate-200">Condition</th>
                    <th className="p-3.5 border-b border-slate-200">2025 Sufferers</th>
                    <th className="p-3.5 border-b border-slate-200">2030 Sufferers</th>
                    <th className="p-3.5 border-b border-slate-200">Why Growing</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">PCOS (Rotterdam 18-40)</td>
                    <td className="p-3.5">43.1M</td>
                    <td className="p-3.5 font-bold text-rose-600">47M</td>
                    <td className="p-3.5">Urbanization, obesity epidemic, earlier screening</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Endometriosis</td>
                    <td className="p-3.5">43M</td>
                    <td className="p-3.5 font-bold text-rose-600">48M</td>
                    <td className="p-3.5">Improved detection but still severely underdiagnosed</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Anemia (15-49)</td>
                    <td className="p-3.5">199.5M</td>
                    <td className="p-3.5 font-bold text-rose-600">210M</td>
                    <td className="p-3.5">57% prevalence persistent despite nutrition programs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── SECTION 4: REPRODUCTIVE AND FERTILITY YEARS (25-35 YEARS) ── */}
          <section className="space-y-6 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Section 4: Reproductive and Fertility Years (25–35 years)
            </h2>

            <p>
              WHO estimates primary infertility in India between 3.9% (age-standardized 25-49) and 16.8% (15-49) <sup>[17]</sup>, with prevalence among couples ranging from 4% to 17% <sup>[18]</sup>.
            </p>

            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li>Applied to India&apos;s 350 million women aged 15-49, <strong>a median estimate of ~27 million women face primary infertility</strong> (with inclusive estimates reaching 58.8 million).</li>
              <li>With delayed marriage (age-specific fertility rate 20-24 falling from 135.4 to 113.6, while ASFR 35-39 rising from 32.7 to 35.6) <sup>[1]</sup>, the <strong>infertility burden will increase by 15–20% by 2030</strong>.</li>
            </ul>
          </section>

          {/* ── SECTION 5: PREGNANCY AND MOTHERHOOD (28-35 YEARS PEAK) ── */}
          <section className="space-y-6 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Section 5: Pregnancy and Motherhood (28–35 years peak)
            </h2>

            <p>
              India records more than <strong>25 million births annually</strong>. Critical maternal burdens include:
            </p>

            <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
              <li><strong>Anemia in Pregnancy:</strong> 50.3% of pregnant women are clinically anemic—<strong>every second pregnant woman in India</strong> <sup>[20]</sup>, reaching 57.2% in rural cohorts <sup>[21]</sup>.</li>
              <li><strong>Gestational Diabetes Mellitus (GDM):</strong> Ranges from 7% to 19.2% in population cohorts <sup>[22]</sup>, with <strong>1 in 3 pregnant women (33%) exhibiting abnormal glucose tolerance</strong> in tertiary hospital screenings <sup>[23]</sup> (1.75M–4.8M women annually). 50% go on to develop overt Type 2 diabetes later in life.</li>
              <li><strong>Postnatal Depression (PPD):</strong> Overall prevalence is <strong>22% in India</strong> <sup>[26]</sup> (Southern 26%, Western 21%, Urban 24%), affecting <strong>5.5 million new mothers annually</strong>, with 15% experiencing suicidal ideation.</li>
            </ul>

            {/* Pregnancy Projection Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs mt-4">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-900 font-bold">
                  <tr>
                    <th className="p-3.5 border-b border-slate-200">Complication</th>
                    <th className="p-3.5 border-b border-slate-200">Annual Cases (2025)</th>
                    <th className="p-3.5 border-b border-slate-200">Annual Cases (2030)</th>
                    <th className="p-3.5 border-b border-slate-200">Lifetime Risk</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Anemia in pregnancy</td>
                    <td className="p-3.5">12.5M (50.3%)</td>
                    <td className="p-3.5">12M (declining slowly)</td>
                    <td className="p-3.5">Contributes to 80% of maternal complications</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Gestational Diabetes (GDM)</td>
                    <td className="p-3.5">4.8M (19.2% high)</td>
                    <td className="p-3.5 font-bold text-rose-600">6M (with obesity rise)</td>
                    <td className="p-3.5">50% develop permanent Type 2 diabetes</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Postnatal Depression (PPD)</td>
                    <td className="p-3.5">5.5M (22%)</td>
                    <td className="p-3.5 font-bold text-rose-600">5.7M</td>
                    <td className="p-3.5">15% suicidal ideation risk in India</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Maternal deaths (MMR)</td>
                    <td className="p-3.5">23,800 (97/100k)</td>
                    <td className="p-3.5 font-bold text-emerald-700">Target &lt;17,500 (&lt;70/100k)</td>
                    <td className="p-3.5">SDG Target on track</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── SECTION 6: MID-LIFE TRANSITION (40-50 YEARS) ── */}
          <section className="space-y-6 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Section 6: Mid-Life Transition (40–50 years) — The Neglected Decade
            </h2>

            <p>
              India has <strong>400 million women aged 45 and older</strong> in 2026, with nearly <strong>130 million in active menopausal transition by 2030</strong> <sup>[7]</sup>. 150 million women live with symptomatic menopause <sup>[28]</sup>.
            </p>

            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm">
              <li><strong>Age of Menopause:</strong> Mean age in India is <strong>46.2 years</strong> <sup>[30]</sup> (compared to 51 globally), meaning Indian women spend <strong>&gt;1/3 of their lives in postmenopause</strong> with accelerated cardiovascular and bone risk.</li>
              <li><strong>Early Menopause Crisis:</strong> LASI-1 data shows <strong>7.4% undergo premature menopause before age 40</strong> and 17.5% experience early menopause between 40-44 <sup>[7]</sup>.</li>
              <li><strong>Symptom Profile:</strong> Vasomotor hot flushes (75.3%), psychological anxiety/depression (62.01%), physical joint ailments (32%), and genitourinary symptoms (15.53%) <sup>[29]</sup>.</li>
              <li><strong>Treatment Awareness Void:</strong> <strong>62% of women have zero knowledge of menopause management options</strong> <sup>[7]</sup>.</li>
            </ul>

            {/* Mid-Life Burden Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs mt-4">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-900 font-bold">
                  <tr>
                    <th className="p-3.5 border-b border-slate-200">Mid-Life Condition</th>
                    <th className="p-3.5 border-b border-slate-200">2025 Sufferers</th>
                    <th className="p-3.5 border-b border-slate-200">2030 Sufferers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Perimenopause (45-55)</td>
                    <td className="p-3.5">90M</td>
                    <td className="p-3.5 font-bold text-rose-600">130M</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Postmenopause 45+</td>
                    <td className="p-3.5">150M</td>
                    <td className="p-3.5 font-bold text-purple-700">200M</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Premature menopause &lt;40 (7.4%)</td>
                    <td className="p-3.5">13M (of 180M cohort)</td>
                    <td className="p-3.5">18M</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Unaware of treatments (62% no knowledge)</td>
                    <td className="p-3.5">93M</td>
                    <td className="p-3.5 font-bold text-amber-700">124M</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── SECTION 7: OLDER WOMAN (50+ YEARS) ── */}
          <section className="space-y-6 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Section 7: Older Woman (50+ years) — Osteoporosis and Chronic Disease
            </h2>

            <div className="space-y-2">
              <strong className="text-slate-900 block font-bold">Osteoporosis:</strong>
              <p>
                <strong>42.5% of women above 50 suffer from osteoporosis in India</strong> (compared to 24.6% in men) <sup>[6]</sup>. In urban Delhi studies, 44.9% had osteopenia and 42.5% osteoporosis <sup>[31]</sup>. <strong>1 in 3 women aged 50-60 suffers from osteoporosis</strong> <sup>[32]</sup>, with asymptomatic vertebral fractures reaching 30% <sup>[34]</sup>.
              </p>
              <p>
                Across 120 million women over 50 in 2030, this translates to <strong>51 million women with osteoporosis</strong> and an additional ~54 million with osteopenia.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <strong className="text-slate-900 block font-bold">The Cancer Screening Void:</strong>
              <p>
                NFHS-5 reveals that <strong>99.1% of Indian women aged 30-49 have never had clinical breast screening</strong>, and <strong>98.1% have never had cervical cancer screening</strong> <sup>[35]</sup>, despite breast and cervical cancers causing the majority of female cancer deaths.
              </p>
            </div>
          </section>

          {/* ── SECTION 8: THE LIFETIME CUMULATIVE JOURNEY — NUMBERS FOR MEDITRUST AI ── */}
          <section className="space-y-6 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Section 8: The Lifetime Cumulative Journey — Numbers for Meditrust AI
            </h2>

            <p>
              <strong>One Woman, 40+ Year Relationship Quantified:</strong> If Dr. Arya accompanies an Indian girl from age 12 to age 60+:
            </p>

            {/* Master 40-Year Continuum Table */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-900 font-bold">
                  <tr>
                    <th className="p-3.5 border-b border-slate-200">Age</th>
                    <th className="p-3.5 border-b border-slate-200">Health Moments</th>
                    <th className="p-3.5 border-b border-slate-200">Probability She Suffers</th>
                    <th className="p-3.5 border-b border-slate-200">India&apos;s 2030 Sufferers</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">12–15</td>
                    <td className="p-3.5">First period anxiety, irregular cycles</td>
                    <td className="p-3.5">70% dysmenorrhea</td>
                    <td className="p-3.5 font-semibold text-rose-700">65M girls</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">15–19</td>
                    <td className="p-3.5">Painful periods, anemia, acne</td>
                    <td className="p-3.5">59% anemia, 17.7% PCOS</td>
                    <td className="p-3.5 font-semibold text-rose-700">36M anemic, 10.8M PCOS</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">20–25</td>
                    <td className="p-3.5">Irregular cycles, weight, fertility worry</td>
                    <td className="p-3.5">19.6% PCOS Rotterdam</td>
                    <td className="p-3.5 font-semibold text-rose-700">47M PCOS</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">25–30</td>
                    <td className="p-3.5">Pre-conception, infertility workup</td>
                    <td className="p-3.5">16.8% infertility</td>
                    <td className="p-3.5 font-semibold text-rose-700">58.8M infertile</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">28–35</td>
                    <td className="p-3.5">Pregnancy: anemia, GDM, PPD</td>
                    <td className="p-3.5">50% anemia, 19% GDM, 22% PPD</td>
                    <td className="p-3.5 font-semibold text-rose-700">12M, 4.8M, 5.5M annually</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">35–45</td>
                    <td className="p-3.5">Perimenopause early symptoms</td>
                    <td className="p-3.5">25% early/premature menopause</td>
                    <td className="p-3.5 font-semibold text-rose-700">31M</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">46–55</td>
                    <td className="p-3.5">Menopause: hot flashes, bone loss</td>
                    <td className="p-3.5">75% vasomotor, 62% psychological</td>
                    <td className="p-3.5 font-semibold text-rose-700">130M menopausal</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">50–65</td>
                    <td className="p-3.5">Osteoporosis, chronic disease</td>
                    <td className="p-3.5">42.5% osteoporosis</td>
                    <td className="p-3.5 font-semibold text-rose-700">51M osteoporosis</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-bold text-slate-900">60+</td>
                    <td className="p-3.5">Multimorbidity, preventive gaps</td>
                    <td className="p-3.5">99% unscreened for cancer</td>
                    <td className="p-3.5 font-semibold text-rose-700">100M elderly women</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="p-5 rounded-2xl bg-rose-50/70 border border-rose-200 space-y-2 text-xs sm:text-sm">
              <strong className="text-rose-950 font-bold text-base block">Total Addressable Suffering Pool in India (2030):</strong>
              <p className="text-slate-700 leading-relaxed">
                • <strong>Menstrual disorders:</strong> 180M women annually<br />
                • <strong>PCOS:</strong> 47M women · <strong>Endometriosis:</strong> 48M women · <strong>Anemia:</strong> 210M women<br />
                • <strong>Infertility:</strong> 60M women · <strong>Pregnancy complications:</strong> 18M annually<br />
                • <strong>Postpartum depression:</strong> 5.7M annually · <strong>Menopause transition:</strong> 130M women<br />
                • <strong>Osteoporosis:</strong> 51M women<br />
                <strong className="text-slate-950 block pt-1 font-black">
                  Combined: Over 500 million health moments per year across 735 million women.
                </strong>
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <strong className="text-slate-900 block font-bold text-base">Why Lifetime Health Identity Matters:</strong>
              <p className="text-slate-600">
                Today an Indian woman is forced to constantly repeat her history: <em>&ldquo;My periods have always been irregular,&rdquo; &ldquo;I was diagnosed with PCOS five years ago,&rdquo; &ldquo;I had gestational diabetes in my first pregnancy.&rdquo;</em> With Meditrust AI&apos;s Lifetime Health Timeline where the woman owns and controls her records, Dr. Arya remembers the complete journey.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
              <strong className="text-slate-900 font-bold block">Economic &amp; FemTech Valuation Layer:</strong>
              <p>• India Digital Women&apos;s Health / FemTech Market: <strong>~$1.72B in 2026 to ~$3.56B by 2031 at 15.7% CAGR</strong>.</p>
              <p>• Global FemTech Market: <strong>$9.78B in 2026 to $18.98B by 2031 at 14.2% CAGR</strong> (Broader market $57.2B global, $1.92B India).</p>
            </div>
          </section>

          {/* ── CONCLUSION ── */}
          <section className="space-y-4 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Conclusion
            </h2>
            <p>
              Women&apos;s healthcare in India has historically suffered from broken, episodic point solutions: <em>Period App $\rightarrow$ Delete; Doctor Booking $\rightarrow$ Transaction Complete; Pregnancy App $\rightarrow$ Delete After Delivery</em>. The epidemiological data proves that suffering is <strong>continuous, not episodic</strong>.
            </p>
            <p>
              From 46% to 76% dysmenorrhea <sup>[12]</sup>, 57% anemia <sup>[2]</sup>, 19.6% PCOS <sup>[3]</sup>, 43 million endometriosis <sup>[4]</sup>, 22% postpartum depression <sup>[26]</sup>, 130 million in menopause <sup>[7]</sup>, to 42.5% osteoporosis over 50 <sup>[6]</sup>—each stage carries 30 to 200 million sufferers.
            </p>
            <p>
              By 2030, with 735 million females, 400 million aged 45+, and 193 million elderly <sup>[10]</sup>, the need for an accessible, understandable, personalized, continuous, and affordable companion is not optional. <strong>It is essential healthcare infrastructure.</strong>
            </p>
            <div className="p-4 rounded-2xl bg-slate-900 text-white text-center text-xs sm:text-sm font-semibold">
              ✨ MEDITRUST AI — One Woman. Every Life Stage. One Connected Health Journey.
            </div>
          </section>

          {/* ── COMPLETE SOURCES BIBLIOGRAPHY ── */}
          <section className="space-y-4 pt-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Complete Reference Sources &amp; Literature Citations (1–43)
            </h3>
            <ol className="list-decimal pl-5 space-y-1 text-3xs sm:text-2xs text-slate-500 font-mono leading-relaxed">
              {sourcesPart1.map((s) => (
                <li key={s.id}>
                  <span>{s.text}</span>
                </li>
              ))}
            </ol>
          </section>

        </article>

        {/* ── DR. ARYA CTA BANNER ── */}
        <aside className="p-6 sm:p-8 rounded-3xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="font-bold text-base text-teal-300 flex items-center justify-center sm:justify-start gap-2">
              <Stethoscope className="w-4 h-4 text-teal-400" />
              <span>Experience Connected Women&apos;s Health on MEDITRUST AI</span>
            </h3>
            <p className="text-xs text-slate-300 max-w-xl">
              Consult Dr. Arya in complete privacy, calculate your cycle milestones, or connect with verified gynecologists across Pune &amp; PCMC.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/womens-health"
              className="px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
            >
              <span>Explore Women&apos;s Health</span>
            </Link>
          </div>
        </aside>

      </main>

    </div>
  )
}
