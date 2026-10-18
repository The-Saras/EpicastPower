import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      )
    }

    const scriptUrl = process.env.GOOGLE_SHEETS_SCRIPT_URL

    if (!scriptUrl) {
      console.warn('GOOGLE_SHEETS_SCRIPT_URL is not set in environment variables.')
      return NextResponse.json(
        {
          error:
            'Google Sheets integration URL is not configured. Please set GOOGLE_SHEETS_SCRIPT_URL in .env.local.',
        },
        { status: 503 }
      )
    }

    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : 'N/A',
      message: message.trim(),
      timestamp: new Date().toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        dateStyle: 'medium',
        timeStyle: 'medium',
      }),
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      redirect: 'follow',
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Google Apps Script response error:', errorText)
      return NextResponse.json(
        { error: 'Failed to record enquiry to Google Sheets.' },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'Enquiry recorded successfully.',
    })
  } catch (err) {
    console.error('Error submitting contact form:', err)
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    )
  }
}
