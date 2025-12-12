import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-200%)" },
        },
      },
    },
  },
};

export default config;
