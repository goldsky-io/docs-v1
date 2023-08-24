/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    "next/core-web-vitals",
    "eslint:recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
  },
  globals: {
    NodeJS: true,
  },
  env: {
    browser: true,
    es2017: true,
    node: true,
  },
};
