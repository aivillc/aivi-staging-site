// Simple in-memory message store
// Note: This will reset on serverless function cold starts
// For production, use Redis, Vercel KV, or a database

interface Message {
  id: number;
  text: string;
  sender: string;
  timestamp: string;
}

const messageStore = new Map<string, Message[]>();

export function getMessages(sessionId: string): Message[] {
  return messageStore.get(sessionId) || [];
}

export function addMessage(sessionId: string, message: Message): void {
  if (!messageStore.has(sessionId)) {
    messageStore.set(sessionId, []);
  }
  const messages = messageStore.get(sessionId)!;
  messages.push(message);
  console.log('[MessageStore] Added message. Total for session:', messages.length);
}

export function clearMessages(sessionId: string): void {
  messageStore.delete(sessionId);
  console.log('[MessageStore] Cleared messages for session:', sessionId);
}
