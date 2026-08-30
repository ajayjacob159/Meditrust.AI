'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  ShoppingBag, Trash2, ArrowRight, ShieldCheck,
  Truck, Sparkles, ChevronRight, Plus, Minus, Check
} from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartPage() {
  const router = useRouter()
  const {
    items,
    cartSubtotal,
    cartTotal,
    discountAmount,
    couponCode,
    applyCoupon,
    removeCoupon,
    updateQuantity,
    removeItem,
    clearCart
  } = useCart()

  const freeDeliveryThreshold = 499
  const distanceToFree = Math.max(0, freeDeliveryThreshold - cartTotal)

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/marketplace" className="hover:text-rose-600 transition-colors">Marketplace</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Shopping Bag</span>
        </nav>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
        
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-950">Your Care Bag</h1>
            <p className="text-xs text-slate-500">{items.length} items in your order</p>
          </div>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="text-xs text-slate-400 hover:text-rose-600 font-bold"
            >
              Clear Bag
            </button>
          )}
        </div>

        {items.length === 0 ? (
          <div className="p-16 text-center bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-rose-50 mx-auto flex items-center justify-center text-3xl">
              🛍️
            </div>
            <h2 className="text-xl font-black text-slate-950">Your Care Bag is Empty</h2>
            <p className="text-xs text-slate-500">
              Explore rash-free sanitary pads, cramp heating patches, intimate washes, and PCOS nutrition.
            </p>
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-md transition-all"
            >
              <span>Explore Marketplace</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 8 Cols: Item List */}
            <div className="lg:col-span-8 space-y-4">
              
              {/* Free Delivery Meter */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <span>
                    {distanceToFree === 0 ? '🎉 You have unlocked Free Express Delivery!' : `Add ₹${distanceToFree} more for FREE Delivery`}
                  </span>
                  <span className="text-3xs text-rose-600">₹{cartTotal} / ₹499</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 overflow-hidden">
                  <div
                    className="h-full bg-rose-500 rounded-full transition-all"
                    style={{ width: `${Math.min(100, (cartTotal / freeDeliveryThreshold) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Items Card List */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-4 sm:p-6 space-y-4 divide-y divide-slate-100">
                {items.map((item) => (
                  <div key={item.id} className="pt-4 first:pt-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    
                    <div className="flex items-center gap-3">
                      {item.image ? (
                        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-2xl object-cover bg-slate-100 flex-shrink-0" />
                      ) : (
                        <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center text-2xl flex-shrink-0">
                          {item.icon || '🌸'}
                        </div>
                      )}
                      <div>
                        <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug">{item.name}</h4>
                        <span className="text-3xs text-slate-500 block font-normal">{item.pack}</span>
                        {item.isSubscription && (
                          <span className="inline-block text-3xs font-black text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full mt-1">
                            🔄 {item.subscriptionInterval || 'Auto-Delivery (20% Off)'}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-6">
                      {/* Quantity Selector */}
                      <div className="flex items-center gap-2 border border-slate-200 rounded-xl px-2 py-1 bg-slate-50">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-slate-500 hover:text-slate-900 p-0.5"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-bold text-slate-900 w-5 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-slate-500 hover:text-slate-900 p-0.5"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Item Total Price */}
                      <div className="text-right">
                        <span className="font-black text-sm text-slate-950 block">₹{item.price * item.quantity}</span>
                        {item.originalPrice && (
                          <span className="text-3xs text-slate-400 line-through">₹{item.originalPrice * item.quantity}</span>
                        )}
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-slate-400 hover:text-rose-600 p-1"
                        title="Remove Item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                  </div>
                ))}
              </div>

            </div>

            {/* Right 4 Cols: Order Summary & Checkout Trigger */}
            <div className="lg:col-span-4 space-y-4">
              
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
                <h3 className="font-black text-base text-slate-950">Order Summary</h3>

                {/* Pricing Breakdown */}
                <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-100">
                  <div className="flex justify-between">
                    <span>Items Subtotal</span>
                    <span className="font-bold text-slate-900">₹{cartSubtotal}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-600 font-bold">
                      <span>Discount (Coupon)</span>
                      <span>-₹{discountAmount}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Express Delivery</span>
                    <span className="font-bold text-slate-900">
                      {distanceToFree === 0 ? <strong className="text-emerald-600">FREE</strong> : '₹49'}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-black text-slate-950 pt-2 border-t border-slate-100">
                    <span>Total Amount</span>
                    <span className="text-rose-600">₹{cartTotal + (distanceToFree === 0 ? 0 : 49)}</span>
                  </div>
                </div>

                {/* Checkout Trigger */}
                <button
                  onClick={() => router.push('/marketplace/checkout')}
                  className="w-full py-4 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center pt-2">
                  <Link href="/marketplace" className="text-3xs text-rose-600 font-bold hover:underline">
                    ← Continue Shopping
                  </Link>
                </div>
              </div>

              {/* Trust Features */}
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-3xs text-slate-500 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>100% ABDM, HIPAA &amp; CDSCO Certified</span>
                </div>
                <p>Discreet neutral box packaging for complete privacy.</p>
              </div>

            </div>

          </div>
        )}

      </div>

    </div>
  )
}
