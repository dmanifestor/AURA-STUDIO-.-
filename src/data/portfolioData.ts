import ridgesImg from '../assets/images/vegas_luxury_estate_1794215022784.jpg';
import ascayaImg from '../assets/images/vegas_ascaya_promontory_1794216604280.jpg';
import summitImg from '../assets/images/vegas_estate_interior_1794215037365.jpg';
import advisoryImg from '../assets/images/vegas_advisory_salon_1794215038306.jpg';

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: 'summerlin' | 'ascaya' | 'offmarket';
  categoryLabel: string;
  client: string;
  year: string;
  location: string;
  impactMetric: string;
  imageSrc: string;
  aspectRatio: string;
  featured: boolean;
  priceBracket: string;
  specs: {
    sqft: string;
    beds: string;
    baths: string;
    enclave: string;
  };
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
    value: "$140M+",
    label: "Private Transaction Volume",
    context: "Discreet residential real estate acquisitions and dispositions across Las Vegas"
  },
  {
    value: "100%",
    label: "Confidentiality Standard",
    context: "Every engagement and off-market viewing shielded by bilateral NDA protocol"
  },
  {
    value: "4 Enclaves",
    label: "Prime Geographic Focus",
    context: "The Ridges, Ascaya, The Summit Club, and MacDonald Highlands"
  },
  {
    value: "24h",
    label: "Principal Response Window",
    context: "Direct communication with managing advisory principals without intermediary delay"
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "the-ridges-cantilever",
    title: "The Ridges Cantilevered Promontory",
    subtitle: "Modernist travertine residence framing Red Rock Canyon",
    category: "summerlin",
    categoryLabel: "The Ridges & Summerlin",
    client: "Confidential Family Office",
    year: "2025",
    location: "The Ridges, Summerlin NV",
    impactMetric: "Acquired Off-Market · $18.5M",
    imageSrc: ridgesImg,
    aspectRatio: "16/9",
    featured: true,
    priceBracket: "$18,500,000",
    specs: {
      sqft: "9,450 SQ FT",
      beds: "5 Bedrooms",
      baths: "7 Bathrooms",
      enclave: "The Ridges Promontory"
    },
    summary: "A masterwork of desert modernism perched on a double lot in The Ridges. Features floating post-tensioned bronze rooflines, zero-edge reflection pool with fire features, and automated pocket glass walls opening onto Red Rock Canyon.",
    challenge: "Securing prime unlisted acreage on Promontory Ridge Drive while preserving absolute privacy and negotiating multi-parcel entitlement rights under strict HOA architectural guidelines.",
    solution: "Structured an off-market private assignment transaction through bilateral escrow routing, including complete civil engineering and foundation structural audits prior to contract binding.",
    deliverables: [
      "Off-Market Acquisition Negotiation & Bilateral Escrow",
      "Structural Envelope & Desert Geotechnical Audit",
      "Private Architectural Joinery & Millwork Inspection",
      "Automated Crestron & Lutron Ecosystem Verification"
    ],
    quote: {
      text: "Universal Visual Studio secured an off-market architectural masterpiece we believed was unobtainable, handling every detail with elite discretion.",
      author: "Marcus Vance",
      role: "Managing Trustee, Vance Holdings"
    }
  },
  {
    id: "ascaya-desert-monolith",
    title: "The Ascaya Desert Horizon Villa",
    subtitle: "Rammed-earth and steel cliffside estate above the Las Vegas valley",
    category: "ascaya",
    categoryLabel: "Ascaya & Henderson",
    client: "Technology Founder",
    year: "2024",
    location: "Ascaya, Henderson NV",
    impactMetric: "Discreet Disposition · $22.0M",
    imageSrc: ascayaImg,
    aspectRatio: "16/9",
    featured: true,
    priceBracket: "$22,000,000",
    specs: {
      sqft: "11,200 SQ FT",
      beds: "6 Bedrooms",
      baths: "9 Bathrooms",
      enclave: "Ascaya Ridgeline"
    },
    summary: "Engineered directly into the volcanic rock mountains of Ascaya, this architectural sanctuary commands unbroken 180-degree panoramas of the Las Vegas Strip skyline. Designed with authentic rammed earth, blackened steel cantilevers, and cascading terraces.",
    challenge: "Marketing a trophy property without public MLS exposure, ensuring only vetted ultra-high-net-worth buyers received the technical architectural dossier.",
    solution: "Curated private invitation-only previews in our Summerlin salon, pairing buyers with 3D structural lidar scans and private evening twilight viewings.",
    deliverables: [
      "Private Dossier & Drone Elevation Studies",
      "Confidential Global HNW Buyer Outreach",
      "Comprehensive Mechanical & Solar Storage Audit",
      "Bespoke Furniture & Artwork Preservation Agreement"
    ],
    quote: {
      text: "Their understanding of high-end architectural craft combined with discreet transaction mastery sets wilsonvegas in a tier of its own.",
      author: "Elena Rostova",
      role: "Private Collector & Principal"
    }
  },
  {
    id: "summit-club-sanctuary",
    title: "The Summit Club Modernist Pavilion",
    subtitle: "Honed Calacatta marble and custom walnut residential sanctuary",
    category: "offmarket",
    categoryLabel: "Discreet Off-Market",
    client: "Institutional Partner",
    year: "2025",
    location: "The Summit Club, Summerlin NV",
    impactMetric: "Private Allocation · $27.5M",
    imageSrc: summitImg,
    aspectRatio: "16/9",
    featured: true,
    priceBracket: "$27,500,000",
    specs: {
      sqft: "10,800 SQ FT",
      beds: "6 Bedrooms",
      baths: "8 Bathrooms",
      enclave: "The Summit Club"
    },
    summary: "An ultra-exclusive modernist living pavilion overlooking the private Tom Fazio championship course. Highlights include bookmatched Calacatta marble hearths, custom architectural walnut ceilings, temperature-controlled 1,200-bottle wine gallery, and seamless indoor-outdoor living.",
    challenge: "Facilitating membership entitlement transfer and confidential ownership structuring within Discovery Land Company's premier guard-gated community.",
    solution: "Coordinated private advisory with club governors and legal counsel, concluding a turnkey transaction with custom Italian furnishings intact.",
    deliverables: [
      "Turnkey Interior Asset Valuation & Curation",
      "Summit Club Governance & HOA Transfer Navigation",
      "Thermal Solar & Radiant Floor Performance Verification",
      "Private Security & Guard-Gate Escort Protocol"
    ],
    quote: {
      text: "The architectural depth they bring to property evaluation is unlike any standard brokerage—they dissect structural truth before signing.",
      author: "David Sterling",
      role: "Managing Director, Sterling Capital"
    }
  }
];

export const DISCIPLINES: Discipline[] = [
  {
    id: "buyer-acquisition",
    index: "01",
    title: "Private Buyer Acquisition & Off-Market Sourcing",
    description: "Confidential representation for buyers seeking architectural estates not listed on open public databases. We identify, inspect, and negotiate discreet off-market opportunities throughout Summerlin and Henderson.",
    deliverables: [
      "Confidential Off-Market Opportunity Dossiers",
      "Site Geological, Foundation & Envelope Diligence",
      "Bilateral NDA Negotiation & Escrow Routing",
      "Private Valuations & Architectural Feasibility Reports"
    ],
    timeframe: "4–12 Weeks Active Sourcing",
    methodology: "Direct outreach to property owners, private architectural archives, and confidential trustee networks.",
    caseRef: "The Ridges Promontory ($18.5M)"
  },
  {
    id: "seller-representation",
    index: "02",
    title: "Strategic Listing & Discreet Asset Disposition",
    description: "Bespoke marketing and representation for owners of significant architectural residences. We emphasize privacy, high-caliber editorial imagery, and targeted outreach to verified private buyers worldwide.",
    deliverables: [
      "Museum-Grade Architectural Photography & Film",
      "Curated Private Client Previews (No Public Open Houses)",
      "Vetted Buyer Financial Qualification Verification",
      "Direct Principal Negotiation & Closing Management"
    ],
    timeframe: "60–120 Days Custom Placement",
    methodology: "Invitation-only previews, targeted family office distribution, and total exclusion of mass retail listing portals.",
    caseRef: "Ascaya Ridgeline ($22.0M)"
  },
  {
    id: "architectural-advisory",
    index: "03",
    title: "Land Acquisition & Custom Build Advisory",
    description: "Guiding clients through custom homesite selection, architectural firm procurement, and design-build governance in Las Vegas's most restrictive luxury enclaves.",
    deliverables: [
      "Topographical Sun & View Corridor Analysis",
      "HOA Architectural Review Committee (ARC) Alignment",
      "Architect & General Contractor RFP Curation",
      "Lifecycle Capital Expenditure & Resale Projections"
    ],
    timeframe: "6–18 Months Development Scope",
    methodology: "Comprehensive terrain studies, wind tunnel assessments, and zoning ordinance auditing before land close.",
    caseRef: "The Summit Club Modernist Pavilion"
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    quote: "Universal Visual Studio navigated our acquisition in The Ridges with military-grade discretion and structural insight. They pointed out building envelope nuances three other brokerages missed entirely.",
    author: "Harrison Vance",
    role: "Family Office Director",
    organization: "Vance Heritage Trust",
    location: "Summerlin, Las Vegas"
  },
  {
    quote: "Selling an architectural compound in Ascaya requires an advisory that understands concrete, steel, and high-net-worth psychology. The wilsonvegas team delivered an unlisted closing at top market value.",
    author: "Elena Rostova",
    role: "Principal & Collector",
    organization: "Rostova Capital",
    location: "Henderson, Nevada"
  }
];
