import { Metadata } from 'next'
import FloCalculatorsHubClient from './FloCalculatorsHubClient'

export const metadata: Metadata = {
  title: 'Clinical Health Calculators — Ovulation, Due Date, hCG & Period | Meditrust AI',
  description: 'Free evidence-based clinical calculators for women: Ovulation, Beta-hCG doubling time, Pregnancy Due Date (EDD), IVF & FET transfers, Menstrual cycle sync, and Ultrasound dating.',
  keywords: [
    'Ovulation calculator India',
    'Pregnancy due date calculator',
    'Beta hCG calculator',
    'IVF due date calculator',
    'Menstrual cycle calculator',
    'Implantation calculator',
    'Flo health tools online'
  ],
  openGraph: {
    title: 'Clinical Health Calculators — Meditrust AI',
    description: '10 clinical-grade calculators for ovulation, due dates, Beta-hCG kinetics, and fertility planning.',
    url: 'https://www.meditrustai.in/tools',
    siteName: 'Meditrust AI',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.meditrustai.in/tools',
  }
}

export default function FloToolsHubPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    name: 'Clinical Health Calculators Suite — Meditrust AI',
    description: 'Evidence-based clinical calculators for ovulation, Beta-hCG kinetics, pregnancy due dates, IVF transfers, and menstrual cycle tracking.',
    url: 'https://www.meditrustai.in/tools',
    publisher: {
      '@type': 'Organization',
      name: 'Meditrust AI',
      url: 'https://www.meditrustai.in',
      logo: 'https://www.meditrustai.in/logo.png',
    },
    medicalAudience: {
      '@type': 'MedicalAudience',
      audienceType: 'Patient and Healthcare Consumer',
    },
    hasPart: [
      {
        '@type': 'SoftwareApplication',
        name: 'Ovulation & Fertile Window Calculator',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'All',
        url: 'https://www.meditrustai.in/tools/ovulation-calculator',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Beta hCG Doubling Time Calculator',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'All',
        url: 'https://www.meditrustai.in/tools/hcg-calculator',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Pregnancy Due Date Calculator (EDD)',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'All',
        url: 'https://www.meditrustai.in/tools/due-date-calculator',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'IVF & FET Due Date Calculator',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'All',
        url: 'https://www.meditrustai.in/tools/ivf-due-date-calculator',
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FloCalculatorsHubClient />
    </>
  )
}
