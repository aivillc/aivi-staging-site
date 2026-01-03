'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { HiOutlineDesktopComputer } from 'react-icons/hi';
import { BsChatDots } from 'react-icons/bs';
import { FiMic } from 'react-icons/fi';
import { TbCreditCard } from 'react-icons/tb';
import { FaUserTie } from 'react-icons/fa';
import { useLeadGateSafe } from './LeadGateContext';
import { useNeuralCanvas } from './hooks/useNeuralCanvas';
import { useLiveKitDemo, LiveKitConnectionState, TranscriptMessage } from './hooks/useLiveKitDemo';

export default function AIVIHeroV4() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [audioOverlayOpen, setAudioOverlayOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', email: '' });
  const [isListening, setIsListening] = useState(false);
  const [terminalLines, setTerminalLines] = useState<{ html: string; className?: string }[]>([]);
  const [welcomeText, setWelcomeText] = useState('');
  const [counterValue, setCounterValue] = useState(1303000); // Initial value to avoid 0 flash on load
  const [animatingDigits, setAnimatingDigits] = useState<Set<number>>(new Set());
  const prevCounterRef = useRef<number>(0);

  // Lead gate context for unlocking calculator breakdown
  const leadGateContext = useLeadGateSafe();

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioCanvasRef = useRef<HTMLCanvasElement>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const smsTriggeredRef = useRef<boolean>(false);
  const smsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const demoModalRef = useRef<HTMLDivElement>(null);

  // Function to open demo modal and scroll it into view
  const openDemoModal = useCallback(() => {
    setDemoModalOpen(true);
    // Wait for the modal to render and animate in, then scroll to center it
    setTimeout(() => {
      if (demoModalRef.current) {
        demoModalRef.current.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
      }
    }, 100);
  }, []);

  // LiveKit demo hook for real voice conversation
  const liveKit = useLiveKitDemo({
    onConnectionStateChange: (state: LiveKitConnectionState) => {
      console.log('LiveKit connection state:', state);
    },
    onAgentConnected: () => {
      addTerminalLine(
        `<span class="status-icon success">✓</span><span class="line-text">AIVI connected - <span class="success-text">speak now</span></span>`
      );
    },
    onAgentDisconnected: () => {
      addTerminalLine(
        `<span class="status-icon error">✕</span><span class="line-text">AIVI disconnected</span>`
      );
    },
    onError: (error: string) => {
      addTerminalLine(
        `<span class="status-icon error">✕</span><span class="line-text"><span class="error-text">${error}</span></span>`
      );
    },
  });

  // Use the shared neural canvas hook with hero-specific customizations
  useNeuralCanvas(canvasRef, {
    particleCount: 150,
    particleColor: '100, 200, 255',
    glowColorStart: '100, 200, 255',
    glowColorEnd: '139, 0, 255',
    enableParallax: true,
  });

  // Counter constants - defined outside useEffect so they can be used for initial state
  const REFERENCE_TIME = 1767120000000; // Dec 30, 2025 reference point
  const BASE_COUNT = 1303000;
  const INCREMENT_INTERVAL = 3500; // 3.5 seconds in ms

  const calculateCount = useCallback(() => {
    const elapsed = Date.now() - REFERENCE_TIME;
    return BASE_COUNT + Math.floor(elapsed / INCREMENT_INTERVAL);
  }, []);

  // Initialize counter with calculated value to avoid showing 0 on load
  useEffect(() => {
    // Set initial value immediately
    const initialValue = calculateCount();
    setCounterValue(initialValue);
    prevCounterRef.current = initialValue;
  }, [calculateCount]);

  // Live counter: starts at ~1.3M and increments every ~3.5 seconds
  useEffect(() => {
    const updateCounter = () => {
      const newValue = calculateCount();
      const prevValue = prevCounterRef.current;

      if (prevValue !== newValue && prevValue !== 0) {
        // Find which digit positions changed
        const prevStr = prevValue.toLocaleString();
        const newStr = newValue.toLocaleString();
        const changedPositions = new Set<number>();

        for (let i = 0; i < newStr.length; i++) {
          if (prevStr[i] !== newStr[i]) {
            changedPositions.add(i);
          }
        }

        setAnimatingDigits(changedPositions);

        // Clear animation after it completes
        setTimeout(() => {
          setAnimatingDigits(new Set());
        }, 400);
      }

      prevCounterRef.current = newValue;
      setCounterValue(newValue);
    };

    // Update every second to catch the increments
    const intervalId = setInterval(updateCounter, 1000);

    return () => clearInterval(intervalId);
  }, [calculateCount]);

  // Add terminal line helper
  const addTerminalLine = useCallback((html: string, className?: string) => {
    setTerminalLines((prev) => [...prev, { html, className }]);
  }, []);

  // Run demo sequence with LiveKit voice connection (WebRTC only, no SIP)
  const runDemoSequence = useCallback(
    async (name: string, phone: string, email: string) => {
      const firstName = name.split(' ')[0];
      setTerminalLines([]);
      setWelcomeText(`▶ Live demo started with ${firstName}`);

      // Reset SMS trigger flag for new demo session
      smsTriggeredRef.current = false;

      await new Promise((r) => setTimeout(r, 800));

      // Microphone check and LiveKit connection
      addTerminalLine(
        `<span class="status-icon pending"></span><span class="line-text">Requesting microphone access...</span>`
      );

      // Connect to LiveKit WebRTC (this handles mic permissions internally)
      const connected = await liveKit.connect(name, phone, email);

      if (connected) {
        // Update analyser ref with LiveKit's analyser for visualization
        if (liveKit.audioAnalyser) {
          analyserRef.current = liveKit.audioAnalyser;
        }
        setIsListening(true);

        addTerminalLine(
          `<span class="status-icon success">✓</span><span class="line-text">Microphone connected <span class="success-text">(listening)</span></span>`
        );

        await new Promise((r) => setTimeout(r, 400));

        addTerminalLine(
          `<span class="status-icon pending"></span><span class="line-text">Connecting to AIVI voice agent...</span>`
        );

        // Agent connection and SMS trigger are handled by callbacks/effects
      } else {
        // Microphone denied or connection failed - fallback to phone call
        addTerminalLine(
          `<span class="status-icon error">✕</span><span class="line-text">Microphone access <span class="error-text">denied</span></span>`
        );

        await new Promise((r) => setTimeout(r, 600));

        addTerminalLine(
          `<span class="status-icon pending"></span><span class="line-text">Falling back to phone call...</span>`
        );

        // Trigger phone call via webhook since browser voice isn't available
        try {
          await fetch('/api/aivi-demo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name,
              phone,
              email,
            }),
          });

          await new Promise((r) => setTimeout(r, 1000));

          addTerminalLine(
            `<span class="status-icon success">✓</span><span class="line-text">Calling <span class="highlight">${firstName}</span> at <span class="highlight">${phone}</span>...</span>`
          );

          addTerminalLine(
            `<span class="status-icon pending"></span><span class="line-text">Please answer your phone to speak with AIVI</span>`
          );
        } catch (error) {
          console.error('Phone call fallback error:', error);
          addTerminalLine(
            `<span class="status-icon error">✕</span><span class="line-text">Failed to initiate call. Please try again.</span>`
          );
        }
      }
    },
    [addTerminalLine, liveKit]
  );

  // Trigger SMS/Email sequence 10 seconds after first AIVI message
  const triggerSmsSequence = useCallback(async () => {
    if (smsTriggeredRef.current) return;
    smsTriggeredRef.current = true;

    const firstName = formData.name.split(' ')[0];
    const phone = formData.phone;
    const email = formData.email;

    // SMS simulation
    addTerminalLine(
      `<span class="status-icon pending"></span><span class="line-text">Sending SMS to <span class="highlight">${firstName}</span> at <span class="highlight">${phone}</span>...</span>`
    );

    await new Promise((r) => setTimeout(r, 2000));
    setTerminalLines((prev) =>
      prev.map((line, i) =>
        i === prev.length - 1
          ? {
              ...line,
              html: `<span class="status-icon success">✓</span><span class="line-text">SMS sent to <span class="highlight">${firstName}</span> <span class="success-text">(delivered)</span></span>`,
            }
          : line
      )
    );

    // Email simulation
    await new Promise((r) => setTimeout(r, 800));
    addTerminalLine(
      `<span class="status-icon pending"></span><span class="line-text">Sending email to <span class="highlight">${email}</span>...</span>`
    );

    await new Promise((r) => setTimeout(r, 1800));
    setTerminalLines((prev) =>
      prev.map((line, i) =>
        i === prev.length - 1
          ? {
              ...line,
              html: `<span class="status-icon success">✓</span><span class="line-text">Email about doubling contact rates <span class="success-text">(sent)</span></span>`,
            }
          : line
      )
    );

    // Final status
    await new Promise((r) => setTimeout(r, 1000));
    addTerminalLine(
      `<span class="status-icon success">⚡</span><span class="line-text success-text">Multi-channel engagement complete</span>`
    );
  }, [addTerminalLine, formData]);

  // Watch for first AIVI message and trigger SMS 10 seconds after
  useEffect(() => {
    // Check if there's an agent message and SMS hasn't been triggered yet
    const hasAgentMessage = liveKit.transcript.some(msg => msg.speaker === 'agent');

    if (hasAgentMessage && !smsTriggeredRef.current && audioOverlayOpen) {
      // Clear any existing timeout
      if (smsTimeoutRef.current) {
        clearTimeout(smsTimeoutRef.current);
      }

      // Set 10 second delay before triggering SMS
      smsTimeoutRef.current = setTimeout(() => {
        triggerSmsSequence();
      }, 10000);
    }

    // Cleanup timeout on unmount or when overlay closes
    return () => {
      if (smsTimeoutRef.current) {
        clearTimeout(smsTimeoutRef.current);
      }
    };
  }, [liveKit.transcript, audioOverlayOpen, triggerSmsSequence]);

  // Sync LiveKit audio analyser with ref for visualization
  useEffect(() => {
    if (liveKit.audioAnalyser && audioOverlayOpen) {
      analyserRef.current = liveKit.audioAnalyser;
    }
  }, [liveKit.audioAnalyser, audioOverlayOpen]);

  // Auto-scroll transcript to bottom
  useEffect(() => {
    if (transcriptRef.current && liveKit.transcript.length > 0) {
      transcriptRef.current.scrollTop = transcriptRef.current.scrollHeight;
    }
  }, [liveKit.transcript]);

  // Audio visualization
  useEffect(() => {
    if (!audioOverlayOpen || !audioCanvasRef.current) return;

    const canvas = audioCanvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const centerX = 150;
    const centerY = 150;

    const draw = () => {
      if (!audioOverlayOpen) return;
      animId = requestAnimationFrame(draw);

      ctx.clearRect(0, 0, 300, 300);

      if (analyserRef.current && isListening) {
        const bufferLength = analyserRef.current.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyserRef.current.getByteFrequencyData(dataArray);

        const avgVolume = dataArray.reduce((a, b) => a + b) / bufferLength;

        const nodeCount = 8;
        const nodes: { x: number; y: number; size: number }[] = [];
        for (let i = 0; i < nodeCount; i++) {
          const angle = (i / nodeCount) * Math.PI * 2 - Math.PI / 2;
          const radius = 90 + (dataArray[i * 12] / 255) * 25;
          nodes.push({
            x: centerX + Math.cos(angle) * radius,
            y: centerY + Math.sin(angle) * radius,
            size: 3 + (dataArray[i * 12] / 255) * 4,
          });
        }

        // Draw connections
        for (let i = 0; i < nodes.length; i++) {
          for (let j = i + 1; j < nodes.length; j++) {
            const opacity = 0.08 + (dataArray[(i + j) * 5] / 255) * 0.2;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 0, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }

          const centerOpacity = 0.15 + (dataArray[i * 8] / 255) * 0.25;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 153, 255, ${centerOpacity})`;
          ctx.lineWidth = 1.5;
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(centerX, centerY);
          ctx.stroke();
        }

        // Draw nodes
        nodes.forEach((node, i) => {
          const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, node.size * 2);
          gradient.addColorStop(0, `rgba(139, 0, 255, ${0.6 + (dataArray[i * 12] / 255) * 0.2})`);
          gradient.addColorStop(1, 'rgba(139, 0, 255, 0)');

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(100, 200, 255, ${0.5 + (dataArray[i * 12] / 255) * 0.3})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(node.x, node.y, node.size * 2, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();
        });

        // Outer ring
        ctx.beginPath();
        ctx.arc(centerX, centerY, 75 + avgVolume * 0.15, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139, 0, 255, ${0.15 + (avgVolume / 255) * 0.2})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      } else {
        // Fallback animation
        const t = Date.now() * 0.001;
        for (let i = 0; i < 8; i++) {
          const angle = (i / 8) * Math.PI * 2 + t;
          const radius = 90 + Math.sin(t * 1.5 + i) * 15;
          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;

          ctx.beginPath();
          ctx.arc(x, y, 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(100, 200, 255, ${0.4 + Math.sin(t + i) * 0.2})`;
          ctx.fill();

          ctx.beginPath();
          ctx.strokeStyle = 'rgba(139, 0, 255, 0.2)';
          ctx.moveTo(x, y);
          ctx.lineTo(centerX, centerY);
          ctx.stroke();
        }
      }
    };

    draw();

    return () => {
      if (animId) cancelAnimationFrame(animId);
    };
  }, [audioOverlayOpen, isListening]);

  // Handle form submit
  const handleSubmit = () => {
    if (formData.name && formData.phone && formData.email) {
      // NOTE: We no longer call /api/aivi-demo here.
      // It will only be called as a fallback if microphone is denied.
      // This prevents calling the user when they're using browser voice.

      // Unlock the lead gate for calculator breakdown section
      leadGateContext?.unlockGate();

      setDemoModalOpen(false);
      setAudioOverlayOpen(true);
      runDemoSequence(formData.name, formData.phone, formData.email);
    }
  };

  // Close audio overlay and disconnect LiveKit
  const closeAudioOverlay = () => {
    setIsListening(false);
    setAudioOverlayOpen(false);
    // Disconnect from LiveKit room and clear transcript
    liveKit.disconnect();
    liveKit.clearTranscript();
    analyserRef.current = null;
    // Clear SMS timeout and reset flag
    if (smsTimeoutRef.current) {
      clearTimeout(smsTimeoutRef.current);
      smsTimeoutRef.current = null;
    }
    smsTriggeredRef.current = false;
  };

  return (
    <>
      {/* Interactive/animation styles - layout styles are in globals.css to prevent flash on refresh */}
      <style jsx global>{`
        /* Hover effects for vertical columns */
        .v-column::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, rgba(139, 0, 255, 0) 0%, rgba(139, 0, 255, 0.05) 50%, rgba(139, 0, 255, 0) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .v-column:hover::before { opacity: 1; }

        .v-column:hover {
          background: linear-gradient(180deg, rgba(139, 0, 255, 0.08) 0%, rgba(0, 153, 255, 0.12) 50%, rgba(139, 0, 255, 0.08) 100%);
          border-color: rgba(139, 0, 255, 0.4);
          box-shadow: inset 0 0 80px rgba(139, 0, 255, 0.15);
        }

        .v-column:hover .phase-label {
          opacity: 1;
          color: rgba(139, 0, 255, 0.8);
        }

        /* Flow step hover effects */
        .flow-step:hover .step-circle {
          transform: scale(1.1);
          border-color: rgba(139, 0, 255, 0.8);
          box-shadow: 0 0 40px rgba(139, 0, 255, 0.4);
        }

        /* Microphone styles (animated border, glow, hover) and demo modal layout moved to globals.css */

        .demo-submit {
          width: 100%;
          background: linear-gradient(135deg, #8b00ff 0%, #0099ff 100%);
          border: none;
          padding: 14px 24px;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .demo-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(139, 0, 255, 0.4);
        }

        .status-indicator {
          position: absolute;
          top: -4px;
          right: -4px;
          width: 16px;
          height: 16px;
          background: #00ff88;
          border-radius: 50%;
          border: 2px solid rgba(0, 0, 0, 0.8);
          animation: blink 1.5s ease-in-out infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .results-preview {
          margin-top: 60px;
          text-align: center;
        }

        .results-title {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 1.5px;
          margin-bottom: 20px;
        }

        .live-counter { margin-bottom: 30px; text-align: center; }

        .counter-number {
          font-size: 48px;
          font-weight: 700;
          background: linear-gradient(135deg, #ff8c00 0%, #ff4500 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 8px;
        }

        .counter-label {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 0.5px;
        }

        .counter-live {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 8px;
          font-size: 11px;
          color: #00ff88;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .live-dot {
          width: 8px;
          height: 8px;
          background: #00ff88;
          border-radius: 50%;
          animation: blink 1.5s ease-in-out infinite;
        }

        .results-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
        }

        .result-card {
          background: rgba(10, 10, 26, 0.6);
          border: 1px solid rgba(139, 0, 255, 0.2);
          border-radius: 12px;
          padding: 20px;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .result-card:hover {
          transform: translateY(-4px);
          border-color: rgba(139, 0, 255, 0.5);
          box-shadow: 0 8px 24px rgba(139, 0, 255, 0.2);
        }

        .result-number {
          font-size: 28px;
          font-weight: 700;
          background: linear-gradient(135deg, #00ff88 0%, #0099ff 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 6px;
        }

        .result-label {
          font-size: 11px;
          color: rgba(255, 255, 255, 0.5);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        /* Audio Overlay */
        .audio-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.95);
          z-index: 2000;
          display: none;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .audio-overlay.active { display: flex; }

        .demo-container {
          display: flex;
          gap: 60px;
          align-items: center;
        }

        .status-terminal {
          width: 450px;
          background: linear-gradient(135deg, rgba(20, 20, 35, 0.95) 0%, rgba(10, 10, 20, 0.98) 100%);
          border: 1px solid rgba(139, 0, 255, 0.3);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 0 60px rgba(139, 0, 255, 0.2), inset 0 0 30px rgba(0, 0, 0, 0.5);
        }

        .terminal-header {
          background: linear-gradient(90deg, rgba(139, 0, 255, 0.2) 0%, rgba(0, 153, 255, 0.2) 100%);
          padding: 12px 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          border-bottom: 1px solid rgba(139, 0, 255, 0.2);
        }

        .terminal-dots {
          display: flex;
          gap: 6px;
        }

        .terminal-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }

        .terminal-dots span:first-child { background: #ff5f57; }
        .terminal-dots span:nth-child(2) { background: #ffbd2e; }
        .terminal-dots span:last-child { background: #28ca41; }

        .terminal-title {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 1px;
        }

        .terminal-body {
          padding: 20px;
          min-height: 320px;
          max-height: 400px;
          overflow-y: auto;
          font-family: 'SF Mono', 'Fira Code', monospace;
          font-size: 13px;
          line-height: 1.8;
        }

        .terminal-line {
          margin-bottom: 8px;
          display: flex;
          align-items: flex-start;
          gap: 10px;
          animation: lineAppear 0.4s ease forwards;
        }

        @keyframes lineAppear {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .terminal-line.welcome {
          color: #00ff88;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 16px;
        }

        .terminal-line .status-icon {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .terminal-line .status-icon.pending {
          border: 2px solid rgba(255, 140, 0, 0.5);
          animation: spinIcon 1s linear infinite;
        }

        .terminal-line .status-icon.success {
          background: rgba(0, 255, 136, 0.2);
          border: 2px solid #00ff88;
          color: #00ff88;
        }

        .terminal-line .status-icon.error {
          background: rgba(255, 68, 68, 0.2);
          border: 2px solid #ff4444;
          color: #ff4444;
        }

        .terminal-line .status-icon.calling {
          background: rgba(0, 153, 255, 0.2);
          border: 2px solid #0099ff;
          animation: pulseIcon 1s ease-in-out infinite;
        }

        .terminal-line .status-icon.listening {
          background: rgba(139, 0, 255, 0.2);
          border: 2px solid #8b00ff;
          animation: pulseIcon 1.5s ease-in-out infinite;
        }

        .terminal-line .status-icon.ai {
          background: linear-gradient(135deg, rgba(139, 0, 255, 0.3), rgba(0, 153, 255, 0.3));
          border: 2px solid #0099ff;
          color: #0099ff;
        }

        @keyframes spinIcon { to { transform: rotate(360deg); } }

        @keyframes pulseIcon {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }

        .terminal-line .line-text {
          color: rgba(255, 255, 255, 0.8);
          flex: 1;
        }

        .terminal-line .highlight { color: #0099ff; font-weight: 600; }
        .terminal-line .success-text { color: #00ff88; font-weight: 600; }
        .terminal-line .error-text { color: #ff4444; }

        .terminal-line.user-speech .line-text {
          color: rgba(255, 255, 255, 0.9);
          font-style: italic;
        }

        .terminal-line.ai-response .line-text { color: #0099ff; }

        /* Transcript Panel */
        .transcript-panel {
          width: 350px;
          background: linear-gradient(135deg, rgba(20, 20, 35, 0.95) 0%, rgba(10, 10, 20, 0.98) 100%);
          border: 1px solid rgba(0, 153, 255, 0.3);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 0 60px rgba(0, 153, 255, 0.15), inset 0 0 30px rgba(0, 0, 0, 0.5);
        }

        .transcript-header {
          background: linear-gradient(90deg, rgba(0, 153, 255, 0.2) 0%, rgba(139, 0, 255, 0.2) 100%);
          padding: 12px 16px;
          border-bottom: 1px solid rgba(0, 153, 255, 0.2);
        }

        .transcript-title {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 1px;
          text-align: center;
        }

        .transcript-body {
          padding: 16px;
          min-height: 320px;
          max-height: 400px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .transcript-empty {
          color: rgba(255, 255, 255, 0.4);
          font-size: 13px;
          text-align: center;
          padding: 40px 20px;
          font-style: italic;
        }

        .transcript-message {
          padding: 10px 14px;
          border-radius: 12px;
          animation: messageAppear 0.3s ease forwards;
        }

        .transcript-message.user {
          background: linear-gradient(135deg, rgba(139, 0, 255, 0.2) 0%, rgba(139, 0, 255, 0.1) 100%);
          border: 1px solid rgba(139, 0, 255, 0.3);
          margin-left: 20px;
        }

        .transcript-message.agent {
          background: linear-gradient(135deg, rgba(0, 153, 255, 0.2) 0%, rgba(0, 153, 255, 0.1) 100%);
          border: 1px solid rgba(0, 153, 255, 0.3);
          margin-right: 20px;
        }

        .transcript-message.interim {
          opacity: 0.6;
        }

        .transcript-speaker {
          font-size: 11px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          display: block;
          margin-bottom: 4px;
        }

        .transcript-message.user .transcript-speaker {
          color: #8b00ff;
        }

        .transcript-message.agent .transcript-speaker {
          color: #0099ff;
        }

        .transcript-text {
          font-size: 14px;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.9);
        }

        @keyframes messageAppear {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .audio-visualizer {
          position: relative;
          width: 300px;
          height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        #audioCanvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .mic-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100px;
          height: 100px;
          background: linear-gradient(135deg, rgba(139, 0, 255, 0.3) 0%, rgba(0, 153, 255, 0.3) 100%);
          border: 2px solid rgba(139, 0, 255, 0.6);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 40px;
          box-shadow: 0 0 60px rgba(139, 0, 255, 0.5);
        }

        .end-demo-btn {
          position: absolute;
          bottom: -60px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(135deg, #ff4444 0%, #cc0000 100%);
          border: none;
          color: #fff;
          padding: 12px 24px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 20px rgba(255, 68, 68, 0.4);
        }

        .end-demo-btn:hover {
          transform: translateX(-50%) translateY(-2px);
          box-shadow: 0 8px 30px rgba(255, 68, 68, 0.5);
        }

        .user-info-display {
          position: absolute;
          bottom: 40px;
          text-align: center;
        }

        .user-info-display .user-name {
          font-size: 24px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 8px;
        }

        .user-info-display .user-details {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 1024px) {
          .results-grid { grid-template-columns: repeat(2, 1fr); }
          .v-column .phase-label { font-size: 8px; }
        }

        @media (max-width: 900px) {
          .demo-container { flex-direction: column; gap: 30px; }
          .status-terminal { width: 90%; max-width: 400px; }
        }

        @media (max-width: 768px) {
          .results-grid { grid-template-columns: 1fr; }
          /* demo-modal and form-fields responsive styles moved to globals.css */
        }
      `}</style>

      <section className="hero-section-v4 py-20 sm:py-24 md:py-28 lg:py-32 px-6 sm:px-8 md:px-12 lg:px-16">
        <canvas ref={canvasRef} id="neuralCanvas" />

        <div className="hero-content-v4">
          <div className="eyebrow">Experience AI Orchestration Live</div>

          <h1 className="hero-headline-v4">
            Boost Contact Rates by Up to 60%
            <br />
            Add $1.2M+ Monthly Revenue Without Hiring
          </h1>

          <p className="hero-subheadline">
            AIVI reaches leads in 3 seconds via SMS, voice, and email—credit pulled, qualified, and
            transferred to your closers before competitors call back.
          </p>

          <div className="orchestration-flow">
            <div className="flow-step">
              <div className="step-circle">
                <HiOutlineDesktopComputer size={40} color="#64c8ff" />
              </div>
              <div className="step-label">Lead Submits</div>
              <div className="step-detail">Form completed</div>
            </div>
            <div className="flow-connector">
              <svg className="connector-arrow" viewBox="0 0 40 20" fill="none">
                <path className="arrow-line" d="M0 10H30" stroke="url(#arrowGradPO)" strokeWidth="2.5" strokeLinecap="round"/>
                <path className="arrow-head" d="M26 5L36 10L26 15" stroke="url(#arrowGradPO)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="arrowGradPO" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b00ff"/>
                    <stop offset="100%" stopColor="#f84608"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flow-step">
              <div className="step-circle" style={{ position: 'relative' }}>
                <BsChatDots size={40} color="#64c8ff" />
                <div className="status-indicator"></div>
              </div>
              <div className="step-label">Instant SMS</div>
              <div className="step-detail">3-second response</div>
            </div>
            <div className="flow-connector">
              <svg className="connector-arrow" viewBox="0 0 40 20" fill="none">
                <path className="arrow-line" d="M0 10H30" stroke="url(#arrowGradPO2)" strokeWidth="2.5" strokeLinecap="round"/>
                <path className="arrow-head" d="M26 5L36 10L26 15" stroke="url(#arrowGradPO2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="arrowGradPO2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b00ff"/>
                    <stop offset="100%" stopColor="#f84608"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div id="hero-demo-section" className="flow-step step-microphone">
              <div
                className="step-circle"
                onClick={openDemoModal}
              >
                <div className="mic-glow"></div>
                <FiMic size={48} color="#fff" />
              </div>
              <div className="step-label">Live Demo</div>
              <div className="step-detail">Live qualification</div>
              <button className="mic-cta" onClick={openDemoModal}>
                Experience It Yourself →
              </button>

              {/* Invisible backdrop for click-outside-to-close */}
              {demoModalOpen && (
                <div
                  style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 9998,
                    background: 'transparent',
                  }}
                  onClick={() => setDemoModalOpen(false)}
                />
              )}

              <div ref={demoModalRef} className={`demo-modal ${demoModalOpen ? 'active' : ''}`} onClick={(e) => e.stopPropagation()}>
                <div className="demo-form">
                  {/* Close button */}
                  <button
                    onClick={() => setDemoModalOpen(false)}
                    style={{
                      position: 'absolute',
                      top: '12px',
                      right: '12px',
                      background: 'rgba(255, 255, 255, 0.1)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '28px',
                      height: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      color: 'rgba(255, 255, 255, 0.6)',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)';
                    }}
                    aria-label="Close"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                  <div className="form-header">
                    <div className="form-title">Your Personalized Demo</div>
                    <div className="form-subtitle">See AIVI handle your lead in real-time</div>
                  </div>
                  <div className="form-fields">
                    <div className="input-group">
                      <input
                        type="text"
                        placeholder=" "
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                      <label>Your Name</label>
                    </div>
                    <div className="input-group">
                      <input
                        type="tel"
                        placeholder=" "
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                      <label>Phone Number</label>
                    </div>
                    <div className="input-group">
                      <input
                        type="email"
                        placeholder=" "
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                      <label>Email Address</label>
                    </div>
                  </div>
                  <button className="demo-submit" onClick={handleSubmit}>
                    <span>Activate Live Demo</span>
                    <svg width="20" height="20" viewBox="0 0 40 40">
                      <defs>
                        <linearGradient id="hexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
                          <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.7" />
                        </linearGradient>
                      </defs>
                      <polygon
                        points="20,2 26,6 26,14 20,18 14,14 14,6"
                        fill="none"
                        stroke="url(#hexGrad)"
                        strokeWidth="1.5"
                      />
                      <polygon
                        points="10,10 16,14 16,22 10,26 4,22 4,14"
                        fill="none"
                        stroke="url(#hexGrad)"
                        strokeWidth="1.5"
                      />
                      <polygon
                        points="30,10 36,14 36,22 30,26 24,22 24,14"
                        fill="none"
                        stroke="url(#hexGrad)"
                        strokeWidth="1.5"
                      />
                      <polygon
                        points="20,18 26,22 26,30 20,34 14,30 14,22"
                        fill="none"
                        stroke="url(#hexGrad)"
                        strokeWidth="1.5"
                      />
                      <circle cx="20" cy="10" r="2" fill="#fff" />
                      <circle cx="10" cy="18" r="1.5" fill="#a78bfa" />
                      <circle cx="30" cy="18" r="1.5" fill="#a78bfa" />
                      <circle cx="20" cy="26" r="2" fill="#fff" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flow-connector">
              <svg className="connector-arrow" viewBox="0 0 40 20" fill="none">
                <path className="arrow-line" d="M0 10H30" stroke="url(#arrowGradPO3)" strokeWidth="2.5" strokeLinecap="round"/>
                <path className="arrow-head" d="M26 5L36 10L26 15" stroke="url(#arrowGradPO3)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="arrowGradPO3" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b00ff"/>
                    <stop offset="100%" stopColor="#f84608"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flow-step">
              <div className="step-circle" style={{ position: 'relative' }}>
                <TbCreditCard size={40} color="#00ff88" />
                <div className="status-indicator"></div>
              </div>
              <div className="step-label">Credit Pulled</div>
              <div className="step-detail">Soft pull + verify</div>
            </div>
            <div className="flow-connector">
              <svg className="connector-arrow" viewBox="0 0 40 20" fill="none">
                <path className="arrow-line" d="M0 10H30" stroke="url(#arrowGradPO4)" strokeWidth="2.5" strokeLinecap="round"/>
                <path className="arrow-head" d="M26 5L36 10L26 15" stroke="url(#arrowGradPO4)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                <defs>
                  <linearGradient id="arrowGradPO4" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#8b00ff"/>
                    <stop offset="100%" stopColor="#f84608"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="flow-step">
              <div className="step-circle">
                <FaUserTie size={40} color="#64c8ff" />
              </div>
              <div className="step-label">Top Agent</div>
              <div className="step-detail">Warm transfer</div>
            </div>
          </div>

          <div
            className="results-preview-simple"
            style={{
              transform: demoModalOpen ? 'translateY(120px)' : 'translateY(-10px)',
              transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
              {/* Main Counter with Animated Digits */}
              <div className="counter-display">
                {counterValue.toLocaleString().split('').map((char, i) => (
                  <span
                    key={i}
                    className={`${char === ',' ? 'counter-comma' : 'counter-digit'}${animatingDigits.has(i) ? ' counter-digit-animate' : ''}`}
                  >
                    {char}
                  </span>
                ))}
              </div>

              <div className="counter-label-simple">AI-Powered Conversations Completed</div>
            </div>
        </div>
      </section>

      {/* Audio Visualization Overlay */}
      <div className={`audio-overlay ${audioOverlayOpen ? 'active' : ''}`}>
        <div className="demo-container">
          {/* Left: Status Terminal */}
          <div className="status-terminal">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="terminal-title">AIVI Live Demo</div>
            </div>
            <div className="terminal-body">
              <div className="terminal-line welcome">{welcomeText}</div>
              {terminalLines.map((line, index) => (
                <div
                  key={index}
                  className={`terminal-line ${line.className || ''}`}
                  dangerouslySetInnerHTML={{ __html: line.html }}
                />
              ))}
            </div>
          </div>

          {/* Center: Live Transcript */}
          <div className="transcript-panel">
            <div className="transcript-header">
              <div className="transcript-title">Live Transcript</div>
            </div>
            <div className="transcript-body" ref={transcriptRef}>
              {liveKit.transcript.length === 0 ? (
                <div className="transcript-empty">
                  Waiting for conversation...
                </div>
              ) : (
                liveKit.transcript.map((msg, index) => (
                  <div
                    key={index}
                    className={`transcript-message ${msg.speaker} ${!msg.isFinal ? 'interim' : ''}`}
                  >
                    <span className="transcript-speaker">
                      {msg.speaker === 'user' ? 'You' : 'AIVI'}:
                    </span>
                    <span className="transcript-text">{msg.text}</span>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Right: Audio Visualizer */}
          <div className="audio-visualizer">
            <canvas ref={audioCanvasRef} id="audioCanvas" width="300" height="300" />
            <div className="mic-center">🎙️</div>
            <button className="end-demo-btn" onClick={closeAudioOverlay}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
              >
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                <line x1="1" y1="1" x2="23" y2="23" stroke="#ff4444" strokeWidth="3" />
              </svg>
              <span>End Demo</span>
            </button>
          </div>
        </div>

        <div className="user-info-display">
          <div className="user-name">{formData.name}</div>
          <div className="user-details">
            {formData.phone} • {formData.email}
          </div>
        </div>
      </div>
    </>
  );
}
