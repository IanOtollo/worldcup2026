import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tournament Format — FIFA World Cup 2026",
  description: "Understanding the expanded 48-team format of the 2026 FIFA World Cup.",
};

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
  body: "var(--font-barlow), sans-serif",
};

export default function FormatPage() {
  return (
    <div style={{ background: "#050A05", minHeight: "100vh" }}>
      {/* Header */}
      <div className="relative" style={{ padding: "80px 0 48px", borderBottom: "0.5px solid #1F1F1F" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 15% 50%, rgba(0,140,50,0.12) 0%, transparent 65%)" }} />
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(48px,8vw,96px)", color: "#F2F2F2", lineHeight: 0.85, marginBottom: 16 }}>Tournament Format</h1>
          <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            The New 48-Team Era
          </p>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-6 py-20">
        <p style={{ fontFamily: F.body, fontSize: 20, color: "#AAA", lineHeight: 1.7, marginBottom: 48 }}>
          The FIFA World Cup 2026 marks a historic expansion, growing from 32 to 48 participating nations. This new format ensures more teams experience the global stage while maintaining the tournament's competitive integrity and dramatic knockout phase.
        </p>

        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: F.display, fontSize: 40, color: "#F2F2F2", marginBottom: 20 }}>Group Stage</h2>
          <div style={{ background: "#0D0D0D", border: "0.5px solid #1F1F1F", padding: "32px" }}>
            <p style={{ fontFamily: F.body, fontSize: 16, color: "#888", lineHeight: 1.7, marginBottom: 24 }}>
              The 48 teams will be drawn into <strong>12 groups of four teams</strong> (Groups A to L). Every team will play three matches within their group.
            </p>
            <h3 style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 13, color: "#555", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 16 }}>Qualification to Knockouts</h3>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li style={{ padding: "16px 0", borderBottom: "0.5px solid #141414", display: "flex", gap: 16 }}>
                <span style={{ width: 4, background: "#009B3A", flexShrink: 0 }} />
                <div>
                  <span style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 16, color: "#F2F2F2", display: "block" }}>Top Two</span>
                  <span style={{ fontFamily: F.body, fontSize: 14, color: "#666" }}>The top two teams from each of the 12 groups (24 teams) automatically advance.</span>
                </div>
              </li>
              <li style={{ padding: "16px 0", display: "flex", gap: 16 }}>
                <span style={{ width: 4, background: "#C9A84C", flexShrink: 0 }} />
                <div>
                  <span style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 16, color: "#F2F2F2", display: "block" }}>Best Third-Placed</span>
                  <span style={{ fontFamily: F.body, fontSize: 14, color: "#666" }}>The 8 best third-placed teams across all groups will also advance to complete the Round of 32.</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: F.display, fontSize: 40, color: "#F2F2F2", marginBottom: 20 }}>Knockout Stage</h2>
          <div style={{ background: "#0D0D0D", border: "0.5px solid #1F1F1F", padding: "32px" }}>
            <p style={{ fontFamily: F.body, fontSize: 16, color: "#888", lineHeight: 1.7, marginBottom: 24 }}>
              For the first time, the tournament will feature a <strong>Round of 32</strong>, extending the knockout phase by one round. To win the World Cup, a team must now play 8 matches (previously 7).
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {["Round of 32 (16 matches)", "Round of 16 (8 matches)", "Quarter-Finals (4 matches)", "Semi-Finals (2 matches)", "Third Place Play-off (1 match)", "Final (1 match)"].map((stage, i) => (
                <div key={stage} style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <span style={{ fontFamily: F.mono, fontSize: 14, color: "#444" }}>0{i+1}</span>
                  <span style={{ fontFamily: F.condensed, fontWeight: 600, fontSize: 16, color: "#F2F2F2", textTransform: "uppercase", letterSpacing: "0.04em" }}>{stage}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
