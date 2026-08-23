'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home, Stethoscope, MessageCircle, UserPlus, Heart
} from 'lucide-react'

export default function MobileBottomNavigation() {
  const pathname = usePathname()

  // Do not show bottom nav on full-screen WhatsApp chat view to maximize chat space
  if (pathname === '/symptom-checker') {
    return null
  }

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: Home,
      badge: null,
      isExternal: false,
    },
    {
      label: "Women's",
      href: '/womens-health',
      icon: Heart,
      badge: '🌸 NEW',
      isExternal: false,
      color: 'text-rose-400',
    },
    {
      label: 'Dr. Arya',
      href: '/symptom-checker',
      icon: Stethoscope,
      badge: 'ONLINE',
      isDoctor: true,
      isExternal: false,
    },
    {
      label: 'For Doctors',
      href: '/for-doctors',
      icon: UserPlus,
      badge: 'JOIN',
      isExternal: false,
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/917028025717?text=Hi%20Dr.%20Arya,%20I%20want%20to%20consult%20with%20you',
      icon: MessageCircle,
      badge: '24/7',
      isExternal: true,
    },
  ]

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/90 shadow-2xl px-2 pt-1.5 pb-[max(0.5rem,env(safe-area-inset-bottom))] select-none"
    >
      <div className="grid grid-cols-5 gap-1 items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = !item.isExternal && (pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href)))
          const Icon = item.icon

          const content = (
            <div
              className={`relative flex flex-col items-center justify-center py-1 rounded-2xl transition-all active:scale-95 ${
                isActive
                  ? item.color || 'text-teal-400 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {/* Badge Tag */}
              {item.badge && (
                <span
                  className={`absolute -top-1 px-1.5 py-0.2 rounded-full text-[8px] font-black tracking-tighter shadow-xs ${
                    item.isDoctor
                      ? 'bg-[#25d366] text-slate-950 animate-pulse'
                      : item.badge === '🌸 NEW'
                      ? 'bg-rose-500 text-white font-bold'
                      : item.badge === 'JOIN'
                      ? 'bg-blue-500 text-white'
                      : 'bg-emerald-600 text-white'
                  }`}
                >
                  {item.badge}
                </span>
              )}

              {/* Icon Container */}
              <div
                className={`relative p-1.5 rounded-xl transition-all ${
                  isActive
                    ? 'bg-white/10 ring-1 ring-white/20 shadow-xs'
                    : 'bg-transparent text-slate-400'
                }`}
              >
                {item.isDoctor ? (
                  <div className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-xs">
                    🌸
                  </div>
                ) : (
                  <Icon className="w-5 h-5" />
                )}
              </div>

              {/* Label */}
              <span className="text-[10px] font-medium tracking-tight mt-0.5">
                {item.label}
              </span>
            </div>
          )

          if (item.isExternal) {
            return (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {content}
              </a>
            )
          }

          return (
            <Link key={item.href} href={item.href}>
              {content}
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
