import { venues } from "@/lib/data/venues";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface Props { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return venues.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const v = venues.find((v) => v.slug === slug);
  return {
    title: v ? `${v.name} — FIFA World Cup 2026` : "Venue — FIFA World Cup 2026",
    description: v?.description ?? "",
  };
}

const F = {
  display: "var(--font-bebas-neue), sans-serif",
  condensed: "var(--font-barlow-condensed), sans-serif",
  mono: "var(--font-dm-mono), monospace",
};

export default async function VenueDetailPage({ params }: Props) {
  const { slug } = await params;
  const venue = venues.find((v) => v.slug === slug);
  if (!venue) return notFound();

  const stats = [
    { label: "Capacity", value: venue.capacity.toLocaleString() },
    { label: "Surface", value: venue.surface },
    { label: "Opened", value: venue.opened.toString() },
    { label: "Location", value: venue.city },
  ];

  return (
    <div style={{ background: "#050A05", minHeight: "100vh" }}>
      {/* Hero image */}
      <div style={{ position: "relative", height: "50vh", minHeight: 400 }}>
        <Image src={venue.image} alt={venue.name} fill className="object-cover" unoptimized />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #050A05 0%, rgba(5,10,5,0.5) 40%, transparent 70%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 24px 40px" }}>
          <div className="max-w-[1440px] mx-auto">
            <h1 style={{ fontFamily: F.display, fontSize: "clamp(48px,8vw,80px)", color: "#F2F2F2", lineHeight: 0.9, marginBottom: 8 }}>{venue.name}</h1>
            <p style={{ fontFamily: F.condensed, fontSize: 14, color: "#888", letterSpacing: "0.1em", textTransform: "uppercase" }}>{venue.city}, {venue.state} · {venue.country}</p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 py-16">
        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 mb-16" style={{ border: "0.5px solid #1F1F1F" }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ padding: "28px 24px", background: "#0D0D0D", borderRight: i < 3 ? "0.5px solid #1F1F1F" : "none" }}>
              <span style={{ fontFamily: F.condensed, fontSize: 11, color: "#444", letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>{s.label}</span>
              <span style={{ fontFamily: F.mono, fontSize: 24, color: "#F2F2F2", fontWeight: 500 }}>{s.value}</span>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="grid md:grid-cols-3 gap-16">
          <div className="md:col-span-2">
            <h2 style={{ fontFamily: F.display, fontSize: 48, color: "#F2F2F2", marginBottom: 16, lineHeight: 1 }}>Overview</h2>
            <p style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: 18, color: "#888", lineHeight: 1.7 }}>
              {venue.description}
            </p>
          </div>
          <div style={{ background: "#0D0D0D", border: "0.5px solid #1F1F1F", padding: "24px", alignSelf: "start" }}>
            <span style={{ fontFamily: F.condensed, fontWeight: 700, fontSize: 11, color: "#444", letterSpacing: "0.15em", textTransform: "uppercase", display: "block", marginBottom: 16 }}>Tournament Role</span>
            <p style={{ fontFamily: "var(--font-barlow), sans-serif", fontSize: 14, color: "#666", lineHeight: 1.7 }}>
              This venue will host multiple FIFA World Cup 2026 matches, including key group stage fixtures. As one of the premier sporting arenas in North America, it offers a world-class experience for players and supporters alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
