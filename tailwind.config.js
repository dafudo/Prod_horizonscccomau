/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        emerald: { 50: '#ecfdf5', 100: '#d1fae5', 200: '#a7f3d0', 600: '#059669', 700: '#047857', 800: '#065f46' },
        purple: { 50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 600: '#9333ea', 700: '#7e22ce', 800: '#6b21a8', 900: '#581c87' }
      },
      fontFamily: { sans: ['Inter', 'sans-serif'] }
    }
  },
  plugins: [],
}
