import { NextResponse } from 'next/server';

// Supabase Edge Function endpoint for LiveKit demo tokens (public, no auth required)
const LIVEKIT_TOKEN_ENDPOINT = 'https://ijzmznzusoucjzeefcrz.supabase.co/functions/v1/crm_livekit-demo-token';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email } = body;

    if (!name || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, email' },
        { status: 400 }
      );
    }

    const firstName = name.split(' ')[0];

    // Generate unique room name for this demo session
    const roomName = `demo-${Date.now()}-${Math.random().toString(36).substring(2, 8)}`;

    console.log('LiveKit Demo - Creating room:', roomName, 'for:', firstName);

    // Call Supabase Edge Function to get LiveKit token
    const response = await fetch(LIVEKIT_TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        roomName,
        participantName: name,
        agentConfig: {
          agentName: 'AIVI Demo Agent',
          customerName: name,
          firstName,
          phoneNumber: phone,

          // EDIT THIS: Your demo system prompt
          systemPrompt: `You are AIVI, an AI voice assistant demo for a lead engagement platform.
You are speaking with ${firstName}, a potential customer who wants to see how AIVI works.
Be helpful, friendly, and conversational. Showcase AIVI's capabilities:
- Instant lead response (under 3 seconds)
- Multi-channel engagement (SMS, voice, email)
- AI-powered qualification
- Seamless CRM integration
Keep responses concise (1-2 sentences) for natural conversation flow.
If they ask about pricing or specific features, offer to connect them with a specialist.`,

          // EDIT THIS: Greeting when call connects
          greetingMessage: `Hi ${firstName}! I'm AIVI, your AI assistant. Thanks for trying our demo! I can show you how we help businesses engage leads instantly. What would you like to know?`,

          // Voice configuration for Cartesia TTS
          voiceModel: 'sonic-3',
          voiceId: null,
        },
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('LiveKit token error:', response.status, errorText);
      return NextResponse.json(
        { error: `Failed to generate demo token: ${response.status} - ${errorText}` },
        { status: 500 }
      );
    }

    const data = await response.json();

    console.log('LiveKit Demo - Token generated for room:', roomName);

    return NextResponse.json({
      token: data.token,
      roomName: data.roomName || roomName,
      serverUrl: data.serverUrl,
    });
  } catch (error) {
    console.error('LiveKit demo token error:', error);
    return NextResponse.json(
      { error: 'Failed to create demo session' },
      { status: 500 }
    );
  }
}
