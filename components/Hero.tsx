'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Animated steam particle
function SteamParticle({ left, delay, duration }: { left: string; delay: number; duration: number }) {
  return (
    <motion.div
      className="absolute bottom-0 pointer-events-none"
      style={{ left }}
      initial={{ y: 0, opacity: 0, scaleX: 1 }}
      animate={{
        y: [-10, -120, -200],
        opacity: [0, 0.5, 0],
        scaleX: [0.8, 1.4, 0.6],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeOut',
      }}
    >
      <div
        className="w-3 rounded-full blur-sm"
        style={{
          height: '60px',
          background: 'linear-gradient(to top, rgba(135,193,232,0.4), transparent)',
        }}
      />
    </motion.div>
  )
}

// Coffee cup SVG decoration
function CoffeeCupDecor({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 90" className={className} fill="none" aria-hidden="true">
      {/* Cup body */}
      <path d="M12 25 L20 75 Q40 82 60 75 L68 25 Z" fill="rgba(135,193,232,0.12)" stroke="rgba(135,193,232,0.3)" strokeWidth="1.5" />
      {/* Cup rim */}
      <ellipse cx="40" cy="25" rx="28" ry="6" fill="rgba(135,193,232,0.08)" stroke="rgba(135,193,232,0.3)" strokeWidth="1.5" />
      {/* Handle */}
      <path d="M68 35 Q85 35 85 50 Q85 65 68 65" stroke="rgba(135,193,232,0.3)" strokeWidth="1.5" fill="none" />
      {/* Saucer */}
      <ellipse cx="40" cy="78" rx="35" ry="7" fill="rgba(135,193,232,0.08)" stroke="rgba(135,193,232,0.25)" strokeWidth="1" />
      {/* Steam lines */}
      <path d="M30 18 Q28 10 32 4 Q36 -2 34 -10" stroke="rgba(135,193,232,0.4)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M40 15 Q38 6 42 0 Q46 -6 44 -14" stroke="rgba(135,193,232,0.3)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M50 18 Q48 10 52 4 Q56 -2 54 -10" stroke="rgba(135,193,232,0.4)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    </svg>
  )
}

interface HeroProps {
  onOrderClick: () => void
}

export default function Hero({ onOrderClick }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  // Parallax: image moves up slower than scroll
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  // Subtle scale effect
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08])
  // Content fades and lifts on scroll
  const contentY = useTransform(scrollYProgress, [0, 0.6], ['0%', '-20%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const headline = ['K', 'u', 'm', 'o', '\u00A0', 'C', 'r', 'e', 'p', 'e']

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=85"
          alt="Kumo Crepe cozy cafe interior"
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 z-10 bg-kumo-bg/50" />
      <div className="absolute inset-0 z-10 bg-linear-to-b from-kumo-bg/80 via-transparent to-kumo-bg" />
      <div className="absolute inset-0 z-10 bg-linear-to-r from-kumo-bg/40 via-transparent to-kumo-bg/40" />

      {/* Steam particles rising from bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-20 h-48 pointer-events-none">
        {[
          { left: '15%',  delay: 0,   duration: 4.5 },
          { left: '28%',  delay: 1.2, duration: 5 },
          { left: '42%',  delay: 0.6, duration: 4 },
          { left: '57%',  delay: 2,   duration: 5.5 },
          { left: '70%',  delay: 0.3, duration: 4.2 },
          { left: '83%',  delay: 1.7, duration: 4.8 },
        ].map((p) => (
          <SteamParticle key={p.left} {...p} />
        ))}
      </div>

      {/* Floating coffee cup — top right */}
      <motion.div
        className="absolute top-24 right-8 md:right-20 z-20"
        animate={{ y: [0, -12, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <CoffeeCupDecor className="w-16 md:w-24 opacity-60" />
      </motion.div>

      {/* Floating coffee cup — left */}
      <motion.div
        className="absolute bottom-32 left-8 md:left-20 z-20"
        animate={{ y: [0, 14, 0], rotate: [2, -2, 2] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <CoffeeCupDecor className="w-12 md:w-16 opacity-40" />
      </motion.div>

      {/* Hero content */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-30 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.1em' }}
          animate={{ opacity: 1, letterSpacing: '0.35em' }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-kumo-blue text-xs md:text-sm uppercase mb-8 font-body tracking-[0.35em]"
        >
          French-Inspired · San Marcos, TX
        </motion.p>

        {/* Letter-by-letter headline */}
        <h1 className="font-display text-6xl sm:text-8xl lg:text-[8rem] font-light text-kumo-cream leading-[0.85] mb-6 flex flex-wrap justify-center gap-x-0">
          {headline.map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 60, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.5 + i * 0.07,
                type: 'spring',
                stiffness: 100,
                damping: 15,
              }}
              style={
                i >= 5
                  ? {
                      background: 'linear-gradient(135deg, #B8D9F0, #F0F6FC, #87C1E8)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      fontStyle: 'italic',
                    }
                  : undefined
              }
            >
              {char}
            </motion.span>
          ))}
        </h1>

        {/* Tagline with underline reveal */}
        <div className="relative inline-block mb-4">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="font-display italic text-2xl md:text-3xl text-kumo-muted"
          >
            crepe with a soul
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1.8, ease: 'easeOut' }}
            className="absolute -bottom-1 left-0 right-0 h-px bg-linear-to-r from-transparent via-kumo-blue to-transparent origin-left"
          />
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-kumo-muted text-base md:text-lg max-w-md mx-auto mb-12 font-body"
        >
          Artisanal crepes and specialty beverages, crafted with love in the heart of San Marcos.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.9 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.06, boxShadow: '0 0 30px rgba(135,193,232,0.4)' }}
            whileTap={{ scale: 0.97 }}
            onClick={onOrderClick}
            className="px-9 py-4 bg-kumo-blue text-kumo-bg font-semibold rounded-full text-lg shadow-lg shadow-kumo-blue/30 hover:bg-kumo-blue-light transition-colors duration-200 cursor-pointer"
          >
            Order Online
          </motion.button>
          <motion.a
            href="#menu"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="px-9 py-4 border border-kumo-blue/40 text-kumo-cream font-semibold rounded-full text-lg hover:border-kumo-blue hover:text-kumo-blue transition-all duration-200"
          >
            Explore Menu
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border border-kumo-blue/40 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-kumo-blue rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
