import { CarouselImage, PricingPackage, ServiceItem } from "./types";

export const CAROUSEL_IMAGES: CarouselImage[] = [
  {
    id: "wedding",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
    title: "Celestial Wedding Ceremonies",
    category: "Weddings",
  },
  {
    id: "gala",
    url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=800",
    title: "High-End Banquet & Gala Soirées",
    category: "Galas & Receptions",
  },
  {
    id: "corporate",
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
    title: "Prestigious Corporate Stagecraft",
    category: "Corporate Events",
  },
  {
    id: "celebration",
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=800",
    title: "Spectacular Sound, Stage & Lighting",
    category: "Immersive Experiences",
  },
  {
    id: "tabletop",
    url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=800",
    title: "Bespoke Floral & Table Artistry",
    category: "Creative Styling",
  }
];

export const SERVICES_TAILORED: ServiceItem[] = [
  {
    name: "Event Planning & Consultation",
    description: "Personalized visionary brainstorming and strategic roadmap definition for your high-profile event.",
    features: [
      "Initial architectural design alignment",
      "Comprehensive timeline plotting",
      "Key stakeholder alignment reviews"
    ]
  },
  {
    name: "Theme Design & Setup",
    description: "Transformative visual styling that captures raw elegance, translating thoughts into sensory details.",
    features: [
      "Custom luxury mood boards",
      "Full digital and 3D spatial concepts",
      "Curation of high-end fabrics, fixtures, and textures"
    ]
  },
  {
    name: "Floral Arrangements & Table Settings",
    description: "Masterful culinary stages and live floral sculptures crafted by top-tier visual artisans.",
    features: [
      "Rare floral specimen sourcing",
      "Signature custom centerpiece layouts",
      "Premium crystal, cutlery, and charger plates selection"
    ]
  }
];

export const SERVICES_COORDINATION: ServiceItem[] = [
  {
    name: "On-Site Event Supervision",
    description: "Absolute runtime precision. Our principal coordinators oversee every cue from dawn till the final curtain.",
    features: [
      "Director-level flow execution",
      "Real-time schedule adjusting",
      "Emergency contingencies command"
    ]
  },
  {
    name: "Vendor Coordination",
    description: "Seamless synchronization of master chefs, mixologists, technicians, and international entertainers.",
    features: [
      "Strict contract and rider enforcement",
      "Technical stage-management checks",
      "SLA compliance supervision"
    ]
  },
  {
    name: "Ushers & Staff Management",
    description: "Elite hospitality team styled to fit your theme, providing impeccable, royal-standard guest hosting.",
    features: [
      "Impeccably dressed, bilingual ushers",
      "Strict etiquette-trained service protocols",
      "VIP host and guest relation officers"
    ]
  }
];

export const ACADEMY_INFO = {
  title: "ActiveXperience Academy & Elite Training",
  subtitle: "Learn the secrets of luxury event craftsmanship.",
  description: "An elite masterclass designed to cultivate the next wave of high-ticket spatial designers and luxury curators.",
  modules: [
    {
      code: "M-101",
      name: "Luxury Aesthetics & Spatial Layouts",
      hours: "24 Contact Hours",
      summary: "Designing multi-sensory experiences, color harmony, lighting physics, and floral architectures."
    },
    {
      code: "M-202",
      name: "VIP Client Acquisition & Negotiation",
      hours: "18 Contact Hours",
      summary: "Pitching high-ticket concepts, contracts for international talent, budget architecture, and luxury pricing strategies."
    },
    {
      code: "M-303",
      name: "Operational Flow & Contingency Orchestration",
      hours: "30 Contact Hours",
      summary: "Mastering real-time emergency mitigation, vendor coordination matrix, and high-precision timeline building."
    }
  ],
  pricing: [
    { name: "Executive Design Certification", price: "$1,450", duration: "6 Weeks", includes: "Portfolio Critique & Group Mentorship" },
    { name: "Master Planner Program", price: "$2,800", duration: "12 Weeks", includes: "Direct Live-Event Internship & Lifetime Mentorship Circle" }
  ],
  internship: {
    details: "Elite graduates receive immediate live placement opportunities on ActiveXperience couture events.",
    mentorship: "Exclusive direct access to bi-weekly roundtable critiques with founder Peter Emmanuel."
  }
};

export const PRICING_PACKAGES: PricingPackage[] = [
  {
    id: "gold",
    name: "The Gold Soirée",
    tagline: "Elegant planning for intimate, highly sophisticated events.",
    price: "$3,500",
    features: [
      "Up to 120 Guests",
      "Full design blueprint & spatial concept modeling",
      "Vendor sourcing & negotiation assistance",
      "3 Lead coordinators on event day",
      "Up to 8 hours of live coverage monitoring",
      "Custom digital guest list coordination"
    ]
  },
  {
    id: "platinum",
    name: "The Platinum Signature",
    tagline: "Our most requested tier. Standard luxury with breathtaking execution.",
    price: "$7,500",
    features: [
      "Up to 300 Guests",
      "Full bespoke visual theme curation",
      "Direct luxury vendor sourcing and SLA management",
      "1 Principal Planner + 5 elite coordinators",
      "Full-day on-site command (from load-in to load-out)",
      "Floral architecture and stage design direction",
      "Complimentary Pre-Event rehearsal coordination",
      "VIP Host and Reception check-in service"
    ],
    recommended: true
  },
  {
    id: "royal-diamond",
    name: "The Royal Diamond",
    tagline: "Unrestricted master-class luxury. Perfect for grand galas and high-profile weddings.",
    price: "$15,000+",
    features: [
      "Unrestricted Guest Count",
      "3D Spatial Virtual Walkthrough of proposed set",
      "Full concierge coordination for key international guests",
      "Direct supervision by founder Peter Emmanuel",
      "10 Elite hostesses/coordinators",
      "Premium international talent rider management",
      "Post-event recovery & high-security management",
      "Priority Academy placement & event documentation album"
    ]
  }
];

export const RECEPTION_PACKAGE_DETAILS = {
  title: "The Signature Reception Package",
  tagline: "Elite all-inclusive production and coordination curated to perfection.",
  pricing: "$9,800",
  features: [
    { title: "Bespoke Stage Design & Backdrops", desc: "Golden geometric accents, organic florals, and custom glowing monogram screens." },
    { title: "Premium Sound & Dynamic Light Setup", desc: "Concert-grade digital audio and wireless atmospheric uplighting." },
    { title: "Gourmet Catering & Mixology Service", desc: "Exquisite multi-cuisine dinner buffet paired with a luxury craft open bar." },
    { title: "Elite Master of Ceremonies & Hostesses", desc: "Top-tier event hosts and professionally styled greeting staff." },
    { title: "Impeccable Reception Flow Management", desc: "Synchronized back-of-house orchestration via active headset communication." }
  ]
};

export const POLICIES = [
  {
    title: "1. Retainer & Payment Structure",
    content: "A 40% non-refundable retainer secures your date. The remaining balance must be cleared 14 business days prior to setup."
  },
  {
    title: "2. Rescheduling Guidelines",
    content: "Written notice is required 60 days in advance. Retainer fees are fully transferable subject to calendar availability."
  },
  {
    title: "3. Cancellations & Refunds",
    content: "Force Majeure protects both parties. Outside standard emergencies, payments beyond the retainer are non-refundable within 30 days."
  },
  {
    title: "4. Destination Logistics",
    content: "We plan worldwide. Travel, lodging, and local transit fees are pre-approved and billed transparently."
  }
];
