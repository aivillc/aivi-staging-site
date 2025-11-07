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

    // Add message to queue
    if (!messageQueues.has(sessionId)) {
      messageQueues.set(sessionId, []);
    }

    const queue = messageQueues.get(sessionId)!;
    const messageId = Date.now() + Math.random();
    
    const messageData = {
      id: messageId,
      text: message,
      sender: sender || 'bot',
      timestamp: new Date().toISOString(),
    };
    
    queue.push(messageData);

    console.log(`✅ [Respond API] Message queued successfully!`);
    console.log(`   SessionId: ${sessionId}`);
    console.log(`   Message: "${message}"`);
    console.log(`   MessageId: ${messageId}`);
    console.log(`   Queue size: ${queue.length}`);
    console.log(`   Message data:`, messageData);
    console.log(`   All sessions in queue:`, Array.from(messageQueues.keys()));

    return NextResponse.json({ 
      success: true,
      queued: true,
      sessionId,
      messageId,
      queueSize: queue.length
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
