/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      main: "#FFE489",
      blue: "#45A2BC",
      black: "#1b1b1b",
      gray: "#B9B9B9",
      white: "#fffafa",
      beige: "#f3ece6",
      green: "#1B462B",
      darkBlue: "#279EFF",
      skyBlue: "#0C356A",
      red: "#F07054",
    },
  },
  plugins: [],
};
