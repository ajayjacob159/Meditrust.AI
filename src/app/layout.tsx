import type { Metadata, Viewport } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import EmergencyBanner from '@/components/layout/EmergencyBanner'

export const viewport: Viewport = {
  themeColor: '#0F766E',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.meditrustai.in'),
  title: {
    default: 'Meditrust AI — 24/7 AI Doctor & Medicine Price Savings (August 2026)',
    template: '%s | Meditrust AI',
  },
  description:
    'Consult Dr. Arya (24/7 Multilingual AI Doctor in Marathi, Hindi & English). Instant symptom triage across 15+ W.H.O. specialties, plain-English blood report explainer, save 80% with Jan Aushadhi generic substitutes, and 60-min home blood collection across 13+ labs in Pune.',
  keywords: [
    'Meditrust AI',
    'Dr Arya AI Doctor',
    'AI Doctor Online Consultation Marathi Hindi',
    'Jan Aushadhi Generic Medicine Price List 2026',
    'Tata 1mg vs PharmEasy vs Apollo vs Jan Aushadhi Generic Price',
    'Blood Test at Home Pune 60 Minutes Pickup',
    'Thyrocare vs Metropolis vs Orange Health Pune',
    'CBC Blood Report Explanation in Marathi',
    'Thyroid TSH High Normal Range Symptoms',
    'Ruby Hall Clinic Sahyadri Hospital VIP Admission Desk',
    'HbA1c Diabetes Reversal Diet Plan',
    'PCOS Hormone Blood Test Panel Cost',
    'HIPAA CDSCO ICMR AI Healthcare Platform',
    'Free AI Symptom Checker India',
  ],
  authors: [{ name: 'Meditrust AI Clinical & Engineering Team', url: 'https://www.meditrustai.in' }],
  creator: 'Meditrust Life Sciences Pvt. Ltd.',
  publisher: 'Meditrust AI',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.meditrustai.in',
    siteName: 'Meditrust AI India',
    title: 'Meditrust AI — 24/7 AI Doctor & Medicine Price Comparison',
    description:
      'Consult Dr. Arya in Marathi, Hindi & English. Get plain-language blood test explanations, save 80% on medicines, and compare 13+ diagnostic labs in Pune.',
    images: [
      {
        url: '/dr_arya.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Arya 24/7 AI Doctor — Meditrust AI',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@meditrustai',
    title: 'Meditrust AI — 24/7 AI Health Companion & Generic Price Comparator',
    description:
      'Consult Dr. Arya AI Doctor in Marathi, Hindi & English. Save up to 80% on medicines with Jan Aushadhi comparisons.',
    images: ['/dr_arya.jpg'],
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" />
        {/* Comprehensive AEO & GEO Structured Data (August 2026 Standards) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'MedicalBusiness',
                  '@id': 'https://www.meditrustai.in/#organization',
                  name: 'Meditrust Life Sciences Pvt. Ltd.',
                  alternateName: 'Meditrust AI',
                  url: 'https://www.meditrustai.in',
                  logo: 'https://www.meditrustai.in/logo.png',
                  telephone: '+91 7028025717',
                  email: 'care@meditrustlife.com',
                  address: {
                    '@type': 'PostalAddress',
                    streetAddress: 'Senapati Bapat Road / Kothrud IT Corridor',
                    addressLocality: 'Pune',
                    addressRegion: 'Maharashtra',
                    postalCode: '411038',
                    addressCountry: 'IN',
                  },
                  areaServed: [
                    { '@type': 'City', name: 'Pune' },
                    { '@type': 'State', name: 'Maharashtra' },
                    { '@type': 'Country', name: 'India' },
                  ],
                  sameAs: [
                    'https://twitter.com/meditrustai',
                    'https://linkedin.com/company/meditrust-life-sciences',
                  ],
                  medicalSpecialty: [
                    'Cardiovascular',
                    'Obstetric',
                    'Gynecologic',
                    'Oncologic',
                    'Psychiatric',
                    'Neurologic',
                    'Endocrine',
                    'Gastroenterologic',
                    'Orthopedic',
                  ],
                },
                {
                  '@type': 'WebApplication',
                  '@id': 'https://www.meditrustai.in/#webapp',
                  name: 'Meditrust AI Health & Price Comparison Platform',
                  url: 'https://www.meditrustai.in',
                  applicationCategory: 'HealthApplication',
                  operatingSystem: 'All',
                  offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'INR',
                  },
                },
                {
                  '@type': 'Physician',
                  '@id': 'https://www.meditrustai.in/#dr_arya',
                  name: 'Dr. Arya (AI Doctor)',
                  jobTitle: 'Chief AI Medical Officer & Virtual Physician',
                  medicalSpecialty: 'General Practice, Preventive Medicine, Multi-Specialty Triage',
                  worksFor: {
                    '@type': 'MedicalOrganization',
                    name: 'Meditrust Life Sciences Pvt. Ltd.',
                  },
                },
                {
                  '@type': 'FAQPage',
                  '@id': 'https://www.meditrustai.in/#faq',
                  mainEntity: [
                    {
                      '@type': 'Question',
                      name: 'How does Dr. Arya AI Doctor help with symptoms and health reports?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Dr. Arya is a 24/7 clinical AI doctor aligned with W.H.O. and ICMR guidelines that speaks in Marathi, Hindi, and English. She analyzes symptoms across 15+ medical specialties and explains complex blood test reports (CBC, Thyroid, HbA1c, Vitamin D) in plain, easy-to-understand language.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'How much can I save on medicines using Jan Aushadhi generic equivalents?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Patients save between 70% and 83% on chronic prescriptions for diabetes, hypertension, acidity, and thyroid by matching branded medications against government-certified PMBJP Jan Aushadhi generic substitutes.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'Which diagnostic labs are compared on Meditrust AI in Pune?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Meditrust AI compares live prices and turnaround times across 13+ accredited labs in Pune including Metropolis, Dr Lal PathLabs, Thyrocare, Manipal, Sahyadri, Lupin, Krsnaa, and Redcliffe, with 60-minute at-home blood collection.',
                      },
                    },
                    {
                      '@type': 'Question',
                      name: 'What is the immediate helpline number for Meditrust AI?',
                      acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'You can call the Meditrust 24/7 Clinical & Emergency Helpline directly at +91 7028025717 for immediate assistance and VIP hospital admission desks at Ruby Hall Clinic and Sahyadri Hospital.',
                      },
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-white antialiased text-slate-900 selection:bg-teal-100 selection:text-teal-900">
        <EmergencyBanner />
        <Header />
        <main id="main-content" role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
