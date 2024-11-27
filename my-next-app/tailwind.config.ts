import type { Config } from "tailwindcss";

export default {
  corePlugins: {
    preflight: false, // Disable Tailwind's CSS reset
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  plugins: [],
} satisfies Config;
