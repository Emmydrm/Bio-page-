import React, { useState } from "react";
import { ClipboardSignature, User, Sparkles, Calendar, MapPin, Users, HelpCircle, DollarSign, AlignLeft, Check, ArrowLeft } from "lucide-react";

interface QuestionnairePageProps {
  onBack: () => void;
  onSubmitResponse: (data: {
    fullName: string;
    eventType: string;
    guestCount: string;
    budgetRange: string;
    preferredDate: string;
    location: string;
    additionalNotes: string;
  }) => void;
}

export default function QuestionnairePage({ onBack, onSubmitResponse }: QuestionnairePageProps) {
  const [fullName, setFullName] = useState("");
  const [eventType, setEventType] = useState("Wedding");
  const [guestCount, setGuestCount] = useState("100 - 250");
  const [budgetRange, setBudgetRange] = useState("$25,000 - $50,000");
  const [preferredDate, setPreferredDate] = useState("");
  const [location, setLocation] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !preferredDate || !location) return;

    onSubmitResponse({
      fullName,
      eventType,
      guestCount,
      budgetRange,
      preferredDate,
      location,
      additionalNotes,
    });
    setIsSuccess(true);
  };

  const handleReset = () => {
    setFullName("");
    setEventType("Wedding");
    setGuestCount("100 - 250");
    setBudgetRange("$25,000 - $50,000");
    setPreferredDate("");
    setLocation("");
    setAdditionalNotes("");
    setIsSuccess(false);
    onBack();
  };

  return (
    <div className="px-6 py-6 animate-fade-in text-gray-300" id="questionnaire-page">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold-500 hover:text-gold-400 transition-colors mb-6 cursor-pointer"
        id="back-to-home-from-questionnaire"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Studio
      </button>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold-500/30 bg-gold-500/5 text-[#D4AF37] mb-3 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
          <ClipboardSignature className="w-6 h-6" />
        </div>
        <h2 className="font-serif text-xl sm:text-2xl text-white font-medium tracking-wide">
          Bespoke Event Questionnaire
        </h2>
        <p className="text-xs text-gray-400 mt-2 max-w-sm mx-auto leading-relaxed">
          Help us construct your vision blueprint. Kindly share your initial coordinates below.
        </p>
        <div className="w-12 h-[1px] bg-gold-500/30 mx-auto mt-4" />
      </div>

      {isSuccess ? (
        <div className="bg-gradient-to-b from-[#0f0f0f] to-black border border-gold-500/40 p-6 rounded-2xl text-center flex flex-col items-center animate-fade-in">
          <div className="w-14 h-14 rounded-full bg-gold-500/10 border border-gold-400 flex items-center justify-center mb-4 text-gold-400 animate-pulse">
            <Check className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-lg text-white font-medium tracking-wide">Aesthetics Recorded</h3>
          <p className="text-xs text-gray-400 mt-2 max-w-xs leading-relaxed">
            Thank you. Your bespoke vision brief has been transmitted directly to Peter Emmanuel and his luxury planning team.
          </p>
          <div className="w-full bg-black/60 border border-gold-950/50 rounded-xl p-4 text-left text-[11px] space-y-2.5 my-6">
            <p className="font-mono text-[9px] text-gold-500 tracking-wider uppercase font-bold border-b border-gold-950/40 pb-1">Brief Overview</p>
            <p className="text-gray-300"><span className="text-gray-500 font-mono text-[9px] uppercase tracking-wide mr-2.5">Visionary:</span> {fullName}</p>
            <p className="text-gray-300"><span className="text-gray-500 font-mono text-[9px] uppercase tracking-wide mr-2.5">Production:</span> {eventType}</p>
            <p className="text-gray-300"><span className="text-gray-500 font-mono text-[9px] uppercase tracking-wide mr-2.5">Location:</span> {location}</p>
            <p className="text-gray-300"><span className="text-gray-500 font-mono text-[9px] uppercase tracking-wide mr-2.5">Date Preferred:</span> {preferredDate}</p>
          </div>
          <button
            onClick={handleReset}
            className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#D4AF37] to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-semibold tracking-wider uppercase text-xs transition-all duration-300 cursor-pointer shadow-lg font-mono"
          >
            Return to Studio
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5 bg-black/40 border border-gold-950/30 rounded-2xl p-5 shadow-xl">
          
          {/* Name Field */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-gray-400 font-medium flex items-center gap-2">
              <User className="w-4 h-4 text-gold-500" /> Full Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter your name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full bg-black border border-gold-950 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>

          {/* Event Type */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-gray-400 font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-500" /> Event Type
            </label>
            <select
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="w-full bg-black border border-gold-950 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
            >
              <option value="Wedding">Wedding Celebration</option>
              <option value="Engagement">Engagement Ceremony</option>
              <option value="Corporate Event">Corporate Event / Gala</option>
              <option value="Birthday Celebration">Birthday Celebration</option>
              <option value="Private Dinner Party">Private Dinner Party</option>
              <option value="Luxury Table Styling">Luxury Table Styling Session</option>
            </select>
          </div>

          {/* Guest Count */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-gray-400 font-medium flex items-center gap-2">
              <Users className="w-4 h-4 text-gold-500" /> Guest Count
            </label>
            <select
              value={guestCount}
              onChange={(e) => setGuestCount(e.target.value)}
              className="w-full bg-black border border-gold-950 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
            >
              <option value="Under 50">Bespoke Intimate (Under 50)</option>
              <option value="50 - 100">Boutique Scale (50 - 100)</option>
              <option value="100 - 250">Standard Luxury (100 - 250)</option>
              <option value="250 - 500">Grande Production (250 - 500)</option>
              <option value="500+">Royal Scale (500+)</option>
            </select>
          </div>

          {/* Budget Range */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-gray-400 font-medium flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-gold-500" /> Budget Range
            </label>
            <select
              value={budgetRange}
              onChange={(e) => setBudgetRange(e.target.value)}
              className="w-full bg-black border border-gold-950 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
            >
              <option value="Under $10,000">Under $10,000</option>
              <option value="$10,000 - $25,000">$10,000 - $25,000</option>
              <option value="$25,000 - $50,000">$25,000 - $50,000</option>
              <option value="$50,000 - $100,000">$50,000 - $100,000</option>
              <option value="$100,000+">$100,000+ (Elite Haute scale)</option>
            </select>
          </div>

          {/* Preferred Date */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-gray-400 font-medium flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gold-500" /> Preferred Date
            </label>
            <input
              type="date"
              required
              value={preferredDate}
              onChange={(e) => setPreferredDate(e.target.value)}
              className="w-full bg-black border border-gold-950 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>

          {/* Location */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-gray-400 font-medium flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-500" /> Location / Venue Preferred
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Victoria Island, Lagos or Virtual"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-black border border-gold-950 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
            />
          </div>

          {/* Additional Notes */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-gray-400 font-medium flex items-center gap-2">
              <AlignLeft className="w-4 h-4 text-gold-500" /> Additional Notes
            </label>
            <textarea
              placeholder="Share any structural requests, decor dreams, or notes..."
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              rows={3}
              className="w-full bg-black border border-gold-950 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F1E0A0] hover:from-gold-500 hover:to-gold-300 text-black font-semibold uppercase tracking-widest text-xs transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer shadow-[0_0_15px_rgba(212,175,55,0.25)] font-mono"
            id="questionnaire-submit-btn"
          >
            Submit Questionnaire
          </button>
        </form>
      )}
    </div>
  );
}
