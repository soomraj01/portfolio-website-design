import { motion } from 'motion/react'
import { ArrowRight, TrendingUp, Activity, Users } from 'lucide-react'
import { MagneticButton } from './magnetic-button'
import { useRef } from 'react'
import { useMotionValue, useSpring, useTransform } from 'motion/react'
import { FaReact, FaWordpress } from "react-icons/fa"
import { SiNodedotjs, SiMongodb } from "react-icons/si"

function FloatingDashboard() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 150,
    damping: 20,
  })
  const ry = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 150,
    damping: 20,
  })
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    x.set((e.clientX - rect.left) / rect.width - 0.5)
    y.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const reset = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      className="relative [transform-style:preserve-3d]"
    >
      {/* Main dashboard card */}
      <div className="glass rounded-3xl border border-border/70 p-5 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.18)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-2.5 rounded-full bg-accent" />
            <span className="text-sm font-medium">Revenue Overview</span>
          </div>
          <span className="rounded-full bg-secondary px-2.5 py-1 text-xs text-muted-foreground">
            Last 30 days
          </span>
        </div>

        <div className="mt-5 flex items-end gap-3">
          <span className="text-3xl font-semibold tracking-tight">$48,250</span>
          <span className="mb-1 inline-flex items-center gap-1 text-sm font-medium text-accent">
            <TrendingUp className="size-4" /> +24%
          </span>
        </div>

        {/* Bar chart */}
        <div className="mt-6 flex h-28 items-end justify-between gap-2">
          {[40, 65, 50, 80, 60, 95, 72, 88].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: 0.5 + i * 0.07, ease: 'easeOut' }}
              className="w-full rounded-md"
              style={{
                background:
                  i % 2 === 0
                    ? 'oklch(0.7 0.16 162)'
                    : 'oklch(0.7 0.16 162 / 0.3)',
              }}
            />
          ))}
        </div>
      </div>

      {/* Floating stat card top-right */}
      <motion.div
        className="animate-float-slow absolute -right-6 -top-8 w-44 rounded-2xl border border-border/70 bg-card p-4 shadow-xl"
        style={{ transform: 'translateZ(60px)' }}
      >
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="size-4 text-accent" />
          <span className="text-xs">Active Users</span>
        </div>
        <p className="mt-2 text-2xl font-semibold tracking-tight">12,840</p>
        <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
          <div className="h-full w-3/4 rounded-full bg-accent" />
        </div>
      </motion.div>

      {/* Floating stat card bottom-left */}
      <motion.div
        className="animate-float-slow absolute -bottom-10 -left-8 w-48 rounded-2xl border border-border/70 bg-card p-4 shadow-xl [animation-delay:1.5s]"
        style={{ transform: 'translateZ(40px)' }}
      >
        <div className="flex items-center gap-2 text-muted-foreground">
          <Activity className="size-4 text-accent" />
          <span className="text-xs">Conversion Rate</span>
        </div>
        <div className="mt-2 flex items-end justify-between">
          <p className="text-2xl font-semibold tracking-tight">8.4%</p>
          <span className="text-xs font-medium text-accent">+1.2%</span>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-36 pb-20 md:pt-44 md:pb-28">
      {/* gradient blobs */}
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full opacity-40 blur-[110px]"
        style={{ background: 'radial-gradient(circle, oklch(0.7 0.16 162 / 0.5), transparent 70%)' }}
      />
      <div
        aria-hidden
        className="animate-float-slow pointer-events-none absolute right-0 top-40 h-80 w-80 rounded-full opacity-30 blur-[120px] [animation-delay:2s]"
        style={{ background: 'radial-gradient(circle, oklch(0.6 0.18 280 / 0.4), transparent 70%)' }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Available for freelance projects
          </motion.div>

          <h1 className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            {['Building', 'Modern', 'Web', 'Experiences'].map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="font-serif italic text-gradient"
            >
              That Convert
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-6 max-w-lg text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            I help startups and businesses build fast, scalable, and visually
            stunning digital products using modern web technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="/projects">
              View Projects <ArrowRight className="size-4" />
            </MagneticButton>
           
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-md lg:mr-0"
        >
          <FloatingDashboard />
        </motion.div> */}
           <div className="relative mx-auto w-full max-w-md lg:mr-0 ">

  {/* Main Image */}
  <img
    src="/soom_raj_portrait.webp"
    alt="Soom Raj"
    className="w-full rounded-3xl border border-border object-cover shadow-2xl"
  />

  {/* React Badge */}
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -top-5 -left-5 flex items-center gap-2 rounded-2xl border border-cyan-500/30 bg-[#06141B] px-4 py-3 shadow-xl backdrop-blur-md"
  >
    <FaReact className="text-xl text-cyan-400" />
    <span className="font-medium text-cyan-300">React.js</span>
  </motion.div>

  {/* WordPress Badge */}
  <motion.div
    animate={{ y: [0, 8, 0] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -right-5 top-10 flex items-center gap-2 rounded-2xl border border-blue-500/30 bg-[#071018] px-4 py-3 shadow-xl backdrop-blur-md"
  >
    <FaWordpress className="text-xl text-blue-400" />
    <span className="font-medium text-blue-300">WordPress</span>
  </motion.div>

  {/* Node.js Badge */}
  <motion.div
    animate={{ y: [0, -6, 0] }}
    transition={{
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute bottom-8 -left-8 flex items-center gap-2 rounded-2xl border border-green-500/30 bg-[#08140D] px-4 py-3 shadow-xl backdrop-blur-md"
  >
    <SiNodedotjs className="text-xl text-green-400" />
    <span className="font-medium text-green-300">Node.js</span>
  </motion.div>

  {/* MongoDB Badge */}
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{
      duration: 4.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute -bottom-5 right-8 flex items-center gap-2 rounded-2xl border border-emerald-500/30 bg-[#08140F] px-4 py-3 shadow-xl backdrop-blur-md"
  >
    <SiMongodb className="text-xl text-emerald-400" />
    <span className="font-medium text-emerald-300">MongoDB</span>
  </motion.div>

</div>
      </div>
    </section>
  )
}
