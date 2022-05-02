module.exports = {
  root: true,
  env: {
    node: true,
    browser: true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended"
  ],
  rules: {
    "@typescript-eslint/no-var-requires": 0
  },
  settings: {
    resct: {
      pragma: "React",
      fragment: "Fragment",
      version: "detect"
    }
  }
};