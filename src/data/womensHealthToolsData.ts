export interface HealthToolDef {
  id: string
  toolNumber: number
  title: string
  shortTitle: string
  slug: string
  tagline: string
  category: 'Fertility & Preconception' | 'Pregnancy & Trimesters' | 'Hospital & Cost Planning' | 'Nutrition & Checklists'
  icon: string
  badge: string
  description: string
  estimatedTime: string
  seoKeywords: string[]
}

export const WOMENS_HEALTH_12_TOOLS: HealthToolDef[] = [
  {
    id: 'fertility-readiness',
    toolNumber: 1,
    title: 'Fertility Readiness Assessment',
    shortTitle: 'Fertility Readiness',
    slug: 'fertility-readiness-assessment',
    tagline: 'Evaluate your biological readiness, AMH risk score, and lifestyle optimization factors',
    category: 'Fertility & Preconception',
    icon: '🎯',
    badge: 'POPULAR',
    description: 'A 2-minute clinical assessment evaluating female age, menstrual cycle regularity, past medical history, and partner factors to generate a personalized conception roadmap.',
    estimatedTime: '2 mins',
    seoKeywords: ['Fertility assessment quiz', 'Can I get pregnant test', 'Fertility score online India', 'Dr Arya fertility readiness']
  },
  {
    id: 'pregnancy-planning',
    toolNumber: 2,
    title: 'Pregnancy Planning Calculator',
    shortTitle: 'Pregnancy Planner',
    slug: 'pregnancy-planning-calculator',
    tagline: 'Calculate ideal conception target dates, birth month milestones, and preconception check timelines',
    category: 'Fertility & Preconception',
    icon: '📅',
    badge: 'SMART PLANNER',
    description: 'Enter your desired delivery season or target timeline to work backwards for optimal folic acid start dates, TSH optimization, and peak fertile cycles.',
    estimatedTime: '1 min',
    seoKeywords: ['Pregnancy planning calculator', 'Conception target date planner', 'Preconception timeline India', 'Baby due date planner']
  },
  {
    id: 'ovulation-calculator',
    toolNumber: 3,
    title: 'Clinical Ovulation & Fertile Window Calculator',
    shortTitle: 'Ovulation Calculator',
    slug: 'ovulation-calculator',
    tagline: 'Pinpoint your exact 6-day fertile window, luteal phase length, and peak LH surge date',
    category: 'Fertility & Preconception',
    icon: '🌸',
    badge: 'HIGH ACCURACY',
    description: 'Based on your Last Menstrual Period (LMP) and average cycle length, calculates ovulation day, peak fertile intercourse dates, and next period forecast.',
    estimatedTime: '1 min',
    seoKeywords: ['Ovulation calculator India', 'Fertile window calculator', 'Best days to get pregnant', 'LMP ovulation tracker']
  },
  {
    id: 'ivf-cost-calculator',
    toolNumber: 4,
    title: 'IVF Cost & Package Calculator',
    shortTitle: 'IVF Cost Calculator',
    slug: 'ivf-cost-calculator',
    tagline: 'Calculate transparent city-wise IVF costs including injections, ICSI, and Jan Aushadhi generic savings',
    category: 'Hospital & Cost Planning',
    icon: '💰',
    badge: 'FINANCIAL TRANSPARENCY',
    description: 'Estimate total out-of-pocket IVF expenses across Pune, Mumbai, Delhi, Bengaluru with medication breakdowns, embryo freezing costs, and 0% EMI options.',
    estimatedTime: '2 mins',
    seoKeywords: ['IVF cost calculator India', 'Real IVF price calculator', 'IVF injection cost', 'Affordable IVF packages 2026']
  },
  {
    id: 'fertility-test-checklist',
    toolNumber: 5,
    title: 'Couple Fertility Test Checklist',
    shortTitle: 'Fertility Test Checklist',
    slug: 'fertility-test-checklist',
    tagline: 'Interactive 360° checklist of essential female and male fertility lab tests with 1-click home booking',
    category: 'Fertility & Preconception',
    icon: '📋',
    badge: 'ESSENTIAL WORKUP',
    description: 'A structured diagnostic roadmap for both partners covering AMH, Semen Analysis (WHO criteria), TSH, Prolactin, Vitamin D3, and HSG fallopian tube scans.',
    estimatedTime: '2 mins',
    seoKeywords: ['Fertility test checklist', 'Pre-IVF tests list', 'Couple fertility blood tests', 'Semen and AMH test list']
  },
  {
    id: 'egg-freezing-guide',
    toolNumber: 6,
    title: 'Egg Freezing Decision Guide & Calculator',
    shortTitle: 'Egg Freezing Guide',
    slug: 'egg-freezing-decision-guide',
    tagline: 'Calculate how many eggs you need to freeze based on your age for 85–90% future live birth confidence',
    category: 'Fertility & Preconception',
    icon: '❄️',
    badge: 'EMPOWERMENT',
    description: 'Evidence-based mathematical model calculating recommended oocyte vitrification numbers, cycle estimates, and cryostorage cost projections for ages 25 to 42.',
    estimatedTime: '2 mins',
    seoKeywords: ['Egg freezing calculator', 'How many eggs to freeze', 'Egg freezing cost calculator India', 'Oocyte vitrification guide']
  },
  {
    id: 'hospital-delivery-cost',
    toolNumber: 7,
    title: 'Hospital Delivery Cost Calculator',
    shortTitle: 'Delivery Cost Calculator',
    slug: 'hospital-delivery-cost-calculator',
    tagline: 'Compare Normal Delivery (Vaginal) vs C-Section costs across private hospitals and insurance covers',
    category: 'Hospital & Cost Planning',
    icon: '🏥',
    badge: 'BUDGET PLANNER',
    description: 'Calculates expected maternity hospitalization expenses in Indian metro and tier-2 hospitals by room category (General, Twin-Sharing, Private Deluxe, Luxury Suite).',
    estimatedTime: '2 mins',
    seoKeywords: ['Hospital delivery cost calculator', 'Normal delivery cost India', 'C section cost calculator', 'Maternity package price Pune']
  },
  {
    id: 'pregnancy-week-calculator',
    toolNumber: 8,
    title: 'Pregnancy Week Calculator & Milestone Tracker',
    shortTitle: 'Pregnancy Week Tracker',
    slug: 'pregnancy-week-calculator',
    tagline: 'Get your exact pregnancy week, trimester status, baby size fruit comparison, and upcoming scans',
    category: 'Pregnancy & Trimesters',
    icon: '👶',
    badge: 'WEEKLY MILESTONES',
    description: 'Enter your LMP or ultrasound dating scan to calculate current gestational age, estimated due date (EDD), critical trimester tests (NT Scan, Anomaly TIFFA Scan, GTT), and fetal growth.',
    estimatedTime: '1 min',
    seoKeywords: ['Pregnancy week calculator', 'Gestational age calculator', 'Baby size week by week', 'Due date calculator India']
  },
  {
    id: 'maternity-hospital-comparison',
    toolNumber: 9,
    title: 'Maternity Hospital Comparison Tool',
    shortTitle: 'Hospital Comparison',
    slug: 'maternity-hospital-comparison',
    tagline: 'Compare top maternity hospitals (Cloudnine, Motherhood, Surya, Apollo, Sahyadri) on NICU Level, costs & ratings',
    category: 'Hospital & Cost Planning',
    icon: '⚖️',
    badge: 'SIDE-BY-SIDE',
    description: 'Compare multi-specialty and boutique birthing centers on emergency NICU readiness, lactation consultant support, painless epidural availability, and insurance cashless tie-ups.',
    estimatedTime: '2 mins',
    seoKeywords: ['Best maternity hospital Pune', 'Maternity hospital comparison India', 'Cloudnine vs Motherhood', 'NICU level 3 hospitals']
  },
  {
    id: 'fertility-clinic-comparison',
    toolNumber: 10,
    title: 'Fertility Clinic & IVF Centre Comparison',
    shortTitle: 'IVF Clinic Comparison',
    slug: 'fertility-clinic-comparison',
    tagline: 'Evaluate IVF chains on embryologist experience, lab air purity (Class 10,000), and pricing transparency',
    category: 'Hospital & Cost Planning',
    icon: '🔬',
    badge: 'CLINICAL BENCHMARK',
    description: 'Objective comparative scorecard for leading IVF centers (Indira IVF, Nova, Oasis, Milann, Cloudnine) assessing ART accreditation, blastocyst conversion rates, and hidden fee policies.',
    estimatedTime: '2 mins',
    seoKeywords: ['Top IVF clinics comparison India', 'Best IVF centre in Pune PCMC', 'Indira IVF vs Nova IVF', 'IVF success rate comparison']
  },
  {
    id: 'pregnancy-nutrition-planner',
    toolNumber: 11,
    title: 'Trimester Pregnancy Nutrition Planner',
    shortTitle: 'Nutrition Planner',
    slug: 'pregnancy-nutrition-planner',
    tagline: 'Customized Indian meal plans for 1st, 2nd, and 3rd Trimesters with Folate, Iron, Calcium, and DHA targets',
    category: 'Nutrition & Checklists',
    icon: '🥗',
    badge: 'DIET & HEALTH',
    description: 'Personalized nutritional roadmap tailored for vegetarian, vegan, and non-vegetarian Indian mothers balancing morning sickness, gestational diabetes, and fetal brain development.',
    estimatedTime: '2 mins',
    seoKeywords: ['Indian pregnancy diet plan', 'Trimester nutrition planner', 'Folate iron calcium meal plan pregnancy', 'Gestational diabetes diet India']
  },
  {
    id: 'hospital-bag-checklist',
    toolNumber: 12,
    title: 'Interactive Maternity Hospital Bag Checklist',
    shortTitle: 'Hospital Bag Checklist',
    slug: 'hospital-bag-checklist',
    tagline: 'Smart packing checklist for Mom, Newborn Baby & Partner with packing progress bar and WhatsApp export',
    category: 'Nutrition & Checklists',
    icon: '🧳',
    badge: 'MUST-HAVE FOR MOM',
    description: 'Comprehensive 40-item packing list organized by delivery room essentials, labor comfort items, postpartum recovery pads, newborn clothing, and hospital documentation.',
    estimatedTime: '2 mins',
    seoKeywords: ['Hospital bag checklist India', 'Maternity bag packing list', 'What to pack for hospital delivery', 'Newborn hospital checklist']
  }
]
