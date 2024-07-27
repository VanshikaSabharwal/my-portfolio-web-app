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
        primary: "#7FFFD4",
        secondary: "#F2C641",
        tertiary: {
          dark: "#00FFFF",
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
