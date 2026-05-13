import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#030407",
        panel: "#0b0f1a",
        line: "rgba(255,255,255,0.12)"
      },
      boxShadow: {
        glow: "0 0 48px rgba(73, 132, 255, 0.22)",
        "card-glow": "0 24px 80px rgba(20, 31, 69, 0.36)"
      }
    }
  },
  plugins: []
};

export default config;
