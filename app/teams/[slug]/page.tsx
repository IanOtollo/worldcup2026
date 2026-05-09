import { getTeam, getTeams } from "@/lib/api/football";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  const teams = await getTeams();
  return teams.map((t) => ({ slug: t.id.toString() }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const team = await getTeam(parseInt(params.slug));
  return {
    title: team ? `${team.name} — FIFA World Cup 2026` : "Team — FIFA World Cup 2026",
    description: team ? `${team.name} squad and stats at the FIFA World Cup 2026.` : "",
  };
}

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
  body: "var(--font-barlow), sans-serif",
};

const POSITIONS = ["Goalkeeper", "Defence", "Midfield", "Offence"];

export default async function TeamDetailPage({ params }: Props) {
  const team = await getTeam(parseInt(params.slug));
  if (!team) return notFound();

  return (
    <div style={{ background: "#050A05", minHeight: "100vh" }}>
      {/* Header */}
      <div className="relative" style={{ padding: "80px 0 48px", borderBottom: "0.5px solid #1F1F1F", overflow: "hidden" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 15% 50%, rgba(0,140,50,0.12) 0%, transparent 65%)" }} />
        {/* Flag watermark */}
        {team.crest && (
          <div style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", width: 400, height: 280, opacity: 0.06 }}>
            <Image src={team.crest} alt="" fill className="object-contain" unoptimized />
          </div>
        )}
        <div className="max-w-[1440px] mx-auto px-6 relative z-10 flex items-center gap-12">
          {team.crest && (
            <div style={{ width: 120, height: 80, position: "relative", flexShrink: 0, border: "0.5px solid #1F1F1F" }}>
              <Image src={team.crest} alt={team.name} fill className="object-contain p-3" unoptimized />
            </div>
          )}
          <div>
            <h1 style={{ fontFamily: F.display, fontSize: "clamp(48px,8vw,96px)", color: "#F2F2F2", lineHeight: 0.85, marginBottom: 12 }}>
              {team.name}
            </h1>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 24 }}>
              {team.area?.name && <span style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.12em", textTransform: "uppercase" }}>{team.area.name}</span>}
              {team.founded && <span style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.12em", textTransform: "uppercase" }}>Est. {team.founded}</span>}
              {team.venue && <span style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.12em", textTransform: "uppercase" }}>{team.venue}</span>}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16">
        {team.squad && team.squad.length > 0 ? (
          <section>
            <h2 style={{ fontFamily: F.display, fontSize: "clamp(40px,5vw,56px)", color: "#F2F2F2", lineHeight: 1, marginBottom: 32 }}>Squad</h2>
            {POSITIONS.map((pos) => {
              const players = team.squad!.filter((p) => {
                if (pos === "Offence") return p.position === "Offence" || p.position === "Forward" || p.position === "Attacker";
                return p.position === pos;
              });
              if (!players.length) return null;
              return (
                <div key={pos} className="mb-12">
                  <div style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 11, color: "#555", letterSpacing: "0.2em", textTransform: "uppercase", paddingBottom: 10, borderBottom: "0.5px solid #1F1F1F", marginBottom: 0 }}>
                    {pos}
                  </div>
                  <div style={{ border: "0.5px solid #1F1F1F", borderTop: "none" }}>
                    {players.map((player, i) => (
                      <div
                        key={player.id}
                        className="row-hover"
                        style={{
                          display: "grid",
                          gridTemplateColumns: "48px 1fr 160px 160px",
                          alignItems: "center",
                          padding: "14px 20px",
                          borderBottom: i < players.length - 1 ? "0.5px solid #141414" : "none",
                          background: "transparent",
                          transition: "background 0.15s",
                          cursor: "default",
                        }}
                      >
                        <span style={{ fontFamily: F.mono, fontSize: 14, color: "#333" }}>{player.shirtNumber ?? "–"}</span>
                        <span style={{ fontFamily: F.condensed, fontWeight: 600, fontSize: 17, color: "#F2F2F2" }}>{player.name}</span>
                        <span style={{ fontFamily: F.condensed, fontSize: 13, color: "#555" }}>{player.nationality}</span>
                        <span style={{ fontFamily: F.condensed, fontSize: 12, color: "#444", letterSpacing: "0.08em", textTransform: "uppercase", textAlign: "right" }}>{player.position}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        ) : (
          <div style={{ background: "#0D0D0D", border: "0.5px solid #1F1F1F", padding: "64px 40px", textAlign: "center" }}>
            <p style={{ fontFamily: F.display, fontSize: 40, color: "#1F1F1F", marginBottom: 12 }}>SQUAD PENDING</p>
            <p style={{ fontFamily: F.condensed, fontSize: 15, color: "#444" }}>Squad information will be updated ahead of the tournament.</p>
          </div>
        )}
      </div>
    </div>
  );
}
