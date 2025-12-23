
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        christmas: ['"Mountains of Christmas"', 'cursive'],
        quicksand: ['Quicksand', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fffdf0',
          100: '#fefad9',
          200: '#fdf3a7',
          300: '#fbe669',
          400: '#f9d32b',
          500: '#f1bc11',
          600: '#d59409',
          700: '#ab6a0a',
          800: '#8c5310',
          900: '#774411',
          950: '#452306',
        },
      },
    },
  },
  plugins: [],
}
