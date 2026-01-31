import { Service, Testimonial } from '@/types';

// ============================================
// SERVICIOS QUE OFRECES
// ============================================

export const services: Service[] = [
  {
    id: 'service-1',
    title: 'Desarrollo Web',
    description:
      'Creo sitios web modernos, rápidos y responsivos utilizando las últimas tecnologías como React, Next.js y Tailwind CSS.',
    icon: 'HiCode',
  },
  {
    id: 'service-2',
    title: 'Desarrollo Backend',
    description:
      'Diseño e implemento APIs robustas y escalables con Node.js, Express, y bases de datos SQL/NoSQL.',
    icon: 'HiServer',
  },
  {
    id: 'service-3',
    title: 'Aplicaciones Full Stack',
    description:
      'Desarrollo aplicaciones completas de principio a fin, desde el diseño hasta el despliegue en producción.',
    icon: 'HiCube',
  },
  {
    id: 'service-4',
    title: 'Consultoría Técnica',
    description:
      'Asesoro en arquitectura de software, mejores prácticas y selección de tecnologías para tu proyecto.',
    icon: 'HiLightBulb',
  },
  {
    id: 'service-5',
    title: 'Optimización & Performance',
    description:
      'Mejoro el rendimiento de aplicaciones existentes, optimizando tiempos de carga y experiencia de usuario.',
    icon: 'HiChartBar',
  },
  {
    id: 'service-6',
    title: 'Mantenimiento & Soporte',
    description:
      'Ofrezco mantenimiento continuo, actualizaciones de seguridad y soporte técnico para tus aplicaciones.',
    icon: 'HiWrench',
  },
];

// ============================================
// TESTIMONIOS DE CLIENTES
// ============================================

export const testimonials: Testimonial[] = [
  {
    id: 'testimonial-1',
    name: 'María García',
    position: 'CEO',
    company: 'TechStartup',
    content:
      'Excelente profesional. Entregó el proyecto antes del plazo y superó nuestras expectativas. La comunicación fue clara durante todo el proceso.',
    avatar: '/images/testimonials/maria.jpg',
  },
  {
    id: 'testimonial-2',
    name: 'Carlos Rodríguez',
    position: 'CTO',
    company: 'Digital Agency',
    content:
      'Su conocimiento técnico es impresionante. Nos ayudó a resolver problemas complejos de arquitectura y mejoró significativamente el rendimiento de nuestra app.',
    avatar: '/images/testimonials/carlos.jpg',
  },
  {
    id: 'testimonial-3',
    name: 'Ana Martínez',
    position: 'Product Manager',
    company: 'E-commerce Plus',
    content:
      'Trabajar con él fue una experiencia increíble. Muy proactivo, siempre sugiriendo mejoras y comprometido con la calidad del producto final.',
    avatar: '/images/testimonials/ana.jpg',
  },
];
