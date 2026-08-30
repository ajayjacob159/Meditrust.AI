'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  Phone, Mail, Lock, Building2, ShieldCheck, Sparkles,
  ArrowRight, Check, CheckCircle2, ChevronRight, UserPlus, Heart
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

export default function LoginPage() {
  const router = useRouter()
  const { loginWithMobile, loginWithEmail, loginWithCorporateSso, isAuthenticated } = useAuth()

  const [tab, setTab] = useState<'mobile' | 'email' | 'corporate'>('mobile')
  const [mobileNumber, setMobileNumber] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otpCode, setOtpCode] = useState('')
  const [userName, setUserName] = useState('')
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [workEmail, setWorkEmail] = useState('')
  const [companyName, setCompanyName] = useState('Infosys')

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  // If already authenticated, redirect to account
  if (isAuthenticated) {
    if (typeof window !== 'undefined') {
      router.push('/account')
    }
  }

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!mobileNumber || mobileNumber.length < 10) {
      setError('Please enter a valid 10-digit mobile number')
      return
    }
    setError('')
    setLoading(true)
    setTimeout(() => {
      setOtpSent(true)
      setLoading(false)
    }, 600)
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!otpCode || otpCode.length < 4) {
      setError('Please enter the 6-digit OTP (Demo code: 123456)')
      return
    }
    setLoading(true)
    await loginWithMobile(`+91 ${mobileNumber}`, otpCode, userName || 'Sister')
    setLoading(false)
    router.push('/account')
  }

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }
    setLoading(true)
    await loginWithEmail(email, password)
    setLoading(false)
    router.push('/account')
  }

  const handleCorporateLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!workEmail || !workEmail.includes('@')) {
      setError('Please enter your official work email')
      return
    }
    setLoading(true)
    await loginWithCorporateSso(workEmail, companyName)
    setLoading(false)
    router.push('/account')
  }

  const handleDemoQuickLogin = async () => {
    setLoading(true)
    await loginWithMobile('+91 98765 43210', '123456', 'Pooja Sharma')
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
          <span className="text-slate-900 font-semibold">Sign In to Meditrust</span>
        </nav>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Value Prop & Security Banner */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-100 border border-rose-200 text-rose-900 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-rose-600" />
                <span>MEMBER PORTAL · 24×7 ACCESS</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                One Account for All Your <span className="text-gradient-chic">Healthcare Needs</span>
              </h1>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Access Dr. Arya AI Doctor, track Meditrust Sakhi™ period care orders, store blood reports in MediVault, and save 80% on Jan Aushadhi generic medicines.
              </p>
            </div>

            {/* Feature Checkpoints */}
            <div className="space-y-3 pt-2">
              {[
                { title: '24/7 AI Doctor Council', desc: 'Real-time triage in Marathi, Hindi, English' },
                { title: 'Sakhi™ Period Care Store', desc: '100% rash-free pads, heat patches & PCOS kits' },
                { title: 'MediVault™ Health Locker', desc: '14-digit ABHA linked digital records' },
                { title: 'Corporate Wellness Credit', desc: '₹2,500 health wallet for covered employees' },
              ].map((feat, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-7 h-7 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600 flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-xs font-bold text-slate-900 block">{feat.title}</strong>
                    <span className="text-3xs text-slate-500 font-normal">{feat.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Compliance Badge */}
            <div className="flex items-center gap-2 text-3xs text-slate-500 pt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% ABDM, HIPAA &amp; CDSCO Telemedicine Compliant</span>
            </div>
          </div>

          {/* Right Column: Sign In Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-950">Sign In to Your Account</h2>
                  <p className="text-xs text-slate-500">Choose your preferred login method below</p>
                </div>
                <div className="w-10 h-10 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-xl shadow-2xs">
                  🌸
                </div>
              </div>

              {/* Login Method Tabs */}
              <div className="grid grid-cols-3 gap-1.5 p-1.5 bg-slate-100 rounded-2xl text-xs font-bold text-slate-600">
                <button
                  type="button"
                  onClick={() => { setTab('mobile'); setError(''); }}
                  className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                    tab === 'mobile' ? 'bg-white text-slate-950 shadow-xs' : 'hover:text-slate-900'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Mobile OTP</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setTab('email'); setError(''); }}
                  className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                    tab === 'email' ? 'bg-white text-slate-950 shadow-xs' : 'hover:text-slate-900'
                  }`}
                >
                  <Mail className="w-3.5 h-3.5 text-blue-600" />
                  <span>Email</span>
                </button>

                <button
                  type="button"
                  onClick={() => { setTab('corporate'); setError(''); }}
                  className={`py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                    tab === 'corporate' ? 'bg-white text-slate-950 shadow-xs' : 'hover:text-slate-900'
                  }`}
                >
                  <Building2 className="w-3.5 h-3.5 text-purple-600" />
                  <span>Corporate</span>
                </button>
              </div>

              {error && (
                <div className="p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold text-center">
                  {error}
                </div>
              )}

              {/* ── TAB 1: MOBILE OTP ── */}
              {tab === 'mobile' && (
                <div>
                  {!otpSent ? (
                    <form onSubmit={handleSendOtp} className="space-y-4 text-xs">
                      <div className="space-y-1">
                        <label className="font-bold text-slate-700">Your Full Name (Optional)</label>
                        <input
                          type="text"
                          placeholder="e.g. Pooja Sharma"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          className="w-full p-3.5 rounded-2xl border border-slate-200 focus:outline-rose-500 font-medium"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-bold text-slate-700">10-Digit Mobile Number (India) *</label>
                        <div className="flex gap-2">
                          <span className="p-3.5 rounded-2xl bg-slate-100 border border-slate-200 text-slate-700 font-bold">
                            +91
                          </span>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            placeholder="98765 43210"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                            className="flex-1 p-3.5 rounded-2xl border border-slate-200 focus:outline-rose-500 font-mono text-sm"
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        {loading ? 'Sending SMS OTP...' : 'Send 6-Digit OTP'}
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </form>
                  ) : (
                    <form onSubmit={handleVerifyOtp} className="space-y-4 text-xs">
                      <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs">
                        OTP sent to <strong>+91 {mobileNumber}</strong>. (For instant demo login, enter <strong>123456</strong>).
                      </div>

                      <div className="space-y-1">
                        <label className="font-bold text-slate-700">Enter 6-Digit OTP</label>
                        <input
                          type="text"
                          required
                          maxLength={6}
                          placeholder="123456"
                          value={otpCode}
                          onChange={(e) => setOtpCode(e.target.value)}
                          className="w-full p-3.5 rounded-2xl border border-slate-200 text-center font-mono text-2xl tracking-widest focus:outline-rose-500 font-bold"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
                      >
                        {loading ? 'Verifying...' : 'Verify & Sign In'}
                        <Check className="w-4 h-4" />
                      </button>

                      <button
                        type="button"
                        onClick={() => setOtpSent(false)}
                        className="w-full text-center text-slate-500 text-xs hover:text-slate-800"
                      >
                        Change mobile number
                      </button>
                    </form>
                  )}
                </div>
              )}

              {/* ── TAB 2: EMAIL / PASSWORD ── */}
              {tab === 'email' && (
                <form onSubmit={handleEmailLogin} className="space-y-4 text-xs">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="pooja.sharma@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3.5 rounded-2xl border border-slate-200 focus:outline-rose-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <label className="font-bold text-slate-700">Password</label>
                      <a href="#" className="text-3xs text-rose-600 hover:underline">Forgot password?</a>
                    </div>
                    <input
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full p-3.5 rounded-2xl border border-slate-200 focus:outline-rose-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? 'Signing In...' : 'Sign In with Email'}
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}

              {/* ── TAB 3: CORPORATE EMPLOYEE SSO ── */}
              {tab === 'corporate' && (
                <form onSubmit={handleCorporateLogin} className="space-y-4 text-xs">
                  <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-purple-950 space-y-1">
                    <div className="flex items-center gap-1.5 font-bold">
                      <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                      <span>₹2,500 Corporate Health Wallet Included</span>
                    </div>
                    <p className="text-3xs text-purple-800 leading-relaxed font-normal">
                      Log in with your official company email to unlock employer-sponsored gynaecologist consultations, MediVault, and Jan Aushadhi generic delivery.
                    </p>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Select Employer</label>
                    <select
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full p-3.5 rounded-2xl border border-slate-200 bg-white focus:outline-purple-500 font-medium"
                    >
                      <option value="Infosys">Infosys Technologies</option>
                      <option value="TCS">Tata Consultancy Services (TCS)</option>
                      <option value="Tech Mahindra">Tech Mahindra (Hinjewadi / Pune)</option>
                      <option value="Wipro">Wipro Enterprise</option>
                      <option value="Cognizant">Cognizant Technology Solutions</option>
                      <option value="Other Corporate Partner">Other Employer Partner</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Corporate Work Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@infosys.com"
                      value={workEmail}
                      onChange={(e) => setWorkEmail(e.target.value)}
                      className="w-full p-3.5 rounded-2xl border border-slate-200 focus:outline-purple-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? 'Authenticating...' : 'Sign In via Corporate SSO'}
                  </button>
                </form>
              )}

              {/* Quick Demo Login Option */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleDemoQuickLogin}
                  className="w-full py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors flex items-center justify-center gap-2"
                >
                  <span>⚡ 1-Click Fast Demo Login (Pooja Sharma · PCOS Member)</span>
                </button>
              </div>

              {/* Bottom Switch to Sign Up */}
              <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-600">
                <span>Don&apos;t have an account yet? </span>
                <Link href="/signup" className="text-rose-600 font-bold hover:underline">
                  Create Account / Sign Up →
                </Link>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
