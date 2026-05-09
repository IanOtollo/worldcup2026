import { getScorers } from "@/lib/api/football";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Golden Boot Race — FIFA World Cup 2026",
  description: "Top scorers leaderboard at the FIFA World Cup 2026.",
};

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
};

const MEDAL = ["#C9A84C", "#A8A9AD", "#8B6914"];
const MEDAL_LABEL = ["GOLDEN BOOT LEADER", "SILVER BOOT", "BRONZE BOOT"];

export default async function ScorersPage() {
  const scorers = await getScorers(20);

  return (
    <div style={{ background: "#050A05", minHeight: "100vh" }}>
      {/* Header */}
      <div className="relative" style={{ padding: "80px 0 48px", borderBottom: "0.5px solid #1F1F1F" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 15% 50%, rgba(0,140,50,0.12) 0%, transparent 65%)" }} />
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(64px,10vw,96px)", color: "#F2F2F2", lineHeight: 0.85, marginBottom: 16 }}>Golden Boot Race</h1>
          <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Top Goalscorers — FIFA World Cup 2026
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16">
        {scorers.length > 0 ? (
          <>
            {/* Podium — top 3 */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {scorers.slice(0, 3).map((s, i) => (
                <div
                  key={s.player.id}
                  style={{
                    background: "#0D0D0D",
                    border: `0.5px solid ${MEDAL[i]}`,
                    padding: "32px 28px",
                    order: i === 0 ? 1 : i === 1 ? 0 : 2,
                  }}
                >
                  <span style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 11, letterSpacing: "0.2em", color: MEDAL[i], textTransform: "uppercase", display: "block", marginBottom: 20 }}>
                    {MEDAL_LABEL[i]}
                  </span>
                  <p style={{ fontFamily: F.display, fontSize: "clamp(28px,3vw,40px)", color: "#F2F2F2", lineHeight: 1, marginBottom: 12 }}>
                    {s.player.name}
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
                    {s.team.crest ? (
                      <div style={{ position: "relative", width: 18, height: 13 }}>
                        <Image src={s.team.crest} alt="" fill className="object-contain" unoptimized />
                      </div>
                    ) : null}
                    <span style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", textTransform: "uppercase", letterSpacing: "0.1em" }}>{s.team.name}</span>
                  </div>
                  <div style={{ borderTop: "0.5px solid #1F1F1F", paddingTop: 20, display: "flex", gap: 24 }}>
                    <div>
                      <span style={{ fontFamily: F.mono, fontSize: 64, fontWeight: 700, color: "#C8102E", lineHeight: 1 }}>{s.goals}</span>
                      <span style={{ fontFamily: F.condensed, fontSize: 11, color: "#444", letterSpacing: "0.12em", display: "block", marginTop: 4 }}>GOALS</span>
                    </div>
                    {s.assists != null && (
                      <div>
                        <span style={{ fontFamily: F.mono, fontSize: 36, color: "#555", lineHeight: 1 }}>{s.assists}</span>
                        <span style={{ fontFamily: F.condensed, fontSize: 11, color: "#444", letterSpacing: "0.12em", display: "block", marginTop: 4 }}>ASSISTS</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Full table */}
            <div style={{ border: "0.5px solid #1F1F1F" }}>
              <div style={{ background: "#0A0A0A", borderBottom: "0.5px solid #1F1F1F" }}>
                <div style={{ display: "grid", gridTemplateColumns: "48px 1fr 160px 80px 80px 80px", alignItems: "center", padding: "10px 24px" }}>
                  {["#","Player","Nation","Goals","Assists","Pens"].map((h) => (
                    <span key={h} style={{ fontFamily: F.condensed, fontWeight: 500, fontSize: 11, color: "#444", letterSpacing: "0.12em", textTransform: "uppercase", textAlign: h === "Player" || h === "Nation" || h === "#" ? "left" : "center" }}>{h}</span>
                  ))}
                </div>
              </div>
              {scorers.map((s, i) => (
                <div
                  key={s.player.id}
                  className="row-hover"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "48px 1fr 160px 80px 80px 80px",
                    alignItems: "center",
                    padding: "14px 24px",
                    borderBottom: "0.5px solid #141414",
                    borderLeft: i < 3 ? `3px solid ${MEDAL[i]}` : "3px solid transparent",
                    transition: "background 0.15s",
                    cursor: "default",
                  }}
                >
                  <span style={{ fontFamily: F.mono, fontSize: 13, color: "#333" }}>{i + 1}</span>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    {s.team.crest ? (
                      <div style={{ position: "relative", width: 18, height: 13 }}>
                        <Image src={s.team.crest} alt="" fill className="object-contain" unoptimized />
                      </div>
                    ) : null}
                    <span style={{ fontFamily: F.condensed, fontWeight: 600, fontSize: 17, color: "#F2F2F2" }}>{s.player.name}</span>
                  </div>
                  <span style={{ fontFamily: F.condensed, fontSize: 13, color: "#666" }}>{s.player.nationality}</span>
                  <span style={{ fontFamily: F.mono, fontSize: 18, fontWeight: 700, color: "#C8102E", textAlign: "center" }}>{s.goals}</span>
                  <span style={{ fontFamily: F.mono, fontSize: 14, color: "#555", textAlign: "center" }}>{s.assists ?? "–"}</span>
                  <span style={{ fontFamily: F.mono, fontSize: 14, color: "#555", textAlign: "center" }}>{s.penalties ?? "–"}</span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "96px 0" }}>
            <p style={{ fontFamily: F.display, fontSize: 64, color: "#1A1A1A", marginBottom: 16 }}>SEASON HAS NOT STARTED</p>
            <p style={{ fontFamily: F.condensed, fontSize: 16, color: "#444" }}>The Golden Boot leaderboard goes live on 11 June 2026.</p>
          </div>
        )}
      </div>
    </div>
  );
}
