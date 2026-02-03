// ============================================
// TIPOS PRINCIPALES DEL PORTAFOLIO
// ============================================

// Información personal
export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone?: string;
  location: string;
  bio: string;
  linkedinBio: string;
  avatar?: string;
  resume?: string;
}

// Redes sociales
export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

// Habilidades técnicas
export interface Skill {
  id: string;
  name: string;
  level: number; // 0-100
  category: SkillCategory;
  icon?: string;
}

export type SkillCategory = 
  | 'frontend'
  | 'backend'
  | 'database'
  | 'devops'
  | 'tools'
  | 'languages';

// Proyectos
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  category: ProjectCategory;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  date: string;
}

export type ProjectCategory = 
  | 'web'
  | 'mobile'
  | 'fullstack'
  | 'api'
  | 'other';

// Experiencia laboral
export interface Experience {
  id: string;
  company: string;
  position: string;
  description: string;
  responsibilities: string[];
  startDate: string;
  endDate?: string; // undefined = presente
  location: string;
  technologies: string[];
  logo?: string;
}

// Educación
export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate?: string;
  description?: string;
  logo?: string;
}

// Certificaciones
export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expiryDate?: string;
  credentialUrl?: string;
  logo?: string;
}

// Navegación
export interface NavItem {
  id: string;
  label: string;
  href: string;
}

// Formulario de contacto
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Testimonios (opcional)
export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar?: string;
}

// Servicios que ofreces (opcional)
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

// ============================================
// TIPOS DE UTILIDAD
// ============================================

export interface SectionProps {
  id?: string;
  className?: string;
}

export interface AnimationConfig {
  initial: object;
  animate: object;
  transition: object;
}
