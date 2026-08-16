'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Brain, FileText, CheckCircle2, AlertTriangle, Play, Pause,
  Volume2, X, Star, Shield, Activity, Heart, ArrowRight,
  TrendingUp, Sparkles, RefreshCw, Eye
} from 'lucide-react'

export interface SampleReport {
  id: string
  title: string
  date: string
  healthScore: number
  summary: string
  videoUrl?: string
  parameters: {
    name: string
    value: string
    normalRange: string
    status: 'normal' | 'borderline' | 'critical'
    plainExplanation: string
  }[]
}

const SAMPLE_REPORTS: SampleReport[] = [
  {
    id: 'pune-comprehensive-report',
    title: 'Comprehensive Metabolic & Lipid Panel (Pune Diagnostic Lab)',
    date: '14 Aug 2026',
    healthScore: 78,
    summary: 'Your overall health score is 78/100 (Good, with actionable improvements). Your liver and kidney markers are healthy. However, your HbA1c (6.9%) and LDL Cholesterol (142 mg/dL) require dietary optimization and slight exercise routine tweaks.',
    parameters: [
      {
        name: 'HbA1c (Glycated Hemoglobin)',
        value: '6.9%',
        normalRange: '4.0% – 5.6% (Non-diabetic), < 7.0% (Controlled)',
        status: 'borderline',
        plainExplanation: 'In simple words, this measures your average blood sugar over the last 90 days. A value of 6.9% means sugar was mildly sticky on red blood cells. Easily manageable with 30 mins daily walking & low carb diet.',
      },
      {
        name: 'LDL Bad Cholesterol',
        value: '142 mg/dL',
        normalRange: '< 100 mg/dL',
        status: 'borderline',
        plainExplanation: 'LDL is the cholesterol that tends to deposit on artery walls. 142 is moderately elevated. Reducing fried food, switching to cold-pressed oils, and eating more flaxseeds/oats helps bring this down.',
      },
      {
        name: 'SGPT / ALT (Liver Function)',
        value: '26 U/L',
        normalRange: '7 – 56 U/L',
        status: 'normal',
        plainExplanation: 'Your liver enzymes are in the optimal safety range. Indicates healthy liver metabolism and no active inflammation.',
      },
      {
        name: 'Serum Creatinine (Kidney Function)',
        value: '0.85 mg/dL',
        normalRange: '0.6 – 1.2 mg/dL',
        status: 'normal',
        plainExplanation: 'Your kidneys are filtering waste efficiently and functioning at 100% health.',
      },
      {
        name: 'Vitamin D3 (25-OH)',
        value: '14.2 ng/mL',
        normalRange: '30.0 – 100.0 ng/mL',
        status: 'critical',
        plainExplanation: 'You are significantly Vitamin D deficient (very common in urban India). This causes fatigue and body stiffness. A 60,000 IU weekly supplement for 8 weeks is typically recommended by physicians.',
      },
    ],
  },
]

export default function LabReportExplainerModal({
  isOpen,
  onClose,
  report = SAMPLE_REPORTS[0],
}: {
  isOpen: boolean
  onClose: () => void
  report?: SampleReport
}) {
  const [isPlayingVideo, setIsPlayingVideo] = useState(true)
  const [activeLang, setActiveLang] = useState<'en' | 'mr' | 'hi'>('en')

  if (!isOpen) return null

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-700 bg-green-50 border-green-200'
    if (score >= 60) return 'text-amber-700 bg-amber-50 border-amber-200'
    return 'text-red-700 bg-red-50 border-red-200'
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden border border-slate-100 my-8">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-teal-50 to-blue-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-700 text-white flex items-center justify-center shadow-teal">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-slate-900">Dr. Arya AI Lab Report & Video Explainer</h3>
                <span className="badge-teal badge text-2xs">Plain Language AI</span>
              </div>
              <p className="text-xs text-slate-500">{report.title} · {report.date}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          
          {/* Top Score & Video Section */}
          <div className="grid md:grid-cols-2 gap-6 items-center">
            
            {/* Dr Arya Video Explainer */}
            <div className="relative rounded-3xl overflow-hidden bg-slate-950 aspect-video border border-slate-800 shadow-xl group">
              <img
                src="/dr_arya.jpg"
                alt="Dr. Arya Video Explanation"
                className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-lg text-2xs text-white">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span>Dr. Arya Video Briefing</span>
                  </div>
                  <div className="flex gap-1">
                    {(['en', 'mr', 'hi'] as const).map((lang) => (
                      <button
                        key={lang}
                        onClick={() => setActiveLang(lang)}
                        className={`px-2 py-0.5 rounded text-2xs font-bold ${
                          activeLang === lang ? 'bg-teal-600 text-white' : 'bg-black/40 text-slate-300'
                        }`}
                      >
                        {lang === 'en' ? 'ENG' : lang === 'mr' ? 'मराठी' : 'हिंदी'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <button
                      onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                      className="w-10 h-10 rounded-full bg-teal-600 hover:bg-teal-500 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105"
                    >
                      {isPlayingVideo ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
                    </button>
                    <div className="text-white text-xs">
                      <div className="font-bold">
                        {activeLang === 'mr' ? 'डॉ. आर्या यांचे मराठी विश्लेषण चालू आहे' : activeLang === 'hi' ? 'डॉ. आर्या की हिंदी रिपोर्ट व्याख्या' : 'Dr. Arya Explaining Key Blood Biomarkers'}
                      </div>
                      <div className="text-2xs text-teal-200">
                        {isPlayingVideo ? '🔊 Audio playing in plain language' : 'Paused · Click to resume video'}
                      </div>
                    </div>
                  </div>
                  {/* Fake Audio Sound Wave Visualizer */}
                  {isPlayingVideo && (
                    <div className="flex items-center gap-1 h-3">
                      {[12, 24, 18, 28, 14, 26, 20, 16, 28, 22, 14, 26, 18, 24, 12].map((h, i) => (
                        <span
                          key={i}
                          className="w-1 bg-teal-400 rounded-full animate-pulse"
                          style={{ height: `${h}px`, animationDelay: `${i * 0.1}s` }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Health Score Gauge */}
            <div className="card p-6 border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    AI Health Score
                  </span>
                  <h4 className="text-2xl font-black text-slate-900 mt-0.5">
                    {report.healthScore} <span className="text-sm font-normal text-slate-400">/ 100</span>
                  </h4>
                </div>
                <div className={`px-3 py-1.5 rounded-xl border text-xs font-bold ${getScoreColor(report.healthScore)}`}>
                  {report.healthScore >= 80 ? 'Optimal Condition' : 'Moderate Attention Needed'}
                </div>
              </div>

              {/* Organ Health Breakdown */}
              <div className="space-y-2.5">
                {[
                  { name: 'Liver & Detoxification', score: 94, color: 'bg-green-500' },
                  { name: 'Kidney Function', score: 96, color: 'bg-green-500' },
                  { name: 'Metabolic & Blood Glucose', score: 72, color: 'bg-amber-500' },
                  { name: 'Cardiovascular & Lipids', score: 68, color: 'bg-amber-500' },
                  { name: 'Bone & Vitality (Vitamin D)', score: 45, color: 'bg-red-500' },
                ].map((item) => (
                  <div key={item.name} className="space-y-1">
                    <div className="flex justify-between text-2xs font-semibold text-slate-700">
                      <span>{item.name}</span>
                      <span>{item.score}%</span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                      <div
                        className={`${item.color} h-full rounded-full transition-all duration-500`}
                        style={{ width: `${item.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-slate-600 leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100">
                💡 {report.summary}
              </p>
            </div>
          </div>

          {/* Biomarkers in Plain English Table */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-teal-600" />
              Detailed Parameter Breakdown (Plain Language Translations)
            </h4>

            <div className="space-y-3">
              {report.parameters.map((param) => (
                <div
                  key={param.name}
                  className={`p-4 rounded-2xl border transition-all ${
                    param.status === 'normal'
                      ? 'bg-white border-slate-200'
                      : param.status === 'borderline'
                      ? 'bg-amber-50/40 border-amber-200'
                      : 'bg-red-50/40 border-red-200'
                  }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-slate-900">{param.name}</span>
                        <span
                          className={`badge text-2xs font-bold ${
                            param.status === 'normal'
                              ? 'badge-green'
                              : param.status === 'borderline'
                              ? 'badge-amber'
                              : 'badge-red'
                          }`}
                        >
                          {param.status.toUpperCase()}
                        </span>
                      </div>
                      <div className="text-2xs text-slate-500 mt-0.5">
                        Standard Range: {param.normalRange}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-black text-slate-900">{param.value}</div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed bg-white/70 p-2.5 rounded-xl border border-slate-100">
                    <strong className="text-teal-800">What this means in plain words:</strong> {param.plainExplanation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-sm font-bold text-teal-950">
                Want Dr. Arya to recommend targeted supplements or diet?
              </div>
              <p className="text-xs text-teal-700">
                Compare Vitamin D & cholesterol options with price match guarantee in Pune
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                href="/medication-comparison"
                onClick={onClose}
                className="btn-primary text-xs shadow-teal"
              >
                Compare Suggested Meds
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
