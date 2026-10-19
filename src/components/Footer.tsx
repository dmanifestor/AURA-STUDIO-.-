import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Copy, Check, Github } from 'lucide-react';
import { motion } from 'motion/react';
import brandLogo from '../assets/manny/footer-logo.png';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [sfTime, setSfTime] = useState<string>('');
  const [cphTime, setCphTime] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const emailAddress = 'inquiries@aurastudio.design';

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setSfTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        })
      );
      setCphTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Europe/Copenhagen',
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
      className="bg-zinc-950 text-zinc-400 border-t border-zinc-800/80 pt-16 pb-24 md:pb-16"
      aria-label="Studio Footer & Direct Coordinates"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800/60">
          {/* Studio Brand & Value Statement */}
          <div className="md:col-span-5 space-y-4">
            <button
              onClick={() => onNavigate('hero')}
              className="group flex items-center gap-3 text-left focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none rounded-lg p-0.5 transition-transform active:scale-95"
              aria-label="Return to top of page"
            >
              <img
                src={brandLogo}
                alt="AURA / DDM GURU Logo"
                className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-amber-400 transition-colors font-display">
                AURA STUDIO
              </span>
            </button>
            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Spatial architecture, generative technology, and enduring brand identities. Engineered with material precision and cultural depth.
            </p>
            <div className="flex flex-col gap-1.5 pt-1">
              <a
                href="https://github.com/djoelkl7/the-manny"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-amber-400 transition-colors group"
                title="View project repository on GitHub"
              >
                <Github className="w-3.5 h-3.5 text-zinc-400 group-hover:text-amber-400" aria-hidden="true" />
                <span>github.com/djoelkl7/the-manny</span>
                <ArrowUpRight className="w-3 h-3 text-zinc-500 group-hover:text-amber-400" aria-hidden="true" />
              </a>
              <div className="text-xs text-zinc-500 font-mono">
                WCAG 2.2 AA Conformance Verified · Mobile-First Responsive Indexing
              </div>
            </div>
          </div>

          {/* Quick Scene Links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
              Navigation Index
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('hero')}
                  className="hover:text-white transition-colors text-left"
                >
                  Overview & Statement
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('works')}
                  className="hover:text-white transition-colors text-left"
                >
                  Selected Works & Case Studies
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('disciplines')}
                  className="hover:text-white transition-colors text-left"
                >
                  Disciplines & Methodology
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('studio')}
                  className="hover:text-white transition-colors text-left"
                >
                  The Atelier & Collective
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('inquiry')}
                  className="hover:text-white transition-colors text-left text-amber-400"
                >
                  Scope Estimator & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Real-time Studio Timezones & Contact with One-Click Copy */}
          <div className="md:col-span-4 space-y-4">
            <div className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
              Atelier Coordinates
            </div>

            <div className="space-y-2 text-xs font-mono">
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/60">
                <span className="text-zinc-300">San Francisco (PST)</span>
                <span className="text-amber-400 font-semibold">{sfTime || '13:15'}</span>
              </div>
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/60">
                <span className="text-zinc-300">Copenhagen (CET)</span>
                <span className="text-amber-400 font-semibold">{cphTime || '22:15'}</span>
              </div>
            </div>

            {/* High-Intent Outreach Box with One-Click Copy */}
            <div className="pt-2">
              <div className="text-xs text-zinc-500 mb-1.5 font-medium">Direct Inquiries</div>
              <div className="flex items-center gap-2 p-1.5 pr-2 rounded-xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-colors">
                <a
                  href={`mailto:${emailAddress}`}
                  className="flex-1 flex items-center justify-between px-2.5 py-1 text-xs sm:text-sm text-zinc-200 hover:text-white font-mono truncate transition-colors focus-visible:ring-1 focus-visible:ring-amber-400 focus-visible:outline-none rounded"
                  title="Open in your default email client"
                >
                  <span className="truncate">{emailAddress}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 shrink-0 ml-1.5" aria-hidden="true" />
                </a>

                {/* One-Click Copy Button */}
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all shrink-0 active:scale-95 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none ${
                    copied
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700/80'
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
                      <Copy className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />
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

        {/* Quiet Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} AURA Studio Group Inc. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>Universal Elementor Interactive Framework</span>
            <span aria-hidden="true">·</span>
            <span>Zero Template Dependencies</span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
