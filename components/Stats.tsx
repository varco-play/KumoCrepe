'use client'

import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useRef, useEffect } from 'react'

function AnimatedNumber({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref       = useRef<HTMLSpanElement>(null)
  const inView    = useInView(ref, { once: true, margin: '-60px' })
  const motionVal = useMotionValue(0)
  const spring    = useSpring(motionVal, { duration: 2200, bounce: 0 })

  useEffect(() => { if (inView) motionVal.set(target) }, [inView, motionVal, target])
  useEffect(() => spring.on('change', (v) => {
    if (ref.current) ref.current.textContent = Math.round(v) + suffix
  }), [spring, suffix])

  return <span ref={ref}>0{suffix}</span>
}

const stats = [
  { value: 12,  suffix: '+',  label: 'Crepe Varieties'   },
  { value: 8,   suffix: '+',  label: 'Specialty Drinks'  },
  { value: 100, suffix: '%',  label: 'Made Fresh Daily'  },
  { value: 5,   suffix: '★',  label: 'Average Rating'    },
]

export default function Stats() {
  return (
    <section className="bg-kumo-bg py-20 md:py-24 relative overflow-hidden">
      {/* Subtle dot grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle, #87C1E8 1px, transparent 1px)',
        backgroundSize: '36px 36px',
      }} />
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-48 bg-kumo-blue/5 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-6">
          {stats.map(({ value, suffix, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="flex flex-col items-center text-center group"
            >
              <div
                className="font-display font-light text-kumo-blue mb-3 group-hover:text-kumo-blue-light transition-colors duration-300"
                style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}
              >
                <AnimatedNumber target={value} suffix={suffix} />
              </div>
              <div className="w-8 h-px bg-kumo-blue/30 mb-3" />
              <p className="text-kumo-muted text-xs tracking-[0.25em] uppercase font-body">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
