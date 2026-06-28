import { BadgeCheck, Mail, MessageCircle, Instagram, Music, Sparkles } from "lucide-react";

interface HeaderProps {
  onSocialClick: (platform: string) => void;
}

export default function Header({ onSocialClick }: HeaderProps) {
  return (
    <header className="flex flex-col items-center text-center pt-8 pb-6 px-4 border-b border-theme-border-light relative">
      {/* Decorative top ambient gold glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-36 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Luxury Monogram Logo AX */}
      <div className="relative mb-4 group cursor-pointer">
        {/* Outer glowing gold ring */}
        <div className="absolute inset-0 bg-gradient-to-tr from-gold-600 via-gold-400 to-gold-900 rounded-full animate-pulse blur-[1px] opacity-85 group-hover:scale-105 transition-all duration-500" />
        
        {/* Inner thin gold borders containing the logo image */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden border border-gold-500/40 m-[4px] flex items-center justify-center bg-black">
          <img
            src="https://i.postimg.cc/N063Q3pj/Ae-X-3D-logo-092604.jpg"
            alt="ActiveXperience Events 3D Logo"
            className="w-full h-full object-cover rounded-full"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Brand Title with Verified Checkmark Badge */}
      <div className="flex items-center justify-center gap-1.5 mb-1">
        <h1 className="font-serif text-2xl sm:text-3xl font-medium tracking-wide text-white">
          ActiveXperience Events
        </h1>
        <div className="inline-flex items-center justify-center text-[#D4AF37]" title="Verified Business">
          <BadgeCheck className="w-5 h-5 text-[#D4AF37]" />
        </div>
      </div>

      {/* Subtitle / Handles */}
      <div className="flex flex-col items-center gap-1 mb-3">
        <p className="font-mono text-xs text-gold-500/90 tracking-widest uppercase font-semibold">
          @ThePeterEmmanuel
        </p>
      </div>

      {/* Brand Tagline */}
      <p className="font-serif text-sm text-gray-300 italic max-w-sm mb-6 leading-relaxed px-2">
        &ldquo;Bringing the vision to reality&rdquo;
      </p>

      {/* Action Row: Social media icons in gold-accented styling with thin gold border and soft glow */}
      <div className="flex items-center justify-center gap-5">
        {[
          {
            id: "email",
            label: "Email",
            icon: Mail,
            href: "mailto:emmypee222@gmail.com?subject=ActiveXperience%20Events%20Inquiry",
          },
          {
            id: "whatsapp",
            label: "WhatsApp",
            icon: MessageCircle,
            href: "https://wa.me/2348000000000?text=Hello%20ActiveXperience%20Events,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20premium%20event.",
          },
          {
            id: "instagram",
            label: "Instagram",
            icon: Instagram,
            href: "https://instagram.com",
          },
          {
            id: "tiktok",
            label: "TikTok",
            icon: Music,
            href: "https://tiktok.com",
          },
        ].map((item) => {
          const IconComponent = item.icon;
          return (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onSocialClick(item.label)}
              className="group relative flex items-center justify-center w-11 h-11 rounded-full bg-black border border-[#D4AF37]/50 hover:border-[#D4AF37] transition-all duration-300 hover:scale-110 active:scale-95 shadow-[0_0_8px_rgba(212,175,55,0.15)] hover:shadow-[0_0_15px_rgba(212,175,55,0.35)]"
              aria-label={item.label}
              id={`social-${item.id}`}
            >
              {/* Pulsing light behind hover */}
              <div className="absolute inset-0 rounded-full bg-gold-500/0 group-hover:bg-gold-500/10 blur-md transition-all duration-300" />
              <IconComponent className="w-5 h-5 text-[#D4AF37] group-hover:text-gold-300 transition-colors" />
            </a>
          );
        })}
      </div>
    </header>
  );
}
