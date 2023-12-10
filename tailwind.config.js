const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "Galactic-Blue": "#755CDE",
        "Summer-Yellow": "#F6A560",
        "almost-pink": "#F39E9E",
        "Light-Red": "#EB7565",
        cyan: "#61C4B7",
        "somewhat-purple": "#552049",
        blackish: "#030303",
        "medium-brown": "#7A746E",
        "Light-Cream": "#FFF7F0",
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
