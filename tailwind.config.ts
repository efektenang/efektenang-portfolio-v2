import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      textColor: {
        "base-color": "#2191FB",
        "primary-color": "#3696B6",
        danger: "#F33A3A",
        success: "#39B429",
        pending: "#FD7900",
      },
      backgroundColor: {
        "base-color": "#131313",
        "primary-color": "#3696B6",
        "primary-danger": "#F33A3A1A",
        "primary-success": "#39B4291A",
        "primary-pending": "#FD79001A",
      },
      borderColor: {
        "base-color": "#2191FB",
      },
      fontFamily: {},
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [],
};
export default config;
