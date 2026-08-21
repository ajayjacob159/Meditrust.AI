'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  MapPin, Phone, Clock, Search, Filter, Building2, FlaskConical,
  Pill, Star, ShieldCheck, Navigation, ExternalLink, Sparkles,
  CheckCircle2, ArrowRight
} from 'lucide-react'

interface HealthcareFacility {
  id: string
  name: string
  type: 'hospital' | 'lab' | 'pharmacy' | 'jan_aushadhi' | 'clinic'
  area: string
  city: string
  address: string
  phone: string
  rating: number
  hours: string
  tags: string[]
  discountOrBenefit: string
  cashlessTieup?: boolean
}

const FACILITIES: HealthcareFacility[] = [
  {
    id: 'fac-1',
    name: 'Ruby Hall Clinic (Pune)',
    type: 'hospital',
    area: 'Sassoon Road / Dhole Patil',
    city: 'Pune',
    address: '40, Sassoon Road, Sangamvadi, Pune 411001',
    phone: '+91 7028025717',
    rating: 4.9,
    hours: 'Open 24/7 (Emergency Active)',
    tags: ['Super Speciality', 'NABH Accredited', 'Cath Lab', 'Organ Transplant'],
    discountOrBenefit: 'Meditrust VIP Desk: Zero-Wait TPA Admission & Cashless Fast-Track',
    cashlessTieup: true,
  },
  {
    id: 'fac-2',
    name: 'Sahyadri Super Speciality Hospital',
    type: 'hospital',
    area: 'Deccan Gymkhana / Nagar Road',
    city: 'Pune',
    address: 'Plot No. 30-C, Erandwane, Deccan Gymkhana, Pune 411004',
    phone: '+91 7028025717',
    rating: 4.8,
    hours: 'Open 24/7 (Emergency Active)',
    tags: ['Tertiary Care', 'Neuroscience', 'Cardiac Surgery', 'Robotic Surgery'],
    discountOrBenefit: 'Priority OPD & Fast-Track Cashless Claim Clearance',
    cashlessTieup: true,
  },
  {
    id: 'fac-3',
    name: 'Meditrust Direct Central Diagnostics Hub',
    type: 'lab',
    area: 'Nigdi / Walhekarwadi',
    city: 'Pimpri-Chinchwad, Pune',
    address: 'Walhekar Heights, Morya Colony, Nigdi, PCMC 411033',
    phone: '+91 7028025717',
    rating: 4.9,
    hours: '6:00 AM – 10:00 PM (60-Min Doorstep Pickup Available)',
    tags: ['NABL Accredited', '60-Min Phlebotomy', 'Full Body Checkups', 'Same-Day Report'],
    discountOrBenefit: 'Up to 70% Off MRP on Blood Tests + Free AI Video Report Explainer',
  },
  {
    id: 'fac-4',
    name: 'Pradhan Mantri Jan Aushadhi Kendra (PCMC Hub)',
    type: 'jan_aushadhi',
    area: 'Nigdi / Akurdi',
    city: 'Pimpri-Chinchwad',
    address: 'Near Railway Station, Akurdi / Nigdi, Pune 411035',
    phone: '+91 7028025717',
    rating: 4.7,
    hours: '8:00 AM – 10:00 PM',
    tags: ['PMBJP Certified', 'Generic Medicines', 'WHO-GMP Quality'],
    discountOrBenefit: '80% Savings on BP, Sugar, Heart & Chronic Medicines',
  },
  {
    id: 'fac-5',
    name: 'Thyrocare National Reference Lab Hub',
    type: 'lab',
    area: 'Kothrud / Baner',
    city: 'Pune',
    address: 'Baner High Street & Kothrud Hub, Pune',
    phone: '+91 7028025717',
    rating: 4.8,
    hours: '6:30 AM – 9:30 PM (Doorstep Pickup)',
    tags: ['CAP & NABL Certified', 'Automated Immunoassay', 'Thyroid Specialist'],
    discountOrBenefit: 'Exclusive Meditrust Flat 55% Off Aarogyam Packages',
  },
  {
    id: 'fac-6',
    name: 'Dr. D.Y. Patil Medical College & Hospital',
    type: 'hospital',
    area: 'Pimpri / Sant Tukaram Nagar',
    city: 'Pimpri-Chinchwad, Pune',
    address: 'Sant Tukaram Nagar, Pimpri, Pune 411018',
    phone: '+91 7028025717',
    rating: 4.7,
    hours: 'Open 24/7 (Emergency & Trauma)',
    tags: ['2000+ Beds', 'MJPJAY / PM-JAY Cashless', 'Pediatric ICU'],
    discountOrBenefit: 'Government Scheme ₹5 Lakh Cashless Admission Assistance',
    cashlessTieup: true,
  },
]

export default function FindHealthcarePage() {
  const [selectedType, setSelectedType] = useState('all')
  const [selectedArea, setSelectedArea] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const areas = ['all', 'Nigdi / PCMC', 'Kothrud / Baner', 'Deccan / Erandwane', 'Sassoon / Dhole Patil', 'Pimpri / Akurdi']

  const filteredFacilities = FACILITIES.filter((fac) => {
    const matchesType = selectedType === 'all' || fac.type === selectedType
    const matchesArea = selectedArea === 'all' || fac.area.includes(selectedArea.split(' ')[0])
    const matchesSearch =
      fac.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fac.area.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fac.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesType && matchesArea && matchesSearch
  })

  return (
    <div className="min-h-screen bg-slate-900/5 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Banner */}
        <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-slate-950 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="bg-teal-500/20 text-teal-300 border border-teal-400/30 text-2xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  Pune &amp; Maharashtra Healthcare Directory
                </span>
                <span className="bg-amber-400 text-slate-950 text-2xs font-black px-2.5 py-1 rounded-full">
                  VIP Fast-Track Access
                </span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-display">
                Find 24/7 Hospitals, <span className="text-emerald-400">NABL Labs &amp; Jan Aushadhi</span>
              </h1>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Locate accredited premier hospitals, 60-min phlebotomy blood test centers, and government Jan Aushadhi Kendras near you with instant telephone coordination.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="tel:+917028025717"
                className="btn-teal flex items-center gap-2 text-xs sm:text-sm font-bold px-5 py-3 rounded-2xl shadow-lg"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call Care Helpline (+91 7028025717)</span>
              </a>
            </div>
          </div>
        </div>

        {/* Search & Area Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Search Box */}
          <div className="relative md:col-span-2">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by hospital name, specialty (Cardiology, MRI, Jan Aushadhi), or locality..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm outline-none focus:border-teal-600 shadow-2xs"
            />
          </div>

          {/* Area Selector */}
          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="w-full p-3 bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm font-bold text-slate-700 outline-none focus:border-teal-600 shadow-2xs"
          >
            <option value="all">📍 All Pune &amp; PCMC Localities</option>
            <option value="Nigdi">Nigdi / Walhekarwadi / PCMC</option>
            <option value="Kothrud">Kothrud / Baner / Wakad</option>
            <option value="Deccan">Deccan / Erandwane / Shivajinagar</option>
            <option value="Sassoon">Sassoon Road / Camp / Pune Station</option>
            <option value="Pimpri">Pimpri / Chinchwad / Akurdi</option>
          </select>
        </div>

        {/* Facility Type Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold">
          {[
            { id: 'all', label: 'All Centers' },
            { id: 'hospital', label: '🏥 24/7 Hospitals' },
            { id: 'lab', label: '🩸 NABL Diagnostic Labs' },
            { id: 'jan_aushadhi', label: '💊 Jan Aushadhi Kendras (80% Off)' },
            { id: 'pharmacy', label: '🏪 24-Hr Pharmacies' },
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`px-4 py-2 rounded-2xl whitespace-nowrap transition-all ${
                selectedType === type.id
                  ? 'bg-teal-800 text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredFacilities.map((fac) => (
            <div
              key={fac.id}
              className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-sm hover:border-teal-300 transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-50 text-teal-700 flex items-center justify-center font-bold text-xl flex-shrink-0">
                      {fac.type === 'hospital' ? '🏥' : fac.type === 'lab' ? '🩸' : '💊'}
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-base text-slate-900">{fac.name}</h3>
                      </div>
                      <div className="text-xs font-medium text-slate-500 mt-0.5 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-teal-600" />
                        <span>{fac.address}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-amber-50 text-amber-900 border border-amber-200 px-2 py-0.5 rounded-full text-2xs font-bold">
                    <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                    <span>{fac.rating}</span>
                  </div>
                </div>

                {/* Operating Hours & Tags */}
                <div className="flex flex-wrap items-center gap-2 text-2xs">
                  <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-100 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {fac.hours}
                  </span>
                  {fac.tags.map((t, i) => (
                    <span key={i} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Meditrust Benefit Banner */}
                <div className="p-3 rounded-2xl bg-teal-50/80 border border-teal-100 text-xs text-teal-950 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="font-semibold text-2xs sm:text-xs">{fac.discountOrBenefit}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                <a
                  href={`tel:${fac.phone}`}
                  className="flex-1 py-2 bg-teal-700 hover:bg-teal-800 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Desk ({fac.phone})</span>
                </a>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(fac.name + ' ' + fac.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold flex items-center gap-1 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
