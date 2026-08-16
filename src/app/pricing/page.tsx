import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Star, Zap, Shield, Brain, BarChart3, FlaskConical, Calendar, Pill, Activity, Users, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing — Free & Premium AI Health Plans',
  description: 'Meditrust AI is free to get started. Upgrade to Premium for unlimited AI health checks, saved comparisons, AI lab result interpretation, and telehealth booking.',
}

const plans = [
  {
    id: 'free',
    name: 'Free',
    price: '$0',
    period: 'forever',
    tagline: 'Perfect for occasional health questions',
    color: '#0F766E',
    features: [
      { included: true, text: 'AI Symptom Checker (5 sessions/month)' },
      { included: true, text: 'Medication lookup & comparison (2 at a time)' },
      { included: true, text: 'Lab test provider comparison' },
      { included: true, text: 'Health library access' },
      { included: true, text: 'Drug interaction check (basic)' },
      { included: false, text: 'Unlimited AI health sessions' },
      { included: false, text: 'Personal health dashboard' },
      { included: false, text: 'AI lab result interpretation' },
      { included: false, text: 'Saved comparisons & history' },
      { included: false, text: 'Telehealth booking' },
      { included: false, text: 'Priority support' },
    ],
    cta: 'Start Free',
    ctaHref: '/symptom-checker',
    highlighted: false,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: '$9.99',
    period: '/month',
    tagline: 'For proactive health management',
    color: '#2563EB',
    badge: 'Most Popular',
    features: [
      { included: true, text: 'Everything in Free' },
      { included: true, text: 'Unlimited AI health sessions' },
      { included: true, text: 'Compare up to 4 medications' },
      { included: true, text: 'Personal health dashboard' },
      { included: true, text: 'AI lab result interpretation' },
      { included: true, text: 'Saved comparisons & history' },
      { included: true, text: 'Medication reminders' },
      { included: true, text: 'Telehealth booking (discounted)' },
      { included: true, text: 'Advanced drug interaction analysis' },
      { included: false, text: 'Family account (up to 5 members)' },
      { included: false, text: 'API access' },
    ],
    cta: 'Start 14-day Free Trial',
    ctaHref: '/dashboard',
    highlighted: true,
  },
  {
    id: 'family',
    name: 'Family',
    price: '$19.99',
    period: '/month',
    tagline: 'One plan, whole household',
    color: '#7C3AED',
    features: [
      { included: true, text: 'Everything in Premium' },
      { included: true, text: 'Up to 5 family members' },
      { included: true, text: 'Individual profiles per member' },
      { included: true, text: 'Shared medication tracking' },
      { included: true, text: 'Caregiver mode' },
      { included: true, text: 'AI-powered family health summaries' },
      { included: true, text: 'Telehealth booking (priority)' },
      { included: true, text: 'Dedicated support agent' },
      { included: false, text: 'API access' },
    ],
    cta: 'Start Family Trial',
    ctaHref: '/dashboard',
    highlighted: false,
  },
]

const featureRows = [
  { category: 'AI Tools', icon: Brain, items: [
    { feature: 'AI Symptom Checker', free: '5/month', premium: 'Unlimited', family: 'Unlimited' },
    { feature: 'Drug Interaction Checker', free: 'Basic', premium: 'Advanced', family: 'Advanced' },
    { feature: 'AI Lab Interpretation', free: '—', premium: '✅', family: '✅' },
    { feature: 'Medication Comparison', free: '2 drugs', premium: '4 drugs', family: '4 drugs' },
  ]},
  { category: 'Dashboard', icon: BarChart3, items: [
    { feature: 'Health Dashboard', free: '—', premium: '✅', family: '✅' },
    { feature: 'Saved Comparisons', free: '—', premium: '✅', family: '✅' },
    { feature: 'Medication Reminders', free: '—', premium: '✅', family: '✅' },
    { feature: 'Lab Result History', free: '—', premium: '✅', family: '✅' },
  ]},
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="section bg-white">
        <div className="container-main text-center">
          <div className="section-tag mb-3">Pricing</div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Simple, transparent pricing
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-3">
            Start free. Upgrade when you need more. No hidden fees.
          </p>
          <p className="text-sm text-slate-500">14-day free trial on Premium & Family · No credit card required</p>
        </div>
      </div>

      {/* Plans */}
      <div className="container-main pb-16">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`card p-8 relative ${plan.highlighted ? 'ring-2 ring-blue-500 scale-105' : ''}`}
            >
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-xs font-bold px-3 py-1 rounded-full text-white"
                  style={{ background: plan.color }}>
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <div className="text-sm font-bold uppercase tracking-widest mb-1" style={{ color: plan.color }}>
                  {plan.name}
                </div>
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                  <span className="text-slate-500 mb-1">{plan.period}</span>
                </div>
                <p className="text-sm text-slate-500">{plan.tagline}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f.text} className={`flex items-start gap-2.5 text-sm ${f.included ? 'text-slate-700' : 'text-slate-300'}`}>
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${f.included ? '' : 'opacity-30'}`}
                      style={{ color: f.included ? plan.color : undefined }} />
                    {f.text}
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaHref}
                className={`block text-center py-3 px-6 rounded-xl font-bold text-sm transition-all duration-200 ${
                  plan.highlighted
                    ? 'text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                    : 'border-2 hover:bg-slate-50'
                }`}
                style={plan.highlighted
                  ? { background: `linear-gradient(135deg, ${plan.color}, ${plan.color}cc)` }
                  : { borderColor: plan.color, color: plan.color }
                }
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Feature comparison table */}
      <div className="section bg-slate-50">
        <div className="container-main max-w-4xl">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-10">Full feature comparison</h2>
          <div className="card overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-4 border-b border-slate-100 bg-slate-50">
              <div className="p-4 text-xs font-bold text-slate-500">Feature</div>
              {['Free', 'Premium', 'Family'].map((plan) => (
                <div key={plan} className="p-4 text-center text-sm font-bold text-slate-900">{plan}</div>
              ))}
            </div>
            {featureRows.map((section) => (
              <div key={section.category}>
                <div className="px-4 py-2 bg-slate-50 border-y border-slate-100 flex items-center gap-2">
                  <section.icon className="w-4 h-4 text-teal-600" />
                  <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">{section.category}</span>
                </div>
                {section.items.map((item) => (
                  <div key={item.feature} className="grid grid-cols-4 border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <div className="p-4 text-sm text-slate-700">{item.feature}</div>
                    <div className="p-4 text-center text-sm text-slate-600">{item.free}</div>
                    <div className="p-4 text-center text-sm font-semibold text-blue-600">{item.premium}</div>
                    <div className="p-4 text-center text-sm font-semibold text-purple-600">{item.family}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust section */}
      <div className="section bg-white">
        <div className="container-main text-center max-w-3xl">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Trusted by 500,000+ users</h2>
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />)}
            <span className="text-lg font-bold text-slate-900 ml-2">4.8/5</span>
          </div>
          <p className="text-slate-600 mb-8">Cancel anytime · HIPAA-aware · No long-term contracts · Data encrypted at rest and in transit</p>
          <Link href="/symptom-checker" className="btn-primary">
            Start Free Today <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
