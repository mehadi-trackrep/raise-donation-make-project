"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, FolderHeart, Globe } from "lucide-react";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { GlobalStats } from "@/types/stats";
import { staggerContainer, fadeInUp } from "@/lib/animations";

interface LiveStatsBarProps {
  stats: GlobalStats;
}

export function LiveStatsBar({ stats }: LiveStatsBarProps) {
  const items = [
    {
      icon: TrendingUp,
      value: stats.totalRaised,
      prefix: "£",
      suffix: "",
      label: "Total Raised",
      color: "text-emerald-600",
    },
    {
      icon: Users,
      value: stats.totalDonors,
      prefix: "",
      suffix: "",
      label: "Generous Donors",
      color: "text-blue-600",
    },
    {
      icon: FolderHeart,
      value: stats.activeProjects,
      prefix: "",
      suffix: "",
      label: "Active Projects",
      color: "text-amber-600",
    },
    {
      icon: Globe,
      value: stats.countriesReached,
      prefix: "",
      suffix: "+",
      label: "Countries Reached",
      color: "text-purple-600",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-emerald-900 to-emerald-800 py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          {items.map((item) => (
            <motion.div
              key={item.label}
              variants={fadeInUp}
              className="flex flex-col items-center rounded-2xl bg-white/10 p-6 text-center backdrop-blur-sm"
            >
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                <item.icon size={22} className="text-white" />
              </div>
              <div className="font-serif text-3xl font-bold text-white md:text-4xl">
                <AnimatedCounter
                  end={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                />
              </div>
              <p className="mt-1 text-sm font-medium text-emerald-200">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
