import Link from "next/link";

const F = {
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
};

const COL1 = [
  { name: "Fixtures", href: "/fixtures" },
  { name: "Live Scores", href: "/live" },
  { name: "Groups", href: "/groups" },
  { name: "Bracket", href: "/bracket" },
  { name: "Scorers", href: "/scorers" },
];

const COL2 = [
  { name: "All 48 Teams", href: "/teams" },
  { name: "Venue Guide", href: "/venues" },
  { name: "Host Cities", href: "/cities" },
  { name: "Tickets", href: "/tickets" },
];

const COL3 = [
  { name: "Tournament Format", href: "/format" },
  { name: "History Archive", href: "/history" },
  { name: "WC Anthems", href: "/anthems" },
  { name: "News", href: "/news" },
];

const LABEL_STYLE = {
  fontFamily: F.condensed,
  fontWeight: 500,
  fontSize: "11px",
  letterSpacing: "0.2em",
  color: "#444444",
  textTransform: "uppercase" as const,
  marginBottom: "20px",
  display: "block",
};

const LINK_STYLE = {
  fontFamily: F.condensed,
  fontSize: "14px",
  color: "#555555",
  letterSpacing: "0.04em",
  display: "block",
  marginBottom: "12px",
  transition: "color 0.15s",
  textDecoration: "none",
};

function FooterColumn({ label, links }: { label: string; links: { name: string; href: string }[] }) {
  return (
    <div>
      <span style={LABEL_STYLE}>{label}</span>
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="text-hover-white"
          style={LINK_STYLE}
        >
          {l.name}
        </Link>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer style={{ background: "#030803", borderTop: "0.5px solid #1A1A1A" }}>
      <div className="max-w-[1440px] mx-auto px-6 pt-16 pb-8">
        {/* 4-column grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
          <FooterColumn label="Tournament" links={COL1} />
          <FooterColumn label="Teams & Venues" links={COL2} />
          <FooterColumn label="More" links={COL3} />

          {/* Built by IOMTechs */}
          <div>
            <span style={LABEL_STYLE}>Built by IOMTechs</span>
            <p style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 16, color: "#F2F2F2", marginBottom: 8 }}>
              IOMTechs
            </p>
            <p style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: 13, color: "#555555", marginBottom: 12, lineHeight: 1.6 }}>
              Software at the scale of empires.
            </p>
            <a
              href="https://iomtechs.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-hover-red"
              style={{ fontFamily: F.condensed, fontSize: 13, color: "#555555", transition: "color 0.15s", textDecoration: "none" }}
            >
              iomtechs.vercel.app
            </a>
            <p style={{ fontFamily: F.condensed, fontSize: 12, color: "#333", marginTop: 12 }}>
              Data: football-data.org
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{ borderTop: "0.5px solid #1A1A1A", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}
        >
          <span style={{ fontFamily: F.condensed, fontWeight: 600, fontSize: 12, letterSpacing: "0.15em", color: "#333333", textTransform: "uppercase" }}>
            FIFA WORLD CUP 2026 — THE GREATEST SHOW ON EARTH
          </span>
          <span style={{ fontFamily: F.condensed, fontSize: 12, color: "#333333" }}>
            © 2026 IOMTechs
          </span>
        </div>
      </div>
    </footer>
  );
}
