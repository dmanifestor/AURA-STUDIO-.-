/**
 * AURA Studio — Mobile-First Interactive Homepage
 * Built under the Universal Elementor Interactive Homepage Build Framework
 * SEO, WCAG 2.2 AA, and Mobile-First Architecture
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { WorksBentoSection } from './components/WorksBentoSection';
import { DisciplinesSection } from './components/DisciplinesSection';
import { StudioSection } from './components/StudioSection';
import { ProjectInitiatorSection } from './components/ProjectInitiatorSection';
import { CaseStudyModal } from './components/CaseStudyModal';
import { QuickNavigationDrawer } from './components/QuickNavigationDrawer';
import { Footer } from './components/Footer';
import { CaseStudy } from './data/portfolioData';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [preselectedDiscipline, setPreselectedDiscipline] = useState<string | undefined>(undefined);

  // Smooth navigation to a specific scene
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      const navOffset = 70;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Active scene observer
  useEffect(() => {
    const sectionIds = ['hero', 'works', 'disciplines', 'studio', 'inquiry'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: '-20% 0px -40% 0px',
          threshold: 0.1,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  const handleInitiateScopeWithDiscipline = (disciplineId: string) => {
    setPreselectedDiscipline(disciplineId);
    scrollToSection('inquiry');
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col relative selection:bg-amber-400 selection:text-zinc-950">
      {/* WCAG 2.2 AA Skip Link */}
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 bg-amber-400 text-zinc-950 font-bold px-4 py-2 rounded-lg shadow-lg focus-visible:outline-none"
      >
        Skip to main content
      </a>

      {/* Top Bar Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenInquiry={() => scrollToSection('inquiry')}
      />

      {/* Main Semantic Landmark */}
      <main id="main-content" className="flex-1">
        {/* Scene 1: The Overture (Hero & Brand Ethos) */}
        <HeroSection
          onExploreWorks={() => scrollToSection('works')}
          onInitiateScope={() => scrollToSection('inquiry')}
        />

        {/* Scene 2: Selected Case Studies (Bento Showcase) */}
        <WorksBentoSection
          onSelectCaseStudy={(caseStudy) => setSelectedCaseStudy(caseStudy)}
        />

        {/* Scene 3: Disciplines & Method (Interactive Capability Switcher) */}
        <DisciplinesSection
          onInitiateScopeWithDiscipline={handleInitiateScopeWithDiscipline}
        />

        {/* Scene 4: The Collective (Studio Culture & Verified Citations) */}
        <StudioSection />

        {/* Scene 5: Project Initiation (Interactive Scope Estimator) */}
        <ProjectInitiatorSection
          preselectedDiscipline={preselectedDiscipline}
        />
      </main>

      {/* Mixed Navigation Controllers (Desktop Indexer & Mobile Quick Dock) */}
      <QuickNavigationDrawer
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Interactive Case Study Lightbox Modal */}
      <CaseStudyModal
        caseStudy={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        onInitiateSimilarScope={(category) => {
          const map: Record<string, string> = {
            spatial: 'spatial-architecture',
            digital: 'digital-systems',
            brand: 'brand-identities',
          };
          handleInitiateScopeWithDiscipline(map[category] || 'spatial-architecture');
        }}
      />

      {/* Accessible Footer */}
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
