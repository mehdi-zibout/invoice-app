/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },
    extend: {
      colors: {
        "purple-400": "#7C5DFA",
        "purple-300": "#9277FF",
        "purple-600": "#1E2139",
        "purple-500": "#252945",
        "purple-200": "#7E88C3",
        "gray-100": "#F8F8FB",
        "gray-200": "#DFE3FA",
        "red-200": "#EC5757",
        "red-100": "#FF9797",
        "purple-100": "#888EB0",
        "purple-800": "#0C0E16",
        "purple-700": "#141625",
      },
      fontSize: {
        hl: [
          "2.25rem",
          { fontWeight: 700, letterSpacing: -1, lineHeight: "33px" },
        ],
        hm: [
          "1.5rem",
          { fontWeight: 700, letterSpacing: -0.75, lineHeight: "22px" },
        ],
        hs: [
          "0.9375rem",
          { fontWeight: 700, letterSpacing: -0.25, lineHeight: "24px" },
        ],

        hsv: [
          "0.9375rem",
          { fontWeight: 700, letterSpacing: -0.25, lineHeight: "15px" },
        ],

        body: [
          "0.8125rem",
          { fontWeight: 500, letterSpacing: -0.1, lineHeight: "18px" },
        ],

        bodyv: [
          "0.8125rem",
          { fontWeight: 500, letterSpacing: -0.25, lineHeight: "15px" },
        ],
      },
      boxShadow: {
        select: "0px 10px 20px 0px #48549F40",
      },
    },
  },
  plugins: [],
};
