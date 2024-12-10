/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        steelblue: {
          "100": "#2b7aab",
          "200": "#045384",
        },
        gainsboro: "#d9d9d9",
        black: "#000",
        bisque: "#ffe4ca",
        dimgray: "#5e5e5e",
        aliceblue: "#e7f1ff",
        burlywood: "#f7bd83",
      },
      spacing: {},
      fontFamily: {
        heebo: "Heebo",
      },
    },
  },
  // corePlugins: {
  //   preflight: false,
  // },
};
