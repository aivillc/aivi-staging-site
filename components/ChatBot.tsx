'use client';

import { useState, useRef, useEffect } from 'react';
import { CHAT_CONFIG, generateMessageId } from '@/lib/chatConfig';
import { getSessionData, updateSessionData, clearSessionData, extractInfoFromMessage, type SessionData } from '@/lib/sessionData';
import { getGlobalSessionId, clearGlobalSession } from '@/lib/globalSession';

if (process.env.NODE_ENV === 'development') {
  console.log('🤖 [ChatBot] Module loaded');
}

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatState {
  sessionId: string;
  messages: Array<{
    id: number;
    text: string;
    sender: 'user' | 'bot';
    timestamp: string;
  }>;
  isOpen: boolean;
  lastActivity: string;
}

export default function ChatBot() {
  // Helper to get cached state (parse once, reuse)
  const getCachedState = (): ChatState | null => {
    if (typeof window !== 'undefined') {
      const cached = localStorage.getItem('aivi_chat_state');
      if (cached) {
        try {
          return JSON.parse(cached);
        } catch (error) {
          if (process.env.NODE_ENV === 'development') {
            console.error('🤖 [ChatBot] Failed to parse cached state:', error);
          }
          localStorage.removeItem('aivi_chat_state');
        }
      }
    }
    return null;
  };

  // Check if cache is expired (30 minutes)
  const checkAndClearExpiredCache = (): boolean => {
    const state = getCachedState();
    if (state) {
      const lastActivity = new Date(state.lastActivity);
      const now = new Date();
      const minutesSinceActivity = (now.getTime() - lastActivity.getTime()) / (1000 * 60);
      
      if (minutesSinceActivity >= CHAT_CONFIG.CACHE_EXPIRY_MINUTES) {
        if (process.env.NODE_ENV === 'development') {
          console.log('🤖 [ChatBot] Cache expired after 30 minutes, clearing...');
        }
        localStorage.removeItem('aivi_chat_state');
        return true;
      }
    }
    return false;
  };

  // Initialize state - will be hydrated from localStorage after mount
  const [isOpen, setIsOpen] = useState(false);
  const [sessionId, setSessionId] = useState(() => {
    // Use global session ID (shared with form)
    if (typeof window !== 'undefined') {
      return getGlobalSessionId();
    }
    // Server-side fallback (will be replaced on hydration)
    return 'ssr-placeholder';
  });
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm AIVI, your AI assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [isHydrated, setIsHydrated] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [slackChannelId, setSlackChannelId] = useState<string | null>(null);
  const [agentConnected, setAgentConnected] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Hydrate from localStorage on mount (client-side only)
  useEffect(() => {
    if (checkAndClearExpiredCache()) {
      setIsHydrated(true);
      return;
    }

    // If we used the form session ID, clear the reference
    const formSessionId = localStorage.getItem('aivi_form_session_id');
    if (formSessionId && formSessionId === sessionId) {
      localStorage.removeItem('aivi_form_session_id');
      console.log('🤖 [ChatBot] Cleared form session reference after using it');
    }

    const state = getCachedState();
    if (state) {
      if (state.sessionId) {
        setSessionId(state.sessionId);
        console.log('🤖 [ChatBot] Restored sessionId from cache:', state.sessionId);
        
        // Initialize session data if it doesn't exist
        const existingSessionData = getSessionData(state.sessionId);
        if (!existingSessionData) {
          updateSessionData(state.sessionId, {});
          console.log('🤖 [ChatBot] Initialized session data for:', state.sessionId);
        }
        
        // Check if user filled out form first
        const formSessionId = localStorage.getItem('aivi_form_session_id');
        if (formSessionId) {
          const formData = getSessionData(formSessionId);
          if (formData) {
            // Merge form data into chat session
            updateSessionData(state.sessionId, {
              name: formData.name,
              email: formData.email,
              phone: formData.phone,
              businessName: formData.businessName,
              industry: formData.industry,
              challenge: formData.challenge,
              channels: formData.channels,
              volume: formData.volume,
              goal: formData.goal,
              crm: formData.crm,
              additionalNotes: formData.additionalNotes,
            });
            console.log('🤖 [ChatBot] Merged form data into chat session');
            // Clear the form session reference
            localStorage.removeItem('aivi_form_session_id');
          }
        }
      }
      if (state.messages && state.messages.length > 0) {
        setMessages(state.messages.map(msg => ({
          ...msg,
          timestamp: new Date(msg.timestamp),
        })));
        console.log('🤖 [ChatBot] Restored', state.messages.length, 'messages from cache');
      }
      setIsOpen(state.isOpen || false);
    } else {
      // New session - check if form was filled
      const formSessionId = localStorage.getItem('aivi_form_session_id');
      if (formSessionId) {
        const formData = getSessionData(formSessionId);
        if (formData) {
          // Use form session as chat session
          setSessionId(formSessionId);
          console.log('🤖 [ChatBot] Using form session as chat session:', formSessionId);
          localStorage.removeItem('aivi_form_session_id');
        }
      }
    }
    setIsHydrated(true);
  }, []);

  // Save state to localStorage whenever it changes (only after hydration)
  useEffect(() => {
    if (!isHydrated) return;
    
    if (typeof window !== 'undefined') {
      const state: ChatState = {
        sessionId,
        messages: messages.map(msg => ({
          id: msg.id,
          text: msg.text,
          sender: msg.sender,
          timestamp: msg.timestamp.toISOString(),
        })),
        isOpen,
        lastActivity: new Date().toISOString(),
      };
      localStorage.setItem('aivi_chat_state', JSON.stringify(state));
      if (process.env.NODE_ENV === 'development') {
        console.log('🤖 [ChatBot] State saved to cache with timestamp');
      }
    }
  }, [sessionId, messages, isOpen, isHydrated]);

  // Log on mount
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('🤖 [ChatBot] Component mounted and ready');
      console.log('🤖 [ChatBot] SessionId:', sessionId);
    }
  }, [sessionId]);

  // Check for expired cache every minute
  useEffect(() => {
    const checkInterval = setInterval(() => {
      if (checkAndClearExpiredCache()) {
        // Cache expired, clear global session and create new one
        clearGlobalSession();
        const newSessionId = getGlobalSessionId();
        setSessionId(newSessionId);
        setMessages([
          {
            id: 1,
            text: "Hi! I'm AIVI, your AI assistant. How can I help you today?",
            sender: 'bot',
            timestamp: new Date(),
          },
        ]);
        setIsOpen(false);
        setIsTyping(false);
        if (process.env.NODE_ENV === 'development') {
          console.log('🤖 [ChatBot] Session expired after 30 minutes of inactivity. New sessionId:', newSessionId);
        }
      }
    }, CHAT_CONFIG.CACHE_CHECK_INTERVAL_MS);

    return () => clearInterval(checkInterval);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Poll for backend AI messages when chat is open
  useEffect(() => {
    if (!isOpen) {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
      }
      return;
    }

    if (process.env.NODE_ENV === 'development') {
      console.log('[ChatBot] Starting polling for sessionId:', sessionId);
    }

    const pollMessages = async () => {
      try {
        const url = `/api/chat/messages?sessionId=${sessionId}`;
        if (process.env.NODE_ENV === 'development') {
          console.log('[ChatBot] Polling:', url);
        }
        const response = await fetch(url);
        if (process.env.NODE_ENV === 'development') {
          console.log('[ChatBot] Poll response status:', response.status);
        }
        
        if (response.ok) {
          const data = await response.json();
          if (process.env.NODE_ENV === 'development') {
            console.log('[ChatBot] Poll data:', data);
          }
          
          if (data.messages && data.messages.length > 0) {
            if (process.env.NODE_ENV === 'development') {
              console.log('[ChatBot] Received', data.messages.length, 'new messages');
            }
            
            // Show typing indicator before adding messages
            setIsTyping(true);
            
            // Add messages after a brief delay to show typing animation
            setTimeout(() => {
              const newMessages = data.messages.map((msg: any) => ({
                id: msg.id || generateMessageId(),
                text: msg.text,
                sender: msg.sender,
                timestamp: new Date(msg.timestamp),
              }));
              
              // Check if any message is the AI assistant restoration message
              const hasAssistantRestoration = newMessages.some((m: Message) => 
                m.text.includes('AI Assistant has been restored')
              );
              
              if (hasAssistantRestoration) {
                console.log('🤖 [ChatBot] AI Assistant restored, disconnecting from Slack');
                setSlackChannelId(null);
                setAgentConnected(false);
              }
              
              setMessages((prev: Message[]) => {
                // Avoid duplicates by checking message IDs
                const existingIds = new Set(prev.map(m => m.id));
                const uniqueNewMessages = newMessages.filter((m: Message) => !existingIds.has(m.id));
                if (uniqueNewMessages.length > 0) {
                  if (process.env.NODE_ENV === 'development') {
                    console.log('[ChatBot] Adding', uniqueNewMessages.length, 'unique messages to state');
                  }
                  return [...prev, ...uniqueNewMessages];
                }
                return prev;
              });
              setIsTyping(false);
              setIsConnected(true);
            }, CHAT_CONFIG.TYPING_ANIMATION_DELAY_MS);
          } else {
            if (process.env.NODE_ENV === 'development') {
              console.log('[ChatBot] No new messages in queue');
            }
          }
        } else {
          if (process.env.NODE_ENV === 'development') {
            console.error('[ChatBot] Poll failed with status:', response.status);
          }
        }
      } catch (error) {
        if (process.env.NODE_ENV === 'development') {
          console.error('[ChatBot] Error polling messages:', error);
        }
        setIsConnected(false);
      }
    };

    // Poll immediately, then every 2 seconds
    pollMessages();
    pollingIntervalRef.current = setInterval(pollMessages, CHAT_CONFIG.POLLING_INTERVAL_MS);

    return () => {
      if (pollingIntervalRef.current) {
        if (process.env.NODE_ENV === 'development') {
          console.log('[ChatBot] Stopping polling');
        }
        clearInterval(pollingIntervalRef.current);
      }
    };
  }, [isOpen, sessionId]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: generateMessageId(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputValue('');

    // Extract and update session data from user message
    // Only update fields that are NOT already populated (from form or previous chat)
    try {
      const currentData = getSessionData(sessionId);
      if (currentData) {
        const extractedInfo = extractInfoFromMessage(userMessage.text, currentData);
        
        // Filter out any fields that already have values (preserve form data)
        const filteredUpdates: Record<string, any> = {};
        Object.entries(extractedInfo).forEach(([key, value]) => {
          // Only add the extracted value if the current data doesn't have it
          if (!currentData[key as keyof SessionData]) {
            filteredUpdates[key] = value;
          }
        });
        
        if (Object.keys(filteredUpdates).length > 0) {
          updateSessionData(sessionId, filteredUpdates);
          console.log('📊 [ChatBot] Added new info from message (preserving existing):', filteredUpdates);
        }
      }
    } catch (error) {
      console.error('Error extracting session data:', error);
    }

    // Show typing indicator immediately after user sends message
    setIsTyping(true);
    
    // Clear any existing typing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    
    // Set a timeout to hide typing indicator if no response comes
    typingTimeoutRef.current = setTimeout(() => {
      setIsTyping(false);
    }, CHAT_CONFIG.TYPING_MAX_WAIT_MS);

    if (process.env.NODE_ENV === 'development') {
      console.log('[ChatBot] Sending message to prospects webhook. SessionId:', sessionId);
    }
    
    // Check if message contains any agent-related keywords (case-insensitive)
    const messageText = userMessage.text.toLowerCase();
    const agentKeywords = [
      'agent',
      'human agent',
      'human representative',
      'live agent',
      'real person',
      'customer service',
      'someone else',
      'live person',
      'human please',
      'representative',
      'operator',
      'supervisor',
    ];
    const containsAgentKeyword = agentKeywords.some(keyword => messageText.includes(keyword));
    
    if (containsAgentKeyword && !slackChannelId) {
      // Create Slack channel for live agent support
      try {
        console.log('🔔 [ChatBot] Agent keyword detected, creating Slack channel...');
        
        // Get session data to send with channel creation
        const sessionData = getSessionData(sessionId);
        console.log('📊 [ChatBot] Session data retrieved for Slack:', sessionData);
        console.log('📊 [ChatBot] Session ID:', sessionId);
        
        const payload = {
          sessionId,
          initialMessage: userMessage.text,
          conversationHistory: messages,
          sessionData: sessionData || {},
        };
        console.log('📤 [ChatBot] Sending payload to Slack:', JSON.stringify(payload, null, 2));
        
        const response = await fetch('/api/slack/create-channel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });
        
        console.log('📡 [ChatBot] Create channel response status:', response.status);
        
        if (response.ok) {
          const data = await response.json();
          console.log('✅ [ChatBot] Slack channel created:', data);
          
          setSlackChannelId(data.channelId);
          setAgentConnected(true);
          
          // Add system message
          const systemMessage: Message = {
            id: generateMessageId(),
            text: "🎯 Connecting you with a live agent... They'll be with you shortly!",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages(prev => [...prev, systemMessage]);
          
          // Stop AI assistant - don't send to prospects webhook when agent connected
          return;
        } else {
          const errorText = await response.text();
          console.error('❌ [ChatBot] Failed to create Slack channel. Status:', response.status, 'Error:', errorText);
          
          // Show error message to user
          const errorMessage: Message = {
            id: generateMessageId(),
            text: "⚠️ Unable to connect to an agent right now. Please try again later.",
            sender: 'bot',
            timestamp: new Date(),
          };
          setMessages(prev => [...prev, errorMessage]);
        }
      } catch (error) {
        console.error('❌ [ChatBot] Error creating Slack channel:', error);
        
        // Show error message to user
        const errorMessage: Message = {
          id: generateMessageId(),
          text: "⚠️ Unable to connect to an agent right now. Please try again later.",
          sender: 'bot',
          timestamp: new Date(),
        };
        setMessages(prev => [...prev, errorMessage]);
      }
    }
    
    // If Slack channel exists, send message to Slack (don't send to AI webhook)
    if (slackChannelId) {
      try {
        await fetch('/api/slack/post-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            channelId: slackChannelId,
            message: userMessage.text,
            sessionId,
          }),
        });
        
        console.log('📤 [ChatBot] Message sent to Slack channel (skipping AI webhook)');
      } catch (error) {
        console.error('❌ [ChatBot] Error sending to Slack:', error);
      }
      
      // Don't send to prospects webhook when agent is connected
      return;
    }
    
    // Send to prospects webhook only if no agent is connected
    try {
      const webhookPayload = {
        source: 'Website Chat',
        sessionId,
        message: userMessage.text,
        sender: 'user',
        timestamp: userMessage.timestamp.toISOString(),
        agentConnected: false,
      };
      console.log('[ChatBot] Webhook payload:', webhookPayload);
      
      const response = await fetch('https://stage.aivi.io/webhook/prospects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(webhookPayload),
      });
      
      if (process.env.NODE_ENV === 'development') {
        console.log('[ChatBot] Webhook response status:', response.status);
      }
      
      if (!response.ok) {
        if (process.env.NODE_ENV === 'development') {
          console.error('[ChatBot] Webhook failed:', await response.text());
        }
      }
    } catch (error) {
      if (process.env.NODE_ENV === 'development') {
        console.error('[ChatBot] Error sending to prospects:', error);
      }
    }
  };

  const handleCloseChat = () => {
    if (confirm('Are you sure you want to close the chat? This will clear your conversation history.')) {
      // Clear session data
      clearSessionData(sessionId);
      
      // Clear localStorage and global session
      localStorage.removeItem('aivi_chat_state');
      clearGlobalSession();
      
      // Generate new global session ID for fresh start
      const newSessionId = getGlobalSessionId();
      setSessionId(newSessionId);
      
      // Initialize new session data
      updateSessionData(newSessionId, {});
      
      // Reset to initial state
      setMessages([
        {
          id: 1,
          text: "Hi! I'm AIVI, your AI assistant. How can I help you today?",
          sender: 'bot',
          timestamp: new Date(),
        },
      ]);
      setIsOpen(false);
      setIsTyping(false);
      setSlackChannelId(null);
      setAgentConnected(false);
      
      console.log('🤖 [ChatBot] Chat cleared and closed. New sessionId:', newSessionId);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e as any);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => {
          if (process.env.NODE_ENV === 'development') {
            console.log('🤖 [ChatBot] Button clicked. Current isOpen:', isOpen, '→ New isOpen:', !isOpen);
          }
          setIsOpen(!isOpen);
        }}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 z-50 group"
        aria-label="Open chat"
      >
        {isOpen ? (
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            {/* Pulse animation ring */}
            <div className="absolute inset-0 rounded-full bg-purple-500/30 animate-ping" />
          </>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-28 right-6 w-[360px] h-[600px] bg-black/95 border-2 border-purple-500/50 rounded-2xl shadow-2xl z-50 flex flex-col backdrop-blur-xl animate-scaleIn">
          {/* Header */}
          <div className="p-4 border-b border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-orange-500/10 rounded-t-2xl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center">
                <span className="text-white font-black text-lg">AI</span>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-lg">AIVI</h3>
                <div className="flex items-center gap-1">
                  <div className={`w-2 h-2 rounded-full ${isConnected ? 'bg-green-500' : 'bg-gray-500'} animate-pulse`} />
                  <p className="text-white/50 text-xs">{isConnected ? 'Connected' : 'Demo Mode'}</p>
                  {agentConnected && (
                    <>
                      <span className="text-white/30 mx-1">•</span>
                      <span className="text-green-400 text-xs flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        Agent
                      </span>
                    </>
                  )}
                </div>
              </div>
              <button
                onClick={handleCloseChat}
                className="hover:bg-white/10 p-2 rounded-lg transition-colors"
                aria-label="Close chat"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-purple-500/50 scrollbar-track-transparent">
            {messages.map((message: Message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white'
                      : 'bg-white/5 border border-purple-500/30 text-white backdrop-blur-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed">{message.text}</p>
                  <p
                    className={`text-xs mt-1 ${
                      message.sender === 'user'
                        ? 'text-white/70'
                        : 'text-white/50'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start animate-fadeIn">
                <div className="bg-white/5 border border-purple-500/30 text-white backdrop-blur-sm p-3 rounded-2xl">
                  <div className="flex gap-1 items-center">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSendMessage} className="p-4 border-t border-purple-500/30 bg-black/50">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 bg-white/5 border border-purple-500/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 disabled:from-gray-500 disabled:to-gray-600 disabled:cursor-not-allowed text-white font-bold rounded-xl transition-all hover:scale-105 disabled:scale-100"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
