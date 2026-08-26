import { NextResponse } from 'next/server'
import { processDrAryaBotMessage } from '@/lib/bot/botEngine'

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '7482910482:AAE7jK3_meditrust_sakhi_bot_2026'

/**
 * 1. GET: Status & Health Check for Telegram Bot Webhook
 */
export async function GET() {
  return NextResponse.json({
    status: 'online',
    bot: '@MeditrustSakhiBot',
    platform: 'Telegram Bot API',
    description: 'Dr. Arya 24/7 AI Health & Women Care Companion',
    supportedCommands: ['/start', '/stages', '/report', '/savings', '/schemes', '/emergency'],
    timestamp: new Date().toISOString(),
  })
}

/**
 * 2. POST: Inbound Telegram Webhook Handler
 */
export async function POST(request: Request) {
  try {
    const update = await request.json()

    // 1. Check if this is a standard message or a callback query
    const message = update?.message
    const callbackQuery = update?.callback_query

    const chatId = message?.chat?.id || callbackQuery?.message?.chat?.id
    const userText = message?.text || callbackQuery?.data || message?.caption || ''
    const fromUser = message?.from || callbackQuery?.from
    const userId = `tg_${fromUser?.id || chatId}`
    const userName = fromUser?.first_name || 'Sister'

    if (!chatId) {
      return NextResponse.json({ status: 'ignored', reason: 'No chatId found' }, { status: 200 })
    }

    console.log(`🤖 Telegram Update from @${fromUser?.username || userId} (${chatId}): "${userText}"`)

    // Handle /start command
    let queryText = userText
    if (userText === '/start') {
      queryText = 'hello'
    } else if (userText.startsWith('stage_')) {
      queryText = userText.replace('stage_', '') + ' health guidance'
    }

    // Process with Dr. Arya Bot Engine
    const botResult = await processDrAryaBotMessage(queryText, userId, 'telegram')

    // Construct Telegram Inline Keyboard
    const inlineKeyboard: Array<Array<{ text: string; url?: string; callback_data?: string }>> = [
      [
        { text: '🌱 Teen', callback_data: 'stage_Teen' },
        { text: '🩸 Menstrual', callback_data: 'stage_Menstrual' },
        { text: '🌸 PCOS', callback_data: 'stage_PCOS' },
      ],
      [
        { text: '🤰 Pregnancy', callback_data: 'stage_Pregnancy' },
        { text: '🤱 Postnatal', callback_data: 'stage_Postnatal' },
        { text: '🦋 Menopause', callback_data: 'stage_Menopause' },
      ],
      [
        { text: '💊 Jan Aushadhi Savings', callback_data: 'generic medicine savings' },
        { text: '🏛️ Govt Schemes Hub', url: 'https://www.meditrustai.in/womens-schemes-funds' },
      ],
      [
        { text: '🌐 Open Meditrust Portal', url: 'https://www.meditrustai.in/womens-health' },
        { text: '📞 Call Doctor Desk', url: 'tel:+917028025717' },
      ],
    ]

    // Send Outbound Message to Telegram API
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_BOT_TOKEN !== 'mock') {
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
        console.warn('Could not dispatch to external Telegram endpoint (mocking response):', tgErr)
      }
    }

    return NextResponse.json({
      status: 'success',
      chatId,
      replySent: botResult.replyText,
      isEmergency: botResult.isEmergency,
    })
  } catch (error: any) {
    console.error('Error processing Telegram webhook:', error)
    return NextResponse.json({ status: 'error', error: error.message }, { status: 500 })
  }
}
