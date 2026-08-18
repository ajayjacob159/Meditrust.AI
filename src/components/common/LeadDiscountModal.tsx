'use client'

import { useState, useEffect } from 'react'
import {
  Gift, X, Sparkles, CheckCircle2, Phone, User, MapPin,
  ArrowRight, Copy, Check, ShieldCheck, Heart, Percent
} from 'lucide-react'

export default function LeadDiscountModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('Pune')
  const [healthNeed, setHealthNeed] = useState('Full Body Blood Test (Home Pickup)')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    // Check if user already claimed discount
    const claimed = localStorage.getItem('meditrust_20_discount_claimed')
    if (!claimed) {
      // Trigger modal automatically after 6 seconds
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 6000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim() || !phone.trim()) return

    setIsSubmitting(true)
    try {
      const res = await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          phone: phone.trim(),
          city,
          healthNeed,
          couponCode: 'MEDITRUST20',
        }),
      })

      if (res.ok) {
        localStorage.setItem('meditrust_20_discount_claimed', 'true')
        setIsSubmitted(true)
      }
    } catch (err) {
      // Fallback display
      setIsSubmitted(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleCopyCode = () => {
    navigator.clipboard.writeText('MEDITRUST20')
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-fade-in">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-teal-200/80 overflow-hidden animate-scale-up">
        
        {/* Top Header Banner */}
        <div className="bg-gradient-to-r from-teal-800 via-teal-900 to-slate-950 p-6 text-white text-center relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl pointer-events-none" />
          
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-2xs uppercase tracking-wider mb-2 shadow-xs">
            <Percent className="w-3 h-3" />
            <span>Special Welcome Offer</span>
          </div>

          <h3 className="text-2xl font-black tracking-tight font-display">
            Claim Instant <span className="text-amber-400">20% OFF</span>
          </h3>
          <p className="text-xs text-teal-100 mt-1 max-w-xs mx-auto">
            Valid on 60-Minute At-Home Blood Tests & Jan Aushadhi Generic Medicine Deliveries in Pune!
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div>
                <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  Your Full Name
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 text-xs sm:text-sm font-medium outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                  WhatsApp / Mobile Number
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-teal-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 text-xs sm:text-sm font-medium outline-hidden"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    City / Area
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 text-xs font-medium bg-white"
                  >
                    <option value="Pune - Kothrud">Pune (Kothrud)</option>
                    <option value="Pune - Baner / Aundh">Pune (Baner/Aundh)</option>
                    <option value="Pune - Hinjewadi">Pune (Hinjewadi)</option>
                    <option value="Pune - Viman Nagar">Pune (Viman Nagar)</option>
                    <option value="Pune - Wakad">Pune (Wakad)</option>
                    <option value="Pune - Hadapsar">Pune (Hadapsar)</option>
                    <option value="Pune - Camp / Deccan">Pune (Camp/Deccan)</option>
                    <option value="PCMC / Pimpri">PCMC / Pimpri</option>
                    <option value="Other City">Other City</option>
                  </select>
                </div>

                <div>
                  <label className="block text-2xs font-bold uppercase tracking-wider text-slate-600 mb-1">
                    Primary Need
                  </label>
                  <select
                    value={healthNeed}
                    onChange={(e) => setHealthNeed(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:border-teal-600 text-xs font-medium bg-white"
                  >
                    <option value="Full Body Blood Test (Home Pickup)">Blood Test (Home)</option>
                    <option value="Jan Aushadhi Generic Medicines">Generic Medicines</option>
                    <option value="Dr. Arya AI Doctor Consultation">AI Doctor Triage</option>
                    <option value="Hospital VIP Admission">Hospital Admission</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-2xl bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-800 hover:to-emerald-800 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-2"
              >
                {isSubmitting ? (
                  <span>Activating Discount...</span>
                ) : (
                  <>
                    <Gift className="w-4 h-4 text-amber-300" />
                    <span>Get 20% OFF Promo Code Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-1.5 text-3xs text-slate-500 text-center pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                <span>100% Confidential · Instant coupon dispatch to your WhatsApp</span>
              </div>
            </form>
          ) : (
            <div className="text-center space-y-4 py-2">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-1">
                <h4 className="text-xl font-black text-slate-900">
                  🎉 20% Discount Activated!
                </h4>
                <p className="text-xs text-slate-600">
                  Thank you, <strong>{name}</strong>! Your exclusive promo code is ready to use:
                </p>
              </div>

              {/* Coupon Code Card */}
              <div className="p-4 rounded-2xl bg-teal-50 border-2 border-dashed border-teal-500 flex items-center justify-between gap-2">
                <div className="text-left">
                  <div className="text-3xs text-teal-700 font-bold uppercase">Promo Coupon Code</div>
                  <div className="text-xl font-black tracking-widest text-teal-950 font-mono">
                    MEDITRUST20
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs transition-colors shadow-2xs"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <a
                  href={`https://wa.me/917028025717?text=Hi%20Meditrust%20AI,%20I%20claimed%20my%2020%25%20Discount%20Code:%20MEDITRUST20.%20My%20name%20is%20${encodeURIComponent(name)}%20and%20I%20need%20${encodeURIComponent(healthNeed)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow transition-colors"
                >
                  <span>Book via WhatsApp with 20% OFF</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => setIsOpen(false)}
                  className="text-xs text-slate-500 hover:text-slate-700 font-medium py-1"
                >
                  Continue Browsing
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
