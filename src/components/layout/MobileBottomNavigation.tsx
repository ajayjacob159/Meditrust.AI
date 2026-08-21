'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home, Stethoscope, Pill, FlaskConical, Shield,
  Sparkles, Heart, Activity, Phone
} from 'lucide-react'

export default function MobileBottomNavigation() {
  const pathname = usePathname()

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: Home,
      badge: null,
    },
    {
      label: 'Dr. Arya',
      href: '/symptom-checker',
      icon: Stethoscope,
      badge: 'LIVE',
      isDoctor: true,
    },
    {
      label: 'MediVault',
      href: '/medivault',
      icon: FlaskConical,
      badge: 'VAULT',
    },
    {
      label: 'Health Score',
      href: '/health-score',
      icon: Activity,
      badge: '88/100',
    },
    {
      label: 'Generics',
      href: '/medication-comparison',
      icon: Pill,
      badge: '-80%',
    },
  ]

  return (
    <nav
      aria-label="Mobile Navigation"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-lg border-t border-slate-800/90 shadow-2xl px-2 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] select-none"
    >
      <div className="grid grid-cols-5 gap-1 items-center max-w-md mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex flex-col items-center justify-center py-1 rounded-2xl transition-all active:scale-95 ${
                isActive
                  ? 'text-teal-400 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {/* Badge Tag */}
              {item.badge && (
                <span
                  className={`absolute -top-1 px-1.5 py-0.2 rounded-full text-[9px] font-black tracking-tighter shadow-xs ${
                    item.isDoctor
                      ? 'bg-emerald-500 text-slate-950 animate-pulse'
                      : item.badge === '-80%'
                      ? 'bg-amber-400 text-slate-950 font-black'
                      : 'bg-teal-700 text-white'
                  }`}
                >
                  {item.badge}
                </span>
              )}

              {/* Icon Container */}
              <div
                className={`relative p-1.5 rounded-xl transition-all ${
                  isActive
                    ? 'bg-teal-500/20 text-teal-400 ring-1 ring-teal-500/40 shadow-xs'
                    : 'bg-transparent text-slate-400'
                }`}
              >
                {item.isDoctor ? (
                  <div className="relative w-5 h-5 rounded-full overflow-hidden">
                    <img
                      src="/dr_arya.jpg"
                      alt="Dr Arya"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <Icon className="w-5 h-5" />
                )}

                {/* Active Indicator Glow */}
                {isActive && (
                  <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-teal-400 rounded-full" />
                )}
              </div>

              {/* Label */}
              <span className="text-[10px] mt-0.5 font-medium tracking-tight truncate max-w-[62px]">
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
