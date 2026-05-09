import { getTeams } from "@/lib/api/football";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The 48 Nations — FIFA World Cup 2026",
  description: "All 48 qualified nations competing at the FIFA World Cup 2026.",
};

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
};

export default async function TeamsPage() {
  const teams = await getTeams();

  return (
    <div style={{ background: "#050A05", minHeight: "100vh" }}>
      {/* Header */}
      <div className="relative" style={{ padding: "80px 0 48px", borderBottom: "0.5px solid #1F1F1F" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 80% 40%, rgba(0,40,160,0.12) 0%, transparent 65%)" }} />
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(64px,10vw,96px)", color: "#F2F2F2", lineHeight: 0.85, marginBottom: 16 }}>The 48 Nations</h1>
          <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Official Participating Member Associations · FIFA World Cup 2026
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16">
        {teams.length > 0 ? (
          <div
            className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8"
            style={{ border: "0.5px solid #1F1F1F", gap: "0.5px", background: "#1F1F1F" }}
          >
            {teams.map((team) => (
              <Link
                key={team.id}
                href={`/teams/${team.id}`}
                className="row-hover-md"
                style={{
                  background: "#0D0D0D",
                  padding: "24px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  textDecoration: "none",
                  transition: "background 0.15s",
                  cursor: "pointer",
                }}
              >
                <div style={{ width: 56, height: 40, position: "relative", marginBottom: 12, flexShrink: 0 }}>
                  {team.crest ? (
                    <Image src={team.crest} alt={team.name} fill className="object-contain" unoptimized />
                  ) : (
                    <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span style={{ fontFamily: F.mono, fontSize: 11, color: "#333" }}>{team.tla}</span>
                    </div>
                  )}
                </div>
                <span style={{ fontFamily: F.condensed, fontWeight: 600, fontSize: 12, color: "#F2F2F2", textTransform: "uppercase", letterSpacing: "0.04em", lineHeight: 1.3 }}>
                  {team.name}
                </span>
                {team.area?.name && (
                  <span style={{ fontFamily: F.condensed, fontSize: 10, color: "#444", letterSpacing: "0.08em", marginTop: 4 }}>
                    {team.area.name}
                  </span>
                )}
              </Link>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "96px 0" }}>
            <p style={{ fontFamily: F.display, fontSize: 64, color: "#1A1A1A", marginBottom: 16 }}>QUALIFICATION PENDING</p>
            <p style={{ fontFamily: F.condensed, fontSize: 16, color: "#444" }}>The full list of 48 qualified nations will be confirmed and listed here.</p>
          </div>
        )}
      </div>
    </div>
  );
}
