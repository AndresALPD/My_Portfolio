'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TypeWriterProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetweenWords?: number;
}

export default function TypeWriter({
  words,
  className = '',
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenWords = 2000,
}: TypeWriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Referencia para el timeout de pausa (para cancelarlo si cambia el idioma)
  const pauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Serializar words para detectar cambios reales de contenido (cambio de idioma)
  const wordsKey = useMemo(() => JSON.stringify(words), [words]);
  const prevWordsKey = useRef(wordsKey);

  // Reiniciar el efecto limpiamente cuando cambian las words (cambio de idioma)
  useEffect(() => {
    if (prevWordsKey.current !== wordsKey) {
      prevWordsKey.current = wordsKey;
      
      // Cancelar cualquier timeout de pausa pendiente
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = null;
      }
      
      // Resetear todos los estados
      setCurrentText('');
      setIsDeleting(false);
      setIsPaused(false);
      // Mantener currentWordIndex para continuar desde la misma posición
    }
  }, [wordsKey]);

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (pauseTimeoutRef.current) {
        clearTimeout(pauseTimeoutRef.current);
      }
    };
  }, []);

  const type = useCallback(() => {
    const currentWord = words[currentWordIndex];

    if (isPaused) {
      return;
    }

    if (!isDeleting) {
      // Escribiendo
      if (currentText.length < currentWord.length) {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
      } else {
        // Pausa al terminar de escribir
        setIsPaused(true);
        
        // Cancelar timeout anterior si existe
        if (pauseTimeoutRef.current) {
          clearTimeout(pauseTimeoutRef.current);
        }
        
        // Programar inicio del borrado
        pauseTimeoutRef.current = setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
          pauseTimeoutRef.current = null;
        }, delayBetweenWords);
      }
    } else {
      // Borrando
      if (currentText.length > 0) {
        setCurrentText(currentText.slice(0, -1));
      } else {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [currentText, currentWordIndex, isDeleting, isPaused, words, delayBetweenWords]);

  useEffect(() => {
    const timeout = setTimeout(
      type,
      isDeleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeout);
  }, [type, isDeleting, deletingSpeed, typingSpeed]);

  return (
    <span className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={currentText}
          initial={{ opacity: 0.8 }}
          animate={{ opacity: 1 }}
          className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
        >
          {currentText}
        </motion.span>
      </AnimatePresence>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-[3px] h-[1em] ml-1 bg-gradient-to-b from-blue-600 to-cyan-500 align-middle"
      />
    </span>
  );
}
