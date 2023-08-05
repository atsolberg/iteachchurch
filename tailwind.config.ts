import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0066cc",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwind-scrollbar"),
    // Bootstrap Grid
    require("tailwind-bootstrap-grid")({}),
  ],

  corePlugins: {
    container: false, // turned off in order to add bootstrap style grid system
  },
} satisfies Config;
