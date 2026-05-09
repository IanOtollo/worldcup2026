import type { Metadata } from "next";
import { Bebas_Neue, Barlow_Condensed, Barlow, DM_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas-neue",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

const barlow = Barlow({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const dmMono = DM_Mono({
  weight: "500",
  subsets: ["latin"],
  variable: "--font-dm-mono",
});

export const metadata: Metadata = {
  title: "FIFA World Cup 2026 | USA Canada Mexico",
  description: "The official-standard digital experience for the FIFA World Cup 2026. Built by IOMTechs.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  openGraph: {
    title: "FIFA World Cup 2026",
    description: "The Greatest Show on Earth Returns to North America.",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${bebasNeue.variable} ${barlowCondensed.variable} ${barlow.variable} ${dmMono.variable} antialiased`}
      >
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-16">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
