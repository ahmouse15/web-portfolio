/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

const defaultWeight = 400;
const hoverWeight = defaultWeight+100;

const ghostWeight = 800;

let ghostBase = colors.zinc;

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'body': 'url("/background.jpg")',
        },
      borderWidth: {
        sm: '1px',
        md: '1.5px',
        lg: '2px'
      },
      colors: {
        primary: {
          DEFAULT: colors.orange[defaultWeight],
          hover: colors.orange[hoverWeight]
        },
        secondary: {
          DEFAULT: colors.sky[defaultWeight],
          hover: colors.sky[hoverWeight]
        },
        tertiary: {
          DEFAULT: colors.blue[defaultWeight],
          hover: colors.blue[hoverWeight]
        },
        ghost: {
          DEFAULT: ghostBase[ghostWeight],
          light: ghostBase[ghostWeight-100]
        },
        dark: {
          DEFAULT: ghostBase[ghostWeight]
        },
        light: {
          DEFAULT: ghostBase[100]
        }
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("@designbycode/tailwindcss-text-glitch"),
    require("@designbycode/tailwindcss-text-stroke"),
    require("@designbycode/tailwindcss-conic-gradient")
  ],
}
