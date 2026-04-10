import { HeroSection } from "@/components/home/HeroSection";
import { LiveStatsBar } from "@/components/home/LiveStatsBar";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CallToAction } from "@/components/home/CallToAction";
import { getFeaturedProjects } from "@/data/projects";
import { globalStats } from "@/data/stats";

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      <HeroSection />
      <LiveStatsBar stats={globalStats} />
      <FeaturedProjects projects={featured} />
      <HowItWorks />
      <CallToAction />
    </>
  );
}
