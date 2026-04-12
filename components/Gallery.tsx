'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const images = [
  { url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80', alt: 'Cozy cafe interior', tall: true },
  { url: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&q=80', alt: 'French crepe close-up', tall: false },
  { url: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80', alt: 'Latte art coffee', tall: false },
  { url: 'https://images.unsplash.com/photo-1445116572660-236099ec97a0?w=800&q=80', alt: 'Warm cafe ambiance', tall: false },
  { url: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=800&q=80', alt: 'Sweet crepe with berries', tall: true },
  { url: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&q=80', alt: 'Iced coffee drink', tall: false },
  { url: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=800&q=80', alt: 'Specialty tea drink', tall: false },
  { url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=800&q=80', alt: 'Dessert waffle', tall: false },
  { url: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&q=80', alt: 'Coffee shop atmosphere', tall: true },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-36 bg-kumo-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14"
        >
          <p className="text-kumo-blue text-sm tracking-[0.3em] uppercase font-body mb-4">Gallery</p>
          <h2 className="font-display text-5xl md:text-6xl font-light text-kumo-cream">
            A taste of <span className="italic text-kumo-blue">Kumo</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4" style={{ gridAutoRows: '200px' }}>
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.94 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-2xl overflow-hidden cursor-pointer group ${img.tall ? 'row-span-2' : ''}`}
            >
              <Image
                src={img.url}
                alt={img.alt}
                fill
                className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-kumo-blue/0 group-hover:bg-kumo-blue/10 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
