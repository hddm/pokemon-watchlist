const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["../../packages/ui/src/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    colors: {
      indigo: colors.indigo,
      yellow: colors.yellow,
      gray: colors.gray,
    }
  },
  plugins: [],
};