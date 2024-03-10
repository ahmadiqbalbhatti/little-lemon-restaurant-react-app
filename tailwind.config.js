/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      primary1: "#F4CE14",
      primary2: "#495E57",
      secondary1: "#EE9972",
      secondary2: "#FBDABB",
      highLight1: "#EDEFEE",
      highLight2: "#333333",
    },

    fontFamily: {
      sans: ['Karla', 'sans-serif'],
      serif: ['Markazi Text', 'serif'],
    },
    extend: {

    },
  },
  plugins: [],
}
