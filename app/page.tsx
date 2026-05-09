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

      {/* Visual Break / Editorial Quote */}
      <section className="py-48 bg-black border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <blockquote className="font-bebas text-[48px] md:text-[80px] text-white leading-[0.9] max-w-5xl mx-auto uppercase">
            "Three Nations. One Dream. The Greatest Show on Earth Returns to North America."
          </blockquote>
        </div>
      </section>
    </div>
  );
}
