import type { Metadata } from "next";
import { Cinzel_Decorative, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ftikfest2026.my.id"),
  title: "FTIK FEST 2026 – Inovasi & Kreativitas Teknologi FTIK USM",
  description:
    "Website resmi FTIK FEST 2026. Ikuti berbagai kompetisi seru seperti Glory Cup, HSC, dan Lomba Mobile Legends. Mari berkarya dan berkompetisi di event terbesar FTIK tahun ini!",
  keywords: [
    "FTIK FEST 2026",
    "kompetisi mahasiswa",
    "Semarang",
    "Glory Cup",
    "HSC",
    "Mobile Legends",
    "BEM FTIK",
    "USM",
    "FTIK FEST",
  ],
  authors: [{ name: "BEM FTIK" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ftikfest2026.my.id",
    siteName: "FTIK FEST 2026",
    title: "FTIK FEST 2026 – Inovasi & Kreativitas Teknologi FTIK USM",
    description:
      "Website resmi FTIK FEST 2026. Ikuti berbagai kompetisi seru seperti Glory Cup, HSC, dan Lomba Mobile Legends. Mari berkarya dan berkompetisi di event terbesar FTIK tahun ini!",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "FTIK FEST 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FTIK FEST 2026 – Inovasi & Kreativitas Teknologi FTIK USM",
    description:
      "Website resmi FTIK FEST 2026. Ikuti berbagai kompetisi seru seperti Glory Cup, HSC, dan Lomba Mobile Legends. Mari berkarya dan berkompetisi di event terbesar FTIK tahun ini!",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} ${cinzelDecorative.variable}`} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="theme-color" content="#0B0F1A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
