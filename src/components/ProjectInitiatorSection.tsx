import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

interface ProjectInitiatorSectionProps {
  preselectedDiscipline?: string;
}

export const ProjectInitiatorSection: React.FC<ProjectInitiatorSectionProps> = ({
  preselectedDiscipline,
}) => {
  const { t } = useLanguage();
  const [selectedDisciplines, setSelectedDisciplines] = useState<string[]>(
    preselectedDiscipline ? [preselectedDiscipline] : ['buyer-acquisition']
  );

  useEffect(() => {
    if (preselectedDiscipline) {
      setSelectedDisciplines([preselectedDiscipline]);
    }
  }, [preselectedDiscipline]);

  const [budgetTier, setBudgetTier] = useState<string>('tier2');
  const [targetEnclave, setTargetEnclave] = useState<string>('summerlin');
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
      setErrorMsg('Please supply your name, direct contact email, and an estate brief.');
      return;
    }
    if (!clientEmail.includes('@') || !clientEmail.includes('.')) {
      setErrorMsg('Please enter a valid business or confidential email address.');
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
      aria-label="Interactive Acquisition and Representation Inquiry Terminal"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="py-20 md:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider mb-2">
            <span className="font-mono text-amber-400">{t('inquiry.scene')}</span>
            <span aria-hidden="true" className="text-amber-800">·</span>
            <span className="text-amber-200">{t('inquiry.kicker')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display mb-4">
            {t('inquiry.title')}
          </h2>
          <p className="text-base text-amber-100/70 leading-relaxed">
            {t('inquiry.desc')}
          </p>
        </div>

        {/* Interactive Scope Estimator Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-[#1b100a]/80 border border-amber-900/40 p-6 sm:p-8 lg:p-12 shadow-2xl"
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
                <div className="w-16 h-16 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-400 mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" aria-hidden="true" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white font-display">
                  {t('inquiry.submitted.title')}
                </h3>
                <p className="text-sm sm:text-base text-amber-100/80 leading-relaxed">
                  {t('inquiry.submitted.desc')} A private dossier has been logged for <strong className="text-white">{clientName}</strong> ({clientEmail}).
                </p>
                <div className="p-4 rounded-xl bg-[#140b07] border border-amber-900/40 text-xs text-amber-200/80 font-mono text-left space-y-1.5">
                  <div>Engagement: {selectedDisciplines.join(', ')}</div>
                  <div>Investment Tier: {budgetTier === 'tier1' ? '$3M – $7M' : budgetTier === 'tier2' ? '$7M – $15M' : '$15M+ Ultra-Prime'}</div>
                  <div>Target Enclave: {targetEnclave === 'summerlin' ? 'The Ridges & Summerlin' : targetEnclave === 'ascaya' ? 'Ascaya & Henderson' : 'Confidential Portfolio'}</div>
                </div>
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-lg bg-[#2b170f] hover:bg-[#3d2115] text-xs sm:text-sm font-semibold text-white transition-colors border border-amber-800/40"
                >
                  {t('inquiry.reset')}
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
                  <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-3">
                    {t('inquiry.step1')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'buyer-acquisition', label: 'Private Buyer Acquisition & Off-Market Sourcing' },
                      { id: 'seller-representation', label: 'Discreet Seller Listing & Asset Disposition' },
                      { id: 'architectural-advisory', label: 'Land Acquisition & Custom Build Advisory' },
                    ].map((disc) => {
                      const isChecked = selectedDisciplines.includes(disc.id);
                      return (
                        <button
                          type="button"
                          key={disc.id}
                          onClick={() => toggleDiscipline(disc.id)}
                          className={`p-4 rounded-xl text-left border transition-all text-sm font-medium focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none ${
                            isChecked
                              ? 'bg-amber-600 text-white border-amber-400 shadow-lg shadow-black/40'
                              : 'bg-[#140b07]/70 text-amber-100 border-amber-900/40 hover:border-amber-700/60'
                          }`}
                          aria-pressed={isChecked}
                        >
                          <div className="flex items-center justify-between">
                            <span>{disc.label}</span>
                            <span className={`w-3.5 h-3.5 rounded-full border ${isChecked ? 'bg-white border-white' : 'border-amber-700'}`} />
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Budget & Enclave Parameters */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-3">
                      {t('inquiry.step2')}
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: 'tier1', label: '$3,000,000 – $7,000,000', note: 'Luxury residential estate or custom homesite acquisition' },
                        { id: 'tier2', label: '$7,000,000 – $15,000,000', note: 'Prime architectural compound in The Ridges or Ascaya' },
                        { id: 'tier3', label: '$15,000,000+', note: 'Ultra-prime architectural landmark or multi-parcel compound' },
                      ].map((tier) => {
                        const isSelected = budgetTier === tier.id;
                        return (
                          <label
                            key={tier.id}
                            className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-[#29170f] border-amber-500 text-white'
                                : 'bg-[#140b07]/60 border-amber-900/40 text-amber-100 hover:bg-[#20120b]'
                            }`}
                          >
                            <input
                              type="radio"
                              name="budgetTier"
                              value={tier.id}
                              checked={isSelected}
                              onChange={() => setBudgetTier(tier.id)}
                              className="mt-1 text-amber-500 focus:ring-amber-500 h-4 w-4 bg-[#140b07] border-amber-800"
                            />
                            <div>
                              <div className="text-sm font-semibold">{tier.label}</div>
                              <div className="text-xs text-amber-200/60">{tier.note}</div>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-3">
                      {t('inquiry.step3')}
                    </label>
                    <div className="space-y-2">
                      {[
                        { id: 'summerlin', label: 'The Ridges & Summerlin', note: 'Exclusive guard-gated desert modernism' },
                        { id: 'ascaya', label: 'Ascaya & MacDonald Highlands', note: 'Elevated panoramic Strip-view cliffside compounds' },
                        { id: 'summit', label: 'The Summit Club & Private Enclaves', note: 'Championship golf & full-service private security' },
                      ].map((enclave) => {
                        const isSelected = targetEnclave === enclave.id;
                        return (
                          <label
                            key={enclave.id}
                            className={`flex items-start gap-3 p-3.5 rounded-xl border cursor-pointer transition-all ${
                              isSelected
                                ? 'bg-[#29170f] border-amber-500 text-white'
                                : 'bg-[#140b07]/60 border-amber-900/40 text-amber-100 hover:bg-[#20120b]'
                            }`}
                          >
                            <input
                              type="radio"
                              name="targetEnclave"
                              value={enclave.id}
                              checked={isSelected}
                              onChange={() => setTargetEnclave(enclave.id)}
                              className="mt-1 text-amber-500 focus:ring-amber-500 h-4 w-4 bg-[#140b07] border-amber-800"
                            />
                            <div>
                              <div className="text-sm font-semibold">{enclave.label}</div>
                              <div className="text-xs text-amber-200/60">{enclave.note}</div>
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Step 3: Contact Coordinates */}
                <div>
                  <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-3">
                    {t('inquiry.step4')}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label htmlFor="clientName" className="block text-xs text-amber-200/80 mb-1">
                        {t('inquiry.name')}
                      </label>
                      <input
                        id="clientName"
                        type="text"
                        required
                        value={clientName}
                        onChange={(e) => setClientName(e.target.value)}
                        placeholder="e.g. Harrison Vance"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#140b07] border border-amber-900/40 text-sm text-white placeholder-amber-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="clientEmail" className="block text-xs text-amber-200/80 mb-1">
                        {t('inquiry.email')}
                      </label>
                      <input
                        id="clientEmail"
                        type="email"
                        required
                        value={clientEmail}
                        onChange={(e) => setClientEmail(e.target.value)}
                        placeholder="e.g. harrison@vanceholdings.com"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#140b07] border border-amber-900/40 text-sm text-white placeholder-amber-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                      />
                    </div>

                    <div>
                      <label htmlFor="organization" className="block text-xs text-amber-200/80 mb-1">
                        {t('inquiry.org')}
                      </label>
                      <input
                        id="organization"
                        type="text"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        placeholder="e.g. Vance Family Trust"
                        className="w-full px-4 py-2.5 rounded-lg bg-[#140b07] border border-amber-900/40 text-sm text-white placeholder-amber-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="projectBrief" className="block text-xs text-amber-200/80 mb-1">
                      {t('inquiry.brief')}
                    </label>
                    <textarea
                      id="projectBrief"
                      rows={4}
                      required
                      value={projectBrief}
                      onChange={(e) => setProjectBrief(e.target.value)}
                      placeholder={t('inquiry.brief.ph')}
                      className="w-full px-4 py-3 rounded-lg bg-[#140b07] border border-amber-900/40 text-sm text-white placeholder-amber-900 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                    />
                  </div>
                </div>

                {/* Error feedback banner */}
                {errorMsg && (
                  <div className="p-4 rounded-lg bg-red-950/60 border border-red-800 text-red-200 text-xs sm:text-sm">
                    {errorMsg}
                  </div>
                )}

                {/* Submit CTA */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-amber-900/40">
                  <div className="flex items-center gap-2 text-xs text-amber-200/80">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
                    <span>{t('inquiry.nda')}</span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-gradient-to-r from-amber-600 via-amber-700 to-amber-800 hover:from-amber-500 hover:to-amber-700 text-white font-semibold text-sm transition-all shadow-lg shadow-black/50 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:outline-none"
                  >
                    <span>{t('inquiry.submit')}</span>
                    <Send className="w-4 h-4 text-white" aria-hidden="true" />
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
