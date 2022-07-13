/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  important: "#root",
  darkMode: "media",
  corePlugins: {
    // Remove Tailwind CSS's preflight style so it can use the MUI's preflight instead (CssBaseline).
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        black: "rgb(28 29 31)",
      },
      boxShadow: {
        "3xl": "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
      },
    },
  },
  plugins: [],
};
