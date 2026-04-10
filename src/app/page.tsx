import { HeroSection } from "@/components/home/HeroSection";
import { LiveStatsBar } from "@/components/home/LiveStatsBar";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { HowItWorks } from "@/components/home/HowItWorks";
import { CallToAction } from "@/components/home/CallToAction";
import { getFeaturedProjects } from "@/data/projects";
import { getGlobalStats } from "@/data/stats";
// Revalidate every 5 minutes — update from Google Sheets
export const revalidate = 300;

export default async function HomePage() {
  const [featured, stats] = await Promise.all([
    getFeaturedProjects(),
    getGlobalStats(),
  ]);

  return (
    <>
      <HeroSection stats={stats} />
      <LiveStatsBar stats={stats} />
      <FeaturedProjects projects={featured} />
      <HowItWorks />
      <CallToAction />
    </>
  );
}
