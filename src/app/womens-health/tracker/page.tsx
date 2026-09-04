import type { Metadata } from 'next'
import FloHealthTrackerClient from './FloHealthTrackerClient'

export const metadata: Metadata = {
  title: "Women's Cycle & Pregnancy Health Suite™ (Flo-Inspired) — Meditrust AI",
  description: "Track your menstrual cycle, 70+ daily symptoms, 4-phase cycle syncing, 40-week pregnancy fetal fruit visualizer, anonymous doctor Q&A, and partner sharing mode.",
  keywords: [
    "Flo health alternative India",
    "Period tracker online India",
    "Cycle syncing diet plan",
    "Pregnancy week by week fruit size",
    "Secret chats womens health",
    "Cervical mucus ovulation tracker"
  ]
}

export default function FloHealthTrackerPage() {
  return <FloHealthTrackerClient />
}
