'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

interface AudioPlayerProps {
  label: string;
  audioSrc?: string;
  darkMode?: boolean;
}

interface WaveformVisualizerProps {
  isPlaying: boolean;
  analyserNode: AnalyserNode | null;
}

// Animated Waveform Visualizer Component - responds to actual audio
function WaveformVisualizer({ isPlaying, analyserNode }: WaveformVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const dataArrayRef = useRef<Uint8Array<ArrayBuffer> | null>(null);

  // Initialize data array when analyser is ready
  useEffect(() => {
    if (analyserNode) {
      const buffer = new ArrayBuffer(analyserNode.frequencyBinCount);
      dataArrayRef.current = new Uint8Array(buffer);
    }
  }, [analyserNode]);

  const drawStatic = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    const width = rect.width;
    const height = rect.height;

    ctx.clearRect(0, 0, width, height);

    // Create gradient (Purple -> Orange -> Purple)
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, '#6366f1');
    gradient.addColorStop(0.2, '#a855f7');
    gradient.addColorStop(0.5, '#f43f5e');
    gradient.addColorStop(0.8, '#a855f7');
    gradient.addColorStop(1, '#6366f1');

    ctx.fillStyle = gradient;

    const barCount = 35;
    const barWidth = 6;
    const gap = 6;

    const totalBarWidth = (barCount * barWidth) + ((barCount - 1) * gap);
    const startX = (width - totalBarWidth) / 2;

    for (let i = 0; i < barCount; i++) {
      const distFromCenter = Math.abs((i - barCount / 2) / (barCount / 2));
      const shapeFactor = 1 - Math.pow(distFromCenter, 2);

      const maxBarHeight = height * 0.8;
      // Static state: minimal height bars
      const finalHeight = Math.max(maxBarHeight * shapeFactor * 0.15, 4);

      const x = startX + i * (barWidth + gap);
      const y = (height - finalHeight) / 2;

      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, finalHeight, 50);
      ctx.fill();
    }
  }, []);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    }

    const width = rect.width;
    const height = rect.height;

    ctx.clearRect(0, 0, width, height);

    // Create gradient (Purple -> Orange -> Purple)
    const gradient = ctx.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, '#6366f1');
    gradient.addColorStop(0.2, '#a855f7');
    gradient.addColorStop(0.5, '#f43f5e');
    gradient.addColorStop(0.8, '#a855f7');
    gradient.addColorStop(1, '#6366f1');

    ctx.fillStyle = gradient;

    const barCount = 35;
    const barWidth = 6;
    const gap = 6;

    const totalBarWidth = (barCount * barWidth) + ((barCount - 1) * gap);
    const startX = (width - totalBarWidth) / 2;

    // Get frequency data from audio
    let frequencyData: number[] = [];
    if (analyserNode && dataArrayRef.current) {
      analyserNode.getByteFrequencyData(dataArrayRef.current);

      // Sample frequency data for our bar count
      const bufferLength = analyserNode.frequencyBinCount;
      for (let i = 0; i < barCount; i++) {
        // Map bar index to frequency bin (focus on lower frequencies for voice)
        const freqIndex = Math.floor((i / barCount) * (bufferLength * 0.5));
        frequencyData.push(dataArrayRef.current[freqIndex] / 255);
      }
    } else {
      // Fallback if no analyser
      frequencyData = Array(barCount).fill(0.1);
    }

    for (let i = 0; i < barCount; i++) {
      const distFromCenter = Math.abs((i - barCount / 2) / (barCount / 2));
      const shapeFactor = 1 - Math.pow(distFromCenter, 2);

      // Get audio level for this bar (with smoothing)
      const audioLevel = frequencyData[i] || 0;

      const maxBarHeight = height * 0.85;
      const minHeight = 4;

      // Base height + audio-responsive height
      const baseHeight = maxBarHeight * shapeFactor * 0.15;
      const audioHeight = audioLevel * maxBarHeight * shapeFactor * 0.85;
      const finalHeight = Math.max(baseHeight + audioHeight, minHeight);

      const x = startX + i * (barWidth + gap);
      const y = (height - finalHeight) / 2;

      ctx.beginPath();
      ctx.roundRect(x, y, barWidth, finalHeight, 50);
      ctx.fill();
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [analyserNode]);

  useEffect(() => {
    if (isPlaying) {
      // Start animation
      animate();
    } else {
      // Stop animation and draw static state
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
        animationRef.current = null;
      }
      drawStatic();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPlaying, animate, drawStatic]);

  // Initial static draw
  useEffect(() => {
    if (!isPlaying) {
      drawStatic();
    }
  }, [drawStatic, isPlaying]);

  return (
    <div className="w-full h-[100px] sm:h-[120px] mb-4 flex justify-center" style={{ filter: 'drop-shadow(0 0 15px rgba(99, 102, 241, 0.3))' }}>
      <canvas ref={canvasRef} className="w-full max-w-[400px] h-full" />
    </div>
  );
}

export default function AudioPlayer({ label, audioSrc, darkMode = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [analyserNode, setAnalyserNode] = useState<AnalyserNode | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);

  // Initialize Web Audio API for real-time audio analysis
  const initializeAudioContext = useCallback(() => {
    if (audioContextRef.current || !audioRef.current) return;

    try {
      const audioContext = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      audioContextRef.current = audioContext;

      // Create analyser node
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 256;
      analyser.smoothingTimeConstant = 0.8;

      // Connect audio element to analyser
      const source = audioContext.createMediaElementSource(audioRef.current);
      sourceNodeRef.current = source;
      source.connect(analyser);
      analyser.connect(audioContext.destination);

      setAnalyserNode(analyser);
    } catch (error) {
      console.error('Failed to initialize audio context:', error);
    }
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  // Cleanup audio context on unmount
  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    // Initialize audio context on first play (required for browser autoplay policies)
    if (!audioContextRef.current) {
      initializeAudioContext();
    }

    // Resume audio context if suspended
    if (audioContextRef.current?.state === 'suspended') {
      await audioContextRef.current.resume();
    }

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    const progressBar = progressRef.current;
    if (!audio || !progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    audio.currentTime = clickPosition * audio.duration;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Generate waveform bars
  const waveformBars = Array.from({ length: 40 }, (_, i) => {
    const height = 20 + Math.sin(i * 0.5) * 15 + Math.random() * 10;
    return height;
  });

  return (
    <div className={`rounded-2xl p-4 sm:p-6 shadow-sm ${darkMode ? 'bg-white/10 backdrop-blur-sm border border-white/20' : 'bg-white border border-[#E8E5E0]'}`}>
      {/* Hidden audio element */}
      <audio ref={audioRef} src={audioSrc || '/aivicall.wav'} preload="metadata" />

      {/* Animated Waveform Visualizer - responds to actual audio levels */}
      <WaveformVisualizer isPlaying={isPlaying} analyserNode={analyserNode} />

      {/* Label */}
      <p className={`text-[13px] sm:text-[14px] mb-4 text-center ${darkMode ? 'text-white/70' : 'text-[#666666]'}`}>{label}</p>

      <div className="flex items-center gap-4">
        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-[#f84608] to-[#ff7a47] flex items-center justify-center hover:scale-105 transition-transform duration-200 focus-brand-ring flex-shrink-0"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Waveform and Progress */}
        <div className="flex-1">
          <div
            ref={progressRef}
            className="relative h-12 cursor-pointer"
            onClick={handleProgressClick}
            role="slider"
            aria-label="Audio progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            {/* Waveform visualization */}
            <div className="absolute inset-0 flex items-center gap-[2px]">
              {waveformBars.map((height, i) => {
                const isPlayed = (i / waveformBars.length) * 100 <= progress;
                return (
                  <div
                    key={i}
                    className={`flex-1 rounded-full transition-colors duration-150 ${
                      isPlayed
                        ? 'bg-gradient-to-t from-[#f84608] to-[#ff7a47]'
                        : darkMode ? 'bg-white/20' : 'bg-[#E8E5E0]'
                    }`}
                    style={{ height: `${height}%` }}
                  />
                );
              })}
            </div>
          </div>

          {/* Time display */}
          <div className={`flex justify-between mt-2 text-[11px] sm:text-[12px] ${darkMode ? 'text-white/50' : 'text-[#999999]'}`}>
            <span>{formatTime((progress / 100) * duration)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
