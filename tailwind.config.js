/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*{html,js,jsx}'
  ],
  theme: {
    colors: {
      ...colors,
    }
  },
};
