import { Reveal } from '@/components/reveal'
import { UpdatesExplorer } from '@/components/updates-explorer'
import { useDocumentTitle } from '@/lib/use-document-title'

export function UpdatesPage() {
  useDocumentTitle('Updates — Soom Raj')
  return (
    <main className="pt-36 md:pt-44">
      <section className="px-6 pb-12">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
              Insights &amp; updates
            </p>
            <h1 className="mt-4 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
              Thoughts on building for{' '}
              <span className="font-serif italic text-gradient">the web</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Development insights, project updates, and lessons learned from
              shipping real products.
            </p>
          </Reveal>
        </div>
      </section>
      <UpdatesExplorer />
    </main>
  )
}
