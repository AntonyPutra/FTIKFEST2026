"use client";

import { useState } from "react";
import Image from "next/image";
import EventInfoSection from "./EventInfoSection";
import FnBSection from "./FnBSection";

export default function ActivitiesSection() {
  type ActivityId = "sgc" | "dekan-cup" | "talkshow" | "glory-cup";

  interface Competition {
    name: string;
    pamphlet: string;
    barcode: string;
    link: string;
  }

  const activities: Array<{
    id: ActivityId;
    title: string;
    subtitle: string;
    shortDesc: string;
    fullDesc: string;
    highlights: string[];
    icon: string;
    color: string;
    pamphlet: string;
    barcode: string;
    link: string;
    links?: Array<{ label: string; url: string }>;
    competitions?: Competition[];
  }> = [
    {
      id: "sgc",
      title: "SGC",
      subtitle: "(Student Goes to Campus)",
      shortDesc: "Informasi kegiatan akan segera hadir.",
      fullDesc: "Detail kegiatan Student Goes to Campus (SGC) sedang dalam tahap persiapan. Kami akan segera memperbarui informasi mengenai jadwal, pendaftaran, dan rangkaian acara menarik lainnya. Pantau terus update terbaru kami!",
      highlights: ["Coming Soon", "Informasi Segera Hadir", "Stay Tuned"],
      icon: "🏛️",
      color: "#00F5D4",
      pamphlet: "", 
      barcode: "", 
      link: "#", 
    },
    {
      id: "dekan-cup",
      title: "Dekan Cup",
      subtitle: "Ajang Kompetisi",
      shortDesc: "Informasi perlombaan akan segera hadir.",
      fullDesc: "Persiapan untuk Dekan Cup sebagai ajang kompetisi bergengsi FTIK FEST 2026 sedang berlangsung. Informasi mengenai kategori lomba, syarat pendaftaran, dan teknis perlombaan akan segera kami informasikan melalui platform resmi kami.",
      highlights: ["Coming Soon", "Informasi Segera Hadir", "Stay Tuned"],
      icon: "🏆",
      color: "#B388FF",
      pamphlet: "", 
      barcode: "", 
      link: "#",
    },
    {
      id: "talkshow",
      title: "Talkshow",
      subtitle: "Sesi Seminar",
      shortDesc: "Informasi sesi talkshow akan segera hadir.",
      fullDesc: "Informasi detail mengenai Talkshow FTIK FEST 2026, termasuk narasumber nasional dan tema diskusi, sedang dalam penyusunan. Kami akan segera merilis detail lengkapnya untuk kamu. Jangan sampai ketinggalan!",
      highlights: ["Coming Soon", "Update Segera Hadir", "Stay Tuned"],
      icon: "🎤",
      color: "#FF7A00",
      pamphlet: "", 
      barcode: "", 
      link: "#", 
    },
    {
      id: "glory-cup",
      title: "Glory Cup",
      subtitle: "Turnamen Futsal",
      shortDesc: "Informasi turnamen puncak akan segera hadir.",
      fullDesc: "Persiapan untuk Glory Cup sebagai puncak acara FTIK FEST 2026 sedang berlangsung. Informasi mengenai pendaftaran tim, kualifikasi, dan hadiah menarik akan segera kami informasikan melalui platform resmi kami.",
      highlights: ["Coming Soon", "Grand Closing Perkembang", "Stay Tuned"],
      icon: "⚽",
      color: "#00F5D4",
      pamphlet: "", 
      barcode: "", 
      link: "#", 
    },
  ];

  const [activeTab, setActiveTab] = useState(activities[0]);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div className="space-y-8">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-4xl sm:text-5xl">{activeTab.icon}</span>
                  <h3 className="text-3xl sm:text-5xl font-black text-white" style={{ fontFamily: "'Cinzel Decorative', serif", textShadow: `0 0 15px ${activeTab.color}50` }}>
                    {activeTab.title}
                  </h3>
                </div>
                <p
                  className="text-sm sm:text-lg font-bold uppercase tracking-[0.2em] mb-4"
                  style={{ color: activeTab.color }}
                >
                  {activeTab.subtitle}
                </p>
                <p className="text-[#E0F7FF]/90 text-lg sm:text-xl leading-relaxed font-light mb-8">
                  {activeTab.fullDesc}
                </p>

                <div className="space-y-4 bg-black/20 rounded-2xl p-6 border border-white/5 mb-8">
                  <h4 className="text-white text-xl font-bold flex items-center gap-2">
                    <span style={{ color: activeTab.color }}>✨</span> Highlight Kegiatan:
                  </h4>
                  <ul className="space-y-3">
                    {activeTab.highlights.map((highlight: string, idx: number) => (
                      <li key={idx} className="flex flex-row items-baseline gap-3">
                        <span className="mt-1" style={{ color: activeTab.color }}>✦</span>
                        <span className="text-[#E0F7FF]/90 text-base">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Registration Buttons */}
                  {activeTab.links && activeTab.links.map((lnk, i) => (
                    <a
                      key={i}
                      href={lnk.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 font-black text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
                      style={{ 
                        backgroundColor: activeTab.color, 
                        color: '#0B0F1A',
                        boxShadow: `0 0 25px ${activeTab.color}60`
                      }}
                    >
                      🔗 {lnk.label}
                    </a>
                  ))}
                  {activeTab.link && activeTab.link !== "#" && (
                    <a
                      href={activeTab.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 font-black text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
                      style={{ 
                        backgroundColor: activeTab.color, 
                        color: '#0B0F1A',
                        boxShadow: `0 0 25px ${activeTab.color}60`
                      }}
                    >
                      🔗 Daftar {activeTab.title} Sekarang
                    </a>
                  )}
              </div>
            </div>

            {/* Assets Section */}
            <div className="w-full">
              {activeTab.competitions && activeTab.competitions.length > 0 ? (
                <div className="space-y-12">
                  {activeTab.competitions.map((comp, idx) => (
                    <div key={idx} className="space-y-6">
                      <div className="flex items-center gap-4">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/10" />
                        <h4 className="text-white font-black text-sm uppercase tracking-[0.3em]" style={{ color: activeTab.color }}>
                           {comp.name}
                        </h4>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/10" />
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
                        {/* Pamphlet */}
                        <div className="space-y-4">
                          <p className="text-[#E0F7FF]/40 text-[10px] font-bold uppercase tracking-widest text-center">Poster {comp.name}</p>
                          <div className="aspect-[3/4] relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 group shadow-2xl">
                              <Image
                                src={comp.pamphlet}
                                alt={`Poster ${comp.name}`}
                                fill
                                className="object-contain opacity-0 transition-opacity duration-500 cursor-zoom-in"
                                onClick={() => setExpandedImage(comp.pamphlet)}
                                onLoadingComplete={(img: HTMLImageElement) => img.classList.remove('opacity-0')}
                              />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6 pointer-events-none">
                              <p className="text-white text-xs font-medium">Poster Resmi {comp.name}</p>
                            </div>
                          </div>
                        </div>

                        {/* Barcode & Link */}
                        <div className="space-y-4">
                          <p className="text-[#E0F7FF]/40 text-[10px] font-bold uppercase tracking-widest text-center">Scan QR {comp.name}</p>
                          <div className="aspect-square relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-6 flex flex-col items-center justify-center group">
                            <div className="w-full h-full relative">
                              <Image
                                src={comp.barcode}
                                alt={`QR Code ${comp.name}`}
                                fill
                                className="object-contain opacity-0 transition-opacity duration-500 group-hover:scale-105 transition-transform"
                                onLoadingComplete={(img: HTMLImageElement) => img.classList.remove('opacity-0')}
                              />
                            </div>
                          </div>
                          {/* Button below QR */}
                          <a 
                            href={comp.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="w-full py-4 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-center transition-all bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-95"
                            style={{ color: activeTab.color, borderColor: `${activeTab.color}30` }}
                          >
                            <span>🔗 Daftar {comp.name}</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {/* Fallback Pamphlet */}
                  <div className="space-y-4">
                    <p className="text-[#E0F7FF]/40 text-[10px] font-bold uppercase tracking-widest text-center">Pamflet Acara</p>
                    <div className="aspect-[3/4] relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                      {activeTab.pamphlet ? (
                        <Image
                          src={activeTab.pamphlet}
                          alt="Pamflet"
                          fill
                          className="object-contain cursor-zoom-in"
                          onClick={() => setExpandedImage(activeTab.pamphlet)}
                        />
                      ) : (
                        <div className="text-center opacity-30">
                          <span className="text-4xl block mb-2">🖼️</span>
                          <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: activeTab.color }}>Asset Coming Soon</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Fallback Barcode */}
                  <div className="space-y-4">
                    <p className="text-[#E0F7FF]/40 text-[10px] font-bold uppercase tracking-widest text-center">Scan QR</p>
                    <div className="aspect-square relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center p-8">
                      {activeTab.barcode ? (
                        <Image
                          src={activeTab.barcode}
                          alt="Barcode"
                          fill
                          className="object-contain"
                        />
                      ) : (
                        <div className="text-center opacity-30">
                          <span className="text-4xl block mb-2">📱</span>
                          <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: activeTab.color }}>QR Coming Soon</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Activity Sections based on Selected Tab */}
      <div className="mt-8 relative z-10 w-full animate-fade-in">
        <EventInfoSection activityId={activeTab.id} />
        {activeTab.id === ("glory-cup" as ActivityId) && (
          <>
            <FnBSection />
          </>
        )}
      </div>

      {/* Image Modal */}
      {expandedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-fade-in"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative w-full max-w-4xl h-[90vh] flex items-center justify-center">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-[#00F5D4] text-4xl"
              onClick={() => setExpandedImage(null)}
            >
              ×
            </button>
            <div className="relative w-full h-full">
              <Image
                src={expandedImage as string}
                alt="Expanded view"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
