"use client";

// TODO: Ganti placeholder dengan nama tenant dan deskripsi F&B yang sudah konfirmasi
const FNB_TENANTS = [
  {
    name: "[ Tenant 1 ]",
    category: "Main Course",
    description: "Hidangan utama lezat untuk ngisi energi sebelum menikmati konser.",
    emoji: "🍱",
    color: "#FF7A00",
    tags: ["Rice Bowl", "Nasi Goreng"],
  },
  {
    name: "[ Tenant 2 ]",
    category: "Snack & Street Food",
    description: "Camilan dan street food kekinian yang cocok buat nemenin festival.",
    emoji: "🌮",
    color: "#00F5D4",
    tags: ["Snack", "Street Food"],
  },
  {
    name: "[ Tenant 3 ]",
    category: "Minuman & Beverage",
    description: "Minuman segar biar kamu tetap kuat sampai akhir show.",
    emoji: "🧃",
    color: "#B388FF",
    tags: ["Drinks", "Juice", "Boba"],
  },
  {
    name: "[ Tenant 4 ]",
    category: "Dessert & Sweet",
    description: "Penutup manis setelah menikmati semua penampilan seru.",
    emoji: "🍦",
    color: "#FF7A00",
    tags: ["Dessert", "Es Krim"],
  },
  {
    name: "[ Tenant 5 ]",
    category: "Coffee & Tea",
    description: "Kopi dan teh premium buat yang butuh caffeine boost di malam hari.",
    emoji: "☕",
    color: "#00F5D4",
    tags: ["Coffee", "Tea", "Matcha"],
  },
  {
    name: "[ Tenant 6 ]",
    category: "Healthy & Vegan",
    description: "Pilihan sehat buat kamu yang tetap jaga pola makan di festival.",
    emoji: "🥗",
    color: "#B388FF",
    tags: ["Healthy", "Vegan"],
  },
];

export default function FnBSection() {
  return (
    <section id="fnb" className="relative py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, #0B0F1A 0%, #0d1020 50%, #0B0F1A 100%)",
        }}
      />
      <div
        className="absolute left-1/2 top-20 -translate-x-1/2 w-[500px] h-[300px] rounded-full opacity-8 -z-10"
        style={{
          background: "radial-gradient(ellipse, rgba(255,122,0,0.25) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#FF7A00] text-sm font-bold tracking-[0.4em] uppercase mb-3">
            Food & Beverages
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            F&amp;B <span className="text-[#FF7A00]">Tenant</span>
          </h2>
          <p className="text-[#E0F7FF]/50 max-w-lg mx-auto">
            Festival nggak lengkap tanpa makanan enak. Nikmati berbagai pilihan kuliner
            pilihan yang siap temani kamu sepanjang malam.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        {/* Tenant Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FNB_TENANTS.map((tenant, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden card-glass transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              style={{
                border: `1px solid ${tenant.color}20`,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${tenant.color}50`;
                (e.currentTarget as HTMLElement).style.boxShadow = `0 0 30px ${tenant.color}15`;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${tenant.color}20`;
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              {/* Top accent */}
              <div className="h-0.5 w-full" style={{ background: `linear-gradient(to right, transparent, ${tenant.color}, transparent)` }} />

              <div className="p-6">
                {/* Emoji & Category */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl"
                    style={{ background: `${tenant.color}12` }}
                  >
                    {tenant.emoji}
                  </div>
                  <span
                    className="text-xs font-bold px-3 py-1.5 rounded-full"
                    style={{
                      color: tenant.color,
                      background: `${tenant.color}15`,
                      border: `1px solid ${tenant.color}30`,
                    }}
                  >
                    {tenant.category}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-white font-bold text-lg mb-2">{tenant.name}</h3>

                {/* Description */}
                <p className="text-[#E0F7FF]/50 text-sm leading-relaxed mb-4">
                  {tenant.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tenant.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full"
                      style={{
                        color: tenant.color,
                        background: `${tenant.color}10`,
                        border: `1px solid ${tenant.color}25`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <div
            className="inline-flex items-center gap-3 rounded-2xl px-6 py-4 card-glass border border-[#FF7A00]/20"
          >
            <span className="text-2xl">🍽️</span>
            <div className="text-left">
              <p className="text-white font-bold text-sm">Ingin buka tenant di FTIK FEST?</p>
              <p className="text-[#E0F7FF]/40 text-xs mt-0.5">
                Hubungi panitia untuk informasi booth F&B
              </p>
            </div>
            <a
              href="https://api.whatsapp.com/send/?phone=%2B6285806254318&text=&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 bg-[#FF7A00] text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-[#FF7A00]/80 transition-colors shrink-0"
            >
              Hubungi Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
