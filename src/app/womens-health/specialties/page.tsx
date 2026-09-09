import type { Metadata } from 'next'
import SpecialtiesClient from './SpecialtiesClient'

export const metadata: Metadata = {
  title: "7 Women's Health Specialties & Clinical Verticals (2026) | Meditrust AI",
  description: "Comprehensive clinical care across 7 essential women's health verticals: Reproductive Health & Fertility, Menopause & Midlife, Maternal Health & 40-Week OS, Digital Therapeutics & AI, Women's Oncology, Mental Health & Neuroendocrine, and Longevity & Healthy Aging.",
  keywords: [
    "Women's Health Specialties India",
    "Reproductive Health and Fertility Technologies",
    "Menopause and Midlife Health India",
    "Maternal Health Pregnancy OS",
    "Digital Therapeutics AI Healthcare",
    "Women's Oncology Early Screening",
    "Perinatal Mental Health and PMDD",
    "Longevity and Healthy Aging Women"
  ],
  openGraph: {
    title: "7 Women's Health Specialties & Clinical Verticals — Meditrust AI",
    description: "The complete full-spectrum operating system for women's healthcare: Reproductive Health, Menopause, Maternity, Digital Therapeutics, Oncology, Mental Health, and Longevity.",
    url: "https://www.meditrustai.in/womens-health/specialties",
    siteName: "Meditrust AI",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "7 Women's Health Specialties & Clinical Verticals — Meditrust AI",
    description: "Full spectrum clinical care: Fertility, Menopause, Maternity, AI Therapeutics, Oncology, Mental Health, and Longevity."
  },
  alternates: {
    canonical: "https://www.meditrustai.in/womens-health/specialties"
  }
}

export default function SpecialtiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalWebPage",
        "name": "7 Essential Women's Health Specialties & Clinical Verticals",
        "url": "https://www.meditrustai.in/womens-health/specialties",
        "description": "Evidence-based clinical guidelines, diagnostics, and AI navigation across 7 women's health verticals.",
        "about": [
          { "@type": "MedicalSpecialty", "name": "Reproductive Endocrinology & Fertility" },
          { "@type": "MedicalSpecialty", "name": "Obstetrics & Maternal-Fetal Medicine" },
          { "@type": "MedicalSpecialty", "name": "Menopause & Midlife Endocrinology" },
          { "@type": "MedicalSpecialty", "name": "Gynecologic Oncology" },
          { "@type": "MedicalSpecialty", "name": "Perinatal Neuroendocrine & Psychiatry" },
          { "@type": "MedicalSpecialty", "name": "Preventive Longevity & Aging Biology" }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.meditrustai.in"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Women's Health",
            "item": "https://www.meditrustai.in/womens-health"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "7 Clinical Specialties",
            "item": "https://www.meditrustai.in/womens-health/specialties"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What are the 7 core specialties covered by Meditrust AI?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The 7 specialties are: 1. Reproductive Health & Fertility, 2. Menopause & Midlife Health, 3. Maternal Health (40-Week OS), 4. Digital Therapeutics & AI, 5. Women's Oncology & Early Screening, 6. Mental Health & Neuroendocrine (PMDD/PPD), and 7. Longevity & Healthy Aging."
            }
          },
          {
            "@type": "Question",
            "name": "How does Dr. Arya AI support these 7 specialties?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Dr. Arya is a 24/7 clinical AI doctor fluent in Marathi, Hindi, and English that provides instant symptom triage, explains complex diagnostic test reports, schedules 60-minute doorstep blood collections, and matches patients to verified clinical specialists."
            }
          }
        ]
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SpecialtiesClient />
    </>
  )
}
