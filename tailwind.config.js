/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,vue}",
    "./src/*.{js,jsx,ts,tsx,vue}",
    "./public/**/*.html",
    "./src/*.{js,jsx,ts,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        primary: {
          DEFAULT: "#59ADA0",
          80: "#7ABDB3",
          60: "#9BCEC6",
          40: "#BDDED9",
          20: "#DEEFEC",
          10: "#EEF7F6",
        },
        secondary: {
          DEFAULT: "#224D46",
          80: "#4E716B",
          60: "#7A9490",
          40: "#A7B8B5",
          20: "#D3DBDA",
          10: "#E9EDED",
        },
        gray: {
          100: "#FAFBFF",
          200: "#F4F5FA",
          250: "#F0F2F4",
          300: "#D6DADE",
          400: "#ACB2B8",
          500: "#666B70",
          600: "#484C4E",
          700: "#353839",
          800: "#FAFBFF",
          900: "#FAFBFF",
        },
        blue: { DEFAULT: "#0C66E4", dark: "#44546F", light: "#E9F2FF" },
        red: { DEFAULT: "#CA3521", light: "#FFEDEB" },
        green: { DEFAULT: "#1F845A", light: "#DFFCF0" },
        purple: { DEFAULT: "#6E5DC6", light: "#F3F0FF" },
        yellow: { DEFAULT: "#E2B203", light: "#FFF7D6" },
      },
      width: {
        sidebar: "320px",
      },
      minWidth: {
        sidebar: "300px",
        "1/3": "33.333333%",
      },
      maxHeight: {
        "95vh": "95vh",
        "80vh": "80vh",
        "70vh": "70vh",
        "60vh": "60vh",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
    },
  },
  variants: {
    extend: {
      dropShadow: {
        DEFAULT: "5px 0px 20px rgba(0, 0, 0, 0.25);",
      },
    },
  },
  plugins: [],
};
