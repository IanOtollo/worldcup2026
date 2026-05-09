import { venues } from "@/lib/data/venues";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "16 Venues — FIFA World Cup 2026",
  description: "The 16 host stadiums across USA, Canada, and Mexico for the FIFA World Cup 2026.",
};

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
};

const NATIONS = [
  { key: "USA", label: "United States" },
  { key: "Mexico", label: "Mexico" },
  { key: "Canada", label: "Canada" },
];

export default function VenuesPage() {
  return (
    <div style={{ background: "#050A05", minHeight: "100vh" }}>
      {/* Header */}
      <div className="relative" style={{ padding: "80px 0 48px", borderBottom: "0.5px solid #1F1F1F" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 90% 40%, rgba(0,40,160,0.12) 0%, transparent 65%)" }} />
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(64px,10vw,96px)", color: "#F2F2F2", lineHeight: 0.85, marginBottom: 16 }}>16 Arenas · 3 Nations</h1>
          <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            The Ultimate Stage for the Greatest Show on Earth
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16">
        {NATIONS.map(({ key, label }) => {
          const nv = venues.filter((v) => v.country === key);
          return (
            <section key={key} className="mb-20">
              <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 24, paddingTop: 24, borderTop: "0.5px solid #1F1F1F" }}>
                <h2 style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 14, letterSpacing: "0.2em", color: "#C8102E", textTransform: "uppercase" }}>
                  {label}
                </h2>
                <span style={{ fontFamily: F.condensed, fontSize: 12, color: "#333", letterSpacing: "0.1em" }}>
                  {nv.length} STADIUMS
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {nv.map((venue) => (
                  <Link
                    key={venue.slug}
                    href={`/venues/${venue.slug}`}
                    className="group block card-hover"
                    style={{ background: "#0D0D0D", border: "0.5px solid #1F1F1F", transition: "border-color 0.15s", textDecoration: "none", borderRadius: "2px" }}
                  >
                    <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
                      <Image
                        src={venue.image}
                        alt={venue.name}
                        fill
                        className="object-cover"
                        style={{ transition: "transform 0.4s ease" }}
                        unoptimized
                      />
                      <style>{`.group:hover img { transform: scale(1.04); }`}</style>
                    </div>
                    <div style={{ padding: "18px 20px" }}>
                      <p style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 18, color: "#F2F2F2", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                        {venue.name}
                      </p>
                      <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#888", marginTop: 4, letterSpacing: "0.06em" }}>
                        {venue.city}, {venue.state}
                      </p>
                      <div style={{ marginTop: 14, paddingTop: 14, borderTop: "0.5px solid #1A1A1A", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <div>
                          <span style={{ fontFamily: F.condensed, fontSize: 11, color: "#444", letterSpacing: "0.12em", textTransform: "uppercase", display: "block" }}>Capacity</span>
                          <span style={{ fontFamily: F.mono, fontSize: 16, color: "#C8102E", fontWeight: 500 }}>
                            {venue.capacity.toLocaleString()}
                          </span>
                        </div>
                        <span style={{ fontFamily: F.condensed, fontSize: 12, color: "#444", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                          {venue.surface}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
