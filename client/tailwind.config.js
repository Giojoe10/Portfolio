/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#2ba5ff",
        tertiary: "#0B7503",
        text: "#000000",

        "dark-primary": "#1e1e22",
        "dark-secondary": "#73f190",
        "dark-tertiary": "#2ba5ff",
        "dark-text": "#ffffff",
      },
    },
    screens: {
      lg: { max: "2047px" },

      sm: { max: "1023px" },
    },
  },
  plugins: [],
  darkMode: "class",
};
