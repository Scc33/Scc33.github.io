module.exports = {
  env: {
    browser: true,
    es2021: true,
    "vitest-globals/env": true
  },
  plugins: ["vitest", "@typescript-eslint", "svelte", "playwright"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:svelte/recommended"
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  ignorePatterns: ["node_modules", "playwright.config.js"],
  rules: {
    // Basic JavaScript Rules
    eqeqeq: ["error", "always"], // Enforce strict equality
    "no-unused-vars": "warn", // Warn about variables that are declared but not used
    "no-console": "warn", // Warn about console.log statements
    "no-debugger": "error", // Disallow debugger statements
    "no-var": "error", // Require let or const instead of var

    // Best Practices
    curly: "error", // Require curly braces for all control statements
    "dot-notation": "error", // Encourage dot notation usage when possible
    yoda: "error", // Disallow Yoda conditions

    // Stylistic Issues
    "brace-style": ["error", "1tbs", { allowSingleLine: true }], // Enforce one true brace style
    quotes: ["error", "double", { avoidEscape: true }], // Enforce the use of single quotes
    semi: ["error", "always"], // Require or disallow semicolons

    // TypeScript Specific Rules
    "@typescript-eslint/no-explicit-any": "warn", // Warn against usage of the any type
    "@typescript-eslint/explicit-function-return-type": "off" // Disable explicit return types for functions
  },
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
    },
    {
      files: ["*.ts"],
      parser: "@typescript-eslint/parser"
    }
  ]
};
