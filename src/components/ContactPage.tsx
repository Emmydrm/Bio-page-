import React, { useState } from "react";
import { ArrowLeft, Send, Check, Phone, MessageCircle, Mail, MapPin, Instagram, Video } from "lucide-react";

interface ContactPageProps {
  onBack: () => void;
  onSocialClick: (platform: string) => void;
}

export default function ContactPage({ onBack, onSocialClick }: ContactPageProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setIsSuccess(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setIsSuccess(false);
  };

  return (
    <div className="px-6 py-6 animate-fade-in text-gray-300" id="contact-page">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-gold-500 hover:text-gold-400 transition-colors mb-6 cursor-pointer"
        id="back-to-home-from-contact"
      >
        <ArrowLeft className="w-4 h-4" /> Back to Studio
      </button>

      {/* Title */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-gold-500/30 bg-gold-500/5 text-[#D4AF37] mb-3 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
          <Phone className="w-5 h-5" />
        </div>
        <h2 className="font-serif text-lg text-white font-semibold tracking-wide">
          Contact Our Studio
        </h2>
        <p className="text-sm font-normal text-gray-300 mt-2 max-w-sm mx-auto leading-relaxed">
          Connect with Peter Emmanuel and our world-class event planners.
        </p>
        <div className="w-12 h-[1px] bg-gold-500/30 mx-auto mt-4" />
      </div>

      <div className="space-y-6">
        
        {/* Contact Form Container */}
        <div className="bg-black/40 border border-gold-950/30 rounded-2xl p-5 shadow-xl">
          {isSuccess ? (
            <div className="py-6 text-center flex flex-col items-center animate-fade-in">
              <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-400 flex items-center justify-center mb-4 text-gold-400">
                <Check className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base text-white font-medium tracking-wide">Message Logged</h3>
              <p className="text-xs text-gray-400 mt-2 max-w-xs leading-relaxed">
                Your direct inquiry has been transmitted to our design atelier. We look forward to reviewing your vision.
              </p>
              <button
                onClick={handleReset}
                className="mt-6 px-5 py-2.5 bg-transparent border border-gold-500/50 hover:bg-gold-500/10 text-gold-500 hover:text-white rounded-full text-xs font-mono uppercase tracking-widest transition-all cursor-pointer"
              >
                Send New Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="font-serif text-sm text-white font-semibold flex items-center gap-2 border-b border-gold-950/30 pb-2">
                Send A Direct Message
              </h3>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-black border border-gold-950 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="you@luxurymail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-black border border-gold-950 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share a short summary of your event vision or questions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-black border border-gold-950 rounded-xl px-4 py-2.5 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-gold-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-[#D4AF37] to-gold-400 hover:from-gold-500 hover:to-gold-300 text-black font-semibold uppercase tracking-widest text-xs transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_10px_rgba(212,175,55,0.15)] font-mono"
              >
                Transmit Note <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}
        </div>

        {/* Direct Coordinates */}
        <div className="bg-black/20 border border-gold-950/20 rounded-2xl p-5 space-y-4">
          <h3 className="font-serif text-xs text-gold-500 uppercase tracking-widest font-semibold pb-1.5 border-b border-gold-950/20">
            Studio Channels
          </h3>

          <div className="space-y-3.5">
            <a
              href="https://wa.me/2348000000000"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => onSocialClick("WhatsApp")}
              className="flex items-center gap-3.5 p-3 rounded-xl bg-black/40 hover:bg-gold-500/10 border border-gold-950/30 hover:border-gold-500/50 transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">WHATSAPP STUDIO</p>
                <p className="text-sm text-gray-200 font-medium group-hover:text-gold-400 transition-colors">+234 (800) AX-EVENTS</p>
              </div>
            </a>

            <a
              href="mailto:emmypee222@gmail.com"
              className="flex items-center gap-3.5 p-3 rounded-xl bg-black/40 hover:bg-gold-500/10 border border-gold-950/30 hover:border-gold-500/50 transition-all duration-300 group"
            >
              <div className="w-9 h-9 rounded-full bg-gold-500/10 text-gold-500 flex items-center justify-center border border-gold-500/20 group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-mono uppercase tracking-wider">DIRECT EMAIL</p>
                <p className="text-sm text-gray-200 font-medium font-mono group-hover:text-gold-400 transition-colors">emmypee222@gmail.com</p>
              </div>
            </a>
          </div>
        </div>

        {/* Social Connections */}
        <div className="flex flex-col items-center gap-3 pt-2 text-center">
          <p className="font-mono text-[9px] text-gray-500 uppercase tracking-widest">Connect with us socially</p>
          <div className="flex gap-4">
            {[
              { id: "instagram", icon: Instagram, href: "https://instagram.com", label: "Instagram" },
              { id: "tiktok", icon: Video, href: "https://tiktok.com", label: "TikTok" },
              { id: "whatsapp", icon: MessageCircle, href: "https://wa.me/2348000000000", label: "WhatsApp" }
            ].map((soc, i) => {
              const Icon = soc.icon;
              return (
                <a
                  key={i}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => onSocialClick(soc.label)}
                  className="w-10 h-10 rounded-full border border-gold-950 hover:border-[#D4AF37] bg-black text-gray-400 hover:text-[#D4AF37] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-sm"
                  id={`contact-social-${soc.id}`}
                >
                  <Icon className="w-4.5 h-4.5" />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
