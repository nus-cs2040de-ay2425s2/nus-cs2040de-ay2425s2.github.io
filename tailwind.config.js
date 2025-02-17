/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cs-black': 'rgb(0, 0, 0)',
        'cs-text': 'rgb(255, 255, 255)',
        'cs-content': 'rgb(255, 255, 255)',
        'cs-content-text': 'rgb(33, 37, 41)',
      },
      fontFamily: {
        'pt-sans': ['"PT Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

