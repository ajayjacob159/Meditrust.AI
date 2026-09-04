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
    badge: 'POPULAR · HIGH ACCURACY',
    category: 'Fertility & Ovulation',
    tagline: 'Pinpoint your exact 6-day fertile window, ovulation day, and peak conception dates',
    description: 'Calculates your peak fertile days based on your Last Menstrual Period (LMP) and average cycle length. Identifies the optimal 48-hour window for intercourse or IUI timing.',
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
    clinicalMethod: 'Clinical Ogino-Knaus & ACOG Ovulation Algorithm',
    formulaExplanation: 'Ovulation occurs approximately [Cycle Length - Luteal Phase] days after the first day of LMP. The fertile window spans 5 days prior to ovulation (sperm longevity in cervical mucus) plus ovulation day itself.',
    medicalReferences: [
      'American College of Obstetricians and Gynecologists (ACOG) Clinical Practice Guide #136',
      'World Health Organization (WHO) Natural Family Planning & Fertile Window Guidelines'
    ],
    faq: [
      {
        question: 'How long can sperm survive in fertile cervical mucus?',
        answer: 'Healthy sperm can survive in alkaline, estrogenic egg-white cervical mucus for up to 5 days, whereas an ovulated egg remains viable for only 12 to 24 hours.'
      },
      {
        question: 'What are the best days to have intercourse to get pregnant?',
        answer: 'Intercourse on the 2 days leading up to ovulation and on ovulation day itself yields the highest biological probability of conception (over 85%).'
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
    clinicalMethod: 'Logarithmic Doubling Exponential Kinetic Formula',
    formulaExplanation: 'Doubling Time = [Hours * ln(2)] / ln(hCG_2 / hCG_1). Normal early pregnancy (<6,000 mIU/mL) exhibits doubling times between 48 and 72 hours (or a minimum 66% rise in 48 hours).',
    medicalReferences: [
      'Society of Radiologists in Ultrasound & ACOG Early Pregnancy Viability Consensus',
      'Barnhart KT et al. Gestational Sac and hCG Kinetics in Early Normal Pregnancy'
    ],
    faq: [
      {
        question: 'What is a normal Beta-hCG doubling time?',
        answer: 'Under 1,200 mIU/mL, hCG doubles every 48 to 72 hours. Between 1,200 and 6,000 mIU/mL, it slows to 72–96 hours. Above 6,000 mIU/mL, ultrasound visualization replaces hCG tracking.'
      },
      {
        question: 'What does a slow doubling time indicate?',
        answer: 'A doubling time >72 hours before 6 weeks may indicate an abnormal intrauterine pregnancy, early pregnancy loss, or an ectopic pregnancy requiring immediate ultrasound triage.'
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
    clinicalMethod: 'Trophoblast hCG Secretion Kinetic Curve',
    formulaExplanation: 'hCG enters maternal bloodstream ~8-10 days after ovulation following implantation, doubling every 48h. Early detection kits (10 mIU/mL) become positive around 11–12 DPO; standard tests (25 mIU/mL) reach >99% reliability on the day of missed menses (14 DPO).',
    medicalReferences: [
      'Cole LA. Biological functions of hCG and home pregnancy test thresholds',
      'Clinical Chemistry Guidelines on Early Pregnancy Immunometric Assays'
    ],
    faq: [
      {
        question: 'Why did I get a negative test when my period is 1 day late?',
        answer: 'You may have ovulated a few days later than expected. If your period has not arrived, repeat the test with first-morning urine 48 hours later.'
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
    clinicalMethod: 'Endocrine Ovarian-Endometrial Phase Matrix',
    formulaExplanation: 'Days 1–5: Menstrual Phase; Days 6–(Ovulation - 1): Follicular Phase; (Ovulation - 1) to (Ovulation + 1): Ovulatory Phase; (Ovulation + 2) to Cycle End: Luteal Phase.',
    medicalReferences: [
      'Hall JE. Guyton and Hall Textbook of Medical Physiology — Female Reproductive Endocrinology'
    ],
    faq: [
      {
        question: 'What phase am I in right now?',
        answer: 'Our calculator calculates your exact cycle day today and matches it against your hormone curve to show your current phase superpower and nutritional needs.'
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
    clinicalMethod: 'Recurrent Interval Cycle Extrapolation',
    formulaExplanation: 'Future Period N Start = LMP + (N * Cycle Length). PMS Window = Period Start - 5 Days. Ovulation = Period Start - 14 Days.',
    medicalReferences: [
      'FIGO Menstrual Disorders Committee Classification System'
    ],
    faq: [
      {
        question: 'Why does my period date shift every month?',
        answer: 'A cycle length variation of +/- 2 to 4 days is medically normal due to fluctuations in sleep, emotional stress, travel, and lifestyle factors.'
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
    clinicalMethod: 'Blastocyst Endometrial Apposition & Invasion Timeline',
    formulaExplanation: 'Fertilization occurs within 24h of ovulation (DPO 0). The morula travels the fallopian tube (DPO 1-4). Blastocyst hatching and implantation occurs between DPO 6 and DPO 10 (peak DPO 8-9).',
    medicalReferences: [
      'Wilcox AJ et al. Time of implantation of the conceptus and loss of pregnancy (NEJM)'
    ],
    faq: [
      {
        question: 'What does implantation bleeding look like?',
        answer: 'Implantation bleeding is light pink or brownish spotting lasting only a few hours to 2 days, without heavy clots or intense cramping.'
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
    clinicalMethod: 'ACOG Gestational Calendar Conversion System',
    formulaExplanation: 'Month 1: Weeks 1-4; Month 2: Weeks 5-8; Month 3: Weeks 9-13 (End 1st Trimester); Month 4: Weeks 14-17; Month 5: Weeks 18-21; Month 6: Weeks 22-26 (End 2nd Trimester); Month 7: Weeks 27-30; Month 8: Weeks 31-35; Month 9: Weeks 36-40 (Full Term Delivery).',
    medicalReferences: [
      'ACOG Committee Opinion No. 700: Methods for Estimating Due Date'
    ],
    faq: [
      {
        question: 'Why is pregnancy counted as 40 weeks instead of 9 months?',
        answer: 'Medical gestation is dated from the first day of your Last Menstrual Period (2 weeks before conception), totaling 280 days (~9.2 calendar months).'
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
    clinicalMethod: 'Naegele’s Clinical Gestational Rule with Cycle Variance Correction',
    formulaExplanation: 'EDD by LMP = LMP + 280 days + (Cycle Length - 28). EDD by Conception = Conception Date + 266 days. Full term delivery occurs between 37 weeks 0 days and 41 weeks 6 days.',
    medicalReferences: [
      'American College of Obstetricians and Gynecologists (ACOG) Committee Opinion #700',
      'National Institute for Health and Care Excellence (NICE) Antenatal Care Guidelines'
    ],
    faq: [
      {
        question: 'What percentage of babies are born on their exact due date?',
        answer: 'Only approximately 4% of babies arrive on their exact estimated due date. Over 90% arrive within 2 weeks before or after (38 to 42 weeks).'
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
    clinicalMethod: 'ASRM Assisted Reproductive Technology Gestational Standard',
    formulaExplanation: 'Day-5 FET: EDD = Transfer Date + 261 days (Equivalent LMP = Transfer - 19 days). Day-3 Transfer: EDD = Transfer Date + 263 days (Equivalent LMP = Transfer - 17 days). Egg Retrieval: EDD = Retrieval Date + 266 days (Equivalent LMP = Retrieval - 14 days).',
    medicalReferences: [
      'American Society for Reproductive Medicine (ASRM) Practice Committee Guidelines',
      'ESHRE (European Society of Human Reproduction and Embryology) Dating Recommendations'
    ],
    faq: [
      {
        question: 'Why is an IVF due date more accurate than LMP dating?',
        answer: 'Because the exact fertilization and transfer timing is recorded in the laboratory, eliminating cycle length and ovulation timing uncertainties.'
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
    clinicalMethod: 'Robinson & Fleming Sonographic CRL Biometric Regression',
    formulaExplanation: 'EDD = Scan Date + [280 - (Scan Weeks * 7 + Scan Days)] days. If ultrasound dating in the 1st trimester differs by >5-7 days from LMP, ACOG guidelines mandate changing the official EDD to the ultrasound date.',
    medicalReferences: [
      'ACOG Committee Opinion #700: Ultrasound Biometry and Gestational Age Assessment',
      'ISUOG Practice Guidelines: Performance of first-trimester fetal ultrasound scan'
    ],
    faq: [
      {
        question: 'When should my official due date be changed to the ultrasound date?',
        answer: 'If your 1st trimester dating scan (before 13 weeks 6 days) differs from your LMP due date by more than 5 to 7 days, your doctor will adjust your official EDD to match the ultrasound.'
      }
    ]
  }
]
