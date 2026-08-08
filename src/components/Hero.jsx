import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { PerspectiveCamera } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Minimal floating sphere
function FloatingSphere() {
  const meshRef = useRef()
  
  useFrame((state) => {
    const time = state.clock.elapsedTime
    
    // Very subtle floating animation (small amplitude, slow frequency)
    meshRef.current.position.y = Math.sin(time * 0.3) * 0.15
    meshRef.current.position.x = 2 + Math.cos(time * 0.2) * 0.1
    
    // Extremely slow rotation on multiple axes for organic feel
    meshRef.current.rotation.y = time * 0.03
    meshRef.current.rotation.x = Math.sin(time * 0.15) * 0.1
    meshRef.current.rotation.z = Math.cos(time * 0.1) * 0.05
  })

  return (
    <mesh ref={meshRef} position={[2, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshStandardMaterial
        color="#E5E5E7"
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  )
}

// Camera Controller with scroll-based movement
function CameraController({ scrollProgressRef }) {
  const targetPosition = useRef(new THREE.Vector3(0, 0.5, 7))

  useFrame((state) => {
    if (!state.camera) return

    const scrollProgress = scrollProgressRef.current

    // Simplified linear camera movement (no complex section calculations)
    // Maps scroll progress directly to camera Z position
    // 0% scroll = Z:7, 100% scroll = Z:0.5
    const targetZ = 7 - (scrollProgress * 6.5)
    
    targetPosition.current.set(0, 0.5, targetZ)

    // Smooth interpolation using lerp with reduced factor for smoother movement
    state.camera.position.lerp(targetPosition.current, 0.05)
  })

  return null
}

// Main 3D Scene
function Scene({ scrollProgressRef }) {
  return (
    <>
      {/* Soft lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} />
      <directionalLight position={[-5, -5, -5]} intensity={0.2} />
      
      {/* Minimal geometry */}
      <FloatingSphere />
      
      {/* Camera controller */}
      <CameraController scrollProgressRef={scrollProgressRef} />
    </>
  )
}

// Hero Component
export default function Hero() {
  const heroRef = useRef()
  const scrollProgressRef = useRef(0)
  const [isMobile, setIsMobile] = useState(false)
  const rafRef = useRef(null)

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    let ticking = false

    const updateScrollProgress = () => {
      // Calculate scroll progress based on entire page
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      const scrollTop = window.scrollY
      
      // Normalize scroll progress (0 to 1) across entire page
      const maxScroll = documentHeight - windowHeight
      const progress = maxScroll > 0 ? Math.max(0, Math.min(1, scrollTop / maxScroll)) : 0
      
      // Update ref directly - no state updates, no re-renders!
      scrollProgressRef.current = progress
      
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        rafRef.current = requestAnimationFrame(updateScrollProgress)
        ticking = true
      }
    }

    // Passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })
    updateScrollProgress() // Initial call
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  return (
    <section 
      ref={heroRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* 3D Canvas Background - Desktop Only */}
      {!isMobile && (
        <div className="absolute inset-0">
          <Canvas
            gl={{ antialias: false, powerPreference: 'high-performance' }}
            dpr={[1, 1.5]}
          >
            <PerspectiveCamera 
              makeDefault 
              position={[0, 0.5, 7]} 
              fov={45}
              near={0.1}
              far={100}
            />
            <Scene scrollProgressRef={scrollProgressRef} />
          </Canvas>
        </div>
      )}

      {/* Mobile Gradient Background */}
      {isMobile && (
        <div className="absolute inset-0 bg-gradient-to-br from-black via-apple-gray-900 to-black" />
      )}

      {/* Subtle Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Hero Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-8 md:px-16">
        <div className="max-w-5xl text-center">
          {/* Name */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 text-7xl md:text-[120px] lg:text-[140px] font-semibold tracking-tight leading-none"
          >
            Aditya Pathania
          </motion.h1>

          {/* Role/Title */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 text-xl md:text-2xl font-normal text-apple-gray-400 leading-relaxed"
          >
            AI Engineer | Machine Learning Enthusiast | Problem Solver
          </motion.p>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16 text-base md:text-lg text-apple-gray-500 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Crafting next-generation AI solutions through Agentic AI, Large Language Models, Computer Vision, and Data-Driven Intelligence.
          </motion.p>

          {/* Minimal CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <a 
              href="#projects" 
              className="text-apple-blue text-lg font-normal hover:opacity-60 transition-all duration-200 cursor-pointer inline-block hover:translate-x-1"
            >
              View work →
            </a>
            <div className="mt-8 flex items-center justify-center gap-5 text-sm text-apple-gray-400">
              <a href="https://github.com/aditya3786" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
              <span aria-hidden="true">·</span>
              <a href="https://linkedin.com/in/aditya-pathania-680a41247" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
              <span aria-hidden="true">·</span>
              <a href="mailto:adityapathania6666@gmail.com" className="hover:text-white transition-colors">Email</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
