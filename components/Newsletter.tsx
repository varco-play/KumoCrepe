'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Check } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail]         = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email.trim()) return
    // TODO: Connect to Mailchimp / ConvertKit / Resend for actual email capture
    setSubmitted(true)
  }

  return (
    <section className="relative py-24 md:py-36 overflow-hidden bg-kumo-bg">
      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient-shift"
        style={{
          background: 'linear-gradient(135deg, #070D14 0%, #0D1A2A 50%, #0a1520 100%)',
          backgroundSize: '200% 200%',
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full bg-kumo-blue/5 blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: "circOut" }}
          className="flex flex-col items-center gap-5"
        >
          <div className="w-14 h-14 rounded-full bg-kumo-blue/10 border border-kumo-blue/30 flex items-center justify-center">
            <Mail size={24} className="text-kumo-blue" strokeWidth={1.5} />
          </div>

          <h2 className="font-display text-5xl md:text-6xl font-light text-kumo-cream">
            Stay in the <span className="italic text-kumo-blue">clouds</span>
          </h2>

          <p className="text-kumo-muted font-body text-lg max-w-md">
            Join our community for seasonal specials, new menu drops, and a little love from Kumo delivered to your inbox.
          </p>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-3 px-8 py-4 bg-kumo-blue/15 border border-kumo-blue/30 rounded-full text-kumo-blue font-body font-medium"
              >
                <Check size={20} />
                You&apos;re on the list! We&apos;ll be in touch soon.
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 w-full max-w-md mt-2"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 px-5 py-3.5 bg-kumo-card border border-kumo-blue/20 rounded-full text-kumo-text placeholder:text-kumo-muted focus:outline-none focus:border-kumo-blue transition-colors font-body text-sm"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 bg-kumo-blue text-kumo-bg font-semibold rounded-full hover:bg-kumo-blue-light transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer font-body whitespace-nowrap"
                >
                  Join Now
                </button>
              </motion.form>
            )}
          </AnimatePresence>

          <p className="text-kumo-muted/60 text-xs font-body">
            No spam, ever. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
