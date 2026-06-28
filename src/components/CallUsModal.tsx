import React from "react";
import { X, Phone, MessageSquare, Mail, MapPin, Sparkles } from "lucide-react";

interface CallUsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallUsModal({ isOpen, onClose }: CallUsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-sm overflow-hidden bg-[#0A0A0A] rounded-2xl border border-gold-900/60 shadow-2xl transition-all duration-300">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 border-b border-gold-950/40 bg-gradient-to-r from-gold-950/20 via-transparent to-transparent">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-gold-500 animate-pulse" />
            <h2 className="font-serif text-base text-white font-medium tracking-wide">
              Studio Contact Information
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-500 hover:text-white hover:bg-gold-950/40 transition-colors"
            id="close-call-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content with Luxury Contact Cards */}
        <div className="p-5 space-y-4">
          <p className="text-center text-xs text-gray-400 font-sans leading-relaxed pb-1">
            Our private concierge lines are open for elite curation requests.
          </p>

          <div className="space-y-3">
            {/* Phone Card */}
            <a
              href="tel:+2348000000000"
              className="flex items-center gap-4 p-3.5 rounded-xl bg-[#111111] hover:bg-gold-500/10 border border-gold-950/40 hover:border-gold-500/50 transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-full bg-gold-500/10 text-gold-500 flex items-center justify-center border border-gold-500/20 group-hover:scale-105 transition-transform">
                <Phone className="w-4.5 h-4.5" />
              </div>
              <div className="flex-1">
                <p className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">📞 Phone Number</p>
                <p className="text-sm text-gray-200 font-medium group-hover:text-gold-400 transition-colors">+234 (800) AX-EVENTS</p>
              </div>
            </a>

            {/* WhatsApp Card */}
            <a
              href="https://wa.me/2348000000000?text=Hello%20ActiveXperience%20Events,%20I%20would%20like%20to%20inquire%20about%20booking%20a%20premium%20event."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-3.5 rounded-xl bg-[#111111] hover:bg-gold-500/10 border border-gold-950/40 hover:border-gold-500/50 transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-4.5 h-4.5" />
              </div>
              <div className="flex-1">
                <p className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">💬 WhatsApp Number</p>
                <p className="text-sm text-gray-200 font-medium group-hover:text-gold-400 transition-colors">+234 (800) AX-CHAT</p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:emmypee222@gmail.com?subject=ActiveXperience%20Events%20Inquiry"
              className="flex items-center gap-4 p-3.5 rounded-xl bg-[#111111] hover:bg-gold-500/10 border border-gold-950/40 hover:border-gold-500/50 transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-full bg-gold-500/10 text-gold-500 flex items-center justify-center border border-gold-500/20 group-hover:scale-105 transition-transform">
                <Mail className="w-4.5 h-4.5" />
              </div>
              <div className="flex-1">
                <p className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">📧 Email Address</p>
                <p className="text-sm text-gray-200 font-medium font-mono group-hover:text-gold-400 transition-colors">emmypee222@gmail.com</p>
              </div>
            </a>

            {/* Address Card */}
            <div className="flex items-start gap-4 p-3.5 rounded-xl bg-[#111111] border border-gold-950/40">
              <div className="w-9 h-9 rounded-full bg-gold-500/10 text-gold-500 flex items-center justify-center border border-gold-500/20 mt-0.5">
                <MapPin className="w-4.5 h-4.5" />
              </div>
              <div className="flex-1">
                <p className="text-[9px] text-gray-500 font-mono uppercase tracking-wider">📍 Office Address</p>
                <p className="text-xs text-gray-300 font-medium">Penthouse C, Gold Crest Plaza</p>
                <p className="text-[10px] text-gray-500">Victoria Island, Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full mt-4 py-3 bg-[#151515] border border-gold-950 hover:bg-gold-500 hover:text-black hover:border-gold-500 text-gold-500 rounded-xl text-xs uppercase font-mono tracking-widest transition-all cursor-pointer"
          >
            Acknowledge Coordinates
          </button>
        </div>

      </div>
    </div>
  );
}
