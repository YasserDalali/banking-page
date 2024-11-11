/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.*"],
  theme: {




    extend: {

      keyframes: {
        rotateY180: {
          "0%": { transform: "rotateY(0deg)" },
          "50%": { transform: "rotateY(180deg)" },
          "100%": { transform: "rotateY(0deg)" },
        },

      },

      animation: {
        rotateY180: "rotateY180 1s ease-in-out",
      },
      colors: {


        primary: "#172554",
        secondary: "#FF6500",
        tertiary: "#1E3E62",
        accent: "#0B192C",
        dark: "#000000",
        light: "#ffffff",
      },
      fontFamily: {
        minor: ["Poppins", "sans-serif"],
        major: ["Lexend Deca", "sans-serif"],
      },

      spacing: {
        ws: "1rem 2rem",
        ws_lg: "3rem 6rem",
      }
    },


  },
  plugins: [require('tailwindcss-motion')],
}