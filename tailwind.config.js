/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#1688d6",
          150: "#0362BB",
          100: "#198CDC",
          200: "#0000ff",
          300: "#0f75bc96",
          400: "#1C469C",
          500: "#428BCA",
          600: "#313993",
          700: "#7270ff",
          800: "#1377bd",
          900: "#cfebff",
        },
        black: {
          100: "#898B8D",
          200: "#111",
          300: "#444",
          400: "#ced4da",
        },
        white: {
          100: "#ffffff36",
          200: "#ffffff",
          300: "#fff8dc",
          400: "#999",
          500: "#e7e7e7",
          600: "#f7f5eb;",
          700: "#F7F5EB",
          800: "#ddd",
        },
        yellow: {
          100: "#FFEAB1",
          200: "#FFFCF0",
          300: "#e5ddbf",
        },
      },
    },
  },
  plugins: [],
};
