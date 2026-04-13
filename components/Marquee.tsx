'use client'

const items = [
  '☕  Kumo Cloud Latte',
  '✦  Strawberry Dream Crepe',
  '☕  Lavender Earl Grey',
  '✦  Paris Morning Crepe',
  '☕  Caramel Cascade',
  '✦  Bananas Foster Crepe',
  '☕  Made Fresh Daily',
  '✦  San Marcos, TX',
]

interface MarqueeProps {
  reverse?: boolean
  className?: string
  /** 'dark' = #0D1521 (default), 'bg' = #070D14 */
  bg?: 'dark' | 'bg'
}

export default function Marquee({ reverse = false, className = '', bg = 'dark' }: MarqueeProps) {
  const track = [...items, ...items]
  const bgClass   = bg === 'bg' ? 'bg-kumo-bg'   : 'bg-kumo-dark'
  const fadeFrom  = bg === 'bg' ? 'from-kumo-bg'  : 'from-kumo-dark'

  return (
    <div className={`relative overflow-hidden py-4 ${bgClass} ${className}`}>
      {/* Fade edges */}
      <div className={`absolute inset-y-0 left-0 w-20 z-10 bg-linear-to-r ${fadeFrom} to-transparent pointer-events-none`} />
      <div className={`absolute inset-y-0 right-0 w-20 z-10 bg-linear-to-l ${fadeFrom} to-transparent pointer-events-none`} />

      <div
        className="flex gap-0 whitespace-nowrap"
        style={{
          animationName: reverse ? 'marquee-reverse' : 'marquee',
          animationDuration: '32s',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      >
        {track.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-2 px-7 text-xs font-body tracking-[0.25em] uppercase">
            <span className="text-kumo-blue/60">·</span>
            <span className="text-kumo-blue/80">{item}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
