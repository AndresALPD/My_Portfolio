import { type ClassValue, clsx } from 'clsx';

// ============================================
// FUNCIONES DE UTILIDAD
// ============================================

/**
 * Combina clases de Tailwind de manera segura
 * Uso: cn('base-class', condition && 'conditional-class', 'other-class')
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Formatea una fecha a formato legible
 */
export function formatDate(dateString: string, locale = 'es-ES'): string {
  const date = new Date(dateString);
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
  });
}

/**
 * Calcula el tiempo transcurrido desde una fecha
 */
export function getTimeAgo(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffInMonths =
    (now.getFullYear() - date.getFullYear()) * 12 +
    (now.getMonth() - date.getMonth());

  if (diffInMonths < 1) return 'Este mes';
  if (diffInMonths === 1) return 'Hace 1 mes';
  if (diffInMonths < 12) return `Hace ${diffInMonths} meses`;

  const years = Math.floor(diffInMonths / 12);
  if (years === 1) return 'Hace 1 año';
  return `Hace ${years} años`;
}

/**
 * Calcula la duración entre dos fechas
 */
export function calculateDuration(
  startDate: string,
  endDate?: string
): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth());

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years === 0) {
    return remainingMonths === 1 ? '1 mes' : `${remainingMonths} meses`;
  }

  if (remainingMonths === 0) {
    return years === 1 ? '1 año' : `${years} años`;
  }

  const yearStr = years === 1 ? '1 año' : `${years} años`;
  const monthStr = remainingMonths === 1 ? '1 mes' : `${remainingMonths} meses`;

  return `${yearStr} y ${monthStr}`;
}

/**
 * Trunca un texto a un número máximo de caracteres
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Genera un ID único
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Debounce function para optimizar eventos
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Smooth scroll a una sección
 */
export function scrollToSection(sectionId: string): void {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}

/**
 * Verifica si estamos en el cliente (browser)
 */
export function isClient(): boolean {
  return typeof window !== 'undefined';
}

/**
 * Obtiene el valor de una variable CSS
 */
export function getCssVariable(variable: string): string {
  if (!isClient()) return '';
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
}
