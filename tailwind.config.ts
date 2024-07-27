import { Merienda } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#802BB1",
        secondary: "#2D283E",
        tertiary: {
          dark: "white",
          light: "#48D1CC",
        },
      },
      fontFamily: {
        merienda: ["Merienda", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
