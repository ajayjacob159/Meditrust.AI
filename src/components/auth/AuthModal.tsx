'use client'

import { useState } from 'react'
import {
  X, Phone, Mail, Lock, ShieldCheck, Sparkles, Building2,
  CheckCircle2, ArrowRight, User, Check, Heart, Shield
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

export default function AuthModal() {
  const {
    isAuthModalOpen,
    authModalMode,
    closeAuthModal,
    loginWithMobile,
    loginWithEmail,
    loginWithCorporateSso,
    signup,
  } = useAuth()

  const [tab, setTab] = useState<'mobile' | 'email' | 'corporate'>('mobile')
  const [mobileNumber, setMobileNumber] = useState('')
  const [otpSent, setOtpSent] = useState(false)
  const [otpCode, setOtpCode] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isSignUp, setIsSignUp] = useState(authModalMode === 'signup')
  const [lifeStage, setLifeStage] = useState<any>('PCOS')
  const [workEmail, setWorkEmail] = useState('')
  const [companyName, setCompanyName] = useState('Infosys')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  if (!isAuthModalOpen) return null

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
      setError('Please enter the 6-digit OTP sent to your phone (Demo: 123456)')
      return
    }
    setLoading(true)
    await loginWithMobile(`+91 ${mobileNumber}`, otpCode, userName || 'Sister')
    setLoading(false)
  }

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }
    setLoading(true)
    if (isSignUp) {
      await signup({
        name: userName || email.split('@')[0],
        email,
        phone: mobileNumber ? `+91 ${mobileNumber}` : '+91 98765 43210',
        lifeStage,
      })
    } else {
      await loginWithEmail(email, password)
    }
    setLoading(false)
  }

  const handleCorporateLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!workEmail || !workEmail.includes('@')) {
      setError('Please enter your official corporate email')
      return
    }
    setLoading(true)
    await loginWithCorporateSso(workEmail, companyName)
    setLoading(false)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 relative animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={closeAuthModal}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Top Branding */}
        <div className="text-center space-y-1.5 pt-2">
          <div className="w-12 h-12 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center mx-auto text-xl shadow-2xs">
            🌸
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
            {isSignUp ? 'Create Meditrust Account' : 'Welcome to Meditrust AI'}
          </h3>
          <p className="text-xs text-slate-500 font-normal">
            Access your 24/7 AI Doctor, MediVault records, and Sakhi period care store.
          </p>
        </div>

        {/* Auth Method Tabs */}
        <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-2xl text-xs font-bold text-slate-600">
          <button
            onClick={() => { setTab('mobile'); setError(''); }}
            className={`py-2 rounded-xl transition-all flex items-center justify-center gap-1 ${
              tab === 'mobile' ? 'bg-white text-slate-950 shadow-2xs' : 'hover:text-slate-900'
            }`}
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>Mobile OTP</span>
          </button>

          <button
            onClick={() => { setTab('email'); setError(''); }}
            className={`py-2 rounded-xl transition-all flex items-center justify-center gap-1 ${
              tab === 'email' ? 'bg-white text-slate-950 shadow-2xs' : 'hover:text-slate-900'
            }`}
          >
            <Mail className="w-3.5 h-3.5 text-blue-600" />
            <span>Email</span>
          </button>

          <button
            onClick={() => { setTab('corporate'); setError(''); }}
            className={`py-2 rounded-xl transition-all flex items-center justify-center gap-1 ${
              tab === 'corporate' ? 'bg-white text-slate-950 shadow-2xs' : 'hover:text-slate-900'
            }`}
          >
            <Building2 className="w-3.5 h-3.5 text-purple-600" />
            <span>Corporate</span>
          </button>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs font-bold text-center">
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
                    className="w-full p-3 rounded-xl border border-slate-200 focus:outline-rose-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Mobile Number (India)</label>
                  <div className="flex gap-2">
                    <span className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-bold">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      placeholder="98765 43210"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
                      className="flex-1 p-3 rounded-xl border border-slate-200 focus:outline-rose-500 font-mono text-sm"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {loading ? 'Sending OTP...' : 'Send 6-Digit OTP'}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4 text-xs">
                <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs">
                  OTP sent to <strong>+91 {mobileNumber}</strong>. (For demo testing, enter <strong>123456</strong>).
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
                    className="w-full p-3 rounded-xl border border-slate-200 text-center font-mono text-xl tracking-widest focus:outline-rose-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  {loading ? 'Verifying...' : 'Verify & Login to Meditrust'}
                  <Check className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setOtpSent(false)}
                  className="w-full text-center text-slate-500 text-3xs hover:text-slate-800"
                >
                  Change mobile number
                </button>
              </form>
            )}
          </div>
        )}

        {/* ── TAB 2: EMAIL / PASSWORD ── */}
        {tab === 'email' && (
          <form onSubmit={handleEmailAuth} className="space-y-4 text-xs">
            {isSignUp && (
              <>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Pooja Sharma"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 focus:outline-rose-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Current Health &amp; Life Stage</label>
                  <select
                    value={lifeStage}
                    onChange={(e) => setLifeStage(e.target.value)}
                    className="w-full p-3 rounded-xl border border-slate-200 bg-white focus:outline-rose-500"
                  >
                    <option value="Teen">🌱 Teen &amp; First Period (Ages 10–18)</option>
                    <option value="Menstrual">🩸 Menstrual Health &amp; Cramps (Ages 15–28)</option>
                    <option value="PCOS">🌸 PCOS &amp; Hormonal Balance (Ages 18–35)</option>
                    <option value="Fertility">🥚 Fertility &amp; Pre-Conception (Ages 22–38)</option>
                    <option value="Pregnancy">🤰 Maternity &amp; Trimesters</option>
                    <option value="Postpartum">🤱 New Mother &amp; Lactation (0–2 Years)</option>
                    <option value="Menopause">🦋 Perimenopause &amp; Midlife (Ages 40+)</option>
                  </select>
                </div>
              </>
            )}

            <div className="space-y-1">
              <label className="font-bold text-slate-700">Email Address</label>
              <input
                type="email"
                required
                placeholder="pooja@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-200 focus:outline-rose-500"
              />
            </div>

            <div className="space-y-1">
              <label className="font-bold text-slate-700">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-200 focus:outline-rose-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              {loading ? 'Processing...' : isSignUp ? 'Create Account' : 'Sign In'}
            </button>

            <div className="text-center pt-1">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-xs text-slate-600 hover:text-rose-600 font-bold"
              >
                {isSignUp ? 'Already have an account? Sign In' : 'New to Meditrust? Create Account'}
              </button>
            </div>
          </form>
        )}

        {/* ── TAB 3: CORPORATE EMPLOYEE SSO ── */}
        {tab === 'corporate' && (
          <form onSubmit={handleCorporateLogin} className="space-y-4 text-xs">
            <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200 text-purple-950 space-y-1">
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
                className="w-full p-3 rounded-xl border border-slate-200 bg-white focus:outline-purple-500 font-medium"
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
              <label className="font-bold text-slate-700">Corporate Work Email</label>
              <input
                type="email"
                required
                placeholder="name@infosys.com"
                value={workEmail}
                onChange={(e) => setWorkEmail(e.target.value)}
                className="w-full p-3 rounded-xl border border-slate-200 focus:outline-purple-500"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-full bg-purple-700 hover:bg-purple-800 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              {loading ? 'Authenticating...' : 'Sign In via Corporate SSO'}
            </button>
          </form>
        )}

        {/* Modal Footer Safety Note */}
        <div className="pt-2 border-t border-slate-100 text-center space-y-1">
          <div className="flex items-center justify-center gap-1.5 text-3xs text-slate-400">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>256-bit Encrypted · ABDM &amp; HIPAA Privacy Compliant</span>
          </div>
        </div>

      </div>
    </div>
  )
}
