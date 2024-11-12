/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        'color-primary': '#fff',
        'color-primary-red': '#ef4444',
        'color-primary-black': '#000000',
      }
    },
    container:{
      center:true,
      padding:{
        default:'20px',
        md:'px'
      }
    }
  },
  plugins: [],
}

