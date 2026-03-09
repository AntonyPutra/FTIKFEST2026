// TODO: Update harga, kuota, dan status tiap fase saat presale dibuka
const PROTIX_URL = "https://protix.id/ftikfest/";

const TICKETS = [
  {
    tier: "Early Bird",
    price: "Segera",
    quota: "Kuota Terbatas",
    status: "coming_soon",
    color: "#00F5D4",
    badge: "COMING SOON",
    features: ["Akses Area Festival", "Goodie Bag Eksklusif", "Harga Terbaik"],
  },
  {
    tier: "Presale 1",
    price: "Segera",
    quota: "Kuota Terbatas",
    status: "coming_soon",
    color: "#B388FF",
    badge: "COMING SOON",
    features: ["Akses Area Festival", "Goodie Bag Eksklusif"],
  },
  {
    tier: "Presale 2",
    price: "Segera",
    quota: "Kuota Terbatas",
    status: "coming_soon",
    color: "#00F5D4",
    badge: "COMING SOON",
    features: ["Akses Area Festival", "Stiker Eksklusif"],
    highlighted: true,
  },
  {
    tier: "Presale 3",
    price: "Segera",
    quota: "Kuota Terbatas",
    status: "coming_soon",
    color: "#B388FF",
    badge: "COMING SOON",
    features: ["Akses Area Festival"],
  },
  {
    tier: "Normal",
    price: "Segera",
    quota: "Unlimited",
    status: "coming_soon",
    color: "#E0F7FF",
    badge: "COMING SOON",
    features: ["Akses Area Festival"],
  },
];

const STATUS_CONFIG: Record<string, { label: string; color: string; bgColor: string }> = {
  available: { label: "Tersedia", color: "#00F5D4", bgColor: "rgba(0,245,212,0.1)" },
  limited: { label: "Hampir Habis", color: "#FF7A00", bgColor: "rgba(255,122,0,0.1)" },
  sold_out: { label: "Terjual Habis", color: "#666", bgColor: "rgba(100,100,100,0.1)" },
  coming_soon: { label: "Segera", color: "#B388FF", bgColor: "rgba(179,136,255,0.1)" },
};

export default function TicketSection() {
  return (
    <section id="tickets" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, #0B0F1A 0%, #0a0e18 40%, #0B0F1A 100%)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-5 -z-10"
        style={{
          background: "radial-gradient(circle, rgba(255,122,0,0.8) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-[#FF7A00] text-sm font-bold tracking-[0.4em] uppercase mb-3">
            Dapatkan Tiketmu
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Tiket <span className="text-[#FF7A00]">FTIK FEST 2026</span>
          </h2>
          <p className="text-[#E0F7FF]/60 max-w-lg mx-auto">
            Harga makin naik setiap fase. Jangan tunggu sampai kehabisan — amankan spotmu sekarang.
          </p>
        </div>

        {/* Urgency Banner */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 bg-[#FF7A00]/10 border border-[#FF7A00]/30 text-[#FF7A00] text-sm font-bold px-5 py-2.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
            Kuota Terbatas — Harga Naik di Fase Berikutnya
          </div>
        </div>

        {/* Ticket Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {TICKETS.map((ticket) => {
            const statusCfg = STATUS_CONFIG[ticket.status];
            const isAvailable = ticket.status === "available" || ticket.status === "limited";

            return (
              <div
                key={ticket.tier}
                className={`ticket-card relative rounded-2xl overflow-hidden flex flex-col ${
                  ticket.highlighted ? "ring-2 ring-[#00F5D4] ring-offset-2 ring-offset-[#0B0F1A]" : ""
                }`}
                style={{
                  background: `linear-gradient(145deg, rgba(${
                    ticket.color === "#00F5D4" ? "0,245,212" : ticket.color === "#B388FF" ? "179,136,255" : "224,247,255"
                  },0.05) 0%, rgba(11,15,26,0.9) 100%)`,
                  border: `1px solid ${ticket.color}25`,
                }}
              >
                {/* Top accent line */}
                <div className="h-0.5 w-full" style={{ background: ticket.color }} />

                {/* Badge */}
                {ticket.highlighted && (
                  <div className="absolute -top-0 right-4">
                    <div className="bg-[#FF7A00] text-[#0B0F1A] text-xs font-black px-3 py-1 rounded-b-lg tracking-wider">
                      POPULER
                    </div>
                  </div>
                )}

                <div className="flex flex-col flex-1 p-5">
                  <h3
                    className="text-lg font-black text-white mb-1"
                    style={{ fontFamily: "'Cinzel Decorative', serif" }}
                  >
                    {ticket.tier}
                  </h3>

                  {/* Price */}
                  <div className="text-2xl font-black mb-3" style={{ color: ticket.color }}>
                    {ticket.price}
                  </div>

                  {/* Quota */}
                  <div
                    className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mb-4 self-start"
                    style={{
                      color: statusCfg.color,
                      background: statusCfg.bgColor,
                      border: `1px solid ${statusCfg.color}40`,
                    }}
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        ticket.status === "available" ? "animate-pulse" : ""
                      }`}
                      style={{ background: statusCfg.color }}
                    />
                    {ticket.quota} — {statusCfg.label}
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 flex-1 mb-5">
                    {ticket.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-[#E0F7FF]/60">
                        <span style={{ color: ticket.color }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  {isAvailable ? (
                    <a
                      href={PROTIX_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 rounded-xl text-sm font-bold transition-all duration-300 text-center block hover:opacity-90 hover:scale-105"
                      style={{
                        background: ticket.highlighted ? "#00F5D4" : `${ticket.color}22`,
                        color: ticket.highlighted ? "#0B0F1A" : ticket.color,
                        border: ticket.highlighted ? "none" : `1px solid ${ticket.color}40`,
                        boxShadow: ticket.highlighted ? "0 0 20px rgba(0,245,212,0.3)" : "none",
                      }}
                    >
                      🎟️ Beli Tiket
                    </a>
                  ) : (
                    <div
                      className="w-full py-3 rounded-xl text-sm font-bold text-center opacity-40 cursor-not-allowed"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        color: "#888",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      {ticket.badge}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-10 space-y-2">
          <p className="text-[#E0F7FF]/40 text-sm">
            * Harga dan kuota dapat berubah sewaktu-waktu. Ikuti{" "}
            <a
              href="https://www.instagram.com/ftikfest"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00F5D4] hover:underline"
            >
              @ftikfest
            </a>{" "}
            untuk info terbaru.
          </p>
          <p className="text-[#E0F7FF]/30 text-xs">
            Tiket yang sudah dibeli tidak dapat dikembalikan (non-refundable).
          </p>
        </div>
      </div>
    </section>
  );
}
