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
    console.log('📖 [getSessionData] Reading for sessionId:', sessionId);
    console.log('📖 [getSessionData] Raw localStorage:', stored);
    
    if (!stored) {
      console.log('📖 [getSessionData] No data in localStorage');
      return null;
    }
    
    const allData = JSON.parse(stored);
    console.log('📖 [getSessionData] All sessions:', Object.keys(allData));
    
    const data = allData[sessionId] || null;
    console.log('📖 [getSessionData] Data for this session:', data);
    
    return data;
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
 * Only extracts when user explicitly provides information
 */
export function extractInfoFromMessage(message: string, currentData: SessionData): Partial<SessionData> {
  const updates: Partial<SessionData> = {};
  const lowerMessage = message.toLowerCase();
  
  // Only extract email if user explicitly mentions it
  if (lowerMessage.includes('my email') || lowerMessage.includes('email is') || lowerMessage.includes('email:')) {
    const emailMatch = message.match(/\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/);
    if (emailMatch) {
      updates.email = emailMatch[0];
    }
  }
  
  // Only extract phone if user explicitly mentions it
  if (lowerMessage.includes('my phone') || lowerMessage.includes('my number') || 
      lowerMessage.includes('phone is') || lowerMessage.includes('number is') ||
      lowerMessage.includes('phone:') || lowerMessage.includes('call me at')) {
    const phoneMatch = message.match(/(\+\d{1,3}[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
    if (phoneMatch) {
      updates.phone = phoneMatch[0];
    }
  }
  
  // Only extract name if user explicitly introduces themselves
  const namePatterns = [
    /(?:my name is|i'm|i am|this is|call me)\s+([A-Z][a-z]+(?:\s+[A-Z][a-z]+)*)/i,
  ];
  
  for (const pattern of namePatterns) {
    const nameMatch = message.match(pattern);
    if (nameMatch) {
      updates.name = nameMatch[1];
      break;
    }
  }
  
  // Only extract business name if user explicitly mentions it
  const companyPatterns = [
    /(?:my company is|my business is|company is|business is|i work at|i work for|working for|employed by|from)\s+([A-Z][A-Za-z0-9\s&,.'-]+(?:Inc|LLC|Ltd|Corp|Co)?)/i,
  ];
  
  for (const pattern of companyPatterns) {
    const companyMatch = message.match(pattern);
    if (companyMatch) {
      updates.businessName = companyMatch[1].trim();
      break;
    }
  }
  
  // Only extract industry if user explicitly mentions it
  if (lowerMessage.includes('industry') || lowerMessage.includes('in the') || lowerMessage.includes('business')) {
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
    
    for (const [industry, keywords] of Object.entries(industries)) {
      if (keywords.some(keyword => lowerMessage.includes(keyword))) {
        updates.industry = industry;
        break;
      }
    }
  }
  
  // Only extract country if user explicitly mentions it
  if (lowerMessage.includes('from') || lowerMessage.includes('located in') || 
      lowerMessage.includes('based in') || lowerMessage.includes('country')) {
    const countries = [
      'USA', 'United States', 'America', 'Canada', 'UK', 'United Kingdom', 
      'Australia', 'Mexico', 'Germany', 'France', 'Spain', 'Italy'
    ];
    
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
