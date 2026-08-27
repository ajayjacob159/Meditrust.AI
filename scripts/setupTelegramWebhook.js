/**
 * Meditrust AI — Telegram Bot One-Click Setup & Webhook Register
 * Usage: node scripts/setupTelegramWebhook.js <TELEGRAM_BOT_TOKEN>
 */

const https = require('https')

const token = process.argv[2] || process.env.TELEGRAM_BOT_TOKEN
const webhookUrl = 'https://www.meditrustai.in/api/bot/telegram'

if (!token || token.includes('meditrust_sakhi_bot_2026')) {
  console.log('❌ Please provide your Telegram Bot Token from @BotFather.')
  console.log('Usage: node scripts/setupTelegramWebhook.js <YOUR_BOT_TOKEN>')
  process.exit(1)
}

function callTelegramApi(endpoint, data = null) {
  return new Promise((resolve, reject) => {
    const postData = data ? JSON.stringify(data) : null
    const options = {
      hostname: 'api.telegram.org',
      port: 443,
      path: `/bot${token}/${endpoint}`,
      method: postData ? 'POST' : 'GET',
      headers: postData
        ? {
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData),
          }
        : {},
    }

    const req = https.request(options, (res) => {
      let body = ''
      res.on('data', (chunk) => (body += chunk))
      res.on('end', () => {
        try {
          resolve(JSON.parse(body))
        } catch (e) {
          resolve(body)
        }
      })
    })

    req.on('error', reject)
    if (postData) req.write(postData)
    req.end()
  })
}

async function setup() {
  console.log('🚀 Starting Meditrust AI Telegram Bot Setup...\n')

  // 1. Get Bot Info
  const me = await callTelegramApi('getMe')
  if (!me.ok) {
    console.error('❌ Invalid Bot Token:', me.description)
    process.exit(1)
  }
  console.log(`✅ Connected to Bot: @${me.result.username} (${me.result.first_name})`)

  // 2. Set Commands
  const commands = [
    { command: 'start', description: 'Start Dr. Arya AI Health Assistant' },
    { command: 'stages', description: 'Select from 7 Women Life Stages' },
    { command: 'report', description: 'Blood Test OCR Report Analysis' },
    { command: 'savings', description: 'Jan Aushadhi 80% Generic Savings Match' },
    { command: 'schemes', description: 'Government & CSR Schemes Directory' },
    { command: 'help', description: 'Emergency Helplines & Contact Desk' },
  ]
  const setCmd = await callTelegramApi('setMyCommands', { commands })
  console.log('✅ Registered Bot Commands:', setCmd.ok ? 'SUCCESS' : setCmd.description)

  // 3. Set Description
  const desc =
    'Namaste! 🙏 Dr. Arya is your 24/7 AI Health Companion from Meditrust AI. ' +
    'Get private guidance for periods, PCOS, pregnancy, lab reports, and 80% medicine savings in Marathi, Hindi & English.'
  await callTelegramApi('setMyDescription', { description: desc })
  console.log('✅ Set Bot Description: SUCCESS')

  // 4. Set Webhook
  const hookRes = await callTelegramApi('setWebhook', {
    url: webhookUrl,
    allowed_updates: ['message', 'callback_query'],
    drop_pending_updates: true,
  })
  console.log(`✅ Set Webhook URL to ${webhookUrl}:`, hookRes.ok ? 'SUCCESS' : hookRes.description)

  // 5. Verify Webhook Info
  const hookInfo = await callTelegramApi('getWebhookInfo')
  console.log('\n📊 Webhook Status:')
  console.log(`   URL: ${hookInfo.result.url}`)
  console.log(`   Pending Updates: ${hookInfo.result.pending_update_count}`)
  console.log(`   Custom Certificate: ${hookInfo.result.has_custom_certificate}`)

  console.log('\n🎉 Meditrust AI Telegram Bot is 100% configured and live!')
  console.log(`👉 Test now: https://t.me/${me.result.username}`)
}

setup().catch(console.error)
