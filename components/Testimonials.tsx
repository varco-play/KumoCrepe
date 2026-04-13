'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name:     'Madison R.',
    location: 'San Marcos, TX',
    rating:   5,
    text:     "The Strawberry Dream crepe is absolutely divine. I come here every Saturday — it's become my ritual. The Kumo Cloud Latte pairs perfectly with it.",
    avatar:   'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=120&q=80',
  },
  {
    name:     'Carlos M.',
    location: 'Austin, TX',
    rating:   5,
    text:     'Best crepes in Central Texas, no contest. The Paris Morning reminded me of a café I visited near Notre Dame. Absolutely worth the drive from Austin.',
    avatar:   'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=80',
  },
  {
    name:     'Taylor K.',
    location: 'Texas State Student',
    rating:   5,
    text:     "Discovered this gem during freshman year and I've been a regular ever since. The atmosphere is cozy, the staff is warm, and the Bananas Foster is life-changing.",
    avatar:   'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-kumo-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20 pt-16 md:pt-24 pb-10 md:pb-16">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="mb-14 relative"
        >
          {/* Giant decorative quote */}
          <div
            className="absolute -top-4 -left-2 font-display text-kumo-blue/8 select-none leading-none pointer-events-none"
            style={{ fontSize: 'clamp(8rem, 18vw, 18rem)' }}
            aria-hidden="true"
          >
            &ldquo;
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-kumo-blue shrink-0" />
              <p className="text-kumo-blue text-xs tracking-[0.35em] uppercase font-body">Testimonials</p>
            </div>
            <h2
              className="font-display font-light text-kumo-cream leading-tight"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)' }}
            >
              Loved by our <em className="italic text-kumo-blue">community</em>
            </h2>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -4 }}
              className="bg-kumo-card border border-kumo-blue/10 hover:border-kumo-blue/30 rounded-2xl p-7 flex flex-col gap-5 transition-all duration-300"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={14} className="text-kumo-blue fill-kumo-blue" />
                ))}
              </div>
              <p className="text-kumo-text text-base leading-relaxed font-body flex-1">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-kumo-blue/10">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0">
                  <Image src={t.avatar} alt={t.name} fill className="object-cover" sizes="40px" />
                </div>
                <div>
                  <p className="font-display font-semibold text-kumo-cream text-sm">{t.name}</p>
                  <p className="text-kumo-muted text-xs font-body">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
