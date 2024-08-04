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
      width: {
        "navbar-dummy-width": "5vw",
      },
      backgroundColor: {
        "darkmode-bgcolor": "#121212",
      },
      margin: {
        "navbar-buttons-margin-top-custom": "25vh",
        "navbar-buttons-margin-left-custom": "33vw",
      },
      padding: {
        "navbar-buttons-padding-top-custom": "7.5vh",
      },
      inset: {
        1: "0.25rem",
        2: "0.5rem",
        3: "0.75rem",
        4: "1rem",
        5: "1.25rem",
        6: "1.5rem",
        8: "2rem",
        10: "2.5rem",
        12: "3rem",
        16: "4rem",
        20: "5rem",
        24: "6rem",
        32: "8rem",
        40: "10rem",
        48: "12rem",
        56: "14rem",
        64: "16rem",
        68: "20rem",
        70: "22rem",
        auto: "auto",
        // percentages
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "3/4": "75%",
        full: "100%",
      },
    },
  },
  plugins: [],
};
