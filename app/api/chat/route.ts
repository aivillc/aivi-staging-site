import { NextRequest, NextResponse } from 'next/server';

// Store active chat sessions in memory (in production, use Redis or database)
const activeSessions = new Map<string, any>();

/**
 * POST /api/chat
 * Receive messages from backend AI to send to frontend chatbot
 * 
 * Body:
 * {
 *   sessionId: string,
 *   message: string,
 *   sender: 'bot' | 'system'
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, message, sender = 'bot' } = body;

    if (!sessionId || !message) {
      return NextResponse.json(
        { error: 'sessionId and message are required' },
        { status: 400 }
      );
    }

    // Store message for this session
    if (!activeSessions.has(sessionId)) {
      activeSessions.set(sessionId, []);
    }

    const sessionMessages = activeSessions.get(sessionId);
    sessionMessages.push({
      id: Date.now(),
      text: message,
      sender,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      sessionId,
      message: 'Message queued for delivery',
    });
  } catch (error) {
    console.error('Error in chat API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * GET /api/chat?sessionId=xxx
 * Poll for new messages from backend (called by frontend)
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const sessionId = searchParams.get('sessionId');

    if (!sessionId) {
      return NextResponse.json(
        { error: 'sessionId is required' },
        { status: 400 }
      );
    }

    const messages = activeSessions.get(sessionId) || [];
    
    // Clear messages after retrieval (or implement read tracking)
    activeSessions.set(sessionId, []);

    return NextResponse.json({
      success: true,
      messages,
    });
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
