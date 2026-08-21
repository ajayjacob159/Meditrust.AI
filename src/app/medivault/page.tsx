'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  FolderLock, Upload, FileText, FlaskConical, Stethoscope, ShieldCheck,
  TrendingUp, TrendingDown, Clock, Search, Filter, Download, Plus,
  ChevronRight, Calendar, User, Eye, Sparkles, CheckCircle2, AlertTriangle,
  FileCheck, Heart, Activity, Pill, Shield
} from 'lucide-react'
import LabReportExplainerModal from '@/components/common/LabReportExplainerModal'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'

interface HealthRecord {
  id: string
  title: string
  category: 'lab_report' | 'prescription' | 'scan' | 'discharge_summary' | 'vaccination'
  doctorOrLab: string
  date: string
  member: string
  fileSize: string
  status: 'normal' | 'watch' | 'urgent'
  keyBiomarkers?: { name: string; value: string; unit: string; trend: 'up' | 'down' | 'stable'; status: 'normal' | 'high' | 'low' }[]
  aiSummary: string
}

const INITIAL_RECORDS: HealthRecord[] = [
  {
    id: 'rec-1',
    title: 'Full Body Platinum Comprehensive (86 Parameters)',
    category: 'lab_report',
    doctorOrLab: 'Meditrust Direct Labs (Pune NABL Hub)',
    date: '14 Aug 2026',
    member: 'Self (Aniket Deshmukh)',
    fileSize: '2.4 MB PDF',
    status: 'watch',
    keyBiomarkers: [
      { name: 'HbA1c', value: '6.9', unit: '%', trend: 'down', status: 'high' },
      { name: 'Fasting Sugar', value: '118', unit: 'mg/dL', trend: 'down', status: 'high' },
      { name: 'Total Cholesterol', value: '194', unit: 'mg/dL', trend: 'stable', status: 'normal' },
      { name: 'Vitamin D3', value: '14.2', unit: 'ng/mL', trend: 'up', status: 'low' },
    ],
    aiSummary: 'HbA1c improved from 7.4% to 6.9% over last 3 months. Vitamin D3 requires 60,000 IU weekly supplementation. Kidney and liver functions are completely optimal.',
  },
  {
    id: 'rec-2',
    title: 'Cardiology & Diabetes Prescription',
    category: 'prescription',
    doctorOrLab: 'Dr. R. Sharma, MD (Ruby Hall Clinic Pune)',
    date: '10 Aug 2026',
    member: 'Self (Aniket Deshmukh)',
    fileSize: '1.1 MB JPG',
    status: 'normal',
    aiSummary: 'Prescribed Metformin 500mg SR + Telmisartan 40mg. 80% generic price match available at Jan Aushadhi (saves ₹840/month).',
  },
  {
    id: 'rec-3',
    title: 'Thyroid Profile Ultra (T3, T4, TSH)',
    category: 'lab_report',
    doctorOrLab: 'Thyrocare Technologies',
    date: '02 Aug 2026',
    member: 'Mother (Sunita Deshmukh)',
    fileSize: '1.8 MB PDF',
    status: 'normal',
    keyBiomarkers: [
      { name: 'TSH', value: '2.14', unit: 'mIU/L', trend: 'stable', status: 'normal' },
      { name: 'Free T4', value: '1.28', unit: 'ng/dL', trend: 'stable', status: 'normal' },
    ],
    aiSummary: 'Thyroid levels perfectly stabilized within euthyroid reference range. Continue current Thyronorm 50mcg dose.',
  },
  {
    id: 'rec-4',
    title: 'Knee Joint Bilateral Digital X-Ray',
    category: 'scan',
    doctorOrLab: 'Sahyadri Super Speciality Diagnostics',
    date: '28 Jul 2026',
    member: 'Father (Ramesh Deshmukh)',
    fileSize: '8.5 MB DICOM/PDF',
    status: 'watch',
    aiSummary: 'Mild Grade-2 osteoarthritis narrowing in medial tibiofemoral joint. Physical therapy and quadriceps strengthening advised.',
  },
  {
    id: 'rec-5',
    title: 'Adult Hepatitis-B & Pneumococcal Booster',
    category: 'vaccination',
    doctorOrLab: 'DY Patil Hospital Pimpri',
    date: '15 May 2026',
    member: 'Self (Aniket Deshmukh)',
    fileSize: '850 KB PDF',
    status: 'normal',
    aiSummary: 'Completed 3-dose series. High antibody titer confirmed.',
  },
]

export default function MediVaultPage() {
  const [records, setRecords] = useState<HealthRecord[]>(INITIAL_RECORDS)
  const [selectedMember, setSelectedMember] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [reportModalOpen, setReportModalOpen] = useState(false)
  const [rxScannerOpen, setRxScannerOpen] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadSuccess, setUploadSuccess] = useState(false)

  const members = ['all', 'Self (Aniket Deshmukh)', 'Mother (Sunita Deshmukh)', 'Father (Ramesh Deshmukh)', 'Spouse', 'Child']

  const filteredRecords = records.filter((rec) => {
    const matchesMember = selectedMember === 'all' || rec.member === selectedMember
    const matchesCategory = selectedCategory === 'all' || rec.category === selectedCategory
    const matchesSearch =
      rec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.doctorOrLab.toLowerCase().includes(searchQuery.toLowerCase()) ||
      rec.aiSummary.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesMember && matchesCategory && matchesSearch
  })

  const handleSimulatedUpload = () => {
    setIsUploading(true)
    setTimeout(() => {
      setIsUploading(false)
      setUploadSuccess(true)
      setTimeout(() => setUploadSuccess(false), 4000)
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-slate-900/5 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="bg-teal-500/20 text-teal-300 border border-teal-400/30 text-2xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  ABDM & HIPAA Compliant 256-Bit Locker
                </span>
                <span className="bg-amber-400/20 text-amber-300 border border-amber-400/30 text-2xs font-bold px-2.5 py-1 rounded-full">
                  AI Trend Analysis
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-display">
                MediVault™ <span className="text-emerald-400">Health Records & Trends</span>
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Store, categorize, and track your family&apos;s lifelong medical history. Dr. Arya automatically extracts biomarkers, graphs trends over time, and highlights abnormal values in plain Marathi, Hindi &amp; English.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setReportModalOpen(true)}
                className="btn-teal flex items-center gap-2 text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl shadow-lg hover:scale-102 transition-transform"
              >
                <Sparkles className="w-4 h-4 text-emerald-300" />
                <span>Explain Any Report</span>
              </button>

              <button
                onClick={() => setRxScannerOpen(true)}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-3 rounded-2xl transition-all"
              >
                <Upload className="w-4 h-4" />
                <span>Upload Document</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10 text-center sm:text-left">
            <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
              <div className="text-2xs text-teal-200">Total Encrypted Records</div>
              <div className="text-xl sm:text-2xl font-black text-white">{records.length} Documents</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
              <div className="text-2xs text-teal-200">Tracked Biomarkers</div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400">18 Parameters</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
              <div className="text-2xs text-teal-200">Family Members</div>
              <div className="text-xl sm:text-2xl font-black text-white">4 Profiles</div>
            </div>
            <div className="bg-white/5 rounded-2xl p-3 border border-white/5">
              <div className="text-2xs text-teal-200">ABHA Digital Health ID</div>
              <div className="text-xl sm:text-2xl font-black text-amber-300">Linked (ABDM)</div>
            </div>
          </div>
        </div>

        {/* ── BIOMARKER TREND CHARTS SECTION ── */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-teal-600" />
                <span>Lifelong Biomarker Progression Tracker</span>
              </h2>
              <p className="text-xs text-slate-500">
                Continuous AI tracking across sequential blood test reports (Aniket Deshmukh)
              </p>
            </div>
            <span className="text-2xs bg-teal-50 text-teal-700 font-bold px-3 py-1 rounded-full border border-teal-200">
              Updated from 14 Aug 2026 Report
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            
            {/* Metric Card 1: HbA1c */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">HbA1c (3-Month Sugar)</span>
                <span className="text-3xs bg-amber-100 text-amber-800 font-bold px-2 py-0.5 rounded-full">
                  Borderline (Target: &lt; 5.7%)
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-950 font-display">6.9%</span>
                <span className="text-2xs font-bold text-emerald-600 flex items-center">
                  <TrendingDown className="w-3.5 h-3.5" /> -0.5% vs May
                </span>
              </div>
              {/* Mini Sparkline Bar Chart */}
              <div className="space-y-1">
                <div className="flex justify-between text-3xs text-slate-400">
                  <span>Feb: 7.8%</span>
                  <span>May: 7.4%</span>
                  <span className="font-bold text-teal-700">Aug: 6.9%</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden flex">
                  <div className="bg-rose-400 h-full w-[35%]" />
                  <div className="bg-amber-400 h-full w-[30%]" />
                  <div className="bg-emerald-500 h-full w-[35%]" />
                </div>
              </div>
              <p className="text-3xs text-slate-500">
                Dr. Arya Insight: Dietary carb restriction and regular walking showed clear positive glycemic reduction.
              </p>
            </div>

            {/* Metric Card 2: Total Cholesterol */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">Total Cholesterol</span>
                <span className="text-3xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                  Normal (&lt; 200 mg/dL)
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-950 font-display">194</span>
                <span className="text-xs text-slate-500">mg/dL</span>
                <span className="text-2xs font-bold text-emerald-600 flex items-center">
                  <TrendingDown className="w-3.5 h-3.5" /> -16 mg/dL vs Jul
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-3xs text-slate-400">
                  <span>Mar: 224</span>
                  <span>Jul: 210</span>
                  <span className="font-bold text-teal-700">Aug: 194</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden flex">
                  <div className="bg-emerald-500 h-full w-[65%]" />
                  <div className="bg-slate-300 h-full w-[35%]" />
                </div>
              </div>
              <p className="text-3xs text-slate-500">
                Dr. Arya Insight: Total lipid profile has safely dropped below the 200 mg/dL clinical threshold.
              </p>
            </div>

            {/* Metric Card 3: Vitamin D3 */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">Vitamin D3 25-OH</span>
                <span className="text-3xs bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded-full">
                  Deficient (&lt; 20 ng/mL)
                </span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-black text-slate-950 font-display">14.2</span>
                <span className="text-xs text-slate-500">ng/mL</span>
                <span className="text-2xs font-bold text-emerald-600 flex items-center">
                  <TrendingUp className="w-3.5 h-3.5" /> +2.8 vs Jan
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-3xs text-slate-400">
                  <span>Jan: 11.4</span>
                  <span>May: 12.0</span>
                  <span className="font-bold text-teal-700">Aug: 14.2</span>
                </div>
                <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden flex">
                  <div className="bg-rose-500 h-full w-[45%]" />
                  <div className="bg-slate-300 h-full w-[55%]" />
                </div>
              </div>
              <p className="text-3xs text-slate-500">
                Dr. Arya Insight: Weekly Cholecalciferol 60K sachet with warm milk recommended to achieve optimal &gt;30 ng/mL.
              </p>
            </div>
          </div>
        </div>

        {/* ── SEARCH & FILTER CONTROLS ── */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Family Member Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 text-xs font-bold">
            {members.map((m) => (
              <button
                key={m}
                onClick={() => setSelectedMember(m)}
                className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-colors ${
                  selectedMember === m
                    ? 'bg-teal-800 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                }`}
              >
                {m === 'all' ? 'All Family Members' : m}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search reports, doctors, medicines..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-xs outline-none focus:border-teal-600 shadow-2xs"
            />
          </div>
        </div>

        {/* Category Filters */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs font-bold">
          {[
            { id: 'all', label: 'All Documents', icon: FileText },
            { id: 'lab_report', label: 'Lab Reports', icon: FlaskConical },
            { id: 'prescription', label: 'Prescriptions', icon: Pill },
            { id: 'scan', label: 'Scans & X-Rays', icon: Activity },
            { id: 'vaccination', label: 'Vaccines & Certificates', icon: Shield },
          ].map((cat) => {
            const Icon = cat.icon
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`p-3 rounded-2xl border flex items-center justify-center gap-2 transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-teal-50 border-teal-500 text-teal-900 shadow-xs'
                    : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-4 h-4 text-teal-600" />
                <span>{cat.label}</span>
              </button>
            )
          })}
        </div>

        {/* ── DOCUMENTS LIST ── */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
            <span>Showing {filteredRecords.length} Saved Medical Records</span>
            <span>Encrypted with AES-256</span>
          </div>

          {filteredRecords.map((record) => (
            <div
              key={record.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:border-teal-300 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 border border-teal-100 flex items-center justify-center flex-shrink-0 text-teal-700">
                    {record.category === 'lab_report' && <FlaskConical className="w-6 h-6" />}
                    {record.category === 'prescription' && <Pill className="w-6 h-6" />}
                    {record.category === 'scan' && <Activity className="w-6 h-6" />}
                    {record.category === 'vaccination' && <Shield className="w-6 h-6" />}
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-bold text-base text-slate-900 tracking-tight">
                        {record.title}
                      </h3>
                      {record.status === 'watch' && (
                        <span className="badge-amber badge text-3xs font-bold">
                          ⚠️ Action Recommended
                        </span>
                      )}
                      {record.status === 'normal' && (
                        <span className="badge-teal badge text-3xs font-bold">
                          ✓ Normal Reference
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mt-1">
                      <span className="flex items-center gap-1 font-medium text-slate-700">
                        <User className="w-3.5 h-3.5 text-slate-400" /> {record.member}
                      </span>
                      <span>•</span>
                      <span>{record.doctorOrLab}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" /> {record.date}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 self-end sm:self-start">
                  <button
                    onClick={() => setReportModalOpen(true)}
                    className="px-3.5 py-1.5 bg-teal-50 hover:bg-teal-100 text-teal-800 text-xs font-bold rounded-xl border border-teal-200 transition-colors flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-teal-600" />
                    <span>Explain AI Voice</span>
                  </button>
                  <button
                    onClick={() => alert(`Downloading encrypted file: ${record.title}`)}
                    className="p-2 text-slate-400 hover:text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors"
                    title="Download Record"
                  >
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Biomarkers Pill Row if present */}
              {record.keyBiomarkers && record.keyBiomarkers.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                  {record.keyBiomarkers.map((bm, i) => (
                    <div
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs flex items-center gap-2"
                    >
                      <span className="font-medium text-slate-600">{bm.name}:</span>
                      <span className="font-black text-slate-900">{bm.value} {bm.unit}</span>
                      <span className={`text-3xs font-bold px-1.5 py-0.2 rounded-full ${
                        bm.status === 'normal' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {bm.status.toUpperCase()}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Dr. Arya Summary Box */}
              <div className="p-3.5 rounded-2xl bg-teal-50/70 border border-teal-100 text-xs text-teal-950 flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                <p className="leading-relaxed font-medium">
                  <strong>Dr. Arya AI Synthesis:</strong> {record.aiSummary}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Explainer Modal */}
        <LabReportExplainerModal
          isOpen={reportModalOpen}
          onClose={() => setReportModalOpen(false)}
        />

        {/* Prescription Scanner Modal */}
        <PrescriptionScannerModal
          isOpen={rxScannerOpen}
          onClose={() => setRxScannerOpen(false)}
        />
      </div>
    </div>
  )
}
