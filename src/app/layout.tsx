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
    default: 'Meditrust AI — India\'s Leading 24/7 AI Health & Medicine Price Comparison Platform',
    template: '%s | Meditrust AI',
  },
  description:
    'Consult Dr. Arya (24/7 Multilingual AI Doctor in Marathi, Hindi & English). Compare medicine prices across Tata 1mg, PharmEasy & Apollo vs Jan Aushadhi (Save 80%). Compare 13+ at-home blood test labs in Pune with 60-min sample pickup.',
  keywords: [
    'Meditrust AI',
    'Dr Arya AI Doctor',
    'AI Health Assistant India',
    'Pune Blood Test at Home',
    'Thyrocare vs Metropolis vs Orange Health',
    'Tata 1mg vs PharmEasy vs Apollo Pharmacy Price Comparison',
    'Jan Aushadhi Generic Medicine Substitute',
    'Ruby Hall Clinic Sahyadri Hospital VIP Admission',
    'Online Doctor Consultation Marathi Hindi',
    'HIPAA CDSCO ICMR AI Healthcare',
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
    title: 'Meditrust AI — 24/7 AI Doctor, Medicine & Blood Test Comparison',
    description:
      'Check symptoms with Dr. Arya, compare medicine prices across Tata 1mg, PharmEasy & Apollo Pharmacy vs Jan Aushadhi (Save 80%), and book 60-min home blood collection across 13+ labs in Pune.',
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
    title: 'Meditrust AI — 24/7 AI Health Companion & Price Comparator',
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
