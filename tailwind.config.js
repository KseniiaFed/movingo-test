const colors = require("tailwindcss/colors");

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      teal: {
        DEFAULT: "#0fcbd7",
        dark: "#0e959e",
      },
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-image": "url('/src/assets/Background.png')",
      }),
    },
    borderWidth: {
      DEFAULT: "1px",
      0.5: "0.5px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
