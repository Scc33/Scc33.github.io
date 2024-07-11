import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import globals from "globals";
import tsEslint from "typescript-eslint";
import vitest from "eslint-plugin-vitest";
import playwright from "eslint-plugin-playwright";

export default [
  js.configs.recommended,
  ...tsEslint.configs.recommended,
  eslintConfigPrettier,
  {
    ...playwright.configs["flat/playwright"],
    files: ["tests/**"]
  },
  vitest.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: { ...globals.node, ...globals.browser },
      parserOptions: {
        extraFileExtensions: [".svelte"]
      }
    },
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
    }
  },
  {
    ignores: [
      "build",
      "package",
      "coverage",
      "node_modules",
      "playwright.config.js"
    ]
  }
];
