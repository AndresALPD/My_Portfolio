import { Skill } from '@/types';

// ============================================
// HABILIDADES TÉCNICAS
// Modifica los niveles según tu experiencia (0-100)
// ============================================

export const skills: Skill[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    level: 90,
    category: 'frontend',
    icon: 'FaReact',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    level: 85,
    category: 'frontend',
    icon: 'SiNextdotjs',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    level: 85,
    category: 'frontend',
    icon: 'SiTypescript',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    level: 90,
    category: 'frontend',
    icon: 'SiTailwindcss',
  },
  {
    id: 'html',
    name: 'HTML5',
    level: 95,
    category: 'frontend',
    icon: 'FaHtml5',
  },
  {
    id: 'css',
    name: 'CSS3',
    level: 90,
    category: 'frontend',
    icon: 'FaCss3Alt',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    level: 92,
    category: 'frontend',
    icon: 'SiJavascript',
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    level: 85,
    category: 'backend',
    icon: 'FaNodeJs',
  },
  {
    id: 'express',
    name: 'Express.js',
    level: 80,
    category: 'backend',
    icon: 'SiExpress',
  },
  {
    id: 'nestjs',
    name: 'NestJS',
    level: 75,
    category: 'backend',
    icon: 'SiNestjs',
  },
  {
    id: 'python',
    name: 'Python',
    level: 70,
    category: 'backend',
    icon: 'FaPython',
  },

  // Bases de datos
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    level: 80,
    category: 'database',
    icon: 'SiPostgresql',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    level: 85,
    category: 'database',
    icon: 'SiMongodb',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    level: 75,
    category: 'database',
    icon: 'SiMysql',
  },
  {
    id: 'redis',
    name: 'Redis',
    level: 65,
    category: 'database',
    icon: 'SiRedis',
  },

  // DevOps
  {
    id: 'docker',
    name: 'Docker',
    level: 75,
    category: 'devops',
    icon: 'FaDocker',
  },
  {
    id: 'aws',
    name: 'AWS',
    level: 70,
    category: 'devops',
    icon: 'FaAws',
  },
  {
    id: 'git',
    name: 'Git',
    level: 90,
    category: 'devops',
    icon: 'FaGitAlt',
  },
  {
    id: 'github-actions',
    name: 'GitHub Actions',
    level: 75,
    category: 'devops',
    icon: 'SiGithubactions',
  },

  // Herramientas
  {
    id: 'vscode',
    name: 'VS Code',
    level: 95,
    category: 'tools',
    icon: 'SiVisualstudiocode',
  },
  {
    id: 'figma',
    name: 'Figma',
    level: 70,
    category: 'tools',
    icon: 'FaFigma',
  },
  {
    id: 'postman',
    name: 'Postman',
    level: 85,
    category: 'tools',
    icon: 'SiPostman',
  },
];

// ============================================
// CATEGORÍAS DE HABILIDADES
// ============================================

export const skillCategories = [
  { id: 'frontend', label: 'Frontend', color: 'from-blue-500 to-cyan-500' },
  { id: 'backend', label: 'Backend', color: 'from-green-500 to-emerald-500' },
  { id: 'database', label: 'Base de Datos', color: 'from-purple-500 to-pink-500' },
  { id: 'devops', label: 'DevOps', color: 'from-orange-500 to-amber-500' },
  { id: 'tools', label: 'Herramientas', color: 'from-red-500 to-rose-500' },
];

// Helper para obtener skills por categoría
export const getSkillsByCategory = (category: string): Skill[] => {
  return skills.filter((skill) => skill.category === category);
};
