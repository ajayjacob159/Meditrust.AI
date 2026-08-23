import { NextRequest, NextResponse } from 'next/server'
import { evaluateClinicalQuery, UserHealthGraph } from '@/data/clinicalReasoningEngine'

const DR_ARYA_SYSTEM_PROMPT = `
You are Dr. Arya, lead women's health companion and senior clinical AI consultant for Meditrust India. You are a senior female doctor persona - warm, empathetic, private, non-judgmental, clinically accurate, and deeply attuned to Indian women.

CORE OBJECTIVE:
Answer all women's health and clinical queries in real-time like an expert physician, but NEVER diagnose. Explain patterns, biological mechanisms, possibilities, and practical next steps.

11 STAGE PLAYBOOKS:
1. Teen (13–19): Private reassurance first ("This is completely private between us"), normal 21–35 days cycle, 2–7 days flow, anemia screening.
2. Young Woman (20s): 3-month pattern tracking, dysmenorrhea pain management, acne/hair fall patterns.
3. PCOS/Hormonal: Insulin resistance, Myo-Inositol (40:1 ratio with D-Chiro), low-GI nutrition, LH/FSH & ultrasound organization, questions for doctor.
4. Preventive: Age-based Pap smear (21+), Breast self-exam (25+), Mammography (40+), HPV vaccine, Thyroid TSH.
5. Pre-Conception: Folic acid 400mcg daily, TSH < 2.5, HbA1c < 5.7%, 6-day fertile window calculation.
6. Pregnancy: Naegele's rule (EDD = LMP + 280 days), Trimester 1 (dating, NT scan 11–13.6w), Trimester 2 (TIFFA Anomaly scan 18–20w, OGTT glucose screen 24–28w), Trimester 3 (growth doppler, kick counts).
7. Postnatal: Recovery, lochia bleeding progression, lactation support, 6-week review, PPD screening.
8. Mother / Family: Child vaccine schedules + maternal health integration.
9. Mid-Life (35–45): Perimenopause education, cycle variability, sleep, hot flushes, red flags.
10. Menopause (45+): 12 months no periods, bone health (calcium 1000mg, Vit D3, DEXA scans), heart protection after 40, HRT informed discussion.
11. Older Woman (60+): Chronic disease management, BP, sugar, medication reminders, family-assisted care.

SAFETY & COMPLIANCE (NON-NEGOTIABLE):
1. Never say "You have X disease". Say "This pattern can be seen in conditions like... A gynecologist can confirm with...".
2. If red flags detected (soaking >1 pad/hour, severe acute abdominal/pelvic pain, pregnancy bleeding, high fever, fainting, suicidal thoughts): First line MUST be URGENT emergency escalation to proceed to nearest ER (Ruby Hall Clinic / Sahyadri in Pune) or dial 108/112.
3. Always add at the end of medical topics: "This is for information only and does not replace medical advice from your doctor."
4. Response Length: 120–180 words max. Use structured markdown bullets.
5. Language: Auto-detect English / Hinglish / Hindi / Marathi and respond in the same language.
`

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { message, userGraph, language, history, preferredPlugin } = body

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const query = message.trim()
    const detectedLang = language || 'en'

    // ── 1. PLUGIN: GOOGLE GEMINI FREE TIER (Google AI Studio) ──
    const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY
    if (geminiKey && (preferredPlugin === 'gemini' || preferredPlugin === 'auto' || !preferredPlugin)) {
      try {
        const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiKey}`
        
        const contents = [
          {
            role: 'user',
            parts: [{ text: `SYSTEM INSTRUCTION:\n${DR_ARYA_SYSTEM_PROMPT}\n\nUSER HEALTH CONTEXT:\n${JSON.stringify(userGraph || {})}` }],
          },
          {
            role: 'model',
            parts: [{ text: 'Understood. I will respond as Dr. Arya adhering strictly to the 11-stage playbook, empathy guidelines, and clinical safety protocols.' }],
          },
        ]

        if (Array.isArray(history)) {
          for (const msg of history.slice(-6)) {
            contents.push({
              role: msg.role === 'user' ? 'user' : 'model',
              parts: [{ text: msg.text }],
            })
          }
        }

        contents.push({
          role: 'user',
          parts: [{ text: query }],
        })

        const geminiRes = await fetch(geminiEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents,
            generationConfig: {
              temperature: 0.35,
              maxOutputTokens: 500,
            },
          }),
        })

        if (geminiRes.ok) {
          const data = await geminiRes.json()
          const aiText = data.candidates?.[0]?.content?.parts?.[0]?.text

          if (aiText) {
            const clinicalTriage = evaluateClinicalQuery(query, userGraph, detectedLang)
            return NextResponse.json({
              text: aiText,
              department: clinicalTriage.department,
              chips: clinicalTriage.chips,
              isEmergency: clinicalTriage.isEmergency,
              stageDetected: clinicalTriage.stageDetected,
              provider: '✨ Gemini 1.5/2.0 Flash (Free AI Studio)',
            })
          }
        }
      } catch (err) {
        console.warn('Gemini API call failed, attempting next plugin:', err)
      }
    }

    // ── 2. PLUGIN: GROQ CLOUD FREE INFERENCE (Llama 3.3 70B / Mixtral) ──
    const groqKey = process.env.GROQ_API_KEY
    if (groqKey && (preferredPlugin === 'groq' || preferredPlugin === 'auto' || !preferredPlugin)) {
      try {
        const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${groqKey}`,
          },
          body: JSON.stringify({
            model: 'llama-3.3-70b-versatile',
            messages: [
              { role: 'system', content: `${DR_ARYA_SYSTEM_PROMPT}\nUser Context: ${JSON.stringify(userGraph || {})}` },
              ...(Array.isArray(history) ? history.slice(-6).map((m: any) => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text })) : []),
              { role: 'user', content: query },
            ],
            temperature: 0.35,
            max_tokens: 500,
          }),
        })

        if (groqRes.ok) {
          const data = await groqRes.json()
          const aiText = data.choices?.[0]?.message?.content

          if (aiText) {
            const clinicalTriage = evaluateClinicalQuery(query, userGraph, detectedLang)
            return NextResponse.json({
              text: aiText,
              department: clinicalTriage.department,
              chips: clinicalTriage.chips,
              isEmergency: clinicalTriage.isEmergency,
              stageDetected: clinicalTriage.stageDetected,
              provider: '⚡ Groq Llama 3.3 70B (Ultra-Fast)',
            })
          }
        }
      } catch (err) {
        console.warn('Groq API call failed, attempting next plugin:', err)
      }
    }

    // ── 3. PLUGIN: OPENROUTER FREE MODELS (DeepSeek R1 / Gemini Exp / Llama 3.2 Free) ──
    const openrouterKey = process.env.OPENROUTER_API_KEY
    if (openrouterKey && (preferredPlugin === 'openrouter' || preferredPlugin === 'auto' || !preferredPlugin)) {
      try {
        const orRes = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${openrouterKey}`,
            'HTTP-Referer': 'https://www.meditrustai.in',
            'X-Title': 'Meditrust AI Dr. Arya',
          },
          body: JSON.stringify({
            model: 'deepseek/deepseek-r1:free',
            messages: [
              { role: 'system', content: `${DR_ARYA_SYSTEM_PROMPT}\nUser Context: ${JSON.stringify(userGraph || {})}` },
              ...(Array.isArray(history) ? history.slice(-6).map((m: any) => ({ role: m.role === 'user' ? 'user' : 'assistant', content: m.text })) : []),
              { role: 'user', content: query },
            ],
            max_tokens: 500,
          }),
        })

        if (orRes.ok) {
          const data = await orRes.json()
          const aiText = data.choices?.[0]?.message?.content

          if (aiText) {
            const clinicalTriage = evaluateClinicalQuery(query, userGraph, detectedLang)
            return NextResponse.json({
              text: aiText,
              department: clinicalTriage.department,
              chips: clinicalTriage.chips,
              isEmergency: clinicalTriage.isEmergency,
              stageDetected: clinicalTriage.stageDetected,
              provider: '🧠 DeepSeek R1 / OpenRouter (Free)',
            })
          }
        }
      } catch (err) {
        console.warn('OpenRouter API call failed, falling back:', err)
      }
    }

    // ── 4. PLUGIN: HUGGINGFACE SERVERLESS INFERENCE (Free Qwen 2.5 / Llama 3) ──
    const hfToken = process.env.HF_TOKEN || process.env.HUGGINGFACE_API_KEY
    if (hfToken) {
      try {
        const hfRes = await fetch('https://api-inference.huggingface.co/models/Qwen/Qwen2.5-72B-Instruct/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${hfToken}`,
          },
          body: JSON.stringify({
            model: 'Qwen/Qwen2.5-72B-Instruct',
            messages: [
              { role: 'system', content: `${DR_ARYA_SYSTEM_PROMPT}\nUser Context: ${JSON.stringify(userGraph || {})}` },
              { role: 'user', content: query },
            ],
            max_tokens: 500,
          }),
        })

        if (hfRes.ok) {
          const data = await hfRes.json()
          const aiText = data.choices?.[0]?.message?.content
          if (aiText) {
            const clinicalTriage = evaluateClinicalQuery(query, userGraph, detectedLang)
            return NextResponse.json({
              text: aiText,
              department: clinicalTriage.department,
              chips: clinicalTriage.chips,
              isEmergency: clinicalTriage.isEmergency,
              stageDetected: clinicalTriage.stageDetected,
              provider: '🤗 HuggingFace Qwen 2.5 72B (Free)',
            })
          }
        }
      } catch (err) {
        console.warn('HuggingFace inference failed:', err)
      }
    }

    // ── 5. DEFAULT ENGINE: MEDITRUST CLINICAL REASONING ENGINE (Zero Latency & 100% Reliable) ──
    const fallbackResponse = evaluateClinicalQuery(query, userGraph, detectedLang)

    return NextResponse.json({
      text: fallbackResponse.text,
      department: fallbackResponse.department,
      chips: fallbackResponse.chips,
      isEmergency: fallbackResponse.isEmergency,
      stageDetected: fallbackResponse.stageDetected,
      provider: '🩺 Meditrust Clinical Engine (Instant)',
    })
  } catch (error: any) {
    console.error('Error in Dr. Arya Free LLM Plugin Gateway:', error)
    return NextResponse.json(
      { error: 'Internal clinical reasoning error', details: error?.message },
      { status: 500 }
    )
  }
}
