"use client";

import { venues } from "@/lib/data/venues";
import Image from "next/image";
import Link from "next/link";

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
};

export default function VenueShowcase() {
  return (
    <section className="py-24" style={{ borderTop: "0.5px solid #1F1F1F", background: "#050A05" }}>
      <div className="max-w-[1440px] mx-auto px-6 mb-12">
        <div className="flex items-end justify-between" style={{ borderBottom: "0.5px solid #1F1F1F", paddingBottom: 24 }}>
          <h2 style={{ fontFamily: F.display, fontSize: "clamp(48px,6vw,64px)", color: "#F2F2F2", lineHeight: 1 }}>
            The Arenas
          </h2>
          <Link
            href="/venues"
            style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Explore All 16 Stadiums →
          </Link>
        </div>
      </div>

      {/* Horizontal scroll */}
      <div className="no-scrollbar overflow-x-auto cursor-grab active:cursor-grabbing">
        <div className="flex gap-px" style={{ width: "max-content", background: "#1F1F1F", paddingLeft: 24, paddingRight: 24 }}>
          {venues.slice(0, 8).map((venue) => (
            <Link
              key={venue.slug}
              href={`/venues/${venue.slug}`}
              className="group flex-shrink-0"
              style={{ width: 300, background: "#0D0D0D", display: "block", textDecoration: "none" }}
            >
              <div style={{ height: 200, overflow: "hidden", position: "relative" }}>
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  className="object-cover"
                  style={{ transition: "transform 0.4s ease" }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
              <div style={{ padding: "16px 20px", borderTop: "0.5px solid #1F1F1F" }}>
                <p style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 16, color: "#F2F2F2", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                  {venue.name}
                </p>
                <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#888", marginTop: 4, letterSpacing: "0.08em" }}>
                  {venue.city} · {venue.country}
                </p>
                <div style={{ marginTop: 12, paddingTop: 12, borderTop: "0.5px solid #1A1A1A", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: F.condensed, fontSize: 11, color: "#444", letterSpacing: "0.12em", textTransform: "uppercase" }}>Capacity</span>
                  <span style={{ fontFamily: F.mono, fontSize: 14, color: "#C8102E" }}>
                    {venue.capacity.toLocaleString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
