/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        mono: ["var(--font-ibm)"],
        sans: ["var(--font-inter)"],
        serif: ["var(--font-indie-flower)"],
      },
      animation: {
        marqueeSmall: "marquee 90s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(20%)" },
          "24%": { transform: "translateX(-100%)" },
          "43%": { transform: "translateX(-200%)" },
          "62%": { transform: "translateX(-300%)" },
          "81%": { transform: "translateX(-400%)" },
          "100%": { transform: "translateX(-500%)" },
        },
      },
    },
  },
  plugins: [],
};
