/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "Helvetica", "sans-serif"],
        nunito: ["nunito", "sans-serif", "sans"],
      },
      colors: {
        "plantix-yellow": "#F29F05",
        "plantix-light-green": "#7DA83B",
        "plantix-dark-green": "#5FA13B",
        "plantix-blue": "#0B828F",
      },
    },
  },
  plugins: [],
};
