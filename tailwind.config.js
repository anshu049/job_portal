/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
          'accent-color':'#268D61',
          'secondary-color':'#000000',
          'header-color':'#ffffff',
          'body-color':'#F3F3F3',
          'tag-color':'#F2F2F2', 
      }
    },
  },
  plugins: [],
}

