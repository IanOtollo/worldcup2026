import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Knockout Bracket — FIFA World Cup 2026",
  description: "The full knockout bracket for the FIFA World Cup 2026.",
};

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
};

const STAGES = [
  { label: "Round of 32", slots: 16 },
  { label: "Round of 16", slots: 8 },
  { label: "Quarter-Finals", slots: 4 },
  { label: "Semi-Finals", slots: 2 },
  { label: "Final", slots: 1 },
];

function MatchNode({ isFinal = false }: { isFinal?: boolean }) {
  return (
    <div
      style={{
        width: 180,
        border: isFinal ? "0.5px solid #C9A84C" : "0.5px solid #1F1F1F",
        background: "#0D0D0D",
        flexShrink: 0,
      }}
    >
      <div style={{ padding: "10px 14px", borderBottom: "0.5px solid #1F1F1F", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontFamily: F.condensed, fontSize: 13, color: "#333", fontStyle: "italic" }}>TBD</span>
        <span style={{ fontFamily: F.mono, fontSize: 13, color: "#333" }}>–</span>
      </div>
      <div style={{ padding: "10px 14px", display: "flex", justifyContent: "space-between" }}>
        <span style={{ fontFamily: F.condensed, fontSize: 13, color: "#333", fontStyle: "italic" }}>TBD</span>
        <span style={{ fontFamily: F.mono, fontSize: 13, color: "#333" }}>–</span>
      </div>
    </div>
  );
}

export default function BracketPage() {
  return (
    <div style={{ background: "#050A05", minHeight: "100vh" }}>
      {/* Header */}
      <div className="relative" style={{ padding: "80px 0 48px", borderBottom: "0.5px solid #1F1F1F" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 50% 100%, rgba(0,40,160,0.14) 0%, transparent 65%)" }} />
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(48px,8vw,96px)", color: "#F2F2F2", lineHeight: 0.85, marginBottom: 16 }}>
            The Road to the Final
          </h1>
          <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            MetLife Stadium, New Jersey · 19 July 2026
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16">
        {/* Key */}
        <div style={{ display: "flex", gap: 24, marginBottom: 32, paddingBottom: 24, borderBottom: "0.5px solid #1F1F1F" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 16, height: 16, border: "2px solid #C9A84C" }} />
            <span style={{ fontFamily: F.condensed, fontSize: 12, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase" }}>Final</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 16, height: 16, border: "0.5px solid #1F1F1F", background: "#0D0D0D" }} />
            <span style={{ fontFamily: F.condensed, fontSize: 12, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase" }}>TBD — Updates when results are confirmed</span>
          </div>
        </div>

        {/* Bracket — horizontal scroll */}
        <div className="no-scrollbar overflow-x-auto pb-8">
          <div style={{ display: "flex", gap: 0, minWidth: "max-content", alignItems: "center" }}>
            {STAGES.map((stage, si) => {
              const vertGap = Math.pow(2, si) * 20;
              const topPad = Math.pow(2, Math.max(si - 1, 0)) * 10;
              return (
                <div key={stage.label} style={{ display: "flex", flexDirection: "column" }}>
                  {/* Stage label */}
                  <div
                    style={{
                      fontFamily: F.condensed, fontWeight: 600, fontSize: 11, color: "#444",
                      letterSpacing: "0.15em", textTransform: "uppercase",
                      textAlign: "center", paddingBottom: 16, paddingLeft: 16, paddingRight: 16,
                      borderBottom: "0.5px solid #1F1F1F", marginBottom: 16, whiteSpace: "nowrap",
                    }}
                  >
                    {stage.label}
                  </div>
                  {/* Match nodes */}
                  <div
                    style={{
                      display: "flex", flexDirection: "column",
                      gap: vertGap,
                      paddingTop: topPad,
                      paddingBottom: topPad,
                      paddingLeft: 16,
                      paddingRight: 16,
                    }}
                  >
                    {Array.from({ length: stage.slots }).map((_, mi) => (
                      <div key={mi} style={{ position: "relative" }}>
                        <MatchNode isFinal={stage.slots === 1} />
                        {/* Right connector */}
                        {si < STAGES.length - 1 && (
                          <div style={{
                            position: "absolute", top: "50%", left: "100%",
                            width: 16, height: 1,
                            background: "#0033A0",
                            transform: "translateY(-50%)",
                          }} />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Final venue card */}
        <div style={{ marginTop: 48, background: "#0D0D0D", border: "0.5px solid #C9A84C", padding: "32px 40px", display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 11, color: "#C9A84C", letterSpacing: "0.2em", textTransform: "uppercase" }}>The Final</span>
          <h2 style={{ fontFamily: F.display, fontSize: "clamp(32px,5vw,56px)", color: "#F2F2F2", lineHeight: 1 }}>19 JULY 2026</h2>
          <p style={{ fontFamily: F.condensed, fontSize: 15, color: "#888" }}>MetLife Stadium · East Rutherford, New Jersey, USA · Capacity 82,500</p>
          <Link
            href="/venues/metlife-stadium"
            style={{ marginTop: 16, fontFamily: F.condensed, fontWeight: 600, fontSize: 13, letterSpacing: "0.12em", color: "#C9A84C", borderBottom: "1px solid #C9A84C", paddingBottom: 2, width: "fit-content", textDecoration: "none", textTransform: "uppercase" }}
          >
            Venue Details →
          </Link>
        </div>
      </div>
    </div>
  );
}
