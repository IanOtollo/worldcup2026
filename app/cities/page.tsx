import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Host Cities — FIFA World Cup 2026",
  description: "The 16 host cities across USA, Canada, and Mexico for the FIFA World Cup 2026.",
};

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
  body: "var(--font-barlow), sans-serif",
};

const CITIES = [
  { name: "New York / New Jersey", country: "USA", stadium: "MetLife Stadium", matches: 8, timezone: "EST (UTC-5)" },
  { name: "Los Angeles", country: "USA", stadium: "SoFi Stadium + Rose Bowl", matches: 8, timezone: "PST (UTC-8)" },
  { name: "Dallas", country: "USA", stadium: "AT&T Stadium", matches: 6, timezone: "CST (UTC-6)" },
  { name: "San Francisco Bay Area", country: "USA", stadium: "Levi's Stadium", matches: 6, timezone: "PST (UTC-8)" },
  { name: "Atlanta", country: "USA", stadium: "Mercedes-Benz Stadium", matches: 6, timezone: "EST (UTC-5)" },
  { name: "Miami", country: "USA", stadium: "Hard Rock Stadium", matches: 6, timezone: "EST (UTC-5)" },
  { name: "Boston", country: "USA", stadium: "Gillette Stadium", matches: 5, timezone: "EST (UTC-5)" },
  { name: "Philadelphia", country: "USA", stadium: "Lincoln Financial Field", matches: 5, timezone: "EST (UTC-5)" },
  { name: "Kansas City", country: "USA", stadium: "Arrowhead Stadium", matches: 5, timezone: "CST (UTC-6)" },
  { name: "Seattle", country: "USA", stadium: "Lumen Field", matches: 5, timezone: "PST (UTC-8)" },
  { name: "Austin", country: "USA", stadium: "Q2 Stadium", matches: 4, timezone: "CST (UTC-6)" },
  { name: "Mexico City", country: "Mexico", stadium: "Estadio Azteca", matches: 5, timezone: "CST (UTC-6)" },
  { name: "Guadalajara", country: "Mexico", stadium: "Estadio Akron", matches: 4, timezone: "CST (UTC-6)" },
  { name: "Monterrey", country: "Mexico", stadium: "Estadio BBVA", matches: 4, timezone: "CST (UTC-6)" },
  { name: "Toronto", country: "Canada", stadium: "BMO Field", matches: 5, timezone: "EST (UTC-5)" },
  { name: "Vancouver", country: "Canada", stadium: "BC Place", matches: 5, timezone: "PST (UTC-8)" },
];

const NATION_ORDER = ["USA", "Mexico", "Canada"];

export default function CitiesPage() {
  return (
    <div style={{ background: "#050A05", minHeight: "100vh" }}>
      {/* Header */}
      <div className="relative" style={{ padding: "80px 0 48px", borderBottom: "0.5px solid #1F1F1F" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 85% 40%, rgba(0,40,160,0.12) 0%, transparent 65%)" }} />
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(64px,10vw,96px)", color: "#F2F2F2", lineHeight: 0.85, marginBottom: 16 }}>16 Host Cities</h1>
          <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            USA · Canada · Mexico — The Continent of Football
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16">
        {NATION_ORDER.map((nation) => {
          const cities = CITIES.filter((c) => c.country === nation);
          return (
            <section key={nation} className="mb-20">
              <div style={{ paddingTop: 24, borderTop: "0.5px solid #1F1F1F", marginBottom: 24, display: "flex", alignItems: "center", gap: 20 }}>
                <h2 style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 14, letterSpacing: "0.2em", color: "#C8102E", textTransform: "uppercase" }}>
                  {nation === "USA" ? "United States" : nation}
                </h2>
                <span style={{ fontFamily: F.condensed, fontSize: 12, color: "#333", letterSpacing: "0.1em" }}>
                  {cities.length} CITIES
                </span>
              </div>
              <div style={{ border: "0.5px solid #1F1F1F" }}>
                {cities.map((city, i) => (
                  <div
                    key={city.name}
                    className="row-hover"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 200px 160px 120px",
                      alignItems: "center",
                      padding: "20px 24px",
                      borderBottom: i < cities.length - 1 ? "0.5px solid #141414" : "none",
                      background: "transparent",
                      transition: "background 0.15s",
                      cursor: "default",
                    }}
                  >
                    <div>
                      <p style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 20, color: "#F2F2F2", letterSpacing: "0.02em" }}>{city.name}</p>
                      <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.08em", marginTop: 2 }}>{city.stadium}</p>
                    </div>
                    <span style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.08em", textTransform: "uppercase" }}>{city.timezone}</span>
                    <div>
                      <span style={{ fontFamily: F.condensed, fontSize: 11, color: "#444", letterSpacing: "0.12em", textTransform: "uppercase", display: "block" }}>Matches</span>
                      <span style={{ fontFamily: F.mono, fontSize: 18, color: "#F2F2F2", fontWeight: 500 }}>{city.matches}</span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
