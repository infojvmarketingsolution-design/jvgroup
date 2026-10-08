"use client";

import React, { useEffect, useRef } from "react";

interface Hero3DBackgroundProps {
  theme?: "dark" | "light";
}

export default function Hero3DBackground({ theme = "dark" }: Hero3DBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isDark = theme === "dark";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 900);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.clientHeight || 900;
    };

    window.addEventListener("resize", handleResize);

    const particleCount = Math.min(60, Math.floor(width / 22));
    const particles: {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      hue: number;
    }[] = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z: Math.random() * 2 + 0.5,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.25,
        size: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
        hue: Math.random() > 0.4 ? 24 : 38,
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 3;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    let time = 0;

    const render = () => {
      time += 0.01;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // 1. Receding 3D Perspective Grid
      const horizonY = height * 0.6;
      ctx.save();
      ctx.strokeStyle = isDark ? "rgba(243, 99, 35, 0.12)" : "rgba(243, 99, 35, 0.08)";
      ctx.lineWidth = 1;

      const rayCount = 18;
      for (let i = -rayCount; i <= rayCount; i++) {
        const xBottom = width / 2 + (i * width) / (rayCount * 0.8) + (mouseX - width / 2) * 0.12;
        ctx.beginPath();
        ctx.moveTo(width / 2 + (mouseX - width / 2) * 0.04, horizonY);
        ctx.lineTo(xBottom, height);
        ctx.stroke();
      }

      for (let d = 1; d <= 8; d++) {
        const lineY = horizonY + (height - horizonY) * Math.pow(d / 8, 2.2);
        ctx.beginPath();
        ctx.moveTo(0, lineY);
        ctx.lineTo(width, lineY);
        ctx.stroke();
      }
      ctx.restore();

      // 2. Constellation Lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = isDark 
              ? `rgba(243, 99, 35, ${0.16 * (1 - dist / 120)})`
              : `rgba(243, 99, 35, ${0.1 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.8;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // 3. Particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const mdx = p.x - mouseX;
        const mdy = p.y - mouseY;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        if (mDist < 140 && mDist > 0) {
          const force = (1 - mDist / 140) * 0.8;
          p.x += (mdx / mDist) * force;
          p.y += (mdy / mDist) * force;
        }

        ctx.beginPath();
        const glowAlpha = p.alpha * (0.8 + 0.2 * Math.sin(time * 2 + i));
        ctx.fillStyle = `hsla(${p.hue}, 92%, ${isDark ? "60%" : "50%"}, ${glowAlpha})`;
        ctx.arc(p.x, p.y, p.size * p.z, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
      {/* 3D Depth Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-80"
      />

      {/* Atmospheric Luminous Spotlights */}
      {isDark ? (
        <>
          {/* Top Radial Aurora Flare */}
          <div className="absolute -top-44 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-gradient-to-b from-[var(--color-jv-orange)]/25 via-amber-500/10 to-transparent blur-[160px] rounded-full pointer-events-none" />
          <div className="absolute top-1/3 -left-48 w-[500px] h-[500px] bg-[var(--color-jv-orange)]/15 blur-[160px] rounded-full pointer-events-none animate-pulse" />
          <div className="absolute top-1/4 -right-48 w-[550px] h-[550px] bg-amber-500/15 blur-[160px] rounded-full pointer-events-none" />
          
          {/* Subtle Cyber Grid */}
          <div 
            className="absolute inset-0 opacity-[0.25]"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 85% 65% at 50% 35%, black 20%, transparent 85%)",
              WebkitMaskImage: "radial-gradient(ellipse 85% 65% at 50% 35%, black 20%, transparent 85%)",
            }}
          />
        </>
      ) : (
        <>
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-[var(--color-jv-orange)]/15 via-amber-400/8 to-transparent blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute top-1/3 -left-48 w-[400px] h-[400px] bg-[var(--color-jv-orange)]/10 blur-[150px] rounded-full pointer-events-none" />
          <div className="absolute top-1/4 -right-48 w-[450px] h-[450px] bg-amber-400/12 blur-[150px] rounded-full pointer-events-none" />
          <div 
            className="absolute inset-0 opacity-[0.3]"
            style={{
              backgroundImage: "linear-gradient(to right, rgba(203, 213, 225, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(203, 213, 225, 0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 80%)",
              WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 80%)",
            }}
          />
        </>
      )}
    </div>
  );
}
