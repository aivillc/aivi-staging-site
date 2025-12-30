'use client';

import { useEffect, useRef, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  radius: number;
  density: number;
}

interface PageConstellationCanvasProps {
  /** Left offset in pixels to avoid sidebar area (default: 280 on lg screens) */
  sidebarOffset?: number;
}

/**
 * Full-page constellation canvas that excludes the left sidebar area on desktop.
 * Renders particles across the viewport and follows scroll.
 */
export default function PageConstellationCanvas({
  sidebarOffset = 280,
}: PageConstellationCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef<{ x: number | null; y: number | null; radius: number }>({
    x: null,
    y: null,
    radius: 150,
  });
  const animationIdRef = useRef<number | undefined>(undefined);
  const currentOffsetRef = useRef<number>(0);

  const particleCount = 120;
  const particleColor = '139, 0, 255';
  const glowColorStart = '248, 70, 8';
  const glowColorEnd = '139, 0, 255';
  const connectionDistance = 140;

  // Initialize particles with device-optimized count
  const initParticles = useCallback(
    (canvas: HTMLCanvasElement, leftOffset: number) => {
      const particles: Particle[] = [];
      const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
      const count = isMobile ? Math.floor(particleCount * 0.5) : particleCount;

      // Calculate drawable area (excluding sidebar on desktop)
      const drawableWidth = canvas.width - leftOffset;

      for (let i = 0; i < count; i++) {
        // On desktop, start particles after the sidebar offset
        const x = leftOffset + Math.random() * drawableWidth;
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
    []
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Track if tab is visible to pause animation when hidden
    let isTabVisible = !document.hidden;

    const resize = () => {
      // Viewport dimensions (fixed position canvas)
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Determine if we need sidebar offset (only on lg+ screens)
      const isDesktop = window.innerWidth >= 1024;
      currentOffsetRef.current = isDesktop ? sidebarOffset + 48 : 0; // 48px for mx-12 margin

      initParticles(canvas, currentOffsetRef.current);
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleMouseOut = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    // Pause animation when tab is not visible (performance optimization)
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !animationIdRef.current) {
        animate();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const animate = () => {
      // Stop animation if tab is hidden
      if (!isTabVisible) {
        animationIdRef.current = undefined;
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mouse = mouseRef.current;
      const particles = particlesRef.current;
      const leftOffset = currentOffsetRef.current;

      // Draw mouse glow (only in drawable area)
      if (mouse.x !== null && mouse.y !== null && mouse.x > leftOffset) {
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
        // Mouse interaction
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
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

        // Bounce off edges (respecting left offset)
        if (p.x < leftOffset || p.x > canvas.width) {
          p.vx *= -1;
          p.baseX = Math.max(leftOffset, Math.min(p.x, canvas.width));
        }
        if (p.y < 0 || p.y > canvas.height) {
          p.vy *= -1;
          p.baseY = Math.max(0, Math.min(p.y, canvas.height));
        }

        // Keep particles in bounds
        p.x = Math.max(leftOffset, Math.min(p.x, canvas.width));
        p.y = Math.max(0, Math.min(p.y, canvas.height));

        let brightness = 0.6;
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) {
            brightness = 1 - (dist / mouse.radius) * 0.4;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particleColor}, ${0.3 * brightness})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            let opacity = 0.12 * (1 - dist / connectionDistance);

            if (mouse.x !== null && mouse.y !== null) {
              const midX = (particles[i].x + particles[j].x) / 2;
              const midY = (particles[i].y + particles[j].y) / 2;
              const mouseDist = Math.sqrt((mouse.x - midX) ** 2 + (mouse.y - midY) ** 2);
              if (mouseDist < mouse.radius) {
                opacity *= 1 + (1 - mouseDist / mouse.radius) * 2;
              }
            }

            ctx.beginPath();
            ctx.strokeStyle = `rgba(${particleColor}, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
        animationIdRef.current = undefined;
      }
    };
  }, [initParticles, sidebarOffset]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
      role="presentation"
    />
  );
}
