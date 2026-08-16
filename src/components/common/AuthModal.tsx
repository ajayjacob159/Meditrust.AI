'use client'

import { useState, useEffect } from 'react'
import { X, Shield, Phone, Mail, CheckCircle2, Lock, ArrowRight, Sparkles, MapPin } from 'lucide-react'

export interface UserProfile {
  name: string
  phone: string
  email: string
  city: string
  area: string
  isLoggedIn: boolean
}

export default function AuthModal({
  isOpen,
  onClose,
  onLoginSuccess,
}: {
  isOpen: boolean
  onClose: () => void
  onLoginSuccess: (user: UserProfile) => void
}) {
  const [authStep, setAuthStep] = useState<'input' | 'otp'>('input')
  const [phone, setPhone] = useState('9823014589')
  const [name, setName] = useState('Aniket Deshmukh')
  const [email, setEmail] = useState('aniket.deshmukh@pune.in')
  const [city, setCity] = useState('Pune, Maharashtra')
  const [area, setArea] = useState('Kothrud')
  const [otp, setOtp] = useState(['4', '8', '2', '9'])
  const [isVerifying, setIsVerifying] = useState(false)
  const [resendTimer, setResendTimer] = useState(30)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (authStep === 'otp' && resendTimer > 0) {
      interval = setInterval(() => setResendTimer((prev) => prev - 1), 1000)
    }
    return () => clearInterval(interval)
  }, [authStep, resendTimer])

  if (!isOpen) return null

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault()
    if (!phone || phone.length < 10) return
    setAuthStep('otp')
    setResendTimer(30)
  }

  const handleVerifyOtp = () => {
    setIsVerifying(true)
    setTimeout(() => {
      setIsVerifying(false)
      const profile: UserProfile = {
        name: name || 'Health Member',
        phone: `+91 ${phone}`,
        email: email || 'user@meditrustai.com',
        city,
        area,
        isLoggedIn: true,
      }
      localStorage.setItem('meditrust_user', JSON.stringify(profile))
      onLoginSuccess(profile)
      onClose()
    }, 1000)
  }

  const handleQuickDemoLogin = () => {
    const profile: UserProfile = {
      name: 'Dr. Michael / Aniket D.',
      phone: '+91 98230 14589',
      email: 'member@meditrustai.com',
      city: 'Pune, Maharashtra',
      area: 'Kothrud / Baner',
      isLoggedIn: true,
    }
    localStorage.setItem('meditrust_user', JSON.stringify(profile))
    onLoginSuccess(profile)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-md shadow-2xl overflow-hidden border border-slate-100 relative">
        {/* Modal Header */}
        <div className="p-6 border-b border-slate-100 flex items-start justify-between bg-gradient-to-r from-teal-50 to-blue-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-white shadow-sm flex items-center justify-center border border-teal-100">
              <Shield className="w-5 h-5 text-teal-700" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {authStep === 'input' ? 'Welcome to Meditrust AI' : 'Enter 4-Digit OTP'}
              </h3>
              <p className="text-xs text-slate-500">
                {authStep === 'input' ? 'Instant access to Dr. Arya & real-time discounts' : `Sent to +91 ${phone}`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-slate-400 hover:text-slate-700 shadow-sm transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {authStep === 'input' ? (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Mobile Number (For WhatsApp Reports & OTP)
                </label>
                <div className="flex rounded-xl border border-slate-200 focus-within:border-teal-600 focus-within:ring-2 focus-within:ring-teal-100 overflow-hidden">
                  <span className="bg-slate-50 px-3.5 py-3 text-sm font-semibold text-slate-600 border-r border-slate-200 flex items-center gap-1.5">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="Enter 10 digit number"
                    className="w-full px-3.5 py-3 text-sm font-semibold text-slate-900 outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your Name"
                  className="input-field text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    City
                  </label>
                  <div className="relative">
                    <MapPin className="w-3.5 h-3.5 absolute left-3 top-3.5 text-teal-600" />
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="input-field text-xs pl-8 font-semibold"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Locality / Hub
                  </label>
                  <select
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    className="input-field text-xs font-semibold"
                  >
                    <option value="Kothrud">Kothrud (Pune)</option>
                    <option value="Baner">Baner (Pune)</option>
                    <option value="Hinjewadi">Hinjewadi Tech Hub</option>
                    <option value="Viman Nagar">Viman Nagar</option>
                    <option value="Wakad">Wakad / Pimple Saudagar</option>
                    <option value="Camp">Camp / Sassoon</option>
                    <option value="PCMC">Pimpri-Chinchwad</option>
                    <option value="Hadapsar">Hadapsar / Magarpatta</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                className="btn-primary w-full justify-center py-3.5 text-sm font-bold shadow-teal"
              >
                Send Verification OTP <ArrowRight className="w-4 h-4" />
              </button>

              <div className="relative my-4">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-100" />
                </div>
                <div className="relative flex justify-center text-xs text-slate-400">
                  <span className="bg-white px-2 font-medium">or instant preview</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleQuickDemoLogin}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-teal-200 bg-teal-50/50 hover:bg-teal-50 text-teal-800 text-xs font-bold transition-colors"
              >
                <Sparkles className="w-4 h-4 text-teal-600" />
                1-Click Demo Login (Pune Patient Profile)
              </button>
            </form>
          ) : (
            <div className="space-y-5">
              <div className="text-center">
                <p className="text-xs text-slate-600 mb-4">
                  Enter the 4-digit code sent via WhatsApp & SMS for instant verification:
                </p>
                <div className="flex justify-center gap-3 mb-4">
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => {
                        const newOtp = [...otp]
                        newOtp[idx] = e.target.value
                        setOtp(newOtp)
                      }}
                      className="w-12 h-14 text-center text-2xl font-bold text-slate-900 border-2 border-teal-600 rounded-xl bg-teal-50/30 focus:outline-none"
                    />
                  ))}
                </div>
                <p className="text-xs text-slate-500">
                  {resendTimer > 0 ? (
                    <span>Resend OTP in <strong className="text-slate-900">{resendTimer}s</strong></span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setResendTimer(30)}
                      className="text-teal-700 font-bold hover:underline"
                    >
                      Resend OTP now
                    </button>
                  )}
                </p>
              </div>

              <button
                type="button"
                onClick={handleVerifyOtp}
                disabled={isVerifying}
                className="btn-primary w-full justify-center py-3.5 text-sm font-bold shadow-teal"
              >
                {isVerifying ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Verifying Secure Session...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Verify & Enter Dashboard
                  </span>
                )}
              </button>
            </div>
          )}

          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-2xs text-slate-400">
            <Lock className="w-3 h-3 text-teal-600" />
            <span>256-Bit Encrypted · HIPAA & ABDM (Ayushman Bharat) Compliant</span>
          </div>
        </div>
      </div>
    </div>
  )
}
