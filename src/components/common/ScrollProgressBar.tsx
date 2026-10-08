"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLSpanElement | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateProgress = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? Math.min(100, Math.max(0, (scrollY / totalHeight) * 100)) : 0;

      if (barRef.current) {
        barRef.current.style.width = `${progress}%`;
      }
      if (textRef.current) {
        textRef.current.textContent = `${Math.round(progress)}%`;
      }

      const shouldShow = scrollY > 280;
      setShowScrollTop((prev) => (prev !== shouldShow ? shouldShow : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateProgress);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateProgress();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Pinned Top Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3.5px] bg-[#E2E8F0]/30 z-[60] pointer-events-none">
        <div
          ref={barRef}
          className="h-full bg-gradient-to-r from-[var(--color-jv-orange)] via-[#FF8045] to-[#C2410C] shadow-[0_0_12px_rgba(243,99,35,0.7)]"
          style={{ width: "0%" }}
        />
      </div>

      {/* Floating Scroll Tracker & Back-to-Top Pill */}
      <div
        className={`fixed bottom-6 right-6 z-40 transition-all duration-300 ${
          showScrollTop ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="group flex items-center gap-2 px-3 py-2 rounded-full bg-white/95 backdrop-blur-md border border-[#E2E8F0] hover:border-[var(--color-jv-orange)] text-[#18191C] hover:text-[var(--color-jv-orange)] shadow-lg hover:shadow-[0_8px_24px_rgba(243,99,35,0.2)] transition-all duration-200 cursor-pointer text-xs font-bold"
        >
          <div className="w-5 h-5 rounded-full bg-[var(--color-jv-orange)] text-white flex items-center justify-center group-hover:-translate-y-0.5 transition-transform">
            <ArrowUp size={11} strokeWidth={3} />
          </div>
          <span
            ref={textRef}
            className="text-[11px] font-mono font-bold text-[#64748B] group-hover:text-[var(--color-jv-orange)]"
          >
            0%
          </span>
        </button>
      </div>
    </>
  );
}
