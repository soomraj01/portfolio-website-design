import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { FeaturedProjects } from '@/components/featured-projects'
import { Testimonials } from '@/components/testimonials'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <FeaturedProjects />
      <Testimonials />
    </main>
  )
}
