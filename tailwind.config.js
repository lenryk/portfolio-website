/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      spacing: {
        4.5: "1.125rem",
      },
    },
    colors: {
      // https://chir.ag/projects/name-that-color/
      primary: "#050909",
      "primary-midnight": "#0A1614",
      "primary-blue-charcoal": "#0F2320",
      secondary: "#D6F4E3",
      "secondary-lynch": "#7DA38F",
      "secondary-keppel": "#4FA985",
      "secondary-indigo": "#39D99C",
      "accent-atomic-tangerine": "#F2C14E",
      "accent-turquoise": "#2FBF9A",
      "accent-tonys-pink": "#E28B7A",
      "accent-lavender": "#D5B15A",
      lines: "#1F2F2B",
      "gradient-indigo": "#39D99C",
      "gradient-turquoise": "#2FBF9A",
      "main-bg": "#040807",
      button: "#16231F",
      "button-hover": "#21332E",
      "button-primary": "#F2C14E",
      "button-primary-hover": "#F5D27A",
      "button-ghost": "transparent",
    },
    fontFamily: {
      sans: ["var(--font-fira)"],
    },
  },
  plugins: [],
};
