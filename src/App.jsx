import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/navbar'
import { SiteFooter } from '@/components/site-footer'
import { CursorGlow } from '@/components/cursor-glow'
import HomePage from '@/pages/home'
import ProjectsPage from '@/pages/projects'
import ProjectDetailPage from '@/pages/project-detail'
import UpdatesPage from '@/pages/updates'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
        return
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <CursorGlow />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
        <Route path="/updates" element={<UpdatesPage />} />
      </Routes>
      <SiteFooter />
    </>
  )
}
