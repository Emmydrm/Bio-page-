import React, { useState } from "react";
import { X, ClipboardSignature, User, HelpCircle, ArrowRight, Check, Sparkles } from "lucide-react";
import { QuestionnaireResponse } from "../types";

interface QuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddResponse: (response: QuestionnaireResponse) => void;
}

export default function QuestionnaireModal({ isOpen, onClose, onAddResponse }: QuestionnaireModalProps) {
  const [step, setStep] = useState(1);
  const [fullName, setFullName] = useState("");
  const [contactMethod, setContactMethod] = useState<"email" | "whatsapp" | "call">("email");
  const [contactValue, setContactValue] = useState("");
  const [eventType, setEventType] = useState("Wedding Ceremony");
  const [estimatedGuests, setEstimatedGuests] = useState(150);
  const [estimatedBudget, setEstimatedBudget] = useState("$25,000 - $50,000");
  const [eventStyle, setEventStyle] = useState<string[]>([]);
  const [primaryNeed, setPrimaryNeed] = useState("Full Luxury Planning");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const styleOptions = [
    "Regal / Traditional",
    "Modern Minimalist",
    "Botanical Garden",
    "Warm Romantic",
    "Gothic Twilight",
    "High-Gloss Corporate Minimalist",
    "Vibrant Festival",
    "Art Deco Opulence"
  ];

  const handleStyleToggle = (style: string) => {
    setEventStyle((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  const handleNext = () => {
    if (step === 1 && (!fullName || !contactValue)) return;
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const response: QuestionnaireResponse = {
      id: "AXQ-" + Math.floor(100000 + Math.random() * 900000),
      fullName,
      contactMethod,
      contactValue,
      eventType,
      estimatedGuests,
      estimatedBudget,
      eventStyle: eventStyle.length > 0 ? eventStyle : ["Classic Elegance"],
      primaryNeed,
      additionalNotes,
      submittedAt: new Date().toLocaleDateString(),
    };

    onAddResponse(response);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setStep(1);
    setFullName("");
    setContactMethod("email");
    setContactValue("");
    setEventType("Wedding Ceremony");
    setEstimatedGuests(150);
    setEstimatedBudget("$25,000 - $50,000");
    setEventStyle([]);
    setPrimaryNeed("Full Luxury Planning");
    setAdditionalNotes("");
    setIsSuccess(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md overflow-hidden bg-[#0A0A0A] rounded-2xl border border-gold-900/60 gold-glow shadow-2xl transition-all duration-300">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 border-b border-gold-950/40 bg-gradient-to-r from-gold-950/20 via-transparent to-transparent">
          <div className="flex items-center gap-2">
            <ClipboardSignature className="w-5 h-5 text-gold-500" />
            <h2 className="font-serif text-lg text-white font-medium tracking-wide">
              Event Questionnaire
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-500 hover:text-white hover:bg-gold-950/40 transition-colors"
            id="close-questionnaire-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step progress bar */}
        {!isSuccess && (
          <div className="h-1 bg-gold-950/20 w-full flex">
            <div
              className="bg-gold-500 h-full transition-all duration-500"
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        )}

        {isSuccess ? (
          /* Success Page */
          <div className="p-6 text-center flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-400 flex items-center justify-center mb-4 text-gold-400 animate-pulse">
              <Sparkles className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-xl text-white font-medium mb-1 tracking-wide">
              Aesthetics Saved
            </h3>
            <p className="text-xs text-gray-400 max-w-sm mb-6 leading-relaxed">
              Peter Emmanuel and his creative leads will construct a customized vision portfolio matching your responses. We will reach out using your preferred coordinate shortly.
            </p>

            <div className="w-full bg-[#111111] border border-gold-950/50 rounded-xl p-4 text-left text-xs space-y-2 mb-6">
              <p className="font-mono text-[9px] text-gold-500 tracking-wider">AESTHETIC BRIEF SUMMARY</p>
              <p className="text-gray-300"><span className="text-gray-500">Visionary:</span> {fullName}</p>
              <p className="text-gray-300"><span className="text-gray-500">Production Type:</span> {eventType}</p>
              <p className="text-gray-300"><span className="text-gray-500">Estimated scale:</span> ~{estimatedGuests} Guests</p>
              <p className="text-gray-300"><span className="text-gray-500">Selected Aesthetics:</span> {eventStyle.join(", ") || "Classic Elegance"}</p>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-semibold text-sm transition-colors cursor-pointer"
              id="questionnaire-done"
            >
              Exquisite
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5">
            {/* STEP 1: Basic Info */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <p className="font-mono text-[9px] text-gold-500 tracking-widest uppercase">STEP 1 OF 3</p>
                  <h3 className="font-serif text-base text-white font-light">Who is hosting the vision?</h3>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 font-medium flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-gold-500" /> Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#111111] border border-gold-950 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 font-medium">How should we coordinate?</label>
                  <div className="grid grid-cols-3 gap-2">
                    {(["email", "whatsapp", "call"] as const).map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setContactMethod(method)}
                        className={`py-2 text-xs font-mono rounded-lg border uppercase transition-all ${
                          contactMethod === method
                            ? "bg-gold-500/10 border-gold-400 text-gold-400 font-semibold"
                            : "bg-[#111] border-gold-950 text-gray-500 hover:text-gray-300"
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 font-medium capitalize">
                    Your {contactMethod} address/number
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={
                      contactMethod === "email"
                        ? "you@luxurymail.com"
                        : contactMethod === "whatsapp"
                        ? "+1 (555) 000-0000 (WhatsApp)"
                        : "+1 (555) 000-0000"
                    }
                    value={contactValue}
                    onChange={(e) => setContactValue(e.target.value)}
                    className="w-full bg-[#111111] border border-gold-950 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                <button
                  type="button"
                  disabled={!fullName || !contactValue}
                  onClick={handleNext}
                  className="w-full py-3 px-4 rounded-xl mt-4 bg-[#151515] hover:bg-gold-500 border border-gold-950 hover:border-gold-500 text-gold-500 hover:text-black font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  Continue <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* STEP 2: Event Details */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <p className="font-mono text-[9px] text-gold-500 tracking-widest uppercase">STEP 2 OF 3</p>
                  <h3 className="font-serif text-base text-white font-light">The Event Blueprint</h3>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 font-medium">Event Category</label>
                  <input
                    type="text"
                    placeholder="e.g., Majestic Wedding, Corporate Gala, Golden Birthday"
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                    className="w-full bg-[#111111] border border-gold-950 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <div className="flex justify-between items-center text-xs">
                    <label className="text-gray-400 font-medium">Estimated Guest Size</label>
                    <span className="text-gold-400 font-mono font-medium">{estimatedGuests} Guests</span>
                  </div>
                  <input
                    type="range"
                    min={20}
                    max={1000}
                    step={10}
                    value={estimatedGuests}
                    onChange={(e) => setEstimatedGuests(Number(e.target.value))}
                    className="w-full accent-gold-500 cursor-pointer h-1.5 bg-gold-950/40 rounded-lg appearance-none"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 font-medium">Estimated Luxury Budget</label>
                  <select
                    value={estimatedBudget}
                    onChange={(e) => setEstimatedBudget(e.target.value)}
                    className="w-full bg-[#111111] border border-gold-950 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
                  >
                    <option value="Under $10,000">Under $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000 - $50,000">$25,000 - $50,000 (Standard Luxury)</option>
                    <option value="$50,000 - $100,000">$50,000 - $100,000 (Grand Production)</option>
                    <option value="$100,000+">$100,000+ (Royal Scale)</option>
                  </select>
                </div>

                <div className="flex gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-1/3 py-3 border border-gold-950 rounded-xl font-mono text-xs text-gray-500 hover:text-white transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-2/3 py-3 rounded-xl bg-[#151515] hover:bg-gold-500 border border-gold-950 hover:border-gold-500 text-gold-500 hover:text-black font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer"
                  >
                    Continue <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3: Aesthetics & Styling */}
            {step === 3 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <p className="font-mono text-[9px] text-gold-500 tracking-widest uppercase">STEP 3 OF 3</p>
                  <h3 className="font-serif text-base text-white font-light">Styling Mood & Focus</h3>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 font-medium">Select Theme Styles (Multiple selection)</label>
                  <div className="grid grid-cols-2 gap-2 max-h-36 overflow-y-auto pr-1">
                    {styleOptions.map((style) => {
                      const isSelected = eventStyle.includes(style);
                      return (
                        <button
                          key={style}
                          type="button"
                          onClick={() => handleStyleToggle(style)}
                          className={`px-2.5 py-1.5 text-[10px] text-left rounded-lg border transition-all ${
                            isSelected
                              ? "bg-gold-500/10 border-gold-400 text-gold-400 font-medium"
                              : "bg-[#111] border-gold-950/40 text-gray-500 hover:text-gray-400"
                          }`}
                        >
                          {style}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 font-medium">Primary planning coordinate needed</label>
                  <select
                    value={primaryNeed}
                    onChange={(e) => setPrimaryNeed(e.target.value)}
                    className="w-full bg-[#111111] border border-gold-950 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
                  >
                    <option value="Full Luxury Planning">Full Luxury Planning (End-to-End)</option>
                    <option value="Creative Design & Styling">Creative Design & Spatial Styling</option>
                    <option value="Day-Of Production Supervision">Day-Of Production Supervision</option>
                    <option value="Vendor sourcing only">Vendor sourcing & coordination only</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs text-gray-400 font-medium">Any specific vision or notes?</label>
                  <input
                    type="text"
                    placeholder="e.g. customized stage, floating candles, rare roses"
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    className="w-full bg-[#111111] border border-gold-950 rounded-xl px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>

                <div className="flex gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-1/3 py-3 border border-gold-950 rounded-xl font-mono text-xs text-gray-500 hover:text-white transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="w-2/3 py-3 rounded-xl bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer"
                    id="submit-questionnaire-btn"
                  >
                    Submit Brief <Check className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
