/**
 * ══════════════════════════════════════════════════════════════════════════════
 * MEDITRUST AI — COMPLETE 38 WOMEN'S HEALTH MASTER SEGMENTS DATASET
 * Covering Clinical Stages, Reproductive Care, Diagnostics, FemTech & Enterprise Ecosystem.
 * ══════════════════════════════════════════════════════════════════════════════
 */

export interface HealthSegment {
  id: string
  slug: string
  title: string
  category: 'Period & Hormones' | 'Fertility & Maternity' | 'Clinical & Oncology' | 'FemTech & Wellness' | 'Ecosystem & Enterprise'
  icon: string
  tagline: string
  overview: string
  keyFocusAreas: string[]
  clinicalProtocols: string[]
  drAryaGuidance: string
  recommendedTests: Array<{
    name: string
    price: number
    sampleType: string
    turnaround: string
  }>
  recommendedProducts: Array<{
    name: string
    price: number
    tag: string
  }>
  govtSchemes: string[]
  faqs: Array<{
    question: string
    answer: string
  }>
}

export const WOMENS_HEALTH_MASTER_SEGMENTS: HealthSegment[] = [
  // ── 1. PERIOD & HORMONES ──
  {
    id: 'menstrual-health',
    slug: 'menstrual-health',
    title: 'Menstrual Health',
    category: 'Period & Hormones',
    icon: '🩸',
    tagline: 'Complete care for dysmenorrhea, heavy flow & cycle irregularity',
    overview: 'Menstrual health is the vital sign of female endocrine well-being. From managing primary dysmenorrhea and menorrhagia to treating vulvar contact dermatitis from bleached pads, Meditrust provides evidence-based clinical protocols and rash-free solutions.',
    keyFocusAreas: [
      'Primary & Secondary Dysmenorrhea Relief',
      'Menorrhagia (Heavy Menstrual Bleeding) Workup',
      'Chemical-Free & Rash-Free Period Hygiene',
      'Luteal Phase Prostaglandin Regulation'
    ],
    clinicalProtocols: [
      'Complete Blood Count (CBC) & Serum Ferritin to rule out microcytic anemia',
      'Pelvic Ultrasound (USG Pelvis) to rule out adenomyosis and uterine fibroids',
      'Continuous 40°C thermal heat therapy for myometrial spasm relaxation'
    ],
    drAryaGuidance: 'Never normalize debilitating period pain. If pain prevents school or work attendance, or fails to respond to 40°C heat and first-line NSAIDs, screen early for endometriosis.',
    recommendedTests: [
      { name: 'Serum Ferritin & Iron Deficiency Profile', price: 499, sampleType: 'Blood', turnaround: '6 Hours' },
      { name: 'Complete Pelvic USG Scan Workup', price: 950, sampleType: 'Ultrasound', turnaround: 'Same Day' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Ultra-Soft Rash-Free Sanitary Pads', price: 199, tag: '15L+ Women' },
      { name: 'Meditrust Sakhi™ Cramp Comfort 8-Hour Heat Patches', price: 249, tag: 'Best Seller' }
    ],
    govtSchemes: ['PMBJP Suvidha ₹1 Sanitary Pads Scheme', 'Rashtriya Kishor Swasthya Karyakram (RKSK)'],
    faqs: [
      {
        question: 'How much blood loss is considered abnormal during a period?',
        answer: 'Normal menstrual loss is between 30ml and 80ml per cycle. Bleeding through one or more pads every 1–2 hours, passing clots larger than a 5-rupee coin, or bleeding for more than 7 days requires clinical gynaecological evaluation.'
      }
    ]
  },

  {
    id: 'period-tracking',
    slug: 'period-tracking',
    title: 'Period Tracking',
    category: 'Period & Hormones',
    icon: '📅',
    tagline: 'AI-driven predictive cycle, ovulation & symptom analytics',
    overview: 'Track your follicular, ovulatory, and luteal phases with Meditrust Sakhi AI. Predict next period dates, fertile ovulation windows, and pre-menstrual dysphoric disorder (PMDD) mood shifts with private, encrypted health analytics.',
    keyFocusAreas: ['Cycle Length Variability & Irregularity Alarms', 'Ovulation Window & Basal Body Temperature', 'PMS & PMDD Mood Tracking', 'Hormonal Biomarker Mapping'],
    clinicalProtocols: ['Continuous 3-cycle basal cycle mapping', 'Luteinizing Hormone (LH) surge detection', 'Luteal phase progesterone estimation'],
    drAryaGuidance: 'Tracking cycle lengths reveals early signs of anovulation and luteal phase defects before overt fertility struggles emerge.',
    recommendedTests: [
      { name: 'Day 21 Serum Progesterone Ovulation Confirmation', price: 450, sampleType: 'Blood', turnaround: '6 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ 1mm Breathable Cotton Panty Liners', price: 189, tag: 'Daily Freshness' }
    ],
    govtSchemes: ['ABHA Ayushman Bharat Digital Health Record'],
    faqs: [
      {
        question: 'Why does my cycle fluctuate between 26 and 35 days?',
        answer: 'A variation of 2 to 4 days is normal and caused by stress, travel, or sleep changes. Variations exceeding 7–9 days indicate possible anovulatory cycles or PCOS.'
      }
    ]
  },

  {
    id: 'pcos',
    slug: 'pcos',
    title: 'PCOS',
    category: 'Period & Hormones',
    icon: '🌸',
    tagline: 'Comprehensive polycystic ovary syndrome reversal protocol',
    overview: 'PCOS affects 1 in 5 Indian women, driven by hyperinsulinemia and ovarian androgen excess. Meditrust combines 40:1 Myo-Inositol metabolic therapy, low-glycemic nutrition, and dermatological acne defense.',
    keyFocusAreas: ['Rotterdam 2026 Diagnostic Criteria', 'Insulin Resistance & Acanthosis Nigricans Reversal', 'Hormonal Jawline Acne & Hirsutism Care', 'Ovulatory Restoration'],
    clinicalProtocols: ['Day 2–3 LH, FSH, AMH, and Fasting Insulin HOMA-IR ratio', 'Pelvic USG antral follicle count (>20 follicles/ovary)', '40:1 Inositol daily physiological supplementation'],
    drAryaGuidance: 'PCOS is not an ovarian disease—it is a metabolic endocrine condition. Treating the root insulin resistance restores periods and skin naturally.',
    recommendedTests: [
      { name: 'Complete 8-Param PCOS Hormone Panel (LH, FSH, AMH, DHEA-S, Insulin)', price: 1899, sampleType: 'Blood', turnaround: '12 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ PCOS Hormonal Balance Sachets (40:1 Inositol)', price: 649, tag: 'Clinically Proven' },
      { name: 'Meditrust Sakhi™ Total PCOS & Acne Care Box', price: 1299, tag: 'Complete Regimen' }
    ],
    govtSchemes: ['PMBJP Generic Myo-Inositol 2000mg Scheme (₹190)'],
    faqs: [
      {
        question: 'Can PCOS be permanently cured?',
        answer: 'PCOS is a genetic metabolic trait that can be placed into complete clinical remission where ovulatory cycles become regular, skin clears, and ultrasound markers normalize.'
      }
    ]
  },

  {
    id: 'endometriosis',
    slug: 'endometriosis',
    title: 'Endometriosis',
    category: 'Period & Hormones',
    icon: '🎗️',
    tagline: 'Pelvic pain triage, staging & fertility preservation',
    overview: 'Endometriosis occurs when endometrial-like tissue grows outside the uterus, causing chronic inflammation, pelvic adhesions, and deep dyspareunia. Meditrust delivers expert OB-GYN staging and laparoscopic surgical concierge.',
    keyFocusAreas: ['Deep Infiltrating Endometriosis (DIE) Staging', 'Chronic Pelvic Pain & Dyspareunia Triage', 'Ovarian Endometrioma (Chocolate Cysts)', 'Fertility & AMH Preservation'],
    clinicalProtocols: ['High-resolution transvaginal ultrasound (TVS) with bowel sliding sign', 'CA-125 and pelvic MRI staging', 'Anti-inflammatory luteal nutrition & progesterone protocols'],
    drAryaGuidance: 'Average diagnosis for endometriosis in India takes 7 years. Early pelvic mapping by trained gynaecological sonologists prevents irreversible tubal damage.',
    recommendedTests: [
      { name: 'Pelvic MRI Endometriosis Staging Protocol', price: 4500, sampleType: 'Diagnostic MRI', turnaround: 'Same Day' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Cramp Comfort Self-Heating Patches (Pack of 6)', price: 449, tag: 'Continuous Warmth' }
    ],
    govtSchemes: ['Ayushman Bharat PM-JAY Tertiary Gynaecology Cover (₹5 Lakh)'],
    faqs: [
      {
        question: 'What is the gold standard diagnosis for endometriosis?',
        answer: 'Laparoscopy with histological biopsy remains the gold standard, although high-resolution specialized TVS and 3T MRI can accurately stage deep infiltrating lesions.'
      }
    ]
  },

  {
    id: 'perimenopause',
    slug: 'perimenopause',
    title: 'Perimenopause',
    category: 'Period & Hormones',
    icon: '🦋',
    tagline: 'Navigating the hormonal transition (Ages 38–48)',
    overview: 'Perimenopause represents the 4 to 8 year neuroendocrine transition leading up to menopause. Characterized by fluctuating estradiol, sleep disruptions, brain fog, and vasomotor hot flashes, we offer science-backed bioidentical support.',
    keyFocusAreas: ['Vasomotor Hot Flashes & Night Sweats', 'Erratic Cycle Timing & Heavy Flooding Flow', 'Sleep Architecture & Progesterone Decline', 'Cardiovascular & Bone Density Screening'],
    clinicalProtocols: ['Serum FSH and Estradiol monitoring', 'DEXA Bone Mineral Density baseline', 'Cardiovascular lipid & ApoB risk profiling'],
    drAryaGuidance: 'Perimenopause symptoms in Indian women often start around age 39. Supporting progesterone and bone mineral intake early preserves longevity.',
    recommendedTests: [
      { name: 'Perimenopause Hormone & Bone Health Panel', price: 1450, sampleType: 'Blood', turnaround: '8 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Organic Spearmint & Shatavari Herbal Tea', price: 349, tag: 'Calming Herbs' }
    ],
    govtSchemes: ['PM-JAY Geriatric & Midlife Women Health Desk'],
    faqs: [
      {
        question: 'How do I distinguish perimenopause from thyroid dysfunction?',
        answer: 'Both cause fatigue and mood changes, but a simple TSH, Free T4, and FSH blood panel clearly differentiates thyroid sluggishness from ovarian transition.'
      }
    ]
  },

  {
    id: 'menopause',
    slug: 'menopause',
    title: 'Menopause',
    category: 'Period & Hormones',
    icon: '✨',
    tagline: 'Post-reproductive vitality, bone health & cardiovascular protection',
    overview: 'Menopause is confirmed after 12 consecutive months of amenorrhea (average age 46.2 years in Indian women). Our protocols focus on osteopenia prevention, genitourinary syndrome of menopause (GSM), and healthy cardiovascular aging.',
    keyFocusAreas: ['DEXA T-Score & Osteoporosis Prevention', 'Genitourinary Syndrome & Vaginal Atrophy Care', 'ApoB & Post-Menopausal Lipid Management', 'Bioidentical Hormone Therapy (BHRT) Guidance'],
    clinicalProtocols: ['Annual DEXA Bone Density scan (Hip & Lumbar Spine)', 'Transvaginal endometrial thickness monitoring (<4mm)', 'Calcium Citrate Malate + Vitamin D3 + K2 daily protocol'],
    drAryaGuidance: 'Estrogen is cardio-protective. After menopause, LDL and blood pressure rise sharply—early preventative cardiology is critical for women above 45.',
    recommendedTests: [
      { name: 'DEXA Bone Mineral Density Scan (Dual Hip & Spine)', price: 1800, sampleType: 'Radiology', turnaround: 'Same Day' },
      { name: 'Lipid Profile & ApoB Cardiovascular Risk', price: 490, sampleType: 'Blood', turnaround: '6 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ pH 3.5–4.5 Foaming Intimate Wash', price: 299, tag: 'Hydrating Formula' }
    ],
    govtSchemes: ['National Programme for Health Care of the Elderly (NPHCE)'],
    faqs: [
      {
        question: 'Is post-menopausal bleeding ever normal?',
        answer: 'No. Any vaginal bleeding occurring more than 12 months after menopause requires urgent transvaginal ultrasound to evaluate endometrial thickness.'
      }
    ]
  },

  {
    id: 'hormonal-health',
    slug: 'hormonal-health',
    title: 'Hormonal Health',
    category: 'Period & Hormones',
    icon: '🧪',
    tagline: 'Thyroid, cortisol, androgens & estrogen harmony',
    overview: 'The female endocrine web is intricately balanced between the thyroid, adrenal glands, and ovaries. We decode subclinical hypothyroidism, Hashimoto’s antibodies, cortisol-driven adrenal fatigue, and androgen excess.',
    keyFocusAreas: ['Subclinical Hypothyroidism & Anti-TPO Antibodies', 'Adrenal Cortisol & Circadian Rhythm Balance', 'Estrogen Dominance & Liver Detoxification Pathways', 'Prolactin & Pituitary Health'],
    clinicalProtocols: ['Full Thyroid Panel (TSH, Free T3, Free T4, Anti-TPO)', 'Morning Fasting Cortisol and DHEA-S', 'Fasting Insulin & HOMA-IR'],
    drAryaGuidance: 'Over 42% of Indian women with cycle irregularities have underlying autoimmune thyroiditis (Hashimoto\'s). Always check Anti-TPO antibodies alongside TSH.',
    recommendedTests: [
      { name: 'Comprehensive Thyroid & Autoimmune Anti-TPO Panel', price: 850, sampleType: 'Blood', turnaround: '6 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ PCOS Hormonal Balance Sachets', price: 649, tag: 'Insulin Sensitizer' }
    ],
    govtSchemes: ['PMBJP Levothyroxine Sodium Generic Match (₹22 vs ₹180)'],
    faqs: [
      {
        question: 'What is the optimal TSH level for women planning pregnancy?',
        answer: 'The American Thyroid Association and Indian Thyroid Society recommend keeping TSH under 2.5 mIU/L during the pre-conception window and first trimester.'
      }
    ]
  },

  {
    id: 'pelvic-health',
    slug: 'pelvic-health',
    title: 'Pelvic Health',
    category: 'Period & Hormones',
    icon: '🧘‍♀️',
    tagline: 'Pelvic floor physical therapy, prolapse & bladder support',
    overview: 'Pelvic floor dysfunction affects millions of women post-childbirth and during midlife. We deliver specialized Kegel biofeedback, stress urinary incontinence (SUI) care, and pelvic organ prolapse rehabilitation.',
    keyFocusAreas: ['Stress Urinary Incontinence (SUI) Management', 'Pelvic Organ Prolapse (Cystocele / Rectocele) Staging', 'Hypertonic Pelvic Floor & Vaginismus Therapy', 'Postpartum Pelvic Rehabilitation'],
    clinicalProtocols: ['Pelvic floor muscle strength digital palpation (Oxford Scale)', 'Transperineal ultrasound for bladder neck descent', 'Guided pelvic floor physical rehabilitation'],
    drAryaGuidance: 'Leaking urine when coughing, laughing, or jumping is common, but it is never normal. 80% of stress incontinence resolves with targeted pelvic physical therapy.',
    recommendedTests: [
      { name: 'Uroflowmetry & Bladder Residual Scan', price: 800, sampleType: 'Diagnostic', turnaround: 'Same Day' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ 1mm Breathable Cotton Panty Liners', price: 189, tag: 'Leak Protection' }
    ],
    govtSchemes: ['Janani Shishu Suraksha Karyakram (JSSK)'],
    faqs: [
      {
        question: 'Can Kegel exercises worsen hypertonic pelvic floor dysfunction?',
        answer: 'Yes. If pelvic pain or vaginismus is present, the muscles are already overly tight; relaxation techniques (reverse Kegels) and physical therapy are required rather than contraction.'
      }
    ]
  },

  {
    id: 'vaginal-health',
    slug: 'vaginal-health',
    title: 'Vaginal Health',
    category: 'Period & Hormones',
    icon: '🫧',
    tagline: 'Lactobacillus microbiome, pH 3.5–4.5 & infection defense',
    overview: 'The vaginal ecosystem is defended by Döderlein Lactobacilli maintaining an acidic pH (3.5–4.5). We treat recurrent bacterial vaginosis (BV), vulvovaginal candidiasis (yeast), and aerobic vaginitis with clinical precision.',
    keyFocusAreas: ['Recurrent Yeast (Candida) & Bacterial Vaginosis (BV)', 'Vaginal Microbiome Sequencing & Probiotic Defense', 'Post-Antibiotic Dysbiosis Recovery', 'Non-Scented Hypoallergenic Intimate Care'],
    clinicalProtocols: ['Vaginal wet mount & Gram stain for Clue Cells and fungal hyphae', 'Vaginal pH swab testing', 'Targeted oral/vaginal L. crispatus probiotic restoration'],
    drAryaGuidance: 'Never use alkaline soap or douching internally. The vagina is self-cleaning; protect the external vulva with certified pH 3.5–4.5 washes.',
    recommendedTests: [
      { name: 'Vaginal Swab Culture & Antibiotic Sensitivity Panel', price: 650, sampleType: 'Swab', turnaround: '24 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ pH 3.5–4.5 Foaming Intimate Wash', price: 299, tag: 'Dermatologist Tested' },
      { name: 'Meditrust Sakhi™ Biodegradable Soothing Wipes', price: 149, tag: 'On-the-go' }
    ],
    govtSchemes: ['PMBJP Clotrimazole & Fluconazole Generic Match (85% Savings)'],
    faqs: [
      {
        question: 'How do I prevent recurrent yeast infections after antibiotics?',
        answer: 'Broad-spectrum antibiotics kill protective Lactobacilli. Always take oral probiotics containing L. rhamnosus GR-1 and L. reuteri RC-14 during and after antibiotic courses.'
      }
    ]
  },

  {
    id: 'sexual-health',
    slug: 'sexual-health',
    title: 'Sexual Health',
    category: 'Period & Hormones',
    icon: '❤️',
    tagline: 'Libido, dyspareunia relief, STI screening & intimate intimacy',
    overview: 'Judgment-free, confidential clinical care for sexual wellness, hypoactive sexual desire disorder, dyspareunia (painful intercourse), and comprehensive STI screening panels.',
    keyFocusAreas: ['Dyspareunia & Vestibulodynia Evaluation', 'Hypoactive Sexual Desire & Hormonal Root Causes', 'Confidential 10-Panel STI Screening', 'Safe Lubricants & Barrier Protection'],
    clinicalProtocols: ['Hormonal profile (Free Testosterone, SHBG, Estradiol)', 'NAAT PCR STI panel for Chlamydia, Gonorrhea, Trichomonas, HPV', 'Pelvic floor physical relaxation'],
    drAryaGuidance: 'Painful intercourse is a medical symptom with physical solutions—ranging from treating local hormonal dryness to pelvic physical therapy.',
    recommendedTests: [
      { name: 'Complete 10-Panel Confidential STI Screening (PCR Based)', price: 2200, sampleType: 'Blood + Urine', turnaround: '24 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ pH 3.5–4.5 Foaming Intimate Wash', price: 299, tag: 'Gentle Care' }
    ],
    govtSchemes: ['National AIDS Control Organisation (NACO) Anonymous Testing'],
    faqs: [
      {
        question: 'What is the most effective treatment for painful intercourse post-menopause?',
        answer: 'Low-dose local vaginal estrogen cream or hyaluronic acid moisturizers effectively restore mucosal thickness and natural elasticity without systemic risks.'
      }
    ]
  },

  // ── 2. FERTILITY & MATERNITY ──
  {
    id: 'fertility',
    slug: 'fertility',
    title: 'Fertility',
    category: 'Fertility & Maternity',
    icon: '🥚',
    tagline: 'Ovarian reserve, AMH testing & pre-conception optimization',
    overview: 'Proactive fertility planning empowers women to understand their reproductive timeline. We provide high-precision Anti-Müllerian Hormone (AMH) tests, follicular tracking scans, and partner semen analysis.',
    keyFocusAreas: ['Anti-Müllerian Hormone (AMH) & Antral Follicle Count', 'Ovulation Induction & Follicular Scan Tracking', 'Tubal Patency Testing (HSG / HyCoSy)', 'Pre-Conception Nutritional Optimization'],
    clinicalProtocols: ['Day 2–3 Baseline Hormone Profile (AMH, FSH, LH, E2, TSH, Prolactin)', 'Serial transvaginal follicular tracking (Days 10–16)', 'Rubella, Thalassemia trait & Hemoglobin screening'],
    drAryaGuidance: 'AMH tells you about your egg quantity, not egg quality. Even with lower AMH, healthy natural conception occurs with optimized ovulatory cycles.',
    recommendedTests: [
      { name: 'Comprehensive Couple Pre-Conception & AMH Profile', price: 2499, sampleType: 'Blood', turnaround: '8 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ PCOS Hormonal Balance Sachets (Inositol + Folate)', price: 649, tag: 'Pre-Conception' }
    ],
    govtSchemes: ['Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA)'],
    faqs: [
      {
        question: 'When should a couple seek a fertility consultation?',
        answer: 'Couples under 35 should consult after 12 months of timed intercourse; women 35 and older should seek evaluation after 6 months.'
      }
    ]
  },

  {
    id: 'ivf',
    slug: 'ivf',
    title: 'IVF',
    category: 'Fertility & Maternity',
    icon: '🔬',
    tagline: 'In Vitro Fertilization, ICSI & blastocyst transfer concierge',
    overview: 'Navigating assisted reproductive technology requires transparent clinical protocols and emotional support. We connect families to accredited embryology labs across Pune and India with transparent pricing.',
    keyFocusAreas: ['Antagonist & Agonist Stimulation Protocols', 'Intracytoplasmic Sperm Injection (ICSI)', 'Pre-implantation Genetic Testing (PGT-A)', 'Endometrial Receptivity Analysis (ERA)'],
    clinicalProtocols: ['Individualized gonadotropin dosage based on AMH and weight', 'Transvaginal oocyte retrieval (OPU) under IV sedation', 'Single Euploid Blastocyst Transfer (eSET)'],
    drAryaGuidance: 'Single embryo transfer is the modern global standard to prevent risky high-order multiple pregnancies while maintaining high pregnancy rates.',
    recommendedTests: [
      { name: 'Day 2 Serum Estradiol & Baseline Antral Count', price: 650, sampleType: 'Blood + USG', turnaround: 'Same Day' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Organic Spearmint Herbal Tea', price: 349, tag: 'Calming Blend' }
    ],
    govtSchemes: ['ART (Regulation) Act 2021 Registered Fertility Clinics'],
    faqs: [
      {
        question: 'What is the typical timeline for an IVF cycle?',
        answer: 'Ovarian stimulation takes 10–12 days, followed by egg retrieval. Embryo freezing or fresh transfer occurs 5 days later (Blastocyst Stage).'
      }
    ]
  },

  {
    id: 'egg-freezing',
    slug: 'egg-freezing',
    title: 'Egg Freezing',
    category: 'Fertility & Maternity',
    icon: '❄️',
    tagline: 'Oocyte cryopreservation & reproductive freedom',
    overview: 'Social and medical egg freezing allows women to preserve mature oocytes at peak biological vitality. Learn about stimulation protocols, vitrification survival rates, and ideal timing.',
    keyFocusAreas: ['Oocyte Vitrification Technology', 'Ideal Age Window (Ages 27–35)', 'Ovarian Reserve Stimulation Yield', 'Onco-Fertility Preservation'],
    clinicalProtocols: ['AMH and AFC assessment to predict egg yield', '10–12 day controlled ovarian stimulation', 'Flash-freezing (Vitrification) at -196°C in liquid nitrogen'],
    drAryaGuidance: 'Freezing 12 to 15 mature eggs before age 35 provides an 80%+ cumulative chance of at least one live birth in the future.',
    recommendedTests: [
      { name: 'Egg Freezing Candidacy Assessment (AMH + TVS Scan)', price: 1650, sampleType: 'Blood + USG', turnaround: 'Same Day' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ PCOS Hormonal Balance Sachets', price: 649, tag: 'Cellular Support' }
    ],
    govtSchemes: ['National ART Registry of India (NARI)'],
    faqs: [
      {
        question: 'How long can frozen eggs remain safely stored?',
        answer: 'Vitrified eggs can remain safely stored in liquid nitrogen for 10 to 15+ years with zero biological degradation.'
      }
    ]
  },

  {
    id: 'contraception',
    slug: 'contraception',
    title: 'Contraception',
    category: 'Fertility & Maternity',
    icon: '🛡️',
    tagline: 'Hormonal, non-hormonal, IUDs & emergency contraception',
    overview: 'Empowered, judgment-free contraception guidance tailored to your health history. Compare Combined Oral Contraceptives, Copper and Levonorgestrel IUDs (Mirena), implants, and barrier methods.',
    keyFocusAreas: ['Combined Oral Contraceptive Pills (COCP)', 'Hormonal (Mirena/Kyleena) vs Copper-T IUDs', 'Emergency Contraception (Levonorgestrel vs Ulipristal)', 'Postpartum Contraception Protocols'],
    clinicalProtocols: ['Blood pressure and thromboembolism (VTE) risk assessment', 'Pelvic exam and uterine sounding for IUD placement', 'Non-hormonal alternatives for migraine with aura'],
    drAryaGuidance: 'If you experience migraines with visual aura, avoid estrogen-containing combined pills; choose progestin-only pills or a non-hormonal Copper IUD instead.',
    recommendedTests: [
      { name: 'Baseline Coagulation & Liver Function Screening', price: 600, sampleType: 'Blood', turnaround: '6 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Ultra-Soft Rash-Free Pads', price: 199, tag: 'Cycle Care' }
    ],
    govtSchemes: ['National Family Planning Programme (Free Chhaya & Antara Injectables)'],
    faqs: [
      {
        question: 'How soon must emergency contraception pills be taken?',
        answer: 'Levonorgestrel (i-Pill) should be taken within 72 hours of unprotected intercourse, but efficacy is highest (95%) when taken within the first 24 hours.'
      }
    ]
  },

  {
    id: 'pregnancy',
    slug: 'pregnancy',
    title: 'Pregnancy',
    category: 'Fertility & Maternity',
    icon: '🤰',
    tagline: 'Trimester-by-trimester fetal growth & maternal well-being',
    overview: 'From early viability scans at Week 6 to the Double Marker, NT Scan, Level-II Anomaly Scan, and GDM screening at Week 24, Meditrust guides expectant mothers through every milestone.',
    keyFocusAreas: ['Trimester 1–3 Ultrasound & Scan Milestones', 'Gestational Diabetes Mellitus (GDM) Prevention', 'Preeclampsia Screening (Uterine Artery Doppler & PlGF)', 'Fetal Echocardiography & Growth Doppler'],
    clinicalProtocols: ['First Trimester Combined Screening (NT Scan + PAPP-A + free β-hCG)', 'Week 18–20 Target Scan for Fetal Anomaly (TIFFA)', '75g OGTT Gestational Diabetes screening at 24–28 weeks'],
    drAryaGuidance: 'Active fetal kick counts (DFMC) should begin at Week 28. Aim for at least 10 active movements within 2 hours after a warm meal.',
    recommendedTests: [
      { name: 'Double Marker Test (PAPP-A + free β-hCG) with Risk Report', price: 1850, sampleType: 'Blood', turnaround: '24 Hours' },
      { name: '75g Glucose Tolerance Test (OGTT GDM Panel)', price: 350, sampleType: 'Blood', turnaround: '4 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ 360° Leak-Proof Disposable Period Panties', price: 349, tag: 'Maternity Bag' }
    ],
    govtSchemes: ['Pradhan Mantri Matru Vandana Yojana (PMMVY ₹5,000 Cash Benefit)', 'PMSMA 9th of Every Month Free Checkup'],
    faqs: [
      {
        question: 'What are the red flags requiring immediate hospital emergency visit during pregnancy?',
        answer: 'Sudden vaginal bleeding, watery fluid leakage (PPROM), severe persistent headache with blurred vision, sudden facial swelling, or decreased fetal movements.'
      }
    ]
  },

  {
    id: 'maternal-health',
    slug: 'maternal-health',
    title: 'Maternal Health',
    category: 'Fertility & Maternity',
    icon: '🤱',
    tagline: 'High-risk obstetrics, preeclampsia & safe institutional deliveries',
    overview: 'Ensuring zero preventable maternal mortality through institutional delivery access, maternal nutrition, Rh-negative isoimmunization protocols, and proactive blood pressure monitoring.',
    keyFocusAreas: ['High-Risk Pregnancy (HRP) Stratification', 'Rh Incompatibility & Anti-D Immunoglobulin Protocol', 'Severe Anemia in Pregnancy Correction', 'Institutional Delivery Accreditation'],
    clinicalProtocols: ['Indirect Coombs Test (ICT) for Rh-negative mothers at 28 weeks', 'IV Ferric Carboxymaltose infusion for severe anemia (Hb < 8 g/dL)', 'Continuous intrapartum cardiotocography (CTG) monitoring'],
    drAryaGuidance: 'Hemoglobin below 11 g/dL in pregnancy is maternal anemia. Correcting iron deficiency prevents low birth weight and postpartum hemorrhage.',
    recommendedTests: [
      { name: 'Complete Maternal Antenatal Profile (12 Tests)', price: 1499, sampleType: 'Blood + Urine', turnaround: '8 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ New Mother Postpartum Healing Bundle', price: 999, tag: 'Maternity Kit' }
    ],
    govtSchemes: ['Janani Suraksha Yojana (JSY Cash Incentive for Institutional Delivery)'],
    faqs: [
      {
        question: 'When should an Rh-negative pregnant woman receive Anti-D injection?',
        answer: 'At 28 weeks of gestation and within 72 hours of delivery if the newborn is confirmed Rh-positive, as well as after any bleeding episode or amniocentesis.'
      }
    ]
  },

  {
    id: 'postpartum',
    slug: 'postpartum',
    title: 'Postpartum',
    category: 'Fertility & Maternity',
    icon: '💖',
    tagline: 'The Fourth Trimester: Episiotomy healing, lochia & recovery',
    overview: 'The 12 weeks following childbirth (the fourth trimester) require profound physical healing. We guide mothers through postpartum lochia bleeding, C-section wound care, episiotomy recovery, and diastasis recti.',
    keyFocusAreas: ['Lochia Rubra / Serosa / Alba Timeline', 'C-Section Incision & Episiotomy Perineal Hygiene', 'Diastasis Recti Assessment & Core Rehab', 'Postpartum Thyroiditis & Hair Fall Management'],
    clinicalProtocols: ['Pelvic perineal evaluation at 2 and 6 weeks post-delivery', 'Postpartum depression (EPDS) screening score', 'Thyroid TSH check at 3 months post-delivery'],
    drAryaGuidance: 'Postpartum lochia lasts 4 to 6 weeks. Use 360° breathable disposable panties instead of plastic pads to prevent episiotomy wound maceration.',
    recommendedTests: [
      { name: 'Postpartum 6-Week Recovery Profile (Hb, Ferritin, TSH, Vitamin D3)', price: 1100, sampleType: 'Blood', turnaround: '6 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ 360° Leak-Proof Disposable Period Panties', price: 349, tag: 'Lochia Essential' },
      { name: 'Meditrust Sakhi™ New Mother Postpartum Healing Bundle', price: 999, tag: 'Hospital Hamper' }
    ],
    govtSchemes: ['Maternity Benefit Act (26 Weeks Paid Leave in India)'],
    faqs: [
      {
        question: 'How do I care for a C-section incision at home?',
        answer: 'Keep the incision clean and dry, avoid scrubbing with soap, wear loose high-waisted cotton underwear, and watch for redness, drainage, or fever above 100.4°F.'
      }
    ]
  },

  {
    id: 'breastfeeding',
    slug: 'breastfeeding',
    title: 'Breastfeeding',
    category: 'Fertility & Maternity',
    icon: '🍼',
    tagline: 'Lactation counseling, latch optimization & mastitis care',
    overview: 'Evidence-based lactation support covering golden hour initiation, pain-free latching, overcoming engorgement, treating blocked milk ducts and mastitis, and building breast milk supply with Shatavari.',
    keyFocusAreas: ['Pain-Free Latch & Nipple Fissure Healing', 'Treating Blocked Ducts & Acute Mastitis', 'Natural Galactagogues (Shatavari & Fenugreek)', 'Pumping & Returning to Work Strategy'],
    clinicalProtocols: ['LATCH scoring evaluation by certified lactation consultants', 'Warm compress and therapeutic ultrasound for plugged ducts', 'Safe antibiotic regimens compatible with breastfeeding'],
    drAryaGuidance: 'Breastfeeding should not be agonizingly painful. A shallow latch is the #1 cause of cracked nipples; asymmetric latching brings instant relief.',
    recommendedTests: [
      { name: 'Serum Prolactin & Maternal Nutrition Panel', price: 650, sampleType: 'Blood', turnaround: '6 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ New Mother Postpartum Healing Bundle', price: 999, tag: 'Includes Shatavari' }
    ],
    govtSchemes: ['MAA (Mothers\' Absolute Affection) Programme'],
    faqs: [
      {
        question: 'Can I continue breastfeeding if I develop mastitis?',
        answer: 'Yes! Continuing to breastfeed or pump from the affected breast is essential to clear milk stasis and speed up recovery.'
      }
    ]
  },

  {
    id: 'breast-health',
    slug: 'breast-health',
    title: 'Breast Health',
    category: 'Fertility & Maternity',
    icon: '🎀',
    tagline: 'Breast self-exam (BSE), fibroadenoma & mammography',
    overview: 'Proactive breast care protocols including monthly Breast Self-Examinations, evaluating benign fibroadenomas and fibrocystic breast changes, and annual screening mammography for women aged 40+.',
    keyFocusAreas: ['Monthly Breast Self-Exam (BSE) Technique (Day 7–10 of cycle)', 'Benign Fibroadenoma & Fibrocystic Pain Relief', 'Digital Sonomammography & 3D Tomosynthesis', 'BRCA1 & BRCA2 Genetic Risk Profiling'],
    clinicalProtocols: ['Triple assessment: Clinical Exam + Ultrasound/Mammogram + Core Biopsy', 'BI-RADS Classification Score', 'Genetic counseling for family history of breast/ovarian cancer'],
    drAryaGuidance: 'The best time for a monthly breast self-exam is 3 to 5 days after your period ends, when breast tissue is least tender and swollen.',
    recommendedTests: [
      { name: 'Digital Bilateral Sonomammography (Breast Ultrasound)', price: 1600, sampleType: 'Radiology', turnaround: 'Same Day' },
      { name: 'Digital Bilateral Screening Mammogram (Age 40+)', price: 2200, sampleType: 'Radiology', turnaround: 'Same Day' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Ultra-Soft Rash-Free Sanitary Pads', price: 199, tag: 'Safe Care' }
    ],
    govtSchemes: ['National Cancer Control Programme Free Screening Desks'],
    faqs: [
      {
        question: 'Are most breast lumps cancerous?',
        answer: 'No. Over 80% of breast lumps in women under 40 are benign fibroadenomas, cysts, or hormonal fibrocystic changes, but any new lump must be verified clinically.'
      }
    ]
  },

  {
    id: 'reproductive-health',
    slug: 'reproductive-health',
    title: 'Reproductive Health',
    category: 'Fertility & Maternity',
    icon: '🌺',
    tagline: 'Comprehensive anatomy, uterine wellness & reproductive autonomy',
    overview: 'Holistic reproductive health covering the entire pelvic anatomy, uterine fibroids, cervical cancer screening (Pap Smears & HPV DNA), and proactive reproductive rights.',
    keyFocusAreas: ['Cervical Cancer HPV DNA & Liquid Pap Screening', 'Uterine Fibroid (Leiomyoma) Non-Surgical Management', 'Fallopian Tubal Health & Hydrosalpinx Care', 'Reproductive Endocrine Integration'],
    clinicalProtocols: ['Liquid-Based Cytology (LBC) Pap Smear every 3 years', 'High-Risk HPV DNA PCR Co-testing every 5 years', 'Pelvic Doppler ultrasound for uterine vascularity'],
    drAryaGuidance: 'Cervical cancer is almost 100% preventable with the HPV vaccine (given aged 9–26) and routine Pap smear screening.',
    recommendedTests: [
      { name: 'Liquid Based Cytology (LBC) Pap Smear + High-Risk HPV DNA', price: 1850, sampleType: 'Cervical Swab', turnaround: '24 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ pH 3.5–4.5 Foaming Intimate Wash', price: 299, tag: 'Intimate Care' }
    ],
    govtSchemes: ['National HPV Vaccination Drive for Adolescent Girls'],
    faqs: [
      {
        question: 'At what age should women start Pap smear screening?',
        answer: 'Guidelines recommend starting Pap smears at age 21 (or 3 years after becoming sexually active), continuing every 3 years until age 65.'
      }
    ]
  },

  // ── 3. CLINICAL & ONCOLOGY ──
  {
    id: 'ob-gyn',
    slug: 'ob-gyn',
    title: 'OB/GYN',
    category: 'Clinical & Oncology',
    icon: '🩺',
    tagline: 'Consult certified gynaecologists & obstetricians 24/7',
    overview: 'Access top gynaecological surgeons and obstetricians across Pune, PCMC, and India. Book hospital admissions, surgical consultations for laparoscopy, hysterectomy, and fibroid removal.',
    keyFocusAreas: ['24/7 Gynaecologist Tele-Consultations', 'Minimally Invasive Laparoscopic Surgery Concierge', 'Adolescent to Geriatric Gynaecology', 'Second Medical Opinions on Surgeries'],
    clinicalProtocols: ['Standard ICMR and FOGSI clinical guidelines', 'Pre-operative cardiac and anesthetic clearance', 'Post-operative recovery monitoring'],
    drAryaGuidance: 'Always seek a second opinion before undergoing non-emergency hysterectomies; modern medical and laparoscopic alternatives preserve organs effectively.',
    recommendedTests: [
      { name: 'Comprehensive Gynaecology Annual Health Checkup', price: 1999, sampleType: 'Blood + USG + Pap', turnaround: '24 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Teen First Period Starter Box', price: 499, tag: 'Doctor Favorite' }
    ],
    govtSchemes: ['FOGSI Manyata Accredited Maternity Centers'],
    faqs: [
      {
        question: 'Can I consult a gynaecologist on Meditrust via video call?',
        answer: 'Yes! Certified OB-GYNs are available for HD tele-consultations with digital prescriptions valid across all Indian pharmacies.'
      }
    ]
  },

  {
    id: 'maternal-fetal-medicine',
    slug: 'maternal-fetal-medicine',
    title: 'Maternal-Fetal Medicine',
    category: 'Clinical & Oncology',
    icon: '🔬',
    tagline: 'Subspecialty care for complex, twin & high-risk pregnancies',
    overview: 'Maternal-Fetal Medicine (Perinatology) provides advanced diagnostic imaging, genetic amniocentesis, fetal therapy, and intensive surveillance for complicated twin pregnancies and fetal anomalies.',
    keyFocusAreas: ['Monochorionic Twin Transfusion Syndrome (TTTS)', 'Non-Invasive Prenatal Testing (NIPT / Cell-Free DNA)', 'Amniocentesis & Chorionic Villus Sampling (CVS)', 'Fetal Growth Restriction (FGR) Doppler Surveillance'],
    clinicalProtocols: ['NIPT Next-Generation Sequencing for Trisomy 21, 18, 13', 'Uterine and Umbilical Artery Pulsatility Index mapping', 'Middle Cerebral Artery (MCA) peak systolic velocity for fetal anemia'],
    drAryaGuidance: 'NIPT screening from maternal blood at Week 10 provides 99.4% detection for Down Syndrome with zero miscarriage risk.',
    recommendedTests: [
      { name: 'Non-Invasive Prenatal Testing (NIPT / Cell-Free DNA Panel)', price: 14500, sampleType: 'Maternal Blood', turnaround: '5 Days' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ 360° Leak-Proof Period Panties', price: 349, tag: 'High Flow' }
    ],
    govtSchemes: ['PMSMA High-Risk Pregnancy Registry'],
    faqs: [
      {
        question: 'How does NIPT differ from an Amniocentesis?',
        answer: 'NIPT is a safe screening blood test with zero miscarriage risk; Amniocentesis is an invasive diagnostic test that confirms chromosomal karyotypes.'
      }
    ]
  },

  {
    id: 'cancer-gynaecological-oncology',
    slug: 'cancer-gynaecological-oncology',
    title: 'Cancer / Gynaecological Oncology',
    category: 'Clinical & Oncology',
    icon: '🎗️',
    tagline: 'Cervical, ovarian, uterine & breast cancer oncology care',
    overview: 'Dedicated gynaecological oncology navigation for early screening, surgical staging, chemotherapy protocols, and immunotherapy for ovarian, cervical, and endometrial malignancies.',
    keyFocusAreas: ['Ovarian Cancer CA-125 & ROMA Index Staging', 'Cervical Cancer Colposcopy & LEEP / Cone Biopsy', 'Endometrial Carcinoma Pipelle Biopsy', 'Tumor Board Second Opinions & Genetic Profiling'],
    clinicalProtocols: ['ROMA Index (CA-125 + HE4) for post-menopausal pelvic masses', 'PET-CT whole body staging', 'Precision immunotherapy PD-L1 and MSI-High testing'],
    drAryaGuidance: 'Ovarian cancer symptoms are subtle—persistent abdominal bloating, early satiety, and pelvic pressure lasting more than 2 weeks require a pelvic ultrasound.',
    recommendedTests: [
      { name: 'ROMA Ovarian Cancer Risk Profile (CA-125 + HE4)', price: 2800, sampleType: 'Blood', turnaround: '24 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Ultra-Soft Rash-Free Pads', price: 199, tag: 'Hypoallergenic' }
    ],
    govtSchemes: ['Ayushman Bharat PM-JAY Oncology Treatment Cover (₹5 Lakh)'],
    faqs: [
      {
        question: 'Is CA-125 always elevated in ovarian cancer?',
        answer: 'CA-125 is elevated in 80% of advanced ovarian cancers, but can also rise with benign endometriosis or fibroids; the dual HE4 + CA-125 ROMA index is far more specific.'
      }
    ]
  },

  {
    id: 'womens-mental-health',
    slug: 'womens-mental-health',
    title: "Women's Mental Health",
    category: 'Clinical & Oncology',
    icon: '🧠',
    tagline: 'PMDD, postpartum depression, perinatal anxiety & burnout',
    overview: 'Reproductive transitions trigger neurochemical sensitivity to estrogen and progesterone shifts. We provide therapy and psychiatric triage for PMDD, postpartum depression, infertility grief, and menopause anxiety.',
    keyFocusAreas: ['Pre-Menstrual Dysphoric Disorder (PMDD) Triage', 'Postpartum Depression (PPD) & Baby Blues Recovery', 'Infertility Grief & IVF Psychological Resilience', 'Perimenopausal Mood & Anxiety Shifts'],
    clinicalProtocols: ['Edinburgh Postnatal Depression Scale (EPDS) assessment', 'Luteal-phase targeted SSRI / SNRI protocols for severe PMDD', 'Cognitive Behavioral Therapy (CBT) and hormonal alignment'],
    drAryaGuidance: 'PMDD is not regular PMS—it is a severe neuro-endocrine reaction to normal hormonal fluctuations. Medical and therapeutic treatments offer rapid relief.',
    recommendedTests: [
      { name: 'Neuro-Endocrine Thyroid & Vitamin B12/D3 Fatigue Panel', price: 890, sampleType: 'Blood', turnaround: '6 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Organic Spearmint Herbal Tea', price: 349, tag: 'Calming Blend' }
    ],
    govtSchemes: ['Tele-MANAS National Mental Health 24/7 Helpline (14416)'],
    faqs: [
      {
        question: 'How do I know if I have Postpartum Depression vs normal Baby Blues?',
        answer: 'Baby blues resolve within 10–14 days. If sadness, severe anxiety, detachment from baby, or insomnia persist past 2 weeks, consult for postpartum depression.'
      }
    ]
  },

  {
    id: 'womens-diagnostics',
    slug: 'womens-diagnostics',
    title: "Women's Diagnostics",
    category: 'Clinical & Oncology',
    icon: '🩸',
    tagline: '35+ Specialized female blood panels with 60-min home pickup',
    overview: 'Compare prices across 13+ NABL/CAP-accredited diagnostic labs in Pune and across India. 60-minute doorstep blood sample pickup by trained phlebotomists with plain-language AI video explanations.',
    keyFocusAreas: ['Hormone Panels (AMH, LH, FSH, Estradiol, Progesterone)', 'Thyroid & Autoimmune Antibodies', 'Anemia & Ferritin Iron Profiles', 'Cancer Biomarkers & Vitamin Deficiencies'],
    clinicalProtocols: ['Cold-chain sample integrity tracking', 'Automated double-validation by MD Pathologists', 'Instant Dr. Arya AI plain-language translation'],
    drAryaGuidance: 'Always check Serum Ferritin alongside Hemoglobin. Ferritin reveals iron store depletion months before anemia shows up in basic CBC tests.',
    recommendedTests: [
      { name: 'Sakhi Complete 65-Param Female Master Wellness Profile', price: 1499, sampleType: 'Blood + Urine', turnaround: '6 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ PCOS Hormonal Balance Sachets', price: 649, tag: 'Targeted Nutrition' }
    ],
    govtSchemes: ['Free Diagnostics Service Initiative (FDSI)'],
    faqs: [
      {
        question: 'Can phlebotomists collect blood samples at my home in 60 minutes in Pune?',
        answer: 'Yes! Meditrust dispatches certified phlebotomists to Nigdi, PCMC, Baner, Wakad, Hinjewadi, and Pune within 60 minutes.'
      }
    ]
  },

  {
    id: 'womens-medical-devices',
    slug: 'womens-medical-devices',
    title: "Women's Medical Devices",
    category: 'Clinical & Oncology',
    icon: '📟',
    tagline: 'Smart breast screening, fetal dopplers & pelvic trainers',
    overview: 'Next-generation medical devices designed specifically for female physiology—including radiation-free thermal breast imaging, wireless home fetal dopplers, and biofeedback pelvic wands.',
    keyFocusAreas: ['Radiation-Free Thermal Breast Scanners', 'At-Home Fetal Heart Rate Dopplers', 'Biofeedback Pelvic Floor Exercisers', 'Continuous Basal Body Temperature Sensors'],
    clinicalProtocols: ['US-FDA and CDSCO medical device safety certifications', 'Biocompatible medical-grade silicone contact surfaces', 'Encrypted Bluetooth telemetry to Meditrust App'],
    drAryaGuidance: 'Medical-grade devices empower proactive home monitoring while keeping your gynaecologist connected via real-time telemetry.',
    recommendedTests: [
      { name: 'Thermal Breast Scan at Partner Center', price: 1200, sampleType: 'Diagnostic', turnaround: 'Same Day' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Platinum Medical Silicone Menstrual Cup', price: 399, tag: 'Biocompatible' }
    ],
    govtSchemes: ['Make in India Medical Devices Mission'],
    faqs: [
      {
        question: 'Are thermal breast screening devices safe during pregnancy?',
        answer: 'Yes. Thermal screening uses infrared light with zero radiation, making it 100% safe for pregnant and lactating women.'
      }
    ]
  },

  {
    id: 'womens-digital-therapeutics',
    slug: 'womens-digital-therapeutics',
    title: "Women's Digital Therapeutics",
    category: 'Clinical & Oncology',
    icon: '📱',
    tagline: 'Evidence-based software therapies for PCOS, PMDD & chronic pelvic pain',
    overview: 'Clinically validated digital therapeutics (DTx) that deliver personalized lifestyle modifications, cognitive behavioral protocols, and glycemic biofeedback to reverse chronic conditions.',
    keyFocusAreas: ['Digital PCOS Reversal Programs', 'CBT-I for Menopausal Insomnia', 'Vaginismus Digital Desensitization', 'Gestational Glycemic Coaching'],
    clinicalProtocols: ['Personalized low-glycemic meal response tracking', 'Daily compliance logging with WhatsApp nudges', 'Monthly biomarker outcome tracking'],
    drAryaGuidance: 'Digital therapeutics combine medical algorithms with behavioral psychology, delivering 3x higher lifestyle adherence than paper diet charts.',
    recommendedTests: [
      { name: 'Continuous Glucose Monitoring (CGM 14-Day Sensor)', price: 3400, sampleType: 'Wearable Sensor', turnaround: 'Immediate' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Total PCOS & Acne Care Box', price: 1299, tag: 'Integrated Kit' }
    ],
    govtSchemes: ['Ayushman Bharat Digital Mission (ABDM) Integration'],
    faqs: [
      {
        question: 'What is a Digital Therapeutic (DTx)?',
        answer: 'DTx is evidence-based software delivering medical interventions to treat, manage, or prevent medical disorders.'
      }
    ]
  },

  {
    id: 'womens-primary-care',
    slug: 'womens-primary-care',
    title: "Women's Primary Care",
    category: 'Clinical & Oncology',
    icon: '🏥',
    tagline: 'Whole-body female preventive medicine, heart & bone vitality',
    overview: 'Primary care designed around female biology. We integrate annual wellness exams, preventive cardiology (ApoB & hs-CRP), diabetes reversal, bone density, and cancer screening in a single visit.',
    keyFocusAreas: ['Annual Comprehensive Female Physicals', 'Preventive Cardiology for Women', 'Thyroid & Metabolic Syndrome Reversal', 'Osteoporosis & Frailty Prevention'],
    clinicalProtocols: ['Framingham cardiovascular risk scoring adapted for female menopause', 'Annual fasting metabolic profile', 'Immunization updates (HPV, Tdap, Rubella)'],
    drAryaGuidance: 'Heart disease is the #1 killer of women worldwide, and female heart attack symptoms (nausea, jaw pain, fatigue) differ significantly from male symptoms.',
    recommendedTests: [
      { name: 'Annual Women\'s Executive Health Checkup (72 Parameters)', price: 2199, sampleType: 'Blood + Urine + ECG', turnaround: 'Same Day' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Ultra-Soft Rash-Free Sanitary Pads', price: 199, tag: 'Daily Care' }
    ],
    govtSchemes: ['Ayushman Arogya Mandir (Health and Wellness Centers)'],
    faqs: [
      {
        question: 'How often should women get a comprehensive preventive health checkup?',
        answer: 'Women aged 20–39 should get screened every 2 years; women aged 40 and older should complete an annual health checkup.'
      }
    ]
  },

  // ── 4. FEMTECH & WELLNESS ──
  {
    id: 'femtech-wearables',
    slug: 'femtech-wearables',
    title: 'FemTech Wearables',
    category: 'FemTech & Wellness',
    icon: '⌚',
    tagline: 'Smart rings, continuous skin temp & cycle tracking biometrics',
    overview: 'Integrating smart rings, basal body temperature sensors, and continuous glucose monitors into Meditrust AI to predict ovulation, sleep stages, and metabolic health passively.',
    keyFocusAreas: ['Skin Temperature & Ovulation Prediction', 'Heart Rate Variability (HRV) Stress Index', 'Continuous Glucose Monitors (CGM) for PCOS', 'Sleep Architecture & Luteal Recovery'],
    clinicalProtocols: ['Passive overnight basal temperature shifts (>0.3°C confirms ovulation)', 'Continuous 24/7 HRV telemetry', 'Real-time sync to MediVault™ records'],
    drAryaGuidance: 'Smart wearables detect the 0.3°C basal temperature rise that occurs 24 hours after ovulation, helping identify your true fertile window automatically.',
    recommendedTests: [
      { name: '14-Day CGM Sensor with AI Metabolic Coaching', price: 3400, sampleType: 'Wearable', turnaround: 'Same Day' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ 1mm Breathable Cotton Panty Liners', price: 189, tag: 'Ovulation Liners' }
    ],
    govtSchemes: ['ABDM Personal Health Record (PHR) App Sync'],
    faqs: [
      {
        question: 'Can smart rings replace ovulation urine test strips?',
        answer: 'Smart rings detect temperature shifts after ovulation has occurred; pairing them with LH urine strips provides complete pre- and post-ovulation certainty.'
      }
    ]
  },

  {
    id: 'womens-nutrition',
    slug: 'womens-nutrition',
    title: "Women's Nutrition",
    category: 'FemTech & Wellness',
    icon: '🥗',
    tagline: 'Hormone-balancing Indian diets, seed cycling & micronutrients',
    overview: 'Evidence-based clinical nutrition tailored to Indian dietary patterns. Master seed cycling, blood sugar balancing with protein-rich lentils, thyroid-supportive selenium, and iron absorption hacks.',
    keyFocusAreas: ['Low-Glycemic Index (GI) Indian Meal Plans for PCOS', 'Seed Cycling Protocol (Flax, Pumpkin, Sesame, Sunflower)', 'Non-Heme Iron Absorption Optimization with Vitamin C', 'Anti-Inflammatory Mediterranean-Indian Fusion'],
    clinicalProtocols: ['Fasting insulin optimization (<8 µIU/mL)', 'Daily 1.2g/kg body weight protein target', 'Targeted Omega-3 (EPA/DHA) and Magnesium Glycinate supplementation'],
    drAryaGuidance: 'Never drink tea or coffee with iron-rich meals. Tannins inhibit iron absorption by up to 60%; pair your meals with lemon water (Vitamin C) instead.',
    recommendedTests: [
      { name: 'Micronutrient & Vitamin Deficiency Profile (B12, D3, Zinc, Ferritin, Magnesium)', price: 1350, sampleType: 'Blood', turnaround: '8 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Organic Spearmint + Shatavari Tea', price: 349, tag: 'Herbal Nutrition' },
      { name: 'Meditrust Sakhi™ PCOS Hormonal Balance Sachets', price: 649, tag: '40:1 Inositol' }
    ],
    govtSchemes: ['POSHAN Abhiyaan (National Nutrition Mission)'],
    faqs: [
      {
        question: 'What is seed cycling for hormonal balance?',
        answer: 'Seed cycling involves consuming pumpkin and flax seeds during the follicular phase (Days 1–14) for estrogen balance, and sesame and sunflower seeds during the luteal phase (Days 15–28) for progesterone support.'
      }
    ]
  },

  {
    id: 'womens-wellness',
    slug: 'womens-wellness',
    title: "Women's Wellness",
    category: 'FemTech & Wellness',
    icon: '✨',
    tagline: 'Holistic self-care, sleep architecture & restorative vitality',
    overview: 'Harmonizing mental calmness, hormonal sleep health, circadian alignment, and non-toxic daily living for women across every phase of life.',
    keyFocusAreas: ['Circadian Sleep Optimization', 'Cortisol De-stress & Breathwork Protocols', 'Toxin-Free Household & Personal Care', 'Midlife Energy & Vitality Longevity'],
    clinicalProtocols: ['Blue-light filtering and sleep hygiene checklists', 'Magnesium Glycinate nighttime supplementation', 'Daily active movement and resistance training'],
    drAryaGuidance: 'Deep restorative sleep is when your pituitary gland pulses Growth Hormone and normalizes cortisol. Prioritize 7 to 8 hours of sleep for glowing skin and hormone balance.',
    recommendedTests: [
      { name: 'Stress, Sleep & Cortisol Biomarker Profile', price: 950, sampleType: 'Blood', turnaround: '6 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Teen First Period Starter Box', price: 499, tag: 'Wellness Gift' },
      { name: 'Meditrust Sakhi™ Total PCOS & Acne Care Box', price: 1299, tag: '30-Day Regimen' }
    ],
    govtSchemes: ['Fit India Movement & Ayushman Bharat Wellness Programs'],
    faqs: [
      {
        question: 'How do endocrine disrupting chemicals (EDCs) affect hormones?',
        answer: 'Synthetic fragrances, phthalates, and parabens in conventional plastics mimic estrogen in the body. Switching to certified toxin-free products protects hormonal homeostasis.'
      }
    ]
  },

  // ── 5. ECOSYSTEM & ENTERPRISE ──
  {
    id: 'womens-healthcare-marketplace',
    slug: 'womens-healthcare-marketplace',
    title: "Women's Healthcare Marketplace",
    category: 'Ecosystem & Enterprise',
    icon: '🛍️',
    tagline: 'Curated, 100% white-labeled Meditrust Sakhi™ period & skincare store',
    overview: 'India’s dedicated marketplace for safe, toxic-free sanitary pads, self-heating cramp patches, 360° period panties, pH-balanced intimate washes, and 40:1 Inositol PCOS wellness kits.',
    keyFocusAreas: ['100% Rash-Free & Toxin-Free Period Care', '80% Jan Aushadhi Generic Savings Match', 'Auto-Replenish Subscriptions (20% Off)', '1-Click Express WhatsApp Ordering'],
    clinicalProtocols: ['Dermatest Germany certified hypoallergenic formulations', 'US-FDA compliant medical-grade silicone', 'Eco-friendly biodegradable plant cellulose wrappers'],
    drAryaGuidance: 'Every product on our marketplace is vetted by our clinical AI and gynaecological council to eliminate harmful chlorine bleaches and artificial perfumes.',
    recommendedTests: [
      { name: 'Free Online Dr. Arya Product Recommendation Triage', price: 0, sampleType: 'AI Chat', turnaround: 'Instant' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Ultra-Soft Rash-Free Sanitary Pads', price: 199, tag: 'Hero Product' },
      { name: 'Meditrust Sakhi™ Cramp Comfort Heat Patches', price: 249, tag: 'Pain Relief' },
      { name: 'Meditrust Sakhi™ Total PCOS & Acne Care Box', price: 1299, tag: 'Complete Box' }
    ],
    govtSchemes: ['PMBJP Jan Aushadhi Suvidha Partner Desk'],
    faqs: [
      {
        question: 'How fast is express delivery from the marketplace?',
        answer: 'We deliver within 24 to 48 hours across Pune, PCMC, Mumbai, Bangalore, Hyderabad, Delhi NCR, and nationwide.'
      }
    ]
  },

  {
    id: 'womens-health-ai',
    slug: 'womens-health-ai',
    title: "Women's Health AI",
    category: 'Ecosystem & Enterprise',
    icon: '🤖',
    tagline: 'Dr. Arya Multilingual Clinical AI Doctor Council (24/7)',
    overview: 'India’s first multi-agent clinical AI system specialized in female healthcare. Dr. Arya and her 9-specialist clinical council provide real-time triage in Marathi, Hindi, and English across WhatsApp and Telegram.',
    keyFocusAreas: ['9-Specialist Clinical Council Routing', 'Multilingual Triage (मराठी, हिन्दी, English, Hinglish)', 'Instant Blood Report & OCR Explanation', 'Emergency Red-Flag 108/181 Routing'],
    clinicalProtocols: ['WHO and ICMR clinical safety guardrails', 'Real-time session memory across life stages', 'End-to-end HIPAA 256-bit encrypted data pipelines'],
    drAryaGuidance: 'Healthcare advice must be accessible in your native language without medical jargon. Ask any question anytime on WhatsApp or Telegram.',
    recommendedTests: [
      { name: 'AI Blood Report Scanner & Video Explainer', price: 0, sampleType: 'Upload PDF/Photo', turnaround: '10 Seconds' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Teen First Period Starter Box', price: 499, tag: 'AI Backed' }
    ],
    govtSchemes: ['National Health Authority (NHA) ABDM Sandbox Verified'],
    faqs: [
      {
        question: 'Is Dr. Arya AI available for free on WhatsApp?',
        answer: 'Yes! You can chat with Dr. Arya 24/7 directly by messaging +91 7028025717 on WhatsApp or @MeditrustAiAryaBot on Telegram.'
      }
    ]
  },

  {
    id: 'employer-womens-health-benefits',
    slug: 'employer-womens-health-benefits',
    title: "Employer Women's Health Benefits",
    category: 'Ecosystem & Enterprise',
    icon: '🏢',
    tagline: 'Pan-India corporate wellness, period care & maternity retention',
    overview: 'Comprehensive corporate healthcare benefit programs for forward-thinking employers. Bridge care gaps, reduce female talent attrition, and provide sponsored period care and OB-GYN access.',
    keyFocusAreas: ['Corporate Health Wallet (₹2,500/employee credit)', 'Maternity Return-to-Work Retention Programs', 'Enterprise Period Care & Product Subsidies', 'CHRO Health Dashboard & ROI Metrics'],
    clinicalProtocols: ['Corporate HRMS Single Sign-On (SSO) integration', 'Zero out-of-pocket employee checkout', 'Quarterly anonymized aggregate wellness analytics'],
    drAryaGuidance: '92% of working women feel healthcare programs overlook female-specific needs. Corporate female benefits yield a 4.2x measurable ROI in employee retention.',
    recommendedTests: [
      { name: 'Corporate On-Site / Doorstep Employee Health Camp', price: 799, sampleType: 'Corporate Panel', turnaround: '24 Hours' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Workplace Restroom Care Dispenser Box', price: 1999, tag: 'Office Hygiene' }
    ],
    govtSchemes: ['Maternity Benefit Amendment Act 2017 Compliance'],
    faqs: [
      {
        question: 'How can an employer onboard Meditrust corporate benefits?',
        answer: 'HR leaders can book a customized corporate wellness demo at /corporate-wellness or call +91 7028025717.'
      }
    ]
  },

  {
    id: 'womens-health-insurance',
    slug: 'womens-health-insurance',
    title: "Women's Health Insurance",
    category: 'Ecosystem & Enterprise',
    icon: '📑',
    tagline: 'Maternity cashless cover, IVF riders & PM-JAY navigation',
    overview: 'Demystifying female health insurance policies. Compare maternity waiting periods (9 months vs 2 years), IVF riders, OPD gynaecology coverage, and Ayushman Bharat PM-JAY ₹5 Lakh cashless hospital admission.',
    keyFocusAreas: ['Maternity Waiting Period Optimization', 'OPD & Diagnostics Insurance Cashless Riders', 'Ayushman Bharat PM-JAY ₹5 Lakh Coverage Desk', 'PCOS & Infertility Policy Disclosures'],
    clinicalProtocols: ['Pre-existing condition (PED) disclosure checklists', 'Hospital TPA pre-authorization concierge at Ruby Hall / Sahyadri', 'Zero-deductible newborn cover inclusion'],
    drAryaGuidance: 'Always verify newborn day-1 health coverage in your maternity policy to ensure premature NICU care is 100% cashless.',
    recommendedTests: [
      { name: 'Pre-Insurance Medical Health Checkup', price: 999, sampleType: 'Blood + ECG', turnaround: 'Same Day' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Ultra-Soft Rash-Free Sanitary Pads', price: 199, tag: 'Essentials' }
    ],
    govtSchemes: ['Ayushman Bharat PM-JAY (₹5 Lakh / Family Cover)'],
    faqs: [
      {
        question: 'Does PM-JAY cover normal delivery and C-section in private hospitals?',
        answer: 'Yes! PM-JAY provides 100% cashless delivery, C-section, and neonatal intensive care across all empanelled private and public hospitals in India.'
      }
    ]
  },

  {
    id: 'womens-healthcare-data',
    slug: 'womens-healthcare-data',
    title: "Women's Healthcare Data",
    category: 'Ecosystem & Enterprise',
    icon: '📊',
    tagline: 'National epidemiological research, NFHS-5 analytics & 2026–30 report',
    overview: 'Deep data intelligence on female morbidity, maternal mortality ratio (MMR), anemia prevalence (57%), and Jan Aushadhi generic price disparities across 28 Indian states.',
    keyFocusAreas: ['National Family Health Survey (NFHS-5) Insights', 'Generic vs Branded Medicine Price Gap Analytics', 'District-Level Anemia & Stunting Mapping', 'National Women\'s Health Report (2026–2030)'],
    clinicalProtocols: ['Anonymized aggregate health epidemiological modeling', 'ABDM Fast Healthcare Interoperability Resources (FHIR) standards', 'Peer-reviewed clinical publication datasets'],
    drAryaGuidance: 'Over 57% of Indian women between 15 and 49 are clinically anemic. Data-driven micro-nutrition interventions are vital for national health.',
    recommendedTests: [
      { name: 'Download National Women\'s Health in India 2026–2030 Report', price: 0, sampleType: 'Digital PDF', turnaround: 'Instant' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Ultra-Soft Rash-Free Sanitary Pads', price: 199, tag: 'Data Backed' }
    ],
    govtSchemes: ['Health Management Information System (HMIS) India'],
    faqs: [
      {
        question: 'Where can I read the full Meditrust National Women\'s Health Report?',
        answer: 'The complete 2026–2030 report is available for free download at /reports/womens-health-india-2026.'
      }
    ]
  },

  {
    id: 'womens-health-consumer-products',
    slug: 'womens-health-consumer-products',
    title: "Women's Health Consumer Products",
    category: 'Ecosystem & Enterprise',
    icon: '🧴',
    tagline: 'Non-toxic, safe & gynecologist-certified FMCG wellness',
    overview: 'Advocating for clean, transparent ingredient standards in women’s consumer products. From 100% chlorine-free sanitary pads to biocompatible silicone cups and phthalate-free intimate washes.',
    keyFocusAreas: ['100% Chlorine & Dioxin-Free Period Products', 'Paraben-Free & Phthalate-Free Formulations', 'Biodegradable Plant-Based Viscose Wipes', 'Non-Comedogenic Hormonal Skincare'],
    clinicalProtocols: ['Dermatological irritation patch testing (Dermatest GmbH)', 'Biodegradability and composability certifications', 'Safe pH 3.5 to 4.5 preservation systems'],
    drAryaGuidance: 'What touches your vulvar skin enters your bloodstream within minutes. Choose certified toxin-free products for lifelong peace of mind.',
    recommendedTests: [
      { name: 'Skin Sensitivity & Allergy Patch Consultation', price: 0, sampleType: 'AI Chat', turnaround: 'Instant' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Ultra-Soft Rash-Free Sanitary Pads', price: 199, tag: '100% Toxin-Free' },
      { name: 'Meditrust Sakhi™ pH 3.5–4.5 Foaming Intimate Wash', price: 299, tag: 'Clean Beauty' }
    ],
    govtSchemes: ['Bureau of Indian Standards (BIS) Sanitary Napkin Guidelines'],
    faqs: [
      {
        question: 'Why are synthetic fragrances harmful in sanitary pads?',
        answer: 'Synthetic fragrances contain phthalates and allergens that disrupt delicate vulvar mucosal lipids, causing contact dermatitis, burning, and pH disruption.'
      }
    ]
  },

  {
    id: 'womens-health-infrastructure',
    slug: 'womens-health-infrastructure',
    title: "Women's Health Infrastructure",
    category: 'Ecosystem & Enterprise',
    icon: '🏗️',
    tagline: 'Empanelling clinics, cold-chain phlebotomy & hospital admission desks',
    overview: 'Building the physical and digital healthcare infrastructure for women across tier-1, tier-2, and tier-3 India. Connecting 13+ diagnostic labs, 10,000+ PMBJP generic Kendras, and hospital concierge desks.',
    keyFocusAreas: ['60-Minute Phlebotomy Cold-Chain Logistics', '10,000+ Jan Aushadhi Kendra Integration', 'VIP Admission Desks at Ruby Hall & Sahyadri Hospitals', 'Clinic Digitization & ABDM EMR Onboarding'],
    clinicalProtocols: ['ISO 15189 and NABL cold-chain sample verification', 'ABDM Health Facility Registry (HFR) integration', '24/7 dedicated emergency ambulance and bed allocation'],
    drAryaGuidance: 'Healthcare is only as good as its physical last-mile delivery. We ensure sample accuracy, generic medicine availability, and immediate hospital beds when you need them most.',
    recommendedTests: [
      { name: '60-Minute Doorstep Blood Collection (Pune & PCMC)', price: 0, sampleType: 'Home Visit', turnaround: '60 Mins' }
    ],
    recommendedProducts: [
      { name: 'Meditrust Sakhi™ Total PCOS & Acne Care Box', price: 1299, tag: 'Pan-India Express' }
    ],
    govtSchemes: ['PM-Ayushman Bharat Health Infrastructure Mission (PM-ABHIM)'],
    faqs: [
      {
        question: 'How do clinics and diagnostic labs partner with Meditrust AI?',
        answer: 'Doctors, diagnostic centers, and hospital administrators can register instantly at /for-doctors or call the hospital concierge hotline at +91 7028025717.'
      }
    ]
  }
]
