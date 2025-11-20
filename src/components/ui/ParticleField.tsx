import { useCallback, useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  pulse: number;
};

const fallbackAccentChannels = '127, 90, 240';
const fallbackSecondaryChannels = '44, 182, 125';

const extractColorChannels = (value: string) => {
  if (!value) {
    return fallbackAccentChannels;
  }

  if (value.startsWith('rgb')) {
    const cleaned = value.replace(/rgba?\(/, '').replace(')', '').split(',');
    return cleaned.slice(0, 3).map((segment) => segment.trim()).join(', ');
  }

  return value.replace(/\s+/g, ', ');
};

const getColorChannels = (variable: string, fallback: string) => {
  if (typeof window === 'undefined') return fallback;
  const value = getComputedStyle(document.documentElement).getPropertyValue(variable).trim();
  return extractColorChannels(value || fallback);
};

const rgba = (channels: string, alpha: number) => `rgba(${channels}, ${alpha})`;

const createParticle = (width: number, height: number): Particle => ({
  x: Math.random() * width,
  y: Math.random() * height,
  vx: (Math.random() - 0.5) * 0.6,
  vy: (Math.random() - 0.5) * 0.6,
  size: Math.random() * 1.8 + 0.6,
  pulse: Math.random()
});

export const ParticleField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const accentChannelsRef = useRef(fallbackAccentChannels);
  const secondaryChannelsRef = useRef(fallbackSecondaryChannels);

  const syncColors = useCallback(() => {
    accentChannelsRef.current = getColorChannels('--color-accent', fallbackAccentChannels);
    secondaryChannelsRef.current = getColorChannels('--color-secondary', fallbackSecondaryChannels);
  }, []);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }

    const particleCount = Math.min(140, Math.floor((canvas.width * canvas.height) / 20000));
    particlesRef.current = Array.from({ length: particleCount }, () =>
      createParticle(canvas.width, canvas.height)
    );

    const render = () => {
      const particles = particlesRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.pulse += 0.005;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        const alpha = 0.4 + Math.sin(particle.pulse * Math.PI) * 0.3;
        ctx.beginPath();
        ctx.fillStyle = rgba(accentChannelsRef.current, alpha);
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();

        for (let i = index + 1; i < particles.length; i++) {
          const other = particles[i];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 140) {
            ctx.beginPath();
            ctx.strokeStyle = rgba(secondaryChannelsRef.current, 0.25);
            ctx.globalAlpha = 1 - distance / 150;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });
      animationRef.current = requestAnimationFrame(render);
    };

    render();
  }, []);

  useEffect(() => {
    syncColors();
    if (typeof window === 'undefined') return;

    const observer = new MutationObserver(() => syncColors());
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['style', 'data-theme'] });
    return () => observer.disconnect();
  }, [syncColors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      draw();
    };

    setSize();
    window.addEventListener('resize', setSize);

    return () => {
      window.removeEventListener('resize', setSize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [draw]);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-20 opacity-80" aria-hidden />;
};
