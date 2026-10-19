import pavilionImg from '../assets/images/project_spatial_pavilion_1792374580257.jpg';
import brandImg from '../assets/images/project_digital_brand_1792374580436.jpg';
import luminaImg from '../assets/images/project_interactive_installation_1792374581479.jpg';
import kansoImg from '../assets/images/hero_studio_architecture_1792374579891.jpg';

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'spatial' | 'digital' | 'brand';
  categoryLabel: string;
  client: string;
  year: string;
  location: string;
  impactMetric: string;
  imageSrc: string;
  aspectRatio: string;
  featured: boolean;
  summary: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  quote?: {
    text: string;
    author: string;
    role: string;
  };
}

export interface Discipline {
  id: string;
  index: string;
  title: string;
  description: string;
  deliverables: string[];
  timeframe: string;
  methodology: string;
  caseRef: string;
}

export interface MetricProof {
  value: string;
  label: string;
  context: string;
}

export const STUDIO_METRICS: MetricProof[] = [
  {
    value: "14",
    label: "Global Design Awards",
    context: "Including Red Dot Best of the Best & D&AD Pencils"
  },
  {
    value: "38",
    label: "Built Commissions",
    context: "Completed across North America, Scandinavia, & Japan"
  },
  {
    value: "98.4%",
    label: "Client Retention",
    context: "Multi-year retainers and consecutive project commissions"
  },
  {
    value: "100%",
    label: "Carbon Neutral Practice",
    context: "Rigorous ecological lifecycle auditing on all physical structures"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "nordic-pavilion",
    title: "Nordic Glass & Timber Fjord Pavilion",
    subtitle: "Acoustic ecology & geological architecture in Western Norway",
    category: "spatial",
    categoryLabel: "Spatial Architecture",
    client: "Vestland Nature Trust",
    year: "2025",
    location: "Bergen, Norway",
    impactMetric: "+220% Cultural Visitor Engagement",
    imageSrc: pavilionImg,
    aspectRatio: "4/3",
    featured: true,
    summary: "A folded mass timber and structural glass pavilion embedded directly into granite bedrock overlooking the Sognefjord, designed for multi-sensory acoustic recitals and environmental contemplation.",
    challenge: "Constructing a public architectural shelter on a protected, micro-climate coastline subject to 130 km/h fjord winds without disturbing delicate glacial lichen flora.",
    solution: "Cantilevered post-tensioned mass spruce cassettes prefabricated off-site and airlifted by helicopter onto minimal pin-foundation granite anchors, reducing ground displacement by 85%.",
    deliverables: [
      "Site Geological Synthesis & Wind Tunnel Simulation",
      "Mass Timber Structural Engineering & Prefabrication",
      "Triple-Glazed Solar Control Envelope",
      "Integrated Natural Acoustic Reverberation Chamber"
    ],
    quote: {
      text: "AURA crafted an architectural sanctuary that doesn't conquer nature—it breathes with the rhythm of the tides and wind.",
      author: "Astrid Lindqvist",
      role: "Director of Cultural Preservation, Vestland"
    }
  },
  {
    id: "arcane-atelier",
    title: "Arcane Atelier Bespoke Identity",
    subtitle: "Tactile monograph branding & physical packaging system",
    category: "brand",
    categoryLabel: "Brand Identities",
    client: "Arcane Haute Parfumerie",
    year: "2025",
    location: "London / New York",
    impactMetric: "+180% Wholesale Placement Rate",
    imageSrc: brandImg,
    aspectRatio: "4/3",
    featured: false,
    summary: "A tactile brand architecture combining bespoke hot-foil embossed cotton stationery, machined anodized black aluminum membership plates, and bespoke geometric type specimens.",
    challenge: "Elevating an artisanal perfumery into ultra-luxury boutique retailers while maintaining a non-commercial, artisanal aura free of ostentatious gold clichés.",
    solution: "Deep blind-debossed 600gsm cotton substrates paired with custom-cast crystal optical prisms and an understated monoline serif wordmark tailored for tactile discovery.",
    deliverables: [
      "Custom Monoline Display Typeface (Arcane Sans)",
      "Uncoated Cotton Paper Stock & Blind Emboss System",
      "Machined Anodized Metal Client Credentials",
      "Worldwide Packaging Standards & Brand Constitution"
    ],
    quote: {
      text: "The physical weight and sensory restraint of our packaging convinced Bergdorf Goodman and Harrods within the very first meeting.",
      author: "Julian Thorne",
      role: "Founder, Arcane Parfumerie"
    }
  },
  {
    id: "lumens-void",
    title: "Lumens Void Interactive Kinetic Sculpture",
    subtitle: "Real-time generative spatial light installation",
    category: "digital",
    categoryLabel: "Digital Systems",
    client: "Kaldor Arts & Technology Center",
    year: "2024",
    location: "Zurich, Switzerland",
    impactMetric: "480,000+ Physical Visitors",
    imageSrc: luminaImg,
    aspectRatio: "4/3",
    featured: false,
    summary: "An expansive 14-meter suspended toroid ribbon of programmable volumetric micro-LED arrays reacting in real-time to visitor movement and acoustic resonance over a mirror pool.",
    challenge: "Synchronizing 42,000 discrete luminous emitters with high-frequency spatial lidar sensors at sub-16ms latency without visible wiring or latency jitter.",
    solution: "A bespoke WebGL and C++ generative spatial driver communicating over gigabit optical conduits embedded seamlessly inside aircraft-grade structural carbon tubes.",
    deliverables: [
      "Generative Spatial Simulation Engine (GLSL & C++)",
      "High-Precision Lidar Visitor Tracking Mesh",
      "Polished Black Obsidian Reflection Basin",
      "Spatial Ambient Soundscape Audio Synthesis"
    ],
    quote: {
      text: "A watershed moment for interactive institutional art where technology dissolves completely into sheer visual poetry.",
      author: "Dr. Henriette Von Berg",
      role: "Senior Curator, Kaldor Institute"
    }
  },
  {
    id: "kanso-studio",
    title: "AURA Studio Architectural Headquarters",
    subtitle: "Monolithic concrete & steel studio interior",
    category: "spatial",
    categoryLabel: "Spatial Architecture",
    client: "Self-Commissioned",
    year: "2024",
    location: "San Francisco, CA",
    impactMetric: "AIA San Francisco Honor Award",
    imageSrc: kansoImg,
    aspectRatio: "16/9",
    featured: true,
    summary: "The studio's own physical laboratory: a double-height industrial concrete shell transformed into a contemplative workshop with monolithic cast desks and raw patinated steel partitions.",
    challenge: "Creating a multi-disciplinary collaborative atelier that functions simultaneously as a physical model shop, virtual simulation lab, and quiet acoustic sanctuary.",
    solution: "Strategic zoned acoustic dampening panels hidden behind industrial hot-rolled steel plate panels, balanced by raw board-formed concrete and warm 2700K linear lighting.",
    deliverables: [
      "Adaptive Reuse Architecture & Permitting",
      "Custom Monolithic Cast Concrete Workstation System",
      "Concealed Acoustic Resonance Baffles",
      "Museum-Grade Circadian Light Programming"
    ]
  }
];

export const DISCIPLINES: Discipline[] = [
  {
    id: "spatial-architecture",
    index: "01",
    title: "Spatial Architecture & Environments",
    description: "Physical spaces designed with relentless material clarity, sustainable tectonic rigor, and acoustic presence. From cultural pavilions to headquarters and exhibition spaces.",
    deliverables: [
      "Architectural Concept & Spatial Master Planning",
      "Mass Timber & Sustainable Envelope Engineering",
      "Interior Materiality & Bespoke Millwork Detailing",
      "Acoustic Ecology & Circadian Lighting Design"
    ],
    timeframe: "4 – 14 Months",
    methodology: "Parametric wind and daylight modeling coupled with 1:1 scale physical material mockups.",
    caseRef: "Nordic Glass & Timber Fjord Pavilion"
  },
  {
    id: "digital-systems",
    index: "02",
    title: "Digital Platforms & Interactive Systems",
    description: "Flagship digital applications, interactive spatial installations, and high-performance web experiences crafted with zero template dependency and buttery micro-interactions.",
    deliverables: [
      "Custom Creative Direction & Web Architecture",
      "Interactive WebGL, Canvas & Spatial Installations",
      "Design Systems & Component Specifications",
      "Full-Stack Frontend Engineering & Performance Optimization"
    ],
    timeframe: "2 – 6 Months",
    methodology: "Fluid interaction prototyping in real code with strict 60fps frame budgets and zero latency.",
    caseRef: "Lumens Void Interactive Kinetic Sculpture"
  },
  {
    id: "brand-identities",
    index: "03",
    title: "Comprehensive Brand Systems & Monograph Craft",
    description: "Identity systems built for longevity rather than algorithmic trends. Distinctive typographic voices, custom paper goods, tangible packaging, and digital brand toolkits.",
    deliverables: [
      "Brand Philosophy & Positioning Architecture",
      "Custom Typeface Design & Wordmark Craft",
      "Tactile Print, Packaging & Editorial Monographs",
      "Living Digital Guidelines & Governance"
    ],
    timeframe: "6 – 16 Weeks",
    methodology: "Historical typographic research fused with avant-garde contemporary grid discipline.",
    caseRef: "Arcane Atelier Bespoke Identity"
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    quote: "AURA transformed our entire brand architecture from a conventional luxury name into a culturally revered institution. Within 6 months of launching, qualified inbound commissions increased by +140%.",
    author: "Marcus Vance",
    role: "Chief Design Officer",
    organization: "Vespera Holdings",
    location: "New York"
  },
  {
    quote: "Their team possesses that rarest duality: uncompromising architectural gravitas paired with flawless digital technical execution. They delivered on schedule without a single aesthetic concession.",
    author: "Elena Rostova",
    role: "Managing Director",
    organization: "Nordic Cultural Foundation",
    location: "Oslo"
  }
];
