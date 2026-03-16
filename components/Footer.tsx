import Image from "next/image";

const INSTAGRAM_URL = "https://www.instagram.com/ftikfest";
const SPONSOR_WA = "https://api.whatsapp.com/send/?phone=%2B6285806254318&text=&type=phone_number&app_absent=0";
const MEDIA_WA = "https://api.whatsapp.com/send/?phone=%2B6285801304384&text=&type=phone_number&app_absent=0";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/8">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, #0B0F1A 0%, #060a10 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <Image
                src="/logo.png"
                alt="FTIK FEST 2026"
                width={56}
                height={56}
                className="object-contain"
                style={{ filter: "drop-shadow(0 0 12px rgba(0,245,212,0.4))" }}
              />
              <div>
                <div
                  className="text-2xl sm:text-3xl font-black text-white leading-none"
                  style={{ fontFamily: "'Cinzel Decorative', serif" }}
                >
                  FTIK FEST <span className="text-[#00F5D4]">2026</span>
                </div>
                <div className="text-[#00F5D4] text-[10px] sm:text-xs tracking-[0.4em] font-black uppercase mt-2">
                  Rise of the Champions
                </div>
              </div>
            </div>
            <p className="text-[#E0F7FF]/50 text-sm sm:text-base leading-relaxed max-w-sm mb-4">
              Explore. Compete. Conquer. — Where Great Minds Meet and Champions Rise.
            </p>
            <p className="text-[#E0F7FF]/30 text-xs font-medium">
              Diselenggarakan oleh <span className="text-[#E0F7FF]/60">BEM FTIK • Semarang</span>
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-black text-xs mb-6 tracking-[0.2em] uppercase opacity-50">
              Navigasi
            </h4>
            <ul className="space-y-4">
              {[
                { href: "#about", label: "Tentang" },
                { href: "#activities", label: "Acara" },
                { href: "#info", label: "Info Event" },
                { href: "#faq", label: "FAQ" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#E0F7FF]/60 hover:text-[#00F5D4] text-sm font-medium transition-all duration-200 hover:translate-x-1 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm mb-4 tracking-wider uppercase">
              Kontak
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E0F7FF]/50 hover:text-[#E1306C] text-sm transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram @ftikfest
                </a>
              </li>
              <li>
                <a
                  href={SPONSOR_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E0F7FF]/50 hover:text-[#25D366] text-sm transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.135.557 4.14 1.532 5.878L.057 23.5l5.776-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.359-.213-3.432.9.918-3.349-.233-.372A9.818 9.818 0 1112 21.818z" />
                  </svg>
                  Sponsorship
                </a>
              </li>
              <li>
                <a
                  href={MEDIA_WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#E0F7FF]/50 hover:text-[#25D366] text-sm transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.135.557 4.14 1.532 5.878L.057 23.5l5.776-1.516A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.372l-.359-.213-3.432.9.918-3.349-.233-.372A9.818 9.818 0 1112 21.818z" />
                  </svg>
                  Media Partner
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#E0F7FF]/25 text-xs text-center">
            © {year} FTIK FEST 2026. All rights reserved.
          </p>
          <p className="text-[#E0F7FF]/20 text-xs">
            Made with ❤️ by BEM FTIK {/* TODO: Replace with actual organizer */}
          </p>
        </div>
      </div>
    </footer>
  );
}
