"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { GlobalStats } from "@/types/stats";

interface HeroSectionProps {
  stats: GlobalStats;
}

export function HeroSection({ stats }: HeroSectionProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/95 via-emerald-800/90 to-gray-900/95 z-10" />
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1920&auto=format&fit=crop')",
          }}
        />
        {/* Decorative blobs */}
        <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl z-20" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl z-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-32 text-center sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-sm font-semibold text-amber-300 backdrop-blur-sm">
              <Heart size={14} className="fill-amber-300 text-amber-300" />
              Empowering Communities Across the UK
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Your Generosity{" "}
            <span className="text-amber-400">Changes Lives</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl"
          >
            Join thousands of compassionate donors funding real projects that
            feed families, educate children, deliver healthcare, and build safe
            homes in communities that need it most.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-base font-bold text-white shadow-xl transition-all hover:bg-amber-600 hover:shadow-2xl hover:-translate-y-0.5 active:scale-95"
            >
              <Heart size={18} className="fill-white" />
              Donate Now
              <ArrowRight size={16} />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/10 hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            variants={fadeInUp}
            className="mt-16 flex flex-wrap items-center justify-center gap-6"
          >
            {[
              { value: `${stats.currency === "GBP" ? "£" : stats.currency}${(stats.totalRaised / 1000).toFixed(0)}K+`, label: "Raised" },
              { value: `${stats.totalDonors.toLocaleString()}+`, label: "Donors" },
              { value: `${stats.activeProjects}`, label: "Active Projects" },
              { value: `${stats.countriesReached}`, label: "Countries" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center rounded-2xl border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-sm"
              >
                <span className="font-serif text-2xl font-bold text-amber-400">
                  {stat.value}
                </span>
                <span className="mt-0.5 text-xs font-medium uppercase tracking-wide text-gray-300">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-white/40 p-1.5">
          <div className="h-2 w-1 rounded-full bg-white/60" />
        </div>
      </motion.div>
    </section>
  );
}
