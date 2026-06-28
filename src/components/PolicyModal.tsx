import { X, ShieldCheck, Scroll, HelpCircle } from "lucide-react";
import { POLICIES } from "../data";

interface PolicyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PolicyModal({ isOpen, onClose }: PolicyModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md overflow-hidden bg-[#0A0A0A] rounded-2xl border border-gold-900/60 gold-glow shadow-2xl transition-all duration-300">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 border-b border-gold-950/40 bg-gradient-to-r from-gold-950/20 via-transparent to-transparent">
          <div className="flex items-center gap-2">
            <Scroll className="w-5 h-5 text-gold-500" />
            <h2 className="font-serif text-lg text-white font-semibold tracking-wide">
              Our Studio Policies
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-500 hover:text-white hover:bg-gold-950/40 transition-colors"
            id="close-policy-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-5 max-h-[400px] overflow-y-auto space-y-4">
          <div className="flex items-center gap-2 bg-gold-950/15 border border-gold-950/40 p-3 rounded-xl mb-2">
            <ShieldCheck className="w-5 h-5 text-gold-500 shrink-0" />
            <p className="text-sm text-gray-300 font-light leading-relaxed">
              We operate under couture service standards to ensure maximum safety, reliability, and precision for all high-end events.
            </p>
          </div>

          {POLICIES.map((policy, idx) => (
            <div key={idx} className="bg-[#111111] border border-gold-950/40 p-4 rounded-xl space-y-1.5">
              <h3 className="font-serif text-sm text-gold-400 font-semibold tracking-wide">
                {policy.title}
              </h3>
              <p className="text-sm text-gray-300 font-light leading-relaxed">
                {policy.content}
              </p>
            </div>
          ))}

          <div className="pt-2 text-center">
            <p className="text-[10px] text-gray-500 font-mono">
              For specific contractual riders, consult Peter Emmanuel directly.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-4 border-t border-gold-950/40 bg-[#070707] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-black font-semibold text-xs uppercase tracking-widest transition-colors cursor-pointer"
            id="policy-close-btn"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
