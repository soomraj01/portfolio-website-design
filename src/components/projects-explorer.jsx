import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { LuSearch } from 'react-icons/lu'
import { projects, projectCategories } from '@/lib/data'
import { ProjectCard } from './project-card'
import { cn } from '@/lib/utils'

export function ProjectsExplorer() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const pillRef = useRef(null)
  const btnRefs = useRef([])

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchCat = category === 'All' || p.category === category
      const q = query.toLowerCase()
      const matchQuery =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        p.tech.some((t) => t.toLowerCase().includes(q))
      return matchCat && matchQuery
    })
  }, [query, category])

  useLayoutEffect(() => {
    const idx = projectCategories.findIndex((c) => c === category)
    const pill = pillRef.current
    const el = btnRefs.current[idx]
    if (!pill || !el) return
    gsap.to(pill, {
      autoAlpha: 1,
      x: el.offsetLeft,
      y: el.offsetTop,
      width: el.offsetWidth,
      height: el.offsetHeight,
      duration: 0.5,
      ease: 'power3.out',
    })
  }, [category])

  return (
    <div className="mx-auto max-w-6xl px-6 pb-24">
      <div className="flex flex-col gap-5">
        <div className="relative max-w-md">
          <LuSearch className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, tech, keywords..."
            className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>

        <div className="relative flex flex-wrap gap-2">
          <span
            ref={pillRef}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 rounded-full bg-primary opacity-0"
          />
          {projectCategories.map((c, i) => (
            <button
              key={c}
              type="button"
              ref={(el) => (btnRefs.current[i] = el)}
              onClick={() => setCategory(c)}
              className={cn(
                'relative rounded-full px-4 py-2 text-sm transition-colors',
                category === c
                  ? 'text-primary-foreground'
                  : 'border border-border text-muted-foreground hover:text-foreground',
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <ProjectCard key={p.slug} project={p} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">
          No projects match your search. Try a different keyword.
        </p>
      )}
    </div>
  )
}
