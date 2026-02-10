'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  HiCode, 
  HiDatabase, 
  HiCloud, 
  HiLightningBolt,
  HiDownload,
  HiLocationMarker,
  HiMail
} from 'react-icons/hi';
import { personalInfo } from '@/data';
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/lib/constants';
import { useLanguage } from '@/contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  // Estadísticas del desarrollador
  const stats = [
    { id: 1, value: '4+', label: t('about.stat.1.label') },
    { id: 2, value: '15+', label: t('about.stat.2.label') },
    { id: 3, value: '8+', label: t('about.stat.3.label') },
    { id: 4, value: '20+', label: t('about.stat.4.label') },
  ];

  // Áreas de especialización
  const specializations = [
    {
      id: 1,
      icon: HiCode,
      title: t('about.spec.frontend'),
      description: t('about.spec.frontend.desc'),
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 2,
      icon: HiDatabase,
      title: t('about.spec.backend'),
      description: t('about.spec.backend.desc'),
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 3,
      icon: HiCloud,
      title: t('about.spec.cloud'),
      description: t('about.spec.cloud.desc'),
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 4,
      icon: HiLightningBolt,
      title: t('about.spec.database'),
      description: t('about.spec.database.desc'),
      color: 'from-orange-500 to-amber-500',
    },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            {t('about.badge')}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title.1')}{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t('about.title.2')}
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Contenido principal */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 max-w-5xl mx-auto">
          {/* Columna izquierda - Imagen y decoración */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Imagen principal */}
            <div className="relative z-10 mx-auto w-fit">
              <div className="relative w-64 sm:w-72 md:w-80 lg:w-96 aspect-square rounded-2xl overflow-hidden shadow-2xl">
                {personalInfo.avatar ? (
                  <Image
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                    <span className="text-white/80 text-8xl font-bold">
                      {personalInfo.name.charAt(0)}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Decoración flotante - Nivel de Inglés */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 sm:p-4 z-20"
              >
                <div className="text-center">
                  <span className="block text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    B1
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {t('about.englishLevel')}
                  </span>
                </div>
              </motion.div>

              {/* Decoración flotante - Edad */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-3 sm:p-4 z-20"
              >
                <div className="text-center">
                  <span className="block text-2xl sm:text-3xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                    22
                  </span>
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    {t('about.age')}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Decoración de fondo */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
            </div>
          </motion.div>

          {/* Columna derecha - Información */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                {t('about.role')}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {t('about.linkedinBio')}
              </p>
            </div>

            {/* Info de contacto rápido */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <HiMail className="text-blue-500 flex-shrink-0" size={20} />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <HiLocationMarker className="text-blue-500 flex-shrink-0" size={20} />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="/Andres_Alpizar_Junior_Software_Developer.pdf"
                download="Andres_Alpizar_Junior_Software_Developer.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <HiDownload size={18} />
                {t('about.cta.cv')}
              </motion.a>
              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t('about.cta.contact')}
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Áreas de especialización */}
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {specializations.map((spec, index) => (
            <motion.div
              key={spec.id}
              variants={FADE_IN_UP}
              custom={index}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              {/* Icono con gradiente */}
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${spec.color} mb-4`}>
                <spec.icon className="text-white" size={24} />
              </div>
              
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {spec.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {spec.description}
              </p>

              {/* Hover decoration */}
              <div className={`absolute inset-0 bg-gradient-to-r ${spec.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
            </motion.div>
          ))}
        </motion.div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <span className="block text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </span>
              <span className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
