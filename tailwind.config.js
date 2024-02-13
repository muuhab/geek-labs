/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter'],
        poppins:['Poppins'],
        sans:['Nunito Sans']
      },
      colors:{
        btn:"#554DB7",
        grad:'linear-gradient(#667EEA, #764BA2)',
        accent:'#887EFF',
        main:'#181818',
        'main-light':'#212121',
        secondary:'#9089DC',
        border:'#D5D5D5',
        'custom-black':'#121213'
      }
    },
  },
  plugins: [],
}

