/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
      },
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
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px', 
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
