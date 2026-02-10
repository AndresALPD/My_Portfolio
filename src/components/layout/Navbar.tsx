'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { HiMenu, HiX } from 'react-icons/hi';
import { HiArrowsExpand, HiTranslate, HiSun, HiMoon } from 'react-icons/hi';
import { HiOutlineArrowsPointingIn } from 'react-icons/hi2';
import { navItems, personalInfo } from '@/data';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  // Detectar scroll para cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar sección activa
      const sections = navItems.map((item) => item.id);
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Ejecutar inmediatamente para detectar la sección activa al cargar
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Detectar cambios de pantalla completa
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Toggle pantalla completa
  const toggleFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error('Error al cambiar pantalla completa:', error);
    }
  };

  // Cerrar menú móvil al hacer click en un enlace
  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 relative">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-2 ml-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image
              src="/images/Aguila.jpg"
              alt="Logo"
              width={50}
              height={50}
              className="rounded-full ring-1 ring-blue-500/60 dark:ring-blue-400/60 ring-offset-0"
              priority
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={cn(
                  'px-4 py-2 rounded-lg text-sm font-medium transition-colors relative',
                  activeSection === item.id
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(`nav.${item.id}`)}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* Action Buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-1.5">
            {/* Pantalla completa */}
            <motion.button
              onClick={toggleFullscreen}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isFullscreen ? t('nav.exitFullscreen') : t('nav.fullscreen')}
              title={isFullscreen ? t('nav.exitFullscreen') : t('nav.fullscreen')}
            >
              {isFullscreen ? <HiOutlineArrowsPointingIn size={20} /> : <HiArrowsExpand size={20} />}
            </motion.button>

            {/* Idioma */}
            <motion.button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="h-9 px-2.5 flex items-center justify-center gap-1.5 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={language === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
              title={language === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
            >
              <HiTranslate size={20} />
              <span className="uppercase text-xs">{language === 'es' ? 'ES' : 'EN'}</span>
            </motion.button>

            {/* Modo claro / oscuro */}
            <motion.button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isDark ? t('nav.lightMode') : t('nav.darkMode')}
              title={isDark ? t('nav.lightMode') : t('nav.darkMode')}
            >
              {isDark ? <HiMoon size={20} /> : <HiSun size={20} />}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden bg-white dark:bg-gray-900 rounded-2xl shadow-xl mb-4"
            >
              <div className="px-4 py-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={cn(
                      'block px-4 py-3 rounded-xl text-base font-medium transition-colors',
                      activeSection === item.id
                        ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
                    )}
                  >
                    {t(`nav.${item.id}`)}
                  </motion.a>
                ))}
                
                {/* Action Buttons - Mobile */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="flex items-center justify-center gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800"
                >
                  <button
                    onClick={toggleFullscreen}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label={isFullscreen ? t('nav.exitFullscreen') : t('nav.fullscreen')}
                  >
                    {isFullscreen ? <HiOutlineArrowsPointingIn size={20} /> : <HiArrowsExpand size={20} />}
                  </button>
                  <button
                    onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
                    className="h-10 px-3 flex items-center justify-center gap-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium"
                    aria-label={language === 'es' ? 'Cambiar a Inglés' : 'Switch to Spanish'}
                  >
                    <HiTranslate size={20} />
                    <span className="uppercase text-xs">{language === 'es' ? 'ES' : 'EN'}</span>
                  </button>
                  <button
                    onClick={toggleTheme}
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    aria-label={isDark ? t('nav.lightMode') : t('nav.darkMode')}
                  >
                    {isDark ? <HiMoon size={20} /> : <HiSun size={20} />}
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
