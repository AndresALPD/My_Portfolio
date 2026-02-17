'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTelegram,
  FaPhone,
  FaWhatsapp,
  FaDownload,
  FaArrowDown 
} from 'react-icons/fa';
import { HiSparkles, HiMail } from 'react-icons/hi';
import { personalInfo, socialLinks } from '@/data';
import { STAGGER_CONTAINER, FADE_IN_UP } from '@/lib/constants';
import TypeWriter from './TypeWriter';
import { useLanguage } from '@/contexts/LanguageContext';

// Mapeo de iconos
const socialIcons: Record<string, React.ReactNode> = {
  FaGithub: <FaGithub size={20} />,
  FaLinkedin: <FaLinkedin size={20} />,
  FaTelegram: <FaTelegram size={20} />,
  HiMail: <HiMail size={20} />,
  FaWhatsapp: <FaWhatsapp size={20} />,
  FaPhone: <FaPhone size={18} />,
};

export default function Hero() {
  const { t } = useLanguage();
  const nameRef = useRef<HTMLSpanElement>(null);
  const [showUnderline, setShowUnderline] = useState(true);

  useEffect(() => {
    const checkLineBreak = () => {
      if (nameRef.current) {
        const lineHeight = parseFloat(getComputedStyle(nameRef.current).lineHeight);
        const actualHeight = nameRef.current.offsetHeight;
        // Si la altura real es mayor que 1.5 veces la altura de línea, está en múltiples líneas
        setShowUnderline(actualHeight <= lineHeight * 1.5);
      }
    };

    // Verificar al montar
    checkLineBreak();

    // Verificar cuando cambie el tamaño de la ventana
    window.addEventListener('resize', checkLineBreak);
    
    // Verificar después de que las fuentes se carguen
    document.fonts.ready.then(checkLineBreak);

    return () => window.removeEventListener('resize', checkLineBreak);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      {/* Contenido principal */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="initial"
          animate="animate"
          className="max-w-5xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div
            variants={FADE_IN_UP}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-sm font-medium bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full backdrop-blur-sm"
          >
            <HiSparkles className="text-yellow-500" />
            <span>{t('hero.badge')}</span>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            variants={FADE_IN_UP}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-gray-900 dark:text-white">{t('hero.greeting')}</span>
            <span className="relative">
              <span 
                ref={nameRef}
                className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient"
              >
                {personalInfo.name}
              </span>
              {/* Decoración underline */}
              {showUnderline && (
                <motion.svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <motion.path
                  d="M2 9c50-6 100-6 150 0s100 6 146 0"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#06b6d4" />
                  </linearGradient>
                </defs>
              </motion.svg>
              )}
            </span>
          </motion.h1>

          {/* Subtítulo con efecto de escritura */}
          <motion.div
            variants={FADE_IN_UP}
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-400 mb-6 h-10"
          >
            <TypeWriter
              words={[
                t('hero.typewriter.1'),
                t('hero.typewriter.2'),
                t('hero.typewriter.3'),
                t('hero.typewriter.4'),
              ]}
              className="font-medium"
            />
          </motion.div>

          {/* Descripción */}
          <motion.p
            variants={FADE_IN_UP}
            className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            {t('hero.bio')}
          </motion.p>

          {/* Botones CTA */}
          <motion.div
            variants={FADE_IN_UP}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full overflow-hidden shadow-lg shadow-blue-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t('hero.cta.projects')}
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  <FaArrowDown size={16} />
                </motion.span>
              </span>
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>

            <motion.a
              href="/AndresAlpizar_BackendDeveloper_2026.pdf"
              download="AndresAlpizar_BackendDeveloper_2026.pdf"
              className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all flex items-center justify-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="group-hover:animate-bounce" />
              {t('hero.cta.cv')}
            </motion.a>
          </motion.div>

          {/* Redes Sociales - Solo visible en móvil/tablet, oculto en desktop donde hay barra lateral */}
          <motion.div
            variants={FADE_IN_UP}
            className="flex flex-col items-center justify-center gap-4 lg:hidden"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {t('hero.findme')}
            </span>
            <div className="grid grid-cols-3 sm:flex gap-3 justify-items-center">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-500 transition-all"
                  whileHover={{ scale: 1.15, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  aria-label={social.name}
                >
                  {socialIcons[social.icon]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator - Posicionado fuera del contenedor principal */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-500 transition-colors"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          aria-label="Scroll to next section"
        >
          <span className="text-xs font-medium">{t('hero.scroll')}</span>
          <FaArrowDown size={16} />
        </motion.button>
      </motion.div>

      {/* Decoración lateral - Barra de redes sociales */}
      <div className="hidden lg:flex absolute left-4 xl:left-8 top-1/2 transform -translate-y-1/2 z-30">
        <motion.div
          className="flex flex-col gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 }}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm shadow-lg text-gray-600 dark:text-gray-400 hover:text-blue-500 hover:bg-blue-50 dark:hover:text-blue-400 dark:hover:bg-gray-700 transition-colors cursor-pointer"
              whileHover={{ scale: 1.1, x: 5, transition: { type: 'spring', stiffness: 400, damping: 17 } }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0, transition: { delay: 1.3 + index * 0.1 } }}
            >
              {socialIcons[social.icon]}
            </motion.a>
          ))}
          <div className="w-px h-20 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 mx-auto mt-2" />
        </motion.div>
      </div>
    </section>
  );
}
