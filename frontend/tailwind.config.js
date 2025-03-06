/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#053839",
        secondary: "#CCE3E3",
        tertiary: "#ECF8F8",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill , minmax(200px,1fr))",
      },
    },
  },
  plugins: [],
};
