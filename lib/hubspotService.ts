import { SessionData } from './sessionData';

const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;
const HUBSPOT_API_URL = 'https://api.hubapi.com';

interface HubSpotContactProperties {
  email?: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  company?: string;
  industry?: string;
  hs_lead_status?: string;
  // Custom AIVI properties - must be created in HubSpot first
  aivi_session_id?: string;
  aivi_challenge?: string;
  aivi_channels?: string;
  aivi_volume?: string;
  aivi_goal?: string;
  aivi_current_crm?: string;
  aivi_conversation_transcript?: string;
  aivi_additional_notes?: string;
}

/**
 * Creates or updates a HubSpot contact with session data
 * Searches by email first to avoid duplicates
 */
export async function createOrUpdateHubSpotContact(
  sessionData: SessionData,
  sessionId: string,
  conversationTranscript?: string
): Promise<{ success: boolean; contactId?: string; error?: string; isNewContact?: boolean }> {
  if (!HUBSPOT_API_KEY) {
    console.error('❌ [HubSpot] API key not configured');
    return { success: false, error: 'HubSpot API key not configured' };
  }

  if (!sessionData.email) {
    console.error('❌ [HubSpot] Email is required to create/update contact');
    return { success: false, error: 'Email is required' };
  }

  try {
    // Split name into first and last name
    const nameParts = sessionData.name?.split(' ') || [];
    const firstname = nameParts[0] || '';
    const lastname = nameParts.slice(1).join(' ') || '';

    // Map session data to HubSpot properties
    const properties: HubSpotContactProperties = {
      email: sessionData.email,
      firstname,
      lastname,
      phone: sessionData.phone,
      company: sessionData.businessName,
      industry: sessionData.industry,
      hs_lead_status: 'NEW',
      aivi_session_id: sessionId,
      aivi_challenge: sessionData.challenge,
      aivi_channels: sessionData.channels?.join(', '),
      aivi_volume: sessionData.volume,
      aivi_goal: sessionData.goal,
      aivi_current_crm: sessionData.crm,
      aivi_conversation_transcript: conversationTranscript,
      aivi_additional_notes: sessionData.additionalNotes,
    };

    // Remove undefined values
    Object.keys(properties).forEach(key => {
      if (properties[key as keyof HubSpotContactProperties] === undefined) {
        delete properties[key as keyof HubSpotContactProperties];
      }
    });

    console.log('📤 [HubSpot] Syncing contact:', sessionData.email);

    // Try to find existing contact by email first
    const searchResponse = await fetch(
      `${HUBSPOT_API_URL}/crm/v3/objects/contacts/search`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
        },
        body: JSON.stringify({
          filterGroups: [
            {
              filters: [
                {
                  propertyName: 'email',
                  operator: 'EQ',
                  value: sessionData.email,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!searchResponse.ok) {
      const errorText = await searchResponse.text();
      console.error('❌ [HubSpot] Search failed:', errorText);
      return { success: false, error: `Search failed: ${errorText}` };
    }

    const searchData = await searchResponse.json();
    
    if (searchData.results && searchData.results.length > 0) {
      // Update existing contact
      const contactId = searchData.results[0].id;
      console.log('🔄 [HubSpot] Updating existing contact:', contactId);

      const updateResponse = await fetch(
        `${HUBSPOT_API_URL}/crm/v3/objects/contacts/${contactId}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
          },
          body: JSON.stringify({ properties }),
        }
      );

      if (!updateResponse.ok) {
        const errorText = await updateResponse.text();
        console.error('❌ [HubSpot] Update failed:', errorText);
        return { success: false, error: `Update failed: ${errorText}` };
      }

      console.log('✅ [HubSpot] Contact updated successfully');
      return { success: true, contactId, isNewContact: false };
    } else {
      // Create new contact
      console.log('➕ [HubSpot] Creating new contact');

      const createResponse = await fetch(
        `${HUBSPOT_API_URL}/crm/v3/objects/contacts`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
          },
          body: JSON.stringify({ properties }),
        }
      );

      if (!createResponse.ok) {
        const errorText = await createResponse.text();
        console.error('❌ [HubSpot] Create failed:', errorText);
        
        // If custom properties don't exist, the error will mention it
        if (errorText.includes('Property') && errorText.includes('does not exist')) {
          console.warn('⚠️ [HubSpot] Custom properties not found. Create them in HubSpot first.');
        }
        
        return { success: false, error: `Create failed: ${errorText}` };
      }

      const createData = await createResponse.json();
      console.log('✅ [HubSpot] Contact created successfully:', createData.id);
      return { success: true, contactId: createData.id, isNewContact: true };
    }
  } catch (error) {
    console.error('❌ [HubSpot] Error:', error);
    return { success: false, error: String(error) };
  }
}

/**
 * Test HubSpot connection
 */
export async function testHubSpotConnection(): Promise<boolean> {
  if (!HUBSPOT_API_KEY) {
    console.error('❌ [HubSpot] API key not configured');
    return false;
  }

  try {
    const response = await fetch(
      `${HUBSPOT_API_URL}/crm/v3/objects/contacts?limit=1`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
        },
      }
    );

    if (response.ok) {
      console.log('✅ [HubSpot] Connection successful');
      return true;
    } else {
      const errorText = await response.text();
      console.error('❌ [HubSpot] Connection failed:', errorText);
      return false;
    }
  } catch (error) {
    console.error('❌ [HubSpot] Connection error:', error);
    return false;
  }
}
