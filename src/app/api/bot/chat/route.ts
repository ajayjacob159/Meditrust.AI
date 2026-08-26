import { NextResponse } from 'next/server'
import { processDrAryaBotMessage } from '@/lib/bot/botEngine'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { message, userId = 'web_user_' + Date.now(), platform = 'web' } = body

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const botResult = await processDrAryaBotMessage(message, userId, platform)

    return NextResponse.json({
      status: 'success',
      reply: botResult.replyText,
      suggestedActions: botResult.suggestedActions || [],
      isEmergency: botResult.isEmergency || false,
      stageIdentified: botResult.stageIdentified || 'General',
    })
  } catch (error: any) {
    console.error('Error in Bot Chat API:', error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
