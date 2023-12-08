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
        "mealshub-cream": "#FBD8AA",
        "mealshub-orange": "#F5A306",
        "mealshub-red": "#E44937",
        "mealshub-blue": "#0B828F",
        "mealshub-golden": "#E9C59B",
        "mealshub-greenpalet": "#D1DFDF",
      },
    },
  },
  plugins: [],
};
