import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Tickets — FIFA World Cup 2026",
  description: "Official FIFA World Cup 2026 ticket information and purchasing guide.",
};

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
  body: "var(--font-barlow), sans-serif",
};

const CATEGORIES = [
  {
    cat: "CAT 1",
    name: "Premium",
    price: "500",
    features: ["Best sideline seats", "Priority stadium entry", "Hospitality access", "Premium matchday experience"],
  },
  {
    cat: "CAT 2",
    name: "Standard Plus",
    price: "250",
    features: ["Excellent corner & goal views", "Standard entry", "Great atmosphere sections", "All ages welcome"],
  },
  {
    cat: "CAT 3",
    name: "Standard",
    price: "120",
    features: ["General seating throughout", "Upper & lower bowl", "Full match access", "Standard facilities"],
  },
  {
    cat: "CAT 4",
    name: "Host Nation",
    price: "60",
    features: ["Residents of USA/Canada/Mexico", "Proof of residence required", "Limited allocation", "Apply via FIFA portal"],
  },
];

const STEPS = [
  { n: "01", title: "Register", body: "Create your account on the official FIFA ticketing platform at tickets.fifa.com." },
  { n: "02", title: "Select", body: "Browse available matches by city, group, or team. Choose your seating category." },
  { n: "03", title: "Purchase", body: "Complete your purchase securely. Tickets are delivered digitally to your FIFA account." },
];

export default function TicketsPage() {
  return (
    <div style={{ background: "#050A05", minHeight: "100vh" }}>
      {/* Header */}
      <div className="relative" style={{ padding: "80px 0 48px", borderBottom: "0.5px solid #1F1F1F" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 80% at 90% 50%, rgba(0,40,160,0.12) 0%, transparent 65%)" }} />
        <div className="max-w-[1440px] mx-auto px-6 relative z-10">
          <h1 style={{ fontFamily: F.display, fontSize: "clamp(64px,10vw,96px)", color: "#F2F2F2", lineHeight: 0.85, marginBottom: 16 }}>Get Your Tickets</h1>
          <p style={{ fontFamily: F.condensed, fontSize: 13, color: "#555", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            Official FIFA World Cup 2026 Ticketing
          </p>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16">
        {/* Important notice */}
        <div style={{ background: "#0D0D0D", borderLeft: "3px solid #C9A84C", padding: "20px 24px", marginBottom: 48 }}>
          <p style={{ fontFamily: F.body, fontSize: 14, color: "#AAA", lineHeight: 1.7 }}>
            All tickets are sold exclusively through FIFA&apos;s official ticketing portal. This page provides guidance and pricing information and directs you to complete your purchase securely.
          </p>
        </div>

        {/* Ticket categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {CATEGORIES.map((c) => (
            <div key={c.cat} style={{ background: "#0D0D0D", border: "0.5px solid #1F1F1F", padding: "28px 24px", display: "flex", flexDirection: "column" }}>
              <span style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 11, letterSpacing: "0.2em", color: "#555", textTransform: "uppercase", display: "block", marginBottom: 8 }}>{c.cat}</span>
              <span style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 20, color: "#F2F2F2", display: "block", marginBottom: 20 }}>{c.name}</span>
              <div style={{ marginBottom: 24 }}>
                <span style={{ fontFamily: F.mono, fontSize: 36, color: "#F2F2F2", fontWeight: 500, lineHeight: 1 }}>FROM ${c.price}</span>
                <span style={{ fontFamily: F.condensed, fontSize: 11, color: "#444", marginLeft: 6, letterSpacing: "0.1em" }}>USD</span>
              </div>
              <ul style={{ flex: 1, marginBottom: 24, borderLeft: "0.5px solid #1F1F1F", paddingLeft: 16 }}>
                {c.features.map((f) => (
                  <li key={f} style={{ fontFamily: F.body, fontSize: 14, color: "#666", marginBottom: 8, lineHeight: 1.5 }}>{f}</li>
                ))}
              </ul>
              <a
                href="https://tickets.fifa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hover-darkred"
                style={{
                  display: "block", textAlign: "center", padding: "12px 0",
                  background: "#C8102E", color: "#FFF",
                  fontFamily: F.condensed, fontWeight: 700, fontSize: 13, letterSpacing: "0.12em", textTransform: "uppercase",
                  textDecoration: "none", borderRadius: "2px", transition: "background 0.2s",
                }}
              >
                Purchase {c.cat} →
              </a>
            </div>
          ))}
        </div>

        {/* How to buy */}
        <div style={{ marginBottom: 0 }}>
          <h2 style={{ fontFamily: F.display, fontSize: "clamp(40px,5vw,56px)", color: "#F2F2F2", lineHeight: 1, marginBottom: 40, paddingTop: 40, borderTop: "0.5px solid #1F1F1F" }}>
            How to Buy
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {STEPS.map((s) => (
              <div key={s.n} style={{ background: "#0D0D0D", border: "0.5px solid #1F1F1F", padding: "28px 24px" }}>
                <span style={{ fontFamily: F.mono, fontSize: 56, color: "#1A1A1A", fontWeight: 500, display: "block", lineHeight: 1, marginBottom: 16 }}>{s.n}</span>
                <p style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 20, color: "#F2F2F2", marginBottom: 12, textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.title}</p>
                <p style={{ fontFamily: F.body, fontSize: 14, color: "#666", lineHeight: 1.7 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
