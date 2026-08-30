'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  X, CheckCircle2, ShieldCheck, Truck, ArrowRight,
  CreditCard, Smartphone, Building2, MessageCircle,
  Copy, Check, MapPin, Sparkles, AlertCircle
} from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'

export default function CheckoutModal() {
  const {
    items,
    isCheckoutOpen,
    closeCheckout,
    finalTotal,
    cartSubtotal,
    discountAmount,
    deliveryFee,
    appliedCoupon,
    clearCart,
  } = useCart()

  const { user } = useAuth()

  const [step, setStep] = useState<'address' | 'payment' | 'success'>('address')
  
  // Address State
  const [fullName, setFullName] = useState(user?.name || '')
  const [phone, setPhone] = useState(user?.phone?.replace('+91 ', '') || '')
  const [email, setEmail] = useState(user?.email || '')
  const [street, setStreet] = useState(user?.savedAddresses?.[0]?.street || '')
  const [city, setCity] = useState(user?.savedAddresses?.[0]?.city || 'Pune / PCMC')
  const [pincode, setPincode] = useState(user?.savedAddresses?.[0]?.pincode || '411033')
  const [orderNote, setOrderNote] = useState('')

  // Payment State
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'cod' | 'corporate_wallet' | 'whatsapp'>('upi')
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderId, setOrderId] = useState('')

  if (!isCheckoutOpen) return null

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep('payment')
  }

  const handlePlaceOrder = async () => {
    setIsProcessing(true)
    const newOrderId = `MED-SAKHI-${Math.floor(100000 + Math.random() * 900000)}`
    setOrderId(newOrderId)

    if (paymentMethod === 'whatsapp') {
      const summaryItems = items.map((i) => `• ${i.name} (${i.pack}) x${i.quantity} = ₹${i.price * i.quantity}`).join('\n')
      const text = encodeURIComponent(
        `🛍️ *NEW MEDITRUST ORDER — ${newOrderId}*\n\n` +
        `👤 *Customer:* ${fullName}\n` +
        `📞 *Phone:* +91 ${phone}\n` +
        `📍 *Address:* ${street}, ${city} - ${pincode}\n\n` +
        `📦 *Items Ordered:*\n${summaryItems}\n\n` +
        `💰 *Total Amount:* ₹${finalTotal} (Payment: WhatsApp Pay)\n\n` +
        `Please confirm order dispatch & send invoice!`
      )
      window.open(`https://wa.me/917028025717?text=${text}`, '_blank')
    }

    // Call API lead capture for order persistence
    try {
      await fetch('/api/lead-capture', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fullName,
          phone: `+91 ${phone}`,
          email,
          type: 'ecommerce_order',
          details: {
            orderId: newOrderId,
            items,
            finalTotal,
            paymentMethod,
            address: { street, city, pincode },
          },
        }),
      })
    } catch (err) {
      console.log('Order lead capture offline')
    }

    setTimeout(() => {
      setIsProcessing(false)
      setStep('success')
      clearCart()
    }, 1000)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto animate-fadeIn">
        
        {/* Close Button */}
        {step !== 'success' && (
          <button
            onClick={closeCheckout}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-800 hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* ── STEP 1: DELIVERY ADDRESS ── */}
        {step === 'address' && (
          <form onSubmit={handleAddressSubmit} className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-3xs font-bold uppercase tracking-wider mb-1.5">
                <Truck className="w-3.5 h-3.5" />
                <span>Step 1 of 2: Express Delivery Details</span>
              </div>
              <h3 className="text-xl font-black text-slate-950">Where should we deliver?</h3>
              <p className="text-xs text-slate-500 font-normal">
                Discreet, tamper-proof packaging delivered in 24–48 hours across India.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="space-y-1">
                <label className="font-bold text-slate-700">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Pooja Sharma"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 focus:outline-rose-500"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Mobile Number *</label>
                <div className="flex gap-2">
                  <span className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 font-bold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    placeholder="98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    className="flex-1 p-3 rounded-xl border border-slate-200 focus:outline-rose-500 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="font-bold text-slate-700">Email Address (For Invoice &amp; Tracking) *</label>
                <input
                  type="email"
                  required
                  placeholder="pooja@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 focus:outline-rose-500"
                />
              </div>

              <div className="space-y-1 sm:col-span-2">
                <label className="font-bold text-slate-700">Complete Street Address / Flat / Landmark *</label>
                <input
                  type="text"
                  required
                  placeholder="Flat 402, Morya Residency, Near Dange Chowk"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 focus:outline-rose-500"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">City / District *</label>
                <input
                  type="text"
                  required
                  placeholder="Pune / PCMC"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-3 rounded-xl border border-slate-200 focus:outline-rose-500"
                />
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Pincode *</label>
                <input
                  type="text"
                  required
                  maxLength={6}
                  placeholder="411033"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                  className="w-full p-3 rounded-xl border border-slate-200 focus:outline-rose-500 font-mono"
                />
              </div>
            </div>

            {/* Quick Delivery Tag */}
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-3xs text-slate-600 flex items-center justify-between">
              <span className="flex items-center gap-1 font-semibold text-slate-800">
                <Truck className="w-3.5 h-3.5 text-emerald-600" />
                Estimated Delivery: <strong>24–48 Hours (Express Priority)</strong>
              </span>
              <span className="text-emerald-700 font-bold">100% Tamper-Proof Box</span>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Continue to Payment (₹{finalTotal})</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* ── STEP 2: PAYMENT METHOD ── */}
        {step === 'payment' && (
          <div className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-3xs font-bold uppercase tracking-wider mb-1.5">
                <CreditCard className="w-3.5 h-3.5" />
                <span>Step 2 of 2: Select Secure Payment</span>
              </div>
              <h3 className="text-xl font-black text-slate-950">How would you like to pay?</h3>
              <p className="text-xs text-slate-500 font-normal">
                Total Payable: <strong className="text-rose-600 text-sm">₹{finalTotal}</strong>
              </p>
            </div>

            <div className="space-y-2.5 text-xs">
              
              {/* UPI Option */}
              <div
                onClick={() => setPaymentMethod('upi')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  paymentMethod === 'upi' ? 'bg-rose-50/70 border-rose-500 shadow-xs' : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 font-bold">
                    UPI
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Instant UPI (GPay, PhonePe, Paytm, BHIM)</span>
                    <span className="text-3xs text-slate-500">Scan QR or enter UPI ID on next step</span>
                  </div>
                </div>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  paymentMethod === 'upi' ? 'border-rose-600 bg-rose-600 text-white' : 'border-slate-300'
                }`}>
                  {paymentMethod === 'upi' && <Check className="w-2.5 h-2.5" />}
                </div>
              </div>

              {/* Cash on Delivery (COD) */}
              <div
                onClick={() => setPaymentMethod('cod')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  paymentMethod === 'cod' ? 'bg-rose-50/70 border-rose-500 shadow-xs' : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">
                    💵
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Cash on Delivery (COD)</span>
                    <span className="text-3xs text-slate-500">Pay cash or UPI to delivery agent at your doorstep</span>
                  </div>
                </div>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  paymentMethod === 'cod' ? 'border-rose-600 bg-rose-600 text-white' : 'border-slate-300'
                }`}>
                  {paymentMethod === 'cod' && <Check className="w-2.5 h-2.5" />}
                </div>
              </div>

              {/* WhatsApp Instant Checkout */}
              <div
                onClick={() => setPaymentMethod('whatsapp')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  paymentMethod === 'whatsapp' ? 'bg-emerald-50/70 border-emerald-500 shadow-xs' : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-[#25d366]/20 flex items-center justify-center text-[#008069] font-bold">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block">Order &amp; Pay on WhatsApp</span>
                    <span className="text-3xs text-slate-500">Instant order dispatch to official desk (+91 7028025717)</span>
                  </div>
                </div>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  paymentMethod === 'whatsapp' ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-slate-300'
                }`}>
                  {paymentMethod === 'whatsapp' && <Check className="w-2.5 h-2.5" />}
                </div>
              </div>

              {/* Corporate Health Wallet (if eligible) */}
              <div
                onClick={() => setPaymentMethod('corporate_wallet')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  paymentMethod === 'corporate_wallet' ? 'bg-purple-50/70 border-purple-500 shadow-xs' : 'bg-white border-slate-200'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-purple-100 flex items-center justify-center text-purple-700 font-bold">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold text-slate-900 block">Corporate Health Wallet</span>
                      <span className="text-3xs bg-purple-100 text-purple-800 font-bold px-1.5 py-0.5 rounded">₹2,500 Available</span>
                    </div>
                    <span className="text-3xs text-slate-500">1-click settlement covered by employer wellness fund</span>
                  </div>
                </div>
                <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  paymentMethod === 'corporate_wallet' ? 'border-purple-600 bg-purple-600 text-white' : 'border-slate-300'
                }`}>
                  {paymentMethod === 'corporate_wallet' && <Check className="w-2.5 h-2.5" />}
                </div>
              </div>

            </div>

            {/* Action Buttons */}
            <div className="pt-3 border-t border-slate-100 flex items-center gap-3">
              <button
                type="button"
                onClick={() => setStep('address')}
                className="py-3 px-5 rounded-full border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-50"
              >
                Back
              </button>

              <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={isProcessing}
                className="flex-1 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                {isProcessing ? 'Confirming Order...' : `Place Order (₹${finalTotal})`}
                <Check className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ── STEP 3: ORDER SUCCESS ── */}
        {step === 'success' && (
          <div className="text-center space-y-5 py-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-3xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                ORDER CONFIRMED &amp; DISPATCHED
              </span>
              <h3 className="text-2xl font-black text-slate-950 pt-2">Thank you, {fullName}!</h3>
              <p className="text-xs text-slate-500">
                Your Meditrust Sakhi™ package is being packed in discreet, hygienic boxes.
              </p>
            </div>

            {/* Order Card */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left space-y-2 text-xs">
              <div className="flex justify-between items-center border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-medium">Tracking Order ID:</span>
                <span className="font-mono font-bold text-slate-900 bg-white px-2 py-0.5 rounded border border-slate-200">
                  {orderId}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Delivery Address:</span>
                <span className="font-semibold text-slate-900 truncate max-w-xs">{street}, {city}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Payment Mode:</span>
                <span className="font-bold text-emerald-700 uppercase">{paymentMethod.replace('_', ' ')} (₹{finalTotal})</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-500 font-medium">Estimated Arrival:</span>
                <span className="font-bold text-blue-600">Tomorrow by 4:00 PM</span>
              </div>
            </div>

            {/* Post-order WhatsApp Triage Action */}
            <div className="p-3.5 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-950 text-left flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
              <p className="text-3xs leading-relaxed">
                <strong>Need clinical cycle advice?</strong> Dr. Arya AI is available 24/7 on WhatsApp or Telegram to answer any queries regarding your period flow, dosage, or hormonal skincare routine.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <button
                onClick={closeCheckout}
                className="w-full py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
              >
                Continue Browsing
              </button>

              <Link
                href="/account"
                onClick={closeCheckout}
                className="w-full py-3 rounded-full bg-rose-100 hover:bg-rose-200 text-rose-900 font-bold text-xs text-center"
              >
                View in Account Hub
              </Link>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}
