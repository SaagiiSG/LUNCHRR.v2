/** @type {import('tailwindcss').Config} */

const {nextui} = require("@nextui-org/react");


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors:{
    //   transparent:'transparent',
    //   pink:{
    //     primary:'#ca53ba',
    //     accent:'#b26caf'
    //   },
    //   background:'#30324a',
    //   white:"#f5f5f5"
    // }
  },
  darkMode: "class",
  plugins: [nextui()],
}

