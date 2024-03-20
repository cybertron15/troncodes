/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: 'Roboto', // Adds a new `font-inter` class
        pacifico: 'Pacifico', // Adds a new `font-inter` class
        caveat: 'Caveat' // Adds a new `font-inter` class
      },
      animation: {
        heartbeat: 'heartbeat 1s infinite',
        fadeout: 'fadeout 1s forwards',
        fadein: 'fadein 500ms forwards',
      },
      keyframes: {
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '60%': { transform: 'scale(1.2)' },
        },
        fadeout: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        fadein: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }

    },
  },
  plugins: [],
}

