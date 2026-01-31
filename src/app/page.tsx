'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data';
import { FADE_IN_UP } from '@/lib/constants';

export default function Home() {
  return (
    <>
      {/* Hero Section Temporal */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center pt-20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={FADE_IN_UP.initial}
            animate={FADE_IN_UP.animate}
            transition={FADE_IN_UP.transition}
          >
            <span className="inline-block px-4 py-2 mb-6 text-sm font-medium text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-400 rounded-full">
              👋 ¡Bienvenido a mi portafolio!
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Hola, soy{' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
              {personalInfo.title} — {personalInfo.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="#projects"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver Proyectos
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-500 hover:text-blue-500 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contáctame
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Secciones placeholder para navegación */}
      <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-400">Sección: Sobre Mí</h2>
          <p className="text-gray-500 mt-2">Próximamente...</p>
        </div>
      </section>

      <section id="skills" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-400">Sección: Habilidades</h2>
          <p className="text-gray-500 mt-2">Próximamente...</p>
        </div>
      </section>

      <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-400">Sección: Proyectos</h2>
          <p className="text-gray-500 mt-2">Próximamente...</p>
        </div>
      </section>

      <section id="experience" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-400">Sección: Experiencia</h2>
          <p className="text-gray-500 mt-2">Próximamente...</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-400">Sección: Contacto</h2>
          <p className="text-gray-500 mt-2">Próximamente...</p>
        </div>
      </section>
    </>
  );
}
