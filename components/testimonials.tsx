'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { Reveal } from './reveal'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    company: 'CEO, Brightwave',
    avatar: '/images/avatar-1.png',
    review:
      'Soom delivered beyond our expectations. The product is fast, beautiful, and our conversion rate jumped almost overnight. A true professional.',
  },
  {
    name: 'David Chen',
    company: 'Founder, Northpeak',
    avatar: '/images/avatar-2.png',
    review:
      'Working with Soom felt like having a senior engineer and a designer in one. Clear communication and impeccable execution from start to finish.',
  },
  {
    name: 'Amara Okafor',
    company: 'Product Lead, Lumen',
    avatar: '/images/avatar-3.png',
    review:
      'The attention to detail is unreal. Every animation, every interaction feels intentional. Our users constantly compliment the experience.',
  },
  {
    name: 'Kenji Tanaka',
    company: 'CTO, Vault',
    avatar: '/images/avatar-4.png',
    review:
      'Reliable, thoughtful, and genuinely talented. Soom shipped a complex fintech platform on time without compromising on quality.',
  },
]

function Card({ t }: { t: (typeof testimonials)[number] }) {
  return (
    <figure className="glass flex w-[340px] shrink-0 flex-col rounded-3xl border border-border/70 p-6 md:w-[400px]">
      <div className="flex gap-0.5 text-accent">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} className="size-4 fill-current" />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
        &ldquo;{t.review}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3">
        <Image
          src={t.avatar || '/placeholder.svg'}
          alt={t.name}
          width={44}
          height={44}
          className="size-11 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-medium">{t.name}</p>
          <p className="text-xs text-muted-foreground">{t.company}</p>
        </div>
      </figcaption>
    </figure>
  )
}

export function Testimonials() {
  const row = [...testimonials, ...testimonials]
  return (
    <section className="overflow-hidden px-6 py-20 md:py-28">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
          Testimonials
        </p>
        <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Trusted by founders and teams
        </h2>
        <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
          A few words from the people I&apos;ve had the pleasure of building with.
        </p>
      </Reveal>

      <div className="marquee-paused group relative mt-14">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="marquee-track flex w-max gap-5">
          {row.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
