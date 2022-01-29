module.exports = {
  purge: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    opacity: ["responsive", "hover", "focus", "disabled"],
    backgroundColor: ["responsive", "hover", "focus", "disabled"],
    extend: {},
  },
  plugins: [],
};
