import { history } from "@/lib/data/history";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props { params: { year: string } }

export function generateStaticParams() {
  return history.map((t) => ({ year: t.year.toString() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = history.find((h) => h.year.toString() === params.year);
  return {
    title: t ? `${t.year} FIFA World Cup — ${t.host}` : "World Cup History",
    description: t ? `${t.champion} won the ${t.year} FIFA World Cup hosted in ${t.host}.` : "",
  };
}

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
};

export default function HistoryYearPage({ params }: Props) {
  const t = history.find((h) => h.year.toString() === params.year);
  if (!t) return notFound();

  const leftCol = [
    { label: "Champion", value: t.champion },
    { label: "Runner-up", value: t.runnerUp },
    { label: "Third Place", value: t.thirdPlace },
    { label: "Final Score", value: t.finalScore },
    { label: "Final Venue", value: t.stadiumFinal },
  ];
  const rightCol = [
    { label: "Top Scorer", value: `${t.topScorer} (${t.topScorerGoals})` },
    { label: "Total Goals", value: t.totalGoals.toString() },
    { label: "Teams", value: t.totalTeams.toString() },
    { label: "Attendance (Final)", value: t.attendance.toLocaleString() },
    { label: "Host Nation", value: t.host },
  ];

  return (
    <div style={{ background: "#050A05", minHeight: "100vh" }}>
      {/* Header */}
      <div className="relative" style={{ padding: "80px 0 48px", borderBottom: "0.5px solid #1F1F1F", overflow: "hidden" }}>
        {/* Year watermark */}
        <div style={{ position: "absolute", right: "3%", top: "50%", transform: "translateY(-50%)", fontFamily: F.display, fontSize: "clamp(120px,18vw,200px)", color: "#0A0A0A", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
          {t.year}
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 10% 60%, rgba(0,140,50,0.12) 0%, transparent 65%)" }} />
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <span style={{ fontFamily: F.mono, fontSize: 16, color: "#555", letterSpacing: "0.15em", display: "block", marginBottom: 12 }}>{t.year}</span>
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(48px,8vw,96px)", color: "#F2F2F2", lineHeight: 0.85, marginBottom: 12 }}>{t.host}</h1>
          <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.15em", textTransform: "uppercase" }}>Official Tournament Archive</p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left card */}
          <div style={{ background: "#0D0D0D", border: "0.5px solid #1F1F1F" }}>
            <div style={{ padding: "16px 24px", borderBottom: "0.5px solid #1F1F1F", fontFamily: F.condensed, fontWeight: 700, fontSize: 11, color: "#555", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              The Final
            </div>
            {leftCol.map((r, i) => (
              <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: i < leftCol.length - 1 ? "0.5px solid #141414" : "none" }}>
                <span style={{ fontFamily: F.condensed, fontSize: 12, color: "#444", letterSpacing: "0.12em", textTransform: "uppercase" }}>{r.label}</span>
                <span style={{ fontFamily: r.label === "Final Score" ? F.mono : F.condensed, fontSize: r.label === "Final Score" ? 22 : 16, fontWeight: 700, color: r.label === "Champion" ? "#C9A84C" : "#F2F2F2", textAlign: "right" }}>
                  {r.value}
                </span>
              </div>
            ))}
          </div>

          {/* Right card */}
          <div style={{ background: "#0D0D0D", border: "0.5px solid #1F1F1F" }}>
            <div style={{ padding: "16px 24px", borderBottom: "0.5px solid #1F1F1F", fontFamily: F.condensed, fontWeight: 700, fontSize: 11, color: "#555", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Stats & Records
            </div>
            {rightCol.map((r, i) => (
              <div key={r.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px 24px", borderBottom: i < rightCol.length - 1 ? "0.5px solid #141414" : "none" }}>
                <span style={{ fontFamily: F.condensed, fontSize: 12, color: "#444", letterSpacing: "0.12em", textTransform: "uppercase" }}>{r.label}</span>
                <span style={{ fontFamily: ["Total Goals","Teams","Attendance (Final)"].includes(r.label) ? F.mono : F.condensed, fontSize: 16, fontWeight: 600, color: r.label === "Top Scorer" ? "#C8102E" : "#F2F2F2", textAlign: "right" }}>
                  {r.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
