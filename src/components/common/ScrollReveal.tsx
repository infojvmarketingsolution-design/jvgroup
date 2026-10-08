"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: "fade-up" | "scale-up" | "slide-left" | "slide-right" | "fade-in";
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

export default function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 750,
  className = "",
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IntersectionObserver is not supported, reveal immediately
    if (typeof IntersectionObserver === "undefined") {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const getStyles = () => {
    const baseTransition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    if (!isRevealed) {
      switch (animation) {
        case "fade-in":
          return {
            opacity: 0,
            transition: baseTransition,
          };
        case "scale-up":
          return {
            opacity: 0,
            transform: "scale(0.95) translate3d(0, 24px, 0)",
            transition: baseTransition,
          };
        case "slide-left":
          return {
            opacity: 0,
            transform: "translate3d(-36px, 0, 0)",
            transition: baseTransition,
          };
        case "slide-right":
          return {
            opacity: 0,
            transform: "translate3d(36px, 0, 0)",
            transition: baseTransition,
          };
        case "fade-up":
        default:
          return {
            opacity: 0,
            transform: "translate3d(0, 32px, 0)",
            transition: baseTransition,
          };
      }
    }

    return {
      opacity: 1,
      transform: "translate3d(0, 0, 0) scale(1)",
      transition: baseTransition,
    };
  };

  return (
    <div ref={ref} style={getStyles()} className={className}>
      {children}
    </div>
  );
}
