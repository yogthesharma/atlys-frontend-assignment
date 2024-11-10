/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "warning-primary": "#E29A2D",
        "warning-secondary": "#FFC267",
        "success-primary": "#4CAF79",
        "success-secondary": "#2DD179",
        "disabled-gray": "#F5F5F5",
        "title-grey": " #CDCDCD",
        "disabled-gray-border": "#D3D3D3",
        "radio-main": "#66A3FF",
        "card-border": "#DFDFDF",
        "card-title": "#A5A5A5",
      },
      borderWidth: {
        "l-1": "0 0 0 0.5px",
        "r-1": "0 0.5px 0 0",
        1: "0.5px",
      },
      borderRadius: {
        "border-textfield": "15px",
      },
      boxShadow: {
        "card-shadow": "0px 0px 6px 2px #0000000D",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".rounded-custom-important": { borderRadius: "15px !important" },
        ".bold-border": { borderWidth: "3px !important" },
        ".error-textfield": {
          borderColor: "#E57373",
        },
      });
    },
  ],
};
