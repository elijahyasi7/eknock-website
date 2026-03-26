import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        burgundy: "#6b1d2a",
        cobalt: "#1a3a6b",
        emerald: "#1a5c3a",
        gold: "#c9a84c",
        "gold-light": "#e2c97e",
        "dark-bg": "#0d0d0d",
        "dark-card": "#141414",
        "dark-border": "#2a2a2a",
      },
      fontFamily: {
        heading: ["Cinzel", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
