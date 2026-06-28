import React, { useState } from "react";
import { X, Calendar, User, Mail, Sparkles, Check, ArrowRight, Phone, MapPin } from "lucide-react";
import { Booking } from "../types";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddBooking: (booking: Booking) => void;
}

export default function BookingModal({ isOpen, onClose, onAddBooking }: BookingModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [date, setDate] = useState("");
  const [eventType, setEventType] = useState("Wedding");
  const [eventLocation, setEventLocation] = useState("");
  const [specialRequests, setSpecialRequests] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [createdBooking, setCreatedBooking] = useState<Booking | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !date) return;

    const newBooking: Booking = {
      id: "AXB-" + Math.floor(100000 + Math.random() * 900000),
      fullName,
      email,
      phoneNumber,
      date,
      eventType,
      eventLocation,
      specialRequests,
      createdAt: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    onAddBooking(newBooking);
    setCreatedBooking(newBooking);
    setIsSuccess(true);
  };

  const handleReset = () => {
    setFullName("");
    setEmail("");
    setPhoneNumber("");
    setDate("");
    setEventType("Wedding");
    setEventLocation("");
    setSpecialRequests("");
    setIsSuccess(false);
    setCreatedBooking(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      {/* Modal Card */}
      <div className="relative w-full max-w-md overflow-hidden bg-[#0A0A0A] rounded-2xl border border-gold-900/60 gold-glow shadow-2xl transition-all duration-300">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 border-b border-gold-950/40 bg-gradient-to-r from-gold-950/20 via-transparent to-transparent">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-gold-500" />
            <h2 className="font-serif text-lg text-white font-medium tracking-wide">
              Book Appointment
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-500 hover:text-white hover:bg-gold-950/40 transition-colors"
            id="close-booking-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Success Luxury Pass State */}
        {isSuccess && createdBooking ? (
          <div className="p-6 flex flex-col items-center text-center">
            {/* Elegant Check badge */}
            <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-400 flex items-center justify-center mb-4 text-gold-400 animate-bounce">
              <Check className="w-6 h-6" />
            </div>

            <h3 className="font-serif text-xl text-white font-medium mb-1 tracking-wide">
              Reservation Secured
            </h3>
            <p className="text-xs text-gray-400 max-w-xs mb-6">
              Your appointment has been registered in Peter Emmanuel's exclusive calendar.
            </p>

            {/* Luxury Ticket Pass */}
            <div className="w-full relative bg-[#111111] rounded-xl border border-gold-500/40 p-5 mb-6 text-left gold-glow">
              {/* Ticket Jagged Edges Decors */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0A0A0A] rounded-full border-r border-gold-900/60" />
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-[#0A0A0A] rounded-full border-l border-gold-900/60" />

              {/* Ticket Content */}
              <div className="flex justify-between items-start border-b border-dashed border-gold-900/60 pb-3 mb-3">
                <div>
                  <p className="font-mono text-[9px] text-gold-500 uppercase tracking-widest">
                    RESERVATION PASS
                  </p>
                  <p className="font-serif text-base text-white font-medium">
                    {createdBooking.eventType} Planning
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-[9px] text-gray-500">TICKET ID</p>
                  <p className="font-mono text-xs text-gold-500 font-semibold">
                    {createdBooking.id}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs">
                <div>
                  <p className="font-mono text-[9px] text-gray-500 uppercase">CLIENT</p>
                  <p className="text-gray-200 truncate font-medium">{createdBooking.fullName}</p>
                </div>
                <div>
                  <p className="font-mono text-[9px] text-gray-500 uppercase">DATE</p>
                  <p className="text-gold-400 font-medium font-mono">{createdBooking.date}</p>
                </div>
                <div className="col-span-2">
                  <p className="font-mono text-[9px] text-gray-500 uppercase">EMAIL ADDRESS</p>
                  <p className="text-gray-200 truncate">{createdBooking.email}</p>
                </div>
              </div>

              {createdBooking.specialRequests && (
                <div className="mt-3 pt-2 border-t border-gold-950/40 text-[11px] text-gray-400 italic">
                  &ldquo;{createdBooking.specialRequests}&rdquo;
                </div>
              )}
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-semibold text-sm transition-all duration-300 cursor-pointer"
              id="booking-confirm-return"
            >
              Done
            </button>
          </div>
        ) : (
          /* Input Form */
          <form onSubmit={handleSubmit} className="p-5 flex flex-col gap-4">
            <div>
              <p className="text-[11px] text-gold-500 font-mono tracking-widest uppercase mb-1">
                EXECUTIVE CALENDAR
              </p>
              <h3 className="font-serif text-lg text-white font-light">
                Secure Your Consultation
              </h3>
            </div>

            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400 font-medium flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-gold-500" /> Full Name
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-[#111111] border border-gold-950 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400 font-medium flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-gold-500" /> Email Address
              </label>
              <input
                type="email"
                required
                placeholder="you@luxurymail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#111111] border border-gold-950 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>

            {/* Phone Number */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400 font-medium flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-gold-500" /> Phone Number
              </label>
              <input
                type="tel"
                required
                placeholder="+234..."
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full bg-[#111111] border border-gold-950 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>

            {/* Event Category */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400 font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-gold-500" /> Event Type
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full bg-[#111111] border border-gold-950 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
              >
                <option value="Celestial Wedding">Celestial Wedding Ceremony</option>
                <option value="Corporate Gala">High-Profile Corporate Event</option>
                <option value="Private Banquet">Bespoke Private Banquet / Anniversary</option>
                <option value="Concert & Stage">International Concert & Stage Production</option>
                <option value="Fashion & Artistry">Fashion Runway & Creative Artistry</option>
                <option value="Bespoke Celebration">Bespoke Special Celebration</option>
              </select>
            </div>

            {/* Event Location */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400 font-medium flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-gold-500" /> Event Location
              </label>
              <input
                type="text"
                required
                placeholder="Enter event location or venue"
                value={eventLocation}
                onChange={(e) => setEventLocation(e.target.value)}
                className="w-full bg-[#111111] border border-gold-950 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
              />
            </div>

            {/* Date Selection */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400 font-medium flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-gold-500" /> Event Date
              </label>
              <input
                type="date"
                required
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full bg-[#111111] border border-gold-950 rounded-xl px-3 py-2.5 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors cursor-pointer"
              />
            </div>

            {/* Special Request */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs text-gray-400 font-medium">
                Event Description
              </label>
              <textarea
                placeholder="Briefly share your event vision..."
                value={specialRequests}
                onChange={(e) => setSpecialRequests(e.target.value)}
                rows={2}
                className="w-full bg-[#111111] border border-gold-950 rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl mt-2 bg-gradient-to-r from-gold-600 to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-lg cursor-pointer"
              id="submit-booking-form"
            >
              Request Calendar Booking <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
