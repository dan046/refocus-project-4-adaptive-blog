/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        320: "320px",
      },
      height: {
        300: "300px",
        176: "176px",
      },
    },
  },
  plugins: [],
}
