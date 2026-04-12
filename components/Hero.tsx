'use client'

import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

function CloudOutline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 240" className={className} aria-hidden="true" fill="none">
      <ellipse cx="200" cy="160" rx="185" ry="72" fill="rgba(135,193,232,0.04)" stroke="rgba(135,193,232,0.18)" strokeWidth="1.5" />
      <ellipse cx="138" cy="128" rx="105" ry="82" fill="rgba(135,193,232,0.05)" stroke="rgba(135,193,232,0.15)" strokeWidth="1.5" />
      <ellipse cx="268" cy="118" rx="112" ry="88" fill="rgba(135,193,232,0.05)" stroke="rgba(135,193,232,0.15)" strokeWidth="1.5" />
      <ellipse cx="200" cy="100" rx="92" ry="76" fill="rgba(135,193,232,0.06)" stroke="rgba(135,193,232,0.2)" strokeWidth="1.5" />
    </svg>
  )
}

function WaveDivider() {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: 'clamp(40px, 5vw, 90px)' }}
      >
        <path
          d="M0,90 L0,45 Q240,0 480,45 Q720,90 960,45 Q1200,0 1440,45 L1440,90 Z"
          fill="#070D14"
        />
      </svg>
    </div>
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

  const imageY     = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const contentY   = useTransform(scrollYProgress, [0, 0.7], ['0%', '-14%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0])

  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] overflow-hidden"
    >
      {/* ─── Parallax Background ─────────────────────────────── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: imageY, scale: imageScale }}
      >
        <Image
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=85"
          alt="Kumo Crepe cafe interior"
          fill
          priority
          quality={85}
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* ─── Atmospheric Overlays ────────────────────────────── */}
      <div className="absolute inset-0 z-10 bg-kumo-bg/55" />
      <div className="absolute inset-0 z-10 bg-linear-to-b from-kumo-bg/75 via-transparent to-kumo-bg" />
      {/* Left vignette so left-aligned text is legible */}
      <div className="absolute inset-0 z-10 bg-linear-to-r from-kumo-bg/80 via-kumo-bg/30 to-transparent" />

      {/* ─── Cloud Decoration — upper right (desktop only) ───── */}
      <motion.div
        className="absolute top-8 right-0 z-20 hidden md:block w-[42vw] max-w-[560px]"
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.4, delay: 0.8 }}
      >
        <motion.div
          animate={{ y: [0, -18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        >
          <CloudOutline className="w-full" />
        </motion.div>
      </motion.div>

      {/* ─── Hero Content ────────────────────────────────────── */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-30 absolute inset-0 flex flex-col justify-center md:justify-end px-6 sm:px-10 md:px-16 lg:px-24 pt-20 pb-10 md:pt-0 md:pb-28"
      >
        {/* Eyebrow */}
        <motion.div
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="w-6 h-px bg-kumo-blue/50 shrink-0" />
          <p className="text-kumo-blue text-[10px] uppercase font-body tracking-[0.25em] whitespace-nowrap">
            French-Inspired · San Marcos, TX
          </p>
        </motion.div>

        {/* Stacked massive heading — editorial */}
        <div className="mb-8 md:mb-10 overflow-hidden">
          <div className="overflow-hidden">
            <motion.h1
              className="font-display font-light text-kumo-cream leading-[0.85] block"
              style={{ fontSize: 'clamp(3.5rem, 16vw, 16rem)' }}
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              Kumo
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.span
              className="font-display font-light italic block text-kumo-blue leading-[0.85]"
              style={{ fontSize: 'clamp(3.5rem, 16vw, 16rem)' }}
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, delay: 0.72, ease: [0.22, 1, 0.36, 1] }}
            >
              Crepe
            </motion.span>
          </div>
        </div>

        {/* Tagline + CTAs row */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-16">
          {/* Left: tagline + description */}
          <motion.div
            className="max-w-xs"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.25 }}
          >
            <p className="font-display italic text-xl md:text-2xl text-kumo-cream/80 mb-3">
              crepe with a soul
            </p>
            <div className="w-10 h-px bg-kumo-blue/40 mb-3" />
            <p className="text-kumo-muted text-sm font-body leading-relaxed">
              Artisanal crepes and specialty beverages, crafted with love in the heart of San Marcos.
            </p>
          </motion.div>

          {/* Right: CTAs */}
          <motion.div
            className="flex flex-row gap-3 shrink-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.45 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 28px rgba(135,193,232,0.35)' }}
              whileTap={{ scale: 0.97 }}
              onClick={onOrderClick}
              className="px-8 py-3.5 bg-kumo-blue text-kumo-bg font-semibold rounded-full text-sm md:text-base shadow-lg shadow-kumo-blue/25 hover:bg-kumo-blue-light transition-colors duration-200 cursor-pointer font-body whitespace-nowrap"
            >
              Order Online
            </motion.button>
            <motion.a
              href="#menu"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 border border-kumo-blue/40 text-kumo-cream font-semibold rounded-full text-sm md:text-base hover:border-kumo-blue hover:text-kumo-blue transition-all duration-200 font-body whitespace-nowrap"
            >
              Explore Menu
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* ─── Vertical scroll hint — right edge ───────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute right-6 md:right-8 bottom-28 z-30 flex flex-col items-center gap-3 hidden md:flex"
      >
        <motion.div
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-16 bg-linear-to-b from-transparent via-kumo-blue/50 to-transparent origin-top"
        />
        <p className="text-kumo-muted text-[9px] tracking-[0.35em] uppercase font-body"
           style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
          Scroll
        </p>
      </motion.div>

      {/* ─── Wave Divider ─────────────────────────────────────── */}
      <WaveDivider />
    </section>
  )
}
