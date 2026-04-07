// TODO: Replace sponsor/media partner grid placeholders with actual logos
const SPONSOR_TIERS = [
  {
    tier: "Gold Sponsor",
    color: "#FFD700",
    slots: 3,
  },
  {
    tier: "Silver Sponsor",
    color: "#C0C0C0",
    slots: 4,
  },
  {
    tier: "Bronze Sponsor",
    color: "#CD7F32",
    slots: 5,
  },
];

type ActivityId = "sgc" | "dekan-cup" | "HSC" | "glory-cup";

const MEDIA_PARTNERS = [
  { name: "FTP", logo: "/Logo Media Partner/Dekan Cup/FTP.png", events: ["dekan-cup"] },
  { name: "BEM FH", logo: "/Logo Media Partner/Dekan Cup/LOGO BEM FH.png", events: ["dekan-cup"] },
  { name: "Konco Event", logo: "/Logo Media Partner/Dekan Cup/LOGO KONCO EVENT.png", events: ["dekan-cup", "HSC", "glory-cup"] },
  { name: "Konser Raya", logo: "/Logo Media Partner/Dekan Cup/LOGO KONSER RAYA.png", events: ["dekan-cup", "HSC", "glory-cup"] },
  { name: "MusicMusik", logo: "/Logo Media Partner/Dekan Cup/LOGO MUSICMUSIK.png", events: ["dekan-cup", "HSC", "glory-cup"] },
  { name: "Noisenesia", logo: "/Logo Media Partner/Dekan Cup/LOGO NOISENESIA.png", events: ["dekan-cup", "HSC", "glory-cup"] },
  { name: "Ruang Event ID", logo: "/Logo Media Partner/Dekan Cup/LOGO RUANG EVENT ID (PUTIH).png", events: ["dekan-cup", "HSC", "glory-cup"] },
];

const SPONSOR_WA = "https://api.whatsapp.com/send/?phone=%2B6285806254318&text=&type=phone_number&app_absent=0";
const MEDIA_WA = "https://api.whatsapp.com/send/?phone=%2B6285801304384&text=&type=phone_number&app_absent=0";

import Image from "next/image";

export default function SponsorSection({ activityId = "glory-cup" }: { activityId?: ActivityId }) {
  const filteredPartners = MEDIA_PARTNERS.filter(p => p.events.includes(activityId));

  return (
    <section id="sponsors" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, #0B0F1A 0%, #0d1122 50%, #0B0F1A 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#B388FF] text-sm font-bold tracking-[0.4em] uppercase mb-3">
            Kolaborasi
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Sponsor &{" "}
            <span className="gradient-text-turquoise">Media Partner</span>
          </h2>
          <p className="text-[#E0F7FF]/50 max-w-lg mx-auto">
            Kolaborasi dengan FTIK FEST 2026 dan hubungkan brand kamu dengan ribuan anak
            muda paling aktif di Semarang.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        {/* Sponsors */}
        <div className="mb-14">
          <h3 className="text-center text-[#E0F7FF]/40 text-xs tracking-[0.3em] uppercase font-bold mb-8">
            Our Sponsors
          </h3>
          {SPONSOR_TIERS.map((tier) => (
            <div key={tier.tier} className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px flex-1" style={{ background: `${tier.color}30` }} />
                <span
                  className="text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full"
                  style={{
                    color: tier.color,
                    background: `${tier.color}15`,
                    border: `1px solid ${tier.color}30`,
                  }}
                >
                  {tier.tier}
                </span>
                <div className="h-px flex-1" style={{ background: `${tier.color}30` }} />
              </div>
              <div
                className="grid gap-3"
                style={{
                  gridTemplateColumns: `repeat(${tier.slots}, minmax(0, 1fr))`,
                }}
              >
                {Array.from({ length: tier.slots }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl border flex items-center justify-center aspect-video card-glass hover:border-white/20 transition-all duration-300"
                    style={{ borderColor: `${tier.color}20` }}
                  >
                    <span className="text-[#E0F7FF]/20 text-xs font-bold tracking-wider">
                      LOGO
                    </span>
                    {/* TODO: Replace with actual sponsor logo <Image> */}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Media Partners Section */}
        <div className="mt-20 pt-10 border-t border-white/5 mb-24">
          <div className="flex flex-col items-center gap-12">
            <span className="text-[10px] font-black text-[#E0F7FF]/30 uppercase tracking-[0.5em]">
              Media Partners
            </span>
            
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              {filteredPartners.length > 0 ? (
                filteredPartners.map((partner, i) => (
                  <div
                    key={i}
                    className="relative group w-32 sm:w-44 h-24 sm:h-28 rounded-2xl card-glass border border-white/5 flex items-center justify-center p-4 sm:p-6 overflow-hidden transition-all duration-500 hover:border-[#B388FF]/30 hover:shadow-[0_0_30px_rgba(179,136,255,0.1)]"
                  >
                    {/* Logo Image */}
                    <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} Logo`}
                        fill
                        className="object-contain"
                      />
                    </div>

                    {/* Name Overlay (Smooth Fade Gradient) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-4">
                      <p className="text-[10px] font-black text-white text-center leading-tight tracking-wider transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        {partner.name}
                      </p>
                    </div>
                  </div>
                ))
              ) : (
                // Placeholder slots for SGC or others without partners yet
                (() => {
                  const themeColor = {
                    "sgc": "#00F5D4",
                    "dekan-cup": "#B388FF",
                    "HSC": "#FF7A00",
                    "glory-cup": "#00F5D4"
                  }[activityId] || "#00F5D4";

                  return Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-32 sm:w-44 h-24 sm:h-28 rounded-2xl card-glass border flex items-center justify-center p-4 sm:p-6 transition-all duration-500"
                      style={{ 
                        borderColor: `${themeColor}20`,
                        boxShadow: `inset 0 0 20px ${themeColor}05`
                      }}
                    >
                      <span 
                        className="text-[10px] font-black tracking-widest opacity-20"
                        style={{ color: themeColor }}
                      >
                        LOGO
                      </span>
                    </div>
                  ));
                })()
              )}
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={SPONSOR_WA}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-[#00F5D4] text-[#0B0F1A] font-black px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,245,212,0.5)] hover:scale-105"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.557 4.14 1.532 5.878L.057 23.5l5.776-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.359-.213-3.432.9.918-3.349-.233-.372A9.818 9.818 0 1112 21.818z" />
            </svg>
            Jadi Sponsor
          </a>
          <a
            href={MEDIA_WA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 border-2 border-[#B388FF] text-[#B388FF] font-bold px-8 py-4 rounded-full hover:bg-[#B388FF]/10 transition-all duration-300 hover:shadow-[0_0_20px_rgba(179,136,255,0.3)]"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.135.557 4.14 1.532 5.878L.057 23.5l5.776-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.359-.213-3.432.9.918-3.349-.233-.372A9.818 9.818 0 1112 21.818z" />
            </svg>
            Media Partner 
          </a>
        </div>
      </div>
    </section>
  );
}
