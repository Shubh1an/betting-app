/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    
  ],
  
  theme: {
    transitionTimingFunction: {
      'in-expo': 'cubic-bezier(.36,-0.01,0,.77)',
      'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    
    extend: {
      backgroundImage: {
        'game': "url('./src/assets/images/download.jpg')",
      },
      colors:{
        "grey-light":"rgba(148 163 184 /.5)"
      }
    },
  },
  plugins: [ require('flowbite/plugin')],
}


