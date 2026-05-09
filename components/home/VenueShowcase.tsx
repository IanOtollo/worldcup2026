"use client";

import { venues } from "@/lib/data/venues";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
};

export default function VenueShowcase() {
  // Duplicate venues for seamless loop
  const duplicatedVenues = [...venues, ...venues];

  return (
    <section className="py-48" style={{ borderTop: "0.5px solid #1F1F1F", background: "#050A05" }}>
      <div className="max-w-[1200px] mx-auto px-12 md:px-24 mb-24">
        <div className="flex items-end justify-between" style={{ borderBottom: "0.5px solid #1F1F1F", paddingBottom: 32 }}>
          <h2 style={{ fontFamily: F.display, fontSize: "clamp(64px,8vw,96px)", color: "#F2F2F2", lineHeight: 1 }}>
            The Arenas
          </h2>
          <Link
            href="/venues"
            style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none" }}
          >
            Explore All 16 Stadiums →
          </Link>
        </div>
      </div>

      {/* Ticker / Auto-scroll Container */}
      <div className="relative overflow-hidden w-full">
        <motion.div 
          className="flex gap-1"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedVenues.map((venue, idx) => (
            <Link
              key={`${venue.slug}-${idx}`}
              href={`/venues/${venue.slug}`}
              className="group flex-shrink-0"
              style={{ width: 350, background: "#0D0D0D", display: "block", textDecoration: "none" }}
            >
              <div style={{ height: 240, overflow: "hidden", position: "relative" }}>
                <Image
                  src={venue.image}
                  alt={venue.name}
                  fill
                  className="object-cover"
                  style={{ transition: "transform 0.4s ease" }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-400" />
              </div>
              <div style={{ padding: "24px 28px", borderTop: "0.5px solid #1F1F1F" }}>
                <p style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 18, color: "#F2F2F2", textTransform: "uppercase", letterSpacing: "0.03em" }}>
                  {venue.name}
                </p>
                <p style={{ fontFamily: F.condensed, fontSize: 14, color: "#888", marginTop: 4, letterSpacing: "0.08em" }}>
                  {venue.city} · {venue.country}
                </p>
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: "0.5px solid #1A1A1A", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: F.condensed, fontSize: 12, color: "#444", letterSpacing: "0.12em", textTransform: "uppercase" }}>Capacity</span>
                  <span style={{ fontFamily: F.mono, fontSize: 16, color: "#C8102E", fontWeight: 700 }}>
                    {venue.capacity.toLocaleString()}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
