import { GlobalStats } from "@/types/stats";
import { fetchStats } from "@/lib/googleSheets";

const fallbackStats: GlobalStats = {
  totalRaised: 156050,
  currency: "BDT",
  totalDonors: 1607,
  activeProjects: 5,
  completedProjects: 3,
  countriesReached: 12,
};

export async function getGlobalStats(): Promise<GlobalStats> {
  const sheetStats = await fetchStats();
  return sheetStats ?? fallbackStats;
}
