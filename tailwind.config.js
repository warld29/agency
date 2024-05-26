/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(), // Add Flowbite content
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(), // Add Flowbite plugin
  ],
};
// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
