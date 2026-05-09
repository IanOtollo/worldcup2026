import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News — FIFA World Cup 2026",
  description: "Official news and updates for the FIFA World Cup 2026.",
};

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
  body: "var(--font-barlow), sans-serif",
};

export default function NewsPage() {
  return (
    <div style={{ background: "#050A05", minHeight: "100vh" }}>
      {/* Header */}
      <div className="relative" style={{ padding: "80px 0 48px", borderBottom: "0.5px solid #1F1F1F" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 85% 40%, rgba(0,40,160,0.12) 0%, transparent 65%)" }} />
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(64px,10vw,96px)", color: "#F2F2F2", lineHeight: 0.85, marginBottom: 16 }}>Latest News</h1>
          <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Updates from the Greatest Show on Earth
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-24 text-center">
        <p style={{ fontFamily: F.display, fontSize: 48, color: "#1F1F1F", marginBottom: 16 }}>NO RECENT NEWS</p>
        <p style={{ fontFamily: F.condensed, fontSize: 16, color: "#444", maxWidth: 400, margin: "0 auto" }}>
          Check back closer to the tournament for official updates, match reports, and announcements.
        </p>
      </div>
    </div>
  );
}
