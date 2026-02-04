import { Skill } from '@/types';

// ============================================
// HABILIDADES TÉCNICAS
// ============================================

export const skills: Skill[] = [
  // Lenguajes de Programación
  {
    id: 'java',
    name: 'Java',
    category: 'languages',
    icon: 'FaJava',
  },
  {
    id: 'csharp',
    name: 'C#',
    category: 'languages',
    icon: 'SiCsharp',
  },
  {
    id: 'python',
    name: 'Python',
    category: 'languages',
    icon: 'FaPython',
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'languages',
    icon: 'SiTypescript',
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'languages',
    icon: 'SiMysql',
  },
  {
    id: 'php',
    name: 'PHP',
    category: 'languages',
    icon: 'FaPhp',
  },

  // Backend
  {
    id: 'spring-boot',
    name: 'Spring Boot',
    category: 'backend',
    icon: 'SiSpring',
  },
  {
    id: 'dotnet',
    name: '.NET',
    category: 'backend',
    icon: 'SiDotnet',
  },
  {
    id: 'aspnet-core',
    name: 'ASP.NET Core',
    category: 'backend',
    icon: 'SiDotnet',
  },
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    icon: 'FaNodeJs',
  },
  {
    id: 'restful-apis',
    name: 'RESTful APIs',
    category: 'backend',
    icon: 'SiPostman',
  },
  {
    id: 'mvc',
    name: 'MVC',
    category: 'backend',
    icon: 'FaCode',
  },

  // Frontend
  {
    id: 'html5',
    name: 'HTML5',
    category: 'frontend',
    icon: 'FaHtml5',
  },
  {
    id: 'css3',
    name: 'CSS3',
    category: 'frontend',
    icon: 'FaCss3Alt',
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frontend',
    icon: 'SiJavascript',
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    icon: 'FaReact',
  },
  {
    id: 'bootstrap',
    name: 'Bootstrap',
    category: 'frontend',
    icon: 'FaBootstrap',
  },

  // Bases de datos
  {
    id: 'sql-server',
    name: 'SQL Server',
    category: 'database',
    icon: 'SiMicrosoftsqlserver',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'database',
    icon: 'SiPostgresql',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'database',
    icon: 'SiMysql',
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
    id: 'postman',
    name: 'Postman',
    category: 'tools',
    icon: 'SiPostman',
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'tools',
    icon: 'SiFirebase',
  },
  {
    id: 'scrum',
    name: 'Metodologías Ágiles (Scrum)',
    category: 'tools',
    icon: 'FaTasks',
  },
  {
    id: 'documentation',
    name: 'Documentación técnica',
    category: 'tools',
    icon: 'FaBook',
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
  { id: 'tools', label: 'Herramientas y Prácticas', color: 'from-red-500 to-rose-500' },
];

// Helper para obtener skills por categoría
export const getSkillsByCategory = (category: string): Skill[] => {
  return skills.filter((skill) => skill.category === category);
};
