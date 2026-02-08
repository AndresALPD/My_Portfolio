import { Skill } from '@/types';

// ============================================
// HABILIDADES TÉCNICAS
// ============================================

export const skills: Skill[] = [
  // Lenguajes de Programación
  {
    id: 'csharp',
    name: 'C#',
    category: 'languages',
    icon: 'FaHashtag',
  },
  {
    id: 'java',
    name: 'Java',
    category: 'languages',
    icon: 'FaJava',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    icon: 'FaPython',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'languages',
    icon: 'SiJavascript',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'languages',
    icon: 'SiTypescript',
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'languages',
    icon: 'FaPhp',
  },

  // Backend
  {
    id: 'aspnet-core',
    name: 'ASP.NET Core',
    category: 'backend',
    icon: 'SiDotnet',
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    category: 'backend',
    icon: 'SiSpring',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    icon: 'FaNodeJs',
  },
  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    icon: 'FaPython',
  },

  // Frontend
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    icon: 'SiNextdotjs',
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    icon: 'FaReact',
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'frontend',
    icon: 'SiTailwindcss',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'frontend',
    icon: 'FaBootstrap',
  },
  {
    id: 'html5-css3',
    name: 'HTML & CSS',
    category: 'frontend',
    icon: 'FaHtml5',
  },

  // Bases de datos
  {
    id: 'sql-server',
    name: 'SQL Server',
    category: 'database',
    icon: 'FaDatabase',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    icon: 'SiMysql',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    icon: 'SiPostgresql',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'database',
    icon: 'SiMongodb',
  },

  // Herramientas
  {
    id: 'git',
    name: 'Git',
    category: 'tools',
    icon: 'FaGitAlt',
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'tools',
    icon: 'FaGithub',
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'tools',
    icon: 'FaDocker',
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'tools',
    icon: 'SiFirebase',
  },
  {
    id: 'postman',
    name: 'Postman',
    category: 'tools',
    icon: 'SiPostman',
  },
  {
    id: 'oci',
    name: 'OCI',
    category: 'tools',
    icon: 'FaCloud',
  },
];

// ============================================
// CATEGORÍAS DE HABILIDADES
// ============================================

export const skillCategories = [
  { id: 'languages', label: 'Lenguajes de Programación', color: 'from-blue-500 to-cyan-500' },
  { id: 'backend', label: 'Backend', color: 'from-green-500 to-emerald-500' },
  { id: 'frontend', label: 'Frontend', color: 'from-purple-500 to-pink-500' },
  { id: 'database', label: 'Bases de Datos', color: 'from-orange-500 to-amber-500' },
  { id: 'tools', label: 'Herramientas', color: 'from-red-500 to-rose-500' },
];

// Helper para obtener skills por categoría
export const getSkillsByCategory = (category: string): Skill[] => {
  return skills.filter((skill) => skill.category === category);
};
