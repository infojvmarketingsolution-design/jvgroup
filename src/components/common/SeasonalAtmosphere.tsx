"use client";

import React, { useEffect, useRef, useState } from "react";
import { 
  Sun, 
  Snowflake, 
  CloudRain, 
  Flower2, 
  Wind, 
  CloudSnow, 
  Sparkles,
  MapPin
} from "lucide-react";
import { SeasonType } from "@/context/SeasonContext";

export interface SeasonalAtmosphereProps {
  season: SeasonType;
  sectionIndex?: number;
  totalSections?: number;
  locationLabel?: string;
  isCurrentSeason?: boolean;
  intensity?: "subtle" | "normal" | "vibrant";
  interactive?: boolean;
  showBadge?: boolean;
  className?: string;
}

const SEASON_META: Record<
  SeasonType, 
  { 
    label: string; 
    sublabel: string; 
    icon: any; 
    color: string; 
    contrastColor: string;
    bgAccent: string; 
    borderAccent: string;
  }
> = {
  summer: {
    label: "Summer Season",
    sublabel: "Solar Radiance & Golden Warmth",
    icon: Sun,
    color: "#F36323",
    contrastColor: "#C2410C",
    bgAccent: "rgba(243, 99, 35, 0.12)",
    borderAccent: "rgba(243, 99, 35, 0.4)",
  },
  monsoon: {
    label: "Monsoon Season",
    sublabel: "Torrential Showers & Ripple Splashes",
    icon: CloudRain,
    color: "#0284C7",
    contrastColor: "#0369A1",
    bgAccent: "rgba(2, 132, 199, 0.12)",
    borderAccent: "rgba(2, 132, 199, 0.4)",
  },
  autumn: {
    label: "Autumn Season",
    sublabel: "Golden Foliage & Falling Leaves",
    icon: Wind,
    color: "#D97706",
    contrastColor: "#9A3412",
    bgAccent: "rgba(217, 119, 6, 0.12)",
    borderAccent: "rgba(217, 119, 6, 0.4)",
  },
  "pre-winter": {
    label: "Pre-Winter Season",
    sublabel: "Crisp Twilight Chill & Frost Edge",
    icon: Sparkles,
    color: "#7C3AED",
    contrastColor: "#5B21B6",
    bgAccent: "rgba(124, 58, 237, 0.12)",
    borderAccent: "rgba(124, 58, 237, 0.4)",
  },
  winter: {
    label: "Winter Season",
    sublabel: "Glacial Frost & Ice Shimmer",
    icon: Snowflake,
    color: "#0369A1",
    contrastColor: "#075985",
    bgAccent: "rgba(3, 105, 161, 0.12)",
    borderAccent: "rgba(3, 105, 161, 0.4)",
  },
  snow: {
    label: "Snow Season",
    sublabel: "High-Contrast Crystalline Snowfall",
    icon: CloudSnow,
    color: "#2563EB",
    contrastColor: "#1D4ED8",
    bgAccent: "rgba(37, 99, 235, 0.12)",
    borderAccent: "rgba(37, 99, 235, 0.4)",
  },
  spring: {
    label: "Spring Season",
    sublabel: "Sakura Blossom & Floral Drift",
    icon: Flower2,
    color: "#DB2777",
    contrastColor: "#BE185D",
    bgAccent: "rgba(219, 39, 119, 0.12)",
    borderAccent: "rgba(219, 39, 119, 0.4)",
  },
};

export default function SeasonalAtmosphere({
  season,
  sectionIndex,
  totalSections = 8,
  locationLabel,
  isCurrentSeason = false,
  intensity = "normal",
  interactive = true,
  showBadge = false,
  className = "",
}: SeasonalAtmosphereProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isVisibleRef = useRef<boolean>(true);
  const mouseRef = useRef<{ x: number; y: number; active: boolean; vx: number; vy: number }>({
    x: -999,
    y: -999,
    active: false,
    vx: 0,
    vy: 0,
  });

  const [badgeExpanded, setBadgeExpanded] = useState(false);
  const meta = SEASON_META[season] || SEASON_META.autumn;
  const IconComponent = meta.icon;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let lastTime = performance.now();

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      if (!container || !canvas) return;
      const rect = container.getBoundingClientRect();
      width = Math.max(rect.width, 300);
      height = Math.max(rect.height, 200);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);
    };

    resize();
    const resizeObserver = new ResizeObserver(() => resize());
    resizeObserver.observe(container);

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(container);

    let lastMouseX = -999;
    let lastMouseY = -999;

    const onMouseMove = (e: MouseEvent) => {
      if (!container || !interactive) return;
      const rect = container.getBoundingClientRect();
      const currentX = e.clientX - rect.left;
      const currentY = e.clientY - rect.top;

      if (lastMouseX !== -999) {
        mouseRef.current.vx = (currentX - lastMouseX) * 0.35;
        mouseRef.current.vy = (currentY - lastMouseY) * 0.35;
      }
      lastMouseX = currentX;
      lastMouseY = currentY;

      mouseRef.current.x = currentX;
      mouseRef.current.y = currentY;
      mouseRef.current.active = true;
    };

    const onMouseLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -999;
      mouseRef.current.y = -999;
      mouseRef.current.vx = 0;
      mouseRef.current.vy = 0;
      lastMouseX = -999;
      lastMouseY = -999;
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave, { passive: true });

    const intensityMult = intensity === "subtle" ? 0.7 : intensity === "vibrant" ? 1.35 : 1.0;

    // Helper random functions
    const rand = (min: number, max: number) => Math.random() * (max - min) + min;
    const sample = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

    interface BaseParticle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      alpha: number;
      baseAlpha: number;
      rotation: number;
      rotSpeed: number;
      color: string;
      secondaryColor?: string;
      extra?: any;
    }

    const particles: BaseParticle[] = [];
    const splashes: { x: number; y: number; radius: number; maxRadius: number; alpha: number }[] = [];

    // ==========================================
    // INITIALIZE PARTICLES WITH HIGH CONTRAST
    // ==========================================

    if (season === "summer") {
      // High-contrast warm golden & amber solar motes
      const count = Math.round(42 * intensityMult);
      const colors = ["#F36323", "#D97706", "#EA580C", "#B45309", "#EAB308"];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: rand(0, width || 1200),
          y: rand(0, height || 800),
          vx: rand(-0.35, 0.35),
          vy: rand(-0.65, -0.25),
          size: rand(2.8, 7.5),
          alpha: rand(0.45, 0.85),
          baseAlpha: rand(0.45, 0.85),
          rotation: rand(0, Math.PI * 2),
          rotSpeed: rand(-0.02, 0.02),
          color: sample(colors),
          extra: {
            pulseOffset: rand(0, Math.PI * 2),
            pulseSpeed: rand(0.02, 0.05),
          },
        });
      }
    } else if (season === "winter") {
      // High-contrast Arctic sapphire & cyan frost crystals
      const count = Math.round(55 * intensityMult);
      const colors = ["#0284C7", "#0369A1", "#2563EB", "#0284C7", "#38BDF8"];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: rand(0, width || 1200),
          y: rand(0, height || 800),
          vx: rand(-1.4, -0.5),
          vy: rand(0.3, 0.9),
          size: rand(2.5, 5.5),
          alpha: rand(0.5, 0.9),
          baseAlpha: rand(0.5, 0.9),
          rotation: rand(0, Math.PI * 2),
          rotSpeed: rand(-0.04, 0.04),
          color: sample(colors),
          extra: {
            isCrystal: i % 2 === 0,
            sparklePhase: rand(0, Math.PI * 2),
          },
        });
      }
    } else if (season === "snow") {
      // HIGH-CONTRAST SNOW: Ice-blue outlines, azure shading, clearly pops against white!
      const count = Math.round(75 * intensityMult);
      for (let i = 0; i < count; i++) {
        const layer = i % 3; // 0 = fg large, 1 = mid, 2 = bg
        const size = layer === 0 ? rand(6.0, 9.5) : layer === 1 ? rand(3.5, 5.5) : rand(2.0, 3.2);
        const vy = layer === 0 ? rand(1.1, 1.8) : layer === 1 ? rand(0.7, 1.3) : rand(0.4, 0.8);
        particles.push({
          x: rand(0, width || 1200),
          y: rand(0, height || 800),
          vx: rand(-0.4, 0.4),
          vy,
          size,
          alpha: layer === 0 ? rand(0.85, 0.98) : layer === 1 ? rand(0.7, 0.9) : rand(0.5, 0.7),
          baseAlpha: layer === 0 ? 0.92 : layer === 1 ? 0.8 : 0.6,
          rotation: rand(0, Math.PI * 2),
          rotSpeed: rand(-0.025, 0.025),
          color: layer === 0 ? "#2563EB" : layer === 1 ? "#0284C7" : "#38BDF8",
          extra: {
            layer,
            sway: rand(0, Math.PI * 2),
            swaySpeed: rand(0.018, 0.038),
            swayAmp: layer === 0 ? rand(1.4, 2.2) : rand(0.8, 1.4),
            isGeometricStar: layer === 0 && i % 2 === 0,
          },
        });
      }
    } else if (season === "monsoon") {
      // High-contrast oceanic cobalt & dark cyan rainfall
      const count = Math.round(85 * intensityMult);
      const colors = ["#0284C7", "#0369A1", "#0284C7", "#0E7490", "#1D4ED8"];
      for (let i = 0; i < count; i++) {
        particles.push({
          x: rand(0, (width || 1200) + 200),
          y: rand(-50, height || 800),
          vx: rand(-3.8, -2.2),
          vy: rand(15, 23),
          size: rand(18, 32),
          alpha: rand(0.5, 0.85),
          baseAlpha: rand(0.5, 0.85),
          rotation: Math.atan2(rand(15, 23), rand(-3.8, -2.2)),
          rotSpeed: 0,
          color: sample(colors),
          extra: {
            thickness: rand(1.3, 2.2),
          },
        });
      }
    } else if (season === "spring") {
      // High-contrast vibrant Sakura rose & magenta petals
      const count = Math.round(40 * intensityMult);
      const petalColors = ["#BE185D", "#E11D48", "#DB2777", "#F43F5E", "#9D174D"];
      for (let i = 0; i < count; i++) {
        const isPetal = i % 5 !== 0;
        particles.push({
          x: rand(0, width || 1200),
          y: rand(0, height || 800),
          vx: rand(-0.7, 0.9),
          vy: rand(0.6, 1.4),
          size: isPetal ? rand(8, 15) : rand(3, 5),
          alpha: rand(0.7, 0.95),
          baseAlpha: rand(0.7, 0.95),
          rotation: rand(0, Math.PI * 2),
          rotSpeed: rand(-0.03, 0.03),
          color: isPetal ? sample(petalColors) : "#D97706",
          extra: {
            isPetal,
            flipX: rand(0, Math.PI * 2),
            flipSpeedX: rand(0.02, 0.05),
            sway: rand(0, Math.PI * 2),
            swaySpeed: rand(0.015, 0.035),
          },
        });
      }
    } else if (season === "autumn") {
      // High-contrast vivid autumn leaves (crimson, burnt orange, golden russet)
      const count = Math.round(52 * intensityMult);
      const leafColors = [
        { main: "#EA580C", sec: "#9A3412", border: "#7C2D12" },
        { main: "#D97706", sec: "#B45309", border: "#78350F" },
        { main: "#DC2626", sec: "#991B1B", border: "#7F1D1D" },
        { main: "#B45309", sec: "#78350F", border: "#451A03" },
        { main: "#C2410C", sec: "#9A3412", border: "#431407" },
        { main: "#EAB308", sec: "#CA8A04", border: "#854D0E" },
      ];
      const scale = Math.min(Math.max((width || 1200) / 1440, 0.7), 1.2);
      const trunkX = (width || 1200) - 48 * scale;
      const roadY = (height || 800) - 16;

      for (let i = 0; i < count; i++) {
        const col = sample(leafColors);
        // ~14 leaves start already settled on the road so the user immediately sees them resting
        const isGrounded = i < 14;
        const groundY = roadY + rand(-4, 6);

        let startX: number;
        let startY: number;
        let startVx: number;
        let startVy: number;

        if (isGrounded) {
          // Settled on the road line across the entire width
          startX = rand(30, (width || 1200) - 30);
          startY = groundY;
          startVx = 0;
          startVy = 0;
        } else {
          // Falling from top-right corner tree boughs (70%) or sky (30%)
          const fromTree = i % 3 !== 0;
          startX = fromTree ? trunkX - rand(30, 460) * scale : rand(0, width || 1200);
          startY = fromTree ? rand(10, 260) * scale : rand(-20, (height || 800) * 0.5);
          startVx = rand(-1.8, -0.6);
          startVy = rand(0.8, 1.7);
        }

        particles.push({
          x: startX,
          y: startY,
          vx: startVx,
          vy: startVy,
          size: rand(11, 20),
          alpha: rand(0.82, 0.98),
          baseAlpha: rand(0.82, 0.98),
          rotation: rand(0, Math.PI * 2),
          rotSpeed: rand(-0.035, 0.035),
          color: col.main,
          secondaryColor: col.sec,
          extra: {
            isGrounded,
            groundY,
            restRotation: rand(-0.4, 0.4),
            leafType: i % 2 === 0 ? "maple" : "oak",
            borderColor: col.border,
            wobble: rand(0, Math.PI * 2),
            wobbleSpeed: rand(0.02, 0.045),
            pitch: rand(0, Math.PI * 2),
            pitchSpeed: rand(0.015, 0.035),
          },
        });
      }
    } else if (season === "pre-winter") {
      // High-contrast twilight amethyst violet & frost-bronze leaves
      const count = Math.round(52 * intensityMult);
      const mixedColors = [
        "#9A3412", // Bronze leaf
        "#7C3AED", // Royal twilight violet
        "#4338CA", // Deep indigo frost
        "#0369A1", // Glacial chill
        "#B45309", // Russet
      ];
      for (let i = 0; i < count; i++) {
        const isFrostLeaf = i % 3 === 0;
        particles.push({
          x: rand(0, width || 1200),
          y: rand(0, height || 800),
          vx: rand(-1.1, -0.3),
          vy: rand(0.5, 1.2),
          size: isFrostLeaf ? rand(10, 16) : rand(2.5, 5.0),
          alpha: rand(0.65, 0.95),
          baseAlpha: rand(0.65, 0.95),
          rotation: rand(0, Math.PI * 2),
          rotSpeed: rand(-0.03, 0.03),
          color: sample(mixedColors),
          extra: {
            isFrostLeaf,
            sway: rand(0, Math.PI * 2),
            swaySpeed: rand(0.02, 0.04),
          },
        });
      }
    }

    // ==========================================
    // DRAWING HIGH-CONTRAST PARTICLES
    // ==========================================

    const drawSnowflakeStar = (c: CanvasRenderingContext2D, x: number, y: number, r: number, alpha: number) => {
      c.save();
      c.translate(x, y);

      // Contrast ice-blue outline and soft drop shadow
      c.shadowColor = "rgba(37, 99, 235, 0.5)";
      c.shadowBlur = 6;
      c.strokeStyle = `rgba(37, 99, 235, ${alpha * 0.95})`;
      c.lineWidth = 1.6;

      // 6 geometric arms with sharp contrast
      for (let a = 0; a < 6; a++) {
        c.rotate(Math.PI / 3);
        c.beginPath();
        c.moveTo(0, 0);
        c.lineTo(0, r);
        // Crystal sub-branches
        c.moveTo(0, r * 0.55);
        c.lineTo(r * 0.3, r * 0.85);
        c.moveTo(0, r * 0.55);
        c.lineTo(-r * 0.3, r * 0.85);
        c.stroke();
      }

      // Bright white inner star node with blue outline
      c.fillStyle = "#FFFFFF";
      c.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
      c.lineWidth = 1;
      c.beginPath();
      c.arc(0, 0, 2.2, 0, Math.PI * 2);
      c.fill();
      c.stroke();

      c.restore();
    };

    const drawSakuraPetal = (c: CanvasRenderingContext2D, p: BaseParticle) => {
      c.save();
      c.translate(p.x, p.y);
      c.rotate(p.rotation);

      const scaleX = Math.cos(p.extra.flipX);
      c.scale(scaleX, 1);

      c.fillStyle = p.color;
      c.globalAlpha = p.alpha;
      c.shadowColor = "rgba(190, 24, 93, 0.35)";
      c.shadowBlur = 5;

      // Petal curve with defined notch
      c.beginPath();
      c.moveTo(0, 0);
      c.bezierCurveTo(-p.size * 0.85, -p.size * 0.5, -p.size * 0.5, -p.size * 1.35, 0, -p.size * 1.55);
      c.bezierCurveTo(p.size * 0.5, -p.size * 1.35, p.size * 0.85, -p.size * 0.5, 0, 0);
      c.fill();

      // Contrasting darker vein
      c.strokeStyle = "rgba(136, 19, 55, 0.75)";
      c.lineWidth = 1.1;
      c.beginPath();
      c.moveTo(0, 0);
      c.lineTo(0, -p.size * 1.2);
      c.stroke();

      c.restore();
    };

    const drawAutumnLeaf = (c: CanvasRenderingContext2D, p: BaseParticle) => {
      c.save();
      c.translate(p.x, p.y);
      c.rotate(p.rotation);

      const pitchScale = Math.sin(p.extra.pitch);
      c.scale(Math.abs(pitchScale) * 0.7 + 0.3, 1);

      c.globalAlpha = p.alpha;
      c.fillStyle = p.color;
      c.shadowColor = "rgba(120, 53, 15, 0.35)";
      c.shadowBlur = 6;

      if (p.extra.leafType === "maple") {
        c.beginPath();
        c.moveTo(0, p.size * 0.5);
        c.lineTo(0, p.size * 0.2);
        c.lineTo(-p.size * 0.5, p.size * 0.2);
        c.lineTo(-p.size * 0.65, -p.size * 0.2);
        c.lineTo(-p.size * 0.35, -p.size * 0.4);
        c.lineTo(-p.size * 0.45, -p.size * 0.85);
        c.lineTo(0, -p.size * 0.55);
        c.lineTo(0, -p.size * 1.05);
        c.lineTo(0, -p.size * 0.55);
        c.lineTo(p.size * 0.45, -p.size * 0.85);
        c.lineTo(p.size * 0.35, -p.size * 0.4);
        c.lineTo(p.size * 0.65, -p.size * 0.2);
        c.lineTo(p.size * 0.5, p.size * 0.2);
        c.closePath();
        c.fill();

        // Dark edge border for contrast
        c.strokeStyle = p.extra.borderColor || "#451A03";
        c.lineWidth = 1;
        c.stroke();
      } else {
        c.beginPath();
        c.moveTo(0, p.size * 0.6);
        c.quadraticCurveTo(-p.size * 0.5, p.size * 0.2, -p.size * 0.4, 0);
        c.quadraticCurveTo(-p.size * 0.65, -p.size * 0.4, -p.size * 0.25, -p.size * 0.6);
        c.quadraticCurveTo(-p.size * 0.35, -p.size * 0.95, 0, -p.size * 1.05);
        c.quadraticCurveTo(p.size * 0.35, -p.size * 0.95, p.size * 0.25, -p.size * 0.6);
        c.quadraticCurveTo(p.size * 0.65, -p.size * 0.4, p.size * 0.4, 0);
        c.quadraticCurveTo(p.size * 0.5, p.size * 0.2, 0, p.size * 0.6);
        c.fill();

        c.strokeStyle = p.extra.borderColor || "#451A03";
        c.lineWidth = 1;
        c.stroke();
      }

      // Contrasting central stem vein
      c.strokeStyle = p.secondaryColor || "#78350F";
      c.lineWidth = 1.3;
      c.beginPath();
      c.moveTo(0, p.size * 0.75);
      c.lineTo(0, -p.size * 0.8);
      c.stroke();

      c.restore();
    };

    // ==========================================
    // REALISTIC AUTUMN TREE MODEL & RENDERER
    // ==========================================

    interface AutumnLobe {
      ox: number;
      oy: number;
      rx: number;
      ry: number;
    }

    interface AutumnFoliageCluster {
      dx: number;
      dy: number;
      layer: number; // 0 = deep inner shadow, 1 = midground body, 2 = sunlit crown highlights
      rx: number;
      ry: number;
      lobes: AutumnLobe[];
      color: string;
      shadowColor: string;
      phase: number;
      swayAmp: number;
      leavesCount: number;
    }

    const autumnTreeModel = (() => {
      const clusters: AutumnFoliageCluster[] = [];

      // Realistic sugar maple autumn foliage colors sorted by canopy depth
      const bgPalette = [
        { main: "#5B1313", shadow: "rgba(91, 19, 19, 0.55)" }, // deep burgundy shadow
        { main: "#7F1D1D", shadow: "rgba(127, 29, 29, 0.55)" }, // wine crimson
        { main: "#78350F", shadow: "rgba(120, 53, 15, 0.5)" }, // dark russet
        { main: "#991B1B", shadow: "rgba(153, 27, 27, 0.5)" }, // dark scarlet
      ];

      const midPalette = [
        { main: "#DC2626", shadow: "rgba(220, 38, 38, 0.45)" }, // vibrant scarlet
        { main: "#EA580C", shadow: "rgba(234, 88, 12, 0.45)" }, // fiery burnt orange
        { main: "#C2410C", shadow: "rgba(194, 65, 12, 0.45)" }, // persimmon
        { main: "#D97706", shadow: "rgba(217, 119, 6, 0.45)" }, // warm amber
        { main: "#B45309", shadow: "rgba(180, 83, 9, 0.45)" },  // chestnut amber
      ];

      const fgPalette = [
        { main: "#F59E0B", shadow: "rgba(245, 158, 11, 0.5)" }, // golden honey
        { main: "#EAB308", shadow: "rgba(234, 179, 8, 0.5)" }, // sun gold
        { main: "#FBBF24", shadow: "rgba(251, 191, 36, 0.5)" }, // autumn glow
        { main: "#F97316", shadow: "rgba(249, 115, 22, 0.45)" }, // bright flame orange
      ];

      // Zones for the Top-Right Corner Display Tree matching user reference silhouette (media_1791365151374.png)
      // dx is offset from trunkBaseX (negative dx reaches leftward across the ceiling/corner)
      // dy is offset from top ceiling (minDy >= 32 ensures leaves hang naturally without being chopped flat at y = 0)
      const zoneConfigs = [
        // Zone 1: Far left tip of the ceiling bough (delicate leaves reaching ~450px left along ceiling)
        { count: 14, minDx: -450, maxDx: -330, minDy: 34, maxDy: 75, avgR: 16 },
        // Zone 2: Mid-ceiling overhanging canopy strip
        { count: 20, minDx: -340, maxDx: -170, minDy: 32, maxDy: 92, avgR: 20 },
        // Zone 3: Main top-right corner crown cluster around bough fork
        { count: 24, minDx: -210, maxDx: 15, minDy: 42, maxDy: 185, avgR: 24 },
        // Zone 4: Mid-height bough foliage on the right edge
        { count: 16, minDx: -180, maxDx: 5, minDy: 175, maxDy: 280, avgR: 20 },
        // Zone 5: Lower drooping branch tip foliage on the right edge
        { count: 12, minDx: -135, maxDx: -5, minDy: 270, maxDy: 385, avgR: 16 },
      ];

      zoneConfigs.forEach((zc) => {
        for (let i = 0; i < zc.count; i++) {
          const layerRand = Math.random();
          const layer = layerRand < 0.28 ? 0 : layerRand < 0.72 ? 1 : 2;
          const colSet = layer === 0 ? bgPalette : layer === 1 ? midPalette : fgPalette;
          const col = colSet[Math.floor(Math.random() * colSet.length)];
          const rx = rand(zc.avgR * 0.75, zc.avgR * 1.3);
          const ry = rx * rand(0.72, 0.95);

          // Generate organic sub-lobes for realistic non-uniform cluster shapes
          const lobeCount = Math.floor(rand(3, 6));
          const lobes: AutumnLobe[] = [];
          for (let l = 0; l < lobeCount; l++) {
            const angle = (Math.PI * 2 / lobeCount) * l + rand(-0.35, 0.35);
            const dist = rand(0.25, 0.6) * rx;
            lobes.push({
              ox: Math.cos(angle) * dist,
              oy: Math.sin(angle) * dist * 0.8,
              rx: rx * rand(0.55, 0.85),
              ry: ry * rand(0.55, 0.85),
            });
          }

          clusters.push({
            dx: rand(zc.minDx, zc.maxDx),
            dy: rand(zc.minDy, zc.maxDy),
            layer,
            rx,
            ry,
            lobes,
            color: col.main,
            shadowColor: col.shadow,
            phase: rand(0, Math.PI * 2),
            swayAmp: rand(2.8, 6.5),
            leavesCount: Math.floor(rand(4, 7)),
          });
        }
      });

      clusters.sort((a, b) => a.dy - b.dy);

      const fallenLeaves: { x: number; y: number; rot: number; color: string; size: number }[] = [];
      const leafCols = ["#DC2626", "#EA580C", "#D97706", "#B45309", "#9A3412", "#EAB308", "#7F1D1D"];
      for (let i = 0; i < 32; i++) {
        fallenLeaves.push({
          x: rand(-120, 20),
          y: rand(-14, 12),
          rot: rand(0, Math.PI * 2),
          color: leafCols[i % leafCols.length],
          size: rand(7, 13),
        });
      }

      return { clusters, fallenLeaves };
    })();

    const drawRealisticAutumnTree = (c: CanvasRenderingContext2D, w: number, h: number, time: number, isGust: boolean) => {
      // Anchored strictly in the TOP-RIGHT DISPLAY CORNER, matching user's reference silhouette
      const scale = Math.min(Math.max(w / 1440, 0.7), 1.2);
      const trunkX = w - 48 * scale;
      const trunkTopY = -25;
      const trunkBottomY = h + 2; // Connected all the way to section end / road line!

      const windMultiplier = isGust ? 2.2 : 1.0;
      const windTime = time * 0.0011;
      const windSway = (Math.sin(windTime) * 6.0 + Math.sin(windTime * 2.1) * 2.0) * scale * windMultiplier;

      c.save();

      // Helper function to render an organic foliage cluster in the corner
      const renderFoliageCluster = (cl: (typeof autumnTreeModel.clusters)[0]) => {
        const clusterSwayX = Math.sin(windTime + cl.phase) * cl.swayAmp * scale * windMultiplier;
        const clusterSwayY = Math.cos(windTime * 1.3 + cl.phase) * (cl.swayAmp * 0.3) * scale;
        const cx = trunkX + cl.dx * scale + windSway * 0.7 + clusterSwayX;
        const cy = cl.dy * scale + clusterSwayY;

        c.save();
        c.translate(cx, cy);

        c.fillStyle = cl.color;
        c.shadowColor = cl.shadowColor;
        c.shadowBlur = cl.layer === 0 ? 4 : cl.layer === 1 ? 6 : 8;
        c.globalAlpha = cl.layer === 0 ? 0.75 : cl.layer === 1 ? 0.88 : 0.95;

        // Draw organic multi-lobed body
        c.beginPath();
        for (const lobe of cl.lobes) {
          c.ellipse(lobe.ox * scale, lobe.oy * scale, lobe.rx * scale, lobe.ry * scale, 0, 0, Math.PI * 2);
        }
        c.fill();

        // Individual detailed fluttering maple leaves hanging naturally from boughs
        for (let li = 0; li < cl.leavesCount; li++) {
          const spreadAngle = (Math.PI * 2 / cl.leavesCount) * li + cl.phase;
          const dist = (cl.rx * 0.45 + (li % 3) * (cl.rx * 0.2)) * scale;
          const lx = Math.cos(spreadAngle) * dist;
          const ly = Math.sin(spreadAngle) * (cl.ry * 0.82 * scale) + 6 * scale;
          const leafFlutter = Math.sin(windTime * 3.2 + li + cl.phase) * (isGust ? 0.65 : 0.28);
          const hangAngle = Math.PI * 0.5 + Math.sin(li + cl.phase) * 0.5 + leafFlutter;

          c.save();
          c.translate(lx, ly);
          c.rotate(hangAngle);
          c.fillStyle = cl.color;
          c.strokeStyle = "rgba(69, 26, 3, 0.45)";
          c.lineWidth = 0.8;

          const lsize = (8.5 + (li % 3) * 2.2) * scale;
          // Maple leaf silhouette
          c.beginPath();
          c.moveTo(0, lsize * 0.45);
          c.lineTo(-lsize * 0.35, lsize * 0.15);
          c.lineTo(-lsize * 0.55, -lsize * 0.2);
          c.lineTo(-lsize * 0.25, -lsize * 0.45);
          c.lineTo(0, -lsize * 0.95);
          c.lineTo(lsize * 0.25, -lsize * 0.45);
          c.lineTo(lsize * 0.55, -lsize * 0.2);
          c.lineTo(lsize * 0.35, lsize * 0.15);
          c.closePath();
          c.fill();
          c.stroke();

          // Delicate vein
          c.strokeStyle = "rgba(255, 255, 255, 0.35)";
          c.lineWidth = 0.6;
          c.beginPath();
          c.moveTo(0, lsize * 0.4);
          c.lineTo(0, -lsize * 0.7);
          c.stroke();

          c.restore();
        }

        c.restore();
      };

      // 1. STAGE 1: Deep Background Shadow Foliage (Layer 0)
      for (const cl of autumnTreeModel.clusters) {
        if (cl.layer === 0) renderFoliageCluster(cl);
      }

      // 2. STAGE 2: Trunk Connected to Section End (Floor/Road), Buttress Roots & Overhanging Boughs
      c.lineCap = "round";
      c.lineJoin = "round";

      const barkGrad = c.createLinearGradient(trunkX - 80 * scale, trunkBottomY, trunkX + 35 * scale, trunkTopY);
      barkGrad.addColorStop(0, "#150903");   // deep root peat
      barkGrad.addColorStop(0.2, "#281206"); // dark walnut wood
      barkGrad.addColorStop(0.55, "#4E1F08"); // warm chestnut heartwood
      barkGrad.addColorStop(0.85, "#78350F"); // golden amber bark
      barkGrad.addColorStop(1, "#9A3412");   // sunlit sienna crown
      c.strokeStyle = barkGrad;

      // Mighty buttress root flares firmly planted on the section end / road
      c.lineWidth = 42 * scale;
      c.beginPath();
      c.moveTo(trunkX - 80 * scale, trunkBottomY);
      c.quadraticCurveTo(trunkX - 42 * scale, trunkBottomY - 55 * scale, trunkX - 22 * scale, trunkBottomY - 150 * scale);
      c.stroke();

      c.lineWidth = 30 * scale;
      c.beginPath();
      c.moveTo(trunkX - 50 * scale, trunkBottomY);
      c.quadraticCurveTo(trunkX - 26 * scale, trunkBottomY - 45 * scale, trunkX - 10 * scale, trunkBottomY - 110 * scale);
      c.stroke();

      c.lineWidth = 36 * scale;
      c.beginPath();
      c.moveTo(w + 14, trunkBottomY);
      c.quadraticCurveTo(trunkX + 38 * scale, trunkBottomY - 45 * scale, trunkX + 22 * scale, trunkBottomY - 130 * scale);
      c.stroke();

      // Big, mighty continuous vertical trunk running down right display margin (connected to section end!)
      // Lower trunk: massive grounded base at section end to mid-height
      c.lineWidth = 82 * scale;
      c.beginPath();
      c.moveTo(trunkX, trunkBottomY);
      c.quadraticCurveTo(trunkX - 8 * scale + windSway * 0.15, h * 0.74, trunkX - 12 * scale + windSway * 0.25, h * 0.52);
      c.stroke();

      // Mid trunk: strong structural shaft
      c.lineWidth = 66 * scale;
      c.beginPath();
      c.moveTo(trunkX - 12 * scale + windSway * 0.25, h * 0.52);
      c.quadraticCurveTo(trunkX - 14 * scale + windSway * 0.32, h * 0.38, trunkX - 12 * scale + windSway * 0.38, h * 0.28);
      c.stroke();

      // Upper trunk & crown: tapering into canopy
      c.lineWidth = 50 * scale;
      c.beginPath();
      c.moveTo(trunkX - 12 * scale + windSway * 0.38, h * 0.28);
      c.quadraticCurveTo(trunkX - 14 * scale + windSway * 0.42, 160 * scale, trunkX - 8 * scale + windSway * 0.48, trunkTopY);
      c.stroke();

      // 3D Bark Texture Ridges & Wood striations along the entire wide trunk
      c.save();
      // Far left shadow furrow
      c.strokeStyle = "rgba(15, 6, 2, 0.75)";
      c.lineWidth = 4.8 * scale;
      c.beginPath();
      c.moveTo(trunkX - 30 * scale, trunkBottomY);
      c.quadraticCurveTo(trunkX - 36 * scale + windSway * 0.15, h * 0.72, trunkX - 38 * scale + windSway * 0.25, h * 0.5);
      c.quadraticCurveTo(trunkX - 36 * scale + windSway * 0.35, 220 * scale, trunkX - 26 * scale + windSway * 0.45, trunkTopY);
      c.stroke();

      // Inner left shadow groove
      c.strokeStyle = "rgba(30, 12, 4, 0.6)";
      c.lineWidth = 3.8 * scale;
      c.beginPath();
      c.moveTo(trunkX - 14 * scale, trunkBottomY);
      c.quadraticCurveTo(trunkX - 20 * scale + windSway * 0.15, h * 0.72, trunkX - 22 * scale + windSway * 0.25, h * 0.5);
      c.quadraticCurveTo(trunkX - 20 * scale + windSway * 0.35, 220 * scale, trunkX - 14 * scale + windSway * 0.45, trunkTopY);
      c.stroke();

      // Central core grain line
      c.strokeStyle = "rgba(120, 53, 15, 0.55)";
      c.lineWidth = 4.2 * scale;
      c.beginPath();
      c.moveTo(trunkX + 2 * scale, trunkBottomY);
      c.quadraticCurveTo(trunkX - 4 * scale + windSway * 0.15, h * 0.72, trunkX - 6 * scale + windSway * 0.25, h * 0.5);
      c.quadraticCurveTo(trunkX - 4 * scale + windSway * 0.35, 220 * scale, trunkX + windSway * 0.45, trunkTopY);
      c.stroke();

      // Right-side warm golden ridge
      c.strokeStyle = "rgba(217, 119, 6, 0.55)";
      c.lineWidth = 3.6 * scale;
      c.beginPath();
      c.moveTo(trunkX + 18 * scale, trunkBottomY);
      c.quadraticCurveTo(trunkX + 12 * scale + windSway * 0.15, h * 0.72, trunkX + 10 * scale + windSway * 0.25, h * 0.5);
      c.quadraticCurveTo(trunkX + 8 * scale + windSway * 0.35, 220 * scale, trunkX + 10 * scale + windSway * 0.45, trunkTopY);
      c.stroke();

      // Far right sunlit rim light
      c.strokeStyle = "rgba(245, 158, 11, 0.45)";
      c.lineWidth = 2.8 * scale;
      c.beginPath();
      c.moveTo(trunkX + 32 * scale, trunkBottomY);
      c.quadraticCurveTo(trunkX + 26 * scale + windSway * 0.15, h * 0.72, trunkX + 22 * scale + windSway * 0.25, h * 0.5);
      c.quadraticCurveTo(trunkX + 18 * scale + windSway * 0.35, 220 * scale, trunkX + 18 * scale + windSway * 0.45, trunkTopY);
      c.stroke();
      c.restore();

      // Base leaves settled around the wide roots at the section end
      c.save();
      const baseLeaves = [
        { dx: -74, dy: -6, rot: 0.35, col: "#DC2626", sz: 14 },
        { dx: -56, dy: -4, rot: -0.4, col: "#EA580C", sz: 16 },
        { dx: -38, dy: -8, rot: 0.8,  col: "#D97706", sz: 13 },
        { dx: -20, dy: -5, rot: -0.2, col: "#B45309", sz: 15 },
        { dx: 4,   dy: -7, rot: 0.5,  col: "#9A3412", sz: 13 },
        { dx: 22,  dy: -4, rot: -0.3, col: "#DC2626", sz: 14 },
        { dx: 38,  dy: -6, rot: 0.6,  col: "#EA580C", sz: 12 },
      ];
      for (const bl of baseLeaves) {
        c.save();
        c.translate(trunkX + bl.dx * scale, trunkBottomY + bl.dy);
        c.rotate(bl.rot);
        c.fillStyle = bl.col;
        c.strokeStyle = "#451A03";
        c.lineWidth = 0.8;
        const bsz = bl.sz * scale;
        c.beginPath();
        c.ellipse(0, 0, bsz * 0.5, bsz * 0.95, 0, 0, Math.PI * 2);
        c.fill();
        c.stroke();
        c.restore();
      }
      c.restore();

      // Primary Bough 1: High ceiling arching limb reaching across top display
      c.lineWidth = 22 * scale;
      const bough1EndX = trunkX - 440 * scale + windSway * 0.85;
      const bough1EndY = 38 * scale;
      c.beginPath();
      c.moveTo(trunkX - 16 * scale, 175 * scale);
      c.quadraticCurveTo(trunkX - 130 * scale, 52 * scale, bough1EndX, bough1EndY);
      c.stroke();

      // Ceiling bough sub-limbs and dipping twigs
      c.lineWidth = 11 * scale;
      const bough1Sub1X = trunkX - 240 * scale + windSway * 0.75;
      const bough1Sub1Y = 96 * scale;
      c.beginPath();
      c.moveTo(trunkX - 180 * scale, 48 * scale);
      c.quadraticCurveTo(trunkX - 210 * scale, 75 * scale, bough1Sub1X, bough1Sub1Y);
      c.stroke();

      c.lineWidth = 6 * scale;
      c.beginPath();
      c.moveTo(bough1Sub1X, bough1Sub1Y);
      c.quadraticCurveTo(bough1Sub1X - 35 * scale, bough1Sub1Y + 18 * scale, bough1Sub1X - 60 * scale + windSway * 0.9, bough1Sub1Y + 12 * scale);
      c.stroke();

      // Second dipping twig along ceiling
      c.lineWidth = 7.5 * scale;
      const bough1Sub2X = trunkX - 365 * scale + windSway * 0.8;
      const bough1Sub2Y = 78 * scale;
      c.beginPath();
      c.moveTo(trunkX - 310 * scale, 39 * scale);
      c.quadraticCurveTo(trunkX - 340 * scale, 60 * scale, bough1Sub2X, bough1Sub2Y);
      c.stroke();

      // Delicate tip twigs reaching far left along the ceiling
      c.lineWidth = 4.5 * scale;
      c.beginPath();
      c.moveTo(bough1EndX, bough1EndY);
      c.quadraticCurveTo(bough1EndX - 35 * scale, bough1EndY - 6 * scale, bough1EndX - 65 * scale + windSway, bough1EndY + 8 * scale);
      c.moveTo(bough1EndX, bough1EndY);
      c.quadraticCurveTo(bough1EndX - 25 * scale, bough1EndY + 18 * scale, bough1EndX - 45 * scale + windSway * 0.9, bough1EndY + 28 * scale);
      c.stroke();

      // Primary Bough 2: Upper-mid bough arching gracefully into corner
      c.lineWidth = 18 * scale;
      const bough2EndX = trunkX - 195 * scale + windSway * 0.72;
      const bough2EndY = 250 * scale;
      c.beginPath();
      c.moveTo(trunkX - 18 * scale, 215 * scale);
      c.quadraticCurveTo(trunkX - 95 * scale, 225 * scale, bough2EndX, bough2EndY);
      c.stroke();

      // Sub-branches of Bough 2
      c.lineWidth = 9.5 * scale;
      const bough2SubX = bough2EndX - 45 * scale + windSway * 0.85;
      const bough2SubY = bough2EndY + 55 * scale;
      c.beginPath();
      c.moveTo(bough2EndX, bough2EndY);
      c.quadraticCurveTo(bough2EndX - 20 * scale, bough2EndY + 30 * scale, bough2SubX, bough2SubY);
      c.stroke();

      c.lineWidth = 5 * scale;
      c.beginPath();
      c.moveTo(bough2SubX, bough2SubY);
      c.quadraticCurveTo(bough2SubX - 25 * scale, bough2SubY + 20 * scale, bough2SubX - 45 * scale + windSway, bough2SubY + 15 * scale);
      c.stroke();

      // Primary Bough 3: Mid-lower drooping bough framing right side
      c.lineWidth = 15 * scale;
      const bough3EndX = trunkX - 135 * scale + windSway * 0.6;
      const bough3EndY = 375 * scale;
      c.beginPath();
      c.moveTo(trunkX - 16 * scale, 315 * scale);
      c.quadraticCurveTo(trunkX - 70 * scale, 335 * scale, bough3EndX, bough3EndY);
      c.stroke();

      c.lineWidth = 7 * scale;
      const bough3SubX = bough3EndX - 30 * scale + windSway * 0.75;
      const bough3SubY = bough3EndY + 55 * scale;
      c.beginPath();
      c.moveTo(bough3EndX, bough3EndY);
      c.quadraticCurveTo(bough3EndX - 15 * scale, bough3EndY + 30 * scale, bough3SubX, bough3SubY);
      c.stroke();

      // Top corner fork into ceiling crown
      c.lineWidth = 13 * scale;
      c.beginPath();
      c.moveTo(trunkX - 14 * scale, 110 * scale);
      c.quadraticCurveTo(trunkX - 35 * scale, 70 * scale, trunkX - 60 * scale + windSway * 0.6, 38 * scale);
      c.moveTo(trunkX - 10 * scale, 85 * scale);
      c.quadraticCurveTo(trunkX + 6 * scale, 55 * scale, trunkX + 18 * scale + windSway * 0.5, 26 * scale);
      c.stroke();

      // 4. STAGE 3: Midground Foliage (Layer 1) - weaves over and around primary boughs
      for (const cl of autumnTreeModel.clusters) {
        if (cl.layer === 1) renderFoliageCluster(cl);
      }

      // 5. STAGE 4: Foreground Sunlit Crown Highlights (Layer 2)
      for (const cl of autumnTreeModel.clusters) {
        if (cl.layer === 2) renderFoliageCluster(cl);
      }

      c.restore();
    };

    // Helper function to draw dynamic visual air flow streamline ribbons across the road
    const drawAirFlowStream = (c: CanvasRenderingContext2D, w: number, roadY: number, progress: number) => {
      c.save();
      const streamY = roadY - 14;
      const flowHeadX = w * (1.2 - progress * 1.5);

      // 1. Soft atmospheric wind glow across the road
      const windGlow = c.createLinearGradient(0, streamY - 40, 0, streamY + 25);
      windGlow.addColorStop(0, "rgba(255, 255, 255, 0)");
      windGlow.addColorStop(0.5, "rgba(254, 243, 199, 0.24)"); // warm amber air shimmer
      windGlow.addColorStop(1, "rgba(255, 255, 255, 0)");
      c.fillStyle = windGlow;
      c.fillRect(0, streamY - 40, w, 65);

      // 2. Aerodynamic wind ribbons rushing along the road
      const ribbons = [
        { dy: -24, h: 2.2, color: "rgba(255, 255, 255, 0.65)", speed: 1.1, amp: 8 },
        { dy: -12, h: 3.0, color: "rgba(251, 191, 36, 0.55)", speed: 1.3, amp: 14 },
        { dy: 0,   h: 2.5, color: "rgba(245, 158, 11, 0.6)",  speed: 1.0, amp: 10 },
        { dy: 10,  h: 1.8, color: "rgba(255, 255, 255, 0.5)",  speed: 1.2, amp: 6 },
      ];

      for (const r of ribbons) {
        c.beginPath();
        c.strokeStyle = r.color;
        c.lineWidth = r.h;
        c.lineCap = "round";

        const ribbonStartX = Math.max(-50, flowHeadX * r.speed);
        const ribbonEndX = Math.min(w + 100, ribbonStartX + w * 0.85);

        c.moveTo(ribbonEndX, streamY + r.dy);
        for (let x = ribbonEndX; x >= ribbonStartX; x -= 40) {
          const wave = Math.sin((x * 0.015) + progress * 12) * r.amp;
          c.lineTo(x, streamY + r.dy + wave);
        }
        c.stroke();
      }

      // 3. Fast wind breeze dust particles caught in the air flow
      for (let i = 0; i < 18; i++) {
        const motePhase = (progress * 3.5 + i * 0.055) % 1.0;
        const moteX = w * (1.1 - motePhase * 1.3);
        const moteY = streamY + ((i * 7) % 36 - 18) + Math.sin(motePhase * 15 + i) * 6;
        c.fillStyle = i % 2 === 0 ? "rgba(255, 255, 255, 0.85)" : "rgba(251, 191, 36, 0.8)";
        c.beginPath();
        c.arc(moteX, moteY, (i % 3) * 0.6 + 1.2, 0, Math.PI * 2);
        c.fill();
      }

      c.restore();
    };

    // ==========================================
    // RENDER LOOP
    // ==========================================

    const render = (time: number) => {
      animId = requestAnimationFrame(render);
      if (!isVisibleRef.current) return;

      lastTime = time;
      ctx.clearRect(0, 0, width, height);

      mouseRef.current.vx *= 0.92;
      mouseRef.current.vy *= 0.92;

      const mX = mouseRef.current.x;
      const mY = mouseRef.current.y;
      const mActive = mouseRef.current.active;

      // ------------------------------------------
      // 1. SUMMER (Golden Amber Sunlight)
      // ------------------------------------------
      if (season === "summer") {
        const sunX = width - 50;
        const sunY = 50;
        const sunGrad = ctx.createRadialGradient(sunX, sunY, 20, sunX, sunY, Math.max(width * 0.7, 450));
        sunGrad.addColorStop(0, "rgba(245, 158, 11, 0.22)");
        sunGrad.addColorStop(0.35, "rgba(243, 99, 35, 0.08)");
        sunGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = sunGrad;
        ctx.fillRect(0, 0, width, height);

        for (const p of particles) {
          p.extra.pulseOffset += p.extra.pulseSpeed;
          p.alpha = p.baseAlpha * (0.65 + 0.35 * Math.sin(p.extra.pulseOffset));

          p.y += p.vy;
          p.x += p.vx + Math.sin(p.extra.pulseOffset) * 0.4;
          p.rotation += p.rotSpeed;

          if (mActive) {
            const dx = p.x - mX;
            const dy = p.y - mY;
            const dist = Math.hypot(dx, dy);
            if (dist < 140) {
              const push = (140 - dist) / 140;
              p.x += (dx / dist) * push * 2.5;
              p.y += (dy / dist) * push * 2.5;
            }
          }

          if (p.y < -20) {
            p.y = height + 10;
            p.x = rand(0, width);
          }
          if (p.x < -20) p.x = width + 10;
          if (p.x > width + 20) p.x = -10;

          ctx.save();
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 10;
          ctx.fill();

          // High contrast bright core
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 0.45, 0, Math.PI * 2);
          ctx.fillStyle = "#FFFBEB";
          ctx.globalAlpha = p.alpha;
          ctx.shadowBlur = 0;
          ctx.fill();
          ctx.restore();
        }
      }

      // ------------------------------------------
      // 2. MONSOON (Oceanic Teal Rain & Splashes)
      // ------------------------------------------
      else if (season === "monsoon") {
        for (let i = splashes.length - 1; i >= 0; i--) {
          const sp = splashes[i];
          sp.radius += 1.0;
          sp.alpha -= 0.04;

          if (sp.alpha <= 0) {
            splashes.splice(i, 1);
            continue;
          }

          ctx.save();
          ctx.beginPath();
          ctx.ellipse(sp.x, sp.y, sp.radius * 2.2, sp.radius * 0.75, 0, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(2, 132, 199, ${sp.alpha * 0.9})`;
          ctx.lineWidth = 1.8;
          ctx.stroke();

          // Droplet splash beads
          ctx.fillStyle = `rgba(3, 105, 161, ${sp.alpha})`;
          ctx.beginPath();
          ctx.arc(sp.x - sp.radius * 0.8, sp.y - sp.radius * 0.6, 1.2, 0, Math.PI * 2);
          ctx.arc(sp.x + sp.radius * 0.8, sp.y - sp.radius * 0.6, 1.2, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }

        const mouseWindX = mActive ? mouseRef.current.vx * 0.45 : 0;

        for (const p of particles) {
          p.x += p.vx + mouseWindX;
          p.y += p.vy;

          if (p.y > height - 12) {
            if (Math.random() < 0.35 && splashes.length < 28) {
              splashes.push({
                x: p.x,
                y: height - rand(4, 16),
                radius: 1,
                maxRadius: rand(10, 18),
                alpha: rand(0.65, 0.9),
              });
            }
            p.y = rand(-30, -5);
            p.x = rand(0, width + 150);
          }

          ctx.save();
          ctx.beginPath();
          ctx.strokeStyle = p.color;
          ctx.globalAlpha = p.alpha;
          ctx.lineWidth = p.extra.thickness;
          ctx.lineCap = "round";
          ctx.shadowColor = "rgba(2, 132, 199, 0.4)";
          ctx.shadowBlur = 4;

          const dx = Math.cos(p.rotation) * p.size;
          const dy = Math.sin(p.rotation) * p.size;

          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x - dx, p.y - dy);
          ctx.stroke();
          ctx.restore();
        }
      }

      // ------------------------------------------
      // 3. AUTUMN (Realistic Tree, 10s Road Accumulation & Air Flow Blast)
      // ------------------------------------------
      else if (season === "autumn") {
        const ACCUMULATE_DURATION = 10000; // 10.0s of leaves landing & resting on the road
        const GUST_DURATION = 2600;        // 2.6s of strong air flow gust
        const TOTAL_CYCLE = ACCUMULATE_DURATION + GUST_DURATION;

        const cycleTime = time % TOTAL_CYCLE;
        const isGust = cycleTime >= ACCUMULATE_DURATION;
        const gustProgress = isGust ? (cycleTime - ACCUMULATE_DURATION) / GUST_DURATION : 0;

        const scale = Math.min(Math.max(width / 1440, 0.7), 1.2);
        const trunkX = width - 48 * scale;
        const roadY = height - 16;

        // 1. Draw the realistic organic autumn tree planted on the road
        drawRealisticAutumnTree(ctx, width, height, time, isGust);

        // 2. Draw visual air flow stream when gust is active
        if (isGust) {
          drawAirFlowStream(ctx, width, roadY, gustProgress);
        }

        // 3. Update & render falling and grounded leaves
        for (const p of particles) {
          // If gust just hit a grounded leaf, kick it up into the air flow!
          if (isGust && p.extra.isGrounded) {
            p.extra.isGrounded = false;
            p.vx = rand(-16, -26); // rush rapidly leftward out of display!
            p.vy = rand(-4, -10);  // upward aerodynamic lift
            p.rotSpeed = rand(-0.25, 0.25);
          }

          if (p.extra.isGrounded) {
            // Leaf is resting peacefully on the road line (next section start line)
            // Micro rustle in the gentle ground breeze
            p.rotation = p.extra.restRotation + Math.sin(time * 0.003 + p.x) * 0.06;

            if (mActive) {
              const dx = p.x - mX;
              const dy = p.y - mY;
              const dist = Math.hypot(dx, dy);
              if (dist < 100) {
                // Interactive cursor rustle on road leaves
                p.rotation += (dx > 0 ? -0.15 : 0.15);
              }
            }
          } else {
            // Leaf is in flight / falling
            p.extra.wobble += p.extra.wobbleSpeed;
            p.extra.pitch += p.extra.pitchSpeed;

            if (isGust) {
              // Air flow carries leaves with extreme velocity
              p.vx = Math.min(p.vx - 0.4, -15);
              p.x += p.vx;
              p.y += p.vy;
              p.rotation += p.rotSpeed * 2.5;
            } else {
              // Gentle normal autumn flutter
              const swayX = Math.sin(p.extra.wobble) * 2.2;
              p.x += p.vx + swayX;
              p.y += p.vy;
              p.rotation += p.rotSpeed;

              if (mActive) {
                const dx = p.x - mX;
                const dy = p.y - mY;
                const dist = Math.hypot(dx, dy);
                if (dist < 140) {
                  const power = (140 - dist) / 140;
                  p.x += mouseRef.current.vx * power * 2.2;
                  p.y += mouseRef.current.vy * power * 2.2 - 2.0;
                }
              }

              // Check if falling leaf has reached the road!
              if (p.y >= p.extra.groundY) {
                p.y = p.extra.groundY;
                p.extra.isGrounded = true;
                p.vx = 0;
                p.vy = 0;
                p.rotation = p.extra.restRotation;
              }
            }
          }

          // Boundary reset: when leaves are blown out of display (past left edge or bottom)
          if (p.x < -40 || p.y > height + 25) {
            if (!isGust) {
              // Respawn from corner tree canopy (70%) or sky (30%)
              const fromTree = Math.random() < 0.7;
              p.x = fromTree ? trunkX - rand(30, 460) * scale : rand(0, width);
              p.y = fromTree ? rand(10, 260) * scale : -rand(15, 35);
              p.vx = rand(-1.8, -0.6);
              p.vy = rand(0.8, 1.7);
              p.extra.isGrounded = false;
              p.extra.groundY = roadY + rand(-5, 5);
              p.extra.restRotation = rand(-0.4, 0.4);
            }
          }

          drawAutumnLeaf(ctx, p);
        }
      }

      // ------------------------------------------
      // 4. PRE-WINTER (Amethyst Violet & Frost Bronze)
      // ------------------------------------------
      else if (season === "pre-winter") {
        for (const p of particles) {
          p.extra.sway += p.extra.swaySpeed;
          const swayX = Math.sin(p.extra.sway) * 1.0;

          p.y += p.vy;
          p.x += p.vx + swayX;
          p.rotation += p.rotSpeed;

          if (mActive) {
            const dx = p.x - mX;
            const dy = p.y - mY;
            const dist = Math.hypot(dx, dy);
            if (dist < 130) {
              p.x += (dx / dist) * 2.2;
              p.y += (dy / dist) * 1.2;
            }
          }

          if (p.y > height + 20) {
            p.y = -20;
            p.x = rand(0, width);
          }
          if (p.x < -30) p.x = width + 20;
          if (p.x > width + 30) p.x = -20;

          ctx.save();
          if (p.extra.isFrostLeaf) {
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.globalAlpha = p.alpha;

            // Bronze Leaf with Frost Contrast
            ctx.fillStyle = p.color;
            ctx.shadowColor = "rgba(124, 58, 237, 0.4)";
            ctx.shadowBlur = 6;
            ctx.beginPath();
            ctx.ellipse(0, 0, p.size * 0.55, p.size * 1.15, 0, 0, Math.PI * 2);
            ctx.fill();

            // Frost outer rim
            ctx.strokeStyle = "#C4B5FD";
            ctx.lineWidth = 1.8;
            ctx.stroke();

            // Center vein
            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(0, -p.size * 0.95);
            ctx.lineTo(0, p.size * 0.95);
            ctx.stroke();
          } else {
            // Twilight crystal
            ctx.translate(p.x, p.y);
            ctx.rotate(p.rotation);
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.shadowColor = "#7C3AED";
            ctx.shadowBlur = 6;

            ctx.beginPath();
            ctx.moveTo(0, -p.size * 1.5);
            ctx.lineTo(p.size * 0.5, 0);
            ctx.lineTo(0, p.size * 1.5);
            ctx.lineTo(-p.size * 0.5, 0);
            ctx.closePath();
            ctx.fill();
          }
          ctx.restore();
        }
      }

      // ------------------------------------------
      // 5. WINTER (Arctic Sapphire & Frost Stars)
      // ------------------------------------------
      else if (season === "winter") {
        for (const p of particles) {
          p.extra.sparklePhase += 0.045;
          p.x += p.vx;
          p.y += p.vy;
          p.rotation += p.rotSpeed;

          if (mActive) {
            const dx = p.x - mX;
            const dy = p.y - mY;
            const dist = Math.hypot(dx, dy);
            if (dist < 120) {
              p.x += mouseRef.current.vx * 1.6;
              p.y += mouseRef.current.vy * 1.6;
            }
          }

          if (p.x < -20) {
            p.x = width + 20;
            p.y = rand(0, height);
          }
          if (p.y > height + 20) {
            p.y = -10;
            p.x = rand(0, width);
          }

          ctx.save();
          ctx.globalAlpha = p.alpha * (0.7 + 0.3 * Math.sin(p.extra.sparklePhase));
          ctx.translate(p.x, p.y);
          ctx.rotate(p.rotation);

          if (p.extra.isCrystal) {
            // Sapphire diamond star
            ctx.fillStyle = p.color;
            ctx.shadowColor = "rgba(3, 105, 161, 0.5)";
            ctx.shadowBlur = 7;
            ctx.beginPath();
            ctx.moveTo(0, -p.size * 1.9);
            ctx.lineTo(p.size * 0.55, 0);
            ctx.lineTo(0, p.size * 1.9);
            ctx.lineTo(-p.size * 0.55, 0);
            ctx.closePath();
            ctx.fill();

            // Bright center node
            ctx.fillStyle = "#FFFFFF";
            ctx.beginPath();
            ctx.arc(0, 0, p.size * 0.3, 0, Math.PI * 2);
            ctx.fill();
          } else {
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(0, 0, p.size, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();
        }
      }

      // ------------------------------------------
      // 6. SNOW (HIGH-CONTRAST VISIBLE SNOWFLAKES)
      // ------------------------------------------
      else if (season === "snow") {
        for (const p of particles) {
          p.extra.sway += p.extra.swaySpeed;
          const swayX = Math.sin(p.extra.sway) * p.extra.swayAmp;

          p.y += p.vy;
          p.x += p.vx + swayX;
          p.rotation += p.rotSpeed;

          if (mActive) {
            const dx = p.x - mX;
            const dy = p.y - mY;
            const dist = Math.hypot(dx, dy);
            if (dist < 130) {
              const push = (130 - dist) / 130;
              p.x += (dx / dist) * push * 3.5;
              p.y += (dy / dist) * push * 1.8;
            }
          }

          if (p.y > height + 15) {
            p.y = -15;
            p.x = rand(0, width);
          }
          if (p.x < -20) p.x = width + 10;
          if (p.x > width + 20) p.x = -10;

          if (p.extra.isGeometricStar) {
            drawSnowflakeStar(ctx, p.x, p.y, p.size, p.alpha);
          } else {
            // High contrast 3D snowball: Ice-blue halo + pure white core
            ctx.save();
            ctx.translate(p.x, p.y);

            // Shaded ice perimeter
            const radGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size);
            radGrad.addColorStop(0, "#FFFFFF");
            radGrad.addColorStop(0.6, "rgba(224, 242, 254, 0.95)");
            radGrad.addColorStop(1, "rgba(37, 99, 235, 0.85)");

            ctx.fillStyle = radGrad;
            ctx.shadowColor = "rgba(37, 99, 235, 0.4)";
            ctx.shadowBlur = 5;
            ctx.beginPath();
            ctx.arc(0, 0, p.size, 0, Math.PI * 2);
            ctx.fill();

            // Outer delicate crisp rim
            ctx.strokeStyle = "rgba(37, 99, 235, 0.6)";
            ctx.lineWidth = 1;
            ctx.stroke();

            ctx.restore();
          }
        }
      }

      // ------------------------------------------
      // 7. SPRING (Vibrant Sakura Petals)
      // ------------------------------------------
      else if (season === "spring") {
        for (const p of particles) {
          if (p.extra.isPetal) {
            p.extra.flipX += p.extra.flipSpeedX;
            p.extra.sway += p.extra.swaySpeed;
            const swayX = Math.sin(p.extra.sway) * 1.3;

            p.x += p.vx + swayX;
            p.y += p.vy;
            p.rotation += p.rotSpeed;

            if (mActive) {
              const dx = p.x - mX;
              const dy = p.y - mY;
              const dist = Math.hypot(dx, dy);
              if (dist < 150) {
                const angle = Math.atan2(dy, dx) + Math.PI / 2;
                p.x += Math.cos(angle) * 3.5;
                p.y += Math.sin(angle) * 3.5 - 2;
              }
            }

            if (p.y > height + 20) {
              p.y = -20;
              p.x = rand(0, width);
            }
            if (p.x < -30) p.x = width + 20;
            if (p.x > width + 30) p.x = -20;

            drawSakuraPetal(ctx, p);
          } else {
            // Spring gold pollen
            p.y += rand(0.3, 0.6);
            p.x += Math.sin(time * 0.002 + p.size) * 0.45;
            if (p.y > height) p.y = -5;

            ctx.save();
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.globalAlpha = p.alpha;
            ctx.shadowColor = "#D97706";
            ctx.shadowBlur = 6;
            ctx.fill();
            ctx.restore();
          }
        }
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [season, intensity, interactive]);

  const sectionOrderText = sectionIndex !== undefined ? `Section ${sectionIndex + 1} of ${totalSections}` : "";

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-[2] ${className}`}
      aria-hidden="true"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* High-Contrast Interactive Season Info Badge (Top Right) */}
      {showBadge && (
        <div className="absolute top-4 right-4 z-20 pointer-events-auto">
          <div
            onClick={() => setBadgeExpanded((prev) => !prev)}
            className="group cursor-pointer flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-white/95 shadow-md border transition-all duration-300 hover:scale-105 active:scale-95"
            style={{ borderColor: meta.borderAccent }}
            title={`${meta.label} — Click to expand weather rule`}
          >
            <span
              className="w-2.5 h-2.5 rounded-full animate-ping"
              style={{ backgroundColor: meta.color }}
            />
            <IconComponent size={14} style={{ color: meta.color }} />
            
            <span className="text-[11px] font-black tracking-wide text-[#18191C] uppercase">
              {meta.label}
            </span>

            {isCurrentSeason && (
              <span className="text-[9px] font-black uppercase px-1.5 py-0.5 rounded-full bg-[var(--color-jv-orange)] text-white">
                Current Weather
              </span>
            )}

            {sectionOrderText && (
              <span className="text-[10px] font-bold text-[#64748B] pl-1.5 border-l border-[#CBD5E1]">
                {sectionOrderText}
              </span>
            )}

            {badgeExpanded && (
              <div className="text-[10px] text-[#475569] pl-2 font-medium border-l border-[#CBD5E1] flex items-center gap-1.5">
                <span>{meta.sublabel}</span>
                {locationLabel && (
                  <span className="inline-flex items-center gap-0.5 text-[var(--color-jv-orange)] font-bold">
                    <MapPin size={10} /> {locationLabel}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
