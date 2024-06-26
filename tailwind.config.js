/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,js,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: "Poppins"
    },
    extend: {
      colors: {
        Teal: "#2F6CD6",
        HumingBird: "#d1f1ee",
        yellow: "#e4d63b",
        Solitude: "#e9e9ea",
        gray: "#4B4B4C",
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%, 100%": {
            transform: "translateX(5%)"
          },
          "50%": {
            transform: "translateX(-120%)"
          }
        }
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    }
  },
  plugins: [],
};
