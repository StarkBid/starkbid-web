import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        purple: "#8C62F2",
        ash: "#8E9BAE",
        green: "#54BD48",
        red: "#ED434C",
        deepGray: "#1C1D1F",
        darkGray: "#272729",
        true_black: "#101213",
        ghost_white: "#FFFFFF99",
        misty_white: "#FFFFFFE5",
        text_grey: "#414651",
        soft_grey: "#A1A1A1",
      },
      fontSize: {},
    },
  },
  plugins: [],
} satisfies Config;
