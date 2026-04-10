"use client";

import { motion } from "framer-motion";
import { Search, Banknote, Sparkles } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Choose a Project",
    description:
      "Browse our active welfare projects and find the cause that resonates most with your heart. Every project has detailed information about the need, approach, and expected impact.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    number: "02",
    icon: Banknote,
    title: "Make a Bank Transfer",
    description:
      "Use our full bank details to send any amount — no platform fees, no middlemen. 100% of your donation reaches the cause. Simply include the project name as your payment reference.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "See Your Impact",
    description:
      "Watch the project's funding progress update. Each donor count and raised amount reflects real contributions from real people. Your generosity is tracked and celebrated.",
    color: "bg-amber-100 text-amber-600",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Simple Process"
          title="How Your Donation Works"
          subtitle="No accounts, no fees, no complications — just a direct bank transfer that changes lives."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="group relative rounded-3xl border border-gray-100 bg-gray-50 p-8 transition-all hover:border-emerald-200 hover:bg-emerald-50/30 hover:shadow-lg"
            >
              <div className="mb-6 flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${step.color}`}
                >
                  <step.icon size={22} />
                </div>
                <span className="font-serif text-5xl font-bold text-gray-100 transition-colors group-hover:text-emerald-100">
                  {step.number}
                </span>
              </div>
              <h3 className="mb-3 font-serif text-xl font-bold text-gray-900">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-500">
                {step.description}
              </p>
              {i < steps.length - 1 && (
                <div className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-gray-300 md:block">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M9 18l6-6-6-6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
