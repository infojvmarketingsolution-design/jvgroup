"use client";

import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Sparkles, Radio } from "lucide-react";

export default function SpatialAudioController() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [spatialMode, setSpatialMode] = useState(true);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const pannerRef = useRef<StereoPannerNode | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Initialize Web Audio API spatial synth
  const toggleAudio = () => {
    if (!isPlaying) {
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioCtx();
        audioCtxRef.current = ctx;

        let panVal = -0.8;
        let panDirection = 0.05;

        // Stereo panner for 8D audio movement
        let panner: StereoPannerNode | null = null;
        if (ctx.createStereoPanner) {
          panner = ctx.createStereoPanner();
          panner.pan.value = 0;
          pannerRef.current = panner;
          panner.connect(ctx.destination);
        }

        // Play gentle periodic harmonic chimes that orbit left to right (8D spatial effect)
        const notes = [261.63, 329.63, 392.0, 523.25, 659.25]; // C major pentatonic
        let noteIndex = 0;

        intervalRef.current = setInterval(() => {
          if (!audioCtxRef.current) return;
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();

          osc.type = "sine";
          osc.frequency.setValueAtTime(notes[noteIndex % notes.length], ctx.currentTime);
          noteIndex++;

          // Spatial 8D panning sweep
          if (panner) {
            panVal += panDirection;
            if (panVal > 0.8) panDirection = -0.05;
            if (panVal < -0.8) panDirection = 0.05;
            panner.pan.setValueAtTime(panVal, ctx.currentTime);
            osc.connect(gain);
            gain.connect(panner);
          } else {
            osc.connect(gain);
            gain.connect(ctx.destination);
          }

          gain.gain.setValueAtTime(0.001, ctx.currentTime);
          gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 0.15);
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);

          osc.start(ctx.currentTime);
          osc.stop(ctx.currentTime + 1.8);
        }, 1200);

        setIsPlaying(true);
      } catch (err) {
        console.error("Audio Context Init error:", err);
      }
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
        audioCtxRef.current = null;
      }
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (audioCtxRef.current) {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <div className="group relative flex items-center bg-white/90 backdrop-blur-xl border border-[#2B2D31]/15 px-3.5 py-2.5 rounded-full shadow-[0_10px_30px_rgba(43,45,49,0.12)] hover:shadow-[0_15px_35px_rgba(243,99,35,0.2)] transition-all">
        {/* Equalizer Visualizer */}
        <div className="flex items-center gap-1 mr-2.5 h-4">
          <span
            className={`w-1 rounded-full bg-[var(--color-jv-orange)] transition-all ${
              isPlaying ? "animate-[audio-wave_0.8s_ease-in-out_infinite]" : "h-1.5"
            }`}
          />
          <span
            className={`w-1 rounded-full bg-[#2B2D31] transition-all ${
              isPlaying ? "animate-[audio-wave_1.1s_ease-in-out_infinite_0.2s]" : "h-2"
            }`}
          />
          <span
            className={`w-1 rounded-full bg-[var(--color-jv-orange)] transition-all ${
              isPlaying ? "animate-[audio-wave_0.9s_ease-in-out_infinite_0.4s]" : "h-1"
            }`}
          />
        </div>

        {/* Button */}
        <button
          onClick={toggleAudio}
          className="flex items-center gap-2 text-xs font-bold text-[#2B2D31] hover:text-[var(--color-jv-orange)] transition-colors"
          aria-label="Toggle 8D Ambient Sound"
        >
          {isPlaying ? (
            <Volume2 size={16} className="text-[var(--color-jv-orange)]" />
          ) : (
            <VolumeX size={16} className="text-[#64748B]" />
          )}
          <span className="hidden sm:inline">
            {isPlaying ? "8D Spatial Audio: ON" : "8D Spatial Audio"}
          </span>
        </button>

        {/* Hover Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-[#18191C] text-white text-[10px] font-semibold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl">
          <span className="text-[var(--color-jv-orange)]">8D Binaural Atmosphere</span> • Experience spatial audio immersion
        </div>
      </div>
    </div>
  );
}
