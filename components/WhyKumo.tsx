'use client'

import { motion } from 'framer-motion'

const benefits = [
  {
    num: '01',
    title: 'Fresh Daily',
    description: 'All crepes are made to order using fresh, locally sourced ingredients — never frozen, never rushed.',
  },
  {
    num: '02',
    title: 'French Recipe',
    description: 'Authentic French technique with a soul. Our thin, delicate batter is whisked fresh each morning.',
  },
  {
    num: '03',
    title: 'Specialty Drinks',
    description: 'House-crafted lattes, teas, and seasonal beverages that pair perfectly with every crepe.',
  },
  {
    num: '04',
    title: 'Crepe with a Soul',
    description: "Every dish is made with genuine care. We believe food tastes better when it's made with love.",
  },
]

export default function WhyKumo() {
  return (
    <section className="bg-kumo-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20 pt-16 md:pt-24 pb-10 md:pb-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.8 }}
          className="mb-14 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-kumo-blue shrink-0" />
              <p className="text-kumo-blue text-xs tracking-[0.35em] uppercase font-body">Why Kumo</p>
            </div>
            <h2
              className="font-display font-light text-kumo-cream leading-tight"
              style={{ fontSize: 'clamp(2.6rem, 6vw, 5.5rem)' }}
            >
              Made with <em className="italic text-kumo-blue">intention</em>
            </h2>
          </div>
          <p className="text-kumo-muted font-body text-sm max-w-xs leading-relaxed md:text-right">
            From the first fold of the crepe to the last sip of your latte — every detail is intentional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
          {benefits.map(({ num, title, description }, i) => (
            <motion.div
              key={num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative flex gap-6 py-8 border-b border-kumo-blue/10 group"
            >
              {/* Large muted number */}
              <span
                className="font-display font-light text-kumo-blue/10 select-none shrink-0 leading-none group-hover:text-kumo-blue/20 transition-colors duration-300"
                style={{ fontSize: 'clamp(3rem, 5vw, 5rem)' }}
              >
                {num}
              </span>

              <div className="pt-1">
                <h3 className="font-display text-xl md:text-2xl font-light text-kumo-cream mb-2">
                  {title}
                </h3>
                <p className="text-kumo-muted text-sm leading-relaxed font-body">{description}</p>
              </div>

              {/* Blue left accent bar */}
              <div className="absolute left-0 top-0 w-0.5 h-0 bg-kumo-blue group-hover:h-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  )
}
