import React, { useState } from "react";
import { X, Search, CheckCircle2, Calendar, Sparkles, AlertCircle } from "lucide-react";
import { Booking } from "../types";

interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookings: Booking[];
}

export default function ConfirmationModal({ isOpen, onClose, bookings }: ConfirmationModalProps) {
  const [searchEmail, setSearchEmail] = useState("");
  const [searched, setSearched] = useState(false);
  const [foundBooking, setFoundBooking] = useState<Booking | null>(null);

  if (!isOpen) return null;

  // Premium mock bookings for immediate lookup delight
  const DEMO_BOOKINGS: Booking[] = [
    {
      id: "AXB-998822",
      fullName: "Her Excellency, Ambassador Victoria",
      email: "vip@luxury.com",
      date: "2026-09-12",
      eventType: "Royal Diamond Wedding Gala",
      specialRequests: "VIP seating arrangement, floral chandelier installation over main aisle.",
      createdAt: "Jun 20, 2026, 04:30 PM",
    },
    {
      id: "AXB-554411",
      fullName: "Executive Director, Elite Auto Corp",
      email: "corporate@luxury.com",
      date: "2026-11-05",
      eventType: "Corporate Gala & Product Launch",
      specialRequests: "Gold strobe stage lighting setup & synchronized fireworks cue.",
      createdAt: "Jun 24, 2026, 11:15 AM",
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchEmail) return;

    const query = searchEmail.trim().toLowerCase();
    
    // Check session bookings first
    let match = bookings.find((b) => b.email.toLowerCase() === query);

    // Check demo bookings second
    if (!match) {
      match = DEMO_BOOKINGS.find((b) => b.email.toLowerCase() === query);
    }

    setFoundBooking(match || null);
    setSearched(true);
  };

  const handleClear = () => {
    setSearchEmail("");
    setSearched(false);
    setFoundBooking(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md overflow-hidden bg-[#0A0A0A] rounded-2xl border border-gold-900/60 gold-glow shadow-2xl transition-all duration-300">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 border-b border-gold-950/40 bg-gradient-to-r from-gold-950/20 via-transparent to-transparent">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-gold-500" />
            <h2 className="font-serif text-lg text-white font-medium tracking-wide">
              Confirm Booking Status
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-500 hover:text-white hover:bg-gold-950/40 transition-colors"
            id="close-confirm-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5">
          {/* Quick instructions */}
          <p className="text-xs text-gray-400 mb-4 leading-relaxed">
            Verify reservation schedule and secure access credentials. Enter your registered email to view active booking detail.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="flex gap-2 mb-5">
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input
                type="email"
                required
                placeholder="registered@email.com"
                value={searchEmail}
                onChange={(e) => setSearchEmail(e.target.value)}
                className="w-full bg-[#111111] border border-gold-950 rounded-xl pl-10 pr-3.5 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>
            <button
              type="submit"
              className="px-4 bg-[#151515] hover:bg-gold-500 hover:text-black border border-gold-950 hover:border-gold-500 rounded-xl text-gold-500 font-medium text-xs tracking-wide transition-all duration-300 cursor-pointer"
              id="search-booking-btn"
            >
              Verify
            </button>
          </form>

          {/* Prompt/Hints for the user */}
          {!searched && (
            <div className="bg-gold-950/20 border border-gold-950/50 p-3.5 rounded-xl flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-[11px] text-gold-400 font-medium tracking-wide">
                  Did you just open the app?
                </p>
                <p className="text-[10px] text-gray-500 mt-0.5 leading-relaxed">
                  Search <span className="text-gold-500/90 font-mono font-semibold">vip@luxury.com</span> or <span className="text-gold-500/90 font-mono font-semibold">corporate@luxury.com</span> to see live pre-secured VIP events, or book a new appointment to test custom entries.
                </p>
              </div>
            </div>
          )}

          {/* Results Area */}
          {searched && (
            <div className="animate-fade-in">
              {foundBooking ? (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono text-gold-500 uppercase tracking-widest font-semibold">
                      VERIFIED RESERVATION FOUND
                    </span>
                    <button
                      onClick={handleClear}
                      className="text-[10px] text-gray-500 hover:text-gold-500 font-mono underline"
                    >
                      Clear Search
                    </button>
                  </div>

                  {/* Luxury Ticket Pass styling */}
                  <div className="relative overflow-hidden bg-gradient-to-b from-[#111] to-[#0A0A0A] rounded-2xl border border-gold-400/80 p-5 shadow-xl gold-glow">
                    {/* Background visual detail */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-xl pointer-events-none" />
                    
                    {/* Side cutouts */}
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0A0A0A] rounded-full border-r border-gold-900/60" />
                    <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0A0A0A] rounded-full border-l border-gold-900/60" />

                    <div className="flex justify-between items-start border-b border-dashed border-gold-500/30 pb-3 mb-3.5">
                      <div>
                        <div className="flex items-center gap-1">
                          <Sparkles className="w-3 h-3 text-gold-400 animate-pulse" />
                          <p className="font-mono text-[9px] text-gold-500 tracking-widest">
                            GOLD ACCESS ENVELOPE
                          </p>
                        </div>
                        <h4 className="font-serif text-base text-white font-medium mt-0.5">
                          {foundBooking.eventType}
                        </h4>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-[8px] bg-gold-500/10 text-gold-400 px-2 py-0.5 rounded border border-gold-500/30 font-semibold uppercase">
                          Confirmed
                        </span>
                        <p className="font-mono text-[10px] text-gold-400 font-semibold mt-1.5">
                          {foundBooking.id}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3.5 text-xs">
                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="font-mono text-[9px] text-gray-500 uppercase">CLIENT NAME</p>
                          <p className="text-gray-200 font-medium truncate">{foundBooking.fullName}</p>
                        </div>
                        <div>
                          <p className="font-mono text-[9px] text-gray-500 uppercase">EVENT DATE</p>
                          <p className="text-gold-400 font-semibold font-mono">{foundBooking.date}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div>
                          <p className="font-mono text-[9px] text-gray-500 uppercase">REGISTERED EMAIL</p>
                          <p className="text-gray-300 truncate">{foundBooking.email}</p>
                        </div>
                        <div>
                          <p className="font-mono text-[9px] text-gray-500 uppercase">RESERVED AT</p>
                          <p className="text-gray-400 text-[11px] truncate font-mono">{foundBooking.createdAt}</p>
                        </div>
                      </div>

                      {foundBooking.specialRequests && (
                        <div className="pt-2.5 border-t border-gold-950/50">
                          <p className="font-mono text-[9px] text-gray-500 uppercase mb-0.5">SPECIAL VISION</p>
                          <p className="text-[11px] text-gray-400 italic leading-relaxed">
                            &ldquo;{foundBooking.specialRequests}&rdquo;
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="mt-4 pt-3 border-t border-dashed border-gold-500/20 text-center">
                      <p className="font-mono text-[9px] text-gold-600 tracking-wider">
                        ★ ACTIVEXPERIENCE EVENTS • COUTURE PLANNING ★
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-6 bg-[#111] rounded-xl border border-red-950/50 p-4">
                  <AlertCircle className="w-8 h-8 text-red-500/80 mx-auto mb-2" />
                  <p className="font-serif text-sm text-white font-medium">No Active Booking Found</p>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto mt-1 leading-relaxed">
                    We couldn't locate any reservation matching &ldquo;{searchEmail}&rdquo;. Double check the spelling or make an instant calendar booking now.
                  </p>
                  <button
                    onClick={handleClear}
                    className="mt-3.5 text-xs text-gold-500 hover:text-gold-400 font-mono underline cursor-pointer"
                  >
                    Try Another Email
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
