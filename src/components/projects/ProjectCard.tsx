"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, ArrowRight, Flame } from "lucide-react";
import { Project } from "@/types/project";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { formatCurrency, getProgressPercent } from "@/lib/utils";
import { categoryLabels } from "@/data/projects";
import { URGENCY_LABELS, URGENCY_COLORS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const percent = getProgressPercent(project.raisedAmount, project.goalAmount);

  return (
    <motion.article
      variants={fadeInUp}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 30 } }}
      className="group flex flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Urgency badge */}
        <div className="absolute right-3 top-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-bold text-white ${URGENCY_COLORS[project.urgency]}`}
          >
            {project.urgency === "high" && <Flame size={11} />}
            {URGENCY_LABELS[project.urgency]}
          </span>
        </div>

        {/* Category */}
        <div className="absolute bottom-3 left-3">
          <Badge
            category={project.category}
            label={categoryLabels[project.category]}
          />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-serif text-lg font-bold text-gray-900 transition-colors group-hover:text-emerald-700">
          {project.title}
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-gray-500 line-clamp-2">
          {project.tagline}
        </p>

        {/* Progress */}
        <div className="mt-5">
          <ProgressBar percent={percent} height="md" />
          <div className="mt-2 flex items-center justify-between text-sm">
            <div>
              <span className="font-bold text-gray-900">
                {formatCurrency(project.raisedAmount, project.currency)}
              </span>
              <span className="text-gray-400"> raised of </span>
              <span className="font-semibold text-gray-600">
                {formatCurrency(project.goalAmount, project.currency)}
              </span>
            </div>
          </div>
        </div>

        {/* Donors + CTA */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-sm text-gray-500">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-100">
              <Users size={13} className="text-gray-500" />
            </div>
            <span>
              <strong className="font-semibold text-gray-700">
                {project.donorCount.toLocaleString()}
              </strong>{" "}
              donors
            </span>
          </div>

          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-emerald-700 px-4 py-2 text-xs font-bold text-white transition-all hover:bg-emerald-800 hover:gap-2.5"
          >
            Learn More
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
