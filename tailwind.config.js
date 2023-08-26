/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {

    screens: {
      'vsm': '1px',
      sm: '375px',
      'nsm': '720px',
      md: '950px',
      lg: '1440px',
      xl: '1540px',
    },

    extend: {
      colors: {      
        'light-reds': 'hsl(356, 100%, 66%)', //Added s at the end of every name to avoid clashes
        'very-light-reds': 'hsl(355, 100%, 74%)',
        'very-dark-blues': 'hsl(208, 49%, 24%)',
        'whites': 'hsl(0, 0%, 100%)',
        'grayish-blues': 'hsl(240, 2%, 79%)',
        'very-dark-grayish-blues': 'hsl(207, 13%, 34%)',
        'very-dark-black-blues': 'hsl(240, 10%, 16%)' ,
        'very-light-reds-2': 'hsl(13, 100%, 72%)',
        'light-reds-2': 'hsl(353, 100%, 62%)',
        'very-dark-gray-blues': 'hsl(237, 17%, 21%)',
        'very-dark-desaturated-blues': 'hsl(237, 23%, 32%)',        
      },
      fontFamily: {
        overpass: ['Overpass'],
        ubuntu: ['Ubuntu']
      }
    },
  },
  plugins: [],
}

