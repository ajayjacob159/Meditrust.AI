'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Activity, Heart, Flame, Droplets, Moon, Footprints, ShieldCheck,
  CheckCircle2, Sparkles, Plus, TrendingUp, Award, Zap, AlertCircle,
  Apple, Clock, RefreshCw, ChevronRight, Stethoscope
} from 'lucide-react'

export default function HealthScorePage() {
  const [streakDays, setStreakDays] = useState(7)
  const [waterGlasses, setWaterGlasses] = useState(7) // Target: 10
  const [stepsToday, setStepsToday] = useState(8420) // Target: 10,000
  const [sleepHours, setSleepHours] = useState(7.5) // Target: 8.0
  const [medsTaken, setMedsTaken] = useState(true)
  const [nutritionChecked, setNutritionChecked] = useState(true)

  // Calculated Holistic Score (0-100)
  const metabolicScore = 22 // out of 25
  const cardioScore = 23 // out of 25
  const lifestyleScore = 21 // out of 25
  const adherenceScore = 22 // out of 25
  const totalHealthScore = metabolicScore + cardioScore + lifestyleScore + adherenceScore // 88/100

  const handleAddWater = () => {
    if (waterGlasses < 12) setWaterGlasses(waterGlasses + 1)
  }

  const handleAddSteps = () => {
    setStepsToday(prev => prev + 500)
  }

  return (
    <div className="min-h-screen bg-slate-900/5 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header Banner with Dynamic Radial Progress */}
        <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            
            {/* Left Column: Info & Streak */}
            <div className="lg:col-span-2 space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-teal-500/20 text-teal-300 border border-teal-400/30 text-2xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  Personal Health Intelligence Engine
                </span>
                <span className="bg-amber-400 text-slate-950 text-2xs font-black px-2.5 py-1 rounded-full flex items-center gap-1">
                  <Flame className="w-3.5 h-3.5 fill-amber-950" />
                  {streakDays}-Day Consistency Streak!
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-display">
                Dynamic Health Score: <span className="text-emerald-400">{totalHealthScore} / 100</span>
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-xl">
                Your health isn&apos;t static. Dr. Arya continuously calculates your vitality score based on your latest blood tests, daily hydration, steps, sleep, and chronic medicine adherence.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  href="/symptom-checker"
                  className="btn-teal text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl flex items-center gap-1.5 shadow-md"
                >
                  <Stethoscope className="w-4 h-4" />
                  <span>Ask Dr. Arya for Daily Plan</span>
                </Link>
                <Link
                  href="/medivault"
                  className="bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl border border-white/20 transition-colors"
                >
                  View Connected Reports →
                </Link>
              </div>
            </div>

            {/* Right Column: Visual Health Badge */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 flex flex-col items-center justify-center text-center space-y-3 backdrop-blur-sm">
              <div className="relative w-32 h-32 flex items-center justify-center">
                {/* Outer Ring */}
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-white/10"
                    strokeWidth="3.5"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-emerald-400"
                    strokeDasharray={`${totalHealthScore}, 100`}
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="none"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                </svg>
                <div className="absolute flex flex-col items-center">
                  <span className="text-3xl font-black text-white font-display">{totalHealthScore}</span>
                  <span className="text-3xs text-emerald-300 font-bold uppercase tracking-wider">Optimal</span>
                </div>
              </div>
              <p className="text-2xs text-slate-300 font-medium">
                Top 12% in Pune &amp; PCMC region for metabolic &amp; routine adherence.
              </p>
            </div>
          </div>
        </div>

        {/* ── 4 PILLARS OF HEALTH BREAKDOWN ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Pillar 1: Metabolic */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold">
                🩸
              </div>
              <span className="text-xs font-bold text-teal-800 bg-teal-50 px-2.5 py-0.5 rounded-full">
                {metabolicScore} / 25 Pts
              </span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900">Metabolic Health</h3>
              <p className="text-2xs text-slate-500 mt-0.5">Blood Sugar &amp; Lipid Profile</p>
            </div>
            <div className="space-y-1.5 text-2xs text-slate-600">
              <div className="flex justify-between">
                <span>Fasting Sugar: 118 mg/dL</span>
                <span className="text-amber-600 font-bold">Borderline</span>
              </div>
              <div className="flex justify-between">
                <span>Cholesterol: 194 mg/dL</span>
                <span className="text-emerald-600 font-bold">Optimal</span>
              </div>
              <div className="flex justify-between">
                <span>HbA1c (Aug): 6.9%</span>
                <span className="text-teal-700 font-bold">Improving</span>
              </div>
            </div>
          </div>

          {/* Pillar 2: Cardiovascular */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                ❤️
              </div>
              <span className="text-xs font-bold text-rose-800 bg-rose-50 px-2.5 py-0.5 rounded-full">
                {cardioScore} / 25 Pts
              </span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900">Cardiovascular Vitality</h3>
              <p className="text-2xs text-slate-500 mt-0.5">Blood Pressure &amp; Heart Rate</p>
            </div>
            <div className="space-y-1.5 text-2xs text-slate-600">
              <div className="flex justify-between">
                <span>Blood Pressure: 122/82</span>
                <span className="text-emerald-600 font-bold">Normal</span>
              </div>
              <div className="flex justify-between">
                <span>Resting Heart Rate: 72 bpm</span>
                <span className="text-emerald-600 font-bold">Ideal</span>
              </div>
              <div className="flex justify-between">
                <span>BMI: 23.8</span>
                <span className="text-emerald-600 font-bold">Healthy Range</span>
              </div>
            </div>
          </div>

          {/* Pillar 3: Lifestyle & Activity */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                🏃
              </div>
              <span className="text-xs font-bold text-blue-800 bg-blue-50 px-2.5 py-0.5 rounded-full">
                {lifestyleScore} / 25 Pts
              </span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900">Lifestyle &amp; Recovery</h3>
              <p className="text-2xs text-slate-500 mt-0.5">Hydration, Steps &amp; Sleep</p>
            </div>
            <div className="space-y-1.5 text-2xs text-slate-600">
              <div className="flex justify-between">
                <span>Daily Steps: {stepsToday.toLocaleString()}</span>
                <span className="text-teal-700 font-bold">84% Goal</span>
              </div>
              <div className="flex justify-between">
                <span>Water: {waterGlasses * 250} mL</span>
                <span className="text-blue-600 font-bold">70% Goal</span>
              </div>
              <div className="flex justify-between">
                <span>Sleep Duration: {sleepHours} hrs</span>
                <span className="text-purple-600 font-bold">Good</span>
              </div>
            </div>
          </div>

          {/* Pillar 4: Adherence */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                🛡️
              </div>
              <span className="text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-full">
                {adherenceScore} / 25 Pts
              </span>
            </div>
            <div>
              <h3 className="font-bold text-sm text-slate-900">Care Adherence</h3>
              <p className="text-2xs text-slate-500 mt-0.5">Medication &amp; Preventive Care</p>
            </div>
            <div className="space-y-1.5 text-2xs text-slate-600">
              <div className="flex justify-between">
                <span>Medicine On-Time: 100%</span>
                <span className="text-emerald-600 font-bold">Perfect</span>
              </div>
              <div className="flex justify-between">
                <span>Annual Blood Check: Done</span>
                <span className="text-emerald-600 font-bold">Current</span>
              </div>
              <div className="flex justify-between">
                <span>ABHA ID Sync: Active</span>
                <span className="text-teal-700 font-bold">14-Digit</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── DAILY HABIT & STREAK LOGGERS ── */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Flame className="w-5 h-5 text-amber-500" />
                <span>Today&apos;s Daily Habit Trackers &amp; Milestone Goals</span>
              </h2>
              <p className="text-xs text-slate-500">
                Log your daily healthy habits to maintain your 7-day streak and boost your Health Score.
              </p>
            </div>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              ✓ All Core Tasks On Track
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Water Tracker */}
            <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-100 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-blue-900 flex items-center gap-1.5">
                  <Droplets className="w-4 h-4 text-blue-600" /> Hydration
                </span>
                <span className="text-2xs font-bold text-blue-700">{waterGlasses} / 10 Glasses</span>
              </div>
              <div className="w-full bg-blue-200 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-full rounded-full transition-all" style={{ width: `${(waterGlasses / 10) * 100}%` }} />
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-3xs text-blue-800 font-medium">Goal: 2.5 Liters/Day</span>
                <button
                  onClick={handleAddWater}
                  className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-3xs font-bold transition-colors"
                >
                  +1 Glass
                </button>
              </div>
            </div>

            {/* Steps Tracker */}
            <div className="p-4 rounded-2xl bg-teal-50/60 border border-teal-100 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-teal-900 flex items-center gap-1.5">
                  <Footprints className="w-4 h-4 text-teal-600" /> Daily Steps
                </span>
                <span className="text-2xs font-bold text-teal-700">{stepsToday.toLocaleString()} / 10,000</span>
              </div>
              <div className="w-full bg-teal-200 h-2 rounded-full overflow-hidden">
                <div className="bg-teal-600 h-full rounded-full transition-all" style={{ width: `${Math.min((stepsToday / 10000) * 100, 100)}%` }} />
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-3xs text-teal-800 font-medium">1,580 steps to goal</span>
                <button
                  onClick={handleAddSteps}
                  className="px-2.5 py-1 bg-teal-700 hover:bg-teal-800 text-white rounded-lg text-3xs font-bold transition-colors"
                >
                  +500 Steps
                </button>
              </div>
            </div>

            {/* Sleep Tracker */}
            <div className="p-4 rounded-2xl bg-purple-50/60 border border-purple-100 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-purple-900 flex items-center gap-1.5">
                  <Moon className="w-4 h-4 text-purple-600" /> Sleep Duration
                </span>
                <span className="text-2xs font-bold text-purple-700">{sleepHours} hrs</span>
              </div>
              <div className="w-full bg-purple-200 h-2 rounded-full overflow-hidden">
                <div className="bg-purple-600 h-full rounded-full transition-all" style={{ width: `${(sleepHours / 8) * 100}%` }} />
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-3xs text-purple-800 font-medium">Deep REM: 1 hr 45 min</span>
                <span className="text-3xs text-purple-600 font-bold">Optimal</span>
              </div>
            </div>

            {/* Medicine Taken */}
            <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" /> Daily Medicines
                </span>
                <span className="text-2xs font-bold text-emerald-700">100% Taken</span>
              </div>
              <div className="w-full bg-emerald-200 h-2 rounded-full overflow-hidden">
                <div className="bg-emerald-600 h-full rounded-full transition-all" style={{ width: '100%' }} />
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-3xs text-emerald-800 font-medium">Morning &amp; Night doses logged</span>
                <Link href="/reminders" className="text-3xs text-emerald-700 font-bold hover:underline">
                  Manage →
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ── DR. ARYA ADAPTIVE CLINICAL INSIGHTS ── */}
        <div className="p-6 rounded-3xl bg-gradient-to-br from-teal-900 to-slate-950 text-white space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-400 bg-slate-900">
              <img src="/dr_arya.jpg" alt="Dr. Arya" className="w-full h-full object-cover object-top" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Dr. Arya&apos;s Personalized Daily Recommendation</h3>
              <p className="text-3xs text-teal-300">Continuous Adaptive Clinical Intelligence</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="font-bold text-emerald-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> 1. Post-Dinner 15-Minute Brisk Walk
              </div>
              <p className="text-slate-300 text-2xs leading-relaxed">
                Walking for 15 minutes after dinner will lower peak glucose spikes by up to 22% and assist in further lowering your HbA1c to the optimal &lt; 6.5% target.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1.5">
              <div className="font-bold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> 2. Complete Vitamin D3 Weekly Dose
              </div>
              <p className="text-slate-300 text-2xs leading-relaxed">
                Remember your weekly 60,000 IU Cholecalciferol dose this Sunday after a meal to boost bone density and improve immunity against seasonal viral infections.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
