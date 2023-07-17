/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html, js, ts, vue}", 
    "./src/**/*",
    "index.html"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-image': "url('https://images.unsplash.com/photo-1684690640456-381bc7183e86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1vZi10aGUtZGF5fHx8fGVufDB8fHx8fA%3D%3D&dpr=1&auto=format%2Ccompress&fit=crop&w=1599&h=594')",
      },
      colors: {
        'custom-gold': "#DAA520",
      },
      shadow: {
        'custom-color':"filter: drop-shadow(0.1em 0.1em 0.2em #DAA520)",
      },

    },
  },
  plugins: [],
  darkMode: true,
}
