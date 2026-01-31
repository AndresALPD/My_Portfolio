// ============================================
// CONSTANTES GLOBALES DEL PORTAFOLIO
// ============================================

// Metadatos del sitio
export const SITE_CONFIG = {
  name: 'Mi Portafolio',
  description: 'Portafolio de desarrollador Full Stack - Creando experiencias digitales únicas',
  url: 'https://miportafolio.com',
  ogImage: '/images/og-image.jpg',
  author: 'Tu Nombre',
  twitterHandle: '@tuusuario',
};

// Configuración de animaciones (Framer Motion)
export const ANIMATION_CONFIG = {
  // Duración por defecto
  duration: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.6,
  },
  // Easing curves
  ease: {
    smooth: [0.43, 0.13, 0.23, 0.96],
    bounce: [0.68, -0.55, 0.265, 1.55],
  },
};

// Variantes de animación reutilizables
export const FADE_IN_UP = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export const FADE_IN = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4 },
};

export const SCALE_IN = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.4 },
};

export const SLIDE_IN_LEFT = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
};

export const SLIDE_IN_RIGHT = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.5 },
};

// Stagger para listas
export const STAGGER_CONTAINER = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Colores del tema (complementan Tailwind)
export const THEME_COLORS = {
  primary: {
    light: '#3B82F6', // blue-500
    dark: '#2563EB', // blue-600
  },
  secondary: {
    light: '#8B5CF6', // violet-500
    dark: '#7C3AED', // violet-600
  },
  accent: {
    light: '#06B6D4', // cyan-500
    dark: '#0891B2', // cyan-600
  },
};

// Breakpoints (coinciden con Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Configuración de formulario de contacto
export const CONTACT_CONFIG = {
  emailServiceId: 'your_service_id',
  emailTemplateId: 'your_template_id',
  emailPublicKey: 'your_public_key',
  // O si usas un endpoint propio:
  apiEndpoint: '/api/contact',
};

// Límites y validaciones
export const VALIDATION = {
  name: {
    minLength: 2,
    maxLength: 50,
  },
  email: {
    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },
  message: {
    minLength: 10,
    maxLength: 1000,
  },
  subject: {
    minLength: 5,
    maxLength: 100,
  },
};
