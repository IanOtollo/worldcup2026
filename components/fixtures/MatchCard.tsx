import { Match } from "@/types/football";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface Props {
  match: Match;
}

export default function MatchCard({ match }: Props) {
  const isLive = ["IN_PLAY", "PAUSED"].includes(match.status);
  const isFinished = match.status === "FINISHED";

  const homeWinner = match.score.winner === "HOME_TEAM";
  const awayWinner = match.score.winner === "AWAY_TEAM";

  const homeCrest = match.homeTeam.crest || null;
  const awayCrest = match.awayTeam.crest || null;

  return (
    <div
      className={cn(
        "editorial-border p-6 md:p-8 hover:bg-surface3 transition-colors group",
        isLive && "border-fifa-red/50 bg-fifa-red/[0.02]"
      )}
    >
      <div className="flex items-center justify-between gap-4">
        {/* Home Team */}
        <div className="flex items-center gap-4 flex-1">
          {homeCrest && (
            <div className="w-8 h-6 relative border border-border shrink-0">
              <Image src={homeCrest} alt="" fill className="object-contain" />
            </div>
          )}
          <span
            className={cn(
              "font-barlow-condensed text-[18px] md:text-[22px] font-semibold uppercase",
              isFinished && !homeWinner && "text-text-muted"
            )}
          >
            {match.homeTeam.name}
          </span>
        </div>

        {/* Score / Status */}
        <div className="flex flex-col items-center min-w-[80px]">
          <span
            className={cn(
              "font-dm-mono text-[24px] md:text-[32px] font-bold tabular-nums",
              isLive ? "text-fifa-red" : "text-white"
            )}
          >
            {isFinished || isLive
              ? `${match.score.fullTime.home ?? 0} - ${match.score.fullTime.away ?? 0}`
              : new Date(match.utcDate).toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
          </span>
          {isLive && (
            <span className="font-dm-mono text-[11px] text-fifa-red font-bold animate-pulse uppercase tracking-widest mt-1">
              LIVE
            </span>
          )}
        </div>

        {/* Away Team */}
        <div className="flex items-center gap-4 flex-1 justify-end">
          <span
            className={cn(
              "font-barlow-condensed text-[18px] md:text-[22px] font-semibold uppercase text-right",
              isFinished && !awayWinner && "text-text-muted"
            )}
          >
            {match.awayTeam.name}
          </span>
          {awayCrest && (
            <div className="w-8 h-6 relative border border-border shrink-0">
              <Image src={awayCrest} alt="" fill className="object-contain" />
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-border/50 flex justify-between items-center">
        <span className="label-meta text-[10px]">
          {match.homeTeam.venue || "Venue TBC"} · {match.group || match.stage}
        </span>
        {isFinished && (
          <span className="font-barlow-condensed text-[11px] font-bold text-text-muted uppercase tracking-widest">
            FINAL
          </span>
        )}
      </div>
    </div>
  );
}
