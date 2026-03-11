type ActivityId = "sgc" | "dekan-cup" | "talkshow" | "closing";

const ACTIVITY_INFO: Record<ActivityId, { items: any[]; map: any }> = {
  sgc: {
    items: [
      { icon: "📅", label: "Tanggal", value: "Segera Diumumkan", note: "TBA", color: "#00F5D4" },
      { icon: "🕐", label: "Waktu", value: "08.00 WIB - Selesai", note: "Datang tepat waktu", color: "#B388FF" },
      { icon: "📍", label: "Venue", value: "Universitas Semarang", note: "Kampus USM", color: "#FF7A00" },
      { icon: "🎓", label: "Peserta", value: "Siswa SMA/SMK", note: "Sederajat", color: "#00F5D4" },
    ],
    map: {
      name: "Universitas Semarang",
      desc: "Jl. Soekarno Hatta, Tlogosari Kulon",
      url: "https://maps.google.com/?q=Universitas+Semarang",
    },
  },
  "dekan-cup": {
    items: [
      { icon: "📅", label: "Tanggal", value: "Segera Diumumkan", note: "TBA", color: "#00F5D4" },
      { icon: "🏆", label: "Kategori", value: "Futsal, Basket, E-Sports", note: "Pendaftaran Dibuka", color: "#B388FF" },
      { icon: "📍", label: "Venue", value: "Gelora USM", note: "USM Sport Center", color: "#FF7A00" },
      { icon: "🎓", label: "Peserta", value: "Mahasiswa & SMA/SMK", note: "Umum", color: "#00F5D4" },
    ],
    map: {
      name: "Gelora USM",
      desc: "USM Sport Center, Semarang",
      url: "https://maps.google.com/?q=Gelanggang+Olahraga+(GELORA)+USM",
    },
  },
  talkshow: {
    items: [
      { icon: "📅", label: "Tanggal", value: "Segera Diumumkan", note: "TBA", color: "#00F5D4" },
      { icon: "🕐", label: "Waktu", value: "13.00 WIB - Selesai", note: "Registrasi ulang di tempat", color: "#B388FF" },
      { icon: "📍", label: "Venue", value: "Auditorium USM", note: "Gedung V Lantai 6", color: "#FF7A00" },
      { icon: "🎓", label: "Peserta", value: "Mahasiswa & Umum", note: "Terbuka bagi semua", color: "#00F5D4" },
    ],
    map: {
      name: "Auditorium USM",
      desc: "Gedung V Lantai 6, Kampus USM",
      url: "https://maps.google.com/?q=Universitas+Semarang",
    },
  },
  closing: {
    items: [
      { icon: "📅", label: "Tanggal", value: "27 Juni 2026", note: "Sabtu • Save the date!", color: "#00F5D4" },
      { icon: "🕐", label: "Buka Gerbang", value: "15.00 WIB", note: "Datang lebih awal", color: "#B388FF" },
      { icon: "📍", label: "Venue", value: "Awan Costa", note: "POJ City, Bibir Pantai, Semarang 50144", color: "#FF7A00" },
      { icon: "🎓", label: "Penonton", value: "Mahasiswa & Umum", note: "Semua kalangan welcome", color: "#00F5D4" },
      { icon: "🏙️", label: "Kota", value: "Semarang", note: "Jawa Tengah, Indonesia", color: "#B388FF" },
      { icon: "🚌", label: "Akses", value: "Area Pantai Marina", note: "Parkir tersedia di kawasan POJ City", color: "#FF7A00" },
    ],
    map: {
      name: "Awan Costa",
      desc: "Kawasan Bibir Pantai, POJ City",
      url: "https://maps.google.com/?q=Awan+Costa+POJ+City+Semarang",
    },
  },
};

export default function EventInfoSection({ activityId = "closing" }: { activityId?: ActivityId }) {
  const data = ACTIVITY_INFO[activityId];

  return (
    <div id="info" className="relative py-12 overflow-hidden w-full">
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
