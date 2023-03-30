/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
		'./layouts/**/*.{js,ts,jsx,tsx}',
		'./landing-sections/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				'primary': '#009FA1',
				'lightGrey': '#F9F9F9',
				'darkGrey': '#4C4C4C',
			},
		},
	},
	plugins: [],
};
