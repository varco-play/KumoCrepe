'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

function CloudSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} aria-hidden="true">
      <ellipse cx="100" cy="80" rx="90" ry="40" fill="#87C1E8" />
      <ellipse cx="70"  cy="65" rx="50" ry="40" fill="#87C1E8" />
      <ellipse cx="130" cy="60" rx="55" ry="42" fill="#87C1E8" />
      <ellipse cx="100" cy="50" rx="45" ry="38" fill="#87C1E8" />
    </svg>
  )
}

export default function About() {
  const vp = { once: true, margin: '-80px' } as const

  return (
    <section id="about" className="py-24 md:py-36 bg-kumo-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-black/50">
              <Image
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80"
                alt="Inside Kumo Crepe cafe"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-kumo-bg/40 to-transparent" />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 md:-right-8 bg-kumo-card border border-kumo-blue/20 rounded-2xl p-5 shadow-xl"
            >
              <p className="font-display text-4xl font-semibold text-kumo-blue">100%</p>
              <p className="text-kumo-muted text-sm mt-1">Made Fresh Daily</p>
            </motion.div>

            <CloudSVG className="absolute -top-10 -left-10 w-40 opacity-10 animate-float-slow" />
          </motion.div>

          {/* Right — text */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.9 }}
            className="flex flex-col gap-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-kumo-blue text-sm tracking-[0.3em] uppercase font-body"
            >
              Our Story
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="font-display text-5xl md:text-6xl font-light text-kumo-cream leading-tight"
            >
              A little piece of{' '}
              <span className="italic text-kumo-blue">Paris</span>
              <br />in San Marcos
            </motion.h2>

            <div className="w-16 h-px bg-kumo-blue/40" />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-kumo-muted text-lg leading-relaxed font-body"
            >
              Kumo — meaning <em className="text-kumo-text">&ldquo;cloud&rdquo;</em> in Japanese — was born from a simple
              dream: to bring the warmth of a Parisian street cafe to the heart of Texas. Every crepe
              is folded by hand using time-honored French technique, paired with specialty beverages
              crafted to comfort the soul.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-kumo-muted text-base leading-relaxed font-body"
            >
              We believe food is more than fuel — it&apos;s memory, connection, and joy. Whether you&apos;re
              stopping in for your morning ritual or sharing a meal with someone you love, Kumo is
              your soft landing place.
            </motion.p>

            <div className="w-16 h-px bg-kumo-blue/40" />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={vp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-6 pt-2"
            >
              {[
                { value: 'French', label: 'Authentic Recipe' },
                { value: 'Local',  label: 'Fresh Ingredients' },
              ].map(({ value, label }) => (
                <div key={label} className="border-l border-kumo-blue/30 pl-5">
                  <p className="font-display text-3xl font-semibold text-kumo-blue">{value}</p>
                  <p className="text-kumo-muted text-sm mt-1 font-body">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
