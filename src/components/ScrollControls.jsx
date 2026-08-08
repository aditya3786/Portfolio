import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ScrollControls() {
  const [progress, setProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const updateScrollState = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setProgress(maxScroll > 0 ? (window.scrollY / maxScroll) * 100 : 0)
      setShowBackToTop(window.scrollY > window.innerHeight * 0.75)
    }

    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <div className="fixed top-0 left-0 z-[60] h-0.5 w-full bg-transparent" aria-hidden="true">
        <div className="h-full bg-apple-blue shadow-[0_0_10px_rgba(0,122,255,0.9)]" style={{ width: `${progress}%` }} />
      </div>

      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            type="button"
            aria-label="Back to top"
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            className="fixed right-6 bottom-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-apple-gray-700 bg-apple-gray-900/90 text-xl text-white shadow-xl backdrop-blur hover:bg-apple-blue transition-colors"
          >
            ↑
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
