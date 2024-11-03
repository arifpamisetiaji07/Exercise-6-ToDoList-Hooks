/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        extend: {
          '0%': { transform: 'translateX(0rem)' },
          '40%': { transform: 'translateX(3rem)'},
          '100%': { transform: 'scale(3, 1)' },
        },
        fade90: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0.9' },
        },
      },
      animation: {
        'icon-extend': 'extend 0.5s ease-out 1 forwards',
        'fade-90': 'fade90 0.1s linear 1 forwards',
      }
    },
  },
  plugins: [],
}

