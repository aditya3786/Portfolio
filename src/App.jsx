import React, { useEffect, useState } from 'react'
import Lenis from '@studio-freight/lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Loader from './components/Loader'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      lerp: 0.09,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
    })

    let animationFrameId
    const raf = (time) => {
      lenis.raf(time)
      animationFrameId = requestAnimationFrame(raf)
    }

    animationFrameId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(animationFrameId)
      lenis.destroy()
    }
  }, [])

  if (loading) {
    return <Loader onLoadingComplete={() => setLoading(false)} />
  }

  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      
      {/* Main Content */}
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
