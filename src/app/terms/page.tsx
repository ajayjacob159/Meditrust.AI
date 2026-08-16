import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service — Meditrust AI',
  description: 'Meditrust AI Terms of Service. Read our user agreement before using our AI health platform.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section bg-slate-50">
        <div className="container-main max-w-3xl">
          <div className="section-tag mb-3">Legal</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-500 text-sm">Last updated: August 15, 2026 · Effective: August 15, 2026</p>
        </div>
      </div>

      <div className="container-main max-w-3xl py-12 space-y-8 text-sm text-slate-600 leading-relaxed">
        {[
          {
            title: 'Acceptance of Terms',
            content: 'By accessing or using Meditrust AI, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree, please do not use our service.',
          },
          {
            title: 'Service Description',
            content: 'Meditrust AI provides an AI-powered health information platform including symptom checking, medication comparison, and lab test comparison tools. These services are for informational and educational purposes only. See our Medical Disclaimer for full details.',
          },
          {
            title: 'Eligibility',
            content: 'You must be at least 18 years old to use Meditrust AI. If you are accessing the service on behalf of a minor, you take full responsibility for their use and compliance with these terms.',
          },
          {
            title: 'Permitted Use',
            content: 'You may use Meditrust AI for lawful, personal health information purposes only. You may not: attempt to reverse-engineer our AI; scrape or harvest data; use the service for commercial purposes without our written consent; or submit false or misleading health information.',
          },
          {
            title: 'Health Information Disclaimer',
            content: 'Meditrust AI is not a licensed medical provider. Information provided is not a substitute for professional medical advice. Always consult a qualified healthcare professional. In emergencies, call 911.',
          },
          {
            title: 'Premium Subscriptions',
            content: 'Premium subscriptions are billed monthly or annually. You may cancel at any time; cancellation takes effect at the end of your current billing period. We do not offer refunds for partial months. Prices may change with 30 days notice.',
          },
          {
            title: 'Intellectual Property',
            content: "All content, trademarks, and technology on Meditrust AI are owned by Meditrust AI, Inc. You retain ownership of health data you provide. By submitting content, you grant us a limited license to use it to provide our services to you.",
          },
          {
            title: 'Limitation of Liability',
            content: 'To the maximum extent permitted by law, Meditrust AI shall not be liable for indirect, incidental, special, consequential, or punitive damages. Our total liability shall not exceed the amount you paid us in the last 12 months.',
          },
          {
            title: 'Governing Law',
            content: 'These Terms are governed by the laws of the State of California, United States. Disputes shall be resolved by binding arbitration in San Francisco, CA, except for injunctive relief which may be sought in any court.',
          },
          {
            title: 'Changes to Terms',
            content: 'We may update these Terms with 30 days notice via email or in-app notification. Continued use after that period constitutes acceptance of the new terms.',
          },
          {
            title: 'Contact',
            content: 'For terms-related questions: legal@meditrustai.com',
          },
        ].map((section) => (
          <div key={section.title}>
            <h2 className="text-xl font-bold text-slate-900 mb-3">{section.title}</h2>
            <p>{section.content}</p>
          </div>
        ))}

        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="/privacy" className="btn-outline text-sm">Privacy Policy</Link>
          <Link href="/hipaa" className="btn-outline text-sm">HIPAA Notice</Link>
          <Link href="/disclaimer" className="btn-outline text-sm">Medical Disclaimer</Link>
        </div>
      </div>
    </div>
  )
}
