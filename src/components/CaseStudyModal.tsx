import React, { useEffect, useRef } from 'react';
import { X, CheckCircle2, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CaseStudy } from '../data/portfolioData';

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

  useEffect(() => {
    if (!caseStudy) return;

    // Lock background scroll
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Focus close button on mount
    closeButtonRef.current?.focus();

    // Keyboard Escape listener
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
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md"
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
            className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl text-zinc-100 flex flex-col my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sticky Modal Top Bar with Close Button */}
            <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-zinc-900/95 backdrop-blur border-b border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <span>CASE ARCHIVE</span>
                <span aria-hidden="true">·</span>
                <span>{caseStudy.categoryLabel}</span>
              </div>

              <button
                ref={closeButtonRef}
                onClick={onClose}
                className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
                aria-label="Close Case Study Details"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Modal Hero Visual */}
            <div className="relative aspect-[16/9] w-full bg-zinc-950 overflow-hidden">
              <img
                src={caseStudy.imageSrc}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-zinc-950/80 backdrop-blur-md border border-zinc-700/80 rounded-md text-amber-400 text-xs font-medium mb-2">
                  Verified Outcome: {caseStudy.impactMetric}
                </span>
                <h2 id="modal-case-title" className="text-2xl sm:text-3xl font-bold font-display text-white">
                  {caseStudy.title}
                </h2>
              </div>
            </div>

            {/* Modal Core Content */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Metadata Row (Unboxed Discipline) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-3 px-4 rounded-xl bg-zinc-950/60 border border-zinc-800/80 text-xs">
                <div>
                  <div className="text-zinc-500 mb-0.5">Client</div>
                  <div className="font-medium text-zinc-200">{caseStudy.client}</div>
                </div>
                <div>
                  <div className="text-zinc-500 mb-0.5">Year</div>
                  <div className="font-medium text-zinc-200">{caseStudy.year}</div>
                </div>
                <div>
                  <div className="text-zinc-500 mb-0.5">Location</div>
                  <div className="font-medium text-zinc-200">{caseStudy.location}</div>
                </div>
                <div>
                  <div className="text-zinc-500 mb-0.5">Domain</div>
                  <div className="font-medium text-amber-400">{caseStudy.categoryLabel}</div>
                </div>
              </div>

              {/* Project Summary */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Commission Overview
                </h3>
                <p className="text-base text-zinc-200 leading-relaxed">
                  {caseStudy.summary}
                </p>
              </div>

              {/* Challenge & Solution Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-zinc-950/40 border border-zinc-800/70">
                  <h4 className="text-sm font-semibold text-zinc-100 mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                    The Architectural Challenge
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {caseStudy.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-zinc-950/40 border border-zinc-800/70">
                  <h4 className="text-sm font-semibold text-zinc-100 mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                    The Studio Synthesis
                  </h4>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {caseStudy.solution}
                  </p>
                </div>
              </div>

              {/* Core Deliverables */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-400 mb-3">
                  Key Deliverables & Specifications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {caseStudy.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-zinc-950/50 border border-zinc-800/60 text-xs sm:text-sm text-zinc-300"
                    >
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Attributable Client Testimonial */}
              {caseStudy.quote && (
                <div className="p-6 rounded-xl bg-zinc-950/70 border border-zinc-800/90 relative">
                  <Quote className="w-6 h-6 text-zinc-700 mb-3" aria-hidden="true" />
                  <blockquote className="text-sm sm:text-base italic text-zinc-200 leading-relaxed mb-3">
                    "{caseStudy.quote.text}"
                  </blockquote>
                  <div className="text-xs text-zinc-400 font-medium">
                    — {caseStudy.quote.author}, <span className="text-zinc-500">{caseStudy.quote.role}</span>
                  </div>
                </div>
              )}

              {/* Direct Conversion Action */}
              <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-zinc-400">
                  Seeking similar architectural, brand, or interactive execution?
                </span>
                <button
                  onClick={() => {
                    onClose();
                    onInitiateSimilarScope(caseStudy.category);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 text-xs sm:text-sm font-medium transition-colors shadow-sm active:scale-95"
                >
                  Initiate Project with this Scope
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
