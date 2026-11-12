import React from 'react';
import { CLIENT_TESTIMONIALS } from '../data/portfolioData';
import { Quote, MapPin, Award } from 'lucide-react';
import { motion } from 'motion/react';
import salonImg from '../assets/images/vegas_advisory_salon_1794215038306.jpg';
import { useLanguage } from '../context/LanguageContext';

export const StudioSection: React.FC = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: cubicEase },
    },
  };

  return (
    <motion.section
      id="studio"
      aria-label="Studio Culture, Market Authority, and Client Citations"
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
            <span className="font-mono text-amber-400">{t('studio.scene')}</span>
            <span aria-hidden="true" className="text-amber-800">·</span>
            <span className="text-amber-200">{t('studio.kicker')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mb-4">
            {t('studio.title')}
          </h2>
          <p className="text-base text-amber-100/70 leading-relaxed">
            {t('studio.desc')}
          </p>
        </div>

        {/* 2-Column Advisory Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          {/* Executive Boardroom Visual & Leadership */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-[#1c100a]/80 border border-amber-900/40 shadow-xl"
          >
            <div>
              <div
                data-cursor-label="SALON"
                className="cursor-card relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-[#120a07] mb-6 border border-amber-800/40 group"
              >
                <img
                  src={salonImg}
                  alt="wilsonvegas private real estate advisory boardroom overlooking the Las Vegas Strip skyline"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#120a07]/80 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-amber-200 bg-[#120a07]/85 backdrop-blur-md px-3 py-1.5 rounded border border-amber-700/50 flex items-center justify-between">
                  <span>Executive Advisory Boardroom</span>
                  <span className="text-amber-400 font-semibold">wilsonvegas</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-white font-display mb-2">
                {t('studio.principal.quote')}
              </h3>
              <p className="text-sm text-amber-100/70 leading-relaxed">
                {t('studio.principal.bio')}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-amber-900/40 flex items-center justify-between text-xs text-amber-300/80">
              <span className="font-mono">Las Vegas Advisory Practice</span>
              <span>Summerlin & Henderson</span>
            </div>
          </motion.div>

          {/* Practice Constitution & Strategic Evidence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            {/* Core Manifesto Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#1c100a]/60 border border-amber-900/40">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" aria-hidden="true" />
                {t('studio.constitution.title')}
              </h4>
              <div className="space-y-4 text-sm text-amber-100/85 leading-relaxed">
                <p>
                  <strong className="text-white font-semibold">{t('studio.constitution.1')}</strong>
                </p>
                <p>
                  <strong className="text-white font-semibold">{t('studio.constitution.2')}</strong>
                </p>
                <p>
                  <strong className="text-white font-semibold">{t('studio.constitution.3')}</strong>
                </p>
              </div>
            </div>

            {/* Studio Locations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#140b07]/80 border border-amber-900/40">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                  <span>{t('studio.office.1.title')}</span>
                </div>
                <div className="text-sm font-medium text-white mb-1">
                  {t('studio.office.1.addr')}
                </div>
                <div className="text-xs text-amber-200/60">
                  {t('studio.office.1.desc')}
                </div>
              </div>

              <div className="p-5 rounded-xl bg-[#140b07]/80 border border-amber-900/40">
                <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                  <span>{t('studio.office.2.title')}</span>
                </div>
                <div className="text-sm font-medium text-white mb-1">
                  {t('studio.office.2.addr')}
                </div>
                <div className="text-xs text-amber-200/60">
                  {t('studio.office.2.desc')}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Client Citations Strip */}
        <motion.div
          className="pt-10 border-t border-amber-900/30"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <div className="text-xs font-semibold text-amber-300 uppercase tracking-wider mb-6">
            {t('studio.citations')}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLIENT_TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 sm:p-7 rounded-xl bg-[#1a0e09]/60 border border-amber-900/40 flex flex-col justify-between"
              >
                <div className="mb-4">
                  <Quote className="w-5 h-5 text-amber-400/80 mb-3" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-amber-100/90 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-amber-900/40 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-amber-200/70">{testimonial.role}, {testimonial.organization}</div>
                  </div>
                  <div className="text-amber-400 font-mono">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
