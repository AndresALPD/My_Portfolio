import { PersonalInfo, SocialLink, NavItem } from '@/types';

// ============================================
// INFORMACIÓN PERSONAL
// Modifica estos datos con tu información real
// ============================================

export const personalInfo: PersonalInfo = {
  name: 'Andrés Alpízar',
  title: 'Desarrollador de Software',
  subtitle: 'Interesado en oportunidades laborales presenciales, híbridas o remotas',
  email: 'andresalpizar03@gmail.com',
  phone: '+506 8477 5731',
  location: 'Heredia, Costa Rica',
  bio: `Desarrollador de Software · Backend / Full Stack | Ingeniero en Sistemas. Especialista en .NET y Java para el desarrollo de APIs REST y aplicaciones bajo arquitectura MVC. Con experiencia práctica en metodologías ágiles, control de versiones y buenas prácticas de desarrollo. Enfocado en aportar valor técnico y evolucionar profesionalmente en entornos desafiantes.`,
  linkedinBio: `Ingeniero en Sistemas (en proceso de titulación) y Desarrollador de Software.

Especializado en la creación de soluciones robustas con .NET y Java. Cuento con experiencia sólida desarrollando APIs REST, arquitecturas en capas y gestión de bases de datos relacionales. Mi enfoque principal es construir software escalable, integrando lógica de negocio eficiente y patrones de diseño como MVC.

Apasionado por las buenas prácticas y el aprendizaje continuo, busco mi primera oportunidad profesional para aportar valor técnico y seguir evolucionando en entornos de alto nivel.`,
  avatar: '/images/Avatar.jpg',
  resume: '/documents/cv.pdf',
};

// ============================================
// REDES SOCIALES
// ============================================

export const socialLinks: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/andres-alpd',
    icon: 'FaLinkedin',
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/AndresALPD',
    icon: 'FaGithub',
  },
  {
    id: 'email',
    name: 'Email',
    url: 'mailto:andresalpizar03@gmail.com',
    icon: 'HiMail',
  },
  {
    id: 'telegram',
    name: 'Telegram',
    url: 'https://t.me/andres_alpd',
    icon: 'FaTelegram',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/50684775731',
    icon: 'FaWhatsapp',
  },
  {
    id: 'phone',
    name: 'Teléfono',
    url: 'tel:+50684775731',
    icon: 'FaPhone',
  },
];

// ============================================
// NAVEGACIÓN
// ============================================

export const navItems: NavItem[] = [
  { id: 'home', label: 'Inicio', href: '#home' },
  { id: 'about', label: 'Sobre Mí', href: '#about' },
  { id: 'skills', label: 'Habilidades', href: '#skills' },
  { id: 'projects', label: 'Proyectos', href: '#projects' },
  { id: 'experience', label: 'Educación', href: '#experience' },
  { id: 'contact', label: 'Contacto', href: '#contact' },
];
