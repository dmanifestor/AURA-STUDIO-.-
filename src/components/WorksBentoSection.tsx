import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';
import { useLanguage } from '../context/LanguageContext';

interface WorksBentoSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const WorksBentoSection: React.FC<WorksBentoSectionProps> = ({
  onSelectCaseStudy,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'summerlin' | 'ascaya' | 'offmarket'>('all');
  const { t } = useLanguage();

  const filteredProjects = CASE_STUDIES.filter((project) => {
    if (activeCategory === 'all') return true;
    return project.category === activeCategory;
  });

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

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <motion.section
      id="works"
      aria-label="Curated Residential Real Estate Portfolio"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={sectionVariants}
      className="py-20 md:py-28 border-b border-amber-900/30 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-2">
              <span className="font-mono text-amber-400">{t('bento.scene')}</span>
              <span aria-hidden="true" className="text-amber-800">·</span>
              <span className="text-amber-200">{t('bento.kicker')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              {t('bento.title')}
            </h2>
            <p className="text-sm sm:text-base text-amber-100/70 mt-2 max-w-2xl">
              {t('bento.desc')}
            </p>
          </div>

          {/* Category Filter */}
          <div
            className="flex flex-wrap items-center gap-1.5 p-1 bg-[#1a0e09] border border-amber-900/40 rounded-xl self-start md:self-auto shadow-inner"
            role="tablist"
            aria-label="Filter estates by enclave"
          >
            {[
              { id: 'all', label: t('bento.filter.all') },
              { id: 'summerlin', label: t('bento.filter.summerlin') },
              { id: 'ascaya', label: t('bento.filter.ascaya') },
              { id: 'offmarket', label: t('bento.filter.offmarket') },
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none ${
                    isActive
                      ? 'bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold shadow-md shadow-black/40'
                      : 'text-amber-200/70 hover:text-white hover:bg-[#27150e]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid Architecture */}
        <motion.div
          layout
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const isWide = index === 0;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: cubicEase,
                  }}
                  onClick={() => onSelectCaseStudy(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectCaseStudy(project);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  data-cursor-label="ESTATE"
                  aria-label={`View estate dossier: ${project.title}`}
                  className={`cursor-card group cursor-pointer rounded-2xl overflow-hidden border border-amber-900/40 bg-[#1c100a]/70 hover:border-amber-600/60 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none ${
                    isWide
                      ? 'md:col-span-12 lg:col-span-8'
                      : 'md:col-span-6 lg:col-span-4'
                  }`}
                >
                  {/* Visual Image Container */}
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-[#120a07]">
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#120a07]/90 via-[#120a07]/20 to-transparent opacity-85 group-hover:opacity-65 transition-opacity"
                      aria-hidden="true"
                    />

                    {/* Card Overlays */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs gap-2 pointer-events-none">
                      {/* Enclave badge */}
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium tracking-wide uppercase bg-[#140b07]/85 backdrop-blur-md border border-amber-700/50 text-amber-200 shadow-sm">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            project.category === 'summerlin'
                              ? 'bg-amber-400'
                              : project.category === 'ascaya'
                              ? 'bg-orange-400'
                              : 'bg-emerald-400'
                          }`}
                          aria-hidden="true"
                        />
                        <span>{project.categoryLabel}</span>
                      </span>

                      {/* Price Bracket Tag */}
                      <span className="text-amber-300 font-mono font-semibold bg-[#140b07]/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-amber-700/50 text-[11px]">
                        {project.priceBracket}
                      </span>
                    </div>

                    {/* Architectural Specifications Pill */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center gap-3 text-[11px] text-amber-200/90 font-mono pointer-events-none bg-[#120a07]/80 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-amber-900/40">
                      <span>{project.specs.sqft}</span>
                      <span className="text-amber-800">·</span>
                      <span>{project.specs.beds}</span>
                      <span className="text-amber-800">·</span>
                      <span>{project.specs.baths}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-amber-300/70 mb-2">
                        <span className="text-white font-medium">{project.specs.enclave}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.location}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-semibold text-white font-display group-hover:text-amber-300 transition-colors mb-2">
                        {project.title}
                      </h3>

                      <p className="text-sm text-amber-100/70 leading-relaxed line-clamp-2">
                        {project.summary}
                      </p>
                    </div>

                    {/* Card Action Link */}
                    <div className="flex items-center justify-between pt-5 mt-4 border-t border-amber-900/40 text-xs sm:text-sm font-semibold text-amber-300 group-hover:text-white transition-colors">
                      <span>{t('bento.badge.view')}</span>
                      <div className="w-8 h-8 rounded-full bg-[#2a170f] group-hover:bg-amber-600 group-hover:text-white flex items-center justify-center transition-colors">
                        <ArrowUpRight className="w-4 h-4 text-amber-300 group-hover:text-white" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};
