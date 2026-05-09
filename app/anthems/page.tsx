import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Anthems — FIFA World Cup 2026",
  description: "Every official FIFA World Cup anthem from 1990 to 2026.",
};

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
};

const ANTHEMS = [
  { year: 2022, title: "Tukoh Taka", artist: "Nicki Minaj, Maluma, Myriam Fares", id: "S-bAHiYzZZc", host: "Qatar" },
  { year: 2018, title: "Live It Up", artist: "Nicky Jam, Will Smith, Era Istrefi", id: "eTH-CbDYzTk", host: "Russia" },
  { year: 2014, title: "We Are One (Ole Ola)", artist: "Pitbull ft. Jennifer Lopez", id: "lRxYjBMLLKE", host: "Brazil" },
  { year: 2010, title: "Waka Waka (This Time for Africa)", artist: "Shakira", id: "pRpeEdMmmQ0", host: "South Africa" },
  { year: 2006, title: "Time of Our Lives", artist: "Toni Braxton & Il Divo", id: "mT-4PiMfyCI", host: "Germany" },
  { year: 2002, title: "Anthem", artist: "Vangelis", id: "dMHHKbVSGFg", host: "South Korea / Japan" },
  { year: 1998, title: "La Copa de la Vida", artist: "Ricky Martin", id: "sp_96SKCY6A", host: "France" },
  { year: 1994, title: "Gloryland", artist: "Daryl Hall & Sounds of Blackness", id: "xvv7FQHJ-Ag", host: "USA" },
  { year: 1990, title: "Un Estate Italiana", artist: "Gianna Nannini & Edoardo Bennato", id: "v4sHCRaBcIQ", host: "Italy" },
];

export default function AnthemsPage() {
  return (
    <div style={{ background: "#050A05", minHeight: "100vh" }}>
      {/* Header */}
      <div className="relative" style={{ padding: "80px 0 48px", borderBottom: "0.5px solid #1F1F1F" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 15% 50%, rgba(0,140,50,0.12) 0%, transparent 65%)" }} />
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(64px,10vw,96px)", color: "#F2F2F2", lineHeight: 0.85, marginBottom: 16 }}>
            The Sound of Football
          </h1>
          <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Every Official FIFA World Cup Anthem — 1990 to 2026
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ANTHEMS.map((anthem) => (
            <a
              key={anthem.id}
              href={`https://www.youtube.com/watch?v=${anthem.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group block card-hover"
              style={{ background: "#0D0D0D", border: "0.5px solid #1F1F1F", transition: "border-color 0.15s", textDecoration: "none", overflow: "hidden", borderRadius: "2px", position: "relative" }}
            >
              {/* Thumbnail */}
              <div className="img-hover-scale" style={{ position: "relative", aspectRatio: "16/9", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${anthem.id}/0.jpg`}
                  alt={anthem.title}
                  className="img-scale"
                  referrerPolicy="no-referrer"
                  style={{ width: "100%", height: "100%", objectFit: "cover", background: "#111" }}
                />
                {/* Gradient overlay */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 55%)", pointerEvents: "none" }} />

                {/* Year pill */}
                <span style={{ position: "absolute", top: 12, left: 12, fontFamily: F.mono, fontSize: 12, color: "#FFF", background: "#C8102E", padding: "3px 8px", letterSpacing: "0.05em" }}>
                  {anthem.year}
                </span>

                {/* Host — top right */}
                <span style={{ position: "absolute", top: 12, right: 12, fontFamily: F.condensed, fontSize: 11, color: "rgba(255,255,255,0.6)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                  {anthem.host}
                </span>

                {/* Artist + title over thumbnail */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px 16px" }}>
                  <p style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 16, color: "#F2F2F2", marginBottom: 2, textTransform: "uppercase" }}>{anthem.artist}</p>
                  <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#AAA", fontStyle: "italic" }}>"{anthem.title}"</p>
                </div>

                {/* Hover watch button */}
                <div
                  style={{
                    position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(0,0,0,0.0)", transition: "background 0.2s",
                    pointerEvents: "none",
                  }}
                  className="group-hover:bg-black/30"
                >
                  <span
                    style={{
                      fontFamily: F.condensed, fontWeight: 600, fontSize: 12, letterSpacing: "0.15em", color: "#FFF",
                      border: "1px solid rgba(255,255,255,0.8)", padding: "8px 20px", textTransform: "uppercase",
                      opacity: 0, transition: "opacity 0.2s",
                    }}
                    className="group-hover:opacity-100"
                  >
                    WATCH ON YOUTUBE
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
