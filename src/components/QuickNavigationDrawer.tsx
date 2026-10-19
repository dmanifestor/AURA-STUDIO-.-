import React, { useState } from 'react';
import { Compass, ChevronUp, Send, X } from 'lucide-react';

interface QuickNavigationDrawerProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const SCENES = [
  { id: 'hero', index: '01', label: 'The Overture', shortLabel: 'Overview' },
  { id: 'works', index: '02', label: 'Selected Works', shortLabel: 'Works' },
  { id: 'disciplines', index: '03', label: 'Disciplines & Method', shortLabel: 'Method' },
  { id: 'studio', index: '04', label: 'The Collective', shortLabel: 'Studio' },
  { id: 'inquiry', index: '05', label: 'Project Initiation', shortLabel: 'Inquiry' },
];

export const QuickNavigationDrawer: React.FC<QuickNavigationDrawerProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Desktop Floating Right-Side Scene Indexer (Mixed Navigation Architecture) */}
      <aside
        className="hidden xl:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-end space-y-2 pointer-events-auto"
        aria-label="Scene Indexer"
      >
        <div className="p-2.5 rounded-2xl bg-zinc-950/80 backdrop-blur-md border border-zinc-800/80 shadow-2xl flex flex-col space-y-1.5">
          <div className="text-[10px] font-mono text-zinc-500 uppercase px-2 py-1 tracking-wider border-b border-zinc-800/60 mb-1">
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
                    ? 'bg-zinc-800 text-white font-medium shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900/60'
                }`}
                aria-current={isActive ? 'step' : undefined}
                aria-label={`Jump to Scene ${scene.index}: ${scene.label}`}
              >
                <span className="font-mono text-[11px] text-amber-400">
                  {scene.index}
                </span>
                <span className="whitespace-nowrap">
                  {scene.label}
                </span>
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    isActive ? 'bg-amber-400 scale-125' : 'bg-zinc-700 group-hover:bg-zinc-500'
                  }`}
                  aria-hidden="true"
                />
              </button>
            );
          })}
        </div>
      </aside>

      {/* Mobile-First Floating Quick Dock (Strictly under 15% viewport height cap) */}
      <div
        className="md:hidden fixed bottom-4 left-4 right-4 z-40 pointer-events-auto"
        aria-label="Mobile Navigation Dock"
      >
        <div className="h-12 bg-zinc-950/90 backdrop-blur-lg border border-zinc-800 rounded-full px-4 flex items-center justify-between shadow-2xl shadow-black/80">
          {/* Quick Scene Drawer Trigger */}
          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="flex items-center gap-2 text-xs font-medium text-zinc-300 hover:text-white"
            aria-label="Open Scene Navigator"
          >
            <Compass className="w-4 h-4 text-amber-400" aria-hidden="true" />
            <span className="font-mono text-amber-400">
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
              className="flex items-center gap-1.5 px-3 py-1 bg-zinc-100 text-zinc-950 font-medium text-xs rounded-full shadow-sm hover:bg-white"
            >
              <span>Inquire</span>
              <Send className="w-3 h-3 text-zinc-800" aria-hidden="true" />
            </button>

            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-300 hover:text-white"
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
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col justify-end p-4 md:hidden animate-in fade-in duration-150"
          onClick={() => setMobileDrawerOpen(false)}
        >
          <div
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-5 space-y-4 max-h-[70vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-zinc-800">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400">
                <Compass className="w-4 h-4" aria-hidden="true" />
                <span>DIRECT SCENE JUMP</span>
              </div>
              <button
                onClick={() => setMobileDrawerOpen(false)}
                className="p-1 rounded-lg text-zinc-400 hover:text-white"
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
                        ? 'bg-zinc-800 text-white font-medium'
                        : 'text-zinc-300 hover:bg-zinc-800/50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-amber-400">
                        {scene.index}
                      </span>
                      <span>{scene.label}</span>
                    </div>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-amber-400" aria-hidden="true" />
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
