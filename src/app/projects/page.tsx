import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectGrid } from "@/components/projects/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata = {
  title: "All Projects — HopeRaise",
  description: "Browse all active welfare projects and fund the cause that matters most to you.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-24 pb-24">
      {/* Page hero */}
      <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 py-20 text-center">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-emerald-300">
          Active Campaigns
        </p>
        <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
          All Welfare Projects
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-emerald-200">
          Every project here represents a real community in need. Browse, explore, and donate
          directly via bank transfer — 100% of your contribution reaches the cause.
        </p>
      </div>

      {/* Projects grid */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ProjectGrid projects={projects} />
      </div>
    </div>
  );
}
