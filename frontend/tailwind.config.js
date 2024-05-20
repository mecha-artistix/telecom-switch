/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        k_dark_gray: "rgba(115, 115, 115, 1)",
        k_light_gray: "rgba(209, 209, 209, 1)",
        k_blue: "rgba(28, 119, 246, 1)",
        k_light_blue: "rgba(28, 119, 246, 0.05)",
        k_blue_hover: "rgba(28, 119, 246, 0.7)",
        k_dark_charcol: "rgba(51, 51, 51, 1)",
      },
    },
  },
  plugins: [],
};
