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
      green: {
        DEFAULT: "#12d66f",
      },
      brown: {
        DEFAULT: "#d67d12",
      },
      blue: {
        DEFAULT: "#128bd6",
      },
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-image": "url('/src/assets/Background.png')",
      }),
      inset: {
        46: "11.25rem",
      },
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
