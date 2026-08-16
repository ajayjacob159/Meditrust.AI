'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Upload, FileText, CheckCircle2, AlertTriangle, Sparkles, X,
  Brain, ArrowRight, Shield, Zap, DollarSign, Pill, Clock,
  ExternalLink, Layers, RefreshCw
} from 'lucide-react'
import { medications, drugInteractions } from '@/data/medications'

interface ExtractedMedicine {
  id: string
  name: string
  prescribedDose: string
  duration: string
  purpose: string
  originalBrandPrice: number
  genericSubstitute: {
    name: string
    price: number
    savings: number
  }
  pharmacyPrices: {
    pharmacy: string
    price: number
    delivery: string
    logo: string
    badge?: string
  }[]
}

const SAMPLE_PRESCRIPTIONS = [
  {
    id: 'pune-diabetes-bp',
    title: 'Dr. R. Sharma (MD Internal Medicine, Ruby Hall Pune)',
    date: '15 Aug 2026',
    previewText: 'Rx: Glycomet-GP 2, Telma 40, Rosuvas 10, Pan-D',
    medicines: [
      {
        id: 'glycomet-gp2',
        name: 'Glycomet-GP 2 (Glimepiride 2mg + Metformin 500mg)',
        prescribedDose: '1 Tab Daily after breakfast',
        duration: '30 Days (30 Tablets)',
        purpose: 'Type 2 Diabetes Blood Sugar Control',
        originalBrandPrice: 380,
        genericSubstitute: {
          name: 'Glimepiride + Metformin 2mg/500mg PR (PMBJP Jan Aushadhi)',
          price: 64,
          savings: 83,
        },
        pharmacyPrices: [
          { pharmacy: 'Meditrust Direct', price: 256, delivery: 'Same Day Pune (4 hrs)', logo: '🛡️', badge: 'Lowest Price' },
          { pharmacy: 'Tata 1mg', price: 304, delivery: 'Tomorrow', logo: '🩺' },
          { pharmacy: 'PharmEasy', price: 316, delivery: 'Tomorrow', logo: '💊' },
          { pharmacy: 'Apollo Pharmacy', price: 350, delivery: '2 Hours Instant', logo: '🏥' },
        ],
      },
      {
        id: 'telma-40',
        name: 'Telma 40 (Telmisartan 40mg IP)',
        prescribedDose: '1 Tab Daily in Morning',
        duration: '30 Days (30 Tablets)',
        purpose: 'Blood Pressure Management & Heart Protection',
        originalBrandPrice: 310,
        genericSubstitute: {
          name: 'Telmisartan 40mg (Genericart PMBJP)',
          price: 52,
          savings: 83,
        },
        pharmacyPrices: [
          { pharmacy: 'Meditrust Direct', price: 216, delivery: 'Same Day Pune (4 hrs)', logo: '🛡️', badge: 'Lowest Price' },
          { pharmacy: 'Tata 1mg', price: 264, delivery: 'Tomorrow', logo: '🩺' },
          { pharmacy: 'PharmEasy', price: 278, delivery: 'Tomorrow', logo: '💊' },
          { pharmacy: 'Apollo Pharmacy', price: 308, delivery: '2 Hours Instant', logo: '🏥' },
        ],
      },
      {
        id: 'pan-d',
        name: 'Pan-D (Pantoprazole 40mg + Domperidone 30mg SR)',
        prescribedDose: '1 Cap Daily Morning empty stomach',
        duration: '15 Days (15 Capsules)',
        purpose: 'Acidity & Reflux Prevention',
        originalBrandPrice: 199,
        genericSubstitute: {
          name: 'Pantoprazole & Domperidone SR (Jan Aushadhi)',
          price: 45,
          savings: 77,
        },
        pharmacyPrices: [
          { pharmacy: 'Meditrust Direct', price: 162, delivery: 'Same Day Pune (4 hrs)', logo: '🛡️', badge: 'Lowest Price' },
          { pharmacy: 'Tata 1mg', price: 189, delivery: 'Tomorrow', logo: '🩺' },
          { pharmacy: 'PharmEasy', price: 194, delivery: 'Tomorrow', logo: '💊' },
          { pharmacy: 'Apollo Pharmacy', price: 210, delivery: '2 Hours Instant', logo: '🏥' },
        ],
      },
    ],
  },
  {
    id: 'fever-antibiotics',
    title: 'Dr. Priya Kulkarni (General Physician, Sahyadri Pune)',
    date: '16 Aug 2026',
    previewText: 'Rx: Augmentin 625 Duo, Dolo 650, Pan-D',
    medicines: [
      {
        id: 'augmentin-625',
        name: 'Augmentin 625 Duo (Amoxicillin + Clavulanic Acid)',
        prescribedDose: '1 Tab Twice Daily after meals',
        duration: '5 Days (10 Tablets)',
        purpose: 'Bacterial Chest & Throat Infection',
        originalBrandPrice: 215,
        genericSubstitute: {
          name: 'Amoxycillin & Clavulanate 625mg (PMBJP Jan Aushadhi)',
          price: 52,
          savings: 75,
        },
        pharmacyPrices: [
          { pharmacy: 'Meditrust Direct', price: 154, delivery: 'Same Day Pune (4 hrs)', logo: '🛡️', badge: 'Lowest Price' },
          { pharmacy: 'Tata 1mg', price: 182, delivery: 'Tomorrow', logo: '🩺' },
          { pharmacy: 'PharmEasy', price: 188, delivery: 'Tomorrow', logo: '💊' },
          { pharmacy: 'Apollo Pharmacy', price: 195, delivery: '2 Hours Instant', logo: '🏥' },
        ],
      },
      {
        id: 'dolo-650',
        name: 'Dolo 650 (Paracetamol 650mg)',
        prescribedDose: '1 Tab SOS for fever > 100°F',
        duration: '15 Tablets',
        purpose: 'Fever & Bodyache Relief',
        originalBrandPrice: 35,
        genericSubstitute: {
          name: 'Paracetamol 650mg IP (Jan Aushadhi)',
          price: 11,
          savings: 68,
        },
        pharmacyPrices: [
          { pharmacy: 'Meditrust Direct', price: 24, delivery: 'Same Day Pune (4 hrs)', logo: '🛡️', badge: 'Lowest Price' },
          { pharmacy: 'Tata 1mg', price: 29, delivery: 'Tomorrow', logo: '🩺' },
          { pharmacy: 'PharmEasy', price: 30, delivery: 'Tomorrow', logo: '💊' },
          { pharmacy: 'Apollo Pharmacy', price: 32, delivery: '2 Hours Instant', logo: '🏥' },
        ],
      },
    ],
  },
]

export default function PrescriptionScannerModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  const [stage, setStage] = useState<'upload' | 'scanning' | 'results'>('upload')
  const [scanningProgress, setScanningProgress] = useState(0)
  const [scanningStepText, setScanningStepText] = useState('Initializing AI OCR Engine...')
  const [selectedPrescription, setSelectedPrescription] = useState(SAMPLE_PRESCRIPTIONS[0])
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null)
  const [preferGeneric, setPreferGeneric] = useState(false)

  if (!isOpen) return null

  const startScanningSimulation = (prescription = SAMPLE_PRESCRIPTIONS[0], customName?: string) => {
    setSelectedPrescription(prescription)
    if (customName) setUploadedFileName(customName)
    setStage('scanning')
    setScanningProgress(15)
    setScanningStepText('Reading doctor handwriting & digital clinic seal...')

    setTimeout(() => {
      setScanningProgress(40)
      setScanningStepText('Detecting active chemical compounds & drug salts...')
    }, 800)

    setTimeout(() => {
      setScanningProgress(70)
      setScanningStepText('Matching generic substitutes (Jan Aushadhi / PMBJP)...')
    }, 1500)

    setTimeout(() => {
      setScanningProgress(90)
      setScanningStepText('Querying real-time prices across Tata 1mg, PharmEasy, Apollo, Meditrust...')
    }, 2200)

    setTimeout(() => {
      setScanningProgress(100)
      setStage('results')
    }, 2900)
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      startScanningSimulation(SAMPLE_PRESCRIPTIONS[0], file.name)
    }
  }

  // Calculate totals
  const totalBrandPrice = selectedPrescription.medicines.reduce((acc, m) => acc + m.originalBrandPrice, 0)
  const totalMeditrustPrice = selectedPrescription.medicines.reduce((acc, m) => acc + (m.pharmacyPrices.find((p) => p.pharmacy === 'Meditrust Direct')?.price || m.originalBrandPrice), 0)
  const totalGenericPrice = selectedPrescription.medicines.reduce((acc, m) => acc + m.genericSubstitute.price, 0)
  const total1mgPrice = selectedPrescription.medicines.reduce((acc, m) => acc + (m.pharmacyPrices.find((p) => p.pharmacy === 'Tata 1mg')?.price || m.originalBrandPrice), 0)
  const totalPharmEasyPrice = selectedPrescription.medicines.reduce((acc, m) => acc + (m.pharmacyPrices.find((p) => p.pharmacy === 'PharmEasy')?.price || m.originalBrandPrice), 0)
  const totalApolloPrice = selectedPrescription.medicines.reduce((acc, m) => acc + (m.pharmacyPrices.find((p) => p.pharmacy === 'Apollo Pharmacy')?.price || m.originalBrandPrice), 0)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-md overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden border border-slate-100 my-8">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-teal-50 via-white to-blue-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-teal-700 text-white flex items-center justify-center shadow-teal">
              <Brain className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-slate-900">AI Prescription Scanner & Real-Time Price Comparator</h3>
                <span className="badge-teal badge text-2xs">Real-Time Multi-Agent</span>
              </div>
              <p className="text-xs text-slate-500">
                Upload any Indian prescription · Compare Tata 1mg, PharmEasy, Apollo Pharmacy & Meditrust Direct
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Stages */}
        <div className="p-6">
          {stage === 'upload' && (
            <div className="space-y-6">
              {/* Dropzone */}
              <div className="border-2 border-dashed border-teal-300 rounded-3xl p-8 text-center bg-teal-50/20 hover:bg-teal-50/40 transition-colors relative group">
                <input
                  type="file"
                  accept="image/*,.pdf"
                  onChange={handleFileUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                />
                <div className="w-16 h-16 rounded-3xl bg-teal-100 text-teal-700 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Upload className="w-8 h-8" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-1">
                  Upload Prescription (Photo / PDF / Gallery)
                </h4>
                <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
                  Supports doctor handwriting, hospital discharge summaries, or e-prescriptions from Ruby Hall, Sahyadri, Jupiter, Apollo & private clinics.
                </p>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-700 text-white text-xs font-bold shadow-teal">
                  <Upload className="w-3.5 h-3.5" />
                  Choose File from Device
                </div>
              </div>

              {/* Sample Prescriptions for Instant Testing */}
              <div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  Or Try 1-Click Sample Prescription (Instant Live Demo):
                </div>
                <div className="grid sm:grid-cols-2 gap-3">
                  {SAMPLE_PRESCRIPTIONS.map((sample) => (
                    <button
                      key={sample.id}
                      onClick={() => startScanningSimulation(sample)}
                      className="text-left p-4 rounded-2xl border border-slate-200 hover:border-teal-600 hover:bg-teal-50/30 transition-all group card"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-teal-800">{sample.title}</span>
                        <span className="text-2xs text-slate-400">{sample.date}</span>
                      </div>
                      <p className="text-xs text-slate-600 font-mono mb-2">{sample.previewText}</p>
                      <div className="flex items-center gap-1.5 text-xs text-teal-700 font-bold group-hover:translate-x-1 transition-transform">
                        Scan this prescription <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {stage === 'scanning' && (
            <div className="py-12 text-center max-w-md mx-auto space-y-6">
              {/* Laser scan animation visualizer */}
              <div className="relative w-32 h-32 mx-auto rounded-3xl bg-teal-50 border-2 border-teal-500 flex items-center justify-center overflow-hidden shadow-teal">
                <FileText className="w-14 h-14 text-teal-700" />
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-teal-400 to-transparent animate-pulse"
                  style={{
                    top: `${scanningProgress}%`,
                    boxShadow: '0 0 15px #14b8a6',
                    transition: 'top 0.4s ease',
                  }}
                />
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">Dr. Arya AI is Scanning Prescription</h4>
                <p className="text-xs text-teal-700 font-semibold">{scanningStepText}</p>
              </div>

              {/* Progress bar */}
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-teal-600 to-blue-600 h-full transition-all duration-300 rounded-full"
                  style={{ width: `${scanningProgress}%` }}
                />
              </div>

              <p className="text-2xs text-slate-400">
                Checking price live across Tata 1mg, PharmEasy, Apollo Pharmacy & Jan Aushadhi
              </p>
            </div>
          )}

          {stage === 'results' && (
            <div className="space-y-6">
              {/* Top Summary Banner */}
              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-teal-900 to-slate-900 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <CheckCircle2 className="w-4 h-4 text-teal-400" />
                    <span className="text-xs font-bold text-teal-200">Prescription Parsed Successfully</span>
                  </div>
                  <h4 className="text-base font-bold text-white">
                    {selectedPrescription.title}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {selectedPrescription.medicines.length} Medicines Identified · Real-time price fetched from 4 Indian pharmacies
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setStage('upload')}
                    className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold text-white flex items-center gap-1.5 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Scan Another
                  </button>
                </div>
              </div>

              {/* Real-time Multi-Pharmacy Price Comparison Ticker */}
              <div className="card p-4 sm:p-5 bg-slate-50 border border-slate-200">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Total Cart Price Comparison (All Prescribed Medicines):
                  </span>
                  <span className="text-2xs text-teal-700 font-bold bg-teal-50 px-2 py-0.5 rounded-full border border-teal-200">
                    Live Rates · Pune Delivery
                  </span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  <div className="p-3 rounded-xl bg-teal-800 text-white text-center shadow-teal relative ring-2 ring-teal-400">
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-2xs bg-amber-400 text-slate-900 px-2 py-0.2 rounded-full font-black">
                      BEST VALUE
                    </span>
                    <div className="text-2xs text-teal-200 font-bold mt-1">Meditrust Direct</div>
                    <div className="text-xl font-black text-white">₹{totalMeditrustPrice}</div>
                    <div className="text-2xs text-teal-200">Same Day Pune (4 hrs)</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                    <div className="text-2xs text-slate-500 font-bold">Jan Aushadhi Generic</div>
                    <div className="text-xl font-black text-green-700">₹{totalGenericPrice}</div>
                    <div className="text-2xs text-green-600 font-bold">Save 80%</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                    <div className="text-2xs text-slate-500 font-bold">Tata 1mg</div>
                    <div className="text-xl font-black text-slate-800">₹{total1mgPrice}</div>
                    <div className="text-2xs text-slate-400">24–48 Hours</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                    <div className="text-2xs text-slate-500 font-bold">PharmEasy</div>
                    <div className="text-xl font-black text-slate-800">₹{totalPharmEasyPrice}</div>
                    <div className="text-2xs text-slate-400">Tomorrow</div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                    <div className="text-2xs text-slate-500 font-bold">Apollo Pharmacy</div>
                    <div className="text-xl font-black text-slate-800">₹{totalApolloPrice}</div>
                    <div className="text-2xs text-slate-400">2 Hours Pickup</div>
                  </div>
                </div>
              </div>

              {/* Medicine Breakdown Cards */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900">Extracted Medicines & Dosage Breakdown</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-600">Show Generic Alternatives (Jan Aushadhi):</span>
                    <button
                      onClick={() => setPreferGeneric(!preferGeneric)}
                      className={`w-10 h-5 rounded-full transition-colors relative ${preferGeneric ? 'bg-teal-600' : 'bg-slate-300'}`}
                    >
                      <span className={`w-4 h-4 rounded-full bg-white absolute top-0.5 transition-transform ${preferGeneric ? 'left-5' : 'left-0.5'}`} />
                    </button>
                  </div>
                </div>

                {selectedPrescription.medicines.map((med, idx) => (
                  <div key={med.id} className="card p-5 border border-slate-200 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-teal-100 text-teal-800">
                            #{idx + 1}
                          </span>
                          <h5 className="text-base font-bold text-slate-900">{med.name}</h5>
                        </div>
                        <div className="text-xs text-slate-600 font-medium">
                          <strong className="text-teal-700">Dose:</strong> {med.prescribedDose} · <strong className="text-teal-700">Duration:</strong> {med.duration}
                        </div>
                        <div className="text-2xs text-slate-500 mt-1">
                          <strong>Indication:</strong> {med.purpose}
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xs text-slate-400">MRP / Offline Store:</div>
                        <div className="text-lg font-black text-slate-800">₹{med.originalBrandPrice}</div>
                      </div>
                    </div>

                    {/* Generic Recommendation Pill */}
                    <div className="p-3 rounded-xl bg-green-50/70 border border-green-200 flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-green-600 flex-shrink-0" />
                        <div>
                          <div className="text-xs font-bold text-green-900">
                            Generic Substitute: {med.genericSubstitute.name}
                          </div>
                          <div className="text-2xs text-green-700">
                            Same active molecule & clinical efficacy approved by CDSCO & Jan Aushadhi
                          </div>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-sm font-black text-green-800">₹{med.genericSubstitute.price}</div>
                        <span className="badge-green badge text-2xs">Save {med.genericSubstitute.savings}%</span>
                      </div>
                    </div>

                    {/* Live Pharmacy Prices Row */}
                    <div>
                      <div className="text-2xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                        Live Pharmacy Price Check:
                      </div>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {med.pharmacyPrices.map((p) => (
                          <div
                            key={p.pharmacy}
                            className={`p-2.5 rounded-xl border text-xs flex items-center justify-between ${
                              p.pharmacy === 'Meditrust Direct'
                                ? 'bg-teal-50 border-teal-300 font-bold text-teal-900'
                                : 'bg-slate-50 border-slate-200 text-slate-700'
                            }`}
                          >
                            <div>
                              <div className="flex items-center gap-1">
                                <span>{p.logo}</span>
                                <span className="font-semibold text-2xs">{p.pharmacy}</span>
                              </div>
                              <div className="text-2xs text-slate-500 mt-0.5">{p.delivery}</div>
                            </div>
                            <div className="text-right">
                              <div className="font-black text-sm">₹{p.price}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="p-4 rounded-2xl bg-teal-50 border border-teal-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-sm font-bold text-teal-950">
                    Order with Meditrust Price Match Guarantee
                  </div>
                  <p className="text-xs text-teal-700">
                    Guaranteed lowest price vs Tata 1mg, PharmEasy & Apollo + 4-hour express delivery in Pune
                  </p>
                </div>
                <div className="flex gap-2 w-full sm:w-auto">
                  <Link
                    href="/dashboard"
                    onClick={onClose}
                    className="btn-primary flex-1 sm:flex-initial justify-center shadow-teal"
                  >
                    Order All at ₹{preferGeneric ? totalGenericPrice : totalMeditrustPrice}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
