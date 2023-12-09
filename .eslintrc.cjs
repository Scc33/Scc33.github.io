module.exports = {
  env: {
    browser: true,
    es2021: true,
    "vitest-globals/env": true
  },
  plugins: ["vitest"],
  extends: ["eslint:recommended", "plugin:svelte/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  ignorePatterns: ["node_modules", "playwright.config.js"],
  overrides: [
    {
      files: ["tests/**"],
      extends: ["plugin:playwright/recommended"],
      rules: {
        "playwright/no-skipped-test": "off"
      }
    },
    {
      files: ["src/**"],
      extends: ["plugin:vitest/all", "plugin:vitest-globals/recommended"]
    }
  ]
};
