'use client';

import { Hero, About, Skills, Projects, Experience } from '@/components/sections';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Experience Section */}
      <Experience />

      <section id="contact" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-400">Sección: Contacto</h2>
          <p className="text-gray-500 mt-2">Próximamente...</p>
        </div>
      </section>
    </>
  );
}
