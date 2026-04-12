'use client'

import { motion } from 'framer-motion'

const benefits = [
  {
    emoji: '🌿',
    title: 'Fresh Daily',
    description:
      'All crepes are made to order using fresh, locally sourced ingredients — never frozen, never rushed.',
  },
  {
    emoji: '🥐',
    title: 'French Recipe',
    description:
      'Authentic French technique with a soul. Our thin, delicate batter is whisked fresh each morning.',
  },
  {
    emoji: '☕',
    title: 'Specialty Drinks',
    description:
      'House-crafted lattes, teas, and seasonal beverages that pair perfectly with every crepe.',
  },
  {
    emoji: '✨',
    title: 'Crepe with a Soul',
    description:
      "Every dish is made with genuine care. We believe food tastes better when it's made with love.",
  },
]

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function WhyKumo() {
  return (
    <section className="py-24 md:py-36 relative overflow-hidden bg-kumo-dark">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #87C1E8 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Large blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-kumo-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-kumo-blue text-sm tracking-[0.3em] uppercase font-body mb-4">Why Kumo</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-kumo-cream">
            Made with <span className="italic text-kumo-blue">intention</span>
          </h2>
        </motion.div>

        {/* Benefits grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {benefits.map(({ emoji, title, description }, idx) => (
            <motion.div
              key={title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="relative flex flex-col items-center text-center p-8 rounded-2xl bg-kumo-card border border-kumo-blue/10 hover:border-kumo-blue/40 transition-colors duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-b from-kumo-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              <motion.div
                className="text-4xl mb-5 relative z-10"
                animate={{ rotate: [0, -4, 4, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: idx * 0.7 }}
              >
                {emoji}
              </motion.div>
              <h3 className="font-display text-xl font-semibold text-kumo-cream mb-3 relative z-10">{title}</h3>
              <p className="text-kumo-muted text-sm leading-relaxed font-body relative z-10">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
