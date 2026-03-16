"use client";
import { useEffect, useState } from "react";

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

function BigBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3">
      <div
        className="relative w-16 h-20 sm:w-32 sm:h-36 bg-white/5 border border-[#00F5D4]/20 rounded-xl sm:rounded-2xl flex items-center justify-center overflow-hidden"
        style={{ boxShadow: "0 0 30px rgba(0,245,212,0.1), inset 0 0 30px rgba(0,245,212,0.03)" }}
      >
        {/* Shimmer */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: "linear-gradient(135deg, transparent 40%, rgba(0,245,212,0.15) 50%, transparent 60%)",
          }}
        />
        <span
          className="relative text-3xl sm:text-6xl font-black tabular-nums text-glow-turquoise"
          style={{ color: "#00F5D4", fontFamily: "'Cinzel Decorative', serif" }}
        >
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="text-[#E0F7FF]/40 text-xs sm:text-sm tracking-[0.25em] uppercase font-bold">
        {label}
      </span>
    </div>
  );
}

export default function CountdownSection() {
  const timeLeft = useCountdown(eventDate);

  return (
    <section
      id="countdown"
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0B0F1A 0%, #060a12 50%, #0B0F1A 100%)",
      }}
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-15 -z-10"
        style={{
          background: "radial-gradient(ellipse, rgba(0,245,212,0.4) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      {/* Horizontal lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F5D4]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B388FF]/20 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Header */}
        <p className="text-[#00F5D4] text-sm font-bold tracking-[0.4em] uppercase mb-4">
          Bersiaplah
        </p>
        <h2
          className="text-3xl sm:text-6xl font-black text-white mb-4 flex flex-wrap justify-center gap-x-2"
          style={{ fontFamily: "'Cinzel Decorative', serif" }}
        >
          <span>The</span>
          <span className="gradient-text-turquoise">Countdown</span>
          <span>Begins</span>
        </h2>
        <p className="text-[#E0F7FF]/50 mb-14 max-w-sm mx-auto">
          Waktu terus berdetak. Jangan sampai kamu menyesal ketinggalan.
        </p>

        {/* Countdown blocks */}
        <div className="flex items-center justify-center gap-2 sm:gap-8">
          <BigBlock value={timeLeft.days} label="Hari" />
          <div className="text-[#00F5D4] text-2xl sm:text-5xl font-black mb-6 sm:mb-8 text-glow-turquoise">
            :
          </div>
          <BigBlock value={timeLeft.hours} label="Jam" />
          <div className="text-[#00F5D4] text-2xl sm:text-5xl font-black mb-6 sm:mb-8 text-glow-turquoise">
            :
          </div>
          <BigBlock value={timeLeft.minutes} label="Menit" />
          <div className="text-[#00F5D4] text-2xl sm:text-5xl font-black mb-6 sm:mb-8 text-glow-turquoise">
            :
          </div>
          <BigBlock value={timeLeft.seconds} label="Detik" />
        </div>

      </div>
    </section>
  );
}
