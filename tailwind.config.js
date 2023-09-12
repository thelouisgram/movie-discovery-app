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
        rose700: 'hsl(353, 85%, 38%)'
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