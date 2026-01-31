/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}" // Scan semua file di src untuk class Tailwind
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'himawarna-gradient': 'linear-gradient(to right, #2563eb, #9333ea, #db2777, #eab308)',
      },
    },
  },
  plugins: [],
}
