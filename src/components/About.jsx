import React from 'react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

export default function About() {
  return (
    <section id="about" className="min-h-screen section-padding relative overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          {/* Section Title */}
          <motion.h2 
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-24 text-center tracking-tight leading-none"
          >
            About Me
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-20 items-center">
            {/* Profile Card */}
            <motion.div 
              variants={fadeInUp}
              className="bg-apple-gray-900/40 rounded-2xl p-12 border border-apple-gray-800"
            >
              <div className="relative z-10">
                <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-apple-gray-800 flex items-center justify-center text-6xl font-semibold">
                  AP
                </div>
                
                <h3 className="text-3xl font-semibold text-center mb-4">Aditya Pathania</h3>
                <p className="text-apple-gray-400 text-center mb-8 font-light">
                  AI/ML Engineer | B.Tech CSE @ LPU
                </p>
                
                <div className="flex justify-center gap-4">
                  <a href="https://github.com/aditya3786" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-apple-gray-800 rounded-full flex items-center justify-center hover:bg-apple-gray-700 hover:scale-105 transition-all duration-200 cursor-pointer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  </a>
                  <a href="https://linkedin.com/in/aditya-pathania-680a41247" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-apple-gray-800 rounded-full flex items-center justify-center hover:bg-apple-gray-700 hover:scale-105 transition-all duration-200 cursor-pointer">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </a>
                  <a href="mailto:adityapathania6666@gmail.com" className="w-12 h-12 bg-apple-gray-800 rounded-full flex items-center justify-center hover:bg-apple-gray-700 hover:scale-105 transition-all duration-200 cursor-pointer">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div variants={fadeInUp} className="space-y-10">
              <p className="text-2xl text-apple-gray-300 leading-loose font-normal">
                I'm an AI Engineer and Machine Learning Enthusiast passionate about solving complex problems through intelligent systems. I specialize in building domain-adaptive solutions using Agentic AI, Large Language Models, and Computer Vision to create real-world impact.
              </p>
              
              <p className="text-2xl text-apple-gray-300 leading-loose font-normal">
                My mission is simple: <span className="text-apple-gray-200 font-semibold">I don't just build models—I build systems that think, learn, and deliver results.</span> From fine-tuning transformers to deploying production-grade ML pipelines, I focus on transforming data into actionable intelligence.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-8">
                <div className="bg-apple-gray-900/40 border border-apple-gray-800 rounded-xl p-6 text-center">
                  <div className="text-4xl font-semibold text-apple-blue mb-2">Top 0.5%</div>
                  <div className="text-apple-gray-400 text-sm">Amazon ML 2025</div>
                </div>
                <div className="bg-apple-gray-900/40 border border-apple-gray-800 rounded-xl p-6 text-center">
                  <div className="text-4xl font-semibold text-apple-blue mb-2">10+</div>
                  <div className="text-apple-gray-400 text-sm">ML Projects</div>
                </div>
                <div className="bg-apple-gray-900/40 border border-apple-gray-800 rounded-xl p-6 text-center">
                  <div className="text-4xl font-semibold text-apple-blue mb-2">7.92</div>
                  <div className="text-apple-gray-400 text-sm">CGPA (B.Tech CSE)</div>
                </div>
                <div className="bg-apple-gray-900/40 border border-apple-gray-800 rounded-xl p-6 text-center">
                  <div className="text-4xl font-semibold text-apple-blue mb-2">5+</div>
                  <div className="text-apple-gray-400 text-sm">Certifications</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
