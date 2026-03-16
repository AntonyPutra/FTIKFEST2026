import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0B0F1A] text-white">
      <Navbar />
      <div className="flex flex-col items-center justify-center pt-32 pb-24 px-4 text-center">
        <h1 className="text-8xl sm:text-9xl font-black gradient-text-turquoise-blue mb-4" style={{ fontFamily: "'Cinzel Decorative', serif" }}>
          404
        </h1>
        <h2 className="text-2xl sm:text-4xl font-black mb-6 uppercase tracking-widest">Halaman Tidak Ditemukan</h2>
        <p className="text-[#F5F5F7]/60 max-w-md mx-auto mb-10 text-sm sm:text-base">
          Sepertinya kamu tersesat di area festival. Jangan khawatir, kamu bisa kembali ke homepage untuk info FTIK FEST terbaru.
        </p>
        <Link
          href="/"
          className="bg-[#00F5D4] text-[#0B0F1A] font-black px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,212,0.5)] hover:scale-105"
        >
          Kembali ke Beranda
        </Link>
      </div>
      <Footer />
    </main>
  );
}
