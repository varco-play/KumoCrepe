import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kumo-bg':         '#070D14',
        'kumo-dark':       '#0D1521',
        'kumo-card':       '#111C2B',
        'kumo-blue':       '#87C1E8',
        'kumo-blue-light': '#B8D9F0',
        'kumo-blue-dark':  '#5B9EC9',
        'kumo-cream':      '#F0F6FC',
        'kumo-text':       '#D6E8F5',
        'kumo-muted':      '#7A9BB5',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'float':          'float 6s ease-in-out infinite',
        'float-slow':     'float 9s ease-in-out infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':       { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
