// TODO: Replace placeholder data with actual lineup when confirmed
const HEADLINER = {
  name: "[ HEADLINER ]",
  label: "Main Act",
  emoji: "⭐",
  description: "Akan segera diumumkan",
  color: "#FF7A00",
};

const SUPPORTING_ACTS = [
  { name: "[ Supporting 1 ]", label: "Supporting Act", emoji: "🎸" },
  { name: "[ Supporting 2 ]", label: "Supporting Act", emoji: "🎹" },
];

const LOCAL_ACTS = [
  { name: "[ Local 1 ]", label: "Local Act", emoji: "🎵" },
  { name: "[ Local 2 ]", label: "Local Act", emoji: "🥁" },
  { name: "[ Local 3 ]", label: "Local Act", emoji: "🎺" },
];

export default function LineupSection() {
  return (
    <section id="lineup" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, #0B0F1A 0%, #0e1020 50%, #0B0F1A 100%)",
        }}
      />
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 -z-10"
        style={{
          background: "radial-gradient(circle, rgba(0,245,212,0.5) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00F5D4] text-sm font-bold tracking-[0.4em] uppercase mb-3">
            The Sound of FTIK FEST
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            Who&apos;s Taking <span className="gradient-text-turquoise">the Stage</span>
          </h2>
          <p className="text-[#E0F7FF]/50 max-w-md mx-auto">
            Lineup resmi akan segera diungkap. Stay tuned di Instagram kami.
          </p>
          <div className="section-divider max-w-xs mx-auto mt-6" />
        </div>

        {/* Headliner */}
        <div className="mb-8">
          <div
            className="relative group rounded-3xl overflow-hidden border border-[#FF7A00]/20 transition-all duration-500 hover:border-[#FF7A00]/60 hover:shadow-[0_0_40px_rgba(255,122,0,0.2)]"
            style={{ background: "linear-gradient(135deg, rgba(255,122,0,0.05) 0%, rgba(11,15,26,1) 100%)" }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF7A00] to-transparent" />
            <div className="flex flex-col sm:flex-row items-center gap-6 p-8 sm:p-12">
              {/* Artist Photo Placeholder */}
              <div
                className="w-48 h-48 rounded-2xl flex items-center justify-center text-6xl shrink-0 border border-[#FF7A00]/20"
                style={{ background: "rgba(255,122,0,0.05)" }}
              >
                {HEADLINER.emoji}
              </div>
              <div className="text-center sm:text-left">
                <span className="inline-block bg-[#FF7A00] text-[#0B0F1A] text-xs font-black tracking-widest uppercase px-4 py-1.5 rounded-full mb-4">
                  {HEADLINER.label}
                </span>
                <h3
                  className="text-4xl sm:text-6xl font-black text-white mb-3"
                  style={{ fontFamily: "'Cinzel Decorative', serif" }}
                >
                  {HEADLINER.name}
                </h3>
                <p className="text-[#E0F7FF]/50 text-lg">{HEADLINER.description}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting Acts */}
        <p className="text-center text-[#E0F7FF]/40 text-xs tracking-[0.3em] uppercase mb-4">
          Supporting Acts
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          {SUPPORTING_ACTS.map((act) => (
            <div
              key={act.name}
              className="lineup-card relative group rounded-2xl overflow-hidden card-glass border border-[#B388FF]/15 hover:border-[#B388FF]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(179,136,255,0.15)]"
            >
              <div className="p-6 flex flex-col items-center text-center gap-3">
                <div
                  className="w-28 h-28 rounded-xl flex items-center justify-center text-4xl"
                  style={{ background: "rgba(179,136,255,0.07)" }}
                >
                  {act.emoji}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{act.name}</h4>
                  <span className="text-[#B388FF] text-xs font-bold tracking-wider uppercase">
                    {act.label}
                  </span>
                </div>
              </div>
              <div className="lineup-overlay absolute inset-0 bg-gradient-to-t from-[#B388FF]/10 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Local Acts */}
        <p className="text-center text-[#E0F7FF]/40 text-xs tracking-[0.3em] uppercase mb-4">
          Local Acts
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {LOCAL_ACTS.map((act) => (
            <div
              key={act.name}
              className="lineup-card group rounded-xl card-glass border border-white/8 hover:border-[#00F5D4]/30 transition-all duration-300 p-4 text-center"
            >
              <div className="text-3xl mb-2">{act.emoji}</div>
              <h5 className="text-white font-semibold text-sm">{act.name}</h5>
              <span className="text-[#00F5D4] text-xs font-bold tracking-wider uppercase">
                {act.label}
              </span>
            </div>
          ))}
        </div>

        {/* Instagram teaser */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/ftikfest"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/5 border border-white/10 hover:border-[#00F5D4]/40 text-[#E0F7FF] hover:text-[#00F5D4] px-6 py-3 rounded-full transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Ikuti @ftikfest untuk update lineup terbaru
          </a>
        </div>
      </div>
    </section>
  );
}
