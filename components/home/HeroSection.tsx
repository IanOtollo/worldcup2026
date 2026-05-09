"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SLIDES = [
  { src: "/assets/hero_worldcup_2026.png", venue: "Official Tournament Identity" },
  { src: "/assets/stadium_composite_all_three.png", venue: "United 2026 Host Nations" },
  { src: "/assets/att-stadium.jpg", venue: "AT&T Stadium · Arlington" },
  { src: "/assets/mercedes-benz-stadium.jpg", venue: "Mercedes-Benz Stadium · Atlanta" },
  { src: "/assets/stadium_usa.png", venue: "Host City · Los Angeles" },
  { src: "/assets/stadium_mexico.png", venue: "Estadio Azteca · Mexico City" },
  { src: "/assets/stadium_canada.png", venue: "BC Place · Vancouver" },
  { src: "/assets/stadium_night_lights.png", venue: "Toronto · BMO Field" },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const advance = useCallback(() => {
    setCurrent((p) => (p + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(advance, 2500);
    return () => clearInterval(id);
  }, [paused, advance]);

  return (
    <section
      className="relative w-full flex justify-center overflow-hidden"
      style={{ height: "100svh", minHeight: "750px" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Layer 1: Base ── */}
      <div className="absolute inset-0" style={{ background: "#020402" }} />

      {/* ── Layer 2: Searchlight Effect ── */}
      <motion.div
        animate={{
          x: ["-20%", "20%", "-20%"],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 50% 100% at 50% 0%, rgba(0,140,50,0.25) 0%, transparent 80%)",
          filter: "blur(60px)",
        }}
      />

      {/* ── Layer 3: Dynamic Background Images ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={SLIDES[current].src}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.7, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.0, ease: [0.4, 0, 0.2, 1] }}
          className="absolute inset-0"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={SLIDES[current].src} alt="" aria-hidden className="w-full h-full object-cover" />
        </motion.div>
      </AnimatePresence>

      {/* ── Layer 4: Atmosphere ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,0.2) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to top, #050A05 0%, transparent 35%)" }}
      />

      {/* ── Hero Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 w-full max-w-[1200px]" style={{ paddingTop: "120px" }}>
        
        {/* Cinematic Title: WORLD 2026 CUP */}
        <div className="relative mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <span style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(24px, 4vw, 48px)",
              color: "#FFF",
              letterSpacing: "0.6em",
              textTransform: "uppercase",
              marginBottom: "-12px",
              textShadow: "0 0 40px rgba(0,0,0,0.8), 0 4px 12px rgba(0,0,0,0.9)",
            }}>
              WORLD
            </span>
            <div className="relative">
              {/* Outline Layer */}
              <h1 style={{
                fontFamily: "var(--font-bebas-neue), sans-serif",
                fontSize: "clamp(120px, 18vw, 240px)",
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.3)",
                lineHeight: "0.8",
                letterSpacing: "-0.02em",
                position: "absolute",
                top: "-2px",
                left: 0,
                width: "100%",
              }}>
                2026
              </h1>
              {/* Solid Layer */}
              <h1 style={{
                fontFamily: "var(--font-bebas-neue), sans-serif",
                fontSize: "clamp(120px, 18vw, 240px)",
                color: "#FFFFFF",
                lineHeight: "0.8",
                letterSpacing: "-0.02em",
                position: "relative",
                zIndex: 1,
                textShadow: "0 0 60px rgba(0,0,0,1), 0 10px 40px rgba(0,0,0,1)",
              }}>
                2026
              </h1>
            </div>
            <span style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontWeight: 800,
              fontSize: "clamp(24px, 4vw, 48px)",
              color: "#C8102E",
              letterSpacing: "0.6em",
              textTransform: "uppercase",
              marginTop: "-12px",
              textShadow: "0 0 40px rgba(0,0,0,1), 0 4px 12px rgba(0,0,0,1)",
            }}>
              CUP
            </span>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{
            fontFamily: "var(--font-barlow-condensed), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(14px, 1.5vw, 18px)",
            letterSpacing: "0.5em",
            color: "#FFF",
            textTransform: "uppercase",
            marginBottom: "40px",
            opacity: 0.9,
            textShadow: "0 2px 12px rgba(0,0,0,1)",
          }}
        >
          USA · CANADA · MEXICO
        </motion.p>

        {/* Spaced Countdown */}
        <div className="flex gap-4 md:gap-8 mb-12">
          <HeroCountdown />
        </div>

        {/* Buttons - Angled Broadcast with Trophy Separator */}
        <div className="flex flex-col sm:flex-row items-center gap-0 mt-10">
          <Link
            href="/fixtures"
            className="group relative h-[64px] px-16 flex items-center justify-center transition-all duration-300 active:scale-95"
            style={{ 
              background: "linear-gradient(135deg, #C8102E 0%, #900A1E 100%)", 
              clipPath: "polygon(0 0, 100% 0, 88% 100%, 0 100%)",
              textDecoration: "none",
              boxShadow: "0 10px 40px rgba(0,0,0,0.4)",
              minWidth: "280px"
            }}
          >
            {/* Gold Highlight Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#FFD700]/40 to-transparent" />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
            
            <span style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontWeight: 800,
              fontSize: "16px",
              letterSpacing: "0.2em",
              color: "#FFF",
              textTransform: "uppercase",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
              position: "relative",
              zIndex: 10
            }}>
              EXPLORE SCHEDULE
            </span>
          </Link>

          {/* Trophy Separator */}
          <div className="relative z-20 mx-[-30px] hidden sm:block">
            <div className="relative w-[100px] h-[120px]">
              <Image 
                src="/assets/trophy_overhead.png"
                alt="World Cup Trophy"
                fill
                className="object-contain drop-shadow-[0_0_20px_rgba(255,215,0,0.3)]"
              />
            </div>
          </div>

          <Link
            href="/tickets"
            className="group relative h-[64px] px-16 flex items-center justify-center transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.03)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.15)",
              clipPath: "polygon(12% 0, 100% 0, 100% 100%, 0 100%)",
              textDecoration: "none",
              minWidth: "280px"
            }}
          >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <span style={{
              fontFamily: "var(--font-barlow-condensed), sans-serif",
              fontWeight: 700,
              fontSize: "16px",
              letterSpacing: "0.2em",
              color: "#FFF",
              textTransform: "uppercase",
              position: "relative",
              zIndex: 10
            }}>
              GET TICKETS
            </span>
          </Link>
        </div>
      </div>

      {/* ── Slide Progress Bar ── */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
        <motion.div
          key={current}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.5, ease: "linear" }}
          style={{ height: "100%", background: "#C8102E" }}
        />
      </div>
    </section>
  );
}

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
    <div className="flex flex-col items-center">
      <span style={{
        fontFamily: "var(--font-dm-mono), monospace",
        fontSize: "clamp(32px, 5vw, 64px)",
        fontWeight: 500,
        color: "#FFF",
        lineHeight: 1,
        marginBottom: 8,
      }}>
        {String(v).padStart(2, "0")}
      </span>
      <span style={{
        fontFamily: "var(--font-barlow-condensed), sans-serif",
        fontSize: "13px",
        color: "#888",
        fontWeight: 700,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        textShadow: "0 2px 4px rgba(0,0,0,0.5)",
      }}>
        {label}
      </span>
    </div>
  );

  return (
    <div className="flex items-center gap-8 md:gap-12">
      <Block v={t.d} label="Days" />
      <div className="w-px h-12 bg-white/10 hidden md:block" />
      <Block v={t.h} label="Hours" />
      <div className="w-px h-12 bg-white/10 hidden md:block" />
      <Block v={t.m} label="Mins" />
      <div className="w-px h-12 bg-white/10 hidden md:block" />
      <Block v={t.s} label="Secs" />
    </div>
  );
}
