import { createFileRoute } from '@tanstack/react-router'

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Experience } from '../components/Experience'
import { Projects } from '../components/Projects'
import { Skills } from '../components/Skills'
import { Footer } from '../components/Footer'

const DESCRIPTION =
  'Portfolio of Si Thu Tun, a senior software engineer with 8+ years building backend systems and integrations for banking and fintech platforms.'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <>
      <title>Si Thu Tun — Senior Software Engineer</title>
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content="Si Thu Tun — Senior Software Engineer" />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <Header />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
