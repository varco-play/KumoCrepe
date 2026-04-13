// Standalone wave transition — placed between sections in page.tsx.
// topColor = the section ABOVE, bottomColor = the section BELOW.
// lineHeight:0 on the wrapper guarantees zero gap between sections.

const PATHS = [
  'M0,90 L0,55 Q200,10 480,50 Q720,85 960,40 Q1200,5 1440,50 L1440,90 Z',
  'M0,90 L0,45 Q300,0 600,50 Q900,90 1200,35 Q1350,10 1440,55 L1440,90 Z',
  'M0,90 L0,50 Q400,5 720,55 Q1040,90 1440,40 L1440,90 Z',
  'M0,90 L0,60 Q200,20 480,65 Q700,90 900,50 Q1100,15 1440,55 L1440,90 Z',
  'M0,90 L0,40 Q360,90 720,45 Q1080,0 1440,60 L1440,90 Z',
]

interface WaveDividerProps {
  topColor: string
  bottomColor: string
  variant?: number   // 0–4, cycles if out of range
  flip?: boolean     // mirror horizontally for variety
}

export default function WaveDivider({
  topColor,
  bottomColor,
  variant = 0,
  flip = false,
}: WaveDividerProps) {
  const d = PATHS[variant % PATHS.length]
  return (
    <div style={{ background: topColor, lineHeight: 0, display: 'block', fontSize: 0 }}>
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        aria-hidden="true"
        style={{
          display: 'block',
          width: '100%',
          height: 'clamp(48px, 5vw, 80px)',
          transform: flip ? 'scaleX(-1)' : 'none',
        }}
      >
        <path d={d} fill={bottomColor} />
      </svg>
    </div>
  )
}
