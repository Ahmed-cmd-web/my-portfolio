/** @format */

module.exports = {
  purge: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    fontWeight: {
      thin: 100,
      medium: 500,
    },
    fontFamily: {
      flashy: ['"Snell Roundhand"', "sans-serif"],
      sans: ["Montserrat", "Montserrat"],
      normal: ["sans-serif"],
    },

    colors: {
      purple: "#55198b",
      white: "#fff",
      black: "#171c28",
      grey: "#e9e9e9",
      orange: "#FFA500",
      red: "#FF0000",
      gainsboro: "#c3c3c3",
      grey2: "#868e96",
      purple2: "#645beb",
      blue: "#0000FF",
    },
    extend: {
      lineHeight: {
        stan: "40px",
      },
    },
  },
  variants: {
    extend: {},
    scrollSnapType: ["responsive"],
  },
  plugins: [require("tailwindcss-textshadow")],
};
