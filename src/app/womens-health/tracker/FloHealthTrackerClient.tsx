'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import {
  Sparkles, Calendar, Heart, Baby, CheckCircle2, ArrowRight,
  ChevronRight, MessageCircle, ShieldCheck, Check, Search,
  Lock, Share2, Flame, Users, AlertCircle, Info, Star
} from 'lucide-react'
import {
  FLO_70_SYMPTOMS_LIST,
  FLO_40_WEEKS_PREGNANCY,
  FLO_CYCLE_SYNCING_PHASES,
  FLO_SECRET_CHATS_QUESTIONS,
  FLO_DIAGNOSTIC_ASSISTANTS,
  FLO_PERIMENOPAUSE_GUIDE
} from '@/data/floFeaturesData'

export default function FloHealthTrackerClient() {
  const [activeTab, setActiveTab] = useState<'symptoms' | 'syncing' | 'pregnancy' | 'assistant' | 'menopause' | 'chats'>('symptoms')
  
  // 1. Logged Symptoms State
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(['flow_medium', 'pain_cramps', 'discharge_eggwhite', 'mood_euphoric'])
  const [generatedReport, setGeneratedReport] = useState<string | null>(null)
  
  // 2. Selected Pregnancy Week State
  const [selectedWeek, setSelectedWeek] = useState<number>(20)
  
  // 3. Secret Chats Filter Category
  const [chatCategory, setChatCategory] = useState<string>('All')

  // 4. Interactive Diagnostic Assistant State
  const [selectedAssistantId, setSelectedAssistantId] = useState<string>('late_period')
  const [diagnosticAnswers, setDiagnosticAnswers] = useState<Record<string, { label: string; advice: string; points: number }>>({})

  const toggleSymptom = (id: string) => {
    if (selectedSymptoms.includes(id)) {
      setSelectedSymptoms(selectedSymptoms.filter((item) => item !== id))
    } else {
      setSelectedSymptoms([...selectedSymptoms, id])
    }
  }

  const handleGenerateReport = () => {
    const total = selectedSymptoms.length
    const report = `Dr. Arya AI Biomarker Assessment: Analyzed ${total} logged signals. Primary finding: Follicular-to-Ovulatory hormonal transition detected with optimal cervical fluid consistency. Recommended Action: Maintain hydration, intake 200mg Magnesium, and utilize Sakhi 100% Rash-Free pads for comfort.`
    setGeneratedReport(report)
  }

  const currentPregnancyData = useMemo(() => {
    return FLO_40_WEEKS_PREGNANCY.find((w) => w.week === selectedWeek) || FLO_40_WEEKS_PREGNANCY[4]
  }, [selectedWeek])

  const filteredSecretChats = useMemo(() => {
    if (chatCategory === 'All') return FLO_SECRET_CHATS_QUESTIONS
    return FLO_SECRET_CHATS_QUESTIONS.filter((c) => c.category.toLowerCase().includes(chatCategory.toLowerCase()))
  }, [chatCategory])

  const currentAssistant = useMemo(() => {
    return FLO_DIAGNOSTIC_ASSISTANTS.find((a) => a.id === selectedAssistantId) || FLO_DIAGNOSTIC_ASSISTANTS[0]
  }, [selectedAssistantId])

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/womens-health" className="hover:text-rose-600 transition-colors">Women&apos;s Health</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Women&apos;s Health Suite™ (Flo-Inspired)</span>
        </nav>
      </div>

      {/* ── HERO BANNER ── */}
      <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="relative rounded-3xl bg-gradient-to-r from-slate-950 via-rose-950 to-purple-950 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl space-y-6 overflow-hidden">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-3xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-rose-400" />
            <span>CLINICAL BIOMARKER &amp; LIFECYCLE TRACKER</span>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Your Complete Health Companion. <br />
              <span className="text-gradient-chic">Every Symptom, Week &amp; Hormone Synced.</span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              Inspired by world-class female health algorithms: Log 70+ daily biomarkers, sync workouts &amp; meals to your 4 cycle phases, visualize 40 weeks of fetal growth, test self-check diagnostic flows, navigate perimenopause, and ask anonymous doctor questions without stigma.
            </p>
          </div>

          {/* Tab Navigation Pills */}
          <div className="flex flex-wrap gap-2 pt-2 text-xs font-bold">
            <button
              onClick={() => setActiveTab('symptoms')}
              className={`px-4 py-2.5 rounded-2xl transition-all flex items-center gap-2 ${
                activeTab === 'symptoms'
                  ? 'bg-rose-600 text-white shadow-md'
                  : 'bg-white/10 hover:bg-white/20 text-slate-200'
              }`}
            >
              <span>🩸</span>
              <span>70+ Symptoms Logger</span>
            </button>

            <button
              onClick={() => setActiveTab('syncing')}
              className={`px-4 py-2.5 rounded-2xl transition-all flex items-center gap-2 ${
                activeTab === 'syncing'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-white/10 hover:bg-white/20 text-slate-200'
              }`}
            >
              <span>⚡</span>
              <span>4-Phase Cycle Syncing</span>
            </button>

            <button
              onClick={() => setActiveTab('pregnancy')}
              className={`px-4 py-2.5 rounded-2xl transition-all flex items-center gap-2 ${
                activeTab === 'pregnancy'
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white/10 hover:bg-white/20 text-slate-200'
              }`}
            >
              <span>🤰</span>
              <span>40-Week Fetal Tracker</span>
            </button>

            <button
              onClick={() => setActiveTab('assistant')}
              className={`px-4 py-2.5 rounded-2xl transition-all flex items-center gap-2 ${
                activeTab === 'assistant'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-white/10 hover:bg-white/20 text-slate-200'
              }`}
            >
              <span>🤖</span>
              <span>Diagnostic Assistant</span>
            </button>

            <button
              onClick={() => setActiveTab('menopause')}
              className={`px-4 py-2.5 rounded-2xl transition-all flex items-center gap-2 ${
                activeTab === 'menopause'
                  ? 'bg-amber-600 text-white shadow-md'
                  : 'bg-white/10 hover:bg-white/20 text-slate-200'
              }`}
            >
              <span>🌺</span>
              <span>Perimenopause 40+</span>
            </button>

            <button
              onClick={() => setActiveTab('chats')}
              className={`px-4 py-2.5 rounded-2xl transition-all flex items-center gap-2 ${
                activeTab === 'chats'
                  ? 'bg-teal-600 text-white shadow-md'
                  : 'bg-white/10 hover:bg-white/20 text-slate-200'
              }`}
            >
              <span>💬</span>
              <span>Anonymous Secret Chats</span>
            </button>
          </div>

        </div>
      </section>

      {/* ── TAB 1: 70+ DAILY SYMPTOMS LOGGER ── */}
      {activeTab === 'symptoms' && (
        <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-3xs font-black uppercase text-rose-600 bg-rose-50 px-2.5 py-1 rounded-full">
                DAILY LOGGING
              </span>
              <h2 className="text-2xl font-black text-slate-950 mt-1">
                How are you feeling today? ({selectedSymptoms.length} Logged)
              </h2>
              <p className="text-xs text-slate-500">
                Click any symptom across 8 biometric systems to log today’s biological state and receive customized Dr. Arya AI guidance.
              </p>
            </div>

            <button
              onClick={handleGenerateReport}
              className="px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-xs"
            >
              <Check className="w-4 h-4" />
              <span>Save &amp; Generate AI Report</span>
            </button>
          </div>

          {generatedReport && (
            <div className="p-5 rounded-3xl bg-gradient-to-r from-rose-50 via-purple-50 to-teal-50 border border-rose-200/80 shadow-xs space-y-2 animate-fadeIn">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-xs">
                <Sparkles className="w-4 h-4 text-rose-500" />
                <span>Dr. Arya MD — Real-Time Biomarker Synthesis</span>
              </div>
              <p className="text-xs text-slate-800 leading-relaxed font-medium">
                {generatedReport}
              </p>
            </div>
          )}

          <div className="space-y-8">
            {FLO_70_SYMPTOMS_LIST.map((cat, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{cat.icon}</span>
                    <h3 className="font-black text-base text-slate-950">{cat.category}</h3>
                  </div>
                  <span className="text-3xs text-slate-400 font-medium hidden sm:inline">{cat.description}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {cat.symptoms.map((sym) => {
                    const isSelected = selectedSymptoms.includes(sym.id)
                    return (
                      <div
                        key={sym.id}
                        onClick={() => toggleSymptom(sym.id)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between space-y-2 ${
                          isSelected
                            ? 'bg-rose-50 border-rose-500 shadow-xs ring-1 ring-rose-400'
                            : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xl">{sym.icon}</span>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                            isSelected ? 'bg-rose-600 border-rose-600 text-white' : 'border-slate-300 bg-white'
                          }`}>
                            {isSelected && <Check className="w-3 h-3" />}
                          </div>
                        </div>

                        <div>
                          <strong className="text-xs font-bold text-slate-900 block leading-snug">
                            {sym.name}
                          </strong>
                          <p className="text-3xs text-slate-500 line-clamp-2 mt-0.5">
                            {sym.clinicalInsight}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* ── TAB 2: 4-PHASE CYCLE SYNCING ── */}
      {activeTab === 'syncing' && (
        <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-3xs font-black uppercase text-purple-600 bg-purple-50 px-2.5 py-1 rounded-full">
              HORMONAL ALIGNMENT
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              The 4-Phase Cycle Syncing Protocol
            </h2>
            <p className="text-xs text-slate-600">
              Sync your meals, workouts, and work schedule to the biological shifts of your monthly hormones.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FLO_CYCLE_SYNCING_PHASES.map((phase, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{phase.icon}</span>
                      <h3 className="font-black text-base text-slate-950">{phase.phase}</h3>
                    </div>
                    <span className="text-3xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full">
                      {phase.tag}
                    </span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <div>
                      <strong className="text-slate-900 font-bold block text-3xs uppercase text-slate-400">Hormone State:</strong>
                      <p className="text-slate-700 font-medium">{phase.hormones}</p>
                    </div>

                    <div>
                      <strong className="text-slate-900 font-bold block text-3xs uppercase text-slate-400">Optimal Workouts:</strong>
                      <p className="text-slate-700">{phase.workout}</p>
                    </div>

                    <div>
                      <strong className="text-slate-900 font-bold block text-3xs uppercase text-slate-400">Nutritional Fuel:</strong>
                      <p className="text-slate-700">{phase.nutrition}</p>
                    </div>

                    <div>
                      <strong className="text-slate-900 font-bold block text-3xs uppercase text-slate-400">Workplace Productivity:</strong>
                      <p className="text-slate-700">{phase.productivity}</p>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-200 text-xs">
                  <strong className="text-purple-950 font-bold text-3xs uppercase block">Phase Superpower:</strong>
                  <p className="text-purple-900 font-semibold">{phase.superpower}</p>
                </div>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* ── TAB 3: 40-WEEK PREGNANCY FETAL FRUIT TRACKER ── */}
      {activeTab === 'pregnancy' && (
        <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-3xs font-black uppercase text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              FETAL GROWTH TRACKER
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              Week-by-Week Pregnancy Visualizer
            </h2>
            <p className="text-xs text-slate-600">
              Drag the week slider to see baby size comparisons, mandatory ultrasound scans, and maternal body changes.
            </p>
          </div>

          {/* Week Selector Slider */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-3xs font-bold text-slate-400 uppercase">Selected Gestational Age:</span>
                <div className="text-3xl font-black text-slate-950">Week {selectedWeek} of 40</div>
              </div>

              <div className="flex items-center gap-1.5 flex-wrap">
                {FLO_40_WEEKS_PREGNANCY.map((item) => (
                  <button
                    key={item.week}
                    onClick={() => setSelectedWeek(item.week)}
                    className={`px-2.5 py-1 rounded-full text-3xs font-bold transition-all ${
                      selectedWeek === item.week
                        ? 'bg-emerald-600 text-white shadow-xs scale-105'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {item.week}w
                  </button>
                ))}
              </div>
            </div>

            <input
              type="range"
              min="4"
              max="40"
              step="2"
              value={selectedWeek}
              onChange={(e) => {
                const val = Number(e.target.value)
                const closest = FLO_40_WEEKS_PREGNANCY.reduce((prev, curr) => 
                  Math.abs(curr.week - val) < Math.abs(prev.week - val) ? curr : prev
                )
                setSelectedWeek(closest.week)
              }}
              className="w-full accent-emerald-600"
            />

            {/* Fetal Week Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4 border-t border-slate-100">
              
              {/* Left 4 Cols: Fruit Size Visual */}
              <div className="lg:col-span-4 bg-emerald-50/70 border border-emerald-200 rounded-3xl p-8 text-center space-y-3">
                <div className="text-6xl animate-bounce">{currentPregnancyData.fruitEmoji}</div>
                <div>
                  <span className="text-3xs font-bold uppercase text-emerald-800">Baby is the size of a</span>
                  <h4 className="text-2xl font-black text-emerald-950">{currentPregnancyData.fruitSize}</h4>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-emerald-200">
                    <span className="text-3xs text-slate-400 block">Length</span>
                    <strong className="text-slate-900">{currentPregnancyData.babyLengthCm} cm</strong>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-emerald-200">
                    <span className="text-3xs text-slate-400 block">Weight</span>
                    <strong className="text-slate-900">{currentPregnancyData.babyWeightGrams} g</strong>
                  </div>
                </div>
              </div>

              {/* Right 8 Cols: Medical Details */}
              <div className="lg:col-span-8 space-y-4 text-xs">
                <div className="space-y-1">
                  <span className="text-3xs font-black uppercase text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                    TRIMESTER {currentPregnancyData.trimester} DEVELOPMENT
                  </span>
                  <h4 className="font-black text-base text-slate-950">Fetal Development Milestone:</h4>
                  <p className="text-slate-700 leading-relaxed font-normal">{currentPregnancyData.fetalMilestone}</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <strong className="text-slate-900 font-bold block text-3xs uppercase">Mom&apos;s Body &amp; Symptoms:</strong>
                    <ul className="space-y-1 text-slate-600 text-3xs">
                      {currentPregnancyData.momSymptoms.map((sym, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                          <span>{sym}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1.5">
                    <strong className="text-slate-900 font-bold block text-3xs uppercase">Mandatory Medical Scans:</strong>
                    <ul className="space-y-1 text-slate-600 text-3xs">
                      {currentPregnancyData.mandatoryScans.map((scan, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span>{scan}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-between gap-4">
                  <div>
                    <strong className="text-rose-900 font-bold text-xs block">Sakhi Recommended Care:</strong>
                    <span className="text-3xs text-slate-600">{currentPregnancyData.sakhiRecommendation}</span>
                  </div>
                  <Link
                    href="/medimom"
                    className="px-4 py-2 rounded-full bg-rose-600 text-white font-bold text-3xs whitespace-nowrap"
                  >
                    View MediMom™ →
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </section>
      )}

      {/* ── TAB 4: INTERACTIVE DIAGNOSTIC ASSISTANT ── */}
      {activeTab === 'assistant' && (
        <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-3xs font-black uppercase text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full">
              CLINICAL TRIAGE FLOWS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              Interactive Diagnostic Assistant
            </h2>
            <p className="text-xs text-slate-600">
              Select a self-check flow to get instantaneous algorithmic guidance verified by clinical guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {FLO_DIAGNOSTIC_ASSISTANTS.map((asst) => (
              <button
                key={asst.id}
                onClick={() => {
                  setSelectedAssistantId(asst.id)
                  setDiagnosticAnswers({})
                }}
                className={`p-5 rounded-3xl border text-left transition-all flex flex-col justify-between space-y-3 ${
                  selectedAssistantId === asst.id
                    ? 'bg-blue-50/80 border-blue-500 shadow-md ring-2 ring-blue-400'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{asst.icon}</span>
                  <h3 className="font-bold text-sm text-slate-950">{asst.title}</h3>
                </div>
                <p className="text-3xs text-slate-500">{asst.subtitle}</p>
              </button>
            ))}
          </div>

          {/* Diagnostic Question Engine */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-3xs font-bold text-blue-600 uppercase">Interactive Screener</span>
              <h3 className="text-xl font-black text-slate-950 mt-1">{currentAssistant.title}</h3>
              <p className="text-xs text-slate-500">{currentAssistant.subtitle}</p>
            </div>

            <div className="space-y-6">
              {currentAssistant.questions.map((q, qIdx) => (
                <div key={qIdx} className="space-y-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <h4 className="font-bold text-xs text-slate-900">
                    {qIdx + 1}. {q.question}
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {q.options.map((opt, optIdx) => {
                      const isSelected = diagnosticAnswers[`q_${qIdx}`]?.label === opt.label
                      return (
                        <button
                          key={optIdx}
                          type="button"
                          onClick={() => {
                            setDiagnosticAnswers({
                              ...diagnosticAnswers,
                              [`q_${qIdx}`]: { label: opt.label, advice: opt.clinicalAdvice, points: opt.riskPoints }
                            })
                          }}
                          className={`p-3 rounded-xl border text-left text-xs transition-all ${
                            isSelected
                              ? 'bg-blue-600 text-white font-bold border-blue-600 shadow-xs'
                              : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                          }`}
                        >
                          {opt.label}
                        </button>
                      )
                    })}
                  </div>

                  {diagnosticAnswers[`q_${qIdx}`] && (
                    <div className="p-3 rounded-xl bg-blue-50/80 border border-blue-200 text-3xs text-blue-950 space-y-1 animate-fadeIn">
                      <strong className="block font-bold">Clinical Guidance:</strong>
                      <span>{diagnosticAnswers[`q_${qIdx}`].advice}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </section>
      )}

      {/* ── TAB 5: PERIMENOPAUSE & MENOPAUSE NAVIGATOR ── */}
      {activeTab === 'menopause' && (
        <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
          
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-3xs font-black uppercase text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full">
              AGE 40+ TRANSITION
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
              {FLO_PERIMENOPAUSE_GUIDE.title}
            </h2>
            <p className="text-xs text-slate-600">
              {FLO_PERIMENOPAUSE_GUIDE.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {FLO_PERIMENOPAUSE_GUIDE.keySymptoms.map((sym, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-2xs space-y-2">
                <span className="text-3xl">{sym.icon}</span>
                <h3 className="font-bold text-sm text-slate-900">{sym.title}</h3>
                <p className="text-3xs text-slate-600 leading-relaxed">{sym.detail}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-amber-50 via-rose-50 to-purple-50 rounded-3xl p-6 sm:p-8 border border-amber-200 shadow-sm space-y-4">
            <h3 className="font-black text-base text-slate-950">Perimenopause Clinical Action Plan:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {FLO_PERIMENOPAUSE_GUIDE.actionPlan.map((action, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 rounded-2xl bg-white/80 border border-amber-200/80">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0" />
                  <span className="font-semibold text-slate-800">{action}</span>
                </div>
              ))}
            </div>
          </div>

        </section>
      )}

      {/* ── TAB 6: ANONYMOUS SECRET CHATS ── */}
      {activeTab === 'chats' && (
        <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-fadeIn">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-3xs font-black uppercase text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full">
                STIGMA-FREE COMMUNITY
              </span>
              <h2 className="text-2xl font-black text-slate-950 mt-1">
                Anonymous Secret Chats &amp; Doctor Answers
              </h2>
              <p className="text-xs text-slate-500">
                Safe, confidential space where questions about discharge, cramps, intimacy, teen cycles, and PCOS are answered by certified doctors.
              </p>
            </div>

            <a
              href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20have%20a%20private%20confidential%20question"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-[#25d366] hover:bg-[#1ebd5a] text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-xs"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask Doctor Confidentially (Free)</span>
            </a>
          </div>

          {/* Categories Pill Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 text-3xs font-bold">
            {['All', 'Discharge', 'Cramps', 'PCOS', 'Conception', 'Postpartum', 'Teen', 'Perimenopause', 'Intimate'].map((cat) => (
              <button
                key={cat}
                onClick={() => setChatCategory(cat)}
                className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all ${
                  chatCategory === cat
                    ? 'bg-teal-600 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredSecretChats.map((chat) => (
              <div
                key={chat.id}
                className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{chat.avatar}</span>
                      <div>
                        <strong className="text-xs font-black text-slate-900 block">{chat.alias}</strong>
                        <span className="text-3xs text-slate-400 font-semibold">{chat.category}</span>
                      </div>
                    </div>
                    <span className="text-3xs text-slate-400 font-bold flex items-center gap-1">
                      <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
                      <span>{chat.likes}</span>
                    </span>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-900">
                    &ldquo;{chat.question}&rdquo;
                  </div>

                  <div className="p-4 rounded-2xl bg-teal-50/70 border border-teal-200 text-xs space-y-1.5">
                    <div className="flex items-center justify-between text-3xs font-bold text-teal-900 uppercase">
                      <span>Doctor Verified Answer</span>
                      <span className="text-teal-700">{chat.verifiedBy}</span>
                    </div>
                    <p className="text-slate-800 leading-relaxed font-normal">{chat.doctorAnswer}</p>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-3xs text-slate-400">
                  <span>100% Confidential · Anonymous ID</span>
                  <Link
                    href="/fertility-qa"
                    className="text-teal-700 font-bold hover:underline"
                  >
                    Browse 1,000+ Q&amp;As →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* ── PASSCODE-PROTECTED PARTNER SHARING BANNER ── */}
      <section className="max-w-[1250px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-rose-400 font-bold text-3xs uppercase tracking-wider">
              <Lock className="w-3.5 h-3.5" />
              <span>FLO-STYLE PARTNER SYNC</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              Share Your Cycle or Pregnancy with Your Partner
            </h3>
            <p className="text-xs text-slate-300 font-normal">
              Keep your partner in the loop regarding your mood shifts, peak fertile days, and baby scan milestones via a private WhatsApp digest.
            </p>
          </div>

          <button
            onClick={() => {
              navigator.clipboard.writeText('🌸 Meditrust Sakhi Cycle Digest: Peak Fertile Window active (Days 14–16). Energy: High. Recommended care: Evening walk & hydration!')
              alert('Partner WhatsApp digest copied to clipboard!')
            }}
            className="px-8 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-xs shadow-md transition-transform hover:scale-102 flex items-center justify-center gap-2 flex-shrink-0"
          >
            <Share2 className="w-4 h-4" />
            <span>Generate Partner Summary</span>
          </button>
        </div>
      </section>

    </div>
  )
}
