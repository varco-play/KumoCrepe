'use client'

// Infinite scrolling ticker — pure CSS, no JS
const items = [
  '☕  Kumo Cloud Latte',
  '✦  Strawberry Dream Crepe',
  '☕  Lavender Earl Grey',
  '✦  Paris Morning Crepe',
  '☕  Caramel Cascade',
  '✦  Bananas Foster Crepe',
  '☕  Specialty Drinks',
  '✦  Fresh Daily',
]

interface MarqueeProps {
  reverse?: boolean
  className?: string
}

export default function Marquee({ reverse = false, className = '' }: MarqueeProps) {
  const track = [...items, ...items] // doubled for seamless loop

  return (
    <div className={`relative overflow-hidden py-4 border-y border-kumo-blue/10 bg-kumo-dark/50 ${className}`}>
      {/* Fade edges */}
      <div className="absolute inset-y-0 left-0 w-24 z-10 bg-linear-to-r from-kumo-dark to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 z-10 bg-linear-to-l from-kumo-dark to-transparent pointer-events-none" />

      <div
        className="flex gap-0 whitespace-nowrap"
        style={{
          animationName: reverse ? 'marquee-reverse' : 'marquee',
          animationDuration: '30s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {track.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-8 text-sm font-body tracking-widest uppercase"
          >
            <span className="text-kumo-blue/80">{item}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
