/** @type {import('tailwindcss').Config} */
let colors = require('tailwindcss/colors');

delete colors['lightBlue'];
delete colors['warmGray'];
delete colors['trueGray'];
delete colors['coolGray'];
delete colors['blueGray'];
colors = { ...colors, ...{ transparent: 'transparent' } }

module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}",
			"./components/**/*.{js,ts,jsx,tsx}",
			"./public/index.html",
			"./src/**/*.{html,js}",],
	theme: {
		colors
	},
};
