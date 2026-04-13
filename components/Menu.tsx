'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { menuItems } from '@/lib/menuData'

export default function Menu() {
  return (
    <section id="menu" className="bg-kumo-dark overflow-hidden py-20 md:py-28">

      {/* ─── Header ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8 }}
        className="px-6 sm:px-10 md:px-14 lg:px-20 mb-12 md:mb-16"
      >
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-kumo-blue text-xs tracking-[0.4em] uppercase font-body mb-4">What We Serve</p>
            <h2
              className="font-display font-light text-kumo-cream leading-tight"
              style={{ fontSize: 'clamp(3rem, 7vw, 7rem)' }}
            >
              Our <em className="italic text-kumo-blue">Menu</em>
            </h2>
          </div>
          <p className="text-kumo-muted font-body text-sm max-w-xs leading-relaxed md:text-right">
            Every item made to order with local ingredients — no shortcuts, no compromises.
          </p>
        </div>
      </motion.div>

      {/* ─── Horizontal scrolling cards ─────────────────────── */}
      <div
        className="flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide
                   px-6 sm:px-10 md:px-14 lg:px-20 pb-6 cursor-grab active:cursor-grabbing"
      >
        {menuItems.map((item, i) => (
          <motion.article
            key={item.id}
            initial={{ opacity: 0, x: -50, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="relative shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
            style={{
              width: 'clamp(240px, 28vw, 340px)',
              height: 'clamp(380px, 60vh, 520px)',
            }}
          >
            {/* Full image */}
            <Image
              src={item.imageUrl}
              alt={item.name}
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.07]"
              sizes="(max-width: 768px) 260px, (max-width: 1200px) 300px, 340px"
              draggable={false}
            />

            {/* Always-on gradient */}
            <div className="absolute inset-0" style={{
              background: 'linear-gradient(to top, rgba(7,13,20,0.90) 0%, rgba(7,13,20,0.25) 45%, transparent 70%)'
            }} />

            {/* Hover shimmer */}
            <div className="absolute inset-0 bg-kumo-blue/0 group-hover:bg-kumo-blue/8 transition-colors duration-500" />

            {/* Badge */}
            {item.badge && (
              <span className="absolute top-4 left-4 px-3 py-1 bg-kumo-blue text-kumo-bg text-xs font-semibold rounded-full font-body z-10">
                {item.badge}
              </span>
            )}

            {/* Category top-right */}
            <span className="absolute top-4 right-4 text-kumo-muted/60 text-[10px] tracking-[0.2em] uppercase font-body">
              {item.category === 'sweet-crepe' ? 'Crepe' : 'Drink'}
            </span>

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
              {/* Description on hover */}
              <p className="text-kumo-text/80 text-sm leading-relaxed font-body mb-3
                            opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0
                            transition-all duration-400 ease-out">
                {item.description}
              </p>
              <div className="flex items-end justify-between gap-3">
                <div>
                  <h3 className="font-display font-light text-kumo-cream" style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)' }}>
                    {item.name}
                  </h3>
                  <p className="text-kumo-muted text-xs font-body mt-0.5">
                    {item.category === 'sweet-crepe' ? 'Sweet Crepe' : 'Specialty Drink'}
                  </p>
                </div>
                <span className="font-display text-2xl font-light text-kumo-blue shrink-0">{item.price}</span>
              </div>
            </div>
          </motion.article>
        ))}

        {/* End spacer */}
        <div className="shrink-0 w-6 md:w-20" />
      </div>

      {/* ─── CTA row ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="mt-12 md:mt-16 px-6 sm:px-10 md:px-14 lg:px-20 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
      >
        <div className="w-10 h-px bg-kumo-blue/30 shrink-0 hidden sm:block" />
        <p className="text-kumo-muted font-body text-sm">Hand-folded French technique · Local ingredients · No shortcuts</p>
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
