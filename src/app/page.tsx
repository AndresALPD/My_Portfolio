'use client';

import { Hero, About, Skills } from '@/components/sections';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      <section id="projects" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-400">Sección: Proyectos</h2>
          <p className="text-gray-500 mt-2">Próximamente...</p>
        </div>
      </section>

      <section id="experience" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-400">Sección: Experiencia</h2>
          <p className="text-gray-500 mt-2">Próximamente...</p>
        </div>
      </section>

      <section id="contact" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-400">Sección: Contacto</h2>
          <p className="text-gray-500 mt-2">Próximamente...</p>
        </div>
      </section>
    </>
  );
}
