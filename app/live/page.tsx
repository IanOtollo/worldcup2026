"use client";

import { useEffect, useState } from "react";
import { Match } from "@/types/football";
import MatchCard from "@/components/fixtures/MatchCard";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function LivePage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLive = async () => {
      try {
        const res = await fetch("/api/live-matches");
        const data: Match[] = await res.json();
        setMatches(data);
      } catch {
        // Silently degrade
      } finally {
        setLoading(false);
      }
    };

    fetchLive();
    const interval = setInterval(fetchLive, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <header className="mb-24 flex items-center justify-between">
          <div>
            <h1 className="font-bebas text-[80px] text-white leading-none mb-4">Live Tracker</h1>
            <p className="label-meta">Real-time match data · Refreshes every 30 seconds</p>
          </div>
          {matches.length > 0 && (
            <div className="flex items-center gap-3 px-6 py-3 border border-fifa-red bg-fifa-red/10">
              <span className="w-2 h-2 rounded-full bg-fifa-red animate-pulse" />
              <span className="font-dm-mono text-[14px] font-bold text-fifa-red">LIVE NOW</span>
            </div>
          )}
        </header>

        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="editorial-border p-24 flex flex-col items-center text-center bg-surface"
            >
              <p className="font-dm-mono text-[14px] text-text-muted uppercase tracking-widest">Checking for live matches...</p>
            </motion.div>
          ) : matches.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid gap-px bg-border border border-border"
            >
              {matches.map((match) => (
                <MatchCard key={match.id} match={match} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="editorial-border p-24 flex flex-col items-center text-center bg-surface"
            >
              <div className="font-dm-mono text-[48px] text-text-muted mb-8 tracking-tighter">--:--</div>
              <h2 className="font-bebas text-[48px] text-white mb-4">No Matches Currently Live</h2>
              <p className="font-barlow text-text-secondary max-w-md mx-auto mb-12">
                The tournament is between matches. Check the full schedule for upcoming kickoff times.
              </p>
              <Link
                href="/fixtures"
                className="h-12 px-10 bg-white text-black font-barlow-condensed font-bold text-[14px] uppercase tracking-[0.1em] flex items-center justify-center hover:bg-fifa-red hover:text-white transition-all"
              >
                View Full Schedule
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
