/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'primary': 'var(--primary-color)',
    },
    fontFamily: {
      sans: ['Rubik', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}
