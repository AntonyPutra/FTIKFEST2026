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
  title: "FTIK FEST 2026 – Campus Music Festival Semarang",
  description:
    "FTIK FEST 2026 – Festival musik kampus paling epik di Semarang. Satu malam penuh musik, energi anak muda, dan momen tak terlupakan. Dapatkan tiketmu sekarang!",
  keywords: [
    "FTIK FEST 2026",
    "festival musik kampus",
    "Semarang",
    "konser mahasiswa",
    "BEM FTIK",
    "music festival",
    "FTIK FEST",
  ],
  authors: [{ name: "BEM FTIK" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://ftikfest2026.my.id",
    siteName: "FTIK FEST 2026",
    title: "FTIK FEST 2026 – Campus Music Festival Semarang",
    description:
      "Festival musik kampus paling epik di Semarang. Satu malam penuh musik, energi anak muda, dan momen tak terlupakan.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "FTIK FEST 2026 – Campus Music Festival",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FTIK FEST 2026 – Campus Music Festival Semarang",
    description:
      "Festival musik kampus paling epik di Semarang. Satu malam penuh musik, energi anak muda, dan momen tak terlupakan.",
    images: ["/og-image.jpg"],
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
    <html lang="id" className={`${inter.variable} ${cinzelDecorative.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0B0F1A" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
