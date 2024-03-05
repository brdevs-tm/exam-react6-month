// tailwind.config.js

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        padding: {
          default: "20px",
        },
        center: true,
      },
      maxWidth: {
        1600: "1600px",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      backgroundImage: {
        "home-header": "url('./src/assets/home-main.png')",
        "movie-show-open": "url('./src/assets/movie-shows-open.png')",
      },
      ...generateCustomValues("fontSize", 10, 100),
      ...generateCustomValues("spacing", 1, 1000),
      colors: {
        // Custom color palette
        "black-06": "#0F0F0F",
        "black-08": "#141414",
        "black-10": "#1A1A1A",
        "black-12": "#1F1F1F",
        "black-15": "#262626",
        "black-20": "#333333",
        "black-25": "#404040",
        "black-30": "#4C4C4C",
        "red-45": "#E50000",
        "red-50": "#FF0000",
        "red-55": "#FF1919",
        "red-60": "#FF3333",
        "red-80": "#FF9999",
        "red-90": "#FFCCCC",
        "red-95": "#FFE5E5",
        "red-99": "#FFFAFA",
        "gray-60": "#999999",
        "gray-65": "#A6A6A6",
        "gray-70": "#B3B3B3",
        "gray-75": "#BFBFBF",
        "gray-90": "#E4E4E7",
        "gray-95": "#F1F1F3",
        "gray-97": "#F7F7F8",
        "gray-99": "#FCFCFD",
        // Add more custom colors here
      },
    },
  },
  plugins: [],
};

function generateCustomValues(property, start, end) {
  const values = {};

  for (let i = start; i <= end; i++) {
    values[`${i}px`] = `${i}px`;
  }

  return {
    [property]: values,
  };
}
