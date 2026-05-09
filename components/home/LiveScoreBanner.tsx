"use client";

import { useEffect, useState } from "react";
import { Match } from "@/types/football";

export default function LiveScoreBanner() {
  const [liveMatches, setLiveMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLive = async () => {
      try {
        // Call the Next.js API route — avoids server-only fetch options in the browser
        const res = await fetch("/api/live-matches");
        const data: Match[] = await res.json();
        setLiveMatches(data);
      } catch {
        // Silently fail — banner degrades gracefully
      } finally {
        setLoading(false);
      }
    };

    fetchLive();
    const interval = setInterval(fetchLive, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return null;

  if (liveMatches.length === 0) {
    return (
      <div className="w-full h-14 bg-black border-y border-border flex items-center justify-center overflow-hidden">
        <p className="font-dm-mono text-[13px] text-text-secondary uppercase tracking-widest">
          NEXT MATCH IN 18 HOURS · MEXICO VS SOUTH AFRICA · 18:00 LOCAL
        </p>
      </div>
    );
  }

  return (
    <div className="w-full h-14 bg-black border-y border-border flex items-center relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 px-6 bg-black z-10 flex items-center gap-3 border-r border-border">
        <span className="w-2 h-2 rounded-full bg-fifa-red animate-pulse" />
        <span className="font-dm-mono text-[13px] font-bold text-fifa-red">LIVE</span>
      </div>

      <div className="flex items-center whitespace-nowrap animate-marquee pl-[100px]">
        {[...liveMatches, ...liveMatches, ...liveMatches].map((match, i) => (
          <div key={`${match.id}-${i}`} className="flex items-center px-12 border-r border-border h-full">
            <span className="font-barlow-condensed text-[16px] font-semibold text-white uppercase mr-4">
              {match.homeTeam.name}
            </span>
            <span className="font-dm-mono text-[20px] font-bold text-white bg-surface2 px-3 py-1 border border-border">
              {match.score.fullTime.home ?? 0} - {match.score.fullTime.away ?? 0}
            </span>
            <span className="font-barlow-condensed text-[16px] font-semibold text-white uppercase ml-4">
              {match.awayTeam.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
