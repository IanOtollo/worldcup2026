"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const STATS = [
  { value: 48, label: "Nations" },
  { value: 104, label: "Matches" },
  { value: 16, label: "Cities" },
  { value: 3, label: "Host Nations" },
];

function useCountUp(target: number, active: boolean, duration = 1200) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const id = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [active, target, duration]);
  return count;
}

function StatBlock({ value, label, active }: { value: number; label: string; active: boolean }) {
  const count = useCountUp(value, active);
  return (
    <div
      className="flex flex-col items-center justify-center py-14 px-8 text-center"
      style={{ borderRight: "0.5px solid #1F1F1F" }}
    >
      <span
        style={{
          fontFamily: "var(--font-dm-mono), monospace",
          fontSize: "clamp(40px,5vw,56px)",
          fontWeight: 500,
          color: "#F2F2F2",
          lineHeight: 1,
          fontVariantNumeric: "tabular-nums",
        }}
      >
        {String(count).padStart(2, "0")}
      </span>
      <span
        className="mt-3"
        style={{
          fontFamily: "var(--font-barlow-condensed), sans-serif",
          fontSize: "13px",
          fontWeight: 400,
          color: "#555555",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}

export default function TournamentStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setActive(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        background: "#0A0A0A",
        borderTop: "0.5px solid #1A1A1A",
        borderBottom: "0.5px solid #1A1A1A",
      }}
    >
      <div
        className="grid grid-cols-2 md:grid-cols-4"
        style={{ borderLeft: "0.5px solid #1F1F1F" }}
      >
        {STATS.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <StatBlock value={s.value} label={s.label} active={active} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
