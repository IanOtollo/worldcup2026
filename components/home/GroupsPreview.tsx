"use client";

import { Standing } from "@/types/football";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props { standings: Standing[] }

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
};

export default function GroupsPreview({ standings }: Props) {
  const preview = standings.slice(0, 4);

  return (
    <section className="py-48 relative" style={{ background: "#050A05" }}>
      {/* Subtle glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 60% at 80% 50%, rgba(0,40,160,0.08) 0%, transparent 70%)" }} />

      <div className="max-w-[1440px] mx-auto px-10 relative z-10">
        {/* Header */}
        <div className="flex items-end justify-between mb-24" style={{ borderBottom: "0.5px solid #1F1F1F", paddingBottom: "32px" }}>
          <h2 style={{ fontFamily: F.display, fontSize: "clamp(64px,8vw,96px)", color: "#F2F2F2", lineHeight: 1 }}>
            Group Stage
          </h2>
          <span style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.12em" }}>
            12 GROUPS · 72 MATCHES
          </span>
        </div>

        {/* 2×2 grid */}
        <div className="grid md:grid-cols-2 gap-px" style={{ background: "#1F1F1F" }}>
          {preview.length > 0 ? preview.map((group, gi) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.08 }}
              style={{ background: "#0D0D0D", padding: "28px 24px" }}
            >
              <p style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 13, letterSpacing: "0.15em", color: "#888", textTransform: "uppercase", marginBottom: 20 }}>
                {group.group.replace("_", " ")}
              </p>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: "0.5px solid #1A1A1A" }}>
                    {["Team","P","W","D","L","Pts"].map(h => (
                      <th key={h} style={{ fontFamily: F.condensed, fontWeight: 500, fontSize: 11, color: "#444", letterSpacing: "0.12em", textTransform: "uppercase", paddingBottom: 10, textAlign: h === "Team" ? "left" : "center" }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {group.table.map((row, ri) => (
                    <tr
                      key={row.team.id}
                      style={{
                        borderBottom: "0.5px solid #141414",
                        borderLeft: ri < 2 ? "2px solid #009B3A" : ri === 2 ? "2px solid #C9A84C" : "none",
                      }}
                    >
                      <td style={{ padding: "9px 0 9px 8px" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          {row.team.crest ? (
                            <div style={{ position: "relative", width: 18, height: 14, border: "0.5px solid #1F1F1F", flexShrink: 0 }}>
                              <Image src={row.team.crest} alt="" fill className="object-contain" />
                            </div>
                          ) : null}
                          <span style={{ fontFamily: F.condensed, fontWeight: 500, fontSize: 14, color: "#F2F2F2" }}>
                            {row.team.tla ?? row.team.name.slice(0, 3).toUpperCase()}
                          </span>
                        </div>
                      </td>
                      {[row.playedGames, row.won, row.draw, row.lost, row.points].map((v, ci) => (
                        <td key={ci} style={{ fontFamily: F.mono, fontSize: 14, color: ci === 4 ? "#F2F2F2" : "#666", textAlign: "center", padding: "9px 4px", fontWeight: ci === 4 ? 700 : 400 }}>{v}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </motion.div>
          )) : (
            <div className="col-span-2 py-24 text-center" style={{ background: "#0D0D0D" }}>
              <p style={{ fontFamily: F.condensed, fontSize: 16, color: "#555" }}>Group draw pending confirmation</p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/groups"
            style={{ fontFamily: F.condensed, fontWeight: 600, fontSize: 14, letterSpacing: "0.12em", color: "#C8102E", borderBottom: "1px solid #C8102E", paddingBottom: 2, textTransform: "uppercase" }}
          >
            VIEW ALL 12 GROUPS →
          </Link>
        </div>
      </div>
    </section>
  );
}
