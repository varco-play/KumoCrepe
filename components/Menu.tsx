'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { menuItems } from '@/lib/menuData'

export default function Menu() {
  const trackRef = useRef<HTMLDivElement>(null)

  return (
    <section id="menu" className="py-24 md:py-36 bg-kumo-bg overflow-hidden">

      {/* ─── Section Header ─────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.8 }}
        className="px-6 sm:px-10 md:px-16 lg:px-24 mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
      >
        <div>
          <p className="text-kumo-blue text-xs tracking-[0.4em] uppercase font-body mb-4">
            What We Serve
          </p>
          <h2 className="font-display text-5xl md:text-7xl font-light text-kumo-cream leading-tight">
            Our <span className="italic text-kumo-blue">Menu</span>
          </h2>
        </div>
        <p className="text-kumo-muted font-body text-sm max-w-xs leading-relaxed md:text-right">
          Handcrafted crepes and specialty beverages made fresh daily. Hover any card to discover the story.
        </p>
      </motion.div>

      {/* ─── Horizontal Card Track ──────────────────────────── */}
      <div className="relative">
        {/* Drag hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="px-6 sm:px-10 md:px-16 lg:px-24 mb-6 flex items-center gap-3 md:hidden"
        >
          <div className="w-4 h-px bg-kumo-blue/40" />
          <p className="text-kumo-muted text-xs tracking-widest uppercase font-body">Swipe to explore</p>
        </motion.div>

        {/* Scrollable track */}
        <div
          ref={trackRef}
          className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide px-6 sm:px-10 md:px-16 lg:px-24 pb-4 cursor-grab active:cursor-grabbing"
        >
          {menuItems.map((item, i) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, x: -60, filter: 'blur(12px)' }}
              whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.65, delay: i * 0.1 }}
              className="relative shrink-0 w-[260px] md:w-[300px] lg:w-[320px] rounded-2xl overflow-hidden group cursor-pointer"
              style={{ height: 'clamp(380px, 45vh, 480px)' }}
            >
              {/* Background image */}
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-cover object-center scale-100 group-hover:scale-108 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 260px, (max-width: 1024px) 300px, 320px"
                draggable={false}
              />

              {/* Base gradient — always visible */}
              <div className="absolute inset-0 bg-linear-to-t from-kumo-bg via-kumo-bg/40 to-transparent transition-opacity duration-500" />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-kumo-bg/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Badge */}
              {item.badge && (
                <span className="absolute top-4 left-4 px-3 py-1 bg-kumo-blue text-kumo-bg text-xs font-semibold rounded-full font-body z-10">
                  {item.badge}
                </span>
              )}

              {/* Category label — top right */}
              <span className="absolute top-4 right-4 text-kumo-muted/70 text-xs tracking-[0.2em] uppercase font-body">
                {item.category === 'sweet-crepe' ? 'Crepe' : 'Drink'}
              </span>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                {/* Description slides up on hover */}
                <div className="overflow-hidden">
                  <p className="text-kumo-text/80 text-sm leading-relaxed font-body mb-3 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400 ease-out">
                    {item.description}
                  </p>
                </div>

                {/* Name + price row */}
                <div className="flex items-end justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-light text-kumo-cream leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-kumo-muted text-xs font-body mt-0.5">
                      {item.category === 'sweet-crepe' ? 'Sweet Crepe' : 'Specialty Drink'}
                    </p>
                  </div>
                  <span className="font-display text-2xl font-light text-kumo-blue shrink-0">
                    {item.price}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}

          {/* End spacer */}
          <div className="shrink-0 w-6 md:w-16 lg:w-24" />
        </div>
      </div>

      {/* ─── CTA ────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-14 px-6 sm:px-10 md:px-16 lg:px-24 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
      >
        <div className="w-12 h-px bg-kumo-blue/30 shrink-0 hidden sm:block" />
        <p className="text-kumo-muted font-body text-sm">
          All crepes made fresh to order · Local ingredients · No shortcuts
        </p>
        <a
          href="https://order.toasttab.com/online/kumo-312-university-drive"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-7 py-3 border border-kumo-blue/40 text-kumo-blue rounded-full font-body text-sm font-medium hover:bg-kumo-blue hover:text-kumo-bg transition-all duration-300 hover:scale-105 shrink-0"
        >
          Full Menu &amp; Order Online →
        </a>
      </motion.div>
    </section>
  )
}
