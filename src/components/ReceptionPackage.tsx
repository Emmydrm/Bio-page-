import { X, Crown, Sparkles, Check } from "lucide-react";
import { RECEPTION_PACKAGE_DETAILS } from "../data";

interface ReceptionPackageProps {
  isOpen: boolean;
  onClose: () => void;
  onBook: () => void;
}

export default function ReceptionPackage({ isOpen, onClose, onBook }: ReceptionPackageProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md overflow-hidden bg-[#0A0A0A] rounded-2xl border border-gold-900/60 gold-glow shadow-2xl transition-all duration-300">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 border-b border-gold-950/40 bg-gradient-to-r from-gold-950/20 via-transparent to-transparent">
          <div className="flex items-center gap-2">
            <Crown className="w-5 h-5 text-gold-500 animate-pulse" />
            <h2 className="font-serif text-lg text-white font-medium tracking-wide">
              The Signature Reception
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-500 hover:text-white hover:bg-gold-950/40 transition-colors"
            id="close-reception-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Section */}
        <div className="p-5 max-h-[420px] overflow-y-auto space-y-4">
          
          {/* Hero Header Card */}
          <div className="text-center bg-gradient-to-b from-[#111] to-black p-5 rounded-xl border border-gold-950/60 relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />
            <span className="font-mono text-[9px] text-gold-500 tracking-widest uppercase">ALL-INCLUSIVE CURATION</span>
            <h3 className="font-serif text-xl text-white font-medium mt-1">
              ActiveXperience Reception Package
            </h3>
            <p className="font-mono text-2xl text-gold-400 font-bold mt-2.5">
              {RECEPTION_PACKAGE_DETAILS.pricing}
            </p>
            <p className="text-[10px] text-gray-400 mt-1 leading-relaxed">
              Every detail coordinated by Peter Emmanuel's core lead specialists.
            </p>
          </div>

          {/* Feature details */}
          <div className="space-y-4">
            <h4 className="font-mono text-[9px] text-gold-500 uppercase tracking-widest font-semibold border-b border-gold-950/40 pb-1.5">
              WHAT IS INCLUDED
            </h4>

            <div className="space-y-3.5">
              {RECEPTION_PACKAGE_DETAILS.features.map((feat, idx) => (
                <div key={idx} className="flex gap-3 items-start">
                  <div className="w-6 h-6 shrink-0 rounded-full bg-gold-950/30 border border-gold-900/60 flex items-center justify-center text-gold-500">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <h5 className="font-serif text-xs sm:text-sm text-gray-200 font-semibold tracking-wide">
                      {feat.title}
                    </h5>
                    <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-gold-950/40 bg-[#070707] flex justify-between items-center">
          <p className="text-[10px] text-gray-500 font-mono">
            *Custom modifications allowed.
          </p>
          <button
            onClick={() => {
              onBook();
              onClose();
            }}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-semibold text-xs uppercase tracking-widest flex items-center gap-1.5 transition-colors cursor-pointer"
            id="book-reception-btn"
          >
            Book This Package <Sparkles className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
