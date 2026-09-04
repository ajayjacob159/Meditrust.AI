import type { Metadata } from 'next'
import WomensHealthToolsClient from './WomensHealthToolsClient'
import { WOMENS_HEALTH_12_TOOLS } from '@/data/womensHealthToolsData'

export const metadata: Metadata = {
  title: "12 Free Women's Health & Fertility Interactive Tools (2026) — Meditrust AI",
  description: "Free interactive medical calculators and planners: Fertility Readiness, Ovulation Tracker, IVF Cost Estimator, Hospital Delivery Cost, Egg Freezing Planner, Pregnancy Week Tracker, and Hospital Bag Checklist.",
  keywords: [
    "Free Fertility Tools India",
    "Ovulation Calculator India",
    "IVF Cost Calculator 2026",
    "Pregnancy Week by Week Calculator",
    "Hospital Delivery Cost Pune",
    "Egg Freezing Guide India",
    "Hospital Bag Checklist India",
    "Pregnancy Nutrition Planner"
  ],
  openGraph: {
    title: "12 Free Women's Health & Fertility Interactive Tools — Meditrust AI",
    description: "Clinical-grade calculators for ovulation, IVF budget, hospital delivery, egg freezing, and fertility readiness by Dr. Arya AI.",
    url: "https://www.meditrustai.in/womens-health/tools",
    type: "website"
  }
}

export default function WomensHealthToolsPage() {
  return <WomensHealthToolsClient tools={WOMENS_HEALTH_12_TOOLS} />
}
