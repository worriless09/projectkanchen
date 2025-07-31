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
        primary: '#7A9A95',         // Main brand color
        'primary-dark': '#48655F',  // Darker version for contrast
        accent: '#E7F0EE',          // Light card/fill backgrounds
        secondary: '#A8C4BF',       // Highlights or rings
        ink: '#24342f',             // Main text color
      },
      boxShadow: {
        card: '0 10px 30px rgba(0,0,0,0.08)',           // Soft elevation
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
