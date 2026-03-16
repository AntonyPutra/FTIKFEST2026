"use client";

export default function GloryCupSection() {
  const cards = [
    { title: "Open Team", desc: "Terbuka untuk berbagai kategori tim futsal." },
    { title: "Mahasiswa", desc: "Ajang unjuk bakat antar mahasiswa." },
    { title: "Komunitas", desc: "Wadah kompetisi antar komunitas futsal." },
    { title: "Slot Tim Terbatas", desc: "Hanya untuk 32 tim tercepat." },
    { title: "Trophy Champion", desc: "Memperebutkan piala bergengsi Glory Cup." },
    { title: "Hadiah Menarik", desc: "Total hadiah jutaan rupiah menanti pemenang." },
  ];

  return (
    <section id="glory-cup" className="relative py-20 sm:py-24 bg-[#0B0F1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#00F5D4]/10 border border-[#00F5D4]/30 text-[#00F5D4] text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase px-5 py-2 rounded-full mb-6">
            Glory Cup
          </div>
          <h2
            className="text-3xl sm:text-6xl font-black text-white mb-6"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            FTIK FEST 2026 <span className="text-[#00F5D4]">GLORY CUP</span>
          </h2>
          <p className="text-[#F5F5F7]/70 max-w-2xl text-base sm:text-lg mb-8 px-2">
            Glory Cup adalah turnamen futsal bergengsi yang diadakan pada tanggal <span className="text-[#00F5D4] font-bold">6 - 7 Juni 2026</span> di <span className="text-[#B388FF] font-bold">Lapangan Manunggal</span>, mulai pukul <span className="text-[#FF7A00] font-bold">09:00 WIB</span>.
            Jadilah saksi pertemuan tim-tim terbaik yang akan bertanding memperebutkan gelar juara!
          </p>
          <div className="section-divider w-48 sm:w-64 mx-auto" />
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="card-glass p-6 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/5 hover:border-[#00F5D4]/30 transition-all duration-500 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#00F5D4]/10 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <span className="text-xl sm:text-2xl">🏆</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{card.title}</h3>
              <p className="text-[#F5F5F7]/60 leading-relaxed text-xs sm:text-sm">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Registration Area with Pamphlet & Barcode */}
        <div className="mt-20 sm:mt-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center border-t border-white/10 pt-16">
          {/* Left: Pamphlet Placeholder */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#00F5D4] to-[#2979FF] rounded-3xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative aspect-[3/4] sm:aspect-video rounded-2xl overflow-hidden bg-[#1A1F2E] border border-white/10 flex flex-col items-center justify-center text-center p-8">
              <div className="text-6xl mb-4">🖼️</div>
              <p className="text-white font-bold text-xl mb-2">PAMFLET EVENT</p>
              <p className="text-[#F5F5F7]/50 text-sm max-w-xs">
                (Ganti file ini di /public/pamphlet.png untuk menampilkan pamflet Anda)
              </p>
            </div>
            {/* Overlay label */}
            <div className="absolute top-4 left-4 bg-[#00F5D4] text-[#0B0F1A] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">
              Official Flyer
            </div>
          </div>

          {/* Right: Registration Link & Barcode */}
          <div className="flex flex-col gap-6">
            <div className="card-glass p-8 sm:p-10 rounded-3xl border border-[#00F5D4]/20 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 uppercase tracking-tighter">
                  Daftar <span className="text-[#00F5D4]">Sekarang</span>
                </h3>
                
                <div className="flex flex-col gap-6">
                  <div className="space-y-4 w-full">
                    <a
                      href="/glory-cup/register"
                      className="flex items-center justify-center gap-3 bg-[#00F5D4] text-[#0B0F1A] font-black py-4 rounded-xl hover:shadow-[0_0_30px_rgba(0,245,212,0.4)] transition-all w-full"
                    >
                      <span>Klik Link Pendaftaran Resmi</span>
                      <span className="text-lg">🔗</span>
                    </a>
                    <p className="text-[#F5F5F7]/30 text-[10px] text-center">
                      bit.ly/FTIKFEST2026-REG
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#00F5D4]/10 rounded-full blur-[50px] -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

