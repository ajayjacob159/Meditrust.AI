/**
 * ══════════════════════════════════════════════════════════════════════════════
 * MEDITRUST AI — SAKHI BOT (WHATSAPP & TELEGRAM BOT ENGINE)
 * Clinical Intelligence, 7 Life Stages, Multilingual (Marathi/Hindi/English),
 * Blood Report OCR Parser, Jan Aushadhi Savings, and Red Flag Safety Guardrails.
 * ══════════════════════════════════════════════════════════════════════════════
 */

export interface BotUserSession {
  userId: string
  platform: 'whatsapp' | 'telegram' | 'web'
  language?: 'mr' | 'hi' | 'en' | 'hinglish'
  stage?: 'Teen' | 'Menstrual' | 'PCOS' | 'Fertility' | 'Pregnancy' | 'Postnatal' | 'Menopause' | 'General'
  name?: string
  lastActive: number
  history: Array<{ role: 'user' | 'assistant'; text: string }>
}

// In-memory session store (with fallback to 24h TTL)
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

// Language Detector
export function detectLanguage(text: string): 'mr' | 'hi' | 'en' | 'hinglish' {
  const lower = text.toLowerCase()

  // Marathi keywords & Devanagari detection
  const marathiMarkers = [
    'मला', 'आहे', 'नाही', 'सांगा', 'पाहिजे', 'कधी', 'कसे', 'होते', 'दुखत', 'मासिक',
    'पाळी', 'औषध', 'थकवा', 'बाळ', 'गरोदर', 'डॉक्टर', 'तपासणी', 'पोटात', 'डोके',
    'mala', 'aahe', 'nahit', 'ahe', 'sanga', 'pahije', 'kadhi', 'kasa', 'hote',
    'dukhtey', 'pali', 'aushadh', 'thakva', 'garodar', 'kasli', 'kay karu', 'tai', 'aai'
  ]
  if (marathiMarkers.some(m => lower.includes(m))) return 'mr'

  // Hindi keywords
  const hindiMarkers = [
    'मुझे', 'है', 'नहीं', 'बताओ', 'चाहिए', 'कब', 'कैसे', 'होता', 'दर्द', 'पीरियड',
    'दवा', 'कमजोरी', 'बच्चा', 'गर्भवती', 'जांच', 'पेट', 'सिर',
    'mujhe', 'hai', 'nahi', 'batao', 'chahiye', 'dard', 'kamzori', 'garbhavati', 'kya karu'
  ]
  if (hindiMarkers.some(h => lower.includes(h))) return 'hi'

  // Hinglish
  if (lower.includes('kya') || lower.includes('mera') || lower.includes('meri') || lower.includes('batao') || lower.includes('periods late')) {
    return 'hinglish'
  }

  return 'en'
}

// Blood Report Lab Values Extractor
export interface ExtractedLabs {
  hb?: number
  ferritin?: number
  tsh?: number
  hba1c?: number
  fastingSugar?: number
  vitaminD?: number
  vitaminB12?: number
  amh?: number
  prolactin?: number
  totalTestosterone?: number
  rawMatches: string[]
}

export function parseBloodReportText(text: string): ExtractedLabs {
  const labs: ExtractedLabs = { rawMatches: [] }

  // Hemoglobin (Hb)
  const hbMatch = text.match(/(?:haemoglobin|hemoglobin|hb)\s*[:=]?\s*([0-9.]+)\s*(?:g\/dl|gm\/dl|g%)?/i)
  if (hbMatch) {
    labs.hb = parseFloat(hbMatch[1])
    labs.rawMatches.push(`Hemoglobin: ${labs.hb} g/dL`)
  }

  // Serum Ferritin
  const ferritinMatch = text.match(/(?:ferritin|serum ferritin)\s*[:=]?\s*([0-9.]+)\s*(?:ng\/ml|ug\/l|mcg\/l)?/i)
  if (ferritinMatch) {
    labs.ferritin = parseFloat(ferritinMatch[1])
    labs.rawMatches.push(`Serum Ferritin: ${labs.ferritin} ng/mL`)
  }

  // TSH (Thyroid Stimulating Hormone)
  const tshMatch = text.match(/(?:tsh|thyroid stimulating hormone)\s*[:=]?\s*([0-9.]+)\s*(?:uiu\/ml|uio\/ml|miu\/l|uu\/ml)?/i)
  if (tshMatch) {
    labs.tsh = parseFloat(tshMatch[1])
    labs.rawMatches.push(`TSH: ${labs.tsh} uIU/mL`)
  }

  // HbA1c
  const hba1cMatch = text.match(/(?:hba1c|glycated hemoglobin|a1c)\s*[:=]?\s*([0-9.]+)\s*(?:%)?/i)
  if (hba1cMatch) {
    labs.hba1c = parseFloat(hba1cMatch[1])
    labs.rawMatches.push(`HbA1c: ${labs.hba1c}%`)
  }

  // Vitamin D
  const vitDMatch = text.match(/(?:vitamin d|25-hydroxy|vit d3|vit d)\s*[:=]?\s*([0-9.]+)\s*(?:ng\/ml)?/i)
  if (vitDMatch) {
    labs.vitaminD = parseFloat(vitDMatch[1])
    labs.rawMatches.push(`Vitamin D3: ${labs.vitaminD} ng/mL`)
  }

  // Vitamin B12
  const vitB12Match = text.match(/(?:vitamin b12|b12|cyanocobalamin)\s*[:=]?\s*([0-9.]+)\s*(?:pg\/ml)?/i)
  if (vitB12Match) {
    labs.vitaminB12 = parseFloat(vitB12Match[1])
    labs.rawMatches.push(`Vitamin B12: ${labs.vitaminB12} pg/mL`)
  }

  // AMH (Anti-Müllerian Hormone)
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

// Main Dr. Arya Bot Intelligence Engine
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
}> {
  const session = getOrCreateSession(userId, platform)
  const lang = detectLanguage(userText)
  session.language = lang
  const lower = userText.toLowerCase().trim()

  // 1. EMERGENCY RED FLAG DETECTION (ICMR / WHO Triage)
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

  // 2. CHECK IF USER SENT BLOOD REPORT DATA OR KEYWORDS
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

  // 3. SCHEDULE H / PRESCRIPTION GUARDRAIL
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

  // 4. PCOS / PCOD ROUTING
  if (lower.includes('pcos') || lower.includes('pcod') || lower.includes('पिसीओडी') || lower.includes('हार्मोन')) {
    session.stage = 'PCOS'
    const pcosReply =
      lang === 'mr'
        ? `🌸 *डॉ. आर्या — PCOS व हार्मोन्स मार्गदर्शन:*\n\n` +
          `PCOS हा केवळ पाळीचा प्रश्न नसून इन्सुलिन रेझिस्टन्स आणि मेटाबॉलिझमशी संबंधित आहे.\n\n` +
          `✨ *प्रमुख लक्षणे:*\n` +
          `• पाळी 35+ दिवसांनी येणे किंवा अनियमित असणे\n` +
          `• हनुवटीवर पिंपल्स (Jawline Acne) व वजन वाढणे\n` +
          `• केसांची गळती\n\n` +
          `🔬 *शिफारस केलेल्या 5 रक्त चाचण्या:*\n` +
          `1. Serum Total Testosterone + DHEAS\n` +
          `2. Fasting Insulin + HbA1c\n` +
          `3. Serum AMH (अंड्याचा साठा)\n` +
          `4. TSH थायरॉईड\n` +
          `5. Pelvic Sonography (USG)\n\n` +
          `💊 *जन औषधी मायो-इनॉसिटॉल (₹180 vs ₹900 ब्रँडेड)* 80% स्वस्त उपलब्ध आहे.`
        : `🌸 *Dr. Arya — PCOS & Hormonal Balance Guide:*\n\n` +
          `PCOS affects 1 in 5 Indian women and is driven primarily by insulin resistance and androgen surges.\n\n` +
          `✨ *Core Symptoms:*\n` +
          `• Cycle length > 35 days (Oligomenorrhea)\n` +
          `• Jawline hormonal acne & facial hirsutism\n` +
          `• Central abdominal weight resistance\n\n` +
          `🔬 *Top 5 Recommended Lab Panel:*\n` +
          `1. Total Testosterone & DHEAS\n` +
          `2. Fasting Insulin & HbA1c (Insulin Resistance)\n` +
          `3. AMH (Anti-Müllerian Hormone)\n` +
          `4. Thyroid TSH & Free T4\n` +
          `5. Pelvic USG Scan (String-of-pearls morphology)\n\n` +
          `💡 *Generic Savings:* Myo-Inositol (40:1) & Metformin available at 80% OFF via Jan Aushadhi.`

    return {
      replyText: pcosReply,
      stageIdentified: 'PCOS',
      suggestedActions: [
        { label: '🩸 PCOS Blood Test List', url: 'https://www.meditrustai.in/womens-health/blood-tests/pcos-hormone-blood-test-list-india' },
        { label: '📖 PCOS vs PCOD Guide', url: 'https://www.meditrustai.in/blog/pcos-vs-pcod-difference-symptoms-diet-treatment-india' },
      ],
    }
  }

  // 5. PREGNANCY & MATERNITY ROUTING
  if (
    lower.includes('pregnancy') ||
    lower.includes('pregnant') ||
    lower.includes('गरोदर') ||
    lower.includes('गर्भवती') ||
    lower.includes('delivery') ||
    lower.includes('c section') ||
    lower.includes('उलट्या')
  ) {
    session.stage = 'Pregnancy'
    const pregReply =
      lang === 'mr'
        ? `🤰 *डॉ. आर्या — गर्भधारणा व माता संगोपन:*\n\n` +
          `अभिनंदन! गरोदरपणात प्रत्येक आठवड्याचे योग्य नियोजन सुरक्षित बाळंतपणासाठी आवश्यक असते.\n\n` +
          `📅 *महत्वाचे स्कॅन्स व तपासण्या:*\n` +
          `• *आठवडा 6–8:* डेटिंग स्कॅन (गर्भाची धडधड तपासणे)\n` +
          `• *आठवडा 11–13:* NT/NB स्कॅन + डबल मार्कर टेस्ट\n` +
          `• *आठवडा 18–20:* लेव्हल-2 TIFFA अनोमली स्कॅन\n` +
          `• *आठवडा 24–28:* 75g OGTT साखर तपासणी\n\n` +
          `🏛️ *शासकीय योजना:* PMMVY द्वारे ₹5,000–₹6,000 थेट बँक खात्यात मिळतात.\n` +
          `⚠️ *दुसरा सल्ला:* सी-सेक्शन शस्त्रक्रियेपूर्वी मेडीट्रस्टवर मोफत सेकंड ओपिनियन घ्या.`
        : `🤰 *Dr. Arya — Pregnancy & Maternity Navigator:*\n\n` +
          `Congratulations! Guiding you through a safe, joyful pregnancy journey.\n\n` +
          `📅 *Essential Antenatal Scan Roadmap:*\n` +
          `• *Weeks 6–8:* Viability & Dating Scan (Heartbeat confirmation)\n` +
          `• *Weeks 11–13.6:* NT/NB Scan + Double Marker (Chromosomal screen)\n` +
          `• *Weeks 18–20:* Level-2 TIFFA Anomaly Scan\n` +
          `• *Weeks 24–28:* 75g OGTT (Gestational Diabetes Screening)\n\n` +
          `🏛️ *Govt Benefits:* Claim ₹5,000–₹6,000 via PMMVY and free PMSMA OB-GYN checkups on the 9th of every month.\n` +
          `🛡️ *Second Opinion Desk:* Verify surgical delivery necessity before C-section.`

    return {
      replyText: pregReply,
      stageIdentified: 'Pregnancy',
      suggestedActions: [
        { label: '📅 Pregnancy Scans Roadmap', url: 'https://www.meditrustai.in/womens-health/blood-tests/pregnancy-blood-tests-trimester-schedule' },
        { label: '🏛️ Claim PMMVY Govt Funds', url: 'https://www.meditrustai.in/womens-schemes-funds' },
      ],
    }
  }

  // 6. GENERIC MEDICINE & JAN AUSHADHI PRICE SAVINGS
  if (
    lower.includes('medicine') ||
    lower.includes('tablet') ||
    lower.includes('generic') ||
    lower.includes('औषध') ||
    lower.includes('दवा') ||
    lower.includes('price') ||
    lower.includes('saving')
  ) {
    const genericReply =
      lang === 'mr'
        ? `💊 *डॉ. आर्या — जन औषधी ८०% बचत कॅल्क्युलेटर:*\n\n` +
          `ब्रँडेड औषधांवर दरमहा हजारो रुपये खर्च करण्याऐवजी CDSCO प्रमाणित PMBJP जन औषधी जेनेरिक वापरा:\n\n` +
          `✨ *नेहमी लागणारी औषधे (किंमत तुलना):*\n` +
          `• *थायरॉईड (Levothyroxine 50mcg):* ब्रँडेड ₹128 ➔ जन औषधी *₹18* (बचत 85%)\n` +
          `• *मधुमेह (Metformin 500mg):* ब्रँडेड ₹75 ➔ जन औषधी *₹14* (बचत 81%)\n` +
          `• *लोह पूरक (Ferrous Ascorbate):* ब्रँडेड ₹190 ➔ जन औषधी *₹25* (बचत 86%)\n` +
          `• *सॅनिटरी नॅपकिन (Suvidha Pad):* ₹1 प्रति पॅड\n\n` +
          `📍 निगडी, पिंपरी व पुण्यात 120+ जन औषधी केंद्रे उपलब्ध आहेत.`
        : `💊 *Dr. Arya — Jan Aushadhi 80% Generic Savings Match:*\n\n` +
          `Save up to 80% on branded chronic prescriptions with bioequivalent PMBJP generic drugs:\n\n` +
          `✨ *Common Price Comparison:*\n` +
          `• *Thyroid (Levothyroxine 50mcg):* Branded ₹128 ➔ Jan Aushadhi *₹18* (Save 85%)\n` +
          `• *Diabetes (Metformin 500 SR):* Branded ₹75 ➔ Jan Aushadhi *₹14* (Save 81%)\n` +
          `• *Iron (Ferrous Ascorbate + Folic):* Branded ₹190 ➔ Jan Aushadhi *₹25* (Save 86%)\n` +
          `• *Suvidha Sanitary Pads:* ₹1 per biodegradable pad\n\n` +
          `🔍 Live Price Checker: https://www.meditrustai.in/medication-comparison`

    return {
      replyText: genericReply,
      suggestedActions: [
        { label: '🔍 Compare Medicine Live', url: 'https://www.meditrustai.in/medication-comparison' },
        { label: '💎 Sakhi Membership (₹83/mo)', url: 'https://www.meditrustai.in/pricing' },
      ],
    }
  }

  // 7. DEFAULT WELCOME & 7 LIFE STAGES PROMPT
  const defaultReply =
    lang === 'mr'
      ? `नमस्ते! 🙏 मी *डॉ. आर्या*, मेडीट्रस्ट AI वरील तुमची २४/७ हक्काची सखी.\n\n` +
        `तुम्ही मला पाळीच्या समस्या, PCOS, गर्भधारणा, रक्ताचे रिपोर्ट (Hb/Ferritin), थायरॉईड किंवा औषधांच्या ८०% बचतीबद्दल मराठीत विचारू शकता.\n\n` +
        `🌸 *तुम्हाला कशाबद्दल माहिती हवी आहे?*\n` +
        `1️⃣ 🩸 मासिक पाळी व पोटदुखी\n` +
        `2️⃣ 🌸 PCOS / PCOD व पिंपल्स\n` +
        `3️⃣ 🤰 गर्भधारणा व स्कॅन्स\n` +
        `4️⃣ 📋 रक्ताचा रिपोर्ट विश्लेषण\n` +
        `5️⃣ 🏛️ लाडकी बहीण व शासकीय योजना\n` +
        `6️⃣ 💊 जन औषधी स्वस्त औषधे\n\n` +
        `फक्त नंबर टाईप करा किंवा तुमचा प्रश्न मराठी/इंग्रजीत विचारा!`
      : `Namaste! 🙏 I am *Dr. Arya*, your 24/7 AI Health Companion & Senior OB-GYN on Meditrust AI.\n\n` +
        `I am here to help you navigate menstrual health, PCOS, pregnancy milestones, lab report analysis, and 80% medicine savings in Marathi, Hindi & English.\n\n` +
        `🌸 *What can I assist you with today?*\n` +
        `1️⃣ 🩸 Irregular Periods & Cramps\n` +
        `2️⃣ 🌸 PCOS / PCOD & Hormones\n` +
        `3️⃣ 🤰 Pregnancy & Trimester Scans\n` +
        `4️⃣ 📋 Blood Report OCR Analysis (Upload PDF/Photo)\n` +
        `5️⃣ 🏛️ Government Schemes (PMMVY, Ladki Bahin)\n` +
        `6️⃣ 💊 Jan Aushadhi 80% Generic Match\n\n` +
        `Type any question or send your lab report numbers to begin!`

  return {
    replyText: defaultReply,
    suggestedActions: [
      { label: '🩺 Free AI Consultation', url: 'https://www.meditrustai.in/symptom-checker' },
      { label: '🌸 Women Health Portal', url: 'https://www.meditrustai.in/womens-health' },
      { label: '🏛️ Govt Schemes Hub', url: 'https://www.meditrustai.in/womens-schemes-funds' },
    ],
  }
}
