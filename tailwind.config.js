/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        '100': '26rem',
        '128': '32rem',
      },
      width: {
        '128': '32rem',
        '144': '36rem',
        '160': '40rem',
      }
    },
  },
  plugins: [],
}

