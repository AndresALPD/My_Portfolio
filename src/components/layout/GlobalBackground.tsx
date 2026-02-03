'use client';

import AnimatedBackground from '../sections/AnimatedBackground';

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 z-0">
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatedBackground />
      </div>

      {/* Gradiente overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white dark:from-gray-950/50 dark:via-transparent dark:to-gray-950 pointer-events-none" />
    </div>
  );
}
