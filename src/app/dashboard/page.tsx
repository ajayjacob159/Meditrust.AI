'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  LayoutDashboard, Pill, FlaskConical, Calendar, FileText,
  Brain, Star, TrendingUp, Clock, ChevronRight, Lock, Plus,
  AlertCircle, CheckCircle2, BarChart3, Heart, Activity, Bell,
  Upload, Video, Sparkles, MapPin, Building2
} from 'lucide-react'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'
import LabReportExplainerModal from '@/components/common/LabReportExplainerModal'
import DrAryaFloatingDoctor from '@/components/common/DrAryaFloatingDoctor'
import AuthModal, { type UserProfile } from '@/components/common/AuthModal'

const mockMedications = [
  { name: 'Augmentin 625 Duo', generic: 'Amoxicillin + Clavulanate', schedule: '1 Tab Twice Daily after meals', refillDue: '3 days', color: '#0F766E', pharmacy: 'Meditrust Direct (₹154)' },
  { name: 'Pan-D SR Capsule', generic: 'Pantoprazole + Domperidone', schedule: '1 Cap Morning empty stomach', refillDue: '8 days', color: '#2563EB', pharmacy: 'Jan Aushadhi Generic (₹45)' },
  { name: 'Telma 40', generic: 'Telmisartan 40mg', schedule: '1 Tab Daily morning with water', refillDue: '21 days', color: '#D97706', pharmacy: 'Meditrust Direct (₹108)' },
]

const mockLabResults = [
  {
    test: 'Full Body Platinum Check (86 Parameters)',
    lab: 'Meditrust Direct Labs (Pune NABL Hub)',
    date: '14 Aug 2026',
    healthScore: 78,
    status: 'watch',
    aiSummary: 'Dr. Arya Analysis: Overall health is good (78/100). Liver & kidney markers are completely normal. Mild Vitamin D3 deficiency (14.2 ng/mL) and borderline HbA1c (6.9%).',
  },
  {
    test: 'Thyroid Profile Ultra (T3, T4, TSH)',
    lab: 'Thyrocare Technologies',
    date: '02 Aug 2026',
    healthScore: 92,
    status: 'normal',
    aiSummary: 'Dr. Arya Analysis: TSH is 2.1 mIU/L (Optimal). Thyroid gland metabolism is well regulated.',
  },
  {
    test: 'Lipid Profile Comprehensive',
    lab: 'Orange Health Labs (Baner Pune)',
    date: '18 Jul 2026',
    healthScore: 74,
    status: 'watch',
    aiSummary: 'Dr. Arya Analysis: Total cholesterol 210 mg/dL, LDL 142 mg/dL. Moderate dietary adjustments recommended.',
  },
]

const mockAppointments = [
  { doctor: 'Dr. R. Sharma, MD', hospital: 'Ruby Hall Clinic (Pune)', specialty: 'Internal Medicine & Diabetology', date: '22 Aug 2026', time: '11:00 AM', type: 'in-person', benefit: 'VIP Cashless Desk · Zero Wait' },
  { doctor: 'Dr. Arya AI Doctor', hospital: 'Meditrust Virtual Clinic', specialty: '24/7 AI Family Physician', date: 'Today (Anytime)', time: 'Instant Access', type: 'video', benefit: 'Free Unlimited AI Follow-up' },
]

type TabId = 'overview' | 'medications' | 'labs' | 'appointments'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabId>('overview')
  const [rxScannerOpen, setRxScannerOpen] = useState(false)
  const [reportModalOpen, setReportModalOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [user, setUser] = useState<UserProfile | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('meditrust_user')
    if (saved) {
      try {
        setUser(JSON.parse(saved))
      } catch (e) {}
    } else {
      // Default profile
      setUser({
        name: 'Aniket Deshmukh',
        phone: '+91 98230 14589',
        email: 'aniket.deshmukh@pune.in',
        city: 'Pune, Maharashtra',
        area: 'Kothrud / Baner',
        isLoggedIn: true,
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      
      {/* Dashboard Top Navigation Strip */}
      <div className="bg-white border-b border-slate-200 px-4 py-5">
        <div className="container-main">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl sm:text-2xl font-black text-slate-950">
                  {user ? `${user.name}'s Health Hub` : 'My Health Dashboard'}
                </h1>
                <span className="badge-teal badge text-2xs font-bold">
                  📍 {user?.area || 'Pune Hub'}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Connected to Dr. Arya AI · 24/7 Clinical Monitoring & Real-Time Price Tracking
              </p>
            </div>

            <div className="flex items-center gap-2.5">
              <button
                onClick={() => setRxScannerOpen(true)}
                className="btn-primary text-xs py-2.5 px-4 shadow-teal font-bold flex items-center gap-1.5 bg-gradient-to-r from-teal-700 to-teal-800"
              >
                <Upload className="w-3.5 h-3.5" /> Upload Prescription
              </button>
              <button
                onClick={() => setReportModalOpen(true)}
                className="px-3.5 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold flex items-center gap-1.5"
              >
                <Video className="w-3.5 h-3.5 text-teal-600" /> Watch Dr. Arya Video Report
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-main py-6">
        
        {/* Navigation Tabs */}
        <div className="flex gap-1 p-1 bg-white rounded-2xl border border-slate-200 mb-6 overflow-x-auto shadow-sm">
          {[
            { id: 'overview' as TabId, label: 'Overview & Health Score', icon: LayoutDashboard },
            { id: 'medications' as TabId, label: 'Active Medications (Jan Aushadhi)', icon: Pill },
            { id: 'labs' as TabId, label: 'Lab Reports & Plain Explanations', icon: FlaskConical },
            { id: 'appointments' as TabId, label: 'Doctor & Hospital Appointments', icon: Calendar },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`tab-item flex items-center gap-2 flex-1 min-w-max text-xs font-bold ${
                activeTab === tab.id ? 'active' : ''
              }`}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* 1. OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            
            {/* Quick Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: 'Overall AI Health Score', value: '78 / 100', icon: Heart, color: '#0F766E', sub: 'Good · Vitamin D action needed' },
                { label: 'Active Prescriptions', value: '3 Meds', icon: Pill, color: '#2563EB', sub: 'Saved ₹1,240 on generics' },
                { label: 'Verified Lab Reports', value: '3 Completed', icon: FlaskConical, color: '#7C3AED', sub: 'Latest: 14 Aug (Pune Hub)' },
                { label: 'Hospital VIP Status', value: 'Active', icon: Building2, color: '#D97706', sub: 'Ruby Hall & Sahyadri Desk' },
              ].map((stat) => (
                <div key={stat.label} className="card p-5 bg-white border border-slate-200">
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center"
                      style={{ background: `${stat.color}15` }}
                    >
                      <stat.icon className="w-4.5 h-4.5" style={{ color: stat.color }} />
                    </div>
                  </div>
                  <div className="text-xl font-black text-slate-900">{stat.value}</div>
                  <div className="text-xs font-bold text-slate-700 mt-0.5">{stat.label}</div>
                  <div className="text-2xs text-slate-500 mt-1">{stat.sub}</div>
                </div>
              ))}
            </div>

            {/* Dr. Arya Clinical Action Card */}
            <div className="card p-6 bg-gradient-to-r from-teal-900 via-teal-800 to-slate-900 text-white shadow-xl relative overflow-hidden">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-2xl border-2 border-teal-300 overflow-hidden shadow-lg flex-shrink-0">
                    <img src="/dr_arya.jpg" alt="Dr. Arya" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="badge bg-teal-400/20 text-teal-300 text-2xs border border-teal-300/30">
                        Dr. Arya AI Morning Briefing
                      </span>
                      <span className="text-2xs text-slate-300">Marathi / English</span>
                    </div>
                    <h3 className="text-base font-bold text-white mt-1">
                      "Aniket, your blood sugar & BP are stable. Let's optimize your Vitamin D levels."
                    </h3>
                    <p className="text-xs text-teal-100 mt-1 max-w-xl">
                      Your latest report shows Vitamin D3 at 14.2 ng/mL. I've mapped a weekly 60,000 IU supplement available at ₹45 on Jan Aushadhi (80% cheaper than open pharmacy).
                    </p>
                  </div>
                </div>

                <div className="flex gap-2 w-full md:w-auto">
                  <button
                    onClick={() => setReportModalOpen(true)}
                    className="btn-primary bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs px-5 py-3 shadow"
                  >
                    <Video className="w-3.5 h-3.5" /> Watch Video Explanation
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Lab Reports Card */}
            <div className="card p-5 bg-white border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <FlaskConical className="w-4 h-4 text-teal-700" />
                  Recent Lab Reports with Dr. Arya Plain Language Explanations
                </h3>
                <Link href="/lab-test-comparison" className="text-xs font-bold text-teal-700 hover:underline">
                  Book New Test in Pune →
                </Link>
              </div>

              <div className="space-y-3">
                {mockLabResults.map((res) => (
                  <div key={res.test} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/40 hover:bg-slate-50 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-slate-900">{res.test}</h4>
                          <span className="badge-teal badge text-3xs">{res.lab}</span>
                        </div>
                        <div className="text-2xs text-slate-500 mt-0.5">{res.date}</div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="text-right">
                          <span className="text-2xs text-slate-400">Score:</span>
                          <span className="text-sm font-black text-slate-900 ml-1">{res.healthScore}/100</span>
                        </div>
                        <button
                          onClick={() => setReportModalOpen(true)}
                          className="px-3 py-1.5 rounded-lg bg-teal-50 hover:bg-teal-100 text-teal-800 text-2xs font-bold flex items-center gap-1 border border-teal-200 transition-colors"
                        >
                          <Video className="w-3 h-3 text-teal-600" /> View Explainer
                        </button>
                      </div>
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed bg-white p-2.5 rounded-xl border border-slate-100">
                      {res.aiSummary}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Hospital & Doctor Consultations */}
            <div className="card p-5 bg-white border border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-purple-700" />
                  Upcoming Doctor Consultations & Partner Hospital Fast-Tracks
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {mockAppointments.map((appt) => (
                  <div key={appt.doctor} className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{appt.doctor}</h4>
                        <div className="text-2xs text-slate-500">{appt.specialty} · {appt.hospital}</div>
                      </div>
                      <span className="badge-purple badge text-3xs">{appt.type === 'video' ? '📹 Video' : '🏥 In-Person'}</span>
                    </div>

                    <div className="flex items-center gap-3 text-2xs text-slate-600">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {appt.date}</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {appt.time}</span>
                    </div>

                    <div className="text-2xs text-green-900 font-bold bg-green-50 p-2 rounded-lg border border-green-200">
                      🎁 {appt.benefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* 2. MEDICATIONS TAB */}
        {activeTab === 'medications' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Active Prescribed Medications</h2>
                <p className="text-xs text-slate-500">Live prices linked with Jan Aushadhi & Meditrust Price Guarantee</p>
              </div>
              <button onClick={() => setRxScannerOpen(true)} className="btn-primary text-xs">
                <Upload className="w-3.5 h-3.5" /> Scan New Prescription
              </button>
            </div>

            <div className="space-y-3">
              {mockMedications.map((med) => (
                <div key={med.name} className="card p-5 bg-white border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-slate-900">{med.name}</h4>
                      <span className="badge-teal badge text-2xs">{med.generic}</span>
                    </div>
                    <p className="text-xs text-slate-600 mt-1">{med.schedule}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="badge-green badge text-2xs">Best Order Source: {med.pharmacy}</span>
                      <span className="text-2xs text-amber-700 font-bold">Refill in {med.refillDue}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link href="/medication-comparison" className="btn-outline text-xs py-2 px-3">
                      Compare Prices
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. LABS TAB */}
        {activeTab === 'labs' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">All Diagnostic Lab Reports</h2>
                <p className="text-xs text-slate-500">Plain English explanations & Video AI consultations</p>
              </div>
              <Link href="/lab-test-comparison" className="btn-primary text-xs">
                <Plus className="w-3.5 h-3.5" /> Book Blood Test in Pune
              </Link>
            </div>

            <div className="space-y-3">
              {mockLabResults.map((res) => (
                <div key={res.test} className="card p-5 bg-white border border-slate-200 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{res.test}</h4>
                      <div className="text-2xs text-slate-500">{res.lab} · {res.date}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-black text-teal-800">{res.healthScore} / 100</div>
                      <span className="badge-teal badge text-2xs">Score Optimal</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    {res.aiSummary}
                  </p>
                  <button
                    onClick={() => setReportModalOpen(true)}
                    className="btn-outline w-full justify-center text-xs py-2.5 font-bold"
                  >
                    <Video className="w-3.5 h-3.5 text-teal-600" /> Watch Dr. Arya Video Explanation
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. APPOINTMENTS TAB */}
        {activeTab === 'appointments' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-slate-900">Partner Hospital & Doctor Appointments</h2>
                <p className="text-xs text-slate-500">Ruby Hall, Sahyadri, Jupiter & Jehangir Hospital VIP Desks</p>
              </div>
              <Link href="/symptom-checker" className="btn-primary text-xs">
                <Plus className="w-3.5 h-3.5" /> Consult Dr. Arya for Referral
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {mockAppointments.map((appt) => (
                <div key={appt.doctor} className="card p-5 bg-white border border-slate-200 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{appt.doctor}</h4>
                      <div className="text-xs text-slate-500">{appt.specialty}</div>
                      <div className="text-xs font-bold text-teal-800 mt-0.5">{appt.hospital}</div>
                    </div>
                    <span className="badge-purple badge text-2xs">{appt.type}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-green-50 text-green-900 font-bold text-2xs border border-green-200">
                    🎁 {appt.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* Floating Doctor */}
      <DrAryaFloatingDoctor onOpenPrescriptionScanner={() => setRxScannerOpen(true)} />

      {/* Prescription Scanner Modal */}
      <PrescriptionScannerModal
        isOpen={rxScannerOpen}
        onClose={() => setRxScannerOpen(false)}
      />

      {/* Lab Report Explainer Modal */}
      <LabReportExplainerModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
      />
    </div>
  )
}
