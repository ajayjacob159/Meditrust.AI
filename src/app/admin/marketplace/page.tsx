'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Package, TrendingUp, Users, RefreshCw, ShoppingBag,
  Plus, Edit, Trash2, CheckCircle2, ShieldCheck,
  Search, ArrowRight, ChevronRight, BarChart3, AlertCircle, Sparkles
} from 'lucide-react'
import { ALL_MARKETPLACE_PRODUCTS, MarketplaceProductItem } from '@/data/marketplaceCatalog'

export default function AdminMarketplaceDashboard() {
  const [products, setProducts] = useState<MarketplaceProductItem[]>(ALL_MARKETPLACE_PRODUCTS)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState<'products' | 'orders' | 'subscriptions' | 'inventory'>('products')

  const toggleAiStatus = (id: string) => {
    setProducts(products.map(p => p.id === id ? { ...p, isAiRecommended: !p.isAiRecommended } : p))
  }

  const filteredProducts = products.filter(p =>
    !searchQuery || p.name.toLowerCase().includes(searchQuery.toLowerCase()) || p.category.includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 pt-20 sm:pt-24 pb-24 font-sans">
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-3xs font-black uppercase">
              <span>ADMIN PORTAL</span>
            </div>
            <h1 className="text-2xl font-black text-slate-950 mt-1">
              Meditrust Women&apos;s Health Marketplace™ Admin
            </h1>
            <p className="text-xs text-slate-500">
              Manage inventory, prices, AI recommendations, subscriptions &amp; regulatory compliance
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/marketplace"
              target="_blank"
              className="px-4 py-2 rounded-full border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold"
            >
              View Live Store ↗
            </Link>
          </div>
        </div>

        {/* ── METRICS TILES ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Gross Merchandise Value (GMV)</span>
              <TrendingUp className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-black text-slate-950">₹18,42,800</div>
            <span className="text-3xs font-bold text-emerald-600">+28.4% this month</span>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Total Orders Delivered</span>
              <ShoppingBag className="w-4 h-4 text-rose-600" />
            </div>
            <div className="text-2xl font-black text-slate-950">3,420</div>
            <span className="text-3xs font-bold text-slate-500">Avg. Order Value: ₹640</span>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Active Subscriptions (28-Day)</span>
              <RefreshCw className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-2xl font-black text-slate-950">1,840</div>
            <span className="text-3xs font-bold text-purple-600">68% Repeat Customer Rate</span>
          </div>

          <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-2xs space-y-1">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>AI Triage Conversions</span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-2xl font-black text-slate-950">41.8%</div>
            <span className="text-3xs font-bold text-slate-500">Dr. Arya AI Product Matching</span>
          </div>
        </div>

        {/* ── ADMIN NAVIGATION TABS ── */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          
          <div className="p-4 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex gap-2 text-xs font-bold">
              {[
                { id: 'products', label: `Products Catalog (${products.length})` },
                { id: 'subscriptions', label: 'Recurring Subscriptions' },
                { id: 'inventory', label: 'Inventory & Batch Logs' },
                { id: 'orders', label: 'Fulfillment & Logistics' }
              ].map(t => (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id as any)}
                  className={`px-4 py-2 rounded-xl transition-all ${
                    activeTab === t.id ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-8 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs bg-slate-50 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* ── PRODUCTS TABLE ── */}
          {activeTab === 'products' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 text-slate-500 text-3xs uppercase font-bold border-b border-slate-100">
                  <tr>
                    <th className="p-4">Product</th>
                    <th className="p-4">Category</th>
                    <th className="p-4">Selling Price</th>
                    <th className="p-4">Sub Price</th>
                    <th className="p-4">Stock</th>
                    <th className="p-4">AI Rec Status</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {filteredProducts.map((p) => (
                    <tr key={p.id} className="hover:bg-slate-50/70 transition-colors">
                      <td className="p-4 flex items-center gap-3">
                        <img src={p.image} alt={p.name} className="w-10 h-10 rounded-xl object-cover bg-slate-100 flex-shrink-0" />
                        <div>
                          <strong className="text-slate-900 block font-bold leading-snug line-clamp-1">{p.name}</strong>
                          <span className="text-3xs text-slate-400">{p.brand} · {p.batchNo}</span>
                        </div>
                      </td>
                      <td className="p-4 text-slate-600 font-semibold">{p.category}</td>
                      <td className="p-4 font-black text-slate-950">₹{p.price}</td>
                      <td className="p-4 font-black text-rose-600">₹{p.subscriptionPrice}</td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded-full text-3xs font-bold bg-emerald-100 text-emerald-800">
                          In Stock
                        </span>
                      </td>
                      <td className="p-4">
                        <button
                          onClick={() => toggleAiStatus(p.id)}
                          className={`px-3 py-1 rounded-full text-3xs font-bold transition-colors ${
                            p.isAiRecommended ? 'bg-purple-100 text-purple-800 border border-purple-200' : 'bg-slate-100 text-slate-400'
                          }`}
                        >
                          {p.isAiRecommended ? '✓ AI Active' : 'Off'}
                        </button>
                      </td>
                      <td className="p-4">
                        <Link
                          href={`/marketplace/product/${p.slug}`}
                          target="_blank"
                          className="text-3xs text-rose-600 font-bold hover:underline"
                        >
                          View ↗
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Subscriptions Tab */}
          {activeTab === 'subscriptions' && (
            <div className="p-8 text-center space-y-3">
              <RefreshCw className="w-8 h-8 text-purple-600 mx-auto animate-spin" />
              <h3 className="font-bold text-sm text-slate-900">1,840 Active Auto-Replenish Subscribers</h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Subscriptions trigger automated dispatch 3 days before expected period start date.
              </p>
            </div>
          )}

        </div>

      </div>

    </div>
  )
}
