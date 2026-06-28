import { useState } from "react";
import { X, Tag, Sparkles, Sliders, Check, HelpCircle } from "lucide-react";
import { PRICING_PACKAGES } from "../data";

interface PricingEstimatorProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPackage: (packageName: string) => void;
}

export default function PricingEstimator({ isOpen, onClose, onSelectPackage }: PricingEstimatorProps) {
  // State for the interactive estimator
  const [eventType, setEventType] = useState("wedding"); // wedding, corporate, private
  const [guests, setGuests] = useState(150); // 20 - 500
  const [stylingComplexity, setStylingComplexity] = useState("premium"); // standard, premium, royal
  const [avNeeds, setAvNeeds] = useState("concert"); // none, standard, concert

  if (!isOpen) return null;

  // Calculation formula for luxury estimate
  const calculateEstimate = () => {
    let basePrice = 3000;
    
    // Event multiplier
    if (eventType === "wedding") basePrice += 1500;
    if (eventType === "corporate") basePrice += 2500;
    if (eventType === "private") basePrice += 500;

    // Guests variable cost
    basePrice += guests * 15;

    // Styling multiplier
    if (stylingComplexity === "premium") basePrice += 2500;
    if (stylingComplexity === "royal") basePrice += 6500;

    // AV production
    if (avNeeds === "standard") basePrice += 1800;
    if (avNeeds === "concert") basePrice += 4500;

    return basePrice.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg overflow-hidden bg-[#0A0A0A] rounded-2xl border border-gold-900/60 gold-glow shadow-2xl transition-all duration-300 flex flex-col max-h-[90vh]">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 border-b border-gold-950/40 bg-gradient-to-r from-gold-950/20 via-transparent to-transparent shrink-0">
          <div className="flex items-center gap-2">
            <Tag className="w-5 h-5 text-gold-500" />
            <h2 className="font-serif text-lg text-white font-medium tracking-wide">
              Pricing & Live Estimator
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-500 hover:text-white hover:bg-gold-950/40 transition-colors"
            id="close-pricing-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Container */}
        <div className="p-5 overflow-y-auto space-y-6 flex-1">
          
          {/* INTRO */}
          <div className="text-center max-w-md mx-auto">
            <span className="font-mono text-[9px] text-gold-500 tracking-widest uppercase">INVESTMENT SCHEDULING</span>
            <h3 className="font-serif text-xl text-white font-light mt-0.5">Curated Tiers & Bespoke Budgets</h3>
            <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">
              Choose one of Peter Emmanuel's signature pre-curated structures or utilize our live spatial estimator tool underneath.
            </p>
          </div>

          {/* CURATED COUTURE PACKAGES */}
          <div className="space-y-4">
            <h4 className="font-serif text-xs text-gold-500 uppercase tracking-widest font-semibold border-b border-gold-950/40 pb-2 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" /> Core Curated Tiers
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
              {PRICING_PACKAGES.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative rounded-xl bg-[#111111] p-4 border flex flex-col justify-between ${
                    pkg.recommended
                      ? "border-gold-400/80 gold-glow"
                      : "border-gold-950/40"
                  }`}
                >
                  {pkg.recommended && (
                    <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 font-mono text-[8px] px-2 py-0.5 rounded-full bg-gold-500 text-black font-semibold uppercase tracking-wider">
                      Most Requested
                    </span>
                  )}

                  <div>
                    <h5 className="font-serif text-sm text-white font-medium tracking-wide">
                      {pkg.name}
                    </h5>
                    <p className="font-mono text-base text-gold-500 font-bold mt-1">
                      {pkg.price}
                    </p>
                    <p className="text-[10px] text-gray-500 mt-1 leading-relaxed italic line-clamp-2">
                      {pkg.tagline}
                    </p>
                  </div>

                  <ul className="space-y-1.5 my-3.5 text-[10px] text-gray-400 border-t border-gold-950/40 pt-3">
                    {pkg.features.slice(0, 4).map((feat, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <Check className="w-2.5 h-2.5 text-gold-500 shrink-0 mt-0.5" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      onSelectPackage(pkg.name);
                      onClose();
                    }}
                    className={`w-full py-2 rounded-lg text-[10px] font-mono uppercase tracking-widest transition-all ${
                      pkg.recommended
                        ? "bg-gold-500 text-black font-bold"
                        : "bg-black text-gold-500 border border-gold-950 hover:border-gold-500"
                    }`}
                  >
                    Select Plan
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* INTERACTIVE ESTIMATOR */}
          <div className="bg-[#111] border border-gold-950 rounded-2xl p-5 space-y-4">
            <h4 className="font-serif text-xs text-gold-500 uppercase tracking-widest font-semibold border-b border-gold-950/30 pb-2 flex items-center gap-2">
              <Sliders className="w-3.5 h-3.5 text-gold-500" /> Interactive Cost Estimator
            </h4>

            <div className="space-y-4 text-xs">
              {/* Event Type Grid */}
              <div className="flex flex-col gap-1.5">
                <span className="text-gray-400 font-medium">1. Event Coordination Standard</span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "private", label: "Private Soirée" },
                    { id: "wedding", label: "Celestial Wedding" },
                    { id: "corporate", label: "Corporate Gala" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setEventType(item.id)}
                      className={`py-2 text-[10px] font-mono rounded-lg border uppercase transition-all ${
                        eventType === item.id
                          ? "bg-gold-500/10 border-gold-400 text-gold-400 font-semibold"
                          : "bg-black border-gold-950/40 text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Slider */}
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 font-medium">2. Scale (Estimated Guests)</span>
                  <span className="text-gold-400 font-mono font-medium">{guests} Guests</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={500}
                  step={10}
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                  className="w-full accent-gold-500 h-1 bg-gold-950/40 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Styling Complexity */}
              <div className="flex flex-col gap-1.5">
                <span className="text-gray-400 font-medium">3. Theme Design & Decor Artistry</span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "standard", label: "Standard Class" },
                    { id: "premium", label: "Bespoke Premium" },
                    { id: "royal", label: "Royal Couture" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setStylingComplexity(item.id)}
                      className={`py-2 text-[10px] font-mono rounded-lg border uppercase transition-all ${
                        stylingComplexity === item.id
                          ? "bg-gold-500/10 border-gold-400 text-gold-400 font-semibold"
                          : "bg-black border-gold-950/40 text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* AV Needs */}
              <div className="flex flex-col gap-1.5">
                <span className="text-gray-400 font-medium">4. Stage Production & Audio/Visuals</span>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "none", label: "Venue Native" },
                    { id: "standard", label: "Premium Ambient" },
                    { id: "concert", label: "Concert Stage" },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setAvNeeds(item.id)}
                      className={`py-2 text-[10px] font-mono rounded-lg border uppercase transition-all ${
                        avNeeds === item.id
                          ? "bg-gold-500/10 border-gold-400 text-gold-400 font-semibold"
                          : "bg-black border-gold-950/40 text-gray-500 hover:text-gray-300"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Live Calculator Result Card */}
              <div className="bg-black/40 border border-gold-950 p-4 rounded-xl flex items-center justify-between mt-2">
                <div>
                  <p className="font-mono text-[9px] text-gray-500 tracking-wider">PROPOSED VALUE</p>
                  <p className="font-serif text-sm text-white font-medium mt-0.5">Estimated Budget Bracket</p>
                </div>
                <div className="text-right">
                  <p className="font-serif text-xl text-gold-400 font-semibold tracking-wide">
                    {calculateEstimate()}
                  </p>
                  <p className="font-mono text-[8px] text-gray-500 uppercase mt-0.5">Subject to contract</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gold-950/40 bg-[#070707] shrink-0 text-center">
          <p className="text-[10px] text-gray-500">
            Estimates exclude transport, destination lodging, and third-party catering licensing.
          </p>
        </div>
      </div>
    </div>
  );
}
