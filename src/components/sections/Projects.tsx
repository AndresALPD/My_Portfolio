'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { 
  FaGithub, 
  FaExternalLinkAlt,
  FaCode,
  FaFolder,
  FaBook,
  FaYoutube
} from 'react-icons/fa';
import { HiArrowRight } from 'react-icons/hi';
import { projects } from '@/data';
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/lib/constants';

// Mapeo de tecnología → categoría (consistente con Skills)
const techCategoryMap: Record<string, string> = {
  // Lenguajes
  'Java': 'languages', 'C#': 'languages', 'Python': 'languages',
  'TypeScript': 'languages', 'SQL': 'languages', 'PHP': 'languages',
  // Backend
  'Spring Boot': 'backend', '.NET': 'backend', 'ASP.NET Core': 'backend',
  'Node.js': 'backend', 'RESTful APIs': 'backend', 'MVC': 'backend',
  'Entity Framework': 'backend', 'JWT': 'backend', 'FastAPI': 'backend',
  // Frontend
  'HTML': 'frontend', 'CSS': 'frontend', 'JavaScript': 'frontend',
  'React': 'frontend', 'Tailwind CSS': 'frontend', 'Next.js': 'frontend',
  'Bootstrap': 'frontend',
  // Bases de datos
  'SQL Server': 'database', 'PostgreSQL': 'database', 'MySQL': 'database',
  'MongoDB': 'database',
  // Herramientas
  'Git': 'tools', 'GitHub': 'tools', 'Postman': 'tools',
  'Firebase': 'tools', 'Docker': 'tools', 'Maven': 'tools',
  'Swagger': 'tools', 'OpenAI API': 'tools',
};

// Colores por categoría (mismos que en Skills)
const categoryColors: Record<string, string> = {
  languages: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
  backend: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300',
  frontend: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300',
  database: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-300',
  tools: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
};

const getTechColor = (tech: string): string => {
  const category = techCategoryMap[tech];
  return category ? categoryColors[category] : 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300';
};

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <section
      id="projects"
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
            Mi Trabajo
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Proyectos{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Destacados
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo
          </p>
        </motion.div>

        {/* Grid de proyectos */}
        <motion.div
          variants={STAGGER_CONTAINER}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
              <motion.article
                key={project.id}
                variants={{
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                  },
                }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Imagen del proyecto */}
                <div className="relative h-48 sm:h-56 overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center">
                      <FaFolder className="text-white/30 text-6xl" />
                    </div>
                  )}
                  
                  {/* Overlay con enlaces */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent flex items-end justify-start p-4"
                  >
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 transition-all"
                          aria-label="Ver código en GitHub"
                        >
                          <FaGithub size={18} />
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 transition-all"
                          aria-label={project.id === 'flightontime' ? 'Ver video demo' : 'Ver proyecto en vivo'}
                        >
                          {project.id === 'flightontime' ? <FaYoutube size={18} /> : <FaExternalLinkAlt size={16} />}
                        </a>
                      )}
                      {project.manualUrl && (
                        <a
                          href={project.manualUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-gray-900 transition-all"
                          aria-label="Ver manual de usuario"
                        >
                          <FaBook size={16} />
                        </a>
                      )}
                    </div>
                  </motion.div>

                  {/* Badge de destacado */}
                  {project.featured && (
                    <div className="absolute top-3 right-3 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-semibold rounded-full shadow-lg">
                      Destacado
                    </div>
                  )}
                </div>

                {/* Contenido */}
                <div className="p-5 sm:p-6">
                  {/* Fecha */}
                  {project.date && (
                    <div className="mb-3">
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(project.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'short' })}
                      </span>
                    </div>
                  )}

                  {/* Título */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className={`px-2 py-0.5 text-xs font-medium rounded-md ${getTechColor(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
        </motion.div>

        {/* CTA para ver más */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/AndresALPD"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
          >
            <FaGithub size={20} />
            <span>Ver más proyectos en GitHub</span>
            <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Estadística */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-full">
            <FaCode className="text-blue-500" />
            <span className="text-gray-600 dark:text-gray-400">
              <span className="font-bold text-gray-900 dark:text-white">{projects.length}</span> proyectos en el portafolio
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
