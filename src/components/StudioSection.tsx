import React from 'react';
import { CLIENT_TESTIMONIALS } from '../data/portfolioData';
import { Quote, MapPin, Award } from 'lucide-react';
import { motion } from 'motion/react';
import directorPortraitImg from '../assets/images/studio_director_portrait_1792374581170.jpg';

export const StudioSection: React.FC = () => {
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
      aria-label="Studio Culture, Leadership, and Verifiable Client Citations"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={sectionVariants}
      className="py-20 md:py-28 border-b border-zinc-800/80 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-medium text-amber-400 uppercase tracking-wider mb-2">
            <span className="font-mono">SCENE 04</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>The Atelier</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mb-4">
            A Collective of Architects, Typographers & Systems Engineers
          </h2>
          <p className="text-base text-zinc-300 leading-relaxed">
            Founded on the conviction that timeless design requires both physical tactile mastery and algorithmic precision. We maintain an intentional small-footprint atelier to ensure senior architectural immersion on every single engagement.
          </p>
        </div>

        {/* 2-Column Studio Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          {/* Creative Director Portrait & Biography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-zinc-900/40 border border-zinc-800 shadow-xl"
          >
            <div>
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-zinc-950 mb-6 border border-zinc-800/80">
                <img
                  src={directorPortraitImg}
                  alt="Elena Chen, Founder & Creative Director of AURA Studio, in her architectural workshop"
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />
                <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-zinc-300 bg-zinc-950/80 backdrop-blur-md px-3 py-1.5 rounded border border-zinc-800">
                  Elena Chen · Founder & Lead Architect
                </div>
              </div>

              <h3 className="text-xl font-bold text-white font-display mb-2">
                "Form is not an arbitrary gesture; it is an uncompromising response to material, site, and purpose."
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Prior to founding AURA in 2019, Elena led spatial commissions across Northern Europe and East Asia. Her philosophy unites traditional Japanese joinery principles with high-throughput digital systems.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-zinc-800/80 flex items-center justify-between text-xs text-zinc-400">
              <span className="font-mono">Studio Founded 2019</span>
              <span>San Francisco & Copenhagen</span>
            </div>
          </motion.div>

          {/* Studio Principles & Evidence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-between space-y-6"
          >
            {/* Core Manifesto Box */}
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-900/30 border border-zinc-800/80">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-400 mb-4 flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-400" aria-hidden="true" />
                The Atelier Constitution
              </h4>
              <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
                <p>
                  <strong className="text-white font-medium">1. Anti-Transient Craft:</strong> We deliberately reject transient design micro-trends that age poorly within 18 months. Every artifact we produce is engineered to maintain cultural and aesthetic resonance for at least a decade.
                </p>
                <p>
                  <strong className="text-white font-medium">2. Zero-Handoff Engineering:</strong> Our physical architects write code, and our creative technologists understand load-bearing tectonic cantilevers. There is zero translation loss between concept sketch and deployed reality.
                </p>
                <p>
                  <strong className="text-white font-medium">3. Measured Ecological Accountability:</strong> Every physical build incorporates circular mass timber and zero-carbon envelope life cycle assessments verified through independent environmental auditors.
                </p>
              </div>
            </div>

            {/* Studio Locations Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                  <span>SAN FRANCISCO ATELIER</span>
                </div>
                <div className="text-sm font-medium text-white mb-1">
                  450 Mission Street, Suite 900
                </div>
                <div className="text-xs text-zinc-400">
                  Primary Workshop & Spatial Fabrication Lab
                </div>
              </div>

              <div className="p-5 rounded-xl bg-zinc-950/60 border border-zinc-800/80">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-2">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                  <span>COPENHAGEN RESEARCH LAB</span>
                </div>
                <div className="text-sm font-medium text-white mb-1">
                  Frederiksgade 12, Indre By
                </div>
                <div className="text-xs text-zinc-400">
                  Material Research & Scandinavian Joinery Archive
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Attributable Client Testimonials Strip with Staggered Viewport Entrance */}
        <motion.div
          className="pt-10 border-t border-zinc-800/80"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
        >
          <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-6">
            Verifiable Institutional Citations
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLIENT_TESTIMONIALS.map((testimonial, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 sm:p-7 rounded-xl bg-zinc-900/40 border border-zinc-800/70 flex flex-col justify-between"
              >
                <div className="mb-4">
                  <Quote className="w-5 h-5 text-amber-400/80 mb-3" aria-hidden="true" />
                  <p className="text-sm sm:text-base text-zinc-200 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-zinc-400">{testimonial.role}, {testimonial.organization}</div>
                  </div>
                  <div className="text-zinc-500 font-mono">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
