export interface SchemeItem {
  id: string
  name: string
  marathiName?: string
  hindiName?: string
  category: 'central_govt' | 'state_govt' | 'corporate_csr' | 'workplace_grants'
  categoryLabel: string
  state?: string
  targetAudience: string
  lifeStage: 'Teen & Student' | 'Maternity & Child' | 'Working & Entrepreneur' | 'Senior & Menopause' | 'All Life Stages'
  benefitAmount: string
  badgeColor: string
  icon: string
  tagline: string
  keyBenefits: string[]
  eligibility: string[]
  documentsRequired: string[]
  applicationProcess: string
  officialPortal: string
  helpline: string
  corporateOrGovtBody: string
}

export const WOMENS_SCHEMES_AND_FUNDS: SchemeItem[] = [
  // ── CENTRAL GOVERNMENT SCHEMES ──
  {
    id: 'pmmvy',
    name: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
    marathiName: 'प्रधानमंत्री मातृ वंदना योजना',
    hindiName: 'प्रधानमंत्री मातृ वंदना योजना',
    category: 'central_govt',
    categoryLabel: 'Central Government',
    state: 'Pan-India',
    targetAudience: 'Pregnant Women & Lactating Mothers (PW&LM)',
    lifeStage: 'Maternity & Child',
    benefitAmount: '₹5,000 – ₹6,000 DBT Cash Assistance',
    badgeColor: 'bg-rose-50 text-rose-800 border-rose-200',
    icon: '🤰',
    tagline: 'Direct Cash Incentive for First & Second Girl Child Delivery and Maternal Nutrition',
    keyBenefits: [
      '₹5,000 direct bank transfer in 2 installments for first living child.',
      'Additional ₹6,000 in a single installment if the second child is a girl (promoting girl child birth).',
      'Compensates for wage loss during pregnancy and encourages institutional delivery.',
      'Linked with early ANC registration and mandatory infant vaccinations (BCG, OPV, DPT, Hepatitis B).'
    ],
    eligibility: [
      'Pregnant women aged 19 years and above.',
      'Family income within eligible socio-economic categories (EWS, BPL, MGNREGA job card, PM-JAY beneficiaries, farmers under PM-KISAN, or annual family income < ₹8 Lakhs).',
      'Excludes regular employees of Central/State Govt or PSUs.'
    ],
    documentsRequired: [
      'Aadhaar Card of Mother and Husband',
      'Mother and Child Protection (MCP / RCH) Card',
      'Aadhaar-seeded Bank / Post Office Account Passbook',
      'Child Birth Certificate (for 2nd installment/girl child benefit)'
    ],
    applicationProcess: 'Apply online on the PMMVY 2.0 portal (pmmvy.wcd.gov.in) or visit your local Anganwadi Centre / ASHA worker.',
    officialPortal: 'https://pmmvy.wcd.gov.in',
    helpline: '181 / 011-23382393',
    corporateOrGovtBody: 'Ministry of Women and Child Development (MoWCD), Govt of India'
  },
  {
    id: 'jsy',
    name: 'Janani Suraksha Yojana (JSY)',
    marathiName: 'जननी सुरक्षा योजना',
    category: 'central_govt',
    categoryLabel: 'Central Government',
    state: 'Pan-India',
    targetAudience: 'Low-Income Pregnant Women',
    lifeStage: 'Maternity & Child',
    benefitAmount: '₹1,400 (Rural) / ₹1,000 (Urban) Cash Assistance',
    badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
    icon: '🏥',
    tagline: '100% Cash Incentive to Promote Safe Institutional Hospital Deliveries',
    keyBenefits: [
      '₹1,400 financial assistance for rural mothers delivering in government or accredited private hospitals.',
      '₹1,000 financial assistance for urban mothers in government health facilities.',
      'Free ambulance transport (102/108) from home to hospital and back.',
      'Zero user charges for delivery, drugs, blood transfusion, and neonatal care under JSSK (Janani Shishu Suraksha Karyakram).'
    ],
    eligibility: [
      'All pregnant women delivering in government health centers and accredited private hospitals.',
      'Universal eligibility in Low Performing States (LPS); BPL/SC/ST eligibility in High Performing States (HPS).'
    ],
    documentsRequired: [
      'Aadhaar Card',
      'BPL Card / Ration Card / Caste Certificate',
      'JSSK / MCP Card',
      'Hospital Discharge & Delivery Certificate',
      'Bank Account details'
    ],
    applicationProcess: 'Automatic registration through your local ASHA worker during pregnancy registration at PHC/CHC.',
    officialPortal: 'https://nhm.gov.in',
    helpline: '104 (Health Helpline) / 108 (Ambulance)',
    corporateOrGovtBody: 'National Health Mission (NHM), Ministry of Health & Family Welfare'
  },
  {
    id: 'pmsma',
    name: 'Pradhan Mantri Surakshit Matritva Abhiyan (PMSMA)',
    marathiName: 'प्रधानमंत्री सुरक्षित मातृत्व अभियान',
    category: 'central_govt',
    categoryLabel: 'Central Government',
    state: 'Pan-India',
    targetAudience: 'Pregnant Women in 2nd & 3rd Trimesters',
    lifeStage: 'Maternity & Child',
    benefitAmount: 'Free OB-GYN Checkups on 9th of Every Month',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    icon: '🩺',
    tagline: 'Guaranteed, Quality Antenatal Care (ANC) by Specialist Gynecologists',
    keyBenefits: [
      'Free comprehensive clinical checkups on the 9th day of every month at all CHCs, Sub-district & District Hospitals.',
      'Free diagnostic ultrasound (USG), blood investigations (Hb, blood group, OGTT for gestational diabetes, HIV, VDRL, urine albumin).',
      'Identification of High-Risk Pregnancies (HRP) with color-coded stickers (Red: High risk, Green: Normal).',
      'Free Iron-Folic Acid (IFA) and Calcium tablets distributed.'
    ],
    eligibility: [
      'All pregnant women in their second and third trimesters (after 12 weeks of pregnancy).',
      'Available to all women irrespective of economic or socio-economic status.'
    ],
    documentsRequired: [
      'Aadhaar Card / ID Proof',
      'MCP (Mother-Child Protection) Card',
      'Previous blood/ultrasound medical records'
    ],
    applicationProcess: 'Walk into any Government Hospital, PHC, CHC, or empanelled private maternity clinic on the 9th of any month.',
    officialPortal: 'https://pmsma.mohfw.gov.in',
    helpline: '1800-180-1104',
    corporateOrGovtBody: 'Ministry of Health and Family Welfare (MoHFW)'
  },
  {
    id: 'ayushman-bharat-women',
    name: 'Ayushman Bharat PM-JAY (Women & Maternal Health Packages)',
    marathiName: 'आयुष्मान भारत प्रधानमंत्री जन आरोग्य योजना',
    category: 'central_govt',
    categoryLabel: 'Central Government',
    state: 'Pan-India',
    targetAudience: 'Vulnerable Families & All Women Senior Citizens (70+)',
    lifeStage: 'All Life Stages',
    benefitAmount: '₹5,00,000 / Family / Year Cashless Treatment',
    badgeColor: 'bg-teal-50 text-teal-800 border-teal-200',
    icon: '🛡️',
    tagline: 'World’s Largest Cashless Health Cover for Gynecological Surgeries, C-Sections & Oncology',
    keyBenefits: [
      '₹5 Lakh per family per year for secondary and tertiary hospitalizations across 29,000+ empanelled hospitals.',
      'Covers 1,949+ medical procedures including high-risk C-sections, hysterectomy, ovarian cystectomy, and breast/cervical cancer therapies.',
      'Includes 3 days pre-hospitalization and 15 days post-discharge medications & diagnostic tests.',
      'Universal ₹5 Lakh top-up for all women aged 70+ irrespective of income.'
    ],
    eligibility: [
      'Families identified under SECC 2011 database or NFSA Ration Card.',
      'All Senior Citizen Women aged 70+ (universal Ayushman Vaya Vandana Card).'
    ],
    documentsRequired: [
      'Aadhaar Card',
      'Ration Card / PM-JAY Family ID',
      'ABHA Card (Ayushman Bharat Health Account)'
    ],
    applicationProcess: 'Visit beneficiary.nha.gov.in or any Empanelled Hospital (e.g. Ruby Hall, Sassoon, Sahyadri in Pune) with Aadhaar.',
    officialPortal: 'https://beneficiary.nha.gov.in',
    helpline: '14555 / 1800-111-565',
    corporateOrGovtBody: 'National Health Authority (NHA)'
  },
  {
    id: 'sukanya-samriddhi',
    name: 'Sukanya Samriddhi Yojana (SSY)',
    marathiName: 'सुकन्या समृद्धी योजना',
    category: 'central_govt',
    categoryLabel: 'Central Government',
    state: 'Pan-India',
    targetAudience: 'Parents of Girl Children (Age 0–10 Years)',
    lifeStage: 'Teen & Student',
    benefitAmount: '8.2% Compounded Interest + 100% Tax Exemption (EEE)',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    icon: '🪙',
    tagline: 'Sovereign Wealth & Higher Education Fund for Girl Children under Beti Bachao Beti Padhao',
    keyBenefits: [
      'Highest sovereign government interest rate (8.2% p.a.) compounded annually.',
      'Triple Tax Exemption (Exempt-Exempt-Exempt under Section 80C) on investment, interest, and maturity corpus.',
      'Minimum deposit of just ₹250/year up to ₹1.5 Lakhs/year for 15 years.',
      'Partial 50% withdrawal allowed after girl child turns 18 for college higher education.'
    ],
    eligibility: [
      'Girl child aged 0 to 10 years.',
      'Maximum 2 accounts per family (or 3 in case of triplets/twin girls).'
    ],
    documentsRequired: [
      'Birth Certificate of Girl Child',
      'Aadhaar / ID & Address Proof of Parent/Guardian',
      'Passport size photos'
    ],
    applicationProcess: 'Open an SSY account at any Post Office or authorized commercial bank (SBI, HDFC, ICICI, Bank of Maharashtra).',
    officialPortal: 'https://www.indiapost.gov.in',
    helpline: '1800-266-6868',
    corporateOrGovtBody: 'Ministry of Finance & Department of Posts'
  },
  {
    id: 'suvidha-sanitary-pads',
    name: 'Jan Aushadhi Suvidha Sanitary Napkins',
    marathiName: 'जन औषधी सुविधा सॅनिटरी नॅपकिन्स',
    category: 'central_govt',
    categoryLabel: 'Central Government',
    state: 'Pan-India',
    targetAudience: 'All Women & Adolescent Girls',
    lifeStage: 'All Life Stages',
    benefitAmount: '₹1 / Pad (100% Oxo-Biodegradable)',
    badgeColor: 'bg-pink-50 text-pink-800 border-pink-200',
    icon: '🩸',
    tagline: 'Affordable, Eco-Friendly Menstrual Hygiene Protection across 10,000+ Kendras',
    keyBenefits: [
      'High-quality, absorbent sanitary pads at an ultra-subsidized price of ₹1 per pad (Pack of 4 for ₹4).',
      '100% oxo-biodegradable material preventing environmental plastic waste and micro-infections.',
      'Available across 10,000+ Pradhan Mantri Bhartiya Janaushadhi Kendras (PMBJK) pan-India.',
      'Combats menstrual normalization and prevents cervical and reproductive tract infections (RTIs).'
    ],
    eligibility: ['Available to all women and girls across India without prescription or income proof.'],
    documentsRequired: ['None — Direct over-the-counter purchase.'],
    applicationProcess: 'Walk into any Jan Aushadhi generic pharmacy store. Use Meditrust AI to locate your nearest store.',
    officialPortal: 'https://janaushadhi.gov.in',
    helpline: '1800-180-8080 / 14477',
    corporateOrGovtBody: 'Pharmaceuticals & Medical Devices Bureau of India (PMBI)'
  },
  {
    id: 'poshan-2-anemia',
    name: 'Mission Poshan 2.0 & Anemia Mukt Bharat',
    marathiName: 'मिशन पोषण २.० व ॲनिमिया मुक्त भारत',
    category: 'central_govt',
    categoryLabel: 'Central Government',
    state: 'Pan-India',
    targetAudience: 'Adolescent Girls, Pregnant & Lactating Women',
    lifeStage: 'Teen & Student',
    benefitAmount: 'Free Weekly Iron-Folic Acid (WIFS) & Deworming',
    badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
    icon: '🍎',
    tagline: 'National Initiative to Combat the 57% Female Anemia Epidemic',
    keyBenefits: [
      'Free Weekly Iron and Folic Acid Supplementation (WIFS Blue tablets) for schoolgirls and non-school girls.',
      'Daily 100mg elemental Iron + 500mcg Folic Acid tablets during pregnancy and lactation.',
      'Bi-annual National Deworming Day (Albendazole 400mg) at schools and Anganwadi centers.',
      'Point-of-care digital hemoglobinometer testing at Health & Wellness Centers (Ayushman Arogya Mandirs).'
    ],
    eligibility: ['All adolescent girls (10–19 yrs), pregnant women, and lactating mothers.'],
    documentsRequired: ['MCP Card / School ID (for school campaigns).'],
    applicationProcess: 'Distributed weekly at Government & Aided Schools and Anganwadi Centers.',
    officialPortal: 'https://anemiamuktbharat.info',
    helpline: '104 / 181',
    corporateOrGovtBody: 'MoHFW & Ministry of Women and Child Development'
  },
  {
    id: 'mudra-standup-women',
    name: 'Stand-Up India & MUDRA Mahila Udyami Scheme',
    marathiName: 'महिला उद्योजकांसाठी मुद्रा व स्टँड-अप इंडिया',
    category: 'central_govt',
    categoryLabel: 'Central Government',
    state: 'Pan-India',
    targetAudience: 'Women Entrepreneurs & Self-Help Group (SHG) Leaders',
    lifeStage: 'Working & Entrepreneur',
    benefitAmount: '₹50,000 up to ₹1 Crore Collateral-Free Loans',
    badgeColor: 'bg-indigo-50 text-indigo-800 border-indigo-200',
    icon: '💼',
    tagline: 'Empowering Women-Led Businesses, Health Clinics & Manufacturing Enterprises',
    keyBenefits: [
      'Stand-Up India: Bank loans from ₹10 Lakhs to ₹1 Crore for greenfield enterprises set up by women.',
      'MUDRA Scheme: Loans up to ₹10 Lakhs (Shishu ₹50k, Kishore ₹5L, Tarun ₹10L) with 0.25% interest rate concession for women.',
      'Zero collateral security required with Credit Guarantee Scheme backing.',
      'Repayment tenure up to 7 years with a moratorium period of up to 18 months.'
    ],
    eligibility: [
      'Women entrepreneurs aged 18 years and above.',
      'For non-individual enterprises, at least 51% of shareholding and controlling stake held by a woman.'
    ],
    documentsRequired: [
      'Aadhaar & PAN Card of Applicant',
      'Business Project Report & Quotations',
      'Bank Account Statement (6 months)',
      'Proof of Business Address & Registration (Udyam Aadhaar)'
    ],
    applicationProcess: 'Apply online on standupmitra.in or udyamimitra.in, or visit any Scheduled Commercial Bank.',
    officialPortal: 'https://www.standupmitra.in',
    helpline: '1800-180-1111',
    corporateOrGovtBody: 'SIDBI & Department of Financial Services'
  },
  {
    id: 'mahila-samman-savings',
    name: 'Mahila Samman Savings Certificate (MSSC)',
    marathiName: 'महिला सन्मान बचत प्रमाणपत्र',
    category: 'central_govt',
    categoryLabel: 'Central Government',
    state: 'Pan-India',
    targetAudience: 'Women of Any Age & Girls (via Guardian)',
    lifeStage: 'All Life Stages',
    benefitAmount: '7.5% Guaranteed Interest (2-Year Sovereign Term)',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    icon: '📜',
    tagline: 'High-Yield Government Savings Instrument Exclusively for Women',
    keyBenefits: [
      'Fixed guaranteed interest rate of 7.5% p.a. compounded quarterly.',
      'Short 2-year tenure with flexible investment from ₹1,000 up to ₹2,00,000.',
      'Partial withdrawal of up to 40% of the balance allowed after 1 year.',
      'Sovereign safety with zero market risk backed directly by the Ministry of Finance.'
    ],
    eligibility: ['Any woman can open in her own name, or by a guardian on behalf of a minor girl.'],
    documentsRequired: [
      'Aadhaar Card',
      'PAN Card',
      'Address Proof & Passport Photo'
    ],
    applicationProcess: 'Submit Form-1 at any Post Office or designated Public/Private Bank branch (SBI, BoB, Canara, HDFC).',
    officialPortal: 'https://www.indiapost.gov.in',
    helpline: '1800-266-6868',
    corporateOrGovtBody: 'Ministry of Finance, Govt of India'
  },

  // ── STATE GOVERNMENT SCHEMES ──
  {
    id: 'ladki-bahin-maharashtra',
    name: 'Mukhyamantri Majhi Ladki Bahin Yojana (Maharashtra)',
    marathiName: 'मुख्यमंत्री माझी लाडकी बहीण योजना (महाराष्ट्र)',
    category: 'state_govt',
    categoryLabel: 'State Government',
    state: 'Maharashtra',
    targetAudience: 'Women Aged 21–65 in Maharashtra',
    lifeStage: 'Working & Entrepreneur',
    benefitAmount: '₹1,500 / Month Direct DBT (₹18,000 / Year)',
    badgeColor: 'bg-rose-100 text-rose-950 border-rose-300 font-bold',
    icon: '🌸',
    tagline: 'Flagship Universal DBT Financial Independence Scheme for Women in Maharashtra',
    keyBenefits: [
      '₹1,500 transferred directly every month into the Aadhaar-linked bank account of the beneficiary.',
      'Provides vital financial security for healthcare, nutrition, and household decision-making.',
      'Over 2.2 Crore women enrolled across Pune, PCMC, Mumbai, Marathwada, and Vidarbha.',
      'Special online and offline facilitation desks at Setu Suvidha Kendras, Anganwadis, and Gram Panchayats.'
    ],
    eligibility: [
      'Resident woman of Maharashtra aged 21 to 65 years.',
      'Annual combined family income must be less than ₹2.5 Lakhs (Income certificate waived for Yellow & Orange Ration Card holders).',
      'Should possess an individual bank account seeded with Aadhaar.'
    ],
    documentsRequired: [
      'Aadhaar Card',
      'Maharashtra Domicile Certificate / Ration Card / School Leaving Certificate proving 15-year residency',
      'Income Certificate (or Yellow/Orange Ration Card)',
      'Aadhaar-linked Bank Passbook',
      'Hamipatra (Undertaking Form)'
    ],
    applicationProcess: 'Apply online on the Nari Shakti Doot App / ladkibahin.maharashtra.gov.in or visit local Ward/Gram Panchayat.',
    officialPortal: 'https://ladkibahin.maharashtra.gov.in',
    helpline: '181 (Women Helpline) / 022-22025251',
    corporateOrGovtBody: 'Women & Child Development Dept, Govt of Maharashtra'
  },
  {
    id: 'majhi-kanya-bhagyashree-mh',
    name: 'Majhi Kanya Bhagyashree Yojana (Maharashtra)',
    marathiName: 'माझी कन्या भाग्यश्री योजना (महाराष्ट्र)',
    category: 'state_govt',
    categoryLabel: 'State Government',
    state: 'Maharashtra',
    targetAudience: 'Families with Single or Two Girl Children',
    lifeStage: 'Teen & Student',
    benefitAmount: '₹50,000 (1 Girl) / ₹25,000 Each (2 Girls) Fixed Deposit',
    badgeColor: 'bg-purple-50 text-purple-800 border-purple-200',
    icon: '👧',
    tagline: 'Incentivizing Girl Child Education & Stopping Female Foeticide in Maharashtra',
    keyBenefits: [
      '₹50,000 deposited in bank for one girl child if mother/father undergoes family planning within 1 year.',
      '₹25,000 each for two girl children upon family planning sterilization.',
      'Accumulated interest paid at age 6 (schooling) and age 12 (high school), with full maturity corpus released at age 18.',
      'Covers complete medical checkups and basic vaccination monitoring.'
    ],
    eligibility: [
      'Permanent residents of Maharashtra.',
      'Family income up to ₹7.5 Lakhs per year (revised under MKBY 2.0).',
      'Girl child must be registered within 6 months of birth.'
    ],
    documentsRequired: [
      'Birth Certificate of Girl Child',
      'Income Certificate / Ration Card',
      'Domicile Certificate of Maharashtra',
      'Sterilization / Family Planning Certificate from Govt Hospital',
      'Joint Bank Account of Mother & Child'
    ],
    applicationProcess: 'Apply through the Child Development Project Officer (CDPO) or Women and Child Development Office at Zilla Parishad.',
    officialPortal: 'https://womenchild.maharashtra.gov.in',
    helpline: '022-22025251',
    corporateOrGovtBody: 'Govt of Maharashtra'
  },
  {
    id: 'gruha-lakshmi-karnataka',
    name: 'Gruha Lakshmi Scheme (Karnataka)',
    category: 'state_govt',
    categoryLabel: 'State Government',
    state: 'Karnataka',
    targetAudience: 'Women Head of the Household',
    lifeStage: 'Working & Entrepreneur',
    benefitAmount: '₹2,000 / Month DBT (₹24,000 / Year)',
    badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
    icon: '🏠',
    tagline: 'Direct Monthly Financial Empowerment for 1.2 Crore Female Household Heads in Karnataka',
    keyBenefits: [
      '₹2,000 credited directly every month to the woman listed as head of family in BPL/APL ration cards.',
      'Unrestricted cash grant for women to spend on family healthcare, nutrition, or small business inputs.',
      'Seamless biometric or OTP e-KYC integration.'
    ],
    eligibility: [
      'Woman listed as head of household in Antyodaya, BPL, or APL cards in Karnataka.',
      'Neither the woman nor her husband should be income tax or GST payees.'
    ],
    documentsRequired: [
      'Ration Card (APL/BPL/AAY)',
      'Aadhaar Card of Woman & Husband',
      'Aadhaar-linked Bank Account details'
    ],
    applicationProcess: 'Apply at Grama One, Karnataka One, or Bangalore One centers, or online on sevasindhu.karnataka.gov.in.',
    officialPortal: 'https://sevasindhu.karnataka.gov.in',
    helpline: '1902 / 080-22279970',
    corporateOrGovtBody: 'Dept of Women & Child Development, Govt of Karnataka'
  },
  {
    id: 'muthulakshmi-reddy-tn',
    name: 'Dr. Muthulakshmi Reddy Maternity Benefit Scheme (Tamil Nadu)',
    category: 'state_govt',
    categoryLabel: 'State Government',
    state: 'Tamil Nadu',
    targetAudience: 'Pregnant & Lactating Women',
    lifeStage: 'Maternity & Child',
    benefitAmount: '₹18,000 Cash Assistance + ₹4,000 Amma Nutrition Kit',
    badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-200',
    icon: '🎁',
    tagline: 'Comprehensive Maternity Financial Aid and Fortified Nutrition Kits in Tamil Nadu',
    keyBenefits: [
      '₹18,000 cash assistance paid in 5 conditional installments across pregnancy and vaccination stages.',
      '2 Amma Nutrition Kits (worth ₹4,000) containing health mix powder, iron tonic, dates, and maternal hygiene items.',
      'Covers 100% of ante-natal and post-natal care at Government PHCs and Medical Colleges.'
    ],
    eligibility: [
      'Poor pregnant mothers aged 19 years and above in Tamil Nadu.',
      'Applicable for first two deliveries.'
    ],
    documentsRequired: [
      'PICME (Pregnancy and Infant Cohort Monitoring and Evaluation) 12-digit RCH ID',
      'Aadhaar Card & Smart Ration Card',
      'Bank Passbook linked with Aadhaar'
    ],
    applicationProcess: 'Register with Village Health Nurse (VHN) at local Urban/Primary Health Centre within 12 weeks of pregnancy.',
    officialPortal: 'https://picme.tn.gov.in',
    helpline: '104 / 102',
    corporateOrGovtBody: 'Dept of Public Health & Preventive Medicine, Govt of Tamil Nadu'
  },
  {
    id: 'kcr-kit-telangana',
    name: 'KCR Kit Scheme & Arogya Lakshmi (Telangana)',
    category: 'state_govt',
    categoryLabel: 'State Government',
    state: 'Telangana',
    targetAudience: 'Pregnant Women Delivering in Govt Hospitals',
    lifeStage: 'Maternity & Child',
    benefitAmount: '₹12,000 – ₹13,000 + 16-Item Baby & Mother Kit',
    badgeColor: 'bg-blue-50 text-blue-800 border-blue-200',
    icon: '👶',
    tagline: 'Financial Aid & Complete Care Package for New Mothers in Telangana',
    keyBenefits: [
      '₹12,000 for male child birth and ₹13,000 for female child birth in 4 installments.',
      'Comprehensive 16-item kit containing baby soaps, oil, mosquito net, dresses, mother sarees, and hygiene powders.',
      'Arogya Lakshmi: One full nutritious cooked meal daily with boiled egg and 200ml milk at Anganwadi.'
    ],
    eligibility: ['Pregnant women who are residents of Telangana delivering in Government Hospitals (maximum 2 deliveries).'],
    documentsRequired: ['Aadhaar Card', 'Ration Card', 'KCR Kit Portal Registration / MCP Card', 'Bank Passbook'],
    applicationProcess: 'Automatic registration at government maternity hospitals through ANM/ASHA.',
    officialPortal: 'https://kcrkit.telangana.gov.in',
    helpline: '104 / 108',
    corporateOrGovtBody: 'Health, Medical & Family Welfare Dept, Govt of Telangana'
  },
  {
    id: 'kanyashree-lakshmir-wb',
    name: 'Kanyashree Prakalpa & Lakshmir Bhandar (West Bengal)',
    category: 'state_govt',
    categoryLabel: 'State Government',
    state: 'West Bengal',
    targetAudience: 'Adolescent Girls (13–19) & Adult Women (25–60)',
    lifeStage: 'Teen & Student',
    benefitAmount: '₹25,000 One-Time Grant + ₹1,000–₹1,200/Month DBT',
    badgeColor: 'bg-pink-50 text-pink-800 border-pink-200',
    icon: '🎓',
    tagline: 'UN-Awarded Girl Child Retention & Women Household Support Scheme in West Bengal',
    keyBenefits: [
      'Kanyashree K1 (₹1,000/yr for schooling girls aged 13–18) + Kanyashree K2 (₹25,000 one-time grant at age 18 if unmarried and studying).',
      'Lakshmir Bhandar: ₹1,000/month for General category women and ₹1,200/month for SC/ST women aged 25–60.',
      'Dramatically reduced dropouts and child marriages across 8.5 Million+ girls.'
    ],
    eligibility: ['Female residents of West Bengal studying in recognized schools/colleges (Kanyashree); women aged 25–60 not employed in regular govt services (Lakshmir Bhandar).'],
    documentsRequired: ['Aadhaar Card', 'Swasthya Sathi Card', 'School/College Enrollment Certificate', 'Bank Account details'],
    applicationProcess: 'Apply through your school/college for Kanyashree or Duare Sarkar camps for Lakshmir Bhandar.',
    officialPortal: 'https://wbkanyashree.gov.in',
    helpline: '1800-102-8014',
    corporateOrGovtBody: 'Dept of Women & Child Development & Social Welfare, Govt of WB'
  },
  {
    id: 'kanya-sumangala-up',
    name: 'Mukhyamantri Kanya Sumangala Yojana (Uttar Pradesh)',
    category: 'state_govt',
    categoryLabel: 'State Government',
    state: 'Uttar Pradesh',
    targetAudience: 'Girl Children from Birth to Graduation',
    lifeStage: 'Teen & Student',
    benefitAmount: '₹25,000 Total Package (Phased over 6 Milestones)',
    badgeColor: 'bg-teal-50 text-teal-800 border-teal-200',
    icon: '✨',
    tagline: 'Holistic Financial Support for Girl Child from Birth, Vaccination to College Graduation',
    keyBenefits: [
      '₹5,000 at birth (Stage 1) + ₹2,000 after complete 1-year immunization (Stage 2).',
      '₹3,000 upon Class 1 admission (Stage 3) + ₹3,000 upon Class 6 admission (Stage 4).',
      '₹5,000 upon Class 9 admission (Stage 5) + ₹7,000 upon Degree / 2-year Diploma admission (Stage 6).',
      'Encourages complete vaccination, zero female infanticide, and higher graduation rates.'
    ],
    eligibility: ['Permanent residents of UP with annual family income ≤ ₹3 Lakhs (maximum 2 girl children per family).'],
    documentsRequired: ['Aadhaar Card of Parent & Child', 'Birth Certificate', 'Immunization Card', 'School Admission Proof', 'Income & Domicile Certificate'],
    applicationProcess: 'Apply online on mksy.up.gov.in or through Block Development Officer (BDO).',
    officialPortal: 'https://mksy.up.gov.in',
    helpline: '181 / 0522-2286315',
    corporateOrGovtBody: 'Women and Child Development Department, Govt of UP'
  },

  // ── CORPORATE CSR SCHEMES & WOMEN'S HEALTH FUNDS ──
  {
    id: 'tata-trusts-womens-csr',
    name: 'Tata Trusts Women’s Health & Nutrition CSR Fund',
    category: 'corporate_csr',
    categoryLabel: 'Corporate CSR & Philanthropy',
    state: 'Pan-India (Focus: MH, JH, OD, AP, RJ)',
    targetAudience: 'Underserved Women, Rural Mothers & Self-Help Groups',
    lifeStage: 'All Life Stages',
    benefitAmount: 'Free Mobile Cancer Screening + Nutrition Support Grants',
    badgeColor: 'bg-blue-50 text-blue-900 border-blue-300 font-bold',
    icon: '🏢',
    tagline: 'Pioneering Preventive Oncology, Severe Anemia Eradication & Maternal Care',
    keyBenefits: [
      'Mobile Cancer Screening Units for early detection of Breast, Cervical, and Oral cancers in rural & semi-urban women.',
      'Maternal, Infant, and Young Child Nutrition (MIYCN) programs providing fortified diets to combat low birth weight.',
      'Empowering Lakhpati Didis — financial micro-grants and livelihood skilling for women farmer collectives.',
      'Clean drinking water and sanitation infrastructure across tribal belts in Maharashtra and Jharkhand.'
    ],
    eligibility: ['Economically backward rural and peri-urban women, SHG members, and primary healthcare seekers.'],
    documentsRequired: ['Aadhaar Card / BPL Card / Local SHG verification.'],
    applicationProcess: 'Direct access via Tata Trusts community health camps, Tata Memorial outreach centers, and partner NGO clinics.',
    officialPortal: 'https://www.tatatrusts.org',
    helpline: '022-66658282',
    corporateOrGovtBody: 'Tata Trusts & Tata Group CSR'
  },
  {
    id: 'reliance-foundation-women-csr',
    name: 'Reliance Foundation Women Transformation & Healthcare Fund',
    category: 'corporate_csr',
    categoryLabel: 'Corporate CSR & Philanthropy',
    state: 'Pan-India',
    targetAudience: 'Women Farmers, Rural Entrepreneurs & Underprivileged Families',
    lifeStage: 'All Life Stages',
    benefitAmount: 'Free Tertiary Hospitalization & Women Entrepreneur Grants',
    badgeColor: 'bg-emerald-50 text-emerald-900 border-emerald-300 font-bold',
    icon: '🌿',
    tagline: 'Bridging Healthcare Gaps with Mobile Medical Units and Rural Livelihood Accelerators',
    keyBenefits: [
      'Sir H. N. Reliance Foundation Hospital outreach: Subsidized/free gynecological, pediatric, and cardiac surgeries.',
      'Mobile Medical Units (MMUs) providing doorstep diagnostic consultations and free medicines in rural villages.',
      'Women Lead India Fellowship (in partnership with Vital Voices) for female social entrepreneurs.',
      'Nutrition gardens (Reliance Nutrition Gardens - RNG) set up in 100,000+ rural households to eliminate anemia.'
    ],
    eligibility: ['Marginalized women, rural agricultural workers, and women-led household breadwinners.'],
    documentsRequired: ['Aadhaar Card / Ration Card / Rural Residence Proof.'],
    applicationProcess: 'Participate through Reliance Foundation rural outreach programs or Sir H. N. Reliance Hospital CSR desk.',
    officialPortal: 'https://www.reliancefoundation.org',
    helpline: '1800-419-8800',
    corporateOrGovtBody: 'Reliance Industries Limited CSR'
  },
  {
    id: 'infosys-foundation-aarohan',
    name: 'Infosys Foundation Aarohan Maternal & Healthcare Grants',
    category: 'corporate_csr',
    categoryLabel: 'Corporate CSR & Philanthropy',
    state: 'Pan-India (Focus: KA, MH, TS, TN, MP)',
    targetAudience: 'Underprivileged Mothers, Female STEM Students & Destitute Women',
    lifeStage: 'Teen & Student',
    benefitAmount: 'Full Hospital Infrastructure Grants & ₹1 Lakh+ STEM Scholarships',
    badgeColor: 'bg-purple-50 text-purple-900 border-purple-300 font-bold',
    icon: '💡',
    tagline: 'Building Multi-Specialty Maternity Wings and Funding Women in Engineering & Medicine',
    keyBenefits: [
      'Constructed dedicated multi-story maternity and pediatric hospital blocks at government medical institutes.',
      'Aarohan Social Innovation Awards & STEM scholarships covering 100% college tuition for female engineering & medical students.',
      'Sponsorship of high-precision diagnostic ultrasound machines and neonatal ICU equipment in district hospitals.',
      'Rehabilitation funds and shelter sanctuaries for destitute and abandoned women.'
    ],
    eligibility: ['Underprivileged girls pursuing higher education in STEM/Medicine (family income < ₹3 Lakhs), and patients at partner govt hospitals.'],
    documentsRequired: ['Aadhaar Card', 'College Admission & Fee Proof', 'Income Certificate', 'Academic Marksheets'],
    applicationProcess: 'Apply during annual scholarship windows on the Infosys Foundation portal or through partner government medical colleges.',
    officialPortal: 'https://www.infosys.com/infosys-foundation.html',
    helpline: '080-28520261',
    corporateOrGovtBody: 'Infosys Foundation CSR'
  },
  {
    id: 'hdfc-parivartan-women',
    name: 'HDFC Bank Parivartan CSR (Women Empowerment & Maternal Health)',
    category: 'corporate_csr',
    categoryLabel: 'Corporate CSR & Philanthropy',
    state: 'Pan-India (28 States & UTs)',
    targetAudience: 'Rural Women Micro-Entrepreneurs & Expectant Mothers',
    lifeStage: 'Working & Entrepreneur',
    benefitAmount: 'Micro-Credit Subsidies & Maternal Nutrition Support',
    badgeColor: 'bg-blue-50 text-blue-900 border-blue-300',
    icon: '🏦',
    tagline: 'Empowering 1 Crore+ Women through SHG Livelihood Credit & Preventative Health Clinics',
    keyBenefits: [
      'Comprehensive health camps and anemia diagnostics across 6,000+ villages under Holistic Rural Development Programme (HRDP).',
      'Supported over 10 Lakh Self Help Groups (SHGs) with collateral-free micro-enterprise credit linkages.',
      'Constructed hygienic girl student sanitation complexes in 2,500+ government schools to prevent teenage dropouts.',
      'Specialized maternal health awareness drives and clean drinking water facilities.'
    ],
    eligibility: ['Women members of registered SHGs, rural school students, and village community members.'],
    documentsRequired: ['Aadhaar Card', 'SHG Membership Passbook', 'Bank details.'],
    applicationProcess: 'Access via HDFC Bank Sustainable Livelihood Initiative (SLI) branch desks or HRDP village coordinators.',
    officialPortal: 'https://www.hdfcbank.com/csr',
    helpline: '1800-202-6161',
    corporateOrGovtBody: 'HDFC Bank Parivartan'
  },
  {
    id: 'biocon-foundation-cancer-csr',
    name: 'Biocon Foundation Oral & Cervical Cancer Screening for Women',
    category: 'corporate_csr',
    categoryLabel: 'Corporate CSR & Philanthropy',
    state: 'Karnataka, Maharashtra & Pan-India',
    targetAudience: 'Women Aged 30–65 in Semi-Urban & Rural Areas',
    lifeStage: 'Senior & Menopause',
    benefitAmount: '100% Free Mobile Point-of-Care HPV & Pap Screening',
    badgeColor: 'bg-teal-50 text-teal-900 border-teal-300',
    icon: '🔬',
    tagline: 'Life-Saving Early Stage Detection of Cervical, Breast & Oral Cancers',
    keyBenefits: [
      'Free point-of-care digital mobile screening for Cervical Cancer (Visual Inspection with Acetic Acid - VIA & HPV testing).',
      'Clinical Breast Examinations (CBE) and mammogram camp referrals for women aged 35+.',
      'Instant digital risk reports synced to eLAJ smart health platform.',
      'Free navigation, counseling, and subsidized treatment coordination at tertiary oncology hospitals.'
    ],
    eligibility: ['All adult women aged 30 and above, particularly from low-income and semi-urban communities.'],
    documentsRequired: ['Aadhaar Card / Mobile Number.'],
    applicationProcess: 'Walk into any Biocon Foundation Community Health Clinic or mobile screening camp.',
    officialPortal: 'https://www.bioconfoundation.org',
    helpline: '080-28082808',
    corporateOrGovtBody: 'Biocon Foundation CSR'
  },

  // ── CORPORATE WORKPLACE GRANTS & STARTUP FUNDS ──
  {
    id: 'maternity-returnship-grants',
    name: 'Corporate Maternity Returnship Programs & Childcare Grants',
    category: 'workplace_grants',
    categoryLabel: 'Corporate Diversity & Workplace Grants',
    state: 'Major IT & Corporate Parks (Pune, BLR, HYD, NCR, MUM)',
    targetAudience: 'Women Returning to Work Post-Maternity / Career Break',
    lifeStage: 'Working & Entrepreneur',
    benefitAmount: '26-Week Paid Leave + ₹15k–₹35k/Mo Crèche Allowances',
    badgeColor: 'bg-rose-50 text-rose-900 border-rose-300 font-bold',
    icon: '💼',
    tagline: 'Mandated & Top-Tier Corporate Return-to-Work Packages to Prevent Female Talent Dropouts',
    keyBenefits: [
      '26 weeks (6 months) fully paid maternity leave mandated under Maternity Benefit (Amendment) Act 2017.',
      'Mandatory employer-sponsored crèche facility or ₹10,000 to ₹35,000/month daycare reimbursement for companies with 50+ staff.',
      'Structured Returnship Programs (e.g. Tata Second Career SCIP, Infosys Restart, Amazon Rekindle) with paid upskilling fellowships.',
      'Meditrust AI Enterprise Integration: Confidential 24/7 OB-GYN triage and second-opinion marketplace for employees.'
    ],
    eligibility: ['Women working in private/public corporate enterprises with at least 80 days of service in the preceding 12 months.'],
    documentsRequired: ['Medical Fitness & Pregnancy Certificate', 'Employee ID', 'Crèche enrollment receipt (for daycare allowance).'],
    applicationProcess: 'Submit maternity intimation to your corporate HR 8–10 weeks prior to expected delivery.',
    officialPortal: 'https://labour.gov.in',
    helpline: 'Corporate HR / 181',
    corporateOrGovtBody: 'Ministry of Labour & Employment & Corporate HR Diversity Councils'
  },
  {
    id: 'women-stem-techmakers',
    name: 'Women in Tech & STEM Innovation Grants (Google, NASSCOM, AWS)',
    category: 'workplace_grants',
    categoryLabel: 'Corporate Diversity & Workplace Grants',
    state: 'Pan-India',
    targetAudience: 'Female Techies, Researchers & AI Innovators',
    lifeStage: 'Teen & Student',
    benefitAmount: '₹1 Lakh to ₹10 Lakhs Equity-Free Innovation Grants',
    badgeColor: 'bg-indigo-50 text-indigo-900 border-indigo-300',
    icon: '💻',
    tagline: 'Accelerating Female Founders, Coders & Healthcare Researchers',
    keyBenefits: [
      'Google Women Techmakers & Generation Google Scholarship: $1,000 – $2,500 direct academic grants for female CS/IT students.',
      'NASSCOM Women Wizards in Tech: Deep tech upskilling and leadership mentorship across AI, Data Science & Cloud.',
      'AWS Women in Tech Accelerator: Up to $100,000 in cloud credits and technical architecture advisory for female-led healthtech startups.',
      'Direct fast-track recruitment channels with leading global tech companies.'
    ],
    eligibility: ['Women students enrolled in undergraduate/postgraduate STEM programs, or female software developers and startup founders.'],
    documentsRequired: ['College Bonafide Certificate', 'Resume & GitHub/Portfolio Link', 'Innovation Project Abstract.'],
    applicationProcess: 'Apply online during annual cohorts on Google Developers, NASSCOM Foundation, or AWS Startup portals.',
    officialPortal: 'https://developers.google.com/womentechmakers',
    helpline: 'Online Community Portals',
    corporateOrGovtBody: 'Google, NASSCOM Foundation & AWS'
  },
  {
    id: 'female-vc-angel-funds',
    name: 'She Capital, Saha Fund & StrongHer Female Founder Venture Funds',
    category: 'workplace_grants',
    categoryLabel: 'Corporate Diversity & Workplace Grants',
    state: 'Pan-India',
    targetAudience: 'Women Tech & Healthcare Startup Founders',
    lifeStage: 'Working & Entrepreneur',
    benefitAmount: '₹50 Lakhs to ₹15 Crores Seed & Series-A Venture Capital',
    badgeColor: 'bg-purple-50 text-purple-900 border-purple-300 font-bold',
    icon: '🚀',
    tagline: 'Dedicated Venture Capital Backing Female-Led Femtech, AI & Healthcare Enterprises',
    keyBenefits: [
      'Early-stage venture capital funding from ₹50 Lakhs up to ₹15 Crores for high-growth tech ventures with female co-founders.',
      'Specialized focus on Women’s Health (Femtech), Clean Energy, Consumer Tech, and AI Diagnostics.',
      'Board-level strategic advisory, enterprise customer introductions, and international expansion mentorship.',
      'Access to female angel investor networks (WinPE, Indian Angel Network Women Chapter).'
    ],
    eligibility: ['Startups with at least one female founder or woman holding significant equity stake with a scalable technology MVP.'],
    documentsRequired: ['Pitch Deck', 'Cap Table & Incorporation Certificate', 'Financial Model & Traction Metrics.'],
    applicationProcess: 'Submit your pitch deck on shecapital.vc or sahafund.com, or through TiE Women pitching cohorts.',
    officialPortal: 'https://shecapital.vc',
    helpline: 'venture@shecapital.vc',
    corporateOrGovtBody: 'She Capital, Saha Fund, StrongHer Ventures & WinPE'
  }
]
