type ActivityId = "sgc" | "dekan-cup" | "talkshow" | "glory-cup";

// TODO: Update harga, kuota, dan status tiap fase saat presale dibuka
const PROTIX_URL = "https://protix.id/ftikfest/";

const TICKETS_DATA: Record<string, any> = {
  "glory-cup": {
    title: "Tiket FTIK FEST 2026",
    subtitle: "Dapatkan Tiketmu",
    description: "Harga makin naik setiap fase. Jangan tunggu sampai kehabisan — amankan spotmu sekarang.",
    items: [
      { tier: "Early Bird", price: "Segera", quota: "Kuota Terbatas", status: "coming_soon", color: "#00F5D4", badge: "COMING SOON", features: ["Akses Area Festival", "Goodie Bag Eksklusif", "Harga Terbaik"] },
      { tier: "Presale 1", price: "Segera", quota: "Kuota Terbatas", status: "coming_soon", color: "#B388FF", badge: "COMING SOON", features: ["Akses Area Festival", "Goodie Bag Eksklusif"] },
      { tier: "Presale 2", price: "Segera", quota: "Kuota Terbatas", status: "coming_soon", color: "#00F5D4", badge: "COMING SOON", features: ["Akses Area Festival", "Stiker Eksklusif"], highlighted: true },
      { tier: "Presale 3", price: "Segera", quota: "Kuota Terbatas", status: "coming_soon", color: "#B388FF", badge: "COMING SOON", features: ["Akses Area Festival"] },
      { tier: "Normal", price: "Segera", quota: "Unlimited", status: "coming_soon", color: "#E0F7FF", badge: "COMING SOON", features: ["Akses Area Festival"] },
    ]
  }
};

const STATUS_CONFIG: Record<string, { label: string; color: string; bgColor: string }> = {
  available: { label: "Tersedia", color: "#00F5D4", bgColor: "rgba(0,245,212,0.1)" },
  limited: { label: "Hampir Habis", color: "#FF7A00", bgColor: "rgba(255,122,0,0.1)" },
  sold_out: { label: "Terjual Habis", color: "#666", bgColor: "rgba(100,100,100,0.1)" },
  coming_soon: { label: "Segera", color: "#B388FF", bgColor: "rgba(179,136,255,0.1)" },
};

export default function TicketSection({ activityId = "glory-cup" }: { activityId?: ActivityId }) {
  if (activityId !== "glory-cup") {
    return null; // Don't show tickets for other events
  }

  const data = TICKETS_DATA[activityId];

  return (
    <div id="tickets" className="relative py-12 overflow-hidden w-full">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-4">
          <p className="text-[#FF7A00] text-sm font-bold tracking-[0.4em] uppercase mb-3">
            {data.subtitle}
          </p>
          <h2
            className="text-3xl sm:text-4xl font-black text-white mb-4"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            {data.title}
          </h2>
          <p className="text-[#E0F7FF]/60 max-w-lg mx-auto">
            {data.description}
          </p>
        </div>

        {/* Urgency Banner */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <div className="flex items-center gap-2 bg-[#FF7A00]/10 border border-[#FF7A00]/30 text-[#FF7A00] text-sm font-bold px-5 py-2.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
            Kuota Terbatas — Pastikan kamu cepat amankan spot!
          </div>
        </div>

        {/* Ticket Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${data.items.length === 4 ? 4 : 5} gap-4`}>
          {data.items.map((ticket: any) => {
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
                    {ticket.features.map((f: string) => (
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
                      COMING SOON
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
