/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(-3676.16px)' },  
        }
      },
      animation: {
        slide: 'slide 20s linear infinite',
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.hover-pause:hover .animate-slide': {
          animationPlayState: 'paused',
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ],
};
