/**
 * Session Data Management
 * Tracks user information throughout their session
 */

export interface SessionData {
  sessionId: string;
  name?: string;
  phone?: string;
  email?: string;
  businessName?: string;
  country?: string;
  industry?: string;
  // Form-specific fields
  challenge?: string;
  channels?: string[];
  volume?: string;
  goal?: string;
  crm?: string;
  additionalNotes?: string;
  // Metadata
  createdAt: string;
  updatedAt: string;
}

const SESSION_DATA_KEY = 'aivi_session_data';

/**
 * Get session data from localStorage
 */
export function getSessionData(sessionId: string): SessionData | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const stored = localStorage.getItem(SESSION_DATA_KEY);
    if (!stored) return null;
    
    const allData = JSON.parse(stored);
    return allData[sessionId] || null;
  } catch (error) {
    console.error('Error reading session data:', error);
    return null;
  }
}

/**
 * Update session data in localStorage
 */
export function updateSessionData(sessionId: string, updates: Partial<Omit<SessionData, 'sessionId' | 'createdAt'>>): SessionData {
  if (typeof window === 'undefined') {
    throw new Error('Cannot update session data on server side');
  }
  
  try {
    const stored = localStorage.getItem(SESSION_DATA_KEY);
    const allData = stored ? JSON.parse(stored) : {};
    
    const existingData = allData[sessionId] || {
      sessionId,
      createdAt: new Date().toISOString(),
    };
    
    const updatedData: SessionData = {
      ...existingData,
      ...updates,
      sessionId, // Ensure sessionId doesn't get overwritten
      updatedAt: new Date().toISOString(),
    };
    
    allData[sessionId] = updatedData;
    localStorage.setItem(SESSION_DATA_KEY, JSON.stringify(allData));
    
    console.log('📝 Session data updated:', sessionId, updates);
    return updatedData;
  } catch (error) {
    console.error('Error updating session data:', error);
    throw error;
  }
}

/**
 * Clear session data for a specific session
 */
export function clearSessionData(sessionId: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    const stored = localStorage.getItem(SESSION_DATA_KEY);
    if (!stored) return;
    
    const allData = JSON.parse(stored);
    delete allData[sessionId];
    
    localStorage.setItem(SESSION_DATA_KEY, JSON.stringify(allData));
    console.log('🗑️ Session data cleared:', sessionId);
  } catch (error) {
    console.error('Error clearing session data:', error);
  }
}

/**
 * Extract information from user message using keywords
 */
export function extractInfoFromMessage(message: string, currentData: SessionData): Partial<SessionData> {
  const updates: Partial<SessionData> = {};
  const lowerMessage = message.toLowerCase();
  
  // Email regex
  const emailMatch = message.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
  if (emailMatch && !currentData.email) {
    updates.email = emailMatch[0];
  }
  
  // Phone regex (various formats)
  const phoneMatch = message.match(/(\+\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
  if (phoneMatch && !currentData.phone) {
    updates.phone = phoneMatch[0];
  }
  
  // Name extraction (simple heuristic)
  const namePatterns = [
    /(?:my name is|i'm|i am|this is)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/i,
    /^([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)$/i, // Just a name
  ];
  
  for (const pattern of namePatterns) {
    const nameMatch = message.match(pattern);
    if (nameMatch && !currentData.name) {
      updates.name = nameMatch[1];
      break;
    }
  }
  
  // Business/Company name
  const companyPatterns = [
    /(?:company|business|organization|firm|from)\s+(?:is\s+)?(?:called\s+)?([A-Z][A-Za-z0-9\s&,.'-]+(?:Inc|LLC|Ltd|Corp|Co)?)/,
    /(?:work at|working for|employed by)\s+([A-Z][A-Za-z0-9\s&,.'-]+)/,
  ];
  
  for (const pattern of companyPatterns) {
    const companyMatch = message.match(pattern);
    if (companyMatch && !currentData.businessName) {
      updates.businessName = companyMatch[1].trim();
      break;
    }
  }
  
  // Industry keywords
  const industries: { [key: string]: string[] } = {
    'Trucking & Logistics': ['trucking', 'logistics', 'freight', 'transportation', 'shipping', 'delivery'],
    'Financial Services': ['finance', 'financial', 'banking', 'investment', 'wealth management'],
    'Insurance': ['insurance', 'insurer', 'underwriting', 'claims', 'policy', 'coverage'],
    'Healthcare': ['healthcare', 'medical', 'hospital', 'clinic', 'health', 'doctor', 'patient'],
    'Real Estate': ['real estate', 'property', 'realty', 'housing', 'realtor'],
    'Retail': ['retail', 'store', 'shop', 'ecommerce', 'e-commerce'],
    'Manufacturing': ['manufacturing', 'factory', 'production', 'assembly'],
    'Technology': ['technology', 'software', 'tech', 'IT', 'saas'],
  };
  
  if (!currentData.industry) {
    for (const [industry, keywords] of Object.entries(industries)) {
      if (keywords.some(keyword => lowerMessage.includes(keyword))) {
        updates.industry = industry;
        break;
      }
    }
  }
  
  // Country extraction
  const countries = [
    'USA', 'United States', 'America', 'Canada', 'UK', 'United Kingdom', 
    'Australia', 'Mexico', 'Germany', 'France', 'Spain', 'Italy'
  ];
  
  if (!currentData.country) {
    for (const country of countries) {
      if (lowerMessage.includes(country.toLowerCase())) {
        updates.country = country;
        break;
      }
    }
  }
  
  return updates;
}

/**
 * Format session data for Slack channel description
 */
export function formatSessionDataForSlack(data: SessionData): string {
  let formatted = '';
  
  if (data.name) formatted += `*Name:* ${data.name}\n`;
  if (data.email) formatted += `*Email:* ${data.email}\n`;
  if (data.phone) formatted += `*Phone:* ${data.phone}\n`;
  if (data.businessName) formatted += `*Business:* ${data.businessName}\n`;
  if (data.industry) formatted += `*Industry:* ${data.industry}\n`;
  if (data.country) formatted += `*Country:* ${data.country}\n`;
  
  // Form data
  if (data.challenge) formatted += `*Challenge:* ${data.challenge}\n`;
  if (data.channels) formatted += `*Channels:* ${Array.isArray(data.channels) ? data.channels.join(', ') : data.channels}\n`;
  if (data.volume) formatted += `*Monthly Volume:* ${data.volume}\n`;
  if (data.goal) formatted += `*Goal:* ${data.goal}\n`;
  if (data.crm) formatted += `*CRM:* ${data.crm}\n`;
  if (data.additionalNotes) formatted += `*Notes:* ${data.additionalNotes}\n`;
  
  return formatted || '*No additional information available*';
}
