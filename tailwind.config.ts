import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Brand palette — warm red primary + electric signal colors
        brand: {
          50: '#FFF4F4',
          100: '#FFE4E4',
          200: '#FFCACA',
          300: '#FFA0A0',
          400: '#FF6B6B',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
          800: '#991B1B',
          900: '#7F1D1D',
          950: '#450A0A',
        },
        // Ink — warm near-blacks for text & surfaces
        ink: {
          50: '#FAFAF9',
          100: '#F4F4F3',
          200: '#E4E4E2',
          300: '#C8C8C4',
          400: '#9A9A95',
          500: '#6E6E69',
          600: '#4A4A46',
          700: '#2E2E2B',
          800: '#1C1C1A',
          850: '#141412',
          900: '#0C0C0B',
          950: '#050504',
        },
        // Signal — for GPS/status/live indicators
        signal: {
          live: '#22C55E',
          warn: '#F59E0B',
          sos: '#EF4444',
          info: '#3B82F6',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Editorial scale
        'micro': ['11px', { lineHeight: '1.4', letterSpacing: '0.06em' }],
        'xs': ['12px', { lineHeight: '1.5' }],
        'sm': ['14px', { lineHeight: '1.5' }],
        'base': ['16px', { lineHeight: '1.6' }],
        'lg': ['18px', { lineHeight: '1.5' }],
        'xl': ['20px', { lineHeight: '1.4' }],
        '2xl': ['24px', { lineHeight: '1.3' }],
        '3xl': ['30px', { lineHeight: '1.2' }],
        '4xl': ['38px', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        '5xl': ['48px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '6xl': ['64px', { lineHeight: '1', letterSpacing: '-0.03em' }],
        '7xl': ['84px', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        '8xl': ['108px', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        '9xl': ['140px', { lineHeight: '0.85', letterSpacing: '-0.045em' }],
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '48px',
      },
      boxShadow: {
        'glow-brand': '0 0 40px rgba(239, 68, 68, 0.35)',
        'glow-live': '0 0 40px rgba(34, 197, 94, 0.35)',
        'inner-soft': 'inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      animation: {
        'pulse-live': 'pulse-live 2s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s ease-out infinite',
        'slide-up': 'slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'grid-move': 'grid-move 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'pulse-live': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.45' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.85)', opacity: '0.8' },
          '100%': { transform: 'scale(2.2)', opacity: '0' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'grid-move': {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(40px, 40px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
