import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Here is where we add your new fancy fonts
        serif: ["var(--font-playfair)", "serif"], 
        sans: ["var(--font-lato)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;