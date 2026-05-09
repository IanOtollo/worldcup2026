"use client";

import { Scorer } from "@/types/football";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props { scorers: Scorer[] }

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
};

export default function TopScorersPreview({ scorers }: Props) {
  return (
    <section className="py-24 relative" style={{ background: "#080808", borderTop: "0.5px solid #1F1F1F" }}>
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex items-end justify-between mb-16" style={{ borderBottom: "0.5px solid #1F1F1F", paddingBottom: 24 }}>
          <h2 style={{ fontFamily: F.display, fontSize: "clamp(48px,6vw,64px)", color: "#F2F2F2", lineHeight: 1 }}>
            Golden Boot Race
          </h2>
          <Link
            href="/scorers"
            style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            Full Leaderboard →
          </Link>
        </div>

        {scorers.length > 0 ? (
          <div style={{ borderTop: "0.5px solid #1F1F1F" }}>
            {scorers.slice(0, 5).map((scorer, i) => (
              <motion.div
                key={scorer.player.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 0", borderBottom: "0.5px solid #1A1A1A" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                  {/* Huge muted rank */}
                  <span style={{ fontFamily: F.mono, fontSize: "clamp(32px,4vw,48px)", color: "#1F1F1F", width: 72, flexShrink: 0, lineHeight: 1 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: "clamp(16px,2vw,22px)", color: "#F2F2F2", letterSpacing: "0.03em" }}>
                      {scorer.player.name}
                    </p>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                      {scorer.team.crest ? (
                        <div style={{ position: "relative", width: 16, height: 12, border: "0.5px solid #1F1F1F" }}>
                          <Image src={scorer.team.crest} alt="" fill className="object-contain" />
                        </div>
                      ) : null}
                      <span style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                        {scorer.team.name}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Goals — dominant visual */}
                <span style={{ fontFamily: F.mono, fontWeight: 700, fontSize: "clamp(32px,4vw,48px)", color: "#C8102E", lineHeight: 1 }}>
                  {scorer.goals}
                </span>
              </motion.div>
            ))}
          </div>
        ) : (
          <p style={{ fontFamily: F.condensed, fontSize: 16, color: "#333", textAlign: "center", padding: "48px 0" }}>
            Scoring data will be available from 11 June 2026.
          </p>
        )}
      </div>
    </section>
  );
}
