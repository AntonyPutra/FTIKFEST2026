type ActivityId = "sgc" | "dekan-cup" | "HSC" | "glory-cup";

const ACTIVITY_INFO: Record<ActivityId, { items: any[]; map: any }> = {
  sgc: {
    items: [
      { icon: "📅", label: "Tanggal", value: "Coming Soon", note: "Juni 2026", color: "#00F5D4" },
      { icon: "🕐", label: "Waktu", value: "TBA", note: "Stay tuned", color: "#B388FF" },
      { icon: "📍", label: "Venue", value: "Segera Diumumkan", note: "Semarang", color: "#FF7A00" },
      { icon: "🎓", label: "Peserta", value: "Siswa SMA/SMK", note: "Sederajat", color: "#00F5D4" },
    ],
    map: {
      name: "Lokasi Segera Hadir",
      desc: "Detail lokasi sedang dalam konfirmasi",
      url: "#",
    },
  },
  "dekan-cup": {
    items: [
      { icon: "📅", label: "Tanggal", value: "21 Mei 2026", note: "Turnamen Mobile Legend", color: "#00F5D4" },
      { icon: "🏆", label: "Kategori", value: "Mobile Legend", note: "Turnamen", color: "#B388FF" },
      { icon: "📍", label: "Venue", value: "Universitas Semarang", note: "Semarang", color: "#FF7A00" },
      { icon: "🎓", label: "Peserta", value: "Mahasiswa & SMA/SMK", note: "Umum", color: "#00F5D4" },
    ],
    map: {
      name: "Universitas Semarang",
      desc: "Semarang, Jawa Tengah",
      url: "https://maps.google.com/?q=Universitas+Semarang",
    },
  },
  HSC: {
    items: [
      { icon: "📅", label: "Tanggal", value: "Coming Soon", note: "Mei 2026", color: "#00F5D4" },
      { icon: "🕐", label: "Waktu", value: "TBA", note: "Stay tuned", color: "#B388FF" },
      { icon: "📍", label: "Venue", value: "Segera Diumumkan", note: "Semarang", color: "#FF7A00" },
      { icon: "🎓", label: "Peserta", value: "Siswa SMA/SMK/MA", note: "Se-Kota Semarang", color: "#00F5D4" },
    ],
    map: {
      name: "Auditorium Ir. Widjatmoko",
      desc: "Universitas Semarang, Jawa Tengah",
      url: "https://maps.google.com/?q=Auditorium+Ir.+Widjatmoko+USM",
    },
  },
  "glory-cup": {
    items: [
      { icon: "📅", label: "Tanggal", value: "Coming Soon", note: "Juni 2026", color: "#00F5D4" },
      { icon: "🕐", label: "Buka Gerbang", value: "TBA", note: "Datang lebih awal", color: "#B388FF" },
      { icon: "📍", label: "Venue", value: "Segera Diumumkan", note: "Semarang, Jawa Tengah", color: "#FF7A00" },
      { icon: "🎓", label: "Penonton", value: "Mahasiswa & Umum", note: "Semua kalangan welcome", color: "#00F5D4" },
      { icon: "🏙️", label: "Kota", value: "Semarang", note: "Jawa Tengah, Indonesia", color: "#B388FF" },
      { icon: "🚌", label: "Akses", value: "TBA", note: "Informasi akses segera hadir", color: "#FF7A00" },
    ],
    map: {
      name: "Lokasi Segera Hadir",
      desc: "Detail lokasi sedang dalam konfirmasi",
      url: "#",
    },
  },
};

export default function EventInfoSection({ activityId = "glory-cup" }: { activityId?: ActivityId }) {
  const data = ACTIVITY_INFO[activityId];

  return (
    <div id="info" className="relative py-12 overflow-hidden w-full px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#00F5D4] text-sm font-bold tracking-[0.4em] uppercase mb-3">
            Informasi Acara
          </p>
          <h2
            className="text-3xl sm:text-4xl font-black text-white mb-4"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Detail <span className="gradient-text-turquoise">Event</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.items.map((item: any, idx: number) => (
              <div
                key={idx}
                className="card-glass rounded-2xl p-6 group hover:border-[#00F5D4]/25 transition-all duration-300"
              >
                <div className="flex items-start gap-4 sm:gap-5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                    style={{ background: `${item.color}15` }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mb-1.5"
                      style={{ color: item.color }}
                    >
                      {item.label}
                    </p>
                    <p className="text-white font-bold text-sm sm:text-base leading-tight">{item.value}</p>
                    <p className="text-[#E0F7FF]/40 text-xs mt-1">{item.note}</p>
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
              <div className="text-center px-4">
                <p className="text-white font-bold text-xl mb-1">{data.map.name}</p>
                <p className="text-[#E0F7FF]/50 text-sm">
                  {data.map.desc}
                </p>
                {data.map.name === "Awan Costa" && (
                  <p className="text-[#E0F7FF]/40 text-xs mt-0.5">
                    Kota Semarang, Jawa Tengah 50144
                  </p>
                )}
              </div>
              <a
                href={data.map.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#00F5D4]/10 border border-[#00F5D4]/20 text-[#00F5D4] text-xs font-bold px-4 py-2 rounded-full hover:bg-[#00F5D4]/20 transition-colors mt-2"
              >
                📍 Buka di Google Maps →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
