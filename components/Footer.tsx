'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Phone, Clock } from 'lucide-react'

// Inline SVG social icons (lucide-react v1+ dropped brand icons)
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
    </svg>
  )
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  )
}

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Menu',     href: '#menu' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Location', href: '#location' },
]

export default function Footer() {
  return (
    <footer className="bg-kumo-dark border-t border-kumo-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.png"
              alt="Kumo Crepe"
              width={90}
              height={56}
              className="object-contain"
            />
            <p className="font-display italic text-kumo-muted text-lg">
              crepe with a soul
            </p>
            <p className="text-kumo-muted text-sm font-body leading-relaxed max-w-xs">
              French-inspired crepes and specialty beverages in the heart of San Marcos, Texas.
            </p>
            {/* Socials */}
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com/kumocrepe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-kumo-card border border-kumo-blue/20 flex items-center justify-center text-kumo-muted hover:text-kumo-blue hover:border-kumo-blue transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://www.facebook.com/kumocrepe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-kumo-card border border-kumo-blue/20 flex items-center justify-center text-kumo-muted hover:text-kumo-blue hover:border-kumo-blue transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-kumo-cream text-lg font-semibold">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-kumo-muted hover:text-kumo-blue transition-colors font-body text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://order.toasttab.com/online/kumo-312-university-drive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-kumo-blue hover:text-kumo-blue-light transition-colors font-body text-sm font-medium"
                >
                  Order Online →
                </a>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-kumo-cream text-lg font-semibold">Contact</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-kumo-blue mt-0.5 shrink-0" />
                <span className="text-kumo-muted text-sm font-body">
                  312 University Drive<br />San Marcos, TX 78666
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-kumo-blue shrink-0" />
                <a
                  href="tel:+15128553255"
                  className="text-kumo-muted hover:text-kumo-blue transition-colors text-sm font-body"
                >
                  (512) 855-3255
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="text-kumo-blue mt-0.5 shrink-0" />
                <span className="text-kumo-muted text-sm font-body">
                  Tue – Sat: 11 AM – 9 PM<br />
                  <span className="text-kumo-muted/60">Closed Sun &amp; Mon</span>
                </span>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-kumo-card flex flex-col sm:flex-row justify-between items-center gap-3 text-kumo-muted/60 text-xs font-body">
          <p>© {new Date().getFullYear()} Kumo Crepe. All rights reserved.</p>
          <p className="italic font-display text-kumo-muted/40">crepe with a soul</p>
        </div>
      </div>
    </footer>
  )
}
