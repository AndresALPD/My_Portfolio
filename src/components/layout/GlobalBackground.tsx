'use client';

import AnimatedBackground from '../sections/AnimatedBackground';

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0 transition-colors duration-300">
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedBackground />
      </div>

      {/* Gradiente overlay - light y dark */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80 dark:from-gray-950/50 dark:via-transparent dark:to-gray-950 pointer-events-none transition-colors duration-300" />
    </div>
  );
}
