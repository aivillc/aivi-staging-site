'use client';

import { useEffect, useRef, useCallback } from 'react';

export interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  density: number;
}

export interface UseNeuralCanvasOptions {
  /** Base particle count for desktop (default: 120) */
  particleCount?: number;
  /** Mouse interaction radius (default: 150) */
  mouseRadius?: number;
  /** Particle color - rgba format without alpha (default: '139, 0, 255') */
  particleColor?: string;
  /** Glow color start - rgba format without alpha (default: '248, 70, 8') */
  glowColorStart?: string;
  /** Glow color end - rgba format without alpha (default: '139, 0, 255') */
  glowColorEnd?: string;
  /** Connection distance threshold (default: 140) */
  connectionDistance?: number;
  /** Enable parallax scrolling effect (default: false) */
  enableParallax?: boolean;
}

/**
 * Custom hook for creating an interactive neural network canvas animation.
 * Consolidates duplicate particle animation code across V4 components.
 */
export function useNeuralCanvas(
  canvasRef: React.RefObject<HTMLCanvasElement | null>,
  options: UseNeuralCanvasOptions = {}
) {
  const {
    particleCount = 120,
    mouseRadius = 150,
    particleColor = '139, 0, 255',
    glowColorStart = '248, 70, 8',
    glowColorEnd = '139, 0, 255',
    connectionDistance = 140,
    enableParallax = false,
  } = options;

  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number | null; y: number | null; radius: number }>({
    x: null,
    y: null,
    radius: mouseRadius,
  });
  const scrollOffsetRef = useRef<number>(0);
  const animationIdRef = useRef<number | undefined>(undefined);

  // Initialize particles with device-optimized count for better mobile performance
  const initParticles = useCallback(
    (canvas: HTMLCanvasElement) => {
      const particles: Particle[] = [];
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
      const isTablet = typeof window !== 'undefined' && window.innerWidth >= 640 && window.innerWidth < 1024;
      const count = isMobile ? Math.floor(particleCount * 0.42) : isTablet ? Math.floor(particleCount * 0.67) : particleCount;

      for (let i = 0; i < count; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          radius: Math.random() * 2 + 1,
          density: Math.random() * 30 + 1,
        });
      }
      particlesRef.current = particles;
    },
    [particleCount]
  );

  // Neural canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (parent) {
        canvas.width = parent.offsetWidth;
        canvas.height = parent.offsetHeight;
        initParticles(canvas);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    // Disable parallax on touch devices for better performance
    const isTouchDevice =
      typeof window !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

    // Scroll parallax effect (disabled on touch devices)
    const handleScroll = () => {
      if (enableParallax && !isTouchDevice) {
        scrollOffsetRef.current = window.scrollY * 0.15;
      }
    };
    if (enableParallax) {
      window.addEventListener('scroll', handleScroll, { passive: true });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseRef.current.x = x;
        mouseRef.current.y = y;
      } else {
        mouseRef.current.x = null;
        mouseRef.current.y = null;
      }
    };

    const handleMouseOut = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;
      const particles = particlesRef.current;
      const scrollOffset = enableParallax ? scrollOffsetRef.current : 0;

      // Draw mouse glow
      if (mouse.x !== null && mouse.y !== null) {
        const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, mouse.radius);
        gradient.addColorStop(0, `rgba(${glowColorStart}, 0.12)`);
        gradient.addColorStop(0.5, `rgba(${glowColorEnd}, 0.06)`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, mouse.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }

      // Update and draw particles
      particles.forEach((p) => {
        const depthFactor = enableParallax ? p.radius / 3 : 0;
        const parallaxY = scrollOffset * depthFactor;

        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - (p.y + parallaxY);
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            const forceX = dx / dist;
            const forceY = dy / dist;
            const force = (mouse.radius - dist) / mouse.radius;
            p.x -= forceX * force * p.density * 0.5;
            p.y -= forceY * force * p.density * 0.5;
          }
        }

        // Normal movement
        p.x += p.vx;
        p.y += p.vy;
        p.x += (p.baseX - p.x) * 0.01;
        p.y += (p.baseY - p.y) * 0.01;

        // Bounce off edges
        if (p.x < 0 || p.x > canvas.width) {
          p.vx *= -1;
          p.baseX = p.x;
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.vy *= -1;
          p.baseY = p.y;
        }

        // Draw particle with parallax offset
        const drawY = p.y + parallaxY;

        let brightness = 0.6;
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - drawY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            brightness = 1 - (dist / mouse.radius) * 0.4;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, drawY, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${0.3 * brightness})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1DepthFactor = enableParallax ? particles[i].radius / 3 : 0;
          const p2DepthFactor = enableParallax ? particles[j].radius / 3 : 0;
          const p1Y = particles[i].y + scrollOffset * p1DepthFactor;
          const p2Y = particles[j].y + scrollOffset * p2DepthFactor;

          const dx = particles[i].x - particles[j].x;
          const dy = p1Y - p2Y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            let opacity = 0.12 * (1 - dist / connectionDistance);

            if (mouse.x !== null && mouse.y !== null) {
              const midX = (particles[i].x + particles[j].x) / 2;
              const midY = (p1Y + p2Y) / 2;
              const mouseDist = Math.sqrt((mouse.x - midX) ** 2 + (mouse.y - midY) ** 2);
              if (mouseDist < mouse.radius) {
                opacity *= 1 + (1 - mouseDist / mouse.radius) * 2;
              }
            }

            ctx.beginPath();
            ctx.strokeStyle = `rgba(${particleColor}, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, p1Y);
            ctx.lineTo(particles[j].x, p2Y);
            ctx.stroke();
          }
        }
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      if (enableParallax) {
        window.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [canvasRef, initParticles, mouseRadius, particleColor, glowColorStart, glowColorEnd, connectionDistance, enableParallax]);

  return {
    particles: particlesRef.current,
    mousePosition: mouseRef.current,
  };
}

export default useNeuralCanvas;
