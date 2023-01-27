/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      'all': ['Futura']
    },
    container: {
      padding: '2rem',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}
