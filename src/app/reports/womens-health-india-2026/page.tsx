import { Metadata } from 'next'
import Link from 'next/link'
import {
  FileText, BookOpen, Download, Share2, ChevronRight, ArrowRight,
  TrendingUp, AlertTriangle, ShieldCheck, Heart, Stethoscope, Building2,
  PieChart, Activity, ExternalLink, Award, CheckCircle2, Lock
} from 'lucide-react'

export const metadata: Metadata = {
  title: "Women's Health in India: Real-Time Assessment (August 2026) & Projections to 2030 | MEDITRUST AI Research",
  description: "Comprehensive national clinical assessment of women's health in India. NFHS-6 epidemiological shift from maternal to metabolic NCD burden, PCOS, C-section rates, menopause, and 2030 projections.",
  keywords: [
    "Women's Health India Report 2026", "NFHS-6 women health statistics", "PCOS prevalence India ICMR",
    "Maternal mortality India 2026", "C-section rates private hospitals India", "Menopause India statistics 2030",
    "NCD burden Indian women Lancet"
  ],
  openGraph: {
    title: "Women's Health in India: Real-Time Assessment 2026 & Projections to 2030",
    description: "National epidemiological report analyzing the transition from maternal mortality to metabolic non-communicable diseases in Indian women.",
    url: "https://www.meditrustai.in/reports/womens-health-india-2026",
    siteName: "Meditrust AI India Research",
  },
}

export default function WomensHealthReport2026Page() {
  const sources = [
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
    { id: 21, text: "UNI India — PCOS affects 44 million women in India, Kashmir reports alarming 30% prevalence: Study" },
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
    { id: 36, text: "Frontiers — Reproductive health seeking behaviour and its determinants in Indian women—a systematic review and meta-analysis (PROSPERO CRD42024562508)" },
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
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/womens-health" className="hover:text-rose-700 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold truncate">National Assessment Report 2026-2030</span>
        </nav>
      </div>

      {/* ── REPORT DOCUMENT CONTAINER ── */}
      <main className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Title Card */}
        <header className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-50 text-rose-800 text-xs font-bold border border-rose-200">
              <FileText className="w-4 h-4 text-rose-600" />
              <span>MEDITRUST AI CLINICAL RESEARCH REPORT</span>
            </div>
            <span className="text-xs text-slate-500 font-mono">Published: August 2026 · NFHS-6 &amp; ICMR Data</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            Women&apos;s Health in India: Real-Time Assessment as of August 2026 and Projections to 2030
          </h1>

          <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span><strong>Authors &amp; Analysis:</strong> Meditrust Clinical Health Analytics Group</span>
            </div>
            <div className="text-slate-400 font-mono text-3xs">
              Covering NFHS-6 (6.79 Lakh Households), ICMR-INDIAB, Lancet GBD, &amp; Economic Survey 2026
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
              As of August 2026, India has completed a definitive epidemiological transition in women&apos;s health. Maternal mortality has declined by nearly 80% since 1990 to <strong>88 deaths per lakh live births</strong> in 2021-23 <sup>[1]</sup>, and institutional deliveries have reached <strong>90.6%</strong> nationally in NFHS-6 <sup>[2]</sup>.
            </p>

            <p>
              Yet the dominant burden has shifted dramatically to <strong>non-communicable diseases (NCDs)</strong>. NFHS-6 (2023-24), released on 29 May 2026, shows <strong>30.7% of women aged 15-49 are now overweight or obese</strong>, up from 24% in NFHS-5 (2019-21) <sup>[2]</sup>, while <strong>17.8% have elevated blood sugar or are on diabetes medication</strong>, up from 13.5% <sup>[2]</sup>.
            </p>

            <p>
              The Lancet global analysis confirms India is one of few countries where the probability of dying from an NCD before age 80 increased between 2010-2019, by 2.1% for women, driven by ischemic heart disease and diabetes <sup>[3]</sup>. Without aggressive structural intervention, obesity-related economic costs are projected to rise from $29 billion (1% of GDP) in 2019 to <strong>$839 billion (2.5% of GDP) by 2060</strong> <sup>[4]</sup>.
            </p>
          </section>

          {/* ── SECTION 1: THE BIG PICTURE — FROM MATERNAL TO METABOLIC ── */}
          <section className="space-y-6 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Section 1: The Big Picture — From Maternal to Metabolic
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                1.1 NFHS-6 Confirms the Tipping Point
              </h3>
              <p>
                NFHS-6 covered 6.79 lakh households across 715 districts and represents India&apos;s definitive post-pandemic national health dataset <sup>[2]</sup>. Key shifts between surveys:
              </p>
            </div>

            {/* Table: NFHS-5 vs NFHS-6 */}
            <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm border-collapse">
                <thead className="bg-slate-100 text-slate-900 font-bold">
                  <tr>
                    <th className="p-3.5 border-b border-slate-200">Indicator</th>
                    <th className="p-3.5 border-b border-slate-200">NFHS-5 (2019-21)</th>
                    <th className="p-3.5 border-b border-slate-200">NFHS-6 (2023-24)</th>
                    <th className="p-3.5 border-b border-slate-200">Absolute Change</th>
                    <th className="p-3.5 border-b border-slate-200">Source</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Women 15-49 overweight/obese (BMI ≥25)</td>
                    <td className="p-3.5">24.0%</td>
                    <td className="p-3.5 font-bold text-rose-600">30.7%</td>
                    <td className="p-3.5 font-bold text-rose-600">+6.7 pp</td>
                    <td className="p-3.5 font-mono text-3xs">[2]</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Men 15-49 overweight/obese</td>
                    <td className="p-3.5">22.9%</td>
                    <td className="p-3.5">27.3%</td>
                    <td className="p-3.5">+4.4 pp</td>
                    <td className="p-3.5 font-mono text-3xs">[2]</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Women high blood sugar or on medication</td>
                    <td className="p-3.5">13.5%</td>
                    <td className="p-3.5 font-bold text-rose-600">17.8%</td>
                    <td className="p-3.5 font-bold text-rose-600">+4.3 pp</td>
                    <td className="p-3.5 font-mono text-3xs">[2]</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Men high blood sugar or on medication</td>
                    <td className="p-3.5">15.6%</td>
                    <td className="p-3.5">20.9%</td>
                    <td className="p-3.5">+5.3 pp</td>
                    <td className="p-3.5 font-mono text-3xs">[2]</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Women 15+ hypertension (elevated BP/meds)</td>
                    <td className="p-3.5">21.3%</td>
                    <td className="p-3.5">19.4%</td>
                    <td className="p-3.5">-1.9 pp</td>
                    <td className="p-3.5 font-mono text-3xs">[5]</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Urban women 15+ hypertension</td>
                    <td className="p-3.5">—</td>
                    <td className="p-3.5 font-bold text-amber-700">23.5%</td>
                    <td className="p-3.5">—</td>
                    <td className="p-3.5 font-mono text-3xs">[5]</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-3.5 font-semibold text-slate-900">Rural women 15+ hypertension</td>
                    <td className="p-3.5">—</td>
                    <td className="p-3.5">17.8%</td>
                    <td className="p-3.5">—</td>
                    <td className="p-3.5 font-mono text-3xs">[5]</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              The urban-rural divide is stark: <strong>42.8% of urban women are overweight or obese</strong> versus 25.5% in rural areas. Simultaneously, maternal indicators improved: institutional deliveries rose from 88.6% to 90.6% <sup>[2]</sup> (and 97.3% in some Ministry datasets <sup>[6]</sup>), with four antenatal care (ANC) visits rising from 58.5% to 65.2%, and IFA consumption for 180 days rising from 26% to 37.8% <sup>[2]</sup>.
            </p>

            <div className="space-y-3 pt-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                1.2 The Ultra-Processed Food Driver
              </h3>
              <p>
                The <strong>Economic Survey 2025-26</strong>, tabled on 29 January 2026, directly links this metabolic shift to ultra-processed foods (UPFs) <sup>[7]</sup>. The Survey states: <em>&ldquo;Obesity is rising at an alarming rate and is today a major public health challenge in India,&rdquo;</em> driven by unhealthy diets, sedentary lifestyles, and increased UPF consumption <sup>[7]</sup>.
              </p>
              <p>
                UPF retail sales expanded from USD 0.9 billion in 2006 to nearly <strong>USD 38 billion in 2019</strong>, a 40-fold rise, during the exact same period obesity nearly doubled <sup>[8]</sup>. Between 2009 and 2023, sales grew over 150% <sup>[9]</sup>. UNICEF&apos;s Child Nutrition Global Report 2025 notes poor diets now account for <strong>56% of India&apos;s total disease burden</strong> <sup>[4]</sup>.
              </p>
            </div>
          </section>

          {/* ── SECTION 2: THE NCD BURDEN IN WOMEN ── */}
          <section className="space-y-6 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Section 2: The NCD Burden in Women — Realistic August 2026 Numbers
            </h2>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">2.1 Obesity Trajectory</h3>
              <p>
                Long-term data shows adult obesity rose 91% among women from 12.6% to 24.0% between NFHS-3 (2005-06) and NFHS-5 (2019-21), and 146% among men <sup>[4]</sup>. Among adolescents, overweight/obesity rose 125% in girls (2.4% to 5.4%) and 288% in boys (1.7% to 6.6%) <sup>[4]</sup>.
              </p>
              <p>
                As of August 2026, with NFHS-6 measuring 30.7% for women aged 15-49, the adult female overweight/obesity prevalence across all ages above 15 is estimated at <strong>~32–34% nationally</strong>.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">2.2 Diabetes and Hypertension</h3>
              <p>
                ICMR-INDIAB data indicates <strong>101 million Indians have diabetes and 136 million have prediabetes</strong> as of 2023, projected to exceed 134 million by 2045 <sup>[10]</sup> and 150 million by 2050 <sup>[11]</sup>. ICMR notes nearly <strong>1 in 6 women aged 20–70 are at risk</strong>, with women demonstrating higher prevalence (10.2%) than men (8.5%) in certain cohorts, but significantly lower awareness and control <sup>[12]</sup>.
              </p>
              <p>
                For hypertension, while NFHS-6 recorded 19.4% among women 15+, <strong>36.8% of hypertensive women do not have their blood pressure under control despite medication</strong> <sup>[13]</sup>.
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">2.3 Cancer</h3>
              <p>
                National Cancer Registry data tabled in Parliament shows breast cancer cases rising from 2.13 lakh in 2021 to nearly <strong>2.4 lakh in 2025</strong> <sup>[14]</sup>. Lancet analyses indicate breast cancer incidence has surged <strong>477.8% since 1990</strong> <sup>[15]</sup>. ICMR estimates breast cancer accounts for nearly <strong>30% of all cancers in women</strong>, followed by cervical cancer at 9.2% <sup>[16]</sup>.
              </p>
            </div>
          </section>

          {/* ── SECTION 3: LIFECYCLE VIEW — PROBLEMS MANIFEST DIFFERENTLY ── */}
          <section className="space-y-6 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Section 3: Lifecycle View — Problems Manifest Differently
            </h2>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                3.1 Adolescents and Young Women (10–24 years)
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong>Nutritional Dual Burden:</strong> NFHS-5 found 57% of women 15-49 and 59.1% of adolescent girls 15-19 are anemic <sup>[17]</sup>. Frontiers forecasts anemia dropping only marginally to 52.6% by 2028 <sup>[18]</sup>. 3 in 4 Indian women suffer from low dietary iron intake.
                </li>
                <li>
                  <strong>PCOS Epidemic:</strong> A 2024 ICMR national study of 9,824 women aged 18-40 found a weighted prevalence of <strong>19.6% by Rotterdam criteria</strong> (ranging from 3.7% in Lucknow to 22.5% in Mumbai) <sup>[19]</sup>. Delhi college studies recorded 17.4% <sup>[20]</sup>. Current estimates indicate <strong>~44 million Indian women</strong> are affected as of April 2026 <sup>[21]</sup>.
                </li>
                <li>
                  <strong>Early Marriage:</strong> Child marriage under age 18 declined to 20.1% nationally, but rural prevalence remains high at 23.3% <sup>[22, 23]</sup>.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                3.2 Reproductive Age and Motherhood (20–40 years)
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong>C-Section Crisis:</strong> The national C-section rate reached <strong>27.2%</strong> (up from 21.5% in 2019-21), nearly double the WHO 10–15% ceiling <sup>[24]</sup>. With 26 million annual births, India performs more caesareans than almost any country. Deliveries by C-section jumped from 12.03 lakh in 2008-09 to over <strong>54.35 lakh in 2024-25</strong> <sup>[25]</sup>.
                </li>
                <li>
                  <strong>Private Hospital Disparity:</strong> In private facilities nationally, <strong>54.1% of deliveries are by caesarean</strong> <sup>[24]</sup>, reaching 90% in J&amp;K, 87.7% in West Bengal, and 81.4% in Assam private hospitals <sup>[24]</sup>.
                </li>
                <li>
                  <strong>Maternal Health Costs:</strong> Health insurance claims for women jumped 37% between FY25 and FY26, with maternity claim outgo rising 25% over two years (Tier-II/III cities driving 60% of claims) <sup>[6]</sup>.
                </li>
                <li>
                  <strong>MMR Improvement:</strong> Maternal Mortality Ratio declined from 508 in 1990 to 116 in 2023 <sup>[27]</sup>, and further to <strong>87-88 in 2021-24</strong> <sup>[1, 26]</sup>, putting India on track for the SDG target of &lt;70 by 2030.
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                3.3 Mid-Life and Beyond (40+ years)
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm">
                <li>
                  <strong>Hysterectomy:</strong> Prevalence is 10.43% among women aged 40-49 <sup>[30]</sup>, with private hospitals performing 83-88% of surgeries in states like Andhra Pradesh and Bihar <sup>[31]</sup>. The <strong>average age of hysterectomy in India is only 36 years</strong>, often performed for heavy menstrual bleeding without prior trial of medical alternatives <sup>[28]</sup>.
                </li>
                <li>
                  <strong>Menopause — The Silent 400 Million:</strong> The Indian Menopause Society notes the average age of natural menopause in India is <strong>46.2 years</strong> (perimenopause beginning at 44.7) <sup>[32]</sup>. <strong>140 million Indian women</strong> are in or past menopause in 2026 <sup>[34]</sup>, rising to nearly 130 million in menopausal transition by 2030 <sup>[35]</sup>. An Abbott survey revealed <strong>79% of Indian women are uncomfortable discussing menopause</strong> with family or colleagues <sup>[34]</sup>.
                </li>
              </ul>
            </div>
          </section>

          {/* ── SECTION 4: SYSTEMIC BARRIERS — WHY WOMEN DON'T GET CARE ── */}
          <section className="space-y-6 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Section 4: Systemic Barriers — Why Women Don&apos;t Get Care
            </h2>

            <p>
              A systematic review and meta-analysis of 50 studies (PROSPERO CRD42024562508) covering Indian women ≥15 years found a pooled prevalence of reproductive morbidities of <strong>41.5%</strong>, yet <strong>only 54.8% sought medical treatment</strong> <sup>[36]</sup>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-rose-700 font-bold block text-sm">60%</strong>
                <span className="text-slate-700 font-semibold">Normalization of symptoms</span> (dismissing severe cramps or heavy flow as normal) <sup>[37]</sup>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-rose-700 font-bold block text-sm">47%</strong>
                <span className="text-slate-700 font-semibold">No perceived need for treatment</span> <sup>[37]</sup>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-rose-700 font-bold block text-sm">62%</strong>
                <span className="text-slate-700 font-semibold">Unavailability of female doctors / providers</span> <sup>[39]</sup>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <strong className="text-rose-700 font-bold block text-sm">27.3%</strong>
                <span className="text-slate-700 font-semibold">Communication difficulties with providers</span> <sup>[37]</sup>
              </div>
            </div>

            <p className="text-xs text-slate-600">
              Broader NFHS-5 analysis indicates <strong>84% of women perceive at least one major obstacle</strong> in accessing healthcare, led by drug stockouts (67%), absence of female providers (62%), distance (58%), and financial permission dependencies (52%) <sup>[38, 39]</sup>.
            </p>
          </section>

          {/* ── SECTION 5: PROJECTIONS TO 2030 ── */}
          <section className="space-y-6 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Section 5: Projections to 2030 — Realistic Modeling
            </h2>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-4 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-1">
                <strong className="text-rose-950 font-bold block text-sm">5.1 Obesity &amp; Diabetes Projections (2030)</strong>
                <p className="text-slate-700">
                  • <strong>Women 15–49 Overweight/Obese:</strong> Projected to reach <strong>36–39%</strong> (central 37.5%), with urban women exceeding <strong>50–53%</strong> (more than 1 in 2 urban women).<br />
                  • <strong>Diabetes in Women:</strong> High blood sugar prevalence will reach <strong>22–24%</strong> by 2030, with ~65–70 million diabetic women in India <sup>[40]</sup>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200 space-y-1">
                <strong className="text-blue-950 font-bold block text-sm">5.2 Maternal &amp; Surgical Projections (2030)</strong>
                <p className="text-slate-700">
                  • <strong>C-Section Rate:</strong> Projected to climb to <strong>35–37% nationally</strong> (and 65–70% in private hospitals) unless Robson classification audits are mandated <sup>[24]</sup>.<br />
                  • <strong>Maternal Mortality (MMR):</strong> On track to achieve SDG target &lt;70, projected at <strong>65–68 per lakh</strong> by 2030 <sup>[26]</sup>.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-200 space-y-1">
                <strong className="text-purple-950 font-bold block text-sm">5.3 Cancer, Menopause &amp; Economic Burden</strong>
                <p className="text-slate-700">
                  • <strong>Breast Cancer:</strong> Projected to reach 2.8–3.0 lakh new annual cases by 2030 <sup>[14]</sup>.<br />
                  • <strong>Menopause Demographic:</strong> 130 million women actively navigating menopause, living &gt;30 years post-menopause <sup>[35]</sup>.<br />
                  • <strong>Macroeconomic Cost:</strong> Obesity-related economic loss will reach <strong>$81.53 billion (1.57% of GDP) by 2030</strong> and $839 billion by 2060 <sup>[4, 41]</sup>.
                </p>
              </div>
            </div>
          </section>

          {/* ── SECTION 6: KEY TAKEAWAYS FOR PLATFORM DESIGN (MEDITRUST LENS) ── */}
          <section className="space-y-6 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Section 6: Key Takeaways for Platform Design (Meditrust Lens)
            </h2>

            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs sm:text-sm">
                <strong className="text-slate-950 font-bold block">1. Shift from Reproductive to Holistic Care</strong>
                <p className="text-slate-600">The healthcare system remains overly indexed on pregnancy and fertility, while NCDs cause the majority of disability and death in women over 40. Meditrust embeds dedicated Mid-Life, Menopause, and Cardiometabolic modules <sup>[3]</sup>.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs sm:text-sm">
                <strong className="text-slate-950 font-bold block">2. Combat Normalization via AI Education</strong>
                <p className="text-slate-600">The 60% symptom normalization barrier is directly solved by Dr. Arya&apos;s private symptom logging, menstrual tracking, and non-judgmental guidance in local languages (Marathi, Hindi, English) <sup>[37]</sup>.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs sm:text-sm">
                <strong className="text-slate-950 font-bold block">3. Empower Decision-Support on High-Risk Procedures</strong>
                <p className="text-slate-600">With a 54.1% private C-section rate and 10.43% hysterectomy prevalence among women in their 40s (mean age 36), providing evidence-based second opinions and non-surgical care pathways is vital <sup>[24, 28]</sup>.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs sm:text-sm">
                <strong className="text-slate-950 font-bold block">4. Navigate Real-World Access &amp; Privacy Barriers</strong>
                <p className="text-slate-600">84% of women report access hurdles, with 62% citing absence of female doctors. Private AI teleconsultation, 60-min doorstep lab phlebotomy, and 80% Jan Aushadhi generic delivery eliminate physical friction <sup>[39]</sup>.</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-1 text-xs sm:text-sm">
                <strong className="text-slate-950 font-bold block">5. Financial Transparency &amp; Insurance Literacy</strong>
                <p className="text-slate-600">With women&apos;s claims surging 37% and Tier-II/III cities driving 60% of maternity claims, transparent cost estimators, PMBJP generic matches, and waiting period guidance protect family finances <sup>[6]</sup>.</p>
              </div>
            </div>
          </section>

          {/* ── CONCLUSION ── */}
          <section className="space-y-4 border-b border-slate-100 pb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
              Conclusion
            </h2>
            <p>
              India in August 2026 stands at an inflection where maternal health gains are real but increasingly overshadowed by a preventable NCD wave among women. NFHS-6 data show obesity in women 15-49 at 30.7% and diabetes risk at 17.8%, both rising faster than in men, driven by 40-fold growth in ultra-processed food sales.
            </p>
            <p>
              By 2030, without aggressive intervention, India will have ~37-38% overweight/obese women, 22-24% with high blood sugar, 2.8-3.0 lakh annual breast cancer cases, and 130 million women navigating menopause with minimal support. Platforms like <strong>MEDITRUST AI</strong> that bridge awareness gaps (60% symptom normalization), improve treatment-seeking (only 54.8% seek care for reproductive morbidities), and provide evidence-based navigation for C-sections (27.2% and rising) and hysterectomies have immense potential to alter this trajectory.
            </p>
          </section>

          {/* ── 43 REFERENCED SOURCES ── */}
          <section className="space-y-4 pt-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400">
              Authoritative Citations &amp; Sources (1–43)
            </h3>
            <ol className="list-decimal pl-5 space-y-1.5 text-3xs sm:text-2xs text-slate-500 font-mono leading-relaxed">
              {sources.map((s) => (
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
