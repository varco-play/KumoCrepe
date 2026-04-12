'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name:     'Madison R.',
    location: 'San Marcos, TX',
    rating:   5,
    text:     'The Strawberry Dream crepe is absolutely divine. I come here every Saturday — it\'s become my ritual. The Kumo Cloud Latte pairs perfectly with it.',
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
    text:     'Discovered this gem during freshman year and I\'ve been a regular ever since. The atmosphere is cozy, the staff is warm, and the Bananas Foster is life-changing.',
    avatar:   'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=80',
  },
]

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Testimonials() {
  return (
    <section className="py-24 md:py-36 bg-kumo-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-kumo-blue text-sm tracking-[0.3em] uppercase font-body mb-4">
            Testimonials
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-kumo-cream">
            Loved by <span className="italic text-kumo-blue">our community</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="bg-kumo-card border border-kumo-blue/10 hover:border-kumo-blue/30 rounded-2xl p-8 flex flex-col gap-5 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-kumo-blue fill-kumo-blue"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-kumo-text text-base leading-relaxed font-body flex-1">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-2 border-t border-kumo-blue/10">
                <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
                <div>
                  <p className="font-display font-semibold text-kumo-cream">{t.name}</p>
                  <p className="text-kumo-muted text-xs font-body">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
