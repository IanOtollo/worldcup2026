import HeroSection from "@/components/home/HeroSection";
import LiveScoreBanner from "@/components/home/LiveScoreBanner";
import TournamentStats from "@/components/home/TournamentStats";
import NextMatchCard from "@/components/home/NextMatchCard";
import GroupsPreview from "@/components/home/GroupsPreview";
import TopScorersPreview from "@/components/home/TopScorersPreview";
import VenueShowcase from "@/components/home/VenueShowcase";
import { getFixtures, getStandings, getScorers } from "@/lib/api/football";

export default async function Home() {
  // Fetch data for home page sections
  const [fixtures, standings, scorers] = await Promise.all([
    getFixtures({ status: "SCHEDULED" }),
    getStandings(),
    getScorers(8)
  ]);

  const nextMatch = fixtures?.[0] || null;

  return (
    <div className="flex flex-col">
      <HeroSection />
      <LiveScoreBanner />
      <TournamentStats />
      
      {nextMatch && <NextMatchCard match={nextMatch} />}
      
      <GroupsPreview standings={standings} />
      <TopScorersPreview scorers={scorers} />
      <VenueShowcase />

    </div>
  );
}
