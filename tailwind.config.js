/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    colors: {
      // https://chir.ag/projects/name-that-color/
      'primary': '#01080E',
      'primary-midnight': '#011627',
      'primary-blue-charcoal': '#011221',
      'secondary': '#FFFFFF',
      'secondary-lynch': '#607B96',
      'secondary-keppel': '#3C9D93',
      'secondary-indigo': '#4D5BCE',
      'accent-atomic-tangerine': '#4D5BCE',
      'accent-turquoise': '#4D5BCE',
      'accent-tonys-pink': '#E99287',
      'accent-lavender': '#C98BDF',
      'lines': '#1E2D3D',
      'gradient-indigo': '#4D5BCE',
      'gradient-turquoise': '#43D9AD',
    },
  },
  plugins: [],
}