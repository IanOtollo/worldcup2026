import { getStandings } from "@/lib/api/football";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Groups & Standings — FIFA World Cup 2026",
  description: "Live group standings for all 12 groups at the FIFA World Cup 2026.",
};

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
};

export default async function GroupsPage() {
  const standings = await getStandings();

  return (
    <div style={{ background: "#050A05", minHeight: "100vh" }}>
      {/* Header */}
      <div className="relative" style={{ padding: "80px 0 48px", borderBottom: "0.5px solid #1F1F1F" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 50% 70% at 85% 40%, rgba(0,40,160,0.12) 0%, transparent 65%)" }} />
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(64px,10vw,96px)", color: "#F2F2F2", lineHeight: 0.85, marginBottom: 16 }}>Group Stage</h1>
          <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            12 Groups · 48 Teams · Top 2 + Best 8 Third-Place Teams Qualify
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16">
        {standings.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {standings.map((group) => (
              <div
                key={group.group}
                className="card-hover"
                style={{ background: "#0D0D0D", border: "0.5px solid #1F1F1F", transition: "border-color 0.15s" }}
              >
                {/* Group header with team flags */}
                <div style={{ padding: "16px 20px", borderBottom: "0.5px solid #1F1F1F", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 13, letterSpacing: "0.15em", color: "#888", textTransform: "uppercase" }}>
                    {group.group.replace("_", " ")}
                  </span>
                  <div style={{ display: "flex", gap: 4 }}>
                    {group.table.map((row) => row.team.crest ? (
                      <div key={row.team.id} style={{ position: "relative", width: 18, height: 13 }}>
                        <Image src={row.team.crest} alt="" fill className="object-contain" unoptimized />
                      </div>
                    ) : null)}
                  </div>
                </div>

                {/* Table */}
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ borderBottom: "0.5px solid #1A1A1A" }}>
                      {["Team","P","W","D","L","GF","GA","GD","Pts"].map((h) => (
                        <th key={h} style={{ fontFamily: F.condensed, fontWeight: 500, fontSize: 10, color: "#444", letterSpacing: "0.12em", textTransform: "uppercase", padding: "8px 6px", textAlign: h === "Team" ? "left" : "center" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {group.table.map((row, ri) => (
                      <tr
                        key={row.team.id}
                        className="row-hover-md"
                        style={{
                          borderBottom: "0.5px solid #141414",
                          borderLeft: ri < 2 ? "3px solid #009B3A" : ri === 2 ? "3px solid #C9A84C" : "3px solid transparent",
                          background: ri < 2 ? "rgba(0,155,58,0.04)" : ri === 2 ? "rgba(201,168,76,0.04)" : "transparent",
                          transition: "background 0.15s",
                        }}
                      >
                        <td style={{ padding: "9px 6px 9px 10px" }}>
                          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                            {row.team.crest ? (
                              <div style={{ position: "relative", width: 16, height: 12, flexShrink: 0 }}>
                                <Image src={row.team.crest} alt="" fill className="object-contain" unoptimized />
                              </div>
                            ) : null}
                            <span style={{ fontFamily: F.condensed, fontWeight: 500, fontSize: 13, color: "#F2F2F2" }}>
                              {row.team.tla ?? row.team.name.slice(0, 3).toUpperCase()}
                            </span>
                          </div>
                        </td>
                        {[row.playedGames, row.won, row.draw, row.lost, row.goalsFor, row.goalsAgainst, row.goalDifference, row.points].map((v, ci) => (
                          <td key={ci} style={{ fontFamily: F.mono, fontSize: 13, color: ci === 7 ? "#F2F2F2" : "#555", textAlign: "center", padding: "9px 4px", fontWeight: ci === 7 ? 700 : 400 }}>
                            {ci === 6 && typeof v === "number" && v > 0 ? `+${v}` : v}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div style={{ padding: "10px 20px", borderTop: "0.5px solid #141414" }}>
                  <span style={{ fontFamily: F.condensed, fontSize: 10, color: "#333", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Top 2 qualify · Best 8 third-place teams may advance
                  </span>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "96px 0" }}>
            <p style={{ fontFamily: F.display, fontSize: 64, color: "#1A1A1A", marginBottom: 16 }}>GROUP DRAW PENDING</p>
            <p style={{ fontFamily: F.condensed, fontSize: 16, color: "#444" }}>Official groups will be confirmed and displayed here in real time.</p>
          </div>
        )}
      </div>
    </div>
  );
}
