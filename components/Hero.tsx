'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function CloudShape({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 320 200" className={className} aria-hidden="true" fill="none">
      <path
        d="M60,155 C38,155 20,137 20,115 C20,95 34,79 52,76 C52,74 52,72 52,70 C52,44 72,24 98,24 C112,24 124,30 133,40 C141,28 155,20 171,20 C198,20 220,42 220,69 C220,71 219,73 219,75 C236,80 248,96 248,115 C248,138 229,156 206,156 Z"
        fill="rgba(135,193,232,0.07)"
        stroke="rgba(135,193,232,0.2)"
        strokeWidth="1.5"
      />
    </svg>
  )
}

interface HeroProps {
  onOrderClick: () => void
}

export default function Hero({ onOrderClick }: HeroProps) {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] })

  const imageY      = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0])
  const contentY    = useTransform(scrollYProgress, [0, 0.6], ['0%', '-10%'])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[600px] overflow-hidden">

      {/* ─── Background image — let it breathe ──────────────── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: imageY }}>
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=90"
          alt="Kumo Crepe cafe interior"
          fill priority quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* ─── Minimal atmospheric overlays ───────────────────── */}
      <div className="absolute inset-0 z-10 bg-kumo-bg/35" />
      <div className="absolute inset-0 z-10" style={{
        background: 'linear-gradient(to bottom, rgba(7,13,20,0.55) 0%, transparent 35%, rgba(7,13,20,0.75) 100%)'
      }} />
      <div className="absolute inset-0 z-10" style={{
        background: 'linear-gradient(to right, rgba(7,13,20,0.65) 0%, transparent 50%)'
      }} />

      {/* ─── Floating cloud (desktop only) ───────────────────── */}
      <motion.div
        className="absolute top-20 right-4 lg:right-16 z-20 hidden md:block"
        style={{ width: 'clamp(200px, 28vw, 420px)' }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <CloudShape className="w-full" />
        </motion.div>
      </motion.div>

      {/* ─── Main content ────────────────────────────────────── */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="absolute inset-0 z-30 flex flex-col justify-center md:justify-end
                   px-6 sm:px-10 md:px-14 lg:px-20
                   pt-20 pb-8 md:pt-0 md:pb-20"
      >
        {/* Eyebrow line */}
        <motion.div
          className="flex items-center gap-3 mb-5 md:mb-7"
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
        >
          <div className="w-7 h-px bg-kumo-blue/60 shrink-0" />
          <p className="text-kumo-blue text-[10px] uppercase tracking-[0.4em] font-body whitespace-nowrap">
            French-Inspired · San Marcos, TX
          </p>
        </motion.div>

        {/* ─── Massive stacked heading ─── */}
        <div className="mb-7 md:mb-10">
          <div className="overflow-hidden">
            <motion.h1
              className="font-display font-light text-kumo-cream leading-[0.82] block"
              style={{ fontSize: 'clamp(3.8rem, 17vw, 18rem)' }}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              Kumo
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.span
              className="font-display font-light italic text-kumo-blue leading-[0.82] block"
              style={{ fontSize: 'clamp(3.8rem, 17vw, 18rem)' }}
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.05, delay: 0.68, ease: [0.22, 1, 0.36, 1] }}
            >
              Crepe
            </motion.span>
          </div>
        </div>

        {/* ─── Tagline + CTAs ─── */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-5 sm:gap-12">
          {/* Left: tagline block */}
          <motion.div
            className="max-w-[260px]"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.3 }}
          >
            <p className="font-display italic text-lg text-kumo-cream/70 mb-2">crepe with a soul</p>
            <div className="w-8 h-px bg-kumo-blue/50 mb-3" />
            <p className="text-kumo-muted text-sm font-body leading-relaxed">
              Artisanal crepes and specialty beverages, crafted with love in San Marcos.
            </p>
          </motion.div>

          {/* Right: CTA buttons */}
          <motion.div
            className="flex flex-row gap-3 shrink-0"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 28px rgba(135,193,232,0.3)' }}
              whileTap={{ scale: 0.97 }}
              onClick={onOrderClick}
              className="px-7 py-3.5 bg-kumo-blue text-kumo-bg font-semibold rounded-full text-sm font-body shadow-lg shadow-kumo-blue/20 hover:bg-kumo-blue-light transition-colors cursor-pointer whitespace-nowrap"
            >
              Order Online
            </motion.button>
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.03 }}
              className="px-7 py-3.5 border border-kumo-cream/30 text-kumo-cream rounded-full text-sm font-body hover:border-kumo-blue hover:text-kumo-blue transition-all whitespace-nowrap"
            >
              View Menu
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

    </section>
  )
}
