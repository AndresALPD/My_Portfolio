import { PersonalInfo, SocialLink, NavItem } from '@/types';

// ============================================
// INFORMACIÓN PERSONAL
// Modifica estos datos con tu información real
// ============================================

export const personalInfo: PersonalInfo = {
  name: 'Tu Nombre',
  title: 'Desarrollador Full Stack',
  subtitle: 'Creando experiencias digitales únicas',
  email: 'tu.email@ejemplo.com',
  phone: '+1 234 567 890',
  location: 'Ciudad, País',
  bio: `Soy un desarrollador Full Stack apasionado por crear aplicaciones web 
modernas y escalables. Con más de X años de experiencia, me especializo en 
tecnologías como React, Node.js y TypeScript. Me encanta resolver problemas 
complejos y transformar ideas en productos digitales funcionales.`,
  avatar: '/images/avatar.jpg',
  resume: '/documents/cv.pdf',
};

// ============================================
// REDES SOCIALES
// ============================================

export const socialLinks: SocialLink[] = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/tuusuario',
    icon: 'FaGithub',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/tuusuario',
    icon: 'FaLinkedin',
  },
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/tuusuario',
    icon: 'FaTwitter',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com/tuusuario',
    icon: 'FaInstagram',
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
  { id: 'experience', label: 'Experiencia', href: '#experience' },
  { id: 'contact', label: 'Contacto', href: '#contact' },
];
