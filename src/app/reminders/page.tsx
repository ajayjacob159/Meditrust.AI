'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Bell, Pill, Calendar, Clock, Plus, CheckCircle2, MessageSquare,
  Sparkles, Trash2, AlertCircle, Phone, Share2, Shield, Heart
} from 'lucide-react'

interface ReminderItem {
  id: string
  name: string
  type: 'medication' | 'doctor' | 'lab_test' | 'water'
  time: string
  dosage: string
  frequency: string
  instructions: string
  active: boolean
  whatsappAlert: boolean
}

const INITIAL_REMINDERS: ReminderItem[] = [
  {
    id: 'rem-1',
    name: 'Metformin 500mg SR',
    type: 'medication',
    time: '08:30 AM (Breakfast)',
    dosage: '1 Tablet',
    frequency: 'Daily (Morning)',
    instructions: 'Take with or immediately after food to prevent stomach upset.',
    active: true,
    whatsappAlert: true,
  },
  {
    id: 'rem-2',
    name: 'Telma 40 (Telmisartan)',
    type: 'medication',
    time: '09:00 AM (Morning)',
    dosage: '1 Tablet (40mg)',
    frequency: 'Daily (Morning)',
    instructions: 'Take with a glass of water at the same time every morning.',
    active: true,
    whatsappAlert: true,
  },
  {
    id: 'rem-3',
    name: 'Pan-D SR Capsule',
    type: 'medication',
    time: '07:30 AM (Empty Stomach)',
    dosage: '1 Capsule',
    frequency: 'Daily (Morning)',
    instructions: 'Take 30 minutes before tea or breakfast.',
    active: true,
    whatsappAlert: true,
  },
  {
    id: 'rem-4',
    name: 'Quarterly HbA1c & Lipid Profile',
    type: 'lab_test',
    time: '15 Nov 2026',
    dosage: '60-Min Doorstep Sample',
    frequency: 'Every 3 Months',
    instructions: '10 hours overnight fasting required. Certified phlebotomist arrives at home.',
    active: true,
    whatsappAlert: true,
  },
  {
    id: 'rem-5',
    name: 'Cardiology Review — Dr. R. Sharma',
    type: 'doctor',
    time: '22 Aug 2026 · 11:00 AM',
    dosage: 'Ruby Hall Clinic Pune',
    frequency: 'Follow-up Consultation',
    instructions: 'VIP Cashless Desk · Zero wait time pass active.',
    active: true,
    whatsappAlert: true,
  },
]

export default function RemindersPage() {
  const [reminders, setReminders] = useState<ReminderItem[]>(INITIAL_REMINDERS)
  const [newMedName, setNewMedName] = useState('')
  const [newTime, setNewTime] = useState('08:00 AM')
  const [newDosage, setNewDosage] = useState('1 Tablet')
  const [newInstructions, setNewInstructions] = useState('After meals')
  const [showAddModal, setShowAddModal] = useState(false)
  const [phoneForWhatsApp, setPhoneForWhatsApp] = useState('7028025717')
  const [alertSent, setAlertSent] = useState(false)

  const handleToggle = (id: string) => {
    setReminders(
      reminders.map((r) => (r.id === id ? { ...r, active: !r.active } : r))
    )
  }

  const handleDelete = (id: string) => {
    setReminders(reminders.filter((r) => r.id !== id))
  }

  const handleAddReminder = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newMedName.trim()) return

    const newItem: ReminderItem = {
      id: `rem-${Date.now()}`,
      name: newMedName,
      type: 'medication',
      time: newTime,
      dosage: newDosage,
      frequency: 'Daily',
      instructions: newInstructions,
      active: true,
      whatsappAlert: true,
    }

    setRecordsState: setReminders([newItem, ...reminders])
    setNewMedName('')
    setShowAddModal(false)
  }

  const handleSyncToWhatsApp = () => {
    const text = `Hi Dr. Arya, please enable WhatsApp daily health and medicine alerts for my profile:\n${reminders
      .filter((r) => r.active)
      .map((r) => `• ${r.name} at ${r.time} (${r.dosage})`)
      .join('\n')}`
    window.open(`https://wa.me/917028025717?text=${encodeURIComponent(text)}`, '_blank')
    setAlertSent(true)
    setTimeout(() => setAlertSent(false), 5000)
  }

  return (
    <div className="min-h-screen bg-slate-900/5 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="bg-teal-500/20 text-teal-300 border border-teal-400/30 text-2xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  <Bell className="w-3.5 h-3.5 text-emerald-400" />
                  Smart Health &amp; Medication Reminders
                </span>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 text-2xs font-bold px-2.5 py-1 rounded-full">
                  WhatsApp Bot Sync
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-display">
                Never Miss a Dose or <span className="text-emerald-400">Doctor Appointment</span>
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Stay consistent with your chronic care routine. Set smart reminders for morning, afternoon, and night doses, doctor visits, and repeat blood tests with 1-click WhatsApp alerts.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => setShowAddModal(true)}
                className="btn-teal flex items-center gap-2 text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl shadow-lg"
              >
                <Plus className="w-4 h-4" />
                <span>Add Reminder</span>
              </button>

              <button
                onClick={handleSyncToWhatsApp}
                className="bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-2 text-xs sm:text-sm font-bold px-4 py-3 rounded-2xl shadow-lg transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Sync to WhatsApp</span>
              </button>
            </div>
          </div>
        </div>

        {/* WhatsApp Notification Alert Card */}
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-emerald-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900">
                Receive Timely Reminders on WhatsApp (+91 7028025717)
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Dr. Arya sends compassionate reminder nudges directly to your WhatsApp so you never skip essential BP, Sugar, or Thyroid doses.
              </p>
            </div>
          </div>

          <button
            onClick={handleSyncToWhatsApp}
            className="px-4 py-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-xs font-bold rounded-xl border border-emerald-300 transition-colors whitespace-nowrap"
          >
            {alertSent ? '✓ Sent to WhatsApp' : 'Enable WhatsApp Bot →'}
          </button>
        </div>

        {/* Reminders List */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-bold text-slate-500 px-1">
            <span>Active Reminders ({reminders.filter((r) => r.active).length} of {reminders.length})</span>
            <span>All Timings in IST (Indian Standard Time)</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reminders.map((reminder) => (
              <div
                key={reminder.id}
                className={`bg-white rounded-3xl p-5 border transition-all ${
                  reminder.active ? 'border-slate-200 shadow-sm' : 'border-slate-100 opacity-60 bg-slate-50'
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-lg flex-shrink-0 ${
                      reminder.type === 'medication' ? 'bg-teal-50 text-teal-700' :
                      reminder.type === 'doctor' ? 'bg-purple-50 text-purple-700' : 'bg-blue-50 text-blue-700'
                    }`}>
                      {reminder.type === 'medication' ? '💊' : reminder.type === 'doctor' ? '🩺' : '🩸'}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="font-bold text-sm text-slate-900">{reminder.name}</h4>
                        <span className="text-3xs bg-slate-100 text-slate-700 font-bold px-2 py-0.5 rounded-full">
                          {reminder.frequency}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-teal-700 font-bold mt-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{reminder.time}</span>
                        <span>•</span>
                        <span className="text-slate-600 font-medium">{reminder.dosage}</span>
                      </div>

                      <p className="text-2xs text-slate-500 mt-2 leading-relaxed">
                        {reminder.instructions}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <input
                      type="checkbox"
                      checked={reminder.active}
                      onChange={() => handleToggle(reminder.id)}
                      className="w-5 h-5 accent-teal-700 cursor-pointer rounded"
                    />
                    <button
                      onClick={() => handleDelete(reminder.id)}
                      className="text-slate-300 hover:text-rose-500 p-1 transition-colors"
                      title="Delete reminder"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Add Reminder Modal */}
        {showAddModal && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-200 space-y-4 animate-fade-in">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-teal-600" />
                  <span>Add New Health Reminder</span>
                </h3>
                <button
                  onClick={() => setShowAddModal(false)}
                  className="text-slate-400 hover:text-slate-700 font-bold text-sm"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleAddReminder} className="space-y-3 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Medication or Test Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Thyronorm 50mcg / Sugar Fasting Test"
                    value={newMedName}
                    onChange={(e) => setNewMedName(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-teal-600"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Time</label>
                    <input
                      type="text"
                      placeholder="08:00 AM"
                      value={newTime}
                      onChange={(e) => setNewTime(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-teal-600"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Dosage</label>
                    <input
                      type="text"
                      placeholder="1 Tablet / 5 mL"
                      value={newDosage}
                      onChange={(e) => setNewDosage(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-teal-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">Special Instructions</label>
                  <input
                    type="text"
                    placeholder="e.g. 30 mins before breakfast with warm water"
                    value={newInstructions}
                    onChange={(e) => setNewInstructions(e.target.value)}
                    className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:border-teal-600"
                  />
                </div>

                <div className="pt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 btn-teal font-bold rounded-xl shadow-sm"
                  >
                    Save Reminder
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
