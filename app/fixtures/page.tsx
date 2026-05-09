import { getFixtures } from "@/lib/api/football";
import { Match } from "@/types/football";
import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Match Schedule — FIFA World Cup 2026",
  description: "All 104 matches of the FIFA World Cup 2026 — fixtures, scores, and venues.",
};

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
};

function MatchRow({ match }: { match: Match }) {
  const isLive = ["IN_PLAY", "PAUSED"].includes(match.status);
  const isDone = match.status === "FINISHED";
  const homeWin = match.score.winner === "HOME_TEAM";
  const awayWin = match.score.winner === "AWAY_TEAM";

  return (
    <div
      className="row-hover flex flex-col md:grid md:grid-cols-[1fr_auto_1fr_auto] items-center py-6 md:py-0 md:h-[72px] px-6 border-b border-[#141414]"
      style={{
        background: isLive ? "rgba(200,16,46,0.04)" : "transparent",
        borderLeft: isLive ? "2px solid #C8102E" : "2px solid transparent",
        transition: "background 0.15s, border-color 0.15s",
        cursor: "default",
      }}
    >
      {/* Teams Container (Top on mobile, split on desktop) */}
      <div className="flex w-full items-center justify-between md:contents">
        {/* Home */}
        <div className="flex items-center gap-3 md:flex-row">
          {match.homeTeam.crest ? (
            <div style={{ position: "relative", width: 28, height: 20, flexShrink: 0 }}>
              <Image src={match.homeTeam.crest} alt="" fill className="object-contain" unoptimized />
            </div>
          ) : null}
          <span className="text-lg md:text-[18px]" style={{ fontFamily: F.condensed, fontWeight: 600, color: isDone && !homeWin ? "#444" : "#F2F2F2", textTransform: "uppercase", letterSpacing: "0.03em" }}>
            {match.homeTeam.name}
          </span>
        </div>

        {/* Score / Time (Center on desktop, between teams on mobile) */}
        <div className="flex flex-col items-center min-w-[100px] px-4">
          {isLive && (
            <div className="flex items-center gap-1.5 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8102E] animate-pulse" />
              <span style={{ fontFamily: F.mono, fontSize: 11, color: "#C8102E", letterSpacing: "0.12em" }}>LIVE</span>
            </div>
          )}
          <span className="text-2xl md:text-[24px]" style={{ fontFamily: F.mono, fontWeight: 500, color: isLive ? "#C8102E" : "#F2F2F2", fontVariantNumeric: "tabular-nums" }}>
            {isDone || isLive
              ? `${match.score.fullTime.home ?? 0} - ${match.score.fullTime.away ?? 0}`
              : new Date(match.utcDate).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })}
          </span>
          {isDone && (
            <span style={{ fontFamily: F.condensed, fontSize: 10, color: "#444", letterSpacing: "0.12em", textTransform: "uppercase" }}>FINAL</span>
          )}
        </div>

        {/* Away */}
        <div className="flex items-center gap-3 justify-end">
          <span className="text-lg md:text-[18px] text-right" style={{ fontFamily: F.condensed, fontWeight: 600, color: isDone && !awayWin ? "#444" : "#F2F2F2", textTransform: "uppercase", letterSpacing: "0.03em" }}>
            {match.awayTeam.name}
          </span>
          {match.awayTeam.crest ? (
            <div style={{ position: "relative", width: 28, height: 20, flexShrink: 0 }}>
              <Image src={match.awayTeam.crest} alt="" fill className="object-contain" unoptimized />
            </div>
          ) : null}
        </div>
      </div>

      {/* Meta (Full width on mobile, right on desktop) */}
      <div className="mt-4 md:mt-0 md:pl-6 w-full md:w-auto text-center md:text-right md:min-w-[140px]">
        <span style={{ fontFamily: F.condensed, fontSize: 11, color: "#444", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          {match.group ?? match.stage}
        </span>
      </div>
    </div>
  );
}

export default async function FixturesPage() {
  const matches = await getFixtures();

  const grouped: Record<string, Match[]> = {};
  matches.forEach((m) => {
    const key = new Date(m.utcDate).toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    if (!grouped[key]) grouped[key] = [];
    grouped[key].push(m);
  });

  return (
    <div style={{ background: "#050A05", minHeight: "100vh" }}>
      {/* Page Header */}
      <div
        className="relative"
        style={{
          background: "#050A05",
          borderBottom: "0.5px solid #1F1F1F",
          padding: "80px 0 48px",
        }}
      >
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 15% 50%, rgba(0,140,50,0.12) 0%, transparent 65%)" }} />
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(64px,10vw,96px)", color: "#F2F2F2", lineHeight: 0.85, marginBottom: 16 }}>
            Match Schedule
          </h1>
          <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            {matches.length} Matches · 48 Teams · 16 Venues · 11 June – 19 July 2026
          </p>
        </div>
      </div>

      {/* Match list */}
      <div className="max-w-[1440px] mx-auto px-6 py-16">
        {Object.keys(grouped).length > 0 ? Object.entries(grouped).map(([date, dayMatches]) => (
          <section key={date} className="mb-16">
            <div style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 13, letterSpacing: "0.2em", color: "#555", textTransform: "uppercase", borderBottom: "0.5px solid #1A1A1A", paddingBottom: 12, marginBottom: 0 }}>
              {date}
            </div>
            <div style={{ border: "0.5px solid #1F1F1F", borderTop: "none" }}>
              {dayMatches.map((m) => <MatchRow key={m.id} match={m} />)}
            </div>
          </section>
        )) : (
          <div style={{ textAlign: "center", padding: "96px 0" }}>
            <p style={{ fontFamily: F.display, fontSize: 48, color: "#1F1F1F" }}>FIXTURES PENDING</p>
            <p style={{ fontFamily: F.condensed, fontSize: 16, color: "#444", marginTop: 16 }}>The full match schedule will be published ahead of the tournament.</p>
          </div>
        )}
      </div>
    </div>
  );
}
