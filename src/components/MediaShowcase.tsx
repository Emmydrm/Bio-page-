import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CAROUSEL_IMAGES } from "../data";

export default function MediaShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  useEffect(() => {
    if (!isAutoplay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % CAROUSEL_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoplay]);

  const handlePrev = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev === 0 ? CAROUSEL_IMAGES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setCurrentIndex((prev) => (prev + 1) % CAROUSEL_IMAGES.length);
  };

  return (
    <section className="px-4 py-6" id="media-showcase-section">
      <div className="relative overflow-hidden rounded-xl border border-[#D4AF37]/50 bg-[#0A0A0A] aspect-square shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] transition-all duration-500">
        {/* Slides Container */}
        <div className="relative w-full h-full">
          {CAROUSEL_IMAGES.map((image, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={image.id}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                  isActive
                    ? "opacity-100 scale-100 translate-x-0 z-10"
                    : "opacity-0 scale-105 pointer-events-none z-0"
                }`}
              >
                {/* Background Dim Overlay - very subtle to maintain rich image feel but protect icons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/30 z-10" />

                {/* Main Event Image */}
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover select-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 hover:bg-gold-500/20 text-gold-500 hover:text-gold-400 border border-gold-950 hover:border-gold-500/40 backdrop-blur-sm transition-all duration-300 active:scale-90"
          aria-label="Previous Slide"
          id="carousel-btn-prev"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/60 hover:bg-gold-500/20 text-gold-500 hover:text-gold-400 border border-gold-950 hover:border-gold-500/40 backdrop-blur-sm transition-all duration-300 active:scale-90"
          aria-label="Next Slide"
          id="carousel-btn-next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Slide Indicators / Dots */}
      <div className="flex items-center justify-center gap-2 mt-3">
        {CAROUSEL_IMAGES.map((_, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={index}
              onClick={() => {
                setIsAutoplay(false);
                setCurrentIndex(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                isActive ? "w-6 bg-gold-500" : "w-1.5 bg-gold-950 hover:bg-gold-800"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              id={`carousel-dot-${index}`}
            />
          );
        })}
      </div>
    </section>
  );
}
