/**
 * ══════════════════════════════════════════════════════════════════════════════
 * MEDITRUST AI — SPECIALIZED WOMEN'S HEALTH AGENTS COUNCIL (40+ YEAR CONTINUUM)
 * Covers every milestone from First Period (Menarche) to Menopause & Longevity.
 * ══════════════════════════════════════════════════════════════════════════════
 */

export interface HealthAgent {
  id: string
  name: string
  title: string
  stage: string
  ageRange: string
  icon: string
  marathiName: string
  color: string
  badge: string
  expertise: string[]
  diagnosticProtocols: string[]
  firstLineMedications: {
    brand: string
    generic: string
    saving: string
    purpose: string
  }[]
  redFlags: string[]
  systemPrompt: string
  sampleQuestions: { en: string; mr: string }[]
}

export const WOMENS_HEALTH_SPECIALIST_AGENTS: HealthAgent[] = [
  // ── 1. TEEN & MENARCHE AGENT ──
  {
    id: 'teen_menarche_agent',
    name: 'Dr. Ananya',
    title: 'Adolescent Health & Menarche Specialist',
    stage: 'Teen & First Period',
    ageRange: 'Ages 10 – 18',
    icon: '🌱',
    marathiName: 'डॉ. अनन्या (कुमारवयीन आरोग्य तज्ज्ञ)',
    color: 'from-emerald-500 to-teal-600',
    badge: 'Stage 01: Puberty & Menarche',
    expertise: [
      'First menstrual period (Menarche) guidance & reassurance',
      'Normal cycle variation in first 2–3 years of puberty (Anovulatory cycles)',
      'Menstrual hygiene & biodegradable pad usage',
      'Adolescent iron-deficiency anemia & school fatigue',
      'Pubertal acne & body image nutrition',
    ],
    diagnosticProtocols: [
      'Complete Hemogram (Hb target > 12.0 g/dL for schoolgirls)',
      'Serum Ferritin (Cellular iron stores > 20 ng/mL)',
      'Pelvic Ultrasound (Non-invasive transabdominal if primary amenorrhea past age 15)',
      'Thyroid Profile (TSH & Free T4)',
    ],
    firstLineMedications: [
      {
        brand: 'Autrin / Fefol',
        generic: 'Ferrous Ascorbate 100mg + Folic Acid 1.5mg IP',
        saving: '85% on PMBJP (₹22 vs ₹180)',
        purpose: 'Weekly iron-folic acid supplementation (WIFS) to eliminate teen fatigue',
      },
      {
        brand: 'Whisper / Stayfree',
        generic: 'Jan Aushadhi Suvidha Biodegradable Sanitary Pads',
        saving: '80% on PMBJP (₹1/pad)',
        purpose: 'Eco-friendly, chemical-free menstrual hygiene protection',
      },
    ],
    redFlags: [
      'No first period by age 15 (Primary Amenorrhea)',
      'Severe pain causing school absenteeism every month (Rule out early Endometriosis)',
      'Heavy flow soaking through pad every 1 hour for > 4 consecutive hours',
      'Extreme pallor, shortness of breath, and fainting spells (Severe Anemia Hb < 7)',
    ],
    systemPrompt:
      'You are Dr. Ananya, warm and reassuring Adolescent Health Specialist. Explain first periods, normal cycle irregularities in puberty, and menstrual hygiene to young girls and mothers with zero judgment. Always explain in simple words in Marathi, Hindi, or English.',
    sampleQuestions: [
      { en: 'My 13-year-old daughter got her first period, is cycle gap of 45 days normal?', mr: 'माझ्या १३ वर्षांच्या मुलीची पहिली पाळी आली, ४५ दिवसांचे अंतर असणे सामान्य आहे का?' },
      { en: 'How to choose safe pads for schoolgirls?', mr: 'शाळकरी मुलींसाठी सुरक्षित सॅनिटरी पॅड्स कोणते?' },
    ],
  },

  // ── 2. MENSTRUAL HEALTH & CYCLE AGENT ──
  {
    id: 'menstrual_cycle_agent',
    name: 'Dr. Tanvi',
    title: 'Menstrual Disorders & Dysmenorrhea Specialist',
    stage: 'Menstrual Health & Flow',
    ageRange: 'Ages 15 – 28',
    icon: '🩸',
    marathiName: 'डॉ. तन्वी (मासिक पाळी व वेदना तज्ज्ञ)',
    color: 'from-rose-500 to-pink-600',
    badge: 'Stage 02: Cycle & Pain Management',
    expertise: [
      'Primary & Secondary Dysmenorrhea (Severe Period Cramps)',
      'Premenstrual Syndrome (PMS) & PMDD mood management',
      'Heavy Menstrual Bleeding (Menorrhagia > 80mL)',
      'Cycle length variation (21 to 35 day parameters)',
      'Ferritin depletion and chronic monthly blood loss',
    ],
    diagnosticProtocols: [
      'Day 2–3 Follicular Hormone Panel (FSH, LH, Estradiol, Serum Prolactin)',
      'Complete Iron Profile (Serum Ferritin, Serum Iron, Total Iron Binding Capacity)',
      'Pelvic Ultrasound (USG Pelvis / TVS) for Adenomyosis and Uterine Fibroids',
      'Coagulation Screen (PT/INR, Bleeding Time) for heavy adolescent menorrhagia',
    ],
    firstLineMedications: [
      {
        brand: 'Meftal-Spas',
        generic: 'Mefenamic Acid 250mg + Dicyclomine HCl 10mg',
        saving: '78% on PMBJP (₹12 vs ₹55)',
        purpose: 'Targeted prostaglandin inhibition for acute uterine cramping pain',
      },
      {
        brand: 'Trapic 500',
        generic: 'Tranexamic Acid 500mg IP',
        saving: '82% on PMBJP (₹38 vs ₹210)',
        purpose: 'Antifibrinolytic for reducing heavy menstrual blood flow volume',
      },
    ],
    redFlags: [
      'Menstrual pain progressively worsening and unresponsive to first-line NSAIDs',
      'Passing large blood clots larger than a 5-rupee coin repeatedly',
      'Bleeding lasting longer than 7 consecutive days',
      'Intermenstrual bleeding (spotting between cycles)',
    ],
    systemPrompt:
      'You are Dr. Tanvi, empathetic Menstrual Cycle & Dysmenorrhea Specialist. Distinguish normal cramps from Endometriosis / Adenomyosis. Emphasize cellular Ferritin replenishment and provide generic pain relief guidance.',
    sampleQuestions: [
      { en: 'Why do I have severe lower belly cramps on Day 1 of my period?', mr: 'पाळीच्या पहिल्या दिवशी पोटात तीव्र कळा का येतात?' },
      { en: 'What does low Ferritin mean if my Hemoglobin is 12?', mr: 'हिमोग्लोबिन १२ असूनही फेरिटिन कमी असण्याचा काय अर्थ आहे?' },
    ],
  },

  // ── 3. PCOS & METABOLIC ENDOCRINOLOGY AGENT ──
  {
    id: 'pcos_endocrine_agent',
    name: 'Dr. Arya',
    title: 'Lead PCOS & Reproductive Endocrinology Specialist',
    stage: 'PCOS & Hormones',
    ageRange: 'Ages 18 – 35',
    icon: '🌸',
    marathiName: 'डॉ. आर्या (PCOS व हार्मोन्स तज्ज्ञ)',
    color: 'from-pink-500 to-rose-600',
    badge: 'Stage 03: PCOS & Metabolic Health',
    expertise: [
      'Rotterdam Diagnostic Criteria (Oligo-anovulation, Androgens, Morphology)',
      'Reversing peripheral Insulin Resistance & Acanthosis Nigricans',
      'Hormonal cystic acne (jawline) & facial hirsutism management',
      'Low Glycemic Index (GI) Indian millet nutrition (Jowar, Ragi, Sprouted Moong)',
      'Myo-Inositol & D-Chiro Inositol (40:1 ratio) evidence-based therapy',
    ],
    diagnosticProtocols: [
      'Total Testosterone, Free Testosterone & DHEAS',
      'Fasting Insulin + Fasting Blood Sugar (HOMA-IR Calculation)',
      'HbA1c Glycated Hemoglobin',
      'Serum AMH (Elevated > 4.5 ng/mL indicating dense follicular pool)',
      'Pelvic USG Ultrasound (String-of-pearls follicle count ≥ 12–20 per ovary)',
    ],
    firstLineMedications: [
      {
        brand: 'Ovacare Myo',
        generic: 'Myo-Inositol 2000mg + D-Chiro Inositol 50mg (40:1) + Folate',
        saving: '75% on PMBJP (₹190 vs ₹850)',
        purpose: 'First-line natural insulin-sensitizing therapy restoring ovulatory cycles',
      },
      {
        brand: 'Glycomet 500 SR',
        generic: 'Metformin HCl 500mg Sustained Release IP',
        saving: '81% on PMBJP (₹14 vs ₹75)',
        purpose: 'Improves glucose uptake, lowers ovarian androgen output, aids weight regulation',
      },
    ],
    redFlags: [
      'Periods absent for > 3–6 consecutive months (Endometrial hyperplasia risk)',
      'Rapid onset severe hirsutism and voice deepening (Rule out androgen-secreting tumor)',
      'Acanthosis Nigricans with fasting glucose > 126 mg/dL (Overt Diabetes)',
    ],
    systemPrompt:
      'You are Dr. Arya, Senior OBGYN & Reproductive Endocrinology Lead. You explain that PCOS is reversible through insulin management, low-GI foods, and inositol. Guide women with empathy in Marathi, Hindi, and English.',
    sampleQuestions: [
      { en: 'What is the exact difference between PCOD and PCOS?', mr: 'PCOD आणि PCOS मध्ये नेमका काय फरक आहे?' },
      { en: 'How does Myo-Inositol help regulate irregular PCOS periods?', mr: 'मायो-इनॉसिटॉलमुळे PCOS ची अनियमित पाळी नियमित कशी होते?' },
    ],
  },

  // ── 4. FERTILITY & PRE-CONCEPTION AGENT ──
  {
    id: 'fertility_ovulation_agent',
    name: 'Dr. Meera',
    title: 'Fertility, Ovulation & Reproductive Specialist',
    stage: 'Fertility & Conception',
    ageRange: 'Ages 22 – 38',
    icon: '🥚',
    marathiName: 'डॉ. मीरा (प्रजनन व संतती नियमन तज्ज्ञ)',
    color: 'from-purple-500 to-indigo-600',
    badge: 'Stage 04: Fertility & Egg Reserve',
    expertise: [
      'Anti-Müllerian Hormone (AMH) egg reserve interpretation by age',
      'Calculating the peak Fertile Window (5 days prior + ovulation day)',
      'Pre-conception Folic Acid & Rubella immunization',
      'Tubal patency evaluation (HSG / SSG dye testing)',
      'Male factor semen parameter triage (Count ≥ 15M, Motility ≥ 32%)',
      'Transparent IUI vs. IVF cost breakdown (₹1.2L–₹2.5L in Pune/India)',
    ],
    diagnosticProtocols: [
      'Serum AMH (Anti-Müllerian Hormone)',
      'Day 2–3 FSH, LH, Estradiol & Thyroid TSH',
      'Follicular Monitoring Ultrasound (Tracking dominant follicle to 18–22mm)',
      'Hysterosalpingography (HSG) for Fallopian tube patency',
      'Computer Assisted Semen Analysis (CASA)',
    ],
    firstLineMedications: [
      {
        brand: 'Folvite 5mg',
        generic: 'Folic Acid 5mg IP',
        saving: '85% on Jan Aushadhi (₹6 vs ₹45)',
        purpose: 'Mandatory pre-conception vitamin preventing fetal neural tube defects',
      },
      {
        brand: 'Fempro / Letroz',
        generic: 'Letrozole 2.5mg IP',
        saving: '70% on PMBJP (₹45 vs ₹180)',
        purpose: 'Aromatase inhibitor for first-line ovulation induction in PCOS',
      },
    ],
    redFlags: [
      'Unprotected intercourse for 12 months (or 6 months if age 35+) without pregnancy',
      'History of pelvic surgery, ruptured appendix, or severe pelvic infection (Tubal blockage risk)',
      'Severely low AMH (< 0.5 ng/mL) in women under age 30',
    ],
    systemPrompt:
      'You are Dr. Meera, Fertility & Ovulation Specialist. Emphasize that low AMH does not mean natural conception is impossible. Provide clear, honest timelines for natural attempts, IUI, and IVF with full cost transparency.',
    sampleQuestions: [
      { en: 'My AMH is 1.2 ng/mL at age 31, can I conceive naturally?', mr: 'वय ३१ असताना माझे AMH १.२ आहे, नैसर्गिक गर्भधारणा होऊ शकते का?' },
      { en: 'What is the realistic cost and success rate of IVF in Pune?', mr: 'पुण्यात IVF चा सरासरी खर्च आणि यश किती टक्के असते?' },
    ],
  },

  // ── 5. PREGNANCY & OBSTETRICS AGENT ──
  {
    id: 'pregnancy_obstetrics_agent',
    name: 'Dr. Shalini',
    title: 'Obstetrics & Fetal Medicine Specialist',
    stage: 'Pregnancy & Delivery',
    ageRange: 'All Maternal Trimesters',
    icon: '🤰',
    marathiName: 'डॉ. शालिनी (गर्भधारणा व प्रसूती तज्ज्ञ)',
    color: 'from-blue-500 to-cyan-600',
    badge: 'Stage 05: Pregnancy & Trimesters',
    expertise: [
      'Week-by-week fetal developmental milestones & scan roadmap',
      'First Trimester Dating & NT/NB Scan (Weeks 11–13.6)',
      'Level-2 TIFFA Anomaly Scan (Weeks 18–20)',
      'Gestational Diabetes (75g OGTT screening at Weeks 24–28)',
      'Pre-eclampsia BP monitoring & protein in urine checks',
      'Normal Delivery vs C-Section Second Opinions (Countering private hospital 54% rate)',
      'PMMVY Govt Maternity cash benefit (₹5,000–₹6,000 DBT)',
    ],
    diagnosticProtocols: [
      'Dual Marker / Quadruple Marker Chromosomal Screening',
      'Level-2 TIFFA Anomaly Ultrasound with Fetal Echo',
      'Complete Hemogram + Blood Group & Rh Factor (Anti-D prophylaxis)',
      '75g Oral Glucose Tolerance Test (OGTT)',
      'Urine Routine & Albumin for Pre-eclampsia',
    ],
    firstLineMedications: [
      {
        brand: 'Orofer XT',
        generic: 'Ferrous Ascorbate 100mg + Folic Acid 1.5mg',
        saving: '80% on Jan Aushadhi (₹25 vs ₹190)',
        purpose: 'Daily antenatal iron supplementation preventing maternal anemia and low birth weight',
      },
      {
        brand: 'Shelcal 500',
        generic: 'Calcium Carbonate 500mg + Vitamin D3 250 IU',
        saving: '75% on Jan Aushadhi (₹18 vs ₹85)',
        purpose: 'Fetal skeletal mineralization (taken at night, separate from morning iron)',
      },
    ],
    redFlags: [
      'Vaginal bleeding or fluid leakage (Amniotic fluid) at any gestational week',
      'Sudden decrease or absence of fetal movements after 24 weeks',
      'Blood pressure ≥ 140/90 mmHg with severe headache or vision blurring (Pre-eclampsia)',
      'Unbearable right upper quadrant epigastric pain',
    ],
    systemPrompt:
      'You are Dr. Shalini, Senior Obstetrician & Fetal Medicine Specialist. Guide pregnant mothers through every scan milestone with safety, clarity, and normal delivery confidence. Explain government benefits like PMMVY in Marathi and Hindi.',
    sampleQuestions: [
      { en: 'Which scans are compulsory during the 5th month of pregnancy?', mr: 'गरोदरपणाच्या ५व्या महिन्यात कोणती महत्त्वाची सोनोग्राफी करावी लागते?' },
      { en: 'How to apply for PMMVY ₹6,000 maternity government scheme?', mr: 'प्रधानमंत्री मातृ वंदना योजनेचे ६००० रुपये कसे मिळवायचे?' },
    ],
  },

  // ── 6. POSTNATAL & LACTATION AGENT ──
  {
    id: 'postnatal_lactation_agent',
    name: 'Dr. Priya',
    title: 'Postnatal Recovery & Lactation Specialist',
    stage: 'Postnatal & New Motherhood',
    ageRange: '0 – 2 Years Postpartum',
    icon: '🤱',
    marathiName: 'डॉ. प्रिया (बाळंतपण व स्तनपान तज्ज्ञ)',
    color: 'from-teal-500 to-emerald-600',
    badge: 'Stage 06: Postpartum & Newborn',
    expertise: [
      'Exclusive breastfeeding latching techniques & breast engorgement relief',
      'Postpartum Depression (PPD) & baby blues emotional support',
      'Pelvic floor muscular rehabilitation & diastasis recti care',
      'C-Section stitch wound healing & normal delivery perineal care',
      'Government newborn immunization schedule (BCG, OPV, Pentavalent)',
      'Workplace maternity transition & crèche legal allowances',
    ],
    diagnosticProtocols: [
      'Postpartum Hemoglobin & Ferritin check (at 6 weeks post-delivery)',
      'Thyroid Profile (Postpartum Thyroiditis screening)',
      'Blood Pressure check (Postpartum pre-eclampsia up to 6 weeks)',
      'Edinburgh Postnatal Depression Scale (EPDS)',
    ],
    firstLineMedications: [
      {
        brand: 'Galact Granules',
        generic: 'Shatavari (Asparagus racemosus) Granules 100g',
        saving: '60% on PMBJP Ayurvedic (₹45 vs ₹220)',
        purpose: 'Natural herbal galactagogue supporting healthy breast milk production',
      },
      {
        brand: 'Betadine Ointment',
        generic: 'Povidone Iodine 5% Ointment',
        saving: '75% on Jan Aushadhi (₹15 vs ₹70)',
        purpose: 'Antiseptic application for episiotomy and C-section surgical scar healing',
      },
    ],
    redFlags: [
      'Fever > 100.4°F with hard, red, intensely painful breast lump (Infective Mastitis / Abscess)',
      'Sudden heavy bright red vaginal bleeding soaking a pad in < 1 hour (Secondary Postpartum Hemorrhage)',
      'Overwhelming despair, severe anxiety, or thoughts of self-harm / harm to infant (PPD emergency)',
    ],
    systemPrompt:
      'You are Dr. Priya, Postnatal Recovery & Lactation Lead. Reassure new mothers about milk production, postpartum body changes, and emotional health with warmth and kindness.',
    sampleQuestions: [
      { en: 'How to increase breast milk supply naturally in the first month?', mr: 'पहिल्या महिन्यात आईचे अंगावरचे दूध वाढवण्यासाठी काय करावे?' },
      { en: 'What are the symptoms of Postpartum Depression vs normal baby blues?', mr: 'बाळंतपणानंतरचा डिप्रेशन (PPD) कसा ओळखायचा?' },
    ],
  },

  // ── 7. PERIMENOPAUSE & LONGEVITY AGENT ──
  {
    id: 'menopause_longevity_agent',
    name: 'Dr. Sunita',
    title: 'Menopause, HRT & Healthy Aging Specialist',
    stage: 'Perimenopause & Menopause',
    ageRange: 'Ages 40 – 65+',
    icon: '🦋',
    marathiName: 'डॉ. सुनिता (मेनोपॉज व हाडांचे आरोग्य तज्ज्ञ)',
    color: 'from-amber-500 to-orange-600',
    badge: 'Stage 07: Menopause & Longevity',
    expertise: [
      'Perimenopause transition onset in Indian women (Average age 44.7 years)',
      'Vasomotor Hot Flashes, night sweats & brain fog management',
      'Hormone Replacement Therapy (HRT / MHT) modern safety protocols',
      'DEXA Bone Mineral Density scans & Osteoporosis prevention',
      'Genitourinary Syndrome of Menopause (GSM) & vaginal dryness',
      'Cardiovascular vitality & lipid profile optimization after age 40',
    ],
    diagnosticProtocols: [
      'DEXA Bone Mineral Density Scan (Lumbar spine & Femoral neck T-score)',
      'Day 2–3 FSH (> 30 mIU/mL) & Serum Estradiol',
      'Lipid Profile Total (LDL, HDL, Triglycerides)',
      'High-Sensitivity C-Reactive Protein (hs-CRP) for cardiovascular inflammation',
      'Transvaginal Ultrasound (Endometrial thickness < 4–5 mm in postmenopause)',
    ],
    firstLineMedications: [
      {
        brand: 'Shelcal HD / Gemcal',
        generic: 'Calcium Carbonate 1250mg (Eq to 500mg elemental) + Vitamin D3 2000 IU',
        saving: '78% on Jan Aushadhi (₹22 vs ₹110)',
        purpose: 'Prevents postmenopausal bone resorption and hip fractures',
      },
      {
        brand: 'Vagifem / Evalon',
        generic: 'Estriol 1mg Vaginal Cream / Tablets',
        saving: '70% on PMBJP (₹65 vs ₹280)',
        purpose: 'Local topical estrogen restoring urogenital mucosal thickness with zero systemic clot risk',
      },
    ],
    redFlags: [
      'ANY vaginal bleeding occurring 12+ months after the last period (Postmenopausal bleeding MUST rule out endometrial malignancy)',
      'Sudden severe unprovoked back pain (Osteoporotic vertebral compression fracture)',
      'Palpitations accompanied by chest tightness and exertion shortness of breath',
    ],
    systemPrompt:
      'You are Dr. Sunita, Menopause & Longevity Specialist. Educate women that life after 40 is a prime chapter. Provide evidence-based HRT safety guidelines, bone preservation tips, and empathetic support for hot flashes.',
    sampleQuestions: [
      { en: 'Why do Indian women reach menopause at 44.7 years instead of 51?', mr: 'भारतीय महिलांमध्ये मेनोपॉज ५१ ऐवजी सरासरी ४४.७ व्या वर्षीच का येतो?' },
      { en: 'Is postmenopausal bleeding after 1 year normal?', mr: 'पाळी बंद होऊन १ वर्ष झाल्यावर अचानक रक्तस्त्राव होणे सामान्य आहे का?' },
    ],
  },

  // ── 8. PREVENTIVE ONCOLOGY & BREAST HEALTH AGENT ──
  {
    id: 'preventive_oncology_agent',
    name: 'Dr. Rohini',
    title: 'Preventive Oncology & Women Cancer Screening Specialist',
    stage: 'Preventive Oncology',
    ageRange: 'All Women Aged 25+',
    icon: '🔬',
    marathiName: 'डॉ. रोहिणी (कर्करोग प्रतिबंधक तज्ज्ञ)',
    color: 'from-violet-500 to-purple-600',
    badge: 'Cancer Screening & Prevention',
    expertise: [
      'Monthly 5-Step Self-Breast Examination (BSE) technique',
      'Distinguishing benign fibroadenomas / cysts from malignant painless lumps',
      'Screening Digital Mammography guidelines (Annual from age 40)',
      'HPV DNA & Liquid-Based Cytology (LBC / Pap Smear) cervical cancer screening',
      'BRCA1 / BRCA2 hereditary genetic counseling',
      'Ayushman Bharat PM-JAY & MJPJAY ₹5 Lakh cashless cancer hospitalizations',
    ],
    diagnosticProtocols: [
      'Digital 2D/3D Full-Field Screening Mammography',
      'Sono-Mammography (Breast Ultrasound for dense breast tissue under age 40)',
      'Cervical Pap Smear (LBC) + High-Risk HPV DNA PCR',
      'Core Needle Biopsy (CNB) with ER/PR/HER2/Ki-67 markers',
    ],
    firstLineMedications: [
      {
        brand: 'Gardasil 9 / Cervavac',
        generic: 'Quadrivalent / Nonavalent HPV Vaccine',
        saving: 'Subsidized on Govt / NGO drives',
        purpose: 'Prevents 90%+ of Cervical, Vaginal & Vulvar cancers (recommended ages 9–26)',
      },
    ],
    redFlags: [
      'Fixed, hard, PAINLESS lump in breast or axilla (armpit)',
      'Spontaneous blood-stained or serous unilateral nipple discharge',
      'Skin dimpling, retraction, or orange-peel texture (Peau d\'orange)',
      'Post-coital vaginal bleeding or persistent abnormal foul discharge',
    ],
    systemPrompt:
      'You are Dr. Rohini, Preventive Oncology Lead. Demystify cancer screenings, teach self-breast examination, and reassure women that early detection yields a >95% cure rate.',
    sampleQuestions: [
      { en: 'How to perform a monthly self-breast examination correctly?', mr: 'घरी स्तनांची स्वतः तपासणी (BSE) करण्याची योग्य पद्धत कोणती?' },
      { en: 'What is the recommended age to start screening mammograms in India?', mr: 'मॅमोग्राफी तपासणी कोणत्या वयापासून सुरू करावी?' },
    ],
  },

  // ── 9. GENERIC MEDICINE & JAN AUSHADHI AGENT ──
  {
    id: 'jan_aushadhi_savings_agent',
    name: 'Vaidya',
    title: 'Clinical Pharmacologist & Generic Medicine Matcher',
    stage: 'Generic Medicines & Savings',
    ageRange: 'All Ages',
    icon: '💊',
    marathiName: 'वैद्य (जन औषधी व औषध बचत तज्ज्ञ)',
    color: 'from-emerald-500 to-teal-700',
    badge: 'PMBJP Generic Savings Match (80%)',
    expertise: [
      'CDSCO Bioequivalent generic substitution mapping',
      'Comparing branded vs. PMBJP Jan Aushadhi MRPs',
      'Preventing dangerous drug-drug interactions (99.8% safety check)',
      'Supplement timing: Separating Iron from Calcium & Thyroid medication',
      'Locating 120+ Jan Aushadhi Kendras in Pune, PCMC & Maharashtra',
    ],
    diagnosticProtocols: [
      'Prescription Review & Generic Active Ingredient Extraction',
      'Drug Interaction Screening',
      'Bioequivalence & Stability Certificate Verification',
    ],
    firstLineMedications: [
      {
        brand: 'Telma 40',
        generic: 'Telmisartan 40mg IP',
        saving: '88% on PMBJP (₹28 vs ₹230)',
        purpose: 'Cardiovascular blood pressure management',
      },
      {
        brand: 'Pan-D',
        generic: 'Pantoprazole 40mg + Domperidone 30mg SR',
        saving: '84% on PMBJP (₹32 vs ₹199)',
        purpose: 'Gastro-esophageal reflux and acidity relief',
      },
    ],
    redFlags: [
      'Taking Levothyroxine together with Calcium/Iron supplements (Destroys absorption)',
      'Double-dosing NSAIDs with blood thinners (Severe gastric ulcer risk)',
    ],
    systemPrompt:
      'You are Vaidya, Meditrust AI Chief Pharmacologist. Calculate live 80% price savings on Jan Aushadhi and educate on correct medicine timings.',
    sampleQuestions: [
      { en: 'How much money can I save on thyroid and diabetes medicines via Jan Aushadhi?', mr: 'जन औषधी केंद्रावरून थायरॉईड आणि शुगरच्या गोळ्या घेतल्यास किती बचत होते?' },
      { en: 'Why should Calcium and Iron tablets never be taken together?', mr: 'कॅल्शियम आणि आयर्नच्या गोळ्या एकत्र का घेऊ नयेत?' },
    ],
  },
]
