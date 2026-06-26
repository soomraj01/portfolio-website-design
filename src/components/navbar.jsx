import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { LuMenu, LuX } from 'react-icons/lu'
import { cn } from '@/lib/utils'
import { MagneticButton } from './magnetic-button'

const links = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/updates', label: 'Updates' },
  { href: '/#view-work', label: 'View my Work' },
]

export function Navbar() {
  const location = useLocation()
  const pathname = location.pathname
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const headerRef = useRef(null)
  const listRef = useRef(null)
  const pillRef = useRef(null)
  const itemRefs = useRef([])
  const menuRef = useRef(null)

  // Header entrance
  useLayoutEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
    )
  }, [])

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href) =>
    href === pathname || (href !== '/' && href !== '/#view-work' && pathname.startsWith(href))

  // Animate sliding active pill (GSAP equivalent of layout animation)
  useLayoutEffect(() => {
    const idx = links.findIndex((l) => isActive(l.href))
    const pill = pillRef.current
    if (!pill) return
    if (idx === -1) {
      gsap.to(pill, { autoAlpha: 0, duration: 0.2 })
      return
    }
    const el = itemRefs.current[idx]
    if (!el) return
    gsap.to(pill, {
      autoAlpha: 1,
      x: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight,
      duration: 0.5,
      ease: 'power3.out',
    })
  }, [pathname])

  // Mobile menu entrance
  useLayoutEffect(() => {
    if (open && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' },
      )
    }
  }, [open])

  return (
    <header
      ref={headerRef}
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
          to="/"
          className="flex items-center gap-2 pl-3 text-base font-semibold tracking-tight"
        >
          <span className="grid size-7 place-items-center rounded-full bg-primary text-[13px] font-bold text-primary-foreground">
            S
          </span>
          Soom Raj
        </Link>

        <ul ref={listRef} className="relative hidden items-center gap-1 md:flex">
          <span
            ref={pillRef}
            aria-hidden
            className="pointer-events-none absolute left-0 top-0 -z-10 rounded-full bg-secondary opacity-0"
          />
          {links.map((l, i) => {
            const active = isActive(l.href)
            return (
              <li key={l.href} ref={(el) => (itemRefs.current[i] = el)}>
                <Link
                  to={l.href}
                  className={cn(
                    'relative rounded-full px-4 py-2 text-sm transition-colors',
                    active
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
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
          {open ? <LuX className="size-5" /> : <LuMenu className="size-5" />}
        </button>
      </nav>

      {open && (
        <div
          ref={menuRef}
          className="glass absolute inset-x-4 top-20 rounded-3xl border border-border/60 p-4 shadow-lg md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  to={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-sm text-foreground hover:bg-secondary"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
