# Andrés Alpízar | Portafolio de Desarrollador Full Stack

Portafolio profesional moderno, responsivo y bilingüe, construido con Next.js 15, TypeScript y Tailwind CSS. Desplegado en Vercel.

**Demo en vivo:** [andres-alpd.vercel.app](https://andres-alpd.vercel.app/)

---

## 🚀 Tecnologías

| Categoría | Tecnología | Versión |
|-----------|-----------|---------|
| Framework | Next.js (App Router) | 15.5.12 |
| Lenguaje | TypeScript | 5.x |
| Estilos | Tailwind CSS | 4.x |
| Animaciones | Framer Motion | 12.x |
| Formularios | React Hook Form | 7.x |
| Iconos | React Icons | 5.x |
| Email | EmailJS | 4.x |
| Utilidades | clsx | 2.x |
| Runtime | React | 19.1.0 |

## 🎨 Características

### Generales
- Diseño completamente responsivo (mobile-first)
- Modo oscuro/claro con persistencia en `localStorage`
- Soporte bilingüe Español/Inglés con persistencia
- Optimización de imágenes (AVIF + WebP)
- SEO configurado con OpenGraph y Twitter Cards

### Secciones
| Sección | Descripción |
|---------|-------------|
| **Hero** | Presentación con efecto TypeWriter, botones CTA, descarga de CV y enlaces sociales |
| **About** | Biografía, especializaciones (Frontend, Backend, Cloud/DevOps, Bases de Datos) y estadísticas |
| **Skills** | Habilidades organizadas por categoría: Lenguajes, Backend, Frontend, Bases de Datos, Herramientas |
| **Projects** | Galería de 8 proyectos con modal/lightbox para imágenes y descripciones completas |
| **Experience** | Formación académica y educativa |
| **Contact** | Formulario de contacto con EmailJS, validación y datos de contacto |

### Efectos Visuales
- Cursor personalizado con partículas en clic (oculto en dispositivos táctiles)
- Fondo animado con sistema de partículas en Canvas (desactivado en móvil para rendimiento)
- Animaciones de entrada con scroll (`whileInView`) y transiciones con `AnimatePresence`
- Detección inteligente de sección activa en el navbar con underline animado

### Navbar
- Navegación con detección de sección activa por scroll
- Toggle de tema (oscuro/claro)
- Toggle de idioma (ES/EN)
- Botón de pantalla completa (solo desktop)
- Menú hamburguesa animado en móvil

## 📁 Estructura del Proyecto

```
src/
├── app/                    # App Router de Next.js 15
│   ├── layout.tsx          # Layout raíz (metadata, fuentes, tema)
│   ├── page.tsx            # Página principal con todas las secciones
│   └── globals.css         # Estilos globales y Tailwind
├── components/
│   ├── layout/             # Componentes de estructura
│   │   ├── Navbar.tsx      # Barra de navegación responsiva
│   │   ├── Footer.tsx      # Pie de página
│   │   ├── GlobalBackground.tsx  # Fondo animado con partículas
│   │   └── CustomCursor.tsx      # Cursor personalizado
│   └── sections/           # Secciones del portafolio
│       ├── Hero.tsx        # Sección de presentación
│       ├── About.tsx       # Acerca de mí
│       ├── Skills.tsx      # Habilidades técnicas
│       ├── Projects.tsx    # Galería de proyectos con modal
│       ├── Experience.tsx  # Educación y experiencia
│       ├── Contact.tsx     # Formulario de contacto
│       ├── AnimatedBackground.tsx  # Fondo de sección Hero
│       └── TypeWriter.tsx  # Efecto de escritura animada
├── contexts/
│   ├── LanguageContext.tsx  # Contexto de idioma (ES/EN)
│   └── ThemeContext.tsx     # Contexto de tema (oscuro/claro)
├── data/                   # Datos del portafolio
│   ├── personal.ts         # Información personal y redes sociales
│   ├── projects.ts         # Proyectos (8 proyectos)
│   ├── experience.ts       # Experiencia y educación
│   ├── skills.ts           # Habilidades técnicas
│   └── services.ts         # Servicios ofrecidos
├── lib/
│   ├── constants.ts        # Constantes de animación (Framer Motion)
│   └── utils.ts            # Funciones utilitarias
└── types/
    └── index.ts            # Tipos e interfaces TypeScript
```

## 🛠️ Instalación y Configuración

### Requisitos Previos

- Node.js 18.x o superior
- npm 9.x o superior

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/portfolio.git
cd portfolio

# Instalar dependencias
npm install
```

### Variables de Entorno

Crea un archivo `.env.local` en la raíz del proyecto:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu_public_key
```

> Obtén estas credenciales en [emailjs.com](https://www.emailjs.com/)

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📜 Scripts Disponibles

| Script | Comando | Descripción |
|--------|---------|-------------|
| Desarrollo | `npm run dev` | Inicia el servidor de desarrollo con hot reload |
| Build | `npm run build` | Genera la build de producción optimizada |
| Producción | `npm run start` | Inicia el servidor de producción |
| Lint | `npm run lint` | Ejecuta ESLint para análisis de código |

## 📝 Personalización

### Datos Personales
Edita los archivos en `src/data/` para actualizar:
- **`personal.ts`** — Nombre, rol, biografía, redes sociales y avatar
- **`projects.ts`** — Proyectos con descripción, tecnologías e imágenes
- **`experience.ts`** — Formación académica y experiencia laboral
- **`skills.ts`** — Habilidades técnicas por categoría
- **`services.ts`** — Servicios ofrecidos

### Traducciones
Las traducciones se gestionan en `src/contexts/LanguageContext.tsx` con diccionarios para español e inglés.

### Imágenes
Coloca las imágenes en `public/images/` usando nombres en minúsculas para compatibilidad con despliegues en Linux (Vercel).

## 🌐 Despliegue

El proyecto está configurado para despliegue en **Vercel**:

1. Conecta tu repositorio de GitHub a [vercel.com](https://vercel.com)
2. Configura las variables de entorno de EmailJS en el dashboard de Vercel
3. Vercel detectará automáticamente la configuración de Next.js

## 📄 Licencia

Este proyecto es de uso personal. Puedes usarlo como referencia o template para tu propio portafolio.
