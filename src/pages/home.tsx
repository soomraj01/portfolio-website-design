import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { FeaturedProjects } from '@/components/featured-projects'
import { Testimonials } from '@/components/testimonials'
import { useDocumentTitle } from '@/lib/use-document-title'

export function HomePage() {
  useDocumentTitle('Soom Raj — Full Stack Developer')
  return (
    <main>
      <Hero />
      <About />
      <FeaturedProjects />
      <Testimonials />
    </main>
  )
}
