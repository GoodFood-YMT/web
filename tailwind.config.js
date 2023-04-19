/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        dmSans: ["var(--dmSans-font)", "sans-serif"],
        poppins: ["var(--poppins-font)", "sans-serif"],
      },
    },
  },
  plugins: [],
  safelist: [
    "text-xs",
    "text-sm",
    "text-base",
    "text-md",
    "text-lg",
    "text-xl",
    "text-2xl",
    "text-3xl",
    "text-4xl",
    "text-5xl",
    "text-6xl",
  ],
};
