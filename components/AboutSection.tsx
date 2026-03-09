export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, #0B0F1A 0%, #0d1225 50%, #0B0F1A 100%)",
        }}
      />
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full opacity-10 -z-10"
        style={{
          background: "radial-gradient(circle, rgba(179,136,255,0.6) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00F5D4] text-sm font-bold tracking-[0.4em] uppercase mb-3">
            Tentang Festival
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-6"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Kenapa <span className="gradient-text-turquoise">FTIK FEST</span>?
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-xl sm:text-2xl text-white font-light leading-relaxed">
              FTIK FEST adalah festival musik kampus yang memadukan{" "}
              <span className="text-[#00F5D4] font-bold">musik</span>,{" "}
              <span className="text-[#B388FF] font-bold">kreativitas</span>, dan{" "}
              <span className="text-[#FF7A00] font-bold">kultur anak muda</span> dalam satu
              malam yang nggak bakal terlupakan.
            </p>
            <p className="text-[#E0F7FF]/60 leading-relaxed">
              Dibangun oleh mahasiswa, untuk semua orang yang percaya bahwa musik punya
              kekuatan untuk menyatukan. Bukan sekadar konser — ini adalah perayaan.
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              {[
                { icon: "🎶", label: "Live Performance" },
                { icon: "🔥", label: "Festival Vibes" },
                { icon: "🎓", label: "By Students" },
                { icon: "🌆", label: "Semarang" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 text-sm text-[#E0F7FF]/80"
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: "5000+", label: "Kapasitas Penonton", color: "#00F5D4" },
              { number: "6", label: "Artis Tampil", color: "#B388FF" },
              { number: "1", label: "Malam Epik", color: "#FF7A00" },
              { number: "∞", label: "Kenangan", color: "#00F5D4" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="card-glass rounded-2xl p-6 text-center group hover:border-[#00F5D4]/30 transition-all duration-300"
              >
                <div
                  className="text-4xl font-black mb-2"
                  style={{
                    color: stat.color,
                    textShadow: `0 0 20px ${stat.color}80`,
                    fontFamily: "'Cinzel Decorative', serif",
                  }}
                >
                  {stat.number}
                </div>
                <div className="text-[#E0F7FF]/50 text-xs uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
