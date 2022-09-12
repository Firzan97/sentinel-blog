module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ["next"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json"]
  },
  plugins: ["react"],
  rules: {
    quotes: [2, "double", { avoidEscape: true }],
    "comma-dangle": ["error", "never"],
    "@next/next/no-img-element": "off"
  }
};
