/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7A9A95',
        'primary-dark': '#48655F',
        accent: '#E7F0EE',
        secondary: '#A8C4BF',
        ink: '#24342f',
      },
      keyframes: {
        rise: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        rise: 'rise .6s ease-out forwards',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,.08)',
        hover: '0 20px 45px rgba(122,154,149,.15)',
      },
    },
  },
  plugins: [],
}
