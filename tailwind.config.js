// const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: () => ({
      primary: "#7027A0",
      secondary: "#fff",
    }),

    extend: {
      borderColor: {
        primary: "#7027A0",
        secondary: "#fff",
      },
      textColor: {
        primary: "#7027A0",
        secondary: "#fff",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          lg: "1140px",
          xl: "1140px",
          "2xl": "1320px",
        },
      },
      fontFamily: {
        sans: ["Red Rose", "cursive"],
        serif: ["Poppins", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
