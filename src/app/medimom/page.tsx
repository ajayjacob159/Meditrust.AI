import type { Metadata } from 'next'
import MediMomClient from './MediMomClient'

export const metadata: Metadata = {
  title: "MediMom™ — AI Reproductive Healthcare Navigation & Commerce Platform (2026)",
  description: "AI-powered reproductive health navigation from preconception and fertility to 40-week pregnancy, delivery, and postpartum care. Connecting patients with verified specialists, doorstep NABL labs, IVF centers, and postpartum commerce.",
  keywords: [
    "MediMom Reproductive Healthcare",
    "Fertility Navigation Platform India",
    "Pregnancy Trimester Care India",
    "IVF Clinic Discovery India",
    "Postpartum Recovery Sakhi",
    "Dr Arya Reproductive AI",
    "Maternal Health Commerce India",
    "MediVault Longitudinal Health Records"
  ],
  openGraph: {
    title: "MediMom™ — AI Reproductive Healthcare Navigation & Commerce Platform",
    description: "You own the journey; providers deliver the care. AI navigation across family planning, fertility, pregnancy, hospital delivery, and postpartum care.",
    url: "https://www.meditrustai.in/medimom",
    siteName: "Meditrust AI",
    type: "website",
    locale: "en_IN"
  },
  twitter: {
    card: "summary_large_image",
    title: "MediMom™ — AI Reproductive Healthcare Navigation & Commerce",
    description: "Complete reproductive health OS: AI Preconception & Fertility Navigator, 40-Week Pregnancy OS, Doorstep Labs, and Sakhi™ Postpartum Recovery."
  },
  alternates: {
    canonical: "https://www.meditrustai.in/medimom"
  }
}

export default function MediMomPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "MediMom™ Reproductive Health Platform",
        "applicationCategory": "HealthApplication",
        "operatingSystem": "All (Web & Mobile)",
        "url": "https://www.meditrustai.in/medimom",
        "description": "AI-powered reproductive healthcare navigation and commerce platform connecting couples to doctors, diagnostics, IVF centers, hospitals, and maternity products.",
        "offers": {
          "@type": "AggregateOffer",
          "priceCurrency": "INR",
          "lowPrice": "0",
          "highPrice": "1999"
        }
      },
      {
        "@type": "MedicalWebPage",
        "name": "MediMom Comprehensive Reproductive & Maternal Care Hub",
        "url": "https://www.meditrustai.in/medimom",
        "about": [
          {
            "@type": "MedicalCondition",
            "name": "Infertility & Reproductive Health"
          },
          {
            "@type": "MedicalCondition",
            "name": "Pregnancy & Postpartum Care"
          }
        ],
        "audience": {
          "@type": "MedicalAudience",
          "audienceType": "Family Planners, Couples Trying to Conceive, Pregnant Women, and Postpartum Mothers"
        }
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
            "name": "MediMom Hub",
            "item": "https://www.meditrustai.in/medimom"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is the core difference between Meditrust MediMom and a fertility clinic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Meditrust is an independent AI navigation and longitudinal health layer. We do not own physical clinics; we own the patient journey, matching patients with accredited IVF centers, top OB-GYNs, NABL diagnostic labs, and deliver postpartum care while maintaining full longitudinal continuity."
            }
          },
          {
            "@type": "Question",
            "name": "Does MediMom cover male factor fertility?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Reproductive healthcare is a dual-partner journey. MediMom evaluates both female ovarian reserve (AMH, antral follicle count) and male semen parameters, lifestyle, and andrology care in parallel."
            }
          },
          {
            "@type": "Question",
            "name": "What is the Fourth Trimester in MediMom?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The fourth trimester is the 0–6 months following delivery, focusing on maternal recovery, perineal/C-section wound care, lochia bleeding management, lactation support, and postpartum mental health screening."
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
      <MediMomClient />
    </>
  )
}

