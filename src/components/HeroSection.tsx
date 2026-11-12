import React, { useState } from 'react';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { STUDIO_METRICS } from '../data/portfolioData';
import vegasEstateImg from '../assets/images/vegas_luxury_estate_1794215022784.jpg';
import { useLanguage } from '../context/LanguageContext';

interface HeroSectionProps {
  onExploreWorks: () => void;
  onInitiateScope: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreWorks,
  onInitiateScope,
}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { t } = useLanguage();

  const cubicEase = [0.16, 1, 0.3, 1] as const;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
    <section
      id="hero"
      aria-label="Studio Overview and Prime Residential Statement"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-amber-900/30"
    >
      {/* Subtle warm bronze ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-amber-600/10 blur-[150px] pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch mb-16 lg:mb-20">
          {/* Left Column: Typographic Hierarchy with Staggered Fade-in */}
          <motion.div
            className="lg:col-span-7 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Clean unboxed editorial kicker */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 text-xs md:text-sm font-medium tracking-wide uppercase mb-4"
            >
              <span className="text-amber-400 font-semibold font-mono">Universal Visual Studio</span>
              <span aria-hidden="true" className="text-amber-800">·</span>
              <span className="text-amber-200">wilsonvegas</span>
              <span aria-hidden="true" className="text-amber-800">·</span>
              <span className="text-zinc-400">Las Vegas Prime Estates</span>
            </motion.div>

            {/* Display Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] font-display mb-6"
              style={{ textWrap: 'balance' }}
            >
              {t('hero.title.lead')}{' '}
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent">
                {t('hero.title.accent')}
              </span>
            </motion.h1>

            {/* Lead Prose */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-amber-100/80 max-w-2xl font-normal leading-relaxed mb-8"
            >
              {t('hero.desc')}
            </motion.p>

            {/* Primary & Secondary Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1"
            >
              <button
                onClick={onExploreWorks}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-500 hover:to-amber-700 border border-amber-500/50 rounded-lg transition-all shadow-lg shadow-black/50 active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
              >
                <span>{t('hero.cta.primary')}</span>
                <ArrowRight className="w-4 h-4 text-amber-200" aria-hidden="true" />
              </button>

              <button
                onClick={onInitiateScope}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-amber-100 bg-[#23150d]/80 hover:bg-[#341d13] hover:border-amber-500/60 border border-amber-900/60 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
              >
                <span>{t('hero.cta.secondary')}</span>
              </button>
            </motion.div>

            {/* Quiet Credential Footnote */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mt-8 pt-6 border-t border-amber-900/40 text-xs text-amber-200/70"
            >
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
              <span>Discreet acquisition advisory shielded by bilateral NDA standards.</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Large Cinematic Visual Container */}
          <motion.div
            className="lg:col-span-5 flex"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div
              data-cursor-label="ESTATE"
              className="cursor-card relative w-full rounded-2xl overflow-hidden border border-amber-900/40 bg-[#1b100a] shadow-2xl flex flex-col justify-end min-h-[380px] sm:min-h-[440px] group"
            >
              {/* Fallback container while loading */}
              {!imageLoaded && !imageError && (
                <div
                  className="absolute inset-0 bg-gradient-to-br from-[#23130c] via-[#160b07] to-[#23130c] animate-pulse flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Compass className="w-8 h-8 text-amber-400 animate-spin" />
                </div>
              )}

              {imageError ? (
                <div className="absolute inset-0 bg-gradient-to-br from-[#23130c] to-[#140b07] flex flex-col items-center justify-center p-6 text-center">
                  <Compass className="w-10 h-10 text-amber-400 mb-3" />
                  <p className="text-sm font-medium text-amber-100">The Ridges Cantilevered Promontory</p>
                  <p className="text-xs text-amber-300/70 mt-1">Summerlin, Las Vegas NV</p>
                </div>
              ) : (
                <img
                  src={vegasEstateImg}
                  alt="Ultra-luxury modern residential estate in The Ridges, Las Vegas with illuminated infinity pool and Red Rock Canyon at twilight"
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              )}

              {/* Scrim Overlay for Measured Contrast (WCAG AA) */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#120a07]/95 via-[#120a07]/40 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Bottom Card Contextual Overlay */}
              <div className="relative p-6 z-10">
                <div className="flex items-center gap-2 text-xs text-amber-200/80 mb-1.5">
                  <span className="font-mono text-amber-400 font-semibold">SCENE 01</span>
                  <span aria-hidden="true" className="text-amber-800">·</span>
                  <span>The Ridges Promontory</span>
                  <span aria-hidden="true" className="text-amber-800">·</span>
                  <span className="text-amber-300 font-mono">36.1472° N, 115.3341° W</span>
                </div>
                <h2 className="text-lg font-semibold text-white font-display">
                  Where desert horizon meets architectural gravitas.
                </h2>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Metric Proof Strip */}
        <motion.div
          className="pt-8 border-t border-amber-900/30"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 lg:gap-6">
            {STUDIO_METRICS.map((metric, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: cubicEase },
                  },
                }}
                className="flex flex-col space-y-1.5 p-4 rounded-xl bg-[#20120b]/60 border border-amber-900/40"
              >
                <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-amber-300 tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">
                  {metric.label}
                </div>
                <div className="text-xs text-amber-200/60 leading-snug">
                  {metric.context}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
