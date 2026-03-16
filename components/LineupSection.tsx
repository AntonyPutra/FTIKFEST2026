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
      </div>
    </section>
  );
}
