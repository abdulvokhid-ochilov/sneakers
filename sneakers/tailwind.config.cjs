/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      grey: "#F5F5F5",
      pink: "#FF3C78",
      midnight: "#0A083A",
      gray: "#6C6B6B",
      white: "#fff",
      blue: "#315BFF",
      harbor: "#8AA8F8",
      orange: "#FE7831",
      green: "#02BE83",
    },
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
    },
    boxShadow: {
      gr: "0 10px 30px -10px #02BE83",
      md: "0 10px 30px -10px #0A083A",
      "3xl": "0 10px 30px -10px #FF3C78",
      bl: "0 10px 30px -10px #315BFF",
      "1xl": "0 10px 30px -25px #315BFF",
    },
    extend: {},
  },
  plugins: [],
};
