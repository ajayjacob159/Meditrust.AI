'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  User, Phone, Mail, Lock, ShieldCheck, Sparkles, Building2,
  CheckCircle2, ArrowRight, ChevronRight, Heart
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

export default function SignupPage() {
  const router = useRouter()
  const { signup, isAuthenticated } = useAuth()

  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [lifeStage, setLifeStage] = useState<any>('PCOS')
  const [isCorporate, setIsCorporate] = useState(false)
  const [companyName, setCompanyName] = useState('Infosys')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // If already authenticated, redirect to account
  if (isAuthenticated) {
    if (typeof window !== 'undefined') {
      router.push('/account')
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName) {
      setError('Please enter your full name')
      return
    }
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }
    if (!phone || phone.length < 10) {
      setError('Please enter a valid 10-digit mobile number')
      return
    }

    setLoading(true)
    setError('')

    await signup({
      name: fullName,
      email,
      phone: `+91 ${phone}`,
      lifeStage,
      isCorporateEmployee: isCorporate,
      companyName: isCorporate ? companyName : undefined,
    })

    setLoading(false)
    router.push('/account')
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-20 sm:pt-24 pb-20">
      
      {/* ── BREADCRUMBS ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">Create Meditrust Account</span>
        </nav>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Personalized Women's Journey Welcome */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-900 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                <span>JOIN 15+ LAKH INDIAN WOMEN</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Personalized Healthcare &amp; <span className="text-gradient-chic">Period Care Routine</span>
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Join Meditrust AI to receive customized clinical recommendations from <strong>Dr. Arya AI</strong>, order rash-free period essentials, and manage your health records effortlessly.
              </p>
            </div>

            {/* Why Join Benefits */}
            <div className="space-y-3 pt-2">
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <strong className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-rose-500" />
                  <span>Life Stage-Specific Period &amp; PCOS Care</span>
                </strong>
                <p className="text-3xs text-slate-500 leading-relaxed">
                  Tailored product kits, symptom triage, and diet plans from your first period to menopause.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <strong className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-purple-600" />
                  <span>Corporate Employer Coverage</span>
                </strong>
                <p className="text-3xs text-slate-500 leading-relaxed">
                  Employees at Infosys, TCS, Wipro &amp; partner companies receive ₹2,500 wellness credits.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <strong className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>ABDM 14-Digit ABHA Linked MediVault™</span>
                </strong>
                <p className="text-3xs text-slate-500 leading-relaxed">
                  Encrypted digital blood reports and instant plain-language AI explanations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Registration Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-950">Create Your Account</h2>
                  <p className="text-xs text-slate-500">Free registration · Instant account activation</p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-xl shadow-2xs">
                  🌸
                </div>
              </div>

              {error && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold text-center">
                  {error}
                </div>
              )}

              <form onSubmit={handleSignup} className="space-y-4 text-xs">
                
                {/* Full Name */}
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pooja Sharma"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full p-3.5 rounded-2xl border border-slate-200 focus:outline-rose-500 font-medium"
                  />
                </div>

                {/* Mobile & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Mobile Number (India) *</label>
                    <div className="flex gap-2">
                      <span className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 text-slate-700 font-bold">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                        className="flex-1 p-3.5 rounded-2xl border border-slate-200 focus:outline-rose-500 font-mono text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="pooja@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3.5 rounded-2xl border border-slate-200 focus:outline-rose-500"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Create Password</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-3.5 rounded-2xl border border-slate-200 focus:outline-rose-500"
                  />
                </div>

                {/* Health & Life Stage Selector */}
                <div className="space-y-1.5 pt-1">
                  <label className="font-bold text-slate-700 block">
                    Choose Your Current Health &amp; Life Stage:
                  </label>
                  <select
                    value={lifeStage}
                    onChange={(e) => setLifeStage(e.target.value)}
                    className="w-full p-3.5 rounded-2xl border border-slate-200 bg-white focus:outline-rose-500 font-medium text-xs text-slate-900"
                  >
                    <option value="Teen">🌱 Teen &amp; First Period (Ages 10–18)</option>
                    <option value="Menstrual">🩸 Menstrual Health &amp; Cramps (Ages 15–28)</option>
                    <option value="PCOS">🌸 PCOS &amp; Acne Defense (Ages 18–35)</option>
                    <option value="Fertility">🥚 Fertility &amp; Pre-Conception (Ages 22–38)</option>
                    <option value="Pregnancy">🤰 Maternity &amp; Trimesters</option>
                    <option value="Postpartum">🤱 New Mother &amp; Lactation (0–2 Years)</option>
                    <option value="Menopause">🦋 Perimenopause &amp; Midlife (Ages 40+)</option>
                  </select>
                </div>

                {/* Corporate Toggle */}
                <div
                  onClick={() => setIsCorporate(!isCorporate)}
                  className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                    isCorporate ? 'bg-purple-50 border-purple-400' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Building2 className={`w-4 h-4 ${isCorporate ? 'text-purple-600' : 'text-slate-400'}`} />
                    <div>
                      <span className="font-bold text-slate-900 block text-xs">
                        I am covered by Corporate Health Benefits
                      </span>
                      <span className="text-3xs text-slate-500">
                        Unlock ₹2,500 employer wellness credit for store &amp; diagnostics
                      </span>
                    </div>
                  </div>
                  <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                    isCorporate ? 'border-purple-600 bg-purple-600 text-white' : 'border-slate-300'
                  }`}>
                    {isCorporate && <CheckCircle2 className="w-3 h-3" />}
                  </div>
                </div>

                {isCorporate && (
                  <div className="space-y-1 pt-1 animate-fadeIn">
                    <label className="font-bold text-slate-700">Select Employer</label>
                    <select
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full p-3.5 rounded-2xl border border-purple-200 bg-purple-50/50 text-slate-900 font-medium"
                    >
                      <option value="Infosys">Infosys Technologies</option>
                      <option value="TCS">Tata Consultancy Services (TCS)</option>
                      <option value="Tech Mahindra">Tech Mahindra (Hinjewadi / Pune)</option>
                      <option value="Wipro">Wipro Enterprise</option>
                      <option value="Cognizant">Cognizant Technology Solutions</option>
                      <option value="Other Corporate Partner">Other Employer Partner</option>
                    </select>
                  </div>
                )}

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? 'Activating Account...' : 'Complete Sign Up & Enter Hub'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              {/* Switch to Login */}
              <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-600">
                <span>Already have a Meditrust account? </span>
                <Link href="/login" className="text-rose-600 font-bold hover:underline">
                  Sign In →
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
