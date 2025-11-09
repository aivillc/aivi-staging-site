import { NextRequest, NextResponse } from 'next/server';
import { getSessionData } from '@/lib/sessionData';
import { createOrUpdateHubSpotContact } from '@/lib/hubspotService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sessionId, includeConversation, conversationTranscript } = body;

    if (!sessionId) {
      return NextResponse.json(
        { error: 'sessionId is required' },
        { status: 400 }
      );
    }

    console.log('📊 [HubSpot Sync] Syncing session:', sessionId);

    // Get session data
    const sessionData = getSessionData(sessionId);
    
    if (!sessionData) {
      return NextResponse.json(
        { error: 'Session data not found' },
        { status: 404 }
      );
    }

    if (!sessionData.email) {
      return NextResponse.json(
        { error: 'Email is required to sync to HubSpot' },
        { status: 400 }
      );
    }

    // Create or update contact in HubSpot
    const result = await createOrUpdateHubSpotContact(
      sessionData,
      sessionId,
      includeConversation ? conversationTranscript : undefined
    );

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 500 }
      );
    }

    console.log('✅ [HubSpot Sync] Contact synced successfully');

    return NextResponse.json({
      success: true,
      contactId: result.contactId,
      isNewContact: result.isNewContact,
      message: result.isNewContact 
        ? 'New contact created in HubSpot' 
        : 'Existing contact updated in HubSpot',
    });
  } catch (error) {
    console.error('❌ [HubSpot Sync] Error:', error);
    return NextResponse.json(
      { error: 'Failed to sync to HubSpot' },
      { status: 500 }
    );
  }
}

// Test endpoint
export async function GET() {
  return NextResponse.json({
    status: 'HubSpot sync endpoint is active',
    apiKeyConfigured: !!process.env.HUBSPOT_API_KEY,
  });
}
