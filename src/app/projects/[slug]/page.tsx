import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Users,
  Calendar,
  Heart,
  CheckCircle,
} from "lucide-react";
import { getProjects, getProjectBySlug, categoryLabels } from "@/data/projects";
import { Badge } from "@/components/ui/Badge";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { formatCurrency, getProgressPercent } from "@/lib/utils";
import { URGENCY_COLORS, URGENCY_LABELS } from "@/lib/constants";
import { ImpactStatsSection } from "@/components/projects/ImpactStatsSection";
export const revalidate = 300;

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — HopeRaise`,
    description: project.tagline,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const percent = getProgressPercent(project.raisedAmount, project.goalAmount);

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Image */}
      <div className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
          <div className="mx-auto max-w-5xl">
            <Link
              href="/projects"
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/30"
            >
              <ArrowLeft size={14} />
              All Projects
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <Badge
                category={project.category}
                label={categoryLabels[project.category]}
              />
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold text-white ${URGENCY_COLORS[project.urgency]}`}
              >
                {URGENCY_LABELS[project.urgency]}
              </span>
            </div>
            <h1 className="mt-3 font-serif text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {project.title}
            </h1>
            <p className="mt-2 text-base text-gray-300">{project.tagline}</p>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Main content */}
          <div className="space-y-10 lg:col-span-2">
            <ContentSection heading={project.why.heading} body={project.why.body} />
            <ContentSection heading={project.how.heading} body={project.how.body} />
            <ContentSection heading={project.impact.heading} body={project.impact.body} />
            <ImpactStatsSection stats={project.impactStats} />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              {/* Donation progress card */}
              <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Fundraising Progress
                </p>
                <div className="mt-4">
                  <div className="flex items-end justify-between">
                    <span className="font-serif text-3xl font-bold text-gray-900">
                      {formatCurrency(project.raisedAmount, project.currency)}
                    </span>
                    <span className="text-sm text-gray-500">
                      of{" "}
                      <strong>
                        {formatCurrency(project.goalAmount, project.currency)}
                      </strong>
                    </span>
                  </div>
                  <div className="mt-3">
                    <ProgressBar percent={percent} height="lg" />
                  </div>
                </div>

                <div className="mt-5 flex items-center gap-2 text-sm text-gray-600">
                  <Users size={16} className="text-gray-400" />
                  <span>
                    <strong className="font-semibold text-gray-800">
                      {project.donorCount.toLocaleString()}
                    </strong>{" "}
                    donors have contributed
                  </span>
                </div>

                {project.endDate && (
                  <div className="mt-2 flex items-center gap-2 text-sm text-gray-600">
                    <Calendar size={16} className="text-gray-400" />
                    <span>
                      Ends{" "}
                      {new Date(project.endDate).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                )}

                <Link
                  href="/donate"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-amber-500 py-3.5 text-base font-bold text-white shadow-md transition-all hover:bg-amber-600 hover:shadow-lg"
                >
                  <Heart size={18} className="fill-white" />
                  Donate to This Project
                </Link>
                <p className="mt-3 text-center text-xs text-gray-400">
                  Use &ldquo;{project.title}&rdquo; as your payment reference
                </p>
              </div>

              {/* Quick facts */}
              <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
                <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-gray-500">
                  Quick Facts
                </p>
                <ul className="space-y-2.5">
                  {project.impactStats.map((stat) => (
                    <li key={stat.label} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                      <span className="text-gray-600">
                        <strong className="font-semibold text-gray-800">{stat.value}</strong>{" "}
                        {stat.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

function ContentSection({ heading, body }: { heading: string; body: string }) {
  return (
    <section>
      <h2 className="font-serif text-2xl font-bold text-gray-900 md:text-3xl">
        {heading}
      </h2>
      <div className="mt-1 h-1 w-12 rounded-full bg-emerald-600" />
      <p className="mt-4 text-base leading-8 text-gray-600">{body}</p>
    </section>
  );
}
