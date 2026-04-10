"use client";

import { motion } from "framer-motion";
import { Heart, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-800 to-emerald-900 py-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-amber-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeInUp}>
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-400/20 ring-2 ring-amber-400/30">
              <Heart size={28} className="fill-amber-400 text-amber-400" />
            </div>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl"
          >
            Ready to Make a Difference?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-5 max-w-xl text-lg text-emerald-200"
          >
            Whether it&apos;s £5 or £5,000 — your donation goes directly to
            those who need it most. No fees, no barriers, just impact.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <a
              href="/donate"
              className="inline-flex items-center gap-2 rounded-full bg-amber-500 px-8 py-4 text-base font-bold text-white shadow-xl transition-all hover:bg-amber-600 hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <Heart size={18} className="fill-white" />
              See Bank Details
              <ArrowRight size={16} />
            </a>
            <a
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/10 hover:-translate-y-0.5"
            >
              Explore All Projects
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
