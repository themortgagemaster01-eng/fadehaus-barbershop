/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink:        '#141110',
        ink2:       '#1b1714',
        panel:      '#221d19',
        gold:       '#c9a24b',
        goldbright: '#e0c079',
        cream:      '#f2ece0',
        muted:      '#b8ae9e',
        line:       '#332c24',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        serif:   ['"Playfair Display"', 'serif'],
        label:   ['Oswald', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      keyframes: {
        shimmer: { '0%,100%': { opacity: 0.4 }, '50%': { opacity: 1 } },
      },
      animation: { shimmer: 'shimmer 3s ease-in-out infinite' },
    },
  },
  plugins: [],
}
