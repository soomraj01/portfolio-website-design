import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { ArrowUpRight, ExternalLink } from 'lucide-react'
import type { Project } from '@/lib/data'
import { cn } from '@/lib/utils'

export function ProjectCard({
  project,
  index = 0,
}: {
  project: Project
  index?: number
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_rgba(0,0,0,0.25)]"
    >
      <Link
        to={`/projects/${project.slug}`}
        className="relative aspect-[16/10] overflow-hidden bg-secondary"
      >
        <img
          src={project.image || '/placeholder.svg'}
          alt={`${project.name} preview`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">
          {project.category}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold tracking-tight">{project.name}</h3>
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {project.tagline}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-secondary/60 px-2.5 py-1 text-xs text-muted-foreground"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-2 pt-2">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition-colors hover:bg-primary/90',
            )}
          >
            Live Demo <ExternalLink className="size-3.5" />
          </a>
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-xs font-medium transition-colors hover:bg-secondary"
          >
            Case Study
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
