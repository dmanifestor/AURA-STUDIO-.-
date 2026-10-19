import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectInitiatorSectionProps {
  preselectedDiscipline?: string;
}

export const ProjectInitiatorSection: React.FC<ProjectInitiatorSectionProps> = ({
  preselectedDiscipline,
}) => {
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>(
    preselectedDiscipline ? [preselectedDiscipline] : ['spatial-architecture']
  );

  useEffect(() => {
    if (preselectedDiscipline) {
      setSelectedDisciplines([preselectedDiscipline]);
    }
  }, [preselectedDiscipline]);
  const [budgetTier, setBudgetTier] = useState<string>('tier2');
  const [timeline, setTimeline] = useState<string>('standard');
  const [clientName, setClientName] = useState<string>('');
  const [clientEmail, setClientEmail] = useState<string>('');
  const [organization, setOrganization] = useState<string>('');
  const [projectBrief, setProjectBrief] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const toggleDiscipline = (id: string) => {
    if (selectedDisciplines.includes(id)) {
      if (selectedDisciplines.length > 1) {
        setSelectedDisciplines(selectedDisciplines.filter((d) => d !== id));
      }
    } else {
      setSelectedDisciplines([...selectedDisciplines, id]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName.trim() || !clientEmail.trim() || !projectBrief.trim()) {
      setErrorMsg('Please supply your name, direct contact email, and a brief description of the commission.');
      return;
    }
    if (!clientEmail.includes('@') || !clientEmail.includes('.')) {
      setErrorMsg('Please enter a valid business email address.');
      return;
    }

    setErrorMsg(null);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setClientName('');
    setClientEmail('');
    setOrganization('');
    setProjectBrief('');
  };

  return (
    <motion.section
      id="inquiry"
      aria-label="Interactive Project Initiation and Scope Estimator"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 md:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-medium text-amber-400 uppercase tracking-wider mb-2">
            <span className="font-mono">SCENE 05</span>
            <span aria-hidden="true" className="text-zinc-600">·</span>
            <span>Initiation & Scoping</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mb-4">
            Initiate a Commission or Exploratory Scope
          </h2>
          <p className="text-base text-zinc-300 leading-relaxed">
            Every engagement starts with structural clarity. Configure your anticipated scope, investment tier, and timeline parameters below for an immediate studio assessment.
          </p>
        </div>

        {/* Interactive Scope Estimator Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-zinc-900/60 border border-zinc-800 p-6 sm:p-8 lg:p-12 shadow-2xl"
        >
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-xl mx-auto text-center py-10 space-y-6"
              >
                <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-400 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  Inquiry Successfully Logged
                </h3>
                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  Thank you, <strong className="text-white">{clientName}</strong>. Our principals review incoming briefs every Tuesday and Thursday. A tailored preliminary project synthesis will be dispatched to <strong className="text-white">{clientEmail}</strong> within 48 business hours.
                </p>
                <div className="p-4 rounded-xl bg-zinc-950/80 border border-zinc-800 text-xs text-zinc-400 font-mono text-left space-y-1.5">
                  <div>Selected Disciplines: {selectedDisciplines.join(', ')}</div>
                  <div>Budget Target: {budgetTier === 'tier1' ? '$50k – $100k' : budgetTier === 'tier2' ? '$100k – $250k' : '$250k+'}</div>
                  <div>Timeline Stance: {timeline === 'accelerated' ? 'Accelerated (Under 3 mo)' : 'Standard Architectural Track'}</div>
                </div>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs sm:text-sm font-medium text-white transition-colors"
                >
                  Submit Another Specification
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-10"
              >
                {/* Step 1: Discipline Multi-Selection */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                    01. Select Applicable Project Disciplines
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'spatial-architecture', label: 'Spatial Architecture & Environments' },
                      { id: 'digital-systems', label: 'Digital Platforms & Interactive Systems' },
                      { id: 'brand-identities', label: 'Brand Systems & Monograph Craft' },
                    ].map((disc) => {
                      const isChecked = selectedDisciplines.includes(disc.id);
                      return (
                        <button
                          type="button"
                          key={disc.id}
                          onClick={() => toggleDiscipline(disc.id)}
                          className={`p-4 rounded-xl text-left border transition-all text-sm font-medium focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none ${
                            isChecked
                              ? 'bg-zinc-100 text-zinc-950 border-white shadow-md'
                              : 'bg-zinc-950/60 text-zinc-300 border-zinc-800 hover:border-zinc-700'
                          }`}
                          aria-pressed={isChecked}
                        >
                          <div className="flex items-center justify-between">
                            <span>{disc.label}</span>
                            <span className={`w-3.5 h-3.5 rounded-full border ${isChecked ? 'bg-zinc-950 border-zinc-950' : 'border-zinc-700'}`} />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Budget & Timeline Parameters */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                      02. Anticipated Investment Bracket (USD)
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: 'tier1', label: '$50,000 – $100,000', note: 'Single discipline or focused architectural study' },
                        { id: 'tier2', label: '$100,000 – $250,000', note: 'Standard comprehensive brand or spatial transformation' },
                        { id: 'tier3', label: '$250,000+', note: 'Full-spectrum architectural, digital & global rollout' },
                      ].map((tier) => {
                        const isSelected = budgetTier === tier.id;
                        return (
                          <label
                            key={tier.id}
                            className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-zinc-800/80 border-amber-400/80 text-white'
                                : 'bg-zinc-950/40 border-zinc-800 text-zinc-300 hover:bg-zinc-900/50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="budgetTier"
                              value={tier.id}
                              checked={isSelected}
                              onChange={() => setBudgetTier(tier.id)}
                              className="mt-1 text-amber-400 focus:ring-amber-400 h-4 w-4 bg-zinc-950 border-zinc-700"
                            />
                            <div>
                              <div className="text-sm font-semibold">{tier.label}</div>
                              <div className="text-xs text-zinc-400">{tier.note}</div>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                      03. Delivery Timeline Expectation
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: 'accelerated', label: 'Accelerated Sprint', note: 'Targeting completion within 8–12 weeks' },
                        { id: 'standard', label: 'Standard Architectural Track', note: 'Targeting completion within 4–8 months' },
                        { id: 'flexible', label: 'Long-Term Cultural Roadmap', note: 'Multi-phase institutional evolution (12+ months)' },
                      ].map((timeOpt) => {
                        const isSelected = timeline === timeOpt.id;
                        return (
                          <label
                            key={timeOpt.id}
                            className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-zinc-800/80 border-amber-400/80 text-white'
                                : 'bg-zinc-950/40 border-zinc-800 text-zinc-300 hover:bg-zinc-900/50'
                            }`}
                          >
                            <input
                              type="radio"
                              name="timeline"
                              value={timeOpt.id}
                              checked={isSelected}
                              onChange={() => setTimeline(timeOpt.id)}
                              className="mt-1 text-amber-400 focus:ring-amber-400 h-4 w-4 bg-zinc-950 border-zinc-700"
                            />
                            <div>
                              <div className="text-sm font-semibold">{timeOpt.label}</div>
                              <div className="text-xs text-zinc-400">{timeOpt.note}</div>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Step 3: Contact Coordinates & Brief Description */}
                <div>
                  <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                    04. Contact Coordinates & Commission Context
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label htmlFor="clientName" className="block text-xs text-zinc-400 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        id="clientName"
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Maya Lin"
                        className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="clientEmail" className="block text-xs text-zinc-400 mb-1">
                        Direct Email Address *
                      </label>
                      <input
                        id="clientEmail"
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="e.g. maya@enterprise.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-xs text-zinc-400 mb-1">
                        Organization / Venture
                      </label>
                      <input
                        id="organization"
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. Lin Design Foundation"
                        className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectBrief" className="block text-xs text-zinc-400 mb-1">
                      Commission Summary & Objectives *
                    </label>
                    <textarea
                      id="projectBrief"
                      rows={4}
                      required
                      value={projectBrief}
                      onChange={(e) => setProjectBrief(e.target.value)}
                      placeholder="Describe your site, challenge, brand ambition, or target deliverables..."
                      className="w-full px-4 py-3 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder-zinc-600 focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
                    />
                  </div>
                </div>

                {/* Error feedback banner if invalid */}
                {errorMsg && (
                  <div className="p-4 rounded-lg bg-red-950/60 border border-red-800 text-red-200 text-xs sm:text-sm">
                    {errorMsg}
                  </div>
                )}

                {/* Submit CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-zinc-800">
                  <div className="flex items-center gap-2 text-xs text-zinc-400">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                    <span>Confidentiality guaranteed. All inquiries covered by standard bilateral NDA.</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-zinc-100 hover:bg-white text-zinc-950 font-semibold text-sm transition-all shadow-md active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:outline-none"
                  >
                    <span>Dispatch Commission Scope</span>
                    <Send className="w-4 h-4 text-zinc-800" aria-hidden="true" />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};
