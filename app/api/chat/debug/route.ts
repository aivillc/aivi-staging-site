import { NextRequest, NextResponse } from 'next/server';
import { messageQueues } from '../messageQueue';

/**
 * Debug endpoint to check message queue state
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const sessionId = searchParams.get('sessionId');

  console.log('[Debug API] Queue state requested');

  const queueState = {
    totalSessions: messageQueues.size,
    sessions: Array.from(messageQueues.keys()),
    queues: {} as any
  };

  messageQueues.forEach((messages, sid) => {
    queueState.queues[sid] = {
      messageCount: messages.length,
      messages: messages
    };
  });

  if (sessionId) {
    const sessionMessages = messageQueues.get(sessionId);
    console.log(`[Debug API] Session ${sessionId}:`, sessionMessages);
    
    return NextResponse.json({
      sessionId,
      messages: sessionMessages || [],
      messageCount: sessionMessages?.length || 0,
      allSessions: queueState
    });
  }

  console.log('[Debug API] Full queue state:', queueState);

  return NextResponse.json(queueState);
}
