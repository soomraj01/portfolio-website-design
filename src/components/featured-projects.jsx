import { Link } from 'react-router-dom'
import { LuArrowRight } from 'react-icons/lu'
import { projects } from '@/lib/data'
import { ProjectCard } from './project-card'
import { Reveal } from './reveal'

export function FeaturedProjects() {
  const featured = projects.slice(0, 3)
  return (
    <section className="bg-secondary/40 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Recent work
            </p>
            <h2 className="mt-4 max-w-xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Featured projects I&apos;m proud of
            </h2>
          </div>
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
          >
            View all projects
            <LuArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
