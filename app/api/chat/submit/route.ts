import { NextRequest, NextResponse } from 'next/server';

/**
 * POST /api/chat/submit
 * Submit final chat conversation to prospects endpoint
 * 
 * Body:
 * {
 *   sessionId: string,
 *   messages: Array<{ text: string, sender: string, timestamp: string }>,
 *   userInfo?: { email?: string, name?: string, phone?: string }
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, messages, userInfo } = body;

    if (!sessionId || !messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'sessionId and messages array are required' },
        { status: 400 }
      );
    }

    // Format the conversation for the prospects API
    const conversationText = messages
      .map((msg: any) => `${msg.sender.toUpperCase()}: ${msg.text}`)
      .join('\n');

    const prospectData = {
      source: 'Website Chat',
      sessionId,
      conversation: conversationText,
      messageCount: messages.length,
      timestamp: new Date().toISOString(),
      ...userInfo, // Include any user info if provided
    };

    // Send to prospects webhook
    const webhookResponse = await fetch('https://stage.aivi.io/webhook/prospects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(prospectData),
    });

    if (!webhookResponse.ok) {
      console.error('Webhook error:', await webhookResponse.text());
      return NextResponse.json(
        { error: 'Failed to submit to prospects endpoint', success: false },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Chat conversation submitted successfully',
    });
  } catch (error) {
    console.error('Error submitting chat:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
