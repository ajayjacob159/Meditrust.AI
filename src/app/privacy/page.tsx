import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacy Policy — Meditrust AI',
  description: 'Learn how Meditrust AI collects, uses, and protects your personal health information.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
      <div className="text-slate-600 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section bg-slate-50">
        <div className="container-main max-w-3xl">
          <div className="section-tag mb-3">Legal</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-500 text-sm">Effective date: August 15, 2026 · Applies to: meditrustai.com and all Meditrust AI applications</p>
        </div>
      </div>

      <div className="container-main max-w-3xl py-12">
        <div className="p-5 rounded-2xl bg-teal-50 border border-teal-100 mb-10">
          <p className="text-sm text-teal-800"><strong>Summary:</strong> We do not sell your personal health information. We collect only what's necessary to provide our services. You can request deletion of your data at any time.</p>
        </div>

        <Section title="Information We Collect">
          <p><strong>Account data:</strong> Email address, name, and authentication credentials when you create an account.</p>
          <p><strong>Health data (optional):</strong> Symptom descriptions you enter into the AI checker, saved medications, lab results you upload, and appointment information. This data is stored only with your consent.</p>
          <p><strong>Usage data:</strong> Pages visited, features used, device type, browser, and general location (country/state level) for analytics purposes.</p>
          <p><strong>Payment data:</strong> Processed by Stripe. We never store full credit card numbers.</p>
        </Section>

        <Section title="How We Use Your Information">
          <p>To provide and improve Meditrust AI services; to personalise your health dashboard experience; to send relevant health reminders and notifications (only if you opt in); to comply with legal obligations; and to detect and prevent fraud or abuse.</p>
          <p>We do not use your health data to train our AI models without your explicit, separate consent.</p>
        </Section>

        <Section title="Information Sharing">
          <p>We do not sell personal health information to third parties. We may share data with:</p>
          <p><strong>Service providers</strong> (cloud hosting, analytics, customer support) under strict data processing agreements.</p>
          <p><strong>Lab partners</strong> only when you initiate a booking through our platform, and only the minimum data required for that booking.</p>
          <p><strong>Legal authorities</strong> only when required by law, subpoena, or court order.</p>
        </Section>

        <Section title="Data Security">
          <p>All health data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3. We conduct annual third-party security audits and maintain SOC 2 Type II compliance.</p>
        </Section>

        <Section title="Your Rights">
          <p>Depending on your jurisdiction, you have the right to: access your data, correct inaccuracies, request deletion, restrict processing, data portability, and withdraw consent at any time.</p>
          <p>To exercise any of these rights, email <a href="mailto:privacy@meditrustai.com" className="text-teal-700 underline">privacy@meditrustai.com</a> or use the in-app data controls in your account settings.</p>
        </Section>

        <Section title="Cookies">
          <p id="cookies">We use essential cookies (required for the service to function), analytics cookies (to understand usage patterns — opt-out available), and preference cookies (to remember your settings). We do not use advertising cookies or tracking pixels for ad targeting.</p>
        </Section>

        <Section title="Contact">
          <p>Privacy questions: <a href="mailto:privacy@meditrustai.com" className="text-teal-700 underline">privacy@meditrustai.com</a></p>
          <p>Data Protection Officer: <a href="mailto:dpo@meditrustai.com" className="text-teal-700 underline">dpo@meditrustai.com</a></p>
        </Section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/terms" className="btn-outline text-sm">Terms of Service</Link>
          <Link href="/hipaa" className="btn-outline text-sm">HIPAA Notice</Link>
          <Link href="/disclaimer" className="btn-outline text-sm">Medical Disclaimer</Link>
        </div>
      </div>
    </div>
  )
}
