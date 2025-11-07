import { NextRequest, NextResponse } from 'next/server';
import { messageQueues } from '../messageQueue';

console.log('[Messages API] Route loaded');

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sessionId = searchParams.get('sessionId');

  console.log('[Messages API GET] Request received. SessionId:', sessionId);

  if (!sessionId) {
    console.log('[Messages API GET] No sessionId provided');
    return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
  }

  // Get messages for this session
  const messages = messageQueues.get(sessionId) || [];
  
  console.log('[Messages API GET] Found', messages.length, 'messages for session:', sessionId);
  console.log('[Messages API GET] Queue contents:', messages);
  console.log('[Messages API GET] All sessions in queue:', Array.from(messageQueues.keys()));
  
  // Clear the queue after retrieval
  if (messages.length > 0) {
    messageQueues.delete(sessionId);
    console.log('[Messages API GET] Cleared queue for session:', sessionId);
  }

  return NextResponse.json({ messages });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, message, sender } = body;

    console.log('[Messages API POST] ====== NEW MESSAGE ======');
    console.log('[Messages API POST] SessionId:', sessionId);
    console.log('[Messages API POST] Message:', message);
    console.log('[Messages API POST] Sender:', sender);

    if (!sessionId || !message) {
      console.error('[Messages API POST] Missing required fields');
      return NextResponse.json({ error: 'Session ID and message required' }, { status: 400 });
    }

    // Add message to queue
    if (!messageQueues.has(sessionId)) {
      messageQueues.set(sessionId, []);
      console.log('[Messages API POST] Created new queue for session:', sessionId);
    }

    const queue = messageQueues.get(sessionId)!;
    const messageData = {
      id: Date.now(),
      text: message,
      sender: sender || 'bot',
      timestamp: new Date().toISOString(),
    };
    
    queue.push(messageData);

    console.log('[Messages API POST] ✅ Message queued successfully!');
    console.log('[Messages API POST] Queue size:', queue.length);
    console.log('[Messages API POST] Message data:', messageData);
    console.log('[Messages API POST] All active sessions:', Array.from(messageQueues.keys()));

    return NextResponse.json({ 
      success: true,
      queueSize: queue.length,
      messageId: messageData.id
    });
  } catch (error) {
    console.error('[Messages API POST] Error processing message:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
