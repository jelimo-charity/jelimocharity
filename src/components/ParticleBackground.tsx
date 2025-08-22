import { useEffect, useRef } from 'react';
import { useTheme } from '@/hooks/use-theme';

const ParticleBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();
  const particlesRef = useRef<any[]>([]);
  const mouseRef = useRef({ x: null as number | null, y: null as number | null, radius: 100 });
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions with high DPI support
    const handleResize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);
      initParticles();
    };

    // Theme-based color schemes with solid backgrounds
    const getThemeColors = () => {
      // #codebase-inspired: blue, purple, green, yellow, orange
      return {
        particles: [
          '#3b82f6', // blue-500
          '#a21caf', // purple-700
          '#22d3ee', // cyan-400
          '#facc15', // yellow-400
          '#f97316', // orange-500
        ],
        connections: 'rgba(59, 130, 246, 0.08)', // blue-500, faint
        bg: '#0f172a' // dark background
      };
    };

    // Initialize particles with balanced distribution
    const initParticles = () => {
      particlesRef.current = [];
      const colors = getThemeColors().particles;
      const particleCount = Math.min(
        Math.floor((window.innerWidth * window.innerHeight) / 8000),
        150 // Max 150 particles
      );

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 1.5 + 0.5,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: (Math.random() - 0.5) * 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          originalX: Math.random() * window.innerWidth,
          originalY: Math.random() * window.innerHeight,
          pulseOffset: Math.random() * Math.PI * 2 // For subtle pulsing effect
        });
      }
    };

    // Mouse interaction handlers
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = event.clientX;
      mouseRef.current.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = null;
      mouseRef.current.y = null;
    };

    // Animation loop with optimized rendering
    const animate = () => {
      const { bg, connections } = getThemeColors();
      
      // Clear canvas with solid background color
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particlesRef.current.forEach(particle => {
        // Add subtle pulsing to movement
        const pulse = Math.sin(Date.now() * 0.001 + particle.pulseOffset) * 0.1 + 1;
        particle.x += particle.speedX * pulse;
        particle.y += particle.speedY * pulse;
        
        // Screen edge wrapping
        if (particle.x < 0) particle.x = window.innerWidth;
        if (particle.x > window.innerWidth) particle.x = 0;
        if (particle.y < 0) particle.y = window.innerHeight;
        if (particle.y > window.innerHeight) particle.y = 0;

        // Mouse interaction physics
        if (mouseRef.current.x && mouseRef.current.y) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < mouseRef.current.radius) {
            const angle = Math.atan2(dy, dx);
            const force = (mouseRef.current.radius - distance) / mouseRef.current.radius;
            particle.x -= Math.cos(angle) * force * 2;
            particle.y -= Math.sin(angle) * force * 2;
          }
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();

        // Enhanced glow effect for dark mode
        if (resolvedTheme === 'dark') {
          const glow = ctx.createRadialGradient(
            particle.x, particle.y, 0,
            particle.x, particle.y, particle.size * 3
          );
          glow.addColorStop(0, particle.color);
          glow.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }
      });

      // Draw connections between particles
      ctx.strokeStyle = connections;
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150) {
            ctx.lineWidth = 0.3 * (1 - distance / 150);
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId.current = requestAnimationFrame(animate);
    };

    // Initialize with proper cleanup
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [resolvedTheme]);

  return (
    <canvas 
      ref={canvasRef}
      className="fixed inset-0 z-[-1] w-full h-full pointer-events-none"
      style={{ opacity: resolvedTheme === 'dark' ? 0.9 : 0.7 }}
    />
  );
};

export default ParticleBackground;
