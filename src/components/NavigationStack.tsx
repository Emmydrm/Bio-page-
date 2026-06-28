import {
  Compass,
  Tag,
  Scroll,
  Crown,
  ClipboardSignature,
  Calendar,
  CheckCircle2,
  MapPin,
  Phone,
  MessageCircle,
  Sparkles,
  Armchair,
  Image,
  Users
} from "lucide-react";

interface NavigationStackProps {
  onNavigate: (section: string) => void;
  bookingCount: number;
}

export default function NavigationStack({ onNavigate, bookingCount }: NavigationStackProps) {
  const menuItems = [
    {
      id: "services",
      label: "Our Services",
      icon: Compass,
    },
    {
      id: "seating",
      label: "Digital Seating Chart",
      icon: Users,
      highlight: true,
    },
    {
      id: "gallery",
      label: "Event Gallery",
      icon: Image,
    },
    {
      id: "pricing",
      label: "Our Pricing & Packages",
      icon: Tag,
    },
    {
      id: "reception",
      label: "Reception Package",
      icon: Crown,
    },
    {
      id: "policy",
      label: "Our Policy & Guidelines",
      icon: Scroll,
    },
    {
      id: "questionnaire",
      label: "Event Brief Questionnaire",
      icon: ClipboardSignature,
    },
    {
      id: "book",
      label: "Book Appointment",
      icon: Calendar,
    },
    {
      id: "confirm",
      label: "Confirm Booking",
      icon: CheckCircle2,
      countBadge: bookingCount > 0 ? bookingCount : undefined,
    },
    {
      id: "contact",
      label: "Contact & Studio Info",
      icon: MapPin,
    },
    {
      id: "whatsapp",
      label: "Whatsapp Studio",
      icon: MessageCircle,
    },
  ];

  return (
    <nav className="px-4 py-4 flex flex-col gap-3.5" id="navigation-core-stack">
      {menuItems.map((item) => {
        const IconComponent = item.icon;
        return (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id)}
            className={`group w-full relative overflow-hidden rounded-full bg-theme-nav-btn border border-[#D4AF37] ${
              item.highlight
                ? "gold-glow"
                : "hover:shadow-[0_0_15px_rgba(212,175,55,0.2)]"
            } py-4 px-8 text-left flex items-center justify-between transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer`}
            id={`nav-btn-${item.id}`}
          >
            {/* Background luxury gradient sweep on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Glowing left-hand accent bar inside the capsule */}
            <div
              className={`absolute left-0 top-0 bottom-0 w-[4px] transition-all duration-300 ${
                item.highlight
                  ? "bg-gold-500"
                  : "bg-transparent group-hover:bg-gold-500/40"
              }`}
            />

            {/* Left elements: Icon + Label (aligned nicely with generous spacing) */}
            <div className="flex items-center gap-4 z-10">
              <div
                className="flex items-center justify-center w-8 h-8 rounded-full bg-theme-nav-icon border border-[#D4AF37]/35 group-hover:border-gold-400 text-gold-500 transition-all duration-300 group-hover:scale-105"
              >
                <IconComponent className="w-4 h-4 text-gold-500 group-hover:text-gold-400 transition-colors" />
              </div>

              <span className="font-serif text-sm sm:text-base text-theme-text-primary group-hover:text-gold-300 font-semibold tracking-wide transition-colors">
                {item.label}
              </span>
            </div>

            {/* Right elements: count badge or clean indicators */}
            <div className="flex items-center gap-2.5 z-10">
              {item.countBadge !== undefined && (
                <span className="font-mono text-[9px] px-2 py-0.5 rounded-full bg-gold-500 text-black font-extrabold tracking-wider uppercase">
                  {item.countBadge} PASS
                </span>
              )}

              {item.highlight && (
                <Sparkles className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
              )}

              {/* Sophisticated Chevron indicator */}
              <div className="text-gold-700/80 group-hover:text-gold-400 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.8}
                  stroke="currentColor"
                  className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform duration-300"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          </button>
        );
      })}
    </nav>
  );
}
