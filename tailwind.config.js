module.exports = {
  theme: {
    extend: {
      colors: {
        brand: "#313336",
      },
    },
  },
  plugins: [
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
  ],
};
