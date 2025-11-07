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

    if (!sessionId || !message) {
      return NextResponse.json({ error: 'Session ID and message required' }, { status: 400 });
    }

    // Add message to queue
    if (!messageQueues.has(sessionId)) {
      messageQueues.set(sessionId, []);
    }

    const queue = messageQueues.get(sessionId)!;
    queue.push({
      id: Date.now(),
      text: message,
      sender: sender || 'bot',
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing message:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
