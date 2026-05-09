import { Match } from "@/types/football";
import Image from "next/image";
import Link from "next/link";

interface Props { match: Match | null }

const F = {
  heading: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
};

export default function NextMatchCard({ match }: Props) {
  if (!match) return null;
  const date = new Date(match.utcDate);

  return (
    <section style={{ background: "#0D0D0D", borderTop: "0.5px solid #1F1F1F", borderBottom: "0.5px solid #1F1F1F" }}>
      <div className="max-w-[1440px] mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-14">
          <span style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: "11px", letterSpacing: "0.2em", color: "#555555", textTransform: "uppercase" }}>
            Featured Match
          </span>
          <span style={{ fontFamily: F.condensed, fontWeight: 500, fontSize: "11px", letterSpacing: "0.15em", color: "#333333", textTransform: "uppercase" }}>
            {match.group ?? match.stage}
          </span>
        </div>

        <div className="grid grid-cols-3 items-center gap-8">
          {/* Home */}
          <div className="flex flex-col items-center gap-6">
            {match.homeTeam.crest ? (
              <div className="relative" style={{ width: 80, height: 60, border: "0.5px solid #1F1F1F" }}>
                <Image src={match.homeTeam.crest} alt={match.homeTeam.name} fill className="object-contain p-2" />
              </div>
            ) : (
              <span style={{ fontFamily: F.mono, fontSize: 24, color: "#333" }}>{match.homeTeam.tla}</span>
            )}
            <span style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: "clamp(18px,2.5vw,32px)", textTransform: "uppercase", textAlign: "center", color: "#F2F2F2", letterSpacing: "0.05em" }}>
              {match.homeTeam.name}
            </span>
          </div>

          {/* Centre info */}
          <div className="flex flex-col items-center gap-4 text-center">
            <span style={{ fontFamily: F.mono, fontSize: 36, color: "#C8102E", letterSpacing: "0.1em" }}>VS</span>
            <span style={{ fontFamily: F.condensed, fontWeight: 400, fontSize: 15, color: "#888", letterSpacing: "0.08em" }}>
              {date.toLocaleDateString("en-US", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}
            </span>
            <span style={{ fontFamily: F.mono, fontSize: 18, color: "#F2F2F2" }}>
              {date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", hour12: false })} UTC
            </span>
            {match.homeTeam.venue && (
              <span style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.1em" }}>
                {match.homeTeam.venue}
              </span>
            )}
            <Link
              href="/fixtures"
              className="mt-4"
              style={{ fontFamily: F.condensed, fontWeight: 600, fontSize: 13, letterSpacing: "0.12em", color: "#C8102E", borderBottom: "1px solid #C8102E", paddingBottom: 2, textTransform: "uppercase" }}
            >
              MATCH PREVIEW →
            </Link>
          </div>

          {/* Away */}
          <div className="flex flex-col items-center gap-6">
            {match.awayTeam.crest ? (
              <div className="relative" style={{ width: 80, height: 60, border: "0.5px solid #1F1F1F" }}>
                <Image src={match.awayTeam.crest} alt={match.awayTeam.name} fill className="object-contain p-2" />
              </div>
            ) : (
              <span style={{ fontFamily: F.mono, fontSize: 24, color: "#333" }}>{match.awayTeam.tla}</span>
            )}
            <span style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: "clamp(18px,2.5vw,32px)", textTransform: "uppercase", textAlign: "center", color: "#F2F2F2", letterSpacing: "0.05em" }}>
              {match.awayTeam.name}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
