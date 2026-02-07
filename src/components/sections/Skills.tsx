'use client';

import { motion } from 'framer-motion';
import { 
  FaJava, 
  FaPython, 
  FaPhp, 
  FaNodeJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaReact, 
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaDocker,
  FaCloud,
  FaDatabase,
  FaHashtag
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiMysql, 
  SiSpring, 
  SiDotnet, 
  SiPostman, 
  SiJavascript,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss
} from 'react-icons/si';
import { skills, skillCategories, getSkillsByCategory } from '@/data';
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/lib/constants';

// Mapeo de iconos
const skillIcons: Record<string, React.ReactNode> = {
  FaJava: <FaJava size={28} />,
  FaHashtag: <FaHashtag size={28} />,
  FaCode: <FaCode size={28} />,
  FaPython: <FaPython size={28} />,
  SiTypescript: <SiTypescript size={28} />,
  SiMysql: <SiMysql size={28} />,
  FaPhp: <FaPhp size={28} />,
  SiSpring: <SiSpring size={28} />,
  SiDotnet: <SiDotnet size={28} />,
  FaNodeJs: <FaNodeJs size={28} />,
  SiPostman: <SiPostman size={28} />,
  FaHtml5: <FaHtml5 size={28} />,
  FaCss3Alt: <FaCss3Alt size={28} />,
  SiJavascript: <SiJavascript size={28} />,
  FaReact: <FaReact size={28} />,
  FaBootstrap: <FaBootstrap size={28} />,
  FaDatabase: <FaDatabase size={28} />,
  SiPostgresql: <SiPostgresql size={28} />,
  SiMongodb: <SiMongodb size={28} />,
  FaGitAlt: <FaGitAlt size={28} />,
  FaGithub: <FaGithub size={28} />,
  SiFirebase: <SiFirebase size={28} />,
  SiNextdotjs: <SiNextdotjs size={28} />,
  SiTailwindcss: <SiTailwindcss size={28} />,
  FaDocker: <FaDocker size={28} />,
  FaCloud: <FaCloud size={28} />,
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-20 md:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            Mis Herramientas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Habilidades{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Tecnológicas
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Stack tecnológico que utilizo para diseñar y desarrollar soluciones escalables y mantenibles
          </p>
        </motion.div>

        {/* Categorías de habilidades */}
        <div className="space-y-12 max-w-7xl mx-auto">
          {skillCategories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category.id);
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                {/* Título de categoría */}
                <div className="flex items-center gap-3 mb-6 px-2">
                  <div className={`w-1 h-8 rounded-full bg-gradient-to-b ${category.color}`} />
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    {category.label}
                  </h3>
                  <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700" />
                </div>

                {/* Grid de skills */}
                <motion.div
                  variants={STAGGER_CONTAINER}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
                >
                  {categorySkills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.id}
                      variants={FADE_IN_UP}
                      whileHover={{ 
                        scale: 1.05, 
                        y: -5,
                        transition: { type: 'spring', stiffness: 400, damping: 17 }
                      }}
                      className="group relative bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-4 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700 transition-shadow cursor-default flex flex-col items-center"
                    >
                      {/* Icono */}
                      <div className={`flex items-center justify-center w-12 h-12 mb-3 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10 text-white flex-shrink-0`}>
                        {skill.icon && skillIcons[skill.icon] ? (
                          skillIcons[skill.icon]
                        ) : (
                          <FaCode size={28} />
                        )}
                      </div>
                      
                      {/* Nombre */}
                      <p className="text-center text-sm font-medium text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors min-h-[2.5rem] flex items-center">
                        {skill.name}
                      </p>

                      {/* Decoración de hover */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Estadística adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full">
            <FaCode className="text-blue-500" />
            <span className="text-gray-600 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">{skills.length}</span> tecnologías dominadas
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
