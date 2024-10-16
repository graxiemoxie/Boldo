import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/_app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-gray": "#F1F1F1",
        "dark-blue": "#0A2640",
        green: "#65E4A3",
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: "#C4C4C4",
        "gray-2": "#777777"
      },
      fontFamily: {
        manrope: 'Manrope',
        opensans: 'Open Sans',
      },
      maxWidth: {
        80: '1200px'
      },
      backgroundImage: {
        logoWall: "linear-gradient(90deg, #0A2640 0%, rgba(10, 38, 64, 0.109375) 31.6%, rgba(10, 38, 64, 0) 72.89%, #0A2640 97.87%)",
         'customer-connect': "url('/images/customer-connect-img.jpg')",
      },
      boxShadow: {
        'custom': '0px 4px 32px 0px #0000001F',
        'custom-2': '0px 4px 32px 0px #00000014',
        'custom-3': '0px 12px 32px 0px #0000001F'

      },
      lineHeight: {
        56: "56px",
        72: "72px"
      },
      borderRadius: {
        56: "56px"
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 20s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
