/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      xxs: "320px",
      xs: "425px",
      md: "768px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}