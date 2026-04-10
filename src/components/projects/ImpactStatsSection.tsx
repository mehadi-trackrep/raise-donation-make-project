"use client";

import { motion } from "framer-motion";
import {
  Package,
  Users,
  UtensilsCrossed,
  Heart,
  BookOpen,
  Monitor,
  TrendingUp,
  Stethoscope,
  HeartPulse,
  Pill,
  Activity,
  Home,
  Moon,
  GraduationCap,
} from "lucide-react";
import { ProjectImpactStat } from "@/types/project";
import { staggerContainer, scaleIn } from "@/lib/animations";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Package,
  Users,
  UtensilsCrossed,
  Heart,
  BookOpen,
  Monitor,
  TrendingUp,
  Stethoscope,
  HeartPulse,
  Pill,
  Activity,
  Home,
  Moon,
  GraduationCap,
};

interface ImpactStatsSectionProps {
  stats: ProjectImpactStat[];
}

export function ImpactStatsSection({ stats }: ImpactStatsSectionProps) {
  return (
    <section>
      <h2 className="font-serif text-2xl font-bold text-gray-900 md:text-3xl">
        Impact at a Glance
      </h2>
      <div className="mt-1 h-1 w-12 rounded-full bg-emerald-600" />
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4"
      >
        {stats.map((stat) => {
          const Icon = iconMap[stat.icon] || Heart;
          return (
            <motion.div
              key={stat.label}
              variants={scaleIn}
              className="flex flex-col items-center rounded-2xl bg-emerald-50 p-5 text-center"
            >
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100">
                <Icon size={18} className="text-emerald-700" />
              </div>
              <span className="font-serif text-2xl font-bold text-gray-900">
                {stat.value}
              </span>
              <span className="mt-1 text-xs font-medium text-gray-500">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
