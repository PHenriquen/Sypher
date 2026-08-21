import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        sypher: {
          ink: "#111216",
          muted: "#6F7480",
          line: "#E8E9ED",
          soft: "#F5F6F8",
          paper: "#FFFFFF",
        },
      },
      boxShadow: {
        template: "0 24px 80px rgba(22, 26, 35, 0.10)",
        card: "0 12px 36px rgba(22, 26, 35, 0.08)",
      },
      borderRadius: {
        template: "28px",
      },
    },
  },
  plugins: [],
};

export default config;
