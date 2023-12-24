/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto', // Adds a new `font-inter` class
        pacifico: 'Pacifico' // Adds a new `font-inter` class
      },
      animation: {
        heartbeat: 'heartbeat 1s infinite',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '60%': { transform: 'scale(1.2)' },
        }
      }

    },
  },
  plugins: [],
}

