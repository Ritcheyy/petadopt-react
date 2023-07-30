/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        grey: {
          10: "var(--grey-10)",
          20: "var(--grey-20)",
          30: "var(--grey-30)",
          40: "var(--grey-40)",
        },
        auth: {
          primary: "var(--auth-primary)",
          border: "var(--auth-border)"
        }
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
