'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { label: 'About',    href: '#about' },
  { label: 'Menu',     href: '#menu' },
  { label: 'Gallery',  href: '#gallery' },
  { label: 'Location', href: '#location' },
]

interface NavbarProps {
  onOrderClick: () => void
}

export default function Navbar({ onOrderClick }: NavbarProps) {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLinkClick = () => setMobileOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-kumo-dark/90 backdrop-blur-md shadow-xl shadow-black/30 border-b border-kumo-card'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-16 md:h-20">

        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0 z-10">
          <Image
            src="/logo.png"
            alt="Kumo Crepe"
            width={80}
            height={50}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop nav links — Brewlab-style vertical slide on hover */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href} style={{ overflow: 'hidden', height: '1.1em' }}>
              <a
                href={link.href}
                className="flex flex-col group"
                style={{ transform: 'translateY(0)' }}
              >
                {/* Primary text */}
                <span className="block text-kumo-muted text-xs tracking-[0.3em] uppercase font-body transition-transform duration-300 ease-out group-hover:-translate-y-full">
                  {link.label}
                </span>
                {/* Hover text — slides in from below */}
                <span className="block text-kumo-blue text-xs tracking-[0.3em] uppercase font-body transition-transform duration-300 ease-out translate-y-0 group-hover:-translate-y-full">
                  {link.label}
                </span>
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — Brewlab-style dual-layer button */}
        <button
          onClick={onOrderClick}
          className="hidden md:inline-flex items-center overflow-hidden relative px-5 py-2.5 bg-kumo-blue text-kumo-bg text-xs font-semibold rounded-full hover:bg-kumo-blue-light transition-colors duration-300 active:scale-95 cursor-pointer font-body tracking-[0.1em] uppercase group"
        >
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">
            Order Online
          </span>
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            Order Online
          </span>
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-kumo-text p-1 z-10"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-kumo-dark/95 backdrop-blur-md border-t border-kumo-card px-6 py-10 flex flex-col gap-7 overflow-hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className="text-kumo-cream text-3xl font-display font-light hover:text-kumo-blue transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={() => { handleLinkClick(); onOrderClick() }}
              className="mt-2 px-6 py-3.5 bg-kumo-blue text-kumo-bg font-semibold rounded-full text-center hover:bg-kumo-blue-light transition-colors cursor-pointer font-body"
            >
              Order Online
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
