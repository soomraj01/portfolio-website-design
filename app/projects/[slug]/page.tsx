import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, Check } from 'lucide-react'
import { projects } from '@/lib/data'
import { Reveal } from '@/components/reveal'
import { GithubIcon } from '@/components/social-icons'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return { title: 'Project — Soom Raj' }
  return {
    title: `${project.name} — Soom Raj`,
    description: project.tagline,
  }
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <main className="pt-32 md:pt-40">
      <article className="px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" />
              All projects
            </Link>

            <span className="mt-8 inline-block rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">
              {project.category}
            </span>
            <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-5xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              {project.tagline}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Live Demo <ExternalLink className="size-4" />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                <GithubIcon className="size-4" /> GitHub
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-secondary">
              <Image
                src={project.image || '/placeholder.svg'}
                alt={`${project.name} banner`}
                width={1200}
                height={750}
                className="w-full object-cover"
                priority
              />
            </div>
          </Reveal>

          {/* Tech stack */}
          <Reveal className="mt-12">
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Tech Stack
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-sm text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          {/* Problem & Solution */}
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border border-border bg-card p-7">
                <h2 className="text-lg font-semibold">The Problem</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {project.problem}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-3xl border border-border bg-card p-7">
                <h2 className="text-lg font-semibold">The Solution</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {project.solution}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Key features */}
          <Reveal className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">Key Features</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {project.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-3" />
                  </span>
                  <span className="text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Development process */}
          <Reveal className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">
              Development Process
            </h2>
            <ol className="mt-6 space-y-5 border-l border-border pl-6">
              {project.process.map((step, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[31px] grid size-6 place-items-center rounded-full border border-border bg-card text-xs font-medium">
                    {i + 1}
                  </span>
                  <p className="leading-relaxed text-muted-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </Reveal>

          {/* Results */}
          <Reveal className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">Results</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {project.results.map((r) => (
                <div
                  key={r.label}
                  className="rounded-3xl border border-border bg-secondary/50 p-6 text-center"
                >
                  <p className="text-4xl font-semibold tracking-tight text-accent">
                    {r.value}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{r.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Gallery */}
          <Reveal className="mt-12">
            <h2 className="text-2xl font-semibold tracking-tight">Gallery</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {project.gallery.map((g, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-3xl border border-border bg-secondary"
                >
                  <Image
                    src={g || '/placeholder.svg'}
                    alt={`${project.name} screenshot ${i + 1}`}
                    width={800}
                    height={500}
                    className="w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </article>
    </main>
  )
}
