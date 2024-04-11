/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit", // activates Just-in-Time mode
  prefix: "", // adds 'tw-' prefix to the classes
  content: ["./**/*.html", "./**/*.{vue,js,ts,jsx,tsx}"], // update this path if needed, include *.php
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui"],
        roboto: ["Roboto", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
        nexaheavy: ['"Nexa Heavy"'],
        nexabold: ['"Nexa Bold"'],
        nexaregular: ['"Nexa Regular"'],
        nexalight: ['"Nexa Light"'],
        kommissarCondensed: ['"Kommissar Condensed"'],
        ubuntuRegular: ["Ubuntu Regular"],
        ubuntuLight: ["Ubuntu Light"],
        ubuntuBold: ["Ubuntu Bold"],
        ubuntuMedium: ["Ubuntu Medium"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
