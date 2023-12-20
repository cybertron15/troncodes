/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto', // Adds a new `font-inter` class
        pacifico: 'Pacifico' // Adds a new `font-inter` class
      }
    },
  },
  plugins: [],
}

