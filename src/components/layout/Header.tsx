'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  Menu, X, ChevronDown, ChevronRight, Stethoscope,
  MessageCircle, Building2, UserPlus, Heart,
  BookOpen, ArrowRight, ShieldCheck, ShoppingBag, User,
  Sparkles, Activity, Tag, Check
} from 'lucide-react'
import PrescriptionScannerModal from '@/components/common/PrescriptionScannerModal'
import { useCart } from '@/context/CartContext'
import { useAuth } from '@/context/AuthContext'

export default function Header() {
  const { cartCount, openCart } = useCart()
  const { user, isAuthenticated, openAuthModal } = useAuth()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [rxScannerOpen, setRxScannerOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 sm:py-3.5 px-3 sm:px-6"
        role="banner"
      >
        <div className="max-w-[1350px] mx-auto">
          <div
            className={`flex items-center justify-between gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
              scrolled
                ? 'bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80 text-slate-800'
                : 'bg-white/85 backdrop-blur-md shadow-sm border border-slate-200/60 text-slate-800'
            }`}
          >
            
            {/* ── 1. BRAND LOGO ── */}
            <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-teal-50 border border-teal-200/80 flex items-center justify-center p-1.5 transition-transform group-hover:scale-105">
                <img src="/logo.png" alt="Meditrust AI" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline leading-none">
                  <span className="font-extrabold text-base sm:text-lg tracking-tight text-slate-900 font-display">
                    Medi<span className="text-teal-600">trust</span>
                  </span>
                  <span className="font-bold text-xs sm:text-sm text-emerald-600 ml-0.5">
                    AI
                  </span>
                </div>
                <span className="text-[9px] font-semibold text-slate-500 tracking-wider uppercase leading-none mt-0.5">
                  Women&apos;s Health &amp; Generics
                </span>
              </div>
            </Link>

            {/* ── 2. DESKTOP NAVIGATION MENU ── */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs font-semibold text-slate-600">
              
              {/* Master Hub */}
              <Link
                href="/womens-health"
                className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>Master Hub</span>
              </Link>

              {/* Women's Marketplace */}
              <Link
                href="/marketplace"
                className="px-3 py-1.5 rounded-full text-rose-700 bg-rose-50/70 hover:bg-rose-100 hover:text-rose-900 transition-colors font-bold flex items-center gap-1 shadow-2xs"
              >
                <span>🛍️</span>
                <span>Marketplace</span>
              </Link>
              
              {/* Schemes & Funds */}
              <Link
                href="/womens-schemes-funds"
                className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>Schemes &amp; Funds</span>
              </Link>

              {/* Blood Tests */}
              <Link
                href="/womens-health/blood-tests"
                className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>Blood Tests</span>
              </Link>

              {/* Corporate Benefits */}
              <Link
                href="/corporate-wellness"
                className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>Corporate</span>
              </Link>

              {/* Membership */}
              <Link
                href="/pricing"
                className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>Membership</span>
              </Link>

              {/* For Doctors */}
              <Link
                href="/for-doctors"
                className="px-3 py-1.5 rounded-full hover:text-slate-900 hover:bg-slate-50 transition-colors"
              >
                <span>For Doctors</span>
              </Link>

            </nav>

            {/* ── 3. RIGHT ACTIONS ── */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              
              {/* E-Commerce Cart Trigger with Live Count Badge */}
              <button
                type="button"
                onClick={openCart}
                className="relative p-2 rounded-full hover:bg-slate-100 text-slate-700 transition-colors"
                title="View Care Bag / Cart"
                aria-label="View Shopping Cart"
              >
                <ShoppingBag className="w-4.5 h-4.5 text-slate-800" />
                {cartCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rose-600 text-white font-black text-[10px] rounded-full flex items-center justify-center shadow-xs">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* User Account / Sign In */}
              {isAuthenticated && user ? (
                <Link
                  href="/account"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-950 text-xs font-bold transition-colors"
                >
                  <span className="w-4 h-4 rounded-full bg-rose-600 text-white text-[10px] font-black flex items-center justify-center">
                    {user.name.charAt(0)}
                  </span>
                  <span className="truncate max-w-[90px]">{user.name.split(' ')[0]}</span>
                </Link>
              ) : (
                <Link
                  href="/login"
                  className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-slate-200/80 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors"
                >
                  <User className="w-3.5 h-3.5 text-slate-500" />
                  <span>Sign In</span>
                </Link>
              )}

              {/* WhatsApp Quick Trigger */}
              <a
                href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200/80 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-semibold transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25d366]" />
                <span>WhatsApp</span>
              </a>

              {/* Primary Consultation Button */}
              <Link
                href="/symptom-checker"
                className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-1.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-[13px] font-semibold transition-colors shadow-2xs"
              >
                <Stethoscope className="w-3.5 h-3.5 text-teal-400" />
                <span>Ask Dr. Arya</span>
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-1.5 rounded-full text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* ── MOBILE DRAWER OVERLAY ── */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div className="space-y-4">
              
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <img src="/logo.png" alt="Meditrust" className="w-6 h-6 object-contain" />
                  <span className="font-bold text-slate-900 text-sm">Meditrust AI</span>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links List */}
              <div className="space-y-1.5 text-sm font-semibold">
                
                {/* Women's Health Master Hub */}
                <Link
                  href="/womens-health"
                  onClick={() => setMobileOpen(false)}
                  className="p-3 rounded-2xl bg-rose-50/60 border border-rose-100 flex items-center justify-between text-rose-950 font-bold"
                >
                  <div className="flex items-center gap-2.5">
                    <span>🌸</span>
                    <span>Women&apos;s Health Master Hub</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-rose-400" />
                </Link>

                {/* Sakhi Period Care Marketplace */}
                <Link
                  href="/marketplace"
                  onClick={() => setMobileOpen(false)}
                  className="p-3 rounded-2xl bg-rose-500 text-white flex items-center justify-between font-bold shadow-xs"
                >
                  <div className="flex items-center gap-2.5">
                    <span>🛍️</span>
                    <div>
                      <span>Sakhi Period Care Store</span>
                      <span className="block text-3xs text-rose-100 font-medium">Rash-free pads, heat patches &amp; PCOS</span>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-white" />
                </Link>


                {/* Blood Tests */}
                <Link
                  href="/womens-health/blood-tests"
                  onClick={() => setMobileOpen(false)}
                  className="p-3 rounded-2xl hover:bg-slate-50 flex items-center justify-between text-slate-800"
                >
                  <div className="flex items-center gap-2.5">
                    <span>🩸</span>
                    <span>Blood Tests for Women</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>

                {/* Corporate */}
                <Link
                  href="/corporate-wellness"
                  onClick={() => setMobileOpen(false)}
                  className="p-3 rounded-2xl hover:bg-slate-50 flex items-center justify-between text-slate-800"
                >
                  <div className="flex items-center gap-2.5">
                    <span>🏢</span>
                    <span>Corporate Wellness</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>

                {/* Account / Sign In */}
                {isAuthenticated && user ? (
                  <Link
                    href="/account"
                    onClick={() => setMobileOpen(false)}
                    className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between text-slate-900 font-bold"
                  >
                    <div className="flex items-center gap-2.5">
                      <User className="w-4 h-4 text-rose-600" />
                      <div>
                        <span>My Account ({user.name})</span>
                        <span className="block text-3xs text-slate-500 font-normal">{user.lifeStage} Stage · Orders &amp; Wallet</span>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                ) : (
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="p-3 rounded-2xl bg-slate-900 text-white font-bold text-xs flex items-center justify-between shadow-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <User className="w-4 h-4 text-rose-400" />
                      <span>Sign In / Create Account</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </Link>
                )}

                {/* For Doctors */}
                <Link
                  href="/for-doctors"
                  onClick={() => setMobileOpen(false)}
                  className="p-3 rounded-2xl hover:bg-slate-50 flex items-center justify-between text-slate-800"
                >
                  <div className="flex items-center gap-2.5">
                    <UserPlus className="w-4 h-4 text-blue-600" />
                    <span>For Doctors / Clinics</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </Link>

              </div>

            </div>

            {/* Drawer Bottom Actions */}
            <div className="space-y-2 pt-4 border-t border-slate-100">
              <a
                href="https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#008069] text-white font-semibold text-xs shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 7028025717)</span>
              </a>

              <a
                href="https://t.me/MeditrustAiAryaBot"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 p-2.5 rounded-xl bg-[#229ED9] text-white font-semibold text-xs shadow-xs"
              >
                <span>Chat on Telegram (@MeditrustAiAryaBot)</span>
              </a>
            </div>

          </div>
        </div>
      )}

      {/* Prescription Scanner Modal */}
      {rxScannerOpen && (
        <PrescriptionScannerModal
          isOpen={rxScannerOpen}
          onClose={() => setRxScannerOpen(false)}
        />
      )}
    </>
  )
}
