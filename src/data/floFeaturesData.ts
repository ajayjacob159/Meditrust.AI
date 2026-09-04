export interface SymptomCategory {
  category: string
  icon: string
  symptoms: {
    id: string
    name: string
    icon: string
    clinicalInsight: string
  }[]
}

export const FLO_70_SYMPTOMS_LIST: SymptomCategory[] = [
  {
    category: 'Menstrual Flow & Bleeding',
    icon: '🩸',
    symptoms: [
      { id: 'flow_spotting', name: 'Light Spotting', icon: '💧', clinicalInsight: 'Common during ovulation or early pregnancy implantation.' },
      { id: 'flow_medium', name: 'Medium Flow', icon: '🩸', clinicalInsight: 'Typical day 2-3 flow; change pad every 4-6 hours.' },
      { id: 'flow_heavy', name: 'Heavy Flow / Clots', icon: '🔴', clinicalInsight: 'Flow >80mL or clots >2.5cm may indicate fibroids or adenomyosis.' },
      { id: 'flow_brown', name: 'Brown / Old Blood', icon: '🤎', clinicalInsight: 'Oxidized blood typical at the start or end of your period.' }
    ]
  },
  {
    category: 'Pain & Physical Sensations',
    icon: '⚡',
    symptoms: [
      { id: 'pain_cramps', name: 'Period Cramps (Dysmenorrhea)', icon: '😣', clinicalInsight: 'Caused by uterine prostaglandins. Relieved by 40°C thermal heat patches.' },
      { id: 'pain_ovulation', name: 'Ovulation Twinge (Mittelschmerz)', icon: '🌸', clinicalInsight: 'Mid-cycle 1-sided twinge indicating dominant follicle rupture.' },
      { id: 'pain_headache', name: 'Hormonal Migraine', icon: '🤕', clinicalInsight: 'Triggered by estrogen drop right before bleeding.' },
      { id: 'pain_breasts', name: 'Breast Tenderness', icon: '🍈', clinicalInsight: 'Progesterone-induced swelling during the luteal phase.' },
      { id: 'pain_back', name: 'Lower Back Aches', icon: '🦴', clinicalInsight: 'Radiating pain from pelvic nerve pathways.' }
    ]
  },
  {
    category: 'Cervical Mucus & Vaginal Flora',
    icon: '🫧',
    symptoms: [
      { id: 'discharge_eggwhite', name: 'Egg-White (Stretchy / Fertile)', icon: '🥚', clinicalInsight: 'Peak fertility biomarker! High estrogen creates sperm-friendly mucus.' },
      { id: 'discharge_creamy', name: 'Creamy / Lotion-Like', icon: '🧴', clinicalInsight: 'Post-ovulatory or early follicular normal non-fertile discharge.' },
      { id: 'discharge_sticky', name: 'Sticky / Thick', icon: '🍯', clinicalInsight: 'Progesterone dominant phase; creates cervical barrier to sperm.' },
      { id: 'discharge_dry', name: 'Dry / None', icon: '🏜️', clinicalInsight: 'Low hormone baseline immediately after period ends.' },
      { id: 'discharge_itchy', name: 'Itching / Cottage Cheese', icon: '⚠️', clinicalInsight: 'Possible Candida yeast imbalance or altered vaginal pH.' }
    ]
  },
  {
    category: 'Mood, Energy & Sleep',
    icon: '🧠',
    symptoms: [
      { id: 'mood_euphoric', name: 'High Energy & Confident', icon: '⚡', clinicalInsight: 'Estrogen peak in late follicular phase boosts dopamine & serotonin.' },
      { id: 'mood_anxious', name: 'Anxiety & Irritability', icon: '😤', clinicalInsight: 'Late luteal progesterone plunge impacting GABA receptors.' },
      { id: 'mood_fog', name: 'Brain Fog / Fatigue', icon: '🌫️', clinicalInsight: 'Metabolic shifts before menstruation; magnesium & hydration help.' },
      { id: 'mood_insomnia', name: 'Insomnia / Vivid Dreams', icon: '🌙', clinicalInsight: 'Elevated basal body temperature disrupts deep REM cycles.' }
    ]
  },
  {
    category: 'Skin, Hair & Digestion',
    icon: '✨',
    symptoms: [
      { id: 'skin_glowing', name: 'Glowing & Clear Skin', icon: '✨', clinicalInsight: 'High estradiol stimulates hyaluronic acid & collagen.' },
      { id: 'skin_acne', name: 'Hormonal Chin / Jawline Acne', icon: '🔴', clinicalInsight: 'Progesterone & androgens increase sebaceous sebum thickness.' },
      { id: 'gut_bloating', name: 'Water Retention & Bloating', icon: '🎈', clinicalInsight: 'Aldosterone and progesterone shift fluid balance.' },
      { id: 'gut_cravings', name: 'Sugar / Carb Cravings', icon: '🍫', clinicalInsight: 'Body burns 100-300 extra calories during luteal phase.' }
    ]
  }
]

export interface PregnancyWeekData {
  week: number
  trimester: 1 | 2 | 3
  fruitSize: string
  fruitEmoji: string
  babyLengthCm: number
  babyWeightGrams: number
  fetalMilestone: string
  momSymptoms: string[]
  mandatoryScans: string[]
  sakhiRecommendation: string
}

export const FLO_40_WEEKS_PREGNANCY: PregnancyWeekData[] = [
  {
    week: 4,
    trimester: 1,
    fruitSize: 'Poppy Seed',
    fruitEmoji: '🌱',
    babyLengthCm: 0.1,
    babyWeightGrams: 0.04,
    fetalMilestone: 'Blastocyst implants into the uterine lining. The amniotic sac and placenta begin forming.',
    momSymptoms: ['Missed period', 'Mild implantation spotting', 'Heightened sense of smell', 'Fatigue'],
    mandatoryScans: ['Urine Pregnancy Test (UPT)', 'Serum Beta-hCG Blood Test', 'Thyroid TSH (target <2.5)'],
    sakhiRecommendation: 'Jan Aushadhi Folic Acid 5mg daily to prevent neural tube defects.'
  },
  {
    week: 8,
    trimester: 1,
    fruitSize: 'Raspberry',
    fruitEmoji: '🫐',
    babyLengthCm: 1.6,
    babyWeightGrams: 1.0,
    fetalMilestone: 'Baby’s heart beats at ~150-170 BPM. Tiny webbed fingers and facial features start developing.',
    momSymptoms: ['Morning sickness & nausea', 'Frequent urination', 'Breast tenderness', 'Food aversions'],
    mandatoryScans: ['First Viability Ultrasound (dating scan & heartbeat check)'],
    sakhiRecommendation: 'Gentle ginger-infused tea + Vitamin B6 (Pyridoxine) for morning sickness.'
  },
  {
    week: 12,
    trimester: 1,
    fruitSize: 'Lime',
    fruitEmoji: '🍋',
    babyLengthCm: 5.4,
    babyWeightGrams: 14.0,
    fetalMilestone: 'All vital organs, kidneys, and reflexes are formed. Baby begins practicing breathing movements.',
    momSymptoms: ['Reduced morning sickness', 'End of 1st trimester milestone', 'Skin pigment changes (Melasma)'],
    mandatoryScans: ['Nuchal Translucency (NT) Scan', 'Dual Marker Blood Test (PAPP-A + Free Beta-hCG)'],
    sakhiRecommendation: 'Mineral SPF sunscreen & mild foaming face wash for pregnancy melasma.'
  },
  {
    week: 16,
    trimester: 2,
    fruitSize: 'Avocado',
    fruitEmoji: '🥑',
    babyLengthCm: 11.6,
    babyWeightGrams: 100.0,
    fetalMilestone: 'Baby can make facial expressions and hear muffled sounds from the mother’s bloodstream and voice.',
    momSymptoms: ['Baby bump begins showing', 'Increased appetite', 'Round ligament stretching aches'],
    mandatoryScans: ['Quadruple Marker Blood Test (if Dual Marker was missed)'],
    sakhiRecommendation: 'Calcium Citrate + Vitamin D3 for fetal bone mineralization.'
  },
  {
    week: 20,
    trimester: 2,
    fruitSize: 'Banana / Mango',
    fruitEmoji: '🥭',
    babyLengthCm: 25.6,
    babyWeightGrams: 300.0,
    fetalMilestone: 'Halfway point! Baby is covered in protective vernix caseosa. You can feel distinct baby flutter kicks (quickening).',
    momSymptoms: ['First flutter kicks', 'Mild leg cramps', 'Heartburn / acid reflux'],
    mandatoryScans: ['TIFFA Level-2 Comprehensive Anomaly Scan', 'Fetal Echocardiography (if indicated)'],
    sakhiRecommendation: 'DHA Omega-3 algae capsules for fetal brain & retinal development.'
  },
  {
    week: 24,
    trimester: 2,
    fruitSize: 'Corn on the Cob',
    fruitEmoji: '🌽',
    babyLengthCm: 30.0,
    babyWeightGrams: 600.0,
    fetalMilestone: 'Baby’s inner ear is fully formed (senses balance and gravity). Lungs develop surfactant branches.',
    momSymptoms: ['Gestational diabetes risk window', 'Swollen ankles', 'Carpal tunnel wrist stiffness'],
    mandatoryScans: ['Oral Glucose Tolerance Test (OGTT 75g)', 'Complete Blood Count (CBC) for Anemia'],
    sakhiRecommendation: 'Chelated Iron (Ferrous Ascorbate) to keep Hemoglobin >11.0 g/dL.'
  },
  {
    week: 28,
    trimester: 3,
    fruitSize: 'Eggplant',
    fruitEmoji: '🍆',
    babyLengthCm: 37.6,
    babyWeightGrams: 1000.0,
    fetalMilestone: 'Welcome to the 3rd Trimester! Baby can open their eyes and blink. Rapid brain synapse growth.',
    momSymptoms: ['Shortness of breath as uterus expands', 'Braxton Hicks practice contractions', 'Backache'],
    mandatoryScans: ['Anti-D Injection (if mother is Rh-Negative)', 'Third Trimester Growth Scan'],
    sakhiRecommendation: 'Maternity sleep support pillow & gentle pelvic floor stretches.'
  },
  {
    week: 32,
    trimester: 3,
    fruitSize: 'Coconut',
    fruitEmoji: '🥥',
    babyLengthCm: 42.4,
    babyWeightGrams: 1700.0,
    fetalMilestone: 'Baby is practicing swallowing and breathing. Bones are hardening, though skull plates remain pliable for birth.',
    momSymptoms: ['Frequent bathroom trips', 'Nesting instinct', 'Pelvic pressure'],
    mandatoryScans: ['Fetal Growth & Color Doppler Ultrasound Scan (Uterine & Umbilical artery blood flow)'],
    sakhiRecommendation: 'Perineal massage oil to prepare tissues for vaginal birth.'
  },
  {
    week: 36,
    trimester: 3,
    fruitSize: 'Papaya',
    fruitEmoji: '🍈',
    babyLengthCm: 47.4,
    babyWeightGrams: 2600.0,
    fetalMilestone: 'Baby drops lower into the pelvis (lightening). Lungs are almost fully mature and ready for outside air.',
    momSymptoms: ['Pelvic heaviness', 'Difficulty sleeping', 'Frequent Braxton Hicks contractions'],
    mandatoryScans: ['Group B Streptococcus (GBS) Vaginal Swab', 'Non-Stress Test (NST) Cardiotocography'],
    sakhiRecommendation: 'Pack your Maternity Hospital Bag (Sakhi Postpartum 360° Panties + Swaddles).'
  },
  {
    week: 40,
    trimester: 3,
    fruitSize: 'Watermelon',
    fruitEmoji: '🍉',
    babyLengthCm: 51.2,
    babyWeightGrams: 3400.0,
    fetalMilestone: 'Full term! Baby is ready to meet the world. 15% body fat keeps baby warm post-birth.',
    momSymptoms: ['Mucus plug release / bloody show', 'Regular rhythmic contractions (5-1-1 rule)', 'Water breaking'],
    mandatoryScans: ['Biophysical Profile (BPP)', 'Amniotic Fluid Index (AFI) Assessment'],
    sakhiRecommendation: 'MediMom™ Labor Support Hotline & 24/7 OB/GYN Triage Desk.'
  }
]

export const FLO_CYCLE_SYNCING_PHASES = [
  {
    phase: '1. Menstrual Phase (Days 1–5)',
    hormones: 'Estrogen & Progesterone at lowest baseline',
    energy: 'Reflective & Restorative',
    workout: 'Gentle walking, yin yoga, restorative stretching, no high-intensity cardio',
    nutrition: 'Warm bone broths, spinach, lentils, beetroot, iron-rich curries, 40°C heat patches',
    superpower: 'Intuition, deep rest, cycle resetting'
  },
  {
    phase: '2. Follicular Phase (Days 6–13)',
    hormones: 'Rising Estradiol & FSH',
    energy: 'Peak Creative & High Stamina',
    workout: 'HIIT, strength training, running, high-energy cardio',
    nutrition: 'Fermented probiotic foods, leafy greens, avocados, sprouts, lean proteins',
    superpower: 'Brain focus, project planning, social connection'
  },
  {
    phase: '3. Ovulatory Phase (Days 14–16)',
    hormones: 'LH Surge + Peak Estrogen & Testosterone',
    energy: 'Magnetic & Peak Confidence',
    workout: 'Heavy lifting, spin classes, high-impact athletic performance',
    nutrition: 'Antioxidant berries, raw salads, zinc-rich pumpkin seeds, cruciferous broccoli for estrogen detox',
    superpower: 'Public speaking, negotiations, conception fertility window'
  },
  {
    phase: '4. Luteal Phase (Days 17–28)',
    hormones: 'Progesterone Dominance (then drop if not pregnant)',
    energy: 'Detail-Oriented & Inward Turning',
    workout: 'Pilates, bodyweight strength, slow flow yoga, swimming',
    nutrition: 'Complex carbs (sweet potatoes, oats), magnesium dark chocolate, chamomile tea, Inositol for PCOS',
    superpower: 'Organization, deep focus, task completion'
  }
]

export const FLO_SECRET_CHATS_QUESTIONS = [
  {
    id: 'sc-1',
    category: 'Discharge & Vaginal Health',
    avatar: '🌸',
    alias: 'Pooja, 24 (Pune)',
    question: 'Why does my discharge look like raw egg whites mid-cycle? Is it an infection?',
    doctorAnswer: 'Namaste! Clear, stretchy, egg-white discharge is completely normal—in fact, it is the gold standard biological sign that you are in your peak 24–48 hour ovulation window. Estrogen creates this alkaline fluid to help sperm swim safely to the egg.',
    verifiedBy: 'Dr. Priya Kulkarni, MS (OB-GYN)',
    likes: 1420
  },
  {
    id: 'sc-2',
    category: 'Period Cramps & PMS',
    avatar: '🦋',
    alias: 'Sneha, 28 (PCMC)',
    question: 'Why do my cramps hurt so badly on Day 1, and can heat patches replace painkillers?',
    doctorAnswer: 'Day-1 cramps are triggered by inflammatory prostaglandins causing uterine muscle spasms. Clinical trials prove that 40°C continuous heat therapy (like Meditrust Sakhi™ Heat Patches) provides the same analgesic relief as 400mg Ibuprofen without damaging your stomach lining.',
    verifiedBy: 'Dr. Arya MD, AI Physician',
    likes: 2150
  },
  {
    id: 'sc-3',
    category: 'PCOS & Metabolism',
    avatar: '🌿',
    alias: 'Ritu, 26 (Mumbai)',
    question: 'My doctor said I have PCOS and high androgens. How do I fix chin acne and hair fall?',
    doctorAnswer: 'PCOS acne and hair thinning are driven by excess insulin stimulating ovarian DHT androgens. Supplementing with Myo-Inositol & D-Chiro Inositol in the proven 40:1 ratio stabilizes insulin sensitivity and restores clear skin within 90 days.',
    verifiedBy: 'Dr. R. Sharma, MD, DM (Diabetology & Endocrinology)',
    likes: 3890
  },
  {
    id: 'sc-4',
    category: 'Conception & Fertility',
    avatar: '🌱',
    alias: 'Ananya, 33 (Bengaluru)',
    question: 'How many days before ovulation should my partner and I try to get pregnant?',
    doctorAnswer: 'Sperm can survive inside fertile cervical mucus for up to 5 days, while an egg survives only 12–24 hours after ovulation. Intercourse on the 2 days leading up to ovulation and on ovulation day itself yields the highest conception success (over 85%).',
    verifiedBy: 'Dr. Sarah Chen, MD (Clinical Reproductive AI Lead)',
    likes: 1980
  },
  {
    id: 'sc-5',
    category: 'Postpartum & Fourth Trimester',
    avatar: '🤱',
    alias: 'Meera, 30 (Delhi)',
    question: 'How long does postpartum bleeding (lochia) last after a normal vaginal delivery?',
    doctorAnswer: 'Lochia is the natural shedding of uterine lining post-delivery and typically lasts 4 to 6 weeks. It transitions from bright red (Lochia rubra, days 1–4) to brownish-pink (serosa, days 5–14) to yellowish-white (alba). Use breathable 100% rash-free cotton maternity pads, never tampons.',
    verifiedBy: 'Dr. Priya Kulkarni, MS (OB-GYN)',
    likes: 1650
  }
]
