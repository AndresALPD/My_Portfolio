'use client';

import { motion } from 'framer-motion';
import {
  HiAcademicCap,
  HiBadgeCheck,
  HiExternalLink,
  HiCalendar,
} from 'react-icons/hi';
import { education, certifications } from '@/data';
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/lib/constants';

// Formatear fecha
const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('es-ES', { year: 'numeric', month: 'short' });
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            Mi Trayectoria
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Educación y{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Certificaciones
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Mi formación académica y certificaciones que respaldan mis conocimientos
          </p>
        </motion.div>

        {/* Educación */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg">
              <HiAcademicCap className="text-white" size={22} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Educación
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-blue-500/50 via-blue-400/30 to-transparent ml-4" />
          </div>

          {education.map((edu) => (
            <div
              key={edu.id}
              className="group relative bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {edu.degree} en {edu.field}
                  </h3>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    <HiCalendar size={16} />
                    <span>
                      {formatDate(edu.startDate)} — {edu.endDate ? formatDate(edu.endDate) : 'Presente'}
                    </span>
                  </div>
                </div>

                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                  {edu.institution}
                </p>

                {edu.description && (
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Certificaciones */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg">
              <HiBadgeCheck className="text-white" size={22} />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Certificaciones
            </h3>
            <div className="flex-1 h-px bg-gradient-to-r from-green-500/50 via-emerald-400/30 to-transparent ml-4" />
          </div>
        </motion.div>

        {/* Timeline zigzag */}
        <div className="relative">
          {/* Línea curva serpiente (solo desktop) */}
          <svg
            className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 h-full w-32 pointer-events-none overflow-visible"
            viewBox="0 0 128 1000"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#22c55e" stopOpacity="0.7" />
                <stop offset="50%" stopColor="#10b981" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <path
              d={(() => {
                const totalHeight = 1000;
                const segmentHeight = totalHeight / certifications.length;
                let pathData = `M 64 0`;
                
                certifications.forEach((_, index) => {
                  const yStart = index * segmentHeight;
                  const yEnd = (index + 1) * segmentHeight;
                  const yMid = (yStart + yEnd) / 2;
                  const xControl = index % 2 === 0 ? 15 : 113;
                  
                  pathData += ` Q ${xControl} ${yMid} 64 ${yEnd}`;
                });
                
                return pathData;
              })()}
              fill="none"
              stroke="url(#snakeGradient)"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>

          {/* Línea lateral curva (solo mobile) */}
          <div className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500/50 via-emerald-500/30 to-transparent rounded-full" />

          <div className="space-y-8 md:space-y-16">
            {certifications.map((cert, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.25, 0.1, 0.25, 1],
                  }}
                  className="relative"
                >
                  {/* Layout desktop: zigzag */}
                  <div className={`hidden md:flex items-center gap-6 ${isLeft ? 'flex-row' : 'flex-row-reverse'}`}>
                    {/* Tarjeta */}
                    <div className="w-[calc(50%-3.5rem)] group">
                      <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-5 shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700 transition-all duration-300 hover:-translate-y-1">
                        {/* Flecha conectora */}
                        <div
                          className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-white dark:bg-gray-800/80 border border-gray-100 dark:border-gray-700 ${
                            isLeft
                              ? 'right-[calc(50%-0.85rem)] border-l-0 border-b-0'
                              : 'left-[calc(50%-0.85rem)] border-r-0 border-t-0'
                          }`}
                        />

                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors leading-tight">
                              {cert.name}
                            </h4>
                            <p className="text-sm text-green-600 dark:text-green-400 font-semibold mt-1">
                              {cert.issuer}
                            </p>
                            <div className="flex items-center gap-1 mt-2 text-xs text-gray-400 dark:text-gray-500">
                              <HiCalendar size={12} />
                              <span>{formatDate(cert.date)}</span>
                            </div>
                          </div>
                          {cert.credentialUrl && (
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all"
                              aria-label={`Ver credencial de ${cert.name}`}
                            >
                              <HiExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Nodo central */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg ring-4 ring-white dark:ring-gray-900" />
                    </div>

                    {/* Espacio del otro lado */}
                    <div className="w-[calc(50%-3.5rem)]" />
                  </div>

                  {/* Layout mobile: lineal */}
                  <div className="md:hidden flex items-start gap-4 pl-2">
                    {/* Nodo */}
                    <div className="relative z-10 flex-shrink-0 mt-4">
                      <div className="w-3.5 h-3.5 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 shadow-sm ring-3 ring-white dark:ring-gray-900 ml-[0.2rem]" />
                    </div>

                    {/* Tarjeta */}
                    <div className="flex-1 group">
                      <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700 transition-all duration-300">
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors leading-tight">
                              {cert.name}
                            </h4>
                            <p className="text-xs text-green-600 dark:text-green-400 font-semibold mt-1">
                              {cert.issuer}
                            </p>
                            <div className="flex items-center gap-1 mt-2 text-xs text-gray-400 dark:text-gray-500">
                              <HiCalendar size={12} />
                              <span>{formatDate(cert.date)}</span>
                            </div>
                          </div>
                          {cert.credentialUrl && (
                            <a
                              href={cert.credentialUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-green-600 dark:hover:text-green-400 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all"
                              aria-label={`Ver credencial de ${cert.name}`}
                            >
                              <HiExternalLink size={18} />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Estadística */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-full">
            <HiBadgeCheck className="text-green-500" />
            <span className="text-gray-600 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">{certifications.length}</span> certificaciones obtenidas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
