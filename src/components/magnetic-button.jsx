import { useLayoutEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { cn } from '@/lib/utils'

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  strength = 0.4,
}) {
  const ref = useRef(null)
  const xTo = useRef(null)
  const yTo = useRef(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    xTo.current = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.3)' })
    yTo.current = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.3)' })
  }, [])

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    xTo.current?.(relX * strength)
    yTo.current?.(relY * strength)
  }

  const reset = () => {
    xTo.current?.(0)
    yTo.current?.(0)
  }

  const styles = cn(
    'relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-colors duration-300 will-change-transform',
    variant === 'primary' &&
      'bg-primary text-primary-foreground hover:bg-primary/90',
    variant === 'outline' &&
      'border border-border bg-background text-foreground hover:bg-secondary',
    variant === 'ghost' && 'text-foreground hover:bg-secondary',
    className,
  )

  const inner = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  )

  const isExternal = href && /^https?:\/\//.test(href)

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="inline-block"
    >
      {href ? (
        isExternal ? (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles}
            onClick={onClick}
          >
            {inner}
          </a>
        ) : (
          <Link to={href} className={styles} onClick={onClick}>
            {inner}
          </Link>
        )
      ) : (
        <button type="button" className={styles} onClick={onClick}>
          {inner}
        </button>
      )}
    </div>
  )
}
