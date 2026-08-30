'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ShieldCheck, ArrowRight, Check, CheckCircle2,
  Building2, Phone, CreditCard, Sparkles, ChevronRight,
  Truck, Tag, Wallet
} from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, cartTotal, discountAmount, couponCode, applyCoupon, removeCoupon, clearCart } = useCart()
  const { user, isAuthenticated } = useAuth()

  // Form State
  const [fullName, setFullName] = useState(user?.name || '')
  const [phone, setPhone] = useState(user?.phone || '')
  const [address, setAddress] = useState('')
  const [pincode, setPincode] = useState('411044')
  const [city, setCity] = useState('Pune / PCMC')

  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'cod' | 'corporate_wallet'>('upi')
  const [promoInput, setPromoInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  const [generatedOrderId, setGeneratedOrderId] = useState('')

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault()
    if (!promoInput) return
    applyCoupon(promoInput)
  }

  const handlePlaceOrder = () => {
    if (!fullName || !phone || !address) {
      alert('Please fill in your delivery name, phone number, and street address.')
      return
    }

    setLoading(true)
    const orderId = `MED-SAKHI-${Math.floor(100000 + Math.random() * 900000)}`
    
    setTimeout(() => {
      setGeneratedOrderId(orderId)
      setOrderComplete(true)
      setLoading(false)
      clearCart()
    }, 1200)
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-28 pb-24 font-sans">
        <div className="max-w-xl mx-auto px-4 text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center text-4xl shadow-md animate-bounce">
            ✓
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-black text-slate-950">Order Confirmed!</h1>
            <p className="text-sm text-slate-600">
              Thank you for trusting <strong>Meditrust Sakhi™</strong>. Your order is packed in 100% discreet neutral packaging.
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm text-left space-y-3 text-xs">
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-500 font-medium">Order ID:</span>
              <strong className="font-mono text-slate-900 font-bold">{generatedOrderId}</strong>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-500 font-medium">Delivery To:</span>
              <span className="font-bold text-slate-900">{fullName} ({phone})</span>
            </div>
            <div className="flex justify-between border-b border-slate-100 pb-2">
              <span className="text-slate-500 font-medium">Address:</span>
              <span className="text-slate-800">{address}, {city} - {pincode}</span>
            </div>
            <div className="flex justify-between font-bold text-sm text-slate-950 pt-1">
              <span>Estimated Delivery:</span>
              <span className="text-rose-600">24–48 Hours (Express)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Link
              href="/marketplace/orders"
              className="px-6 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
            >
              Track Your Order
            </Link>
            <Link
              href="/marketplace"
              className="px-6 py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/marketplace" className="hover:text-rose-600 transition-colors">Marketplace</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/marketplace/cart" className="hover:text-rose-600 transition-colors">Cart</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Express Checkout</span>
        </nav>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        <div className="border-b border-slate-200 pb-4 mb-6">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-950">Express Checkout</h1>
          <p className="text-xs text-slate-500">Fast, 256-bit encrypted checkout with discreet delivery</p>
        </div>

        {items.length === 0 ? (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 max-w-md mx-auto space-y-3">
            <p className="text-xs text-slate-500">Your bag is empty.</p>
            <Link href="/marketplace" className="px-4 py-2 rounded-full bg-rose-600 text-white font-bold text-xs inline-block">
              Return to Marketplace
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 7 Cols: Forms */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Delivery Address Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                  <span className="w-6 h-6 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center">1</span>
                  <h2 className="text-base font-black text-slate-950">Delivery Address</h2>
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
                      className="w-full p-3 rounded-2xl border border-slate-200 focus:outline-rose-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Mobile Number (SMS Updates) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 rounded-2xl border border-slate-200 focus:outline-rose-500 font-mono"
                    />
                  </div>

                  <div className="sm:col-span-2 space-y-1">
                    <label className="font-bold text-slate-700">Flat / House No. &amp; Street Address *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Flat 402, Rosewood Heights, Wakad"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full p-3 rounded-2xl border border-slate-200 focus:outline-rose-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">City / Region *</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="w-full p-3 rounded-2xl border border-slate-200 focus:outline-rose-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Pincode *</label>
                    <input
                      type="text"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      className="w-full p-3 rounded-2xl border border-slate-200 focus:outline-rose-500 font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* 2. Payment Method Card */}
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                  <span className="w-6 h-6 rounded-full bg-rose-600 text-white text-xs font-bold flex items-center justify-center">2</span>
                  <h2 className="text-base font-black text-slate-950">Payment Method</h2>
                </div>

                <div className="space-y-2 text-xs">
                  {/* UPI */}
                  <div
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      paymentMethod === 'upi' ? 'bg-rose-50 border-rose-500' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-lg">⚡</span>
                      <div>
                        <strong className="block text-slate-900 font-bold">UPI (Google Pay, PhonePe, Paytm, BHIM)</strong>
                        <span className="text-3xs text-slate-500 font-normal">Instant 1-click payment QR</span>
                      </div>
                    </div>
                    {paymentMethod === 'upi' && <Check className="w-4 h-4 text-rose-600" />}
                  </div>

                  {/* Cards */}
                  <div
                    onClick={() => setPaymentMethod('card')}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      paymentMethod === 'card' ? 'bg-rose-50 border-rose-500' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <CreditCard className="w-4 h-4 text-slate-700" />
                      <div>
                        <strong className="block text-slate-900 font-bold">Credit / Debit Card &amp; Net Banking</strong>
                        <span className="text-3xs text-slate-500 font-normal">Visa, Mastercard, RuPay, ICICI, HDFC, SBI</span>
                      </div>
                    </div>
                    {paymentMethod === 'card' && <Check className="w-4 h-4 text-rose-600" />}
                  </div>

                  {/* Corporate Wallet */}
                  <div
                    onClick={() => setPaymentMethod('corporate_wallet')}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      paymentMethod === 'corporate_wallet' ? 'bg-purple-50 border-purple-500' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Building2 className="w-4 h-4 text-purple-600" />
                      <div>
                        <strong className="block text-purple-950 font-bold">Corporate Wellness Health Wallet</strong>
                        <span className="text-3xs text-purple-700 font-normal">Available Balance: ₹2,500 (Employer Sponsored)</span>
                      </div>
                    </div>
                    {paymentMethod === 'corporate_wallet' && <Check className="w-4 h-4 text-purple-600" />}
                  </div>

                  {/* COD */}
                  <div
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                      paymentMethod === 'cod' ? 'bg-rose-50 border-rose-500' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Truck className="w-4 h-4 text-slate-700" />
                      <div>
                        <strong className="block text-slate-900 font-bold">Cash on Delivery (COD)</strong>
                        <span className="text-3xs text-slate-500 font-normal">Pay cash or UPI to delivery agent</span>
                      </div>
                    </div>
                    {paymentMethod === 'cod' && <Check className="w-4 h-4 text-rose-600" />}
                  </div>
                </div>

              </div>

            </div>

            {/* Right 5 Cols: Order Summary */}
            <div className="lg:col-span-5 space-y-4">
              
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-black text-base text-slate-950">Items in Order ({items.length})</h3>

                <div className="space-y-3 max-h-56 overflow-y-auto divide-y divide-slate-100 pr-1">
                  {items.map((it) => (
                    <div key={it.id} className="pt-2 first:pt-0 flex items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <img src={it.image} alt={it.name} className="w-10 h-10 rounded-xl object-cover bg-slate-100" />
                        <div>
                          <span className="font-bold text-slate-900 block line-clamp-1">{it.name}</span>
                          <span className="text-3xs text-slate-500">Qty: {it.quantity}</span>
                        </div>
                      </div>
                      <span className="font-black text-slate-950">₹{it.price * it.quantity}</span>
                    </div>
                  ))}
                </div>

                {/* Coupon Input */}
                <form onSubmit={handleApplyPromo} className="flex gap-2 pt-2 border-t border-slate-100">
                  <input
                    type="text"
                    placeholder="Enter Coupon (e.g. SAKHI20)"
                    value={promoInput}
                    onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                    className="flex-1 px-3 py-2 rounded-xl border border-slate-200 text-xs uppercase font-mono font-bold"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800"
                  >
                    Apply
                  </button>
                </form>

                {couponCode && (
                  <div className="flex items-center justify-between text-3xs font-bold text-emerald-700 bg-emerald-50 p-2 rounded-xl border border-emerald-200">
                    <span>Coupon &apos;{couponCode}&apos; Applied!</span>
                    <button onClick={removeCoupon} className="text-slate-400 hover:text-slate-700">✕</button>
                  </div>
                )}

                {/* Total Calc */}
                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{cartTotal + discountAmount}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Discount</span>
                      <span>-₹{discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span className="text-emerald-600 font-bold">FREE</span>
                  </div>
                  <div className="flex justify-between text-base font-black text-slate-950 pt-2 border-t border-slate-100">
                    <span>Grand Total</span>
                    <span className="text-rose-600">₹{cartTotal}</span>
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  type="button"
                  disabled={loading}
                  onClick={handlePlaceOrder}
                  className="w-full py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 mt-2"
                >
                  {loading ? 'Processing Order...' : `Place Order (₹${cartTotal})`}
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Safety Guarantee */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-3xs text-slate-500 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Discreet Shipping &amp; 100% Toxin-Free</span>
                </div>
                <p>Delivered in an unmarked cardboard box for absolute personal privacy.</p>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  )
}
