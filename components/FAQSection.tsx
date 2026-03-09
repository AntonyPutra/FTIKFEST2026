"use client";
import { useState } from "react";

const FAQS = [
  {
    question: "Apakah event ini terbuka untuk umum?",
    answer:
      "Ya! FTIK FEST 2026 terbuka untuk semua kalangan — mahasiswa, pelajar, maupun masyarakat umum. Selama punya tiket, kamu welcome banget di sini.",
  },
  {
    question: "Bagaimana cara beli tiket?",
    answer:
      "Tiket bisa didapatkan melalui platform resmi kami. Ikuti akun Instagram @ftikfest untuk mendapatkan info link pembelian tiket setiap fase. Beli lebih awal = harga lebih murah!",
  },
  {
    question: "Barang apa saja yang dilarang dibawa?",
    answer:
      "Dilarang membawa senjata tajam, minuman keras, narkoba, atau barang berbahaya lainnya. Kamera profesional DSLR/mirrorless memerlukan izin khusus. Detail lengkap akan diumumkan mendekati hari-H.",
  },
  {
    question: "Jam berapa gate dibuka?",
    answer:
      "Jadwal pembukaan gate akan diumumkan mendekati hari pelaksanaan. Pantau terus Instagram @ftikfest agar kamu nggak ketinggalan update terbaru.",
  },
  {
    question: "Boleh bawa makanan atau minuman dari luar?",
    answer:
      "Makanan dan minuman dari luar umumnya tidak diperbolehkan masuk ke area festival. Tersedia berbagai pilihan food & beverage di dalam venue dengan harga yang reasonable.",
  },
  {
    question: "Ada kebijakan refund tiket?",
    answer:
      "Tiket yang sudah dibeli bersifat non-refundable. Namun, tiket dapat dipindahtangankan kepada orang lain. Informasi lebih lanjut tentang kebijakan ini akan disampaikan saat pembelian tiket.",
  },
  {
    question: "Di mana saya bisa mendapatkan update resmi?",
    answer:
      "Semua informasi resmi tersedia di Instagram @ftikfest. Jangan percaya info dari sumber tidak resmi. Untuk pertanyaan lebih lanjut, hubungi kami langsung via WhatsApp yang tertera di halaman ini.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, #0B0F1A 0%, #0c1018 50%, #0B0F1A 100%)",
        }}
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-8 -z-10"
        style={{
          background: "radial-gradient(circle, rgba(179,136,255,0.4) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#00F5D4] text-sm font-bold tracking-[0.4em] uppercase mb-3">
            Pertanyaan Umum
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            FAQ
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-4" />
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "border-[#00F5D4]/30 shadow-[0_0_20px_rgba(0,245,212,0.05)]"
                  : "border-white/8"
              } card-glass`}
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span
                  className={`text-sm sm:text-base font-semibold transition-colors duration-200 ${
                    openIndex === index ? "text-[#00F5D4]" : "text-[#E0F7FF]/80"
                  }`}
                >
                  {faq.question}
                </span>
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    openIndex === index
                      ? "bg-[#00F5D4] text-[#0B0F1A] rotate-45"
                      : "bg-white/5 text-[#E0F7FF]/40"
                  }`}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>
              <div
                className={`accordion-content ${openIndex === index ? "open" : ""}`}
              >
                <div className="px-6 pb-5">
                  <div className="h-px bg-gradient-to-r from-[#00F5D4]/20 to-transparent mb-4" />
                  <p className="text-[#E0F7FF]/60 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact prompt */}
        <div className="mt-10 text-center">
          <p className="text-[#E0F7FF]/40 text-sm mb-3">Masih ada pertanyaan?</p>
          <a
            href="https://www.instagram.com/ftikfest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#00F5D4] hover:text-white transition-colors font-semibold"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            DM kami di Instagram @ftikfest
          </a>
        </div>
      </div>
    </section>
  );
}
