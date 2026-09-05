import type { Metadata } from 'next'
import CorpoMomClient from './CorpoMomClient'

export const metadata: Metadata = {
  title: "Corpo Mom™ & Family Health OS — Enterprise Reproductive Health & Maternity Infrastructure (2026)",
  description: "A reproductive-health navigation and workforce-retention benefit helping employees navigate family planning, fertility, pregnancy, maternity and postpartum care without sacrificing career continuity.",
  keywords: [
    "Corpo Mom India",
    "Family Health OS",
    "Corporate Fertility Benefits India",
    "Maternity Benefit Act 26 Weeks Compliance",
    "Workplace Lactation Room Policy",
    "Female Talent Retention Corporate India",
    "PEPM Maternity Benefits",
    "Aon Voice of Women Study 2024",
    "Corporate IVF Benefits Google Accenture India",
    "Return to Work Maternity Coaching"
  ],
  openGraph: {
    title: "Corpo Mom™ — Enterprise Family Health OS for Workforce Retention",
    description: "The operating layer for corporate reproductive health. Retain female talent, reduce 18+ hours of admin friction, and provide 100% private care navigation.",
    url: "https://www.meditrustai.in/corpo-mom",
    type: "website"
  }
}

export default function CorpoMomPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Meditrust Family Health OS™ & Corpo Mom Enterprise',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'All',
    offers: {
      '@type': 'Offer',
      price: '25.00',
      priceCurrency: 'INR',
      description: 'Enterprise PEPM reproductive health and maternity navigation benefit'
    },
    description: 'A confidential reproductive-health navigation and workforce-retention operating system for employers supporting fertility, pregnancy, maternity and postpartum care.',
    featureList: [
      'Zero-Knowledge Privacy Architecture',
      'AI Preconception & Fertility Navigator',
      'Pregnancy OS 40-Week Milestone Tracker',
      '26-Week Statutory Maternity Benefit Compliance',
      'Phased Return-to-Work Coaching & Lactation Audits',
      'Employer HR Analytics Console with Anonymized Aggregation'
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CorpoMomClient />
    </>
  )
}
