/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        eco: {
          bg: "#f5f7f6",
          panel: "#ffffff",
          line: "#dbe4de",
          green: "#124734",
          greenDark: "#0d3628",
          greenSoft: "#d8efe3",
          text: "#101a2a",
          muted: "#617086",
        },
      },
      boxShadow: {
        card: "0 18px 40px rgba(17, 24, 39, 0.06)",
        soft: "0 12px 24px rgba(18, 71, 52, 0.12)",
      },
      borderRadius: {
        panel: "1.25rem",
      },
    },
  },
  plugins: [],
};
