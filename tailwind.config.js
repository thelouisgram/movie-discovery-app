/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        white: 'hsl(0, 0%, 100%)',
        rose700: 'hsl(353, 85%, 38%)',
        gray400: 'hsl(220.43, 13.91%, 64.31%)',
        gray900: 'hsl(217, 29.4%, 10.8%)',
        pink100: 'hsl(346, 55%, 94%, 0.4)',
        gray300: 'hsla(0, 0%, 20%, 0.8)',
        gray500: 'hsl(0, 0%, 40%, 1)',
        rose600: 'hsl(345, 83%, 41%, 0.7)',
        pink200: 'hsl(345, 83%, 41%, 0.2)',
      },
    },
    screens: {
			xs: '375px',
			ss: '620px',
			sm: '768px',
			md: '1200px',
			lg: '1440px',
			xl: '1700px'
		},
  },
  plugins: [],
}