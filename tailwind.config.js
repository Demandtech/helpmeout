/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#120B48',
      white: '#fff',
      black: '#000000',
      dark: '#141414',
      red: 'red',
      'light-gray': '#727272',
      'light-border': '#CFCFCF',
    },
    fontFamily: {
      'work-sans': ['Work Sans', 'sans-serif'],
      sora: ['Sora', 'sans-serif'],
      inter: ['Inter', 'sans - serif'],
    },
  },
  plugins: [],
}
