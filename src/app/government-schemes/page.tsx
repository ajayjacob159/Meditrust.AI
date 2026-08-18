import type { Metadata } from 'next'
import Link from 'next/link'
import {
  ShieldCheck, Heart, Building2, Phone, ExternalLink,
  Sparkles, CheckCircle2, Award, FileText, ArrowRight,
  Users, Stethoscope, Pill, CreditCard, Activity, Hospital
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Government Healthcare Schemes (Central & State) — ABHA, ABDM, PM-JAY, eSanjeevani & Jan Aushadhi',
  description:
    'Complete guide to Central & Maharashtra state government healthcare schemes: Create ABHA Health ID, PM-JAY ₹5 Lakh cashless cover, eSanjeevani online doctor consultations, MJPJAY hospital benefits, and Jan Aushadhi generic medicines.',
  keywords: [
    'Government Healthcare Schemes India',
    'ABHA Card registration online',
    'ABDM Ayushman Bharat Digital Mission',
    'PM-JAY Ayushman Bharat 5 Lakh cover',
    'eSanjeevani online doctor consultation',
    'Jan Aushadhi PMBJP generic medicines Pune',
    'MJPJAY Maharashtra hospital list Pune',
    'Ruby Hall Clinic Ayushman Bharat cashless',
    'Sahyadri Hospital MJPJAY admission desk',
  ],
}

const CENTRAL_SCHEMES = [
  {
    id: 'abha-abdm',
    name: 'ABHA & ABDM (Ayushman Bharat Digital Mission)',
    tagline: '14-Digit Digital Health ID & Paperless Medical Records',
    badge: 'National Digital Mission',
    color: '#0F766E',
    icon: '🪪',
    benefit: '14-Digit Universal Health ID',
    coverage: 'Paperless health records across India',
    highlights: [
      'Create your unique 14-digit ABHA (Ayushman Bharat Health Account) in 2 minutes with Aadhaar.',
      'Digitally store all your lab reports, prescriptions, and discharge summaries in one secure health locker.',
      'Scan & Share QR codes for instant, queue-less OPD registration at government & private hospitals.',
      'Fully supported by Meditrust AI — link your Dr. Arya clinical notes directly to your ABHA ID.',
    ],
    eligibility: 'All Indian citizens with an Aadhaar or Mobile number.',
    officialLink: 'https://abha.abdm.gov.in',
    actionText: 'Create ABHA ID Online',
  },
  {
    id: 'pm-jay',
    name: 'PM-JAY (Ayushman Bharat Pradhan Mantri Jan Arogya Yojana)',
    tagline: 'World\'s Largest Cashless Health Insurance Scheme',
    badge: '₹5,00,000 / Family / Year',
    color: '#2563EB',
    icon: '🛡️',
    benefit: '₹5 Lakh Cashless Hospitalization',
    coverage: 'Secondary & Tertiary Care across 27,000+ Empanelled Hospitals',
    highlights: [
      'Comprehensive cashless inpatient care covering surgery, diagnostics, ICU, and post-hospitalization for 15 days.',
      'Zero out-of-pocket expenses for over 1,949 medical and surgical procedures.',
      'Empanelled top private and public hospitals in Pune including Ruby Hall Clinic, Sahyadri Hospital, and Sassoon General Hospital.',
      'Meditrust AI concierge helps verify your PM-JAY eligibility and coordinates VIP admission desk transfers.',
    ],
    eligibility: 'Bottom 40% vulnerable families identified under SECC 2011 database + Senior citizens aged 70+ (Universal Cover).',
    officialLink: 'https://pmjay.gov.in',
    actionText: 'Check PM-JAY Eligibility',
  },
  {
    id: 'esanjeevani',
    name: 'eSanjeevani (National Telemedicine Service)',
    tagline: 'Free Online Doctor Consultations from Home',
    badge: 'Free Govt Tele-OPD',
    color: '#7C3AED',
    icon: '👨‍⚕️',
    benefit: '100% Free Virtual Doctor Consultations',
    coverage: 'Available across all States & UTs in 22+ Languages',
    highlights: [
      'Direct video and chat consultation with registered government medical officers and AIIMS specialists.',
      'Digital e-Prescription generated instantly on your mobile phone.',
      'Connects rural Ayushman Arogya Mandirs to super-speciality medical colleges for doctor-to-doctor consults.',
      'Complements Dr. Arya AI by providing official government RMP digital signatures when required.',
    ],
    eligibility: 'Open to all Indian citizens at zero cost.',
    officialLink: 'https://esanjeevani.mohfw.gov.in',
    actionText: 'Consult on eSanjeevani',
  },
  {
    id: 'pmbjp-jan-aushadhi',
    name: 'PMBJP (Pradhan Mantri Bhartiya Janaushadhi Pariyojana)',
    tagline: 'Quality Generic Medicines at 50% to 90% Lower Cost',
    badge: 'Save 50% – 90%',
    color: '#059669',
    icon: '💊',
    benefit: '1,900+ Essential Generic Medicines & Surgical Items',
    coverage: '12,000+ Jan Aushadhi Kendras across India (120+ in Pune)',
    highlights: [
      'Government-certified bioequivalent generic drugs manufactured under WHO-GMP compliance.',
      'Major chronic savings on Diabetes (Metformin/Glimepiride), Blood Pressure (Telmisartan), Acidity (Pantoprazole), and Thyroid (Thyroxine).',
      'Tested batch-by-batch in NABL-accredited laboratories under Department of Pharmaceuticals oversight.',
      'Meditrust AI automatically compares branded prescriptions against Jan Aushadhi equivalents with doorstep delivery in Pune.',
    ],
    eligibility: 'Available to every citizen with a valid medical prescription.',
    officialLink: 'https://janaushadhi.gov.in',
    actionText: 'Find Jan Aushadhi Kendra',
  },
  {
    id: 'pmsma-jssk',
    name: 'PMSMA & JSSK (Maternal & Child Health Schemes)',
    tagline: 'Free Antenatal Care & 100% Cashless Deliveries',
    badge: 'Maternal Care',
    color: '#DB2777',
    icon: '🌺',
    benefit: 'Free Diagnostics, Delivery & Newborn Care',
    coverage: 'Public Health Facilities & Empanelled Private Clinics',
    highlights: [
      'PMSMA provides guaranteed, comprehensive antenatal checkups on the 9th of every month by OB-GYN specialists.',
      'JSSK ensures completely free normal and C-section deliveries in public hospitals with zero expense on medicines, diet, and blood transfusion.',
      'Free transport from home to hospital and drop back for mother and baby.',
      'Free medical treatment for sick infants up to 1 year of age.',
    ],
    eligibility: 'All pregnant women and infants accessing government healthcare facilities.',
    officialLink: 'https://pmsma.nhp.gov.in',
    actionText: 'Explore Maternal Benefits',
  },
]

const MAHARASHTRA_SCHEMES = [
  {
    id: 'mjpjay',
    name: 'MJPJAY (Mahatma Jyotirao Phule Jan Arogya Yojana)',
    tagline: 'Maharashtra State Government Cashless Health Scheme',
    badge: '₹5,00,000 Cashless in Maharashtra',
    color: '#D97706',
    icon: '🚩',
    benefit: '₹5 Lakh per family per year across 996 procedures',
    coverage: 'Empanelled Hospitals in Pune (Ruby Hall, Sahyadri, Jehangir, KEM, Sassoon)',
    highlights: [
      'Integrated with PM-JAY to provide unified ₹5,00,000 cashless surgical and inpatient coverage across Maharashtra.',
      'Covers critical surgeries including Cardiac Angioplasty/CABG, Oncology (Chemo/Radiation), Knee Replacement, Nephrology Dialysis, and Polytrauma.',
      'Dedicated Arogyamitra desks at every empanelled hospital for seamless document verification.',
      'Meditrust AI hotline (+91 7028025717) assists with pre-authorization and Arogyamitra coordination in Pune.',
    ],
    eligibility: 'Yellow, Orange, and White Ration Card holders in Maharashtra (Universal Health Cover).',
    officialLink: 'https://www.jeevandayee.gov.in',
    actionText: 'View MJPJAY Hospital List',
  },
]

export default function GovernmentSchemesPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-14">
      
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'GovernmentService',
            name: 'Central & Maharashtra State Healthcare Schemes Guide',
            serviceType: 'Public Healthcare Benefits, ABHA Health ID, PM-JAY, eSanjeevani, Jan Aushadhi & MJPJAY',
            provider: {
              '@type': 'MedicalOrganization',
              name: 'Meditrust Life Sciences Pvt. Ltd.',
              url: 'https://www.meditrustai.in',
              telephone: '+91 7028025717',
            },
            areaServed: {
              '@type': 'State',
              name: 'Maharashtra, India',
            },
          }),
        }}
      />

      <div className="container-main space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-900 text-xs font-bold shadow-2xs">
            <Award className="w-4 h-4 text-teal-700" />
            <span>Official Government Healthcare Initiatives (2026)</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight font-display">
            Central & State Government Healthcare Schemes
          </h1>
          <p className="text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
            Understand your rights, apply for digital health IDs (ABHA), access ₹5 Lakh cashless hospital insurance (PM-JAY & MJPJAY), consult government doctors on eSanjeevani, and save up to 90% with Jan Aushadhi generics.
          </p>
        </div>

        {/* Quick Hotline Help Banner */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-teal-900 via-slate-900 to-amber-950 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-teal-500/30">
          <div className="space-y-1 text-center md:text-left">
            <div className="text-xs font-black uppercase text-amber-400 flex items-center justify-center md:justify-start gap-1.5">
              <Phone className="w-3.5 h-3.5 animate-pulse" />
              <span>Free Government Scheme Assistance Desk</span>
            </div>
            <h3 className="text-xl font-bold">
              Need Help with Hospital Admission under PM-JAY or MJPJAY in Pune?
            </h3>
            <p className="text-xs text-slate-300">
              Call Meditrust Clinical Coordinators at <strong>+91 7028025717</strong> for cashless admission guidance at Ruby Hall & Sahyadri.
            </p>
          </div>
          <a
            href="tel:+917028025717"
            className="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm shadow transition-all flex-shrink-0"
          >
            📞 Call +91 7028025717
          </a>
        </div>

        {/* ── Section 1: Central Government Flagship Schemes ── */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-lg">
              🇮🇳
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-display">
                Central Government Flagship Schemes (MoHFW)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                National initiatives covering digital health, cashless insurance, telemedicine, and generic medicines.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CENTRAL_SCHEMES.map((scheme) => (
              <div
                key={scheme.id}
                className="rounded-3xl bg-white border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:border-teal-400 transition-all flex flex-col justify-between space-y-5 group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-3xl p-2.5 rounded-2xl bg-slate-50 border border-slate-100 shadow-2xs">
                      {scheme.icon}
                    </div>
                    <span className="text-3xs font-black uppercase tracking-wider text-teal-800 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-200">
                      {scheme.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug">
                      {scheme.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {scheme.tagline}
                    </p>
                  </div>

                  <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100 space-y-1">
                    <div className="text-3xs font-black uppercase text-slate-400">Primary Benefit</div>
                    <div className="text-xs font-bold text-teal-900">{scheme.benefit}</div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-600">
                    {scheme.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t border-slate-100 text-2xs text-slate-500">
                    <strong>Eligibility:</strong> {scheme.eligibility}
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href={scheme.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>{scheme.actionText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 2: Maharashtra State Government Schemes ── */}
        <div className="space-y-6 pt-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold text-lg">
              🚩
            </div>
            <div>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 font-display">
                Maharashtra State Healthcare Schemes (MJPJAY)
              </h2>
              <p className="text-xs sm:text-sm text-slate-500">
                Universal cashless healthcare benefits for all Maharashtra residents across Pune and regional districts.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {MAHARASHTRA_SCHEMES.map((scheme) => (
              <div
                key={scheme.id}
                className="rounded-3xl bg-white border-2 border-amber-200 p-6 sm:p-8 shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="text-3xl p-2.5 rounded-2xl bg-amber-50 border border-amber-200">
                      {scheme.icon}
                    </div>
                    <span className="text-2xs font-black uppercase tracking-wider text-amber-950 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                      {scheme.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-snug">
                      {scheme.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium mt-0.5">
                      {scheme.tagline}
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-1">
                    <div className="text-3xs font-black uppercase text-amber-800">Coverage in Pune</div>
                    <div className="text-xs font-bold text-slate-900">{scheme.coverage}</div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {scheme.highlights.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2 border-t border-slate-100 text-xs text-slate-600">
                    <strong>Eligibility:</strong> {scheme.eligibility}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={scheme.officialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs flex items-center justify-center gap-2 shadow transition-colors"
                  >
                    <span>{scheme.actionText}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href="tel:+917028025717"
                    className="py-3 px-5 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Hospital Concierge</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Section 3: Meditrust AI Integration FAQ ── */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="space-y-1">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-display">
              How Meditrust AI Works Alongside Government Schemes
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              We empower patients to maximize their government healthcare entitlements with zero confusion.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="text-lg">🪪</div>
              <h4 className="font-bold text-sm text-slate-900">ABHA Health ID Integration</h4>
              <p className="text-2xs text-slate-600 leading-relaxed">
                Connect your ABHA ID to automatically sync blood reports decoded by Dr. Arya into your national digital health locker.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="text-lg">💊</div>
              <h4 className="font-bold text-sm text-slate-900">Jan Aushadhi Price Matching</h4>
              <p className="text-2xs text-slate-600 leading-relaxed">
                Scan your doctor’s prescription on Meditrust AI to instantly view PMBJP generic substitutes and save up to 80% with doorstep delivery.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2">
              <div className="text-lg">🏥</div>
              <h4 className="font-bold text-sm text-slate-900">PM-JAY / MJPJAY TPA Desk</h4>
              <p className="text-2xs text-slate-600 leading-relaxed">
                Our 24/7 helpline coordinates with hospital TPA and Arogyamitra desks at Ruby Hall and Sahyadri for expedited pre-authorization.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
