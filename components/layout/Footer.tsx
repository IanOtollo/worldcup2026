import Link from "next/link";

const F = {
  condensed: "var(--font-barlow-condensed), sans-serif",
  bebas: "var(--font-bebas-neue), sans-serif",
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
  fontWeight: 700,
  fontSize: "14px",
  letterSpacing: "0.25em",
  color: "#555555",
  textTransform: "uppercase" as const,
  marginBottom: "32px",
  display: "block",
};

const LINK_STYLE = {
  fontFamily: F.condensed,
  fontSize: "18px",
  color: "#888888",
  letterSpacing: "0.05em",
  display: "block",
  marginBottom: "16px",
  transition: "all 0.2s",
  textDecoration: "none",
};

function FooterColumn({ label, links }: { label: string; links: { name: string; href: string }[] }) {
  return (
    <div style={{ minWidth: "200px" }}>
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
    <footer className="relative overflow-hidden" style={{ background: "#030603", color: "#F2F2F2" }}>
      {/* ── Layer 1: Majestic Trophy Watermark ── */}
      <div 
        className="absolute bottom-[-10%] left-[50%] translate-x-[-50%] w-[1000px] h-[1000px] pointer-events-none opacity-[0.05]"
        style={{
          background: "url('/assets/trophy_overhead.png') no-repeat center center",
          backgroundSize: "contain",
          filter: "grayscale(1)",
        }}
      />

      {/* ── Layer 2: Content ── */}
      <div className="relative z-10">
        
        {/* Section 1: Majestic Quote - High Spacing & Lenient Edges */}
        <div className="border-b border-white/5 py-48 md:py-64">
          <div className="max-w-[1200px] mx-auto px-12 md:px-24 text-center">
            <h2 style={{ 
              fontFamily: F.bebas, 
              fontSize: "clamp(64px, 10vw, 160px)", 
              lineHeight: "0.85",
              letterSpacing: "-0.01em",
              color: "#FFF",
              textTransform: "uppercase"
            }}>
              Three Nations. One Dream. <br />
              <span style={{ color: "#C8102E" }}>The Greatest Show on Earth</span>
            </h2>
          </div>
        </div>

        {/* Section 2: Links & Branding - High Spacing & Lenient Edges */}
        <div className="max-w-[1440px] mx-auto px-20 md:px-48 py-32 md:py-48">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start">
            
            {/* Branding Block */}
            <div className="lg:col-span-5">
              <div className="mb-16">
                <span style={{ ...LABEL_STYLE, color: "#C8102E" }}>Official Digital Hub</span>
                <p style={{ fontFamily: F.condensed, fontWeight: 900, fontSize: 48, letterSpacing: "0.05em", lineHeight: 1, marginBottom: 16 }}>
                  FIFA WORLD CUP <span style={{ color: "#C8102E" }}>2026</span>
                </p>
                <p style={{ 
                  fontFamily: "var(--font-barlow), sans-serif", 
                  fontSize: 18, 
                  color: "#666", 
                  maxWidth: "480px", 
                  lineHeight: 1.8,
                  textAlign: "justify" 
                }}>
                  Experience the largest sporting event in human history. 48 Nations. 16 Cities. 3 Host Countries. Witness football at the scale of empires.
                </p>
              </div>

              {/* Professional Social Icons (Official FIFA Channels) */}
              <div>
                <span style={LABEL_STYLE}>Follow the Tournament</span>
                <div className="flex gap-10">
                  <a href="https://www.instagram.com/fifaworldcup/" target="_blank" rel="noopener noreferrer" className="text-hover-red" style={{ color: "#555", transition: "color 0.2s" }} title="Official Instagram">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </a>
                  <a href="https://x.com/FIFAWorldCup" target="_blank" rel="noopener noreferrer" className="text-hover-red" style={{ color: "#555", transition: "color 0.2s" }} title="Official X (Twitter)">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                  </a>
                  <a href="https://www.facebook.com/fifaworldcup/" target="_blank" rel="noopener noreferrer" className="text-hover-red" style={{ color: "#555", transition: "color 0.2s" }} title="Official Facebook">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                  </a>
                  <a href="https://www.youtube.com/fifa" target="_blank" rel="noopener noreferrer" className="text-hover-red" style={{ color: "#555", transition: "color 0.2s" }} title="Official YouTube">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-16">
              <FooterColumn label="Tournament" links={COL1} />
              <FooterColumn label="Teams & Venues" links={COL2} />
              <FooterColumn label="More" links={COL3} />
            </div>
          </div>
        </div>

        {/* Section 3: Bottom Bar - Centered & Professional */}
        <div style={{ background: "rgba(0,0,0,0.5)", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
          <div className="max-w-[1440px] mx-auto px-20 md:px-48 py-16 flex flex-col items-center gap-10">
            
            {/* Legal Links */}
            <div className="flex gap-12">
              <Link href="/privacy" style={{ fontFamily: F.condensed, fontSize: 14, color: "#666", textDecoration: "none", letterSpacing: "0.15em" }}>PRIVACY POLICY</Link>
              <Link href="/terms" style={{ fontFamily: F.condensed, fontSize: 14, color: "#666", textDecoration: "none", letterSpacing: "0.15em" }}>TERMS OF SERVICE</Link>
            </div>

            {/* Copyright Line */}
            <div className="flex flex-col items-center gap-3">
              <p style={{ 
                fontFamily: F.condensed, 
                fontWeight: 800, 
                fontSize: 14, 
                color: "#444", 
                letterSpacing: "0.2em", 
                textTransform: "uppercase" 
              }}>
                © 2026 FIFA WORLD CUP · UNITED 2026 · <span style={{ color: "#666" }}>IOMTechs</span>
              </p>
              <p style={{ fontFamily: F.condensed, fontSize: 12, color: "#222", maxWidth: "600px", textAlign: "center" }}>
                This platform is a tribute to the beautiful game. All tournament data is provided for informational purposes.
              </p>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
