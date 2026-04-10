"use client";

import { motion } from "framer-motion";
import { Heart, Target, Eye, Users, Globe, Shield } from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { SectionHeading } from "@/components/ui/SectionHeading";

const values = [
  {
    icon: Heart,
    title: "Compassion First",
    description: "Every decision we make is guided by the needs of the communities we serve. We listen before we act.",
    color: "bg-red-100 text-red-600",
  },
  {
    icon: Shield,
    title: "Full Transparency",
    description: "We publish our accounts, track every pound donated, and ensure our funders can see exactly where their money goes.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Globe,
    title: "Community-Led",
    description: "We partner with local organizations who understand their communities best — we amplify their work, we don't replace it.",
    color: "bg-emerald-100 text-emerald-600",
  },
  {
    icon: Target,
    title: "Measurable Impact",
    description: "We set clear goals, measure outcomes, and report honestly — including when things don't go as planned.",
    color: "bg-purple-100 text-purple-600",
  },
];

const team = [
  { name: "Sarah Okonkwo", role: "Executive Director", initials: "SO" },
  { name: "James Patel", role: "Head of Operations", initials: "JP" },
  { name: "Fatima Al-Rashid", role: "Project Coordinator", initials: "FA" },
  { name: "David Chen", role: "Finance & Compliance", initials: "DC" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <div className="bg-gradient-to-br from-emerald-900 to-emerald-800 py-20 text-center">
        <h1 className="font-serif text-4xl font-bold text-white md:text-5xl">
          About HopeRaise
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-base text-emerald-200">
          We are a grassroots charity founded in 2020 by a group of community volunteers who
          believed that direct, transparent giving could transform lives without bureaucratic overhead.
        </p>
      </div>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-3xl bg-emerald-50 p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-700">
                <Target size={22} className="text-white" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-gray-900">Our Mission</h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                To connect compassionate donors directly with community welfare projects
                that address root causes of poverty, inequality, and social exclusion —
                ensuring every pound donated creates maximum, measurable impact.
              </p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-3xl bg-amber-50 p-8"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500">
                <Eye size={22} className="text-white" />
              </div>
              <h2 className="font-serif text-2xl font-bold text-gray-900">Our Vision</h2>
              <p className="mt-3 text-base leading-relaxed text-gray-600">
                A world where no family goes hungry, no child is denied education,
                and no one is left without shelter or healthcare simply because of
                where they were born or the circumstances they face.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="What Guides Us"
            title="Our Core Values"
            subtitle="These principles shape every project we fund, every decision we make, and every relationship we build."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2"
          >
            {values.map((v) => (
              <motion.div
                key={v.title}
                variants={fadeInUp}
                className="rounded-3xl bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl ${v.color}`}>
                  <v.icon size={20} />
                </div>
                <h3 className="font-serif text-lg font-bold text-gray-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-500">{v.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="The People"
            title="Meet Our Team"
            subtitle="A small, dedicated team with one shared purpose: making your donations count."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {team.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeInUp}
                className="flex flex-col items-center rounded-3xl bg-gray-50 p-6 text-center hover:bg-emerald-50 transition-colors"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-700 font-serif text-xl font-bold text-white shadow-md">
                  {member.initials}
                </div>
                <h3 className="mt-3 font-semibold text-gray-900">{member.name}</h3>
                <p className="text-xs text-gray-500">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Registration */}
      <section className="bg-emerald-900 py-12 text-center text-sm text-emerald-300">
        <div className="mx-auto max-w-2xl px-4">
          <p className="font-semibold text-white">HopeRaise</p>
          <p className="mt-1">
            Registered Charity No: 1234567 &bull; Company No: 09876543 (England & Wales)
          </p>
          <p className="mt-1">
            123 Charity Lane, London, EC1A 1BB &bull; info@hoperaise.org
          </p>
        </div>
      </section>
    </div>
  );
}
