export interface MedicalSpecialty {
  id: string
  name: string
  icon: string
  doctorTitle: string
  commonConditions: string[]
  diagnosticTests: string[]
  firstLineMedications: {
    brand: string
    generic: string
    genericSavings: string
    dosageNotes: string
  }[]
  redFlags: string[]
  complianceGuideline: string
  expertAdviceSample: {
    prompt: string
    clinicalReasoning: string
    plainLanguageAdvice: string
    marathiSummary: string
    hindiSummary: string
  }
}

export const medicalSpecialties: MedicalSpecialty[] = [
  {
    id: 'gynaecology',
    name: 'Gynaecology, OB-GYN & Women\'s Health',
    icon: '🌺',
    doctorTitle: 'Dr. Arya (OB-GYN & Reproductive Endocrinology AI)',
    commonConditions: [
      'PCOS / PCOD (Polycystic Ovarian Syndrome)',
      'Irregular / Painful Menstruation (Dysmenorrhea)',
      'Pregnancy Trimester Care & Morning Sickness',
      'Thyroid Dysfunction in Pregnancy (TSH < 2.5 mIU/L target)',
      'Urinary Tract Infections (UTI) & Vaginal Candidiasis',
      'Perimenopause & Hot Flashes',
      'Endometriosis & Pelvic Inflammatory Disease (PID)',
    ],
    diagnosticTests: [
      'Hormone Profile (LH, FSH, Serum Prolactin, Total Testosterone, DHEA-S)',
      'Ultrasound Pelvis / TVS (Follicular tracking & Antral follicle count)',
      'Thyroid Profile Total (TSH, Free T4)',
      'Complete Hemogram (Hb for Anemia in Pregnancy)',
      'Urine Routine & Microscopic Culture',
      'CA-125 & AMH (Anti-Müllerian Hormone for Ovarian Reserve)',
    ],
    firstLineMedications: [
      { brand: 'Myo-Inositol + D-Chiro Inositol (Ovacare / Inositol)', generic: 'Myo-Inositol 2000mg + D-Chiro 50mg', genericSavings: '70% on PMBJP', dosageNotes: 'Twice daily with meals to improve insulin sensitivity & ovulatory cycles' },
      { brand: 'Drospirenone + Ethinylestradiol (Yaz / Yasmin)', generic: 'Drospirenone 3mg + Ethinylestradiol 0.03mg', genericSavings: '65% on PMBJP', dosageNotes: 'Cyclic 21-day oral contraceptive for cycle regulation and hyperandrogenism' },
      { brand: 'Progesterone Sustained Release (Susten 200 / Dubagest)', generic: 'Natural Micronized Progesterone 200mg', genericSavings: '75% on Jan Aushadhi', dosageNotes: 'Luteal phase support during pregnancy or secondary amenorrhea' },
      { brand: 'Folic Acid + Methylcobalamin (Folvite / Autrin)', generic: 'Folic Acid 5mg IP', genericSavings: '85% on Jan Aushadhi', dosageNotes: '1 tablet daily preconception and first trimester to prevent neural tube defects' },
    ],
    redFlags: [
      'Severe acute one-sided pelvic pain with positive pregnancy test (Rule out Ectopic Pregnancy)',
      'Heavy menstrual bleeding soaking > 2 pads/hour for 2+ consecutive hours',
      'High fever with foul-smelling vaginal discharge and severe lower abdominal tenderness (PID/Pelvic Sepsis)',
      'Preeclampsia signs: BP > 140/90 after 20 weeks with severe headache, visual blurriness or epigastric pain',
    ],
    complianceGuideline: 'FOGSI (Federation of Obstetric and Gynaecological Societies of India) & ACOG (American College of Obstetricians and Gynecologists) Guidelines',
    expertAdviceSample: {
      prompt: 'I have irregular periods, facial acne, and difficulty losing weight. Is it PCOS?',
      clinicalReasoning: 'Triad of oligomenorrhea (infrequent cycles), hyperandrogenism (acne/hirsutism), and metabolic resistance matches Rotterdam Diagnostic Criteria for PCOS. LH:FSH ratio > 2:1 is common.',
      plainLanguageAdvice: 'This pattern strongly points to Polycystic Ovary Syndrome (PCOS), a very manageable metabolic-hormonal condition. Focus on low-glycemic foods, 150 minutes of weekly aerobic exercise, and checking your LH, FSH, fasting insulin, and pelvic ultrasound. Supplements like Myo-Inositol significantly restore regular cycles naturally.',
      marathiSummary: 'ही लक्षणे पीसीओएस (PCOS) मुळे असू शकतात. घाबरण्याचे कारण नाही. योग्य आहार, नियमित व्यायाम आणि इनॉसिटॉल सप्लिमेंट्सने पाळी नियमित होते.',
      hindiSummary: 'यह पीसीओएस (PCOS) के क्लासिक लक्षण हैं। कम मीठा आहार, नियमित व्यायाम और इनोसिटोल सप्लीमेंट्स से हार्मोन संतुलित किए जा सकते हैं।',
    },
  },
  {
    id: 'orthopaedics',
    name: 'Orthopaedics, Bone & Joint Care',
    icon: '🦴',
    doctorTitle: 'Dr. Arya (Orthopaedics & Musculoskeletal AI)',
    commonConditions: [
      'Osteoarthritis of Knee & Hips',
      'Cervical & Lumbar Spondylosis (Neck & Lower Back Pain)',
      'Vitamin D3 Deficiency & Osteoporosis',
      'Hyperuricemia & Gout (Acute Big Toe / Joint Swelling)',
      'Rheumatoid Arthritis & Seronegative Spondyloarthritis',
      'Sciatica & Disc Bulge / Herniation',
      'Frozen Shoulder & Rotator Cuff Tendinitis',
    ],
    diagnosticTests: [
      'Vitamin D3 (25-Hydroxy) & Serum Calcium, Phosphorus, Alkaline Phosphatase',
      'Serum Uric Acid (Target < 6.0 mg/dL in Gout)',
      'Rheumatoid Factor (RF) & Anti-CCP Antibodies (Gold standard for RA)',
      'ESR & High-Sensitivity C-Reactive Protein (hs-CRP for Joint Inflammation)',
      'DEXA Scan (Bone Mineral Density T-score < -2.5 defines Osteoporosis)',
      'Digital X-Ray / MRI Lumbar-Cervical Spine',
    ],
    firstLineMedications: [
      { brand: 'Cholecalciferol Sachet 60,000 IU (Calcirol / D-Rise)', generic: 'Cholecalciferol 60K IU Sachet / Nano Shots', genericSavings: '80% on Jan Aushadhi', dosageNotes: '1 sachet in warm milk once weekly for 8 weeks, followed by monthly maintenance' },
      { brand: 'Shelcal 500 (Calcium Carbonate + Vit D3)', generic: 'Calcium 500mg + Vitamin D3 250 IU IP', genericSavings: '79% on Jan Aushadhi', dosageNotes: '1 tablet daily after main meal with full glass of water' },
      { brand: 'Febuxostat 40mg (Febutaz / Febucip)', generic: 'Febuxostat 40mg IP', genericSavings: '75% on Jan Aushadhi', dosageNotes: 'Uric acid lowering agent for chronic gout management' },
      { brand: 'Aceclofenac + Paracetamol (Zerodol-P / Hifenac-P)', generic: 'Aceclofenac 100mg + Paracetamol 325mg', genericSavings: '70% on PMBJP', dosageNotes: 'Short-term anti-inflammatory for acute joint flare-ups with food' },
    ],
    redFlags: [
      'Sudden loss of bowel or bladder control with severe back pain (Cauda Equina Syndrome — Emergency surgery needed)',
      'Inability to bear weight after fall with shortened, externally rotated leg (Hip fracture)',
      'Hot, red, swollen single joint with high fever (Septic Arthritis — needs urgent joint aspiration)',
      'Rapidly progressive limb weakness or bilateral numbness',
    ],
    complianceGuideline: 'IOA (Indian Orthopaedic Association) & AAOS (American Academy of Orthopaedic Surgeons) Standards',
    expertAdviceSample: {
      prompt: 'My knees crack and ache when climbing stairs. Is it arthritis or Vitamin D deficiency?',
      clinicalReasoning: 'Crepitus (cracking) with stair climbing in adults > 40 indicates early grade 1-2 patellofemoral osteoarthritis, often compounded by low Vitamin D3 (< 20 ng/mL) causing bone demineralization and quadriceps weakness.',
      plainLanguageAdvice: 'Cracking with stair climbing usually indicates early cartilage wear in the knee combined with low Vitamin D. Strengthening your quadriceps (thigh muscles) through non-weight-bearing knee extensions, taking a weekly 60,000 IU Vitamin D course, and avoiding deep squats will dramatically reduce friction and pain.',
      marathiSummary: 'जिन्यावरून चढताना गुडघे दुखणे हे सांधेदुखी (Osteoarthritis) आणि व्हिटॅमिन डी च्या कमतरतेचे लक्षण आहे. मांडीच्या स्नायूंचे व्यायाम व व्हिटॅमिन डी ने आराम मिळतो.',
      hindiSummary: 'सीढ़ियां चढ़ते समय घुटनों में दर्द प्रारंभिक ऑस्टियोआर्थराइटिस और विटामिन डी की कमी से होता है। जांघों के व्यायाम और विटामिन डी सप्लीमेंट से सुधार होता है।',
    },
  },
  {
    id: 'general-medicine',
    name: 'General Medicine & Infectious Diseases',
    icon: '🩺',
    doctorTitle: 'Dr. Arya (Internal Medicine & Clinical Triage AI)',
    commonConditions: [
      'Acute Viral Fever, Dengue, Malaria & Typhoid (Seasonal Maharashtra Profile)',
      'Upper Respiratory Tract Infections (Pharyngitis, Sinusitis, Bronchitis)',
      'Gastroenteritis, Food Poisoning & Acute Diarrhea',
      'GERD, Dyspepsia, Gastric Hyperacidity & H. pylori',
      'Hypertension & Essential Blood Pressure Regulation',
      'Type 2 Diabetes Mellitus & Metabolic Syndrome',
      'General Debility, Chronic Fatigue & Iron Deficiency Anemia',
    ],
    diagnosticTests: [
      'Complete Hemogram (CBC with Absolute Eosinophil Count & Platelets)',
      'Dengue NS1 Antigen & IgM/IgG Antibody Duo',
      'Widal Slide Agglutination & Typhidot for Enteric Fever',
      'Peripheral Smear for Malarial Parasite (MP) / Rapid Card Test',
      'Comprehensive Metabolic Panel (Liver Function LFT + Kidney Function KFT)',
      'Serum Electrolytes (Sodium, Potassium, Chloride for Dehydration)',
    ],
    firstLineMedications: [
      { brand: 'Augmentin 625 Duo (Amoxicillin + Clavulanic Acid)', generic: 'Amoxycillin & Pot. Clavulanate 625mg IP', genericSavings: '74% on Jan Aushadhi', dosageNotes: '1 tablet twice daily for 5–7 days for bacterial respiratory/soft tissue infections' },
      { brand: 'Dolo 650 / Calpol 650 (Paracetamol)', generic: 'Paracetamol 650mg IP', genericSavings: '68% on Jan Aushadhi', dosageNotes: '1 tablet every 6–8 hours SOS for fever/headache (max 3g/24 hours)' },
      { brand: 'Pan-D SR (Pantoprazole + Domperidone)', generic: 'Pantoprazole 40mg + Domperidone 30mg SR', genericSavings: '78% on Jan Aushadhi', dosageNotes: '1 capsule in morning 45 mins before breakfast on empty stomach' },
      { brand: 'ORS (Oral Rehydration Salts WHO Formula - Electral)', generic: 'WHO Oral Rehydration Salts Sachet', genericSavings: '60% on Jan Aushadhi', dosageNotes: 'Dissolve 1 sachet in 1 liter clean drinking water; sip frequently during diarrhea/vomiting' },
    ],
    redFlags: [
      'High fever (> 103°F) not responding to paracetamol, accompanied by altered sensorium or stiff neck',
      'Dengue warning signs: Platelets < 50,000, persistent vomiting, severe abdominal pain, gum/nose bleeding',
      'Severe breathlessness with respiratory rate > 28/min or SpO2 < 93% on pulse oximeter',
      'Uncontrolled severe diarrhea with sunken eyes, inability to retain liquids, and no urine output in 8 hours',
    ],
    complianceGuideline: 'ICMR (Indian Council of Medical Research), WHO Protocols & CDSCO Standards',
    expertAdviceSample: {
      prompt: 'I have fever for 2 days with body ache and mild chills. What tests should I do in Pune?',
      clinicalReasoning: 'Day 2 of acute febrile illness in urban Maharashtra requires differentiating viral flu vs early Dengue/Malaria. Platelet count & CBC on Day 2 provides baseline; Dengue NS1 is highly sensitive in first 72 hours.',
      plainLanguageAdvice: 'For 2-day fever with body ache, get a Complete Blood Count (CBC + Platelets) and Dengue NS1 test via Meditrust Direct home pickup. Take Dolo 650mg every 6-8 hours for fever, avoid NSAIDs like Brufen or Combiflam (which can thin blood during viral fevers), and drink at least 3 liters of fluids with ORS or coconut water.',
      marathiSummary: '२ दिवसांच्या तापासाठी सीबीसी (CBC) आणि डेंग्यू NS1 टेस्ट करून घ्या. डोलो ६५० गोळी घ्या, भरपूर पाणी व नारळपाणी प्या. ब्रुफेन गोळ्या टाळा.',
      hindiSummary: '२ दिन के बुखार में सीबीसी (CBC) और डेंगू टेस्ट करवाएं। डोलो ६५० लें, ब्रूफेन ना लें, और ओआरएस व नारियल पानी का सेवन अधिक करें।',
    },
  },
  {
    id: 'cardiology',
    name: 'Cardiology, Heart & Lipid Health',
    icon: '❤️',
    doctorTitle: 'Dr. Arya (Cardiovascular & Preventive Cardiology AI)',
    commonConditions: [
      'Dyslipidemia & Atherosclerotic Cardiovascular Disease (ASCVD) Risk',
      'Essential Hypertension & Isolated Systolic Hypertension',
      'Coronary Artery Disease (CAD) & Angina Pectoris',
      'Palpitations, Sinus Tachycardia & Atrial Fibrillation',
      'Congestive Heart Failure (CHF) & Peripheral Edema',
      'Post-Angioplasty & Post-CABG Medical Optimization',
    ],
    diagnosticTests: [
      'Lipid Profile Comprehensive (Total Cholesterol, Triglycerides, HDL, LDL, VLDL, Non-HDL)',
      'High-Sensitivity C-Reactive Protein (hs-CRP for Vascular Inflammation)',
      'Serum Homocysteine & Lipoprotein(a) [Lp(a) - Critical Genetic Indian Risk Marker]',
      '12-Lead Resting Electrocardiogram (ECG) & 2D-Echocardiography with Color Doppler',
      'Treadmill Test (TMT / Stress Test) & CT Coronary Angiogram for Calcium Scoring',
      'Cardiac Biomarkers (High-Sensitivity Troponin-I / T & NT-proBNP in acute dyspnea)',
    ],
    firstLineMedications: [
      { brand: 'Rosuvas 10 (Rosuvastatin)', generic: 'Rosuvastatin 10mg IP', genericSavings: '83% on Genericart PMBJP', dosageNotes: '1 tablet once daily at bedtime to lower LDL and stabilize arterial plaques' },
      { brand: 'Telma 40 (Telmisartan)', generic: 'Telmisartan 40mg IP', genericSavings: '82% on Jan Aushadhi', dosageNotes: '1 tablet daily in morning; provides 24-hour vascular wall protection' },
      { brand: 'Ecosprin 75 (Enteric Coated Aspirin)', generic: 'Aspirin 75mg Gastro-resistant IP', genericSavings: '70% on Jan Aushadhi', dosageNotes: 'Antiplatelet therapy taken once daily after lunch for secondary cardiac prevention' },
      { brand: 'Metoprolol Succinate ER 25mg (Betaloc / Metolar-XR)', generic: 'Metoprolol Succinate PR 25mg IP', genericSavings: '75% on Jan Aushadhi', dosageNotes: 'Beta-blocker for rate control and post-infarction myocardial remodeling' },
    ],
    redFlags: [
      'Central crushing retrosternal chest pain radiating to left arm, neck, or jaw with sweating and nausea (ACUTE MYOCARDIAL INFARCTION — Call 108 / Go to Ruby Hall Cath Lab immediately)',
      'Sudden onset severe shortness of breath with pink frothy sputum (Acute Pulmonary Edema)',
      'Syncope (sudden loss of consciousness) during physical exertion',
      'Rapid irregular pulse > 150 bpm with dizziness or low BP',
    ],
    complianceGuideline: 'CSI (Cardiological Society of India), ACC/AHA & ESC Guidelines',
    expertAdviceSample: {
      prompt: 'My LDL is 155 mg/dL and Triglycerides are 240 mg/dL. Am I at high risk for heart attack?',
      clinicalReasoning: 'Elevated LDL > 130 and Triglycerides > 200 represents the classic "Atherogenic Dyslipidemia" phenotype prevalent in South Asians, driven by small dense LDL particles and insulin resistance.',
      plainLanguageAdvice: 'Your numbers show moderate-to-high cardiovascular risk, which is very common in urban Indians due to carbohydrate-dense diets. The combination of a low-dose statin (Rosuvastatin 10mg available at ₹42 on Jan Aushadhi), eliminating refined seed oils, adding Omega-3 fatty acids, and 45 minutes of brisk walking lowers LDL by over 40% and cuts heart attack risk in half.',
      marathiSummary: 'एलडीएल १५५ आणि ट्रायग्लिसराइड्स २४० हे हृदयाच्या रक्तवाहिन्यांमध्ये अडथळा निर्माण करू शकतात. रोज ४५ मिनिटे चालणे आणि औषधांनी हे नियंत्रणात येते.',
      hindiSummary: 'एलडीएल १५५ और ट्राइग्लिसराइड २४० हृदय रोग का खतरा बढ़ाते हैं। हल्की दवा और रोज़ ४५ मिनट वॉक से यह स्तर सामान्य किया जा सकता है।',
    },
  },
  {
    id: 'diabetology',
    name: 'Diabetology & Metabolic Endocrinology',
    icon: '🩺',
    doctorTitle: 'Dr. Arya (Diabetology & Metabolic Medicine AI)',
    commonConditions: [
      'Type 2 Diabetes Mellitus & Insulin Resistance',
      'Prediabetes & Impaired Glucose Tolerance (HbA1c 5.7% – 6.4%)',
      'Diabetic Peripheral Neuropathy (Foot Tingling & Numbness)',
      'Diabetic Nephropathy & Retinopathy Prevention',
      'Gestational Diabetes Mellitus (GDM in Pregnancy)',
      'Hypoglycemia Management & Continuous Glucose Monitoring (CGM)',
    ],
    diagnosticTests: [
      'HbA1c (Glycated Hemoglobin HPLC Method - Gold Standard)',
      'Fasting Blood Sugar (FBS 8-hour fasting) & Post-Prandial Blood Sugar (PPBS 2-hour post meal)',
      'Urine Albumin-to-Creatinine Ratio (ACR for early kidney protection)',
      'Serum C-Peptide & Fasting Insulin (HOMA-IR for insulin resistance index)',
      'Fundus Examination (Retinal photography for diabetic retinopathy)',
      'Biothesiometry & Monofilament test (Vibration perception for diabetic neuropathy)',
    ],
    firstLineMedications: [
      { brand: 'Glycomet-GP 2 (Glimepiride 2mg + Metformin 500mg SR)', generic: 'Glimepiride & Metformin PR 2mg/500mg IP', genericSavings: '81% on Jan Aushadhi', dosageNotes: '1 tablet with breakfast; dual action insulin release + liver gluconeogenesis suppression' },
      { brand: 'Dapagliflozin 10mg (Forxiga / Dapa)', generic: 'Dapagliflozin 10mg IP (SGLT-2 Inhibitor)', genericSavings: '78% on Genericart', dosageNotes: '1 tablet morning; expels excess glucose via urine and protects heart/kidneys' },
      { brand: 'Teneligliptin 20mg (Ziten / Tenglyn)', generic: 'Teneligliptin Hydrobromide 20mg IP (DPP-4i)', genericSavings: '80% on Jan Aushadhi', dosageNotes: 'Weight-neutral once daily glucose control without hypoglycemia risk' },
      { brand: 'Semaglutide (Rybelsus 3mg/7mg/14mg Oral GLP-1)', generic: 'Oral Semaglutide Peptide', genericSavings: 'Price match on Meditrust', dosageNotes: 'Take first thing in morning with 120ml water, 30 mins before any food/other meds' },
    ],
    redFlags: [
      'Blood glucose < 55 mg/dL with confusion, severe sweating, tremors (HYPOGLYCEMIA — Take 3 teaspoons sugar / fruit juice immediately)',
      'Blood glucose > 350 mg/dL with fruity breath, deep rapid breathing, vomiting (Diabetic Ketoacidosis DKA)',
      'Diabetic foot ulcer with blackish discoloration, redness, foul smell (Urgent surgical debridement needed)',
    ],
    complianceGuideline: 'RSSDI (Research Society for the Study of Diabetes in India) & ADA Standards of Care',
    expertAdviceSample: {
      prompt: 'My fasting sugar is 160 mg/dL and PP is 240 mg/dL. How soon can I bring this down?',
      clinicalReasoning: 'Fasting 160 and PP 240 indicates significant hepatic glucose output and postprandial insulin secretory defect, corresponding to an estimated HbA1c around 8.5–9.0%.',
      plainLanguageAdvice: 'With structured therapy, your numbers can normalize within 7–14 days. SGLT-2 inhibitors (Dapagliflozin) or Metformin combinations lower blood sugar rapidly by encouraging natural glucose clearance. Cut white rice and bakery carbohydrates by 50%, increase paneer/sprouts/dal, and walk for 15 minutes immediately after meals.',
      marathiSummary: 'फास्टिंग १६० आणि जेवणानंतर २४० साखर ही जास्त आहे. ग्लायकोमेट किंवा डापाग्लिफ्लोझिन, डाएटमधील भाताचे प्रमाण कमी करून व जेवणानंतर चालण्याने साखर लवकर नियंत्रणात येते.',
      hindiSummary: 'फास्टिंग १६० और पीपी २४० उच्च मधुमेह दर्शाता है। सही दवा, कम कार्बोहाइड्रेट और खाने के तुरंत बाद १५ मिनट टहलने से यह २ हफ्तों में सामान्य हो सकती है।',
    },
  },
  {
    id: 'dermatology',
    name: 'Dermatology, Hair & Skin Care',
    icon: '✨',
    doctorTitle: 'Dr. Arya (Dermatology & Cosmetology AI)',
    commonConditions: [
      'Fungal Infections (Tinea Corporis / Ringworm, Tinea Cruris / Jock Itch)',
      'Acne Vulgaris (Hormonal, Cystic & Comedonal Acne)',
      'Eczema & Atopic Dermatitis (Severe Dry Skin & Itching)',
      'Psoriasis (Silvery Scaly Plaques on Elbows & Knees)',
      'Telogen Effluvium & Androgenetic Alopecia (Hair Fall & Thinning)',
      'Urticaria & Allergic Contact Dermatitis (Hives & Wheals)',
    ],
    diagnosticTests: [
      'KOH Mount (Potassium Hydroxide examination for fungal hyphae)',
      'Serum Ferritin, Iron Studies & Total Iron Binding Capacity for Hair Loss',
      'Serum Total IgE & Absolute Eosinophil Count for Allergic Dermatitis',
      'Thyroid Profile (TSH) & Vitamin B12 / Vitamin D for Diffuse Hair Thinning',
      'Skin Biopsy (Histopathology in chronic non-healing lesions)',
    ],
    firstLineMedications: [
      { brand: 'Itraconazole 200mg (Candiforce / Itaspor)', generic: 'Itraconazole Capsules 200mg IP', genericSavings: '75% on Jan Aushadhi', dosageNotes: '1 capsule daily after a heavy meal for 2–4 weeks for resistant fungal ringworm' },
      { brand: 'Luliconazole 1% Cream (Lulifin / Lulican)', generic: 'Luliconazole Topical Cream 1% w/w', genericSavings: '70% on Jan Aushadhi', dosageNotes: 'Apply thin layer once daily to affected area and 2cm surrounding skin for 2 weeks' },
      { brand: 'Minoxidil 5% + Finasteride 0.1% Solution (Tugain / Morr-F)', generic: 'Minoxidil 5% Topical Solution USP', genericSavings: '72% on Genericart', dosageNotes: '1ml twice daily on dry scalp with dropper for androgenetic hair regrowth' },
      { brand: 'Clindamycin 1% + Nicotinamide 4% Gel (Clindac-A / Faceclin)', generic: 'Clindamycin + Nicotinamide Gel', genericSavings: '68% on Jan Aushadhi', dosageNotes: 'Apply twice daily on active inflammatory acne pustules after gentle face wash' },
    ],
    redFlags: [
      'Widespread skin peeling, blistering and mucosal (mouth/eye) involvement after starting new drug (Stevens-Johnson Syndrome SJS / TEN — Medical emergency)',
      'Rapidly spreading red, hot, swollen skin with fever and severe pain (Cellulitis / Erysipelas)',
      'Changing mole with asymmetry, irregular borders, multiple colors, or diameter > 6mm (Rule out Melanoma)',
    ],
    complianceGuideline: 'IADVL (Indian Association of Dermatologists, Venereologists and Leprologists) Protocols',
    expertAdviceSample: {
      prompt: 'I have severe hair fall and widening hair partition. Which tests and treatment will work?',
      clinicalReasoning: 'Female pattern hair loss / Telogen Effluvium is predominantly triggered by ferritin < 30 ng/mL, Vitamin D3 deficiency (< 20 ng/mL), or subclinical thyroid dysfunction.',
      plainLanguageAdvice: 'Hair roots need adequate iron (Serum Ferritin > 50 ng/mL) and Vitamin D to stay in the growth phase. Check your Ferritin, Vitamin D, and Thyroid levels. Using topical Minoxidil 5% once daily combined with Biotin and correcting nutritional deficiencies restores density within 3–4 months.',
      marathiSummary: 'केस गळती ही शरीरातील आयर्न (Ferritin) आणि व्हिटॅमिन डी च्या कमतरतेमुळे होते. मिनॉक्सिडील ५% आणि योग्य सप्लिमेंट्सने नवीन केस पुन्हा येतात.',
      hindiSummary: 'बाल झड़ना अक्सर फेरिटिन (आयरन) और विटामिन डी की कमी से होता है। मिनोक्सिडिल ५% और सही पोषण से ३-४ महीने में बाल घने होने लगते हैं।',
    },
  },
]
