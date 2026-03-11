"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { href: "#about", label: "Tentang" },
  { href: "#lineup", label: "Lineup" },
  { href: "#tickets", label: "Tiket" },
  { href: "#info", label: "Info Event" },
  { href: "#sponsors", label: "Sponsor" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0B0F1A]/95 backdrop-blur-xl border-b border-[#00F5D4]/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <Image
            src="/logo.png"
            alt="FTIK FEST 2026"
            width={48}
            height={48}
            className="object-contain group-hover:scale-110 transition-transform duration-300"
            style={{ filter: "drop-shadow(0 0 8px rgba(0,245,212,0.5))" }}
          />
          <span
            className="text-white font-bold text-xl sm:text-2xl tracking-wider hidden sm:block"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            FTIK<span className="text-[#00F5D4]">FEST</span>
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[#E0F7FF]/70 hover:text-[#00F5D4] text-base font-semibold tracking-wide transition-colors duration-200 hover:drop-shadow-[0_0_6px_rgba(0,245,212,0.7)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href="#tickets"
            className="hidden md:inline-flex items-center gap-2 bg-[#00F5D4] text-[#0B0F1A] font-bold text-base px-6 py-2.5 rounded-full hover:bg-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,245,212,0.6)]"
          >
            Get Tickets
          </a>
          <button
            className="md:hidden text-[#E0F7FF] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          menuOpen ? "max-h-96" : "max-h-0"
        } bg-[#0B0F1A]/98 backdrop-blur-xl border-t border-[#00F5D4]/10`}
      >
        <ul className="flex flex-col gap-0 px-4 pb-4 pt-2">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block py-4 text-[#E0F7FF]/80 hover:text-[#00F5D4] text-lg font-medium tracking-wide transition-colors border-b border-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-3">
            <a
              href="#tickets"
              className="block text-center bg-[#00F5D4] text-[#0B0F1A] text-lg font-bold py-3 mt-2 rounded-full"
              onClick={() => setMenuOpen(false)}
            >
              Get Tickets
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
