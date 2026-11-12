import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CaseStudy } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onInitiateSimilarScope: (discipline: string) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  caseStudy,
  onClose,
  onInitiateSimilarScope,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    if (!caseStudy) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [caseStudy, onClose]);

  return (
    <AnimatePresence>
      {caseStudy && (
        <motion.div
          key="modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/90 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-case-title"
          onClick={onClose}
        >
          <motion.div
            key="modal-content"
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#1b100a] border border-amber-900/40 shadow-2xl text-amber-100 flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Modal Top Bar with Close Button */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-[#180e09]/95 backdrop-blur border-b border-amber-900/40">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <span>{t('modal.archive')}</span>
                <span aria-hidden="true" className="text-amber-800">·</span>
                <span className="text-amber-200">{caseStudy.categoryLabel}</span>
              </div>

              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="p-2 rounded-lg text-amber-300/80 hover:text-white hover:bg-[#2b170f] transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                aria-label="Close Estate Details"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Modal Hero Visual */}
            <div className="relative aspect-[16/9] w-full bg-[#120a07] overflow-hidden">
              <img
                src={caseStudy.imageSrc}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#1b100a] via-[#1b100a]/20 to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-[#120a07]/85 backdrop-blur-md border border-amber-600/50 rounded-md text-amber-300 text-xs font-semibold mb-2">
                  {t('modal.outcome')}: {caseStudy.impactMetric}
                </span>
                <h2 id="modal-case-title" className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {caseStudy.title}
                </h2>
              </div>
            </div>

            {/* Modal Core Content */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Architectural Specifications Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3.5 px-4 rounded-xl bg-[#140b07] border border-amber-900/40 text-xs font-mono">
                <div>
                  <div className="text-amber-400/80 mb-0.5">Enclave</div>
                  <div className="font-semibold text-white">{caseStudy.specs.enclave}</div>
                </div>
                <div>
                  <div className="text-amber-400/80 mb-0.5">Dimensions</div>
                  <div className="font-semibold text-white">{caseStudy.specs.sqft}</div>
                </div>
                <div>
                  <div className="text-amber-400/80 mb-0.5">Accommodations</div>
                  <div className="font-semibold text-white">{caseStudy.specs.beds} · {caseStudy.specs.baths}</div>
                </div>
                <div>
                  <div className="text-amber-400/80 mb-0.5">Valuation Tier</div>
                  <div className="font-semibold text-amber-300">{caseStudy.priceBracket}</div>
                </div>
              </div>

              {/* Property Summary */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-300 mb-2">
                  {t('modal.overview')}
                </h3>
                <p className="text-base text-amber-100/90 leading-relaxed">
                  {caseStudy.summary}
                </p>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-[#140b07]/80 border border-amber-900/40">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                    {t('modal.challenge')}
                  </h4>
                  <p className="text-sm text-amber-100/80 leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#140b07]/80 border border-amber-900/40">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-300" aria-hidden="true" />
                    {t('modal.solution')}
                  </h4>
                  <p className="text-sm text-amber-100/80 leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Core Deliverables & Specs */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-300 mb-3">
                  {t('modal.deliverables')}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {caseStudy.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-[#140b07]/60 border border-amber-900/40 text-xs sm:text-sm text-amber-100"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attributable Client Testimonial */}
              {caseStudy.quote && (
                <div className="p-6 rounded-xl bg-[#140b07]/90 border border-amber-900/40 relative">
                  <Quote className="w-6 h-6 text-amber-700/60 mb-3" aria-hidden="true" />
                  <blockquote className="text-sm sm:text-base italic text-white leading-relaxed mb-3">
                    "{caseStudy.quote.text}"
                  </blockquote>
                  <div className="text-xs text-amber-300 font-medium">
                    — {caseStudy.quote.author}, <span className="text-amber-200/60">{caseStudy.quote.role}</span>
                  </div>
                </div>
              )}

              {/* Direct Conversion Action */}
              <div className="pt-4 border-t border-amber-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-amber-200/70">
                  {t('modal.prompt')}
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onInitiateSimilarScope('buyer-acquisition');
                  }}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-500 hover:to-amber-700 text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-black/50 active:scale-95 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                >
                  {t('modal.cta')}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
