/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        "Softblue": "hsl(215, 51%, 70%)",
        "Cyan": "hsl(178, 100%, 50%)",
        "blue-main-BG": "hsl(217, 54%, 11%)",
        "blue-card-BG": "hsl(216, 50%, 16%)",
        "blue-line": "hsl(215, 32%, 27%)",
        "White": "hsl(0, 0%, 100%) ",
      },
    },
  },
  plugins: [],
};
