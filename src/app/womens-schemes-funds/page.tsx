'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  ShieldCheck, Heart, Building2, Phone, ExternalLink, Sparkles,
  CheckCircle2, Award, FileText, ArrowRight, Users, Stethoscope,
  Pill, CreditCard, Activity, Hospital, Search, Filter, HelpCircle,
  ChevronDown, ChevronRight, Gift, Landmark, Check, AlertCircle,
  Briefcase, GraduationCap, Baby, MessageCircle
} from 'lucide-react'
import { WOMENS_SCHEMES_AND_FUNDS, SchemeItem } from '@/data/womensSchemesAndFundsData'

export default function WomensSchemesAndFundsPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedState, setSelectedState] = useState<string>('all')
  const [selectedLifeStage, setSelectedLifeStage] = useState<string>('all')
  const [expandedSchemeId, setExpandedSchemeId] = useState<string | null>(null)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Filter schemes based on search query, category, state, and life stage
  const filteredSchemes = useMemo(() => {
    return WOMENS_SCHEMES_AND_FUNDS.filter((scheme) => {
      // Category filter
      if (selectedCategory !== 'all' && scheme.category !== selectedCategory) {
        return false
      }

      // State filter
      if (selectedState !== 'all') {
        if (selectedState === 'Maharashtra' && !scheme.state?.includes('Maharashtra') && scheme.state !== 'Pan-India') {
          return false
        }
        if (selectedState === 'Karnataka' && !scheme.state?.includes('Karnataka') && scheme.state !== 'Pan-India') {
          return false
        }
        if (selectedState === 'Tamil Nadu' && !scheme.state?.includes('Tamil Nadu') && scheme.state !== 'Pan-India') {
          return false
        }
        if (selectedState === 'Telangana / AP' && !scheme.state?.includes('Telangana') && !scheme.state?.includes('AP') && scheme.state !== 'Pan-India') {
          return false
        }
      }

      // Life stage filter
      if (selectedLifeStage !== 'all' && scheme.lifeStage !== selectedLifeStage && scheme.lifeStage !== 'All Life Stages') {
        return false
      }

      // Search query filter
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase()
        const matchName = scheme.name.toLowerCase().includes(query)
        const matchMarathi = scheme.marathiName?.toLowerCase().includes(query) || false
        const matchTagline = scheme.tagline.toLowerCase().includes(query)
        const matchBenefit = scheme.benefitAmount.toLowerCase().includes(query)
        const matchBody = scheme.corporateOrGovtBody.toLowerCase().includes(query)
        const matchState = scheme.state?.toLowerCase().includes(query) || false
        const matchBenefits = scheme.keyBenefits.some(b => b.toLowerCase().includes(query))

        return matchName || matchMarathi || matchTagline || matchBenefit || matchBody || matchState || matchBenefits
      }

      return true
    })
  }, [searchQuery, selectedCategory, selectedState, selectedLifeStage])

  const toggleExpand = (id: string) => {
    setExpandedSchemeId(prev => (prev === id ? null : id))
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden pt-20 sm:pt-24 pb-20">
      
      {/* ── 1. BREADCRUMBS ── */}
      <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/womens-health" className="hover:text-rose-700 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Women&apos;s Government &amp; CSR Schemes Master Hub</span>
        </nav>
      </div>

      {/* ── 2. HERO SECTION ── */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14">
        <div className="space-y-6 text-center max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-rose-100 via-amber-100 to-teal-100 border border-rose-300 text-rose-950 text-xs font-black shadow-xs tracking-wider">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping" />
            <span>🏛️ NATIONAL MASTER DIRECTORY · CENTRAL + STATE + CORPORATE CSR FUNDS</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
            Women&apos;s Government &amp; CSR <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-[#ff5ca1] via-[#d12a6d] to-[#7c3aed] bg-clip-text text-transparent">
              Schemes &amp; Welfare Funds Hub
            </span>
          </h1>

          <p className="text-sm sm:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            Complete, updated 2026 directory of <strong>Central Government welfare schemes</strong>, <strong>State DBT programs</strong> (including Maharashtra&apos;s <em>Mukhyamantri Majhi Ladki Bahin Yojana</em>), <strong>Corporate CSR Health Grants</strong> (Tata Trusts, Reliance, Infosys, Biocon), and <strong>Enterprise Maternity &amp; Startup Funds</strong> for Indian women.
          </p>

          {/* Key Quantitative Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3.5 rounded-2xl bg-white border border-rose-200 shadow-2xs text-center space-y-0.5">
              <span className="text-base sm:text-xl font-black text-rose-950 block">₹18,000 / yr</span>
              <span className="text-3xs font-semibold text-rose-700">Direct DBT Cash Transfers</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-blue-200 shadow-2xs text-center space-y-0.5">
              <span className="text-base sm:text-xl font-black text-blue-950 block">₹5,00,000</span>
              <span className="text-3xs font-semibold text-blue-700">Cashless PM-JAY Cover</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-emerald-200 shadow-2xs text-center space-y-0.5">
              <span className="text-base sm:text-xl font-black text-emerald-950 block">₹1 / Pad</span>
              <span className="text-3xs font-semibold text-emerald-700">Suvidha Oxo-Biodegradable</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-purple-200 shadow-2xs text-center space-y-0.5">
              <span className="text-base sm:text-xl font-black text-purple-950 block">35+ Schemes</span>
              <span className="text-3xs font-semibold text-purple-700">Central, State &amp; CSR Funds</span>
            </div>
          </div>

          {/* Quick Action Links */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20please%20help%20me%20find%20which%20women%20government%20or%20CSR%20schemes%20I%20am%20eligible%20for"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#008069] hover:bg-[#006e5a] text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask Dr. Arya AI to Check Eligibility</span>
            </a>

            <a
              href="#schemes-list"
              className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm shadow-md transition-all flex items-center gap-2"
            >
              <span>Browse All Schemes ({WOMENS_SCHEMES_AND_FUNDS.length})</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </section>

      {/* ── 3. INTERACTIVE SEARCH & MULTI-FILTER CONTROLS ── */}
      <section id="schemes-list" className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
          
          {/* Live Search Bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by scheme name, benefit, state (e.g. 'Ladki Bahin', '₹1500', 'PMMVY', 'Tata Trusts', 'anemia', 'maternity', 'PCOS')..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-rose-500 focus:bg-white transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="space-y-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
              Scheme Sponsoring Category:
            </span>
            <div className="flex flex-wrap gap-2 text-xs font-bold">
              {[
                { id: 'all', label: `All Schemes (${WOMENS_SCHEMES_AND_FUNDS.length})` },
                { id: 'central_govt', label: '🇮🇳 Central Govt (National)' },
                { id: 'state_govt', label: '🏛️ State Governments' },
                { id: 'corporate_csr', label: '🏢 Corporate CSR & Health Funds' },
                { id: 'workplace_grants', label: '💼 Workplace & Startup Grants' }
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl border transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                      : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* State & Life-Stage Filters Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            
            {/* State Selector */}
            <div className="space-y-1">
              <label className="text-3xs font-bold uppercase tracking-wider text-slate-500">
                Filter by State / Region:
              </label>
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-rose-500"
              >
                <option value="all">All India (Pan-India &amp; All States)</option>
                <option value="Maharashtra">Maharashtra (Ladki Bahin, MKBY, Asmita)</option>
                <option value="Karnataka">Karnataka (Gruha Lakshmi, Mathru Poorna)</option>
                <option value="Tamil Nadu">Tamil Nadu (Dr. Muthulakshmi Reddy MRMBS)</option>
                <option value="Telangana / AP">Telangana &amp; Andhra Pradesh (KCR Kit)</option>
              </select>
            </div>

            {/* Life Stage Selector */}
            <div className="space-y-1">
              <label className="text-3xs font-bold uppercase tracking-wider text-slate-500">
                Filter by Woman&apos;s Life Stage:
              </label>
              <select
                value={selectedLifeStage}
                onChange={(e) => setSelectedLifeStage(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-semibold focus:outline-none focus:border-rose-500"
              >
                <option value="all">All Life Stages</option>
                <option value="Teen & Student">🌱 Teen &amp; Student (13–22 yrs)</option>
                <option value="Maternity & Child">🤰 Maternity, Delivery &amp; Motherhood</option>
                <option value="Working & Entrepreneur">💼 Working Women &amp; Entrepreneurs</option>
                <option value="Senior & Menopause">🦋 Senior Women &amp; Menopause (40+ yrs)</option>
              </select>
            </div>

          </div>

          <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
            <span>Showing <strong>{filteredSchemes.length}</strong> matching schemes &amp; funds</span>
            {(selectedCategory !== 'all' || selectedState !== 'all' || selectedLifeStage !== 'all' || searchQuery) && (
              <button
                onClick={() => {
                  setSelectedCategory('all')
                  setSelectedState('all')
                  setSelectedLifeStage('all')
                  setSearchQuery('')
                }}
                className="text-rose-600 font-bold hover:underline"
              >
                Reset All Filters
              </button>
            )}
          </div>

        </div>

      </section>

      {/* ── 4. SCHEMES DIRECTORY CARDS GRID ── */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {filteredSchemes.length === 0 ? (
          <div className="p-12 rounded-3xl bg-white border border-slate-200 text-center space-y-3">
            <AlertCircle className="w-10 h-10 text-slate-400 mx-auto" />
            <h3 className="text-lg font-bold text-slate-900">No schemes found matching your filter criteria.</h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Try searching with different keywords like &quot;maternity&quot;, &quot;₹1500&quot;, &quot;PMMVY&quot;, &quot;Tata&quot;, or reset your filters.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all')
                setSelectedState('all')
                setSelectedLifeStage('all')
                setSearchQuery('')
              }}
              className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-bold text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSchemes.map((scheme) => {
              const isExpanded = expandedSchemeId === scheme.id

              return (
                <div
                  key={scheme.id}
                  className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between p-6 space-y-5 group hover:border-rose-300"
                >
                  <div className="space-y-4">
                    
                    {/* Top Category & State Pill */}
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5">
                        <span className="text-2xl">{scheme.icon}</span>
                        <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                          {scheme.categoryLabel}
                        </span>
                      </div>
                      <span className="text-3xs font-bold text-slate-500 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-lg">
                        📍 {scheme.state || 'Pan-India'}
                      </span>
                    </div>

                    {/* Scheme Titles */}
                    <div className="space-y-1">
                      <h3 className="font-black text-base text-slate-950 group-hover:text-rose-600 transition-colors leading-snug">
                        {scheme.name}
                      </h3>
                      {scheme.marathiName && (
                        <p className="text-xs text-rose-800 font-semibold font-serif">
                          {scheme.marathiName}
                        </p>
                      )}
                      <p className="text-3xs text-slate-500 leading-relaxed font-medium">
                        {scheme.tagline}
                      </p>
                    </div>

                    {/* Benefit Amount Callout Box */}
                    <div className={`p-3 rounded-2xl border ${scheme.badgeColor} space-y-0.5`}>
                      <span className="text-3xs font-bold uppercase tracking-wider block opacity-80">
                        Financial / Health Benefit:
                      </span>
                      <div className="text-sm font-black font-mono leading-snug">
                        {scheme.benefitAmount}
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                        Key Features:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-700">
                        {scheme.keyBenefits.slice(0, 2).map((b, idx) => (
                          <li key={idx} className="flex items-start gap-1.5 leading-relaxed">
                            <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Expandable Deep Details */}
                    {isExpanded && (
                      <div className="pt-3 border-t border-slate-100 space-y-3.5 text-xs animate-fadeIn">
                        
                        {/* More Benefits if any */}
                        {scheme.keyBenefits.length > 2 && (
                          <div className="space-y-1">
                            <span className="text-3xs font-black text-slate-500 uppercase">Additional Perks:</span>
                            <ul className="space-y-1 text-slate-600">
                              {scheme.keyBenefits.slice(2).map((b, idx) => (
                                <li key={idx} className="flex items-start gap-1.5">
                                  <Check className="w-3 h-3 text-emerald-600 mt-0.5 flex-shrink-0" />
                                  <span>{b}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Eligibility Criteria */}
                        <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                          <span className="text-3xs font-black text-slate-700 uppercase block">
                            📋 Eligibility Criteria:
                          </span>
                          <ul className="space-y-0.5 text-3xs text-slate-600">
                            {scheme.eligibility.map((e, idx) => (
                              <li key={idx}>• {e}</li>
                            ))}
                          </ul>
                        </div>

                        {/* Documents Required */}
                        <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200 space-y-1">
                          <span className="text-3xs font-black text-amber-900 uppercase block">
                            📑 Documents Checklist:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {scheme.documentsRequired.map((doc, idx) => (
                              <span key={idx} className="bg-white px-2 py-0.5 rounded border border-amber-200 text-3xs font-medium text-amber-950">
                                {doc}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Sponsoring Authority & Helpline */}
                        <div className="space-y-1 text-3xs text-slate-500">
                          <div><strong>Nodal Body:</strong> {scheme.corporateOrGovtBody}</div>
                          <div><strong>Helpline:</strong> {scheme.helpline}</div>
                        </div>

                      </div>
                    )}

                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-3 border-t border-slate-100 space-y-2">
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => toggleExpand(scheme.id)}
                        className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1 transition-colors"
                      >
                        <span>{isExpanded ? 'Less Info' : 'Eligibility & Docs'}</span>
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {scheme.officialPortal && (
                        <a
                          href={scheme.officialPortal}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-2 rounded-xl bg-slate-900 hover:bg-black text-white font-bold text-xs flex items-center gap-1 transition-colors shadow-2xs"
                        >
                          <span>Portal</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>

                    <a
                      href={`https://wa.me/917028025717?text=${encodeURIComponent(
                        `Hi Dr. Arya, please guide me on how to apply for "${scheme.name}" and what documents I need.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-bold text-3xs flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageCircle className="w-3 h-3 text-emerald-600" />
                      <span>Ask Dr. Arya to Guide Application</span>
                    </a>

                  </div>

                </div>
              )
            })}
          </div>
        )}

      </section>

      {/* ── 5. STEP-BY-STEP CLAIM & MAXIMIZATION ROADMAP ── */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-slate-950 text-white rounded-3xl p-6 sm:p-12 border border-slate-800 shadow-2xl space-y-8">
          
          <div className="space-y-2 max-w-2xl">
            <span className="text-3xs font-black uppercase tracking-wider text-rose-400 bg-rose-500/20 px-3 py-1 rounded-full border border-rose-500/30">
              CITIZEN GUIDE · 4 STEPS TO CLAIM BENEFITS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              How to Claim &amp; Maximize Your Government &amp; CSR Funds
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Follow this standardized checklist to ensure zero delays in Direct Benefit Transfers (DBT) and hospital cashless authorizations.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
              <span className="w-7 h-7 rounded-full bg-rose-600 text-white grid place-items-center text-xs font-black">
                1
              </span>
              <h3 className="font-bold text-sm text-white">Seed Bank Account with Aadhaar (NPCI)</h3>
              <p className="text-3xs text-slate-400 leading-relaxed font-normal">
                Ensure your primary bank account is mapped on the NPCI Aadhaar bridge so DBT subsidies (Ladki Bahin, PMMVY, Gruha Lakshmi) are credited instantly without rejections.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
              <span className="w-7 h-7 rounded-full bg-blue-600 text-white grid place-items-center text-xs font-black">
                2
              </span>
              <h3 className="font-bold text-sm text-white">Register 14-Digit ABHA Health ID</h3>
              <p className="text-3xs text-slate-400 leading-relaxed font-normal">
                Generate your Ayushman Bharat Health Account (ABHA) to digitally store all ANC reports, scan PDFs, and get instant queue-less hospital OPD admissions.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
              <span className="w-7 h-7 rounded-full bg-emerald-600 text-white grid place-items-center text-xs font-black">
                3
              </span>
              <h3 className="font-bold text-sm text-white">Collect MCP (Mother-Child) Card Early</h3>
              <p className="text-3xs text-slate-400 leading-relaxed font-normal">
                Register pregnancy before 12 weeks at your local PHC or Anganwadi to get your RCH ID, enabling PMMVY, JSY, and PMSMA free OB-GYN checkups.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-2.5">
              <span className="w-7 h-7 rounded-full bg-purple-600 text-white grid place-items-center text-xs font-black">
                4
              </span>
              <h3 className="font-bold text-sm text-white">Consult Meditrust AI for Generics &amp; Labs</h3>
              <p className="text-3xs text-slate-400 leading-relaxed font-normal">
                Match your prescribed medicines against Jan Aushadhi generic equivalents to save 80%, and compare 13 NABL lab rates across Pune and Maharashtra.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ── 6. HELPLINES & EMERGENCY SUPPORT STRIP ── */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4">
          <div className="text-xs font-black uppercase tracking-wider text-slate-500">
            📞 24/7 Official Women &amp; Healthcare Emergency Helplines (Toll-Free):
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-center">
            <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 space-y-0.5">
              <span className="text-base sm:text-lg font-black text-rose-950 font-mono block">181</span>
              <span className="text-3xs font-semibold text-rose-800">National Women Helpline (24/7)</span>
            </div>
            <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 space-y-0.5">
              <span className="text-base sm:text-lg font-black text-blue-950 font-mono block">104</span>
              <span className="text-3xs font-semibold text-blue-800">Govt Health Advice Helpline</span>
            </div>
            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-0.5">
              <span className="text-base sm:text-lg font-black text-emerald-950 block font-mono">108 / 102</span>
              <span className="text-3xs font-semibold text-emerald-800">Maternity &amp; Medical Ambulance</span>
            </div>
            <div className="p-3 rounded-2xl bg-teal-50 border border-teal-200 space-y-0.5">
              <span className="text-base sm:text-lg font-black text-teal-950 block font-mono">14555</span>
              <span className="text-3xs font-semibold text-teal-800">PM-JAY Ayushman Bharat Desk</span>
            </div>
            <div className="p-3 rounded-2xl bg-purple-50 border border-purple-200 space-y-0.5">
              <span className="text-base sm:text-lg font-black text-purple-950 block font-mono">14477</span>
              <span className="text-3xs font-semibold text-purple-800">Jan Aushadhi Pharmacy Help</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. FAQ ACCORDION ── */}
      <section className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6">
        <div className="text-center space-y-1">
          <h3 className="text-2xl font-black text-slate-950">Frequently Asked Questions on Women&apos;s Schemes</h3>
          <p className="text-xs text-slate-600">Clear answers regarding eligibility, DBT disbursements, and corporate CSR access</p>
        </div>

        <div className="space-y-3">
          {[
            {
              q: 'Can I claim both PMMVY (Central) and Majhi Ladki Bahin (Maharashtra) simultaneously?',
              a: 'Yes! Pradhan Mantri Matru Vandana Yojana (PMMVY) is a targeted maternity benefit (₹5,000–₹6,000) for pregnancy and infant vaccination, whereas Mukhyamantri Majhi Ladki Bahin Yojana is an ongoing universal women empowerment DBT scheme (₹1,500/month) for women aged 21–65. Beneficiaries meeting individual income guidelines can receive benefits from both programs without conflict.'
            },
            {
              q: 'Are high-risk C-sections and gynecological surgeries covered under Ayushman Bharat PM-JAY?',
              a: 'Yes. Ayushman Bharat PM-JAY provides up to ₹5 Lakhs annual cashless coverage per family across empanelled public and private hospitals (e.g. Ruby Hall Clinic, Sassoon General Hospital, Sahyadri Hospital in Pune). Gynecological procedures including emergency C-sections, surgical management of ectopic pregnancies, hysterectomies, and gynecological oncology are 100% cashless.'
            },
            {
              q: 'How can women startup founders access Corporate CSR and Venture Funds?',
              a: 'Female entrepreneurs can apply for equity-free innovation grants through Google Women Techmakers, AWS Women in Tech, and NASSCOM Foundation, or seek institutional venture funding from specialized funds like She Capital, Saha Fund, and StrongHer Ventures. Meditrust AI also partners with healthtech and femtech startups for clinical pilot validation.'
            },
            {
              q: 'What should I do if my DBT installment gets rejected?',
              a: 'The most common cause of DBT failure is an unlinked NPCI Aadhaar bank mapping. Visit your home bank branch and request an "Aadhaar Seeding Form for DBT Credits". You can also verify your Aadhaar-bank linking status on the official UIDAI portal.'
            }
          ].map((faq, idx) => (
            <div key={faq.q} className="bg-white border border-slate-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${
                    openFaq === idx ? 'rotate-180 text-rose-600' : ''
                  }`}
                />
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── 8. BOTTOM CTA CALLOUT ── */}
      <section className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-rose-950 via-slate-900 to-purple-950 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-rose-900/50">
          <div className="space-y-2 text-center md:text-left max-w-xl">
            <h3 className="text-xl sm:text-2xl font-black text-rose-300">
              Need Personal Guidance on Government or CSR Benefits?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Dr. Arya AI is trained on all 35+ Central, State, and Corporate CSR guidelines. Ask questions privately in Marathi, Hindi, or English.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 flex-shrink-0">
            <a
              href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20know%20which%20government%20or%20CSR%20schemes%20apply%20to%20me"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-[#008069] hover:bg-[#006e5a] text-white font-bold text-xs sm:text-sm shadow-md transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask Dr. Arya on WhatsApp</span>
            </a>
            <Link
              href="/corporate-wellness"
              className="px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm transition-colors border border-white/20 flex items-center gap-2"
            >
              <span>Corporate Wellness Hub →</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}
