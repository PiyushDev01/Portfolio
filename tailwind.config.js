/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fira': ['Fira Code', 'monospace'],
        'ubuntu': ['Ubuntu', 'sans-serif'],
        custom: ['ClashDisplay', 'sans-serif'],
      },
      colors: {
        mybg: '#181827',
      },
    },
  },
  plugins: [],
}