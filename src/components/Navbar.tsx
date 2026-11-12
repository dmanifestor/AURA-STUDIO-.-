import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import luxuryLogo from '../assets/images/uvs_luxury_logo_1794215021469.jpg';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenInquiry,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: language === 'en' ? 'Overview' : 'Inicio' },
    { id: 'works', label: t('nav.estates') },
    { id: 'disciplines', label: t('nav.capabilities') },
    { id: 'studio', label: t('nav.atelier') },
    { id: 'inquiry', label: t('nav.inquiry') },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#180e0a]/92 backdrop-blur-md border-b border-amber-900/40 shadow-xl shadow-black/60 py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Strict 3-Zone Top Bar Contract */}
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Brand Logo & Wordmark (Responsive home navigation to top) */}
          <button
            onClick={() => handleLinkClick('hero')}
            className="group flex items-center gap-3 text-left focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none rounded-lg p-0.5 transition-transform active:scale-95"
            aria-label="Universal Visual Studio Home - Return to top"
          >
            <div className="relative">
              <img
                src={luxuryLogo}
                alt="Universal Visual Studio Architectural Crest"
                className="h-9 sm:h-10 w-9 sm:w-10 rounded-full object-cover border border-amber-600/40 transition-transform duration-300 group-hover:scale-105 drop-shadow-md"
              />
              <span className="absolute -inset-1 rounded-full bg-amber-500/20 blur-sm pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-base sm:text-lg font-bold tracking-tight text-white whitespace-nowrap font-display">
                  Universal Visual Studio
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] font-mono font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/30">
                  wilsonvegas
                </span>
              </div>
              <span className="text-[11px] font-mono text-amber-200/70 hidden sm:block">
                Las Vegas Luxury Real Estate
              </span>
            </div>
          </button>

          {/* Zone 2: Clean Single-Line Navigation Links */}
          <nav
            className="hidden lg:flex items-center gap-7 text-sm font-medium text-zinc-300"
            aria-label="Main Navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleLinkClick(item.id)}
                  className={`relative py-1 transition-colors whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-zinc-300 hover:text-amber-200'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-300 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Language Toggle & Primary Action */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* Subtle Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-amber-800/60 hover:border-amber-500/80 bg-[#25150d]/80 text-xs font-mono text-amber-200 transition-all focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none active:scale-95"
              aria-label={`Switch language to ${language === 'en' ? 'Spanish' : 'English'}`}
              title={`Switch language to ${language === 'en' ? 'Español' : 'English'}`}
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
              <span className="font-semibold text-white">{language.toUpperCase()}</span>
              <span className="text-zinc-500 text-[10px]">|</span>
              <span className="text-zinc-400 text-[10px]">{language === 'en' ? 'ES' : 'EN'}</span>
            </button>

            {/* Primary Action Button */}
            <button
              onClick={onOpenInquiry}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs md:text-sm font-semibold text-white bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-500 hover:to-amber-700 border border-amber-500/40 rounded-lg transition-all shadow-lg shadow-black/40 whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none active:scale-[0.98]"
            >
              <span>{t('nav.cta')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-200" aria-hidden="true" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-zinc-300 hover:text-white rounded-lg hover:bg-zinc-800 transition-colors focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-amber-400" aria-hidden="true" />
              ) : (
                <Menu className="w-5 h-5 text-amber-400" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-amber-900/40 bg-[#170e0a]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleLinkClick(item.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-amber-950/60 text-white font-semibold border border-amber-600/40'
                    : 'text-zinc-300 hover:bg-zinc-900/80 hover:text-amber-200'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="pt-2 border-t border-amber-900/40 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold text-sm shadow-md hover:from-amber-500 hover:to-amber-600 transition-colors"
            >
              <span>{t('nav.cta')}</span>
              <ArrowUpRight className="w-4 h-4 text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
