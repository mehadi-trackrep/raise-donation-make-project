"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project, ProjectCategory } from "@/types/project";
import { ProjectCard } from "./ProjectCard";
import { staggerContainerFast } from "@/lib/animations";
import { categoryLabels } from "@/data/projects";
import { cn } from "@/lib/utils";

interface ProjectGridProps {
  projects: Project[];
}

const categories = ["all", "food-bank", "education", "medical", "shelter", "orphan-support", "solar-setup"] as const;

export function ProjectGrid({ projects }: ProjectGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filtered =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition-all",
              activeCategory === cat
                ? "bg-emerald-700 text-white shadow-md"
                : "border border-gray-200 bg-white text-gray-600 hover:border-emerald-300 hover:text-emerald-700"
            )}
          >
            {categoryLabels[cat] || cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        variants={staggerContainerFast}
        initial="hidden"
        animate="visible"
        className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-gray-400">
          No projects found in this category yet.
        </p>
      )}
    </div>
  );
}
