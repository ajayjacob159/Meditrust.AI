import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, phone, email, city, healthNeed, couponCode } = body

    if (!phone || !name) {
      return NextResponse.json(
        { error: 'Name and Phone Number are required' },
        { status: 400 }
      )
    }

    const leadData = {
      timestamp: new Date().toISOString(),
      name,
      phone,
      email: email || 'Not provided',
      city: city || 'Pune',
      healthNeed: healthNeed || 'General Health Consultation',
      couponCode: couponCode || 'MEDITRUST20',
      recipients: ['meditrust41@gmail.com', 'ajayjacobe2@gmail.com'],
    }

    console.log('🚨 NEW LEAD CAPTURED FOR MEDITRUST AI (20% DISCOUNT):', leadData)

    // Send email notification using Formspree / Webhook / SMTP notification
    try {
      await fetch('https://formspree.io/f/xbjnqeyo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          _subject: `🎁 New 20% Discount Lead: ${name} (${phone}) - Meditrust AI`,
          name,
          phone,
          email: email || 'meditrust41@gmail.com',
          city,
          healthNeed,
          couponCode: 'MEDITRUST20',
          forward_to: 'meditrust41@gmail.com, ajayjacobe2@gmail.com',
        }),
      }).catch(() => {})
    } catch (err) {
      // Non-blocking fallback
    }

    return NextResponse.json({
      success: true,
      message: 'Lead captured successfully! 20% discount code activated.',
      coupon: 'MEDITRUST20',
      discount: '20% OFF',
    })
  } catch (error: any) {
    console.error('Lead capture error:', error)
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    )
  }
}
