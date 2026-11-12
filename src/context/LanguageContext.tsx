import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav
    'nav.estates': 'Curated Estates',
    'nav.capabilities': 'Advisory & Scope',
    'nav.atelier': 'The Advisory',
    'nav.inquiry': 'Private Inquiries',
    'nav.cta': 'Private Representation',
    'nav.lang': 'ES',

    // Hero
    'hero.kicker': 'Universal Visual Studio · wilsonvegas · Las Vegas Prime',
    'hero.title.lead': 'Ultra-Prime Residential Architecture',
    'hero.title.accent': 'Meets Curated Desert Estates.',
    'hero.desc': 'Representing discerning buyers and institutional collectors in acquiring and developing bespoke architectural compounds across The Ridges, Summerlin, MacDonald Highlands, and Ascaya.',
    'hero.cta.primary': 'Explore Curated Estates',
    'hero.cta.secondary': 'Initiate Acquisition Scope',
    'hero.verified.label': 'Active Off-Market Portfolio',
    'hero.verified.metric': '$85M+ Prime Curation',

    // Bento / Listings
    'bento.scene': 'SCENE 02',
    'bento.kicker': 'Curated Residential Portfolio',
    'bento.title': 'Bespoke Architectural Compounds & Off-Market Estates',
    'bento.desc': 'A rigorously curated selection of modernist desert residences, architectural monuments, and confidential estate opportunities in Las Vegas.',
    'bento.filter.all': 'All Estates',
    'bento.filter.summerlin': 'The Ridges & Summerlin',
    'bento.filter.ascaya': 'Ascaya & Henderson',
    'bento.filter.offmarket': 'Discreet Off-Market',
    'bento.badge.view': 'View Specification',
    'bento.badge.exclusive': 'Exclusive Listing',
    'bento.badge.offmarket': 'Discreet Off-Market',

    // Disciplines / Capabilities
    'disc.scene': 'SCENE 03',
    'disc.kicker': 'Advisory Capabilities',
    'disc.title': 'Bespoke Client Representation & Architectural Advisory',
    'disc.desc': 'We eliminate the disconnect between architectural vision and prime real estate acquisition. Every transaction is governed by confidentiality, structural discernment, and strategic negotiation.',
    'disc.cycle': 'Standard Engagement Window',
    'disc.methodology.title': 'Material Rigor & Transaction Discretion',
    'disc.deliverables.title': 'Bespoke Deliverables & Representation Protections',
    'disc.scope.btn': 'Commission this Advisory Scope',

    // Studio / Advisory
    'studio.scene': 'SCENE 04',
    'studio.kicker': 'The Advisory & Market Authority',
    'studio.title': 'A Private Client Practice for High-Value Desert Real Estate',
    'studio.desc': 'Founded on the conviction that transcendent luxury residences require both architectural integrity and confidential transaction mastery. We maintain a limited client roster to guarantee principal immersion on every property.',
    'studio.principal.quote': '"A prime estate is not merely square footage; it is an enduring architectural statement aligned with terrain, light, and privacy."',
    'studio.principal.bio': 'Leading the wilsonvegas prime residential division at Universal Visual Studio, coordinating private estate transfers across Southern Nevada with unyielding confidentiality.',
    'studio.constitution.title': 'The wilsonvegas Practice Protocol',
    'studio.constitution.1': '1. Absolute Bilateral Discretion: Every off-market acquisition is shielded by binding confidentiality and private escrow routing.',
    'studio.constitution.2': '2. Architectural Structural Diligence: We audit building envelopes, geological foundations, and custom millwork prior to negotiation.',
    'studio.constitution.3': '3. Independent Dual Representation Avoidance: We maintain fiduciary loyalty without conflicting interests.',
    'studio.office.1.title': 'SUMMERLIN EXECUTIVE SALON',
    'studio.office.1.addr': '1980 Festival Plaza Dr, Suite 850',
    'studio.office.1.desc': 'Primary Client Advisory & Architectural Archives',
    'studio.office.2.title': 'THE RIDGES PRIVATE LOUNGE',
    'studio.office.2.addr': 'Promontory Ridge Drive, Summerlin',
    'studio.office.2.desc': 'Confidential Estate Viewing & Closing Suite',
    'studio.citations': 'Verifiable Market Citations & Client Testimonials',

    // Scope / Inquiry
    'inquiry.scene': 'SCENE 05',
    'inquiry.kicker': 'Confidential Inquiry Terminal',
    'inquiry.title': 'Initiate an Acquisition or Representation Scope',
    'inquiry.desc': 'Every partnership commences with structural clarity. Configure your anticipated investment tier, target enclave, and representation timeline below for an immediate confidential briefing.',
    'inquiry.step1': '01. Select Applicable Advisory Engagement',
    'inquiry.step2': '02. Anticipated Investment Bracket (USD)',
    'inquiry.step3': '03. Target Enclave / Acquisition Timeline',
    'inquiry.step4': '04. Principal Coordinates & Private Brief',
    'inquiry.name': 'Your Full Name *',
    'inquiry.email': 'Direct Confidential Email *',
    'inquiry.org': 'Family Office / Venture / Entity',
    'inquiry.brief': 'Estate Ambition & Special Parameters *',
    'inquiry.brief.ph': 'Detail your preferred architectural style, target enclaves (e.g. The Ridges, Ascaya), square footage, or specific off-market requirements...',
    'inquiry.nda': 'Confidentiality guaranteed. All inquiries covered by standard bilateral NDA protocol.',
    'inquiry.submit': 'Dispatch Confidential Scope',
    'inquiry.submitted.title': 'Inquiry Successfully Logged',
    'inquiry.submitted.desc': 'Our managing principals review all acquisitions confidentially. A tailored dossier will be dispatched within 24 business hours.',
    'inquiry.reset': 'Submit Another Specification',

    // Modal
    'modal.archive': 'ESTATE ARCHIVE',
    'modal.outcome': 'Architectural Curation',
    'modal.overview': 'Property Overview & Architectural Stance',
    'modal.challenge': 'The Architectural & Site Distinction',
    'modal.solution': 'The Compound Design & Finish Palette',
    'modal.deliverables': 'Key Estate Specifications & Amenities',
    'modal.cta': 'Initiate Confidential Acquisition of this Estate',
    'modal.prompt': 'Seeking private viewing or similar architectural representation in Las Vegas?',

    // Back to top
    'backtotop': 'Back to top'
  },
  es: {
    // Nav
    'nav.estates': 'Propiedades Curadas',
    'nav.capabilities': 'Asesoría y Alcance',
    'nav.atelier': 'La Asesoría',
    'nav.inquiry': 'Consultas Privadas',
    'nav.cta': 'Representación Privada',
    'nav.lang': 'EN',

    // Hero
    'hero.kicker': 'Universal Visual Studio · wilsonvegas · Las Vegas Prime',
    'hero.title.lead': 'Arquitectura Residencial de Élite',
    'hero.title.accent': 'y Residencias Exclusivas en el Desierto.',
    'hero.desc': 'Representando a compradores distinguidos y fondos familiares en la adquisición y desarrollo de complejos arquitectónicos en The Ridges, Summerlin, MacDonald Highlands y Ascaya.',
    'hero.cta.primary': 'Explorar Propiedades Curadas',
    'hero.cta.secondary': 'Iniciar Consulta de Adquisición',
    'hero.verified.label': 'Portafolio Fuera de Mercado',
    'hero.verified.metric': '+$85M en Curaduría Prime',

    // Bento / Listings
    'bento.scene': 'ESCENA 02',
    'bento.kicker': 'Portafolio Residencial Selecto',
    'bento.title': 'Complejos Arquitectónicos y Propiedades Privadas',
    'bento.desc': 'Una rigurosa curaduría de residencias modernistas, monumentos arquitectónicos y oportunidades confidenciales en Las Vegas.',
    'bento.filter.all': 'Todas las Propiedades',
    'bento.filter.summerlin': 'The Ridges y Summerlin',
    'bento.filter.ascaya': 'Ascaya y Henderson',
    'bento.filter.offmarket': 'Fuera de Mercado',
    'bento.badge.view': 'Ver Especificación',
    'bento.badge.exclusive': 'Listado Exclusivo',
    'bento.badge.offmarket': 'Confidencial Off-Market',

    // Disciplines / Capabilities
    'disc.scene': 'ESCENA 03',
    'disc.kicker': 'Capacidades de Asesoría',
    'disc.title': 'Representación Privada y Asesoría Arquitectónica',
    'disc.desc': 'Eliminamos la brecha entre la visión arquitectónica y la adquisición inmobiliaria de alto nivel. Cada transacción se rige por la confidencialidad, el criterio técnico y la negociación estratégica.',
    'disc.cycle': 'Plazo Estándar de Representación',
    'disc.methodology.title': 'Rigor Material y Discreción Transaccional',
    'disc.deliverables.title': 'Entregables Clave y Protecciones al Cliente',
    'disc.scope.btn': 'Contratar este Alcance de Asesoría',

    // Studio / Advisory
    'studio.scene': 'ESCENA 04',
    'studio.kicker': 'La Asesoría y Autoridad en el Mercado',
    'studio.title': 'Práctica Privada para Bienes Raíces de Alto Valor',
    'studio.desc': 'Fundada en la convicción de que las residencias de lujo requieren integridad arquitectónica y dominio en transacciones confidenciales. Mantenemos una cartera selecta para asegurar dedicación absoluta.',
    'studio.principal.quote': '"Una residencia de élite no es solo metraje cuadrado; es una declaración arquitectónica perdurable en armonía con el terreno y la privacidad."',
    'studio.principal.bio': 'Al frente de la división residencial de élite wilsonvegas en Universal Visual Studio, coordinando transferencias confidenciales en el sur de Nevada.',
    'studio.constitution.title': 'Protocolo de Práctica wilsonvegas',
    'studio.constitution.1': '1. Discreción Bilateral Absoluta: Toda transacción fuera de mercado está respaldada por acuerdos de confidencialidad estrictos.',
    'studio.constitution.2': '2. Auditoría Estructural y Material: Evaluamos envolventes, cimientos geológicos y acabados antes de la negociación.',
    'studio.constitution.3': '3. Cero Conflictos de Interés: Fidelidad fiduciaria inquebrantable a nuestros clientes sin representaciones duales opacas.',
    'studio.office.1.title': 'SALÓN EJECUTIVO SUMMERLIN',
    'studio.office.1.addr': '1980 Festival Plaza Dr, Suite 850',
    'studio.office.1.desc': 'Asesoría Principal y Archivo Arquitectónico',
    'studio.office.2.title': 'SALÓN PRIVADO THE RIDGES',
    'studio.office.2.addr': 'Promontory Ridge Drive, Summerlin',
    'studio.office.2.desc': 'Visualización Privada y Firma de Cierres',
    'studio.citations': 'Citas Verificables y Testimonios de Clientes',

    // Scope / Inquiry
    'inquiry.scene': 'ESCENA 05',
    'inquiry.kicker': 'Terminal de Consulta Confidencial',
    'inquiry.title': 'Inicie una Consulta de Adquisición o Venta',
    'inquiry.desc': 'Toda alianza comienza con claridad estructural. Configure su rango de inversión, enclave deseado y cronograma para recibir un informe confidencial inmediato.',
    'inquiry.step1': '01. Seleccione el Tipo de Servicio',
    'inquiry.step2': '02. Rango de Inversión Previsto (USD)',
    'inquiry.step3': '03. Enclave Preferido / Cronograma',
    'inquiry.step4': '04. Datos de Contacto y Parámetros',
    'inquiry.name': 'Nombre Completo *',
    'inquiry.email': 'Correo Electrónico Confidencial *',
    'inquiry.org': 'Oficina Familiar / Entidad / Empresa',
    'inquiry.brief': 'Resumen de Objetivos y Parámetros *',
    'inquiry.brief.ph': 'Describa su estilo arquitectónico preferido, enclaves objetivo (The Ridges, Ascaya), metraje o requerimientos específicos...',
    'inquiry.nda': 'Confidencialidad garantizada. Todas las consultas bajo protocolo de acuerdo de confidencialidad (NDA).',
    'inquiry.submit': 'Enviar Consulta Confidencial',
    'inquiry.submitted.title': 'Consulta Registrada con Éxito',
    'inquiry.submitted.desc': 'Nuestros directores revisan cada solicitud con total discreción. Recibirá una respuesta personalizada en menos de 24 horas.',
    'inquiry.reset': 'Enviar Otra Especificación',

    // Modal
    'modal.archive': 'ARCHIVO DE PROPIEDADES',
    'modal.outcome': 'Curaduría Arquitectónica',
    'modal.overview': 'Descripción y Características Arquitectónicas',
    'modal.challenge': 'Distinción del Terreno y Emplazamiento',
    'modal.solution': 'Diseño del Complejo y Acabados Nobles',
    'modal.deliverables': 'Especificaciones y Amenidades Principales',
    'modal.cta': 'Iniciar Adquisición Confidencial de esta Residencia',
    'modal.prompt': '¿Desea una visita privada o representación arquitectónica en Las Vegas?',

    // Back to top
    'backtotop': 'Volver arriba'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('uvs_lang') as Language;
      if (saved === 'en' || saved === 'es') return saved;
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('uvs_lang', lang);
      document.documentElement.lang = lang;
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
