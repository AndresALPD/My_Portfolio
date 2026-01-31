import { Experience, Education, Certification } from '@/types';

// ============================================
// EXPERIENCIA LABORAL
// Agrega tu experiencia real aquí
// ============================================

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    company: 'Tech Company Inc.',
    position: 'Senior Full Stack Developer',
    description:
      'Lideré el desarrollo de aplicaciones web escalables y mentoreé a desarrolladores junior.',
    responsibilities: [
      'Diseño e implementación de arquitecturas de microservicios',
      'Desarrollo de APIs RESTful y GraphQL',
      'Mentoría y code review del equipo de desarrollo',
      'Optimización de rendimiento y seguridad de aplicaciones',
      'Implementación de CI/CD pipelines',
    ],
    startDate: '2023-01',
    endDate: undefined, // Trabajo actual
    location: 'Ciudad, País (Remoto)',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Docker'],
    logo: '/images/companies/tech-company.png',
  },
  {
    id: 'exp-2',
    company: 'Startup Digital',
    position: 'Full Stack Developer',
    description:
      'Desarrollé features clave para la plataforma principal de la empresa.',
    responsibilities: [
      'Desarrollo de nuevas funcionalidades frontend y backend',
      'Integración con APIs de terceros',
      'Mantenimiento y mejora de código legacy',
      'Participación en decisiones técnicas del producto',
    ],
    startDate: '2021-06',
    endDate: '2022-12',
    location: 'Ciudad, País',
    technologies: ['Vue.js', 'Express', 'MongoDB', 'Redis', 'Git'],
    logo: '/images/companies/startup.png',
  },
  {
    id: 'exp-3',
    company: 'Agencia Web Creativa',
    position: 'Frontend Developer',
    description:
      'Creé interfaces de usuario atractivas y responsivas para diversos clientes.',
    responsibilities: [
      'Desarrollo de sitios web responsivos',
      'Implementación de diseños de UI/UX',
      'Optimización de rendimiento web',
      'Colaboración directa con diseñadores y clientes',
    ],
    startDate: '2019-03',
    endDate: '2021-05',
    location: 'Ciudad, País',
    technologies: ['React', 'JavaScript', 'SCSS', 'WordPress', 'Figma'],
    logo: '/images/companies/agency.png',
  },
];

// ============================================
// EDUCACIÓN
// ============================================

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'Universidad Tecnológica',
    degree: 'Licenciatura',
    field: 'Ingeniería en Sistemas Computacionales',
    startDate: '2015-08',
    endDate: '2019-06',
    description: 'Graduado con honores. Especialización en desarrollo de software.',
    logo: '/images/education/university.png',
  },
  {
    id: 'edu-2',
    institution: 'Platzi',
    degree: 'Programa Completo',
    field: 'Desarrollo Web Full Stack',
    startDate: '2020-01',
    endDate: '2021-06',
    description: 'Más de 50 cursos completados en desarrollo web moderno.',
    logo: '/images/education/platzi.png',
  },
];

// ============================================
// CERTIFICACIONES
// ============================================

export const certifications: Certification[] = [
  {
    id: 'cert-1',
    name: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    date: '2024-03',
    expiryDate: '2027-03',
    credentialUrl: 'https://aws.amazon.com/verification',
    logo: '/images/certs/aws.png',
  },
  {
    id: 'cert-2',
    name: 'Meta Front-End Developer',
    issuer: 'Meta (Coursera)',
    date: '2023-08',
    credentialUrl: 'https://coursera.org/verify/certificate',
    logo: '/images/certs/meta.png',
  },
  {
    id: 'cert-3',
    name: 'MongoDB Certified Developer',
    issuer: 'MongoDB University',
    date: '2023-05',
    credentialUrl: 'https://university.mongodb.com/certification',
    logo: '/images/certs/mongodb.png',
  },
  {
    id: 'cert-4',
    name: 'Google Cloud Professional Developer',
    issuer: 'Google Cloud',
    date: '2024-01',
    expiryDate: '2026-01',
    credentialUrl: 'https://google.com/cloud/certification',
    logo: '/images/certs/gcp.png',
  },
];
