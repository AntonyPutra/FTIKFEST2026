const INFO_ITEMS = [
  {
    icon: "📅",
    label: "Tanggal",
    value: "27 Juni 2026",
    note: "Sabtu • Save the date!",
    color: "#00F5D4",
  },
  {
    icon: "🕐",
    label: "Buka Gerbang",
    value: "15.00 WIB",
    note: "Datang lebih awal",
    color: "#B388FF",
  },
  {
    icon: "📍",
    label: "Venue",
    value: "Awan Costa",
    note: "POJ City, Bibir Pantai, Semarang 50144",
    color: "#FF7A00",
  },
  {
    icon: "🎓",
    label: "Penonton",
    value: "Mahasiswa & Umum",
    note: "Semua kalangan welcome",
    color: "#00F5D4",
  },
  {
    icon: "📍",
    label: "Kota",
    value: "Semarang",
    note: "Jawa Tengah, Indonesia",
    color: "#B388FF",
  },
  {
    icon: "🚌",
    label: "Akses",
    value: "Area Pantai Marina",
    note: "Parkir tersedia di kawasan POJ City",
    color: "#FF7A00",
  },
];

export default function EventInfoSection() {
  return (
    <section id="info" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, #0B0F1A 0%, #0c1020 50%, #0B0F1A 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#00F5D4] text-sm font-bold tracking-[0.4em] uppercase mb-3">
            Informasi Acara
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Detail <span className="gradient-text-turquoise">Event</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {INFO_ITEMS.map((item) => (
              <div
                key={item.label}
                className="card-glass rounded-2xl p-5 group hover:border-[#00F5D4]/25 transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ background: `${item.color}15` }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-widest mb-1"
                      style={{ color: item.color }}
                    >
                      {item.label}
                    </p>
                    <p className="text-white font-bold text-sm">{item.value}</p>
                    <p className="text-[#E0F7FF]/40 text-xs mt-0.5">{item.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div
              className="w-full h-80 rounded-3xl overflow-hidden border border-[#00F5D4]/15 flex flex-col items-center justify-center gap-4"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,245,212,0.04) 0%, rgba(11,15,26,0.9) 100%)",
              }}
            >
              <div className="text-5xl">🗺️</div>
              <div className="text-center">
                <p className="text-white font-bold text-xl mb-1">Awan Costa</p>
                <p className="text-[#E0F7FF]/50 text-sm">
                  Kawasan Bibir Pantai, POJ City
                </p>
                <p className="text-[#E0F7FF]/40 text-xs mt-0.5">
                  Kota Semarang, Jawa Tengah 50144
                </p>
              </div>
              <a
                href="https://maps.google.com/?q=Awan+Costa+POJ+City+Semarang"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#00F5D4]/10 border border-[#00F5D4]/20 text-[#00F5D4] text-xs font-bold px-4 py-2 rounded-full hover:bg-[#00F5D4]/20 transition-colors"
              >
                📍 Buka di Google Maps →
              </a>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}
