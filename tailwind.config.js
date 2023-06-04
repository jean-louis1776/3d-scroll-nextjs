/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        "light-gray": "hsl(219, 4%, 32%)",
        "dark-gray": "hsl(219, 4%, 24%)",
      },
      backgroundColor: {
        "frame-bg": "rgba(0, 0, 0, .87);",
      },
      backgroundImage: {
        "1-bg": "url(/1.jpg)",
        "2-bg": "url(/2.jpg)",
        "3-bg": "url(/3.jpg)",
        "4-bg": "url(/4.jpg)",
        "5-bg": "url(/5.jpg)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
}
