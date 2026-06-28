import React, { useState } from "react";
import { X, Image as ImageIcon, Sparkles, SlidersHorizontal, Eye } from "lucide-react";

interface GalleryItem {
  id: string;
  url: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g1",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200",
    title: "The Celestial Glass Pavilion",
    category: "Weddings",
    location: "Monarch Luxury Gardens, Lagos",
    year: "2025",
    description: "Bespoke glass dining layouts embellished with delicate cascading wisteria, hanging candles, and warm ambient uplighting for an intimate twilight wedding ceremony."
  },
  {
    id: "g2",
    url: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&q=80&w=1200",
    title: "Satin Elegance Gala Diner",
    category: "Corporate",
    location: "Eko Hotels Grand Ballroom",
    year: "2026",
    description: "Multi-tiered gold-accented tableware and majestic floral arrangements flanking the grand runway for an exclusive corporate anniversary gala dinner."
  },
  {
    id: "g3",
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
    title: "Global Tech Summit Stagecraft",
    category: "Corporate",
    location: "Civic Centre, Victoria Island",
    year: "2025",
    description: "Futuristic geometric lighting trusses integrated with ultra-wide LED projection mapping and high-impact structural stage installations."
  },
  {
    id: "g4",
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200",
    title: "The Golden Jubilee Concert",
    category: "Celebrations",
    location: "The Palms Amphitheatre, Lekki",
    year: "2026",
    description: "State-of-the-art concert sound design, synchronized pixel-mapped laser beam arrays, and professional special effects for high-profile musical celebrations."
  },
  {
    id: "g5",
    url: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&q=80&w=1200",
    title: "Gilded Floral Arch Reception",
    category: "Weddings",
    location: "The Jewel Aerie Hall, Abuja",
    year: "2025",
    description: "A breathtaking entrance lined with organic pastel roses, customized golden geometric backdrops, and signature glowing dynamic monograms."
  },
  {
    id: "g6",
    url: "https://images.unsplash.com/photo-1478147427282-58a87a120781?auto=format&fit=crop&q=80&w=1200",
    title: "Symphony of Lights Banquet",
    category: "Celebrations",
    location: "Transcorp Hilton, Abuja",
    year: "2026",
    description: "Bespoke tabletop structures featuring pure crystal candelabras, gold-dipped charger plates, and delicate customized floral centerpiece designs."
  },
  {
    id: "g7",
    url: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?auto=format&fit=crop&q=80&w=1200",
    title: "Vanguard Brand Activation",
    category: "Activations",
    location: "Vanguard Luxury Lounge, Lagos",
    year: "2025",
    description: "A high-fidelity immersive brand setup using interactive touch walls, sensory scent machines, and premium structural columns."
  },
  {
    id: "g8",
    url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&q=80&w=1200",
    title: "Midnight Noir Private Soirée",
    category: "Private Parties",
    location: "The Penthouse, Victoria Island",
    year: "2026",
    description: "An exclusive black-tie birthday celebration accented with custom-engineered golden champagne pyramids and interactive modular bar installations."
  }
];

interface EventGalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EventGalleryModal({ isOpen, onClose }: EventGalleryModalProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  if (!isOpen) return null;

  const categories = ["All", "Weddings", "Corporate", "Celebrations", "Activations", "Private Parties"];

  const filteredItems = selectedCategory === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      {/* Modal Container */}
      <div className="relative w-full max-w-lg overflow-hidden bg-theme-modal-bg rounded-2xl border border-theme-border gold-glow shadow-2xl transition-all duration-300 flex flex-col h-[85vh] max-h-[720px]">
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-theme-border-light bg-gradient-to-r from-gold-950/20 via-transparent to-transparent shrink-0">
          <div className="flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-gold-500" />
            <h2 className="font-serif text-lg text-theme-text-primary font-medium tracking-wide">
              Event Portfolio Gallery
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full text-theme-text-muted hover:text-theme-text-primary hover:bg-gold-950/40 transition-colors"
            id="close-gallery-modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Navigation */}
        <div className="px-4 py-3 border-b border-theme-border-light bg-theme-bg shrink-0">
          <div className="flex items-center gap-1.5 mb-2">
            <SlidersHorizontal className="w-3.5 h-3.5 text-gold-500" />
            <span className="font-mono text-[10px] text-theme-text-muted uppercase tracking-wider">Filter Curation</span>
          </div>
          <div className="flex gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-mono whitespace-nowrap transition-all uppercase tracking-wider border cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? "bg-gold-500 text-black border-gold-400 font-semibold"
                    : "bg-theme-nav-btn text-theme-text-muted border-theme-border-light hover:text-theme-text-primary hover:border-gold-500/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-theme-bg/50">
          <p className="text-[11px] text-theme-text-muted font-sans text-center mb-4">
            Click on any premium event setup below to open its high-fidelity architectural details.
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setLightboxItem(item)}
                className="group relative aspect-square rounded-xl overflow-hidden border border-theme-border-light cursor-pointer hover:border-gold-500 transition-all duration-300 shadow-sm hover:scale-[1.02]"
              >
                {/* Image */}
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Shadow Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-3 flex flex-col justify-end text-left">
                  <span className="font-mono text-[8px] text-gold-400 uppercase tracking-widest font-semibold">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-[11px] sm:text-xs text-white font-medium tracking-wide truncate mt-0.5 group-hover:text-gold-300 transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex justify-between items-center mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="font-mono text-[8px] text-gray-400">{item.location.split(',')[1] || item.location}</span>
                    <span className="text-gold-400 text-[10px]"><Eye className="w-3 h-3 inline" /></span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <Sparkles className="w-8 h-8 text-gold-500/30 mx-auto mb-2 animate-pulse" />
              <p className="text-xs text-theme-text-muted">No installations found in this curation.</p>
            </div>
          )}
        </div>

        {/* Footer info banner */}
        <div className="p-3 bg-theme-nav-btn border-t border-theme-border-light text-center shrink-0">
          <p className="font-mono text-[8px] text-theme-text-muted tracking-widest uppercase">
            All designs conceptualized & executed by Peter Emmanuel
          </p>
        </div>
      </div>

      {/* Lightbox Modal Layer */}
      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 p-4 animate-fade-in">
          {/* Top bar */}
          <div className="flex justify-between items-center py-2 px-1">
            <div className="flex flex-col text-left">
              <span className="font-mono text-[9px] text-gold-400 uppercase tracking-widest font-semibold">
                {lightboxItem.category} — ARCHITECTURE
              </span>
              <h4 className="font-serif text-lg text-white font-medium tracking-wide">
                {lightboxItem.title}
              </h4>
            </div>
            <button
              onClick={() => setLightboxItem(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Central Image container */}
          <div className="flex-1 flex items-center justify-center py-4">
            <img
              src={lightboxItem.url}
              alt={lightboxItem.title}
              className="max-w-full max-h-[50vh] object-contain rounded-xl border border-gold-500/20 shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Bottom details card */}
          <div className="max-w-md mx-auto w-full bg-[#0A0A0A] border border-gold-500/30 rounded-2xl p-5 mb-4 text-left gold-glow">
            <div className="flex justify-between items-start border-b border-gold-950/40 pb-3 mb-3">
              <div>
                <p className="font-mono text-[9px] text-gold-500 uppercase">LOCATION</p>
                <p className="text-sm font-serif text-white font-medium">{lightboxItem.location}</p>
              </div>
              <div className="text-right">
                <p className="font-mono text-[9px] text-gray-500">FISCAL YEAR</p>
                <p className="font-mono text-sm text-gold-400 font-semibold">{lightboxItem.year}</p>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed font-sans">
              {lightboxItem.description}
            </p>

            <div className="mt-4 pt-3 border-t border-gold-950/40 flex justify-between items-center text-[10px] text-gray-500 font-mono">
              <span>CAMERA: LUXURY ARCHITECTURAL RAW</span>
              <span className="text-gold-500">CURATOR APPROVED</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
