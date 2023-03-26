/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: { max: "400px" },
      // => @media (max-width: 400px) { ... }

      md: { max: "820px" },
      // => @media (max-width: 1000px) { ... }
    },
    extend: {
      width: {
        90: "90%",
      },
      spacing: {
        0: 0,
        "1/2": "50%",
        "300px": "300px",
        "30px": "30px",
        "50px": "50px",
        "42%": "42%",
        "35%": "35%",
        76: "300px",
      },
      minHeight: {
        own: "24em",
      },
      colors: {
        bgimage: "#185a9d",
        bgGra1: "#43cea2",
        bgGra2: "#185a9d",
        light: "#aaa",
      },
    },
  },
  plugins: [],
};
