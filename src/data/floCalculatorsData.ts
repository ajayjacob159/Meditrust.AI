export interface FloCalculatorDef {
  id: string
  slug: string
  title: string
  shortTitle: string
  icon: string
  badge: string
  category: 'Fertility & Ovulation' | 'Pregnancy & Due Date' | 'Cycle & Period' | 'IVF & Clinical'
  tagline: string
  description: string
  inputs: {
    name: string
    label: string
    type: 'date' | 'number' | 'select'
    defaultValue: string | number
    options?: { label: string; value: string | number }[]
    helperText: string
  }[]
  clinicalMethod: string
  formulaExplanation: string
  medicalReferences: string[]
  keyStatistics: { label: string; value: string; desc: string }[]
  symptomsToWatch: { name: string; icon: string; description: string }[]
  clinicalGuide: {
    heading: string
    sections: {
      subheading: string
      content: string
    }[]
  }
  whenToSeeDoctor: string[]
  faq: {
    question: string
    answer: string
  }[]
}

export const FLO_10_CALCULATORS: FloCalculatorDef[] = [
  {
    id: 'ovulation-calculator',
    slug: 'ovulation-calculator',
    title: 'Clinical Ovulation Calculator & Fertile Window Predictor',
    shortTitle: 'Ovulation Calculator',
    icon: '🌸',
    badge: 'GOLD STANDARD · HIGH ACCURACY',
    category: 'Fertility & Ovulation',
    tagline: 'Pinpoint your exact 6-day fertile window, ovulation day, and peak conception dates',
    description: 'Calculates your peak fertile days based on your Last Menstrual Period (LMP) and average cycle length. Identifies the optimal 48-hour window for intercourse or IUI timing with ACOG clinical algorithms.',
    inputs: [
      {
        name: 'lmpDate',
        label: 'First Day of Last Period (LMP)',
        type: 'date',
        defaultValue: new Date(Date.now() - 14 * 86400000).toISOString().split('T')[0],
        helperText: 'The first day of full bleeding in your most recent cycle.'
      },
      {
        name: 'cycleLength',
        label: 'Average Cycle Length (Days)',
        type: 'number',
        defaultValue: 28,
        helperText: 'Typical cycle length ranges between 21 and 35 days (default is 28).'
      },
      {
        name: 'lutealLength',
        label: 'Luteal Phase Duration (Days)',
        type: 'select',
        defaultValue: 14,
        options: [
          { label: '12 Days (Short Luteal)', value: 12 },
          { label: '14 Days (Standard Clinical Average)', value: 14 },
          { label: '16 Days (Long Luteal)', value: 16 }
        ],
        helperText: 'The time between ovulation and your next period (standard is 14 days).'
      }
    ],
    clinicalMethod: 'Ogino-Knaus & ACOG 6-Day Fertile Window Biological Algorithm',
    formulaExplanation: 'Ovulation occurs approximately [Cycle Length - Luteal Phase] days after the first day of LMP. The fertile window spans 5 days prior to ovulation (accounting for sperm survival in alkaline cervical mucus) plus ovulation day itself.',
    medicalReferences: [
      'American College of Obstetricians and Gynecologists (ACOG) Clinical Practice Guide #136',
      'World Health Organization (WHO) Natural Family Planning & Fertile Window Guidelines',
      'Wilcox AJ, Dunson D, Baird DD. The timing of the “fertile window” in the menstrual cycle. BMJ 2000'
    ],
    keyStatistics: [
      { label: '85%+', value: 'Conception Rate', desc: 'Probability of conception when having intercourse during the 2 days before ovulation' },
      { label: '5 Days', value: 'Sperm Longevity', desc: 'Maximum survival of viable sperm in fertile egg-white cervical mucus' },
      { label: '12–24h', value: 'Egg Viability', desc: 'Lifespan of the ovulated oocyte once released from the dominant ovarian follicle' }
    ],
    symptomsToWatch: [
      { name: 'Egg-White Cervical Mucus (EWCM)', icon: '💧', description: 'Clear, stretchy, slippery cervical fluid resembling raw egg whites that nourishes sperm.' },
      { name: 'Luteinizing Hormone (LH) Surge', icon: '⚡', description: 'A rapid spike in LH detected on urine ovulation predictor kits (OPKs) 24–36h before ovulation.' },
      { name: 'Mittelschmerz Pelvic Twinge', icon: '🎯', description: 'Mild one-sided lower abdominal or pelvic aching caused by follicle expansion and rupture.' },
      { name: 'Basal Body Temperature (BBT) Rise', icon: '🌡️', description: 'A sustained 0.4°F to 1.0°F temperature elevation occurring 24 hours post-ovulation due to progesterone.' },
      { name: 'Heightened Libido & Soft Cervix', icon: '✨', description: 'High estrogen levels open and soften the cervix (SHOW: Soft, High, Open, Wet) and increase sexual desire.' }
    ],
    clinicalGuide: {
      heading: 'Understanding Your Ovulation & Fertile Window Physiology',
      sections: [
        {
          subheading: '1. What is Ovulation and Why is Timing Crucial?',
          content: 'Ovulation is the biological release of a mature egg (oocyte) from the Graafian follicle in one of your ovaries. Unlike men who produce sperm continuously, women release one egg per monthly cycle. Once released, the egg travels down the fallopian tube, where fertilization must occur within 12 to 24 hours before the egg dissolves.'
        },
        {
          subheading: '2. The 6-Day Fertile Window Explained',
          content: 'Although an egg survives for less than 24 hours, your fertile window actually spans 6 consecutive days: the 5 days leading up to ovulation plus ovulation day itself. This is because healthy, motile sperm can survive inside fertile, alkaline cervical crypts for up to 120 hours (5 days), waiting for the egg to arrive.'
        },
        {
          subheading: '3. Optimal Intercourse Timing for Pregnancy',
          content: 'Clinical studies by the American Society for Reproductive Medicine (ASRM) demonstrate that the highest likelihood of conception occurs when intercourse takes place on the two days immediately preceding ovulation (O-2 and O-1) and on ovulation day itself (O). Intercourse after ovulation day drops the conception chance to near zero for that cycle.'
        }
      ]
    },
    whenToSeeDoctor: [
      'You are under 35 and have been having regular timed intercourse for 12 months without conception.',
      'You are 35 or older and have been trying for 6 months without conceiving.',
      'Your menstrual cycles are irregular (<21 days or >35 days) or completely absent (amenorrhea).',
      'You experience severe pelvic pain during ovulation or menstruation, which may indicate endometriosis or PCOS.'
    ],
    faq: [
      {
        question: 'How long can sperm survive in fertile cervical mucus?',
        answer: 'Healthy sperm can survive in alkaline, estrogenic egg-white cervical mucus for up to 5 days, whereas an ovulated egg remains viable for only 12 to 24 hours.'
      },
      {
        question: 'What are the best days to have intercourse to get pregnant?',
        answer: 'Intercourse on the 2 days leading up to ovulation and on ovulation day itself yields the highest biological probability of conception (over 85%).'
      },
      {
        question: 'Can I ovulate on a different day each month?',
        answer: 'Yes. The follicular phase (the first half of your cycle) can vary based on emotional stress, illness, sleep disruption, and travel, which can shift your ovulation day earlier or later.'
      },
      {
        question: 'How does PCOS affect ovulation calculation?',
        answer: 'PCOS often causes anovulation or unpredictable delayed ovulation. If you have PCOS, calendar calculations should be paired with LH urine testing, basal body temperature tracking, and follicular tracking ultrasound scans.'
      }
    ]
  },
  {
    id: 'hcg-calculator',
    slug: 'hcg-calculator',
    title: 'Beta hCG Doubling Time Calculator & Early Pregnancy Charts',
    shortTitle: 'Beta hCG Calculator',
    icon: '🧪',
    badge: 'CLINICAL LAB TOOL',
    category: 'IVF & Clinical',
    tagline: 'Calculate quantitative hCG doubling hours, percentage increase, and viability trends',
    description: 'Evaluates two consecutive serum Beta-hCG blood test results to determine doubling velocity. Essential for assessing early gestational progression, IVF transfers, and ruling out ectopic risk.',
    inputs: [
      {
        name: 'firstHcg',
        label: 'First Beta-hCG Level (mIU/mL)',
        type: 'number',
        defaultValue: 150,
        helperText: 'Your first quantitative blood test value.'
      },
      {
        name: 'secondHcg',
        label: 'Second Beta-hCG Level (mIU/mL)',
        type: 'number',
        defaultValue: 380,
        helperText: 'Your follow-up quantitative blood test value.'
      },
      {
        name: 'hoursBetween',
        label: 'Time Between Blood Tests (Hours)',
        type: 'number',
        defaultValue: 48,
        helperText: 'Standard interval is 48 hours (2 days) or 72 hours (3 days).'
      }
    ],
    clinicalMethod: 'Logarithmic Doubling Exponential Kinetic Formula: T = [Hours * ln(2)] / ln(hCG_2 / hCG_1)',
    formulaExplanation: 'Doubling Time = [Hours * ln(2)] / ln(hCG_2 / hCG_1). Normal early pregnancy (<6,000 mIU/mL) exhibits doubling times between 48 and 72 hours (or a minimum 66% rise in 48 hours). Above 6,000 mIU/mL, hCG doubling naturally slows down.',
    medicalReferences: [
      'Society of Radiologists in Ultrasound & ACOG Early Pregnancy Viability Consensus',
      'Barnhart KT et al. Gestational Sac and hCG Kinetics in Early Normal Pregnancy. Obstet Gynecol 2004',
      'Seeber BE et al. Application of mathematical models to hCG curves in early pregnancy.'
    ],
    keyStatistics: [
      { label: '48–72h', value: 'Normal Doubling Time', desc: 'Standard exponential doubling velocity for serum Beta-hCG below 1,200 mIU/mL' },
      { label: '66%+', value: 'Minimum 48h Rise', desc: 'The minimum expected 2-day rise in viable intrauterine clinical pregnancies' },
      { label: '1,500+', value: 'Discriminatory Zone', desc: 'hCG level (mIU/mL) where a gestational sac MUST be visible on transvaginal ultrasound' }
    ],
    symptomsToWatch: [
      { name: 'Rapid Morning Nausea', icon: '🤢', description: 'Peak hCG levels at 8–10 weeks stimulate the brainstem chemoreceptor trigger zone.' },
      { name: 'Breast Tenderness & Swelling', icon: '🌸', description: 'Elevated hCG alongside progesterone stimulates alveolar duct proliferation.' },
      { name: 'Severe Unilateral Pelvic Pain', icon: '🚨', description: 'RED FLAG: Sharp one-sided pain with slow or plateauing hCG can signal ectopic pregnancy.' },
      { name: 'Heavy Vaginal Bleeding', icon: '🩸', description: 'RED FLAG: Bright red bleeding with cramping requires urgent serum hCG and ultrasound triage.' }
    ],
    clinicalGuide: {
      heading: 'Understanding Beta-hCG Kinetics and Gestational Progression',
      sections: [
        {
          subheading: '1. What is Beta-hCG and What Does It Measure?',
          content: 'Human Chorionic Gonadotropin (hCG) is a peptide hormone produced by the syncytiotrophoblast cells of the developing placenta following blastocyst implantation. Beta-hCG quantitative blood tests measure the exact concentration in milli-international units per milliliter (mIU/mL).'
        },
        {
          subheading: '2. Normal hCG Doubling Milestones',
          content: 'Under 1,200 mIU/mL: hCG doubles every 48 to 72 hours. Between 1,200 and 6,000 mIU/mL: doubling slows to 72 to 96 hours. Above 6,000 mIU/mL: doubling takes 96+ hours. Once hCG surpasses 6,000 mIU/mL, transvaginal ultrasound becomes the gold standard for tracking viability rather than blood tests.'
        },
        {
          subheading: '3. Ultrasound Discriminatory Thresholds',
          content: 'At 1,000 to 1,500 mIU/mL, a gestational sac should be visible in the uterine cavity on transvaginal sonography. At 3,000 to 5,000 mIU/mL, the yolk sac appears. Above 10,800 mIU/mL, an embryo with cardiac pulsation must be visualized.'
        }
      ]
    },
    whenToSeeDoctor: [
      'Your Beta-hCG doubling time is slower than 72 hours in early pregnancy (<1,200 mIU/mL).',
      'Your hCG levels are declining or plateauing, which may indicate non-viable pregnancy or spontaneous loss.',
      'Your hCG is above 1,500 mIU/mL but no gestational sac is visible inside the uterus (suspected ectopic pregnancy).',
      'You have severe pelvic cramps, dizziness, shoulder tip pain, or heavy vaginal bleeding.'
    ],
    faq: [
      {
        question: 'What is a normal Beta-hCG doubling time?',
        answer: 'Under 1,200 mIU/mL, hCG doubles every 48 to 72 hours. Between 1,200 and 6,000 mIU/mL, it slows to 72–96 hours. Above 6,000 mIU/mL, ultrasound visualization replaces hCG tracking.'
      },
      {
        question: 'What does a slow doubling time indicate?',
        answer: 'A doubling time >72 hours before 6 weeks may indicate an abnormal intrauterine pregnancy, early pregnancy loss, or an ectopic pregnancy requiring immediate ultrasound triage.'
      },
      {
        question: 'Can hCG levels be too high?',
        answer: 'Unusually high hCG levels can indicate multiple gestation (twins or triplets), an earlier conception date than calculated, or rarely a molar pregnancy.'
      },
      {
        question: 'How soon after IVF embryo transfer can hCG be detected?',
        answer: 'Following a Day-5 blastocyst transfer, circulating serum Beta-hCG is typically detectable in blood by 9 to 11 days post-transfer (DP5DT).'
      }
    ]
  },
  {
    id: 'pregnancy-test-calculator',
    slug: 'pregnancy-test-calculator',
    title: 'Pregnancy Test Calculator — When to Test Based on DPO',
    shortTitle: 'Pregnancy Test Calculator',
    icon: '🩺',
    badge: 'ACCURACY GUIDE',
    category: 'Fertility & Ovulation',
    tagline: 'Determine the earliest reliable date for home urine tests (UPT) and serum blood tests',
    description: 'Prevents false negatives by calculating when circulating and urinary hCG levels surpass commercial test thresholds (10 mIU/mL early vs 25 mIU/mL standard).',
    inputs: [
      {
        name: 'lmpDate',
        label: 'First Day of Last Period (LMP)',
        type: 'date',
        defaultValue: new Date(Date.now() - 26 * 86400000).toISOString().split('T')[0],
        helperText: 'Start date of your last cycle.'
      },
      {
        name: 'cycleLength',
        label: 'Average Cycle Length (Days)',
        type: 'number',
        defaultValue: 28,
        helperText: 'Typical length of your monthly cycle.'
      },
      {
        name: 'testSensitivity',
        label: 'Home Test Sensitivity',
        type: 'select',
        defaultValue: 25,
        options: [
          { label: 'Early Detection Test (10 mIU/mL)', value: 10 },
          { label: 'Standard Home Strip / Cassette (25 mIU/mL)', value: 25 },
          { label: 'Serum Beta-hCG Blood Test (1 mIU/mL)', value: 1 }
        ],
        helperText: 'Sensitivity listed on your pregnancy kit packaging.'
      }
    ],
    clinicalMethod: 'Trophoblast hCG Secretion Kinetic Curve & Immunoassay Threshold Algorithm',
    formulaExplanation: 'hCG enters maternal bloodstream ~8-10 days after ovulation following blastocyst implantation, doubling every 48h. Early detection kits (10 mIU/mL) become positive around 11–12 DPO; standard tests (25 mIU/mL) reach >99% reliability on the day of missed menses (14 DPO).',
    medicalReferences: [
      'Cole LA. Biological functions of hCG and home pregnancy test thresholds. Clin Chem 2009',
      'Clinical Chemistry Guidelines on Early Pregnancy Immunometric Assays',
      'ACOG Committee Opinion on Early Gestational Diagnosis'
    ],
    keyStatistics: [
      { label: '99%+', value: 'Missed Period Accuracy', desc: 'Accuracy rate of standard home pregnancy urine tests taken on or after the first day of missed period' },
      { label: '10 mIU/mL', value: 'Early Detection', desc: 'Threshold of ultra-sensitive early pregnancy detection test kits' },
      { label: '11–12 DPO', value: 'First Urine Detection', desc: 'Earliest days post-ovulation where positive home urine tests reliably show faint lines' }
    ],
    symptomsToWatch: [
      { name: 'Missed Expected Period', icon: '🩸', description: 'The single most reliable indicator that corpus luteum progesterone secretion is maintained.' },
      { name: 'Early Metallic Taste / Dysgeusia', icon: '👅', description: 'Hormonal shifts altering taste bud receptors, creating a metallic or sour sensation.' },
      { name: 'Heightened Olfactory Sensitivity', icon: '👃', description: 'Hyperosmia triggered by rapid estrogen and hCG surges in early pregnancy.' },
      { name: 'Frequent Urination', icon: '🚽', description: 'Increased maternal renal blood flow and pelvic vascularity stimulating the bladder.' }
    ],
    clinicalGuide: {
      heading: 'When is the Most Accurate Time to Take a Pregnancy Test?',
      sections: [
        {
          subheading: '1. Why Testing Too Early Causes False Negatives',
          content: 'Implantation typically occurs between 8 and 10 days post-ovulation (DPO). Until implantation is complete, no hCG is secreted into the maternal bloodstream or urine. Testing before 10 DPO frequently results in a false negative because urinary hCG has not yet reached the 10–25 mIU/mL threshold of test strips.'
        },
        {
          subheading: '2. Best Practice: First Morning Urine',
          content: 'In very early pregnancy, your urine hCG concentration is highest after 6 to 8 hours of sleep without excessive fluid intake. Drinking large amounts of water before testing can dilute urinary hCG below the test detection limit.'
        },
        {
          subheading: '3. Evaporation Lines vs True Positive Lines',
          content: 'A true positive line contains colored dye (pink or blue) and appears within the test reaction window (typically 3 to 5 minutes). Faint gray lines that appear after the test has dried (after 10 minutes) are evaporation lines caused by urine drying and should be discarded.'
        }
      ]
    },
    whenToSeeDoctor: [
      'Your period is more than 7 days late and all home tests remain negative.',
      'You receive a positive pregnancy test to confirm intrauterine gestational progression with a clinical blood test.',
      'You experience positive test results followed immediately by heavy bleeding and severe cramping (suspected chemical pregnancy).',
      'You have a positive test accompanied by dizziness, faintness, or one-sided pelvic pain.'
    ],
    faq: [
      {
        question: 'Why did I get a negative test when my period is 1 day late?',
        answer: 'You may have ovulated a few days later than expected. If your period has not arrived, repeat the test with first-morning urine 48 hours later.'
      },
      {
        question: 'What is a chemical pregnancy?',
        answer: 'A chemical pregnancy is an early pregnancy loss that occurs shortly after implantation (around 4 to 5 weeks). It produces a temporary faint positive on tests before bleeding begins.'
      },
      {
        question: 'Can medications cause a false positive pregnancy test?',
        answer: 'Only medications containing actual hCG (such as trigger shots used in IVF like Ovidrel or Pregnyl) can cause false positive pregnancy tests within 10–14 days of administration.'
      }
    ]
  },
  {
    id: 'menstrual-cycle-calculator',
    slug: 'menstrual-cycle-calculator',
    title: 'Menstrual Cycle Calculator & Hormone Phase Tracker',
    shortTitle: 'Menstrual Cycle Calculator',
    icon: '🔄',
    badge: 'CYCLE SYNCING',
    category: 'Cycle & Period',
    tagline: 'Map your 4 biological phases: Menstrual, Follicular, Ovulatory, and Luteal',
    description: 'Provides exact calendar breakdowns of your follicular estrogen rise, ovulatory testosterone peak, and luteal progesterone window for workouts, diet, and mental energy.',
    inputs: [
      {
        name: 'lmpDate',
        label: 'First Day of Last Period',
        type: 'date',
        defaultValue: new Date(Date.now() - 7 * 86400000).toISOString().split('T')[0],
        helperText: 'Date when bleeding started.'
      },
      {
        name: 'cycleLength',
        label: 'Average Cycle Length (Days)',
        type: 'number',
        defaultValue: 28,
        helperText: 'Number of days from one period start to the next.'
      },
      {
        name: 'periodDuration',
        label: 'Bleeding Duration (Days)',
        type: 'number',
        defaultValue: 5,
        helperText: 'How many days your bleeding typically lasts.'
      }
    ],
    clinicalMethod: 'Endocrine Ovarian-Endometrial Phase Matrix & Cycle Syncing Model',
    formulaExplanation: 'Days 1–5: Menstrual Phase (low estrogen & progesterone); Days 6–(Ovulation - 1): Follicular Phase (estrogen surges); (Ovulation - 1) to (Ovulation + 1): Ovulatory Phase (LH & testosterone peak); (Ovulation + 2) to Cycle End: Luteal Phase (progesterone dominance).',
    medicalReferences: [
      'Hall JE. Guyton and Hall Textbook of Medical Physiology — Female Reproductive Endocrinology',
      'Yen & Jaffe’s Reproductive Endocrinology: Physiology, Pathophysiology, and Clinical Management',
      'FIGO Menstrual Disorders Committee Classification System'
    ],
    keyStatistics: [
      { label: '4 Phases', value: 'Hormonal Shift', desc: 'Distinct biological endocrine states governing metabolism, mood, and physical stamina' },
      { label: '21–35 Days', value: 'Normal Length', desc: 'Medically normal adult menstrual cycle duration range classified by FIGO and ACOG' },
      { label: '14 Days', value: 'Fixed Luteal Phase', desc: 'Standard duration of the post-ovulatory luteal phase governed by corpus luteum lifespan' }
    ],
    symptomsToWatch: [
      { name: 'Phase 1: Menstrual Reset', icon: '🩸', description: 'Low hormone baseline, uterus sheds lining, body benefits from iron-rich nutrition and rest.' },
      { name: 'Phase 2: Follicular Estrogen Surge', icon: '🌱', description: 'Rising estradiol boosts mental focus, creativity, verbal recall, and high insulin sensitivity.' },
      { name: 'Phase 3: Ovulatory Peak', icon: '🌸', description: 'Testosterone and LH peak, maximum physical strength, libido, confidence, and social stamina.' },
      { name: 'Phase 4: Luteal Progesterone Dominance', icon: '🍂', description: 'Progesterone promotes calm, increases basal metabolic rate by 100–300 kcal/day, and prompts nesting focus.' }
    ],
    clinicalGuide: {
      heading: 'The 4 Reproductive Phases and Cycle Syncing Science',
      sections: [
        {
          subheading: '1. Phase 1: Menstrual Phase (Days 1–5)',
          content: 'Your cycle begins on the first day of full bleeding. Estrogen and progesterone are at their lowest baseline. The endometrium sheds. Restorative activities like walking, gentle yoga, and warm iron-rich meals (spinach, lentils, bone broth) support tissue recovery.'
        },
        {
          subheading: '2. Phase 2: Follicular Phase (Days 6–13)',
          content: 'Pituitary FSH stimulates ovarian follicles. As follicles mature, they secrete increasing estradiol. Insulin sensitivity is high and glycogen storage is optimized. This is your peak window for high-intensity interval training (HIIT), heavy resistance training, and complex projects.'
        },
        {
          subheading: '3. Phase 3: Ovulatory Phase (Days 14–16)',
          content: 'Estrogen peaks, triggering the LH surge and a mild testosterone spike. Energy, communication skills, and libido are at their highest. Ideal for public speaking, intense athletic workouts, and social engagements.'
        },
        {
          subheading: '4. Phase 4: Luteal Phase (Days 17–28)',
          content: 'The ruptured follicle transforms into the corpus luteum, producing progesterone. Progesterone raises your resting body temperature and basal metabolic rate. Prioritize complex carbohydrates, magnesium, and switch to steady-state Pilates and strength training.'
        }
      ]
    },
    whenToSeeDoctor: [
      'Your menstrual cycles are consistently shorter than 21 days or longer than 35 days.',
      'You experience sudden cycle irregularity after years of predictable periods.',
      'Your luteal phase is shorter than 10 days (luteal phase defect), which can hinder embryo implantation.',
      'You experience severe debilitating PMS, intense mood drops, or anger before your period (suspected PMDD).'
    ],
    faq: [
      {
        question: 'What phase am I in right now?',
        answer: 'Our calculator calculates your exact cycle day today and matches it against your hormone curve to show your current phase superpower and nutritional needs.'
      },
      {
        question: 'What is cycle syncing?',
        answer: 'Cycle syncing is the evidence-based practice of aligning your diet, exercise intensity, and work schedule with the 4 distinct hormonal phases of your menstrual cycle.'
      },
      {
        question: 'Why do I crave more calories before my period?',
        answer: 'During the luteal phase, elevated progesterone increases your basal metabolic rate by approximately 100 to 300 calories per day, naturally increasing appetite.'
      }
    ]
  },
  {
    id: 'period-calculator',
    slug: 'period-calculator',
    title: 'Period Calculator & Next Cycle Predictor',
    shortTitle: 'Period Calculator',
    icon: '🩸',
    badge: 'CALENDAR FORECAST',
    category: 'Cycle & Period',
    tagline: 'Forecast your next 6 menstrual periods, PMS start days, and fertile cycles',
    description: 'Advanced calendar projection engine calculating upcoming period start dates, PMS emotional shifts, and packing reminders for Sakhi 100% Rash-Free sanitary pads.',
    inputs: [
      {
        name: 'lmpDate',
        label: 'First Day of Last Period',
        type: 'date',
        defaultValue: new Date(Date.now() - 10 * 86400000).toISOString().split('T')[0],
        helperText: 'Start date of latest menses.'
      },
      {
        name: 'cycleLength',
        label: 'Average Cycle Length (Days)',
        type: 'number',
        defaultValue: 28,
        helperText: 'Typical interval between periods.'
      },
      {
        name: 'periodDuration',
        label: 'Period Duration (Days)',
        type: 'number',
        defaultValue: 5,
        helperText: 'Typical bleeding length.'
      }
    ],
    clinicalMethod: 'Recurrent Interval Cycle Extrapolation & FIGO Menstrual Model',
    formulaExplanation: 'Future Period N Start = LMP + (N * Cycle Length). PMS Window = Period Start - 5 Days. Ovulation = Period Start - 14 Days.',
    medicalReferences: [
      'FIGO Menstrual Disorders Committee Classification System',
      'ACOG Practice Bulletin on Abnormal Uterine Bleeding in Reproductive-Aged Women'
    ],
    keyStatistics: [
      { label: '6 Months', value: 'Calendar Projection', desc: 'Predictive forecast of upcoming menstrual bleeding cycles and PMS windows' },
      { label: '2–7 Days', value: 'Normal Duration', desc: 'Standard healthy menstrual bleeding duration range recognized by gynecologists' },
      { label: '30–80 mL', value: 'Normal Blood Loss', desc: 'Healthy volume of menstrual fluid shed per monthly period' }
    ],
    symptomsToWatch: [
      { name: 'Premenstrual Cramping (Dysmenorrhea)', icon: '⚡', description: 'Prostaglandin-induced uterine contractions causing lower abdominal throbbing.' },
      { name: 'Bloating & Fluid Retention', icon: '💧', description: 'Progesterone and aldosterone shifts causing temporary 1–3 lb water weight gain.' },
      { name: 'Hormonal Acne Breakouts', icon: '✨', description: 'Progesterone stimulating sebum production in hair follicles 3–7 days before bleeding.' },
      { name: 'Heavy Blood Clots (>1 Rupee Coin)', icon: '🚨', description: 'RED FLAG: Passing clots larger than a coin indicates menorrhagia requiring clinical evaluation.' }
    ],
    clinicalGuide: {
      heading: 'How Menstrual Cycle Prediction Works and When Cycles Shift',
      sections: [
        {
          subheading: '1. Why Calendar Calculations Work',
          content: 'While the first half of the cycle (the follicular phase) can vary depending on stress and sleep, the post-ovulation luteal phase is biologically constant at approximately 14 days. By tracking your historical cycle length, our algorithm accurately projects future period onset dates.'
        },
        {
          subheading: '2. Normal Cycle Variation vs Irregularity',
          content: 'Medical guidelines consider cycles between 21 and 35 days normal. A shift of ±2 to 4 days from month to month is completely expected and does not signify an underlying medical disorder.'
        },
        {
          subheading: '3. Period Care & Rash Prevention',
          content: 'Synthetic bleached plastic sanitary pads trap moisture and heat, leading to friction rashes and contact dermatitis. Meditrust Sakhi™ pads use 100% chlorine-free organic cotton and breathable leakproof barriers to eliminate chafing and irritation.'
        }
      ]
    },
    whenToSeeDoctor: [
      'You soak through one or more sanitary pads every hour for two consecutive hours.',
      'Your period lasts longer than 7 full days of heavy flow.',
      'You experience bleeding between periods or post-coital bleeding.',
      'You miss three consecutive menstrual periods without being pregnant (secondary amenorrhea).'
    ],
    faq: [
      {
        question: 'Why does my period date shift every month?',
        answer: 'A cycle length variation of +/- 2 to 4 days is medically normal due to fluctuations in sleep, emotional stress, travel, and lifestyle factors.'
      },
      {
        question: 'How many pads per day is considered normal?',
        answer: 'Changing 3 to 5 regular sanitary pads per day on heavy days is standard. Soaking more than 1 pad per hour indicates menorrhagia (heavy menstrual bleeding).'
      },
      {
        question: 'Can period tracking help with natural family planning?',
        answer: 'Period tracking highlights your fertile cycles, but for effective natural contraception, it should always be combined with cervical mucus tracking and basal body temperature monitoring.'
      }
    ]
  },
  {
    id: 'implantation-calculator',
    slug: 'implantation-calculator',
    title: 'Implantation Calculator & Early Bleeding Timeline',
    shortTitle: 'Implantation Calculator',
    icon: '💧',
    badge: 'CONCEPTION MILESTONE',
    category: 'Fertility & Ovulation',
    tagline: 'Calculate implantation bleeding dates, embryo blastocyst attachment, and test viability',
    description: 'Tracks the exact 6–12 Day Post-Ovulation (DPO) timeline when the blastocyst burrows into the uterine endometrium, causing mild spotting and triggering hCG secretion.',
    inputs: [
      {
        name: 'ovulationDate',
        label: 'Estimated Ovulation Date',
        type: 'date',
        defaultValue: new Date(Date.now() - 8 * 86400000).toISOString().split('T')[0],
        helperText: 'Date you ovulated (or 14 days before next expected period).'
      }
    ],
    clinicalMethod: 'Blastocyst Endometrial Apposition & Invasion Timeline Model',
    formulaExplanation: 'Fertilization occurs within 24h of ovulation (DPO 0). The morula travels the fallopian tube (DPO 1-4). Blastocyst hatching and implantation occurs between DPO 6 and DPO 12 (peak DPO 8-9).',
    medicalReferences: [
      'Wilcox AJ et al. Time of implantation of the conceptus and loss of pregnancy. New England Journal of Medicine (NEJM) 1999',
      'Norwitz ER, Schust DJ, Fisher SJ. Implantation and the survival of early pregnancy. NEJM 2001'
    ],
    keyStatistics: [
      { label: '8–9 DPO', value: 'Peak Implantation', desc: 'The most frequent days post-ovulation when blastocyst attachment occurs (84% of successful pregnancies)' },
      { label: '25–30%', value: 'Spotting Prevalence', desc: 'Percentage of women who experience mild, painless implantation spotting' },
      { label: '24–48h', value: 'Spotting Duration', desc: 'Typical lifespan of implantation spotting (light pink or brown drops without clots)' }
    ],
    symptomsToWatch: [
      { name: 'Light Pink / Brown Spotting', icon: '💧', description: 'A few drops of oxidized blood caused by micro-vessel disruption as the blastocyst burrows into the endometrium.' },
      { name: 'Mild Uterine Twinges / Flutter', icon: '✨', description: 'Subtle, painless pelvic tickling or light pinching distinctly milder than menstrual cramps.' },
      { name: 'Basal Temperature Implantation Dip', icon: '🌡️', description: 'A 1-day drop in BBT around 7–10 DPO followed by an immediate secondary rise.' },
      { name: 'Initial Wave of Fatigue', icon: '😴', description: 'Surging progesterone and embryonic metabolism causing sudden early drowsiness.' }
    ],
    clinicalGuide: {
      heading: 'The Biology of Blastocyst Implantation and Spotting',
      sections: [
        {
          subheading: '1. What Happens During Embryo Implantation?',
          content: 'After fertilization in the fallopian tube, the single-cell zygote divides repeatedly into a morula and then a blastocyst composed of over 100 cells. By day 6 to 9, the blastocyst reaches the uterine cavity, hatches from its zona pellucida, and attaches (apposition) to the receptive endometrium, burrowing into the maternal blood supply.'
        },
        {
          subheading: '2. Implantation Bleeding vs Period: Key Differences',
          content: 'Implantation bleeding is light pink or brownish, lasts only a few hours to 2 days, and produces no clots. In contrast, menstrual bleeding is bright crimson red, progressively heavier with flow, lasts 3 to 7 days, and often contains tissue clots.'
        },
        {
          subheading: '3. When Can You Test After Implantation?',
          content: 'Beta-hCG enters the bloodstream within 24 hours of successful implantation. A highly sensitive home pregnancy test (10 mIU/mL) can become positive 2 to 3 days after implantation occurs (around 11–12 DPO).'
        }
      ]
    },
    whenToSeeDoctor: [
      'You have heavy bleeding with large clots and sharp cramping rather than light spotting.',
      'You experience severe one-sided lower abdominal pain (possible ectopic pregnancy).',
      'You have fever, chills, or foul-smelling vaginal discharge accompanying bleeding.'
    ],
    faq: [
      {
        question: 'What does implantation bleeding look like?',
        answer: 'Implantation bleeding is light pink or brownish spotting lasting only a few hours to 2 days, without heavy clots or intense cramping.'
      },
      {
        question: 'Do all women get implantation bleeding?',
        answer: 'No. Only about 25% to 30% of women experience visible implantation spotting. Absence of spotting is completely normal and does not mean conception failed.'
      },
      {
        question: 'How many days after implantation will a test be positive?',
        answer: 'Urine pregnancy tests typically turn positive 2 to 4 days after implantation (around 11 to 14 DPO), as hCG levels double every 48 hours.'
      }
    ]
  },
  {
    id: 'pregnancy-weeks-to-months-calculator',
    slug: 'pregnancy-weeks-to-months-calculator',
    title: 'Pregnancy Weeks to Months Calculator & Trimester Matrix',
    shortTitle: 'Weeks to Months Calculator',
    icon: '📆',
    badge: 'GESTATIONAL MATRIX',
    category: 'Pregnancy & Due Date',
    tagline: 'Convert gestational weeks into accurate pregnancy months and trimester milestones',
    description: 'Clears the common confusion of pregnancy math: Pregnancy lasts 40 weeks (280 days), which equals 9 full calendar months plus 1 week (or 10 lunar months).',
    inputs: [
      {
        name: 'currentWeek',
        label: 'Current Gestational Week',
        type: 'number',
        defaultValue: 20,
        helperText: 'Enter your current pregnancy week (1 to 40).'
      }
    ],
    clinicalMethod: 'ACOG Gestational Calendar Conversion System & Trimester Matrix',
    formulaExplanation: 'Month 1: Weeks 1-4; Month 2: Weeks 5-8; Month 3: Weeks 9-13 (End 1st Trimester); Month 4: Weeks 14-17; Month 5: Weeks 18-21; Month 6: Weeks 22-26 (End 2nd Trimester); Month 7: Weeks 27-30; Month 8: Weeks 31-35; Month 9: Weeks 36-40 (Full Term Delivery).',
    medicalReferences: [
      'ACOG Committee Opinion No. 700: Methods for Estimating Due Date',
      'Cunningham FG et al. Williams Obstetrics, 26th Edition'
    ],
    keyStatistics: [
      { label: '40 Weeks', value: 'Total Gestation', desc: 'Standard obstetric gestational duration calculated from the first day of LMP' },
      { label: '3 Trimesters', value: 'Developmental Stages', desc: '1st Trimester (W1–13), 2nd Trimester (W14–26), 3rd Trimester (W27–40+)' },
      { label: '280 Days', value: 'Full Term Count', desc: 'Total clinical days in full-term human pregnancy (equivalent to 10 lunar months)' }
    ],
    symptomsToWatch: [
      { name: '1st Trimester (W1–13)', icon: '🌱', description: 'Organogenesis, neural tube closure, morning nausea, extreme fatigue, breast tenderness.' },
      { name: '2nd Trimester (W14–26)', icon: '🌟', description: 'The "golden trimester", energy returns, baby kicks (quickening at W18–22), anomaly scan.' },
      { name: '3rd Trimester (W27–40)', icon: '🤰', description: 'Rapid fetal weight gain, Braxton Hicks contractions, pelvic pressure, colostrum production.' }
    ],
    clinicalGuide: {
      heading: 'Demystifying Pregnancy Math: Weeks vs Months vs Trimesters',
      sections: [
        {
          subheading: '1. Why is Pregnancy 40 Weeks Instead of 9 Months?',
          content: 'A standard calendar month has 30 or 31 days (approximately 4.3 weeks), whereas an obstetric "lunar month" has exactly 4 weeks (28 days). A full 40-week pregnancy equals 280 days, which translates to 9 full calendar months and 1 week, or 10 lunar months.'
        },
        {
          subheading: '2. The 3 Obstetric Trimesters Breakdown',
          content: 'First Trimester (Weeks 1 to 13): Blastocyst development, embryonic organ formation, and first heartbeat. Second Trimester (Weeks 14 to 26): Fetal growth, sensory development, hearing, and the 20-week anomaly scan. Third Trimester (Weeks 27 to 40+): Lung maturation, fat accumulation, brain growth, and preparation for labor.'
        }
      ]
    },
    whenToSeeDoctor: [
      'Any vaginal bleeding, severe cramping, or fluid leaking at any gestational stage.',
      'Sudden swelling in your hands, face, or ankles accompanied by headaches or vision changes (preeclampsia signs).',
      'A noticeable decrease in fetal kick movements after 28 weeks.'
    ],
    faq: [
      {
        question: 'Why is pregnancy counted as 40 weeks instead of 9 months?',
        answer: 'Medical gestation is dated from the first day of your Last Menstrual Period (2 weeks before conception), totaling 280 days (~9.2 calendar months).'
      },
      {
        question: 'When does the second trimester officially start?',
        answer: 'In clinical obstetrics (ACOG guidelines), the second trimester begins at Week 14 Day 0.'
      },
      {
        question: 'When is a pregnancy considered full term?',
        answer: 'Full term is defined as 39 weeks 0 days to 40 weeks 6 days. Early term is 37 weeks to 38 weeks 6 days.'
      }
    ]
  },
  {
    id: 'due-date-calculator',
    slug: 'due-date-calculator',
    title: 'Pregnancy Due Date Calculator (EDD) — LMP, Conception & Ultrasound',
    shortTitle: 'Due Date Calculator',
    icon: '🤰',
    badge: 'MOST POPULAR · GOLD STANDARD',
    category: 'Pregnancy & Due Date',
    tagline: 'Calculate your Estimated Due Date (EDD), baby countdown, and trimester checkpoints',
    description: 'Utilizes Naegele’s Rule and modern clinical adjustments for cycle length to calculate your exact 40-week delivery date, current gestational age, and fetal development schedule.',
    inputs: [
      {
        name: 'calcMethod',
        label: 'Calculation Method',
        type: 'select',
        defaultValue: 'lmp',
        options: [
          { label: 'First Day of Last Period (LMP)', value: 'lmp' },
          { label: 'Exact Conception Date', value: 'conception' }
        ],
        helperText: 'Choose how you want to calculate your due date.'
      },
      {
        name: 'referenceDate',
        label: 'Reference Date (LMP or Conception)',
        type: 'date',
        defaultValue: new Date(Date.now() - 70 * 86400000).toISOString().split('T')[0],
        helperText: 'Select the date according to chosen method.'
      },
      {
        name: 'cycleLength',
        label: 'Average Cycle Length (Days)',
        type: 'number',
        defaultValue: 28,
        helperText: 'For LMP method: adjusts for cycles longer or shorter than 28 days.'
      }
    ],
    clinicalMethod: 'Naegele’s Clinical Gestational Rule with Cycle Variance Correction (Parikh Formula)',
    formulaExplanation: 'EDD by LMP = LMP + 280 days + (Cycle Length - 28). EDD by Conception = Conception Date + 266 days. Full term delivery occurs between 37 weeks 0 days and 41 weeks 6 days.',
    medicalReferences: [
      'American College of Obstetricians and Gynecologists (ACOG) Committee Opinion #700',
      'National Institute for Health and Care Excellence (NICE) Antenatal Care Guidelines',
      'World Health Organization (WHO) Antenatal Care for a Positive Pregnancy Experience'
    ],
    keyStatistics: [
      { label: '4%', value: 'Exact EDD Births', desc: 'Only 4% of babies are born on their exact mathematical estimated due date' },
      { label: '90%+', value: '2-Week Delivery Window', desc: 'Over 90% of babies are born between 38 weeks 0 days and 42 weeks 0 days' },
      { label: '266 Days', value: 'Post-Conception Time', desc: 'Exact biological fetal developmental timeline from fertilization to delivery' }
    ],
    symptomsToWatch: [
      { name: 'Lightening / Baby Dropping', icon: '👶', description: 'The fetus descending into the maternal pelvic inlet, easing breathing but increasing bladder pressure.' },
      { name: 'Loss of Mucus Plug (Bloody Show)', icon: '🩸', description: 'Cervical softening releasing thick, pink-tinged mucus days or hours before active labor.' },
      { name: 'Rupture of Membranes (Water Breaking)', icon: '💧', description: 'A trickle or gush of amniotic fluid signaling labor onset within 24 hours.' },
      { name: 'Regular Rhythm Contractions', icon: '⏱️', description: '5-1-1 Rule: Contractions every 5 minutes, lasting 1 minute, for 1 full hour.' }
    ],
    clinicalGuide: {
      heading: 'How Your Estimated Due Date is Calculated by Obstetricians',
      sections: [
        {
          subheading: '1. Naegele’s Rule and Cycle Correction',
          content: 'Historically formulated by German obstetrician Franz Karl Naegele, standard due date calculation adds 1 year and 7 days to the first day of your LMP, then subtracts 3 months (equivalent to +280 days). Our calculator further applies Parikh’s formula to adjust for women with cycle lengths longer or shorter than 28 days.'
        },
        {
          subheading: '2. Conception Date Calculation',
          content: 'If you know the exact date of conception (e.g., timed intercourse or intrauterine insemination), your due date is calculated by adding exactly 266 days (38 full weeks) to the conception date.'
        },
        {
          subheading: '3. Clinical Terms: Full Term vs Premature',
          content: 'Preterm: Born before 37 weeks. Early Term: 37w0d to 38w6d. Full Term: 39w0d to 40w6d. Late Term: 41w0d to 41w6d. Post Term: 42w0d and beyond.'
        }
      ]
    },
    whenToSeeDoctor: [
      'You experience regular, painful uterine contractions before 37 weeks (suspected preterm labor).',
      'You notice fluid leaking or a sudden gush of watery discharge.',
      'You experience bright red vaginal bleeding or severe continuous abdominal pain.',
      'You reach 41 weeks without spontaneous onset of labor to discuss antenatal monitoring or induction.'
    ],
    faq: [
      {
        question: 'What percentage of babies are born on their exact due date?',
        answer: 'Only approximately 4% of babies arrive on their exact estimated due date. Over 90% arrive within 2 weeks before or after (38 to 42 weeks).'
      },
      {
        question: 'Can my due date change during pregnancy?',
        answer: 'Yes. If an early first-trimester ultrasound scan (before 14 weeks) differs from your LMP due date by more than 5 to 7 days, your doctor will adjust your official due date to match the ultrasound.'
      },
      {
        question: 'How is the due date calculated for irregular cycles?',
        answer: 'For irregular cycles, standard LMP calculations can be inaccurate. An early dating ultrasound measuring the fetal Crown-Rump Length (CRL) is used as the gold standard.'
      }
    ]
  },
  {
    id: 'ivf-due-date-calculator',
    slug: 'ivf-due-date-calculator',
    title: 'IVF & FET Due Date Calculator (Day-3, Day-5 Blastocyst & Egg Retrieval)',
    shortTitle: 'IVF Due Date Calculator',
    icon: '🧬',
    badge: 'ASSISTED REPRODUCTION',
    category: 'IVF & Clinical',
    tagline: 'Calculate exact EDD for Frozen Embryo Transfer (FET), Day-5 blastocyst, and ICSI',
    description: 'Specifically engineered for fertility patients. Unlike natural conception, IVF transfer dates are mathematically precise to the exact hour of embryo development.',
    inputs: [
      {
        name: 'transferType',
        label: 'IVF Procedure Type',
        type: 'select',
        defaultValue: 'day5',
        options: [
          { label: 'Day-5 Blastocyst Transfer (FET / Fresh)', value: 'day5' },
          { label: 'Day-3 Embryo Transfer', value: 'day3' },
          { label: 'Egg Retrieval Date / ICSI Insemination', value: 'retrieval' }
        ],
        helperText: 'The stage of embryo transferred into your uterus.'
      },
      {
        name: 'procedureDate',
        label: 'Transfer or Retrieval Date',
        type: 'date',
        defaultValue: new Date(Date.now() - 45 * 86400000).toISOString().split('T')[0],
        helperText: 'Date your embryo transfer or egg retrieval took place.'
      }
    ],
    clinicalMethod: 'ASRM Assisted Reproductive Technology Gestational Standard & SART Formula',
    formulaExplanation: 'Day-5 FET: EDD = Transfer Date + 261 days (Equivalent LMP = Transfer - 19 days). Day-3 Transfer: EDD = Transfer Date + 263 days (Equivalent LMP = Transfer - 17 days). Egg Retrieval: EDD = Retrieval Date + 266 days (Equivalent LMP = Retrieval - 14 days).',
    medicalReferences: [
      'American Society for Reproductive Medicine (ASRM) Practice Committee Guidelines',
      'ESHRE (European Society of Human Reproduction and Embryology) Dating Recommendations',
      'Society for Assisted Reproductive Technology (SART) Clinical Reporting Standards'
    ],
    keyStatistics: [
      { label: '100%', value: 'Chronological Precision', desc: 'Zero guesswork in embryonic gestational age due to precise embryology laboratory time-stamping' },
      { label: '261 Days', value: 'Day-5 FET Duration', desc: 'Exact gestational countdown from blastocyst transfer date to 40-week full-term delivery' },
      { label: '19 Days', value: 'Day-5 LMP Offset', desc: 'Equivalent LMP offset subtracted from Day-5 transfer date for standardized medical records' }
    ],
    symptomsToWatch: [
      { name: 'Progesterone Supplementation Symptoms', icon: '💊', description: 'Breast tenderness, bloating, and fatigue caused by prescribed oral, vaginal, or injectable progesterone.' },
      { name: 'Mild Post-Transfer Cramping', icon: '⚡', description: 'Common uterine response to the soft transfer catheter passing through the endocervix.' },
      { name: 'Ovarian Hyperstimulation Warning (OHSS)', icon: '🚨', description: 'RED FLAG: Severe abdominal swelling, rapid weight gain, and shortness of breath following fresh transfer.' },
      { name: 'First Serum Beta-hCG Milestone', icon: '🧪', description: 'Quantitative blood test performed 9 to 14 days post-transfer to confirm implantation.' }
    ],
    clinicalGuide: {
      heading: 'The Clinical Math Behind IVF and Frozen Embryo Transfer (FET) Due Dates',
      sections: [
        {
          subheading: '1. Why IVF Due Dates are the Most Accurate in Medicine',
          content: 'In natural conception, the exact hour of fertilization is unknown because sperm can fertilize an egg up to 5 days after intercourse. In IVF, however, fertilization and blastocyst development are precisely monitored in the embryology laboratory under incubator time-lapse microscopy.'
        },
        {
          subheading: '2. Day-5 Blastocyst vs Day-3 Embryo Transfers',
          content: 'A Day-5 blastocyst has already completed 5 days of cell division and cavity expansion. Therefore, on the day of transfer, you are biologically 2 weeks and 5 days pregnant (2w5d, or 19 days equivalent gestational age). For a Day-3 cleavage stage embryo, you are biologically 2 weeks and 3 days pregnant (17 days equivalent gestational age).'
        },
        {
          subheading: '3. Calculating Your Equivalent LMP for Doctors and Hospitals',
          content: 'Obstetricians and hospital intake forms routinely request your "Last Menstrual Period". For a Day-5 FET, your equivalent clinical LMP is simply calculated as: [Transfer Date minus 19 days].'
        }
      ]
    },
    whenToSeeDoctor: [
      'You experience heavy bleeding or passing of large clots before or around your Beta-hCG test date.',
      'You develop symptoms of OHSS: severe abdominal distension, vomiting, or rapid weight gain of >1 kg in 24h.',
      'You have sharp, worsening unilateral pelvic pain.'
    ],
    faq: [
      {
        question: 'Why is an IVF due date more accurate than LMP dating?',
        answer: 'Because the exact fertilization and transfer timing is recorded in the laboratory, eliminating cycle length and ovulation timing uncertainties.'
      },
      {
        question: 'How do I calculate my equivalent LMP for a Day 5 FET?',
        answer: 'Subtract exactly 19 days from your Day-5 embryo transfer date. This date serves as your official clinical LMP on all medical records.'
      },
      {
        question: 'When is the first ultrasound scheduled after IVF?',
        answer: 'Your fertility clinic will typically schedule your first transvaginal viability scan at 6 to 7 weeks gestation (approximately 4 weeks post-transfer) to confirm gestational sac, yolk sac, and fetal heartbeat.'
      }
    ]
  },
  {
    id: 'due-date-by-ultrasound',
    slug: 'due-date-by-ultrasound',
    title: 'Due Date Calculator by Ultrasound Scan & Crown-Rump Length (CRL)',
    shortTitle: 'Ultrasound Due Date',
    icon: '🩻',
    badge: 'SONOGRAPHIC DATING',
    category: 'Pregnancy & Due Date',
    tagline: 'Calculate EDD from first trimester Crown-Rump Length (CRL) and scan measurements',
    description: 'Gold standard medical ultrasound dating model. Calculates official clinical due date and reconciles differences between LMP and ultrasound biometric measurements.',
    inputs: [
      {
        name: 'scanDate',
        label: 'Ultrasound Scan Date',
        type: 'date',
        defaultValue: new Date(Date.now() - 30 * 86400000).toISOString().split('T')[0],
        helperText: 'Date the dating ultrasound was performed.'
      },
      {
        name: 'scanWeeks',
        label: 'Gestational Weeks on Scan',
        type: 'number',
        defaultValue: 8,
        helperText: 'Weeks stated in your ultrasound report (e.g., 8).'
      },
      {
        name: 'scanDays',
        label: 'Gestational Days on Scan',
        type: 'number',
        defaultValue: 4,
        helperText: 'Extra days stated in your report (0 to 6 days).'
      }
    ],
    clinicalMethod: 'Robinson & Fleming Sonographic CRL Biometric Regression & ACOG Opinion #700',
    formulaExplanation: 'EDD = Scan Date + [280 - (Scan Weeks * 7 + Scan Days)] days. If ultrasound dating in the 1st trimester differs by >5-7 days from LMP, ACOG guidelines mandate changing the official EDD to the ultrasound date.',
    medicalReferences: [
      'ACOG Committee Opinion #700: Ultrasound Biometry and Gestational Age Assessment',
      'ISUOG Practice Guidelines: Performance of first-trimester fetal ultrasound scan',
      'Robinson HP, Fleming JE. A critical evaluation of sonar "crown-rump length" measurements. Br J Obstet Gynaecol 1975'
    ],
    keyStatistics: [
      { label: '±5–7 Days', value: '1st Trimester Margin', desc: 'Accuracy margin of Crown-Rump Length (CRL) ultrasound dating performed before 13w6d' },
      { label: 'Gold Standard', value: 'Clinical Accuracy', desc: 'First-trimester ultrasound is the single most accurate method to date human pregnancy' },
      { label: '13w6d', value: 'CRL Upper Limit', desc: 'Maximum gestational age for CRL measurement before biparietal diameter (BPD) is used' }
    ],
    symptomsToWatch: [
      { name: 'Fetal Heart Pulsation (FHR)', icon: '💓', description: 'Normal embryonic cardiac rate at 6–8 weeks ranges between 110 and 160 beats per minute.' },
      { name: 'Gestational Sac Diameter (MSD)', icon: '⭕', description: 'Mean sac diameter measured transvaginally from 4.5 to 6 weeks.' },
      { name: 'Yolk Sac Verification', icon: '🟡', description: 'Confirmation of true intrauterine gestation ruling out pseudogestational sacs.' },
      { name: 'Crown-Rump Length (CRL)', icon: '📏', description: 'Millimeter measurement from top of head (crown) to bottom of buttocks (rump).' }
    ],
    clinicalGuide: {
      heading: 'Ultrasound Biometry and Due Date Discrepancy Rules',
      sections: [
        {
          subheading: '1. Why First Trimester Ultrasound is the Gold Standard',
          content: 'During the first 12 weeks of human gestation, all human embryos grow at a virtually identical rate, free from the genetic and nutritional size variations that emerge in the second and third trimesters. Crown-Rump Length (CRL) is accurate within ±5 to 7 days.'
        },
        {
          subheading: '2. When Does an Obstetrician Change Your Due Date?',
          content: 'Under ACOG Committee Opinion #700 guidelines: If a dating ultrasound scan before 8w6d differs from LMP by more than 5 days, the official due date is changed to the ultrasound date. Between 9w0d and 13w6d, a difference of more than 7 days mandates changing the official due date.'
        },
        {
          subheading: '3. Why Later Scans Should NOT Change Your Due Date',
          content: 'Ultrasounds in the 2nd and 3rd trimesters have a wider margin of error (±2 to 3 weeks) due to normal genetic variation (some babies are naturally taller or smaller). Therefore, once established in the 1st trimester, your official due date should never be changed based on late scans.'
        }
      ]
    },
    whenToSeeDoctor: [
      'Your ultrasound scan reveals a gestational sac >25 mm without a visible embryo (anembryonic pregnancy).',
      'No fetal heartbeat is detected in an embryo with a CRL measuring ≥7 mm.',
      'The ultrasound report notes an irregular gestational sac or subchorionic hematoma.'
    ],
    faq: [
      {
        question: 'When should my official due date be changed to the ultrasound date?',
        answer: 'If your 1st trimester dating scan (before 13 weeks 6 days) differs from your LMP due date by more than 5 to 7 days, your doctor will adjust your official EDD to match the ultrasound.'
      },
      {
        question: 'Why is the 1st trimester scan more accurate than a 3rd trimester scan?',
        answer: 'Embryos grow at an identical rate in early pregnancy. In the 3rd trimester, individual genetics cause normal size differences (some babies are 6 lbs, others 9 lbs), making dating inaccurate.'
      },
      {
        question: 'What is Crown-Rump Length (CRL)?',
        answer: 'CRL is the millimeter measurement from the top of the fetal head to the bottom of the buttocks on a 2D ultrasound, used to calculate exact gestational age.'
      }
    ]
  }
];
