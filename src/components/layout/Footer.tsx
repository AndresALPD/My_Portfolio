'use client';

import { motion } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTelegram,
  FaPhone,
  FaWhatsapp,
  FaHeart 
} from 'react-icons/fa';
import { HiMail, HiLocationMarker } from 'react-icons/hi';
import { personalInfo, socialLinks, navItems } from '@/data';

// Mapeo de iconos de redes sociales
const socialIcons: Record<string, React.ReactNode> = {
  FaGithub: <FaGithub size={20} />,
  FaLinkedin: <FaLinkedin size={20} />,
  FaTelegram: <FaTelegram size={20} />,
  HiMail: <HiMail size={20} />,
  FaWhatsapp: <FaWhatsapp size={20} />,
  FaPhone: <FaPhone size={18} />,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#home');
              }}
              className="inline-block text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4"
              whileHover={{ scale: 1.05 }}
            >
              {personalInfo.name.split(' ')[0]}
              <span className="text-white">.dev</span>
            </motion.a>
            <p className="text-gray-400 max-w-md mb-6">
              {personalInfo.title} apasionado por crear experiencias digitales 
              únicas y soluciones tecnológicas innovadoras.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <HiMail size={18} />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <HiLocationMarker size={18} />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Sígueme o hablemos!</h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-800 text-gray-400 hover:bg-blue-600 hover:text-white transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.name}
                >
                  {socialIcons[social.icon]}
                </motion.a>
              ))}
            </div>
            
            {/* Newsletter or CTA */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">
                ¿Tienes un proyecto en mente?
              </p>
              <motion.a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hablemos
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              © {currentYear} {personalInfo.name}. Todos los derechos reservados.
            </p>
            <p className="text-sm text-gray-400 flex items-center gap-1">
              Hecho con <FaHeart className="text-red-500" size={14} /> usando Next.js & Tailwind
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
