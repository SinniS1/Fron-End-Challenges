/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gradientColorStops: {
        'primary': '#FF527B',
        'secondary': '#FF6A3A',
      }
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('mobile-only', "@media screen and (max-width: theme('screens.sm'))"); // instead of hard-coded 640px use sm breakpoint value from config. Or anything
    }),
  ],
}