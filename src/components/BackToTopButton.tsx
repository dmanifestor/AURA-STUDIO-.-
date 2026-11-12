import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.7, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-40 p-3 sm:p-3.5 rounded-full bg-[#23140d]/90 hover:bg-[#341d13] text-amber-300 border border-amber-600/40 hover:border-amber-500 shadow-xl shadow-black/50 backdrop-blur-md transition-all group focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none active:scale-95"
          aria-label={t('backtotop')}
          title={t('backtotop')}
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5 text-amber-400 group-hover:text-amber-200" aria-hidden="true" />
          <span className="sr-only">{t('backtotop')}</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
