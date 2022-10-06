const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../packages/ui/src/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      indigo: colors.indigo,
      gray: colors.gray,
    }
  },
  plugins: [],
};