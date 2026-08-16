'use client'

export default function HealthcareBackgroundMotion() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 select-none">
      
      {/* 1. Ambient Glow Nodes */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-teal-100/30 blur-3xl animate-pulse-glow" />
      <div className="absolute top-2/3 -right-20 w-[420px] h-[420px] rounded-full bg-blue-100/25 blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }} />

      {/* 2. Real-time Animated SVG ECG Heartbeat Wave */}
      <div className="absolute top-16 left-0 right-0 opacity-20 overflow-hidden h-24">
        <svg
          className="w-full h-full"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,50 L300,50 L320,40 L330,60 L340,10 L355,90 L370,45 L385,55 L400,50 L800,50 L820,40 L830,60 L840,10 L855,90 L870,45 L885,55 L900,50 L1200,50"
            stroke="#0F766E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ecg-line"
          />
        </svg>
      </div>

      {/* 3. Floating Medical & Molecular Particles */}
      <div className="absolute top-1/3 left-[8%] animate-float-particle opacity-30 text-teal-600">
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="12" cy="12" r="3" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="5" cy="19" r="2" />
          <line x1="14" y1="10" x2="17.5" y2="6.5" />
          <line x1="10" y1="14" x2="6.5" y2="17.5" />
        </svg>
      </div>

      <div className="absolute top-1/2 right-[10%] animate-float-particle opacity-25 text-blue-600" style={{ animationDelay: '3s' }}>
        <svg className="w-16 h-16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17" strokeDasharray="3 3" />
        </svg>
      </div>

      <div className="absolute bottom-1/4 left-[15%] animate-float-gentle opacity-20 text-teal-700">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 10.5h-5.5V5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v5.5H5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5h5.5V19c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-5.5H19c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5z" />
        </svg>
      </div>

      <div className="absolute bottom-1/3 right-[18%] animate-float-particle opacity-30 text-emerald-600" style={{ animationDelay: '1.5s' }}>
        <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 0 0 9 9z" strokeDasharray="4 2" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      </div>

    </div>
  )
}
