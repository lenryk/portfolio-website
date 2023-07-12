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
      primary: "#01080E",
      "primary-midnight": "#011627",
      "primary-blue-charcoal": "#011221",
      secondary: "#FFFFFF",
      "secondary-lynch": "#607B96",
      "secondary-keppel": "#3C9D93",
      "secondary-indigo": "#4D5BCE",
      "accent-atomic-tangerine": "#FEA55F",
      "accent-turquoise": "#43D9AD",
      "accent-tonys-pink": "#E99287",
      "accent-lavender": "#C98BDF",
      lines: "#1E2D3D",
      "gradient-indigo": "#4D5BCE",
      "gradient-turquoise": "#43D9AD",
      "main-bg": "#010C15",
      button: "#1C2B3A",
      "button-hover": "#263B50",
      "button-primary": "#FEA55F",
      "button-primary-hover": "#FFAC6B",
      "button-ghost": "transparent",
    },
    fontFamily: {
      sans: ["var(--font-fira)"],
    },
  },
  plugins: [],
};
