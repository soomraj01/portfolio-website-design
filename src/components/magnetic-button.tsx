import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { Link } from 'react-router-dom'
import { cn } from '@/lib/utils'
import type { ReactNode, MouseEvent } from 'react'
import { useRef } from 'react'

type MagneticButtonProps = {
  children: ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'ghost'
  className?: string
  strength?: number
}

export function MagneticButton({
  children,
  href,
  onClick,
  variant = 'primary',
  className,
  strength = 0.4,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 200, damping: 15 })
  const sy = useSpring(y, { stiffness: 200, damping: 15 })
  const tx = useTransform(sx, (v) => v)
  const ty = useTransform(sy, (v) => v)

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set(relX * strength)
    y.set(relY * strength)
  }

  const reset = () => {
    x.set(0)
    y.set(0)
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

  const inner = <span className="relative z-10 flex items-center gap-2">{children}</span>

  const isExternal = !!href && /^(https?:)?\/\//.test(href)

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{ x: tx, y: ty }}
      className="inline-block"
    >
      {href ? (
        isExternal ? (
          <a
            href={href}
            className={styles}
            onClick={onClick}
            target="_blank"
            rel="noopener noreferrer"
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
    </motion.div>
  )
}
