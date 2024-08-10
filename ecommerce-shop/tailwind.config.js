/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        orange: "#FB5C03",
        blue: "#011F9E",
      },
    },
  },
  plugins: [],
};
