"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Project } from "@/types/project";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { staggerContainer } from "@/lib/animations";

interface FeaturedProjectsProps {
  projects: Project[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  return (
    <section className="bg-gray-50/60 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Active Campaigns"
          title="Projects That Need Your Help"
          subtitle="Each project represents a real community need. Your donation has a direct, measurable impact on real lives."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 rounded-full border-2 border-emerald-700 px-7 py-3 text-sm font-bold text-emerald-700 transition-all hover:bg-emerald-700 hover:text-white"
          >
            View All Projects
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
}
