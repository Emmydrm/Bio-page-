import { useState, useEffect, useRef } from "react";
import { 
  Sparkles, 
  Calendar, 
  ArrowUpRight, 
  Check, 
  PhoneCall, 
  MessageCircle, 
  Scroll, 
  Phone, 
  ClipboardSignature, 
  Briefcase,
  Share2,
  ArrowLeft,
  CheckCircle2,
  Instagram,
  Video
} from "lucide-react";
import Header from "./components/Header";
import MediaShowcase from "./components/MediaShowcase";
import ServicesSection from "./components/ServicesSection";
import BookingModal from "./components/BookingModal";
import ConfirmationModal from "./components/ConfirmationModal";
import PolicyModal from "./components/PolicyModal";
import QuestionnairePage from "./components/QuestionnairePage";
import ContactPage from "./components/ContactPage";
import CallUsModal from "./components/CallUsModal";
import { Booking } from "./types";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "services" | "contact" | "questionnaire">("home");
  const [activeModal, setActiveModal] = useState<"book" | "policy" | "call" | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [toast, setToast] = useState<{ message: string; type: "success" | "info" } | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);

  // Load bookings from localStorage
  useEffect(() => {
    try {
      const storedBookings = localStorage.getItem("ax_bookings");
      if (storedBookings) {
        setBookings(JSON.parse(storedBookings));
      }
    } catch (e) {
      console.error("Could not retrieve stored items", e);
    }
  }, []);

  const addBooking = (newBooking: Booking) => {
    const updated = [newBooking, ...bookings];
    setBookings(updated);
    localStorage.setItem("ax_bookings", JSON.stringify(updated));
    showToast("Booking reservation registered successfully", "success");
  };

  const handleAddQuestionnaireResponse = (data: any) => {
    try {
      const stored = localStorage.getItem("ax_questionnaires") || "[]";
      const responses = JSON.parse(stored);
      const newResponse = {
        id: "AXQ-" + Math.floor(100000 + Math.random() * 900000),
        ...data,
        submittedAt: new Date().toLocaleDateString()
      };
      responses.unshift(newResponse);
      localStorage.setItem("ax_questionnaires", JSON.stringify(responses));
      showToast("Questionnaire submitted successfully!", "success");
    } catch (e) {
      console.error("Could not store questionnaire", e);
    }
  };

  const showToast = (message: string, type: "success" | "info" = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleShareApp = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "ActiveXperience Events",
          text: "Bringing the vision to reality. Curating elite, unforgettable luxury experiences.",
          url: window.location.href,
        })
        .then(() => showToast("Link shared successfully", "success"))
        .catch(() => {
          navigator.clipboard.writeText(window.location.href);
          showToast("Copied link to clipboard!", "success");
        });
    } else {
      navigator.clipboard.writeText(window.location.href);
      showToast("Link copied to clipboard!", "success");
    }
  };

  const handleSocialClick = (platform: string) => {
    showToast(`Opening our official ${platform} channel`, "info");
  };

  // Stack of 7 premium luxury action buttons (Figma-perfect, black background, thin gold borders)
  const NAV_STACK = [
    {
      id: "services",
      label: "Our Services",
      icon: Briefcase,
      action: () => setCurrentPage("services")
    },
    {
      id: "policy",
      label: "Our Policy",
      icon: Scroll,
      action: () => setActiveModal("policy")
    },
    {
      id: "questionnaire",
      label: "Questionnaire",
      icon: ClipboardSignature,
      action: () => setCurrentPage("questionnaire")
    },
    {
      id: "book",
      label: "Book Appointment",
      icon: Calendar,
      action: () => setActiveModal("book")
    },
    {
      id: "contact",
      label: "Contact Us",
      icon: PhoneCall,
      action: () => setCurrentPage("contact")
    },
    {
      id: "call",
      label: "Call Us",
      icon: Phone,
      action: () => setActiveModal("call")
    },
    {
      id: "whatsapp",
      label: "WhatsApp Studio",
      icon: MessageCircle,
      action: () => window.open("https://wa.me/2348000000000?text=Hello%20ActiveXperience%20Events,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20premium%20event.")
    }
  ];

  return (
    <div className="min-h-screen bg-transparent text-gray-300 selection:bg-gold-500/20 selection:text-gold-400 flex flex-col items-center justify-start py-4 sm:py-12 px-2 sm:px-4 font-sans relative">
      
      {/* Absolute Ambient Lighting Effects (Soft & Subtle) */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      {/* Main Responsive Layout Wrapper (Simulating premium smartphone link-in-bio look with full responsive fidelity) */}
      <div 
        ref={containerRef}
        className="w-full max-w-[420px] mx-auto mt-2 bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-3xl overflow-hidden relative flex flex-col h-[88vh] shadow-[0_0_50px_rgba(212,175,55,0.05)]"
      >
        
        {/* Top Minimalist Control Bar (Fixed) */}
        <div className="px-6 py-3 bg-black/80 border-b border-gold-950/20 flex items-center justify-between text-[10px] text-gray-500 font-mono tracking-wider shrink-0 select-none z-30">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3 h-3 text-gold-500 animate-pulse" />
            <span className="text-gold-500 font-semibold uppercase tracking-widest text-[9px]">AeX COUTURE</span>
          </div>
          <button
            onClick={handleShareApp}
            className="hover:text-gold-400 transition-colors cursor-pointer flex items-center gap-1 bg-transparent border-none text-[9px] uppercase tracking-wider font-mono font-bold"
            id="top-share-btn"
          >
            <Share2 className="w-3 h-3 text-gold-500" /> Share
          </button>
        </div>

        {/* MAIN VIEWPORT (Scrollable) */}
        <main className="flex-1 overflow-y-auto no-scrollbar pb-6 relative bg-[#0B0B0B]">
          
          {currentPage === "home" && (
            <div className="animate-fade-in">
              {/* SECTION 1 - HEADER */}
              <Header onSocialClick={handleSocialClick} />

              {/* SECTION 2 - EVENT SHOWCASE */}
              <MediaShowcase />

              {/* SECTION 3 - MAIN ACTION BUTTONS */}
              <div className="px-6 py-6 flex flex-col gap-3.5" id="navigation-core-stack">
                <div className="flex items-center gap-3 mb-1">
                  <div className="h-[1px] bg-gold-950/20 flex-1" />
                  <span className="font-mono text-[9px] text-gold-500/80 tracking-widest uppercase font-bold">Studio Desk</span>
                  <div className="h-[1px] bg-gold-950/20 flex-1" />
                </div>

                {NAV_STACK.map((btn) => {
                  const IconComp = btn.icon;
                  return (
                    <button
                      key={btn.id}
                      onClick={btn.action}
                      className="w-full rounded-xl border border-[#D4AF37]/30 bg-black hover:bg-gold-500/10 hover:border-[#D4AF37]/80 text-white font-serif text-sm font-medium tracking-wide py-3.5 px-5 flex items-center justify-between transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-sm hover:shadow-[0_0_12px_rgba(212,175,55,0.15)] group"
                      id={`nav-stack-btn-${btn.id}`}
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg border border-gold-950/60 text-[#D4AF37] bg-gold-950/10 group-hover:bg-[#D4AF37]/10 transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="text-gray-200 group-hover:text-white transition-colors text-left">{btn.label}</span>
                      </div>
                      <ArrowUpRight className="w-3.5 h-3.5 text-[#D4AF37]/60 group-hover:text-[#D4AF37] transition-colors" />
                    </button>
                  );
                })}
              </div>

              {/* BOTTOM CTA */}
              <div className="px-6 py-8 text-center relative overflow-hidden bg-gradient-to-b from-[#0e0e0e] to-[#0A0A0A] border-t border-gold-950/30">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />
                <div className="relative z-10 space-y-3.5">
                  <span className="font-mono text-[9px] text-gold-500 tracking-widest uppercase font-semibold">LET'S COLLABORATE</span>
                  <h3 className="font-serif text-lg text-white font-medium leading-snug tracking-wide">
                    Let&rsquo;s Plan Something Unforgettable
                  </h3>
                  <button
                    onClick={() => setActiveModal("book")}
                    className="w-full mt-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F1E0A0] hover:from-gold-500 hover:to-gold-300 text-black font-semibold tracking-widest uppercase text-xs py-3.5 px-8 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.25)] font-mono"
                    id="cta-book-now-btn"
                  >
                    BOOK NOW
                  </button>
                </div>
              </div>
            </div>
          )}

          {currentPage === "services" && (
            <div className="animate-fade-in py-4">
              <div className="px-6">
                <button
                  onClick={() => setCurrentPage("home")}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold-500 hover:text-gold-400 transition-colors mb-4 cursor-pointer"
                  id="back-from-services"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Studio
                </button>
              </div>
              <ServicesSection />
            </div>
          )}

          {currentPage === "contact" && (
            <ContactPage 
              onBack={() => setCurrentPage("home")} 
              onSocialClick={handleSocialClick} 
            />
          )}

          {currentPage === "questionnaire" && (
            <QuestionnairePage 
              onBack={() => setCurrentPage("home")} 
              onSubmitResponse={handleAddQuestionnaireResponse} 
            />
          )}

          {/* FOOTER */}
          <footer 
            id="contact-footer" 
            className="px-6 py-6 border-t border-gold-950/20 bg-black text-center space-y-4"
          >
            <div className="flex flex-col items-center gap-1">
              <div className="font-serif text-sm text-white tracking-wide font-medium">
                ActiveXperience Events
              </div>
              <p className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">
                Event Planning & Management
              </p>
            </div>

            {/* Social Icons inside Footer */}
            <div className="flex items-center justify-center gap-4">
              {[
                { id: "insta", icon: Instagram, href: "https://instagram.com" },
                { id: "tiktok", icon: Video, href: "https://tiktok.com" },
                { id: "whatsapp", icon: MessageCircle, href: "https://wa.me/2348000000000" }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8.5 h-8.5 rounded-full border border-gold-950/50 hover:border-[#D4AF37] flex items-center justify-center text-gray-500 hover:text-[#D4AF37] transition-all duration-300 hover:scale-105"
                    id={`footer-social-${social.id}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <p className="text-[8px] text-gray-600 font-mono tracking-widest uppercase">
              © {new Date().getFullYear()} ActiveXperience &bull; All Rights Reserved
            </p>
          </footer>

        </main>

      </div>

      {/* MODALS LAYER */}
      <BookingModal
        isOpen={activeModal === "book"}
        onClose={() => setActiveModal(null)}
        onAddBooking={addBooking}
      />

      <PolicyModal
        isOpen={activeModal === "policy"}
        onClose={() => setActiveModal(null)}
      />

      <CallUsModal
        isOpen={activeModal === "call"}
        onClose={() => setActiveModal(null)}
      />

      {/* TOAST NOTIFICATION PLATFORM */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in pointer-events-none">
          <div className="bg-[#121212] border border-gold-500/50 text-white text-xs px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 max-w-sm gold-glow">
            <div className="w-5 h-5 shrink-0 rounded-full bg-gold-500/10 border border-gold-500 flex items-center justify-center text-gold-500">
              <Check className="w-3 h-3" />
            </div>
            <p className="font-sans font-medium tracking-wide text-gray-200">
              {toast.message}
            </p>
          </div>
        </div>
      )}

    </div>
  );
}
