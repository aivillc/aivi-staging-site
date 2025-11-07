// Shared in-memory message queue
// In production, use Redis or a database for persistence across serverless functions

export const messageQueues: Map<string, Array<{ 
  id: number; 
  text: string; 
  sender: string; 
  timestamp: string 
}>> = new Map();

console.log('[MessageQueue] Shared queue module loaded');
