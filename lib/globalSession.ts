/**
 * Global Session Management
 * Ensures a single session ID is used across the entire site
 */

import { generateSessionId } from './chatConfig';

const GLOBAL_SESSION_KEY = 'aivi_global_session_id';

/**
 * Get the global session ID (creates one if it doesn't exist)
 */
export function getGlobalSessionId(): string {
  if (typeof window === 'undefined') {
    // Server-side: generate temporary ID
    return generateSessionId();
  }

  try {
    let sessionId = localStorage.getItem(GLOBAL_SESSION_KEY);
    
    if (!sessionId) {
      // Create new global session ID
      sessionId = generateSessionId();
      localStorage.setItem(GLOBAL_SESSION_KEY, sessionId);
      console.log('🌐 [Global Session] Created new global session:', sessionId);
    } else {
      console.log('🌐 [Global Session] Using existing global session:', sessionId);
    }
    
    return sessionId;
  } catch (error) {
    console.error('Error getting global session ID:', error);
    return generateSessionId();
  }
}

/**
 * Clear the global session ID
 */
export function clearGlobalSession(): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(GLOBAL_SESSION_KEY);
    console.log('🌐 [Global Session] Cleared global session');
  } catch (error) {
    console.error('Error clearing global session:', error);
  }
}

/**
 * Set a specific session ID as the global one (for migration purposes)
 */
export function setGlobalSessionId(sessionId: string): void {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.setItem(GLOBAL_SESSION_KEY, sessionId);
    console.log('🌐 [Global Session] Set global session to:', sessionId);
  } catch (error) {
    console.error('Error setting global session:', error);
  }
}
