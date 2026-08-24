import type { Metadata } from 'next'
import SakhiMembershipPlans from '@/components/pricing/SakhiMembershipPlans'

export const metadata: Metadata = {
  title: 'Sakhi Membership Plans — AI Health & Women’s Care by Meditrust AI',
  description: 'One Woman. Many Life Stages. One Membership. Join Sakhi by Meditrust AI for 24/7 AI Doctor in Marathi, Hindi & English, 80% Jan Aushadhi generic savings, and 13 Pune labs comparison.',
}

export default function MembershipPage() {
  return <SakhiMembershipPlans />
}
