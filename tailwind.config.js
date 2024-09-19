/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // trang
        primary: "#ffffff",
        // den
        secondary: "#000000",
        // vang
        tertiary: "#d69c52 ",
        // xanh nhat
        bgPrimary: "rgb(20, 59, 54)",
        // den nhat
        bgSecondary: "#071513",
        // xanh dam
        bgTertiary: "#10302c",
        // opacity bg sidebar
        bgOpacity: "rgba(1, 1, 1, 0.8)",
        // Quality
        quality: "rgb(26, 71, 65)",
        // bg-new
        bgNew: "#7a4f4f",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        dancingscript: ["Dancing Script", "cursive"],
      },
      backgroundImage: {
        booking: "url('/src/assets/booking.jpg')",
      },
      screens: {
        "sr-530": "530px",
        "sr-950": "950px",
      },
    },
  },
  plugins: [],
};
