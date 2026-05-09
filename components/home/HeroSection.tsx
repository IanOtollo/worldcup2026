"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const SLIDES = [
  "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=1920&q=80",
  "https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=1920&q=80",
  "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=1920&q=80",
  "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=1920&q=80",
  "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=1920&q=80",
  "https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=1920&q=80",
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setCurrent((p) => (p + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(advance, 5000);
    return () => clearInterval(id);
  }, [paused, advance]);

  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden"
      style={{ height: "100svh", minHeight: "700px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Layer 1: Base ── */}
      <div className="absolute inset-0" style={{ background: "#050A05" }} />

      {/* ── Layer 2: Green atmospheric glow ── */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 70% 90% at 10% 70%, rgba(0,140,50,0.5) 0%, transparent 65%)" }}
      />

      {/* ── Layer 3: Blue atmospheric glow ── */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 60% 80% at 90% 50%, rgba(0,40,160,0.45) 0%, transparent 65%)" }}
      />

      {/* ── Layer 4: Cycling images ── */}
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0"
          style={{
            opacity: i === current ? 0.18 : 0,
            transition: "opacity 1400ms ease-in-out",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt="" aria-hidden className="w-full h-full object-cover" />
        </div>
      ))}

      {/* ── Layer 5: Stadium silhouette ── */}
      <svg
        className="absolute bottom-0 left-0 w-full pointer-events-none"
        height="200"
        viewBox="0 0 1440 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0,200 L0,155 C80,153 200,138 380,120 C540,103 680,92 800,88 C920,92 1080,103 1240,120 C1380,138 1420,153 1440,155 L1440,200 Z"
          fill="#000000"
          fillOpacity="0.75"
        />
        <path
          d="M0,200 L0,170 C120,168 280,158 480,145 C640,133 740,127 800,126 C860,127 960,133 1120,145 C1280,158 1380,168 1440,170 L1440,200 Z"
          fill="#000000"
          fillOpacity="0.5"
        />
      </svg>

      {/* ── Layer 6: Bottom vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, #050A05 0%, rgba(5,10,5,0.2) 30%, transparent 55%)" }}
      />

      {/* ── Layer 7: Top vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 28%)" }}
      />

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6" style={{ paddingBottom: "160px" }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            letterSpacing: "0.3em",
            color: "#888888",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          FIFA WORLD CUP
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          style={{
            fontFamily: "var(--font-bebas-neue), sans-serif",
            fontSize: "clamp(120px, 18vw, 220px)",
            color: "#FFFFFF",
            lineHeight: "0.85",
            letterSpacing: "0.02em",
          }}
        >
          2026
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.16 }}
          style={{
            width: "200px",
            height: "1px",
            background: "rgba(255,255,255,0.15)",
            margin: "28px auto",
          }}
        />

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontWeight: 300,
            fontSize: "18px",
            letterSpacing: "0.15em",
            color: "#888888",
            textTransform: "uppercase",
          }}
        >
          USA · CANADA · MEXICO
        </motion.p>

        {/* Countdown imported from CountdownTimer */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14"
        >
          <HeroCountdown />
          <p
            className="mt-5"
            style={{
              fontFamily: "var(--font-dm-mono), monospace",
              fontSize: "13px",
              color: "#555555",
              letterSpacing: "0.1em",
            }}
          >
            11 JUNE — 19 JULY 2026
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.42 }}
          className="mt-12 flex items-center gap-3 flex-wrap justify-center"
        >
          <Link
            href="/fixtures"
            className="btn-sweep h-12 px-8 flex items-center text-white"
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              background: "#C8102E",
              borderRadius: "2px",
            }}
          >
            EXPLORE FIXTURES
          </Link>
          <Link
            href="/tickets"
            className="h-12 px-8 flex items-center text-white transition-colors duration-200"
            style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontWeight: 700,
              fontSize: "13px",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              border: "1px solid rgba(255,255,255,0.7)",
              borderRadius: "2px",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
          >
            GET TICKETS
          </Link>
        </motion.div>
      </div>

      {/* ── Slide indicators ── */}
      <div
        className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-2 z-20"
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              height: "6px",
              width: i === current ? "20px" : "6px",
              borderRadius: "3px",
              background: i === current ? "#C8102E" : "#333333",
              border: "none",
              cursor: "pointer",
              transition: "width 0.3s ease, background 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}

/* ── Inline countdown (avoids a separate client import issue in hero) ── */
function HeroCountdown() {
  const target = new Date("2026-06-11T00:00:00-05:00").getTime();
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setT({
        d: Math.floor(diff / 86400000),
        h: Math.floor((diff / 3600000) % 24),
        m: Math.floor((diff / 60000) % 60),
        s: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  const Block = ({ v, label }: { v: number; label: string }) => (
    <div className="flex flex-col items-center gap-2">
      <div
        style={{
          width: "100px",
          height: "88px",
          border: "0.5px solid rgba(255,255,255,0.15)",
          background: "rgba(0,0,0,0.3)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-dm-mono), monospace",
            fontWeight: 500,
            fontSize: "clamp(40px,6vw,72px)",
            color: "#FFFFFF",
            fontVariantNumeric: "tabular-nums",
          }}
        >
          {String(v).padStart(2, "0")}
        </span>
      </div>
      <span
        style={{
          fontFamily: "var(--font-barlow-condensed), sans-serif",
          fontWeight: 500,
          fontSize: "11px",
          color: "#555555",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex gap-4 md:gap-5">
      <Block v={t.d} label="Days" />
      <Block v={t.h} label="Hours" />
      <Block v={t.m} label="Mins" />
      <Block v={t.s} label="Secs" />
    </div>
  );
}
