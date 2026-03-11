"use client";

import { useState } from "react";
import EventInfoSection from "./EventInfoSection";
import LineupSection from "./LineupSection";
import TicketSection from "./TicketSection";
import FnBSection from "./FnBSection";

export default function ActivitiesSection() {
  type ActivityId = "sgc" | "dekan-cup" | "talkshow" | "closing";

  const activities: Array<{
    id: ActivityId;
    title: string;
    subtitle: string;
    shortDesc: string;
    fullDesc: string;
    highlights: string[];
    icon: string;
    color: string;
  }> = [
    {
      id: "sgc",
      title: "SGC",
      subtitle: "(Student Goes to Campus)",
      shortDesc: "Kegiatan pengenalan dunia perkuliahan dan kampus.",
      fullDesc: "Student Goes to Campus (SGC) adalah program yang dirancang khusus untuk memperkenalkan siswa SMA/SMK sederajat pada serunya kehidupan kampus. Peserta akan diajak untuk tur keliling fakultas, merasakan suasana perkuliahan sungguhan, serta mendapatkan tips masuk perguruan tinggi dan sesi mentoring langsung dari dosen maupun mahasiswa inspiratif.",
      highlights: ["Campus Tour", "Simulasi Perkuliahan", "Mentoring & Sharing Session"],
      icon: "🏛️",
      color: "#00F5D4",
    },
    {
      id: "dekan-cup",
      title: "Dekan Cup",
      subtitle: "Ajang Kompetisi",
      shortDesc: "Ajang unjuk bakat dan sportivitas melalui 4 cabang perlombaan.",
      fullDesc: "Dekan Cup merupakan kompetisi bergengsi antar mahasiswa dan SMA/SMK yang terbagi dalam dua kategori utama: Akademik dan Non-Akademik. Pada kategori akademik, kamu bisa mengasah kreativitas lewat lomba Infografis dan kemampuan bercerita melalui Story Telling. Sementara itu di kategori non-akademik, tersedia kompetisi Futsal yang seru (terbatas 16 tim) dan kompetisi Band untuk unjuk aksi panggung musikalmu!",
      highlights: ["Kategori Akademik: Infografis & Story Telling", "Kategori Non-Akademik: Futsal (16 Teams) & Band", "Trophy, Sertifikat, & Uang Pembinaan"],
      icon: "🏆",
      color: "#B388FF",
    },
    {
      id: "talkshow",
      title: "Talkshow",
      subtitle: "Sesi Seminar",
      shortDesc: "Sesi interaktif dengan narasumber ternama Nasional.",
      fullDesc: "Talkshow nasional yang menghadirkan tokoh-tokoh muda inspiratif, entrepreneur sukses, dan public figure ternama. Acara ini mengangkat tema-tema yang relevan dengan tantangan Gen-Z masa kini: mulai dari personal branding, inovasi digital, peluang karir, hingga kesehatan mental. Sesi ini dikemas interaktif dengan diskusi dan Q&A santai.",
      highlights: ["Narasumber Skala Nasional", "Sesi Tanya Jawab Eksklusif", "Sertifikat & Doorprize Menarik"],
      icon: "🎤",
      color: "#FF7A00",
    },
    {
      id: "closing",
      title: "Closing Ceremony",
      subtitle: "Festival Puncak",
      shortDesc: "Puncak acara festival musik meriah sebagai penutup.",
      fullDesc: "Puncak kemeriahan rangkaian kegiatan FTIK FEST 2026! Di malam ini, kita akan merayakan awarding ceremony para pemenang Dekan Cup sekaligus hanyut dalam festival musik spektakuler. Menghadirkan deretan Guest Star papan atas nasional, DJ set epik, serta tenant F&B terbaik di Semarang. Bersiaplah untuk sing-along dan loncat bareng di malam yang tak terlupakan ini!",
      highlights: ["Penyerahan Hadiah & Awarding", "Konser Live Music Guest Star", "Spectacular Sound & Lighting Show"],
      icon: "🎉",
      color: "#00F5D4",
    },
  ];

  const [activeTab, setActiveTab] = useState(activities[0]);

  return (
    <section id="activities" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, #0B0F1A 0%, #0d1225 100%)",
        }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#00F5D4] text-sm font-bold tracking-[0.4em] uppercase mb-3">
            Rangkaian Acara
          </p>
          <h2
            className="text-4xl sm:text-5xl font-black text-white mb-6"
            style={{ fontFamily: "'Cinzel Decorative', serif" }}
          >
            4 <span className="gradient-text-turquoise">Kegiatan Utama</span>
          </h2>
          <div className="section-divider max-w-xs mx-auto" />
        </div>

        {/* 4 Cards Selector */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
          {activities.map((item) => {
            const isActive = activeTab.id === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item)}
                className={`text-left rounded-2xl p-4 sm:p-6 transition-all duration-300 relative overflow-hidden flex flex-col items-center text-center group ${
                  isActive
                    ? "bg-white/10 border-2"
                    : "card-glass hover:border-[#00F5D4]/30 border border-white/5"
                }`}
                style={{
                  borderColor: isActive ? item.color : undefined,
                  boxShadow: isActive ? `0 0 20px ${item.color}30` : "none",
                }}
              >
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6 shadow-lg shrink-0 transition-transform duration-300 ${
                    isActive ? "scale-110" : "group-hover:scale-110"
                  }`}
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                    boxShadow: `0 0 20px ${item.color}20`,
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  className={`text-lg sm:text-xl font-bold mb-1 transition-colors ${
                    isActive ? "text-white" : "text-white/80"
                  }`}
                  style={{ color: isActive ? item.color : "" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#E0F7FF]/70 text-[10px] sm:text-xs font-bold uppercase tracking-widest hidden sm:block">
                  {item.subtitle}
                </p>
              </button>
            );
          })}
        </div>

        {/* Content Details Area */}
        <div
          className="card-glass rounded-3xl p-6 sm:p-10 border border-white/10 relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
          }}
        >
          {/* Decorative Background Blur */}
          <div
            className="absolute -top-32 -right-32 w-64 h-64 rounded-full opacity-20 -z-10 transition-colors duration-500"
            style={{
              background: `radial-gradient(circle, ${activeTab.color} 0%, transparent 70%)`,
              filter: "blur(60px)",
            }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-5xl">{activeTab.icon}</span>
                  <h3 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "'Cinzel Decorative', serif", textShadow: `0 0 15px ${activeTab.color}50` }}>
                    {activeTab.title}
                  </h3>
                </div>
                <p
                  className="text-base sm:text-lg font-bold uppercase tracking-[0.2em] mb-4"
                  style={{ color: activeTab.color }}
                >
                  {activeTab.subtitle}
                </p>
                <p className="text-[#E0F7FF]/90 text-lg sm:text-xl leading-relaxed font-light">
                  {activeTab.fullDesc}
                </p>
              </div>
            </div>

            <div className="space-y-4 bg-black/20 rounded-2xl p-6 sm:p-8 border border-white/5">
              <h4 className="text-white text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2">
                <span style={{ color: activeTab.color }}>✨</span> Highlight Kegiatan:
              </h4>
              <ul className="space-y-4 text-left">
                {activeTab.highlights.map((highlight: string, idx: number) => (
                  <li key={idx} className="flex flex-row items-baseline gap-3">
                    <span className="mt-1" style={{ color: activeTab.color }}>✦</span>
                    <span className="text-[#E0F7FF]/90 text-base sm:text-lg">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Activity Sections based on Selected Tab */}
      <div className="mt-8 relative z-10 w-full animate-fade-in">
        <EventInfoSection activityId={activeTab.id} />
        {activeTab.id === "closing" && (
          <>
            <LineupSection />
            <FnBSection />
          </>
        )}
        {(activeTab.id === "dekan-cup" || activeTab.id === "closing") && (
          <TicketSection activityId={activeTab.id} />
        )}
      </div>
    </section>
  );
}
