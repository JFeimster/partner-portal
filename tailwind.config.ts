import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0f172a',
        panel: '#111827',
        accent: '#22c55e',
        accent2: '#38bdf8',
        muted: '#94a3b8'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(2, 6, 23, 0.12)'
      }
    },
  },
  plugins: [],
}
export default config
