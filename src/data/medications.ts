export interface PharmacyPrice {
  pharmacy: string
  price: number
  deliveryTime: string
  inStock: boolean
  url: string
  discount: string
  logo: string
}

export interface Medication {
  id: string
  genericName: string
  brandNames: string[]
  drugClass: string
  uses: string[]
  dosageForms: string[]
  commonDoses: string
  sideEffects: { mild: string[]; serious: string[] }
  interactions: string[]
  costRange: { generic: string; brand: string }
  insuranceCoverage: string
  rating: number
  alternatives: string[]
  genericSubstitute: {
    name: string
    price: number
    savingsPercentage: number
    manufacturer: string
  }
  pharmacyPrices: PharmacyPrice[]
  pregnancyCategory: string
  rxRequired: boolean
  fdaApproved: number
  halfLife: string
  metabolizedBy: string
  color: string
}

export const medications: Medication[] = [
  {
    id: 'augmentin-625',
    genericName: 'Amoxicillin + Clavulanic Acid (500mg + 125mg)',
    brandNames: ['Augmentin 625 Duo', 'Clavam 625', 'Moxikind-CV 625', 'Megapen-CV'],
    drugClass: 'Penicillin-class Antibiotic + Beta-lactamase Inhibitor',
    uses: ['Bacterial respiratory infections', 'Sinusitis & throat infections', 'Skin & soft tissue infections', 'Urinary tract infections (UTI)', 'Dental infections'],
    dosageForms: ['Tablet (Strip of 10)', 'Syrup (Dry Suspension)', 'Injection (IV)'],
    commonDoses: '1 tablet twice daily after meals for 5–7 days (complete full course)',
    sideEffects: {
      mild: ['Mild diarrhea', 'Nausea', 'Stomach upset', 'Bloating', 'Skin redness'],
      serious: ['Severe allergic reaction (Anaphylaxis)', 'Jaundice/Liver enzyme elevation', 'C. difficile severe diarrhea'],
    },
    interactions: ['Methotrexate', 'Warfarin / Blood thinners', 'Allopurinol', 'Oral contraceptives', 'Probenecid'],
    costRange: { generic: '₹45–₹80 / 10 tabs', brand: '₹190–₹230 / 10 tabs' },
    insuranceCoverage: 'Covered under Jan Aushadhi, PMJAY, & OPD add-ons',
    rating: 4.7,
    alternatives: ['Azithromycin 500mg', 'Cefixime 200mg', 'Ciprofloxacin 500mg'],
    genericSubstitute: {
      name: 'Amoxycillin & Pot. Clavulanate 625mg (PMBJP Jan Aushadhi)',
      price: 52,
      savingsPercentage: 74,
      manufacturer: 'Jan Aushadhi / Karnataka Antibiotics',
    },
    pharmacyPrices: [
      { pharmacy: 'Meditrust Direct', price: 154, deliveryTime: 'Same Day Pune (4 hrs)', inStock: true, url: '/dashboard', discount: '25% OFF + Free Delivery', logo: '🛡️' },
      { pharmacy: 'Tata 1mg', price: 182, deliveryTime: '24–48 Hours', inStock: true, url: 'https://www.1mg.com', discount: '15% OFF', logo: '🩺' },
      { pharmacy: 'PharmEasy', price: 188, deliveryTime: 'Tomorrow Morning', inStock: true, url: 'https://pharmeasy.in', discount: '12% OFF', logo: '💊' },
      { pharmacy: 'Apollo Pharmacy', price: 195, deliveryTime: '2 Hours (Store pickup/drop)', inStock: true, url: 'https://www.apollopharmacy.in', discount: '10% OFF', logo: '🏥' },
    ],
    pregnancyCategory: 'B (Generally safe under doctor guidance)',
    rxRequired: true,
    fdaApproved: 1984,
    halfLife: '1–1.5 hours',
    metabolizedBy: 'Renal excretion (take with adequate water)',
    color: '#0F766E',
  },
  {
    id: 'pan-d',
    genericName: 'Pantoprazole + Domperidone (40mg + 30mg SR)',
    brandNames: ['Pan-D', 'Pantocid-D SR', 'Pantodac-DSR', 'Junior-D'],
    drugClass: 'Proton Pump Inhibitor (PPI) + Prokinetic Agent',
    uses: ['Gastroesophageal reflux disease (GERD)', 'Acidity and heartburn', 'Indigestion & nausea', 'Peptic ulcer prevention'],
    dosageForms: ['Capsule (Strip of 10 or 15)', 'Tablet'],
    commonDoses: '1 capsule daily in the morning, 30–60 minutes before breakfast',
    sideEffects: {
      mild: ['Headache', 'Dry mouth', 'Dizziness', 'Constipation / Diarrhea', 'Flatulence'],
      serious: ['Hypomagnesemia on prolonged use', 'Vitamin B12 deficiency', 'Bone fracture risk (long term)'],
    },
    interactions: ['Ketoconazole', 'Atazanavir', 'Iron supplements', 'Digoxin', 'Methotrexate'],
    costRange: { generic: '₹35–₹60 / 15 caps', brand: '₹180–₹240 / 15 caps' },
    insuranceCoverage: 'Covered widely on all corporate & individual OPD policies',
    rating: 4.6,
    alternatives: ['Rabeprazole + Domperidone (Razo-D)', 'Esomeprazole + Domperidone (Nexpro-RD)', 'Omeprazole 20mg'],
    genericSubstitute: {
      name: 'Pantoprazole & Domperidone SR (Genericart / Jan Aushadhi)',
      price: 45,
      savingsPercentage: 78,
      manufacturer: 'Genericart / Alkem Generics',
    },
    pharmacyPrices: [
      { pharmacy: 'Meditrust Direct', price: 162, deliveryTime: 'Same Day Pune (4 hrs)', inStock: true, url: '/dashboard', discount: '30% OFF', logo: '🛡️' },
      { pharmacy: 'Tata 1mg', price: 189, deliveryTime: 'Tomorrow', inStock: true, url: 'https://www.1mg.com', discount: '18% OFF', logo: '🩺' },
      { pharmacy: 'PharmEasy', price: 194, deliveryTime: 'Tomorrow', inStock: true, url: 'https://pharmeasy.in', discount: '15% OFF', logo: '💊' },
      { pharmacy: 'Apollo Pharmacy', price: 210, deliveryTime: '2 Hours Instant', inStock: true, url: 'https://www.apollopharmacy.in', discount: '10% OFF', logo: '🏥' },
    ],
    pregnancyCategory: 'C (Use only if clearly needed)',
    rxRequired: true,
    fdaApproved: 2000,
    halfLife: '1–2 hours',
    metabolizedBy: 'Hepatic (CYP2C19, CYP3A4)',
    color: '#2563EB',
  },
  {
    id: 'glycomet-gp2',
    genericName: 'Glimepiride + Metformin (2mg + 500mg SR)',
    brandNames: ['Glycomet-GP 2', 'Amaryl M 2mg', 'Zoryl-M 2', 'Gemer 2'],
    drugClass: 'Sulfonylurea + Biguanide Antidiabetic Combination',
    uses: ['Type 2 Diabetes Mellitus', 'Blood glucose control when metformin alone is insufficient', 'HbA1c reduction'],
    dosageForms: ['Tablet SR (Strip of 15)'],
    commonDoses: '1 tablet once or twice daily with breakfast or main meals',
    sideEffects: {
      mild: ['Hypoglycemia (low blood sugar)', 'Nausea', 'Metallic taste', 'Abdominal bloating'],
      serious: ['Severe hypoglycemia', 'Lactic acidosis (very rare)', 'Vitamin B12 depletion'],
    },
    interactions: ['Alcohol (severe hypoglycemia risk)', 'Beta-blockers', 'Fluconazole', 'NSAIDs', 'ACE inhibitors'],
    costRange: { generic: '₹30–₹50 / 15 tabs', brand: '₹140–₹210 / 15 tabs' },
    insuranceCoverage: 'Covered under all standard chronic illness insurance plans',
    rating: 4.5,
    alternatives: ['Vildagliptin + Metformin (Galvus Met)', 'Teneligliptin + Metformin', 'Dapagliflozin + Metformin'],
    genericSubstitute: {
      name: 'Glimepiride & Metformin PR 2mg/500mg (Jan Aushadhi)',
      price: 32,
      savingsPercentage: 81,
      manufacturer: 'Jan Aushadhi Bureau',
    },
    pharmacyPrices: [
      { pharmacy: 'Meditrust Direct', price: 128, deliveryTime: 'Same Day Pune (4 hrs)', inStock: true, url: '/dashboard', discount: '35% OFF', logo: '🛡️' },
      { pharmacy: 'Tata 1mg', price: 152, deliveryTime: '24 Hours', inStock: true, url: 'https://www.1mg.com', discount: '20% OFF', logo: '🩺' },
      { pharmacy: 'PharmEasy', price: 158, deliveryTime: 'Tomorrow', inStock: true, url: 'https://pharmeasy.in', discount: '18% OFF', logo: '💊' },
      { pharmacy: 'Apollo Pharmacy', price: 175, deliveryTime: '2 Hours', inStock: true, url: 'https://www.apollopharmacy.in', discount: '12% OFF', logo: '🏥' },
    ],
    pregnancyCategory: 'C (Not recommended during pregnancy, switch to insulin)',
    rxRequired: true,
    fdaApproved: 1995,
    halfLife: '5–9 hours',
    metabolizedBy: 'Liver CYP2C9 & Kidney clearance',
    color: '#7C3AED',
  },
  {
    id: 'telma-40',
    genericName: 'Telmisartan (40mg)',
    brandNames: ['Telma 40', 'Telmikind 40', 'Cresort 40', 'Telpres 40'],
    drugClass: 'Angiotensin II Receptor Blocker (ARB)',
    uses: ['Essential Hypertension (High Blood Pressure)', 'Cardiovascular risk reduction', 'Diabetic nephropathy protection'],
    dosageForms: ['Tablet (Strip of 15 or 30)'],
    commonDoses: '1 tablet (40mg) once daily at the same time each day, with or without food',
    sideEffects: {
      mild: ['Dizziness', 'Headache', 'Back pain', 'Fatigue', 'Sinus congestion'],
      serious: ['Hyperkalemia (high blood potassium)', 'Hypotension (too low BP)', 'Impaired kidney function'],
    },
    interactions: ['Potassium supplements', 'Spironolactone / Diuretics', 'Lithium', 'NSAIDs (Ibuprofen, Naproxen)', 'Aliskiren'],
    costRange: { generic: '₹20–₹40 / 15 tabs', brand: '₹120–₹180 / 15 tabs' },
    insuranceCoverage: 'Tier 1 coverage on all health insurance plans',
    rating: 4.8,
    alternatives: ['Losartan 50mg', 'Olmesartan 20mg', 'Amlodipine 5mg', 'Cilnidipine 10mg'],
    genericSubstitute: {
      name: 'Telmisartan 40mg Tablets IP (Genericart)',
      price: 26,
      savingsPercentage: 82,
      manufacturer: 'Genericart / Cipla Generics',
    },
    pharmacyPrices: [
      { pharmacy: 'Meditrust Direct', price: 108, deliveryTime: 'Same Day Pune (4 hrs)', inStock: true, url: '/dashboard', discount: '35% OFF', logo: '🛡️' },
      { pharmacy: 'Tata 1mg', price: 132, deliveryTime: 'Tomorrow', inStock: true, url: 'https://www.1mg.com', discount: '20% OFF', logo: '🩺' },
      { pharmacy: 'PharmEasy', price: 139, deliveryTime: 'Tomorrow', inStock: true, url: 'https://pharmeasy.in', discount: '16% OFF', logo: '💊' },
      { pharmacy: 'Apollo Pharmacy', price: 154, deliveryTime: '2 Hours', inStock: true, url: 'https://www.apollopharmacy.in', discount: '10% OFF', logo: '🏥' },
    ],
    pregnancyCategory: 'D (Boxed Warning: Contraindicated in pregnancy)',
    rxRequired: true,
    fdaApproved: 1998,
    halfLife: '24 hours (Longest acting ARB)',
    metabolizedBy: 'Hepatic glucuronidation',
    color: '#D97706',
  },
  {
    id: 'thyronorm-50',
    genericName: 'Levothyroxine Sodium (50mcg)',
    brandNames: ['Thyronorm 50', 'Eltroxin 50', 'Thyrox 50', 'L-Thyroxine'],
    drugClass: 'Synthetic Thyroid Hormone (T4)',
    uses: ['Hypothyroidism (Underactive thyroid)', 'Thyroid goiter reduction', 'Post-thyroidectomy hormone replacement'],
    dosageForms: ['Tablet (Bottle of 100 or 120 tabs)'],
    commonDoses: '50mcg–100mcg once daily in the early morning on an empty stomach with a full glass of water, 45 mins before tea/breakfast',
    sideEffects: {
      mild: ['Temporary hair thinning in early weeks', 'Mild nervousness', 'Sweating if dose is high'],
      serious: ['Palpitations / Tachycardia (at overdose)', 'Chest pain', 'Bone density reduction (over-replacement)'],
    },
    interactions: ['Calcium & Iron tablets (take 4 hours apart)', 'Antacids & PPIs', 'Soy products & coffee', 'Warfarin'],
    costRange: { generic: '₹60–₹90 / 100 tabs', brand: '₹170–₹240 / 100 tabs' },
    insuranceCoverage: 'Widely covered under all chronic medical insurance',
    rating: 4.8,
    alternatives: ['Eltroxin 50mcg (GSK)', 'Thyrox 50mcg (MacLeods)'],
    genericSubstitute: {
      name: 'Levothyroxine Sodium 50mcg (Jan Aushadhi 100 tabs)',
      price: 55,
      savingsPercentage: 73,
      manufacturer: 'Abbott / Jan Aushadhi',
    },
    pharmacyPrices: [
      { pharmacy: 'Meditrust Direct', price: 148, deliveryTime: 'Same Day Pune (4 hrs)', inStock: true, url: '/dashboard', discount: '30% OFF', logo: '🛡️' },
      { pharmacy: 'Tata 1mg', price: 178, deliveryTime: '24 Hours', inStock: true, url: 'https://www.1mg.com', discount: '15% OFF', logo: '🩺' },
      { pharmacy: 'PharmEasy', price: 182, deliveryTime: 'Tomorrow', inStock: true, url: 'https://pharmeasy.in', discount: '14% OFF', logo: '💊' },
      { pharmacy: 'Apollo Pharmacy', price: 198, deliveryTime: '2 Hours Instant', inStock: true, url: 'https://www.apollopharmacy.in', discount: '10% OFF', logo: '🏥' },
    ],
    pregnancyCategory: 'A (Essential & safe during pregnancy, requirements usually increase)',
    rxRequired: true,
    fdaApproved: 2000,
    halfLife: '6–7 days',
    metabolizedBy: 'Peripheral deiodination to active T3 in liver & kidneys',
    color: '#059669',
  },
  {
    id: 'rosuvas-10',
    genericName: 'Rosuvastatin (10mg)',
    brandNames: ['Rosuvas 10', 'Rozucor 10', 'Rosave 10', 'Crestor 10'],
    drugClass: 'High-Intensity HMG-CoA Reductase Inhibitor (Statin)',
    uses: ['High LDL Cholesterol & Triglycerides', 'Atherosclerosis prevention', 'Heart attack & stroke risk reduction'],
    dosageForms: ['Tablet (Strip of 10 or 15)'],
    commonDoses: '5mg–20mg once daily at bedtime or evening',
    sideEffects: {
      mild: ['Mild muscle stiffness', 'Headache', 'Abdominal pain', 'Slight blood sugar elevation'],
      serious: ['Rhabdomyolysis (rare severe muscle breakdown)', 'Elevated transaminases (liver enzymes)'],
    },
    interactions: ['Cyclosporine', 'Gemfibrozil / Fibrates', 'Warfarin', 'Antacids (magnesium/aluminum)', 'Colchicine'],
    costRange: { generic: '₹35–₹70 / 15 tabs', brand: '₹220–₹340 / 15 tabs' },
    insuranceCoverage: 'Tier 1 covered across Indian mediclaim OPD policies',
    rating: 4.6,
    alternatives: ['Atorvastatin 10mg/20mg (Lipitor / Storvas)', 'Pitavastatin 2mg'],
    genericSubstitute: {
      name: 'Rosuvastatin 10mg (Genericart PMBJP)',
      price: 42,
      savingsPercentage: 83,
      manufacturer: 'Sun Pharma Generics',
    },
    pharmacyPrices: [
      { pharmacy: 'Meditrust Direct', price: 172, deliveryTime: 'Same Day Pune (4 hrs)', inStock: true, url: '/dashboard', discount: '35% OFF', logo: '🛡️' },
      { pharmacy: 'Tata 1mg', price: 215, deliveryTime: 'Tomorrow', inStock: true, url: 'https://www.1mg.com', discount: '20% OFF', logo: '🩺' },
      { pharmacy: 'PharmEasy', price: 224, deliveryTime: 'Tomorrow', inStock: true, url: 'https://pharmeasy.in', discount: '18% OFF', logo: '💊' },
      { pharmacy: 'Apollo Pharmacy', price: 248, deliveryTime: '2 Hours', inStock: true, url: 'https://www.apollopharmacy.in', discount: '10% OFF', logo: '🏥' },
    ],
    pregnancyCategory: 'X (Strictly contraindicated during pregnancy & nursing)',
    rxRequired: true,
    fdaApproved: 2003,
    halfLife: '19 hours',
    metabolizedBy: 'CYP2C9 (minor), mostly excreted in feces',
    color: '#DC2626',
  },
  {
    id: 'dolo-650',
    genericName: 'Paracetamol / Acetaminophen (650mg)',
    brandNames: ['Dolo 650', 'Calpol 650', 'P-650', 'Pacimol 650'],
    drugClass: 'Analgesic & Antipyretic',
    uses: ['High fever reduction', 'Body aches & headaches', 'Post-viral fever (flu, dengue, chikungunya)', 'Dental & muscular pain'],
    dosageForms: ['Tablet (Strip of 15)'],
    commonDoses: '1 tablet every 6–8 hours as needed for fever/pain (max 3,000mg per 24 hours)',
    sideEffects: {
      mild: ['Nausea', 'Mild stomach discomfort', 'Drowsiness'],
      serious: ['Liver toxicity (on acute overdose > 4g/day)', 'Allergic skin reaction'],
    },
    interactions: ['Alcohol (increases hepatotoxicity risk)', 'Warfarin (with chronic daily use)', 'Isoniazid'],
    costRange: { generic: '₹12–₹18 / 15 tabs', brand: '₹30–₹35 / 15 tabs' },
    insuranceCoverage: 'OTC / Widely covered',
    rating: 4.9,
    alternatives: ['Ibuprofen 400mg', 'Mefenamic acid 500mg', 'Combiflam (Ibuprofen + Paracetamol)'],
    genericSubstitute: {
      name: 'Paracetamol 650mg IP (Jan Aushadhi)',
      price: 11,
      savingsPercentage: 68,
      manufacturer: 'Micro Labs / Jan Aushadhi',
    },
    pharmacyPrices: [
      { pharmacy: 'Meditrust Direct', price: 24, deliveryTime: 'Same Day Pune (4 hrs)', inStock: true, url: '/dashboard', discount: '25% OFF', logo: '🛡️' },
      { pharmacy: 'Tata 1mg', price: 29, deliveryTime: 'Tomorrow', inStock: true, url: 'https://www.1mg.com', discount: '10% OFF', logo: '🩺' },
      { pharmacy: 'PharmEasy', price: 30, deliveryTime: 'Tomorrow', inStock: true, url: 'https://pharmeasy.in', discount: '10% OFF', logo: '💊' },
      { pharmacy: 'Apollo Pharmacy', price: 32, deliveryTime: '2 Hours Instant', inStock: true, url: 'https://www.apollopharmacy.in', discount: '5% OFF', logo: '🏥' },
    ],
    pregnancyCategory: 'B (Safest first-line pain & fever medication during pregnancy)',
    rxRequired: false,
    fdaApproved: 1955,
    halfLife: '2–3 hours',
    metabolizedBy: 'Hepatic glucuronidation & sulfation',
    color: '#0284C7',
  },
  {
    id: 'shelcal-500',
    genericName: 'Elemental Calcium (500mg) + Vitamin D3 (250 IU)',
    brandNames: ['Shelcal 500', 'Cipcal 500', 'Calcimax 500', 'Gemcal'],
    drugClass: 'Mineral & Vitamin Dietary Supplement',
    uses: ['Osteoporosis prevention', 'Bone & joint health', 'Calcium deficiency during pregnancy & lactation', 'Post-menopausal bone support'],
    dosageForms: ['Tablet (Strip of 15)'],
    commonDoses: '1 tablet once daily after lunch or dinner with plenty of water',
    sideEffects: {
      mild: ['Constipation', 'Bloating', 'Gas', 'Mild nausea'],
      serious: ['Hypercalcemia (too high calcium)', 'Kidney stones on prolonged unchecked overdose'],
    },
    interactions: ['Thyroid hormone Levothyroxine (gap by 4 hours)', 'Tetracycline & Quinolone antibiotics', 'Iron supplements', 'Thiazide diuretics'],
    costRange: { generic: '₹30–₹50 / 15 tabs', brand: '₹120–₹160 / 15 tabs' },
    insuranceCoverage: 'Covered under wellness & preventive medical policies',
    rating: 4.7,
    alternatives: ['Shelcal HD', 'Ostocalcium Plus', 'Coral Calcium'],
    genericSubstitute: {
      name: 'Calcium 500mg with Vitamin D3 (PMBJP)',
      price: 28,
      savingsPercentage: 79,
      manufacturer: 'Torrent Pharma / Jan Aushadhi',
    },
    pharmacyPrices: [
      { pharmacy: 'Meditrust Direct', price: 98, deliveryTime: 'Same Day Pune (4 hrs)', inStock: true, url: '/dashboard', discount: '35% OFF', logo: '🛡️' },
      { pharmacy: 'Tata 1mg', price: 122, deliveryTime: 'Tomorrow', inStock: true, url: 'https://www.1mg.com', discount: '18% OFF', logo: '🩺' },
      { pharmacy: 'PharmEasy', price: 126, deliveryTime: 'Tomorrow', inStock: true, url: 'https://pharmeasy.in', discount: '16% OFF', logo: '💊' },
      { pharmacy: 'Apollo Pharmacy', price: 142, deliveryTime: '2 Hours Instant', inStock: true, url: 'https://www.apollopharmacy.in', discount: '10% OFF', logo: '🏥' },
    ],
    pregnancyCategory: 'A (Highly recommended during 2nd & 3rd trimester under OB-GYN guidance)',
    rxRequired: false,
    fdaApproved: 1990,
    halfLife: 'N/A (Metabolic mineral absorption)',
    metabolizedBy: 'Intestinal absorption stimulated by Vitamin D',
    color: '#8B5CF6',
  },
]

export const drugInteractions: Record<string, Record<string, { severity: 'low' | 'moderate' | 'high'; description: string }>> = {
  'glycomet-gp2': {
    'telma-40': {
      severity: 'moderate',
      description: 'ARBs (Telmisartan) combined with antidiabetic medications may enhance hypoglycemic (low sugar) effect. Monitor fasting and post-prandial blood sugar closely.',
    },
    'augmentin-625': {
      severity: 'low',
      description: 'Antibiotics may temporarily cause gut flora disturbance affecting glucose absorption. Maintain hydration.',
    },
  },
  'telma-40': {
    'shelcal-500': {
      severity: 'low',
      description: 'Calcium supplements do not significantly interact with Telmisartan, but maintain regular hydration to support renal function.',
    },
    'pan-d': {
      severity: 'low',
      description: 'No significant pharmacokinetic interaction. Take Pan-D in the morning before food and Telma 40 with or after breakfast.',
    },
  },
  'thyronorm-50': {
    'shelcal-500': {
      severity: 'high',
      description: '⚠️ CRITICAL INTERACTION: Calcium severely blocks absorption of Levothyroxine (Thyronorm). You MUST keep at least a 4-hour time gap between taking Thyronorm and Shelcal.',
    },
    'pan-d': {
      severity: 'moderate',
      description: 'PPIs (Pantoprazole) reduce stomach acid, which can decrease thyroid hormone absorption. Take Thyronorm 45 minutes prior on an empty stomach.',
    },
  },
  'augmentin-625': {
    'pan-d': {
      severity: 'low',
      description: 'Taking Pan-D or antacids can help prevent antibiotic-induced stomach irritation. Complete full antibiotic course.',
    },
  },
}
