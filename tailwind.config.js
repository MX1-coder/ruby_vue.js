module.exports = {

  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  
   darkMode: false, // or 'media' or 'class'
   theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    },

    fontFamily: {
      kanit: ["Kanit", "sans-serif"],
      poppins :["Poppins", "sans-serif"],
      Nunito:["Nunito", "sans-serif"],
      Inter:[ "Inter", "sans-serif"],
      DMSans:["DM Sans", "sans-serif"]
      
    },
    // fontWeight: {
    //   thin: 100,
    //   light: 300,
    //   normal: 400,
    //   medium: 500,
    //   semibold: 600,
    //   bold: 700,
    //   extrabold: 800,
    //   black: 900,
    // },
     extend: {},
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }

