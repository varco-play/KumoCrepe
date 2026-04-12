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

export default function HomePage() {
  const [orderOpen, setOrderOpen] = useState(false)

  return (
    <>
      <Navbar onOrderClick={() => setOrderOpen(true)} />

      <main>
        <Hero        onOrderClick={() => setOrderOpen(true)} />
        <Marquee />
        <Stats />
        <About />
        <Menu />
        <WhyKumo />
        <Marquee reverse className="mt-0" />
        <Gallery />
        <Testimonials />
        <OrderSection onOrderClick={() => setOrderOpen(true)} />
        <LocationHours />
        <Newsletter />
      </main>

      <Footer />
      <Chatbot />

      <OrderModal isOpen={orderOpen} onClose={() => setOrderOpen(false)} />
    </>
  )
}
