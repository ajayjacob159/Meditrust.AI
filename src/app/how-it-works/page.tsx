import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Zap, Brain, Shield, Users, Heart, Award, ArrowRight, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'How Meditrust AI Works — AI Health Guidance Explained',
  description: 'Learn how Meditrust AI uses clinician-reviewed AI to help you check symptoms, compare medications, find home lab tests, and understand your health in plain language.',
}

const steps = [
  {
    step: '01',
    icon: '💬',
    title: 'Describe your health question',
    desc: 'Type in natural language — describe symptoms, ask about a medication, or search for a lab test. No medical jargon needed.',
    detail: [
      'Conversational chat interface',
      'Voice input supported on mobile',
      'Quick reply chips for faster input',
      'Emergency triage detection built-in',
    ],
  },
  {
    step: '02',
    icon: '🧠',
    title: 'AI analyses using clinical databases',
    desc: 'Our AI cross-references your input against peer-reviewed medical databases, FDA records, and clinical decision support systems.',
    detail: [
      'Trained on medical literature',
      'FDA, DailyMed, RxNorm integration',
      'Clinician-reviewed response guardrails',
      'Evidence graded by quality',
    ],
  },
  {
    step: '03',
    icon: '📋',
    title: 'Receive plain-language guidance',
    desc: 'You get clear, jargon-free explanations with suggested next steps — whether that\'s self-care, a lab test, or a doctor visit.',
    detail: [
      'Plain-language explanations',
      'Severity-appropriate recommendations',
      'Lab test suggestions where relevant',
      'Medication information and comparisons',
    ],
  },
  {
    step: '04',
    icon: '🏥',
    title: 'Take action with confidence',
    desc: 'Book home lab tests, compare medications, schedule telehealth, or save insights to your personal health dashboard.',
    detail: [
      'Direct lab test booking',
      'Medication comparison tool',
      'Telehealth provider booking',
      'Save results to your health dashboard',
    ],
  },
]

const principles = [
  { icon: Shield, title: 'Safety First', desc: 'Emergency detection routes users to 911 before providing any AI response. We never delay critical care.' },
  { icon: Brain, title: 'Evidence-Based', desc: 'All information is grounded in peer-reviewed research and FDA-approved clinical data — not opinion.' },
  { icon: Heart, title: 'Clinician-Reviewed', desc: 'Our medical advisory board reviews AI response frameworks and data sources quarterly.' },
  { icon: Shield, title: 'HIPAA-Aware', desc: 'Health data is encrypted, never sold, and subject to the highest privacy standards we can implement.' },
  { icon: Users, title: 'Plain Language', desc: 'We translate complex medical concepts into language anyone can understand — regardless of health literacy.' },
  { icon: Award, title: 'Transparent Limitations', desc: "We clearly state what AI can and cannot do. We are a health information tool, not a diagnostic or treatment service." },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="section bg-white">
        <div className="container-main text-center max-w-3xl">
          <div className="section-tag mb-3">How It Works</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            AI health guidance, explained simply
          </h1>
          <p className="text-xl text-slate-600">
            Meditrust AI combines advanced language models with clinician-reviewed medical databases to give you trustworthy, evidence-based health information.
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="section bg-slate-50">
        <div className="container-main max-w-4xl">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.step} className="card p-8 flex flex-col md:flex-row gap-8 items-start">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 bg-white border border-slate-100 shadow-sm">
                    {step.icon}
                  </div>
                  <div className="text-5xl font-black text-slate-100 select-none">{step.step}</div>
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h2>
                  <p className="text-slate-600 mb-5">{step.desc}</p>
                  <ul className="grid grid-cols-2 gap-2">
                    {step.detail.map((d) => (
                      <li key={d} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-teal-600 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core principles */}
      <div className="section bg-white">
        <div className="container-main">
          <div className="text-center mb-12">
            <div className="section-tag mb-3">Our Principles</div>
            <h2 className="text-3xl font-bold text-slate-900">Built on trust, transparency, and accuracy</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p) => (
              <div key={p.title} className="card p-6">
                <div className="feature-icon mb-4">
                  <p.icon className="w-6 h-6" style={{ color: '#0F766E' }} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="section bg-slate-50">
        <div className="container-main text-center max-w-2xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to try it?</h2>
          <p className="text-slate-600 mb-8">Free to start. No credit card required. HIPAA-aware platform.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/symptom-checker" className="btn-primary text-base px-8 py-4">
              Start AI Health Check <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/medication-comparison" className="btn-outline text-base px-8 py-4">
              Compare Medications
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
