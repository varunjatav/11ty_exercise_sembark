const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./_includes/**/*.{njk,md}","./*.{njk,md,html}",],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Noto Sans"', ...defaultTheme.fontFamily.sans],
      },
      backgroundImage:{
        'hero-Img' : "url('https://www.odtravels.in/playground/themes/images/odisha-banner/odisha-puri-tour-banner.jpg')",
      },
      screens: {
        'mobile': '480px',
        // => @media (min-width: 480px) { ... }
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      backgroundColor:{
        gray: "#ededed",
        green: "#00ff00",
      },
      
      colors:{
        cyan1: "#00ffff",
        blue1: "#3b3bff",
        pink1: "#ff748c",
        yellow1: "#e6e600",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: 'class', // only generate classes
    })
  ],
  
}

