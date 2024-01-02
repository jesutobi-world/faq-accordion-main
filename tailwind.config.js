/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'mobile-pattern': "url('../assets/images/background-pattern-mobile.svg')",
        'desktop-pattern': "url('../assets/images/background-pattern-desktop.svg')",
      },
      colors: {
        'custom-darkPurple': ' hsl(292, 42%, 14%)',
        'custom-lightPurple': 'hsl(292, 16%, 49%)',
        'custom-lightPink': 'hsl(275, 100%, 97%)'
      },
    },
  },
  plugins: [],
}