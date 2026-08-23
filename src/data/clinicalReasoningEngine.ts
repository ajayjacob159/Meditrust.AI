export interface UserHealthGraph {
  age?: number
  current_stage:
    | 'Teen'
    | 'Young_Woman'
    | 'PCOS_Hormonal'
    | 'Preventive'
    | 'PreConception'
    | 'Pregnancy'
    | 'Postnatal'
    | 'Mother_Family'
    | 'MidLife'
    | 'Menopause'
    | 'Older_Woman'
    | 'General'
  LMP?: string
  cycle_history: number[]
  symptom_journal: string[]
  reports: string[]
  medications: string[]
  pregnancy_week?: number
  edd?: string
  family_members: string[]
  language: 'en' | 'hi' | 'mr'
}

export interface ClinicalResponse {
  text: string
  department: string
  chips: string[]
  isEmergency?: boolean
  audioSnippet?: string
  stageDetected?: string
  toolActionRecommended?: 'cycle_tracker' | 'symptom_journal' | 'report_organizer' | 'reminder_engine' | 'edd_calculator'
}

export function evaluateClinicalQuery(
  query: string,
  userGraphOrLang?: Partial<UserHealthGraph> | string,
  languageParam: string = 'en'
): ClinicalResponse {
  const userGraph: Partial<UserHealthGraph> | undefined =
    typeof userGraphOrLang === 'object' ? userGraphOrLang : undefined
  const language: string =
    typeof userGraphOrLang === 'string' ? userGraphOrLang : languageParam

  const lower = query.toLowerCase().trim()

  // ── STEP 1: CRITICAL RED FLAG CHECK ──
  const isRedFlag =
    lower.includes('soaking') ||
    (lower.includes('pad') && (lower.includes('hour') || lower.includes('heavy'))) ||
    lower.includes('faint') ||
    lower.includes('unconscious') ||
    (lower.includes('pregnancy') && (lower.includes('bleed') || lower.includes('spotting') || lower.includes('no movement'))) ||
    (lower.includes('severe') && (lower.includes('abdominal') || lower.includes('pelvic') || lower.includes('headache') || lower.includes('chest'))) ||
    lower.includes('suicide') ||
    lower.includes('harm myself') ||
    lower.includes('खूप रक्तस्राव') ||
    lower.includes('अतिशय पोटदुखी') ||
    lower.includes('बेहोश') ||
    lower.includes('भारी रक्तस्राव')

  if (isRedFlag) {
    return {
      isEmergency: true,
      department: '🚨 Emergency Clinical Triage',
      stageDetected: 'Emergency',
      text: `🚨 **URGENT: This needs immediate medical attention.**
Please contact your doctor, proceed to the nearest hospital emergency room (such as Ruby Hall Clinic or Sahyadri Hospital in Pune), or call **108 / 112** right now.

• **Immediate Emergency Steps:**
  - If bleeding heavily (> 1 pad per hour) or feeling dizzy: Lie down with legs elevated and do not take unprescribed NSAIDs.
  - If pregnant with bleeding, sudden swelling, or severe headache: Request immediate OB-GYN emergency triage.
  - Emergency Meditrust Helpline: **+91 7028025717**.

*This is for information only and does not replace emergency medical care from a licensed doctor.*`,
      chips: ['📞 Call 108 Ambulance', '🏥 Ruby Hall Emergency Desk', '🏥 Sahyadri Emergency Desk', '📞 Meditrust Desk: +91 7028025717'],
      audioSnippet: 'Urgent medical alert. Please seek immediate hospital emergency care or dial 108.',
    }
  }

  // ── STEP 2: STAGE 1 — TEEN (13–19, First Period, Shame to ask, Normal cycle) ──
  if (
    lower.includes('teen') || lower.includes('first period') || lower.includes('is my period normal') ||
    lower.includes('14 years') || lower.includes('15 years') || lower.includes('16 years') || lower.includes('17 years') ||
    lower.includes('school') || lower.includes('scared') || lower.includes('shame') || lower.includes('पहिला महिना') ||
    (lower.includes('period') && (lower.includes('first time') || lower.includes('new to this')))
  ) {
    return {
      department: 'Dr. Arya Adolescent & Teen Health',
      stageDetected: 'Teen Health',
      toolActionRecommended: 'cycle_tracker',
      text: `🌸 **I understand it can feel confusing or overwhelming at first. Please know this is completely private between us.**

• **What could be happening:**
  - In the first 1–2 years after starting your periods (menarche), irregular cycles ranging from **21 to 35 days** with bleeding for **2 to 7 days** are entirely normal while your hormones mature.
  - Mild lower abdominal cramping before or on Day 1 is very common due to natural uterine prostaglandins.

• **What to do now:**
  - Track the first day of each period on our private cycle tracker.
  - Keep a warm water bag for cramps and eat iron-rich foods (dates, spinach, beetroot) to stay energetic.

• **When to see a doctor:**
  - If your period lasts longer than 7 days, skips for more than 45 days, or you feel constant dizziness/fatigue.
  - *Questions to ask your doctor:* "Is my cycle timeline typical for my age?" and "Do I need a routine CBC test for hemoglobin?"

*Want me to privately log your period start date or set an iron-rich nutrition reminder?*

*This is for information only and does not replace medical advice from your doctor.*`,
      chips: ['📅 Track Period Start Date', '🩸 Check Iron & Anemia Signs', '🌸 Period Cramp Relief Guide', '💬 Chat on WhatsApp'],
      audioSnippet: 'This is completely normal and private between us. In the first two years, cycles between 21 and 35 days are expected.',
    }
  }

  // ── STEP 3: STAGE 6 — PREGNANCY (Positive Test, Weeks, Scans, Trimester) ──
  if (
    lower.includes('positive test') || lower.includes('pregnant') || lower.includes('pregnancy') ||
    lower.includes('trimester') || lower.includes('nt scan') || lower.includes('anomaly scan') ||
    lower.includes('gtt') || lower.includes('fetal') || lower.includes('kick count') ||
    lower.includes('गर्भवती') || lower.includes('गर्भ') || lower.includes('हफ्ते')
  ) {
    // Check if LMP is mentioned or calculate standard
    let lmpLine = 'Based on your pregnancy journey, early trimester care is all about maternal comfort and gentle fetal tracking.'
    if (userGraph?.LMP) {
      lmpLine = `Based on your LMP (${userGraph.LMP}), we can track your weekly fetal milestones and upcoming clinical ultrasound schedules.`
    }

    return {
      department: 'Dr. Arya Pregnancy & Antenatal Care',
      stageDetected: 'Pregnancy',
      toolActionRecommended: 'edd_calculator',
      text: `🌸 **Congratulations! I understand you want to ensure everything is progressing safely on track.**

${lmpLine}

• **Key Milestones to Understand:**
  - **First Trimester (Weeks 1–12):** Dating ultrasound (6–8 weeks) to confirm cardiac activity, followed by the crucial **NT Scan + Dual Marker** (Weeks 11–13.6) for chromosomal health.
  - **Second Trimester (Weeks 13–27):** **TIFFA Anomaly Scan** (Weeks 18–20) and **OGTT Glucose Screening** (Weeks 24–28) for gestational diabetes.

• **What to do right now:**
  - Take your daily **Folic Acid (400 mcg)** or prescribed prenatal vitamin to support neural tube development.
  - Maintain gentle hydration (2.5L/day) and avoid unpasteurized foods or unprescribed medications.

• **When to see your OB-GYN:**
  - Schedule your initial antenatal booking visit this week.
  - *Questions to ask your OB-GYN:* "Which prenatal vitamin regimen do you recommend?" and "When is my first NT ultrasound scheduled?"

*Want me to calculate your Estimated Due Date (EDD) or organize your upcoming scan checklist?*

*This is for information only and does not replace medical advice from your doctor.*`,
      chips: ['📅 Calculate Due Date (EDD)', '📋 View Antenatal Scan Checklist', '💊 Folic Acid & Prenatal Guide', '👩‍⚕️ Consult OB-GYN in Pune'],
      audioSnippet: 'Congratulations. We will track your weekly scans, NT ultrasound, and prenatal milestones step by step.',
    }
  }

  // ── STEP 4: STAGE 5 — PRE-CONCEPTION (Planning Baby, Trying to Conceive) ──
  if (
    lower.includes('plan baby') || lower.includes('planning baby') || lower.includes('conceive') ||
    lower.includes('trying for baby') || lower.includes('ovulation window') || lower.includes('folic acid') ||
    lower.includes('गर्भधारणा') || lower.includes('गर्भधारण') || lower.includes('फर्टिलिटी')
  ) {
    return {
      department: 'Dr. Arya Pre-Conception & Fertility',
      stageDetected: 'Pre-Conception',
      toolActionRecommended: 'cycle_tracker',
      text: `🌸 **Planning for a pregnancy is an exciting milestone, and taking proactive steps now gives your baby the healthiest start.**

• **Clinical Patterns to Understand:**
  - Conception occurs during your **6-day fertile window** (the 5 days before ovulation and the day of ovulation itself).
  - Optimizing pre-pregnancy maternal reserves (Thyroid TSH < 2.5 mIU/L, HbA1c < 5.7%, and Hemoglobin > 12 g/dL) significantly supports early implantation.

• **What to do now:**
  - Begin **Folic Acid 400 mcg daily** at least 1–3 months before conception to prevent neural tube defects.
  - Track your last 3 menstrual cycles to pinpoint your estimated fertile window.
  - Book a routine Preconception Blood Panel (TSH, Complete Blood Count, Rubella IgG, Blood Group).

• **When to consult a fertility specialist:**
  - If you have been actively trying for >12 months (or >6 months if age 35+), or have known irregular cycles.
  - *Questions to ask your doctor:* "Is my TSH level optimized for conception?" and "Are all my pre-pregnancy immunity titers up to date?"

*Want me to calculate your upcoming fertile window or set a daily Folic Acid reminder?*

*This is for information only and does not replace medical advice from your doctor.*`,
      chips: ['📅 Calculate Fertile Window', '📋 Preconception Lab Checklist', '💊 Folic Acid 400mcg Reminder', '👩‍⚕️ Fertility Specialist Pune'],
      audioSnippet: 'Starting daily Folic Acid and optimizing your thyroid levels are key first steps in your conception journey.',
    }
  }

  // ── STEP 5: STAGE 3 — PCOS / PCOD / HORMONAL (Irregular, Weight, Acne, Hair) ──
  if (
    lower.includes('pcos') || lower.includes('pcod') || lower.includes('irregular period') ||
    lower.includes('hirsutism') || lower.includes('facial hair') || lower.includes('cystic acne') ||
    lower.includes('insulin') || lower.includes('पीसीओएस') || lower.includes('माहवारी अनियमित') ||
    lower.includes('पाळी उशिरा')
  ) {
    return {
      department: 'Dr. Arya PCOS & Hormonal Care',
      stageDetected: 'PCOS / Hormonal',
      toolActionRecommended: 'symptom_journal',
      text: `🌸 **I hear you, and please know you are not alone. PCOS is a manageable metabolic condition, not your fault.**

• **What could be happening:**
  - This pattern (delayed cycles, stubborn acne, central weight resistance) is often driven by **insulin resistance** and elevated ovarian androgens (LH/FSH imbalance).
  - Follicles develop but may not release an egg regularly, leading to skipped cycles and delayed periods.

• **What to do now:**
  - Focus on a **low-glycemic, high-protein diet** paired with 30 minutes of daily resistance walking to restore insulin sensitivity.
  - Discuss **Myo-Inositol + D-Chiro Inositol (40:1 ratio)** with your doctor (available on Jan Aushadhi generic saving up to 80%).
  - Log your cycle length, skin changes, and weight in our symptom journal.

• **When to see your Gynecologist:**
  - For formal Rotterdam criteria confirmation with a Pelvic Ultrasound and Fasting Insulin + Hormone Panel.
  - *Questions to ask your gynecologist:* "What is my LH/FSH ratio and fasting insulin score?" and "Would inositol or metabolic support be appropriate for my cycle regularity?"

*Want me to log your symptoms in your health journal or organize your hormone lab reports?*

*This is for information only and does not replace medical advice from your doctor.*`,
      chips: ['📋 Take PCOS Self-Assessment', '🩸 Book PCOS Hormone Panel (₹649)', '💊 Myo-Inositol Generic Match', '👩‍⚕️ Gynecologist Desk Pune'],
      audioSnippet: 'PCOS is very manageable with targeted metabolic nutrition, inositol therapy, and cycle tracking.',
    }
  }

  // ── STEP 6: STAGE 7 — POSTNATAL (Delivery Recovery, Lochia, Breastfeeding, Mood) ──
  if (
    lower.includes('postnatal') || lower.includes('postpartum') || lower.includes('after delivery') || lower.includes('बाळंतपण') ||
    lower.includes('breastfeeding') || lower.includes('lochia') || lower.includes('milk supply') ||
    lower.includes('post delivery') || lower.includes('c section recovery') || lower.includes('delivery bleeding')
  ) {
    return {
      department: 'Dr. Arya Postnatal & Maternal Recovery',
      stageDetected: 'Postnatal Recovery',
      toolActionRecommended: 'symptom_journal',
      text: `🌸 **Congratulations on your little one! Caring for a newborn is demanding, but your physical and emotional recovery matters just as much.**

• **What to expect during recovery:**
  - **Lochia Bleeding:** Changes from bright red (Days 1–4) to pinkish-brown (Days 5–10) to yellowish-white (Weeks 2–6). It should gradually lighten, not suddenly get heavier.
  - **Emotional Well-being:** Mild "baby blues" (crying spells, fatigue) are common for 10–14 days. Persistent low mood or anxiety past 2 weeks deserves gentle, proactive support.

• **What to do now:**
  - Prioritize pelvic rest, high-fiber nutrition, and sitz baths for perineal comfort.
  - For breastfeeding, ensure a deep asymmetrical latch to prevent nipple soreness.
  - Schedule your formal **6-week postpartum review** with your obstetrician.

• **When to see a doctor immediately:**
  - If you soak a pad in under 1 hour, notice foul-smelling discharge, develop a fever (>100.4°F), or experience worsening calf swelling.
  - *Questions to ask your doctor:* "Is my pelvic floor and incision healing on track?" and "When can I safely resume gentle core exercises?"

*Want me to set a 6-week postnatal checkup reminder or track your recovery journal?*

*This is for information only and does not replace medical advice from your doctor.*`,
      chips: ['📅 Set 6-Week Postnatal Reminder', '🤱 Breastfeeding & Latch Guide', '🩸 Lochia Bleeding Tracker', '👩‍⚕️ Lactation Consultant Desk'],
      audioSnippet: 'Your postnatal recovery matters just as much as baby care. Let us track your healing and 6-week review.',
    }
  }

  // ── STEP 7: STAGE 9 & 10 — MID-LIFE & MENOPAUSE (35–50+, Hot Flashes, Bone Health) ──
  if (
    lower.includes('menopause') || lower.includes('perimenopause') || lower.includes('hot flash') ||
    lower.includes('hot flush') || lower.includes('night sweat') || lower.includes('dexa') ||
    lower.includes('osteoporosis') || lower.includes('45 years') || lower.includes('50 years') ||
    lower.includes('रजोनिवृत्ति') || lower.includes('माहवारी बंद')
  ) {
    return {
      department: 'Dr. Arya Menopause & Mid-Life Health',
      stageDetected: 'Perimenopause & Menopause',
      toolActionRecommended: 'symptom_journal',
      text: `🌸 **Mid-life transitions bring profound physiological shifts, and you deserve clear, empowering answers.**

• **What could be happening:**
  - Fluctuating estrogen levels in perimenopause cause cycles to shorten or skip, alongside vasomotor hot flushes, sleep disruption, and mood changes.
  - Natural menopause is clinically defined after **12 consecutive months without a period** (average age 46–47 in Indian women).
  - Reduced estrogen accelerates bone mineral loss and alters lipid profiles.

• **What to do now:**
  - Support bone density with **Calcium 1000mg + Vitamin D3 (60,000 IU monthly)** and weight-bearing exercises.
  - Dress in breathable cotton layers and keep a cooling bedtime routine for hot flushes.
  - Track hot flush frequency and sleep quality in your symptom journal.

• **When to see a doctor:**
  - If you experience post-menopausal bleeding (any spotting after 1 year of no periods requires prompt evaluation).
  - Discuss a baseline **DEXA Bone Density Scan** and Lipid profile.
  - *Questions to ask your doctor:* "Do I need a DEXA bone density scan?" and "What are the evidence-based lifestyle or non-hormonal options for my hot flashes?"

*Want me to log your hot flushes or remind you about bone vitality tests?*

*This is for information only and does not replace medical advice from your doctor.*`,
      chips: ['🦴 Book DEXA & Bone Vitality Panel', '🌸 Hot Flush Symptom Journal', '💊 Calcium & D3 Generic Match', '👩‍⚕️ Menopause Specialist Pune'],
      audioSnippet: 'Perimenopause and menopause are natural chapters. We will support your bone vitality and hormonal comfort.',
    }
  }

  // ── STEP 8: STAGE 4 — PREVENTIVE CARE & SCREENING (Pap, Mammogram, HPV, Checkups) ──
  if (
    lower.includes('checkup') || lower.includes('pap smear') || lower.includes('mammogram') ||
    lower.includes('hpv') || lower.includes('screening') || lower.includes('breast exam') ||
    lower.includes('कॅन्सर तपासणी') || lower.includes('स्क्रीनिंग')
  ) {
    return {
      department: 'Dr. Arya Preventive Women’s Care',
      stageDetected: 'Preventive Health',
      toolActionRecommended: 'reminder_engine',
      text: `🌸 **Preventive screening is the most powerful investment you can make in your lifelong health.**

• **Age-Based Clinical Screening Guidelines:**
  - **Age 21–29:** Cervical Pap Smear every 3 years.
  - **Age 30–65:** Pap Smear + HPV DNA co-testing every 5 years (Gold Standard for cervical cancer prevention).
  - **Age 25+:** Monthly Breast Self-Examination (BSE) 5–7 days after your period ends.
  - **Age 40+:** Annual or biennial screening Mammogram and Bone Density (DEXA) evaluation.
  - **Annual Labs:** CBC (Hemoglobin), Thyroid TSH, Fasting Blood Sugar, and Vitamin D3/B12.

• **What to do now:**
  - Check when your last Pap smear or comprehensive blood panel was performed.
  - Practice your monthly breast self-exam following our step-by-step visual guide.

• **When to see a doctor:**
  - For your routine annual well-woman examination, or immediately if you notice a discrete breast lump or unusual discharge.
  - *Questions to ask your doctor:* "Is my cervical screening up to date?" and "Which preventive blood panels do you recommend this year?"

*Want me to set an annual preventive reminder or organize your previous test reports?*

*This is for information only and does not replace medical advice from your doctor.*`,
      chips: ['📅 Set Annual Screening Reminder', '📋 Pap Smear & HPV Guide', '🎗️ Breast Self-Exam Steps', '🩸 Book Preventive Health Panel'],
      audioSnippet: 'Preventive Pap smears and annual checkups ensure early detection and lifelong peace of mind.',
    }
  }

  // ── STEP 9: GYNECOLOGICAL CONDITIONS (Endometriosis, Fibroids, Pelvic Pain) ──
  if (
    lower.includes('endometriosis') || lower.includes('fibroid') || lower.includes('cyst') ||
    lower.includes('pelvic pain') || lower.includes('painful period') || lower.includes('dysmenorrhea') ||
    lower.includes('पोटात गाठ') || lower.includes('कंबरदुखी')
  ) {
    return {
      department: 'Dr. Arya Gynecological Conditions',
      stageDetected: 'Gynecological Conditions',
      toolActionRecommended: 'symptom_journal',
      text: `🌸 **Debilitating period pain is not something you have to silently endure. Your pain is valid.**

• **What could be happening:**
  - Severe cyclic pelvic pain, pain during intercourse (dyspareunia), or pain during bowel movements can indicate **Endometriosis** (endometrial-like tissue growing outside the uterus) or **Adenomyosis**.
  - Heavy bleeding with pelvic fullness or pressure is frequently associated with benign **Uterine Fibroids** or functional ovarian cysts.

• **What to do now:**
  - Track your pain severity (1–10 scale), timing relative to your cycle, and medication response in our symptom journal.
  - Apply warm heat therapy and discuss targeted anti-inflammatory options with your doctor.

• **When to see your Gynecologist:**
  - For a high-resolution Pelvic Ultrasound or pelvic MRI to evaluate uterine tissue and ovarian endometriomas.
  - *Questions to ask your gynecologist:* "Could my pain pattern suggest endometriosis or adenomyosis?" and "What diagnostic imaging or medical therapies do you recommend?"

*Want me to log your pain patterns in your symptom journal to show your doctor?*

*This is for information only and does not replace medical advice from your doctor.*`,
      chips: ['📝 Log Pain in Symptom Journal', '📋 Endometriosis 4-Ds Guide', '🩸 Book Pelvic Ultrasound Desk', '👩‍⚕️ Endometriosis Specialist Pune'],
      audioSnippet: 'Severe period pain is not normal. We can track your symptoms and connect you with a specialist.',
    }
  }

  // ── STEP 10: GENERAL & INTEGRATED CLINICAL AI FALLBACK ──
  return {
    department: 'Dr. Arya Women’s Health Companion',
    stageDetected: 'General Women’s Health',
    toolActionRecommended: 'cycle_tracker',
    text: `🌸 **I am Dr. Arya, your dedicated women's health companion. I am here to help you navigate your health with clarity and confidence.**

• **How I can support you today:**
  - Understand your menstrual cycle, period symptoms, or hormonal balance.
  - Calculate your **ovulation fertile window** or **pregnancy due date milestones**.
  - Evaluate symptoms related to PCOS, pelvic pain, thyroid health, or menopause.
  - Translate your laboratory test reports or ultrasounds into plain language.

• **What to share to get personalized answers:**
  - What specific symptoms are you noticing?
  - Your approximate age and the date of your **last menstrual period (LMP)**.

*What is on your mind or what would you like to explore today?*

*This is for information only and does not replace medical advice from your doctor.*`,
    chips: [
      '🌸 PCOS / PCOD Assessment',
      '📅 Track Period & Ovulation',
      '🤰 Pregnancy Trimester Care',
      '🩸 Book 60-Min Home Blood Test',
    ],
    audioSnippet: 'I am Dr. Arya. Tell me about your symptoms or current health stage so I can guide you.',
  }
}
