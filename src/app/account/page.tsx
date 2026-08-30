'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  User, ShieldCheck, Heart, Package, RefreshCw,
  Building2, Sparkles, Phone, Mail, MapPin, ChevronRight,
  ExternalLink, LogOut, Plus, CheckCircle2, AlertCircle,
  ShoppingBag, Clock, FileText, Activity, MessageCircle
} from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'

export default function AccountPage() {
  const { user, isAuthenticated, openAuthModal, logout, updateProfile } = useAuth()
  const { openCart } = useCart()

  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'subscriptions' | 'corporate'>('profile')
  const [editingLifeStage, setEditingLifeStage] = useState(false)
  const [selectedStage, setSelectedStage] = useState(user?.lifeStage || 'PCOS')

  if (!isAuthenticated || !user) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 pt-24 pb-20">
        <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center space-y-5 border border-slate-200 shadow-xl">
          <div className="w-16 h-16 rounded-3xl bg-rose-50 border border-rose-200 flex items-center justify-center mx-auto text-3xl">
            🌸
          </div>
          <div className="space-y-1.5">
            <h2 className="text-2xl font-black text-slate-950">Meditrust Member Login</h2>
            <p className="text-xs text-slate-500 font-normal">
              Sign in with your mobile number or corporate email to access your Care Bag, Order History, MediVault, and AI Doctor.
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <button
              onClick={() => openAuthModal('login')}
              className="w-full py-3.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-black text-sm shadow-md transition-transform hover:scale-102"
            >
              Sign In with Mobile OTP / Email
            </button>
            <button
              onClick={() => openAuthModal('corporate')}
              className="w-full py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-xs"
            >
              🏢 Sign In via Corporate SSO (₹2,500 Wallet)
            </button>
          </div>

          <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-3xs text-slate-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>ABDM &amp; HIPAA 256-Bit Encrypted</span>
          </div>
        </div>
      </div>
    )
  }

  const handleSaveStage = () => {
    updateProfile({ lifeStage: selectedStage })
    setEditingLifeStage(false)
  }

  // Demo Orders
  const demoOrders = [
    {
      id: 'MED-SAKHI-782914',
      date: '28 Aug 2026',
      items: 'Meditrust Sakhi™ Ultra-Soft Rash-Free Sanitary Pads (12 Pads), Cramp Comfort Heat Patches (Pack of 3)',
      total: 448,
      status: 'Out for Delivery',
      statusColor: 'text-blue-700 bg-blue-50 border-blue-200',
      eta: 'Arriving Today by 3:30 PM',
    },
    {
      id: 'MED-SAKHI-619280',
      date: '14 Aug 2026',
      items: 'Meditrust Sakhi™ Total PCOS & Acne Care Box (30-Day Regimen)',
      total: 1299,
      status: 'Delivered',
      statusColor: 'text-emerald-700 bg-emerald-50 border-emerald-200',
      eta: 'Delivered at Doorstep',
    },
  ]

  // Demo Subscriptions
  const demoSubscriptions = [
    {
      id: 'SUB-9842',
      name: 'Meditrust Sakhi™ Ultra-Soft Rash-Free Custom Pads (24 Pads)',
      frequency: 'Every 30 Days',
      price: 319,
      discount: '20% OFF Active',
      nextDelivery: '15 September 2026',
      status: 'Active',
    },
    {
      id: 'SUB-3810',
      name: 'Meditrust Sakhi™ PCOS Hormonal Balance Sachets (40:1 Inositol)',
      frequency: 'Every 30 Days',
      price: 519,
      discount: '20% OFF Active',
      nextDelivery: '15 September 2026',
      status: 'Active',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pt-20 sm:pt-24 pb-20">
      
      {/* ── BREADCRUMBS ── */}
      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-semibold">My Account &amp; Wellness Hub</span>
        </nav>
      </div>

      <div className="max-w-[1350px] mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-8">
        
        {/* ── USER HERO CARD ── */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white p-6 sm:p-8 border border-slate-800 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-rose-500/20 border border-rose-400/30 flex items-center justify-center text-3xl shadow-inner">
              🌸
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-white leading-tight">{user.name}</h1>
                <span className="text-3xs font-black uppercase px-2.5 py-0.5 rounded-full bg-rose-500 text-white">
                  {user.lifeStage} CARE
                </span>
              </div>
              <p className="text-xs text-slate-300 flex flex-wrap items-center gap-x-3 gap-y-1 font-normal">
                <span>{user.phone}</span>
                <span>•</span>
                <span>{user.email}</span>
                <span>•</span>
                <span>Member since {user.joinedDate}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <Link
              href="/womens-marketplace"
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-xs"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Shop Sakhi Care</span>
            </Link>
            <button
              onClick={logout}
              className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 font-bold text-xs flex items-center justify-center gap-1.5 border border-white/10"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>

        </div>

        {/* ── ACCOUNT NAVIGATION TABS ── */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-3">
          {[
            { id: 'profile', label: 'Personal Profile & Life Stage', icon: User },
            { id: 'orders', label: `My Orders (${demoOrders.length})`, icon: Package },
            { id: 'subscriptions', label: `Auto-Subscriptions (${demoSubscriptions.length})`, icon: RefreshCw },
            { id: 'corporate', label: 'Corporate Health Wallet', icon: Building2 },
          ].map((t) => {
            const Icon = t.icon
            return (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id as any)}
                className={`px-4 py-2.5 rounded-2xl font-bold text-xs transition-all flex items-center gap-2 ${
                  activeTab === t.id
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{t.label}</span>
              </button>
            )
          })}
        </div>

        {/* ── TAB 1: PROFILE & LIFE STAGE ── */}
        {activeTab === 'profile' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            <div className="lg:col-span-2 space-y-6">
              {/* Life Stage Card */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <h3 className="font-black text-base text-slate-950">Your Active Health Stage</h3>
                    <p className="text-xs text-slate-500 font-normal">
                      Dr. Arya AI personalizes your period recommendations and hormone advice based on your stage.
                    </p>
                  </div>
                  {!editingLifeStage ? (
                    <button
                      onClick={() => setEditingLifeStage(true)}
                      className="text-xs text-rose-600 font-bold hover:underline"
                    >
                      Change Stage
                    </button>
                  ) : (
                    <button
                      onClick={handleSaveStage}
                      className="px-4 py-1.5 rounded-full bg-emerald-600 text-white font-bold text-xs shadow-xs"
                    >
                      Save Stage
                    </button>
                  )}
                </div>

                {editingLifeStage ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-2">
                    {[
                      { id: 'Teen', label: '🌱 Teen & First Period (10–18y)' },
                      { id: 'Menstrual', label: '🩸 Menstrual Health & Cramps (15–28y)' },
                      { id: 'PCOS', label: '🌸 PCOS & Acne Defense (18–35y)' },
                      { id: 'Fertility', label: '🥚 Fertility & Pre-Conception' },
                      { id: 'Pregnancy', label: '🤰 Maternity & Trimesters' },
                      { id: 'Postpartum', label: '🤱 New Mother & Lactation' },
                      { id: 'Menopause', label: '🦋 Perimenopause & Midlife (40+y)' },
                    ].map((stg) => (
                      <button
                        key={stg.id}
                        onClick={() => setSelectedStage(stg.id as any)}
                        className={`p-3 rounded-2xl border text-left font-semibold transition-all ${
                          selectedStage === stg.id
                            ? 'bg-rose-50 border-rose-600 text-rose-950 font-bold'
                            : 'bg-white border-slate-200 text-slate-700'
                        }`}
                      >
                        {stg.label}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">🌸</span>
                      <div>
                        <strong className="text-sm font-black text-rose-950 block">{user.lifeStage} Protocol</strong>
                        <span className="text-3xs text-slate-600">Active period care, diet, and hormone tracking enabled.</span>
                      </div>
                    </div>
                    <span className="text-3xs font-black text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                      ACTIVE
                    </span>
                  </div>
                )}
              </div>

              {/* Saved Delivery Addresses */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-black text-base text-slate-950">Default Delivery Address</h3>
                  <span className="text-3xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    Pune 24h Express Area
                  </span>
                </div>

                <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50/50 space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-rose-600" />
                    <strong className="text-slate-900">{user.name}</strong>
                    <span className="text-3xs bg-slate-200 px-2 py-0.5 rounded font-bold">DEFAULT</span>
                  </div>
                  <p className="text-slate-600 font-normal leading-relaxed pl-6">
                    {user.savedAddresses[0]?.street || 'Walhekar Heights, Morya Colony, Nigdi'}, {user.savedAddresses[0]?.city || 'Pune'}, {user.savedAddresses[0]?.pincode || '411033'}
                  </p>
                  <p className="text-3xs text-slate-500 pl-6">
                    Contact: {user.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side: Health ID & AI Doctor Card */}
            <div className="space-y-6">
              
              {/* Linked ABHA ID Card */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xs font-bold uppercase tracking-wider text-slate-400">
                    Ayushman Bharat Health ID
                  </span>
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="p-3 rounded-2xl bg-teal-50 border border-teal-200 space-y-1">
                  <span className="text-3xs text-teal-800 font-bold block">14-Digit ABHA Health Account:</span>
                  <span className="font-mono text-sm font-black text-teal-950 block">
                    {user.abhaId || '91-4829-5718-2049'}
                  </span>
                </div>
                <Link
                  href="/medivault"
                  className="w-full py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Open MediVault™ Records</span>
                </Link>
              </div>

              {/* Dr. Arya 24/7 AI Doctor Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-rose-500 to-rose-700 text-white space-y-3 shadow-md">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-rose-200" />
                  <span className="text-xs font-bold uppercase tracking-wider">24/7 SAKHI COMPANION</span>
                </div>
                <h4 className="text-lg font-black leading-snug">
                  Ask Dr. Arya any question in Marathi, Hindi or English
                </h4>
                <p className="text-xs text-rose-100 font-normal leading-relaxed">
                  Real-time clinical triage for period cramps, PCOS acne, lab reports, and contraception guidance.
                </p>
                <a
                  href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20am%20a%20Meditrust%20member%20and%20need%20health%20guidance."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 rounded-full bg-white text-rose-800 hover:bg-rose-50 font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>

            </div>

          </div>
        )}

        {/* ── TAB 2: ORDERS & TRACKING ── */}
        {activeTab === 'orders' && (
          <div className="space-y-4">
            {demoOrders.map((order) => (
              <div
                key={order.id}
                className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-3xs font-mono text-slate-400 block">ORDER ID</span>
                    <strong className="text-sm font-bold text-slate-900 font-mono">{order.id}</strong>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500">{order.date}</span>
                    <span className={`text-3xs font-black uppercase px-2.5 py-1 rounded-full border ${order.statusColor}`}>
                      {order.status}
                    </span>
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <p className="font-semibold text-slate-800 leading-relaxed">
                    {order.items}
                  </p>
                  <p className="text-3xs text-slate-500 font-medium flex items-center gap-1.5 pt-1">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    <span>{order.eta}</span>
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="font-black text-slate-950 text-sm">₹{order.total}</span>
                  <div className="flex items-center gap-2">
                    <Link
                      href="/womens-marketplace"
                      className="px-4 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-3xs"
                    >
                      Reorder Items
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── TAB 3: AUTO-SUBSCRIPTIONS ── */}
        {activeTab === 'subscriptions' && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200 text-xs text-rose-950 flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold">
                <Sparkles className="w-4 h-4 text-rose-600" />
                <span>Auto-Replenish Active: Saving 20% on every period cycle</span>
              </div>
              <span className="text-3xs font-black text-rose-700 bg-rose-200 px-2 py-0.5 rounded-full">
                PAUSE ANYTIME
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {demoSubscriptions.map((sub) => (
                <div
                  key={sub.id}
                  className="bg-white p-6 rounded-3xl border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-3xs font-black text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        {sub.status}
                      </span>
                      <span className="text-3xs font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">
                        {sub.discount}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 leading-snug">{sub.name}</h4>
                    <p className="text-xs text-slate-500 font-normal">
                      Delivery: <strong className="text-slate-800">{sub.frequency}</strong> · Next: {sub.nextDelivery}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="font-black text-base text-rose-600">₹{sub.price} / mo</span>
                    <div className="flex items-center gap-1.5">
                      <button className="px-3 py-1.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-3xs hover:bg-slate-50">
                        Skip Next
                      </button>
                      <button className="px-3 py-1.5 rounded-xl border border-rose-200 text-rose-600 font-semibold text-3xs hover:bg-rose-50">
                        Modify Pack
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── TAB 4: CORPORATE HEALTH WALLET ── */}
        {activeTab === 'corporate' && (
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-3xs font-bold uppercase">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>EMPLOYER SPONSORED CARE</span>
                </div>
                <h3 className="text-xl font-black text-slate-950">
                  {user.companyName || 'Corporate Partner Enterprise'}
                </h3>
                <p className="text-xs text-slate-500 font-normal">
                  Covered under India&apos;s First AI-Backed Women&apos;s Healthcare Corporate Benefit.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 text-right">
                <span className="text-3xs font-bold text-purple-700 block uppercase">Wallet Balance</span>
                <span className="text-2xl font-black text-purple-950">
                  ₹{user.corporateWalletBalance || 2500}
                </span>
                <span className="text-3xs text-purple-600 block">Valid for Store &amp; Diagnostics</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-bold">🌸 Period Care Store</strong>
                <p className="text-3xs text-slate-500">100% covered via 1-click wallet settlement at checkout.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-bold">🩸 60-Min Blood Pickups</strong>
                <p className="text-3xs text-slate-500">PCOS &amp; Thyroid tests with zero out-of-pocket cash.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                <strong className="text-slate-900 block font-bold">🩺 OB-GYN Tele-Consults</strong>
                <p className="text-3xs text-slate-500">Unlimited 24/7 access to Dr. Arya Clinical Council.</p>
              </div>
            </div>
          </div>
        )}

      </div>

    </div>
  )
}
