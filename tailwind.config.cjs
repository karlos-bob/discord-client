/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        login: "url('src/assets/images/login.svg')",
        discord: "url('src/assets/images/discord.svg')",
      },
    },
    container: {
      center: true,
    },
    colors: {
      white: "#fff",
      black: "#000",
      input: "#E7F0FE",
      link: "#05AEF4",
      "mobile-primary": "#36393E",
      "brand-experiment": {
        DEFAULT: "#5766F2",
        500: "#4752C4",
      },
      "header-secondary": "#B8BBBE",
      "grey-dark": "#A3A6AA",
      status: {
        danger: "#ED4245",
      },
    },
    fontFamily: {
      helvetica: ["Helvetica Neue", "sans-serif"],
    },
  },
  plugins: [],
};
