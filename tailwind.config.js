/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#512BC8',
      },
      fontFamily: {
        Onest: ["Onest", "sans-serif"],
      },
    },
  },

  plugins: [],
}