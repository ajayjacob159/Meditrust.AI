/**
 * MEDITRUST AI — MASTER CLINICAL & CORPORATE KNOWLEDGE BASE
 * Trained on W.H.O., ICMR, CDSCO, ABDM, HIPAA, NABL & PMBJP Protocols
 * Registered Entity: Meditrust Life Sciences Pvt. Ltd. (CIN: U85110PN2026PTC214589)
 * 24/7 Physician & Immediate Helpline: +91 7028025717
 */

export interface MeditrustMasterKnowledge {
  company: {
    legalName: string
    cin: string
    brandName: string
    registeredOffice: string
    puneOperationalHubs: string[]
    helpline: string
    email: string
    regulatoryCompliances: string[]
  }
  clinicalPhilosophy: {
    model: string
    homeCareRatio: string
    hospitalCareRatio: string
    whoGuidelineAdherence: string
    drAryaProfile: {
      name: string
      age: number
      credentials: string
      languages: string[]
      voiceEngine: string
      averageResponseTime: string
    }
  }
  specialties: Record<string, {
    name: string
    whoFramework: string
    firstLineGenerics: { salt: string; janAushadhiPrice: string; brandPrice: string; savings: string }[]
    redFlags: string[]
    lifestylePrescription: string[]
  }>
  diagnosticBiomarkers: Record<string, {
    parameter: string
    optimalRange: string
    plainLanguageExplanation: string
    clinicalSignificance: string
    questionsForDoctor: string[]
  }>
  puneHospitalNetwork: {
    name: string
    hub: string
    specialties: string[]
    vipBenefits: string[]
    contactLine: string
  }[]
  pharmaEngine: {
    topMolecules: {
      brand: string
      genericSalt: string
      brandPrice: number
      janAushadhiPrice: number
      savingsPercent: number
      tata1mgPrice: number
      pharmeasyPrice: number
      apolloPrice: number
    }[]
  }
}

export const meditrustMasterKnowledge: MeditrustMasterKnowledge = {
  company: {
    legalName: 'Meditrust Life Sciences Pvt. Ltd.',
    cin: 'U85110PN2026PTC214589',
    brandName: 'Meditrust AI',
    registeredOffice: 'Meditrust Towers, Senapati Bapat Road / Kothrud Corridor, Pune, Maharashtra 411038, India',
    puneOperationalHubs: ['Kothrud', 'Baner', 'Hinjewadi IT Park', 'Viman Nagar', 'Wakad', 'PCMC', 'Camp', 'Hadapsar'],
    helpline: '+91 7028025717',
    email: 'care@meditrustlife.com',
    regulatoryCompliances: [
      'Central Drugs Standard Control Organisation (CDSCO) Telemedicine Practice Guidelines',
      'Indian Council of Medical Research (ICMR) Evidence-Based Clinical Algorithms',
      'Ayushman Bharat Digital Mission (ABDM) M1/M2/M3 Health Data Exchange',
      'Health Insurance Portability and Accountability Act (HIPAA) Security & Privacy Standards',
      'National Accreditation Board for Testing and Calibration Laboratories (NABL) & CAP Standards',
      'ISO 15189:2022 Medical Diagnostic Laboratory Accreditation',
      'Pradhan Mantri Bharatiya Janaushadhi Pariyojana (PMBJP) Generic Pricing Guidelines',
    ],
  },

  clinicalPhilosophy: {
    model: '60% Home-Based Virtual Resolution / 40% Hospital In-Person Fast-Track',
    homeCareRatio: '60% of primary clinical cases (uncomplicated viral fever, mild GERD, PCOS lifestyle balancing, stage 1 hypertension, stable type 2 diabetes, musculoskeletal strains) are guided safely from home with voice/chat triage, Jan Aushadhi generic matching, and at-home blood test collection.',
    hospitalCareRatio: '40% of cases presenting clinical red flags, severe biomarker derangements, surgical indications, or requiring invasive physical examinations are fast-tracked to premier partner hospitals in Pune with zero-wait cashless TPA desks.',
    whoGuidelineAdherence: 'All diagnostic triage algorithms map directly to W.H.O. Technical Packages including HEARTS (Cardiovascular), IMCI (Pediatrics), mhGAP (Mental Health), and PEN (Package of Essential Noncommunicable Disease Interventions).',
    drAryaProfile: {
      name: 'Dr. Arya',
      age: 28,
      credentials: 'MD Global Clinical AI Physician',
      languages: ['मराठी (Marathi)', 'हिन्दी (Hindi)', 'English (India)', 'தமிழ் (Tamil)', 'తెలుగు (Telugu)', 'বাংলা (Bengali)', 'ગુજરાતી (Gujarati)'],
      voiceEngine: 'Real-time Web Speech Synthesis & Natural Speech Recognition with regional phoneme mapping',
      averageResponseTime: '< 1.2 seconds',
    },
  },

  specialties: {
    cardiology: {
      name: 'Cardiology (Heart & Circulation)',
      whoFramework: 'W.H.O. HEARTS Technical Package for Cardiovascular Disease Management',
      firstLineGenerics: [
        { salt: 'Telmisartan 40mg', janAushadhiPrice: '₹14 (10 tabs)', brandPrice: '₹84 (Telma 40)', savings: '83%' },
        { salt: 'Rosuvastatin 10mg', janAushadhiPrice: '₹42 (10 tabs)', brandPrice: '₹240 (Rosuvas 10)', savings: '82%' },
        { salt: 'Amlodipine 5mg + Atenolol 50mg', janAushadhiPrice: '₹18 (10 tabs)', brandPrice: '₹95 (Amlokind-AT)', savings: '81%' },
      ],
      redFlags: ['Crushing retrosternal chest pain radiating to left arm/jaw', 'Sudden diaphoresis with dyspnea at rest', 'Syncope with irregular rapid palpitations'],
      lifestylePrescription: ['Sodium intake < 2g/day', '45 mins brisk walking 5 days/week', 'Mediterranean / DASH dietary pattern rich in plant sterols'],
    },
    gynaecology: {
      name: 'Gynaecology & Reproductive Health',
      whoFramework: 'W.H.O. Maternal & Perinatal Health Guidelines & Rotterdam PCOS Consensus',
      firstLineGenerics: [
        { salt: 'Myo-Inositol 2000mg + D-Chiro Inositol 50mg', janAushadhiPrice: '₹65 (10 tabs)', brandPrice: '₹350 (Ovacare)', savings: '81%' },
        { salt: 'Norethisterone 5mg', janAushadhiPrice: '₹22 (10 tabs)', brandPrice: '₹110 (Primolut-N)', savings: '80%' },
        { salt: 'Mefenamic Acid 500mg + Dicyclomine 20mg', janAushadhiPrice: '₹12 (10 tabs)', brandPrice: '₹58 (Meftal-Spas)', savings: '79%' },
      ],
      redFlags: ['Heavy menstrual bleeding soaking > 2 pads/hour for 2 consecutive hours', 'Severe unilateral pelvic pain with missed period (rule out ectopic pregnancy)', 'High fever with foul-smelling lochia or discharge'],
      lifestylePrescription: ['Low glycemic index whole grains', 'Seed cycling (Flax/Pumpkin in follicular phase, Sesame/Sunflower in luteal phase)', 'Strength training to enhance insulin sensitivity in PCOS'],
    },
    orthopedics: {
      name: 'Orthopedics & Joint Health',
      whoFramework: 'W.H.O. Musculoskeletal Health Guidelines & IOA Clinical Standards',
      firstLineGenerics: [
        { salt: 'Cholecalciferol (Vitamin D3) 60,000 IU', janAushadhiPrice: '₹24 (4 capsules)', brandPrice: '₹120 (Calcirol)', savings: '80%' },
        { salt: 'Calcium Carbonate 500mg + Vitamin D3 250 IU', janAushadhiPrice: '₹28 (15 tabs)', brandPrice: '₹138 (Shelcal 500)', savings: '80%' },
        { salt: 'Glucosamine Sulphate 750mg + Diacerein 50mg', janAushadhiPrice: '₹85 (10 tabs)', brandPrice: '₹380 (Cartigen Duo)', savings: '78%' },
      ],
      redFlags: ['Inability to bear weight after acute trauma', 'Loss of bowel/bladder control with lower back pain (Cauda Equina Syndrome)', 'Hot, swollen, red single joint with fever (Septic Arthritis)'],
      lifestylePrescription: ['Isometric quadriceps strengthening exercises', 'Avoid deep squats and cross-legged sitting in grade 2+ knee OA', '15 mins morning sun exposure without sunscreen'],
    },
    diabetology: {
      name: 'Diabetology & Endocrinology',
      whoFramework: 'W.H.O. Global Report on Diabetes & ADA Standards of Care',
      firstLineGenerics: [
        { salt: 'Metformin 500mg (Sustained Release)', janAushadhiPrice: '₹8 (10 tabs)', brandPrice: '₹42 (Glyciphage SR)', savings: '81%' },
        { salt: 'Metformin 500mg + Glimepiride 2mg', janAushadhiPrice: '₹32 (10 tabs)', brandPrice: '₹168 (Glycomet-GP 2)', savings: '81%' },
        { salt: 'Vildagliptin 50mg + Metformin 500mg', janAushadhiPrice: '₹75 (10 tabs)', brandPrice: '₹290 (Galvus Met)', savings: '74%' },
      ],
      redFlags: ['Blood glucose > 300 mg/dL with ketones or deep rapid breathing (Kussmaul)', 'Severe hypoglycemia < 54 mg/dL unresponsive to oral carbs', 'Non-healing foot ulcer with erythema spreading > 2cm'],
      lifestylePrescription: ['Post-meal 15-min walk to blunt glycemic spikes', 'Replace polished white rice with brown rice, millets (Jowar/Bajra/Ragi)', 'Annual dilated eye exam and foot monofilament testing'],
    },
  },

  diagnosticBiomarkers: {
    hba1c: {
      parameter: 'Glycated Hemoglobin (HbA1c)',
      optimalRange: '< 5.7% (Normal), 5.7%–6.4% (Prediabetes), ≥ 6.5% (Diabetes)',
      plainLanguageExplanation: 'Measures the percentage of your red blood cell hemoglobin coated with sugar over the last 90 days, providing an accurate long-term average.',
      clinicalSignificance: 'Every 1% reduction in HbA1c reduces microvascular complications (kidney/eye disease) by up to 37%.',
      questionsForDoctor: ['What is my individualized HbA1c target based on my age and lifestyle?', 'Do I need to add an SGLT2 inhibitor or DPP-4 inhibitor to protect my kidneys?'],
    },
    tsh: {
      parameter: 'Thyroid Stimulating Hormone (TSH)',
      optimalRange: '0.45 – 4.5 µIU/mL (Optimal: 1.0 – 2.5 µIU/mL)',
      plainLanguageExplanation: 'A hormone produced by your pituitary gland that signals your thyroid to make metabolism-regulating hormones.',
      clinicalSignificance: 'High TSH (> 4.5) indicates sluggish thyroid (Hypothyroidism), causing fatigue, cold sensitivity, and weight gain.',
      questionsForDoctor: ['Should we test Anti-TPO antibodies to rule out Hashimoto’s thyroiditis?', 'What is the optimal morning timing for taking Levothyroxine on an empty stomach?'],
    },
    creatinine: {
      parameter: 'Serum Creatinine & eGFR',
      optimalRange: 'Creatinine: 0.6 – 1.2 mg/dL | eGFR: > 90 mL/min/1.73m²',
      plainLanguageExplanation: 'A metabolic waste product from muscle breakdown that is filtered exclusively by your kidneys. Elevated creatinine indicates reduced filtration efficiency.',
      clinicalSignificance: 'An eGFR < 60 mL/min for > 3 months confirms Chronic Kidney Disease (CKD), requiring ACE inhibitor/ARB renal protection and avoiding NSAID pain relievers.',
      questionsForDoctor: ['Is my current blood pressure low enough (< 120/80) to protect my kidney filters?', 'Should we perform a urine Albumin-to-Creatinine Ratio (ACR) test?'],
    },
    vitamind: {
      parameter: '25-Hydroxy Vitamin D3',
      optimalRange: '30.0 – 100.0 ng/mL (Deficient: < 20.0 ng/mL)',
      plainLanguageExplanation: 'A crucial fat-soluble pro-hormone responsible for calcium absorption, bone mineralization, neuromuscular function, and immune defense.',
      clinicalSignificance: 'Over 75% of urban Indians are deficient due to indoor lifestyles. Severe deficiency causes joint pain, osteoporosis, and chronic fatigue.',
      questionsForDoctor: ['Is an 8-week course of 60,000 IU weekly Cholecalciferol required before transitioning to a monthly maintenance dose?'],
    },
  },

  puneHospitalNetwork: [
    {
      name: 'Ruby Hall Clinic',
      hub: 'Sassoon Road / Wanowrie / Hinjewadi, Pune',
      specialties: ['Cardiology (Cath Lab)', 'Oncology & Bone Marrow', 'Organ Transplants', 'Neurology'],
      vipBenefits: ['Priority OPD Token without line', 'Dedicated Meditrust TPA Cashless Desk', '15% Discount on Elective Surgery Packages'],
      contactLine: '+91 7028025717',
    },
    {
      name: 'Sahyadri Super Speciality Hospital',
      hub: 'Deccan Gymkhana / Nagar Road / Hadapsar, Pune',
      specialties: ['Neuro-Spine Surgery', 'Joint Replacement', 'Gastroenterology & Liver', 'Critical Care'],
      vipBenefits: ['Zero-Wait Admission Coordinator', 'Complimentary In-Patient Room Upgrade (subject to availability)', 'Free Post-Discharge Medication Review'],
      contactLine: '+91 7028025717',
    },
    {
      name: 'Jupiter Hospital',
      hub: 'Baner (Near Pune-Mumbai Highway), Pune',
      specialties: ['Robotic Surgery', 'Cardiac Sciences', 'Pediatric Intensive Care', 'Orthopaedics'],
      vipBenefits: ['Direct VIP Desk Concierge', 'Same-Day MRI / CT Scheduling', '12% Diagnostic In-Hospital Discount'],
      contactLine: '+91 7028025717',
    },
  ],

  pharmaEngine: {
    topMolecules: [
      {
        brand: 'Augmentin 625 Duo',
        genericSalt: 'Amoxicillin 500mg + Clavulanic Acid 125mg',
        brandPrice: 224,
        janAushadhiPrice: 52,
        savingsPercent: 77,
        tata1mgPrice: 182,
        pharmeasyPrice: 188,
        apolloPrice: 195,
      },
      {
        brand: 'Pan-D',
        genericSalt: 'Pantoprazole 40mg + Domperidone 30mg SR',
        brandPrice: 198,
        janAushadhiPrice: 35,
        savingsPercent: 82,
        tata1mgPrice: 162,
        pharmeasyPrice: 168,
        apolloPrice: 172,
      },
      {
        brand: 'Glycomet-GP 2',
        genericSalt: 'Glimepiride 2mg + Metformin 500mg SR',
        brandPrice: 168,
        janAushadhiPrice: 32,
        savingsPercent: 81,
        tata1mgPrice: 138,
        pharmeasyPrice: 142,
        apolloPrice: 146,
      },
      {
        brand: 'Telma 40',
        genericSalt: 'Telmisartan 40mg',
        brandPrice: 84,
        janAushadhiPrice: 14,
        savingsPercent: 83,
        tata1mgPrice: 68,
        pharmeasyPrice: 71,
        apolloPrice: 74,
      },
      {
        brand: 'Rosuvas 10',
        genericSalt: 'Rosuvastatin 10mg',
        brandPrice: 240,
        janAushadhiPrice: 42,
        savingsPercent: 82,
        tata1mgPrice: 196,
        pharmeasyPrice: 202,
        apolloPrice: 208,
      },
      {
        brand: 'Thyronorm 50',
        genericSalt: 'Thyroxine Sodium 50 mcg',
        brandPrice: 154,
        janAushadhiPrice: 38,
        savingsPercent: 75,
        tata1mgPrice: 126,
        pharmeasyPrice: 130,
        apolloPrice: 134,
      },
    ],
  },
}
