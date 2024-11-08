/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FCD757",
        secondary: "#4F635A",
        accent: "#9BB7A9",
        whitish: "#F3E8EE",
        darkish: "#162920",
      },
    },
  },
  plugins: [],
}
