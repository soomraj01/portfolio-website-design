import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Reveal } from './reveal'

gsap.registerPlugin(ScrollTrigger)

function Counter({ to, suffix = '' }) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    const ctx = gsap.context(() => {
      const obj = { value: 0 }
      gsap.to(obj, {
        value: to,
        duration: 1.6,
        ease: 'power3.out',
        onUpdate: () => {
          el.textContent = `${Math.round(obj.value)}${suffix}`
        },
        scrollTrigger: {
          trigger: el,
          start: 'top bottom-=40',
          toggleActions: 'play none none none',
        },
      })
    }, el)
    return () => ctx.revert()
  }, [to, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const stats = [
  { value: 1, suffix: '+', label: 'Years of Experience' },
  { value: 30, suffix: '+', label: 'Projects Delivered' },
  { value: 5, suffix: '+', label: 'Technologies' },
  { value: 99, suffix: '%', label: 'Client Satisfaction' },
]

export function About() {
  return (
    <section id="about" className="px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div
              aria-hidden
              className="absolute -inset-4 -z-10 rounded-[2rem] opacity-50 blur-2xl"
              style={{
                background:
                  'radial-gradient(circle, oklch(0.7 0.16 162 / 0.3), transparent 70%)',
              }}
            />
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card">
              <img
                src="/soom_raj_portrait.webp"
                alt="Portrait of Soom Raj"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              About me
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
              Hi, I&apos;m Soom Raj — a Full Stack Developer who cares about the
              details.
            </h2>
            <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
              I focus on creating modern web applications and business websites
              that combine performance, usability, and beautiful design. From the
              first line of code to the final pixel, I build products that feel as
              good as they look.
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.1}>
                <div className="rounded-2xl border border-border bg-card p-5">
                  <p className="text-3xl font-semibold tracking-tight">
                    <Counter to={s.value} suffix={s.suffix} />
                  </p>
                  <p className="mt-1.5 text-xs leading-snug text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
