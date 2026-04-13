'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const vp = { once: true, margin: '-80px' } as const

  return (
    <section id="about" className="bg-kumo-dark overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20 pt-16 md:pt-24 pb-10 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ─── Left — text ─── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.9 }}
            className="flex flex-col gap-6 order-2 lg:order-1"
          >
            <div className="flex items-center gap-3">
              <div className="w-6 h-px bg-kumo-blue shrink-0" />
              <p className="text-kumo-blue text-xs tracking-[0.35em] uppercase font-body">Our Story</p>
            </div>

            <h2
              className="font-display font-light text-kumo-cream leading-[0.9]"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
            >
              A little piece of{' '}
              <em className="italic text-kumo-blue">Paris</em>
              <br />in San Marcos
            </h2>

            <div className="w-14 h-px bg-kumo-blue/30" />

            <p className="text-kumo-muted text-lg leading-relaxed font-body">
              Kumo — meaning <em className="text-kumo-text italic">&ldquo;cloud&rdquo;</em> in Japanese — was born from
              a simple dream: to bring the warmth of a Parisian street cafe to the heart of Texas. Every crepe is
              folded by hand using time-honored French technique, paired with specialty beverages crafted to comfort the soul.
            </p>

            <p className="text-kumo-muted/70 text-base leading-relaxed font-body">
              We believe food is more than fuel — it&apos;s memory, connection, and joy. Whether you&apos;re stopping
              in for your morning ritual or sharing a meal with someone you love, Kumo is your soft landing place.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-kumo-blue/10">
              {[
                { value: 'French', label: 'Authentic Recipe' },
                { value: 'Local',  label: 'Fresh Ingredients' },
              ].map(({ value, label }) => (
                <div key={label} className="border-l-2 border-kumo-blue/40 pl-5">
                  <p className="font-display text-3xl font-semibold text-kumo-blue">{value}</p>
                  <p className="text-kumo-muted text-sm mt-1 font-body">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ─── Right — image ─── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={vp}
            transition={{ duration: 0.9 }}
            className="relative order-1 lg:order-2"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] shadow-2xl shadow-black/50">
              <Image
                src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=85"
                alt="Inside Kumo Crepe cafe"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-kumo-dark/40 to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-5 -left-4 md:-left-8 bg-kumo-bg rounded-2xl p-5 shadow-xl border border-kumo-blue/20"
            >
              <p className="font-display text-4xl font-semibold text-kumo-blue">100%</p>
              <p className="text-kumo-muted text-sm mt-1 font-body">Made Fresh Daily</p>
            </motion.div>
          </motion.div>

        </div>
      </div>

    </section>
  )
}
