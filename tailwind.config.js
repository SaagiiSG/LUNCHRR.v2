/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      transparent:'transparent',
      pink:{
        primary:'#ca53ba',
        accent:'#b26caf'
      },
      background:'#30324a',
      white:"#f5f5f5"
    }
  },
  plugins: [],
}

