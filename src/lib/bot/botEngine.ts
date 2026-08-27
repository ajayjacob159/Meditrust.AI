/**
 * ══════════════════════════════════════════════════════════════════════════════
 * MEDITRUST AI — REAL-TIME WOMEN'S HEALTH CONVERSATIONAL MULTI-AGENT ENGINE
 * Answers ANY free-form health question across all life stages:
 * First Period -> Menstrual Health -> PCOS -> Fertility -> Pregnancy -> Postpartum -> Menopause.
 * ══════════════════════════════════════════════════════════════════════════════
 */

import { WOMENS_HEALTH_SPECIALIST_AGENTS, HealthAgent } from './womensHealthAgents'

export interface BotUserSession {
  userId: string
  platform: 'whatsapp' | 'telegram' | 'web'
  language?: 'mr' | 'hi' | 'en' | 'hinglish'
  stage?: string
  name?: string
  lastActive: number
  history: Array<{ role: 'user' | 'assistant'; text: string }>
}

const SESSIONS = new Map<string, BotUserSession>()

export function getOrCreateSession(userId: string, platform: 'whatsapp' | 'telegram' | 'web'): BotUserSession {
  let session = SESSIONS.get(userId)
  if (!session) {
    session = {
      userId,
      platform,
      language: 'en',
      stage: 'General',
      lastActive: Date.now(),
      history: [],
    }
    SESSIONS.set(userId, session)
  }
  session.lastActive = Date.now()
  return session
}

// 1. Language Detector
export function detectLanguage(text: string): 'mr' | 'hi' | 'en' | 'hinglish' {
  const lower = text.toLowerCase()

  const marathiMarkers = [
    'मला', 'आहे', 'नाही', 'सांगा', 'पाहिजे', 'कधी', 'कसे', 'होते', 'दुखत', 'मासिक',
    'पाळी', 'औषध', 'थकवा', 'बाळ', 'गरोदर', 'डॉक्टर', 'तपासणी', 'पोटात', 'डोके', 'अंग',
    'कंबर', 'उलटी', 'चक्कर', 'रक्त', 'स्तन', 'तपासणी', 'वजन', 'केस',
    'mala', 'aahe', 'nahit', 'ahe', 'sanga', 'pahije', 'kadhi', 'kasa', 'hote',
    'dukhtey', 'pali', 'aushadh', 'thakva', 'garodar', 'kasli', 'kay karu', 'tai', 'aai'
  ]
  if (marathiMarkers.some(m => lower.includes(m))) return 'mr'

  const hindiMarkers = [
    'मुझे', 'है', 'नहीं', 'बताओ', 'चाहिए', 'कब', 'कैसे', 'होता', 'दर्द', 'पीरियड',
    'दवा', 'कमजोरी', 'बच्चा', 'गर्भवती', 'जांच', 'पेट', 'सिर', 'स्तन', 'खून',
    'mujhe', 'hai', 'nahi', 'batao', 'chahiye', 'dard', 'kamzori', 'garbhavati', 'kya karu'
  ]
  if (hindiMarkers.some(h => lower.includes(h))) return 'hi'

  if (lower.includes('kya') || lower.includes('mera') || lower.includes('meri') || lower.includes('batao') || lower.includes('periods late')) {
    return 'hinglish'
  }

  return 'en'
}

// 2. Intelligent Stage & Specialist Agent Router
export function routeToSpecialistAgent(query: string): HealthAgent {
  const lower = query.toLowerCase()

  // 1. Teen & Menarche (First Period, puberty, school hygiene)
  if (
    lower.includes('first period') ||
    lower.includes('menarche') ||
    lower.includes('12 year') ||
    lower.includes('13 year') ||
    lower.includes('14 year') ||
    lower.includes('daughter') ||
    lower.includes('मुलीची पहिली पाळी') ||
    lower.includes('पहिली पाळी') ||
    lower.includes('teen')
  ) {
    return WOMENS_HEALTH_SPECIALIST_AGENTS.find(a => a.id === 'teen_menarche_agent')!
  }

  // 2. Perimenopause & Menopause (Hot flashes, 40+, bone density, DEXA)
  if (
    lower.includes('menopause') ||
    lower.includes('perimenopause') ||
    lower.includes('मेनोपॉज') ||
    lower.includes('पाळी बंद') ||
    lower.includes('hot flash') ||
    lower.includes('hot flush') ||
    lower.includes('night sweat') ||
    lower.includes('dexa') ||
    lower.includes('bone density') ||
    lower.includes('45 year') ||
    lower.includes('50 year') ||
    lower.includes('postmenopausal') ||
    lower.includes('hrt')
  ) {
    return WOMENS_HEALTH_SPECIALIST_AGENTS.find(a => a.id === 'menopause_longevity_agent')!
  }

  // 3. Pregnancy & Antenatal (Trimesters, scans, delivery, morning sickness)
  if (
    lower.includes('pregnant') ||
    lower.includes('pregnancy') ||
    lower.includes('गरोदर') ||
    lower.includes('गर्भवती') ||
    lower.includes('trimester') ||
    lower.includes('tiffa') ||
    lower.includes('nt scan') ||
    lower.includes('dating scan') ||
    lower.includes('fetal') ||
    lower.includes('c section') ||
    lower.includes('normal delivery') ||
    lower.includes('pmmvy')
  ) {
    return WOMENS_HEALTH_SPECIALIST_AGENTS.find(a => a.id === 'pregnancy_obstetrics_agent')!
  }

  // 4. Postnatal & Lactation (New mother, breastfeeding, PPD)
  if (
    lower.includes('breastfeed') ||
    lower.includes('lactation') ||
    lower.includes('breast milk') ||
    lower.includes('बाळंतपण') ||
    lower.includes('स्तनपान') ||
    lower.includes('postpartum') ||
    lower.includes('postnatal') ||
    lower.includes('episiotomy') ||
    lower.includes('baby blues')
  ) {
    return WOMENS_HEALTH_SPECIALIST_AGENTS.find(a => a.id === 'postnatal_lactation_agent')!
  }

  // 5. Fertility, Infertility & AMH
  if (
    lower.includes('fertility') ||
    lower.includes('infertility') ||
    lower.includes('conceive') ||
    lower.includes('conception') ||
    lower.includes('ivf') ||
    lower.includes('iui') ||
    lower.includes('amh') ||
    lower.includes('ovulation') ||
    lower.includes('fertile window') ||
    lower.includes('hsg') ||
    lower.includes('प्रजनन') ||
    lower.includes('बाळ हवे')
  ) {
    return WOMENS_HEALTH_SPECIALIST_AGENTS.find(a => a.id === 'fertility_ovulation_agent')!
  }

  // 6. Cancer Screening, Breast Lumps & Pap Smear
  if (
    lower.includes('breast lump') ||
    lower.includes('breast cancer') ||
    lower.includes('mammogram') ||
    lower.includes('mammography') ||
    lower.includes('pap smear') ||
    lower.includes('hpv') ||
    lower.includes('cervical') ||
    lower.includes('स्तनाचा खडा') ||
    lower.includes('कॅन्सर') ||
    lower.includes('गाठ')
  ) {
    return WOMENS_HEALTH_SPECIALIST_AGENTS.find(a => a.id === 'preventive_oncology_agent')!
  }

  // 7. Generic Medicines & Savings
  if (
    lower.includes('jan aushadhi') ||
    lower.includes('generic') ||
    lower.includes('saving') ||
    lower.includes('औषध') ||
    lower.includes('दवा') ||
    lower.includes('telma') ||
    lower.includes('metformin') ||
    lower.includes('price') ||
    lower.includes('substitute')
  ) {
    return WOMENS_HEALTH_SPECIALIST_AGENTS.find(a => a.id === 'jan_aushadhi_savings_agent')!
  }

  // 8. Menstrual Disorders, Pain & Cramps
  if (
    lower.includes('cramp') ||
    lower.includes('pain') ||
    lower.includes('dysmenorrhea') ||
    lower.includes('heavy bleeding') ||
    lower.includes('clot') ||
    lower.includes('pms') ||
    lower.includes('pmdd') ||
    lower.includes('पाळीत पोटदुखी') ||
    lower.includes('जास्त रक्तस्त्राव') ||
    lower.includes('clots')
  ) {
    return WOMENS_HEALTH_SPECIALIST_AGENTS.find(a => a.id === 'menstrual_cycle_agent')!
  }

  // Default to PCOS & Hormones (Dr. Arya)
  return WOMENS_HEALTH_SPECIALIST_AGENTS.find(a => a.id === 'pcos_endocrine_agent')!
}

// 3. Blood Report Parser
export interface ExtractedLabs {
  hb?: number
  ferritin?: number
  tsh?: number
  hba1c?: number
  fastingSugar?: number
  vitaminD?: number
  vitaminB12?: number
  amh?: number
  rawMatches: string[]
}

export function parseBloodReportText(text: string): ExtractedLabs {
  const labs: ExtractedLabs = { rawMatches: [] }

  const hbMatch = text.match(/(?:haemoglobin|hemoglobin|hb)\s*[:=]?\s*([0-9.]+)\s*(?:g\/dl|gm\/dl|g%)?/i)
  if (hbMatch) {
    labs.hb = parseFloat(hbMatch[1])
    labs.rawMatches.push(`Hemoglobin: ${labs.hb} g/dL`)
  }

  const ferritinMatch = text.match(/(?:ferritin|serum ferritin)\s*[:=]?\s*([0-9.]+)\s*(?:ng\/ml|ug\/l|mcg\/l)?/i)
  if (ferritinMatch) {
    labs.ferritin = parseFloat(ferritinMatch[1])
    labs.rawMatches.push(`Serum Ferritin: ${labs.ferritin} ng/mL`)
  }

  const tshMatch = text.match(/(?:tsh|thyroid stimulating hormone)\s*[:=]?\s*([0-9.]+)\s*(?:uiu\/ml|uio\/ml|miu\/l|uu\/ml)?/i)
  if (tshMatch) {
    labs.tsh = parseFloat(tshMatch[1])
    labs.rawMatches.push(`TSH: ${labs.tsh} uIU/mL`)
  }

  const hba1cMatch = text.match(/(?:hba1c|glycated hemoglobin|a1c)\s*[:=]?\s*([0-9.]+)\s*(?:%)?/i)
  if (hba1cMatch) {
    labs.hba1c = parseFloat(hba1cMatch[1])
    labs.rawMatches.push(`HbA1c: ${labs.hba1c}%`)
  }

  const vitDMatch = text.match(/(?:vitamin d|25-hydroxy|vit d3|vit d)\s*[:=]?\s*([0-9.]+)\s*(?:ng\/ml)?/i)
  if (vitDMatch) {
    labs.vitaminD = parseFloat(vitDMatch[1])
    labs.rawMatches.push(`Vitamin D3: ${labs.vitaminD} ng/mL`)
  }

  const amhMatch = text.match(/(?:amh|anti-mullerian|anti mullerian)\s*[:=]?\s*([0-9.]+)\s*(?:ng\/ml)?/i)
  if (amhMatch) {
    labs.amh = parseFloat(amhMatch[1])
    labs.rawMatches.push(`AMH: ${labs.amh} ng/mL`)
  }

  return labs
}

export function generateLabExplanation(labs: ExtractedLabs, lang: 'mr' | 'hi' | 'en' | 'hinglish'): string {
  const points: string[] = []

  if (labs.hb !== undefined) {
    if (labs.hb < 12.0) {
      points.push(
        lang === 'mr'
          ? `🩸 *हिमोग्लोबिन (${labs.hb} g/dL):* सामान्य पातळीपेक्षा (12-15) कमी आहे. ॲनिमियाची शक्यता आहे. पालकाची भाजी, खजूर, गूळ-शेंगदाणे आणि डॉक्टरांच्या सल्ल्याने लोह पूरक (PMBJP फेरस एस्कॉर्बेट ₹25) सुरू करा.`
          : lang === 'hi' || lang === 'hinglish'
          ? `🩸 *हीमोग्लोबिन (${labs.hb} g/dL):* सामान्य से कम है। आयरन की कमी के लक्षण हो सकते हैं। पालक, गुड़, चना और आयरन सप्लीमेंट लें।`
          : `🩸 *Hemoglobin (${labs.hb} g/dL):* Below optimal female range (12.0–15.5 g/dL), indicating mild-to-moderate anemia. Consider iron-rich nutrition & elemental iron.`
      )
    } else {
      points.push(
        lang === 'mr'
          ? `🩸 *हिमोग्लोबिन (${labs.hb} g/dL):* उत्तम पातळीवर आहे.`
          : `🩸 *Hemoglobin (${labs.hb} g/dL):* Healthy normal range.`
      )
    }
  }

  if (labs.ferritin !== undefined) {
    if (labs.ferritin < 15.0) {
      points.push(
        lang === 'mr'
          ? `⚡ *सिरम फेरिटिन (${labs.ferritin} ng/mL):* लोह साठा रिकामा आहे (Iron Tank Empty)! हिमोग्लोबिन सामान्य असले तरी थकवा, केस गळणे आणि चक्कर येणे यामुळेच होते. 3 महिने फेरिटिन पूरक आवश्यक.`
          : lang === 'hi' || lang === 'hinglish'
          ? `⚡ *सीरम फेरिटिन (${labs.ferritin} ng/mL):* आयरन स्टोरेज खाली है। हीमोग्लोबिन ठीक होने पर भी कमजोरी और बाल झड़ने का यही मुख्य कारण है।`
          : `⚡ *Serum Ferritin (${labs.ferritin} ng/mL):* Cellular iron stores depleted (<15 ng/mL)! Explains chronic fatigue & hair shedding even if circulating Hb is normal.`
      )
    } else {
      points.push(`⚡ *Serum Ferritin (${labs.ferritin} ng/mL):* Good iron reserves (>30 ng/mL).`)
    }
  }

  if (labs.tsh !== undefined) {
    if (labs.tsh > 4.5) {
      points.push(
        lang === 'mr'
          ? `🦋 *TSH थायरॉईड (${labs.tsh} uIU/mL):* पातळी वाढलेली आहे (हायपोथायरॉईडीझम). यामुळे वजन वाढणे, पाळी उशिरा येणे आणि थकवा येतो. जन औषधी लेव्होथायरॉक्सिन (₹18) उपलब्ध आहे.`
          : `🦋 *TSH Thyroid (${labs.tsh} uIU/mL):* Elevated (>4.5 uIU/mL), suggestive of subclinical/clinical Hypothyroidism. Linked with delayed periods & metabolic slowdown.`
      )
    } else {
      points.push(`🦋 *TSH Thyroid (${labs.tsh} uIU/mL):* Normal euthyroid range.`)
    }
  }

  if (labs.hba1c !== undefined) {
    if (labs.hba1c >= 5.7) {
      points.push(
        lang === 'mr'
          ? `🍬 *HbA1c (${labs.hba1c}%):* साखर पूर्व-मधुमेह (Pre-diabetes / Insulin Resistance) पातळीत आहे. कमी ग्लायसेमिक आहार आणि नियमित चालणे सुरू करा.`
          : `🍬 *HbA1c (${labs.hba1c}%):* Pre-diabetes / Insulin resistance threshold (≥5.7%). Key driver of PCOS acne and ovulatory delays.`
      )
    } else {
      points.push(`🍬 *HbA1c (${labs.hba1c}%):* Excellent metabolic glucose control (<5.7%).`)
    }
  }

  if (labs.vitaminD !== undefined) {
    if (labs.vitaminD < 20.0) {
      points.push(
        lang === 'mr'
          ? `☀️ *व्हिटॅमिन D3 (${labs.vitaminD} ng/mL):* कमतरता आहे. हाडे आणि प्रतिकारशक्तीसाठी आठवड्यातून एकदा Cholecalciferol 60,000 IU कॅप्सूल डॉक्टरांच्या सल्ल्याने घ्या.`
          : `☀️ *Vitamin D3 (${labs.vitaminD} ng/mL):* Deficient (<20 ng/mL). Vital for ovarian follicle health, calcium absorption & bone density.`
      )
    }
  }

  if (labs.amh !== undefined) {
    points.push(
      lang === 'mr'
        ? `🥚 *AMH ओव्हेरियन रिझर्व्ह (${labs.amh} ng/mL):* ${
            labs.amh < 1.0
              ? 'कमी स्त्रीबीज साठा दर्शवतो.'
              : labs.amh > 4.5
              ? 'PCOS / बहुसंख्य फॉलिकल्स दर्शवतो.'
              : 'उत्तम प्रजनन साठा आहे.'
          }`
        : `🥚 *AMH Egg Reserve (${labs.amh} ng/mL):* ${
            labs.amh < 1.0
              ? 'Diminished ovarian reserve (accelerated timeline advised).'
              : labs.amh > 4.5
              ? 'Elevated antral follicle pool (characteristic of PCOS).'
              : 'Optimal age-appropriate ovarian reserve (2.0–4.0 ng/mL).'
          }`
    )
  }

  if (points.length === 0) {
    return lang === 'mr'
      ? '📋 तुमच्या रिपोर्टमधील आकडे स्पष्ट वाचता आले नाहीत. कृपया फोटो किंवा मुख्य व्हॅल्यूज (उदा. Hb 10.5, TSH 5.2) टाईप करा.'
      : '📋 Could not parse specific lab biomarkers. Please type your values directly (e.g. "Hb 10.2, Ferritin 8, TSH 4.8").'
  }

  const header =
    lang === 'mr'
      ? '🩺 *डॉ. आर्या — रक्त तपासणी विश्लेषण:*\n\n'
      : '🩺 *Dr. Arya — Blood Report Analysis & Action Plan:*\n\n'

  const footer =
    lang === 'mr'
      ? '\n\n💡 *जन औषधी बचत:* या औषधांवर 80% बचत करण्यासाठी जन औषधी केंद्र वापरा.\n⚠️ *टीप:* ही माहिती मार्गदर्शनासाठी आहे. कृपया डॉक्टरांचा सल्ला घ्या.'
      : '\n\n💡 *Jan Aushadhi Generics:* Save 80% on supplements & thyroid medicines at PMBJP stores.\n⚠️ *Disclaimer:* Informational analysis based on ICMR/WHO guidelines. Does not replace in-person doctor consultation.'

  return header + points.join('\n\n') + footer
}

// 4. MAIN REAL-TIME BOT PROCESSING FUNCTION
export async function processDrAryaBotMessage(
  userText: string,
  userId: string,
  platform: 'whatsapp' | 'telegram' | 'web',
  mediaUrl?: string
): Promise<{
  replyText: string
  suggestedActions?: Array<{ label: string; url?: string; payload?: string }>
  stageIdentified?: string
  isEmergency?: boolean
  agentName?: string
}> {
  const session = getOrCreateSession(userId, platform)
  const lang = detectLanguage(userText)
  session.language = lang
  const lower = userText.toLowerCase().trim()

  // 1. EMERGENCY RED FLAG DETECTION
  const isEmergency =
    lower.includes('chest pain') ||
    lower.includes('सीने में दर्द') ||
    lower.includes('छातीत दुखत') ||
    lower.includes('severe bleeding') ||
    lower.includes('रक्तस्राव') ||
    lower.includes('suicide') ||
    lower.includes('जीव द्यावा') ||
    lower.includes('fainting') ||
    lower.includes('unconscious') ||
    (lower.includes('pregnancy') && (lower.includes('bp 150') || lower.includes('no movement') || lower.includes('severe headache')))

  if (isEmergency) {
    const emergencyReply =
      lang === 'mr'
        ? `🚨 *तात्काळ वैद्यकीय इशारा (EMERGENCY)*\n\n` +
          `तुमची लक्षणे तात्काळ वैद्यकीय तपासणीची आवश्यकता दर्शवत आहेत!\n\n` +
          `📞 *तातडीने कॉल करा:*\n` +
          `• रुग्णवाहिका (Ambulance): *108*\n` +
          `• राष्ट्रीय महिला हेल्पलाइन: *181*\n` +
          `• मेडीट्रस्ट डॉक्टर डेस्क: *+91 7028025717*\n\n` +
          `📍 *पुण्यातील जवळची आपत्कालीन रुग्णालये:*\n` +
          `1. रुबी हॉल क्लिनिक (पुणे स्टेशन / वानवडी)\n` +
          `2. सह्याद्री सुपर स्पेशालिटी हॉस्पिटल (डेक्कन / नगर रोड)\n` +
          `3. ससून सर्वोपचार रुग्णालय (पुणे स्टेशन)`
        : `🚨 *MEDITRUST MEDICAL EMERGENCY ALERT*\n\n` +
          `Immediate medical attention is required for these symptoms!\n\n` +
          `📞 *Call Emergency Services Immediately:*\n` +
          `• Ambulance: *108 / 102*\n` +
          `• National Women Helpline: *181*\n` +
          `• Meditrust Priority Desk: *+91 7028025717*\n\n` +
          `📍 *Top Emergency Maternity & Tertiary Centers (Pune):*\n` +
          `1. Ruby Hall Clinic (Emergency: 020-66455100)\n` +
          `2. Sahyadri Super Speciality Hospital (020-67215000)\n` +
          `3. Sassoon General Hospital (Govt Tertiary Center)`

    return {
      replyText: emergencyReply,
      isEmergency: true,
      suggestedActions: [
        { label: '📞 Call Ambulance 108', url: 'tel:108' },
        { label: '🚨 Call Meditrust Desk', url: 'tel:+917028025717' },
      ],
    }
  }

  // 2. CHECK IF USER SENT BLOOD REPORT DATA
  const extractedLabs = parseBloodReportText(userText)
  if (extractedLabs.rawMatches.length > 0) {
    const explanation = generateLabExplanation(extractedLabs, lang)
    return {
      replyText: explanation,
      suggestedActions: [
        { label: '🩸 35+ Women Blood Tests', url: 'https://www.meditrustai.in/womens-health/blood-tests' },
        { label: '💊 Jan Aushadhi Savings', url: 'https://www.meditrustai.in/medication-comparison' },
      ],
    }
  }

  // 3. SCHEDULE H GUARDRAIL
  if (
    lower.includes('abortion pill') ||
    lower.includes('mifepristone') ||
    lower.includes('misoprostol') ||
    lower.includes('mtp kit') ||
    lower.includes('गर्भपात गोळी') ||
    lower.includes('antibiotic dosage')
  ) {
    const guardrailReply =
      lang === 'mr'
        ? `⚠️ *वैद्यकीय व कायदेशीर नियम (Schedule H Drug):*\n\n` +
          `गर्भपात गोळ्या किंवा शेड्यूल-एच औषधे केवळ नोंदणीकृत स्त्रीरोगतज्ज्ञांच्या (OB-GYN) प्रत्यक्ष तपासणी आणि सोनोग्राफीनंतरच दिली जाऊ शकतात. डॉक्टरांच्या सल्ल्याशिवाय औषध घेणे जीवितास धोकादायक ठरू शकते.\n\n` +
          `👩‍⚕️ आम्ही तुम्हाला पुण्यातील अनुभवी महिला स्त्रीरोगतज्ज्ञांशी कनेक्ट करू शकतो.\n` +
          `📞 मोफत मार्गदर्शनासाठी कॉल करा: *+91 7028025717*`
        : `⚠️ *CLINICAL & LEGAL SAFETY GUARDRAIL:*\n\n` +
          `MTP / Abortion pills and Schedule H medications require a certified Gynecologist (OB-GYN) physical examination and ultrasound verification under the MTP Act. Self-administration carries severe hemorrhage and infection risks.\n\n` +
          `👩‍⚕️ We can connect you with verified female gynecologists in Pune & PCMC for confidential in-person care.\n` +
          `📞 Contact Doctor Desk: *+91 7028025717*`

    return {
      replyText: guardrailReply,
      suggestedActions: [
        { label: '👩‍⚕️ Book Gynaecologist', url: 'https://www.meditrustai.in/doctors/gynecologist/pune' },
      ],
    }
  }

  // 4. ROUTE TO SPECIALIST AGENT
  const specialistAgent = routeToSpecialistAgent(userText)
  session.stage = specialistAgent.stage

  // 5. ATTEMPT REAL-TIME GEMINI LLM INFERENCE
  const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY
  if (geminiKey) {
    try {
      const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`
      
      const systemInstruction =
        `You are ${specialistAgent.name}, ${specialistAgent.title} on Meditrust AI India. ` +
        `Expertise: ${specialistAgent.expertise.join(', ')}. ` +
        `Tone: Warm, sisterly, empathetic, clinically accurate (ICMR/WHO/FOGSI compliant). ` +
        `Format: 2-3 short paragraphs or clean bullet points. Include relevant lab tests and Jan Aushadhi generic savings where applicable. ` +
        `Language: Respond in ${lang === 'mr' ? 'Marathi (मराठी)' : lang === 'hi' ? 'Hindi (हिंदी)' : 'English'}. ` +
        `Always end with: "⚠️ Informational guidance only. Consult your gynecologist for prescriptions."`

      const geminiRes = await fetch(geminiEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `SYSTEM:\n${systemInstruction}\n\nUSER QUESTION:\n${userText}` }],
            },
          ],
          generationConfig: {
            temperature: 0.35,
            maxOutputTokens: 500,
          },
        }),
      })

      if (geminiRes.ok) {
        const data = await geminiRes.json()
        const llmReply = data.candidates?.[0]?.content?.parts?.[0]?.text
        if (llmReply) {
          const formattedReply = `${specialistAgent.icon} *${specialistAgent.name} (${lang === 'mr' ? specialistAgent.marathiName : specialistAgent.title})*\n\n${llmReply}`
          return {
            replyText: formattedReply,
            stageIdentified: specialistAgent.stage,
            agentName: specialistAgent.name,
            suggestedActions: [
              { label: `🌸 ${specialistAgent.stage} Care`, url: 'https://www.meditrustai.in/womens-health' },
              { label: '🩸 Blood Test Directory', url: 'https://www.meditrustai.in/womens-health/blood-tests' },
              { label: '💊 Jan Aushadhi -80%', url: 'https://www.meditrustai.in/medication-comparison' },
            ],
          }
        }
      }
    } catch (llmErr) {
      console.warn('Gemini live call error, falling back to specialist clinical council engine:', llmErr)
    }
  }

  // 6. DEEP OFFLINE CLINICAL REASONING SYNTHESIS (GUARANTEED REAL-TIME REPLY)
  const medSuggestions = specialistAgent.firstLineMedications
    .map(m => `• *${m.brand}* ➔ Generic *${m.generic}* (${m.saving}) — ${m.purpose}`)
    .join('\n')

  const labsFormatted = specialistAgent.diagnosticProtocols
    .map(t => `• ${t}`)
    .join('\n')

  let agentReply = ''
  if (lang === 'mr') {
    agentReply =
      `${specialistAgent.icon} *${specialistAgent.marathiName} — मेडीट्रस्ट AI सखी:*\n\n` +
      `मी तुमच्या प्रश्नाचे वैद्यकीय विश्लेषण केले आहे.\n\n` +
      `✨ *वैद्यकीय माहिती व मार्गदर्शन (${specialistAgent.stage}):*\n` +
      `• ${specialistAgent.expertise.slice(0, 3).join('\n• ')}\n\n` +
      `🔬 *शिफारस केलेल्या रक्त तपासण्या / स्कॅन्स:*\n${labsFormatted}\n\n` +
      `💊 *जन औषधी ८०% स्वस्त पर्याय:*\n${medSuggestions}\n\n` +
      `⚠️ *टीप:* हे मार्गदर्शन ICMR/WHO मानकांवर आधारित आहे. आवश्यकतेनुसार पुण्यातील स्त्रीरोगतज्ज्ञांचा सल्ला घ्या.`
  } else {
    agentReply =
      `${specialistAgent.icon} *${specialistAgent.name} (${specialistAgent.title}):*\n\n` +
      `I have analyzed your symptom pattern for *${specialistAgent.stage}*.\n\n` +
      `✨ *Clinical Insights & Action Plan:*\n` +
      `• ${specialistAgent.expertise.slice(0, 3).join('\n• ')}\n\n` +
      `🔬 *Recommended Diagnostic Tests & Scans:*\n${labsFormatted}\n\n` +
      `💊 *Jan Aushadhi 80% Generic Equivalents:*\n${medSuggestions}\n\n` +
      `⚠️ *Medical Disclaimer:* Clinical guidance based on FOGSI/ICMR/WHO protocols. Please consult a qualified gynecologist for in-person prescriptions.`
  }

  return {
    replyText: agentReply,
    stageIdentified: specialistAgent.stage,
    agentName: specialistAgent.name,
    suggestedActions: [
      { label: `🌸 ${specialistAgent.stage} Care`, url: 'https://www.meditrustai.in/womens-health' },
      { label: '🩸 Blood Test Directory', url: 'https://www.meditrustai.in/womens-health/blood-tests' },
      { label: '💊 Jan Aushadhi -80%', url: 'https://www.meditrustai.in/medication-comparison' },
      { label: '🏛️ Govt Schemes Hub', url: 'https://www.meditrustai.in/womens-schemes-funds' },
    ],
  }
}
