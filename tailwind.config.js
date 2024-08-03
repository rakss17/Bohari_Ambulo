/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        "navbar-custom": "10vh",
        "navbar-horizontal-line-sm-custom": "6vh",
        "navbar-horizontal-line-md-custom": "7vh",
        "navbar-horizontal-line-lg-custom": "8vh",
        "navbar-horizontal-line-xl-custom": "9vh",
        "navbar-horizontal-line-2xl-custom": "10vh",
        "navbar-logo-sm-custom": "8vh",
        "navbar-logo-md-custom": "10vh",
        "navbar-logo-lg-custom": "12vh",
        "navbar-logo-xl-custom": "14vh",
        "navbar-logo-2xl-custom": "16vh",
      },
      backgroundColor: {
        "darkmode-bgcolor": "#121212",
      },
    },
  },
  plugins: [],
};
