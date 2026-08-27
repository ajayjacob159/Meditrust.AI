import { NextResponse } from 'next/server'
import { processDrAryaBotMessage, getOrCreateSession } from '@/lib/bot/botEngine'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '8710012278:AAFqMoZuWT5MR0EbH96Lwa6TEynFB9dxzEg'

/**
 * 1. GET: Status & Health Check for Telegram Bot Webhook
 */
export async function GET() {
  return NextResponse.json({
    status: 'online',
    bot: '@MeditrustAiAryaBot',
    platform: 'Telegram Bot API (Independent 24/7 Clinical AI)',
    supportedLanguages: ['Marathi (मराठी)', 'Hindi (हिंदी)', 'English', 'Hinglish'],
    clinicalContinuum: 'First Period (Menarche) -> PCOS -> Fertility -> Pregnancy -> Postpartum -> Menopause (40+ Years)',
    timestamp: new Date().toISOString(),
  })
}

/**
 * Helper: Send typing action to Telegram
 */
async function sendChatAction(chatId: string | number, action: string = 'typing') {
  if (!TELEGRAM_BOT_TOKEN) return
  try {
    await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendChatAction`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, action }),
    })
  } catch (e) {
    // Non-critical
  }
}

/**
 * Helper: Fetch file path from Telegram and extract text/caption
 */
async function getTelegramFileUrl(fileId: string): Promise<string | null> {
  if (!TELEGRAM_BOT_TOKEN) return null
  try {
    const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getFile?file_id=${fileId}`)
    const data = await res.json()
    if (data.ok && data.result?.file_path) {
      return `https://api.telegram.org/file/bot${TELEGRAM_BOT_TOKEN}/${data.result.file_path}`
    }
  } catch (e) {
    console.error('Error fetching Telegram file:', e)
  }
  return null
}

/**
 * 2. POST: Inbound Telegram Webhook Handler (100% Standalone & Autonomous)
 */
export async function POST(request: Request) {
  try {
    const update = await request.json()

    // Extract Message or Callback Data
    const message = update?.message
    const callbackQuery = update?.callback_query

    const chatId = message?.chat?.id || callbackQuery?.message?.chat?.id
    const fromUser = message?.from || callbackQuery?.from
    const userId = `tg_${fromUser?.id || chatId}`
    const userName = fromUser?.first_name || 'Sister'

    if (!chatId) {
      return NextResponse.json({ status: 'ignored', reason: 'No chatId found' }, { status: 200 })
    }

    // Trigger typing indicator immediately
    sendChatAction(chatId, 'typing')

    // Handle Text, Photo, Document or Callback
    let userText = message?.text || callbackQuery?.data || message?.caption || ''
    let mediaUrl: string | undefined

    // If user sent a photo (e.g. blood report photo or prescription)
    if (message?.photo && Array.isArray(message.photo) && message.photo.length > 0) {
      const bestPhoto = message.photo[message.photo.length - 1]
      const fileUrl = await getTelegramFileUrl(bestPhoto.file_id)
      if (fileUrl) {
        mediaUrl = fileUrl
        if (!userText) {
          userText = 'Here is my blood test report photo. Please analyze my values, explain what they mean, and check Jan Aushadhi generic savings.'
        }
      }
    }

    // If user sent a document (e.g. PDF lab report)
    if (message?.document) {
      const doc = message.document
      const fileUrl = await getTelegramFileUrl(doc.file_id)
      if (fileUrl) {
        mediaUrl = fileUrl
        if (!userText) {
          userText = `Here is my lab report document (${doc.file_name || 'PDF'}). Please analyze my biomarkers and provide clinical guidance.`
        }
      }
    }

    console.log(`🤖 Telegram Query from @${fromUser?.username || userId} (${chatId}): "${userText}"`)

    // Handle command shortcuts gracefully
    let queryText = userText.trim()
    if (queryText === '/start' || queryText.toLowerCase() === 'hi' || queryText.toLowerCase() === 'hello') {
      queryText = 'hello'
    } else if (queryText === '/stages') {
      queryText = 'Explain all 7 women life stages from first period to menopause'
    } else if (queryText === '/report') {
      queryText = 'How do I read my blood report values for Hb, Ferritin, TSH, and Vitamin D?'
    } else if (queryText === '/savings') {
      queryText = 'How can I save 80% on medicines using Jan Aushadhi PMBJP generic substitutes?'
    } else if (queryText === '/schemes') {
      queryText = 'What government schemes are available for women in India and Maharashtra like Ladki Bahin and PMMVY?'
    } else if (queryText === '/help' || queryText === '/emergency') {
      queryText = 'Emergency medical helpline numbers in Pune and India'
    } else if (queryText.startsWith('stage_')) {
      queryText = queryText.replace('stage_', '') + ' health guidance'
    }

    // Retrieve or initialize session history
    const session = getOrCreateSession(userId, 'telegram')
    session.name = userName

    // Record user query into conversation history
    session.history.push({ role: 'user', text: queryText })
    if (session.history.length > 10) {
      session.history = session.history.slice(-10)
    }

    // Process with Real-Time Multi-Agent Clinical Engine
    const botResult = await processDrAryaBotMessage(queryText, userId, 'telegram', mediaUrl)

    // Record assistant reply into session history
    session.history.push({ role: 'assistant', text: botResult.replyText })

    // Build Dynamic Contextual Inline Keyboards
    const inlineKeyboard: Array<Array<{ text: string; url?: string; callback_data?: string }>> = []

    if (botResult.suggestedActions && botResult.suggestedActions.length > 0) {
      const actionRow: Array<{ text: string; url?: string; callback_data?: string }> = []
      botResult.suggestedActions.forEach((act) => {
        if (act.url) {
          actionRow.push({ text: act.label, url: act.url })
        } else {
          actionRow.push({ text: act.label, callback_data: act.payload || act.label })
        }
      })
      inlineKeyboard.push(actionRow.slice(0, 2))
      if (actionRow.length > 2) {
        inlineKeyboard.push(actionRow.slice(2, 4))
      }
    }

    // Add persistent quick actions
    inlineKeyboard.push([
      { text: '🩸 Blood Tests', url: 'https://www.meditrustai.in/womens-health/blood-tests' },
      { text: '💊 Jan Aushadhi -80%', url: 'https://www.meditrustai.in/medication-comparison' },
      { text: '🏛️ Govt Schemes', url: 'https://www.meditrustai.in/womens-schemes-funds' },
    ])

    inlineKeyboard.push([
      { text: '🌐 Meditrust Portal', url: 'https://www.meditrustai.in/womens-health' },
      { text: '📞 Call Doctor Desk', url: 'tel:+917028025717' },
    ])

    // Answer callback query if applicable to dismiss Telegram loading clock
    if (callbackQuery?.id) {
      try {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/answerCallbackQuery`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ callback_query_id: callbackQuery.id }),
        })
      } catch (e) {}
    }

    // Dispatch Outbound Message to Telegram API
    if (TELEGRAM_BOT_TOKEN) {
      try {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: botResult.replyText,
            parse_mode: 'Markdown',
            reply_markup: {
              inline_keyboard: inlineKeyboard,
            },
          }),
        })
      } catch (tgErr) {
        console.warn('Could not dispatch message to Telegram endpoint:', tgErr)
      }
    }

    return NextResponse.json({
      status: 'success',
      chatId,
      agentAssigned: botResult.agentName,
      stageIdentified: botResult.stageIdentified,
      isEmergency: botResult.isEmergency,
      replyLength: botResult.replyText.length,
    })
  } catch (error: any) {
    console.error('Error processing Telegram webhook:', error)
    return NextResponse.json({ status: 'error', error: error.message }, { status: 500 })
  }
}
