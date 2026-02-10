'use client';

import { useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const getIsDark = useCallback(() => {
    return document.documentElement.classList.contains('dark');
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configuración del canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Crear partículas
    const particles: Particle[] = [];
    const particleCount = 85;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    // Animación
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = getIsDark();

      particles.forEach((particle, index) => {
        // Actualizar posición
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Rebotar en los bordes
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Dibujar partícula - ajustar color según tema
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        if (isDark) {
          ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        } else {
          ctx.fillStyle = `rgba(37, 99, 235, ${particle.opacity * 0.7})`;
        }
        ctx.fill();

        // Conectar partículas cercanas
        particles.slice(index + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            if (isDark) {
              ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (1 - distance / 150)})`;
            } else {
              ctx.strokeStyle = `rgba(37, 99, 235, ${0.08 * (1 - distance / 150)})`;
            }
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        });
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [getIsDark]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Canvas para partículas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-60 dark:opacity-40"
      />

      {/* Gradientes decorativos */}
      <motion.div
        className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
        }}
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.08) 0%, transparent 60%)',
        }}
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 30, repeat: Infinity, ease: 'linear' },
          scale: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
        }}
      />

      {/* Gradiente decorativo adicional */}
      <motion.div
        className="absolute bottom-[30%] right-[25%] w-[350px] h-[350px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(59, 130, 246, 0.06) 0%, transparent 65%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 20, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Formas geométricas flotantes */}
      <motion.div
        className="absolute top-20 left-[15%] w-16 h-16 border-2 border-blue-500/20 rounded-lg"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 45, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-32 right-[20%] w-20 h-20 border-2 border-cyan-500/20 rounded-full"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/3 right-[10%] w-12 h-12 border-2 border-purple-500/20"
        style={{ clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }}
        animate={{
          y: [0, 15, 0],
          rotate: [0, -30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-1/4 left-[10%] w-8 h-8 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[60%] right-[8%] w-6 h-6 border border-blue-400/15 dark:border-blue-400/20 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -12, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[15%] left-[40%] w-10 h-10 border border-cyan-500/10 dark:border-cyan-500/15 rounded-lg"
        animate={{
          rotate: [0, -60, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-[15%] left-[35%] w-5 h-5 bg-gradient-to-br from-purple-500/8 to-blue-500/8 dark:from-purple-500/10 dark:to-blue-500/10 rounded-full"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[45%] left-[5%] w-14 h-14 border border-blue-500/10 dark:border-blue-500/15"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
        animate={{
          rotate: [0, 90, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[75%] right-[30%] w-4 h-4 bg-gradient-to-br from-cyan-500/8 to-blue-500/8 dark:from-cyan-500/12 dark:to-blue-500/12 rounded-full"
        animate={{
          y: [0, -18, 0],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[10%] right-[35%] w-3 h-3 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 dark:from-blue-400/15 dark:to-cyan-400/15 rounded-full"
        animate={{
          scale: [1, 2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[35%] right-[45%] w-11 h-11 border border-purple-400/12 dark:border-purple-400/18"
        style={{ clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)' }}
        animate={{
          rotate: [0, 180, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-[10%] right-[12%] w-9 h-9 border border-cyan-400/12 dark:border-cyan-400/18"
        style={{ clipPath: 'polygon(50% 100%, 100% 0%, 0% 0%)' }}
        animate={{
          y: [0, 15, 0],
          rotate: [0, 25, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[85%] left-[50%] w-6 h-6 border border-blue-500/10 dark:border-blue-500/15 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[25%] left-[65%] w-13 h-13 border border-blue-400/10 dark:border-blue-400/15"
        style={{ clipPath: 'polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)' }}
        animate={{
          rotate: [0, -120, 0],
          y: [0, -12, 0],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute bottom-[40%] right-[20%] w-7 h-7 bg-gradient-to-br from-purple-400/8 to-cyan-400/8 dark:from-purple-400/12 dark:to-cyan-400/12 rounded-lg"
        animate={{
          rotate: [0, 90, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 7.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-[55%] left-[25%] w-10 h-10 border border-cyan-500/12 dark:border-cyan-500/18"
        style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
        animate={{
          rotate: [0, 60, 0],
          x: [0, 10, 0],
          y: [0, -8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}
