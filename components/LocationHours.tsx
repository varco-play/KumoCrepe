'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'

const hours = [
  { day: 'Monday',    time: 'Closed',            closed: true },
  { day: 'Tuesday',   time: '11:00 AM – 9:00 PM', closed: false },
  { day: 'Wednesday', time: '11:00 AM – 9:00 PM', closed: false },
  { day: 'Thursday',  time: '11:00 AM – 9:00 PM', closed: false },
  { day: 'Friday',    time: '11:00 AM – 9:00 PM', closed: false },
  { day: 'Saturday',  time: '11:00 AM – 9:00 PM', closed: false },
  { day: 'Sunday',    time: 'Closed',            closed: true },
]

const slideLeft = {
  hidden:  { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
}
const slideRight = {
  hidden:  { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
}

export default function LocationHours() {
  return (
    <section id="location" className="bg-kumo-bg pt-24 md:pt-36 pb-24 md:pb-36 overflow-hidden">
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
            Find Us
          </p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-kumo-cream">
            Visit <span className="italic text-kumo-blue">Kumo</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

          {/* Left — info + hours */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="flex flex-col gap-8"
          >
            {/* Address & Phone */}
            <div className="flex flex-col gap-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-kumo-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin size={18} className="text-kumo-blue" />
                </div>
                <div>
                  <p className="text-kumo-cream font-body font-medium mb-1">Address</p>
                  <p className="text-kumo-muted font-body">
                    312 University Drive<br />
                    San Marcos, Texas 78666
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-kumo-blue/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-kumo-blue" />
                </div>
                <div>
                  <p className="text-kumo-cream font-body font-medium mb-1">Phone</p>
                  <a
                    href="tel:+15128553255"
                    className="text-kumo-muted hover:text-kumo-blue transition-colors font-body"
                  >
                    (512) 855-3255
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-kumo-blue/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock size={18} className="text-kumo-blue" />
                </div>
                <div>
                  <p className="text-kumo-cream font-body font-medium mb-1">Hours</p>
                  <p className="text-kumo-muted text-sm font-body">Open Tue – Sat</p>
                </div>
              </div>
            </div>

            {/* Hours table */}
            <div className="bg-kumo-card rounded-2xl border border-kumo-blue/10 overflow-hidden">
              {hours.map((h, i) => (
                <div
                  key={h.day}
                  className={`flex justify-between items-center px-6 py-3.5 font-body text-sm ${
                    i !== hours.length - 1 ? 'border-b border-kumo-bg/60' : ''
                  }`}
                >
                  <span className={h.closed ? 'text-kumo-muted' : 'text-kumo-cream'}>
                    {h.day}
                  </span>
                  <span className={h.closed ? 'text-kumo-muted/60' : 'text-kumo-blue'}>
                    {h.time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Google Maps embed */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="rounded-2xl overflow-hidden border border-kumo-blue/10 shadow-xl shadow-black/30 min-h-[400px]"
          >
            {/* TODO: Replace src with real embed URL from Google Maps > Share > Embed a map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3468.5!2d-97.9408!3d29.8816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865ca9b2c3a1e7a1%3A0x0!2s312+University+Dr%2C+San+Marcos%2C+TX+78666!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kumo Crepe location map"
            />
          </motion.div>
        </div>
      </div>

    </section>
  )
}
