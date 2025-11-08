import { NextRequest, NextResponse } from 'next/server';
import { getSession, addMessageToSession, updateThreadId } from '@/lib/sessionDb';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, message, sender } = body;

    console.log('[Submit API] Received:', { sessionId, sender });

    if (!sessionId || !message) {
      return NextResponse.json({ error: 'Session ID and message required' }, { status: 400 });
    }

    const existingSession = getSession(sessionId);
    const threadId = existingSession?.threadId;

    console.log('[Submit API] ThreadId:', threadId || 'none');

    addMessageToSession(sessionId, message, sender || 'user');

    const webhookPayload: any = {
      source: 'Website Chat',
      sessionId,
      message,
      sender: sender || 'user',
      timestamp: new Date().toISOString(),
    };

    if (threadId) {
      webhookPayload.threadId = threadId;
    }

    console.log('[Submit API] Sending to webhook');
    
    const webhookResponse = await fetch('https://stage.aivi.io/webhook/prospects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(webhookPayload),
    });

    console.log('[Submit API] Webhook status:', webhookResponse.status);

    if (webhookResponse.ok) {
      const responseData = await webhookResponse.json().catch(() => ({}));
      console.log('[Submit API] Response:', responseData);

      if (responseData.threadId && !threadId) {
        console.log('[Submit API] New threadId:', responseData.threadId);
        updateThreadId(sessionId, responseData.threadId);
      }

      return NextResponse.json({ 
        success: true,
        sessionId,
        threadId: responseData.threadId || threadId
      });
    } else {
      const errorText = await webhookResponse.text();
      console.error('[Submit API] Failed:', errorText);
      return NextResponse.json({ error: 'Webhook failed' }, { status: 500 });
    }
  } catch (error) {
    console.error('[Submit API] Error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
