import { NextResponse } from 'next/server'
import { processDrAryaBotMessage } from '@/lib/bot/botEngine'

const VERIFY_TOKEN = process.env.WHATSAPP_VERIFY_TOKEN || 'meditrust_ai_whatsapp_token_2026'
const WHATSAPP_ACCESS_TOKEN = process.env.WHATSAPP_ACCESS_TOKEN || ''
const WHATSAPP_PHONE_NUMBER_ID = process.env.WHATSAPP_PHONE_NUMBER_ID || '7028025717'

/**
 * 1. GET: Meta WhatsApp Cloud API Webhook Handshake Verification
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const mode = searchParams.get('hub.mode')
  const token = searchParams.get('hub.verify_token')
  const challenge = searchParams.get('hub.challenge')

  if (mode === 'subscribe' && token === VERIFY_TOKEN) {
    console.log('✅ Meta WhatsApp Webhook verified successfully!')
    return new Response(challenge || 'OK', { status: 200 })
  }

  return NextResponse.json({ error: 'Forbidden. Invalid verification token.' }, { status: 403 })
}

/**
 * 2. POST: Inbound WhatsApp Cloud API Message Processor
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Extract Message Information
    const entry = body?.entry?.[0]
    const changes = entry?.changes?.[0]
    const message = changes?.value?.messages?.[0]
    const fromPhone = message?.from || body?.from || 'unknown'
    const textBody = message?.text?.body || message?.interactive?.button_reply?.title || body?.message || ''

    console.log(`📱 Inbound WhatsApp Message from ${fromPhone}: "${textBody}"`)

    if (!textBody && !message) {
      return NextResponse.json({ status: 'ignored', reason: 'Empty message payload' }, { status: 200 })
    }

    // Process Message through Dr. Arya Bot Engine
    const botResult = await processDrAryaBotMessage(textBody, `wa_${fromPhone}`, 'whatsapp')

    // Outbound Dispatch to Meta Graph API if access token configured
    if (WHATSAPP_ACCESS_TOKEN && WHATSAPP_PHONE_NUMBER_ID) {
      try {
        await fetch(`https://graph.facebook.com/v19.0/${WHATSAPP_PHONE_NUMBER_ID}/messages`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${WHATSAPP_ACCESS_TOKEN}`,
          },
          body: JSON.stringify({
            messaging_product: 'whatsapp',
            recipient_type: 'individual',
            to: fromPhone,
            type: 'text',
            text: {
              preview_url: true,
              body: botResult.replyText,
            },
          }),
        })
      } catch (metaErr) {
        console.warn('Could not dispatch to external Meta Graph API (mocking response):', metaErr)
      }
    }

    return NextResponse.json({
      status: 'success',
      from: fromPhone,
      replyText: botResult.replyText,
      isEmergency: botResult.isEmergency,
      suggestedActions: botResult.suggestedActions,
    })
  } catch (error: any) {
    console.error('Error in WhatsApp webhook handler:', error)
    return NextResponse.json({ status: 'error', error: error.message }, { status: 500 })
  }
}
