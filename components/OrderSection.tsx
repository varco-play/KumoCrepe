'use client'

import { motion } from 'framer-motion'
import { ShoppingBag } from 'lucide-react'

interface OrderSectionProps {
  onOrderClick: () => void
}

export default function OrderSection({ onOrderClick }: OrderSectionProps) {
  return (
    <section className="py-20 md:py-28 bg-kumo-bg relative overflow-hidden">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background:
            'linear-gradient(135deg, #070D14 0%, #0D1521 40%, #111C2B 70%, #0a1520 100%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Blue glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-96 h-96 rounded-full bg-kumo-blue/5 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: "circOut" }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-16 h-16 rounded-full bg-kumo-blue/15 border border-kumo-blue/30 flex items-center justify-center">
            <ShoppingBag size={28} className="text-kumo-blue" strokeWidth={1.5} />
          </div>

          <h2 className="font-display text-5xl md:text-6xl font-light text-kumo-cream">
            Ready to <span className="italic text-kumo-blue">order?</span>
          </h2>

          <p className="text-kumo-muted text-lg max-w-lg font-body">
            Skip the wait — order online and have your crepes and drinks ready when you arrive.
            Fresh, fast, and made with soul.
          </p>

          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOrderClick}
            className="mt-2 px-10 py-4 bg-kumo-blue text-kumo-bg font-semibold text-lg rounded-full shadow-xl shadow-kumo-blue/25 hover:bg-kumo-blue-light transition-colors duration-200 cursor-pointer"
          >
            Order Online Now
          </motion.button>

          <p className="text-kumo-muted text-sm font-body">
            Or call us at{' '}
            <a href="tel:+15128553255" className="text-kumo-blue hover:text-kumo-blue-light transition-colors">
              512-855-3255
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
