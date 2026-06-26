import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { LuArrowRight } from 'react-icons/lu'
import { FaReact, FaWordpress } from 'react-icons/fa'
import { SiNodedotjs, SiMongodb } from 'react-icons/si'
import { MagneticButton } from './magnetic-button'

const words = ['Building', 'Modern', 'Web', 'Experiences']

export function Hero() {
  const root = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.fromTo('[data-badge]', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 })
        .fromTo(
          '[data-word]',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6, stagger: 0.08 },
          0.1,
        )
        .fromTo(
          '[data-accent-word]',
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.45,
        )
        .fromTo(
          '[data-subtitle]',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.55,
        )
        .fromTo(
          '[data-cta]',
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          0.65,
        )

      // Floating tech badges
      gsap.to('[data-float="1"]', {
        y: -8,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('[data-float="2"]', {
        y: 8,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('[data-float="3"]', {
        y: -6,
        duration: 1.75,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
      gsap.to('[data-float="4"]', {
        y: 10,
        duration: 2.25,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={root}
      className="relative overflow-hidden px-6 pt-36 pb-20 md:pt-44 md:pb-28"
    >
      {/* gradient blobs */}
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full opacity-40 blur-[110px]"
        style={{
          background:
            'radial-gradient(circle, oklch(0.7 0.16 162 / 0.5), transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full opacity-30 blur-[120px] [animation-delay:2s]"
        style={{
          background:
            'radial-gradient(circle, oklch(0.6 0.18 280 / 0.4), transparent 70%)',
        }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <div
            data-badge
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Available for freelance projects
          </div>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {words.map((word) => (
              <span key={word} data-word className="mr-3 inline-block">
                {word}
              </span>
            ))}
            <span data-accent-word className="font-serif italic text-gradient">
              That Convert
            </span>
          </h1>

          <p
            data-subtitle
            className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            I help startups and businesses build fast, scalable, and visually
            stunning digital products using modern web technologies.
          </p>

          <div data-cta className="mt-9 flex flex-wrap items-center gap-3">
            <MagneticButton href="/projects">
              View Projects <LuArrowRight className="size-4" />
            </MagneticButton>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mr-0">
          {/* Main Image */}
          <img
            src="/soom_raj_portrait.webp"
            alt="Soom Raj"
            className="w-full rounded-3xl border border-border object-cover shadow-2xl"
          />

          {/* React Badge */}
          <div
            data-float="1"
            className="absolute -top-5 -left-5 flex items-center gap-2 rounded-2xl border border-cyan-500/30 bg-[#06141B] px-4 py-3 shadow-xl backdrop-blur-md"
          >
            <FaReact className="text-xl text-cyan-400" />
            <span className="font-medium text-cyan-300">React.js</span>
          </div>

          {/* WordPress Badge */}
          <div
            data-float="2"
            className="absolute -right-5 top-10 flex items-center gap-2 rounded-2xl border border-blue-500/30 bg-[#071018] px-4 py-3 shadow-xl backdrop-blur-md"
          >
            <FaWordpress className="text-xl text-blue-400" />
            <span className="font-medium text-blue-300">WordPress</span>
          </div>

          {/* Node.js Badge */}
          <div
            data-float="3"
            className="absolute bottom-8 -left-8 flex items-center gap-2 rounded-2xl border border-green-500/30 bg-[#08140D] px-4 py-3 shadow-xl backdrop-blur-md"
          >
            <SiNodedotjs className="text-xl text-green-400" />
            <span className="font-medium text-green-300">Node.js</span>
          </div>

          {/* MongoDB Badge */}
          <div
            data-float="4"
            className="absolute -bottom-5 right-8 flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-[#08140F] px-4 py-3 shadow-xl backdrop-blur-md"
          >
            <SiMongodb className="text-xl text-emerald-400" />
            <span className="font-medium text-emerald-300">MongoDB</span>
          </div>
        </div>
      </div>
    </section>
  )
}
