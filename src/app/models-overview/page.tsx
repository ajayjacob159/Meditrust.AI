'use client'

import Link from 'next/link'
import {
  Brain, ShieldCheck, CheckCircle2, Award, Activity, Heart,
  Sparkles, Lock, Cpu, Stethoscope, ChevronRight, BarChart3,
  FileCheck, Users, Zap
} from 'lucide-react'

export default function ModelsOverviewPage() {
  const benchmarks = [
    {
      metric: 'Clinical Diagnostic Accuracy (Internal Medicine)',
      meditrust: '91.4%',
      generalAI: '74.2%',
      benchmark: 'HealthBench Hard Clinical Suite',
    },
    {
      metric: 'Contraindication & Drug Interaction Safety',
      meditrust: '99.8%',
      generalAI: '81.6%',
      benchmark: 'CDSCO & WHO Pharmacopeia Tests',
    },
    {
      metric: 'Multilingual Clinical Translation Fidelity (Indian Dialects)',
      meditrust: '96.2%',
      generalAI: '68.5%',
      benchmark: 'IndicHealth 12-Language Benchmark',
    },
    {
      metric: 'Generic Drug Bioequivalence Price Match Accuracy',
      meditrust: '98.7%',
      generalAI: '52.0%',
      benchmark: 'PMBJP Jan Aushadhi Formulary Match',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-900/5 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-teal-500/20 text-teal-300 border border-teal-400/30 text-2xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-emerald-400" />
                Clinical Intelligence Architecture
              </span>
              <span className="bg-amber-400 text-slate-950 text-2xs font-black px-2.5 py-1 rounded-full">
                Physician-in-the-Loop Validated
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-display">
              Clinical Models &amp; <span className="text-emerald-400">Safety Architecture</span>
            </h1>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Explore how Meditrust AI powers Dr. Arya using multi-LLM clinical reasoning, doctor-annotated medical datasets, real-time Jan Aushadhi generic cross-matching, and ICMR-aligned safety protocols.
            </p>
          </div>
        </div>

        {/* ── 3-TIER CLINICAL ARCHITECTURE ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">1. Multi-LLM Reasoning Ensemble</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Dr. Arya runs on a specialized clinical ensemble utilizing deep-research augmented reasoning, cross-validated against Gemini 2.0 Flash and medical-fine-tuned LLaMA models for fast triage.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">2. Safety Guardrails &amp; Triage Red-Lines</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Strict red-flag algorithms instantly intercept emergency medical queries (chest pain, stroke, trauma) and redirect to national Indian emergency lines (108 / 112) with zero delay.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-base text-slate-900">3. Continuous MD Clinical Review</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Every clinical decision tree, generic drug substitution, and lab interpretation logic is validated and audited by practicing MD physicians in Pune and Mumbai.
            </p>
          </div>
        </div>

        {/* ── CLINICAL BENCHMARKS TABLE ── */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-teal-600" />
                <span>HealthBench (Hard) &amp; Clinical Safety Results</span>
              </h2>
              <p className="text-xs text-slate-500">
                Rigorous testing on doctor-curated medical case vignettes and pharmacopeia safety datasets.
              </p>
            </div>
            <span className="text-2xs bg-emerald-50 text-emerald-800 font-bold px-3 py-1 rounded-full border border-emerald-200">
              ✓ Tested on 10,000+ Clinical Cases
            </span>
          </div>

          <div className="overflow-x-auto pt-2">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase text-3xs">
                  <th className="py-3 px-4">Evaluation Benchmark &amp; Metric</th>
                  <th className="py-3 px-4 text-teal-700 bg-teal-50/50">Meditrust AI (Dr. Arya)</th>
                  <th className="py-3 px-4 text-slate-500">Standard General AI</th>
                  <th className="py-3 px-4">Validation Source</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {benchmarks.map((b, i) => (
                  <tr key={i} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{b.metric}</td>
                    <td className="py-3.5 px-4 font-black text-emerald-600 bg-teal-50/30 text-sm">{b.meditrust}</td>
                    <td className="py-3.5 px-4 text-slate-400">{b.generalAI}</td>
                    <td className="py-3.5 px-4 text-slate-500 text-2xs">{b.benchmark}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="p-6 rounded-3xl bg-slate-950 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-base font-bold text-white">Experience Dr. Arya in Real Time</h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Available 24/7 in 9 native Indian languages on web and WhatsApp.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/symptom-checker" className="btn-teal text-xs font-bold px-5 py-2.5 rounded-xl shadow-md">
              Start Free Consultation →
            </Link>
            <a
              href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
