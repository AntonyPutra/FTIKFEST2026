const INSTAGRAM_URL = "https://www.instagram.com/ftikfest";
const SPONSOR_WA = "https://api.whatsapp.com/send/?phone=%2B6285806254318&text=&type=phone_number&app_absent=0";
const MEDIA_WA = "https://api.whatsapp.com/send/?phone=%2B6285801304384&text=&type=phone_number&app_absent=0";

const SOCIALS = [
  {
    label: "Instagram",
    handle: "@ftikfest",
    description: "Update lineup, tiket, dan behind-the-scene",
    href: INSTAGRAM_URL,
    color: "#E1306C",
    gradient: "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Sponsor Contact",
    handle: "WhatsApp Sponsorship",
    description: "Untuk inquiri sponsor dan partnership",
    href: SPONSOR_WA,
    color: "#25D366",
    gradient: "linear-gradient(135deg, #075E54, #128C7E, #25D366)",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.135.557 4.14 1.532 5.878L.057 23.5l5.776-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.359-.213-3.432.9.918-3.349-.233-.372A9.818 9.818 0 1112 21.818z" />
      </svg>
    ),
  },
  {
    label: "Media Partner",
    handle: "WhatsApp Media",
    description: "Untuk kolaborasi media partner",
    href: MEDIA_WA,
    color: "#25D366",
    gradient: "linear-gradient(135deg, #075E54, #128C7E, #25D366)",
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.135.557 4.14 1.532 5.878L.057 23.5l5.776-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.359-.213-3.432.9.918-3.349-.233-.372A9.818 9.818 0 1112 21.818z" />
      </svg>
    ),
  },
];

export default function SocialSection() {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, #0B0F1A 0%, #0c1018 50%, #0B0F1A 100%)",
        }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[#00F5D4] text-sm font-bold tracking-[0.4em] uppercase mb-3">
            Hubungi Kami
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Stay <span className="gradient-text-turquoise">Connected</span>
          </h2>
          <p className="text-[#E0F7FF]/50 max-w-md mx-auto">
            Jangan miss satu info pun tentang FTIK FEST 2026. Follow, cek, dan hubungi kami
            langsung.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-glass rounded-2xl p-6 flex flex-col items-center text-center gap-4 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110"
                style={{ background: social.gradient }}
              >
                {social.icon}
              </div>
              <div>
                <p className="text-white font-bold text-sm">{social.label}</p>
                <p style={{ color: social.color }} className="text-base font-black">
                  {social.handle}
                </p>
                <p className="text-[#E0F7FF]/40 text-xs mt-1">{social.description}</p>
              </div>
              <div
                className="flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full mt-auto transition-all duration-300 group-hover:opacity-100 opacity-60"
                style={{
                  color: social.color,
                  background: `${social.color}15`,
                  border: `1px solid ${social.color}30`,
                }}
              >
                Buka →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
