import { history } from "@/lib/data/history";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "World Cup History — FIFA World Cup 2026",
  description: "Complete history of the FIFA World Cup from 1930 to 2022.",
};

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
  body: "var(--font-barlow), sans-serif",
};

const RECORDS = [
  { label: "Most WC Titles", value: "Brazil", sub: "5 Championships" },
  { label: "Most WC Goals", value: "16", sub: "Miroslav Klose" },
  { label: "Most Appearances", value: "25", sub: "Lothar Matthäus" },
  { label: "Youngest Scorer", value: "17y 239d", sub: "Pelé — 1958" },
  { label: "Highest Scoring Match", value: "7–5", sub: "Austria v Switzerland 1954" },
  { label: "Biggest Crowd", value: "199,854", sub: "Maracanã 1950" },
];

export default function HistoryPage() {
  return (
    <div style={{ background: "#050A05", minHeight: "100vh" }}>
      {/* Header */}
      <div className="relative" style={{ padding: "80px 0 48px", borderBottom: "0.5px solid #1F1F1F", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-5%", top: "-10%", width: "400px", height: "400px", opacity: 0.1, zIndex: 0 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/soccer_ball_grass.png" alt="" className="w-full h-full object-contain" />
        </div>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 70% 80% at 10% 60%, rgba(0,140,50,0.14) 0%, transparent 65%)" }} />
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(48px,8vw,96px)", color: "#F2F2F2", lineHeight: 0.85, marginBottom: 16 }}>
            The History of the World Cup
          </h1>
          <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            1930 — 2022 · 22 Tournaments · 80 Nations
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16">

        {/* Vertical timeline */}
        <div className="relative" style={{ paddingLeft: "1px" }}>
          {/* Central line */}
          <div
            className="hidden md:block absolute"
            style={{ left: "50%", top: 0, bottom: 0, width: "1px", background: "#1A1A1A", transform: "translateX(-50%)" }}
          />

          {[...history].reverse().map((t, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={t.year}
                className="relative grid md:grid-cols-2 gap-8 mb-16 items-center"
              >
                {/* Left side */}
                <div className={isLeft ? "md:text-right md:pr-12" : "md:col-start-2 md:pl-12"}>
                  <span style={{ fontFamily: F.mono, fontSize: "clamp(48px,6vw,72px)", color: "#141414", lineHeight: 1, display: "block" }}>
                    {t.year}
                  </span>
                  <p style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: "clamp(22px,2.5vw,28px)", color: "#F2F2F2", letterSpacing: "0.03em", textTransform: "uppercase", marginTop: 4 }}>
                    {t.champion}
                  </p>
                  <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 4 }}>
                    Host: {t.host}
                  </p>
                </div>

                {/* Dot on timeline */}
                <div
                  className="hidden md:block absolute"
                  style={{ left: "50%", top: "50%", width: 12, height: 12, borderRadius: "50%", background: "#C9A84C", border: "3px solid #050A05", transform: "translate(-50%, -50%)", zIndex: 2 }}
                />

                {/* Right side — card */}
                <div className={isLeft ? "md:col-start-2 md:pl-12" : "md:col-start-1 md:row-start-1 md:pr-12"}>
                  <div
                    className="card-hover"
                    style={{ background: "#0D0D0D", border: "0.5px solid #1F1F1F", padding: "20px 24px", borderLeft: "3px solid #C9A84C" }}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <span style={{ fontFamily: F.mono, fontSize: 22, color: "#F2F2F2", fontWeight: 500 }}>{t.finalScore}</span>
                      <span style={{ fontFamily: F.condensed, fontSize: 11, color: "#444", letterSpacing: "0.12em", textTransform: "uppercase" }}>Final Score</span>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                      <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#666" }}>
                        Runner-up: <span style={{ color: "#AAA" }}>{t.runnerUp}</span>
                      </p>
                      <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#666" }}>
                        Top Scorer: <span style={{ color: "#AAA" }}>{t.topScorer} ({t.topScorerGoals} goals)</span>
                      </p>
                      <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#666" }}>
                        Venue: <span style={{ color: "#666" }}>{t.stadiumFinal}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Records */}
        <div style={{ marginTop: 80, paddingTop: 48, borderTop: "0.5px solid #1F1F1F" }}>
          <h2 style={{ fontFamily: F.display, fontSize: "clamp(48px,6vw,64px)", color: "#F2F2F2", lineHeight: 1, marginBottom: 40 }}>Records & Legends</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RECORDS.map((r) => (
              <div key={r.label} style={{ background: "#0D0D0D", border: "0.5px solid #1F1F1F", padding: "28px 24px" }}>
                <span style={{ fontFamily: F.condensed, fontSize: 11, color: "#444", letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: 12 }}>{r.label}</span>
                <span style={{ fontFamily: F.mono, fontSize: 32, color: "#C9A84C", fontWeight: 500, display: "block", lineHeight: 1, marginBottom: 8 }}>{r.value}</span>
                <span style={{ fontFamily: F.condensed, fontSize: 14, color: "#666" }}>{r.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
