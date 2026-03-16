"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    teamName: "",
    captainName: "",
    email: "",
    phone: "",
    category: "Mahasiswa",
    institution: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white">
      <Navbar />
      
      <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-6xl font-black mb-4 gradient-text-turquoise-blue"
                style={{ fontFamily: "'Cinzel Decorative', serif" }}>
              GLORY CUP <span className="text-white">REGISTRATION</span>
            </h1>
            <p className="text-[#F5F5F7]/60 max-w-xl mx-auto text-sm sm:text-base">
              Daftarkan tim futsal terbaik Anda dan raih kesempatan menjadi juara di kompetisi paling bergengsi tahun ini.
            </p>
          </div>

          {/* Form Container */}
          <div className="card-glass border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-12 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#00F5D4]/10 rounded-full blur-[80px] -z-10" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-[#2979FF]/10 rounded-full blur-[80px] -z-10" />

            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                  {/* Team Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#00F5D4]">
                      Nama Tim
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-[#00F5D4]/50 transition-colors"
                      placeholder="Masukkan nama tim"
                      value={formData.teamName}
                      onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                    />
                  </div>

                  {/* Captain Name */}
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#00F5D4]">
                      Nama Kapten
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-[#00F5D4]/50 transition-colors"
                      placeholder="Nama lengkap kapten"
                      value={formData.captainName}
                      onChange={(e) => setFormData({ ...formData, captainName: e.target.value })}
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#00F5D4]">
                      Email
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-[#00F5D4]/50 transition-colors"
                      placeholder="alamat@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#00F5D4]">
                      Nomor WhatsApp
                    </label>
                    <input
                      required
                      type="tel"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-[#00F5D4]/50 transition-colors"
                      placeholder="081234567890"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  {/* Category */}
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#00F5D4]">
                      Kategori
                    </label>
                    <select
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-[#00F5D4]/50 transition-colors appearance-none"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option className="bg-[#0B0F1A]" value="Mahasiswa">Mahasiswa</option>
                      <option className="bg-[#0B0F1A]" value="Pelajar (SMA/SMK)">Pelajar (SMA/SMK)</option>
                      <option className="bg-[#0B0F1A]" value="Open Category">Umum / Open</option>
                    </select>
                  </div>

                  {/* Institution */}
                  <div className="space-y-2">
                    <label className="text-[10px] sm:text-xs font-bold tracking-widest uppercase text-[#00F5D4]">
                      Instansi / Universitas
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 sm:py-4 text-sm sm:text-base focus:outline-none focus:border-[#00F5D4]/50 transition-colors"
                      placeholder="Nama sekolah atau kampus"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-[#00F5D4] text-[#0B0F1A] font-black py-4 sm:py-5 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,212,0.5)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed group flex items-center justify-center gap-3 text-sm sm:text-base"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#0B0F1A]/20 border-t-[#0B0F1A] rounded-full animate-spin" />
                      Memproses...
                    </>
                  ) : (
                    "Daftar Sekarang"
                  )}
                </button>

                <p className="text-center text-[#F5F5F7]/30 text-[10px] sm:text-xs">
                  Pastikan data yang Anda masukkan sudah benar sebelum mengirim.
                </p>
              </form>
            ) : (
              <div className="text-center py-10 sm:py-12">
                <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#00F5D4]/20 text-[#00F5D4] rounded-full flex items-center justify-center mx-auto mb-6 sm:mb-8 text-4xl sm:text-5xl">
                  ✓
                </div>
                <h2 className="text-2xl sm:text-3xl font-black mb-4 uppercase">Pendaftaran Berhasil!</h2>
                <p className="text-[#F5F5F7]/60 mb-8 max-w-md mx-auto text-sm sm:text-base px-4">
                  Terima kasih telah mendaftar Glory Cup. Panitia akan menghubungi Anda melalui WhatsApp untuk proses verifikasi data dan pembayaran.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  className="text-[#00F5D4] font-bold hover:underline text-sm sm:text-base"
                >
                  Daftar tim lainnya
                </button>
              </div>
            )}
          </div>
        </div>
      </div>


      <Footer />
    </main>
  );
}
