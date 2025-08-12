/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b0f1a",
        panel: "#0f1423",
        border: "#1d2438",
        text: "#e8eefb",
        muted: "#8b94a7",
        brand: "#7c5cff",
        accent: "#22d3ee"
      }
    },
  },
  plugins: [],
}
