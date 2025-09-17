/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppinsFont: ["Poppins-SemiBold", "sans-serif"],
      },
      backgroundImage: {
        heroPattern: "url('../src/assets/stock_code2.jpeg')",
        heroPattern2: "url('../src/assets/landscape-4.jpg')",
        heroPatternWhite: "url('../src/assets/white-abstract2.jpg')",
      },
    },
  },
  plugins: [],
};
