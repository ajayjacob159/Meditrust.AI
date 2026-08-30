'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Package, Truck, CheckCircle2, RotateCcw,
  RefreshCw, MessageCircle, ArrowRight, ChevronRight,
  Clock, ShieldCheck
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'

export default function MarketplaceOrdersPage() {
  const { user } = useAuth()

  const [orders] = useState([
    {
      id: 'MED-SAKHI-829104',
      date: '28 August 2026',
      status: 'Shipped',
      statusStep: 3, // 1: Placed, 2: Packed, 3: Shipped, 4: Delivered
      estimatedDelivery: '31 August 2026',
      total: 647,
      items: [
        { name: 'Meditrust Sakhi™ Ultra-Soft Rash-Free Sanitary Pads (Custom Pack of 12)', qty: 1, price: 199, image: '/products/sakhi_rashfree_pads.jpg' },
        { name: 'Meditrust Sakhi™ Cramp Comfort Self-Heating Patches (Pack of 3)', qty: 1, price: 249, image: '/products/sakhi_cramp_patches.jpg' },
        { name: 'Meditrust Sakhi™ 1mm Breathable Cotton Panty Liners', qty: 1, price: 189, image: '/products/sakhi_rashfree_pads.jpg' }
      ]
    },
    {
      id: 'MED-SAKHI-719302',
      date: '02 August 2026',
      status: 'Delivered',
      statusStep: 4,
      estimatedDelivery: '04 August 2026',
      total: 1299,
      items: [
        { name: 'Meditrust Sakhi™ Total PCOS & Acne Care Box (4-in-1 Complete Solution)', qty: 1, price: 1299, image: '/products/sakhi_pcos_inositol.jpg' }
      ]
    }
  ])

  return (
    <div className="min-h-screen bg-[#faf8f6] text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      {/* ── BREADCRUMB ── */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-rose-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/marketplace" className="hover:text-rose-600 transition-colors">Marketplace</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">My Orders &amp; Subscriptions</span>
        </nav>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        <div className="border-b border-slate-200 pb-4">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-950">My Orders &amp; Auto-Delivery</h1>
          <p className="text-xs text-slate-500">Track shipments, manage 28-day period subscriptions &amp; reorder</p>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm space-y-6">
              
              {/* Order Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <strong className="text-xs font-mono font-bold text-slate-900">{order.id}</strong>
                    <span className="text-3xs text-slate-400">· Placed on {order.date}</span>
                  </div>
                  <span className="text-base font-black text-slate-950 mt-0.5 block">Total: ₹{order.total}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800 animate-pulse'
                  }`}>
                    {order.status === 'Delivered' ? '✓ Delivered' : `🚚 ${order.status}`}
                  </span>
                  <a
                    href={`https://wa.me/917028025717?text=Hi%20Meditrust,%20I%20want%20to%20track%20my%20order%20${order.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-3xs font-bold flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                    <span>Track on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Progress Timeline */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-3xs font-bold text-slate-600">
                  <span className={order.statusStep >= 1 ? 'text-rose-600' : ''}>Order Placed</span>
                  <span className={order.statusStep >= 2 ? 'text-rose-600' : ''}>Packed &amp; Verified</span>
                  <span className={order.statusStep >= 3 ? 'text-rose-600' : ''}>Out for Delivery</span>
                  <span className={order.statusStep >= 4 ? 'text-emerald-600' : ''}>Delivered</span>
                </div>

                <div className="grid grid-cols-3 gap-1 h-2 rounded-full overflow-hidden bg-slate-100">
                  <div className={`h-full rounded-full ${order.statusStep >= 2 ? 'bg-rose-500' : 'bg-slate-200'}`} />
                  <div className={`h-full rounded-full ${order.statusStep >= 3 ? 'bg-rose-500' : 'bg-slate-200'}`} />
                  <div className={`h-full rounded-full ${order.statusStep >= 4 ? 'bg-emerald-500' : 'bg-slate-200'}`} />
                </div>
              </div>

              {/* Order Items */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                {order.items.map((it, idx) => (
                  <div key={idx} className="flex items-center justify-between gap-3 text-xs">
                    <div className="flex items-center gap-3">
                      <img src={it.image} alt={it.name} className="w-12 h-12 rounded-xl object-cover bg-slate-100" />
                      <div>
                        <h4 className="font-bold text-slate-900 leading-snug">{it.name}</h4>
                        <span className="text-3xs text-slate-500">Qty: {it.qty}</span>
                      </div>
                    </div>
                    <span className="font-black text-slate-950">₹{it.price * it.qty}</span>
                  </div>
                ))}
              </div>

              {/* Actions Footer */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="text-3xs text-slate-500">
                  Discreet neutral packaging guaranteed for all orders.
                </span>

                <div className="flex items-center gap-2">
                  <Link
                    href="/marketplace"
                    className="px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-3xs flex items-center gap-1.5"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>Reorder Essentials</span>
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </div>
  )
}
