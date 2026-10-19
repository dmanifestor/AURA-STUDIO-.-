import React, { useState } from 'react';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { STUDIO_METRICS } from '../data/portfolioData';
import heroStudioImg from '../assets/images/hero_studio_architecture_1792374579891.jpg';

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
      aria-label="Studio Overview and Statement"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-zinc-800/80"
    >
      {/* Subtle atmospheric ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/5 blur-[140px] pointer-events-none rounded-full"
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
              className="flex items-center gap-2 text-xs md:text-sm font-medium text-amber-400/90 tracking-wide uppercase mb-4"
            >
              <span>San Francisco</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Copenhagen</span>
              <span aria-hidden="true" className="text-zinc-600">·</span>
              <span>Global Practice</span>
            </motion.div>

            {/* Display Headline with text-wrap: balance */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1] font-display mb-6"
              style={{ textWrap: 'balance' }}
            >
              Architectural Gravitas Meets Bespoke Digital Systems.
            </motion.h1>

            {/* Lead Prose */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-zinc-300 max-w-2xl font-normal leading-relaxed mb-8"
            >
              AURA is an avant-garde creative atelier bridging physical space, spatial technology, and enduring brand identities. We collaborate with visionary founders, cultural stewards, and architectural patrons worldwide.
            </motion.p>

            {/* Primary & Secondary Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-1"
            >
              <button
                onClick={onExploreWorks}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-zinc-950 bg-zinc-100 hover:bg-white rounded-lg transition-all shadow-md hover:shadow-lg active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
              >
                <span>Explore Selected Works</span>
                <ArrowRight className="w-4 h-4 text-zinc-800" aria-hidden="true" />
              </button>

              <button
                onClick={onInitiateScope}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-zinc-200 bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-700/80 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
              >
                <span>Initiate Scope Estimator</span>
              </button>
            </motion.div>

            {/* Quiet Credential Footnote */}
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-3 mt-8 pt-6 border-t border-zinc-800/60 text-xs text-zinc-400"
            >
              <ShieldCheck className="w-4 h-4 text-zinc-500 shrink-0" aria-hidden="true" />
              <span>Full lifecycle commitment: from tectonic research through commissioned reality.</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Large Cinematic Visual Container */}
          <motion.div
            className="lg:col-span-5 flex"
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60 shadow-2xl flex flex-col justify-end min-h-[380px] sm:min-h-[440px] group">
              {/* Fallback container if image fails or while loading */}
              {!imageLoaded && !imageError && (
                <div
                  className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 animate-pulse flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Compass className="w-8 h-8 text-zinc-600 animate-spin" />
                </div>
              )}

              {imageError ? (
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-zinc-950 flex flex-col items-center justify-center p-6 text-center">
                  <Compass className="w-10 h-10 text-amber-500/70 mb-3" />
                  <p className="text-sm font-medium text-zinc-300">AURA Studio Atelier View</p>
                  <p className="text-xs text-zinc-500 mt-1">San Francisco Monolithic Design Shell</p>
                </div>
              ) : (
                <img
                  src={heroStudioImg}
                  alt="AURA Studio physical workshop featuring monolithic concrete reception desk and floor-to-ceiling glass overlooking the city at dusk"
                  className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-105 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              )}

              {/* Scrim Overlay for Measured Contrast (WCAG AA 4.5:1 text guarantee) */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Bottom Card Contextual Overlay */}
              <div className="relative p-6 z-10">
                <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1.5">
                  <span className="font-mono text-amber-400">SCENE 01</span>
                  <span aria-hidden="true">·</span>
                  <span>Physical Atelier</span>
                  <span aria-hidden="true">·</span>
                  <span>37.7904° N, 122.3995° W</span>
                </div>
                <h2 className="text-lg font-semibold text-white font-display">
                  Where spatial models become living landmarks.
                </h2>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Metric Proof Strip */}
        <motion.div
          className="pt-8 border-t border-zinc-800/80"
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
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
                className="flex flex-col space-y-1.5 p-4 rounded-xl bg-zinc-900/40 border border-zinc-800/60"
              >
                <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white tabular-nums">
                  {metric.value}
                </div>
                <div className="text-xs sm:text-sm font-medium text-zinc-200">
                  {metric.label}
                </div>
                <div className="text-xs text-zinc-500 leading-snug">
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
