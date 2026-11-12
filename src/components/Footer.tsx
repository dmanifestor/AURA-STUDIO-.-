import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Copy, Check, Github, Phone, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import luxuryLogo from '../assets/images/uvs_luxury_logo_1794215021469.jpg';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [vegasTime, setVegasTime] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const { language, t } = useLanguage();

  const emailAddress = 'concierge@universalvisual.studio';

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setVegasTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
    };

    updateClocks();
    const interval = setInterval(updateClocks, 30000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(emailAddress);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = emailAddress;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#100705] text-amber-200/70 border-t border-amber-900/40 pt-16 pb-24 md:pb-16"
      aria-label="Studio Footer & Direct Coordinates"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-amber-900/30">
          {/* Brand & Value Statement */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => onNavigate('hero')}
              className="group flex items-center gap-3 text-left focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none rounded-lg p-0.5 transition-transform active:scale-95"
              aria-label="Return to top of page"
            >
              <img
                src={luxuryLogo}
                alt="Universal Visual Studio Crest"
                className="h-10 w-10 rounded-full object-cover border border-amber-600/50 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-300 transition-colors font-display">
                  Universal Visual Studio
                </span>
                <span className="text-xs font-mono text-amber-400">
                  wilsonvegas · Las Vegas Luxury Real Estate
                </span>
              </div>
            </button>
            <p className="text-sm text-amber-100/70 max-w-sm leading-relaxed">
              Curated architectural estates, modernist desert compounds, and confidential buyer representation across The Ridges, Summerlin, and Ascaya.
            </p>
            <div className="flex flex-col gap-1.5 pt-1">
              <a
                href="https://github.com/djoelkl7/the-manny"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-amber-300/80 hover:text-white transition-colors group"
                title="View project repository on GitHub"
              >
                <Github className="w-3.5 h-3.5 text-amber-400 group-hover:text-white" aria-hidden="true" />
                <span>github.com/djoelkl7/the-manny</span>
                <ArrowUpRight className="w-3 h-3 text-amber-400 group-hover:text-white" aria-hidden="true" />
              </a>
              <div className="text-xs text-amber-400/60 font-mono">
                WCAG 2.2 AA Conformance Verified · Mobile-First Responsive Indexing
              </div>
            </div>
          </div>

          {/* Quick Scene Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              {language === 'en' ? 'Portfolio & Services' : 'Portafolio y Servicios'}
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  {language === 'en' ? 'Overview & Overture' : 'Inicio y Horizonte'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('works')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  {t('nav.estates')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('disciplines')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  {t('nav.capabilities')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('studio')}
                  className="hover:text-amber-300 transition-colors text-left"
                >
                  {t('nav.atelier')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inquiry')}
                  className="hover:text-amber-300 transition-colors text-left text-amber-400 font-semibold"
                >
                  {t('nav.inquiry')}
                </button>
              </li>
            </ul>
          </div>

          {/* Real-time Las Vegas Timezone & Contact */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-semibold text-white uppercase tracking-wider">
              {language === 'en' ? 'Advisory Coordinates' : 'Coordenadas de Asesoría'}
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#190d08] border border-amber-900/40">
                <div className="flex items-center gap-2 text-amber-200">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                  <span>Las Vegas Salon (PST)</span>
                </div>
                <span className="text-amber-300 font-semibold">{vegasTime || '16:30'}</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#190d08] border border-amber-900/40">
                <div className="flex items-center gap-2 text-amber-200">
                  <Phone className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                  <span>Direct Private Line</span>
                </div>
                <a href="tel:+17028908800" className="text-white hover:text-amber-300 font-semibold">
                  +1 (702) 890-8800
                </a>
              </div>
            </div>

            {/* High-Intent Outreach Box with One-Click Copy */}
            <div className="pt-2">
              <div className="text-xs text-amber-300/80 mb-1.5 font-medium">
                {language === 'en' ? 'Direct Principal Inquiries' : 'Consultas Directas'}
              </div>
              <div className="flex items-center gap-2 p-1.5 pr-2 rounded-xl bg-[#190d08] border border-amber-900/50 hover:border-amber-700 transition-colors">
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex-1 flex items-center justify-between px-2.5 py-1 text-xs sm:text-sm text-white hover:text-amber-300 font-mono truncate transition-colors focus-visible:ring-1 focus-visible:ring-amber-500 focus-visible:outline-none rounded"
                  title="Open in your default email client"
                >
                  <span className="truncate">{emailAddress}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-amber-400 shrink-0 ml-1.5" aria-hidden="true" />
                </a>

                {/* One-Click Copy Button */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 active:scale-95 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none ${
                    copied
                      ? 'bg-emerald-600/30 text-emerald-300 border border-emerald-500/50'
                      : 'bg-[#2b170f] hover:bg-[#3d2015] text-amber-200 border border-amber-800/60'
                  }`}
                  aria-label="Copy studio inquiry email address to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
              <span className="sr-only" aria-live="polite">
                {copied ? 'Studio email address copied to clipboard.' : ''}
              </span>
            </div>
          </div>
        </div>

        {/* Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-amber-300/60">
          <div>
            © {new Date().getFullYear()} Universal Visual Studio Group Inc. All rights reserved. · wilsonvegas Division
          </div>
          <div className="flex items-center gap-6">
            <span>Summerlin & The Ridges</span>
            <span aria-hidden="true">·</span>
            <span>Ascaya & MacDonald Highlands</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
