'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Search, Plus, X, AlertTriangle, CheckCircle2, Info,
  Brain, ChevronDown, ChevronUp, Star, DollarSign, Pill,
  Shield, ExternalLink, Filter, MessageCircle, ArrowRight,
  Upload, Sparkles, Zap, Building2
} from 'lucide-react'
import { medications, drugInteractions, type Medication } from '@/data/medications'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'
import DrAryaFloatingDoctor from '@/components/common/DrAryaFloatingDoctor'

const SEVERITY_CONFIG = {
  low: { label: 'Minor Caution', color: 'text-green-700', bg: 'bg-green-50', border: 'border-green-100', icon: CheckCircle2 },
  moderate: { label: 'Moderate Interaction', color: 'text-amber-700', bg: 'bg-amber-50', border: 'border-amber-100', icon: AlertTriangle },
  high: { label: 'Critical Interaction', color: 'text-red-700', bg: 'bg-red-50', border: 'border-red-100', icon: AlertTriangle },
}

const COMPARE_FIELDS = [
  { key: 'pharmacyPrices', label: 'Live Online Pharmacy Prices', icon: DollarSign },
  { key: 'genericSubstitute', label: 'Jan Aushadhi Generic Substitute', icon: Sparkles },
  { key: 'drugClass', label: 'Drug Class & Molecule', icon: Pill },
  { key: 'uses', label: 'Clinical Uses & Indications', icon: CheckCircle2 },
  { key: 'commonDoses', label: 'Recommended Dosage & Timing', icon: Info },
  { key: 'costRange', label: 'Offline Store MRP vs Generic', icon: DollarSign },
  { key: 'sideEffects', label: 'Common & Rare Side Effects', icon: AlertTriangle },
  { key: 'interactions', label: 'Key Drug & Food Interactions', icon: AlertTriangle },
  { key: 'rating', label: 'Clinical Efficacy & User Rating', icon: Star },
  { key: 'pregnancyCategory', label: 'Pregnancy & Nursing Safety', icon: AlertTriangle },
]

function StarRating({ value }: { value: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-3.5 h-3.5 ${i < Math.floor(value) ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}`}
        />
      ))}
      <span className="text-xs font-bold text-slate-700 ml-1">{value}/5</span>
    </div>
  )
}

function renderCellValue(field: string, med: Medication) {
  switch (field) {
    case 'pharmacyPrices':
      return (
        <div className="space-y-1.5 text-xs">
          {med.pharmacyPrices.map((p) => (
            <div
              key={p.pharmacy}
              className={`p-2 rounded-lg flex items-center justify-between ${
                p.pharmacy === 'Meditrust Direct'
                  ? 'bg-teal-50 border border-teal-200 font-bold text-teal-900'
                  : 'bg-slate-50 border border-slate-100 text-slate-700'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <span>{p.logo}</span>
                <span className="text-2xs font-semibold">{p.pharmacy}</span>
              </div>
              <div className="text-right">
                <span className="text-xs font-black">₹{p.price}</span>
                <span className="block text-3xs text-slate-500 font-normal">{p.deliveryTime}</span>
              </div>
            </div>
          ))}
        </div>
      )
    case 'genericSubstitute':
      return (
        <div className="p-3 rounded-xl bg-green-50 border border-green-200 text-xs">
          <div className="flex items-center gap-1 text-green-900 font-bold mb-1">
            <Sparkles className="w-3.5 h-3.5 text-green-600" />
            <span>{med.genericSubstitute.name}</span>
          </div>
          <div className="flex items-center justify-between text-2xs mt-2 pt-1.5 border-t border-green-200/60">
            <span className="text-green-800 font-bold">Jan Aushadhi Price: ₹{med.genericSubstitute.price}</span>
            <span className="badge-green badge text-2xs">Save {med.genericSubstitute.savingsPercentage}%</span>
          </div>
        </div>
      )
    case 'uses':
      return (
        <ul className="space-y-1">
          {med.uses.map((u) => (
            <li key={u} className="text-xs text-slate-700 flex items-start gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0 mt-1.5" />
              {u}
            </li>
          ))}
        </ul>
      )
    case 'costRange':
      return (
        <div className="space-y-1 text-xs">
          <div><span className="text-slate-500">Generic MRP:</span> <strong className="text-green-700">{med.costRange.generic}</strong></div>
          <div><span className="text-slate-500">Brand MRP:</span> <strong className="text-slate-900">{med.costRange.brand}</strong></div>
        </div>
      )
    case 'sideEffects':
      return (
        <div className="space-y-2 text-xs">
          <div>
            <div className="text-slate-500 font-semibold mb-1">Common:</div>
            <div className="flex flex-wrap gap-1">
              {med.sideEffects.mild.slice(0, 3).map((s) => (
                <span key={s} className="badge-green badge text-2xs">{s}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="text-slate-500 font-semibold mb-1">Rare / Alert:</div>
            <div className="flex flex-wrap gap-1">
              {med.sideEffects.serious.slice(0, 2).map((s) => (
                <span key={s} className="badge-red badge text-2xs">{s}</span>
              ))}
            </div>
          </div>
        </div>
      )
    case 'interactions':
      return (
        <div className="flex flex-wrap gap-1">
          {med.interactions.slice(0, 4).map((int) => (
            <span key={int} className="badge-amber badge text-2xs">{int}</span>
          ))}
        </div>
      )
    case 'rating':
      return <StarRating value={med.rating} />
    case 'drugClass':
      return <span className="badge-blue badge text-xs font-semibold">{med.drugClass}</span>
    default:
      return <span className="text-xs text-slate-700">{(med as any)[field] || '—'}</span>
  }
}

export default function MedicationComparisonPage() {
  const [selected, setSelected] = useState<Medication[]>([medications[0], medications[1]])
  const [searchQuery, setSearchQuery] = useState('')
  const [searchOpen, setSearchOpen] = useState(false)
  const [rxScannerOpen, setRxScannerOpen] = useState(false)
  const [askAiOpen, setAskAiOpen] = useState(false)
  const [aiQuestion, setAiQuestion] = useState('')
  const [aiAnswer, setAiAnswer] = useState('')
  const [aiLoading, setAiLoading] = useState(false)

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return []
    const q = searchQuery.toLowerCase()
    return medications.filter(
      (m) =>
        !selected.find((s) => s.id === m.id) &&
        (m.genericName.toLowerCase().includes(q) ||
          m.brandNames.some((b) => b.toLowerCase().includes(q)) ||
          m.drugClass.toLowerCase().includes(q) ||
          m.uses.some((u) => u.toLowerCase().includes(q)))
    )
  }, [searchQuery, selected])

  const addMedication = (med: Medication) => {
    if (selected.length < 4) {
      setSelected([...selected, med])
      setSearchQuery('')
      setSearchOpen(false)
    }
  }

  const removeMedication = (id: string) => {
    setSelected(selected.filter((m) => m.id !== id))
  }

  // Check interactions between selected medications
  const interactionWarnings = useMemo(() => {
    const warnings: { med1: string; med2: string; severity: 'low' | 'moderate' | 'high'; description: string }[] = []
    for (let i = 0; i < selected.length; i++) {
      for (let j = i + 1; j < selected.length; j++) {
        const a = selected[i]
        const b = selected[j]
        const interaction =
          drugInteractions[a.id]?.[b.id] || drugInteractions[b.id]?.[a.id]
        if (interaction) {
          warnings.push({ med1: a.brandNames[0], med2: b.brandNames[0], ...interaction })
        }
      }
    }
    return warnings
  }, [selected])

  const handleAskAI = async () => {
    if (!aiQuestion.trim()) return
    setAiLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setAiAnswer(
      `Dr. Arya AI Clinical Analysis for ${selected.map((m) => m.brandNames[0]).join(' & ')}:
1. Pricing: Ordering via Meditrust Direct or Jan Aushadhi will save you approximately 70–80% compared to standard retail pharmacies in Pune.
2. Safety: ${interactionWarnings.length > 0 ? `Alert: An interaction was detected between ${interactionWarnings.map(w => `${w.med1} and ${w.med2}`).join(', ')}. Take note of dosage gaps.` : 'No critical drug-drug contraindication detected between these selected medicines.'}
3. Delivery: Same-day express dispatch in 4 hours available across Pune & PCMC.`
    )
    setAiLoading(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-slate-100 py-8 bg-gradient-to-b from-teal-50/50 via-white to-white">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="section-tag mb-2">Real-Time Indian Medication Comparator</div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 mb-3">
                Compare Medications Side-by-Side
              </h1>
              <p className="text-slate-600 text-sm leading-relaxed">
                Compare live prices across <strong>Tata 1mg</strong>, <strong>PharmEasy</strong>, <strong>Apollo Pharmacy</strong>, and <strong>Meditrust Direct</strong> — plus discover verified <strong>Jan Aushadhi generic substitutes</strong> saving up to 80%.
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setRxScannerOpen(true)}
                className="btn-primary text-xs py-3 px-5 shadow-teal flex items-center gap-2 bg-gradient-to-r from-teal-700 to-teal-800 font-bold"
              >
                <Upload className="w-4 h-4" />
                Upload & Scan Prescription
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-main py-8">
        
        {/* Drug Selection Bar */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 items-center">
            {selected.map((med) => (
              <div
                key={med.id}
                className="flex items-center gap-2 pl-4 pr-3 py-2.5 rounded-2xl border-2 font-bold text-sm bg-white shadow-sm"
                style={{ borderColor: med.color, color: med.color }}
              >
                <span>{med.brandNames[0]}</span>
                <span className="text-xs text-slate-500 font-normal">({med.genericName.split('(')[0]})</span>
                <button
                  onClick={() => removeMedication(med.id)}
                  className="w-5 h-5 rounded-full flex items-center justify-center hover:bg-black/10 transition-colors ml-1"
                  aria-label={`Remove ${med.brandNames[0]}`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}

            {selected.length < 4 && (
              <div className="relative">
                <button
                  onClick={() => setSearchOpen(!searchOpen)}
                  className="flex items-center gap-2 pl-4 pr-3 py-2.5 rounded-2xl border-2 border-dashed border-slate-300 text-sm font-bold text-slate-600 hover:border-teal-600 hover:text-teal-800 transition-all bg-white"
                >
                  <Plus className="w-4 h-4" />
                  Add Indian Medicine
                  <span className="text-2xs opacity-60">({4 - selected.length} slots left)</span>
                </button>

                {searchOpen && (
                  <div className="absolute top-full mt-2 left-0 z-30 w-84 bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden animate-fade-in">
                    <div className="p-3 border-b border-slate-100">
                      <div className="flex items-center gap-2 bg-slate-50 rounded-xl px-3 py-2">
                        <Search className="w-4 h-4 text-slate-400" />
                        <input
                          autoFocus
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          placeholder="Search e.g. Augmentin, Glycomet, Telma..."
                          className="flex-1 text-xs bg-transparent outline-none text-slate-900 placeholder-slate-400 font-semibold"
                        />
                      </div>
                    </div>
                    <div className="max-h-64 overflow-y-auto">
                      {searchQuery === '' ? (
                        <div className="p-3 space-y-1">
                          <p className="text-2xs text-slate-400 font-bold uppercase tracking-wider mb-2">
                            Top Prescribed in Pune / India:
                          </p>
                          {medications
                            .filter((m) => !selected.find((s) => s.id === m.id))
                            .map((med) => (
                              <button
                                key={med.id}
                                onClick={() => addMedication(med)}
                                className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-teal-50/50 transition-colors flex items-center justify-between gap-2 border-b border-slate-50 last:border-0"
                              >
                                <div>
                                  <div className="text-xs font-bold text-slate-900">{med.brandNames[0]}</div>
                                  <div className="text-2xs text-slate-500">{med.genericName.slice(0, 35)}...</div>
                                </div>
                                <Plus className="w-4 h-4 text-teal-600" />
                              </button>
                            ))}
                        </div>
                      ) : searchResults.length > 0 ? (
                        <div className="p-3 space-y-1">
                          {searchResults.map((med) => (
                            <button
                              key={med.id}
                              onClick={() => addMedication(med)}
                              className="w-full text-left px-3 py-2.5 rounded-xl hover:bg-teal-50 transition-colors flex items-center justify-between gap-2"
                            >
                              <div>
                                <div className="text-xs font-bold text-slate-900">{med.brandNames[0]}</div>
                                <div className="text-2xs text-slate-500">{med.genericName}</div>
                              </div>
                              <Plus className="w-4 h-4 text-teal-600" />
                            </button>
                          ))}
                        </div>
                      ) : (
                        <div className="p-6 text-center text-xs text-slate-500">
                          No matching Indian medicine found for "{searchQuery}"
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Ask AI Doctor Button */}
            <button
              onClick={() => setAskAiOpen(true)}
              className="ml-auto flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs font-bold border-2 border-teal-600 text-teal-800 bg-teal-50 hover:bg-teal-100 transition-all"
            >
              <Brain className="w-4 h-4 text-teal-700" />
              Ask Dr. Arya About These Meds
            </button>
          </div>
        </div>

        {/* Drug Interaction Alerts */}
        {interactionWarnings.length > 0 && (
          <div className="mb-6 space-y-3">
            <h3 className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-500" />
              Drug Interaction Alerts:
            </h3>
            {interactionWarnings.map((w, i) => {
              const config = SEVERITY_CONFIG[w.severity]
              return (
                <div key={i} className={`flex items-start gap-3 p-4 rounded-2xl border ${config.bg} ${config.border}`}>
                  <config.icon className={`w-5 h-5 flex-shrink-0 mt-0.5 ${config.color}`} />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-sm font-bold ${config.color}`}>{w.med1} + {w.med2}</span>
                      <span className={`badge text-2xs font-bold ${config.bg} ${config.color} border ${config.border}`}>
                        {config.label}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">{w.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Comparison Table */}
        {selected.length >= 1 && (
          <div className="card overflow-hidden border border-slate-200 shadow-xl bg-white">
            
            {/* Table Header Row */}
            <div
              className="grid border-b border-slate-200 bg-slate-50/80"
              style={{ gridTemplateColumns: `220px repeat(${selected.length}, minmax(240px, 1fr))` }}
            >
              <div className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">
                Comparison Feature
              </div>
              {selected.map((med) => (
                <div key={med.id} className="p-4 border-l border-slate-200">
                  <div className="font-black text-base text-slate-900">{med.brandNames[0]}</div>
                  <div className="text-xs text-slate-500 font-mono mt-0.5">{med.genericName}</div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <span className="badge-teal badge text-2xs font-bold">{med.drugClass.split(' ')[0]}</span>
                    <span className="badge-green badge text-2xs font-bold">Jan Aushadhi Available</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Comparison Rows */}
            {COMPARE_FIELDS.map((field) => (
              <div
                key={field.key}
                className="grid border-b border-slate-100 hover:bg-slate-50/40 transition-colors"
                style={{ gridTemplateColumns: `220px repeat(${selected.length}, minmax(240px, 1fr))` }}
              >
                <div className="p-4 flex items-start gap-2 bg-slate-50/30">
                  <field.icon className="w-3.5 h-3.5 text-teal-700 mt-0.5 flex-shrink-0" />
                  <span className="text-xs font-bold text-slate-700">{field.label}</span>
                </div>
                {selected.map((med) => (
                  <div key={med.id} className="p-4 border-l border-slate-100">
                    {renderCellValue(field.key, med)}
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}

        {/* Affiliate & Disclaimer */}
        <div className="mt-8 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-500 space-y-1">
          <p>
            <strong>Prescription & Safety Notice:</strong> All Schedule H and prescription drugs require a valid doctor's prescription. Prices from Tata 1mg, PharmEasy, and Apollo Pharmacy are updated via live crawlers and APIs. Jan Aushadhi prices reflect official PMBJP published schedules. Meditrust Direct provides express 4-hour doorstep delivery across Pune & PCMC.
          </p>
        </div>

      </div>

      {/* Ask Dr. Arya Modal */}
      {askAiOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl w-full max-w-lg shadow-2xl overflow-hidden border border-slate-100">
            <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-teal-50 to-blue-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl border-2 border-teal-300 overflow-hidden shadow">
                  <img src="/dr_arya.jpg" alt="Dr. Arya" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Dr. Arya AI Medication Consult</h4>
                  <p className="text-2xs text-slate-500">Analyzing {selected.map((m) => m.brandNames[0]).join(', ')}</p>
                </div>
              </div>
              <button
                onClick={() => { setAskAiOpen(false); setAiAnswer('') }}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="p-5 space-y-4">
              <textarea
                value={aiQuestion}
                onChange={(e) => setAiQuestion(e.target.value)}
                placeholder="Ask e.g. Can I take Pan-D with Augmentin? What is the best time for blood pressure tablet?"
                className="input-field text-xs min-h-[90px] resize-none"
              />

              {aiAnswer && (
                <div className="p-3.5 rounded-2xl bg-teal-50 border border-teal-200 text-xs text-slate-800 leading-relaxed space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-teal-800">
                    <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                    Dr. Arya Recommendation:
                  </div>
                  <p className="whitespace-pre-line text-2xs leading-normal">{aiAnswer}</p>
                </div>
              )}

              <button
                onClick={handleAskAI}
                disabled={!aiQuestion.trim() || aiLoading}
                className="btn-primary w-full justify-center text-xs py-3 font-bold shadow-teal"
              >
                {aiLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Consulting Dr. Arya...
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5">
                    <Brain className="w-4 h-4" /> Ask Dr. Arya Now
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Doctor */}
      <DrAryaFloatingDoctor onOpenPrescriptionScanner={() => setRxScannerOpen(true)} />

      {/* Prescription Scanner Modal */}
      <PrescriptionScannerModal
        isOpen={rxScannerOpen}
        onClose={() => setRxScannerOpen(false)}
      />
    </div>
  )
}
