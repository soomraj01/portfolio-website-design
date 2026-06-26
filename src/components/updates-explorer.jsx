import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { LuSearch, LuClock, LuArrowUpRight, LuSend } from 'react-icons/lu'
import { articles, articleCategories } from '@/lib/data'
import { Reveal } from './reveal'
import { cn } from '@/lib/utils'

export function UpdatesExplorer() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const pillRef = useRef(null)
  const btnRefs = useRef([])

  const featured = articles.find((a) => a.featured) ?? articles[0]

  const filtered = useMemo(() => {
    return articles
      .filter((a) => a.slug !== featured.slug || category !== 'All' || query)
      .filter((a) => {
        const matchCat = category === 'All' || a.category === category
        const q = query.toLowerCase()
        const matchQuery =
          !q ||
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q)
        return matchCat && matchQuery
      })
  }, [query, category, featured.slug])

  const showFeatured = category === 'All' && !query

  useLayoutEffect(() => {
    const idx = articleCategories.findIndex((c) => c === category)
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
      {/* Featured */}
      {showFeatured && (
        <Reveal>
          <article className="group grid overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-2">
            <div className="relative aspect-[16/11] overflow-hidden bg-secondary md:aspect-auto">
              <img
                src={featured.cover || '/placeholder.svg'}
                alt={featured.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-5 top-5 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                Featured
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 md:p-10">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full bg-secondary px-2.5 py-1 font-medium">
                  {featured.category}
                </span>
                <span>{featured.date}</span>
              </div>
              <h2 className="mt-4 text-balance text-2xl font-semibold tracking-tight md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <LuClock className="size-3.5" /> {featured.readingTime}
                </span>
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors group-hover:text-accent">
                  Read article <LuArrowUpRight className="size-4" />
                </span>
              </div>
            </div>
          </article>
        </Reveal>
      )}

      {/* Controls */}
      <div className="mt-12 flex flex-col gap-5">
        <div className="relative max-w-md">
          <LuSearch className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-full border border-border bg-card py-3 pl-11 pr-4 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-accent focus:ring-2 focus:ring-accent/20"
          />
        </div>
        <div className="relative flex flex-wrap gap-2">
          <span
            ref={pillRef}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 rounded-full bg-primary opacity-0"
          />
          {articleCategories.map((c, i) => (
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

      {/* Grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((a) => (
          <article
            key={a.slug}
            className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_25px_50px_-25px_rgba(0,0,0,0.25)]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
              <img
                src={a.cover || '/placeholder.svg'}
                alt={a.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium backdrop-blur">
                {a.category}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold leading-snug tracking-tight">
                {a.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {a.excerpt}
              </p>
              <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                <span>{a.date}</span>
                <span className="size-1 rounded-full bg-border" />
                <span className="inline-flex items-center gap-1">
                  <LuClock className="size-3.5" /> {a.readingTime}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted-foreground">
          No articles found. Try a different search or category.
        </p>
      )}

      {/* Newsletter */}
      <Reveal className="mt-20">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-primary px-8 py-12 text-primary-foreground md:px-14 md:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full opacity-40 blur-3xl"
            style={{
              background:
                'radial-gradient(circle, oklch(0.7 0.16 162 / 0.8), transparent 70%)',
            }}
          />
          <div className="relative mx-auto max-w-xl text-center">
            <h2 className="text-balance text-2xl font-semibold tracking-tight md:text-3xl">
              Get new articles in your inbox
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-primary-foreground/70">
              Occasional insights on web development, design, and freelancing. No
              spam, unsubscribe anytime.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                if (email) setSubscribed(true)
              }}
              className="mx-auto mt-7 flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-5 py-3 text-sm text-primary-foreground outline-none placeholder:text-primary-foreground/50 focus:border-accent"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
                {!subscribed && <LuSend className="size-4" />}
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </div>
  )
}
