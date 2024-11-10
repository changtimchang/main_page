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
        adpRed: "#d1291d",
        adpRedLight: "#c98f8b",
        adpBlack: "#524847",
        adpBlackLight: "#5c4240",
        
      },
    },
  },
  plugins: [],
};
export default config;
