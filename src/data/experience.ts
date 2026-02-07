import { Education, Certification } from '@/types';

// ============================================
// EDUCACIÓN
// ============================================

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'Universidad Fidélitas',
    degree: 'Bachillerato',
    field: 'Ingeniería en Sistemas de Computación',
    startDate: '2022-02',
    endDate: '2026-01',
    description: 'Formación integral en desarrollo de software, bases de datos, redes, arquitectura de sistemas y metodologías ágiles.',
    logo: '/images/education/fidelitas.png',
  },
];

// ============================================
// CERTIFICACIONES
// ============================================

export const certifications: Certification[] = [
  {
    id: 'cert-hackathon',
    name: 'Hackathon ONE - Equipo 8 Latam',
    issuer: 'ONE (Oracle Next Education)',
    date: '2026-02',
    credentialUrl: 'https://credsverse.com/credentials/e5b52fe2-5fa6-4100-8062-662347645996',
  },
  {
    id: 'cert-oci',
    name: 'Oracle Cloud Infrastructure 2025 Certified Foundations Associate',
    issuer: 'Oracle',
    date: '2025-12',
    credentialUrl: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=378659B953822955889674729D6C476B73694484654BB568F9725BCCC92AF2CE#',
  },
  {
    id: 'cert-one-advanced',
    name: 'Programa ONE Tech Advanced',
    issuer: 'Alura Latam',
    date: '2025-12',
    credentialUrl: 'https://app.aluracursos.com/program/certificate/8646c986-5fa2-495a-bfad-f38edf55b4b3?lang',
  },
  {
    id: 'cert-one-backend',
    name: 'Programa ONE Tech Foundation G8 - Back End',
    issuer: 'Alura Latam',
    date: '2025-09',
    credentialUrl: 'https://app.aluracursos.com/program/certificate/92c9f5c2-8595-45f1-9d02-8a0ae937d936?lang',
  },
  {
    id: 'cert-java-spring',
    name: 'Formación Java y Spring Framework G8 - ONE',
    issuer: 'Alura Latam',
    date: '2025-09',
    credentialUrl: 'https://app.aluracursos.com/degree/certificate/a49014ac-778b-4ed3-99d4-b0ff1a8821a9?lang',
  },
  {
    id: 'cert-java-oo',
    name: 'Formación Java Orientado a Objetos G8 - ONE',
    issuer: 'Alura Latam',
    date: '2025-08',
    credentialUrl: 'https://app.aluracursos.com/degree/certificate/8bff677b-1788-450c-b7dd-9e1cd2d99563?lang',
  },
  {
    id: 'cert-principiante',
    name: 'Formación Principiante en Programación G8 - ONE',
    issuer: 'Alura Latam',
    date: '2025-03',
    credentialUrl: 'https://app.aluracursos.com/degree/certificate/e8da3997-a6a3-4d82-8b4a-2019411330da?lang',
  },
  {
    id: 'cert-ccna-switching',
    name: 'CCNA: Switching, Routing, and Wireless Essentials',
    issuer: 'Cisco Networking Academy',
    date: '2023-10',
    credentialUrl: 'https://www.credly.com/badges/320307ff-f392-4d61-83ef-016371b91786',
  },
  {
    id: 'cert-scrum',
    name: 'Scrum Fundamentals Certified (SFC)',
    issuer: 'SCRUMstudy',
    date: '2023-04',
    credentialUrl: 'https://www.scrumstudy.com/certification/verify?type=SFC&number=969679',
  },
  {
    id: 'cert-ccna-intro',
    name: 'CCNA: Introduction to Networks',
    issuer: 'Cisco Networking Academy',
    date: '2023-01',
    credentialUrl: 'https://www.credly.com/badges/34434f7e-5ede-4cd6-ae14-c5820504f4a8',
  },
];
