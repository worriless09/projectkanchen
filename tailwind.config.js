/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#7A9A95', // Misty Mountains
      primaryHover: '#6B8B86',
      accent: '#4A6660',
      background: '#F8FAFA',
      textDark: '#2C3E3A',
      textLight: '#6B7B77',
      card: '#FFFFFF',
      border: '#E5EEEC' ,
      hover: '0 20px 45px rgba(122,154,149,.15)',     // Stronger hover
      },
      keyframes: {
        rise: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise .6s ease-out forwards',
      }
    },
  },
  plugins: [],
}
