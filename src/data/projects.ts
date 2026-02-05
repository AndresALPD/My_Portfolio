import { Project } from '@/types';

// ============================================
// PROYECTOS DEL PORTAFOLIO
// Agrega tus proyectos reales aquí
// ============================================

export const projects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Platform',
    description:
      'Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración.',
    longDescription: `Una solución completa de e-commerce construida desde cero. 
    Incluye gestión de productos, carrito de compras persistente, 
    integración con Stripe para pagos, y un panel de administración 
    para gestionar pedidos e inventario.`,
    image: '/images/projects/ecommerce.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Stripe'],
    liveUrl: 'https://mi-ecommerce.com',
    githubUrl: 'https://github.com/usuario/ecommerce',
    featured: true,
    date: '2025-01',
  },
  {
    id: 'project-2',
    title: 'Task Management App',
    description:
      'Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones.',
    longDescription: `App de productividad inspirada en Trello con características 
    avanzadas como colaboración en tiempo real usando WebSockets, 
    drag & drop intuitivo, y sistema de notificaciones push.`,
    image: '/images/projects/taskapp.jpg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Redux'],
    liveUrl: 'https://mi-taskapp.com',
    githubUrl: 'https://github.com/usuario/taskapp',
    featured: true,
    date: '2024-10',
  },
  {
    id: 'project-3',
    title: 'Weather Dashboard',
    description:
      'Dashboard meteorológico con datos en tiempo real, pronósticos y visualizaciones interactivas.',
    longDescription: `Dashboard que consume múltiples APIs meteorológicas 
    para mostrar datos en tiempo real, pronósticos de 7 días, 
    y visualizaciones con gráficos interactivos.`,
    image: '/images/projects/weather.jpg',
    technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
    liveUrl: 'https://mi-weather.com',
    githubUrl: 'https://github.com/usuario/weather',
    featured: false,
    date: '2024-08',
  },
  {
    id: 'project-4',
    title: 'REST API Blog',
    description:
      'API RESTful completa para un sistema de blog con autenticación JWT y documentación Swagger.',
    longDescription: `API backend robusta con endpoints para gestión de posts, 
    usuarios, comentarios y categorías. Implementa autenticación JWT, 
    rate limiting, y documentación automática con Swagger.`,
    image: '/images/projects/api.jpg',
    technologies: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Swagger'],
    githubUrl: 'https://github.com/usuario/blog-api',
    featured: false,
    date: '2024-06',
  },
  {
    id: 'project-5',
    title: 'Fitness Tracker Mobile',
    description:
      'Aplicación móvil para seguimiento de entrenamientos, nutrición y progreso físico.',
    longDescription: `App móvil cross-platform para fitness enthusiasts. 
    Incluye tracking de ejercicios, contador de calorías, 
    gráficos de progreso y sincronización con wearables.`,
    image: '/images/projects/fitness.jpg',
    technologies: ['React Native', 'Expo', 'Firebase', 'Redux'],
    liveUrl: 'https://play.google.com/store/apps/details?id=fitness',
    githubUrl: 'https://github.com/usuario/fitness',
    featured: true,
    date: '2024-04',
  },
  {
    id: 'project-6',
    title: 'Portfolio Personal',
    description:
      'Este mismo portafolio - diseño moderno con animaciones fluidas y rendimiento optimizado.',
    longDescription: `Portafolio personal construido con las últimas tecnologías. 
    Incluye animaciones con Framer Motion, formulario de contacto 
    funcional, y optimización SEO completa.`,
    image: '/images/projects/portfolio.jpg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://miportafolio.com',
    githubUrl: 'https://github.com/usuario/portfolio',
    featured: false,
    date: '2025-01',
  },
];

// Helper para obtener proyectos destacados
export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured);
};
