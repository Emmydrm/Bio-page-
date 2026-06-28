import { Compass, Calendar, Sparkles, Heart, Award, Palette } from "lucide-react";

export interface ServiceCardData {
  title: string;
  items: string[];
  icon: any;
  tag: string;
}

export const LUXURY_SERVICES: ServiceCardData[] = [
  {
    title: "Event Planning & Management",
    tag: "Orchestration",
    icon: Calendar,
    items: [
      "Event Planning",
      "Event Coordination",
      "Venue Styling",
      "Production Support",
      "Vendor Management"
    ]
  },
  {
    title: "Social Events",
    tag: "Celebrations",
    icon: Heart,
    items: [
      "Weddings & Engagements",
      "Birthday Celebrations",
      "Private Parties"
    ]
  },
  {
    title: "Corporate Events",
    tag: "Bespoke",
    icon: Award,
    items: [
      "Corporate Events",
      "Brand Activations",
      "Product Launches",
      "Conferences",
      "Seminars"
    ]
  },
  {
    title: "Decor & Experience Design",
    tag: "Artistry",
    icon: Palette,
    items: [
      "Theme Design",
      "Floral Arrangements",
      "Table Styling",
      "Reception Setup"
    ]
  }
];

export default function ServicesSection() {
  return (
    <section className="px-6 py-8 bg-transparent animate-fade-in" id="services-section">
      {/* Title Header */}
      <div className="text-center mb-8">
        <span className="font-mono text-[10px] text-gold-500 uppercase tracking-widest font-semibold">OUR SERVICES</span>
        <h2 className="font-serif text-lg text-white font-semibold tracking-wide mt-1">
          Event Planning & Management Services
        </h2>
        <div className="w-12 h-[1px] bg-gold-500/50 mx-auto mt-3.5" />
      </div>

      {/* Grid of 4 Luxury Service Cards - 2 column layout on tablet/desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {LUXURY_SERVICES.map((card, idx) => {
          const IconComponent = card.icon;
          return (
            <div
              key={idx}
              className="bg-[#F9F9FB] text-black rounded-2xl p-6 border-l-4 border-[#D4AF37] shadow-md flex flex-col justify-between transition-all duration-300 hover:scale-[1.01] hover:shadow-lg relative overflow-hidden group"
              id={`service-card-${idx}`}
            >
              {/* Subtle background luxury texture element */}
              <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-5 group-hover:scale-110 transition-transform duration-500 text-[#D4AF37]">
                <IconComponent className="w-32 h-32" />
              </div>

              <div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-black text-gold-500 shrink-0">
                      <IconComponent className="w-5 h-5 text-gold-500" />
                    </div>
                    <h3 className="font-serif text-base font-bold text-gray-900 tracking-wide">
                      {card.title}
                    </h3>
                  </div>
                  <span className="font-mono text-[9px] font-bold uppercase tracking-widest bg-gold-500/10 text-[#a37f1c] px-2.5 py-1 rounded border border-gold-500/10">
                    {card.tag}
                  </span>
                </div>

                <ul className="space-y-2.5 pl-1 z-10 relative">
                  {card.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-center gap-2 text-sm text-gray-700 font-normal font-sans">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
