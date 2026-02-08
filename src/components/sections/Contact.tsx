'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
  HiUser,
  HiAnnotation,
  HiChatAlt2,
} from 'react-icons/hi';
import {
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaPhone,
} from 'react-icons/fa';
import { personalInfo, socialLinks } from '@/data';
import { FADE_IN_UP, STAGGER_CONTAINER } from '@/lib/constants';

// Mapeo de iconos de redes sociales
const socialIcons: Record<string, React.ReactNode> = {
  FaLinkedin: <FaLinkedin size={22} />,
  FaGithub: <FaGithub size={22} />,
  HiMail: <HiMail size={22} />,
  FaTelegram: <FaTelegram size={22} />,
  FaPhone: <FaPhone size={20} />,
};

// Información de contacto directo
const contactInfo = [
  {
    id: 'email',
    icon: HiMail,
    label: 'Correo Electrónico',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'phone',
    icon: HiPhone,
    label: 'Teléfono',
    value: personalInfo.phone || '+506 8477 5731',
    href: `tel:${personalInfo.phone || '+50684775731'}`,
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'location',
    icon: HiLocationMarker,
    label: 'Ubicación',
    value: personalInfo.location,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(personalInfo.location)}`,
    color: 'from-purple-500 to-pink-500',
  },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres';
    }

    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!formData.email.trim() || !emailPattern.test(formData.email)) {
      newErrors.email = 'Ingresa un correo electrónico válido';
    }

    if (!formData.subject.trim() || formData.subject.trim().length < 5) {
      newErrors.subject = 'El asunto debe tener al menos 5 caracteres';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'El mensaje debe tener al menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar error del campo al escribir
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Construir mailto con los datos del formulario
      const mailtoSubject = encodeURIComponent(formData.subject);
      const mailtoBody = encodeURIComponent(
        `Nombre: ${formData.name}\nCorreo: ${formData.email}\n\n${formData.message}`
      );
      window.open(
        `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`,
        '_self'
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Resetear estado después de 5 segundos
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="relative py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header de sección */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            Hablemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Ponte en{' '}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Contacto
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o una oportunidad laboral? No dudes en escribirme
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Columna izquierda - Info de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Tarjetas de contacto directo */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.id}
                  href={info.href}
                  target={info.id === 'location' ? '_blank' : undefined}
                  rel={info.id === 'location' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group flex items-center gap-4 p-4 bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-md hover:shadow-lg border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"
                >
                  <div className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center shadow-lg`}>
                    <info.icon className="text-white" size={22} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase tracking-wide">
                      {info.label}
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Encuéntrame en
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {socialIcons[social.icon] || <HiMail size={22} />}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Disponibilidad */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-6 border border-blue-100 dark:border-blue-800/30"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                </span>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  Disponible para oportunidades
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Actualmente abierto a posiciones presenciales, híbridas o remotas.
              </p>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 shadow-lg">
                  <HiChatAlt2 className="text-white" size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Envíame un mensaje
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Respondo lo antes posible
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nombre y Email */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Nombre */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                    >
                      Nombre
                    </label>
                    <div className="relative">
                      <HiUser
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Tu nombre"
                        className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                          errors.name
                            ? 'border-red-400 focus:ring-red-500/20'
                            : 'border-gray-200 dark:border-gray-600 focus:ring-blue-500/20 focus:border-blue-500'
                        }`}
                      />
                    </div>
                    {errors.name && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                    >
                      Correo Electrónico
                    </label>
                    <div className="relative">
                      <HiMail
                        className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                        size={18}
                      />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="tu@correo.com"
                        className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                          errors.email
                            ? 'border-red-400 focus:ring-red-500/20'
                            : 'border-gray-200 dark:border-gray-600 focus:ring-blue-500/20 focus:border-blue-500'
                        }`}
                      />
                    </div>
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Asunto */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Asunto
                  </label>
                  <div className="relative">
                    <HiAnnotation
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="¿De qué quieres hablar?"
                      className={`w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-gray-700/50 border rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                        errors.subject
                          ? 'border-red-400 focus:ring-red-500/20'
                          : 'border-gray-200 dark:border-gray-600 focus:ring-blue-500/20 focus:border-blue-500'
                      }`}
                    />
                  </div>
                  {errors.subject && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.subject}</p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Cuéntame sobre tu proyecto u oportunidad..."
                    className={`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700/50 border rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? 'border-red-400 focus:ring-red-500/20'
                        : 'border-gray-200 dark:border-gray-600 focus:ring-blue-500/20 focus:border-blue-500'
                    }`}
                  />
                  <div className="flex justify-between mt-1.5">
                    {errors.message ? (
                      <p className="text-xs text-red-500">{errors.message}</p>
                    ) : (
                      <span />
                    )}
                    <span className="text-xs text-gray-400">
                      {formData.message.length}/1000
                    </span>
                  </div>
                </div>

                {/* Botón enviar */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all duration-300 shadow-lg ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-xl hover:shadow-blue-500/25'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <HiPaperAirplane className="rotate-90" size={20} />
                      Enviar Mensaje
                    </>
                  )}
                </motion.button>

                {/* Estado del envío */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl"
                  >
                    <span className="text-green-600 dark:text-green-400 text-sm font-medium">
                      ✓ Se ha abierto tu cliente de correo. ¡Gracias por contactarme!
                    </span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl"
                  >
                    <span className="text-red-600 dark:text-red-400 text-sm font-medium">
                      ✕ Hubo un error. Intenta contactarme directamente por correo.
                    </span>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
