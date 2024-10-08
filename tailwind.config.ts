import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // colors: {
    //   "body-background": "#414833",
    //   "panel-background": "#656d4a",
    //   "block-background": "#a4ac86",
    //   primary: "#ee9b00",
    //   danger: "#bb3e03",
    //   text: "#333d29",
    //   light: {
    //     100: "#c2c5aa",
    //     200: "#a68a64",
    //     300: "#a68a64"
    //   },
    // },
  },
  plugins: [],
};
export default config;
