/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        1200: "1200px",
        'smallCover': "100px",
      },
      maxHeight: {
        'smallCover': "100px",
      }
    },
  },
  plugins: [],
}