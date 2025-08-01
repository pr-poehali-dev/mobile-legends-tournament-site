import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LeaguesSection from "@/components/LeaguesSection";
import TournamentsSection from "@/components/TournamentsSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-mlDark via-black to-mlBlack">
      <Header />
      <HeroSection />
      <div id="leagues">
        <LeaguesSection />
      </div>
      <div id="tournaments">
        <TournamentsSection />
      </div>
      <div id="matches">
        {/* Matches are handled within TournamentsSection tabs */}
      </div>
      <Footer />
    </div>
  );
}