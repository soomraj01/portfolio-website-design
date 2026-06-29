import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { Reveal } from './reveal'
import { MagneticButton } from './magnetic-button'
import { GithubIcon, LinkedinIcon } from './social-icons'

const nav = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/updates', label: 'Updates' },
  { href: '/#contact', label: 'Contact' },
]

const socials = [
  { href: 'https://fiverr.com', label: 'Fiverr', icon: ArrowUpRight },
  { href: 'https://github.com', label: 'GitHub', icon: GithubIcon },
]

export function SiteFooter() {
  return (
    <footer
      id="view-work"
      className="relative overflow-hidden border-t border-border bg-secondary/40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, oklch(0.7 0.16 162 / 0.3), transparent 70%)',
        }}
      />
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Get in touch
          </p>
          <h2 className="mt-5 text-pretty text-4xl font-semibold tracking-tight md:text-6xl">
            Let&apos;s Build Something{' '}
            <span className="font-serif italic">Great Together</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Have a project in mind or just want to say hi? I&apos;m always open to
            discussing new ideas and ambitious products.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            
            <MagneticButton href="https://www.fiverr.com/users/soomraj02/portfolio?roleIds=" variant="outline">
              View My Work
            </MagneticButton>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-10 border-t border-border pt-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link to="/" className="flex items-center gap-2 text-lg font-semibold">
              <span className="grid size-7 place-items-center rounded-full bg-primary text-[13px] font-bold text-primary-foreground">
                S
              </span>
              Soom Raj
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Freelance full stack developer crafting fast, scalable, and beautiful
              digital products.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Navigation</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {nav.map((l) => (
                <li key={l.href}>
                  <Link
                    to={l.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-medium text-foreground">Connect</h3>
            <ul className="mt-4 flex flex-col gap-3">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <s.icon className="size-4" />
                    {s.label}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} Soom Raj. All rights reserved.</p>
          <p>Designed &amp; built with care.</p>
        </div>
      </div>
    </footer>
  )
}
