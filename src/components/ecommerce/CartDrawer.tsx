'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ShoppingBag, X, Trash2, Plus, Minus, Tag, ArrowRight,
  ShieldCheck, Truck, Sparkles, Check, Gift
} from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    openCheckout,
    removeFromCart,
    updateQuantity,
    cartCount,
    cartSubtotal,
    discountAmount,
    deliveryFee,
    finalTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    clearCart,
  } = useCart()

  const [couponInput, setCouponInput] = useState('')
  const [couponFeedback, setCouponFeedback] = useState<{ success?: boolean; message?: string }>({})

  if (!isCartOpen) return null

  const freeShippingThreshold = 499
  const progressPercent = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100))
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal)

  const handleApplyCoupon = (code: string) => {
    const result = applyCoupon(code)
    setCouponFeedback(result)
    if (result.success) {
      setCouponInput('')
    }
  }

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-950/60 backdrop-blur-xs flex justify-end animate-fadeIn">
      
      {/* Click outside to close */}
      <div className="flex-1" onClick={closeCart} />

      {/* Slide Drawer Content */}
      <div className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between border-l border-slate-200 animate-slideLeft">
        
        {/* ── 1. DRAWER TOP HEADER ── */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-950 leading-tight">
                Your Care Bag
              </h3>
              <span className="text-3xs text-slate-500 font-medium">
                {cartCount} {cartCount === 1 ? 'item' : 'items'} · Meditrust Sakhi™ Store
              </span>
            </div>
          </div>

          <button
            onClick={closeCart}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ── 2. FREE SHIPPING PROGRESS BAR ── */}
        <div className="bg-slate-50 px-5 py-3 border-b border-slate-100 space-y-1.5">
          <div className="flex items-center justify-between text-3xs font-bold text-slate-700">
            <span className="flex items-center gap-1">
              <Truck className="w-3.5 h-3.5 text-blue-600" />
              {remainingForFreeShipping === 0 ? (
                <span className="text-emerald-700 font-bold">🎉 You unlocked FREE Express Delivery!</span>
              ) : (
                <span>Add <strong>₹{remainingForFreeShipping}</strong> more for Free Delivery</span>
              )}
            </span>
            <span>{progressPercent}%</span>
          </div>

          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                remainingForFreeShipping === 0 ? 'bg-emerald-500' : 'bg-rose-500'
              }`}
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* ── 3. CART ITEMS LIST ── */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-3 p-6 text-slate-400">
              <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-3xl">
                🌸
              </div>
              <p className="font-bold text-slate-700 text-sm">Your care bag is empty</p>
              <p className="text-xs text-slate-500 max-w-xs">
                Explore our toxin-free period care, intimate washes, and PCOS kits.
              </p>
              <Link
                href="/womens-marketplace"
                onClick={closeCart}
                className="px-6 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs"
              >
                Shop Meditrust Sakhi™
              </Link>
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="p-3.5 rounded-2xl border border-slate-200 bg-white space-y-2.5 shadow-2xs hover:border-rose-200 transition-colors"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <h4 className="font-black text-xs text-slate-950 leading-snug line-clamp-1">
                        {item.name}
                      </h4>
                      <div className="flex items-center gap-1.5 text-3xs text-slate-500 pt-0.5">
                        <span className="font-medium bg-slate-100 px-1.5 py-0.5 rounded">{item.pack}</span>
                        {item.isSubscription && (
                          <span className="font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">
                            20% Sub
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-slate-300 hover:text-rose-600 p-1 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Price & Quantity Adjuster */}
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-sm font-black text-slate-950">
                      ₹{item.price * item.quantity}
                    </span>
                    <span className="text-3xs text-slate-400 line-through">
                      ₹{item.originalPrice * item.quantity}
                    </span>
                  </div>

                  {/* +/- buttons */}
                  <div className="flex items-center gap-2 bg-slate-100 rounded-xl px-2 py-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-slate-600 hover:text-slate-950 p-0.5"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold text-slate-900 w-4 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-slate-600 hover:text-slate-950 p-0.5"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* ── 4. COUPONS & BILL SUMMARY ── */}
        {items.length > 0 && (
          <div className="p-5 border-t border-slate-100 bg-slate-50/70 space-y-3.5">
            
            {/* Promo Code Box */}
            <div className="space-y-1.5">
              {appliedCoupon ? (
                <div className="flex items-center justify-between p-2 rounded-xl bg-emerald-50 border border-emerald-200 text-3xs font-bold text-emerald-800">
                  <span className="flex items-center gap-1">
                    <Tag className="w-3 h-3 text-emerald-600" />
                    Coupon <strong>{appliedCoupon}</strong> Applied (-₹{discountAmount})
                  </span>
                  <button onClick={removeCoupon} className="text-rose-600 hover:underline">
                    Remove
                  </button>
                </div>
              ) : (
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon (e.g. SAKHI20)"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    className="flex-1 px-3 py-1.5 rounded-xl border border-slate-200 bg-white text-xs uppercase placeholder:normal-case font-mono focus:outline-rose-500"
                  />
                  <button
                    onClick={() => handleApplyCoupon(couponInput)}
                    className="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs"
                  >
                    Apply
                  </button>
                </div>
              )}

              {couponFeedback.message && (
                <span className={`text-3xs block ${couponFeedback.success ? 'text-emerald-700' : 'text-rose-600'}`}>
                  {couponFeedback.message}
                </span>
              )}

              {/* Quick Coupon Chips */}
              {!appliedCoupon && (
                <div className="flex flex-wrap gap-1.5 pt-0.5">
                  <button
                    onClick={() => handleApplyCoupon('SAKHI20')}
                    className="px-2 py-0.5 rounded-lg border border-dashed border-rose-300 text-rose-700 bg-rose-50 text-[10px] font-bold"
                  >
                    🏷️ SAKHI20 (20% OFF)
                  </button>
                  <button
                    onClick={() => handleApplyCoupon('MEDITRUST50')}
                    className="px-2 py-0.5 rounded-lg border border-dashed border-blue-300 text-blue-700 bg-blue-50 text-[10px] font-bold"
                  >
                    🏷️ MEDITRUST50 (₹50 OFF)
                  </button>
                </div>
              )}
            </div>

            {/* Bill Summary Rows */}
            <div className="space-y-1.5 text-xs text-slate-600 pt-1 border-t border-slate-200">
              <div className="flex justify-between">
                <span>Items Subtotal</span>
                <span className="font-semibold text-slate-900">₹{cartSubtotal}</span>
              </div>

              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Coupon Discount</span>
                  <span>-₹{discountAmount}</span>
                </div>
              )}

              <div className="flex justify-between">
                <span>Express Delivery</span>
                <span>
                  {deliveryFee === 0 ? (
                    <span className="text-emerald-700 font-bold">FREE</span>
                  ) : (
                    `₹${deliveryFee}`
                  )}
                </span>
              </div>

              <div className="flex justify-between text-sm font-black text-slate-950 pt-2 border-t border-slate-200">
                <span>To Pay</span>
                <span className="text-base text-rose-600">₹{finalTotal}</span>
              </div>
            </div>

            {/* Checkout Action CTA */}
            <button
              onClick={openCheckout}
              className="w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-md transition-transform hover:scale-102 flex items-center justify-center gap-2"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center justify-center gap-2 text-3xs text-slate-400 pt-0.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Safe UPI · COD · WhatsApp Instant Pay</span>
            </div>

          </div>
        )}

      </div>
    </div>
  )
}
