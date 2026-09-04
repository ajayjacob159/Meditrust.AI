export interface SymptomItem {
  id: string
  name: string
  icon: string
  clinicalInsight: string
}

export interface SymptomCategory {
  category: string
  icon: string
  description: string
  symptoms: SymptomItem[]
}

export const FLO_70_SYMPTOMS_LIST: SymptomCategory[] = [
  {
    category: 'Menstrual Flow & Bleeding',
    icon: '🩸',
    description: 'Track cycle bleeding volume, color, and clot texture',
    symptoms: [
      { id: 'flow_spotting', name: 'Light Spotting', icon: '💧', clinicalInsight: 'Common during ovulation (estrogen dip) or early blastocyst implantation.' },
      { id: 'flow_light', name: 'Light Flow', icon: '🩸', clinicalInsight: 'Typical on Day 1 or Day 5; indicates shedding of superficial endometrial layers.' },
      { id: 'flow_medium', name: 'Medium Flow', icon: '🩸', clinicalInsight: 'Healthy regular flow; requires changing pad or cup every 4 to 6 hours.' },
      { id: 'flow_heavy', name: 'Heavy Flow (>80mL)', icon: '🔴', clinicalInsight: 'Needing to change pad every 1-2 hours. May signal uterine fibroids, adenomyosis, or menorrhagia.' },
      { id: 'flow_clots_small', name: 'Small Clots (<2cm)', icon: '🩸', clinicalInsight: 'Normal occurrence when rapid flow overwhelms endogenous anticoagulants.' },
      { id: 'flow_clots_large', name: 'Large Clots (>2.5cm)', icon: '⚠️', clinicalInsight: 'Quarter-sized clots warrant a pelvic ultrasound to rule out polyp or hyperplasia.' },
      { id: 'flow_brown', name: 'Brown / Old Blood', icon: '🤎', clinicalInsight: 'Oxidized hemoglobin typical during the beginning or tail end of menses.' },
      { id: 'flow_pink', name: 'Pinkish Watery Blood', icon: '🌸', clinicalInsight: 'Diluted menstrual fluid or low estrogen levels.' }
    ]
  },
  {
    category: 'Pain & Physical Sensations',
    icon: '⚡',
    description: 'Map pelvic prostaglandins, nerve twinges, and musculoskeletal tension',
    symptoms: [
      { id: 'pain_cramps', name: 'Period Cramps (Dysmenorrhea)', icon: '😣', clinicalInsight: 'Caused by uterine prostaglandins. Relieved by 40°C thermal heat therapy.' },
      { id: 'pain_ovulation', name: 'Ovulation Twinge (Mittelschmerz)', icon: '🌸', clinicalInsight: 'Mid-cycle 1-sided ovarian follicle rupture signaling peak fertility.' },
      { id: 'pain_headache', name: 'Hormonal Migraine', icon: '🤕', clinicalInsight: 'Triggered by sudden estrogen withdrawal right before bleeding starts.' },
      { id: 'pain_breasts', name: 'Breast Tenderness (Mastalgia)', icon: '🍈', clinicalInsight: 'Progesterone-stimulated glandular swelling during the luteal phase.' },
      { id: 'pain_back', name: 'Lower Back & Sacral Aches', icon: '🦴', clinicalInsight: 'Radiating pain from pelvic nerve pathways and sacroiliac joint laxity.' },
      { id: 'pain_pelvic_pressure', name: 'Pelvic Floor Heaviness', icon: '⚓', clinicalInsight: 'Pelvic venous congestion common in late luteal or early pregnancy.' },
      { id: 'pain_sciatica', name: 'Radiating Sciatica Leg Pain', icon: '⚡', clinicalInsight: 'Inflammatory prostaglandins irritating the lumbosacral plexus.' },
      { id: 'pain_joint', name: 'Joint Stiffness & Myalgia', icon: '🦵', clinicalInsight: 'Temporary fluid retention and estrogen fluctuations affecting cartilage lubrication.' }
    ]
  },
  {
    category: 'Cervical Mucus & Vaginal Flora',
    icon: '🫧',
    description: 'Monitor fertile fluid changes, pH balance, and biome health',
    symptoms: [
      { id: 'discharge_eggwhite', name: 'Egg-White (Stretchy / Fertile)', icon: '🥚', clinicalInsight: 'Peak fertility biomarker! High estradiol creates sperm-conducting micro-channels.' },
      { id: 'discharge_watery', name: 'Watery & Clear', icon: '💧', clinicalInsight: 'Late follicular pre-ovulation surge fluid; highly sperm friendly.' },
      { id: 'discharge_creamy', name: 'Creamy Lotion-Like', icon: '🧴', clinicalInsight: 'Post-ovulatory or early follicular normal non-fertile discharge.' },
      { id: 'discharge_sticky', name: 'Sticky / Thick', icon: '🍯', clinicalInsight: 'Progesterone dominant phase; creates an impenetrable cervical mucus plug.' },
      { id: 'discharge_dry', name: 'Dry / No Secretions', icon: '🏜️', clinicalInsight: 'Low hormone baseline immediately after period cessation.' },
      { id: 'discharge_cottage', name: 'Cottage Cheese & Itching', icon: '⚠️', clinicalInsight: 'Classic sign of Candida albicans yeast overgrowth requiring antifungal care.' },
      { id: 'discharge_yellow_green', name: 'Yellow/Green with Odor', icon: '🚨', clinicalInsight: 'Possible bacterial vaginosis (BV) or trichomoniasis; requires vaginal pH test.' },
      { id: 'discharge_spotting_mucus', name: 'Tinged Mucus', icon: '🩸', clinicalInsight: 'Mid-cycle ovulation bleeding or cervical ectropion friction.' }
    ]
  },
  {
    category: 'Mood, Neuro & Mental State',
    icon: '🧠',
    description: 'Track neurotransmitters, dopamine, serotonin, and cortisol',
    symptoms: [
      { id: 'mood_euphoric', name: 'High Energy & Confident', icon: '⚡', clinicalInsight: 'Estrogen peak in late follicular phase boosts dopamine and serotonin synthesis.' },
      { id: 'mood_calm', name: 'Calm & Centered', icon: '🧘', clinicalInsight: 'Balanced allopregnanolone enhancing brain GABA neurotransmission.' },
      { id: 'mood_anxious', name: 'Anxiety & Restlessness', icon: '😰', clinicalInsight: 'Late luteal progesterone plunge causing acute GABA withdrawal.' },
      { id: 'mood_irritable', name: 'Irritability / PMS Rage', icon: '😤', clinicalInsight: 'Heightened amygdala sensitivity due to rapidly dropping estradiol.' },
      { id: 'mood_sad', name: 'Sadness & Tearfulness', icon: '🥺', clinicalInsight: 'Serotonin dip before menstruation; 200mg Magnesium glycinate can assist.' },
      { id: 'mood_fog', name: 'Brain Fog / Poor Focus', icon: '🌫️', clinicalInsight: 'Metabolic shifts before menses; hydration and B-complex vitamins help.' },
      { id: 'mood_swings', name: 'Rapid Mood Fluctuations', icon: '🎢', clinicalInsight: 'Hormonal volatility characteristic of PMDD or perimenopausal shifts.' },
      { id: 'mood_low_stress_tolerance', name: 'Low Stress Tolerance', icon: '🥀', clinicalInsight: 'Adrenal cortisol burden competing with progesterone receptors.' }
    ]
  },
  {
    category: 'Sleep, Energy & Recovery',
    icon: '🌙',
    description: 'Map circadian rhythm, core temperature shifts, and REM cycles',
    symptoms: [
      { id: 'sleep_restful', name: 'Deep & Restful Sleep', icon: '🛌', clinicalInsight: 'Optimal melatonin secretion supported by balanced early-cycle hormones.' },
      { id: 'sleep_insomnia', name: 'Pre-Period Insomnia', icon: '🦉', clinicalInsight: 'Elevated luteal core body temperature (+0.5°C) disrupting deep REM transitions.' },
      { id: 'sleep_vivid_dreams', name: 'Vivid / Emotional Dreams', icon: '💭', clinicalInsight: 'Progesterone shifts prolonging REM sleep duration.' },
      { id: 'sleep_night_sweats', name: 'Night Sweats / Hot Flashes', icon: '🔥', clinicalInsight: 'Vasomotor instability from acute estrogen drops or perimenopause.' },
      { id: 'sleep_fatigue', name: 'Daytime Lethargy & Sluggishness', icon: '🥱', clinicalInsight: 'Check Serum Ferritin levels if persistent to rule out iron deficiency.' },
      { id: 'sleep_restless_legs', name: 'Restless Legs at Bedtime', icon: '🦵', clinicalInsight: 'Frequently linked to low dopamine, iron deficiency, or magnesium depletion.' }
    ]
  },
  {
    category: 'Skin, Hair & Beauty',
    icon: '✨',
    description: 'Monitor androgen influence, sebum quality, and dermal collagen',
    symptoms: [
      { id: 'skin_glowing', name: 'Glowing & Clear Complexion', icon: '✨', clinicalInsight: 'High estradiol stimulates dermal fibroblasts, hyaluronic acid, and collagen.' },
      { id: 'skin_oily', name: 'Excess T-Zone Sebum', icon: '🪞', clinicalInsight: 'Luteal progesterone and free testosterone activating sebaceous glands.' },
      { id: 'skin_acne_jawline', name: 'Hormonal Jawline / Chin Acne', icon: '🔴', clinicalInsight: 'Androgen surge causing follicular hyperkeratinization. Sakhi tea & Inositol help.' },
      { id: 'skin_dry', name: 'Dry & Flaky Skin', icon: '🍂', clinicalInsight: 'Low estrogen levels during menstruation impairing epidermal barrier lipids.' },
      { id: 'hair_shedding', name: 'Excess Hair Shedding (Telogen)', icon: '💇', clinicalInsight: 'Telogen effluvium triggered by postpartum, severe stress, or thyroid shifts.' },
      { id: 'hair_greasy', name: 'Oily Scalp & Roots', icon: '🧴', clinicalInsight: 'Sebum overflow driven by mid-luteal dihydrotestosterone (DHT).' },
      { id: 'skin_puffy', name: 'Facial & Under-Eye Puffiness', icon: '👀', clinicalInsight: 'Luteal aldosterone-mediated sodium retention.' }
    ]
  },
  {
    category: 'Digestion, Gut & Appetite',
    icon: '🥑',
    description: 'Track GI tract motility, cravings, and fluid balance',
    symptoms: [
      { id: 'gut_bloating', name: 'Water Retention & Bloating', icon: '🎈', clinicalInsight: 'Progesterone slows gastrointestinal motility, causing intestinal gas and fluid retention.' },
      { id: 'gut_period_poop', name: 'Loose Stools / Period Poops', icon: '🚽', clinicalInsight: 'Uterine prostaglandins diffusing into the bowel, accelerating colonic peristalsis.' },
      { id: 'gut_constipation', name: 'Progesterone Constipation', icon: '🧱', clinicalInsight: 'Smooth muscle relaxation from high progesterone slowing bowel transit.' },
      { id: 'gut_cravings_sweet', name: 'Intense Sugar / Chocolate Craving', icon: '🍫', clinicalInsight: 'Body burns 100-300 extra kcal/day in luteal phase while craving magnesium.' },
      { id: 'gut_cravings_salty', name: 'Salty & Savory Cravings', icon: '🍟', clinicalInsight: 'Adrenal signaling for mineral electrolytes and aldosterone support.' },
      { id: 'gut_nausea', name: 'Nausea & Queasiness', icon: '🤢', clinicalInsight: 'Triggered by high hCG, estrogen surges, or prostaglandin gastric irritation.' },
      { id: 'gut_increased_appetite', name: 'Ravenous Hunger', icon: '🍽️', clinicalInsight: 'Accelerated basal metabolic rate demanding complex carbohydrate fuel.' },
      { id: 'gut_heartburn', name: 'Acid Reflux & Heartburn', icon: '🔥', clinicalInsight: 'Relaxation of the lower esophageal sphincter muscle.' }
    ]
  },
  {
    category: 'Intimate Health & Vitality',
    icon: '❤️',
    description: 'Map libido shifts, sexual comfort, and autonomic signals',
    symptoms: [
      { id: 'intimate_high_libido', name: 'High Libido (Peak Desire)', icon: '🔥', clinicalInsight: 'Evolutionary surge driven by mid-cycle testosterone and estradiol peak.' },
      { id: 'intimate_low_libido', name: 'Low / Absent Desire', icon: '🧊', clinicalInsight: 'High progesterone, chronic stress, or prolactin elevation suppresses desire.' },
      { id: 'intimate_dryness', name: 'Vaginal Dryness / Friction', icon: '🏜️', clinicalInsight: 'Low estrogen baseline; use pH-balanced water-based hyaluronic lubricants.' },
      { id: 'intimate_pain', name: 'Painful Intercourse (Dyspareunia)', icon: '⚠️', clinicalInsight: 'May indicate endometriosis, pelvic floor hypertonicity, or vaginismus.' },
      { id: 'vital_bbt_high', name: 'Elevated BBT (>36.8°C / 98.2°F)', icon: '🌡️', clinicalInsight: 'Confirms that ovulation has occurred and progesterone is circulating.' },
      { id: 'vital_high_stamina', name: 'Peak Athletic Endurance', icon: '🏃‍♀️', clinicalInsight: 'Optimal muscle glycogen sparing during the follicular phase.' },
      { id: 'vital_workout_fatigue', name: 'Workout Exhaustion & Heavy Legs', icon: '🛑', clinicalInsight: 'Body shifts toward fat oxidation; switch from HIIT to restorative yoga.' }
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
    fetalMilestone: 'Blastocyst implants into the uterine lining. The neural tube, amniotic sac, and primitive placenta begin developing.',
    momSymptoms: ['Missed period', 'Mild implantation spotting', 'Heightened smell', 'Sudden fatigue'],
    mandatoryScans: ['Urine Pregnancy Test (UPT)', 'Serum Beta-hCG quantitative check', 'Thyroid TSH (target <2.5 mIU/L)'],
    sakhiRecommendation: 'Jan Aushadhi Folic Acid 5mg daily to prevent neural tube defects.'
  },
  {
    week: 6,
    trimester: 1,
    fruitSize: 'Sweet Pea',
    fruitEmoji: '🫛',
    babyLengthCm: 0.6,
    babyWeightGrams: 0.2,
    fetalMilestone: 'Baby’s heart begins beating at ~110 BPM. Optic vesicles and tiny arm buds start forming.',
    momSymptoms: ['Morning nausea', 'Frequent urination', 'Breast soreness', 'Extreme drowsiness'],
    mandatoryScans: ['First Dating & Viability Ultrasound (confirm intrauterine gestational sac)'],
    sakhiRecommendation: 'Ginger-infused herbal tea + Vitamin B6 (Pyridoxine 25mg) for nausea.'
  },
  {
    week: 8,
    trimester: 1,
    fruitSize: 'Raspberry',
    fruitEmoji: '🫐',
    babyLengthCm: 1.6,
    babyWeightGrams: 1.0,
    fetalMilestone: 'Baby’s heart beats rapidly at ~160 BPM. Webbed fingers, retinal pigment, and eyelids form.',
    momSymptoms: ['Food aversions', 'Heartburn', 'Bloating', 'Mood sensitivity'],
    mandatoryScans: ['Routine Ante-Natal Blood Panel (CBC, Blood Group & Rh, HbA1c, Rubella IgG, HIV/HBsAg)'],
    sakhiRecommendation: 'Jan Aushadhi Progesterone micronized (if prescribed by OB-GYN) & hydration.'
  },
  {
    week: 10,
    trimester: 1,
    fruitSize: 'Prune',
    fruitEmoji: '🟣',
    babyLengthCm: 3.1,
    babyWeightGrams: 4.0,
    fetalMilestone: 'Embryonic stage ends; baby is now officially a fetus! Tiny tooth buds and nail beds develop.',
    momSymptoms: ['Visible blue veins on breasts', 'Mild round ligament stretching', 'Headaches'],
    mandatoryScans: ['Non-Invasive Prenatal Testing (NIPT) cell-free fetal DNA screen (optional for advanced maternal age)'],
    sakhiRecommendation: 'Gentle moisturizing stretch oil & supportive cotton maternity bra.'
  },
  {
    week: 12,
    trimester: 1,
    fruitSize: 'Lime',
    fruitEmoji: '🍋',
    babyLengthCm: 5.4,
    babyWeightGrams: 14.0,
    fetalMilestone: 'All vital organs, kidneys, liver, and reflexes are formed. Baby practices breathing fluid.',
    momSymptoms: ['Morning sickness starts subsiding', 'Pregnancy melasma glow', 'Increased vaginal discharge'],
    mandatoryScans: ['Nuchal Translucency (NT) Scan', 'Dual Marker Blood Test (PAPP-A + Free Beta-hCG)'],
    sakhiRecommendation: 'Mineral SPF 50 sunscreen & mild non-stripping foaming face wash.'
  },
  {
    week: 14,
    trimester: 2,
    fruitSize: 'Lemon',
    fruitEmoji: '🍋',
    babyLengthCm: 8.7,
    babyWeightGrams: 43.0,
    fetalMilestone: 'Second Trimester Begins! Baby can squint, frown, and suck their thumb. Lanugo hair appears.',
    momSymptoms: ['Burst of renewed energy', 'Appetite returns', 'Mild nasal congestion'],
    mandatoryScans: ['Second Trimester Routine BP & Urine Albumin Check'],
    sakhiRecommendation: 'Calcium Citrate 500mg + Vitamin D3 1000 IU daily.'
  },
  {
    week: 16,
    trimester: 2,
    fruitSize: 'Avocado',
    fruitEmoji: '🥑',
    babyLengthCm: 11.6,
    babyWeightGrams: 100.0,
    fetalMilestone: 'Baby can hear your voice and heartbeat. Eyes can perceive light changes through the uterine wall.',
    momSymptoms: ['Baby bump begins showing', 'Round ligament aches', 'Bleeding gums (pregnancy gingivitis)'],
    mandatoryScans: ['Quadruple Marker Blood Test (if 1st trimester Dual Marker was missed)'],
    sakhiRecommendation: 'Gentle soft-bristle toothbrush + DHA Omega-3 algae capsules for fetal brain.'
  },
  {
    week: 18,
    trimester: 2,
    fruitSize: 'Bell Pepper',
    fruitEmoji: '🫑',
    babyLengthCm: 14.2,
    babyWeightGrams: 190.0,
    fetalMilestone: 'Myelin coating wraps around baby’s spinal nerves. Baby practices swallowing amniotic fluid.',
    momSymptoms: ['First gentle flutter kicks (Quickening)', 'Lower back ache', 'Leg cramps at night'],
    mandatoryScans: ['Preparation for Level-2 TIFFA scan booking'],
    sakhiRecommendation: 'Magnesium Glycinate 250mg at bedtime for leg muscle cramps.'
  },
  {
    week: 20,
    trimester: 2,
    fruitSize: 'Banana / Mango',
    fruitEmoji: '🥭',
    babyLengthCm: 25.6,
    babyWeightGrams: 300.0,
    fetalMilestone: 'Halfway Mark (20 Weeks)! Baby is covered in vernix caseosa. Distinct kicks can be felt by your hand.',
    momSymptoms: ['Clear flutter kicks', 'Linea nigra dark line on belly', 'Mild swelling in feet'],
    mandatoryScans: ['TIFFA (Targeted Imaging for Fetal Anomalies) Level-2 Ultrasound Scan', 'Cervical Length Check'],
    sakhiRecommendation: 'Elevate feet 20 mins daily & use comfortable ergonomic maternity footwear.'
  },
  {
    week: 22,
    trimester: 2,
    fruitSize: 'Papaya',
    fruitEmoji: '🍈',
    babyLengthCm: 27.8,
    babyWeightGrams: 430.0,
    fetalMilestone: 'Baby’s senses of sight, hearing, smell, and touch are active. Grip strength strengthens.',
    momSymptoms: ['Stretch marks on belly/thighs', 'Mild shortness of breath on stairs', 'Vivid dreams'],
    mandatoryScans: ['Fetal Echocardiography (if indicated by anomaly scan)'],
    sakhiRecommendation: 'Pure cold-pressed virgin coconut oil for belly skin hydration.'
  },
  {
    week: 24,
    trimester: 2,
    fruitSize: 'Corn on the Cob',
    fruitEmoji: '🌽',
    babyLengthCm: 30.0,
    babyWeightGrams: 600.0,
    fetalMilestone: 'Viability milestone! Baby’s inner ear is fully formed, sensing upside down orientation.',
    momSymptoms: ['Gestational diabetes risk window', 'Dry eyes', 'Carpal tunnel wrist stiffness'],
    mandatoryScans: ['75g Oral Glucose Tolerance Test (OGTT)', 'CBC for Hemoglobin & Platelets'],
    sakhiRecommendation: 'Chelated Ferrous Ascorbate (Jan Aushadhi Iron) to keep Hemoglobin >11.5 g/dL.'
  },
  {
    week: 26,
    trimester: 2,
    fruitSize: 'Zucchini',
    fruitEmoji: '🥒',
    babyLengthCm: 35.6,
    babyWeightGrams: 760.0,
    fetalMilestone: 'Baby’s eyes open for the first time! Brain wave patterns resemble newborn sleep cycles.',
    momSymptoms: ['Braxton Hicks practice contractions', 'Restless legs', 'Clumsiness / center of gravity shift'],
    mandatoryScans: ['Blood Pressure monitoring for Pre-eclampsia screening'],
    sakhiRecommendation: 'Pelvic floor Kegel exercises and side-sleeping with body pillow.'
  },
  {
    week: 28,
    trimester: 3,
    fruitSize: 'Eggplant',
    fruitEmoji: '🍆',
    babyLengthCm: 37.6,
    babyWeightGrams: 1000.0,
    fetalMilestone: 'Welcome to the 3rd Trimester! Baby weighs a full kilogram. Rapid brain synapse proliferation.',
    momSymptoms: ['Shortness of breath as uterus pushes diaphragm', 'Sciatica twinges', 'Frequent heartburn'],
    mandatoryScans: ['Anti-D Immunoglobulin Injection (for Rh-Negative mothers)', '3rd Trimester Growth Scan'],
    sakhiRecommendation: 'Small frequent high-protein meals to prevent acid reflux.'
  },
  {
    week: 30,
    trimester: 3,
    fruitSize: 'Cabbage',
    fruitEmoji: '🥬',
    babyLengthCm: 39.9,
    babyWeightGrams: 1300.0,
    fetalMilestone: 'Baby’s bone marrow is fully producing red blood cells. Baby turns head side to side.',
    momSymptoms: ['Tiredness returns', 'Mood shifts', 'Frequent urination as bladder is compressed'],
    mandatoryScans: ['Growth & Amniotic Fluid Index (AFI) Ultrasound check'],
    sakhiRecommendation: 'Warm foot soaks and comfortable supportive pregnancy belly band.'
  },
  {
    week: 32,
    trimester: 3,
    fruitSize: 'Coconut',
    fruitEmoji: '🥥',
    babyLengthCm: 42.4,
    babyWeightGrams: 1700.0,
    fetalMilestone: 'Baby is practicing swallowing and breathing movements. All five senses are operating.',
    momSymptoms: ['Leaking colostrum from breasts', 'Pelvic pressure', 'Difficulty finding sleep positions'],
    mandatoryScans: ['Fetal Growth & Umbilical/Uterine Artery Color Doppler Scan'],
    sakhiRecommendation: 'Sakhi Washable Organic Nursing Pads & perineal massage prep.'
  },
  {
    week: 34,
    trimester: 3,
    fruitSize: 'Pineapple',
    fruitEmoji: '🍍',
    babyLengthCm: 45.0,
    babyWeightGrams: 2150.0,
    fetalMilestone: 'Baby’s central nervous system and lungs are maturing rapidly. Vernix caseosa thickens.',
    momSymptoms: ['Swollen ankles and fingers', 'Vision sensitivity', 'Strong visible baby kicks'],
    mandatoryScans: ['Hemoglobin & Urine Protein re-check'],
    sakhiRecommendation: 'Daily Kick Counting (expect at least 10 kicks in 2 hours of resting).'
  },
  {
    week: 36,
    trimester: 3,
    fruitSize: 'Honeydew Melon',
    fruitEmoji: '🍈',
    babyLengthCm: 47.4,
    babyWeightGrams: 2600.0,
    fetalMilestone: 'Baby drops lower into the pelvis (Lightening / Engagement). Lungs are virtually ready.',
    momSymptoms: ['Easier breathing but heavier pelvic pressure', 'Frequent false labor contractions'],
    mandatoryScans: ['Group B Streptococcus (GBS) Rectovaginal Swab', 'Non-Stress Test (NST) Cardiotocography'],
    sakhiRecommendation: 'Pack your Hospital Delivery Bag (Sakhi Postpartum 360° Panties + Cotton Swaddles).'
  },
  {
    week: 38,
    trimester: 3,
    fruitSize: 'Winter Melon',
    fruitEmoji: '🍈',
    babyLengthCm: 49.8,
    babyWeightGrams: 3050.0,
    fetalMilestone: 'Early term! Baby has firm grasp reflexes. Vocal cords are primed for baby’s first cry.',
    momSymptoms: ['Loss of mucus plug', 'Nesting energy bursts', 'Increased pelvic ligament loosening'],
    mandatoryScans: ['Weekly NST & Biophysical Profile (BPP)'],
    sakhiRecommendation: 'Labor birth plan review & emergency ambulance / hospital helpline sync.'
  },
  {
    week: 40,
    trimester: 3,
    fruitSize: 'Watermelon',
    fruitEmoji: '🍉',
    babyLengthCm: 51.2,
    babyWeightGrams: 3400.0,
    fetalMilestone: 'Full Term! Baby is ready to enter the world. 15% body fat keeps baby warm post-delivery.',
    momSymptoms: ['5-1-1 Contractions (5 mins apart, 1 min long, for 1 hour)', 'Water breaking', 'Bloody show'],
    mandatoryScans: ['Amniotic Fluid Index (AFI) check', 'Delivery Room Admission Triage'],
    sakhiRecommendation: 'MediMom™ 24/7 Labor Helpline & Doorstep Postpartum Recovery Support.'
  }
]

export const FLO_CYCLE_SYNCING_PHASES = [
  {
    phase: '1. Menstrual Phase (Days 1–5)',
    tag: 'Rest & Renewal',
    icon: '🩸',
    hormones: 'Estrogen & Progesterone at lowest baseline; Prostaglandins peak',
    energy: 'Reflective, Quiet & Restorative',
    workout: 'Gentle walking, yin yoga, restorative pelvic stretches; avoid high-intensity workouts',
    nutrition: 'Warm bone broths, spinach, lentils, beetroot, iron-rich curries, 40°C thermal heat patches',
    productivity: 'Review monthly goals, declutter schedules, avoid scheduling intense multi-stakeholder meetings',
    superpower: 'High intuition, clear assessment of what is working and what is not'
  },
  {
    phase: '2. Follicular Phase (Days 6–13)',
    tag: 'Creativity & Stamina',
    icon: '🌱',
    hormones: 'Rising Estradiol & Follicle Stimulating Hormone (FSH)',
    energy: 'High Energy, Optimistic & Creative',
    workout: 'HIIT, heavy strength training, tempo running, high-energy dance cardio',
    nutrition: 'Fermented probiotic foods, leafy greens, avocados, sprouts, lean proteins, pumpkin & flax seeds',
    productivity: 'Brainstorming, starting new projects, client pitching, learning complex technical skills',
    superpower: 'Neuroplasticity, rapid mental processing, social charisma'
  },
  {
    phase: '3. Ovulatory Phase (Days 14–16)',
    tag: 'Magnetic & Peak Power',
    icon: '🌸',
    hormones: 'Luteinizing Hormone (LH) Surge + Peak Estradiol & Testosterone',
    energy: 'Magnetic, Articulate & Peak Self-Confidence',
    workout: 'Maximum strength lifting PRs, intense spin classes, competitive athletics',
    nutrition: 'Antioxidant berries, raw salads, zinc-rich pumpkin seeds, cruciferous broccoli for estrogen clearance',
    productivity: 'Public speaking, critical negotiations, salary discussions, podcasting & video recording',
    superpower: 'Verbal agility, persuasive communication, peak biological fertility window'
  },
  {
    phase: '4. Luteal Phase (Days 17–28)',
    tag: 'Focus & Organization',
    icon: '🍂',
    hormones: 'Progesterone Dominance (then drop if unfertilized); Metabolic rate rises +100-300 kcal',
    energy: 'Detail-Oriented, Inward-Turning & Pragmatic',
    workout: 'Pilates, bodyweight resistance, slow flow yoga, swimming, nature walks',
    nutrition: 'Complex carbs (sweet potatoes, oats, quinoa), magnesium dark chocolate, chamomile tea, Inositol for PCOS',
    productivity: 'Bookkeeping, code audits, finishing pending tasks, organization, solo deep focus',
    superpower: 'Extreme attention to detail, administrative execution, nesting'
  }
]

export interface DiagnosticQuestion {
  id: string
  title: string
  subtitle: string
  icon: string
  questions: {
    question: string
    options: {
      label: string
      riskPoints: number
      clinicalAdvice: string
    }[]
  }[]
}

export const FLO_DIAGNOSTIC_ASSISTANTS: DiagnosticQuestion[] = [
  {
    id: 'late_period',
    title: 'Why is My Period Late?',
    subtitle: 'Clinical algorithmic triage for missed or delayed cycles',
    icon: '⏳',
    questions: [
      {
        question: 'How many days late is your period compared to your usual cycle length?',
        options: [
          { label: '1 to 4 days late', riskPoints: 1, clinicalAdvice: 'Normal cycle variability. Minor stress, illness, or travel can shift ovulation by 2–4 days.' },
          { label: '5 to 10 days late', riskPoints: 2, clinicalAdvice: 'Consider a morning Urine Pregnancy Test (UPT). If negative, check thyroid or acute cortisol stress.' },
          { label: 'More than 14 days late (>2 weeks)', riskPoints: 3, clinicalAdvice: 'Secondary amenorrhea. Hormonal blood panel (LH, FSH, Prolactin, TSH) and pelvic scan recommended.' }
        ]
      },
      {
        question: 'Did you have unprotected intercourse during this cycle?',
        options: [
          { label: 'No, zero chance of pregnancy', riskPoints: 0, clinicalAdvice: 'Focus on hormonal, metabolic, or stress causes for the delay.' },
          { label: 'Yes, protected with barrier methods', riskPoints: 1, clinicalAdvice: 'Very low chance if used consistently, but take a UPT if over 7 days late.' },
          { label: 'Yes, unprotected during mid-cycle', riskPoints: 4, clinicalAdvice: 'High probability of conception. Take a home UPT with first-morning urine immediately.' }
        ]
      }
    ]
  },
  {
    id: 'discharge_checker',
    title: 'Abnormal Discharge Checker',
    subtitle: 'Identify normal ovulatory fluid vs yeast, BV, or infection',
    icon: '🫧',
    questions: [
      {
        question: 'What is the color and consistency of your discharge?',
        options: [
          { label: 'Clear, stretchy, raw egg-white texture', riskPoints: 0, clinicalAdvice: 'Completely normal and healthy! Indicates peak ovulation and high fertility.' },
          { label: 'Thick, white, clumpy like cottage cheese with intense itching', riskPoints: 3, clinicalAdvice: 'High likelihood of Candida albicans yeast overgrowth. Antifungal vaginal pessary indicated.' },
          { label: 'Thin grayish-white or yellow with a fishy odor', riskPoints: 3, clinicalAdvice: 'Classic sign of Bacterial Vaginosis (BV). Oral Metronidazole or clindamycin required.' }
        ]
      }
    ]
  },
  {
    id: 'pcos_screener',
    title: 'PCOS & Hormone Risk Assessment',
    subtitle: 'Rotterdam criteria screening for polycystic ovary syndrome',
    icon: '🌿',
    questions: [
      {
        question: 'How predictable are your menstrual cycles?',
        options: [
          { label: 'Regular (every 24–35 days)', riskPoints: 0, clinicalAdvice: 'Regular ovulatory cycles indicate healthy hypothalamic-pituitary-ovarian axis.' },
          { label: 'Irregular (cycles vary by >10 days or skip months)', riskPoints: 3, clinicalAdvice: 'Oligo-ovulation or anovulation is a primary diagnostic criteria for PCOS.' }
        ]
      },
      {
        question: 'Do you experience stubborn chin acne, facial hair, or male-pattern scalp thinning?',
        options: [
          { label: 'None of these', riskPoints: 0, clinicalAdvice: 'No outward clinical signs of hyperandrogenism.' },
          { label: 'Yes, persistent cystic jawline acne or coarse chin hair', riskPoints: 3, clinicalAdvice: 'Suggestive of elevated free testosterone / DHEA-S. Recommend PCOS Blood Panel.' }
        ]
      }
    ]
  }
]

export const FLO_PERIMENOPAUSE_GUIDE = {
  title: 'Perimenopause & Menopause Navigator (Age 40+)',
  description: 'Navigate the natural transition with evidence-based hormone tracking, bone preservation, and heart protection.',
  keySymptoms: [
    { title: 'Vasomotor Flashes', icon: '🔥', detail: 'Sudden heat in chest and neck caused by hypothalamic temperature dysregulation as estrogen fluctuates.' },
    { title: 'Sleep Architecture Shifts', icon: '🌙', detail: 'Progesterone drops impair deep REM cycles and cause 3 AM awakenings.' },
    { title: 'Bone Mineral Density', icon: '🦴', detail: 'Estrogen withdrawal accelerates osteoclast bone loss; DEXA scan every 2 years recommended.' },
    { title: 'Cardiovascular Protection', icon: '❤️', detail: 'Lipid profiles shift toward higher LDL; check ApoB and hs-CRP annually.' }
  ],
  actionPlan: [
    'Annual Lipid & Thyroid TSH screen',
    'DEXA Bone Mineral Density Scan at 45+',
    'Phytoestrogen foods (Flaxseeds, fermented tempeh, edamame)',
    'Resistance strength training to maintain lean skeletal muscle'
  ]
}

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
  },
  {
    id: 'sc-6',
    category: 'First Period & Teen Health',
    avatar: '👧',
    alias: 'Aarohi, 15 (Nagpur)',
    question: 'My periods are very irregular—sometimes 45 days, sometimes 25 days. Is something wrong with me?',
    doctorAnswer: 'Do not panic! During the first 2 to 3 years after your very first period (menarche), the brain-ovary communication axis (hypothalamus-pituitary) is still maturing. It is completely normal for teen cycles to be irregular as ovulation establishes its rhythm.',
    verifiedBy: 'Dr. Priya Kulkarni, MS (OB-GYN)',
    likes: 2430
  },
  {
    id: 'sc-7',
    category: 'Perimenopause (40+)',
    avatar: '🌺',
    alias: 'Sunita, 46 (Thane)',
    question: 'I wake up drenched in sweat at 3 AM and my period skipped 2 months. Am I entering menopause?',
    doctorAnswer: 'These are textbook signs of perimenopause (the transition phase leading to menopause). Night sweats and skipping cycles occur because declining ovarian follicles produce fluctuating bursts of estrogen and progesterone. Checking your FSH and Estradiol levels will confirm.',
    verifiedBy: 'Dr. Arya MD, AI Physician',
    likes: 3120
  },
  {
    id: 'sc-8',
    category: 'Intimate Health & Pleasure',
    avatar: '✨',
    alias: 'Kavita, 29 (Hyderabad)',
    question: 'Why does intercourse feel uncomfortable or dry during the week right before my period?',
    doctorAnswer: 'In the late luteal phase (days 21-28), estrogen drops to its lowest baseline. Because estrogen maintains natural vaginal lubrication and mucosal thickness, temporary dryness is very common. Using a pH-neutral water-based lubricant resolves this instantly.',
    verifiedBy: 'Dr. Priya Kulkarni, MS (OB-GYN)',
    likes: 1870
  }
]

