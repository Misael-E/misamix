/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/renderer/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      'light-black': '#3c383e',
      pink: {
        400: '#c097cf',
        500: '#c27ba0'
      },
      purple: '#8260a2',
      white: '#eeeeee'
    }
  },
  plugins: []
}
