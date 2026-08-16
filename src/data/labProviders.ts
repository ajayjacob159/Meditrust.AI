export interface LabProvider {
  id: string
  name: string
  logo: string
  tagline: string
  homeCollection: boolean
  walkin: boolean
  puneHomeCollection: boolean
  puneHubs: string[]
  priceRange: { min: number; max: number }
  turnaroundTime: string
  turnaroundHours: number
  accreditations: string[]
  rating: number
  reviewCount: number
  testsOffered: number
  panels: LabPanel[]
  pros: string[]
  cons: string[]
  bookingUrl: string
  supportPhone: string
  resultDelivery: string[]
  color: string
  badge?: string
  isMeditrustDirect?: boolean
  discountPercentage?: number
}

export interface LabPanel {
  id: string
  name: string
  tests: string[]
  price: number
  originalPrice?: number
  turnaround: string
  popular: boolean
}

export const labProviders: LabProvider[] = [
  // 0. Meditrust Direct Labs (Anchor Platform)
  {
    id: 'meditrust-direct',
    name: 'Meditrust Direct Labs',
    logo: '🛡️',
    tagline: 'Lowest Price Guarantee · 60-min Pune Phlebotomist Dispatch & Dr. Arya Video Report',
    homeCollection: true,
    walkin: true,
    puneHomeCollection: true,
    puneHubs: ['Kothrud', 'Baner', 'Hinjewadi', 'Viman Nagar', 'Wakad', 'Hadapsar', 'Camp', 'PCMC', 'Deccan'],
    priceRange: { min: 149, max: 1899 },
    turnaroundTime: '6–12 Hours (Same Day)',
    turnaroundHours: 8,
    accreditations: ['NABL Accredited', 'CAP Certified', 'ICMR Approved', 'ISO 15189', 'Meditrust Quality Seal'],
    rating: 4.9,
    reviewCount: 48200,
    testsOffered: 350,
    isMeditrustDirect: true,
    discountPercentage: 45,
    badge: '🏆 Best Price & Fastest (Pune)',
    color: '#0F766E',
    supportPhone: '+91 7028025717',
    bookingUrl: 'https://meditrust.ai/lab-test-comparison',
    resultDelivery: ['WhatsApp PDF within 8 hrs', 'Dr. Arya Video Explanation', '100-Point Organ Health Score', 'Instant Hospital VIP Transfer'],
    pros: [
      'Guaranteed 60-minute doorstep sample collection in Pune',
      'Dr. Arya AI Doctor video explanation included free',
      'Jan Aushadhi generic prescription savings linked directly',
      '100% cashless VIP admission at Ruby Hall & Sahyadri Pune',
    ],
    cons: ['Home collection slots fill quickly between 6 AM and 9 AM'],
    panels: [
      { id: 'md-full-body', name: 'Platinum Full Body Checkup (86 Tests)', tests: ['CBC', 'Lipid Profile', 'LFT', 'KFT', 'Thyroid Profile', 'HbA1c & Fasting Glucose', 'Vitamin D3 & B12', 'Cardiac hs-CRP', 'Urine Routine'], price: 999, originalPrice: 2999, turnaround: '8 hrs', popular: true },
      { id: 'md-cbc', name: 'Complete Blood Count (CBC + ESR)', tests: ['Hemoglobin', 'RBC', 'WBC Differential', 'Platelets', 'ESR'], price: 199, originalPrice: 450, turnaround: '6 hrs', popular: true },
      { id: 'md-diabetes', name: 'Smart Diabetes Care (HbA1c + Sugar)', tests: ['HbA1c Glycated Hemoglobin', 'Average Blood Glucose', 'Fasting Blood Sugar'], price: 349, originalPrice: 850, turnaround: '6 hrs', popular: true },
      { id: 'md-thyroid', name: 'Thyroid Care Advanced (T3, T4, TSH)', tests: ['Total T3', 'Total T4', 'TSH Ultrasensitive'], price: 299, originalPrice: 750, turnaround: '8 hrs', popular: true },
      { id: 'md-vitamins', name: 'Vitality Booster (Vitamin D3 & B12)', tests: ['25-Hydroxy Vitamin D', 'Vitamin B12 Cyanocobalamin', 'Calcium'], price: 599, originalPrice: 1800, turnaround: '8 hrs', popular: true },
    ],
  },

  // 1. Metropolis Healthcare
  {
    id: 'metropolis',
    name: 'Metropolis Healthcare',
    logo: '🔬',
    tagline: 'Global Reference Pathology · CAP & NABL Accredited Super Labs',
    homeCollection: true,
    walkin: true,
    puneHomeCollection: true,
    puneHubs: ['Shivajinagar', 'Kothrud', 'Aundh', 'Viman Nagar', 'Kalyani Nagar', 'Pimpri'],
    priceRange: { min: 380, max: 4500 },
    turnaroundTime: '18–24 Hours',
    turnaroundHours: 20,
    accreditations: ['CAP Accredited', 'NABL ISO 15189', 'ICMR Approved'],
    rating: 4.6,
    reviewCount: 38900,
    testsOffered: 4000,
    color: '#0284C7',
    badge: 'CAP Super-Specialist Lab',
    supportPhone: '1800-267-2026',
    bookingUrl: 'https://www.metropolisindia.com',
    resultDelivery: ['Email PDF', 'Metropolis App', 'SMS Download'],
    pros: ['High clinical precision for rare oncology & genetic tests', 'Extensive reference labs across Maharashtra'],
    cons: ['Higher pricing compared to direct digital aggregators', 'Turnaround time 18–24 hours'],
    panels: [
      { id: 'metro-full-body', name: 'TruHealth Platinum Health Check', tests: ['CBC', 'Lipid', 'LFT', 'KFT', 'Thyroid Profile', 'HbA1c', 'Vitamin D3 & B12'], price: 2499, originalPrice: 3800, turnaround: '24 hrs', popular: true },
      { id: 'metro-cbc', name: 'Complete Hemogram CBC', tests: ['Hemoglobin', 'Platelets', 'Total WBC & Differential'], price: 380, originalPrice: 500, turnaround: '12 hrs', popular: false },
      { id: 'metro-thyroid', name: 'Thyroid Profile Free & Total', tests: ['T3', 'T4', 'TSH'], price: 650, originalPrice: 850, turnaround: '18 hrs', popular: true },
    ],
  },

  // 2. Dr Lal PathLabs
  {
    id: 'dr-lal-pathlabs',
    name: 'Dr Lal PathLabs',
    logo: '🧪',
    tagline: '75+ Years Legacy of Clinical Pathology Excellence in India',
    homeCollection: true,
    walkin: true,
    puneHomeCollection: true,
    puneHubs: ['Camp', 'Deccan', 'Baner Road', 'Hadapsar', 'PCMC Chinchwad', 'Kondhwa'],
    priceRange: { min: 350, max: 4200 },
    turnaroundTime: '16–24 Hours',
    turnaroundHours: 18,
    accreditations: ['NABL Accredited', 'CAP Certified', 'ISO 9001:2015'],
    rating: 4.6,
    reviewCount: 52000,
    testsOffered: 3500,
    color: '#D97706',
    badge: 'National Pathology Chain',
    supportPhone: '011-39885050',
    bookingUrl: 'https://www.lalpathlabs.com',
    resultDelivery: ['SMS Link', 'Lal PathLabs Portal', 'Physical Report at Centers'],
    pros: ['Widely trusted by senior physicians across India', 'Standardized reporting across national centers'],
    cons: ['Home collection fees apply in select outskirts of PCMC', 'Higher prices on standard preventive packages'],
    panels: [
      { id: 'lal-full-body', name: 'Swasthfit Super Comprehensive', tests: ['CBC', 'Lipid', 'LFT', 'KFT', 'TSH', 'HbA1c', 'Vitamin D3'], price: 2199, originalPrice: 3500, turnaround: '24 hrs', popular: true },
      { id: 'lal-cbc', name: 'Complete Blood Count (CBC)', tests: ['Hemoglobin', 'TLC', 'DLC', 'Platelet Count'], price: 350, originalPrice: 480, turnaround: '12 hrs', popular: true },
    ],
  },

  // 3. Thyrocare Technologies
  {
    id: 'thyrocare',
    name: 'Thyrocare Technologies',
    logo: '🧬',
    tagline: 'High-Volume Automated Central Lab · Pioneer in Preventive Profiles',
    homeCollection: true,
    walkin: true,
    puneHomeCollection: true,
    puneHubs: ['Dighi', 'Kothrud', 'Katraj', 'Hinjewadi', 'Viman Nagar', 'Wakad'],
    priceRange: { min: 250, max: 2500 },
    turnaroundTime: '24–36 Hours',
    turnaroundHours: 28,
    accreditations: ['NABL ISO 15189', 'CAP Accredited', 'ICMR'],
    rating: 4.5,
    reviewCount: 64000,
    testsOffered: 800,
    color: '#E11D48',
    badge: 'Volume Preventive Leader',
    supportPhone: '022-30900000',
    bookingUrl: 'https://www.thyrocare.com',
    resultDelivery: ['Email PDF', 'Thyrocare App', 'SMS Report'],
    pros: ['Very cost-effective preventive packages (Aarogyam)', 'Automated central track processing'],
    cons: ['Samples flown to Navi Mumbai central lab, slower turnaround (24–36h)', 'Customer support response can be slow'],
    panels: [
      { id: 'thyro-full-body', name: 'Aarogyam 1.3 Complete Health Profile', tests: ['Thyroid', 'Lipid', 'Liver', 'Kidney', 'Iron', 'Vitamin D & B12', 'CBC'], price: 1399, originalPrice: 2800, turnaround: '30 hrs', popular: true },
      { id: 'thyro-thyroid', name: 'Thyroid Profile Ultra', tests: ['Total T3', 'Total T4', 'TSH'], price: 320, originalPrice: 600, turnaround: '24 hrs', popular: true },
    ],
  },

  // 4. Manipal Health Diagnostics
  {
    id: 'manipal-diagnostics',
    name: 'Manipal Health Diagnostics',
    logo: '🏥',
    tagline: 'Hospital-Backed Pathology & Clinical Diagnostic Precision',
    homeCollection: true,
    walkin: true,
    puneHomeCollection: true,
    puneHubs: ['Kharadi', 'Baner', 'Viman Nagar', 'Magarpatta', 'Koregaon Park'],
    priceRange: { min: 400, max: 4800 },
    turnaroundTime: '12–18 Hours',
    turnaroundHours: 14,
    accreditations: ['NABH & NABL Accredited', 'ISO 15189:2022', 'AERB Approved'],
    rating: 4.7,
    reviewCount: 21500,
    testsOffered: 2800,
    color: '#2563EB',
    badge: 'Hospital-Grade Quality',
    supportPhone: '1800-102-5555',
    bookingUrl: 'https://www.manipalhospitals.com/diagnostics',
    resultDelivery: ['Manipal Health App', 'WhatsApp PDF', 'Hospital Desk'],
    pros: ['Direct integration with hospital specialist consultants', 'Same-day turnaround for critical parameters'],
    cons: ['Premium pricing tier', 'Home collection service limited to core Pune metro zones'],
    panels: [
      { id: 'manipal-full-body', name: 'Manipal Comprehensive Executive Health', tests: ['CBC', 'Lipid', 'LFT', 'KFT', 'Thyroid', 'HbA1c', 'Vitamin D3 & B12', 'ECG Review'], price: 2899, originalPrice: 4200, turnaround: '14 hrs', popular: true },
      { id: 'manipal-cbc', name: 'Advanced CBC Hemogram', tests: ['CBC 24 Parameters', 'ESR', 'Peripheral Smear'], price: 420, originalPrice: 550, turnaround: '8 hrs', popular: false },
    ],
  },

  // 5. Medlife / Midlife Diagnostics
  {
    id: 'medlife-diagnostics',
    name: 'Midlife / Medlife Diagnostics',
    logo: '🩺',
    tagline: 'Digital Home Sample Collection & Affordable Routine Lab Packages',
    homeCollection: true,
    walkin: false,
    puneHomeCollection: true,
    puneHubs: ['Kothrud', 'Wakad', 'Hadapsar', 'Bavdhan', 'Pimple Saudagar'],
    priceRange: { min: 220, max: 2100 },
    turnaroundTime: '24–36 Hours',
    turnaroundHours: 26,
    accreditations: ['NABL Partner Labs', 'ISO 9001:2015'],
    rating: 4.3,
    reviewCount: 16400,
    testsOffered: 450,
    color: '#059669',
    badge: 'Budget Digital Pathology',
    supportPhone: '1800-267-1111',
    bookingUrl: 'https://www.medlife.com',
    resultDelivery: ['Email PDF', 'App Download', 'SMS Link'],
    pros: ['Budget-friendly baseline test packages', 'Easy mobile booking UI'],
    cons: ['Longer turnaround times for specialized vitamins & hormones', 'Third-party processing in some hubs'],
    panels: [
      { id: 'medlife-full-body', name: 'Midlife Smart Wellness Health Check', tests: ['CBC', 'Lipid', 'Liver', 'Kidney', 'Fasting Sugar', 'Thyroid TSH'], price: 1199, originalPrice: 2400, turnaround: '28 hrs', popular: true },
    ],
  },

  // 6. Healthians
  {
    id: 'healthians',
    name: 'Healthians Labs',
    logo: '🍎',
    tagline: 'Direct-to-Home AI Diagnostic Testing with Free Home Sample Pickup',
    homeCollection: true,
    walkin: false,
    puneHomeCollection: true,
    puneHubs: ['Baner', 'Kothrud', 'Hinjewadi', 'Viman Nagar', 'Hadapsar', 'Wakad'],
    priceRange: { min: 240, max: 2400 },
    turnaroundTime: '20–28 Hours',
    turnaroundHours: 22,
    accreditations: ['NABL Accredited Lab', 'CAP Certified Controls'],
    rating: 4.4,
    reviewCount: 31000,
    testsOffered: 600,
    color: '#10B981',
    badge: 'Doorstep Specialist',
    supportPhone: '999-888-0005',
    bookingUrl: 'https://www.healthians.com',
    resultDelivery: ['Healthians App', 'WhatsApp PDF', 'Smart Health Report'],
    pros: ['Free home sample collection with smart temperature bag tracking', 'Interactive app-based trend analysis'],
    cons: ['Rescheduling of phlebotomists during peak monsoon in Pune', 'Reports take 20–28 hours on average'],
    panels: [
      { id: 'healthians-full-body', name: 'Healthians Complete Health Package', tests: ['CBC', 'Lipid', 'LFT', 'KFT', 'Thyroid', 'HbA1c', 'Vitamin D3 & B12', 'Iron'], price: 1299, originalPrice: 2800, turnaround: '22 hrs', popular: true },
    ],
  },

  // 7. Krsnaa Diagnostics
  {
    id: 'krsnaa-diagnostics',
    name: 'Krsnaa Diagnostics',
    logo: '🏛️',
    tagline: 'Largest Public-Private Diagnostic Network in Maharashtra · High Affordability',
    homeCollection: true,
    walkin: true,
    puneHomeCollection: true,
    puneHubs: ['Chinchwad PCMC', 'Sassoon Hospital Hub', 'Aundh', 'Yerawada', 'Swargate'],
    priceRange: { min: 120, max: 1999 },
    turnaroundTime: '12–24 Hours',
    turnaroundHours: 16,
    accreditations: ['NABL Accredited', 'ICMR Approved', 'ISO 15189:2012'],
    rating: 4.4,
    reviewCount: 29000,
    testsOffered: 1200,
    color: '#7C3AED',
    badge: 'Maharashtra Govt Partner',
    supportPhone: '020-68146814',
    bookingUrl: 'https://krsnaadiagnostics.com',
    resultDelivery: ['Online Patient Portal', 'SMS Link', 'Printed Center Copy'],
    pros: ['Highly affordable government-subsidized rates in Maharashtra', 'Extensive infrastructure across Pune municipal regions'],
    cons: ['Home collection logistics have fewer morning slots', 'Mobile UI is basic compared to Meditrust AI'],
    panels: [
      { id: 'krsnaa-full-body', name: 'Krsnaa Total Wellness Screening', tests: ['CBC', 'Lipid', 'LFT', 'KFT', 'Blood Sugar', 'Urine Routine', 'Thyroid TSH'], price: 899, originalPrice: 2100, turnaround: '18 hrs', popular: true },
      { id: 'krsnaa-cbc', name: 'Complete Blood Count (CBC)', tests: ['Hemoglobin', 'Platelets', 'Total & Diff Count'], price: 150, originalPrice: 300, turnaround: '10 hrs', popular: true },
    ],
  },

  // 8. Diagnopin / Diganopin
  {
    id: 'diagnopin',
    name: 'Diagnopin AI Labs',
    logo: '📊',
    tagline: 'AI-Enhanced Pathology Analytics & Biomarker Risk Stratification',
    homeCollection: true,
    walkin: false,
    puneHomeCollection: true,
    puneHubs: ['Kothrud', 'Baner', 'Kalyani Nagar', 'Hinjewadi'],
    priceRange: { min: 299, max: 2899 },
    turnaroundTime: '14–20 Hours',
    turnaroundHours: 16,
    accreditations: ['NABL Partner Network', 'ISO 15189 Compliant'],
    rating: 4.5,
    reviewCount: 11200,
    testsOffered: 450,
    color: '#0891B2',
    badge: 'AI Diagnostic Analytics',
    supportPhone: '+91 7028025717',
    bookingUrl: 'https://www.diagnopin.com',
    resultDelivery: ['Smart Digital Dashboard', 'WhatsApp PDF', 'Risk Trajectory Graph'],
    pros: ['Clean AI-generated graphical trends', 'Organ risk scores'],
    cons: ['Limited standalone physical walk-in centers in Pune'],
    panels: [
      { id: 'diagno-full-body', name: 'Diagnopin AI Comprehensive Health Scan', tests: ['CBC', 'Lipid', 'LFT', 'KFT', 'HbA1c', 'Vitamin D', 'Metabolic Score'], price: 1499, originalPrice: 3100, turnaround: '16 hrs', popular: true },
    ],
  },

  // 9. Likhitha Diagnostic Center
  {
    id: 'likhitha-diagnostics',
    name: 'Likhitha Diagnostics',
    logo: '🏥',
    tagline: '20+ Years Pathology & Radiology Excellence in South & West India',
    homeCollection: true,
    walkin: true,
    puneHomeCollection: true,
    puneHubs: ['Viman Nagar', 'Hadapsar', 'PCMC', 'Camp', 'Kothrud'],
    priceRange: { min: 280, max: 2600 },
    turnaroundTime: '16–24 Hours',
    turnaroundHours: 18,
    accreditations: ['NABL ISO 15189', 'NABH Quality Certified'],
    rating: 4.4,
    reviewCount: 14800,
    testsOffered: 1500,
    color: '#EA580C',
    badge: 'Established South/West Chain',
    supportPhone: '040-23456789',
    bookingUrl: 'https://likhithadiagnostics.com',
    resultDelivery: ['Online Portal', 'SMS Link', 'Physical Center Pickup'],
    pros: ['Combined pathology and radiology imaging centers', 'Reliable clinical accuracy for chronic panels'],
    cons: ['Digital app experience is slower', 'Fewer doorstep phlebotomists in western Pune outskirts'],
    panels: [
      { id: 'likhitha-full-body', name: 'Likhitha Executive Health Master', tests: ['CBC', 'Lipid', 'LFT', 'KFT', 'Thyroid Profile', 'HbA1c', 'Uric Acid'], price: 1450, originalPrice: 2900, turnaround: '18 hrs', popular: true },
    ],
  },

  // 10. Lupin Diagnostics
  {
    id: 'lupin-diagnostics',
    name: 'Lupin Diagnostics',
    logo: '💊',
    tagline: 'Pharma-Grade Pathology Precision · 100% Temperature-Controlled Logistics',
    homeCollection: true,
    walkin: true,
    puneHomeCollection: true,
    puneHubs: ['Senapati Bapat Road', 'Baner', 'Kothrud', 'Aundh', 'Pashan', 'Nagar Road'],
    priceRange: { min: 320, max: 3600 },
    turnaroundTime: '12–18 Hours',
    turnaroundHours: 15,
    accreditations: ['NABL Accredited', 'CAP Validated Controls', 'ISO 15189:2022'],
    rating: 4.7,
    reviewCount: 22400,
    testsOffered: 2500,
    color: '#0D9488',
    badge: 'Pharma Quality Standards',
    supportPhone: '1800-572-0202',
    bookingUrl: 'https://www.lupindiagnostics.com',
    resultDelivery: ['Lupin Health Portal', 'WhatsApp PDF', 'Smart Report'],
    pros: ['Pharmaceutical rigor in cold-chain specimen preservation', 'Rapid same-day turnaround in Pune metro'],
    cons: ['Slightly higher pricing on single specialized hormone tests'],
    panels: [
      { id: 'lupin-full-body', name: 'Lupin Complete Health Shield', tests: ['CBC', 'Lipid', 'LFT', 'KFT', 'Thyroid (T3/T4/TSH)', 'HbA1c', 'Vitamin D3 & B12', 'Iron'], price: 1899, originalPrice: 3400, turnaround: '15 hrs', popular: true },
      { id: 'lupin-cbc', name: 'Lupin Complete Hemogram', tests: ['CBC 22 Parameters', 'ESR'], price: 320, originalPrice: 450, turnaround: '8 hrs', popular: false },
    ],
  },

  // 11. Redcliffe Labs
  {
    id: 'redcliffe-labs',
    name: 'Redcliffe Labs',
    logo: '🩸',
    tagline: 'Smart Health Checkups Delivered at Doorstep with Live Phlebotomy Tracking',
    homeCollection: true,
    walkin: true,
    puneHomeCollection: true,
    puneHubs: ['Wakad', 'Kothrud', 'Hinjewadi', 'Viman Nagar', 'Hadapsar', 'Baner'],
    priceRange: { min: 220, max: 2400 },
    turnaroundTime: '18–24 Hours',
    turnaroundHours: 20,
    accreditations: ['NABL Accredited', 'CAP Proficiency Tested', 'ISO 15189'],
    rating: 4.5,
    reviewCount: 41000,
    testsOffered: 3500,
    color: '#DC2626',
    badge: 'Doorstep Pathology Tech',
    supportPhone: '898-898-8787',
    bookingUrl: 'https://redcliffelabs.com',
    resultDelivery: ['WhatsApp PDF', 'Redcliffe App', 'SMS Link'],
    pros: ['Very aggressive promotional pricing on preventive packages', 'Live GPS tracking of sample collection technician'],
    cons: ['Upselling of additional panels during customer booking call'],
    panels: [
      { id: 'redcliffe-full-body', name: 'Redcliffe Smart Plus Full Body Checkup', tests: ['CBC', 'Lipid', 'LFT', 'KFT', 'Thyroid Profile', 'HbA1c', 'Vitamin D3 & B12', 'Urine'], price: 1099, originalPrice: 2800, turnaround: '20 hrs', popular: true },
    ],
  },

  // 12. Simplify / SimplifyHealth
  {
    id: 'simplify-health',
    name: 'Simplify Health Diagnostics',
    logo: '✨',
    tagline: 'Jargon-Free Patient Centric Pathology & Digital Health Summaries',
    homeCollection: true,
    walkin: false,
    puneHomeCollection: true,
    puneHubs: ['Baner', 'Kalyani Nagar', 'Kothrud', 'Viman Nagar'],
    priceRange: { min: 320, max: 2700 },
    turnaroundTime: '16–22 Hours',
    turnaroundHours: 18,
    accreditations: ['NABL Certified Partner Labs', 'ISO 9001'],
    rating: 4.5,
    reviewCount: 9800,
    testsOffered: 400,
    color: '#8B5CF6',
    badge: 'Simplified Reporting',
    supportPhone: '+91 7028025717',
    bookingUrl: 'https://simplifyhealth.in',
    resultDelivery: ['Color-Coded Plain Language PDF', 'WhatsApp Briefing'],
    pros: ['Focuses on plain-English report summaries', 'Clear color-coded risk flags'],
    cons: ['Smaller test catalog compared to full-service super labs'],
    panels: [
      { id: 'simplify-full-body', name: 'Simplify Wellness 360 Screening', tests: ['CBC', 'Lipid', 'LFT', 'KFT', 'Thyroid', 'HbA1c', 'Plain Language Summary'], price: 1399, originalPrice: 2900, turnaround: '18 hrs', popular: true },
    ],
  },

  // 13. Sahyadri Diagnostics & Hospitals
  {
    id: 'sahyadri-diagnostics',
    name: 'Sahyadri Diagnostics (Pune)',
    logo: '🏥',
    tagline: 'Maharashtra’s Trusted Hospital Network · Direct Specialist Pathologist Validation',
    homeCollection: true,
    walkin: true,
    puneHomeCollection: true,
    puneHubs: ['Deccan Gymkhana', 'Kothrud', 'Nagar Road', 'Hadapsar', 'Bibwewadi', 'Kasarwadi'],
    priceRange: { min: 350, max: 4600 },
    turnaroundTime: '8–16 Hours (Same Day)',
    turnaroundHours: 10,
    accreditations: ['NABL ISO 15189', 'NABH Hospital Accredited', 'ICMR Super Specialty'],
    rating: 4.8,
    reviewCount: 35600,
    testsOffered: 3200,
    color: '#4F46E5',
    badge: 'Pune Hospital Super-Lab',
    supportPhone: '+91 7028025717',
    bookingUrl: 'https://sahyadrihospital.com/diagnostics',
    resultDelivery: ['Sahyadri Patient Portal', 'WhatsApp PDF', 'Priority Hospital Counter'],
    pros: ['Direct linkage with Sahyadri super-specialty hospital doctors', 'Fastest same-day turnaround in Pune central', 'VIP admission pass for Meditrust users'],
    cons: ['Hospital base price is higher without Meditrust subsidy'],
    panels: [
      { id: 'sahyadri-full-body', name: 'Sahyadri Master Health Checkup', tests: ['CBC', 'Lipid', 'Liver', 'Kidney', 'Thyroid Profile', 'HbA1c', 'Vitamin D3 & B12', 'ECG Review'], price: 2399, originalPrice: 3800, turnaround: '10 hrs', popular: true },
      { id: 'sahyadri-cbc', name: 'Sahyadri High-Precision CBC', tests: ['CBC 26 Parameters', 'ESR', 'Smear'], price: 380, originalPrice: 500, turnaround: '6 hrs', popular: true },
    ],
  },
]

export const popularPanels = [
  { id: 'full-body', name: 'Full Body Checkup (86 Tests)', icon: '🛡️', bestPrice: '₹999', originalPrice: '₹2,999', savings: '67%', description: 'Comprehensive organ health screening: CBC, Lipid, LFT, KFT, Thyroid, HbA1c, Vitamin D3 & B12.' },
  { id: 'cbc', name: 'Complete Blood Count (CBC + ESR)', icon: '🩸', bestPrice: '₹199', originalPrice: '₹450', savings: '56%', description: 'Detects anemia, infections, platelet disorders, and systemic inflammation.' },
  { id: 'diabetes', name: 'Diabetes HbA1c & Fasting Glucose', icon: '🩺', bestPrice: '₹349', originalPrice: '₹850', savings: '59%', description: '90-day average blood sugar control with estimated average glucose.' },
  { id: 'thyroid', name: 'Thyroid Care Profile (T3, T4, TSH)', icon: '⚡', bestPrice: '₹299', originalPrice: '₹750', savings: '60%', description: 'Checks for sluggish thyroid (hypothyroidism) and hyperthyroidism.' },
  { id: 'vitamins', name: 'Vitamin D3 & Vitamin B12 Vitality', icon: '☀️', bestPrice: '₹599', originalPrice: '₹1,800', savings: '67%', description: 'Essential for bone strength, joint mobility, nerve health, and daily energy.' },
  { id: 'liver', name: 'Liver Function Test (LFT 11 Params)', icon: '🥣', bestPrice: '₹399', originalPrice: '₹950', savings: '58%', description: 'Screens for fatty liver (NAFLD), SGOT/SGPT elevation, and jaundice.' },
  { id: 'kidney', name: 'Kidney Function Test (KFT/RFT)', icon: '⚗️', bestPrice: '₹399', originalPrice: '₹950', savings: '58%', description: 'Serum Creatinine, Blood Urea Nitrogen, Uric Acid, and eGFR.' },
]

export const punePartnerHospitals = [
  {
    name: 'Ruby Hall Clinic',
    area: 'Sassoon Road / Wanowrie / Hinjewadi, Pune',
    distance: '3.2 km',
    specialties: ['Cardiology (Cath Lab)', 'Oncology & Bone Marrow', 'Organ Transplants', 'Neurology'],
    meditrustDiscount: 'VIP Admission · 15% Surgery Discount · Zero-Wait TPA Desk',
    rating: 4.8,
  },
  {
    name: 'Sahyadri Super Speciality Hospital',
    area: 'Deccan Gymkhana / Nagar Road / Hadapsar, Pune',
    distance: '2.8 km',
    specialties: ['Neuro-Spine Surgery', 'Joint Replacement', 'Gastroenterology & Liver', 'Critical Care'],
    meditrustDiscount: 'Zero-Wait Admission Coordinator · Free Room Upgrade (Subject to availability)',
    rating: 4.9,
  },
  {
    name: 'Jupiter Hospital',
    area: 'Baner (Near Pune-Mumbai Highway), Pune',
    distance: '5.1 km',
    specialties: ['Robotic Surgery', 'Cardiac Sciences', 'Pediatric Intensive Care', 'Orthopaedics'],
    meditrustDiscount: 'Direct VIP Concierge · Same-Day MRI / CT · 12% In-Hospital Diagnostics',
    rating: 4.8,
  },
  {
    name: 'Jehangir Hospital',
    area: 'Near Pune Railway Station, Pune',
    distance: '4.0 km',
    specialties: ['Emergency & Trauma', 'Pulmonology', 'Obstetrics & Gynaecology', 'General Surgery'],
    meditrustDiscount: 'Priority OPD Doctor Token · 10% Pharmacy & Lab Rebate',
    rating: 4.7,
  },
]
