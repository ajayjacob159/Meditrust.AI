import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  MapPin, Phone, ShieldCheck, Stethoscope, Star, Clock,
  Calendar, Award, Building2, CheckCircle2, ChevronRight, MessageCircle
} from 'lucide-react'

interface PageProps {
  params: {
    city: string
  }
}

const CITY_DATA: Record<string, {
  name: string
  region: string
  title: string
  description: string
  overview: string
  hospitals: {
    name: string
    area: string
    specialties: string[]
    facilities: string[]
    contact: string
    address: string
  }[]
}> = {
  pune: {
    name: 'Pune',
    region: 'Maharashtra',
    title: "Gynecologists in Pune | Women's Health & Maternity Care | MEDITRUST AI",
    description: "Find verified gynecologists, obstetricians, and fertility specialists in Pune. 24/7 maternity admission desks at Ruby Hall Clinic, Sahyadri Hospital & Cloudnine.",
    overview: 'Pune has established world-class tertiary maternity hospitals, NABL diagnostic centres, and advanced laparoscopy & IVF centres across Deccan, Sassoon Road, Kothrud, Nagar Road, and Baner.',
    hospitals: [
      {
        name: 'Ruby Hall Clinic (Obstetrics & Gynecology Centre)',
        area: 'Sassoon Road & Wanowrie, Pune',
        specialties: ['High-Risk Pregnancy', 'Laparoscopic Gynecology', 'Fetal Medicine', 'PCOS Management'],
        facilities: ['Level-3 Neonatal ICU (NICU)', '24/7 Labor Delivery Suites', 'Emergency C-Section OT', 'NABH Accredited'],
        contact: '+91 7028025717 (Meditrust VIP Desk)',
        address: '40 Sassoon Road, Near Pune Railway Station, Pune 411001',
      },
      {
        name: 'Sahyadri Super Speciality Hospital',
        area: 'Deccan Gymkhana & Nagar Road, Pune',
        specialties: ['Maternal Health', 'Gynecological Oncology', 'Infertility Evaluation', 'Menopause Clinic'],
        facilities: ['24/7 In-house Blood Bank', 'Advanced 4D Ultrasound', 'Birthing Suites', 'NABL Pathology'],
        contact: '+91 7028025717 (Meditrust VIP Desk)',
        address: 'Plot No. 30 C, Erandwane, Deccan Gymkhana, Pune 411004',
      },
      {
        name: 'Cloudnine Hospital & Maternity Care',
        area: 'Shivajinagar & Kalyani Nagar, Pune',
        specialties: ['Antenatal Care', 'Painless Normal Delivery', 'Lactation Consultation', 'Pediatric Care'],
        facilities: ['Luxury Birthing Suites', 'Stem Cell Banking Tie-up', 'Pre-natal Yoga & Nutrition'],
        contact: '+91 7028025717 (Meditrust VIP Desk)',
        address: 'Axon Building, Near JW Marriott, SB Road, Shivajinagar, Pune 411016',
      },
    ],
  },
  pcmc: {
    name: 'Pimpri-Chinchwad (PCMC)',
    region: 'Pune Metropolitan Region, Maharashtra',
    title: "Gynecologists in PCMC & Nigdi | Women's Health Care | MEDITRUST AI",
    description: "Consult verified gynecologists and maternity care hospitals across Pimpri, Chinchwad, Nigdi, and Ravet. Doorstep blood pickup in 60 minutes.",
    overview: 'Pimpri-Chinchwad (PCMC) offers advanced maternal healthcare facilities, PMBJP Jan Aushadhi generic pharmacies, and top multi-specialty hospitals.',
    hospitals: [
      {
        name: 'Dr. D.Y. Patil Medical College, Hospital & Research Centre',
        area: 'Sant Tukaram Nagar, Pimpri, PCMC',
        specialties: ['Obstetrics & High-Risk Pregnancy', 'Infertility Clinic', 'Adolescent Gynecology', 'Cervical Cancer Screening'],
        facilities: ['2000+ Bed Super Speciality', 'NABH & NABL Accredited', '24/7 Blood Bank & Phlebotomy'],
        contact: '+91 7028025717 (Meditrust VIP Desk)',
        address: 'Sant Tukaram Nagar, Pimpri, Pune, Maharashtra 411018',
      },
      {
        name: 'Sterling Multispeciality Hospital',
        area: 'Nigdi Pradhikaran, PCMC',
        specialties: ['General Gynecology', 'Normal & C-Section Delivery', 'PCOS & Menstrual Care'],
        facilities: ['24/7 Emergency Maternity', 'Ultrasound Imaging', 'NICU Facility'],
        contact: '+91 7028025717 (Meditrust VIP Desk)',
        address: 'Plot No 1, Sector 27A, Near Akurdi Railway Station, Nigdi, PCMC 411044',
      },
      {
        name: 'Lokmanya Hospital',
        area: 'Chinchwad & Nigdi, PCMC',
        specialties: ['Comprehensive Women’s Health', 'Preventive Mammography', 'Bone Density DEXA'],
        facilities: ['24-Hour Emergency Triage', 'Advanced Diagnostics', 'In-house Pharmacy'],
        contact: '+91 7028025717 (Meditrust VIP Desk)',
        address: 'Telco Road, G-Block, MIDC, Chinchwad, Pune 411019',
      },
    ],
  },
}

export async function generateStaticParams() {
  return [
    { city: 'pune' },
    { city: 'pcmc' },
  ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = CITY_DATA[params.city.toLowerCase()]
  if (!city) {
    return { title: 'City Not Found | MEDITRUST AI' }
  }

  return {
    title: city.title,
    description: city.description,
    keywords: [
      `Gynecologist in ${city.name}`,
      `Best OB GYN ${city.name}`,
      `Maternity hospital in ${city.name}`,
      `PCOS doctor ${city.name}`,
      `Fertility specialist ${city.name}`,
    ],
  }
}

export default function CityGynecologistPage({ params }: PageProps) {
  const city = CITY_DATA[params.city.toLowerCase()]

  if (!city) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-900 overflow-x-hidden pt-20 sm:pt-24 pb-20">
      
      {/* ── BREADCRUMBS ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/womens-health" className="hover:text-rose-700 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">{city.name}</span>
        </nav>
      </div>

      {/* ── HERO ── */}
      <header className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-800 text-xs font-bold border border-rose-200">
          <MapPin className="w-3.5 h-3.5 text-rose-600" />
          <span>Verified Local Healthcare Network · {city.region}</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight">
          Gynecologists &amp; Maternity Care in <span className="text-rose-600">{city.name}</span>
        </h1>

        <p className="text-base text-slate-600 max-w-3xl leading-relaxed">
          {city.overview} Connect with verified obstetricians, fertility specialists, and NABL diagnostics with <strong>Dr. Arya&apos;s AI care navigation</strong>.
        </p>

        {/* Quick Triage CTA */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="/symptom-checker?specialty=gynaecology"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm shadow-sm transition-colors"
          >
            <Stethoscope className="w-4 h-4" />
            <span>Consult Dr. Arya for Triage</span>
          </Link>
          <a
            href="https://wa.me/917028025717?text=Hi%20Meditrust,%20I%20need%20a%20gynecologist%20in%20Pune"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-rose-50 text-rose-800 font-bold text-xs sm:text-sm border border-rose-300 shadow-2xs transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp Hospital Desk</span>
          </a>
        </div>
      </header>

      {/* ── HOSPITALS & CLINIC CARDS ── */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 space-y-6">
        
        <div className="flex items-center justify-between pb-3 border-b border-slate-200 text-xs font-bold text-slate-700 uppercase tracking-wider">
          <span>Verified Partner Hospitals &amp; Clinics in {city.name}</span>
          <span className="text-emerald-700">✓ 24/7 Emergency Triage Active</span>
        </div>

        <div className="space-y-6">
          {city.hospitals.map((hosp, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-slate-100 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-rose-600" />
                    <h2 className="text-xl font-bold text-slate-950">{hosp.name}</h2>
                  </div>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{hosp.area}</span>
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-3xs font-bold border border-emerald-200">
                    Verified Partner
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-600">
                <div className="space-y-2">
                  <strong className="text-slate-900 block font-bold">Key Clinical Specialties:</strong>
                  <div className="flex flex-wrap gap-1.5">
                    {hosp.specialties.map((s, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-rose-50 text-rose-800 text-3xs font-semibold border border-rose-100">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <strong className="text-slate-900 block font-bold">Facilities &amp; Diagnostics:</strong>
                  <div className="flex flex-wrap gap-1.5">
                    {hosp.facilities.map((f, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-3xs font-medium">
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                <div className="text-3xs text-slate-500 font-medium">
                  <strong className="text-slate-800">Address:</strong> {hosp.address}
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <a
                    href="tel:+917028025717"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 text-white font-bold text-3xs hover:bg-slate-800 transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call Priority Desk</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </main>

    </div>
  )
}
