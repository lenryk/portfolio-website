const nextConfig = require("eslint-config-next/core-web-vitals");

module.exports = [
  ...nextConfig,
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx,mts,cts}"],
    rules: {
      "react/jsx-no-comment-textnodes": "off",
      "react/no-unescaped-entities": "off",
    },
  },
];
