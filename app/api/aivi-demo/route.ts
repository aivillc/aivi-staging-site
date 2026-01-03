import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log('AIVI Demo webhook - sending:', { name: body.name, phone: body.phone, email: body.email, microphone: body.microphone });

    const response = await fetch('https://stage.aivi.io/webhook/AIVIDemo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: body.name,
        phone: body.phone,
        email: body.email,
        microphone: body.microphone ?? false, // true if user allowed mic access, false if denied
      }),
    });

    const responseText = await response.text();
    console.log('AIVI Demo webhook - response:', response.status, responseText);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Webhook proxy error:', error);
    return NextResponse.json({ success: false, error: 'Failed to send to webhook' }, { status: 500 });
  }
}
