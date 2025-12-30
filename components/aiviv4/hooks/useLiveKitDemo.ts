'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import {
  Room,
  RoomEvent,
  ConnectionState,
  Track,
  RemoteTrack,
  RemoteTrackPublication,
  RemoteParticipant,
  LocalParticipant,
  TranscriptionSegment,
  Participant,
} from 'livekit-client';

export type LiveKitConnectionState = 'idle' | 'connecting' | 'connected' | 'error' | 'disconnected';

export interface TranscriptMessage {
  speaker: 'user' | 'agent';
  text: string;
  timestamp: number;
  isFinal: boolean;
}

export interface UseLiveKitDemoOptions {
  onConnectionStateChange?: (state: LiveKitConnectionState) => void;
  onAgentConnected?: () => void;
  onAgentDisconnected?: () => void;
  onError?: (error: string) => void;
  onTranscript?: (message: TranscriptMessage) => void;
}

export interface UseLiveKitDemoReturn {
  connect: (name: string, phone: string, email: string) => Promise<boolean>;
  disconnect: () => void;
  connectionState: LiveKitConnectionState;
  error: string | null;
  isMicEnabled: boolean;
  toggleMic: () => Promise<void>;
  audioAnalyser: AnalyserNode | null;
  isAgentConnected: boolean;
  transcript: TranscriptMessage[];
  clearTranscript: () => void;
}

export function useLiveKitDemo(options: UseLiveKitDemoOptions = {}): UseLiveKitDemoReturn {
  const { onConnectionStateChange, onAgentConnected, onAgentDisconnected, onError, onTranscript } = options;

  const [connectionState, setConnectionState] = useState<LiveKitConnectionState>('idle');
  const [error, setError] = useState<string | null>(null);
  const [isMicEnabled, setIsMicEnabled] = useState(false);
  const [isAgentConnected, setIsAgentConnected] = useState(false);
  const [audioAnalyser, setAudioAnalyser] = useState<AnalyserNode | null>(null);
  const [transcript, setTranscript] = useState<TranscriptMessage[]>([]);

  const roomRef = useRef<Room | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const localStreamRef = useRef<MediaStream | null>(null);

  // Update connection state and notify callback
  const updateConnectionState = useCallback(
    (newState: LiveKitConnectionState) => {
      setConnectionState(newState);
      onConnectionStateChange?.(newState);
    },
    [onConnectionStateChange]
  );

  // Set up audio analyzer from local microphone
  const setupAudioAnalyzer = useCallback((stream: MediaStream) => {
    try {
      const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      const audioContext = new AudioContextClass();
      const analyser = audioContext.createAnalyser();
      const microphone = audioContext.createMediaStreamSource(stream);

      microphone.connect(analyser);
      analyser.fftSize = 256;

      audioContextRef.current = audioContext;
      setAudioAnalyser(analyser);

      return analyser;
    } catch (err) {
      console.error('Failed to set up audio analyzer:', err);
      return null;
    }
  }, []);

  // Clean up audio context
  const cleanupAudioContext = useCallback(() => {
    if (audioContextRef.current) {
      audioContextRef.current.close().catch(console.error);
      audioContextRef.current = null;
    }
    setAudioAnalyser(null);
  }, []);

  // Clear transcript
  const clearTranscript = useCallback(() => {
    setTranscript([]);
  }, []);

  // Handle transcription received
  // One bubble per turn: user keeps updating until AIVI responds, then AIVI keeps updating until user speaks
  const handleTranscriptionReceived = useCallback(
    (segments: TranscriptionSegment[], participant?: Participant) => {
      segments.forEach((segment) => {
        const isAgent = participant?.identity?.startsWith('agent-') ?? false;
        const message: TranscriptMessage = {
          speaker: isAgent ? 'agent' : 'user',
          text: segment.text,
          timestamp: Date.now(),
          isFinal: segment.final,
        };

        console.log('Transcript:', message.speaker, message.text, message.isFinal ? '(final)' : '(interim)');

        // Update or add transcript message - one bubble per speaker turn
        setTranscript((prev) => {
          const lastIndex = prev.length - 1;
          const lastMessage = lastIndex >= 0 ? prev[lastIndex] : null;

          // If same speaker as last message, always update/replace the existing bubble
          if (lastMessage && lastMessage.speaker === message.speaker) {
            // Skip if exact same text (duplicate)
            if (lastMessage.text === segment.text) {
              return prev;
            }
            // Update the existing bubble with new/longer text
            const updated = [...prev];
            updated[lastIndex] = message;
            return updated;
          }

          // Different speaker - start a new bubble (turn change)
          return [...prev, message];
        });

        onTranscript?.(message);
      });
    },
    [onTranscript]
  );

  // Handle remote participant (agent) connected
  const handleParticipantConnected = useCallback(
    (participant: RemoteParticipant) => {
      console.log('Agent connected:', participant.identity);
      setIsAgentConnected(true);
      onAgentConnected?.();
    },
    [onAgentConnected]
  );

  // Handle remote participant (agent) disconnected
  const handleParticipantDisconnected = useCallback(
    (participant: RemoteParticipant) => {
      console.log('Agent disconnected:', participant.identity);
      setIsAgentConnected(false);
      onAgentDisconnected?.();
    },
    [onAgentDisconnected]
  );

  // Handle track subscribed (agent's audio)
  const handleTrackSubscribed = useCallback(
    (track: RemoteTrack, publication: RemoteTrackPublication, participant: RemoteParticipant) => {
      if (track.kind === Track.Kind.Audio) {
        console.log('Subscribed to agent audio track from:', participant.identity);
        // Remove any existing audio element first
        const existingAudio = document.getElementById('livekit-agent-audio');
        if (existingAudio) existingAudio.remove();

        // Attach audio element to play agent's voice
        const audioElement = track.attach() as HTMLAudioElement;
        audioElement.id = 'livekit-agent-audio';
        audioElement.autoplay = true;
        // Set volume to max
        audioElement.volume = 1.0;
        document.body.appendChild(audioElement);

        // Force play (needed for some browsers)
        audioElement.play().catch((e) => {
          console.warn('Auto-play blocked, user interaction needed:', e);
        });

        console.log('Agent audio element attached and playing');
      }
    },
    []
  );

  // Handle track unsubscribed
  const handleTrackUnsubscribed = useCallback(
    (track: RemoteTrack, publication: RemoteTrackPublication, participant: RemoteParticipant) => {
      if (track.kind === Track.Kind.Audio) {
        console.log('Unsubscribed from agent audio track');
        track.detach().forEach((el) => el.remove());
        // Also remove by ID in case detach didn't work
        const audioEl = document.getElementById('livekit-agent-audio');
        if (audioEl) audioEl.remove();
      }
    },
    []
  );

  // Connect to LiveKit room
  const connect = useCallback(
    async (name: string, phone: string, email: string): Promise<boolean> => {
      try {
        updateConnectionState('connecting');
        setError(null);

        // Request microphone access first
        let stream: MediaStream;
        try {
          stream = await navigator.mediaDevices.getUserMedia({ audio: true });
          localStreamRef.current = stream;
        } catch (micError) {
          const errorMsg = 'Microphone access denied';
          setError(errorMsg);
          onError?.(errorMsg);
          updateConnectionState('error');
          return false;
        }

        // Set up audio analyzer for visualization
        setupAudioAnalyzer(stream);

        // Fetch token from API
        console.log('Fetching LiveKit token...');
        const response = await fetch('/api/livekit-demo-token', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, phone, email }),
        });

        if (!response.ok) {
          const data = await response.json().catch(() => ({}));
          console.error('Token API error:', response.status, data);
          throw new Error(data.error || 'Failed to get demo token');
        }

        const tokenData = await response.json();
        console.log('Token API response:', {
          hasToken: !!tokenData.token,
          serverUrl: tokenData.serverUrl,
          roomName: tokenData.roomName
        });

        const { token, serverUrl, roomName } = tokenData;

        if (!token || !serverUrl) {
          throw new Error('Invalid token response');
        }

        console.log('Connecting to LiveKit room:', roomName, 'at', serverUrl);

        // Create and configure room
        const room = new Room({
          adaptiveStream: true,
          dynacast: true,
        });

        // Set up event listeners
        room.on(RoomEvent.ParticipantConnected, handleParticipantConnected);
        room.on(RoomEvent.ParticipantDisconnected, handleParticipantDisconnected);
        room.on(RoomEvent.TrackSubscribed, handleTrackSubscribed);
        room.on(RoomEvent.TrackUnsubscribed, handleTrackUnsubscribed);
        room.on(RoomEvent.Disconnected, () => {
          console.log('Disconnected from room');
          updateConnectionState('disconnected');
        });
        room.on(RoomEvent.ConnectionStateChanged, (state: ConnectionState) => {
          console.log('Connection state changed:', state);
          if (state === ConnectionState.Connected) {
            updateConnectionState('connected');
          }
        });
        // Listen for track published events (agent might publish after connecting)
        room.on(RoomEvent.TrackPublished, (publication, participant) => {
          console.log('Track published by:', participant.identity, 'kind:', publication.kind);
        });

        // Listen for transcription events
        room.on(RoomEvent.TranscriptionReceived, handleTranscriptionReceived);

        roomRef.current = room;

        // Connect to room
        console.log('Attempting room.connect()...');
        await room.connect(serverUrl, token);
        console.log('Room connected successfully!');
        console.log('Room state:', room.state);
        console.log('Local participant:', room.localParticipant.identity);
        console.log('Remote participants count:', room.remoteParticipants.size);

        // Enable microphone
        await room.localParticipant.setMicrophoneEnabled(true);
        setIsMicEnabled(true);
        console.log('Microphone enabled, waiting for agent to join...');

        // Check if agent is already in the room and has tracks
        room.remoteParticipants.forEach((participant) => {
          console.log('Found existing participant:', participant.identity);
          handleParticipantConnected(participant);

          // Subscribe to any existing audio tracks
          participant.audioTrackPublications.forEach((publication) => {
            if (publication.track) {
              console.log('Found existing audio track, subscribing...');
              handleTrackSubscribed(
                publication.track as RemoteTrack,
                publication as RemoteTrackPublication,
                participant
              );
            }
          });
        });

        updateConnectionState('connected');
        return true;
      } catch (err) {
        const errorMsg = err instanceof Error ? err.message : 'Connection failed';
        console.error('LiveKit connection error:', err);
        setError(errorMsg);
        onError?.(errorMsg);
        updateConnectionState('error');
        return false;
      }
    },
    [
      updateConnectionState,
      setupAudioAnalyzer,
      handleParticipantConnected,
      handleParticipantDisconnected,
      handleTrackSubscribed,
      handleTrackUnsubscribed,
      handleTranscriptionReceived,
      onError,
    ]
  );

  // Disconnect from room
  const disconnect = useCallback(() => {
    // Stop local stream tracks
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => track.stop());
      localStreamRef.current = null;
    }

    // Disconnect room
    if (roomRef.current) {
      roomRef.current.disconnect();
      roomRef.current = null;
    }

    // Clean up audio context
    cleanupAudioContext();

    // Remove any lingering audio elements
    const audioEl = document.getElementById('livekit-agent-audio');
    if (audioEl) audioEl.remove();

    // Reset state
    setIsMicEnabled(false);
    setIsAgentConnected(false);
    setError(null);
    updateConnectionState('disconnected');
  }, [cleanupAudioContext, updateConnectionState]);

  // Toggle microphone
  const toggleMic = useCallback(async () => {
    if (!roomRef.current) return;

    const newState = !isMicEnabled;
    await roomRef.current.localParticipant.setMicrophoneEnabled(newState);
    setIsMicEnabled(newState);
  }, [isMicEnabled]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (roomRef.current) {
        roomRef.current.disconnect();
      }
      if (localStreamRef.current) {
        localStreamRef.current.getTracks().forEach((track) => track.stop());
      }
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(console.error);
      }
    };
  }, []);

  return {
    connect,
    disconnect,
    connectionState,
    error,
    isMicEnabled,
    toggleMic,
    audioAnalyser,
    isAgentConnected,
    transcript,
    clearTranscript,
  };
}

export default useLiveKitDemo;
