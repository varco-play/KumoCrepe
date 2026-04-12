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
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.png"
            alt="Kumo Crepe"
            width={80}
            height={50}
            className="object-contain"
            priority
          />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-kumo-muted hover:text-kumo-blue transition-colors duration-200 text-sm tracking-widest uppercase font-body"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          onClick={onOrderClick}
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-kumo-blue text-kumo-bg text-sm font-semibold rounded-full hover:bg-kumo-blue-light transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
        >
          Order Online
        </button>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-kumo-text p-1"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-kumo-dark/95 backdrop-blur-md border-t border-kumo-card px-6 py-8 flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="text-kumo-cream text-xl font-display hover:text-kumo-blue transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { handleLinkClick(); onOrderClick() }}
              className="mt-2 px-6 py-3 bg-kumo-blue text-kumo-bg font-semibold rounded-full text-center hover:bg-kumo-blue-light transition-colors cursor-pointer"
            >
              Order Online
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
