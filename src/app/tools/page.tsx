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
  return <FloCalculatorsHubClient />
}
