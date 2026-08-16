import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Medical Disclaimer — Meditrust AI',
  description: 'Important medical disclaimer for Meditrust AI. This service provides health information only, not medical diagnosis or treatment.',
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-bold text-slate-900 mb-3">{title}</h2>
      <div className="text-slate-600 text-sm leading-relaxed space-y-3">{children}</div>
    </div>
  )
}

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section bg-slate-50">
        <div className="container-main max-w-3xl">
          <div className="section-tag mb-3">Legal</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Medical Disclaimer</h1>
          <p className="text-slate-500 text-sm">Last updated: August 15, 2026</p>
        </div>
      </div>

      <div className="container-main max-w-3xl py-12">
        <div className="p-6 rounded-2xl bg-amber-50 border-2 border-amber-200 mb-10">
          <p className="text-amber-900 font-bold text-base">
            ⚕️ Important: Meditrust AI provides health information for educational purposes only. It does not constitute medical advice, diagnosis, or treatment. Always consult a qualified, licensed healthcare professional for personal medical guidance.
          </p>
        </div>

        <Section title="Not a Medical Provider">
          <p>Meditrust AI, Inc. is a technology company, not a healthcare provider, medical practice, or licensed medical institution. The information provided through our platform — including but not limited to symptom analysis, medication information, and lab test guidance — is for general informational and educational purposes only.</p>
          <p>Use of Meditrust AI does not create a doctor-patient relationship between you and Meditrust AI or any of its employees, contractors, advisors, or AI systems.</p>
        </Section>

        <Section title="No Substitute for Professional Medical Advice">
          <p>The content on Meditrust AI should never be used as a substitute for professional medical advice, diagnosis, or treatment. If you have questions about a medical condition, medication, symptoms, or treatment options, you should consult a licensed physician or other qualified healthcare provider.</p>
          <p>Do not delay seeking professional medical advice, or disregard it, because of something you have read, seen, or heard through Meditrust AI.</p>
        </Section>

        <Section title="Emergency Medical Situations">
          <p>If you believe you are experiencing a medical emergency, call 911 (or your local emergency number) immediately. Do not use Meditrust AI in an emergency situation.</p>
          <p>If you have thoughts of suicide or self-harm, please contact the 988 Suicide & Crisis Lifeline by calling or texting 988.</p>
        </Section>

        <Section title="Medication Information">
          <p>Drug information on Meditrust AI is sourced from publicly available databases including the FDA, DailyMed, and RxNorm. This information may not be complete, current, or applicable to your individual situation. Drug interactions, dosing, contraindications, and safety information can vary based on individual health status, other medications, and conditions.</p>
          <p>Never start, stop, or change a medication without first consulting your prescribing physician or pharmacist.</p>
        </Section>

        <Section title="Lab Test Information">
          <p>Lab test information and provider comparisons on Meditrust AI are provided for informational purposes. Meditrust AI does not operate, own, or control any laboratory or diagnostic testing service. We do not interpret your individual lab results in a clinical capacity.</p>
          <p>Lab test prices and availability are subject to change without notice. Always confirm details directly with the lab provider.</p>
        </Section>

        <Section title="Affiliate Relationships">
          <p>Meditrust AI may receive compensation from lab providers, pharmacies, and telehealth services when you click on links or complete purchases through our platform. This compensation may influence which providers are featured or the order in which they appear. All affiliate relationships are clearly disclosed on relevant pages.</p>
        </Section>

        <Section title="Accuracy and Currency of Information">
          <p>While we strive to provide accurate and up-to-date information, medical knowledge evolves rapidly. We cannot guarantee that all information on Meditrust AI reflects the most current clinical guidelines, drug approvals, or research findings. Information should be verified with appropriate healthcare professionals.</p>
        </Section>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/privacy" className="btn-outline text-sm">Privacy Policy</Link>
          <Link href="/terms" className="btn-outline text-sm">Terms of Service</Link>
          <Link href="/hipaa" className="btn-outline text-sm">HIPAA Notice</Link>
          <Link href="/contact" className="btn-outline text-sm">Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
