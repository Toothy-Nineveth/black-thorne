/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#0a0e27',
        'secondary-navy': '#151933',
        'accent-red': '#8b0000',
        'bright-red': '#ff0000',
        'gold-accent': '#d4af37',
      },
    },
  },
  plugins: [],
}
