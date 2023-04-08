/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'ebl-primary': 'rgba(58, 103, 177, 1)',
        'ebl-primary2': 'rgba(0, 151, 215, 1)',
        'ebl-secondary': 'rgba(237, 190, 56, 1)',
        'blacks4': '#5C5F70',
        'light-blue': 'rgba(156, 179, 216, 0.93)',
        'dark-blue': '#3A67B1',
        'second-primary': 'rgba(0, 151, 215, 1)',
        'ebl-black': 'rgba(10, 15, 41, 1)',
        'blacks2': 'rgba(173, 175, 184, 1)',
        'tertiary1': 'rgba(170, 222, 209, 1)',
        'blacks3': 'rgba(132, 135, 148, 1)',
        'off-black': 'rgba(65, 64, 66, 1)',
}
    },
  },
  plugins: [],
}
