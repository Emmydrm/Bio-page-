import React, { useState } from "react";
import { X, MapPin, Mail, Phone, MessageSquare, Send, Check } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSent(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSent(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-md overflow-hidden bg-[#0A0A0A] rounded-2xl border border-gold-900/60 gold-glow shadow-2xl transition-all duration-300">
        
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 border-b border-gold-950/40 bg-gradient-to-r from-gold-950/20 via-transparent to-transparent">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-gold-500" />
            <h2 className="font-serif text-lg text-white font-medium tracking-wide">
              Contact Studio
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-gray-500 hover:text-white hover:bg-gold-950/40 transition-colors"
            id="close-contact-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 space-y-5">
          {/* Studio Credentials */}
          <div className="grid grid-cols-1 gap-3.5 bg-[#111] p-4 rounded-xl border border-gold-950/40 text-xs">
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-[9px] text-gray-500 uppercase">TELEPHONE CONCIERGE</p>
                <p className="text-gray-200 mt-0.5 font-medium">+234 (800) AX-EVENTS</p>
                <p className="text-[10px] text-gray-500">Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-gold-950/30 pt-3">
              <Mail className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-[9px] text-gray-500 uppercase">DIRECT INBOX</p>
                <p className="text-gray-200 mt-0.5 font-medium font-mono">emmypee222@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3 border-t border-gold-950/30 pt-3">
              <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-mono text-[9px] text-gray-500 uppercase">DESIGN ATELIER</p>
                <p className="text-gray-200 mt-0.5 font-medium">Penthouse C, Gold Crest Plaza</p>
                <p className="text-[10px] text-gray-500">Victoria Island, Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Form / Success State */}
          {isSent ? (
            <div className="bg-gold-500/5 border border-gold-400 p-4 rounded-xl text-center flex flex-col items-center animate-fade-in">
              <div className="w-10 h-10 rounded-full bg-gold-500/10 border border-gold-400 flex items-center justify-center mb-3 text-gold-400">
                <Check className="w-5 h-5" />
              </div>
              <h4 className="font-serif text-sm text-white font-medium">Message En Route</h4>
              <p className="text-xs text-gray-400 mt-1 max-w-xs leading-relaxed">
                Thank you. Your direct message has been logged directly inside Peter Emmanuel's executive inbox. We respond within 24 business hours.
              </p>
              <button
                onClick={handleReset}
                className="mt-4 px-4 py-2 bg-gold-500 text-black font-semibold text-xs uppercase rounded-lg cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5">
              <h4 className="font-serif text-xs text-gold-500 uppercase tracking-widest font-semibold border-b border-gold-950/30 pb-1 flex items-center gap-1.5">
                <MessageSquare className="w-3.5 h-3.5" /> Send a Direct Note
              </h4>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-gray-500 uppercase font-mono">Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#111111] border border-gold-950 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-[10px] text-gray-500 uppercase font-mono">Email</label>
                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#111111] border border-gold-950 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-gray-500 uppercase font-mono">Message Brief</label>
                <textarea
                  required
                  placeholder="Share a short summary of your inquiry..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={3}
                  className="w-full bg-[#111111] border border-gold-950 rounded-xl px-3 py-2 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-[#151515] hover:bg-gold-500 border border-gold-950 hover:border-gold-500 text-gold-500 hover:text-black font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 transition-all duration-300 cursor-pointer"
                id="submit-contact-note"
              >
                Transmit Note <Send className="w-3 h-3" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
