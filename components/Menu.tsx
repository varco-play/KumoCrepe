'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { menuItems } from '@/lib/menuData'

type Category = 'all' | 'sweet-crepe' | 'specialty-drink'

const tabs: { label: string; value: Category }[] = [
  { label: 'All',             value: 'all' },
  { label: 'Sweet Crepes',    value: 'sweet-crepe' },
  { label: 'Specialty Drinks', value: 'specialty-drink' },
]

const containerVariants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const cardVariants = {
  hidden:  { opacity: 0, y: 30, scale: 0.95 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { duration: 0.5 } },
}

export default function Menu() {
  const [active, setActive] = useState<Category>('all')

  const filtered = active === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === active)

  return (
    <section id="menu" className="py-24 md:py-36 bg-kumo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-kumo-blue text-sm tracking-[0.3em] uppercase font-body mb-4">
            What We Serve
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-kumo-cream">
            Our <span className="italic text-kumo-blue">Menu</span>
          </h2>
          <p className="text-kumo-muted mt-4 max-w-md mx-auto font-body">
            Hover any card to discover the story behind each creation.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex justify-center gap-3 mb-12 flex-wrap"
        >
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={`px-6 py-2.5 rounded-full text-sm font-body font-medium transition-all duration-300 cursor-pointer ${
                active === tab.value
                  ? 'bg-kumo-blue text-kumo-bg shadow-lg shadow-kumo-blue/30'
                  : 'border border-kumo-blue/30 text-kumo-muted hover:border-kumo-blue hover:text-kumo-blue'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                layout
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                className="flip-card h-80 cursor-pointer group"
              >
                <div className="flip-card-inner relative w-full h-full rounded-2xl">

                  {/* Front */}
                  <div className="flip-card-front absolute inset-0 rounded-2xl overflow-hidden">
                    <Image
                      src={item.imageUrl}
                      alt={item.name}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-kumo-bg/80 via-transparent to-transparent" />

                    {/* Badge */}
                    {item.badge && (
                      <span className="absolute top-4 left-4 px-3 py-1 bg-kumo-blue text-kumo-bg text-xs font-semibold rounded-full font-body">
                        {item.badge}
                      </span>
                    )}

                    {/* Bottom name */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-display text-2xl font-semibold text-kumo-cream">
                        {item.name}
                      </h3>
                      <p className="text-kumo-muted text-sm font-body capitalize">
                        {item.category === 'sweet-crepe' ? 'Sweet Crepe' : 'Specialty Drink'}
                      </p>
                    </div>
                  </div>

                  {/* Back */}
                  <div className="flip-card-back absolute inset-0 rounded-2xl bg-kumo-card border border-kumo-blue/20 flex flex-col justify-center items-center text-center p-8 gap-4">
                    {item.badge && (
                      <span className="px-3 py-1 bg-kumo-blue/20 text-kumo-blue text-xs font-semibold rounded-full font-body border border-kumo-blue/30">
                        {item.badge}
                      </span>
                    )}
                    <h3 className="font-display text-2xl font-semibold text-kumo-cream">
                      {item.name}
                    </h3>
                    <p className="text-kumo-muted text-sm leading-relaxed font-body">
                      {item.description}
                    </p>
                    <p className="font-display text-3xl font-light text-kumo-blue mt-2">
                      {item.price}
                    </p>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View full menu CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-kumo-muted font-body mb-4">
            Explore the full menu and place your order online.
          </p>
          <a
            href="https://order.toasttab.com/online/kumo-312-university-drive"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-kumo-blue/40 text-kumo-blue rounded-full font-body font-medium hover:bg-kumo-blue hover:text-kumo-bg transition-all duration-200 hover:scale-105"
          >
            Full Menu &amp; Order →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
