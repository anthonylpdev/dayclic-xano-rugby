import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "background/primary": "#0f0f12",
      "background/secondary": "#19191f",
      "background/hover": "#24242d",
      "background/accent": "#2d3cff",
      "content/primary": "#fcfcfc",
      "content/secondary": "#a1a1a1",
      "border/secondary": "#25252e",
      "border/primary": "#47474c",
      transparent: "transparent",
    },
    fontSize: {
      base: "1rem",
      lg: "1.5rem",
    },
    fontFamily: {
      roboto: "Roboto",
    },
    borderRadius: {
      none: "0",
      xs: "0.3125rem",
      sm: "1rem",
      default: "5rem",
    },
  },
  plugins: [],
};
export default config;
