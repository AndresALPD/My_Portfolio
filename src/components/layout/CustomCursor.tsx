'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [particles, setParticles] = useState<Particle[]>();
  const [isVisible, setIsVisible] = useState(true);
  const particleIdRef = useRef(0);

  // Seguir posición del mouse
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Detectar clics y crear partículas
  useEffect(() => {
    const handleMouseDown = () => {
      setIsClicking(true);
      
      // Crear partículas al hacer clic
      const newParticles: Particle[] = [];
      for (let i = 0; i < 5; i++) {
        newParticles.push({
          id: particleIdRef.current++,
          x: mousePosition.x,
          y: mousePosition.y,
        });
      }
      setParticles(prev => [...(prev || []), ...newParticles]);

      // Eliminar partículas después de la animación
      setTimeout(() => {
        setParticles(prev => 
          prev ? prev.filter(p => !newParticles.some(np => np.id === p.id)) : []
        );
      }, 800);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mousePosition]);

  // No renderizar en dispositivos táctiles
  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      {/* Aura principal del cursor - círculo grande */}
      <motion.div
        className="absolute w-10 h-10 rounded-full"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
        }}
        animate={{
          scale: isClicking ? 0.8 : 1,
          opacity: isClicking ? 0.6 : 0.8,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />

      {/* Punto central del cursor */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"
        style={{
          left: mousePosition.x - 3,
          top: mousePosition.y - 3,
          boxShadow: '0 0 8px rgba(59, 130, 246, 0.6)',
        }}
        animate={{
          scale: isClicking ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 600,
          damping: 20,
        }}
      />

      {/* Partículas al hacer clic */}
      <AnimatePresence>
        {particles?.map((particle, index) => {
          const angle = (index / 5) * Math.PI * 2;
          const distance = 30 + Math.random() * 20;
          const endX = Math.cos(angle) * distance;
          const endY = Math.sin(angle) * distance;

          return (
            <motion.div
              key={particle.id}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: particle.x,
                top: particle.y,
                background: `linear-gradient(135deg, 
                  ${index % 2 === 0 ? '#3b82f6' : '#06b6d4'}, 
                  ${index % 2 === 0 ? '#06b6d4' : '#3b82f6'})`,
                boxShadow: `0 0 6px ${index % 2 === 0 ? '#3b82f6' : '#06b6d4'}`,
              }}
              initial={{ 
                scale: 1, 
                opacity: 1,
                x: 0,
                y: 0,
              }}
              animate={{ 
                scale: 0,
                opacity: 0,
                x: endX,
                y: endY,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.6,
                ease: 'easeOut',
              }}
            />
          );
        })}
      </AnimatePresence>

      {/* Anillo exterior pulsante */}
      <motion.div
        className="absolute rounded-full border border-blue-400/30"
        style={{
          left: mousePosition.x - 25,
          top: mousePosition.y - 25,
          width: 50,
          height: 50,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  );
}
