'use client'

export default function HealthcareBackgroundMotion() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none w-full max-w-full">
      
      {/* 1. Ambient Soft Nodes (Bound within canvas) */}
      <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-teal-100/25 blur-3xl" />
      <div className="absolute top-2/3 right-0 w-80 h-80 rounded-full bg-blue-100/20 blur-3xl" />

      {/* 2. Soft Animated SVG ECG Heartbeat Line */}
      <div className="absolute top-16 left-0 right-0 opacity-15 overflow-hidden h-20 w-full">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,50 L300,50 L320,40 L330,60 L340,10 L355,90 L370,45 L385,55 L400,50 L800,50 L820,40 L830,60 L840,10 L855,90 L870,45 L885,55 L900,50 L1200,50"
            stroke="#0F766E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

    </div>
  )
}
