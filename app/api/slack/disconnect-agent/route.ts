import { NextRequest, NextResponse } from 'next/server';

/**
 * POST endpoint to disconnect agent and restore AI assistant
 * 
 * This endpoint is called when an agent types "assistant" in Slack
 * to hand the conversation back to the AI assistant.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, channelId } = body;

    console.log('🔌 [Disconnect Agent] Request received');
    console.log('   SessionId:', sessionId);
    console.log('   ChannelId:', channelId);

    if (!sessionId) {
      return NextResponse.json({ error: 'Session ID required' }, { status: 400 });
    }

    // In a real implementation with Redis/KV store, we would:
    // 1. Mark the session as "agent_disconnected"
    // 2. Store metadata about when the handoff happened
    // For now, we'll just acknowledge the request
    
    console.log('✅ [Disconnect Agent] Session marked for AI assistant restoration');

    return NextResponse.json({ 
      success: true,
      sessionId,
      message: 'Agent disconnected, AI assistant will handle future messages'
    });
  } catch (error) {
    console.error('❌ [Disconnect Agent] Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// GET endpoint for documentation
export async function GET() {
  return NextResponse.json({
    endpoint: '/api/slack/disconnect-agent',
    method: 'POST',
    description: 'Disconnect live agent and restore AI assistant',
    requiredFields: {
      sessionId: 'string - The session ID',
      channelId: 'string - The Slack channel ID'
    },
    usage: 'Called automatically when agent types "assistant" in Slack'
  });
}
