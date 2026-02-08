import { Project } from '@/types';

// ============================================
// PROYECTOS DEL PORTAFOLIO
// ============================================

export const projects: Project[] = [
  {
    id: 'kindercare',
    title: 'KinderCare',
    description:
      'Sistema de gestión para jardines infantiles con control de asistencia, comunicación con padres y gestión de actividades.',
    longDescription: `Plataforma integral para la gestión de jardines infantiles. 
    Incluye módulos de registro de niños, control de asistencia, 
    comunicación con padres y gestión de actividades educativas.`,
    image: '/images/Kindercare.jpg',
    technologies: ['C#', 'ASP.NET Core', 'Entity Framework', 'JWT', 'HTML/CSS', 'JavaScript', 'Bootstrap', 'SQL Server', 'Docker'],
    liveUrl: 'https://kinder-care.onrender.com/',
    githubUrl: 'https://github.com/auditore22/kinder-care',
    manualUrl: 'https://www.canva.com/design/DAGg6MBOV-Y/vQkv9DQgfTkw7hZZ2Pxw_Q/edit?utm_content=DAGg6MBOV-Y&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton',
    featured: true,
    date: '2025-05',
  },
  {
    id: 'flightontime',
    title: 'FlightOnTime',
    description:
      'Aplicación web que permite predecir retrasos de vuelos de forma intuitiva, apoyándose en inteligencia artificial y datos historicos.',
    longDescription: `Sistema de prediccion de vuelos que permite a los usuarios 
    predecir y ver el resultado de sus vuelos y gestionar sus itinerarios de viaje.`,
    image: '/images/FlightOnTime.jpg',
    technologies: ['Java', 'Python', 'Spring Boot', 'FastAPI', 'HTML/CSS', 'JavaScript', 'MySQL', 'OCI', 'Swagger'],
    liveUrl: 'https://www.youtube.com/watch?v=giZTLpvU9Go',
    githubUrl: 'https://github.com/AndresALPD/FlightOnTime',
    featured: true,
    date: '2026-02',
  },
  {
    id: 'trello',
    title: 'Trello',
    description:
      'Aplicación de gestión de tareas que permite organizar proyectos mediante tableros, listas y tarjetas arrastrables.',
    longDescription: `Réplica funcional de Trello con características como 
    tableros personalizables, listas de tareas, tarjetas con 
    descripciones y sistema de drag & drop.`,
    image: '/images/Trello.jpg',
    technologies: ['C#', 'ASP.NET Core', 'Entity Framework', 'JWT', 'HTML/CSS', 'JavaScript', 'SQL Server', 'Swagger'],
    githubUrl: 'https://github.com/AndresALPD/Trello',
    featured: false,
    date: '2025-09',
  },
  {
    id: 'kindernosql',
    title: 'KinderNoSQL',
    description:
      'Versión NoSQL del sistema KinderCare utilizando bases de datos no relacionales para mayor escalabilidad.',
    longDescription: `Implementación alternativa del sistema KinderCare 
    utilizando MongoDB para demostrar el manejo de bases de datos 
    NoSQL y arquitecturas escalables.`,
    image: '/images/KinderNoSQL.jpg',
    technologies: ['C#', 'ASP.NET Core', 'Entity Framework', 'HTML/CSS', 'JavaScript', 'Bootstrap', 'MongoDB'],
    githubUrl: 'https://github.com/OscarNZ13/Kinder_La_Granja-NoSQL',
    featured: false,
    date: '2025-05',
  },
  {
    id: 'tiendabazar',
    title: 'TiendaBazar',
    description:
      'E-commerce para tienda de bazar con catálogo de productos, carrito de compras y gestión de inventario.',
    longDescription: `Plataforma de comercio electrónico completa con 
    catálogo de productos, sistema de carrito, gestión de pedidos 
    y panel de administración de inventario.`,
    image: '/images/TiendaBazar.jpg',
    technologies: ['C#', 'ASP.NET Core', 'Entity Framework', 'HTML/CSS', 'JavaScript', 'Bootstrap', 'SQL Server'],
    githubUrl: 'https://github.com/AndresALPD/TiendaBazar',
    featured: false,
    date: '2024-09',
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    description:
      'Este mismo portafolio con diseño moderno con animaciones fluidas, responsive y rendimiento optimizado.',
    longDescription: `Portafolio personal construido con las últimas tecnologías. 
    Incluye animaciones con Framer Motion, diseño responsive 
    y optimización SEO completa.`,
    image: '/images/Portfolio.jpg',
    technologies: ['TypeScript', 'Node.js', 'Next.js', 'React', 'Tailwind CSS'],
    liveUrl: 'https://andresalpizar.dev',
    githubUrl: 'https://github.com/AndresALPD/Portfolio',
    featured: false,
    date: '2026-03',
  },
  {
    id: 'xclon',
    title: 'XClon',
    description:
      'Clon de la red social X (Twitter) con funcionalidades de posts, likes, comentarios y seguimiento de usuarios.',
    longDescription: `Réplica de la red social X con características como 
    publicación de posts, sistema de likes, comentarios, 
    seguimiento de usuarios y feed personalizado.`,
    image: '/images/XClon.jpg',
    technologies: ['PHP', 'HTML/CSS', 'JavaScript', 'MySQL'],
    githubUrl: 'https://github.com/OscarNZ13/X_Clon',
    featured: false,
    date: '2024-05',
  },
  {
    id: 'agenteia',
    title: 'AgenteIA',
    description:
      'Agente de inteligencia artificial con procesamiento de lenguaje natural y respuestas automatizadas dentro de la consola.',
    longDescription: `Proyecto de IA que implementa un agente conversacional 
    utilizando modelos de lenguaje para procesar consultas 
    y generar respuestas contextuales.`,
    image: '/images/AgenteIA.jpg',
    technologies: ['Python', 'OpenAI API'],
    githubUrl: 'https://github.com/AndresALPD/Asistente-de-IA',
    featured: false,
    date: '2026-01',
  },
];

// Helper para obtener proyectos destacados
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};
