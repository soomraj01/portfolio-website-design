import { Reveal } from '@/components/reveal'
import { ProjectsExplorer } from '@/components/projects-explorer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects — Soom Raj',
  description:
    'A collection of case studies and projects built by Soom Raj across SaaS, MERN, business websites, and WordPress.',
}

export default function ProjectsPage() {
  return (
    <main className="pt-36 md:pt-44">
      <section className="px-6 pb-16">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Selected work
            </p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
              Case studies built to{' '}
              <span className="font-serif italic text-gradient">perform</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Real products for real businesses — explore the problems, solutions,
              and results behind each build.
            </p>
          </Reveal>
        </div>
      </section>
      <ProjectsExplorer />
    </main>
  )
}
