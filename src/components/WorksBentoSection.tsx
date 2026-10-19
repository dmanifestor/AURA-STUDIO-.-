import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { CASE_STUDIES, CaseStudy } from '../data/portfolioData';

interface WorksBentoSectionProps {
  onSelectCaseStudy: (caseStudy: CaseStudy) => void;
}

export const WorksBentoSection: React.FC<WorksBentoSectionProps> = ({
  onSelectCaseStudy,
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'spatial' | 'digital' | 'brand'>('all');

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

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: cubicEase,
      },
    },
  };

  return (
    <motion.section
      id="works"
      aria-label="Selected Client Commissions and Architecture"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={sectionVariants}
      className="py-20 md:py-28 border-b border-zinc-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Natural Editorial Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-amber-400 uppercase tracking-wider mb-2">
              <span className="font-mono">SCENE 02</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Portfolio Archive</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Selected Works & Case Studies
            </h2>
          </div>

          {/* Category Filter: Segmented Functional Button Controls */}
          <div
            className="flex flex-wrap items-center gap-1.5 p-1 bg-zinc-900 border border-zinc-800 rounded-xl self-start md:self-auto"
            role="tablist"
            aria-label="Filter case studies by discipline"
          >
            {[
              { id: 'all', label: 'All Works' },
              { id: 'spatial', label: 'Spatial' },
              { id: 'digital', label: 'Digital' },
              { id: 'brand', label: 'Brand' },
            ].map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`px-3.5 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none ${
                    isActive
                      ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/60'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Bento Grid Architecture with Staggered Viewport Entrance */}
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
                  variants={cardVariants}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: cubicEase }}
                  onClick={() => onSelectCaseStudy(project)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onSelectCaseStudy(project);
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-label={`View case study: ${project.title}`}
                  className={`group cursor-pointer rounded-2xl overflow-hidden border border-zinc-800/90 bg-zinc-900/40 hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none ${
                    isWide
                      ? 'md:col-span-12 lg:col-span-8'
                      : 'md:col-span-6 lg:col-span-4'
                  }`}
                >
                  {/* Visual Image Container */}
                  <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-zinc-950">
                    <img
                      src={project.imageSrc}
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity"
                      aria-hidden="true"
                    />

                    {/* Impact Tag (Unboxed Clean Overlay) */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs">
                      <span className="text-zinc-300 bg-zinc-950/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-zinc-800/80 font-mono">
                        {project.year}
                      </span>
                      <span className="text-amber-400 font-medium bg-zinc-950/70 backdrop-blur-md px-2.5 py-1 rounded-md border border-zinc-800/80">
                        {project.impactMetric}
                      </span>
                    </div>
                  </div>

                  {/* Card Content & Zero-Pill Metadata */}
                  <div className="p-6 sm:p-7 flex flex-col justify-between flex-1">
                    <div>
                      {/* Unboxed Metadata with Typographic Separator */}
                      <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                        <span className="text-zinc-300 font-medium">{project.categoryLabel}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.client}</span>
                        <span aria-hidden="true">·</span>
                        <span>{project.location}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-semibold text-white font-display group-hover:text-amber-400 transition-colors mb-2">
                        {project.title}
                      </h3>

                      <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                        {project.summary}
                      </p>
                    </div>

                    {/* Card Action Link */}
                    <div className="flex items-center justify-between pt-5 mt-4 border-t border-zinc-800/80 text-xs sm:text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                      <span>Inspect Full Case Study</span>
                      <div className="w-8 h-8 rounded-full bg-zinc-800 group-hover:bg-zinc-100 group-hover:text-zinc-950 flex items-center justify-center transition-colors">
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
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
