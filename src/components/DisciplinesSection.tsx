import React, { useState } from 'react';
import { DISCIPLINES, Discipline } from '../data/portfolioData';
import { Clock, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface DisciplinesSectionProps {
  onSelectCaseByTitle?: (title: string) => void;
  onInitiateScopeWithDiscipline?: (disciplineId: string) => void;
}

export const DisciplinesSection: React.FC<DisciplinesSectionProps> = ({
  onInitiateScopeWithDiscipline,
}) => {
  const [selectedDiscipline, setSelectedDiscipline] = useState<Discipline>(DISCIPLINES[0]);
  const { t } = useLanguage();

  const cubicEase = [0.16, 1, 0.3, 1] as const;

  const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.65,
        ease: cubicEase,
      },
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: cubicEase },
    },
  };

  return (
    <motion.section
      id="disciplines"
      aria-label="Advisory Capabilities and Representation Methodology"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={sectionVariants}
      className="py-20 md:py-28 border-b border-amber-900/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-2">
            <span className="font-mono text-amber-400">{t('disc.scene')}</span>
            <span aria-hidden="true" className="text-amber-800">·</span>
            <span className="text-amber-200">{t('disc.kicker')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mb-4">
            {t('disc.title')}
          </h2>
          <p className="text-base text-amber-100/70 leading-relaxed">
            {t('disc.desc')}
          </p>
        </div>

        {/* 2-Column Disciplines Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Numbered Service List */}
          <motion.div
            className="lg:col-span-5 space-y-3"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {DISCIPLINES.map((discipline) => {
              const isSelected = selectedDiscipline.id === discipline.id;
              return (
                <motion.button
                  key={discipline.id}
                  variants={itemVariants}
                  onClick={() => setSelectedDiscipline(discipline)}
                  className={`w-full text-left p-5 sm:p-6 rounded-xl border transition-all duration-200 flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none ${
                    isSelected
                      ? 'bg-[#23140d] border-amber-500/70 shadow-xl shadow-black/50 ring-1 ring-amber-500/30'
                      : 'bg-[#180e0a]/70 border-amber-900/40 hover:bg-[#20120b] hover:border-amber-700/60'
                  }`}
                  aria-expanded={isSelected}
                >
                  <div className="flex items-baseline justify-between w-full mb-2">
                    <span className="font-mono text-xs text-amber-400 font-semibold">
                      {discipline.index}.
                    </span>
                    <span className="text-xs text-amber-200/60 font-mono">
                      {discipline.timeframe}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold text-white font-display mb-1.5">
                    {discipline.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-amber-100/70 line-clamp-2">
                    {discipline.description}
                  </p>
                </motion.button>
              );
            })}
          </motion.div>

          {/* Right Column: Deep-Dive Panel */}
          <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 bg-[#1c100a]/80 border border-amber-900/40 rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-2xl"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedDiscipline.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between pb-4 border-b border-amber-900/40">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" aria-hidden="true" />
                    <span className="text-xs uppercase tracking-wider text-amber-400 font-semibold">
                      {t('disc.cycle')}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-amber-200/80 font-mono">
                    <Clock className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                    <span>{selectedDiscipline.timeframe}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
                    {selectedDiscipline.title}
                  </h3>
                  <p className="text-base text-amber-100/80 leading-relaxed">
                    {selectedDiscipline.description}
                  </p>
                </div>

                {/* Methodology */}
                <div className="p-4 rounded-xl bg-[#140b07]/80 border border-amber-800/40">
                  <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                    {t('disc.methodology.title')}
                  </div>
                  <div className="text-sm text-amber-100/90 leading-relaxed">
                    {selectedDiscipline.methodology}
                  </div>
                </div>

                {/* Deliverables */}
                <div>
                  <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-3">
                    {t('disc.deliverables.title')}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedDiscipline.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-[#140b07]/60 border border-amber-900/40 text-xs sm:text-sm text-amber-100"
                      >
                        <Check className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick Scope Action */}
            <div className="pt-6 mt-8 border-t border-amber-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-amber-200/70 text-center sm:text-left">
                Benchmark Case: <span className="text-white font-semibold">{selectedDiscipline.caseRef}</span>
              </div>
              <button
                onClick={() => onInitiateScopeWithDiscipline?.(selectedDiscipline.id)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white text-xs sm:text-sm font-semibold transition-all whitespace-nowrap shadow-md shadow-black/40 active:scale-95 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
              >
                <span>{t('disc.scope.btn')}</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
