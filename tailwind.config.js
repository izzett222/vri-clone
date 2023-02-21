const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', ...fontFamily.sans],
      },
      boxShadow: {
        item: "0 0 120px 0 rgba(0, 0, 0, 0.1)",
        small: "0 0 60px 0 rgba(0,0,0, 0.1)"
      },
      colors: {
        primary: "#0077B3",
        dark: "#333",
        sec: "#cc4100"
      },
      backgroundImage: {
        banner: "url('/banner.jpg')"
      }
    },
  },
  plugins: [],
}
