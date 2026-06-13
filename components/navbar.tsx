'use client'

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { MagneticButton } from './magnetic-button'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/updates', label: 'Updates' },
  { href: '/#contact', label: 'Contact' },
]

export function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 24)
  })

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={cn(
          'flex w-full max-w-5xl items-center justify-between rounded-full px-3 py-2.5 transition-all duration-300',
          scrolled
            ? 'glass border border-border/60 shadow-sm'
            : 'border border-transparent',
        )}
      >
        <Link
          href="/"
          className="flex items-center gap-2 pl-3 text-base font-semibold tracking-tight"
        >
          <span className="grid size-7 place-items-center rounded-full bg-primary text-[13px] font-bold text-primary-foreground">
            S
          </span>
          Soom Raj
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const active =
              l.href === pathname || (l.href !== '/' && pathname.startsWith(l.href))
            return (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm transition-colors',
                    active
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-secondary"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                    />
                  )}
                  {l.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:block">
          <MagneticButton href="/#contact" className="px-5 py-2.5">
            Hire Me
          </MagneticButton>
        </div>

        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          className="grid size-10 place-items-center rounded-full text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass absolute inset-x-4 top-20 rounded-3xl border border-border/60 p-4 shadow-lg md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-sm text-foreground hover:bg-secondary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
