import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'HIPAA Notice of Privacy Practices — Meditrust AI',
  description: 'Meditrust AI HIPAA-aware privacy practices notice. Understand how we handle protected health information.',
}

export default function HipaaPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="section bg-slate-50">
        <div className="container-main max-w-3xl">
          <div className="section-tag mb-3">Legal</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">HIPAA Notice of Privacy Practices</h1>
          <p className="text-slate-500 text-sm">Effective date: August 15, 2026</p>
        </div>
      </div>

      <div className="container-main max-w-3xl py-12">
        <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100 mb-10">
          <p className="text-sm text-blue-800">
            <strong>Important:</strong> Meditrust AI is designed as a HIPAA-aware platform. While we implement HIPAA-aligned privacy standards, users should be aware that Meditrust AI may not meet the formal definition of a "covered entity" or "business associate" under HIPAA in all usage scenarios. This notice describes our privacy practices for health information.
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Your Health Information Rights</h2>
            <p>You have the right to: request a copy of your health information stored on Meditrust AI; request corrections to your health records; receive a list of disclosures we have made; request restrictions on certain uses of your information; and file a complaint if you believe your privacy rights have been violated.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">How We May Use Your Health Information</h2>
            <p><strong>For treatment purposes:</strong> To facilitate connections with healthcare providers and lab services you request.</p>
            <p><strong>For operations:</strong> To improve our AI systems, ensure service quality, and train staff — always under strict confidentiality agreements.</p>
            <p><strong>With your authorization:</strong> For any other purpose, we will obtain your explicit written consent.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Safeguards We Implement</h2>
            <ul className="space-y-2">
              {[
                'AES-256 encryption at rest for all health data',
                'TLS 1.3 encryption in transit',
                'Role-based access controls (minimum necessary principle)',
                'Annual security risk assessments',
                'Business Associate Agreements with all service providers',
                'Breach notification procedures (within 60 days of discovery)',
                'Staff HIPAA training and confidentiality agreements',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-teal-600 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">Filing a Complaint</h2>
            <p>If you believe your privacy rights have been violated, you may file a complaint with Meditrust AI at <a href="mailto:privacy@meditrustai.com" className="text-teal-700 underline">privacy@meditrustai.com</a> or with the U.S. Department of Health and Human Services Office for Civil Rights at <a href="https://www.hhs.gov/hipaa/filing-a-complaint" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline">hhs.gov/hipaa/filing-a-complaint</a>.</p>
            <p className="mt-3">We will not retaliate against you for filing a complaint.</p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/privacy" className="btn-outline text-sm">Privacy Policy</Link>
          <Link href="/disclaimer" className="btn-outline text-sm">Medical Disclaimer</Link>
        </div>
      </div>
    </div>
  )
}
