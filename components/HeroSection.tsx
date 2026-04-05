"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const update = () => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;
      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

const eventDate = new Date("2026-06-06T09:00:00+07:00"); // Tanggal event: 6 Juni 2026

function CountdownBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/5 border border-[#00F5D4]/30 rounded-xl flex items-center justify-center animate-countdown-pulse">
          <span
            className="text-2xl sm:text-3xl font-black text-[#00F5D4] tabular-nums text-glow-turquoise"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            {String(value).padStart(2, "0")}
          </span>
        </div>
      </div>
      <span className="text-xs text-[#E0F7FF]/50 mt-2 tracking-[0.2em] uppercase font-medium">{label}</span>
    </div>
  );
}

export default function HeroSection() {
  const timeLeft = useCountdown(eventDate);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden hero-particles"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(0,245,212,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, rgba(179,136,255,0.1) 0%, transparent 50%), #0B0F1A",
      }}
    >
      {/* Animated background glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 animate-float"
        style={{
          background: "radial-gradient(circle, rgba(0,245,212,0.4) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-15 animate-float"
        style={{
          background: "radial-gradient(circle, rgba(179,136,255,0.5) 0%, transparent 70%)",
          filter: "blur(50px)",
          animationDelay: "2s",
        }}
      />
      <div
        className="absolute top-2/3 left-1/2 w-64 h-64 rounded-full opacity-10 animate-pulse-glow"
        style={{
          background: "radial-gradient(circle, rgba(255,122,0,0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Spotlight lines */}
      <div
        className="absolute top-0 left-1/4 w-px h-full opacity-20"
        style={{
          background: "linear-gradient(to bottom, rgba(0,245,212,0.0), rgba(0,245,212,0.6) 40%, rgba(0,245,212,0.0))",
        }}
      />
      <div
        className="absolute top-0 right-1/3 w-px h-full opacity-10"
        style={{
          background: "linear-gradient(to bottom, rgba(179,136,255,0.0), rgba(179,136,255,0.5) 50%, rgba(179,136,255,0.0))",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-16 sm:py-24 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex max-w-full items-center gap-2 bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase px-4 sm:px-5 py-2 rounded-full mb-6 sm:mb-8 animate-fade-in-up whitespace-nowrap overflow-hidden text-ellipsis">
          <span className="w-2 h-2 rounded-full bg-[#00F5D4] shrink-0 animate-pulse" />
          <span className="truncate">Rise of the Champions</span>
        </div>

        {/* ... (Logo section remains the same) ... */}

        {/* Campus Festival Tag */}
        <div
          className="text-[#00F5D4] text-[10px] sm:text-sm font-black tracking-[0.3em] sm:tracking-[0.8em] uppercase mb-4 animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          Rise of the Champions
        </div>

        {/* Main Headline */}
        <h1
          className="text-3xl sm:text-7xl md:text-9xl font-black tracking-tight text-white mb-6 animate-fade-in-up flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-8"
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            animationDelay: "0.25s",
            textShadow: "0 0 40px rgba(0,245,212,0.3), 0 0 80px rgba(179,136,255,0.15)",
          }}
        >
          <span className="flex items-center gap-2 sm:gap-4">
            <span>FTIK</span>
            <span className="gradient-text-turquoise">FEST</span>
          </span>
          <span className="text-[#00F5D4] drop-shadow-[0_0_20px_rgba(0,245,212,0.4)]">2026</span>
        </h1>

        {/* Subheadline */}
        <div
          className="text-sm sm:text-xl md:text-2xl text-[#E0F7FF]/80 max-w-4xl mb-6 leading-relaxed animate-fade-in-up font-medium px-2"
          style={{ animationDelay: "0.35s" }}
        >
          <div className="flex flex-wrap justify-center items-center gap-x-2 sm:gap-x-3 gap-y-1 sm:gap-y-2">
            <span className="w-full sm:w-auto flex justify-center gap-2">
              <span className="text-[#00F5D4] text-glow-turquoise font-black uppercase tracking-wider">Explore.</span>{" "}
              <span className="text-[#B388FF] text-glow-lavender font-black uppercase tracking-wider">Compete.</span>{" "}
              <span className="text-[#FF7A00] text-glow-orange font-black uppercase tracking-wider">Conquer.</span>
            </span>
            <span className="hidden sm:inline text-white/20 px-2">—</span>
            <span className="w-full sm:w-auto">Where Great Minds Meet and <span className="gradient-text-turquoise font-black uppercase tracking-widest text-glow-turquoise block sm:inline">Champions Rise</span></span>
          </div>
        </div>


        {/* Countdown */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="text-[#E0F7FF]/30 text-xs tracking-[0.3em] uppercase mb-4">
            Hitung Mundur Acara
          </p>
          <div className="flex justify-center items-center gap-2 sm:gap-6">
            <CountdownBlock value={timeLeft.days} label="Hari" />
            <span className="text-[#00F5D4] text-xl sm:text-2xl font-bold mb-4">:</span>
            <CountdownBlock value={timeLeft.hours} label="Jam" />
            <span className="text-[#00F5D4] text-xl sm:text-2xl font-bold mb-4">:</span>
            <CountdownBlock value={timeLeft.minutes} label="Menit" />
            <span className="text-[#00F5D4] text-xl sm:text-2xl font-bold mb-4">:</span>
            <CountdownBlock value={timeLeft.seconds} label="Detik" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 sm:gap-2 opacity-30 sm:opacity-40">
        <span className="text-[10px] sm:text-xs text-[#E0F7FF] tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-[#00F5D4] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
