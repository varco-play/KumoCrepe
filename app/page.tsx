'use client'

import { useState } from 'react'
import Navbar        from '@/components/Navbar'
import Hero          from '@/components/Hero'
import Marquee       from '@/components/Marquee'
import Stats         from '@/components/Stats'
import About         from '@/components/About'
import Menu          from '@/components/Menu'
import WhyKumo       from '@/components/WhyKumo'
import Gallery       from '@/components/Gallery'
import Testimonials  from '@/components/Testimonials'
import OrderSection  from '@/components/OrderSection'
import OrderModal    from '@/components/OrderModal'
import LocationHours from '@/components/LocationHours'
import Newsletter    from '@/components/Newsletter'
import Footer        from '@/components/Footer'
import Chatbot       from '@/components/Chatbot'
import WaveDivider   from '@/components/WaveDivider'

// Color tokens — keep in sync with tailwind config
const BG   = '#070D14'  // kumo-bg
const DARK  = '#0D1521'  // kumo-dark

export default function HomePage() {
  const [orderOpen, setOrderOpen] = useState(false)

  return (
    <>
      <Navbar onOrderClick={() => setOrderOpen(true)} />

      <main>
        {/* kumo-bg */}
        <Hero onOrderClick={() => setOrderOpen(true)} />

        {/* kumo-bg → kumo-dark */}
        <WaveDivider topColor={BG} bottomColor={DARK} variant={0} />

        {/* kumo-dark */}
        <Marquee bg="dark" />
        <About />

        {/* kumo-dark → kumo-bg */}
        <WaveDivider topColor={DARK} bottomColor={BG} variant={1} flip />

        {/* kumo-bg */}
        <Stats />

        {/* kumo-bg → kumo-dark */}
        <WaveDivider topColor={BG} bottomColor={DARK} variant={2} />

        {/* kumo-dark */}
        <Menu />

        {/* kumo-dark → kumo-bg */}
        <WaveDivider topColor={DARK} bottomColor={BG} variant={3} flip />

        {/* kumo-bg */}
        <WhyKumo />

        {/* kumo-bg → kumo-dark */}
        <WaveDivider topColor={BG} bottomColor={DARK} variant={4} />

        {/* kumo-dark */}
        <Testimonials />

        {/* kumo-dark → kumo-bg */}
        <WaveDivider topColor={DARK} bottomColor={BG} variant={0} flip />

        {/* kumo-bg */}
        <Marquee reverse bg="bg" />
        <Gallery />

        {/* kumo-bg → kumo-dark */}
        <WaveDivider topColor={BG} bottomColor={DARK} variant={3} />

        {/* kumo-dark */}
        <OrderSection onOrderClick={() => setOrderOpen(true)} />

        {/* kumo-dark → kumo-bg */}
        <WaveDivider topColor={DARK} bottomColor={BG} variant={2} flip />

        {/* kumo-bg */}
        <LocationHours />

        {/* kumo-bg → kumo-dark */}
        <WaveDivider topColor={BG} bottomColor={DARK} variant={1} />

        {/* kumo-dark */}
        <Newsletter />
      </main>

      <Footer />
      <Chatbot />
      <OrderModal isOpen={orderOpen} onClose={() => setOrderOpen(false)} />
    </>
  )
}
