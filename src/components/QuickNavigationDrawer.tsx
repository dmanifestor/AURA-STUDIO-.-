import React, { useState } from 'react';
import { Compass, ChevronUp, Send, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface QuickNavigationDrawerProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const QuickNavigationDrawer: React.FC<QuickNavigationDrawerProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const { language, t } = useLanguage();

  const SCENES = [
    { id: 'hero', index: '01', label: language === 'en' ? 'The Overture · Horizon' : 'El Horizonte', shortLabel: language === 'en' ? 'Overview' : 'Inicio' },
    { id: 'works', index: '02', label: language === 'en' ? 'Curated Estates' : 'Propiedades Curadas', shortLabel: language === 'en' ? 'Estates' : 'Propiedades' },
    { id: 'disciplines', index: '03', label: language === 'en' ? 'Advisory & Scope' : 'Asesoría y Alcance', shortLabel: language === 'en' ? 'Advisory' : 'Asesoría' },
    { id: 'studio', index: '04', label: language === 'en' ? 'The Atelier & Salon' : 'El Salón y Práctica', shortLabel: language === 'en' ? 'Salon' : 'Salón' },
    { id: 'inquiry', index: '05', label: language === 'en' ? 'Confidential Inquiry' : 'Consulta Privada', shortLabel: language === 'en' ? 'Inquire' : 'Consulta' },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Right-Side Scene Indexer */}
      <aside
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end space-y-2 pointer-events-auto"
        aria-label="Scene Indexer"
      >
        <div className="p-2.5 rounded-2xl bg-[#1b100a]/85 backdrop-blur-md border border-amber-900/40 shadow-2xl flex flex-col space-y-1.5">
          <div className="text-[10px] font-mono text-amber-400/80 uppercase px-2 py-1 tracking-wider border-b border-amber-900/40 mb-1">
            Story Index
          </div>
          {SCENES.map((scene) => {
            const isActive = activeSection === scene.id;
            return (
              <button
                key={scene.id}
                onClick={() => onNavigate(scene.id)}
                className={`group flex items-center justify-between gap-3 px-3 py-1.5 rounded-lg text-xs transition-all ${
                  isActive
                    ? 'bg-[#2e1910] text-white font-medium border border-amber-500/40 shadow-sm'
                    : 'text-amber-200/60 hover:text-white hover:bg-[#24130c]'
                }`}
                aria-current={isActive ? 'step' : undefined}
                aria-label={`Jump to Scene ${scene.index}: ${scene.label}`}
              >
                <span className="font-mono text-[11px] text-amber-400 font-semibold">
                  {scene.index}
                </span>
                <span className="whitespace-nowrap">
                  {scene.label}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    isActive ? 'bg-amber-400 scale-125 shadow-sm shadow-amber-500/50' : 'bg-amber-900/70 group-hover:bg-amber-600'
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>
      </aside>

      {/* Mobile-First Floating Quick Dock */}
      <div
        className="md:hidden fixed bottom-4 left-4 right-4 z-40 pointer-events-auto"
        aria-label="Mobile Navigation Dock"
      >
        <div className="h-12 bg-[#1b100a]/92 backdrop-blur-lg border border-amber-900/50 rounded-full px-4 flex items-center justify-between shadow-2xl shadow-black/80">
          {/* Quick Scene Drawer Trigger */}
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="flex items-center gap-2 text-xs font-medium text-amber-200/80 hover:text-white"
            aria-label="Open Scene Navigator"
          >
            <Compass className="w-4 h-4 text-amber-400" aria-hidden="true" />
            <span className="font-mono text-amber-400 font-semibold">
              {SCENES.find((s) => s.id === activeSection)?.index || '01'}
            </span>
            <span className="truncate max-w-[120px]">
              {SCENES.find((s) => s.id === activeSection)?.shortLabel || 'Overview'}
            </span>
          </button>

          {/* Quick Jump Direct Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('inquiry')}
              className="flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-amber-600 to-amber-700 text-white font-semibold text-xs rounded-full shadow-sm hover:brightness-110"
            >
              <span>{t('nav.inquiry')}</span>
              <Send className="w-3 h-3 text-white" aria-hidden="true" />
            </button>

            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-full bg-[#27150e] flex items-center justify-center text-amber-300 hover:text-white"
              aria-label="Back to Top"
            >
              <ChevronUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Scene Selector Bottom Sheet */}
      {mobileDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex flex-col justify-end p-4 md:hidden animate-in fade-in duration-150"
          onClick={() => setMobileDrawerOpen(false)}
        >
          <div
            className="bg-[#1c100a] border border-amber-900/50 rounded-2xl p-5 space-y-4 max-h-[70vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-amber-900/40">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 font-semibold">
                <Compass className="w-4 h-4 text-amber-400" aria-hidden="true" />
                <span>DIRECT SCENE JUMP</span>
              </div>
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="p-1 rounded-lg text-amber-300 hover:text-white"
                aria-label="Close Scene Selector"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="space-y-2">
              {SCENES.map((scene) => {
                const isActive = activeSection === scene.id;
                return (
                  <button
                    key={scene.id}
                    onClick={() => {
                      onNavigate(scene.id);
                      setMobileDrawerOpen(false);
                    }}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-left text-sm transition-colors ${
                      isActive
                        ? 'bg-[#2d180f] text-white font-medium border border-amber-500/40'
                        : 'text-amber-100 hover:bg-[#25130c]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-amber-400 font-semibold">
                        {scene.index}
                      </span>
                      <span>{scene.label}</span>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-500/50" aria-hidden="true" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
