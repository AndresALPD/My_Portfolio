'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('es');

  // Cargar idioma guardado al montar
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'es' || savedLang === 'en')) {
      setLanguageState(savedLang);
    }
  }, []);

  // Guardar idioma cuando cambie
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
  };

  // Función de traducción simple
  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

// ============================================
// TRADUCCIONES COMPLETAS
// ============================================

const translations: Record<Language, Record<string, string>> = {
  es: {
    // ── Navbar ──
    'nav.home': 'Inicio',
    'nav.about': 'Sobre Mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.experience': 'Educación',
    'nav.contact': 'Contacto',
    'nav.fullscreen': 'Pantalla completa',
    'nav.exitFullscreen': 'Salir de pantalla completa',
    'nav.lightMode': 'Modo claro',
    'nav.darkMode': 'Modo oscuro',

    // ── Hero ──
    'hero.badge': 'Disponible para nuevos proyectos',
    'hero.greeting': 'Hola, soy ',
    'hero.typewriter.1': 'Desarrollador Backend',
    'hero.typewriter.2': 'Creador de experiencias digitales',
    'hero.typewriter.3': 'Apasionado por la tecnología',
    'hero.typewriter.4': 'Resolviendo problemas con código',
    'hero.cta.projects': 'Ver Proyectos',
    'hero.cta.cv': 'Descargar CV',
    'hero.findme': 'Encuéntrame en:',
    'hero.scroll': 'Scroll',
    'hero.bio': 'Desarrollador Backend enfocado en .NET y Java | Ingeniero en Sistemas. Construyo APIs REST y aplicaciones bajo arquitectura en capas utilizando ASP.NET Core y Spring Boot. Experiencia en integración frontend-backend, seguridad, control de versiones con Git y trabajo bajo metodologías ágiles, con capacidad para desempeñarme en entornos Full Stack.',

    // ── About ──
    'about.badge': 'Conóceme',
    'about.title.1': 'Sobre',
    'about.title.2': 'Mí',
    'about.subtitle': 'Desarrollador apasionado por crear soluciones digitales innovadoras',
    'about.englishLevel': 'Nivel de Inglés',
    'about.age': 'Años de Edad',
    'about.linkedinBio': 'Soy Ingeniero en Sistemas con enfoque en desarrollo backend utilizando ASP.NET Core y Spring Boot. He desarrollado APIs REST aplicando arquitectura en capas y patrón MVC, gestionando bases de datos como SQL Server e implementando buenas prácticas de seguridad como hashing con BCrypt. He participado en el desarrollo de un sistema de gestión para un cliente real y en un hackathon internacional de Oracle, integrando backend con modelos de Machine Learning en un entorno ágil. También cuento con experiencia en integración frontend-backend, lo que me permite desempeñarme en entornos Full Stack cuando el proyecto lo requiere.',
    'about.cta.cv': 'Descargar CV',
    'about.cta.contact': 'Contáctame',
    'about.spec.frontend': 'Desarrollo Frontend',
    'about.spec.frontend.desc': 'Next.js, React, Tailwind CSS, Bootstrap, HTML & CSS',
    'about.spec.backend': 'Desarrollo Backend',
    'about.spec.backend.desc': 'ASP.NET Core, Spring Boot, Node.js, FastAPI',
    'about.spec.cloud': 'Nube y DevOps',
    'about.spec.cloud.desc': 'OCI, Docker, Firebase, Git, GitHub',
    'about.spec.database': 'Bases de Datos',
    'about.spec.database.desc': 'SQL Server, MySQL, PostgreSQL, MongoDB',
    'about.role': 'Desarrollador Backend',
    'about.stat.1.label': 'Años de Experiencia Académica',
    'about.stat.2.label': 'Proyectos Completados',
    'about.stat.3.label': 'Certificados Relevantes',
    'about.stat.4.label': 'Tecnologías Dominadas',

    // ── Skills ──
    'skills.badge': 'Mis Herramientas',
    'skills.title.1': 'Habilidades',
    'skills.title.2': 'Tecnológicas',
    'skills.subtitle': 'Stack tecnológico que utilizo para diseñar y desarrollar soluciones escalables y mantenibles',
    'skills.stat.suffix': ' tecnologías dominadas',
    'skills.cat.languages': 'Lenguajes de Programación',
    'skills.cat.backend': 'Backend',
    'skills.cat.frontend': 'Frontend',
    'skills.cat.database': 'Bases de Datos',
    'skills.cat.tools': 'Herramientas',

    // ── Projects ──
    'projects.badge': 'Mi Trabajo',
    'projects.title.1': 'Proyectos',
    'projects.title.2': 'Destacados',
    'projects.subtitle': 'Una selección de proyectos que demuestran mis habilidades y experiencia en desarrollo',
    'projects.featured': 'Destacado',
    'projects.github.cta': 'Ver más proyectos en GitHub',
    'projects.stat.suffix': ' proyectos en el portafolio',
    'projects.aria.github': 'Ver código en GitHub',
    'projects.aria.live': 'Ver proyecto en vivo',
    'projects.aria.video': 'Ver video demo',
    'projects.aria.manual': 'Ver manual de usuario',

    // Project descriptions
    'project.kindercare.desc': 'Sistema de gestión para jardines infantiles con control de asistencia, comunicación con padres y gestión de actividades.',
    'project.flightontime.desc': 'Aplicación web que permite predecir retrasos de vuelos de forma intuitiva, apoyándose en inteligencia artificial y datos historicos.',
    'project.trello.desc': 'Aplicación de gestión de tareas que permite organizar proyectos mediante tableros, listas y tarjetas arrastrables.',
    'project.kindernosql.desc': 'Versión NoSQL del sistema KinderCare utilizando bases de datos no relacionales para mayor escalabilidad.',
    'project.tiendabazar.desc': 'E-commerce para tienda de bazar con catálogo de productos, carrito de compras y gestión de inventario.',
    'project.xclon.desc': 'Clon de la red social X (Twitter) con funcionalidades de posts, likes, comentarios y seguimiento de usuarios.',
    'project.portfolio.desc': 'Este mismo portafolio con diseño moderno con animaciones fluidas, responsive y rendimiento optimizado.',
    'project.agenteia.desc': 'Agente de inteligencia artificial con procesamiento de lenguaje natural y respuestas automatizadas dentro de la consola.',

    // ── Experience ──
    'experience.badge': 'Mi Trayectoria',
    'experience.title.1': 'Educación y',
    'experience.title.2': 'Certificaciones',
    'experience.subtitle': 'Mi formación académica y certificaciones que respaldan mis conocimientos',
    'experience.education': 'Educación',
    'experience.certifications': 'Certificaciones',
    'experience.present': 'Presente',
    'experience.stat.suffix': ' certificaciones obtenidas',
    'experience.degree': 'Bachillerato',
    'experience.field': 'Ingeniería en Sistemas de Computación',
    'experience.edu.desc': 'Formación integral en desarrollo de software, bases de datos, redes, arquitectura de sistemas y metodologías ágiles.',
    'experience.in': 'en',
    'experience.aria.credential': 'Ver credencial de',

    // ── Contact ──
    'contact.badge': 'Hablemos',
    'contact.title.1': 'Ponte en',
    'contact.title.2': 'Contacto',
    'contact.subtitle': '¿Tienes un proyecto en mente o una oportunidad laboral? No dudes en escribirme',
    'contact.info.email': 'Correo Electrónico',
    'contact.info.phone': 'Teléfono',
    'contact.info.location': 'Ubicación',
    'contact.info.timezone': 'Zona Horaria',
    'contact.social.title': 'Encuéntrame en',
    'contact.available.title': 'Disponible para oportunidades',
    'contact.available.desc': 'Actualmente abierto a posiciones presenciales, híbridas o remotas.',
    'contact.form.header': 'Envíame un mensaje',
    'contact.form.header.sub': 'Respondo lo antes posible',
    'contact.form.name.label': 'Nombre',
    'contact.form.name.placeholder': 'Tu nombre',
    'contact.form.email.label': 'Correo Electrónico',
    'contact.form.email.placeholder': 'tu@correo.com',
    'contact.form.subject.label': 'Asunto',
    'contact.form.subject.placeholder': '¿De qué quieres hablar?',
    'contact.form.message.label': 'Mensaje',
    'contact.form.message.placeholder': 'Cuéntame sobre tu proyecto u oportunidad...',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.form.success': '✓ ¡Mensaje enviado correctamente! Te responderé lo antes posible.',
    'contact.form.error': '✕ Hubo un error. Intenta contactarme directamente por correo.',
    'contact.validation.name': 'El nombre debe tener al menos 2 caracteres',
    'contact.validation.email': 'Ingresa un correo electrónico válido',
    'contact.validation.subject': 'El asunto debe tener al menos 5 caracteres',
    'contact.validation.message': 'El mensaje debe tener al menos 10 caracteres',

    // ── Footer ──
    'footer.role': 'Desarrollador de Software',
    'footer.description': 'apasionado por crear experiencias digitales únicas y soluciones tecnológicas innovadoras.',
    'footer.quicklinks': 'Enlaces Rápidos',
    'footer.social.title': 'Sígueme o hablemos!',
    'footer.cta.question': '¿Tienes un proyecto en mente?',
    'footer.cta.button': 'Hablemos',
    'footer.rights': 'Todos los derechos reservados.',
    'footer.madewith': 'Hecho con',
    'footer.using': 'usando Next.js & Tailwind',
  },

  en: {
    // ── Navbar ──
    'nav.home': 'Home',
    'nav.about': 'About Me',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.experience': 'Education',
    'nav.contact': 'Contact',
    'nav.fullscreen': 'Fullscreen',
    'nav.exitFullscreen': 'Exit fullscreen',
    'nav.lightMode': 'Light mode',
    'nav.darkMode': 'Dark mode',

    // ── Hero ──
    'hero.badge': 'Available for new projects',
    'hero.greeting': 'Hi, I\'m ',
    'hero.typewriter.1': 'Backend Developer',
    'hero.typewriter.2': 'Digital experience creator',
    'hero.typewriter.3': 'Passionate about technology',
    'hero.typewriter.4': 'Solving problems with code',
    'hero.cta.projects': 'View Projects',
    'hero.cta.cv': 'Download CV',
    'hero.findme': 'Find me on:',
    'hero.scroll': 'Scroll',
    'hero.bio': 'Backend developer focused on .NET and Java | Systems Engineer. I build REST APIs and applications under layered architecture using ASP.NET Core and Spring Boot. Experience in frontend-backend integration, security, version control with Git, and working under agile methodologies, with the ability to perform in Full Stack environments.',

    // ── About ──
    'about.badge': 'Get to Know Me',
    'about.title.1': 'About',
    'about.title.2': 'Me',
    'about.subtitle': 'Developer passionate about creating innovative digital solutions',
    'about.englishLevel': 'English Level',
    'about.age': 'Years Old',
    'about.linkedinBio': 'I am a Systems Engineer specializing in backend development using ASP.NET Core and Spring Boot. I have developed REST APIs applying layered architecture and MVC patterns, managing databases such as SQL Server, and implementing security best practices such as hashing with BCrypt. I have participated in the development of a management system for a real client and in an international Oracle hackathon, integrating backend with Machine Learning models in an agile environment. I also have experience in frontend-backend integration, which allows me to work in full stack environments when the project requires it.',
    'about.cta.cv': 'Download CV',
    'about.cta.contact': 'Contact Me',
    'about.spec.frontend': 'Frontend Development',
    'about.spec.frontend.desc': 'Next.js, React, Tailwind CSS, Bootstrap, HTML & CSS',
    'about.spec.backend': 'Backend Development',
    'about.spec.backend.desc': 'ASP.NET Core, Spring Boot, Node.js, FastAPI',
    'about.spec.cloud': 'Cloud & DevOps',
    'about.spec.cloud.desc': 'OCI, Docker, Firebase, Git, GitHub',
    'about.spec.database': 'Databases',
    'about.spec.database.desc': 'SQL Server, MySQL, PostgreSQL, MongoDB',
    'about.role': 'Backend Developer',
    'about.stat.1.label': 'Years of Academic Experience',
    'about.stat.2.label': 'Completed Projects',
    'about.stat.3.label': 'Relevant Certifications',
    'about.stat.4.label': 'Technologies Mastered',

    // ── Skills ──
    'skills.badge': 'My Toolbox',
    'skills.title.1': 'Technical',
    'skills.title.2': 'Skills',
    'skills.subtitle': 'The tech stack I use to design and develop scalable and maintainable solutions',
    'skills.stat.suffix': ' technologies mastered',
    'skills.cat.languages': 'Programming Languages',
    'skills.cat.backend': 'Backend',
    'skills.cat.frontend': 'Frontend',
    'skills.cat.database': 'Databases',
    'skills.cat.tools': 'Tools',

    // ── Projects ──
    'projects.badge': 'My Work',
    'projects.title.1': 'Featured',
    'projects.title.2': 'Projects',
    'projects.subtitle': 'A selection of projects showcasing my skills and development experience',
    'projects.featured': 'Featured',
    'projects.github.cta': 'See more projects on GitHub',
    'projects.stat.suffix': ' projects in the portfolio',
    'projects.aria.github': 'View code on GitHub',
    'projects.aria.live': 'View live project',
    'projects.aria.video': 'Watch video demo',
    'projects.aria.manual': 'View user manual',

    // Project descriptions
    'project.kindercare.desc': 'Management system for kindergartens with attendance tracking, parent communication, and activity management.',
    'project.flightontime.desc': 'Web app that intuitively predicts flight delays using artificial intelligence and historical data.',
    'project.trello.desc': 'Task management app for organizing projects through boards, lists, and draggable cards.',
    'project.kindernosql.desc': 'NoSQL version of the KinderCare system using non-relational databases for greater scalability.',
    'project.tiendabazar.desc': 'E-commerce platform for a bazaar store with product catalog, shopping cart, and inventory management.',
    'project.xclon.desc': 'Clone of the social network X (Twitter) with posts, likes, comments, and user following features.',
    'project.portfolio.desc': 'This very portfolio featuring modern design with smooth animations, responsive layout, and optimized performance.',
    'project.agenteia.desc': 'AI agent with natural language processing and automated responses within the console.',

    // ── Experience ──
    'experience.badge': 'My Journey',
    'experience.title.1': 'Education &',
    'experience.title.2': 'Certifications',
    'experience.subtitle': 'My academic background and certifications that support my expertise',
    'experience.education': 'Education',
    'experience.certifications': 'Certifications',
    'experience.present': 'Present',
    'experience.stat.suffix': ' certifications earned',
    'experience.degree': 'Bachelor\'s Degree',
    'experience.field': 'Computer Systems Engineering',
    'experience.edu.desc': 'Comprehensive training in software development, databases, networking, systems architecture, and agile methodologies.',
    'experience.in': 'in',
    'experience.aria.credential': 'View credential for',

    // ── Contact ──
    'contact.badge': 'Let\'s Talk',
    'contact.title.1': 'Contact',
    'contact.title.2': 'Me',
    'contact.subtitle': 'Have a project in mind or a job opportunity? Don\'t hesitate to reach out',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    'contact.info.timezone': 'Time Zone',
    'contact.social.title': 'Find Me On',
    'contact.available.title': 'Available for opportunities',
    'contact.available.desc': 'Currently open to on-site, hybrid, or remote positions.',
    'contact.form.header': 'Send me a message',
    'contact.form.header.sub': 'I\'ll respond as soon as possible',
    'contact.form.name.label': 'Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email.label': 'Email',
    'contact.form.email.placeholder': 'you@email.com',
    'contact.form.subject.label': 'Subject',
    'contact.form.subject.placeholder': 'What would you like to discuss?',
    'contact.form.message.label': 'Message',
    'contact.form.message.placeholder': 'Tell me about your project or opportunity...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.success': '✓ Message sent successfully! I\'ll get back to you as soon as possible.',
    'contact.form.error': '✕ Something went wrong. Try reaching me directly by email.',
    'contact.validation.name': 'Name must be at least 2 characters',
    'contact.validation.email': 'Please enter a valid email address',
    'contact.validation.subject': 'Subject must be at least 5 characters',
    'contact.validation.message': 'Message must be at least 10 characters',

    // ── Footer ──
    'footer.role': 'Software Developer',
    'footer.description': 'passionate about creating unique digital experiences and innovative technological solutions.',
    'footer.quicklinks': 'Quick Links',
    'footer.social.title': 'Follow me or let\'s chat!',
    'footer.cta.question': 'Have a project in mind?',
    'footer.cta.button': 'Let\'s Talk',
    'footer.rights': 'All rights reserved.',
    'footer.madewith': 'Made with',
    'footer.using': 'using Next.js & Tailwind',
  },
};
