'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Search, Filter, Star, Clock, Home, CheckCircle2, ExternalLink,
  ChevronDown, Info, AlertTriangle, ArrowUpDown, SlidersHorizontal,
  FlaskConical, X, DollarSign, Zap, Award, Shield, Video, MapPin,
  Sparkles, Phone, Building2
} from 'lucide-react'
import { labProviders, popularPanels, type LabProvider } from '@/data/labProviders'
import LabReportExplainerModal from '@/components/common/LabReportExplainerModal'
import DrAryaFloatingDoctor from '@/components/common/DrAryaFloatingDoctor'

type SortKey = 'rating' | 'price' | 'turnaround' | 'tests'
type FilterMode = 'all' | 'home' | 'budget' | 'fastest' | 'meditrust'

const FILTER_OPTIONS: { id: FilterMode; label: string; icon: React.ElementType }[] = [
  { id: 'all', label: 'All 13+ Diagnostic Labs', icon: FlaskConical },
  { id: 'meditrust', label: '🛡️ Meditrust Best Price', icon: Award },
  { id: 'home', label: 'Home Sample Collection (Pune)', icon: Home },
  { id: 'fastest', label: '6-Hour Express Reports', icon: Zap },
  { id: 'budget', label: 'Budget Checkups (< ₹999)', icon: DollarSign },
]

const PUNE_LOCALITIES = [
  'All Pune & PCMC',
  'Kothrud',
  'Baner / Aundh',
  'Hinjewadi IT Park',
  'Viman Nagar / Kharadi',
  'Wakad / Pimple Saudagar',
  'Camp / Deccan',
  'Hadapsar / Magarpatta',
]

function ProviderCard({
  provider,
  onCompare,
  isSelected,
  onOpenReportExplainer,
}: {
  provider: LabProvider
  onCompare: (id: string) => void
  isSelected: boolean
  onOpenReportExplainer: () => void
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className={`card overflow-hidden transition-all duration-300 border ${
        provider.isMeditrustDirect
          ? 'border-2 border-teal-500 bg-gradient-to-b from-teal-50/30 to-white shadow-teal'
          : 'border-slate-200 bg-white'
      }`}
      style={isSelected ? { outline: `2px solid ${provider.color}`, outlineOffset: '0px' } : {}}
    >
      {/* Top Banner if Meditrust or Special Badge */}
      {provider.badge && (
        <div className="bg-gradient-to-r from-teal-800 to-teal-950 text-white px-4 py-1 text-2xs font-bold flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-amber-400" />
            {provider.badge}
          </span>
          <span className="text-teal-200">60-Min Phlebotomist Dispatch in Pune</span>
        </div>
      )}

      {/* Card Header */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0 shadow-sm border border-slate-100"
              style={{ background: `${provider.color}12` }}
            >
              {provider.logo}
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-lg font-bold text-slate-900">{provider.name}</h3>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">{provider.tagline}</p>
            </div>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-2xl font-black text-slate-900" style={{ color: provider.color }}>
              ₹{provider.priceRange.min}
            </div>
            <div className="text-2xs text-slate-400">packages from</div>
          </div>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
          <div className="p-2.5 rounded-xl bg-slate-50 text-center border border-slate-100">
            <div className="text-xs font-bold text-slate-900">{provider.turnaroundTime}</div>
            <div className="text-2xs text-slate-500">Report Turnaround</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 text-center border border-slate-100">
            <div className="text-xs font-bold text-slate-900">{provider.testsOffered}+ Tests</div>
            <div className="text-2xs text-slate-500">Diagnostic Menu</div>
          </div>
          <div className="p-2.5 rounded-xl bg-green-50 text-center border border-green-100">
            <div className="text-xs font-bold text-green-800">✅ 60-Min Pickup</div>
            <div className="text-2xs text-green-600">Pune Home Sample</div>
          </div>
          <div className="p-2.5 rounded-xl bg-slate-50 text-center border border-slate-100">
            <div className="flex items-center justify-center gap-0.5">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-xs font-bold text-slate-900">{provider.rating}</span>
            </div>
            <div className="text-2xs text-slate-500">{(provider.reviewCount / 1000).toFixed(0)}K Reviews</div>
          </div>
        </div>

        {/* Accreditations & Pune Hubs */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          {provider.accreditations.map((acc) => (
            <span key={acc} className="accreditation-badge text-2xs">
              <Shield className="w-3 h-3" />
              {acc}
            </span>
          ))}
          <span className="text-2xs text-slate-500 ml-auto flex items-center gap-1">
            <MapPin className="w-3 h-3 text-teal-600" />
            {provider.puneHubs.slice(0, 3).join(', ')}
          </span>
        </div>

        {/* Popular Panels List */}
        <div className="mb-4 space-y-2">
          <div className="text-2xs font-bold text-slate-500 uppercase tracking-wider">
            Popular Blood Panels & Packages:
          </div>
          {provider.panels.map((panel) => (
            <div
              key={panel.id}
              className="flex items-center justify-between p-3 rounded-xl border border-slate-100 hover:border-teal-300 bg-slate-50/40 transition-colors"
            >
              <div>
                <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  {panel.name}
                  {panel.popular && <span className="badge-teal badge text-3xs">Popular</span>}
                </div>
                <div className="text-2xs text-slate-500 mt-0.5 max-w-md">
                  {panel.tests.slice(0, 4).join(', ')}{panel.tests.length > 4 ? ` +${panel.tests.length - 4} more tests` : ''}
                </div>
              </div>
              <div className="text-right flex-shrink-0 ml-3">
                <div className="text-base font-black" style={{ color: provider.color }}>
                  ₹{panel.price}
                </div>
                {panel.originalPrice && (
                  <div className="text-3xs text-slate-400 line-through">₹{panel.originalPrice}</div>
                )}
                <div className="text-3xs text-teal-700 font-semibold">{panel.turnaround}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Expandable Pros & Cons */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-center gap-1.5 py-1.5 text-xs font-bold text-slate-500 hover:text-slate-800 transition-colors"
        >
          {expanded ? 'Hide clinical details' : 'View lab accreditations, pros & cons'}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>

        {expanded && (
          <div className="mt-3 pt-3 border-t border-slate-100 space-y-3 animate-fade-in text-xs">
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-green-50/60 p-3 rounded-xl border border-green-100">
                <div className="font-bold text-green-900 mb-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-700" /> Key Strengths
                </div>
                <ul className="space-y-1 text-2xs text-slate-700">
                  {provider.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-1">
                      <span className="text-green-600">✓</span> {pro}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <div className="font-bold text-slate-700 mb-1">Result Delivery Modes:</div>
                <div className="flex flex-wrap gap-1">
                  {provider.resultDelivery.map((m) => (
                    <span key={m} className="badge bg-white text-slate-700 text-3xs border border-slate-200">
                      {m}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Booking Actions */}
      <div className="px-5 pb-5 sm:px-6 sm:pb-6 flex flex-col sm:flex-row gap-2.5">
        <Link
          href="/dashboard"
          className="btn-primary flex-1 justify-center py-3 text-xs font-bold shadow-teal"
          style={{ background: `linear-gradient(135deg, ${provider.color}, ${provider.color}dd)` }}
        >
          <Home className="w-3.5 h-3.5" /> Book 60-Min Home Blood Collection
        </Link>
        <button
          onClick={onOpenReportExplainer}
          className="px-4 py-3 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-bold flex items-center justify-center gap-1.5"
        >
          <Video className="w-3.5 h-3.5 text-teal-600" /> Sample Video Report
        </button>
      </div>
    </div>
  )
}

export default function LabTestComparisonPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState<FilterMode>('all')
  const [selectedLocality, setSelectedLocality] = useState(PUNE_LOCALITIES[0])
  const [sortBy, setSortBy] = useState<SortKey>('rating')
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([])
  const [reportModalOpen, setReportModalOpen] = useState(false)

  const filteredProviders = useMemo(() => {
    let result = [...labProviders]

    if (filter === 'meditrust') {
      result = result.filter((p) => p.isMeditrustDirect)
    } else if (filter === 'home') {
      result = result.filter((p) => p.homeCollection)
    } else if (filter === 'fastest') {
      result = result.sort((a, b) => a.turnaroundHours - b.turnaroundHours)
    } else if (filter === 'budget') {
      result = result.sort((a, b) => a.priceRange.min - b.priceRange.min)
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.panels.some(
            (panel) =>
              panel.name.toLowerCase().includes(q) ||
              panel.tests.some((t) => t.toLowerCase().includes(q))
          )
      )
    }

    if (filter === 'all') {
      if (sortBy === 'rating') result.sort((a, b) => b.rating - a.rating)
      else if (sortBy === 'price') result.sort((a, b) => a.priceRange.min - b.priceRange.min)
      else if (sortBy === 'turnaround') result.sort((a, b) => a.turnaroundHours - b.turnaroundHours)
    }

    return result
  }, [filter, sortBy, searchQuery])

  const toggleCompare = (id: string) => {
    setSelectedForCompare((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : prev.length < 3 ? [...prev, id] : prev
    )
  }

  return (
    <div className="min-h-screen bg-white">
      
      {/* Page Header */}
      <div className="border-b border-slate-100 py-8 bg-gradient-to-b from-teal-50/40 to-white">
        <div className="container-main">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl">
              <div className="section-tag mb-2">Pune & Pan-India Diagnostic Comparator</div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 mb-3">
                Compare 13+ At-Home Blood Test Labs
              </h1>
              <p className="text-slate-600 text-sm leading-relaxed">
                Compare rates, turnaround, and NABL certifications across <strong>Thyrocare</strong>, <strong>Metropolis</strong>, <strong>Orange Health</strong>, <strong>Tata 1mg</strong>, <strong>Dr Lal PathLabs</strong>, <strong>Doctors C</strong>, <strong>Redcliffe</strong>, <strong>Healthians</strong>, <strong>Meditech</strong>, <strong>Likhitha</strong>, <strong>Hypath</strong>, <strong>Medlife</strong> & <strong>PharmEasy Diagnostics</strong>.
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={() => setReportModalOpen(true)}
                className="btn-primary text-xs py-3 px-5 shadow-teal flex items-center gap-2 bg-gradient-to-r from-teal-700 to-teal-800 font-bold"
              >
                <Video className="w-4 h-4" />
                Watch Dr. Arya Report Explainer
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-main py-8">
        
        {/* Search & Location Bar */}
        <div className="grid sm:grid-cols-12 gap-3 mb-6">
          <div className="sm:col-span-6 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by test (CBC, Thyroid, HbA1c, Vitamin D) or lab name..."
              className="input-field pl-10 text-xs py-3"
            />
          </div>

          <div className="sm:col-span-3">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-teal-700" />
              <select
                value={selectedLocality}
                onChange={(e) => setSelectedLocality(e.target.value)}
                className="input-field pl-8 text-xs py-3 font-semibold text-slate-800"
              >
                {PUNE_LOCALITIES.map((loc) => (
                  <option key={loc} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortKey)}
              className="input-field text-xs py-3 font-semibold text-slate-800"
            >
              <option value="rating">Sort by: Top Rated (Clinical Quality)</option>
              <option value="price">Sort by: Lowest Price (Starting ₹149)</option>
              <option value="turnaround">Sort by: Fastest Turnaround (6h)</option>
            </select>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {FILTER_OPTIONS.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setFilter(opt.id)}
              className={`filter-chip text-xs py-2 px-3.5 font-bold ${
                filter === opt.id ? 'active' : ''
              }`}
            >
              <opt.icon className="w-3.5 h-3.5" />
              {opt.label}
            </button>
          ))}
        </div>

        {/* Labs Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProviders.map((provider) => (
            <ProviderCard
              key={provider.id}
              provider={provider}
              onCompare={toggleCompare}
              isSelected={selectedForCompare.includes(provider.id)}
              onOpenReportExplainer={() => setReportModalOpen(true)}
            />
          ))}
        </div>

      </div>

      {/* Lab Report Explainer Modal */}
      <LabReportExplainerModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
      />

      {/* Floating Doctor */}
      <DrAryaFloatingDoctor />
    </div>
  )
}
