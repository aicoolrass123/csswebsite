/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1120',
          deep: '#070B14',
          soft: '#141C2E',
          muted: '#26314B',
        },
        claret: {
          DEFAULT: '#7B2130',
          deep: '#5A1622',
          bright: '#9B3348',
          soft: '#F2E2E5',
        },
        parchment: '#F6F5F1',
        paper: '#FBFAF7',
        linen: '#E6E3DB',
        slatebody: '#525866',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        none: '0px',
        sm: '2px',
        DEFAULT: '2px',
        md: '3px',
        lg: '4px',
        xl: '4px',
        '2xl': '6px',
        '3xl': '8px',
        full: '9999px',
      },
      letterSpacing: {
        archival: '0.14em',
        caps: '0.16em',
        folio: '0.24em',
        display: '-0.022em',
      },
      /* The world tints hairlines and captions a step finer than Tailwind's
         stock opacity scale; without these the /12, /15, /55, /65 and /85
         utilities are never generated and every hairline falls back to
         gray-200. */
      opacity: {
        12: '0.12',
        15: '0.15',
        35: '0.35',
        45: '0.45',
        55: '0.55',
        65: '0.65',
        85: '0.85',
      },
      maxWidth: {
        content: '80rem',
        read: '68ch',
      },
    },
  },
  plugins: [],
}
