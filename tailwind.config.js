/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        medill: {
          purple: "#4E2A84",
          dark: "#2B1A45"
        }
      }
    }
  },
  plugins: []
}
