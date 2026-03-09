"use client";
import { useState, useEffect } from "react";

export default function StickyTicketCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero section
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`sticky-cta transition-all duration-500 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <a
        href="#tickets"
        className="flex items-center justify-center gap-3 bg-[#00F5D4] text-[#0B0F1A] font-black text-base py-4 rounded-2xl w-full hover:bg-white transition-colors duration-200"
        style={{ boxShadow: "0 0 20px rgba(0,245,212,0.4)" }}
      >
        🎟️ Get Tickets — Sekarang
      </a>
    </div>
  );
}
