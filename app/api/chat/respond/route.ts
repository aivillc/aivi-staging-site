import { NextRequest, NextResponse } from 'next/server';
import { messageQueues } from '../messageQueue';

console.log('[Respond API] Route loaded');

/**
 * POST endpoint for AI agent to send responses to the chatbot
 * 
 * Endpoint: /api/chat/respond
 * 
 * Request Body:
 * {
 *   "sessionId": "session_1234567890_abc123",  // Required: The session ID from the prospects webhook
 *   "message": "Hello! How can I help you?",    // Required: The response message to send
 *   "sender": "bot"                             // Optional: Defaults to "bot"
 * }
 * 
 * Response:
 * {
 *   "success": true,
 *   "queued": true,
 *   "sessionId": "session_1234567890_abc123"
 * }
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, message, sender } = body;

    // Validate required fields
    if (!sessionId) {
      return NextResponse.json({ 
        error: 'Session ID is required',
        example: { sessionId: 'session_1234567890_abc123', message: 'Your response here' }
      }, { status: 400 });
    }

    if (!message) {
      return NextResponse.json({ 
        error: 'Message is required',
        example: { sessionId: 'session_1234567890_abc123', message: 'Your response here' }
      }, { status: 400 });
    }

    console.log(`✅ [Respond API] Forwarding to messages API`);
    console.log(`   SessionId: ${sessionId}`);
    console.log(`   Message: "${message}"`);

    // Forward to the messages POST endpoint (same runtime instance)
    const messagesUrl = new URL('/api/chat/messages', request.url);
    const messagesResponse = await fetch(messagesUrl.toString(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sessionId,
        message,
        sender: sender || 'bot',
      }),
    });

    if (!messagesResponse.ok) {
      throw new Error('Failed to queue message');
    }

    console.log(`✅ [Respond API] Message queued successfully via messages API`);

    return NextResponse.json({ 
      success: true,
      queued: true,
      sessionId,
      message: 'Response queued successfully'
    });
  } catch (error) {
    console.error('[ChatBot Response API] Error processing response:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}

// GET endpoint for API documentation
export async function GET() {
  return NextResponse.json({
    endpoint: '/api/chat/respond',
    method: 'POST',
    description: 'Send AI agent responses to the chatbot',
    requiredFields: {
      sessionId: 'string - The session ID from the prospects webhook',
      message: 'string - The response message to send to the user'
    },
    optionalFields: {
      sender: 'string - Defaults to "bot"'
    },
    example: {
      sessionId: 'session_1234567890_abc123',
      message: 'Hello! How can I help you today?',
      sender: 'bot'
    },
    curlExample: `curl -X POST https://aivistagingsite-cnsxdthv3-giorgio-mihailas-projects.vercel.app/api/chat/respond \\
  -H "Content-Type: application/json" \\
  -d '{
    "sessionId": "session_1234567890_abc123",
    "message": "Hello! How can I help you?"
  }'`
  });
}
